const { mysqlops } = require('./mysql');

const selectAllProducts = () =>
  mysqlops(async (con) => {
    const sql = 
    `
      SELECT 1
    `;
    const rows = await con.query(sql);
    console.log(rows);
  });