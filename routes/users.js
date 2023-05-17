//routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { verifyApiKey } = require('../middlewares');

router.use(verifyApiKey);

router.get('/', async (req, res) => {
    // ...le code pour obtenir tous les utilisateurs
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    // ...le code pour créer un utilisateur
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.get('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user);
});

router.delete('/:userId', async (req, res) => {
    // ...le code pour supprimer un utilisateur
    try {
        const userId = parseInt(req.params.userId, 10);
        const deletedUser = await User.destroy({
            where: {
                id: userId,
            },
        });

        if (deletedUser) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
