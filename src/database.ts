import Knex from 'knex';
import { Model } from 'objection';
import initConfig from './config';

const config = initConfig();

export default () => {
  const knex = Knex({
    client: config.db.connection,
    connection: {
      host: config.db.host,
      user: config.db.username,
      port: config.db.port as number,
      password: config.db.password,
      database: config.db.name,
    },
  });

  Model.knex(knex);
};
