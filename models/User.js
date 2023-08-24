const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init(
    {},
    {
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;