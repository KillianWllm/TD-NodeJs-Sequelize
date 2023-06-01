const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const User = require('./user');
const Promotion = require('./promotion');

class Panier extends Model { }

Panier.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    promotion_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false,
    },

}, {
    sequelize,
    modelName: 'panier',
    freezeTableName: true,
    timestamps: false
});

Panier.belongsTo(User, {
    foreignKey: 'user_id',
});

Panier.belongsTo(Promotion, {
    foreignKey: 'promotion_id',
});

module.exports = Panier;