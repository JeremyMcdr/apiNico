const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { verifyApiKey } = require('../middlewares');
const Task = require('../models/Tasks');

router.use(verifyApiKey);

router.get('/:userId/tasks', async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        const tasks = await Task.findAll({ where: { userId: userId } });

        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/:userId/tasks', async (req, res) => {
    const { userId } = req.params;
    const { title, description, companyId, startDate, endDate } = req.body;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        // Convertir les dates au format ISO 8601 en objets JavaScript Date
        const convertedStartDate = new Date(startDate);
        const convertedEndDate = new Date(endDate);

        const newTask = await Task.create({
            title,
            description,
            userId,
            companyId,
            startDate: convertedStartDate,
            endDate: convertedEndDate
        });

        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:taskId', async (req, res) => {
    const { taskId } = req.params;

    try {
        const deletedTaskCount = await Task.destroy({ where: { id: taskId } });

        if (deletedTaskCount === 0) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }

        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:taskId', async (req, res) => {
    const { taskId } = req.params;
    const { title, description, startDate, endDate } = req.body;

    try {
        const task = await Task.findByPk(taskId);

        if (!task) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }

        // Mettre à jour les propriétés de la tâche
        task.title = title;
        task.description = description;
        task.startDate = new Date(startDate); // Convertir la date en objet JavaScript Date
        task.endDate = new Date(endDate); // Convertir la date en objet JavaScript Date

        // Sauvegarder les modifications dans la base de données
        await task.save();

        res.status(200).json({ message: 'Task updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:taskId', async (req, res) => {
    const { taskId } = req.params;

    try {
        const task = await Task.findByPk(taskId);

        if (!task) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }

        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:taskId', async (req, res) => {
    const { taskId } = req.params;
    const { title, description } = req.body;

    try {
        const task = await Task.findByPk(taskId);

        if (!task) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }

        // Mettre à jour les propriétés de la tâche
        task.title = title;
        task.description = description;

        // Sauvegarder les modifications dans la base de données
        await task.save();

        res.status(200).json({ message: 'Task updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
