import Sequelize from 'sequelize';
import { config } from 'dotenv';

let sequelize;

async function getSequelize() {
  if (!sequelize) {
    sequelize = new Sequelize(process.env.POSTGRES_URL,);
  }

  return sequelize;
}


export default getSequelize;