const express = require('express');
const router = express.Router();
const UserApp = require('../models/usersApp');

router.post('/', async (req, res) => {
    const { firstName, password } = req.body;

    try {
        const user = await UserApp.findOne({ where: { firstName: firstName } });
        if (!user) {
            res.json({ success: 0 });
            return;
        }

        // Comparaison du mot de passe envoyé avec celui stocké

        if (password === user.password) {
            res.json({ success: 1 });
        } else {
            res.json({ success: 0 });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
