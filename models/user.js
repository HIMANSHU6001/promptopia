
import sequelize from '../utils/database.js';
import { DataTypes } from 'sequelize';
const User = sequelize.define(
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
  },
);
sequelize.sync({force:true})

export default User;