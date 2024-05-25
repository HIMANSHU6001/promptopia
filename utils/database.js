
import Sequelize from 'sequelize';
import { config } from 'dotenv';

let sequelize;

async function getSequelize() {
  if (!sequelize) {
    sequelize = new Sequelize(process.env.POSTGRES_DATABASE, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
      host: process.env.POSTGRES_HOST,
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false // added this line to fix certificate error
        }
      },
      pool: {
        max: 10
      }
    });
  }
  return sequelize;
}


export default getSequelize;