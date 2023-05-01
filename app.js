const express = require('express');
const User = require('./models/User');
const Entreprise = require('./models/Entreprise');
const Door = require('./models/Door')
const cors = require('cors');
const ApiKeys = require('./models/apiKeys')
const Formulaire = require('./models/VerificationPorte')

//Importation de l'ensemble de mes 'sous' base de données pour la création de mes formulaires
const DispositifArretForm = require('./models/tableFormulaire/DispositifArretForm.js')
const DispositifSecuriteForm = require('./models/tableFormulaire/DispositifSecuriteForm.js')
const EquipementElectroniqueForm = require('./models/tableFormulaire/EquipementElectriqueForm.js')
const ManoeuvreDepannageForm = require('./models/tableFormulaire/ManoeuvreDepannageForm.js')
const ManoeuvreSecoursForm = require('./models/tableFormulaire/ManoeuvreSecoursForm.js')
const MecanismeForm = require('./models/tableFormulaire/MecanismeForm.js')
const OrganeForm = require('./models/tableFormulaire/OrganeForm.js')
const SignalisationForm = require('./models/tableFormulaire/SignalisationForm.js')
const StructureForm = require('./models/tableFormulaire/StructureForm.js')
const TablierForm = require('./models/tableFormulaire/TablierForm.js')

// ... (autres importations)

const app = express();
const port = 3000;
app.use(cors())
app.use(express.json());

// Fonction pour vérifier l'API Key
async function verifyApiKey(req, res, next) {
    let userId = req.headers['x-user-id'];
    const apiKey = req.headers['x-api-key'];

    if (!userId || !apiKey) {
        return res.status(401).json({ error: 'User ID or API key is missing' });
    }

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }
        console.log("User id : " + userId)

        const apiKeyObj = await ApiKeys.findOne({
            where: { userId }
        });
        console.log("L'api key de mon utilisateur est : " + apiKeyObj.key);

        if (!apiKeyObj.key) {
            return res.status(401).json({ error: 'API key not found for user' });
        }

        if (apiKeyObj.key !== apiKey) {
            console.log(apiKeyObj.key)
            return res.status(401).json({ error: 'Invalid API key' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    next();
}

// Utiliser le middleware pour protéger les routes

app.use('/api/users', verifyApiKey);
app.use('/api/entreprise', verifyApiKey);
app.use('/api/',verifyApiKey)


//Affichage des utilisateurs
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/d1', async (req, res) => {
    try {
        const dispoArretForm = await DispositifArretForm.findAll();
        res.json(dispoArretForm);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/d2', async (req, res) => {
    try {
        const dispoSecuriteForm = await DispositifSecuriteForm.findAll();
        res.json(dispoSecuriteForm);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.get('/api/d3', async (req, res) => {
    try {
        const EquipemenElec = await EquipementElectroniqueForm.findAll();
        res.json(EquipemenElec);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.get('/api/d4', async (req, res) => {
    try {
        const ManoeuvreDep = await ManoeuvreDepannageForm.findAll();
        res.json(ManoeuvreDep);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.get('/api/d5', async (req, res) => {
    try {
        const ManeSecours = await ManoeuvreSecoursForm.findAll();
        res.json(ManeSecours);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.get('/api/d6', async (req, res) => {
    try {
        const Mecanisme = await MecanismeForm.findAll();
        res.json(Mecanisme);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.get('/api/d7', async (req, res) => {
    try {
        const Organe = await OrganeForm.findAll();
        res.json(Organe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.get('/api/d8', async (req, res) => {
    try {
        const Signa = await SignalisationForm.findAll();
        res.json(Signa);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.get('/api/d9', async (req, res) => {
    try {
        const Structure = await StructureForm.findAll();
        res.json(Structure);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.get('/api/d10', async (req, res) => {
    try {
        const Tablier = await TablierForm.findAll();
        res.json(Tablier);
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

// Affichage de tous les formulaires
app.get('/api/formulaires', async (req, res) => {
    try {
        const formulaire = await Formulaire.findAll();
        res.json(formulaire);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Création d'un formulaire
app.post('/api/formulaires', async (req, res) => {
    try {
        const newFormulaire = await Formulaire.create(req.body);
        res.status(201).json(newFormulaire);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Création d'un nouvel utilisateur
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

// Récupération des clefs api par utilisateur
app.get('/api/apiKeys/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const api = await ApiKeys.findAll({
            where: { userId }
        });
        res.json(api);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



// Ici je récupére mon tablier en fonction de son id
app.get('/api/formulaire/dispositifArret/:Id', async (req, res) => {
    const Id = req.params.Id;

    try {
        const dispositifArret = await DispositifArretForm.findAll({
            where: { Id }
        });
        res.json(dispositifArret);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/formulaire/dispositifSecurite/:Id', async (req, res) => {
    const Id = req.params.Id;

    try {
        const dispositifSecurite = await DispositifSecuriteForm.findAll({
            where: { Id }
        });
        res.json(dispositifSecurite);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/formulaire/equipementElectrique/:Id', async (req, res) => {
    const Id = req.params.Id;

    try {
        const equipementElectrique = await EquipementElectroniqueForm.findAll({
            where: { Id }
        });
        res.json(equipementElectrique);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/formulaire/manoeuvreDepannage/:Id', async (req, res) => {
    const Id = req.params.Id;

    try {
        const manoeuvreDepannage = await ManoeuvreDepannageForm.findAll({
            where: { Id }
        });
        res.json(manoeuvreDepannage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/formulaire/manoeuvreSecours/:Id', async (req, res) => {
    const Id = req.params.Id;

    try {
        const manoeuvreSecours = await ManoeuvreSecoursForm.findAll({
            where: { Id }
        });
        res.json(manoeuvreSecours);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/formulaire/mecanisme/:Id', async (req, res) => {
    const Id = req.params.Id;

    try {
        const mecanisme = await MecanismeForm.findAll({
            where: { Id }
        });
        res.json(mecanisme);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/formulaire/organe/:Id', async (req, res) => {
    const Id = req.params.Id;

    try {
        const organe = await OrganeForm.findAll({
            where: { Id }
        });
        res.json(organe);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/formulaire/signalisation/:Id', async (req, res) => {
    const Id = req.params.Id;

    try {
        const signalisation = await SignalisationForm.findAll({
            where: { Id }
        });
        res.json(signalisation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/formulaire/structure/:Id', async (req, res) => {
    const Id = req.params.Id;

    try {
        const structure = await StructureForm.findAll({
            where: { Id }
        });
        res.json(structure);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Ici je récupére mon tablier en fonction de son id
app.get('/api/formulaire/tablier/:Id', async (req, res) => {
    const Id = req.params.Id;

    try {
        const tablier = await TablierForm.findAll({
            where: { Id }
        });
        res.json(tablier);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
