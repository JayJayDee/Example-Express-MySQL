const express = require('express');
const dotenv = require('dotenv');
const { join } = require('path');

const log = require('./logger')('[index]');
const envLoader = require('./env-loader');
const { initMySQL } = require('./repositories');
const routers = require('./endpoints');

(async () => {
  dotenv.config();

  await initMySQL();

  env = envLoader({ mandantory: true });

  const app = express();
  app.set('views', join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.use('/product', routers.product);
  app.use('/', routers.root);

  app.listen(env('HTTP_PORT'), () => {
    log.info(`server started at port: ${env('HTTP_PORT')}`);
  });
})();