const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');

class Loyalty_card extends Model { }

Loyalty_card.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

}, {
    sequelize,
    modelName: 'loyalty_card',
    freezeTableName: true,
    timestamps: false
});

module.exports = Loyalty_card;