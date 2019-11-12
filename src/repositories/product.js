const { mysqlops } = require('./mysql');

const selectAllProducts = () =>
  mysqlops(async (con) => {
    const sql = 
    `
      SELECT 1 AS a, 3 AS b
    `;
    const rows = await con.query(sql);
    console.log(rows);
  });

module.exports = {
  selectAllProducts
};