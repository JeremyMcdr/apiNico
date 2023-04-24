-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 24 avr. 2023 à 22:46
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `api`
--

-- --------------------------------------------------------

--
-- Structure de la table `entreprise`
--

DROP TABLE IF EXISTS `entreprise`;
CREATE TABLE IF NOT EXISTS `entreprise` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `localisation` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `entreprise`
--

INSERT INTO `entreprise` (`id`, `nom`, `localisation`) VALUES
(1, 'Moderna', 'Nevers'),
(2, 'NicolasMacadré', 'Nevers');

-- --------------------------------------------------------

--
-- Structure de la table `portes`
--

DROP TABLE IF EXISTS `portes`;
CREATE TABLE IF NOT EXISTS `portes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reference` varchar(50) NOT NULL,
  `idEntreprise` int NOT NULL,
  `designation` varchar(50) NOT NULL,
  `repereInstallation` varchar(50) NOT NULL,
  `constructeur` varchar(50) NOT NULL,
  `salleNumero` varchar(50) NOT NULL,
  `anneeMiseService` date NOT NULL,
  `Hauteur` varchar(50) NOT NULL,
  `Largeur` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `portes`
--

INSERT INTO `portes` (`id`, `reference`, `idEntreprise`, `designation`, `repereInstallation`, `constructeur`, `salleNumero`, `anneeMiseService`, `Hauteur`, `Largeur`) VALUES
(1, 'SDFSdfdfgdf741', 1, 'Porte semi-automatique à refoulement vertical à éc', 'B01', 'BA2I P.PI - 070236', 'Salle 0040 / 0080', '2023-04-04', '2200', '2200'),
(2, 'azertyuiop', 1, '', '', '', '', '0000-00-00', '', '0'),
(3, 'qsdfghjklm', 1, '', '', '', '', '0000-00-00', '', '0'),
(4, 'nicolasPortes', 2, '', '', '', '', '0000-00-00', '', '0'),
(5, 'NicolasPorte2', 2, '', '', '', '', '0000-00-00', '', '0');

-- --------------------------------------------------------

--
-- Structure de la table `users2`
--

DROP TABLE IF EXISTS `users2`;
CREATE TABLE IF NOT EXISTS `users2` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(40) NOT NULL,
  `lastName` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users2`
--

INSERT INTO `users2` (`id`, `firstName`, `lastName`, `email`, `createdAt`, `updatedAt`) VALUES
(2, 'Jérémy', 'Macadré', 'jeremymacadre@gmail.com', '2023-04-24', '2023-04-24'),
(4, 'Fanny', 'Lastella', 'Fanny.lastella@gmail.com', '2023-04-24', '2023-04-24'),
(7, 'He', 'les ', 'Nibars', '2023-04-24', '2023-04-24');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
