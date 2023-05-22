const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { verifyApiKey } = require('../middlewares');
const Task = require('../models/Tasks'); // Correction de l'importation

router.use(verifyApiKey);
router.get('/:userId/tasks', async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        const tasks = await Task.findAll({ where: { userId: userId } }); // Correction du nom du modèle

        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
