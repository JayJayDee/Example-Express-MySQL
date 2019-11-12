const { initMySQL } = require('./mysql');
const productRepo = require('./product');

module.exports = {
  initMySQL,
  productRepo
};