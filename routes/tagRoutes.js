const express = require('express');
const router = express.Router();

const { Tags } = require('../models/index');

router.get('/tags', async (req, res) => {
    try {
        const tags = await Tags.findAll();
        res.json(tags);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;