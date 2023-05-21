//routes/entreprises.js
const express = require('express');
const router = express.Router();
const Entreprise = require('../models/Entreprise');
const { verifyApiKey } = require('../middlewares');

router.use(verifyApiKey);

router.get('/', async (req, res) => {
    // ...le code pour obtenir toutes les entreprises
    try {
        const companies = await Entreprise.findAll();
        res.json(companies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    const company = await Entreprise.findByPk(req.params.id);
    res.json(company);
});

router.post('/', async (req, res) => {
    const company = await Entreprise.create(req.body);
    res.json(company);
});

router.put('/:id', async (req, res) => {
    const company = await Entreprise.findByPk(req.params.id);

    if (!company) {
        res.status(404).json({ error: 'Aucune entreprise trouvée avec cet ID' });
        return;
    }

    await company.update(req.body);
    res.json({ message: 'Entreprise mise à jour avec succès' });
});


module.exports = router;
