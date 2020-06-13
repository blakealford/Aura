'use strict';

const {createConnection} = require('mysql2/promise');
const EndbSql = require('./sql');

module.exports = class EndbMysql extends EndbSql {
	constructor(options = {}) {
		const {uri = 'mysql://localhost'} = options;
		super({
			dialect: 'mysql',
			async connect() {
				const connection = await createConnection(uri);
				return async (sqlString) => {
					const [row] = await connection.execute(sqlString);
					return row;
				};
			},
			...options
		});
	}
};
