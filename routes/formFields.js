const express = require('express');
const router = express.Router();
const FormField = require('../models/FormField');
const { verifyApiKey } = require('../middlewares');

router.use(verifyApiKey);

router.post('/', async (req, res) => {
    // ...le code pour créer un champ de formulaire
    try {
        const newField = await FormField.create(req.body);
        res.status(201).json(newField);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.get('/:taskFormId', async (req, res) => {
    const fields = await FormField.findAll({
        where: {
            taskFormId: req.params.taskFormId,
        },
    });
    res.json(fields);
});

module.exports = router;
