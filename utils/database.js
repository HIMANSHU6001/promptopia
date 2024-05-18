import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

const sequelize = new Sequelize(process.env.PGSQL_DATABASE, process.env.PGSQL_USER, process.env.PGSQL_PASSWORD, {
    host: process.env.PGSQL_HOST,
    dialect: 'postgres'
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

export default sequelize;