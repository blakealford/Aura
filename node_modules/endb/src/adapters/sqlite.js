'use strict';

const {promisify} = require('util');
const {Database} = require('sqlite3');
const EndbSql = require('./sql');

module.exports = class EndbSqlite extends EndbSql {
	constructor(options = {}) {
		const {uri = 'sqlite://:memory:'} = options;
		const path = uri.replace(/^sqlite:\/\//, '');
		super({
			dialect: 'sqlite',
			async connect() {
				return new Promise((resolve, reject) => {
					const db = new Database(path, (error) => {
						if (error) {
							reject(error);
						} else {
							if (options.busyTimeout) {
								db.configure('busyTimeout', options.busyTimeout);
							}

							resolve(promisify(db.all.bind(db)));
						}
					});
				});
			},
			...options
		});
	}
};
