const logger = (tag) => ({
  debug: (...args) => console.debug(tag, ...args),
  info: (...args) => console.info(tag, ...args),
  error: (...args) => console.error(tag, ...args)
});

module.exports = logger;