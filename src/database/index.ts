import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DATABASE } from '@config';
import { UserSeeder } from '@/database/seeders/user.seeder';

export const dbConnection = async () => {
  const dbConfig: DataSourceOptions = {
    type: 'postgres',
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    host: POSTGRES_HOST,
    port: +POSTGRES_PORT,
    database: POSTGRES_DATABASE,
    synchronize: true,
    logging: false,
    entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
    migrations: [join(__dirname, '../**/*.migration{.ts,.js}')],
    subscribers: [join(__dirname, '../**/*.subscriber{.ts,.js}')],
    /*cli: {
      entitiesDir: 'src/entities',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },*/
  };

  const datasource = new DataSource(dbConfig);
  await datasource.initialize();

  await new UserSeeder().run();
};
