import Sequelize from 'sequelize';
import { config } from 'dotenv';

let sequelize;

async function getSequelize() {
  if (!sequelize) {
    sequelize = new Sequelize(process.env.PGSQL_DATABASE, process.env.PGSQL_USER, process.env.PGSQL_PASSWORD, {
      host: process.env.PGSQL_HOST,
      dialect: 'postgres'
    });
  }

  return sequelize;
}


export default getSequelize;