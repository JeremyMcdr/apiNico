//routes/companies.js
const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const { verifyApiKey } = require('../middlewares');
const Task = require("../models/Tasks");

router.use(verifyApiKey);

router.get('/', async (req, res) => {
    // ...le code pour obtenir toutes les entreprises
    try {
        const companies = await Company.findAll();
        res.json(companies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    const company = await Company.findByPk(req.params.id);
    res.json(company);
});

router.post('/', async (req, res) => {
    const { name, location } = req.body;
    try {
        const company = await Company.create({ name, location });
        res.status(201).json(company);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    const company = await Company.findByPk(req.params.id);

    if (!company) {
        res.status(404).json({ error: 'Aucune entreprise trouvée avec cet ID' });
        return;
    }

    await company.update(req.body);
    res.json({ message: 'Entreprise mise à jour avec succès' });
});

router.delete('/:companyId', async (req, res) => {
    const { companyId } = req.params;

    try {
        const deletedCompanyCount = await Company.destroy({ where: { id: companyId } });

        if (deletedCompanyCount === 0) {
            res.status(404).json({ error: 'Company not found' });
            return;
        }

        res.status(200).json({ message: 'Company deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
