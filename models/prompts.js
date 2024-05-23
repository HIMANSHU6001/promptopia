import getSequelize from '@utils/database.js';
import { DataTypes } from 'sequelize';
import UserModel from './user.js';

const sequelize = await getSequelize();

var PromptModel = sequelize.define(
  'Prompt',
  {
    creator: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prompt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tag: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
  }
);
PromptModel.belongsTo(UserModel, { as: 'User', foreignKey: 'creator', targetKey: 'email' });
await sequelize.sync();


export default PromptModel;