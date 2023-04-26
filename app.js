const express = require('express');
const User = require('./models/user');
const Entreprise = require('./models/Entreprise');
const Door = require('./models/Door')
const cors = require('cors');
const Formulaire = require('./models/VerificationPorte')

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

// Fonction pour vérifier l'API Key
function verifyApiKey(req, res, next) {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
        return res.status(401).json({ error: 'API key is missing' });
    }

    if (apiKey !== 'testicule') {
        return res.status(401).json({ error: 'Invalid API key' });
    }
    next();
}

// Utiliser le middleware pour protéger les routes
app.use('/api/users', verifyApiKey);
app.use('/api/entreprise', verifyApiKey);

//Affichage des utilisateurs
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//Affichage des entreprise
app.get('/api/entreprises', async (req, res) => {
    try {
        const entreprises = await Entreprise.findAll();
        res.json(entreprises);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/formulaires', async (req, res) => {
    try {
        const formulaire = await Formulaire.findAll();
        res.json(formulaire);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.post('/api/users', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

app.delete('/api/users/:userId', verifyApiKey, async (req, res) => {
    try {
        const userId = parseInt(req.params.userId, 10);
        const deletedUser = await User.destroy({
            where: {
                id: userId,
            },
        });

        if (deletedUser) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/entreprise/:idEntreprise/doors', async (req, res) => {
    const idEntreprise = req.params.idEntreprise;

    try {
        const doors = await Door.findAll({
            where: { idEntreprise }
        });
        res.json(doors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});




app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
