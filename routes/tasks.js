const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { verifyApiKey } = require('../middlewares');
const Tasks = require('../models/Tasks')

router.use(verifyApiKey);
router.get('/:userId/tasks', async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        const tasks = await Tasks.findAll({ where: { userId: userId } });

        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
