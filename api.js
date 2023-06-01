console.log('Go !')

// connection base de données

// j'inclus ma  librarie
const { Sequelize, DataTypes } = require('sequelize')

// la connexion avec ma base de données local en root qui s'appel shop
const sequelize = new Sequelize('shop', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


async function connection() {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');



    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connection()

// Modelisation de ma table product
const Product = sequelize.define("product", {
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT
}, {
    freezeTableName: true,
    timestamps: true
});

(async () => {
    await sequelize.sync({ alter: true });

    try {
        // Créer un produit en base
        const products = await Product.findAll({
            where: {
                title: {
                    [Op.like]: '%Apple%'
                },
                enabled: 1
            },
            order: [['createdAt', 'DESC']],
            limit: 5
        });


        products.forEach((product) => {
            console.log(`Titre: ${product.title}`);
            console.log(`Description: ${product.description}`);
        });




    } catch (error) {

    }


    // Code here
})();

