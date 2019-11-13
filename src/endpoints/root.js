const { Router } = require('express');
const { productRepo } = require('../repositories');

const { wrapAsync } = require('./utils');

const root = Router();

root.get('/', wrapAsync(async (req, res, next) => {
  const selection = 'index';
  const products = await productRepo.selectAllProducts();
  res.render('index', { products, selection });
}));

module.exports = root;