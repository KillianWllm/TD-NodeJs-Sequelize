const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');

class Tags extends Model { }

Tags.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },

}, {
    sequelize,
    modelName: 'tags',
    freezeTableName: true,
    timestamps: false
});

module.exports = Tags;