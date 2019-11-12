module.exports = ({ mandantory }) =>
  mandantory === true ?
    (key) => {
      if (!process.env[key]) {
        throw new Error(`environment variable not supplied: ${key}`);
      }
      return process.env[key];
    } :

    (key) => {
      if (!process.env[key]) return null;
      return process.env[key];
    };