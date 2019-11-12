const { Router } = require('express');

const product = Router();

product.get('/', (req, res, next) => {
  res.status(200).json({
    test2: 'test'
  });
});

product.get('s', (req, res, next) => {
  res.status(200).json([
    {
      test: 1
    },
    {
      test: 2 
    }
  ]);
});

module.exports = product;