const { DataTypes, ForeignKeyConstraintError} = require('sequelize');
const sequelize = require('../database');
//Importation de l'ensemble de mes 'sous' base de données pour la création de mes formulaires
const DispositifArretForm = require('./tableFormulaire/DispositifArretForm.js')
const DispositifSecuriteForm = require('./tableFormulaire/DispositifSecuriteForm.js')
const EquipementElectroniqueForm = require('./tableFormulaire/EquipementElectriqueForm.js')
const ManoeuvreDepannageForm = require('./tableFormulaire/ManoeuvreDepannageForm.js')
const ManoeuvreSecoursForm = require('./tableFormulaire/ManoeuvreSecoursForm.js')
const MecanismeForm = require('./tableFormulaire/MecanismeForm.js')
const OrganeForm = require('./tableFormulaire/OrganeForm.js')
const SignalisationForm = require('./tableFormulaire/SignalisationForm.js')
const StructureForm = require('./tableFormulaire/StructureForm.js')
const TablierForm = require('./tableFormulaire/TablierForm.js')

const Formulaire = sequelize.define('Formulaire', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    dispositifArret_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dispositifSecurite_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    equipementElectrique_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    manoeuvreDepannage_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    manoeuvreSecours_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    mecanisme_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    organe_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    signalisation_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    structure_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tablier_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'VerificationPorte', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
});
Formulaire.belongsTo(DispositifArretForm, { foreignKey: 'dispositifArret_ID' });
Formulaire.belongsTo(DispositifSecuriteForm, { foreignKey: 'dispositifSecurite_ID' });
Formulaire.belongsTo(EquipementElectroniqueForm, { foreignKey: 'equipementElectrique_ID' });
Formulaire.belongsTo(ManoeuvreDepannageForm, { foreignKey: 'manoeuvreDepannage_ID' });
Formulaire.belongsTo(ManoeuvreSecoursForm, { foreignKey: 'manoeuvreSecours_ID' });
Formulaire.belongsTo(MecanismeForm, { foreignKey: 'mecanisme_ID' });
Formulaire.belongsTo(OrganeForm, { foreignKey: 'organe_ID' });
Formulaire.belongsTo(SignalisationForm, { foreignKey: 'signalisation_ID' });
Formulaire.belongsTo(StructureForm, { foreignKey: 'structure_ID' });
Formulaire.belongsTo(TablierForm, { foreignKey: 'tablier_ID' });
module.exports = Formulaire;
