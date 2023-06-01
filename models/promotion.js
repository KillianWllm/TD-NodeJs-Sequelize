const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');

class Promotion extends Model { }

Promotion.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    taux: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: '1',
        allowNull: false,
    },

}, {
    sequelize,
    modelName: 'promotion',
    freezeTableName: true,
    timestamps: false
});


module.exports = Promotion;