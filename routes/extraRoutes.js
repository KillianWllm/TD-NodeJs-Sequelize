const express = require('express');
const router = express.Router();

const { Extras } = require('../models/index');

router.get('/extras', async (req, res) => {
    try {
        const extras = await Extras.findAll();
        res.json(extras);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
