const { Router } = require('express');

const root = Router();

root.get('/', (req, res, next) => {
  res.status(200).json({});
});

module.exports = root;