const dotenv = require('dotenv');
const initConfig = require('./src/config');

dotenv.config();
const config = initConfig();

module.exports = {
  client: config.db.connection,
  connection: {
    host: config.db.host,
    user: config.db.username,
    port: config.db.port as number,
    password: config.db.password,
    database: config.db.name,
  },
};
