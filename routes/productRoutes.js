const express = require('express');
const router = express.Router();

const { Product } = require('../models/index');

router.get('/products/lasts', async (req, res) => {
    try {
        const products = await Product.findAll({
            order: [['price', 'ASC']],
            limit: 10,
            raw: true,
        });

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;