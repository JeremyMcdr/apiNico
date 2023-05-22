const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { verifyApiKey } = require('../middlewares');
const Task = require('../models/Tasks'); // Correction de l'importation

router.use(verifyApiKey);
router.get('/:userId/tasks', async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        const tasks = await Task.findAll({ where: { userId: userId } }); // Correction du nom du modèle

        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



router.post('/:userId/tasks', async (req, res) => {
    const { userId } = req.params;
    const { title, description } = req.body;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        const newTask = await Task.create({ title, description, userId });

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


router.put('/tasks/:taskId', async (req, res) => {
    const { taskId } = req.params;

    try {
        const task = await Task.findByPk(taskId);

        if (!task) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }

        await task.update(req.body);

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

        // Mettez à jour les propriétés de la tâche
        task.title = title;
        task.description = description;

        // Sauvegardez les modifications dans la base de données
        await task.save();

        res.status(200).json({ message: 'Task updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



module.exports = router;
