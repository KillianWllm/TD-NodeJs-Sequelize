const express = require('express');
const router = express.Router();

const { Panier } = require('../models/index');

router.get('/cart', async (req, res) => {
    try {
        const panier = await Panier.findAll();
        res.json(panier);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;