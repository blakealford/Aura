'use strict';

const {Pool} = require('pg');
const EndbSql = require('./sql');

module.exports = class EndbPostgres extends EndbSql {
	constructor(options = {}) {
		const {uri = 'postgresql://localhost:5432'} = options;
		super({
			dialect: 'postgres',
			async connect() {
				const pool = new Pool({connectionString: uri});
				return Promise.resolve(async (sqlString) => {
					const {rows} = await pool.query(sqlString);
					return rows;
				});
			},
			...options
		});
	}
};
