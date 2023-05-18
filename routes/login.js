const express = require('express');
const router = express.Router();
const UserApp = require('../models/usersApp');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    const { firstName, password } = req.body;

    try {
        const user = await UserApp.findOne({ where: { firstName: firstName } });
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        // Comparaison du mot de passe envoyé avec celui stocké
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (password === user.password) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
