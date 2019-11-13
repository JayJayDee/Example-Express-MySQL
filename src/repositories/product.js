const { mysqlops } = require('./mysql');

const selectAllProducts = () =>
  mysqlops(async (con) => {
    const sql = 
    `
      SELECT 
        *
      FROM
        product
      ORDER BY
        id DESC
    `;
    const [rows,] = await con.query(sql);
    return rows;
  });

module.exports = {
  selectAllProducts
};