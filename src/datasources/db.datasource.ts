import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
    "name": process.env.NAME,
    "connector": process.env.CONNECTOR,
    "url": "",
    "host": process.env.HOSTNAME,
    "port": process.env.PORT,
    "user": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DB_NAME
}

export class DbDataSource extends juggler.DataSource {
  static dataSourceName = 'db';

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
