import pg from 'pg';
import Sequelize from 'sequelize';
let sequelize;

async function getSequelize() {
  if (!sequelize) {
    sequelize = new Sequelize("postgres://avnadmin:AVNS_18bBIN1vX-aMNOLF8-l@pg-31bd96b4-hk9797592893-07bd.h.aivencloud.com:22908/defaultdb", {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false // <<<< Add this line
        }
      }
    });
    // sequelize = new Sequelize(process.env.POSTGRES_DATABASE, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    //   host: process.env.POSTGRES_HOST,
    //   dialect: 'postgres',
    //   dialectOptions: {
    //     ssl: {
    //       require: true,
    //       rejectUnauthorized: false // added this line to fix certificate error
    //     }
    //   },
    //   pool: {
    //     max: 10
    //   }
    // });
  }
  return sequelize;
}


export default getSequelize;