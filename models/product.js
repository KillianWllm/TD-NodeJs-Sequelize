const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');

class Product extends Model { }

Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

}, {
    sequelize,
    modelName: 'product',
    freezeTableName: true,
    timestamps: false
});



module.exports = Product;