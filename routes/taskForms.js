const express = require('express');
const router = express.Router();
const TaskForm = require('../models/TaskForm');
const { verifyApiKey } = require('../middlewares');

router.use(verifyApiKey);

router.post('/', async (req, res) => {
    // ...le code pour créer un formulaire
    try {
        const newForm = await TaskForm.create(req.body);
        res.status(201).json(newForm);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.get('/:taskId', async (req, res) => {
    const form = await TaskForm.findOne({
        where: {
            taskId: req.params.taskId,
        },
    });
    res.json(form);
});

module.exports = router;
