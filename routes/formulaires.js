//routes/formulaires.js
const express = require('express');
const router = express.Router();
const Formulaire = require('../models/VerificationPorte');
const { verifyApiKey } = require('../middlewares');

router.use(verifyApiKey);

router.get('/', async (req, res) => {
    // ...le code pour obtenir tous les formulaires
    try {
        const formulaire = await Formulaire.findAll();
        res.json(formulaire);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    // ...le code pour créer un formulaire
    try {
        const newFormulaire = await Formulaire.create(req.body);
        res.status(201).json(newFormulaire);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = router;
