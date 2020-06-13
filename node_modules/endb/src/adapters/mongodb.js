'use strict';

const EventEmitter = require('events');
const {MongoClient} = require('mongodb');

module.exports = class MongoDB extends EventEmitter {
	constructor(options = {}) {
		super();
		this.options = {
			uri: 'mongodb://127.0.0.1:27017',
			collection: 'endb',
			...options
		};
		this.db = new Promise((resolve) => {
			MongoClient.connect(this.options.uri, (error, client) => {
				if (error !== null) return this.emit('error', error);
				const db = client.db();
				const collection = db.collection(this.options.collection);
				db.on('error', (error) => this.emit('error', error));
				collection.createIndex(
					{key: 1},
					{
						unique: true,
						background: true
					}
				);
				resolve(collection);
			});
		});
	}

	async all() {
		const collection = await this.db;
		return collection.find({key: new RegExp(`^${this.namespace}:`)}).toArray();
	}

	async clear() {
		const collection = await this.db;
		await collection.deleteMany({key: new RegExp(`^${this.namespace}:`)});
	}

	async delete(key) {
		if (typeof key !== 'string') return false;
		const collection = await this.db;
		const {deletedCount} = await collection.deleteOne({key});
		return deletedCount !== undefined && deletedCount > 0;
	}

	async get(key) {
		const collection = await this.db;
		const doc = await collection.findOne({key});
		return doc === null ? undefined : doc.value;
	}

	async has(key) {
		const collection = await this.db;
		const doc = await collection.findOne({key});
		return Boolean(doc);
	}

	async set(key, value) {
		const collection = await this.db;
		return collection.replaceOne({key}, {key, value}, {upsert: true});
	}
};
