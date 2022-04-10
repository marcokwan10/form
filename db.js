const Pool = require("pg").Pool;

const pool = new Pool({
	user: "marcokwan",
	password: "abcde",
	host: "localhost",
	port: 5432,
	database: "canoe",
});

module.exports = pool;
