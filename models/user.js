const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const LoyaltyCard = require('./loyalty_card');

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    prenom: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    date_updated: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    loyalty_card_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

}, {
    sequelize,
    modelName: 'user',
    freezeTableName: true,
    timestamps: false
});

LoyaltyCard.hasMany(User, {
    foreignKey: 'loyalty_card_id',
});

module.exports = User;