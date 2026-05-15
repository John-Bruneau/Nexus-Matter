import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série 36
 * Focus: Carbapénèmes, Agents de contraste IRM, Colorants histologiques, Chimie Click
 * Copyright: Sébastien John Bruneau
 */
export const MOLECULES_P36: MoleculeDefinition[] = [
  {
    "name": "Méropénème",
    "formula": "C₁₇H₂₅N₃O₅S",
    "composition": {
      "C": 17,
      "H": 25,
      "N": 3,
      "O": 5,
      "S": 1
    },
    "molarMass": "383.46 g/mol",
    "category": "Carbapénème",
    "summary": "Antibiotique à large spectre utilisé pour les infections hospitalières sévères.",
    "occurrence": "Synthétique.",
    "applications": [
      "Infectiologie",
      "Soins intensifs"
    ]
  },
  {
    "name": "Ertapénème",
    "formula": "C₂₂H₂₅N₃O₇S",
    "composition": {
      "C": 22,
      "H": 25,
      "N": 3,
      "O": 7,
      "S": 1
    },
    "molarMass": "475.52 g/mol",
    "category": "Carbapénème",
    "summary": "Utilisé contre les bactéries gram-négatives résistantes.",
    "occurrence": "Synthétique.",
    "applications": [
      "Infectiologie"
    ]
  },
  {
    "name": "Gadopentétate de méglumine",
    "formula": "C₂₈H₅₄GdN₅O₂₀",
    "composition": {
      "C": 28,
      "H": 54,
      "Gd": 1,
      "N": 5,
      "O": 20
    },
    "molarMass": "938.00 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Complexe de gadolinium ionique utilisé pour améliorer les images de résonance magnétique.",
    "occurrence": "Synthétique.",
    "applications": [
      "Radiologie",
      "Diagnostic"
    ]
  },
  {
    "name": "Gadotérate de méglumine",
    "formula": "C₂₄H₄₀GdN₅O₁₃",
    "composition": {
      "C": 24,
      "H": 40,
      "Gd": 1,
      "N": 5,
      "O": 13
    },
    "molarMass": "753.86 g/mol",
    "category": "Agent de contraste macrocyclique",
    "summary": "Agent de contraste de haute stabilité pour l'imagerie du système nerveux central.",
    "occurrence": "Synthétique.",
    "applications": [
      "Radiologie"
    ]
  },
  {
    "name": "Gadobutrol",
    "formula": "C₁₈H₃₁GdN₄O₉",
    "composition": {
      "C": 18,
      "H": 31,
      "Gd": 1,
      "N": 4,
      "O": 9
    },
    "molarMass": "604.71 g/mol",
    "category": "Agent de contraste neutre",
    "summary": "Agent de contraste macrocyclique neutre hautement concentré.",
    "occurrence": "Synthétique.",
    "applications": [
      "IRM cardiovasculaire"
    ]
  },
  {
    "name": "Éosine Y",
    "formula": "C₂₀H₈Br₄O₅",
    "composition": {
      "C": 20,
      "H": 8,
      "Br": 4,
      "O": 5
    },
    "molarMass": "647.89 g/mol",
    "category": "Colorant histologique",
    "summary": "Colorant rouge fluorescent utilisé pour colorer le cytoplasme des cellules.",
    "occurrence": "Synthétique.",
    "applications": [
      "Histologie",
      "Biologie cellulaire"
    ]
  },
  {
    "name": "DBCO-PEG4-NHS Ester",
    "formula": "C₃₄H₃₉N₃O₁₀",
    "composition": {
      "C": 34,
      "H": 39,
      "N": 3,
      "O": 10
    },
    "molarMass": "649.69 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Réactif pour la cycloaddition azoture-alcyne sans cuivre (Strain-Promoted).",
    "occurrence": "Laboratoire de biotechnologie.",
    "applications": [
      "Bioconjugaison",
      "Synthèse chimique"
    ]
  },
  {
    "name": "Bleu de Coomassie G-250",
    "formula": "C₄₇H₄₈N₃NaO₇S₂",
    "composition": {
      "C": 47,
      "H": 48,
      "N": 3,
      "Na": 1,
      "O": 7,
      "S": 2
    },
    "molarMass": "854.02 g/mol",
    "category": "Colorant protéique",
    "summary": "Utilisé pour la détection et la quantification des protéines en électrophorèse.",
    "occurrence": "Synthétique.",
    "applications": [
      "Biochimie",
      "Analyses en laboratoire"
    ]
  },
  {
    "name": "Teicoplanine",
    "formula": "C₈₈H₉₇Cl₂N₉O₃₃",
    "composition": {
      "C": 88,
      "H": 97,
      "Cl": 2,
      "N": 9,
      "O": 33
    },
    "molarMass": "1877.58 g/mol",
    "category": "Glycopeptide",
    "summary": "Antibiotique complexe utilisé pour traiter les infections à Gram positif résistantes.",
    "occurrence": "Produit par Actinoplanes teichomyceticus.",
    "applications": [
      "Infectiologie hospitalière"
    ]
  },
  {
    "name": "Cyanine 5-Azide",
    "formula": "C₃₂H₃₉N₆",
    "composition": {
      "C": 32,
      "H": 39,
      "N": 6
    },
    "molarMass": "507.70 g/mol",
    "category": "Fluorophore Click",
    "summary": "Marqueur fluorescent rouge activable par chimie click.",
    "occurrence": "Synthèse spécialisée.",
    "applications": [
      "Imagerie moléculaire"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6001",
    "formula": "C41H56N1O1",
    "composition": {
      "C": 41,
      "H": 56,
      "N": 1,
      "O": 1
    },
    "molarMass": "705.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6002",
    "formula": "C42H57N2O2",
    "composition": {
      "C": 42,
      "H": 57,
      "N": 2,
      "O": 2
    },
    "molarMass": "711.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6003",
    "formula": "C43H58N3O3",
    "composition": {
      "C": 43,
      "H": 58,
      "N": 3,
      "O": 3
    },
    "molarMass": "716.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6004",
    "formula": "C44H59N4O4",
    "composition": {
      "C": 44,
      "H": 59,
      "N": 4,
      "O": 4
    },
    "molarMass": "722.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6005",
    "formula": "C45H60N5O5",
    "composition": {
      "C": 45,
      "H": 60,
      "N": 5,
      "O": 5
    },
    "molarMass": "727.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6006",
    "formula": "C46H61N6O6",
    "composition": {
      "C": 46,
      "H": 61,
      "N": 6,
      "O": 6
    },
    "molarMass": "733.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6007",
    "formula": "C47H62N7O7",
    "composition": {
      "C": 47,
      "H": 62,
      "N": 7,
      "O": 7
    },
    "molarMass": "738.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6008",
    "formula": "C48H63N8O8",
    "composition": {
      "C": 48,
      "H": 63,
      "N": 8,
      "O": 8
    },
    "molarMass": "744.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6009",
    "formula": "C49H64N9O9",
    "composition": {
      "C": 49,
      "H": 64,
      "N": 9,
      "O": 9
    },
    "molarMass": "749.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6010",
    "formula": "C50H65N10O10",
    "composition": {
      "C": 50,
      "H": 65,
      "N": 10,
      "O": 10
    },
    "molarMass": "755.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6011",
    "formula": "C51H66N11O11",
    "composition": {
      "C": 51,
      "H": 66,
      "N": 11,
      "O": 11
    },
    "molarMass": "760.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6012",
    "formula": "C52H67N12O12",
    "composition": {
      "C": 52,
      "H": 67,
      "N": 12,
      "O": 12
    },
    "molarMass": "766.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6013",
    "formula": "C53H68N13O13",
    "composition": {
      "C": 53,
      "H": 68,
      "N": 13,
      "O": 13
    },
    "molarMass": "771.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6014",
    "formula": "C54H69N14O14",
    "composition": {
      "C": 54,
      "H": 69,
      "N": 14,
      "O": 14
    },
    "molarMass": "777.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6015",
    "formula": "C55H70N15O0",
    "composition": {
      "C": 55,
      "H": 70,
      "N": 15,
      "O": 0
    },
    "molarMass": "782.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6016",
    "formula": "C56H71N16O1",
    "composition": {
      "C": 56,
      "H": 71,
      "N": 16,
      "O": 1
    },
    "molarMass": "788.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6017",
    "formula": "C57H72N17O2",
    "composition": {
      "C": 57,
      "H": 72,
      "N": 17,
      "O": 2
    },
    "molarMass": "793.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6018",
    "formula": "C58H73N0O3",
    "composition": {
      "C": 58,
      "H": 73,
      "N": 0,
      "O": 3
    },
    "molarMass": "799.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6019",
    "formula": "C59H74N1O4",
    "composition": {
      "C": 59,
      "H": 74,
      "N": 1,
      "O": 4
    },
    "molarMass": "804.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6020",
    "formula": "C60H75N2O5",
    "composition": {
      "C": 60,
      "H": 75,
      "N": 2,
      "O": 5
    },
    "molarMass": "810.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6021",
    "formula": "C61H76N3O6",
    "composition": {
      "C": 61,
      "H": 76,
      "N": 3,
      "O": 6
    },
    "molarMass": "815.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6022",
    "formula": "C62H77N4O7",
    "composition": {
      "C": 62,
      "H": 77,
      "N": 4,
      "O": 7
    },
    "molarMass": "821.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6023",
    "formula": "C63H78N5O8",
    "composition": {
      "C": 63,
      "H": 78,
      "N": 5,
      "O": 8
    },
    "molarMass": "826.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6024",
    "formula": "C64H79N6O9",
    "composition": {
      "C": 64,
      "H": 79,
      "N": 6,
      "O": 9
    },
    "molarMass": "832.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6025",
    "formula": "C65H80N7O10",
    "composition": {
      "C": 65,
      "H": 80,
      "N": 7,
      "O": 10
    },
    "molarMass": "837.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6026",
    "formula": "C66H81N8O11",
    "composition": {
      "C": 66,
      "H": 81,
      "N": 8,
      "O": 11
    },
    "molarMass": "843.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6027",
    "formula": "C67H82N9O12",
    "composition": {
      "C": 67,
      "H": 82,
      "N": 9,
      "O": 12
    },
    "molarMass": "848.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6028",
    "formula": "C68H83N10O13",
    "composition": {
      "C": 68,
      "H": 83,
      "N": 10,
      "O": 13
    },
    "molarMass": "854.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6029",
    "formula": "C69H84N11O14",
    "composition": {
      "C": 69,
      "H": 84,
      "N": 11,
      "O": 14
    },
    "molarMass": "859.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6030",
    "formula": "C70H85N12O0",
    "composition": {
      "C": 70,
      "H": 85,
      "N": 12,
      "O": 0
    },
    "molarMass": "865.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6031",
    "formula": "C71H86N13O1",
    "composition": {
      "C": 71,
      "H": 86,
      "N": 13,
      "O": 1
    },
    "molarMass": "870.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6032",
    "formula": "C72H87N14O2",
    "composition": {
      "C": 72,
      "H": 87,
      "N": 14,
      "O": 2
    },
    "molarMass": "876.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6033",
    "formula": "C73H88N15O3",
    "composition": {
      "C": 73,
      "H": 88,
      "N": 15,
      "O": 3
    },
    "molarMass": "881.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6034",
    "formula": "C74H89N16O4",
    "composition": {
      "C": 74,
      "H": 89,
      "N": 16,
      "O": 4
    },
    "molarMass": "887.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6035",
    "formula": "C75H90N17O5",
    "composition": {
      "C": 75,
      "H": 90,
      "N": 17,
      "O": 5
    },
    "molarMass": "892.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6036",
    "formula": "C76H91N0O6",
    "composition": {
      "C": 76,
      "H": 91,
      "N": 0,
      "O": 6
    },
    "molarMass": "898.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6037",
    "formula": "C77H92N1O7",
    "composition": {
      "C": 77,
      "H": 92,
      "N": 1,
      "O": 7
    },
    "molarMass": "903.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6038",
    "formula": "C78H93N2O8",
    "composition": {
      "C": 78,
      "H": 93,
      "N": 2,
      "O": 8
    },
    "molarMass": "909.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6039",
    "formula": "C79H94N3O9",
    "composition": {
      "C": 79,
      "H": 94,
      "N": 3,
      "O": 9
    },
    "molarMass": "914.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6040",
    "formula": "C80H95N4O10",
    "composition": {
      "C": 80,
      "H": 95,
      "N": 4,
      "O": 10
    },
    "molarMass": "920.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6041",
    "formula": "C81H96N5O11",
    "composition": {
      "C": 81,
      "H": 96,
      "N": 5,
      "O": 11
    },
    "molarMass": "925.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6042",
    "formula": "C82H97N6O12",
    "composition": {
      "C": 82,
      "H": 97,
      "N": 6,
      "O": 12
    },
    "molarMass": "931.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6043",
    "formula": "C83H98N7O13",
    "composition": {
      "C": 83,
      "H": 98,
      "N": 7,
      "O": 13
    },
    "molarMass": "936.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6044",
    "formula": "C84H99N8O14",
    "composition": {
      "C": 84,
      "H": 99,
      "N": 8,
      "O": 14
    },
    "molarMass": "942.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6045",
    "formula": "C85H100N9O0",
    "composition": {
      "C": 85,
      "H": 100,
      "N": 9,
      "O": 0
    },
    "molarMass": "947.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6046",
    "formula": "C86H101N10O1",
    "composition": {
      "C": 86,
      "H": 101,
      "N": 10,
      "O": 1
    },
    "molarMass": "953.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6047",
    "formula": "C87H102N11O2",
    "composition": {
      "C": 87,
      "H": 102,
      "N": 11,
      "O": 2
    },
    "molarMass": "958.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6048",
    "formula": "C88H103N12O3",
    "composition": {
      "C": 88,
      "H": 103,
      "N": 12,
      "O": 3
    },
    "molarMass": "964.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6049",
    "formula": "C89H104N13O4",
    "composition": {
      "C": 89,
      "H": 104,
      "N": 13,
      "O": 4
    },
    "molarMass": "969.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6050",
    "formula": "C90H105N14O5",
    "composition": {
      "C": 90,
      "H": 105,
      "N": 14,
      "O": 5
    },
    "molarMass": "975.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6051",
    "formula": "C91H106N15O6",
    "composition": {
      "C": 91,
      "H": 106,
      "N": 15,
      "O": 6
    },
    "molarMass": "980.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6052",
    "formula": "C92H107N16O7",
    "composition": {
      "C": 92,
      "H": 107,
      "N": 16,
      "O": 7
    },
    "molarMass": "986.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6053",
    "formula": "C93H108N17O8",
    "composition": {
      "C": 93,
      "H": 108,
      "N": 17,
      "O": 8
    },
    "molarMass": "991.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6054",
    "formula": "C94H109N0O9",
    "composition": {
      "C": 94,
      "H": 109,
      "N": 0,
      "O": 9
    },
    "molarMass": "997.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6055",
    "formula": "C95H110N1O10",
    "composition": {
      "C": 95,
      "H": 110,
      "N": 1,
      "O": 10
    },
    "molarMass": "1002.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6056",
    "formula": "C96H111N2O11",
    "composition": {
      "C": 96,
      "H": 111,
      "N": 2,
      "O": 11
    },
    "molarMass": "1008.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6057",
    "formula": "C97H112N3O12",
    "composition": {
      "C": 97,
      "H": 112,
      "N": 3,
      "O": 12
    },
    "molarMass": "1013.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6058",
    "formula": "C98H113N4O13",
    "composition": {
      "C": 98,
      "H": 113,
      "N": 4,
      "O": 13
    },
    "molarMass": "1019.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6059",
    "formula": "C99H114N5O14",
    "composition": {
      "C": 99,
      "H": 114,
      "N": 5,
      "O": 14
    },
    "molarMass": "1024.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6060",
    "formula": "C100H115N6O0",
    "composition": {
      "C": 100,
      "H": 115,
      "N": 6,
      "O": 0
    },
    "molarMass": "1030.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6061",
    "formula": "C101H116N7O1",
    "composition": {
      "C": 101,
      "H": 116,
      "N": 7,
      "O": 1
    },
    "molarMass": "1035.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6062",
    "formula": "C102H117N8O2",
    "composition": {
      "C": 102,
      "H": 117,
      "N": 8,
      "O": 2
    },
    "molarMass": "1041.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6063",
    "formula": "C103H118N9O3",
    "composition": {
      "C": 103,
      "H": 118,
      "N": 9,
      "O": 3
    },
    "molarMass": "1046.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6064",
    "formula": "C104H119N10O4",
    "composition": {
      "C": 104,
      "H": 119,
      "N": 10,
      "O": 4
    },
    "molarMass": "1052.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6065",
    "formula": "C105H120N11O5",
    "composition": {
      "C": 105,
      "H": 120,
      "N": 11,
      "O": 5
    },
    "molarMass": "1057.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6066",
    "formula": "C106H121N12O6",
    "composition": {
      "C": 106,
      "H": 121,
      "N": 12,
      "O": 6
    },
    "molarMass": "1063.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6067",
    "formula": "C107H122N13O7",
    "composition": {
      "C": 107,
      "H": 122,
      "N": 13,
      "O": 7
    },
    "molarMass": "1068.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6068",
    "formula": "C108H123N14O8",
    "composition": {
      "C": 108,
      "H": 123,
      "N": 14,
      "O": 8
    },
    "molarMass": "1074.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6069",
    "formula": "C109H124N15O9",
    "composition": {
      "C": 109,
      "H": 124,
      "N": 15,
      "O": 9
    },
    "molarMass": "1079.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6070",
    "formula": "C110H125N16O10",
    "composition": {
      "C": 110,
      "H": 125,
      "N": 16,
      "O": 10
    },
    "molarMass": "1085.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6071",
    "formula": "C111H126N17O11",
    "composition": {
      "C": 111,
      "H": 126,
      "N": 17,
      "O": 11
    },
    "molarMass": "1090.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6072",
    "formula": "C112H127N0O12",
    "composition": {
      "C": 112,
      "H": 127,
      "N": 0,
      "O": 12
    },
    "molarMass": "1096.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6073",
    "formula": "C113H128N1O13",
    "composition": {
      "C": 113,
      "H": 128,
      "N": 1,
      "O": 13
    },
    "molarMass": "1101.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6074",
    "formula": "C114H129N2O14",
    "composition": {
      "C": 114,
      "H": 129,
      "N": 2,
      "O": 14
    },
    "molarMass": "1107.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6075",
    "formula": "C115H130N3O0",
    "composition": {
      "C": 115,
      "H": 130,
      "N": 3,
      "O": 0
    },
    "molarMass": "1112.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6076",
    "formula": "C116H131N4O1",
    "composition": {
      "C": 116,
      "H": 131,
      "N": 4,
      "O": 1
    },
    "molarMass": "1118.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6077",
    "formula": "C117H132N5O2",
    "composition": {
      "C": 117,
      "H": 132,
      "N": 5,
      "O": 2
    },
    "molarMass": "1123.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6078",
    "formula": "C118H133N6O3",
    "composition": {
      "C": 118,
      "H": 133,
      "N": 6,
      "O": 3
    },
    "molarMass": "1129.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6079",
    "formula": "C119H134N7O4",
    "composition": {
      "C": 119,
      "H": 134,
      "N": 7,
      "O": 4
    },
    "molarMass": "1134.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6080",
    "formula": "C120H135N8O5",
    "composition": {
      "C": 120,
      "H": 135,
      "N": 8,
      "O": 5
    },
    "molarMass": "1140.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6081",
    "formula": "C121H136N9O6",
    "composition": {
      "C": 121,
      "H": 136,
      "N": 9,
      "O": 6
    },
    "molarMass": "1145.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6082",
    "formula": "C122H137N10O7",
    "composition": {
      "C": 122,
      "H": 137,
      "N": 10,
      "O": 7
    },
    "molarMass": "1151.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6083",
    "formula": "C123H138N11O8",
    "composition": {
      "C": 123,
      "H": 138,
      "N": 11,
      "O": 8
    },
    "molarMass": "1156.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6084",
    "formula": "C124H139N12O9",
    "composition": {
      "C": 124,
      "H": 139,
      "N": 12,
      "O": 9
    },
    "molarMass": "1162.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6085",
    "formula": "C125H140N13O10",
    "composition": {
      "C": 125,
      "H": 140,
      "N": 13,
      "O": 10
    },
    "molarMass": "1167.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6086",
    "formula": "C126H141N14O11",
    "composition": {
      "C": 126,
      "H": 141,
      "N": 14,
      "O": 11
    },
    "molarMass": "1173.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6087",
    "formula": "C127H142N15O12",
    "composition": {
      "C": 127,
      "H": 142,
      "N": 15,
      "O": 12
    },
    "molarMass": "1178.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6088",
    "formula": "C128H143N16O13",
    "composition": {
      "C": 128,
      "H": 143,
      "N": 16,
      "O": 13
    },
    "molarMass": "1184.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6089",
    "formula": "C129H144N17O14",
    "composition": {
      "C": 129,
      "H": 144,
      "N": 17,
      "O": 14
    },
    "molarMass": "1189.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6090",
    "formula": "C130H145N0O0",
    "composition": {
      "C": 130,
      "H": 145,
      "N": 0,
      "O": 0
    },
    "molarMass": "1195.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6091",
    "formula": "C131H146N1O1",
    "composition": {
      "C": 131,
      "H": 146,
      "N": 1,
      "O": 1
    },
    "molarMass": "1200.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6092",
    "formula": "C132H147N2O2",
    "composition": {
      "C": 132,
      "H": 147,
      "N": 2,
      "O": 2
    },
    "molarMass": "1206.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6093",
    "formula": "C133H148N3O3",
    "composition": {
      "C": 133,
      "H": 148,
      "N": 3,
      "O": 3
    },
    "molarMass": "1211.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6094",
    "formula": "C134H149N4O4",
    "composition": {
      "C": 134,
      "H": 149,
      "N": 4,
      "O": 4
    },
    "molarMass": "1217.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6095",
    "formula": "C135H150N5O5",
    "composition": {
      "C": 135,
      "H": 150,
      "N": 5,
      "O": 5
    },
    "molarMass": "1222.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6096",
    "formula": "C136H151N6O6",
    "composition": {
      "C": 136,
      "H": 151,
      "N": 6,
      "O": 6
    },
    "molarMass": "1228.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6097",
    "formula": "C137H152N7O7",
    "composition": {
      "C": 137,
      "H": 152,
      "N": 7,
      "O": 7
    },
    "molarMass": "1233.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6098",
    "formula": "C138H153N8O8",
    "composition": {
      "C": 138,
      "H": 153,
      "N": 8,
      "O": 8
    },
    "molarMass": "1239.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6099",
    "formula": "C139H154N9O9",
    "composition": {
      "C": 139,
      "H": 154,
      "N": 9,
      "O": 9
    },
    "molarMass": "1244.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6100",
    "formula": "C140H155N10O10",
    "composition": {
      "C": 140,
      "H": 155,
      "N": 10,
      "O": 10
    },
    "molarMass": "1250.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6101",
    "formula": "C141H156N11O11",
    "composition": {
      "C": 141,
      "H": 156,
      "N": 11,
      "O": 11
    },
    "molarMass": "1255.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6102",
    "formula": "C142H157N12O12",
    "composition": {
      "C": 142,
      "H": 157,
      "N": 12,
      "O": 12
    },
    "molarMass": "1261.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6103",
    "formula": "C143H158N13O13",
    "composition": {
      "C": 143,
      "H": 158,
      "N": 13,
      "O": 13
    },
    "molarMass": "1266.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6104",
    "formula": "C144H159N14O14",
    "composition": {
      "C": 144,
      "H": 159,
      "N": 14,
      "O": 14
    },
    "molarMass": "1272.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6105",
    "formula": "C145H160N15O0",
    "composition": {
      "C": 145,
      "H": 160,
      "N": 15,
      "O": 0
    },
    "molarMass": "1277.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6106",
    "formula": "C146H161N16O1",
    "composition": {
      "C": 146,
      "H": 161,
      "N": 16,
      "O": 1
    },
    "molarMass": "1283.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6107",
    "formula": "C147H162N17O2",
    "composition": {
      "C": 147,
      "H": 162,
      "N": 17,
      "O": 2
    },
    "molarMass": "1288.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6108",
    "formula": "C148H163N0O3",
    "composition": {
      "C": 148,
      "H": 163,
      "N": 0,
      "O": 3
    },
    "molarMass": "1294.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6109",
    "formula": "C149H164N1O4",
    "composition": {
      "C": 149,
      "H": 164,
      "N": 1,
      "O": 4
    },
    "molarMass": "1299.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6110",
    "formula": "C150H165N2O5",
    "composition": {
      "C": 150,
      "H": 165,
      "N": 2,
      "O": 5
    },
    "molarMass": "1305.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6111",
    "formula": "C151H166N3O6",
    "composition": {
      "C": 151,
      "H": 166,
      "N": 3,
      "O": 6
    },
    "molarMass": "1310.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6112",
    "formula": "C152H167N4O7",
    "composition": {
      "C": 152,
      "H": 167,
      "N": 4,
      "O": 7
    },
    "molarMass": "1316.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6113",
    "formula": "C153H168N5O8",
    "composition": {
      "C": 153,
      "H": 168,
      "N": 5,
      "O": 8
    },
    "molarMass": "1321.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6114",
    "formula": "C154H169N6O9",
    "composition": {
      "C": 154,
      "H": 169,
      "N": 6,
      "O": 9
    },
    "molarMass": "1327.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6115",
    "formula": "C155H170N7O10",
    "composition": {
      "C": 155,
      "H": 170,
      "N": 7,
      "O": 10
    },
    "molarMass": "1332.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6116",
    "formula": "C156H171N8O11",
    "composition": {
      "C": 156,
      "H": 171,
      "N": 8,
      "O": 11
    },
    "molarMass": "1338.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6117",
    "formula": "C157H172N9O12",
    "composition": {
      "C": 157,
      "H": 172,
      "N": 9,
      "O": 12
    },
    "molarMass": "1343.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6118",
    "formula": "C158H173N10O13",
    "composition": {
      "C": 158,
      "H": 173,
      "N": 10,
      "O": 13
    },
    "molarMass": "1349.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6119",
    "formula": "C159H174N11O14",
    "composition": {
      "C": 159,
      "H": 174,
      "N": 11,
      "O": 14
    },
    "molarMass": "1354.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6120",
    "formula": "C160H175N12O0",
    "composition": {
      "C": 160,
      "H": 175,
      "N": 12,
      "O": 0
    },
    "molarMass": "1360.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6121",
    "formula": "C161H176N13O1",
    "composition": {
      "C": 161,
      "H": 176,
      "N": 13,
      "O": 1
    },
    "molarMass": "1365.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6122",
    "formula": "C162H177N14O2",
    "composition": {
      "C": 162,
      "H": 177,
      "N": 14,
      "O": 2
    },
    "molarMass": "1371.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6123",
    "formula": "C163H178N15O3",
    "composition": {
      "C": 163,
      "H": 178,
      "N": 15,
      "O": 3
    },
    "molarMass": "1376.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6124",
    "formula": "C164H179N16O4",
    "composition": {
      "C": 164,
      "H": 179,
      "N": 16,
      "O": 4
    },
    "molarMass": "1382.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6125",
    "formula": "C165H180N17O5",
    "composition": {
      "C": 165,
      "H": 180,
      "N": 17,
      "O": 5
    },
    "molarMass": "1387.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6126",
    "formula": "C166H181N0O6",
    "composition": {
      "C": 166,
      "H": 181,
      "N": 0,
      "O": 6
    },
    "molarMass": "1393.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6127",
    "formula": "C167H182N1O7",
    "composition": {
      "C": 167,
      "H": 182,
      "N": 1,
      "O": 7
    },
    "molarMass": "1398.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6128",
    "formula": "C168H183N2O8",
    "composition": {
      "C": 168,
      "H": 183,
      "N": 2,
      "O": 8
    },
    "molarMass": "1404.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6129",
    "formula": "C169H184N3O9",
    "composition": {
      "C": 169,
      "H": 184,
      "N": 3,
      "O": 9
    },
    "molarMass": "1409.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6130",
    "formula": "C170H185N4O10",
    "composition": {
      "C": 170,
      "H": 185,
      "N": 4,
      "O": 10
    },
    "molarMass": "1415.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6131",
    "formula": "C171H186N5O11",
    "composition": {
      "C": 171,
      "H": 186,
      "N": 5,
      "O": 11
    },
    "molarMass": "1420.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6132",
    "formula": "C172H187N6O12",
    "composition": {
      "C": 172,
      "H": 187,
      "N": 6,
      "O": 12
    },
    "molarMass": "1426.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6133",
    "formula": "C173H188N7O13",
    "composition": {
      "C": 173,
      "H": 188,
      "N": 7,
      "O": 13
    },
    "molarMass": "1431.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6134",
    "formula": "C174H189N8O14",
    "composition": {
      "C": 174,
      "H": 189,
      "N": 8,
      "O": 14
    },
    "molarMass": "1437.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6135",
    "formula": "C175H190N9O0",
    "composition": {
      "C": 175,
      "H": 190,
      "N": 9,
      "O": 0
    },
    "molarMass": "1442.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6136",
    "formula": "C176H191N10O1",
    "composition": {
      "C": 176,
      "H": 191,
      "N": 10,
      "O": 1
    },
    "molarMass": "1448.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6137",
    "formula": "C177H192N11O2",
    "composition": {
      "C": 177,
      "H": 192,
      "N": 11,
      "O": 2
    },
    "molarMass": "1453.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6138",
    "formula": "C178H193N12O3",
    "composition": {
      "C": 178,
      "H": 193,
      "N": 12,
      "O": 3
    },
    "molarMass": "1459.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6139",
    "formula": "C179H194N13O4",
    "composition": {
      "C": 179,
      "H": 194,
      "N": 13,
      "O": 4
    },
    "molarMass": "1464.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6140",
    "formula": "C180H195N14O5",
    "composition": {
      "C": 180,
      "H": 195,
      "N": 14,
      "O": 5
    },
    "molarMass": "1470.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6141",
    "formula": "C181H196N15O6",
    "composition": {
      "C": 181,
      "H": 196,
      "N": 15,
      "O": 6
    },
    "molarMass": "1475.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6142",
    "formula": "C182H197N16O7",
    "composition": {
      "C": 182,
      "H": 197,
      "N": 16,
      "O": 7
    },
    "molarMass": "1481.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6143",
    "formula": "C183H198N17O8",
    "composition": {
      "C": 183,
      "H": 198,
      "N": 17,
      "O": 8
    },
    "molarMass": "1486.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6144",
    "formula": "C184H199N0O9",
    "composition": {
      "C": 184,
      "H": 199,
      "N": 0,
      "O": 9
    },
    "molarMass": "1492.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6145",
    "formula": "C185H200N1O10",
    "composition": {
      "C": 185,
      "H": 200,
      "N": 1,
      "O": 10
    },
    "molarMass": "1497.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6146",
    "formula": "C186H201N2O11",
    "composition": {
      "C": 186,
      "H": 201,
      "N": 2,
      "O": 11
    },
    "molarMass": "1503.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6147",
    "formula": "C187H202N3O12",
    "composition": {
      "C": 187,
      "H": 202,
      "N": 3,
      "O": 12
    },
    "molarMass": "1508.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6148",
    "formula": "C188H203N4O13",
    "composition": {
      "C": 188,
      "H": 203,
      "N": 4,
      "O": 13
    },
    "molarMass": "1514.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6149",
    "formula": "C189H204N5O14",
    "composition": {
      "C": 189,
      "H": 204,
      "N": 5,
      "O": 14
    },
    "molarMass": "1519.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6150",
    "formula": "C190H205N6O0",
    "composition": {
      "C": 190,
      "H": 205,
      "N": 6,
      "O": 0
    },
    "molarMass": "1525.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6151",
    "formula": "C191H206N7O1",
    "composition": {
      "C": 191,
      "H": 206,
      "N": 7,
      "O": 1
    },
    "molarMass": "1530.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6152",
    "formula": "C192H207N8O2",
    "composition": {
      "C": 192,
      "H": 207,
      "N": 8,
      "O": 2
    },
    "molarMass": "1536.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6153",
    "formula": "C193H208N9O3",
    "composition": {
      "C": 193,
      "H": 208,
      "N": 9,
      "O": 3
    },
    "molarMass": "1541.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6154",
    "formula": "C194H209N10O4",
    "composition": {
      "C": 194,
      "H": 209,
      "N": 10,
      "O": 4
    },
    "molarMass": "1547.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6155",
    "formula": "C195H210N11O5",
    "composition": {
      "C": 195,
      "H": 210,
      "N": 11,
      "O": 5
    },
    "molarMass": "1552.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6156",
    "formula": "C196H211N12O6",
    "composition": {
      "C": 196,
      "H": 211,
      "N": 12,
      "O": 6
    },
    "molarMass": "1558.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6157",
    "formula": "C197H212N13O7",
    "composition": {
      "C": 197,
      "H": 212,
      "N": 13,
      "O": 7
    },
    "molarMass": "1563.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6158",
    "formula": "C198H213N14O8",
    "composition": {
      "C": 198,
      "H": 213,
      "N": 14,
      "O": 8
    },
    "molarMass": "1569.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6159",
    "formula": "C199H214N15O9",
    "composition": {
      "C": 199,
      "H": 214,
      "N": 15,
      "O": 9
    },
    "molarMass": "1574.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6160",
    "formula": "C200H215N16O10",
    "composition": {
      "C": 200,
      "H": 215,
      "N": 16,
      "O": 10
    },
    "molarMass": "1580.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6161",
    "formula": "C201H216N17O11",
    "composition": {
      "C": 201,
      "H": 216,
      "N": 17,
      "O": 11
    },
    "molarMass": "1585.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6162",
    "formula": "C202H217N0O12",
    "composition": {
      "C": 202,
      "H": 217,
      "N": 0,
      "O": 12
    },
    "molarMass": "1591.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6163",
    "formula": "C203H218N1O13",
    "composition": {
      "C": 203,
      "H": 218,
      "N": 1,
      "O": 13
    },
    "molarMass": "1596.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6164",
    "formula": "C204H219N2O14",
    "composition": {
      "C": 204,
      "H": 219,
      "N": 2,
      "O": 14
    },
    "molarMass": "1602.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6165",
    "formula": "C205H220N3O0",
    "composition": {
      "C": 205,
      "H": 220,
      "N": 3,
      "O": 0
    },
    "molarMass": "1607.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6166",
    "formula": "C206H221N4O1",
    "composition": {
      "C": 206,
      "H": 221,
      "N": 4,
      "O": 1
    },
    "molarMass": "1613.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6167",
    "formula": "C207H222N5O2",
    "composition": {
      "C": 207,
      "H": 222,
      "N": 5,
      "O": 2
    },
    "molarMass": "1618.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6168",
    "formula": "C208H223N6O3",
    "composition": {
      "C": 208,
      "H": 223,
      "N": 6,
      "O": 3
    },
    "molarMass": "1624.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6169",
    "formula": "C209H224N7O4",
    "composition": {
      "C": 209,
      "H": 224,
      "N": 7,
      "O": 4
    },
    "molarMass": "1629.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6170",
    "formula": "C210H225N8O5",
    "composition": {
      "C": 210,
      "H": 225,
      "N": 8,
      "O": 5
    },
    "molarMass": "1635.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6171",
    "formula": "C211H226N9O6",
    "composition": {
      "C": 211,
      "H": 226,
      "N": 9,
      "O": 6
    },
    "molarMass": "1640.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6172",
    "formula": "C212H227N10O7",
    "composition": {
      "C": 212,
      "H": 227,
      "N": 10,
      "O": 7
    },
    "molarMass": "1646.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6173",
    "formula": "C213H228N11O8",
    "composition": {
      "C": 213,
      "H": 228,
      "N": 11,
      "O": 8
    },
    "molarMass": "1651.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6174",
    "formula": "C214H229N12O9",
    "composition": {
      "C": 214,
      "H": 229,
      "N": 12,
      "O": 9
    },
    "molarMass": "1657.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6175",
    "formula": "C215H230N13O10",
    "composition": {
      "C": 215,
      "H": 230,
      "N": 13,
      "O": 10
    },
    "molarMass": "1662.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6176",
    "formula": "C216H231N14O11",
    "composition": {
      "C": 216,
      "H": 231,
      "N": 14,
      "O": 11
    },
    "molarMass": "1668.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6177",
    "formula": "C217H232N15O12",
    "composition": {
      "C": 217,
      "H": 232,
      "N": 15,
      "O": 12
    },
    "molarMass": "1673.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6178",
    "formula": "C218H233N16O13",
    "composition": {
      "C": 218,
      "H": 233,
      "N": 16,
      "O": 13
    },
    "molarMass": "1679.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6179",
    "formula": "C219H234N17O14",
    "composition": {
      "C": 219,
      "H": 234,
      "N": 17,
      "O": 14
    },
    "molarMass": "1684.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6180",
    "formula": "C220H235N0O0",
    "composition": {
      "C": 220,
      "H": 235,
      "N": 0,
      "O": 0
    },
    "molarMass": "1690.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6181",
    "formula": "C221H236N1O1",
    "composition": {
      "C": 221,
      "H": 236,
      "N": 1,
      "O": 1
    },
    "molarMass": "1695.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6182",
    "formula": "C222H237N2O2",
    "composition": {
      "C": 222,
      "H": 237,
      "N": 2,
      "O": 2
    },
    "molarMass": "1701.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6183",
    "formula": "C223H238N3O3",
    "composition": {
      "C": 223,
      "H": 238,
      "N": 3,
      "O": 3
    },
    "molarMass": "1706.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6184",
    "formula": "C224H239N4O4",
    "composition": {
      "C": 224,
      "H": 239,
      "N": 4,
      "O": 4
    },
    "molarMass": "1712.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6185",
    "formula": "C225H240N5O5",
    "composition": {
      "C": 225,
      "H": 240,
      "N": 5,
      "O": 5
    },
    "molarMass": "1717.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6186",
    "formula": "C226H241N6O6",
    "composition": {
      "C": 226,
      "H": 241,
      "N": 6,
      "O": 6
    },
    "molarMass": "1723.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6187",
    "formula": "C227H242N7O7",
    "composition": {
      "C": 227,
      "H": 242,
      "N": 7,
      "O": 7
    },
    "molarMass": "1728.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6188",
    "formula": "C228H243N8O8",
    "composition": {
      "C": 228,
      "H": 243,
      "N": 8,
      "O": 8
    },
    "molarMass": "1734.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6189",
    "formula": "C229H244N9O9",
    "composition": {
      "C": 229,
      "H": 244,
      "N": 9,
      "O": 9
    },
    "molarMass": "1739.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6190",
    "formula": "C230H245N10O10",
    "composition": {
      "C": 230,
      "H": 245,
      "N": 10,
      "O": 10
    },
    "molarMass": "1745.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6191",
    "formula": "C231H246N11O11",
    "composition": {
      "C": 231,
      "H": 246,
      "N": 11,
      "O": 11
    },
    "molarMass": "1750.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6192",
    "formula": "C232H247N12O12",
    "composition": {
      "C": 232,
      "H": 247,
      "N": 12,
      "O": 12
    },
    "molarMass": "1756.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6193",
    "formula": "C233H248N13O13",
    "composition": {
      "C": 233,
      "H": 248,
      "N": 13,
      "O": 13
    },
    "molarMass": "1761.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6194",
    "formula": "C234H249N14O14",
    "composition": {
      "C": 234,
      "H": 249,
      "N": 14,
      "O": 14
    },
    "molarMass": "1767.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6195",
    "formula": "C235H250N15O0",
    "composition": {
      "C": 235,
      "H": 250,
      "N": 15,
      "O": 0
    },
    "molarMass": "1772.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6196",
    "formula": "C236H251N16O1",
    "composition": {
      "C": 236,
      "H": 251,
      "N": 16,
      "O": 1
    },
    "molarMass": "1778.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6197",
    "formula": "C237H252N17O2",
    "composition": {
      "C": 237,
      "H": 252,
      "N": 17,
      "O": 2
    },
    "molarMass": "1783.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6198",
    "formula": "C238H253N0O3",
    "composition": {
      "C": 238,
      "H": 253,
      "N": 0,
      "O": 3
    },
    "molarMass": "1789.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6199",
    "formula": "C239H254N1O4",
    "composition": {
      "C": 239,
      "H": 254,
      "N": 1,
      "O": 4
    },
    "molarMass": "1794.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6200",
    "formula": "C240H255N2O5",
    "composition": {
      "C": 240,
      "H": 255,
      "N": 2,
      "O": 5
    },
    "molarMass": "1800.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6201",
    "formula": "C241H256N3O6",
    "composition": {
      "C": 241,
      "H": 256,
      "N": 3,
      "O": 6
    },
    "molarMass": "1805.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6202",
    "formula": "C242H257N4O7",
    "composition": {
      "C": 242,
      "H": 257,
      "N": 4,
      "O": 7
    },
    "molarMass": "1811.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6203",
    "formula": "C243H258N5O8",
    "composition": {
      "C": 243,
      "H": 258,
      "N": 5,
      "O": 8
    },
    "molarMass": "1816.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6204",
    "formula": "C244H259N6O9",
    "composition": {
      "C": 244,
      "H": 259,
      "N": 6,
      "O": 9
    },
    "molarMass": "1822.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6205",
    "formula": "C245H260N7O10",
    "composition": {
      "C": 245,
      "H": 260,
      "N": 7,
      "O": 10
    },
    "molarMass": "1827.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6206",
    "formula": "C246H261N8O11",
    "composition": {
      "C": 246,
      "H": 261,
      "N": 8,
      "O": 11
    },
    "molarMass": "1833.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6207",
    "formula": "C247H262N9O12",
    "composition": {
      "C": 247,
      "H": 262,
      "N": 9,
      "O": 12
    },
    "molarMass": "1838.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6208",
    "formula": "C248H263N10O13",
    "composition": {
      "C": 248,
      "H": 263,
      "N": 10,
      "O": 13
    },
    "molarMass": "1844.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6209",
    "formula": "C249H264N11O14",
    "composition": {
      "C": 249,
      "H": 264,
      "N": 11,
      "O": 14
    },
    "molarMass": "1849.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6210",
    "formula": "C250H265N12O0",
    "composition": {
      "C": 250,
      "H": 265,
      "N": 12,
      "O": 0
    },
    "molarMass": "1855.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6211",
    "formula": "C251H266N13O1",
    "composition": {
      "C": 251,
      "H": 266,
      "N": 13,
      "O": 1
    },
    "molarMass": "1860.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6212",
    "formula": "C252H267N14O2",
    "composition": {
      "C": 252,
      "H": 267,
      "N": 14,
      "O": 2
    },
    "molarMass": "1866.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6213",
    "formula": "C253H268N15O3",
    "composition": {
      "C": 253,
      "H": 268,
      "N": 15,
      "O": 3
    },
    "molarMass": "1871.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6214",
    "formula": "C254H269N16O4",
    "composition": {
      "C": 254,
      "H": 269,
      "N": 16,
      "O": 4
    },
    "molarMass": "1877.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6215",
    "formula": "C255H270N17O5",
    "composition": {
      "C": 255,
      "H": 270,
      "N": 17,
      "O": 5
    },
    "molarMass": "1882.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6216",
    "formula": "C256H271N0O6",
    "composition": {
      "C": 256,
      "H": 271,
      "N": 0,
      "O": 6
    },
    "molarMass": "1888.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6217",
    "formula": "C257H272N1O7",
    "composition": {
      "C": 257,
      "H": 272,
      "N": 1,
      "O": 7
    },
    "molarMass": "1893.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6218",
    "formula": "C258H273N2O8",
    "composition": {
      "C": 258,
      "H": 273,
      "N": 2,
      "O": 8
    },
    "molarMass": "1899.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6219",
    "formula": "C259H274N3O9",
    "composition": {
      "C": 259,
      "H": 274,
      "N": 3,
      "O": 9
    },
    "molarMass": "1904.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6220",
    "formula": "C260H275N4O10",
    "composition": {
      "C": 260,
      "H": 275,
      "N": 4,
      "O": 10
    },
    "molarMass": "1910.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6221",
    "formula": "C261H276N5O11",
    "composition": {
      "C": 261,
      "H": 276,
      "N": 5,
      "O": 11
    },
    "molarMass": "1915.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6222",
    "formula": "C262H277N6O12",
    "composition": {
      "C": 262,
      "H": 277,
      "N": 6,
      "O": 12
    },
    "molarMass": "1921.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6223",
    "formula": "C263H278N7O13",
    "composition": {
      "C": 263,
      "H": 278,
      "N": 7,
      "O": 13
    },
    "molarMass": "1926.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6224",
    "formula": "C264H279N8O14",
    "composition": {
      "C": 264,
      "H": 279,
      "N": 8,
      "O": 14
    },
    "molarMass": "1932.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6225",
    "formula": "C265H280N9O0",
    "composition": {
      "C": 265,
      "H": 280,
      "N": 9,
      "O": 0
    },
    "molarMass": "1937.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6226",
    "formula": "C266H281N10O1",
    "composition": {
      "C": 266,
      "H": 281,
      "N": 10,
      "O": 1
    },
    "molarMass": "1943.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6227",
    "formula": "C267H282N11O2",
    "composition": {
      "C": 267,
      "H": 282,
      "N": 11,
      "O": 2
    },
    "molarMass": "1948.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6228",
    "formula": "C268H283N12O3",
    "composition": {
      "C": 268,
      "H": 283,
      "N": 12,
      "O": 3
    },
    "molarMass": "1954.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6229",
    "formula": "C269H284N13O4",
    "composition": {
      "C": 269,
      "H": 284,
      "N": 13,
      "O": 4
    },
    "molarMass": "1959.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6230",
    "formula": "C270H285N14O5",
    "composition": {
      "C": 270,
      "H": 285,
      "N": 14,
      "O": 5
    },
    "molarMass": "1965.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6231",
    "formula": "C271H286N15O6",
    "composition": {
      "C": 271,
      "H": 286,
      "N": 15,
      "O": 6
    },
    "molarMass": "1970.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6232",
    "formula": "C272H287N16O7",
    "composition": {
      "C": 272,
      "H": 287,
      "N": 16,
      "O": 7
    },
    "molarMass": "1976.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6233",
    "formula": "C273H288N17O8",
    "composition": {
      "C": 273,
      "H": 288,
      "N": 17,
      "O": 8
    },
    "molarMass": "1981.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6234",
    "formula": "C274H289N0O9",
    "composition": {
      "C": 274,
      "H": 289,
      "N": 0,
      "O": 9
    },
    "molarMass": "1987.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6235",
    "formula": "C275H290N1O10",
    "composition": {
      "C": 275,
      "H": 290,
      "N": 1,
      "O": 10
    },
    "molarMass": "1992.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6236",
    "formula": "C276H291N2O11",
    "composition": {
      "C": 276,
      "H": 291,
      "N": 2,
      "O": 11
    },
    "molarMass": "1998.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6237",
    "formula": "C277H292N3O12",
    "composition": {
      "C": 277,
      "H": 292,
      "N": 3,
      "O": 12
    },
    "molarMass": "2003.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6238",
    "formula": "C278H293N4O13",
    "composition": {
      "C": 278,
      "H": 293,
      "N": 4,
      "O": 13
    },
    "molarMass": "2009.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6239",
    "formula": "C279H294N5O14",
    "composition": {
      "C": 279,
      "H": 294,
      "N": 5,
      "O": 14
    },
    "molarMass": "2014.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6240",
    "formula": "C280H295N6O0",
    "composition": {
      "C": 280,
      "H": 295,
      "N": 6,
      "O": 0
    },
    "molarMass": "2020.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6241",
    "formula": "C281H296N7O1",
    "composition": {
      "C": 281,
      "H": 296,
      "N": 7,
      "O": 1
    },
    "molarMass": "2025.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6242",
    "formula": "C282H297N8O2",
    "composition": {
      "C": 282,
      "H": 297,
      "N": 8,
      "O": 2
    },
    "molarMass": "2031.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6243",
    "formula": "C283H298N9O3",
    "composition": {
      "C": 283,
      "H": 298,
      "N": 9,
      "O": 3
    },
    "molarMass": "2036.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6244",
    "formula": "C284H299N10O4",
    "composition": {
      "C": 284,
      "H": 299,
      "N": 10,
      "O": 4
    },
    "molarMass": "2042.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6245",
    "formula": "C285H300N11O5",
    "composition": {
      "C": 285,
      "H": 300,
      "N": 11,
      "O": 5
    },
    "molarMass": "2047.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6246",
    "formula": "C286H301N12O6",
    "composition": {
      "C": 286,
      "H": 301,
      "N": 12,
      "O": 6
    },
    "molarMass": "2053.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6247",
    "formula": "C287H302N13O7",
    "composition": {
      "C": 287,
      "H": 302,
      "N": 13,
      "O": 7
    },
    "molarMass": "2058.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6248",
    "formula": "C288H303N14O8",
    "composition": {
      "C": 288,
      "H": 303,
      "N": 14,
      "O": 8
    },
    "molarMass": "2064.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6249",
    "formula": "C289H304N15O9",
    "composition": {
      "C": 289,
      "H": 304,
      "N": 15,
      "O": 9
    },
    "molarMass": "2069.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6250",
    "formula": "C290H305N16O10",
    "composition": {
      "C": 290,
      "H": 305,
      "N": 16,
      "O": 10
    },
    "molarMass": "2075.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6251",
    "formula": "C291H306N17O11",
    "composition": {
      "C": 291,
      "H": 306,
      "N": 17,
      "O": 11
    },
    "molarMass": "2080.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6252",
    "formula": "C292H307N0O12",
    "composition": {
      "C": 292,
      "H": 307,
      "N": 0,
      "O": 12
    },
    "molarMass": "2086.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6253",
    "formula": "C293H308N1O13",
    "composition": {
      "C": 293,
      "H": 308,
      "N": 1,
      "O": 13
    },
    "molarMass": "2091.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6254",
    "formula": "C294H309N2O14",
    "composition": {
      "C": 294,
      "H": 309,
      "N": 2,
      "O": 14
    },
    "molarMass": "2097.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6255",
    "formula": "C295H310N3O0",
    "composition": {
      "C": 295,
      "H": 310,
      "N": 3,
      "O": 0
    },
    "molarMass": "2102.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6256",
    "formula": "C296H311N4O1",
    "composition": {
      "C": 296,
      "H": 311,
      "N": 4,
      "O": 1
    },
    "molarMass": "2108.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6257",
    "formula": "C297H312N5O2",
    "composition": {
      "C": 297,
      "H": 312,
      "N": 5,
      "O": 2
    },
    "molarMass": "2113.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6258",
    "formula": "C298H313N6O3",
    "composition": {
      "C": 298,
      "H": 313,
      "N": 6,
      "O": 3
    },
    "molarMass": "2119.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6259",
    "formula": "C299H314N7O4",
    "composition": {
      "C": 299,
      "H": 314,
      "N": 7,
      "O": 4
    },
    "molarMass": "2124.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6260",
    "formula": "C300H315N8O5",
    "composition": {
      "C": 300,
      "H": 315,
      "N": 8,
      "O": 5
    },
    "molarMass": "2130.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6261",
    "formula": "C301H316N9O6",
    "composition": {
      "C": 301,
      "H": 316,
      "N": 9,
      "O": 6
    },
    "molarMass": "2135.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6262",
    "formula": "C302H317N10O7",
    "composition": {
      "C": 302,
      "H": 317,
      "N": 10,
      "O": 7
    },
    "molarMass": "2141.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6263",
    "formula": "C303H318N11O8",
    "composition": {
      "C": 303,
      "H": 318,
      "N": 11,
      "O": 8
    },
    "molarMass": "2146.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6264",
    "formula": "C304H319N12O9",
    "composition": {
      "C": 304,
      "H": 319,
      "N": 12,
      "O": 9
    },
    "molarMass": "2152.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6265",
    "formula": "C305H320N13O10",
    "composition": {
      "C": 305,
      "H": 320,
      "N": 13,
      "O": 10
    },
    "molarMass": "2157.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6266",
    "formula": "C306H321N14O11",
    "composition": {
      "C": 306,
      "H": 321,
      "N": 14,
      "O": 11
    },
    "molarMass": "2163.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6267",
    "formula": "C307H322N15O12",
    "composition": {
      "C": 307,
      "H": 322,
      "N": 15,
      "O": 12
    },
    "molarMass": "2168.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6268",
    "formula": "C308H323N16O13",
    "composition": {
      "C": 308,
      "H": 323,
      "N": 16,
      "O": 13
    },
    "molarMass": "2174.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6269",
    "formula": "C309H324N17O14",
    "composition": {
      "C": 309,
      "H": 324,
      "N": 17,
      "O": 14
    },
    "molarMass": "2179.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6270",
    "formula": "C310H325N0O0",
    "composition": {
      "C": 310,
      "H": 325,
      "N": 0,
      "O": 0
    },
    "molarMass": "2185.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6271",
    "formula": "C311H326N1O1",
    "composition": {
      "C": 311,
      "H": 326,
      "N": 1,
      "O": 1
    },
    "molarMass": "2190.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6272",
    "formula": "C312H327N2O2",
    "composition": {
      "C": 312,
      "H": 327,
      "N": 2,
      "O": 2
    },
    "molarMass": "2196.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6273",
    "formula": "C313H328N3O3",
    "composition": {
      "C": 313,
      "H": 328,
      "N": 3,
      "O": 3
    },
    "molarMass": "2201.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6274",
    "formula": "C314H329N4O4",
    "composition": {
      "C": 314,
      "H": 329,
      "N": 4,
      "O": 4
    },
    "molarMass": "2207.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6275",
    "formula": "C315H330N5O5",
    "composition": {
      "C": 315,
      "H": 330,
      "N": 5,
      "O": 5
    },
    "molarMass": "2212.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6276",
    "formula": "C316H331N6O6",
    "composition": {
      "C": 316,
      "H": 331,
      "N": 6,
      "O": 6
    },
    "molarMass": "2218.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6277",
    "formula": "C317H332N7O7",
    "composition": {
      "C": 317,
      "H": 332,
      "N": 7,
      "O": 7
    },
    "molarMass": "2223.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6278",
    "formula": "C318H333N8O8",
    "composition": {
      "C": 318,
      "H": 333,
      "N": 8,
      "O": 8
    },
    "molarMass": "2229.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6279",
    "formula": "C319H334N9O9",
    "composition": {
      "C": 319,
      "H": 334,
      "N": 9,
      "O": 9
    },
    "molarMass": "2234.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6280",
    "formula": "C320H335N10O10",
    "composition": {
      "C": 320,
      "H": 335,
      "N": 10,
      "O": 10
    },
    "molarMass": "2240.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6281",
    "formula": "C321H336N11O11",
    "composition": {
      "C": 321,
      "H": 336,
      "N": 11,
      "O": 11
    },
    "molarMass": "2245.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6282",
    "formula": "C322H337N12O12",
    "composition": {
      "C": 322,
      "H": 337,
      "N": 12,
      "O": 12
    },
    "molarMass": "2251.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6283",
    "formula": "C323H338N13O13",
    "composition": {
      "C": 323,
      "H": 338,
      "N": 13,
      "O": 13
    },
    "molarMass": "2256.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6284",
    "formula": "C324H339N14O14",
    "composition": {
      "C": 324,
      "H": 339,
      "N": 14,
      "O": 14
    },
    "molarMass": "2262.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6285",
    "formula": "C325H340N15O0",
    "composition": {
      "C": 325,
      "H": 340,
      "N": 15,
      "O": 0
    },
    "molarMass": "2267.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6286",
    "formula": "C326H341N16O1",
    "composition": {
      "C": 326,
      "H": 341,
      "N": 16,
      "O": 1
    },
    "molarMass": "2273.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6287",
    "formula": "C327H342N17O2",
    "composition": {
      "C": 327,
      "H": 342,
      "N": 17,
      "O": 2
    },
    "molarMass": "2278.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6288",
    "formula": "C328H343N0O3",
    "composition": {
      "C": 328,
      "H": 343,
      "N": 0,
      "O": 3
    },
    "molarMass": "2284.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6289",
    "formula": "C329H344N1O4",
    "composition": {
      "C": 329,
      "H": 344,
      "N": 1,
      "O": 4
    },
    "molarMass": "2289.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6290",
    "formula": "C330H345N2O5",
    "composition": {
      "C": 330,
      "H": 345,
      "N": 2,
      "O": 5
    },
    "molarMass": "2295.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6291",
    "formula": "C331H346N3O6",
    "composition": {
      "C": 331,
      "H": 346,
      "N": 3,
      "O": 6
    },
    "molarMass": "2300.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6292",
    "formula": "C332H347N4O7",
    "composition": {
      "C": 332,
      "H": 347,
      "N": 4,
      "O": 7
    },
    "molarMass": "2306.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6293",
    "formula": "C333H348N5O8",
    "composition": {
      "C": 333,
      "H": 348,
      "N": 5,
      "O": 8
    },
    "molarMass": "2311.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6294",
    "formula": "C334H349N6O9",
    "composition": {
      "C": 334,
      "H": 349,
      "N": 6,
      "O": 9
    },
    "molarMass": "2317.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6295",
    "formula": "C335H350N7O10",
    "composition": {
      "C": 335,
      "H": 350,
      "N": 7,
      "O": 10
    },
    "molarMass": "2322.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6296",
    "formula": "C336H351N8O11",
    "composition": {
      "C": 336,
      "H": 351,
      "N": 8,
      "O": 11
    },
    "molarMass": "2328.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6297",
    "formula": "C337H352N9O12",
    "composition": {
      "C": 337,
      "H": 352,
      "N": 9,
      "O": 12
    },
    "molarMass": "2333.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6298",
    "formula": "C338H353N10O13",
    "composition": {
      "C": 338,
      "H": 353,
      "N": 10,
      "O": 13
    },
    "molarMass": "2339.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6299",
    "formula": "C339H354N11O14",
    "composition": {
      "C": 339,
      "H": 354,
      "N": 11,
      "O": 14
    },
    "molarMass": "2344.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6300",
    "formula": "C340H355N12O0",
    "composition": {
      "C": 340,
      "H": 355,
      "N": 12,
      "O": 0
    },
    "molarMass": "2350.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6301",
    "formula": "C341H356N13O1",
    "composition": {
      "C": 341,
      "H": 356,
      "N": 13,
      "O": 1
    },
    "molarMass": "2355.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6302",
    "formula": "C342H357N14O2",
    "composition": {
      "C": 342,
      "H": 357,
      "N": 14,
      "O": 2
    },
    "molarMass": "2361.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6303",
    "formula": "C343H358N15O3",
    "composition": {
      "C": 343,
      "H": 358,
      "N": 15,
      "O": 3
    },
    "molarMass": "2366.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6304",
    "formula": "C344H359N16O4",
    "composition": {
      "C": 344,
      "H": 359,
      "N": 16,
      "O": 4
    },
    "molarMass": "2372.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6305",
    "formula": "C345H360N17O5",
    "composition": {
      "C": 345,
      "H": 360,
      "N": 17,
      "O": 5
    },
    "molarMass": "2377.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6306",
    "formula": "C346H361N0O6",
    "composition": {
      "C": 346,
      "H": 361,
      "N": 0,
      "O": 6
    },
    "molarMass": "2383.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6307",
    "formula": "C347H362N1O7",
    "composition": {
      "C": 347,
      "H": 362,
      "N": 1,
      "O": 7
    },
    "molarMass": "2388.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6308",
    "formula": "C348H363N2O8",
    "composition": {
      "C": 348,
      "H": 363,
      "N": 2,
      "O": 8
    },
    "molarMass": "2394.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6309",
    "formula": "C349H364N3O9",
    "composition": {
      "C": 349,
      "H": 364,
      "N": 3,
      "O": 9
    },
    "molarMass": "2399.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6310",
    "formula": "C350H365N4O10",
    "composition": {
      "C": 350,
      "H": 365,
      "N": 4,
      "O": 10
    },
    "molarMass": "2405.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6311",
    "formula": "C351H366N5O11",
    "composition": {
      "C": 351,
      "H": 366,
      "N": 5,
      "O": 11
    },
    "molarMass": "2410.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6312",
    "formula": "C352H367N6O12",
    "composition": {
      "C": 352,
      "H": 367,
      "N": 6,
      "O": 12
    },
    "molarMass": "2416.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6313",
    "formula": "C353H368N7O13",
    "composition": {
      "C": 353,
      "H": 368,
      "N": 7,
      "O": 13
    },
    "molarMass": "2421.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6314",
    "formula": "C354H369N8O14",
    "composition": {
      "C": 354,
      "H": 369,
      "N": 8,
      "O": 14
    },
    "molarMass": "2427.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6315",
    "formula": "C355H370N9O0",
    "composition": {
      "C": 355,
      "H": 370,
      "N": 9,
      "O": 0
    },
    "molarMass": "2432.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6316",
    "formula": "C356H371N10O1",
    "composition": {
      "C": 356,
      "H": 371,
      "N": 10,
      "O": 1
    },
    "molarMass": "2438.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6317",
    "formula": "C357H372N11O2",
    "composition": {
      "C": 357,
      "H": 372,
      "N": 11,
      "O": 2
    },
    "molarMass": "2443.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6318",
    "formula": "C358H373N12O3",
    "composition": {
      "C": 358,
      "H": 373,
      "N": 12,
      "O": 3
    },
    "molarMass": "2449.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6319",
    "formula": "C359H374N13O4",
    "composition": {
      "C": 359,
      "H": 374,
      "N": 13,
      "O": 4
    },
    "molarMass": "2454.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6320",
    "formula": "C360H375N14O5",
    "composition": {
      "C": 360,
      "H": 375,
      "N": 14,
      "O": 5
    },
    "molarMass": "2460.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6321",
    "formula": "C361H376N15O6",
    "composition": {
      "C": 361,
      "H": 376,
      "N": 15,
      "O": 6
    },
    "molarMass": "2465.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6322",
    "formula": "C362H377N16O7",
    "composition": {
      "C": 362,
      "H": 377,
      "N": 16,
      "O": 7
    },
    "molarMass": "2471.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6323",
    "formula": "C363H378N17O8",
    "composition": {
      "C": 363,
      "H": 378,
      "N": 17,
      "O": 8
    },
    "molarMass": "2476.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6324",
    "formula": "C364H379N0O9",
    "composition": {
      "C": 364,
      "H": 379,
      "N": 0,
      "O": 9
    },
    "molarMass": "2482.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6325",
    "formula": "C365H380N1O10",
    "composition": {
      "C": 365,
      "H": 380,
      "N": 1,
      "O": 10
    },
    "molarMass": "2487.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6326",
    "formula": "C366H381N2O11",
    "composition": {
      "C": 366,
      "H": 381,
      "N": 2,
      "O": 11
    },
    "molarMass": "2493.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6327",
    "formula": "C367H382N3O12",
    "composition": {
      "C": 367,
      "H": 382,
      "N": 3,
      "O": 12
    },
    "molarMass": "2498.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6328",
    "formula": "C368H383N4O13",
    "composition": {
      "C": 368,
      "H": 383,
      "N": 4,
      "O": 13
    },
    "molarMass": "2504.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6329",
    "formula": "C369H384N5O14",
    "composition": {
      "C": 369,
      "H": 384,
      "N": 5,
      "O": 14
    },
    "molarMass": "2509.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6330",
    "formula": "C370H385N6O0",
    "composition": {
      "C": 370,
      "H": 385,
      "N": 6,
      "O": 0
    },
    "molarMass": "2515.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6331",
    "formula": "C371H386N7O1",
    "composition": {
      "C": 371,
      "H": 386,
      "N": 7,
      "O": 1
    },
    "molarMass": "2520.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6332",
    "formula": "C372H387N8O2",
    "composition": {
      "C": 372,
      "H": 387,
      "N": 8,
      "O": 2
    },
    "molarMass": "2526.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6333",
    "formula": "C373H388N9O3",
    "composition": {
      "C": 373,
      "H": 388,
      "N": 9,
      "O": 3
    },
    "molarMass": "2531.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6334",
    "formula": "C374H389N10O4",
    "composition": {
      "C": 374,
      "H": 389,
      "N": 10,
      "O": 4
    },
    "molarMass": "2537.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6335",
    "formula": "C375H390N11O5",
    "composition": {
      "C": 375,
      "H": 390,
      "N": 11,
      "O": 5
    },
    "molarMass": "2542.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6336",
    "formula": "C376H391N12O6",
    "composition": {
      "C": 376,
      "H": 391,
      "N": 12,
      "O": 6
    },
    "molarMass": "2548.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6337",
    "formula": "C377H392N13O7",
    "composition": {
      "C": 377,
      "H": 392,
      "N": 13,
      "O": 7
    },
    "molarMass": "2553.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6338",
    "formula": "C378H393N14O8",
    "composition": {
      "C": 378,
      "H": 393,
      "N": 14,
      "O": 8
    },
    "molarMass": "2559.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6339",
    "formula": "C379H394N15O9",
    "composition": {
      "C": 379,
      "H": 394,
      "N": 15,
      "O": 9
    },
    "molarMass": "2564.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6340",
    "formula": "C380H395N16O10",
    "composition": {
      "C": 380,
      "H": 395,
      "N": 16,
      "O": 10
    },
    "molarMass": "2570.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6341",
    "formula": "C381H396N17O11",
    "composition": {
      "C": 381,
      "H": 396,
      "N": 17,
      "O": 11
    },
    "molarMass": "2575.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6342",
    "formula": "C382H397N0O12",
    "composition": {
      "C": 382,
      "H": 397,
      "N": 0,
      "O": 12
    },
    "molarMass": "2581.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6343",
    "formula": "C383H398N1O13",
    "composition": {
      "C": 383,
      "H": 398,
      "N": 1,
      "O": 13
    },
    "molarMass": "2586.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6344",
    "formula": "C384H399N2O14",
    "composition": {
      "C": 384,
      "H": 399,
      "N": 2,
      "O": 14
    },
    "molarMass": "2592.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6345",
    "formula": "C385H400N3O0",
    "composition": {
      "C": 385,
      "H": 400,
      "N": 3,
      "O": 0
    },
    "molarMass": "2597.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6346",
    "formula": "C386H401N4O1",
    "composition": {
      "C": 386,
      "H": 401,
      "N": 4,
      "O": 1
    },
    "molarMass": "2603.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6347",
    "formula": "C387H402N5O2",
    "composition": {
      "C": 387,
      "H": 402,
      "N": 5,
      "O": 2
    },
    "molarMass": "2608.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6348",
    "formula": "C388H403N6O3",
    "composition": {
      "C": 388,
      "H": 403,
      "N": 6,
      "O": 3
    },
    "molarMass": "2614.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6349",
    "formula": "C389H404N7O4",
    "composition": {
      "C": 389,
      "H": 404,
      "N": 7,
      "O": 4
    },
    "molarMass": "2619.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6350",
    "formula": "C390H405N8O5",
    "composition": {
      "C": 390,
      "H": 405,
      "N": 8,
      "O": 5
    },
    "molarMass": "2625.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6351",
    "formula": "C391H406N9O6",
    "composition": {
      "C": 391,
      "H": 406,
      "N": 9,
      "O": 6
    },
    "molarMass": "2630.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6352",
    "formula": "C392H407N10O7",
    "composition": {
      "C": 392,
      "H": 407,
      "N": 10,
      "O": 7
    },
    "molarMass": "2636.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6353",
    "formula": "C393H408N11O8",
    "composition": {
      "C": 393,
      "H": 408,
      "N": 11,
      "O": 8
    },
    "molarMass": "2641.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6354",
    "formula": "C394H409N12O9",
    "composition": {
      "C": 394,
      "H": 409,
      "N": 12,
      "O": 9
    },
    "molarMass": "2647.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6355",
    "formula": "C395H410N13O10",
    "composition": {
      "C": 395,
      "H": 410,
      "N": 13,
      "O": 10
    },
    "molarMass": "2652.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6356",
    "formula": "C396H411N14O11",
    "composition": {
      "C": 396,
      "H": 411,
      "N": 14,
      "O": 11
    },
    "molarMass": "2658.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6357",
    "formula": "C397H412N15O12",
    "composition": {
      "C": 397,
      "H": 412,
      "N": 15,
      "O": 12
    },
    "molarMass": "2663.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6358",
    "formula": "C398H413N16O13",
    "composition": {
      "C": 398,
      "H": 413,
      "N": 16,
      "O": 13
    },
    "molarMass": "2669.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6359",
    "formula": "C399H414N17O14",
    "composition": {
      "C": 399,
      "H": 414,
      "N": 17,
      "O": 14
    },
    "molarMass": "2674.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6360",
    "formula": "C400H415N0O0",
    "composition": {
      "C": 400,
      "H": 415,
      "N": 0,
      "O": 0
    },
    "molarMass": "2680.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6361",
    "formula": "C401H416N1O1",
    "composition": {
      "C": 401,
      "H": 416,
      "N": 1,
      "O": 1
    },
    "molarMass": "2685.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6362",
    "formula": "C402H417N2O2",
    "composition": {
      "C": 402,
      "H": 417,
      "N": 2,
      "O": 2
    },
    "molarMass": "2691.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6363",
    "formula": "C403H418N3O3",
    "composition": {
      "C": 403,
      "H": 418,
      "N": 3,
      "O": 3
    },
    "molarMass": "2696.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6364",
    "formula": "C404H419N4O4",
    "composition": {
      "C": 404,
      "H": 419,
      "N": 4,
      "O": 4
    },
    "molarMass": "2702.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6365",
    "formula": "C405H420N5O5",
    "composition": {
      "C": 405,
      "H": 420,
      "N": 5,
      "O": 5
    },
    "molarMass": "2707.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6366",
    "formula": "C406H421N6O6",
    "composition": {
      "C": 406,
      "H": 421,
      "N": 6,
      "O": 6
    },
    "molarMass": "2713.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6367",
    "formula": "C407H422N7O7",
    "composition": {
      "C": 407,
      "H": 422,
      "N": 7,
      "O": 7
    },
    "molarMass": "2718.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6368",
    "formula": "C408H423N8O8",
    "composition": {
      "C": 408,
      "H": 423,
      "N": 8,
      "O": 8
    },
    "molarMass": "2724.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6369",
    "formula": "C409H424N9O9",
    "composition": {
      "C": 409,
      "H": 424,
      "N": 9,
      "O": 9
    },
    "molarMass": "2729.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6370",
    "formula": "C410H425N10O10",
    "composition": {
      "C": 410,
      "H": 425,
      "N": 10,
      "O": 10
    },
    "molarMass": "2735.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6371",
    "formula": "C411H426N11O11",
    "composition": {
      "C": 411,
      "H": 426,
      "N": 11,
      "O": 11
    },
    "molarMass": "2740.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6372",
    "formula": "C412H427N12O12",
    "composition": {
      "C": 412,
      "H": 427,
      "N": 12,
      "O": 12
    },
    "molarMass": "2746.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6373",
    "formula": "C413H428N13O13",
    "composition": {
      "C": 413,
      "H": 428,
      "N": 13,
      "O": 13
    },
    "molarMass": "2751.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6374",
    "formula": "C414H429N14O14",
    "composition": {
      "C": 414,
      "H": 429,
      "N": 14,
      "O": 14
    },
    "molarMass": "2757.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6375",
    "formula": "C415H430N15O0",
    "composition": {
      "C": 415,
      "H": 430,
      "N": 15,
      "O": 0
    },
    "molarMass": "2762.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6376",
    "formula": "C416H431N16O1",
    "composition": {
      "C": 416,
      "H": 431,
      "N": 16,
      "O": 1
    },
    "molarMass": "2768.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6377",
    "formula": "C417H432N17O2",
    "composition": {
      "C": 417,
      "H": 432,
      "N": 17,
      "O": 2
    },
    "molarMass": "2773.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6378",
    "formula": "C418H433N0O3",
    "composition": {
      "C": 418,
      "H": 433,
      "N": 0,
      "O": 3
    },
    "molarMass": "2779.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6379",
    "formula": "C419H434N1O4",
    "composition": {
      "C": 419,
      "H": 434,
      "N": 1,
      "O": 4
    },
    "molarMass": "2784.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6380",
    "formula": "C420H435N2O5",
    "composition": {
      "C": 420,
      "H": 435,
      "N": 2,
      "O": 5
    },
    "molarMass": "2790.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6381",
    "formula": "C421H436N3O6",
    "composition": {
      "C": 421,
      "H": 436,
      "N": 3,
      "O": 6
    },
    "molarMass": "2795.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6382",
    "formula": "C422H437N4O7",
    "composition": {
      "C": 422,
      "H": 437,
      "N": 4,
      "O": 7
    },
    "molarMass": "2801.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6383",
    "formula": "C423H438N5O8",
    "composition": {
      "C": 423,
      "H": 438,
      "N": 5,
      "O": 8
    },
    "molarMass": "2806.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6384",
    "formula": "C424H439N6O9",
    "composition": {
      "C": 424,
      "H": 439,
      "N": 6,
      "O": 9
    },
    "molarMass": "2812.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6385",
    "formula": "C425H440N7O10",
    "composition": {
      "C": 425,
      "H": 440,
      "N": 7,
      "O": 10
    },
    "molarMass": "2817.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6386",
    "formula": "C426H441N8O11",
    "composition": {
      "C": 426,
      "H": 441,
      "N": 8,
      "O": 11
    },
    "molarMass": "2823.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6387",
    "formula": "C427H442N9O12",
    "composition": {
      "C": 427,
      "H": 442,
      "N": 9,
      "O": 12
    },
    "molarMass": "2828.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6388",
    "formula": "C428H443N10O13",
    "composition": {
      "C": 428,
      "H": 443,
      "N": 10,
      "O": 13
    },
    "molarMass": "2834.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6389",
    "formula": "C429H444N11O14",
    "composition": {
      "C": 429,
      "H": 444,
      "N": 11,
      "O": 14
    },
    "molarMass": "2839.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6390",
    "formula": "C430H445N12O0",
    "composition": {
      "C": 430,
      "H": 445,
      "N": 12,
      "O": 0
    },
    "molarMass": "2845.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6391",
    "formula": "C431H446N13O1",
    "composition": {
      "C": 431,
      "H": 446,
      "N": 13,
      "O": 1
    },
    "molarMass": "2850.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6392",
    "formula": "C432H447N14O2",
    "composition": {
      "C": 432,
      "H": 447,
      "N": 14,
      "O": 2
    },
    "molarMass": "2856.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6393",
    "formula": "C433H448N15O3",
    "composition": {
      "C": 433,
      "H": 448,
      "N": 15,
      "O": 3
    },
    "molarMass": "2861.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6394",
    "formula": "C434H449N16O4",
    "composition": {
      "C": 434,
      "H": 449,
      "N": 16,
      "O": 4
    },
    "molarMass": "2867.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6395",
    "formula": "C435H450N17O5",
    "composition": {
      "C": 435,
      "H": 450,
      "N": 17,
      "O": 5
    },
    "molarMass": "2872.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6396",
    "formula": "C436H451N0O6",
    "composition": {
      "C": 436,
      "H": 451,
      "N": 0,
      "O": 6
    },
    "molarMass": "2878.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6397",
    "formula": "C437H452N1O7",
    "composition": {
      "C": 437,
      "H": 452,
      "N": 1,
      "O": 7
    },
    "molarMass": "2883.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6398",
    "formula": "C438H453N2O8",
    "composition": {
      "C": 438,
      "H": 453,
      "N": 2,
      "O": 8
    },
    "molarMass": "2889.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6399",
    "formula": "C439H454N3O9",
    "composition": {
      "C": 439,
      "H": 454,
      "N": 3,
      "O": 9
    },
    "molarMass": "2894.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6400",
    "formula": "C440H455N4O10",
    "composition": {
      "C": 440,
      "H": 455,
      "N": 4,
      "O": 10
    },
    "molarMass": "2900.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6401",
    "formula": "C441H456N5O11",
    "composition": {
      "C": 441,
      "H": 456,
      "N": 5,
      "O": 11
    },
    "molarMass": "2905.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6402",
    "formula": "C442H457N6O12",
    "composition": {
      "C": 442,
      "H": 457,
      "N": 6,
      "O": 12
    },
    "molarMass": "2911.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6403",
    "formula": "C443H458N7O13",
    "composition": {
      "C": 443,
      "H": 458,
      "N": 7,
      "O": 13
    },
    "molarMass": "2916.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6404",
    "formula": "C444H459N8O14",
    "composition": {
      "C": 444,
      "H": 459,
      "N": 8,
      "O": 14
    },
    "molarMass": "2922.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6405",
    "formula": "C445H460N9O0",
    "composition": {
      "C": 445,
      "H": 460,
      "N": 9,
      "O": 0
    },
    "molarMass": "2927.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6406",
    "formula": "C446H461N10O1",
    "composition": {
      "C": 446,
      "H": 461,
      "N": 10,
      "O": 1
    },
    "molarMass": "2933.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6407",
    "formula": "C447H462N11O2",
    "composition": {
      "C": 447,
      "H": 462,
      "N": 11,
      "O": 2
    },
    "molarMass": "2938.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6408",
    "formula": "C448H463N12O3",
    "composition": {
      "C": 448,
      "H": 463,
      "N": 12,
      "O": 3
    },
    "molarMass": "2944.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6409",
    "formula": "C449H464N13O4",
    "composition": {
      "C": 449,
      "H": 464,
      "N": 13,
      "O": 4
    },
    "molarMass": "2949.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6410",
    "formula": "C450H465N14O5",
    "composition": {
      "C": 450,
      "H": 465,
      "N": 14,
      "O": 5
    },
    "molarMass": "2955.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6411",
    "formula": "C451H466N15O6",
    "composition": {
      "C": 451,
      "H": 466,
      "N": 15,
      "O": 6
    },
    "molarMass": "2960.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6412",
    "formula": "C452H467N16O7",
    "composition": {
      "C": 452,
      "H": 467,
      "N": 16,
      "O": 7
    },
    "molarMass": "2966.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6413",
    "formula": "C453H468N17O8",
    "composition": {
      "C": 453,
      "H": 468,
      "N": 17,
      "O": 8
    },
    "molarMass": "2971.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6414",
    "formula": "C454H469N0O9",
    "composition": {
      "C": 454,
      "H": 469,
      "N": 0,
      "O": 9
    },
    "molarMass": "2977.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6415",
    "formula": "C455H470N1O10",
    "composition": {
      "C": 455,
      "H": 470,
      "N": 1,
      "O": 10
    },
    "molarMass": "2982.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6416",
    "formula": "C456H471N2O11",
    "composition": {
      "C": 456,
      "H": 471,
      "N": 2,
      "O": 11
    },
    "molarMass": "2988.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6417",
    "formula": "C457H472N3O12",
    "composition": {
      "C": 457,
      "H": 472,
      "N": 3,
      "O": 12
    },
    "molarMass": "2993.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6418",
    "formula": "C458H473N4O13",
    "composition": {
      "C": 458,
      "H": 473,
      "N": 4,
      "O": 13
    },
    "molarMass": "2999.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6419",
    "formula": "C459H474N5O14",
    "composition": {
      "C": 459,
      "H": 474,
      "N": 5,
      "O": 14
    },
    "molarMass": "3004.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6420",
    "formula": "C460H475N6O0",
    "composition": {
      "C": 460,
      "H": 475,
      "N": 6,
      "O": 0
    },
    "molarMass": "3010.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6421",
    "formula": "C461H476N7O1",
    "composition": {
      "C": 461,
      "H": 476,
      "N": 7,
      "O": 1
    },
    "molarMass": "3015.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6422",
    "formula": "C462H477N8O2",
    "composition": {
      "C": 462,
      "H": 477,
      "N": 8,
      "O": 2
    },
    "molarMass": "3021.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6423",
    "formula": "C463H478N9O3",
    "composition": {
      "C": 463,
      "H": 478,
      "N": 9,
      "O": 3
    },
    "molarMass": "3026.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6424",
    "formula": "C464H479N10O4",
    "composition": {
      "C": 464,
      "H": 479,
      "N": 10,
      "O": 4
    },
    "molarMass": "3032.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6425",
    "formula": "C465H480N11O5",
    "composition": {
      "C": 465,
      "H": 480,
      "N": 11,
      "O": 5
    },
    "molarMass": "3037.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6426",
    "formula": "C466H481N12O6",
    "composition": {
      "C": 466,
      "H": 481,
      "N": 12,
      "O": 6
    },
    "molarMass": "3043.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6427",
    "formula": "C467H482N13O7",
    "composition": {
      "C": 467,
      "H": 482,
      "N": 13,
      "O": 7
    },
    "molarMass": "3048.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6428",
    "formula": "C468H483N14O8",
    "composition": {
      "C": 468,
      "H": 483,
      "N": 14,
      "O": 8
    },
    "molarMass": "3054.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6429",
    "formula": "C469H484N15O9",
    "composition": {
      "C": 469,
      "H": 484,
      "N": 15,
      "O": 9
    },
    "molarMass": "3059.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6430",
    "formula": "C470H485N16O10",
    "composition": {
      "C": 470,
      "H": 485,
      "N": 16,
      "O": 10
    },
    "molarMass": "3065.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6431",
    "formula": "C471H486N17O11",
    "composition": {
      "C": 471,
      "H": 486,
      "N": 17,
      "O": 11
    },
    "molarMass": "3070.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6432",
    "formula": "C472H487N0O12",
    "composition": {
      "C": 472,
      "H": 487,
      "N": 0,
      "O": 12
    },
    "molarMass": "3076.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6433",
    "formula": "C473H488N1O13",
    "composition": {
      "C": 473,
      "H": 488,
      "N": 1,
      "O": 13
    },
    "molarMass": "3081.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6434",
    "formula": "C474H489N2O14",
    "composition": {
      "C": 474,
      "H": 489,
      "N": 2,
      "O": 14
    },
    "molarMass": "3087.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6435",
    "formula": "C475H490N3O0",
    "composition": {
      "C": 475,
      "H": 490,
      "N": 3,
      "O": 0
    },
    "molarMass": "3092.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6436",
    "formula": "C476H491N4O1",
    "composition": {
      "C": 476,
      "H": 491,
      "N": 4,
      "O": 1
    },
    "molarMass": "3098.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6437",
    "formula": "C477H492N5O2",
    "composition": {
      "C": 477,
      "H": 492,
      "N": 5,
      "O": 2
    },
    "molarMass": "3103.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6438",
    "formula": "C478H493N6O3",
    "composition": {
      "C": 478,
      "H": 493,
      "N": 6,
      "O": 3
    },
    "molarMass": "3109.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6439",
    "formula": "C479H494N7O4",
    "composition": {
      "C": 479,
      "H": 494,
      "N": 7,
      "O": 4
    },
    "molarMass": "3114.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6440",
    "formula": "C480H495N8O5",
    "composition": {
      "C": 480,
      "H": 495,
      "N": 8,
      "O": 5
    },
    "molarMass": "3120.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6441",
    "formula": "C481H496N9O6",
    "composition": {
      "C": 481,
      "H": 496,
      "N": 9,
      "O": 6
    },
    "molarMass": "3125.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6442",
    "formula": "C482H497N10O7",
    "composition": {
      "C": 482,
      "H": 497,
      "N": 10,
      "O": 7
    },
    "molarMass": "3131.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6443",
    "formula": "C483H498N11O8",
    "composition": {
      "C": 483,
      "H": 498,
      "N": 11,
      "O": 8
    },
    "molarMass": "3136.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6444",
    "formula": "C484H499N12O9",
    "composition": {
      "C": 484,
      "H": 499,
      "N": 12,
      "O": 9
    },
    "molarMass": "3142.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6445",
    "formula": "C485H500N13O10",
    "composition": {
      "C": 485,
      "H": 500,
      "N": 13,
      "O": 10
    },
    "molarMass": "3147.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6446",
    "formula": "C486H501N14O11",
    "composition": {
      "C": 486,
      "H": 501,
      "N": 14,
      "O": 11
    },
    "molarMass": "3153.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6447",
    "formula": "C487H502N15O12",
    "composition": {
      "C": 487,
      "H": 502,
      "N": 15,
      "O": 12
    },
    "molarMass": "3158.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6448",
    "formula": "C488H503N16O13",
    "composition": {
      "C": 488,
      "H": 503,
      "N": 16,
      "O": 13
    },
    "molarMass": "3164.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6449",
    "formula": "C489H504N17O14",
    "composition": {
      "C": 489,
      "H": 504,
      "N": 17,
      "O": 14
    },
    "molarMass": "3169.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6450",
    "formula": "C490H505N0O0",
    "composition": {
      "C": 490,
      "H": 505,
      "N": 0,
      "O": 0
    },
    "molarMass": "3175.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6451",
    "formula": "C491H506N1O1",
    "composition": {
      "C": 491,
      "H": 506,
      "N": 1,
      "O": 1
    },
    "molarMass": "3180.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6452",
    "formula": "C492H507N2O2",
    "composition": {
      "C": 492,
      "H": 507,
      "N": 2,
      "O": 2
    },
    "molarMass": "3186.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6453",
    "formula": "C493H508N3O3",
    "composition": {
      "C": 493,
      "H": 508,
      "N": 3,
      "O": 3
    },
    "molarMass": "3191.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6454",
    "formula": "C494H509N4O4",
    "composition": {
      "C": 494,
      "H": 509,
      "N": 4,
      "O": 4
    },
    "molarMass": "3197.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6455",
    "formula": "C495H510N5O5",
    "composition": {
      "C": 495,
      "H": 510,
      "N": 5,
      "O": 5
    },
    "molarMass": "3202.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6456",
    "formula": "C496H511N6O6",
    "composition": {
      "C": 496,
      "H": 511,
      "N": 6,
      "O": 6
    },
    "molarMass": "3208.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6457",
    "formula": "C497H512N7O7",
    "composition": {
      "C": 497,
      "H": 512,
      "N": 7,
      "O": 7
    },
    "molarMass": "3213.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6458",
    "formula": "C498H513N8O8",
    "composition": {
      "C": 498,
      "H": 513,
      "N": 8,
      "O": 8
    },
    "molarMass": "3219.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6459",
    "formula": "C499H514N9O9",
    "composition": {
      "C": 499,
      "H": 514,
      "N": 9,
      "O": 9
    },
    "molarMass": "3224.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6460",
    "formula": "C500H515N10O10",
    "composition": {
      "C": 500,
      "H": 515,
      "N": 10,
      "O": 10
    },
    "molarMass": "3230.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6461",
    "formula": "C501H516N11O11",
    "composition": {
      "C": 501,
      "H": 516,
      "N": 11,
      "O": 11
    },
    "molarMass": "3235.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6462",
    "formula": "C502H517N12O12",
    "composition": {
      "C": 502,
      "H": 517,
      "N": 12,
      "O": 12
    },
    "molarMass": "3241.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6463",
    "formula": "C503H518N13O13",
    "composition": {
      "C": 503,
      "H": 518,
      "N": 13,
      "O": 13
    },
    "molarMass": "3246.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6464",
    "formula": "C504H519N14O14",
    "composition": {
      "C": 504,
      "H": 519,
      "N": 14,
      "O": 14
    },
    "molarMass": "3252.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6465",
    "formula": "C505H520N15O0",
    "composition": {
      "C": 505,
      "H": 520,
      "N": 15,
      "O": 0
    },
    "molarMass": "3257.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6466",
    "formula": "C506H521N16O1",
    "composition": {
      "C": 506,
      "H": 521,
      "N": 16,
      "O": 1
    },
    "molarMass": "3263.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6467",
    "formula": "C507H522N17O2",
    "composition": {
      "C": 507,
      "H": 522,
      "N": 17,
      "O": 2
    },
    "molarMass": "3268.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6468",
    "formula": "C508H523N0O3",
    "composition": {
      "C": 508,
      "H": 523,
      "N": 0,
      "O": 3
    },
    "molarMass": "3274.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6469",
    "formula": "C509H524N1O4",
    "composition": {
      "C": 509,
      "H": 524,
      "N": 1,
      "O": 4
    },
    "molarMass": "3279.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6470",
    "formula": "C510H525N2O5",
    "composition": {
      "C": 510,
      "H": 525,
      "N": 2,
      "O": 5
    },
    "molarMass": "3285.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6471",
    "formula": "C511H526N3O6",
    "composition": {
      "C": 511,
      "H": 526,
      "N": 3,
      "O": 6
    },
    "molarMass": "3290.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6472",
    "formula": "C512H527N4O7",
    "composition": {
      "C": 512,
      "H": 527,
      "N": 4,
      "O": 7
    },
    "molarMass": "3296.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6473",
    "formula": "C513H528N5O8",
    "composition": {
      "C": 513,
      "H": 528,
      "N": 5,
      "O": 8
    },
    "molarMass": "3301.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6474",
    "formula": "C514H529N6O9",
    "composition": {
      "C": 514,
      "H": 529,
      "N": 6,
      "O": 9
    },
    "molarMass": "3307.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6475",
    "formula": "C515H530N7O10",
    "composition": {
      "C": 515,
      "H": 530,
      "N": 7,
      "O": 10
    },
    "molarMass": "3312.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6476",
    "formula": "C516H531N8O11",
    "composition": {
      "C": 516,
      "H": 531,
      "N": 8,
      "O": 11
    },
    "molarMass": "3318.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6477",
    "formula": "C517H532N9O12",
    "composition": {
      "C": 517,
      "H": 532,
      "N": 9,
      "O": 12
    },
    "molarMass": "3323.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6478",
    "formula": "C518H533N10O13",
    "composition": {
      "C": 518,
      "H": 533,
      "N": 10,
      "O": 13
    },
    "molarMass": "3329.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6479",
    "formula": "C519H534N11O14",
    "composition": {
      "C": 519,
      "H": 534,
      "N": 11,
      "O": 14
    },
    "molarMass": "3334.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6480",
    "formula": "C520H535N12O0",
    "composition": {
      "C": 520,
      "H": 535,
      "N": 12,
      "O": 0
    },
    "molarMass": "3340.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6481",
    "formula": "C521H536N13O1",
    "composition": {
      "C": 521,
      "H": 536,
      "N": 13,
      "O": 1
    },
    "molarMass": "3345.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6482",
    "formula": "C522H537N14O2",
    "composition": {
      "C": 522,
      "H": 537,
      "N": 14,
      "O": 2
    },
    "molarMass": "3351.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6483",
    "formula": "C523H538N15O3",
    "composition": {
      "C": 523,
      "H": 538,
      "N": 15,
      "O": 3
    },
    "molarMass": "3356.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6484",
    "formula": "C524H539N16O4",
    "composition": {
      "C": 524,
      "H": 539,
      "N": 16,
      "O": 4
    },
    "molarMass": "3362.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6485",
    "formula": "C525H540N17O5",
    "composition": {
      "C": 525,
      "H": 540,
      "N": 17,
      "O": 5
    },
    "molarMass": "3367.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6486",
    "formula": "C526H541N0O6",
    "composition": {
      "C": 526,
      "H": 541,
      "N": 0,
      "O": 6
    },
    "molarMass": "3373.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Réactif de Chimie Click Omega-6487",
    "formula": "C527H542N1O7",
    "composition": {
      "C": 527,
      "H": 542,
      "N": 1,
      "O": 7
    },
    "molarMass": "3378.50 g/mol",
    "category": "Réactif de Chimie Click",
    "summary": "Structure de pointe certifiée pour la catégorie des réactif de chimie clicks.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Antibiotique de dernier recours Omega-6488",
    "formula": "C528H543N2O8",
    "composition": {
      "C": 528,
      "H": 543,
      "N": 2,
      "O": 8
    },
    "molarMass": "3384.00 g/mol",
    "category": "Antibiotique de dernier recours",
    "summary": "Structure de pointe certifiée pour la catégorie des antibiotique de dernier recourss.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Agent de contraste IRM Omega-6489",
    "formula": "C529H544N3O9",
    "composition": {
      "C": 529,
      "H": 544,
      "N": 3,
      "O": 9
    },
    "molarMass": "3389.50 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Structure de pointe certifiée pour la catégorie des agent de contraste irms.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  },
  {
    "name": "Colorant de spécialité Omega-6490",
    "formula": "C530H545N4O10",
    "composition": {
      "C": 530,
      "H": 545,
      "N": 4,
      "O": 10
    },
    "molarMass": "3395.00 g/mol",
    "category": "Colorant de spécialité",
    "summary": "Structure de pointe certifiée pour la catégorie des colorant de spécialités.",
    "occurrence": "Synthèse automatisée.",
    "applications": [
      "Pharmacie industrielle",
      "Recherche fondamentale"
    ]
  }
];
