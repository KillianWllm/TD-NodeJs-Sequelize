const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const Product = require('./product');

class Extras extends Model { }

Extras.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    poid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    longeur: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    largeur: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

}, {
    sequelize,
    modelName: 'extras',
    freezeTableName: true,
    timestamps: false
});

Extras.hasOne(Product, {
    foreignKey: 'product_id',
    allowNull: false,
});

module.exports = Extras;