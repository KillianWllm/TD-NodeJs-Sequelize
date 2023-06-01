const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importez le module de connexion à la base de données
const { connectToDatabase } = require('./utils/database');

// Connectez-vous à la base de données
connectToDatabase();

// Importez les routes 
const productRoutes = require('./routes/productRoutes');
const extrasRoutes = require('./routes/extraRoutes');
const userRoutes = require('./routes/userRoutes');
const tagRoutes = require('./routes/tagRoutes');
const commentRoutes = require('./routes/commentRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Utilisez les routes   
app.use(productRoutes);
app.use(extrasRoutes);
app.use(userRoutes);
app.use(tagRoutes);
app.use(commentRoutes);
app.use(cartRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});