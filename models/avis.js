const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const Product = require('./product');
const User = require('./user');

class Avis extends Model { }

Avis.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'id',
        },
    },
    utilisateur_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
}, {
    sequelize,
    modelName: 'avis',
    freezeTableName: true,
    timestamps: false
});


Product.hasMany(Avis, {
    foreignKey: 'product_id'
});

User.hasMany(Avis, {
    foreignKey: 'utilisateur_id'
});

module.exports = Avis;
