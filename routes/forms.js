const express = require('express');
const router = express.Router();
const Form = require('../models/Form');
const FormField = require('../models/FormField')
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

router.get('/:id', async (req, res) => {
    const form = await Form.findOne({
        where: {
            id: req.params.id,
        },
        include: [{
            model: FormField,
            as: 'fields',
            required: false
        }],
    });
    if (form) {
        res.json(form);
    } else {
        res.status(404).json({error: "Formulaire non trouvé"});
    }
});



module.exports = router;
