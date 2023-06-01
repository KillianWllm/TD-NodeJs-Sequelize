const express = require('express');
const router = express.Router();
const { Avis } = require('../models/index');
const avisController = require('../controllers/commentController');

router.post('/add/comment', avisController.addComments);

router.get('/comments', async (req, res) => {
    try {
        const comments = await Avis.findAll({
            attributes: ['content'],
            raw: true,
        });
        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;