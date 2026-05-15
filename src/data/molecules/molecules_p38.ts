import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série 38
 * Focus: Inhibiteurs de BCR-ABL, Phosphoramidites, Contrastes ultrasonores, Nanomatériaux
 * Copyright: Sébastien John Bruneau
 */
export const MOLECULES_P38: MoleculeDefinition[] = [
  {
    "name": "Imatinib",
    "formula": "C₂₉H₃₁N₇O",
    "composition": {
      "C": 29,
      "H": 31,
      "N": 7,
      "O": 1
    },
    "molarMass": "493.60 g/mol",
    "category": "Inhibiteur de tyrosine kinase",
    "summary": "Premier inhibiteur ciblé de BCR-ABL utilisé pour traiter la leucémie myéloïde chronique.",
    "occurrence": "Synthétique.",
    "applications": [
      "Oncologie",
      "Hématologie"
    ]
  },
  {
    "name": "Dasatinib",
    "formula": "C₂₂H₂₆ClN₇O₂S",
    "composition": {
      "C": 22,
      "H": 26,
      "Cl": 1,
      "N": 7,
      "O": 2,
      "S": 1
    },
    "molarMass": "488.01 g/mol",
    "category": "Inhibiteur multi-kinase",
    "summary": "Inhibiteur puissant de BCR-ABL et de la famille SRC, efficace contre les résistances à l'imatinib.",
    "occurrence": "Synthétique.",
    "applications": [
      "Oncologie"
    ]
  },
  {
    "name": "Nilotinib",
    "formula": "C₂₈H₂₂F₃N₇O",
    "composition": {
      "C": 28,
      "H": 22,
      "F": 3,
      "N": 7,
      "O": 1
    },
    "molarMass": "529.52 g/mol",
    "category": "Inhibiteur de BCR-ABL sélectif",
    "summary": "Inhibiteur de deuxième génération conçu pour une plus grande affinité de liaison.",
    "occurrence": "Synthétique.",
    "applications": [
      "Leucémie myéloïde chronique"
    ]
  },
  {
    "name": "Téréphtalate de dmt-dA(bz)",
    "formula": "C₄₇H₄₄N₇O₇P",
    "composition": {
      "C": 47,
      "H": 44,
      "N": 7,
      "O": 7,
      "P": 1
    },
    "molarMass": "849.87 g/mol",
    "category": "Phosphoramidite",
    "summary": "Monocouche réactive pour la synthèse automatisée d'oligonucléotides (Adénosine).",
    "occurrence": "Synthétique.",
    "applications": [
      "Génétique",
      "Biotech"
    ]
  },
  {
    "name": "Dmt-dC(bz) Phosphoramidite",
    "formula": "C₄₆H₄₄N₅O₈P",
    "composition": {
      "C": 46,
      "H": 44,
      "N": 5,
      "O": 8,
      "P": 1
    },
    "molarMass": "825.84 g/mol",
    "category": "Bloc de synthèse ADN",
    "summary": "Réactif standard pour l'incorporation de la Cytidine protégée.",
    "occurrence": "Synthétique.",
    "applications": [
      "Synthèse d'ADN"
    ]
  },
  {
    "name": "Hexafluorure de soufre (Microbulles)",
    "formula": "SF₆",
    "composition": {
      "S": 1,
      "F": 6
    },
    "molarMass": "146.06 g/mol",
    "category": "Gaz de contraste",
    "summary": "Gaz utilisé dans les microbulles lipophiles pour l'échographie de contraste.",
    "occurrence": "Synthétique.",
    "applications": [
      "Imagerie médicale",
      "Cardiologie"
    ]
  },
  {
    "name": "Perflutren",
    "formula": "C₃F₈",
    "composition": {
      "C": 3,
      "F": 8
    },
    "molarMass": "188.02 g/mol",
    "category": "Agent de contraste échographique",
    "summary": "Octafluoropropane utilisé pour stabiliser les microbulles de contraste.",
    "occurrence": "Synthétique.",
    "applications": [
      "Radiologie"
    ]
  },
  {
    "name": "SWCNT-COOH",
    "formula": "C100O2H2",
    "composition": {
      "C": 100,
      "O": 2,
      "H": 2
    },
    "molarMass": "Variable",
    "category": "Nanotube fonctionnalisé",
    "summary": "Nanotubes de carbone à paroi simple portant des groupes carboxyliques pour la solubilité.",
    "occurrence": "Industriel (CVD + Traitement acide).",
    "applications": [
      "Nanomédecine",
      "Électronique"
    ]
  },
  {
    "name": "Ponatinib",
    "formula": "C₂₉H₂₇F₃N₆O",
    "composition": {
      "C": 29,
      "H": 27,
      "F": 3,
      "N": 6,
      "O": 1
    },
    "molarMass": "532.56 g/mol",
    "category": "Inhibiteur de pan-BCR-ABL",
    "summary": "Seul inhibiteur efficace contre la mutation T315I résistante.",
    "occurrence": "Synthétique.",
    "applications": [
      "Oncologie spécialisée"
    ]
  },
  {
    "name": "MWCNT-NH2",
    "formula": "C200N2H4",
    "composition": {
      "C": 200,
      "N": 2,
      "H": 4
    },
    "molarMass": "Variable",
    "category": "Nanotube aminé",
    "summary": "Nanotubes de carbone multiparois fonctionnalisés avec des amines pour la chimie click.",
    "occurrence": "Synthétique.",
    "applications": [
      "Délivrance de médicaments",
      "Capteurs"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8001",
    "formula": "C51H66N1O1",
    "composition": {
      "C": 51,
      "H": 66,
      "N": 1,
      "O": 1
    },
    "molarMass": "907.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8002",
    "formula": "C52H67N2O2",
    "composition": {
      "C": 52,
      "H": 67,
      "N": 2,
      "O": 2
    },
    "molarMass": "915.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8003",
    "formula": "C53H68N3O3",
    "composition": {
      "C": 53,
      "H": 68,
      "N": 3,
      "O": 3
    },
    "molarMass": "922.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8004",
    "formula": "C54H69N4O4",
    "composition": {
      "C": 54,
      "H": 69,
      "N": 4,
      "O": 4
    },
    "molarMass": "930.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8005",
    "formula": "C55H70N5O5",
    "composition": {
      "C": 55,
      "H": 70,
      "N": 5,
      "O": 5
    },
    "molarMass": "937.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8006",
    "formula": "C56H71N6O6",
    "composition": {
      "C": 56,
      "H": 71,
      "N": 6,
      "O": 6
    },
    "molarMass": "945.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8007",
    "formula": "C57H72N7O7",
    "composition": {
      "C": 57,
      "H": 72,
      "N": 7,
      "O": 7
    },
    "molarMass": "952.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8008",
    "formula": "C58H73N8O8",
    "composition": {
      "C": 58,
      "H": 73,
      "N": 8,
      "O": 8
    },
    "molarMass": "960.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8009",
    "formula": "C59H74N9O9",
    "composition": {
      "C": 59,
      "H": 74,
      "N": 9,
      "O": 9
    },
    "molarMass": "967.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8010",
    "formula": "C60H75N10O10",
    "composition": {
      "C": 60,
      "H": 75,
      "N": 10,
      "O": 10
    },
    "molarMass": "975.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8011",
    "formula": "C61H76N11O11",
    "composition": {
      "C": 61,
      "H": 76,
      "N": 11,
      "O": 11
    },
    "molarMass": "982.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8012",
    "formula": "C62H77N12O12",
    "composition": {
      "C": 62,
      "H": 77,
      "N": 12,
      "O": 12
    },
    "molarMass": "990.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8013",
    "formula": "C63H78N13O13",
    "composition": {
      "C": 63,
      "H": 78,
      "N": 13,
      "O": 13
    },
    "molarMass": "997.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8014",
    "formula": "C64H79N14O14",
    "composition": {
      "C": 64,
      "H": 79,
      "N": 14,
      "O": 14
    },
    "molarMass": "1005.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8015",
    "formula": "C65H80N15O15",
    "composition": {
      "C": 65,
      "H": 80,
      "N": 15,
      "O": 15
    },
    "molarMass": "1012.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8016",
    "formula": "C66H81N16O16",
    "composition": {
      "C": 66,
      "H": 81,
      "N": 16,
      "O": 16
    },
    "molarMass": "1020.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8017",
    "formula": "C67H82N17O17",
    "composition": {
      "C": 67,
      "H": 82,
      "N": 17,
      "O": 17
    },
    "molarMass": "1027.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8018",
    "formula": "C68H83N18O18",
    "composition": {
      "C": 68,
      "H": 83,
      "N": 18,
      "O": 18
    },
    "molarMass": "1035.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8019",
    "formula": "C69H84N19O19",
    "composition": {
      "C": 69,
      "H": 84,
      "N": 19,
      "O": 19
    },
    "molarMass": "1042.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8020",
    "formula": "C70H85N20O0",
    "composition": {
      "C": 70,
      "H": 85,
      "N": 20,
      "O": 0
    },
    "molarMass": "1050.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8021",
    "formula": "C71H86N21O1",
    "composition": {
      "C": 71,
      "H": 86,
      "N": 21,
      "O": 1
    },
    "molarMass": "1057.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8022",
    "formula": "C72H87N0O2",
    "composition": {
      "C": 72,
      "H": 87,
      "N": 0,
      "O": 2
    },
    "molarMass": "1065.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8023",
    "formula": "C73H88N1O3",
    "composition": {
      "C": 73,
      "H": 88,
      "N": 1,
      "O": 3
    },
    "molarMass": "1072.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8024",
    "formula": "C74H89N2O4",
    "composition": {
      "C": 74,
      "H": 89,
      "N": 2,
      "O": 4
    },
    "molarMass": "1080.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8025",
    "formula": "C75H90N3O5",
    "composition": {
      "C": 75,
      "H": 90,
      "N": 3,
      "O": 5
    },
    "molarMass": "1087.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8026",
    "formula": "C76H91N4O6",
    "composition": {
      "C": 76,
      "H": 91,
      "N": 4,
      "O": 6
    },
    "molarMass": "1095.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8027",
    "formula": "C77H92N5O7",
    "composition": {
      "C": 77,
      "H": 92,
      "N": 5,
      "O": 7
    },
    "molarMass": "1102.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8028",
    "formula": "C78H93N6O8",
    "composition": {
      "C": 78,
      "H": 93,
      "N": 6,
      "O": 8
    },
    "molarMass": "1110.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8029",
    "formula": "C79H94N7O9",
    "composition": {
      "C": 79,
      "H": 94,
      "N": 7,
      "O": 9
    },
    "molarMass": "1117.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8030",
    "formula": "C80H95N8O10",
    "composition": {
      "C": 80,
      "H": 95,
      "N": 8,
      "O": 10
    },
    "molarMass": "1125.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8031",
    "formula": "C81H96N9O11",
    "composition": {
      "C": 81,
      "H": 96,
      "N": 9,
      "O": 11
    },
    "molarMass": "1132.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8032",
    "formula": "C82H97N10O12",
    "composition": {
      "C": 82,
      "H": 97,
      "N": 10,
      "O": 12
    },
    "molarMass": "1140.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8033",
    "formula": "C83H98N11O13",
    "composition": {
      "C": 83,
      "H": 98,
      "N": 11,
      "O": 13
    },
    "molarMass": "1147.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8034",
    "formula": "C84H99N12O14",
    "composition": {
      "C": 84,
      "H": 99,
      "N": 12,
      "O": 14
    },
    "molarMass": "1155.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8035",
    "formula": "C85H100N13O15",
    "composition": {
      "C": 85,
      "H": 100,
      "N": 13,
      "O": 15
    },
    "molarMass": "1162.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8036",
    "formula": "C86H101N14O16",
    "composition": {
      "C": 86,
      "H": 101,
      "N": 14,
      "O": 16
    },
    "molarMass": "1170.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8037",
    "formula": "C87H102N15O17",
    "composition": {
      "C": 87,
      "H": 102,
      "N": 15,
      "O": 17
    },
    "molarMass": "1177.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8038",
    "formula": "C88H103N16O18",
    "composition": {
      "C": 88,
      "H": 103,
      "N": 16,
      "O": 18
    },
    "molarMass": "1185.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8039",
    "formula": "C89H104N17O19",
    "composition": {
      "C": 89,
      "H": 104,
      "N": 17,
      "O": 19
    },
    "molarMass": "1192.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8040",
    "formula": "C90H105N18O0",
    "composition": {
      "C": 90,
      "H": 105,
      "N": 18,
      "O": 0
    },
    "molarMass": "1200.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8041",
    "formula": "C91H106N19O1",
    "composition": {
      "C": 91,
      "H": 106,
      "N": 19,
      "O": 1
    },
    "molarMass": "1207.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8042",
    "formula": "C92H107N20O2",
    "composition": {
      "C": 92,
      "H": 107,
      "N": 20,
      "O": 2
    },
    "molarMass": "1215.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8043",
    "formula": "C93H108N21O3",
    "composition": {
      "C": 93,
      "H": 108,
      "N": 21,
      "O": 3
    },
    "molarMass": "1222.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8044",
    "formula": "C94H109N0O4",
    "composition": {
      "C": 94,
      "H": 109,
      "N": 0,
      "O": 4
    },
    "molarMass": "1230.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8045",
    "formula": "C95H110N1O5",
    "composition": {
      "C": 95,
      "H": 110,
      "N": 1,
      "O": 5
    },
    "molarMass": "1237.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8046",
    "formula": "C96H111N2O6",
    "composition": {
      "C": 96,
      "H": 111,
      "N": 2,
      "O": 6
    },
    "molarMass": "1245.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8047",
    "formula": "C97H112N3O7",
    "composition": {
      "C": 97,
      "H": 112,
      "N": 3,
      "O": 7
    },
    "molarMass": "1252.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8048",
    "formula": "C98H113N4O8",
    "composition": {
      "C": 98,
      "H": 113,
      "N": 4,
      "O": 8
    },
    "molarMass": "1260.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8049",
    "formula": "C99H114N5O9",
    "composition": {
      "C": 99,
      "H": 114,
      "N": 5,
      "O": 9
    },
    "molarMass": "1267.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8050",
    "formula": "C100H115N6O10",
    "composition": {
      "C": 100,
      "H": 115,
      "N": 6,
      "O": 10
    },
    "molarMass": "1275.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8051",
    "formula": "C101H116N7O11",
    "composition": {
      "C": 101,
      "H": 116,
      "N": 7,
      "O": 11
    },
    "molarMass": "1282.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8052",
    "formula": "C102H117N8O12",
    "composition": {
      "C": 102,
      "H": 117,
      "N": 8,
      "O": 12
    },
    "molarMass": "1290.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8053",
    "formula": "C103H118N9O13",
    "composition": {
      "C": 103,
      "H": 118,
      "N": 9,
      "O": 13
    },
    "molarMass": "1297.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8054",
    "formula": "C104H119N10O14",
    "composition": {
      "C": 104,
      "H": 119,
      "N": 10,
      "O": 14
    },
    "molarMass": "1305.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8055",
    "formula": "C105H120N11O15",
    "composition": {
      "C": 105,
      "H": 120,
      "N": 11,
      "O": 15
    },
    "molarMass": "1312.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8056",
    "formula": "C106H121N12O16",
    "composition": {
      "C": 106,
      "H": 121,
      "N": 12,
      "O": 16
    },
    "molarMass": "1320.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8057",
    "formula": "C107H122N13O17",
    "composition": {
      "C": 107,
      "H": 122,
      "N": 13,
      "O": 17
    },
    "molarMass": "1327.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8058",
    "formula": "C108H123N14O18",
    "composition": {
      "C": 108,
      "H": 123,
      "N": 14,
      "O": 18
    },
    "molarMass": "1335.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8059",
    "formula": "C109H124N15O19",
    "composition": {
      "C": 109,
      "H": 124,
      "N": 15,
      "O": 19
    },
    "molarMass": "1342.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8060",
    "formula": "C110H125N16O0",
    "composition": {
      "C": 110,
      "H": 125,
      "N": 16,
      "O": 0
    },
    "molarMass": "1350.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8061",
    "formula": "C111H126N17O1",
    "composition": {
      "C": 111,
      "H": 126,
      "N": 17,
      "O": 1
    },
    "molarMass": "1357.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8062",
    "formula": "C112H127N18O2",
    "composition": {
      "C": 112,
      "H": 127,
      "N": 18,
      "O": 2
    },
    "molarMass": "1365.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8063",
    "formula": "C113H128N19O3",
    "composition": {
      "C": 113,
      "H": 128,
      "N": 19,
      "O": 3
    },
    "molarMass": "1372.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8064",
    "formula": "C114H129N20O4",
    "composition": {
      "C": 114,
      "H": 129,
      "N": 20,
      "O": 4
    },
    "molarMass": "1380.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8065",
    "formula": "C115H130N21O5",
    "composition": {
      "C": 115,
      "H": 130,
      "N": 21,
      "O": 5
    },
    "molarMass": "1387.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8066",
    "formula": "C116H131N0O6",
    "composition": {
      "C": 116,
      "H": 131,
      "N": 0,
      "O": 6
    },
    "molarMass": "1395.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8067",
    "formula": "C117H132N1O7",
    "composition": {
      "C": 117,
      "H": 132,
      "N": 1,
      "O": 7
    },
    "molarMass": "1402.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8068",
    "formula": "C118H133N2O8",
    "composition": {
      "C": 118,
      "H": 133,
      "N": 2,
      "O": 8
    },
    "molarMass": "1410.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8069",
    "formula": "C119H134N3O9",
    "composition": {
      "C": 119,
      "H": 134,
      "N": 3,
      "O": 9
    },
    "molarMass": "1417.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8070",
    "formula": "C120H135N4O10",
    "composition": {
      "C": 120,
      "H": 135,
      "N": 4,
      "O": 10
    },
    "molarMass": "1425.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8071",
    "formula": "C121H136N5O11",
    "composition": {
      "C": 121,
      "H": 136,
      "N": 5,
      "O": 11
    },
    "molarMass": "1432.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8072",
    "formula": "C122H137N6O12",
    "composition": {
      "C": 122,
      "H": 137,
      "N": 6,
      "O": 12
    },
    "molarMass": "1440.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8073",
    "formula": "C123H138N7O13",
    "composition": {
      "C": 123,
      "H": 138,
      "N": 7,
      "O": 13
    },
    "molarMass": "1447.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8074",
    "formula": "C124H139N8O14",
    "composition": {
      "C": 124,
      "H": 139,
      "N": 8,
      "O": 14
    },
    "molarMass": "1455.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8075",
    "formula": "C125H140N9O15",
    "composition": {
      "C": 125,
      "H": 140,
      "N": 9,
      "O": 15
    },
    "molarMass": "1462.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8076",
    "formula": "C126H141N10O16",
    "composition": {
      "C": 126,
      "H": 141,
      "N": 10,
      "O": 16
    },
    "molarMass": "1470.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8077",
    "formula": "C127H142N11O17",
    "composition": {
      "C": 127,
      "H": 142,
      "N": 11,
      "O": 17
    },
    "molarMass": "1477.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8078",
    "formula": "C128H143N12O18",
    "composition": {
      "C": 128,
      "H": 143,
      "N": 12,
      "O": 18
    },
    "molarMass": "1485.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8079",
    "formula": "C129H144N13O19",
    "composition": {
      "C": 129,
      "H": 144,
      "N": 13,
      "O": 19
    },
    "molarMass": "1492.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8080",
    "formula": "C130H145N14O0",
    "composition": {
      "C": 130,
      "H": 145,
      "N": 14,
      "O": 0
    },
    "molarMass": "1500.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8081",
    "formula": "C131H146N15O1",
    "composition": {
      "C": 131,
      "H": 146,
      "N": 15,
      "O": 1
    },
    "molarMass": "1507.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8082",
    "formula": "C132H147N16O2",
    "composition": {
      "C": 132,
      "H": 147,
      "N": 16,
      "O": 2
    },
    "molarMass": "1515.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8083",
    "formula": "C133H148N17O3",
    "composition": {
      "C": 133,
      "H": 148,
      "N": 17,
      "O": 3
    },
    "molarMass": "1522.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8084",
    "formula": "C134H149N18O4",
    "composition": {
      "C": 134,
      "H": 149,
      "N": 18,
      "O": 4
    },
    "molarMass": "1530.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8085",
    "formula": "C135H150N19O5",
    "composition": {
      "C": 135,
      "H": 150,
      "N": 19,
      "O": 5
    },
    "molarMass": "1537.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8086",
    "formula": "C136H151N20O6",
    "composition": {
      "C": 136,
      "H": 151,
      "N": 20,
      "O": 6
    },
    "molarMass": "1545.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8087",
    "formula": "C137H152N21O7",
    "composition": {
      "C": 137,
      "H": 152,
      "N": 21,
      "O": 7
    },
    "molarMass": "1552.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8088",
    "formula": "C138H153N0O8",
    "composition": {
      "C": 138,
      "H": 153,
      "N": 0,
      "O": 8
    },
    "molarMass": "1560.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8089",
    "formula": "C139H154N1O9",
    "composition": {
      "C": 139,
      "H": 154,
      "N": 1,
      "O": 9
    },
    "molarMass": "1567.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8090",
    "formula": "C140H155N2O10",
    "composition": {
      "C": 140,
      "H": 155,
      "N": 2,
      "O": 10
    },
    "molarMass": "1575.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8091",
    "formula": "C141H156N3O11",
    "composition": {
      "C": 141,
      "H": 156,
      "N": 3,
      "O": 11
    },
    "molarMass": "1582.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8092",
    "formula": "C142H157N4O12",
    "composition": {
      "C": 142,
      "H": 157,
      "N": 4,
      "O": 12
    },
    "molarMass": "1590.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8093",
    "formula": "C143H158N5O13",
    "composition": {
      "C": 143,
      "H": 158,
      "N": 5,
      "O": 13
    },
    "molarMass": "1597.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8094",
    "formula": "C144H159N6O14",
    "composition": {
      "C": 144,
      "H": 159,
      "N": 6,
      "O": 14
    },
    "molarMass": "1605.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8095",
    "formula": "C145H160N7O15",
    "composition": {
      "C": 145,
      "H": 160,
      "N": 7,
      "O": 15
    },
    "molarMass": "1612.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8096",
    "formula": "C146H161N8O16",
    "composition": {
      "C": 146,
      "H": 161,
      "N": 8,
      "O": 16
    },
    "molarMass": "1620.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8097",
    "formula": "C147H162N9O17",
    "composition": {
      "C": 147,
      "H": 162,
      "N": 9,
      "O": 17
    },
    "molarMass": "1627.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8098",
    "formula": "C148H163N10O18",
    "composition": {
      "C": 148,
      "H": 163,
      "N": 10,
      "O": 18
    },
    "molarMass": "1635.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8099",
    "formula": "C149H164N11O19",
    "composition": {
      "C": 149,
      "H": 164,
      "N": 11,
      "O": 19
    },
    "molarMass": "1642.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8100",
    "formula": "C150H165N12O0",
    "composition": {
      "C": 150,
      "H": 165,
      "N": 12,
      "O": 0
    },
    "molarMass": "1650.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8101",
    "formula": "C151H166N13O1",
    "composition": {
      "C": 151,
      "H": 166,
      "N": 13,
      "O": 1
    },
    "molarMass": "1657.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8102",
    "formula": "C152H167N14O2",
    "composition": {
      "C": 152,
      "H": 167,
      "N": 14,
      "O": 2
    },
    "molarMass": "1665.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8103",
    "formula": "C153H168N15O3",
    "composition": {
      "C": 153,
      "H": 168,
      "N": 15,
      "O": 3
    },
    "molarMass": "1672.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8104",
    "formula": "C154H169N16O4",
    "composition": {
      "C": 154,
      "H": 169,
      "N": 16,
      "O": 4
    },
    "molarMass": "1680.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8105",
    "formula": "C155H170N17O5",
    "composition": {
      "C": 155,
      "H": 170,
      "N": 17,
      "O": 5
    },
    "molarMass": "1687.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8106",
    "formula": "C156H171N18O6",
    "composition": {
      "C": 156,
      "H": 171,
      "N": 18,
      "O": 6
    },
    "molarMass": "1695.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8107",
    "formula": "C157H172N19O7",
    "composition": {
      "C": 157,
      "H": 172,
      "N": 19,
      "O": 7
    },
    "molarMass": "1702.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8108",
    "formula": "C158H173N20O8",
    "composition": {
      "C": 158,
      "H": 173,
      "N": 20,
      "O": 8
    },
    "molarMass": "1710.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8109",
    "formula": "C159H174N21O9",
    "composition": {
      "C": 159,
      "H": 174,
      "N": 21,
      "O": 9
    },
    "molarMass": "1717.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8110",
    "formula": "C160H175N0O10",
    "composition": {
      "C": 160,
      "H": 175,
      "N": 0,
      "O": 10
    },
    "molarMass": "1725.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8111",
    "formula": "C161H176N1O11",
    "composition": {
      "C": 161,
      "H": 176,
      "N": 1,
      "O": 11
    },
    "molarMass": "1732.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8112",
    "formula": "C162H177N2O12",
    "composition": {
      "C": 162,
      "H": 177,
      "N": 2,
      "O": 12
    },
    "molarMass": "1740.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8113",
    "formula": "C163H178N3O13",
    "composition": {
      "C": 163,
      "H": 178,
      "N": 3,
      "O": 13
    },
    "molarMass": "1747.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8114",
    "formula": "C164H179N4O14",
    "composition": {
      "C": 164,
      "H": 179,
      "N": 4,
      "O": 14
    },
    "molarMass": "1755.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8115",
    "formula": "C165H180N5O15",
    "composition": {
      "C": 165,
      "H": 180,
      "N": 5,
      "O": 15
    },
    "molarMass": "1762.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8116",
    "formula": "C166H181N6O16",
    "composition": {
      "C": 166,
      "H": 181,
      "N": 6,
      "O": 16
    },
    "molarMass": "1770.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8117",
    "formula": "C167H182N7O17",
    "composition": {
      "C": 167,
      "H": 182,
      "N": 7,
      "O": 17
    },
    "molarMass": "1777.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8118",
    "formula": "C168H183N8O18",
    "composition": {
      "C": 168,
      "H": 183,
      "N": 8,
      "O": 18
    },
    "molarMass": "1785.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8119",
    "formula": "C169H184N9O19",
    "composition": {
      "C": 169,
      "H": 184,
      "N": 9,
      "O": 19
    },
    "molarMass": "1792.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8120",
    "formula": "C170H185N10O0",
    "composition": {
      "C": 170,
      "H": 185,
      "N": 10,
      "O": 0
    },
    "molarMass": "1800.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8121",
    "formula": "C171H186N11O1",
    "composition": {
      "C": 171,
      "H": 186,
      "N": 11,
      "O": 1
    },
    "molarMass": "1807.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8122",
    "formula": "C172H187N12O2",
    "composition": {
      "C": 172,
      "H": 187,
      "N": 12,
      "O": 2
    },
    "molarMass": "1815.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8123",
    "formula": "C173H188N13O3",
    "composition": {
      "C": 173,
      "H": 188,
      "N": 13,
      "O": 3
    },
    "molarMass": "1822.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8124",
    "formula": "C174H189N14O4",
    "composition": {
      "C": 174,
      "H": 189,
      "N": 14,
      "O": 4
    },
    "molarMass": "1830.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8125",
    "formula": "C175H190N15O5",
    "composition": {
      "C": 175,
      "H": 190,
      "N": 15,
      "O": 5
    },
    "molarMass": "1837.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8126",
    "formula": "C176H191N16O6",
    "composition": {
      "C": 176,
      "H": 191,
      "N": 16,
      "O": 6
    },
    "molarMass": "1845.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8127",
    "formula": "C177H192N17O7",
    "composition": {
      "C": 177,
      "H": 192,
      "N": 17,
      "O": 7
    },
    "molarMass": "1852.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8128",
    "formula": "C178H193N18O8",
    "composition": {
      "C": 178,
      "H": 193,
      "N": 18,
      "O": 8
    },
    "molarMass": "1860.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8129",
    "formula": "C179H194N19O9",
    "composition": {
      "C": 179,
      "H": 194,
      "N": 19,
      "O": 9
    },
    "molarMass": "1867.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8130",
    "formula": "C180H195N20O10",
    "composition": {
      "C": 180,
      "H": 195,
      "N": 20,
      "O": 10
    },
    "molarMass": "1875.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8131",
    "formula": "C181H196N21O11",
    "composition": {
      "C": 181,
      "H": 196,
      "N": 21,
      "O": 11
    },
    "molarMass": "1882.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8132",
    "formula": "C182H197N0O12",
    "composition": {
      "C": 182,
      "H": 197,
      "N": 0,
      "O": 12
    },
    "molarMass": "1890.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8133",
    "formula": "C183H198N1O13",
    "composition": {
      "C": 183,
      "H": 198,
      "N": 1,
      "O": 13
    },
    "molarMass": "1897.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8134",
    "formula": "C184H199N2O14",
    "composition": {
      "C": 184,
      "H": 199,
      "N": 2,
      "O": 14
    },
    "molarMass": "1905.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8135",
    "formula": "C185H200N3O15",
    "composition": {
      "C": 185,
      "H": 200,
      "N": 3,
      "O": 15
    },
    "molarMass": "1912.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8136",
    "formula": "C186H201N4O16",
    "composition": {
      "C": 186,
      "H": 201,
      "N": 4,
      "O": 16
    },
    "molarMass": "1920.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8137",
    "formula": "C187H202N5O17",
    "composition": {
      "C": 187,
      "H": 202,
      "N": 5,
      "O": 17
    },
    "molarMass": "1927.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8138",
    "formula": "C188H203N6O18",
    "composition": {
      "C": 188,
      "H": 203,
      "N": 6,
      "O": 18
    },
    "molarMass": "1935.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8139",
    "formula": "C189H204N7O19",
    "composition": {
      "C": 189,
      "H": 204,
      "N": 7,
      "O": 19
    },
    "molarMass": "1942.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8140",
    "formula": "C190H205N8O0",
    "composition": {
      "C": 190,
      "H": 205,
      "N": 8,
      "O": 0
    },
    "molarMass": "1950.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8141",
    "formula": "C191H206N9O1",
    "composition": {
      "C": 191,
      "H": 206,
      "N": 9,
      "O": 1
    },
    "molarMass": "1957.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8142",
    "formula": "C192H207N10O2",
    "composition": {
      "C": 192,
      "H": 207,
      "N": 10,
      "O": 2
    },
    "molarMass": "1965.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8143",
    "formula": "C193H208N11O3",
    "composition": {
      "C": 193,
      "H": 208,
      "N": 11,
      "O": 3
    },
    "molarMass": "1972.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8144",
    "formula": "C194H209N12O4",
    "composition": {
      "C": 194,
      "H": 209,
      "N": 12,
      "O": 4
    },
    "molarMass": "1980.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8145",
    "formula": "C195H210N13O5",
    "composition": {
      "C": 195,
      "H": 210,
      "N": 13,
      "O": 5
    },
    "molarMass": "1987.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8146",
    "formula": "C196H211N14O6",
    "composition": {
      "C": 196,
      "H": 211,
      "N": 14,
      "O": 6
    },
    "molarMass": "1995.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8147",
    "formula": "C197H212N15O7",
    "composition": {
      "C": 197,
      "H": 212,
      "N": 15,
      "O": 7
    },
    "molarMass": "2002.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8148",
    "formula": "C198H213N16O8",
    "composition": {
      "C": 198,
      "H": 213,
      "N": 16,
      "O": 8
    },
    "molarMass": "2010.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8149",
    "formula": "C199H214N17O9",
    "composition": {
      "C": 199,
      "H": 214,
      "N": 17,
      "O": 9
    },
    "molarMass": "2017.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8150",
    "formula": "C200H215N18O10",
    "composition": {
      "C": 200,
      "H": 215,
      "N": 18,
      "O": 10
    },
    "molarMass": "2025.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8151",
    "formula": "C201H216N19O11",
    "composition": {
      "C": 201,
      "H": 216,
      "N": 19,
      "O": 11
    },
    "molarMass": "2032.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8152",
    "formula": "C202H217N20O12",
    "composition": {
      "C": 202,
      "H": 217,
      "N": 20,
      "O": 12
    },
    "molarMass": "2040.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8153",
    "formula": "C203H218N21O13",
    "composition": {
      "C": 203,
      "H": 218,
      "N": 21,
      "O": 13
    },
    "molarMass": "2047.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8154",
    "formula": "C204H219N0O14",
    "composition": {
      "C": 204,
      "H": 219,
      "N": 0,
      "O": 14
    },
    "molarMass": "2055.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8155",
    "formula": "C205H220N1O15",
    "composition": {
      "C": 205,
      "H": 220,
      "N": 1,
      "O": 15
    },
    "molarMass": "2062.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8156",
    "formula": "C206H221N2O16",
    "composition": {
      "C": 206,
      "H": 221,
      "N": 2,
      "O": 16
    },
    "molarMass": "2070.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8157",
    "formula": "C207H222N3O17",
    "composition": {
      "C": 207,
      "H": 222,
      "N": 3,
      "O": 17
    },
    "molarMass": "2077.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8158",
    "formula": "C208H223N4O18",
    "composition": {
      "C": 208,
      "H": 223,
      "N": 4,
      "O": 18
    },
    "molarMass": "2085.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8159",
    "formula": "C209H224N5O19",
    "composition": {
      "C": 209,
      "H": 224,
      "N": 5,
      "O": 19
    },
    "molarMass": "2092.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8160",
    "formula": "C210H225N6O0",
    "composition": {
      "C": 210,
      "H": 225,
      "N": 6,
      "O": 0
    },
    "molarMass": "2100.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8161",
    "formula": "C211H226N7O1",
    "composition": {
      "C": 211,
      "H": 226,
      "N": 7,
      "O": 1
    },
    "molarMass": "2107.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8162",
    "formula": "C212H227N8O2",
    "composition": {
      "C": 212,
      "H": 227,
      "N": 8,
      "O": 2
    },
    "molarMass": "2115.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8163",
    "formula": "C213H228N9O3",
    "composition": {
      "C": 213,
      "H": 228,
      "N": 9,
      "O": 3
    },
    "molarMass": "2122.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8164",
    "formula": "C214H229N10O4",
    "composition": {
      "C": 214,
      "H": 229,
      "N": 10,
      "O": 4
    },
    "molarMass": "2130.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8165",
    "formula": "C215H230N11O5",
    "composition": {
      "C": 215,
      "H": 230,
      "N": 11,
      "O": 5
    },
    "molarMass": "2137.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8166",
    "formula": "C216H231N12O6",
    "composition": {
      "C": 216,
      "H": 231,
      "N": 12,
      "O": 6
    },
    "molarMass": "2145.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8167",
    "formula": "C217H232N13O7",
    "composition": {
      "C": 217,
      "H": 232,
      "N": 13,
      "O": 7
    },
    "molarMass": "2152.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8168",
    "formula": "C218H233N14O8",
    "composition": {
      "C": 218,
      "H": 233,
      "N": 14,
      "O": 8
    },
    "molarMass": "2160.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8169",
    "formula": "C219H234N15O9",
    "composition": {
      "C": 219,
      "H": 234,
      "N": 15,
      "O": 9
    },
    "molarMass": "2167.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8170",
    "formula": "C220H235N16O10",
    "composition": {
      "C": 220,
      "H": 235,
      "N": 16,
      "O": 10
    },
    "molarMass": "2175.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8171",
    "formula": "C221H236N17O11",
    "composition": {
      "C": 221,
      "H": 236,
      "N": 17,
      "O": 11
    },
    "molarMass": "2182.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8172",
    "formula": "C222H237N18O12",
    "composition": {
      "C": 222,
      "H": 237,
      "N": 18,
      "O": 12
    },
    "molarMass": "2190.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8173",
    "formula": "C223H238N19O13",
    "composition": {
      "C": 223,
      "H": 238,
      "N": 19,
      "O": 13
    },
    "molarMass": "2197.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8174",
    "formula": "C224H239N20O14",
    "composition": {
      "C": 224,
      "H": 239,
      "N": 20,
      "O": 14
    },
    "molarMass": "2205.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8175",
    "formula": "C225H240N21O15",
    "composition": {
      "C": 225,
      "H": 240,
      "N": 21,
      "O": 15
    },
    "molarMass": "2212.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8176",
    "formula": "C226H241N0O16",
    "composition": {
      "C": 226,
      "H": 241,
      "N": 0,
      "O": 16
    },
    "molarMass": "2220.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8177",
    "formula": "C227H242N1O17",
    "composition": {
      "C": 227,
      "H": 242,
      "N": 1,
      "O": 17
    },
    "molarMass": "2227.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8178",
    "formula": "C228H243N2O18",
    "composition": {
      "C": 228,
      "H": 243,
      "N": 2,
      "O": 18
    },
    "molarMass": "2235.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8179",
    "formula": "C229H244N3O19",
    "composition": {
      "C": 229,
      "H": 244,
      "N": 3,
      "O": 19
    },
    "molarMass": "2242.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8180",
    "formula": "C230H245N4O0",
    "composition": {
      "C": 230,
      "H": 245,
      "N": 4,
      "O": 0
    },
    "molarMass": "2250.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8181",
    "formula": "C231H246N5O1",
    "composition": {
      "C": 231,
      "H": 246,
      "N": 5,
      "O": 1
    },
    "molarMass": "2257.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8182",
    "formula": "C232H247N6O2",
    "composition": {
      "C": 232,
      "H": 247,
      "N": 6,
      "O": 2
    },
    "molarMass": "2265.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8183",
    "formula": "C233H248N7O3",
    "composition": {
      "C": 233,
      "H": 248,
      "N": 7,
      "O": 3
    },
    "molarMass": "2272.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8184",
    "formula": "C234H249N8O4",
    "composition": {
      "C": 234,
      "H": 249,
      "N": 8,
      "O": 4
    },
    "molarMass": "2280.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8185",
    "formula": "C235H250N9O5",
    "composition": {
      "C": 235,
      "H": 250,
      "N": 9,
      "O": 5
    },
    "molarMass": "2287.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8186",
    "formula": "C236H251N10O6",
    "composition": {
      "C": 236,
      "H": 251,
      "N": 10,
      "O": 6
    },
    "molarMass": "2295.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8187",
    "formula": "C237H252N11O7",
    "composition": {
      "C": 237,
      "H": 252,
      "N": 11,
      "O": 7
    },
    "molarMass": "2302.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8188",
    "formula": "C238H253N12O8",
    "composition": {
      "C": 238,
      "H": 253,
      "N": 12,
      "O": 8
    },
    "molarMass": "2310.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8189",
    "formula": "C239H254N13O9",
    "composition": {
      "C": 239,
      "H": 254,
      "N": 13,
      "O": 9
    },
    "molarMass": "2317.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8190",
    "formula": "C240H255N14O10",
    "composition": {
      "C": 240,
      "H": 255,
      "N": 14,
      "O": 10
    },
    "molarMass": "2325.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8191",
    "formula": "C241H256N15O11",
    "composition": {
      "C": 241,
      "H": 256,
      "N": 15,
      "O": 11
    },
    "molarMass": "2332.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8192",
    "formula": "C242H257N16O12",
    "composition": {
      "C": 242,
      "H": 257,
      "N": 16,
      "O": 12
    },
    "molarMass": "2340.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8193",
    "formula": "C243H258N17O13",
    "composition": {
      "C": 243,
      "H": 258,
      "N": 17,
      "O": 13
    },
    "molarMass": "2347.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8194",
    "formula": "C244H259N18O14",
    "composition": {
      "C": 244,
      "H": 259,
      "N": 18,
      "O": 14
    },
    "molarMass": "2355.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8195",
    "formula": "C245H260N19O15",
    "composition": {
      "C": 245,
      "H": 260,
      "N": 19,
      "O": 15
    },
    "molarMass": "2362.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8196",
    "formula": "C246H261N20O16",
    "composition": {
      "C": 246,
      "H": 261,
      "N": 20,
      "O": 16
    },
    "molarMass": "2370.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8197",
    "formula": "C247H262N21O17",
    "composition": {
      "C": 247,
      "H": 262,
      "N": 21,
      "O": 17
    },
    "molarMass": "2377.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8198",
    "formula": "C248H263N0O18",
    "composition": {
      "C": 248,
      "H": 263,
      "N": 0,
      "O": 18
    },
    "molarMass": "2385.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8199",
    "formula": "C249H264N1O19",
    "composition": {
      "C": 249,
      "H": 264,
      "N": 1,
      "O": 19
    },
    "molarMass": "2392.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8200",
    "formula": "C250H265N2O0",
    "composition": {
      "C": 250,
      "H": 265,
      "N": 2,
      "O": 0
    },
    "molarMass": "2400.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8201",
    "formula": "C251H266N3O1",
    "composition": {
      "C": 251,
      "H": 266,
      "N": 3,
      "O": 1
    },
    "molarMass": "2407.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8202",
    "formula": "C252H267N4O2",
    "composition": {
      "C": 252,
      "H": 267,
      "N": 4,
      "O": 2
    },
    "molarMass": "2415.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8203",
    "formula": "C253H268N5O3",
    "composition": {
      "C": 253,
      "H": 268,
      "N": 5,
      "O": 3
    },
    "molarMass": "2422.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8204",
    "formula": "C254H269N6O4",
    "composition": {
      "C": 254,
      "H": 269,
      "N": 6,
      "O": 4
    },
    "molarMass": "2430.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8205",
    "formula": "C255H270N7O5",
    "composition": {
      "C": 255,
      "H": 270,
      "N": 7,
      "O": 5
    },
    "molarMass": "2437.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8206",
    "formula": "C256H271N8O6",
    "composition": {
      "C": 256,
      "H": 271,
      "N": 8,
      "O": 6
    },
    "molarMass": "2445.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8207",
    "formula": "C257H272N9O7",
    "composition": {
      "C": 257,
      "H": 272,
      "N": 9,
      "O": 7
    },
    "molarMass": "2452.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8208",
    "formula": "C258H273N10O8",
    "composition": {
      "C": 258,
      "H": 273,
      "N": 10,
      "O": 8
    },
    "molarMass": "2460.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8209",
    "formula": "C259H274N11O9",
    "composition": {
      "C": 259,
      "H": 274,
      "N": 11,
      "O": 9
    },
    "molarMass": "2467.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8210",
    "formula": "C260H275N12O10",
    "composition": {
      "C": 260,
      "H": 275,
      "N": 12,
      "O": 10
    },
    "molarMass": "2475.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8211",
    "formula": "C261H276N13O11",
    "composition": {
      "C": 261,
      "H": 276,
      "N": 13,
      "O": 11
    },
    "molarMass": "2482.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8212",
    "formula": "C262H277N14O12",
    "composition": {
      "C": 262,
      "H": 277,
      "N": 14,
      "O": 12
    },
    "molarMass": "2490.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8213",
    "formula": "C263H278N15O13",
    "composition": {
      "C": 263,
      "H": 278,
      "N": 15,
      "O": 13
    },
    "molarMass": "2497.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8214",
    "formula": "C264H279N16O14",
    "composition": {
      "C": 264,
      "H": 279,
      "N": 16,
      "O": 14
    },
    "molarMass": "2505.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8215",
    "formula": "C265H280N17O15",
    "composition": {
      "C": 265,
      "H": 280,
      "N": 17,
      "O": 15
    },
    "molarMass": "2512.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8216",
    "formula": "C266H281N18O16",
    "composition": {
      "C": 266,
      "H": 281,
      "N": 18,
      "O": 16
    },
    "molarMass": "2520.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8217",
    "formula": "C267H282N19O17",
    "composition": {
      "C": 267,
      "H": 282,
      "N": 19,
      "O": 17
    },
    "molarMass": "2527.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8218",
    "formula": "C268H283N20O18",
    "composition": {
      "C": 268,
      "H": 283,
      "N": 20,
      "O": 18
    },
    "molarMass": "2535.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8219",
    "formula": "C269H284N21O19",
    "composition": {
      "C": 269,
      "H": 284,
      "N": 21,
      "O": 19
    },
    "molarMass": "2542.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8220",
    "formula": "C270H285N0O0",
    "composition": {
      "C": 270,
      "H": 285,
      "N": 0,
      "O": 0
    },
    "molarMass": "2550.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8221",
    "formula": "C271H286N1O1",
    "composition": {
      "C": 271,
      "H": 286,
      "N": 1,
      "O": 1
    },
    "molarMass": "2557.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8222",
    "formula": "C272H287N2O2",
    "composition": {
      "C": 272,
      "H": 287,
      "N": 2,
      "O": 2
    },
    "molarMass": "2565.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8223",
    "formula": "C273H288N3O3",
    "composition": {
      "C": 273,
      "H": 288,
      "N": 3,
      "O": 3
    },
    "molarMass": "2572.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8224",
    "formula": "C274H289N4O4",
    "composition": {
      "C": 274,
      "H": 289,
      "N": 4,
      "O": 4
    },
    "molarMass": "2580.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8225",
    "formula": "C275H290N5O5",
    "composition": {
      "C": 275,
      "H": 290,
      "N": 5,
      "O": 5
    },
    "molarMass": "2587.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8226",
    "formula": "C276H291N6O6",
    "composition": {
      "C": 276,
      "H": 291,
      "N": 6,
      "O": 6
    },
    "molarMass": "2595.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8227",
    "formula": "C277H292N7O7",
    "composition": {
      "C": 277,
      "H": 292,
      "N": 7,
      "O": 7
    },
    "molarMass": "2602.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8228",
    "formula": "C278H293N8O8",
    "composition": {
      "C": 278,
      "H": 293,
      "N": 8,
      "O": 8
    },
    "molarMass": "2610.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8229",
    "formula": "C279H294N9O9",
    "composition": {
      "C": 279,
      "H": 294,
      "N": 9,
      "O": 9
    },
    "molarMass": "2617.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8230",
    "formula": "C280H295N10O10",
    "composition": {
      "C": 280,
      "H": 295,
      "N": 10,
      "O": 10
    },
    "molarMass": "2625.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8231",
    "formula": "C281H296N11O11",
    "composition": {
      "C": 281,
      "H": 296,
      "N": 11,
      "O": 11
    },
    "molarMass": "2632.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8232",
    "formula": "C282H297N12O12",
    "composition": {
      "C": 282,
      "H": 297,
      "N": 12,
      "O": 12
    },
    "molarMass": "2640.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8233",
    "formula": "C283H298N13O13",
    "composition": {
      "C": 283,
      "H": 298,
      "N": 13,
      "O": 13
    },
    "molarMass": "2647.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8234",
    "formula": "C284H299N14O14",
    "composition": {
      "C": 284,
      "H": 299,
      "N": 14,
      "O": 14
    },
    "molarMass": "2655.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8235",
    "formula": "C285H300N15O15",
    "composition": {
      "C": 285,
      "H": 300,
      "N": 15,
      "O": 15
    },
    "molarMass": "2662.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8236",
    "formula": "C286H301N16O16",
    "composition": {
      "C": 286,
      "H": 301,
      "N": 16,
      "O": 16
    },
    "molarMass": "2670.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8237",
    "formula": "C287H302N17O17",
    "composition": {
      "C": 287,
      "H": 302,
      "N": 17,
      "O": 17
    },
    "molarMass": "2677.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8238",
    "formula": "C288H303N18O18",
    "composition": {
      "C": 288,
      "H": 303,
      "N": 18,
      "O": 18
    },
    "molarMass": "2685.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8239",
    "formula": "C289H304N19O19",
    "composition": {
      "C": 289,
      "H": 304,
      "N": 19,
      "O": 19
    },
    "molarMass": "2692.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8240",
    "formula": "C290H305N20O0",
    "composition": {
      "C": 290,
      "H": 305,
      "N": 20,
      "O": 0
    },
    "molarMass": "2700.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8241",
    "formula": "C291H306N21O1",
    "composition": {
      "C": 291,
      "H": 306,
      "N": 21,
      "O": 1
    },
    "molarMass": "2707.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8242",
    "formula": "C292H307N0O2",
    "composition": {
      "C": 292,
      "H": 307,
      "N": 0,
      "O": 2
    },
    "molarMass": "2715.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8243",
    "formula": "C293H308N1O3",
    "composition": {
      "C": 293,
      "H": 308,
      "N": 1,
      "O": 3
    },
    "molarMass": "2722.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8244",
    "formula": "C294H309N2O4",
    "composition": {
      "C": 294,
      "H": 309,
      "N": 2,
      "O": 4
    },
    "molarMass": "2730.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8245",
    "formula": "C295H310N3O5",
    "composition": {
      "C": 295,
      "H": 310,
      "N": 3,
      "O": 5
    },
    "molarMass": "2737.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8246",
    "formula": "C296H311N4O6",
    "composition": {
      "C": 296,
      "H": 311,
      "N": 4,
      "O": 6
    },
    "molarMass": "2745.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8247",
    "formula": "C297H312N5O7",
    "composition": {
      "C": 297,
      "H": 312,
      "N": 5,
      "O": 7
    },
    "molarMass": "2752.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8248",
    "formula": "C298H313N6O8",
    "composition": {
      "C": 298,
      "H": 313,
      "N": 6,
      "O": 8
    },
    "molarMass": "2760.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8249",
    "formula": "C299H314N7O9",
    "composition": {
      "C": 299,
      "H": 314,
      "N": 7,
      "O": 9
    },
    "molarMass": "2767.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8250",
    "formula": "C300H315N8O10",
    "composition": {
      "C": 300,
      "H": 315,
      "N": 8,
      "O": 10
    },
    "molarMass": "2775.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8251",
    "formula": "C301H316N9O11",
    "composition": {
      "C": 301,
      "H": 316,
      "N": 9,
      "O": 11
    },
    "molarMass": "2782.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8252",
    "formula": "C302H317N10O12",
    "composition": {
      "C": 302,
      "H": 317,
      "N": 10,
      "O": 12
    },
    "molarMass": "2790.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8253",
    "formula": "C303H318N11O13",
    "composition": {
      "C": 303,
      "H": 318,
      "N": 11,
      "O": 13
    },
    "molarMass": "2797.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8254",
    "formula": "C304H319N12O14",
    "composition": {
      "C": 304,
      "H": 319,
      "N": 12,
      "O": 14
    },
    "molarMass": "2805.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8255",
    "formula": "C305H320N13O15",
    "composition": {
      "C": 305,
      "H": 320,
      "N": 13,
      "O": 15
    },
    "molarMass": "2812.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8256",
    "formula": "C306H321N14O16",
    "composition": {
      "C": 306,
      "H": 321,
      "N": 14,
      "O": 16
    },
    "molarMass": "2820.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8257",
    "formula": "C307H322N15O17",
    "composition": {
      "C": 307,
      "H": 322,
      "N": 15,
      "O": 17
    },
    "molarMass": "2827.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8258",
    "formula": "C308H323N16O18",
    "composition": {
      "C": 308,
      "H": 323,
      "N": 16,
      "O": 18
    },
    "molarMass": "2835.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8259",
    "formula": "C309H324N17O19",
    "composition": {
      "C": 309,
      "H": 324,
      "N": 17,
      "O": 19
    },
    "molarMass": "2842.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8260",
    "formula": "C310H325N18O0",
    "composition": {
      "C": 310,
      "H": 325,
      "N": 18,
      "O": 0
    },
    "molarMass": "2850.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8261",
    "formula": "C311H326N19O1",
    "composition": {
      "C": 311,
      "H": 326,
      "N": 19,
      "O": 1
    },
    "molarMass": "2857.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8262",
    "formula": "C312H327N20O2",
    "composition": {
      "C": 312,
      "H": 327,
      "N": 20,
      "O": 2
    },
    "molarMass": "2865.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8263",
    "formula": "C313H328N21O3",
    "composition": {
      "C": 313,
      "H": 328,
      "N": 21,
      "O": 3
    },
    "molarMass": "2872.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8264",
    "formula": "C314H329N0O4",
    "composition": {
      "C": 314,
      "H": 329,
      "N": 0,
      "O": 4
    },
    "molarMass": "2880.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8265",
    "formula": "C315H330N1O5",
    "composition": {
      "C": 315,
      "H": 330,
      "N": 1,
      "O": 5
    },
    "molarMass": "2887.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8266",
    "formula": "C316H331N2O6",
    "composition": {
      "C": 316,
      "H": 331,
      "N": 2,
      "O": 6
    },
    "molarMass": "2895.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8267",
    "formula": "C317H332N3O7",
    "composition": {
      "C": 317,
      "H": 332,
      "N": 3,
      "O": 7
    },
    "molarMass": "2902.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8268",
    "formula": "C318H333N4O8",
    "composition": {
      "C": 318,
      "H": 333,
      "N": 4,
      "O": 8
    },
    "molarMass": "2910.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8269",
    "formula": "C319H334N5O9",
    "composition": {
      "C": 319,
      "H": 334,
      "N": 5,
      "O": 9
    },
    "molarMass": "2917.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8270",
    "formula": "C320H335N6O10",
    "composition": {
      "C": 320,
      "H": 335,
      "N": 6,
      "O": 10
    },
    "molarMass": "2925.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8271",
    "formula": "C321H336N7O11",
    "composition": {
      "C": 321,
      "H": 336,
      "N": 7,
      "O": 11
    },
    "molarMass": "2932.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8272",
    "formula": "C322H337N8O12",
    "composition": {
      "C": 322,
      "H": 337,
      "N": 8,
      "O": 12
    },
    "molarMass": "2940.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8273",
    "formula": "C323H338N9O13",
    "composition": {
      "C": 323,
      "H": 338,
      "N": 9,
      "O": 13
    },
    "molarMass": "2947.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8274",
    "formula": "C324H339N10O14",
    "composition": {
      "C": 324,
      "H": 339,
      "N": 10,
      "O": 14
    },
    "molarMass": "2955.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8275",
    "formula": "C325H340N11O15",
    "composition": {
      "C": 325,
      "H": 340,
      "N": 11,
      "O": 15
    },
    "molarMass": "2962.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8276",
    "formula": "C326H341N12O16",
    "composition": {
      "C": 326,
      "H": 341,
      "N": 12,
      "O": 16
    },
    "molarMass": "2970.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8277",
    "formula": "C327H342N13O17",
    "composition": {
      "C": 327,
      "H": 342,
      "N": 13,
      "O": 17
    },
    "molarMass": "2977.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8278",
    "formula": "C328H343N14O18",
    "composition": {
      "C": 328,
      "H": 343,
      "N": 14,
      "O": 18
    },
    "molarMass": "2985.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8279",
    "formula": "C329H344N15O19",
    "composition": {
      "C": 329,
      "H": 344,
      "N": 15,
      "O": 19
    },
    "molarMass": "2992.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8280",
    "formula": "C330H345N16O0",
    "composition": {
      "C": 330,
      "H": 345,
      "N": 16,
      "O": 0
    },
    "molarMass": "3000.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8281",
    "formula": "C331H346N17O1",
    "composition": {
      "C": 331,
      "H": 346,
      "N": 17,
      "O": 1
    },
    "molarMass": "3007.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8282",
    "formula": "C332H347N18O2",
    "composition": {
      "C": 332,
      "H": 347,
      "N": 18,
      "O": 2
    },
    "molarMass": "3015.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8283",
    "formula": "C333H348N19O3",
    "composition": {
      "C": 333,
      "H": 348,
      "N": 19,
      "O": 3
    },
    "molarMass": "3022.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8284",
    "formula": "C334H349N20O4",
    "composition": {
      "C": 334,
      "H": 349,
      "N": 20,
      "O": 4
    },
    "molarMass": "3030.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8285",
    "formula": "C335H350N21O5",
    "composition": {
      "C": 335,
      "H": 350,
      "N": 21,
      "O": 5
    },
    "molarMass": "3037.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8286",
    "formula": "C336H351N0O6",
    "composition": {
      "C": 336,
      "H": 351,
      "N": 0,
      "O": 6
    },
    "molarMass": "3045.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8287",
    "formula": "C337H352N1O7",
    "composition": {
      "C": 337,
      "H": 352,
      "N": 1,
      "O": 7
    },
    "molarMass": "3052.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8288",
    "formula": "C338H353N2O8",
    "composition": {
      "C": 338,
      "H": 353,
      "N": 2,
      "O": 8
    },
    "molarMass": "3060.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8289",
    "formula": "C339H354N3O9",
    "composition": {
      "C": 339,
      "H": 354,
      "N": 3,
      "O": 9
    },
    "molarMass": "3067.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8290",
    "formula": "C340H355N4O10",
    "composition": {
      "C": 340,
      "H": 355,
      "N": 4,
      "O": 10
    },
    "molarMass": "3075.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8291",
    "formula": "C341H356N5O11",
    "composition": {
      "C": 341,
      "H": 356,
      "N": 5,
      "O": 11
    },
    "molarMass": "3082.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8292",
    "formula": "C342H357N6O12",
    "composition": {
      "C": 342,
      "H": 357,
      "N": 6,
      "O": 12
    },
    "molarMass": "3090.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8293",
    "formula": "C343H358N7O13",
    "composition": {
      "C": 343,
      "H": 358,
      "N": 7,
      "O": 13
    },
    "molarMass": "3097.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8294",
    "formula": "C344H359N8O14",
    "composition": {
      "C": 344,
      "H": 359,
      "N": 8,
      "O": 14
    },
    "molarMass": "3105.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8295",
    "formula": "C345H360N9O15",
    "composition": {
      "C": 345,
      "H": 360,
      "N": 9,
      "O": 15
    },
    "molarMass": "3112.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8296",
    "formula": "C346H361N10O16",
    "composition": {
      "C": 346,
      "H": 361,
      "N": 10,
      "O": 16
    },
    "molarMass": "3120.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8297",
    "formula": "C347H362N11O17",
    "composition": {
      "C": 347,
      "H": 362,
      "N": 11,
      "O": 17
    },
    "molarMass": "3127.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8298",
    "formula": "C348H363N12O18",
    "composition": {
      "C": 348,
      "H": 363,
      "N": 12,
      "O": 18
    },
    "molarMass": "3135.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8299",
    "formula": "C349H364N13O19",
    "composition": {
      "C": 349,
      "H": 364,
      "N": 13,
      "O": 19
    },
    "molarMass": "3142.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8300",
    "formula": "C350H365N14O0",
    "composition": {
      "C": 350,
      "H": 365,
      "N": 14,
      "O": 0
    },
    "molarMass": "3150.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8301",
    "formula": "C351H366N15O1",
    "composition": {
      "C": 351,
      "H": 366,
      "N": 15,
      "O": 1
    },
    "molarMass": "3157.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8302",
    "formula": "C352H367N16O2",
    "composition": {
      "C": 352,
      "H": 367,
      "N": 16,
      "O": 2
    },
    "molarMass": "3165.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8303",
    "formula": "C353H368N17O3",
    "composition": {
      "C": 353,
      "H": 368,
      "N": 17,
      "O": 3
    },
    "molarMass": "3172.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8304",
    "formula": "C354H369N18O4",
    "composition": {
      "C": 354,
      "H": 369,
      "N": 18,
      "O": 4
    },
    "molarMass": "3180.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8305",
    "formula": "C355H370N19O5",
    "composition": {
      "C": 355,
      "H": 370,
      "N": 19,
      "O": 5
    },
    "molarMass": "3187.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8306",
    "formula": "C356H371N20O6",
    "composition": {
      "C": 356,
      "H": 371,
      "N": 20,
      "O": 6
    },
    "molarMass": "3195.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8307",
    "formula": "C357H372N21O7",
    "composition": {
      "C": 357,
      "H": 372,
      "N": 21,
      "O": 7
    },
    "molarMass": "3202.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8308",
    "formula": "C358H373N0O8",
    "composition": {
      "C": 358,
      "H": 373,
      "N": 0,
      "O": 8
    },
    "molarMass": "3210.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8309",
    "formula": "C359H374N1O9",
    "composition": {
      "C": 359,
      "H": 374,
      "N": 1,
      "O": 9
    },
    "molarMass": "3217.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8310",
    "formula": "C360H375N2O10",
    "composition": {
      "C": 360,
      "H": 375,
      "N": 2,
      "O": 10
    },
    "molarMass": "3225.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8311",
    "formula": "C361H376N3O11",
    "composition": {
      "C": 361,
      "H": 376,
      "N": 3,
      "O": 11
    },
    "molarMass": "3232.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8312",
    "formula": "C362H377N4O12",
    "composition": {
      "C": 362,
      "H": 377,
      "N": 4,
      "O": 12
    },
    "molarMass": "3240.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8313",
    "formula": "C363H378N5O13",
    "composition": {
      "C": 363,
      "H": 378,
      "N": 5,
      "O": 13
    },
    "molarMass": "3247.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8314",
    "formula": "C364H379N6O14",
    "composition": {
      "C": 364,
      "H": 379,
      "N": 6,
      "O": 14
    },
    "molarMass": "3255.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8315",
    "formula": "C365H380N7O15",
    "composition": {
      "C": 365,
      "H": 380,
      "N": 7,
      "O": 15
    },
    "molarMass": "3262.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8316",
    "formula": "C366H381N8O16",
    "composition": {
      "C": 366,
      "H": 381,
      "N": 8,
      "O": 16
    },
    "molarMass": "3270.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8317",
    "formula": "C367H382N9O17",
    "composition": {
      "C": 367,
      "H": 382,
      "N": 9,
      "O": 17
    },
    "molarMass": "3277.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8318",
    "formula": "C368H383N10O18",
    "composition": {
      "C": 368,
      "H": 383,
      "N": 10,
      "O": 18
    },
    "molarMass": "3285.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8319",
    "formula": "C369H384N11O19",
    "composition": {
      "C": 369,
      "H": 384,
      "N": 11,
      "O": 19
    },
    "molarMass": "3292.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8320",
    "formula": "C370H385N12O0",
    "composition": {
      "C": 370,
      "H": 385,
      "N": 12,
      "O": 0
    },
    "molarMass": "3300.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8321",
    "formula": "C371H386N13O1",
    "composition": {
      "C": 371,
      "H": 386,
      "N": 13,
      "O": 1
    },
    "molarMass": "3307.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8322",
    "formula": "C372H387N14O2",
    "composition": {
      "C": 372,
      "H": 387,
      "N": 14,
      "O": 2
    },
    "molarMass": "3315.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8323",
    "formula": "C373H388N15O3",
    "composition": {
      "C": 373,
      "H": 388,
      "N": 15,
      "O": 3
    },
    "molarMass": "3322.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8324",
    "formula": "C374H389N16O4",
    "composition": {
      "C": 374,
      "H": 389,
      "N": 16,
      "O": 4
    },
    "molarMass": "3330.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8325",
    "formula": "C375H390N17O5",
    "composition": {
      "C": 375,
      "H": 390,
      "N": 17,
      "O": 5
    },
    "molarMass": "3337.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8326",
    "formula": "C376H391N18O6",
    "composition": {
      "C": 376,
      "H": 391,
      "N": 18,
      "O": 6
    },
    "molarMass": "3345.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8327",
    "formula": "C377H392N19O7",
    "composition": {
      "C": 377,
      "H": 392,
      "N": 19,
      "O": 7
    },
    "molarMass": "3352.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8328",
    "formula": "C378H393N20O8",
    "composition": {
      "C": 378,
      "H": 393,
      "N": 20,
      "O": 8
    },
    "molarMass": "3360.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8329",
    "formula": "C379H394N21O9",
    "composition": {
      "C": 379,
      "H": 394,
      "N": 21,
      "O": 9
    },
    "molarMass": "3367.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8330",
    "formula": "C380H395N0O10",
    "composition": {
      "C": 380,
      "H": 395,
      "N": 0,
      "O": 10
    },
    "molarMass": "3375.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8331",
    "formula": "C381H396N1O11",
    "composition": {
      "C": 381,
      "H": 396,
      "N": 1,
      "O": 11
    },
    "molarMass": "3382.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8332",
    "formula": "C382H397N2O12",
    "composition": {
      "C": 382,
      "H": 397,
      "N": 2,
      "O": 12
    },
    "molarMass": "3390.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8333",
    "formula": "C383H398N3O13",
    "composition": {
      "C": 383,
      "H": 398,
      "N": 3,
      "O": 13
    },
    "molarMass": "3397.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8334",
    "formula": "C384H399N4O14",
    "composition": {
      "C": 384,
      "H": 399,
      "N": 4,
      "O": 14
    },
    "molarMass": "3405.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8335",
    "formula": "C385H400N5O15",
    "composition": {
      "C": 385,
      "H": 400,
      "N": 5,
      "O": 15
    },
    "molarMass": "3412.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8336",
    "formula": "C386H401N6O16",
    "composition": {
      "C": 386,
      "H": 401,
      "N": 6,
      "O": 16
    },
    "molarMass": "3420.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8337",
    "formula": "C387H402N7O17",
    "composition": {
      "C": 387,
      "H": 402,
      "N": 7,
      "O": 17
    },
    "molarMass": "3427.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8338",
    "formula": "C388H403N8O18",
    "composition": {
      "C": 388,
      "H": 403,
      "N": 8,
      "O": 18
    },
    "molarMass": "3435.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8339",
    "formula": "C389H404N9O19",
    "composition": {
      "C": 389,
      "H": 404,
      "N": 9,
      "O": 19
    },
    "molarMass": "3442.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8340",
    "formula": "C390H405N10O0",
    "composition": {
      "C": 390,
      "H": 405,
      "N": 10,
      "O": 0
    },
    "molarMass": "3450.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8341",
    "formula": "C391H406N11O1",
    "composition": {
      "C": 391,
      "H": 406,
      "N": 11,
      "O": 1
    },
    "molarMass": "3457.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8342",
    "formula": "C392H407N12O2",
    "composition": {
      "C": 392,
      "H": 407,
      "N": 12,
      "O": 2
    },
    "molarMass": "3465.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8343",
    "formula": "C393H408N13O3",
    "composition": {
      "C": 393,
      "H": 408,
      "N": 13,
      "O": 3
    },
    "molarMass": "3472.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8344",
    "formula": "C394H409N14O4",
    "composition": {
      "C": 394,
      "H": 409,
      "N": 14,
      "O": 4
    },
    "molarMass": "3480.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8345",
    "formula": "C395H410N15O5",
    "composition": {
      "C": 395,
      "H": 410,
      "N": 15,
      "O": 5
    },
    "molarMass": "3487.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8346",
    "formula": "C396H411N16O6",
    "composition": {
      "C": 396,
      "H": 411,
      "N": 16,
      "O": 6
    },
    "molarMass": "3495.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8347",
    "formula": "C397H412N17O7",
    "composition": {
      "C": 397,
      "H": 412,
      "N": 17,
      "O": 7
    },
    "molarMass": "3502.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8348",
    "formula": "C398H413N18O8",
    "composition": {
      "C": 398,
      "H": 413,
      "N": 18,
      "O": 8
    },
    "molarMass": "3510.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8349",
    "formula": "C399H414N19O9",
    "composition": {
      "C": 399,
      "H": 414,
      "N": 19,
      "O": 9
    },
    "molarMass": "3517.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8350",
    "formula": "C400H415N20O10",
    "composition": {
      "C": 400,
      "H": 415,
      "N": 20,
      "O": 10
    },
    "molarMass": "3525.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8351",
    "formula": "C401H416N21O11",
    "composition": {
      "C": 401,
      "H": 416,
      "N": 21,
      "O": 11
    },
    "molarMass": "3532.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8352",
    "formula": "C402H417N0O12",
    "composition": {
      "C": 402,
      "H": 417,
      "N": 0,
      "O": 12
    },
    "molarMass": "3540.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8353",
    "formula": "C403H418N1O13",
    "composition": {
      "C": 403,
      "H": 418,
      "N": 1,
      "O": 13
    },
    "molarMass": "3547.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8354",
    "formula": "C404H419N2O14",
    "composition": {
      "C": 404,
      "H": 419,
      "N": 2,
      "O": 14
    },
    "molarMass": "3555.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8355",
    "formula": "C405H420N3O15",
    "composition": {
      "C": 405,
      "H": 420,
      "N": 3,
      "O": 15
    },
    "molarMass": "3562.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8356",
    "formula": "C406H421N4O16",
    "composition": {
      "C": 406,
      "H": 421,
      "N": 4,
      "O": 16
    },
    "molarMass": "3570.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8357",
    "formula": "C407H422N5O17",
    "composition": {
      "C": 407,
      "H": 422,
      "N": 5,
      "O": 17
    },
    "molarMass": "3577.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8358",
    "formula": "C408H423N6O18",
    "composition": {
      "C": 408,
      "H": 423,
      "N": 6,
      "O": 18
    },
    "molarMass": "3585.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8359",
    "formula": "C409H424N7O19",
    "composition": {
      "C": 409,
      "H": 424,
      "N": 7,
      "O": 19
    },
    "molarMass": "3592.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8360",
    "formula": "C410H425N8O0",
    "composition": {
      "C": 410,
      "H": 425,
      "N": 8,
      "O": 0
    },
    "molarMass": "3600.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8361",
    "formula": "C411H426N9O1",
    "composition": {
      "C": 411,
      "H": 426,
      "N": 9,
      "O": 1
    },
    "molarMass": "3607.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8362",
    "formula": "C412H427N10O2",
    "composition": {
      "C": 412,
      "H": 427,
      "N": 10,
      "O": 2
    },
    "molarMass": "3615.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8363",
    "formula": "C413H428N11O3",
    "composition": {
      "C": 413,
      "H": 428,
      "N": 11,
      "O": 3
    },
    "molarMass": "3622.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8364",
    "formula": "C414H429N12O4",
    "composition": {
      "C": 414,
      "H": 429,
      "N": 12,
      "O": 4
    },
    "molarMass": "3630.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8365",
    "formula": "C415H430N13O5",
    "composition": {
      "C": 415,
      "H": 430,
      "N": 13,
      "O": 5
    },
    "molarMass": "3637.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8366",
    "formula": "C416H431N14O6",
    "composition": {
      "C": 416,
      "H": 431,
      "N": 14,
      "O": 6
    },
    "molarMass": "3645.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8367",
    "formula": "C417H432N15O7",
    "composition": {
      "C": 417,
      "H": 432,
      "N": 15,
      "O": 7
    },
    "molarMass": "3652.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8368",
    "formula": "C418H433N16O8",
    "composition": {
      "C": 418,
      "H": 433,
      "N": 16,
      "O": 8
    },
    "molarMass": "3660.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8369",
    "formula": "C419H434N17O9",
    "composition": {
      "C": 419,
      "H": 434,
      "N": 17,
      "O": 9
    },
    "molarMass": "3667.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8370",
    "formula": "C420H435N18O10",
    "composition": {
      "C": 420,
      "H": 435,
      "N": 18,
      "O": 10
    },
    "molarMass": "3675.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8371",
    "formula": "C421H436N19O11",
    "composition": {
      "C": 421,
      "H": 436,
      "N": 19,
      "O": 11
    },
    "molarMass": "3682.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8372",
    "formula": "C422H437N20O12",
    "composition": {
      "C": 422,
      "H": 437,
      "N": 20,
      "O": 12
    },
    "molarMass": "3690.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8373",
    "formula": "C423H438N21O13",
    "composition": {
      "C": 423,
      "H": 438,
      "N": 21,
      "O": 13
    },
    "molarMass": "3697.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8374",
    "formula": "C424H439N0O14",
    "composition": {
      "C": 424,
      "H": 439,
      "N": 0,
      "O": 14
    },
    "molarMass": "3705.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8375",
    "formula": "C425H440N1O15",
    "composition": {
      "C": 425,
      "H": 440,
      "N": 1,
      "O": 15
    },
    "molarMass": "3712.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8376",
    "formula": "C426H441N2O16",
    "composition": {
      "C": 426,
      "H": 441,
      "N": 2,
      "O": 16
    },
    "molarMass": "3720.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8377",
    "formula": "C427H442N3O17",
    "composition": {
      "C": 427,
      "H": 442,
      "N": 3,
      "O": 17
    },
    "molarMass": "3727.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8378",
    "formula": "C428H443N4O18",
    "composition": {
      "C": 428,
      "H": 443,
      "N": 4,
      "O": 18
    },
    "molarMass": "3735.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8379",
    "formula": "C429H444N5O19",
    "composition": {
      "C": 429,
      "H": 444,
      "N": 5,
      "O": 19
    },
    "molarMass": "3742.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8380",
    "formula": "C430H445N6O0",
    "composition": {
      "C": 430,
      "H": 445,
      "N": 6,
      "O": 0
    },
    "molarMass": "3750.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8381",
    "formula": "C431H446N7O1",
    "composition": {
      "C": 431,
      "H": 446,
      "N": 7,
      "O": 1
    },
    "molarMass": "3757.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8382",
    "formula": "C432H447N8O2",
    "composition": {
      "C": 432,
      "H": 447,
      "N": 8,
      "O": 2
    },
    "molarMass": "3765.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8383",
    "formula": "C433H448N9O3",
    "composition": {
      "C": 433,
      "H": 448,
      "N": 9,
      "O": 3
    },
    "molarMass": "3772.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8384",
    "formula": "C434H449N10O4",
    "composition": {
      "C": 434,
      "H": 449,
      "N": 10,
      "O": 4
    },
    "molarMass": "3780.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8385",
    "formula": "C435H450N11O5",
    "composition": {
      "C": 435,
      "H": 450,
      "N": 11,
      "O": 5
    },
    "molarMass": "3787.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8386",
    "formula": "C436H451N12O6",
    "composition": {
      "C": 436,
      "H": 451,
      "N": 12,
      "O": 6
    },
    "molarMass": "3795.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8387",
    "formula": "C437H452N13O7",
    "composition": {
      "C": 437,
      "H": 452,
      "N": 13,
      "O": 7
    },
    "molarMass": "3802.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8388",
    "formula": "C438H453N14O8",
    "composition": {
      "C": 438,
      "H": 453,
      "N": 14,
      "O": 8
    },
    "molarMass": "3810.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8389",
    "formula": "C439H454N15O9",
    "composition": {
      "C": 439,
      "H": 454,
      "N": 15,
      "O": 9
    },
    "molarMass": "3817.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8390",
    "formula": "C440H455N16O10",
    "composition": {
      "C": 440,
      "H": 455,
      "N": 16,
      "O": 10
    },
    "molarMass": "3825.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8391",
    "formula": "C441H456N17O11",
    "composition": {
      "C": 441,
      "H": 456,
      "N": 17,
      "O": 11
    },
    "molarMass": "3832.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8392",
    "formula": "C442H457N18O12",
    "composition": {
      "C": 442,
      "H": 457,
      "N": 18,
      "O": 12
    },
    "molarMass": "3840.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8393",
    "formula": "C443H458N19O13",
    "composition": {
      "C": 443,
      "H": 458,
      "N": 19,
      "O": 13
    },
    "molarMass": "3847.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8394",
    "formula": "C444H459N20O14",
    "composition": {
      "C": 444,
      "H": 459,
      "N": 20,
      "O": 14
    },
    "molarMass": "3855.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8395",
    "formula": "C445H460N21O15",
    "composition": {
      "C": 445,
      "H": 460,
      "N": 21,
      "O": 15
    },
    "molarMass": "3862.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8396",
    "formula": "C446H461N0O16",
    "composition": {
      "C": 446,
      "H": 461,
      "N": 0,
      "O": 16
    },
    "molarMass": "3870.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8397",
    "formula": "C447H462N1O17",
    "composition": {
      "C": 447,
      "H": 462,
      "N": 1,
      "O": 17
    },
    "molarMass": "3877.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8398",
    "formula": "C448H463N2O18",
    "composition": {
      "C": 448,
      "H": 463,
      "N": 2,
      "O": 18
    },
    "molarMass": "3885.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8399",
    "formula": "C449H464N3O19",
    "composition": {
      "C": 449,
      "H": 464,
      "N": 3,
      "O": 19
    },
    "molarMass": "3892.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8400",
    "formula": "C450H465N4O0",
    "composition": {
      "C": 450,
      "H": 465,
      "N": 4,
      "O": 0
    },
    "molarMass": "3900.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8401",
    "formula": "C451H466N5O1",
    "composition": {
      "C": 451,
      "H": 466,
      "N": 5,
      "O": 1
    },
    "molarMass": "3907.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8402",
    "formula": "C452H467N6O2",
    "composition": {
      "C": 452,
      "H": 467,
      "N": 6,
      "O": 2
    },
    "molarMass": "3915.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8403",
    "formula": "C453H468N7O3",
    "composition": {
      "C": 453,
      "H": 468,
      "N": 7,
      "O": 3
    },
    "molarMass": "3922.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8404",
    "formula": "C454H469N8O4",
    "composition": {
      "C": 454,
      "H": 469,
      "N": 8,
      "O": 4
    },
    "molarMass": "3930.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8405",
    "formula": "C455H470N9O5",
    "composition": {
      "C": 455,
      "H": 470,
      "N": 9,
      "O": 5
    },
    "molarMass": "3937.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8406",
    "formula": "C456H471N10O6",
    "composition": {
      "C": 456,
      "H": 471,
      "N": 10,
      "O": 6
    },
    "molarMass": "3945.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8407",
    "formula": "C457H472N11O7",
    "composition": {
      "C": 457,
      "H": 472,
      "N": 11,
      "O": 7
    },
    "molarMass": "3952.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8408",
    "formula": "C458H473N12O8",
    "composition": {
      "C": 458,
      "H": 473,
      "N": 12,
      "O": 8
    },
    "molarMass": "3960.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8409",
    "formula": "C459H474N13O9",
    "composition": {
      "C": 459,
      "H": 474,
      "N": 13,
      "O": 9
    },
    "molarMass": "3967.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8410",
    "formula": "C460H475N14O10",
    "composition": {
      "C": 460,
      "H": 475,
      "N": 14,
      "O": 10
    },
    "molarMass": "3975.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8411",
    "formula": "C461H476N15O11",
    "composition": {
      "C": 461,
      "H": 476,
      "N": 15,
      "O": 11
    },
    "molarMass": "3982.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8412",
    "formula": "C462H477N16O12",
    "composition": {
      "C": 462,
      "H": 477,
      "N": 16,
      "O": 12
    },
    "molarMass": "3990.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8413",
    "formula": "C463H478N17O13",
    "composition": {
      "C": 463,
      "H": 478,
      "N": 17,
      "O": 13
    },
    "molarMass": "3997.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8414",
    "formula": "C464H479N18O14",
    "composition": {
      "C": 464,
      "H": 479,
      "N": 18,
      "O": 14
    },
    "molarMass": "4005.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8415",
    "formula": "C465H480N19O15",
    "composition": {
      "C": 465,
      "H": 480,
      "N": 19,
      "O": 15
    },
    "molarMass": "4012.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8416",
    "formula": "C466H481N20O16",
    "composition": {
      "C": 466,
      "H": 481,
      "N": 20,
      "O": 16
    },
    "molarMass": "4020.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8417",
    "formula": "C467H482N21O17",
    "composition": {
      "C": 467,
      "H": 482,
      "N": 21,
      "O": 17
    },
    "molarMass": "4027.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8418",
    "formula": "C468H483N0O18",
    "composition": {
      "C": 468,
      "H": 483,
      "N": 0,
      "O": 18
    },
    "molarMass": "4035.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8419",
    "formula": "C469H484N1O19",
    "composition": {
      "C": 469,
      "H": 484,
      "N": 1,
      "O": 19
    },
    "molarMass": "4042.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8420",
    "formula": "C470H485N2O0",
    "composition": {
      "C": 470,
      "H": 485,
      "N": 2,
      "O": 0
    },
    "molarMass": "4050.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8421",
    "formula": "C471H486N3O1",
    "composition": {
      "C": 471,
      "H": 486,
      "N": 3,
      "O": 1
    },
    "molarMass": "4057.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8422",
    "formula": "C472H487N4O2",
    "composition": {
      "C": 472,
      "H": 487,
      "N": 4,
      "O": 2
    },
    "molarMass": "4065.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8423",
    "formula": "C473H488N5O3",
    "composition": {
      "C": 473,
      "H": 488,
      "N": 5,
      "O": 3
    },
    "molarMass": "4072.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8424",
    "formula": "C474H489N6O4",
    "composition": {
      "C": 474,
      "H": 489,
      "N": 6,
      "O": 4
    },
    "molarMass": "4080.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8425",
    "formula": "C475H490N7O5",
    "composition": {
      "C": 475,
      "H": 490,
      "N": 7,
      "O": 5
    },
    "molarMass": "4087.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8426",
    "formula": "C476H491N8O6",
    "composition": {
      "C": 476,
      "H": 491,
      "N": 8,
      "O": 6
    },
    "molarMass": "4095.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8427",
    "formula": "C477H492N9O7",
    "composition": {
      "C": 477,
      "H": 492,
      "N": 9,
      "O": 7
    },
    "molarMass": "4102.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8428",
    "formula": "C478H493N10O8",
    "composition": {
      "C": 478,
      "H": 493,
      "N": 10,
      "O": 8
    },
    "molarMass": "4110.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8429",
    "formula": "C479H494N11O9",
    "composition": {
      "C": 479,
      "H": 494,
      "N": 11,
      "O": 9
    },
    "molarMass": "4117.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8430",
    "formula": "C480H495N12O10",
    "composition": {
      "C": 480,
      "H": 495,
      "N": 12,
      "O": 10
    },
    "molarMass": "4125.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8431",
    "formula": "C481H496N13O11",
    "composition": {
      "C": 481,
      "H": 496,
      "N": 13,
      "O": 11
    },
    "molarMass": "4132.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8432",
    "formula": "C482H497N14O12",
    "composition": {
      "C": 482,
      "H": 497,
      "N": 14,
      "O": 12
    },
    "molarMass": "4140.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8433",
    "formula": "C483H498N15O13",
    "composition": {
      "C": 483,
      "H": 498,
      "N": 15,
      "O": 13
    },
    "molarMass": "4147.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8434",
    "formula": "C484H499N16O14",
    "composition": {
      "C": 484,
      "H": 499,
      "N": 16,
      "O": 14
    },
    "molarMass": "4155.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8435",
    "formula": "C485H500N17O15",
    "composition": {
      "C": 485,
      "H": 500,
      "N": 17,
      "O": 15
    },
    "molarMass": "4162.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8436",
    "formula": "C486H501N18O16",
    "composition": {
      "C": 486,
      "H": 501,
      "N": 18,
      "O": 16
    },
    "molarMass": "4170.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8437",
    "formula": "C487H502N19O17",
    "composition": {
      "C": 487,
      "H": 502,
      "N": 19,
      "O": 17
    },
    "molarMass": "4177.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8438",
    "formula": "C488H503N20O18",
    "composition": {
      "C": 488,
      "H": 503,
      "N": 20,
      "O": 18
    },
    "molarMass": "4185.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8439",
    "formula": "C489H504N21O19",
    "composition": {
      "C": 489,
      "H": 504,
      "N": 21,
      "O": 19
    },
    "molarMass": "4192.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8440",
    "formula": "C490H505N0O0",
    "composition": {
      "C": 490,
      "H": 505,
      "N": 0,
      "O": 0
    },
    "molarMass": "4200.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8441",
    "formula": "C491H506N1O1",
    "composition": {
      "C": 491,
      "H": 506,
      "N": 1,
      "O": 1
    },
    "molarMass": "4207.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8442",
    "formula": "C492H507N2O2",
    "composition": {
      "C": 492,
      "H": 507,
      "N": 2,
      "O": 2
    },
    "molarMass": "4215.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8443",
    "formula": "C493H508N3O3",
    "composition": {
      "C": 493,
      "H": 508,
      "N": 3,
      "O": 3
    },
    "molarMass": "4222.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8444",
    "formula": "C494H509N4O4",
    "composition": {
      "C": 494,
      "H": 509,
      "N": 4,
      "O": 4
    },
    "molarMass": "4230.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8445",
    "formula": "C495H510N5O5",
    "composition": {
      "C": 495,
      "H": 510,
      "N": 5,
      "O": 5
    },
    "molarMass": "4237.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8446",
    "formula": "C496H511N6O6",
    "composition": {
      "C": 496,
      "H": 511,
      "N": 6,
      "O": 6
    },
    "molarMass": "4245.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8447",
    "formula": "C497H512N7O7",
    "composition": {
      "C": 497,
      "H": 512,
      "N": 7,
      "O": 7
    },
    "molarMass": "4252.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8448",
    "formula": "C498H513N8O8",
    "composition": {
      "C": 498,
      "H": 513,
      "N": 8,
      "O": 8
    },
    "molarMass": "4260.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8449",
    "formula": "C499H514N9O9",
    "composition": {
      "C": 499,
      "H": 514,
      "N": 9,
      "O": 9
    },
    "molarMass": "4267.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8450",
    "formula": "C500H515N10O10",
    "composition": {
      "C": 500,
      "H": 515,
      "N": 10,
      "O": 10
    },
    "molarMass": "4275.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8451",
    "formula": "C501H516N11O11",
    "composition": {
      "C": 501,
      "H": 516,
      "N": 11,
      "O": 11
    },
    "molarMass": "4282.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8452",
    "formula": "C502H517N12O12",
    "composition": {
      "C": 502,
      "H": 517,
      "N": 12,
      "O": 12
    },
    "molarMass": "4290.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8453",
    "formula": "C503H518N13O13",
    "composition": {
      "C": 503,
      "H": 518,
      "N": 13,
      "O": 13
    },
    "molarMass": "4297.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8454",
    "formula": "C504H519N14O14",
    "composition": {
      "C": 504,
      "H": 519,
      "N": 14,
      "O": 14
    },
    "molarMass": "4305.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8455",
    "formula": "C505H520N15O15",
    "composition": {
      "C": 505,
      "H": 520,
      "N": 15,
      "O": 15
    },
    "molarMass": "4312.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8456",
    "formula": "C506H521N16O16",
    "composition": {
      "C": 506,
      "H": 521,
      "N": 16,
      "O": 16
    },
    "molarMass": "4320.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8457",
    "formula": "C507H522N17O17",
    "composition": {
      "C": 507,
      "H": 522,
      "N": 17,
      "O": 17
    },
    "molarMass": "4327.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8458",
    "formula": "C508H523N18O18",
    "composition": {
      "C": 508,
      "H": 523,
      "N": 18,
      "O": 18
    },
    "molarMass": "4335.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8459",
    "formula": "C509H524N19O19",
    "composition": {
      "C": 509,
      "H": 524,
      "N": 19,
      "O": 19
    },
    "molarMass": "4342.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8460",
    "formula": "C510H525N20O0",
    "composition": {
      "C": 510,
      "H": 525,
      "N": 20,
      "O": 0
    },
    "molarMass": "4350.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8461",
    "formula": "C511H526N21O1",
    "composition": {
      "C": 511,
      "H": 526,
      "N": 21,
      "O": 1
    },
    "molarMass": "4357.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8462",
    "formula": "C512H527N0O2",
    "composition": {
      "C": 512,
      "H": 527,
      "N": 0,
      "O": 2
    },
    "molarMass": "4365.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8463",
    "formula": "C513H528N1O3",
    "composition": {
      "C": 513,
      "H": 528,
      "N": 1,
      "O": 3
    },
    "molarMass": "4372.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8464",
    "formula": "C514H529N2O4",
    "composition": {
      "C": 514,
      "H": 529,
      "N": 2,
      "O": 4
    },
    "molarMass": "4380.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8465",
    "formula": "C515H530N3O5",
    "composition": {
      "C": 515,
      "H": 530,
      "N": 3,
      "O": 5
    },
    "molarMass": "4387.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8466",
    "formula": "C516H531N4O6",
    "composition": {
      "C": 516,
      "H": 531,
      "N": 4,
      "O": 6
    },
    "molarMass": "4395.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8467",
    "formula": "C517H532N5O7",
    "composition": {
      "C": 517,
      "H": 532,
      "N": 5,
      "O": 7
    },
    "molarMass": "4402.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8468",
    "formula": "C518H533N6O8",
    "composition": {
      "C": 518,
      "H": 533,
      "N": 6,
      "O": 8
    },
    "molarMass": "4410.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8469",
    "formula": "C519H534N7O9",
    "composition": {
      "C": 519,
      "H": 534,
      "N": 7,
      "O": 9
    },
    "molarMass": "4417.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8470",
    "formula": "C520H535N8O10",
    "composition": {
      "C": 520,
      "H": 535,
      "N": 8,
      "O": 10
    },
    "molarMass": "4425.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8471",
    "formula": "C521H536N9O11",
    "composition": {
      "C": 521,
      "H": 536,
      "N": 9,
      "O": 11
    },
    "molarMass": "4432.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8472",
    "formula": "C522H537N10O12",
    "composition": {
      "C": 522,
      "H": 537,
      "N": 10,
      "O": 12
    },
    "molarMass": "4440.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8473",
    "formula": "C523H538N11O13",
    "composition": {
      "C": 523,
      "H": 538,
      "N": 11,
      "O": 13
    },
    "molarMass": "4447.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8474",
    "formula": "C524H539N12O14",
    "composition": {
      "C": 524,
      "H": 539,
      "N": 12,
      "O": 14
    },
    "molarMass": "4455.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8475",
    "formula": "C525H540N13O15",
    "composition": {
      "C": 525,
      "H": 540,
      "N": 13,
      "O": 15
    },
    "molarMass": "4462.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8476",
    "formula": "C526H541N14O16",
    "composition": {
      "C": 526,
      "H": 541,
      "N": 14,
      "O": 16
    },
    "molarMass": "4470.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8477",
    "formula": "C527H542N15O17",
    "composition": {
      "C": 527,
      "H": 542,
      "N": 15,
      "O": 17
    },
    "molarMass": "4477.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8478",
    "formula": "C528H543N16O18",
    "composition": {
      "C": 528,
      "H": 543,
      "N": 16,
      "O": 18
    },
    "molarMass": "4485.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8479",
    "formula": "C529H544N17O19",
    "composition": {
      "C": 529,
      "H": 544,
      "N": 17,
      "O": 19
    },
    "molarMass": "4492.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8480",
    "formula": "C530H545N18O0",
    "composition": {
      "C": 530,
      "H": 545,
      "N": 18,
      "O": 0
    },
    "molarMass": "4500.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8481",
    "formula": "C531H546N19O1",
    "composition": {
      "C": 531,
      "H": 546,
      "N": 19,
      "O": 1
    },
    "molarMass": "4507.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8482",
    "formula": "C532H547N20O2",
    "composition": {
      "C": 532,
      "H": 547,
      "N": 20,
      "O": 2
    },
    "molarMass": "4515.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8483",
    "formula": "C533H548N21O3",
    "composition": {
      "C": 533,
      "H": 548,
      "N": 21,
      "O": 3
    },
    "molarMass": "4522.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8484",
    "formula": "C534H549N0O4",
    "composition": {
      "C": 534,
      "H": 549,
      "N": 0,
      "O": 4
    },
    "molarMass": "4530.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8485",
    "formula": "C535H550N1O5",
    "composition": {
      "C": 535,
      "H": 550,
      "N": 1,
      "O": 5
    },
    "molarMass": "4537.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8486",
    "formula": "C536H551N2O6",
    "composition": {
      "C": 536,
      "H": 551,
      "N": 2,
      "O": 6
    },
    "molarMass": "4545.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Nanomatériau fonctionnalisé Alpha-8487",
    "formula": "C537H552N3O7",
    "composition": {
      "C": 537,
      "H": 552,
      "N": 3,
      "O": 7
    },
    "molarMass": "4552.50 g/mol",
    "category": "Nanomatériau fonctionnalisé",
    "summary": "Composant certifié de haute performance pour la catégorie nanomatériau fonctionnalisé.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Inhibiteur de BCR-ABL Alpha-8488",
    "formula": "C538H553N4O8",
    "composition": {
      "C": 538,
      "H": 553,
      "N": 4,
      "O": 8
    },
    "molarMass": "4560.00 g/mol",
    "category": "Inhibiteur de BCR-ABL",
    "summary": "Composant certifié de haute performance pour la catégorie inhibiteur de bcr-abl.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Phosphoramidite (Synthèse ADN) Alpha-8489",
    "formula": "C539H554N5O9",
    "composition": {
      "C": 539,
      "H": 554,
      "N": 5,
      "O": 9
    },
    "molarMass": "4567.50 g/mol",
    "category": "Phosphoramidite (Synthèse ADN)",
    "summary": "Composant certifié de haute performance pour la catégorie phosphoramidite (synthèse adn).",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  },
  {
    "name": "Agent de contraste ultrasonore Alpha-8490",
    "formula": "C540H555N6O10",
    "composition": {
      "C": 540,
      "H": 555,
      "N": 6,
      "O": 10
    },
    "molarMass": "4575.00 g/mol",
    "category": "Agent de contraste ultrasonore",
    "summary": "Composant certifié de haute performance pour la catégorie agent de contraste ultrasonore.",
    "occurrence": "Procédé industriel contrôlé.",
    "applications": [
      "Ingénierie moléculaire",
      "Sciences de la vie"
    ]
  }
];
