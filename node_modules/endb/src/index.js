'use strict';

const EventEmitter = require('events');
const _get = require('lodash/get');
const _has = require('lodash/has');
const _set = require('lodash/set');
const _unset = require('lodash/unset');
const {parse, stringify} = require('buffer-json');

const load = (options) => {
	const adapters = {
		mongodb: './adapters/mongodb',
		mysql: './adapters/mysql',
		postgres: './adapters/postgres',
		postgresql: './adapters/postgres',
		redis: './adapters/redis',
		sqlite: './adapters/sqlite',
		sqlite3: './adapters/sqlite'
	};
	const validAdapters = Object.keys(adapters);
	if (options.adapter || options.uri) {
		const adapter = options.adapter || /^[^:]*/.exec(options.uri)[0];
		if (validAdapters.includes(adapter)) {
			const Adapter = require(adapters[adapter]);
			return new Adapter(options);
		}
	}

	return new Map();
};

/**
 * Simple key-value storage with support for multiple backends.
 * @extends EventEmitter
 */
class Endb extends EventEmitter {
	/**
	 * The options for Endb.
	 * @typedef {Object} EndbOptions
	 * @property {string} [uri] The connection URI for the driver.
	 * @property {string} [namespace='endb'] The namespace of the database.
	 * @property {string} [adapter] The storage adapter or driver to use.
	 * @property {*} [store=Map]
	 * @property {Function} [serialize=stringify] Data serialization function.
	 * @property {Function} [deserialize=parse] Data deserialization function.
	 * @property {string} [collection='endb'] The name of the collection. Only works for MongoDB.
	 * @property {string} [table='endb'] The name of the table. Only works for SQL-based databases.
	 * @property {number} [keySize=255] The maximum size of the keys of elements. Only works for SQL-based databases.
	 */

	/**
	 * @param {string|EndbOptions} [options={}] The options for Endb.
	 */
	constructor(options = {}) {
		super();

		/**
		 * The options the database was instantiated with.
		 * @type {EndbOptions}
		 */
		this.options = {
			namespace: 'endb',
			serialize: stringify,
			deserialize: parse,
			...(typeof options === 'string' ? {uri: options} : options)
		};

		if (!this.options.store) {
			this.options.store = load(this.options);
		}

		if (typeof this.options.store.on === 'function') {
			this.options.store.on('error', (error) => this.emit('error', error));
		}

		this.options.store.namespace = this.options.namespace;
	}

	/**
	 * Gets all the elements from the database.
	 * @return {Promise<any[]>} All the elements in the database.
	 */
	async all() {
		const {store, deserialize} = this.options;
		if (store instanceof Map) {
			const elements = [];
			for (const [key, value] of store) {
				elements.push({
					key: this._removeKeyPrefix(key),
					value: typeof value === 'string' ? deserialize(value) : value
				});
			}

			return elements;
		}

		const elements = [];
		const data = await store.all();
		for (const {key, value} of data) {
			elements.push({
				key: this._removeKeyPrefix(key),
				value: typeof value === 'string' ? deserialize(value) : value
			});
		}

		return elements;
	}

	/**
	 * Clears all elements from the database.
	 * @return {Promise<void>} Returns `undefined`.
	 */
	async clear() {
		const {store} = this.options;
		return store.clear();
	}

	/**
	 * Deletes an element from the database by key.
	 * @param {string} key The key(s) of the element to remove from the database.
	 * @return {Promise<boolean>} `true` if the element is deleted successfully, otherwise `false`.
	 * @example
	 * await endb.set('foo', 'bar'); // true
	 *
	 * await endb.delete('foo'); // true
	 */
	async delete(key, path = null) {
		if (path !== null) {
			const value = await this.get(key);
			_unset(value, path);
			const result = await this.set(key, value);
			return result;
		}

		key = this._addKeyPrefix(key);
		const {store} = this.options;
		return store.delete(key);
	}

	async entries() {
		const elements = await this.all();
		return elements.map(({key, value}) => [key, value]);
	}

	/**
	 * Finds a single item where the given function returns a truthy value.
	 * Behaves like {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find Array.prototype.find}.
	 * The database elements is mapped by their `key`. If you want to find an element by key, you should use the `get` method instead.
	 * See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get MDN} for more details.
	 * @param {Function} fn The function to execute on each value in the element.
	 * @return {Promise<*|void>} The first element in the database that satisfies the provided testing function. Otherwise `undefined` is returned
	 * @example
	 * await endb.find(v => v === 'bar'); // { key: 'foo', value: 'bar' }
	 * await endb.find(v => v.verified === true); // { key: 'profile', value: { ... } }
	 * await endb.find(v => v.desc === 'desc'); // undefined
	 */
	async find(fn) {
		const data = await this.all();
		for (const {key, value} of data) {
			if (fn(value, key)) return value;
		}

		return undefined;
	}

	/**
	 * Gets the value of an element from the database by key.
	 * @param {string} key The key of the element to get.
	 * @param {?string} [path] The path of the property to get from the value.
	 * @return {Promise<*|void>} The value of the element, or `undefined` if the element cannot be found in the database.
	 * @example
	 * const data = await endb.get('foo');
	 * console.log(data); // 'bar'
	 *
	 * // Using path feature
	 * await endb.get('profile', 'verified'); // false
	 */
	async get(key, path = null) {
		key = this._addKeyPrefix(key);
		const {store, deserialize} = this.options;
		const data = await store.get(key);
		const deserializedData =
			typeof data === 'string' ? deserialize(data) : data;
		if (deserializedData === undefined) return;
		if (path !== null) return _get(deserializedData, path);
		return deserializedData;
	}

	/**
	 * Checks whether an element exists in the database or not.
	 * @param {string} key The key of an element to check for.
	 * @param {?string} [path] The path of the property to check.
	 * @return {Promise<boolean>} `true` if the element exists in the database, otherwise `false`.
	 */
	async has(key, path = null) {
		if (path !== null) {
			const data = await this.get(key);
			return _has(data || {}, path);
		}

		key = this._addKeyPrefix(key);
		const {store} = this.options;
		const exists = await store.has(key);
		return exists;
	}

	/**
	 * Returns an array that contains the keys of each element.
	 * @return {Promise<string[]>} An array that contains the keys of each element.
	 */
	async keys() {
		const elements = await this.all();
		return elements.map(({key}) => key);
	}

	/**
	 * Sets an element to the database.
	 * @param {string} key The key of the element to set to the database.
	 * @param {*} value The value of the element to set to the database.
	 * @param {?string} [path] The path of the property to set in the value.
	 * @return {Promise<boolean>} Returns a boolean.
	 * @example
	 * await endb.set('foo', 'bar');
	 * await endb.set('total', 400);
	 * await endb.set('exists', false);
	 * await endb.set('profile', {
	 *   id: 1234567890,
	 *   username: 'user',
	 *   verified: true,
	 *   nil: null
	 * });
	 * await endb.set('todo', [ 'Add a authentication system.', 'Refactor the generator' ]);
	 *
	 * await endb.set('profile', false, 'verified');
	 * await endb.set('profile', 100, 'balance');
	 */
	async set(key, value, path = null) {
		const {store, serialize} = this.options;
		if (path !== null) {
			const value_ = await this.get(key);
			value = _set(value_ || {}, path, value);
		}

		key = this._addKeyPrefix(key);
		await store.set(key, serialize(value));
		return true;
	}

	/**
	 * Returns an array that contains the values of each element.
	 * @return {Promise<any[]>} Array that contains the values of each element.
	 */
	async values() {
		const elements = await this.all();
		return elements.map(({value}) => value);
	}

	_addKeyPrefix(key) {
		return `${this.options.namespace}:${key}`;
	}

	_removeKeyPrefix(key) {
		return key.replace(`${this.options.namespace}:`, '');
	}
}

module.exports = Endb;
module.exports.Endb = Endb;
