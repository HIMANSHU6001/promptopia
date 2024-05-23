import getSequelize from '@utils/database';
import { DataTypes } from 'sequelize';


const sequelize = await getSequelize();

var UserModel = sequelize.define(
  'User',
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
  }
);

await sequelize.sync();

export default UserModel;