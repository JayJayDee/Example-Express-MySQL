const { createPool } = require('mysql2/promise');

const envLoader = require('../env-loader');
const log = require('../logger')('[mysql]');


let pool = null;

const mysqlops = async (opsFunc) => {
  try {
    const con = await pool.getConnection();
    return await opsFunc(con);
  } finally {
    con.release();
  }
};

const initMySQL = async () => {
  env = envLoader({ mandantory: true });

  pool = createPool({
    host: env('MYSQL_HOST'),
    port: env('MYSQL_PORT'),
    user: env('MYSQL_USER'),
    password: env('MYSQL_PASSWORD'),
    database: env('MYSQL_DATABASE'),
    connectionLimit: env('MYSQL_CONNECTION_LIMIT')
  });

  await pool.query('SELECT 1');
  log.info(`mysql connection established`);
};

module.exports = {
  initMySQL,
  mysqlops
};