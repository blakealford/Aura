'use strict';

const EventEmitter = require('events');
const {Sql} = require('sql');

module.exports = class EndbSql extends EventEmitter {
	constructor(options = {}) {
		super();
		this.options = {
			table: 'endb',
			keySize: 255,
			...options
		};
		const db = new Sql(this.options.dialect);
		this.entry = db.define({
			name: this.options.table,
			columns: [
				{
					name: 'key',
					primaryKey: true,
					dataType: `VARCHAR(${Number(this.options.keySize)})`
				},
				{
					name: 'value',
					dataType: 'TEXT'
				}
			]
		});
		const connected = this.options
			.connect()
			.then(async (query) => {
				const createTable = this.entry.create().ifNotExists().toString();
				await query(createTable);
				return query;
			})
			.catch((error) => this.emit('error', error));
		this.query = async (sqlString) => {
			const query = await connected;
			if (query) return query(sqlString);
		};
	}

	async all() {
		const select = this.entry
			.select('*')
			.where(this.entry.key.like(`${this.namespace}:%`))
			.toString();
		const rows = await this.query(select);
		return rows;
	}

	async clear() {
		const del = this.entry
			.delete()
			.where(this.entry.key.like(`${this.namespace}:%`))
			.toString();
		await this.query(del);
	}

	async delete(key) {
		const select = this.entry.select().where({key}).toString();
		const del = this.entry.delete().where({key}).toString();
		const [row] = await this.query(select);
		if (row === undefined) return false;
		await this.query(del);
		return true;
	}

	async get(key) {
		const select = this.entry.select().where({key}).toString();
		const [row] = await this.query(select);
		if (row === undefined) return undefined;
		return row.value;
	}

	async has(key) {
		const select = this.entry.select().where({key}).toString();
		const [row] = await this.query(select);
		return Boolean(row);
	}

	async set(key, value) {
		let upsert;
		if (this.options.dialect === 'mysql') {
			value = value.replace(/\\/g, '\\\\');
		}

		if (this.options.dialect === 'postgres') {
			upsert = this.entry
				.insert({key, value})
				.onConflict({
					columns: ['key'],
					update: ['value']
				})
				.toString();
		} else {
			upsert = this.entry.replace({key, value}).toString();
		}

		return this.query(upsert);
	}
};
