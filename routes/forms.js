const express = require('express');
const router = express.Router();
const Form = require('../models/Form');
const { verifyApiKey } = require('../middlewares');

router.use(verifyApiKey);

router.post('/', async (req, res) => {
    // ...le code pour créer un formulaire
    try {
        const newForm = await Form.create(req.body);
        res.status(201).json(newForm);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.get('/:taskId', async (req, res) => {
    const forms = await Form.findAll({
        where: {
            taskId: req.params.taskId,
        },
    });
    res.json(forms);
});

module.exports = router;
