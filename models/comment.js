const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [5, 350],
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            references: {
                model: 'User',
                key: 'id'
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            references: {
                model: 'Post',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'Comment',
    }
);

module.exports = Comment;