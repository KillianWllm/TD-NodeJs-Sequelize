const express = require('express');
const router = express.Router();
const { User } = require('../models/index');

router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll({
            where: { enabled: true },
            order: [['date_updated', 'DESC']],
            limit: 9,
            raw: true,
        });
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;