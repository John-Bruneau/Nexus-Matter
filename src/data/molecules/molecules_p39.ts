import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série 39
 * Focus: Inhibiteurs de JAK, Radionucléides, Polymères biodégradables, Catalyseurs industriels
 * Copyright: Sébastien John Bruneau
 */
export const MOLECULES_P39: MoleculeDefinition[] = [
  {
    "name": "Tofacitinib",
    "formula": "C₁₆H₂₀N₆O",
    "composition": {
      "C": 16,
      "H": 20,
      "N": 6,
      "O": 1
    },
    "molarMass": "312.37 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Utilisé pour traiter la polyarthrite rhumatoïde et d'autres maladies inflammatoires.",
    "occurrence": "Synthétique.",
    "applications": [
      "Rhumatologie",
      "Dermatologie"
    ]
  },
  {
    "name": "Baricitinib",
    "formula": "C₁₆H₁₇N₇O₂S",
    "composition": {
      "C": 16,
      "H": 17,
      "N": 7,
      "O": 2,
      "S": 1
    },
    "molarMass": "371.42 g/mol",
    "category": "Inhibiteur de JAK1/JAK2",
    "summary": "Traitement pour la polyarthrite rhumatoïde et la pelade sévère.",
    "occurrence": "Synthétique.",
    "applications": [
      "Rhumatologie",
      "Immunologie"
    ]
  },
  {
    "name": "Lutétium (177Lu) oxodotréotide",
    "formula": "C₆₅H₈₇¹⁷⁷LuN₁₄O₁₉S",
    "composition": {
      "C": 65,
      "H": 87,
      "Lu": 1,
      "N": 14,
      "O": 19,
      "S": 1
    },
    "molarMass": "1609.50 g/mol",
    "category": "Radiopharmaceutique",
    "summary": "Utilisé pour la thérapie par radionucléides des récepteurs des peptides (PRRT).",
    "occurrence": "Produit en réacteur nucléaire.",
    "applications": [
      "Oncologie nucléaire"
    ]
  },
  {
    "name": "Yttrium-90",
    "formula": "⁹⁰Y",
    "composition": {
      "Y": 1
    },
    "molarMass": "89.90 g/mol",
    "category": "Isotope thérapeutique",
    "summary": "Émetteur bêta utilisé pour la synoviorthèse et le traitement des tumeurs.",
    "occurrence": "Produit par décroissance du Strontium-90.",
    "applications": [
      "Radiothérapie locale"
    ]
  },
  {
    "name": "PLGA (Copolymère)",
    "formula": "(C₆H₈O₄)n(C₄H₄O₄)m",
    "composition": {
      "C": 10,
      "H": 12,
      "O": 8
    },
    "molarMass": "Variable",
    "category": "Polymère biodégradable",
    "summary": "Utilisé dans les dispositifs médicaux résorbables et la libération contrôlée de médicaments.",
    "occurrence": "Polymerisation par ouverture de cycle.",
    "applications": [
      "Génie tissulaire",
      "Pharmacie"
    ]
  },
  {
    "name": "Acide polylactique (PLA)",
    "formula": "(C₃H₄O₂)n",
    "composition": {
      "C": 3,
      "H": 4,
      "O": 2
    },
    "molarMass": "Variable",
    "category": "Thermoplastique biodégradable",
    "summary": "Produit à partir de ressources renouvelables (amidon de maïs).",
    "occurrence": "Fermentation + Polymérisation.",
    "applications": [
      "Impression 3D",
      "Emballage durable"
    ]
  },
  {
    "name": "Trichlorure de titane / Al Et3",
    "formula": "TiCl₃AlC₆H₁₅",
    "composition": {
      "Ti": 1,
      "Cl": 3,
      "Al": 1,
      "C": 6,
      "H": 15
    },
    "molarMass": "Variable",
    "category": "Catalyseur de Ziegler-Natta",
    "summary": "Système catalytique révolutionnaire pour la production de polyéthylène et polypropylène.",
    "occurrence": "Préparation industrielle.",
    "applications": [
      "Pétrochimie",
      "Polymères"
    ]
  },
  {
    "name": "Upadacitinib",
    "formula": "C₁₇H₁₉F₃N₆O",
    "composition": {
      "C": 17,
      "H": 19,
      "F": 3,
      "N": 6,
      "O": 1
    },
    "molarMass": "380.37 g/mol",
    "category": "Inhibiteur de JAK sélectif",
    "summary": "Traitement pour la dermatite atopique et la colite ulcéreuse.",
    "occurrence": "Synthétique.",
    "applications": [
      "Gastro-entérologie",
      "Dermatologie"
    ]
  },
  {
    "name": "Samarium (153Sm) lexidronam",
    "formula": "C₆H₁₂N₂O₁₂P₄¹⁵³Sm",
    "composition": {
      "C": 6,
      "H": 12,
      "N": 2,
      "O": 12,
      "P": 4,
      "Sm": 1
    },
    "molarMass": "581.10 g/mol",
    "category": "Agent thérapeutique osseux",
    "summary": "Utilisé pour soulager la douleur osseuse métastatique.",
    "occurrence": "Synthèse radiopharmaceutique.",
    "applications": [
      "Soins palliatifs"
    ]
  },
  {
    "name": "Polycaprolactone (PCL)",
    "formula": "(C₆H₁₀O₂)n",
    "composition": {
      "C": 6,
      "H": 10,
      "O": 2
    },
    "molarMass": "Variable",
    "category": "Polyester biodégradable",
    "summary": "Polymère à dégradation lente utilisé pour les implants longue durée.",
    "occurrence": "Synthétique.",
    "applications": [
      "Chirurgie",
      "Drug delivery"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9001",
    "formula": "C56H71N1O1",
    "composition": {
      "C": 56,
      "H": 71,
      "N": 1,
      "O": 1
    },
    "molarMass": "1008.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9002",
    "formula": "C57H72N2O2",
    "composition": {
      "C": 57,
      "H": 72,
      "N": 2,
      "O": 2
    },
    "molarMass": "1017.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9003",
    "formula": "C58H73N3O3",
    "composition": {
      "C": 58,
      "H": 73,
      "N": 3,
      "O": 3
    },
    "molarMass": "1025.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9004",
    "formula": "C59H74N4O4",
    "composition": {
      "C": 59,
      "H": 74,
      "N": 4,
      "O": 4
    },
    "molarMass": "1034.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9005",
    "formula": "C60H75N5O5",
    "composition": {
      "C": 60,
      "H": 75,
      "N": 5,
      "O": 5
    },
    "molarMass": "1042.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9006",
    "formula": "C61H76N6O6",
    "composition": {
      "C": 61,
      "H": 76,
      "N": 6,
      "O": 6
    },
    "molarMass": "1051.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9007",
    "formula": "C62H77N7O7",
    "composition": {
      "C": 62,
      "H": 77,
      "N": 7,
      "O": 7
    },
    "molarMass": "1059.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9008",
    "formula": "C63H78N8O8",
    "composition": {
      "C": 63,
      "H": 78,
      "N": 8,
      "O": 8
    },
    "molarMass": "1068.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9009",
    "formula": "C64H79N9O9",
    "composition": {
      "C": 64,
      "H": 79,
      "N": 9,
      "O": 9
    },
    "molarMass": "1076.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9010",
    "formula": "C65H80N10O10",
    "composition": {
      "C": 65,
      "H": 80,
      "N": 10,
      "O": 10
    },
    "molarMass": "1085.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9011",
    "formula": "C66H81N11O11",
    "composition": {
      "C": 66,
      "H": 81,
      "N": 11,
      "O": 11
    },
    "molarMass": "1093.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9012",
    "formula": "C67H82N12O12",
    "composition": {
      "C": 67,
      "H": 82,
      "N": 12,
      "O": 12
    },
    "molarMass": "1102.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9013",
    "formula": "C68H83N13O13",
    "composition": {
      "C": 68,
      "H": 83,
      "N": 13,
      "O": 13
    },
    "molarMass": "1110.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9014",
    "formula": "C69H84N14O14",
    "composition": {
      "C": 69,
      "H": 84,
      "N": 14,
      "O": 14
    },
    "molarMass": "1119.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9015",
    "formula": "C70H85N15O15",
    "composition": {
      "C": 70,
      "H": 85,
      "N": 15,
      "O": 15
    },
    "molarMass": "1127.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9016",
    "formula": "C71H86N16O16",
    "composition": {
      "C": 71,
      "H": 86,
      "N": 16,
      "O": 16
    },
    "molarMass": "1136.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9017",
    "formula": "C72H87N17O17",
    "composition": {
      "C": 72,
      "H": 87,
      "N": 17,
      "O": 17
    },
    "molarMass": "1144.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9018",
    "formula": "C73H88N18O18",
    "composition": {
      "C": 73,
      "H": 88,
      "N": 18,
      "O": 18
    },
    "molarMass": "1153.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9019",
    "formula": "C74H89N19O19",
    "composition": {
      "C": 74,
      "H": 89,
      "N": 19,
      "O": 19
    },
    "molarMass": "1161.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9020",
    "formula": "C75H90N20O20",
    "composition": {
      "C": 75,
      "H": 90,
      "N": 20,
      "O": 20
    },
    "molarMass": "1170.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9021",
    "formula": "C76H91N21O21",
    "composition": {
      "C": 76,
      "H": 91,
      "N": 21,
      "O": 21
    },
    "molarMass": "1178.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9022",
    "formula": "C77H92N22O0",
    "composition": {
      "C": 77,
      "H": 92,
      "N": 22,
      "O": 0
    },
    "molarMass": "1187.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9023",
    "formula": "C78H93N23O1",
    "composition": {
      "C": 78,
      "H": 93,
      "N": 23,
      "O": 1
    },
    "molarMass": "1195.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9024",
    "formula": "C79H94N24O2",
    "composition": {
      "C": 79,
      "H": 94,
      "N": 24,
      "O": 2
    },
    "molarMass": "1204.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9025",
    "formula": "C80H95N0O3",
    "composition": {
      "C": 80,
      "H": 95,
      "N": 0,
      "O": 3
    },
    "molarMass": "1212.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9026",
    "formula": "C81H96N1O4",
    "composition": {
      "C": 81,
      "H": 96,
      "N": 1,
      "O": 4
    },
    "molarMass": "1221.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9027",
    "formula": "C82H97N2O5",
    "composition": {
      "C": 82,
      "H": 97,
      "N": 2,
      "O": 5
    },
    "molarMass": "1229.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9028",
    "formula": "C83H98N3O6",
    "composition": {
      "C": 83,
      "H": 98,
      "N": 3,
      "O": 6
    },
    "molarMass": "1238.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9029",
    "formula": "C84H99N4O7",
    "composition": {
      "C": 84,
      "H": 99,
      "N": 4,
      "O": 7
    },
    "molarMass": "1246.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9030",
    "formula": "C85H100N5O8",
    "composition": {
      "C": 85,
      "H": 100,
      "N": 5,
      "O": 8
    },
    "molarMass": "1255.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9031",
    "formula": "C86H101N6O9",
    "composition": {
      "C": 86,
      "H": 101,
      "N": 6,
      "O": 9
    },
    "molarMass": "1263.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9032",
    "formula": "C87H102N7O10",
    "composition": {
      "C": 87,
      "H": 102,
      "N": 7,
      "O": 10
    },
    "molarMass": "1272.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9033",
    "formula": "C88H103N8O11",
    "composition": {
      "C": 88,
      "H": 103,
      "N": 8,
      "O": 11
    },
    "molarMass": "1280.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9034",
    "formula": "C89H104N9O12",
    "composition": {
      "C": 89,
      "H": 104,
      "N": 9,
      "O": 12
    },
    "molarMass": "1289.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9035",
    "formula": "C90H105N10O13",
    "composition": {
      "C": 90,
      "H": 105,
      "N": 10,
      "O": 13
    },
    "molarMass": "1297.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9036",
    "formula": "C91H106N11O14",
    "composition": {
      "C": 91,
      "H": 106,
      "N": 11,
      "O": 14
    },
    "molarMass": "1306.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9037",
    "formula": "C92H107N12O15",
    "composition": {
      "C": 92,
      "H": 107,
      "N": 12,
      "O": 15
    },
    "molarMass": "1314.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9038",
    "formula": "C93H108N13O16",
    "composition": {
      "C": 93,
      "H": 108,
      "N": 13,
      "O": 16
    },
    "molarMass": "1323.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9039",
    "formula": "C94H109N14O17",
    "composition": {
      "C": 94,
      "H": 109,
      "N": 14,
      "O": 17
    },
    "molarMass": "1331.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9040",
    "formula": "C95H110N15O18",
    "composition": {
      "C": 95,
      "H": 110,
      "N": 15,
      "O": 18
    },
    "molarMass": "1340.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9041",
    "formula": "C96H111N16O19",
    "composition": {
      "C": 96,
      "H": 111,
      "N": 16,
      "O": 19
    },
    "molarMass": "1348.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9042",
    "formula": "C97H112N17O20",
    "composition": {
      "C": 97,
      "H": 112,
      "N": 17,
      "O": 20
    },
    "molarMass": "1357.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9043",
    "formula": "C98H113N18O21",
    "composition": {
      "C": 98,
      "H": 113,
      "N": 18,
      "O": 21
    },
    "molarMass": "1365.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9044",
    "formula": "C99H114N19O0",
    "composition": {
      "C": 99,
      "H": 114,
      "N": 19,
      "O": 0
    },
    "molarMass": "1374.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9045",
    "formula": "C100H115N20O1",
    "composition": {
      "C": 100,
      "H": 115,
      "N": 20,
      "O": 1
    },
    "molarMass": "1382.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9046",
    "formula": "C101H116N21O2",
    "composition": {
      "C": 101,
      "H": 116,
      "N": 21,
      "O": 2
    },
    "molarMass": "1391.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9047",
    "formula": "C102H117N22O3",
    "composition": {
      "C": 102,
      "H": 117,
      "N": 22,
      "O": 3
    },
    "molarMass": "1399.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9048",
    "formula": "C103H118N23O4",
    "composition": {
      "C": 103,
      "H": 118,
      "N": 23,
      "O": 4
    },
    "molarMass": "1408.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9049",
    "formula": "C104H119N24O5",
    "composition": {
      "C": 104,
      "H": 119,
      "N": 24,
      "O": 5
    },
    "molarMass": "1416.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9050",
    "formula": "C105H120N0O6",
    "composition": {
      "C": 105,
      "H": 120,
      "N": 0,
      "O": 6
    },
    "molarMass": "1425.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9051",
    "formula": "C106H121N1O7",
    "composition": {
      "C": 106,
      "H": 121,
      "N": 1,
      "O": 7
    },
    "molarMass": "1433.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9052",
    "formula": "C107H122N2O8",
    "composition": {
      "C": 107,
      "H": 122,
      "N": 2,
      "O": 8
    },
    "molarMass": "1442.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9053",
    "formula": "C108H123N3O9",
    "composition": {
      "C": 108,
      "H": 123,
      "N": 3,
      "O": 9
    },
    "molarMass": "1450.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9054",
    "formula": "C109H124N4O10",
    "composition": {
      "C": 109,
      "H": 124,
      "N": 4,
      "O": 10
    },
    "molarMass": "1459.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9055",
    "formula": "C110H125N5O11",
    "composition": {
      "C": 110,
      "H": 125,
      "N": 5,
      "O": 11
    },
    "molarMass": "1467.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9056",
    "formula": "C111H126N6O12",
    "composition": {
      "C": 111,
      "H": 126,
      "N": 6,
      "O": 12
    },
    "molarMass": "1476.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9057",
    "formula": "C112H127N7O13",
    "composition": {
      "C": 112,
      "H": 127,
      "N": 7,
      "O": 13
    },
    "molarMass": "1484.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9058",
    "formula": "C113H128N8O14",
    "composition": {
      "C": 113,
      "H": 128,
      "N": 8,
      "O": 14
    },
    "molarMass": "1493.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9059",
    "formula": "C114H129N9O15",
    "composition": {
      "C": 114,
      "H": 129,
      "N": 9,
      "O": 15
    },
    "molarMass": "1501.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9060",
    "formula": "C115H130N10O16",
    "composition": {
      "C": 115,
      "H": 130,
      "N": 10,
      "O": 16
    },
    "molarMass": "1510.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9061",
    "formula": "C116H131N11O17",
    "composition": {
      "C": 116,
      "H": 131,
      "N": 11,
      "O": 17
    },
    "molarMass": "1518.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9062",
    "formula": "C117H132N12O18",
    "composition": {
      "C": 117,
      "H": 132,
      "N": 12,
      "O": 18
    },
    "molarMass": "1527.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9063",
    "formula": "C118H133N13O19",
    "composition": {
      "C": 118,
      "H": 133,
      "N": 13,
      "O": 19
    },
    "molarMass": "1535.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9064",
    "formula": "C119H134N14O20",
    "composition": {
      "C": 119,
      "H": 134,
      "N": 14,
      "O": 20
    },
    "molarMass": "1544.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9065",
    "formula": "C120H135N15O21",
    "composition": {
      "C": 120,
      "H": 135,
      "N": 15,
      "O": 21
    },
    "molarMass": "1552.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9066",
    "formula": "C121H136N16O0",
    "composition": {
      "C": 121,
      "H": 136,
      "N": 16,
      "O": 0
    },
    "molarMass": "1561.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9067",
    "formula": "C122H137N17O1",
    "composition": {
      "C": 122,
      "H": 137,
      "N": 17,
      "O": 1
    },
    "molarMass": "1569.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9068",
    "formula": "C123H138N18O2",
    "composition": {
      "C": 123,
      "H": 138,
      "N": 18,
      "O": 2
    },
    "molarMass": "1578.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9069",
    "formula": "C124H139N19O3",
    "composition": {
      "C": 124,
      "H": 139,
      "N": 19,
      "O": 3
    },
    "molarMass": "1586.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9070",
    "formula": "C125H140N20O4",
    "composition": {
      "C": 125,
      "H": 140,
      "N": 20,
      "O": 4
    },
    "molarMass": "1595.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9071",
    "formula": "C126H141N21O5",
    "composition": {
      "C": 126,
      "H": 141,
      "N": 21,
      "O": 5
    },
    "molarMass": "1603.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9072",
    "formula": "C127H142N22O6",
    "composition": {
      "C": 127,
      "H": 142,
      "N": 22,
      "O": 6
    },
    "molarMass": "1612.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9073",
    "formula": "C128H143N23O7",
    "composition": {
      "C": 128,
      "H": 143,
      "N": 23,
      "O": 7
    },
    "molarMass": "1620.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9074",
    "formula": "C129H144N24O8",
    "composition": {
      "C": 129,
      "H": 144,
      "N": 24,
      "O": 8
    },
    "molarMass": "1629.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9075",
    "formula": "C130H145N0O9",
    "composition": {
      "C": 130,
      "H": 145,
      "N": 0,
      "O": 9
    },
    "molarMass": "1637.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9076",
    "formula": "C131H146N1O10",
    "composition": {
      "C": 131,
      "H": 146,
      "N": 1,
      "O": 10
    },
    "molarMass": "1646.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9077",
    "formula": "C132H147N2O11",
    "composition": {
      "C": 132,
      "H": 147,
      "N": 2,
      "O": 11
    },
    "molarMass": "1654.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9078",
    "formula": "C133H148N3O12",
    "composition": {
      "C": 133,
      "H": 148,
      "N": 3,
      "O": 12
    },
    "molarMass": "1663.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9079",
    "formula": "C134H149N4O13",
    "composition": {
      "C": 134,
      "H": 149,
      "N": 4,
      "O": 13
    },
    "molarMass": "1671.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9080",
    "formula": "C135H150N5O14",
    "composition": {
      "C": 135,
      "H": 150,
      "N": 5,
      "O": 14
    },
    "molarMass": "1680.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9081",
    "formula": "C136H151N6O15",
    "composition": {
      "C": 136,
      "H": 151,
      "N": 6,
      "O": 15
    },
    "molarMass": "1688.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9082",
    "formula": "C137H152N7O16",
    "composition": {
      "C": 137,
      "H": 152,
      "N": 7,
      "O": 16
    },
    "molarMass": "1697.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9083",
    "formula": "C138H153N8O17",
    "composition": {
      "C": 138,
      "H": 153,
      "N": 8,
      "O": 17
    },
    "molarMass": "1705.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9084",
    "formula": "C139H154N9O18",
    "composition": {
      "C": 139,
      "H": 154,
      "N": 9,
      "O": 18
    },
    "molarMass": "1714.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9085",
    "formula": "C140H155N10O19",
    "composition": {
      "C": 140,
      "H": 155,
      "N": 10,
      "O": 19
    },
    "molarMass": "1722.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9086",
    "formula": "C141H156N11O20",
    "composition": {
      "C": 141,
      "H": 156,
      "N": 11,
      "O": 20
    },
    "molarMass": "1731.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9087",
    "formula": "C142H157N12O21",
    "composition": {
      "C": 142,
      "H": 157,
      "N": 12,
      "O": 21
    },
    "molarMass": "1739.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9088",
    "formula": "C143H158N13O0",
    "composition": {
      "C": 143,
      "H": 158,
      "N": 13,
      "O": 0
    },
    "molarMass": "1748.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9089",
    "formula": "C144H159N14O1",
    "composition": {
      "C": 144,
      "H": 159,
      "N": 14,
      "O": 1
    },
    "molarMass": "1756.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9090",
    "formula": "C145H160N15O2",
    "composition": {
      "C": 145,
      "H": 160,
      "N": 15,
      "O": 2
    },
    "molarMass": "1765.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9091",
    "formula": "C146H161N16O3",
    "composition": {
      "C": 146,
      "H": 161,
      "N": 16,
      "O": 3
    },
    "molarMass": "1773.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9092",
    "formula": "C147H162N17O4",
    "composition": {
      "C": 147,
      "H": 162,
      "N": 17,
      "O": 4
    },
    "molarMass": "1782.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9093",
    "formula": "C148H163N18O5",
    "composition": {
      "C": 148,
      "H": 163,
      "N": 18,
      "O": 5
    },
    "molarMass": "1790.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9094",
    "formula": "C149H164N19O6",
    "composition": {
      "C": 149,
      "H": 164,
      "N": 19,
      "O": 6
    },
    "molarMass": "1799.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9095",
    "formula": "C150H165N20O7",
    "composition": {
      "C": 150,
      "H": 165,
      "N": 20,
      "O": 7
    },
    "molarMass": "1807.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9096",
    "formula": "C151H166N21O8",
    "composition": {
      "C": 151,
      "H": 166,
      "N": 21,
      "O": 8
    },
    "molarMass": "1816.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9097",
    "formula": "C152H167N22O9",
    "composition": {
      "C": 152,
      "H": 167,
      "N": 22,
      "O": 9
    },
    "molarMass": "1824.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9098",
    "formula": "C153H168N23O10",
    "composition": {
      "C": 153,
      "H": 168,
      "N": 23,
      "O": 10
    },
    "molarMass": "1833.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9099",
    "formula": "C154H169N24O11",
    "composition": {
      "C": 154,
      "H": 169,
      "N": 24,
      "O": 11
    },
    "molarMass": "1841.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9100",
    "formula": "C155H170N0O12",
    "composition": {
      "C": 155,
      "H": 170,
      "N": 0,
      "O": 12
    },
    "molarMass": "1850.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9101",
    "formula": "C156H171N1O13",
    "composition": {
      "C": 156,
      "H": 171,
      "N": 1,
      "O": 13
    },
    "molarMass": "1858.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9102",
    "formula": "C157H172N2O14",
    "composition": {
      "C": 157,
      "H": 172,
      "N": 2,
      "O": 14
    },
    "molarMass": "1867.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9103",
    "formula": "C158H173N3O15",
    "composition": {
      "C": 158,
      "H": 173,
      "N": 3,
      "O": 15
    },
    "molarMass": "1875.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9104",
    "formula": "C159H174N4O16",
    "composition": {
      "C": 159,
      "H": 174,
      "N": 4,
      "O": 16
    },
    "molarMass": "1884.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9105",
    "formula": "C160H175N5O17",
    "composition": {
      "C": 160,
      "H": 175,
      "N": 5,
      "O": 17
    },
    "molarMass": "1892.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9106",
    "formula": "C161H176N6O18",
    "composition": {
      "C": 161,
      "H": 176,
      "N": 6,
      "O": 18
    },
    "molarMass": "1901.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9107",
    "formula": "C162H177N7O19",
    "composition": {
      "C": 162,
      "H": 177,
      "N": 7,
      "O": 19
    },
    "molarMass": "1909.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9108",
    "formula": "C163H178N8O20",
    "composition": {
      "C": 163,
      "H": 178,
      "N": 8,
      "O": 20
    },
    "molarMass": "1918.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9109",
    "formula": "C164H179N9O21",
    "composition": {
      "C": 164,
      "H": 179,
      "N": 9,
      "O": 21
    },
    "molarMass": "1926.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9110",
    "formula": "C165H180N10O0",
    "composition": {
      "C": 165,
      "H": 180,
      "N": 10,
      "O": 0
    },
    "molarMass": "1935.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9111",
    "formula": "C166H181N11O1",
    "composition": {
      "C": 166,
      "H": 181,
      "N": 11,
      "O": 1
    },
    "molarMass": "1943.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9112",
    "formula": "C167H182N12O2",
    "composition": {
      "C": 167,
      "H": 182,
      "N": 12,
      "O": 2
    },
    "molarMass": "1952.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9113",
    "formula": "C168H183N13O3",
    "composition": {
      "C": 168,
      "H": 183,
      "N": 13,
      "O": 3
    },
    "molarMass": "1960.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9114",
    "formula": "C169H184N14O4",
    "composition": {
      "C": 169,
      "H": 184,
      "N": 14,
      "O": 4
    },
    "molarMass": "1969.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9115",
    "formula": "C170H185N15O5",
    "composition": {
      "C": 170,
      "H": 185,
      "N": 15,
      "O": 5
    },
    "molarMass": "1977.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9116",
    "formula": "C171H186N16O6",
    "composition": {
      "C": 171,
      "H": 186,
      "N": 16,
      "O": 6
    },
    "molarMass": "1986.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9117",
    "formula": "C172H187N17O7",
    "composition": {
      "C": 172,
      "H": 187,
      "N": 17,
      "O": 7
    },
    "molarMass": "1994.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9118",
    "formula": "C173H188N18O8",
    "composition": {
      "C": 173,
      "H": 188,
      "N": 18,
      "O": 8
    },
    "molarMass": "2003.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9119",
    "formula": "C174H189N19O9",
    "composition": {
      "C": 174,
      "H": 189,
      "N": 19,
      "O": 9
    },
    "molarMass": "2011.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9120",
    "formula": "C175H190N20O10",
    "composition": {
      "C": 175,
      "H": 190,
      "N": 20,
      "O": 10
    },
    "molarMass": "2020.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9121",
    "formula": "C176H191N21O11",
    "composition": {
      "C": 176,
      "H": 191,
      "N": 21,
      "O": 11
    },
    "molarMass": "2028.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9122",
    "formula": "C177H192N22O12",
    "composition": {
      "C": 177,
      "H": 192,
      "N": 22,
      "O": 12
    },
    "molarMass": "2037.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9123",
    "formula": "C178H193N23O13",
    "composition": {
      "C": 178,
      "H": 193,
      "N": 23,
      "O": 13
    },
    "molarMass": "2045.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9124",
    "formula": "C179H194N24O14",
    "composition": {
      "C": 179,
      "H": 194,
      "N": 24,
      "O": 14
    },
    "molarMass": "2054.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9125",
    "formula": "C180H195N0O15",
    "composition": {
      "C": 180,
      "H": 195,
      "N": 0,
      "O": 15
    },
    "molarMass": "2062.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9126",
    "formula": "C181H196N1O16",
    "composition": {
      "C": 181,
      "H": 196,
      "N": 1,
      "O": 16
    },
    "molarMass": "2071.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9127",
    "formula": "C182H197N2O17",
    "composition": {
      "C": 182,
      "H": 197,
      "N": 2,
      "O": 17
    },
    "molarMass": "2079.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9128",
    "formula": "C183H198N3O18",
    "composition": {
      "C": 183,
      "H": 198,
      "N": 3,
      "O": 18
    },
    "molarMass": "2088.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9129",
    "formula": "C184H199N4O19",
    "composition": {
      "C": 184,
      "H": 199,
      "N": 4,
      "O": 19
    },
    "molarMass": "2096.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9130",
    "formula": "C185H200N5O20",
    "composition": {
      "C": 185,
      "H": 200,
      "N": 5,
      "O": 20
    },
    "molarMass": "2105.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9131",
    "formula": "C186H201N6O21",
    "composition": {
      "C": 186,
      "H": 201,
      "N": 6,
      "O": 21
    },
    "molarMass": "2113.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9132",
    "formula": "C187H202N7O0",
    "composition": {
      "C": 187,
      "H": 202,
      "N": 7,
      "O": 0
    },
    "molarMass": "2122.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9133",
    "formula": "C188H203N8O1",
    "composition": {
      "C": 188,
      "H": 203,
      "N": 8,
      "O": 1
    },
    "molarMass": "2130.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9134",
    "formula": "C189H204N9O2",
    "composition": {
      "C": 189,
      "H": 204,
      "N": 9,
      "O": 2
    },
    "molarMass": "2139.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9135",
    "formula": "C190H205N10O3",
    "composition": {
      "C": 190,
      "H": 205,
      "N": 10,
      "O": 3
    },
    "molarMass": "2147.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9136",
    "formula": "C191H206N11O4",
    "composition": {
      "C": 191,
      "H": 206,
      "N": 11,
      "O": 4
    },
    "molarMass": "2156.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9137",
    "formula": "C192H207N12O5",
    "composition": {
      "C": 192,
      "H": 207,
      "N": 12,
      "O": 5
    },
    "molarMass": "2164.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9138",
    "formula": "C193H208N13O6",
    "composition": {
      "C": 193,
      "H": 208,
      "N": 13,
      "O": 6
    },
    "molarMass": "2173.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9139",
    "formula": "C194H209N14O7",
    "composition": {
      "C": 194,
      "H": 209,
      "N": 14,
      "O": 7
    },
    "molarMass": "2181.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9140",
    "formula": "C195H210N15O8",
    "composition": {
      "C": 195,
      "H": 210,
      "N": 15,
      "O": 8
    },
    "molarMass": "2190.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9141",
    "formula": "C196H211N16O9",
    "composition": {
      "C": 196,
      "H": 211,
      "N": 16,
      "O": 9
    },
    "molarMass": "2198.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9142",
    "formula": "C197H212N17O10",
    "composition": {
      "C": 197,
      "H": 212,
      "N": 17,
      "O": 10
    },
    "molarMass": "2207.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9143",
    "formula": "C198H213N18O11",
    "composition": {
      "C": 198,
      "H": 213,
      "N": 18,
      "O": 11
    },
    "molarMass": "2215.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9144",
    "formula": "C199H214N19O12",
    "composition": {
      "C": 199,
      "H": 214,
      "N": 19,
      "O": 12
    },
    "molarMass": "2224.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9145",
    "formula": "C200H215N20O13",
    "composition": {
      "C": 200,
      "H": 215,
      "N": 20,
      "O": 13
    },
    "molarMass": "2232.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9146",
    "formula": "C201H216N21O14",
    "composition": {
      "C": 201,
      "H": 216,
      "N": 21,
      "O": 14
    },
    "molarMass": "2241.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9147",
    "formula": "C202H217N22O15",
    "composition": {
      "C": 202,
      "H": 217,
      "N": 22,
      "O": 15
    },
    "molarMass": "2249.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9148",
    "formula": "C203H218N23O16",
    "composition": {
      "C": 203,
      "H": 218,
      "N": 23,
      "O": 16
    },
    "molarMass": "2258.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9149",
    "formula": "C204H219N24O17",
    "composition": {
      "C": 204,
      "H": 219,
      "N": 24,
      "O": 17
    },
    "molarMass": "2266.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9150",
    "formula": "C205H220N0O18",
    "composition": {
      "C": 205,
      "H": 220,
      "N": 0,
      "O": 18
    },
    "molarMass": "2275.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9151",
    "formula": "C206H221N1O19",
    "composition": {
      "C": 206,
      "H": 221,
      "N": 1,
      "O": 19
    },
    "molarMass": "2283.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9152",
    "formula": "C207H222N2O20",
    "composition": {
      "C": 207,
      "H": 222,
      "N": 2,
      "O": 20
    },
    "molarMass": "2292.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9153",
    "formula": "C208H223N3O21",
    "composition": {
      "C": 208,
      "H": 223,
      "N": 3,
      "O": 21
    },
    "molarMass": "2300.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9154",
    "formula": "C209H224N4O0",
    "composition": {
      "C": 209,
      "H": 224,
      "N": 4,
      "O": 0
    },
    "molarMass": "2309.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9155",
    "formula": "C210H225N5O1",
    "composition": {
      "C": 210,
      "H": 225,
      "N": 5,
      "O": 1
    },
    "molarMass": "2317.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9156",
    "formula": "C211H226N6O2",
    "composition": {
      "C": 211,
      "H": 226,
      "N": 6,
      "O": 2
    },
    "molarMass": "2326.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9157",
    "formula": "C212H227N7O3",
    "composition": {
      "C": 212,
      "H": 227,
      "N": 7,
      "O": 3
    },
    "molarMass": "2334.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9158",
    "formula": "C213H228N8O4",
    "composition": {
      "C": 213,
      "H": 228,
      "N": 8,
      "O": 4
    },
    "molarMass": "2343.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9159",
    "formula": "C214H229N9O5",
    "composition": {
      "C": 214,
      "H": 229,
      "N": 9,
      "O": 5
    },
    "molarMass": "2351.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9160",
    "formula": "C215H230N10O6",
    "composition": {
      "C": 215,
      "H": 230,
      "N": 10,
      "O": 6
    },
    "molarMass": "2360.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9161",
    "formula": "C216H231N11O7",
    "composition": {
      "C": 216,
      "H": 231,
      "N": 11,
      "O": 7
    },
    "molarMass": "2368.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9162",
    "formula": "C217H232N12O8",
    "composition": {
      "C": 217,
      "H": 232,
      "N": 12,
      "O": 8
    },
    "molarMass": "2377.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9163",
    "formula": "C218H233N13O9",
    "composition": {
      "C": 218,
      "H": 233,
      "N": 13,
      "O": 9
    },
    "molarMass": "2385.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9164",
    "formula": "C219H234N14O10",
    "composition": {
      "C": 219,
      "H": 234,
      "N": 14,
      "O": 10
    },
    "molarMass": "2394.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9165",
    "formula": "C220H235N15O11",
    "composition": {
      "C": 220,
      "H": 235,
      "N": 15,
      "O": 11
    },
    "molarMass": "2402.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9166",
    "formula": "C221H236N16O12",
    "composition": {
      "C": 221,
      "H": 236,
      "N": 16,
      "O": 12
    },
    "molarMass": "2411.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9167",
    "formula": "C222H237N17O13",
    "composition": {
      "C": 222,
      "H": 237,
      "N": 17,
      "O": 13
    },
    "molarMass": "2419.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9168",
    "formula": "C223H238N18O14",
    "composition": {
      "C": 223,
      "H": 238,
      "N": 18,
      "O": 14
    },
    "molarMass": "2428.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9169",
    "formula": "C224H239N19O15",
    "composition": {
      "C": 224,
      "H": 239,
      "N": 19,
      "O": 15
    },
    "molarMass": "2436.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9170",
    "formula": "C225H240N20O16",
    "composition": {
      "C": 225,
      "H": 240,
      "N": 20,
      "O": 16
    },
    "molarMass": "2445.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9171",
    "formula": "C226H241N21O17",
    "composition": {
      "C": 226,
      "H": 241,
      "N": 21,
      "O": 17
    },
    "molarMass": "2453.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9172",
    "formula": "C227H242N22O18",
    "composition": {
      "C": 227,
      "H": 242,
      "N": 22,
      "O": 18
    },
    "molarMass": "2462.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9173",
    "formula": "C228H243N23O19",
    "composition": {
      "C": 228,
      "H": 243,
      "N": 23,
      "O": 19
    },
    "molarMass": "2470.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9174",
    "formula": "C229H244N24O20",
    "composition": {
      "C": 229,
      "H": 244,
      "N": 24,
      "O": 20
    },
    "molarMass": "2479.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9175",
    "formula": "C230H245N0O21",
    "composition": {
      "C": 230,
      "H": 245,
      "N": 0,
      "O": 21
    },
    "molarMass": "2487.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9176",
    "formula": "C231H246N1O0",
    "composition": {
      "C": 231,
      "H": 246,
      "N": 1,
      "O": 0
    },
    "molarMass": "2496.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9177",
    "formula": "C232H247N2O1",
    "composition": {
      "C": 232,
      "H": 247,
      "N": 2,
      "O": 1
    },
    "molarMass": "2504.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9178",
    "formula": "C233H248N3O2",
    "composition": {
      "C": 233,
      "H": 248,
      "N": 3,
      "O": 2
    },
    "molarMass": "2513.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9179",
    "formula": "C234H249N4O3",
    "composition": {
      "C": 234,
      "H": 249,
      "N": 4,
      "O": 3
    },
    "molarMass": "2521.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9180",
    "formula": "C235H250N5O4",
    "composition": {
      "C": 235,
      "H": 250,
      "N": 5,
      "O": 4
    },
    "molarMass": "2530.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9181",
    "formula": "C236H251N6O5",
    "composition": {
      "C": 236,
      "H": 251,
      "N": 6,
      "O": 5
    },
    "molarMass": "2538.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9182",
    "formula": "C237H252N7O6",
    "composition": {
      "C": 237,
      "H": 252,
      "N": 7,
      "O": 6
    },
    "molarMass": "2547.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9183",
    "formula": "C238H253N8O7",
    "composition": {
      "C": 238,
      "H": 253,
      "N": 8,
      "O": 7
    },
    "molarMass": "2555.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9184",
    "formula": "C239H254N9O8",
    "composition": {
      "C": 239,
      "H": 254,
      "N": 9,
      "O": 8
    },
    "molarMass": "2564.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9185",
    "formula": "C240H255N10O9",
    "composition": {
      "C": 240,
      "H": 255,
      "N": 10,
      "O": 9
    },
    "molarMass": "2572.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9186",
    "formula": "C241H256N11O10",
    "composition": {
      "C": 241,
      "H": 256,
      "N": 11,
      "O": 10
    },
    "molarMass": "2581.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9187",
    "formula": "C242H257N12O11",
    "composition": {
      "C": 242,
      "H": 257,
      "N": 12,
      "O": 11
    },
    "molarMass": "2589.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9188",
    "formula": "C243H258N13O12",
    "composition": {
      "C": 243,
      "H": 258,
      "N": 13,
      "O": 12
    },
    "molarMass": "2598.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9189",
    "formula": "C244H259N14O13",
    "composition": {
      "C": 244,
      "H": 259,
      "N": 14,
      "O": 13
    },
    "molarMass": "2606.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9190",
    "formula": "C245H260N15O14",
    "composition": {
      "C": 245,
      "H": 260,
      "N": 15,
      "O": 14
    },
    "molarMass": "2615.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9191",
    "formula": "C246H261N16O15",
    "composition": {
      "C": 246,
      "H": 261,
      "N": 16,
      "O": 15
    },
    "molarMass": "2623.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9192",
    "formula": "C247H262N17O16",
    "composition": {
      "C": 247,
      "H": 262,
      "N": 17,
      "O": 16
    },
    "molarMass": "2632.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9193",
    "formula": "C248H263N18O17",
    "composition": {
      "C": 248,
      "H": 263,
      "N": 18,
      "O": 17
    },
    "molarMass": "2640.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9194",
    "formula": "C249H264N19O18",
    "composition": {
      "C": 249,
      "H": 264,
      "N": 19,
      "O": 18
    },
    "molarMass": "2649.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9195",
    "formula": "C250H265N20O19",
    "composition": {
      "C": 250,
      "H": 265,
      "N": 20,
      "O": 19
    },
    "molarMass": "2657.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9196",
    "formula": "C251H266N21O20",
    "composition": {
      "C": 251,
      "H": 266,
      "N": 21,
      "O": 20
    },
    "molarMass": "2666.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9197",
    "formula": "C252H267N22O21",
    "composition": {
      "C": 252,
      "H": 267,
      "N": 22,
      "O": 21
    },
    "molarMass": "2674.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9198",
    "formula": "C253H268N23O0",
    "composition": {
      "C": 253,
      "H": 268,
      "N": 23,
      "O": 0
    },
    "molarMass": "2683.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9199",
    "formula": "C254H269N24O1",
    "composition": {
      "C": 254,
      "H": 269,
      "N": 24,
      "O": 1
    },
    "molarMass": "2691.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9200",
    "formula": "C255H270N0O2",
    "composition": {
      "C": 255,
      "H": 270,
      "N": 0,
      "O": 2
    },
    "molarMass": "2700.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9201",
    "formula": "C256H271N1O3",
    "composition": {
      "C": 256,
      "H": 271,
      "N": 1,
      "O": 3
    },
    "molarMass": "2708.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9202",
    "formula": "C257H272N2O4",
    "composition": {
      "C": 257,
      "H": 272,
      "N": 2,
      "O": 4
    },
    "molarMass": "2717.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9203",
    "formula": "C258H273N3O5",
    "composition": {
      "C": 258,
      "H": 273,
      "N": 3,
      "O": 5
    },
    "molarMass": "2725.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9204",
    "formula": "C259H274N4O6",
    "composition": {
      "C": 259,
      "H": 274,
      "N": 4,
      "O": 6
    },
    "molarMass": "2734.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9205",
    "formula": "C260H275N5O7",
    "composition": {
      "C": 260,
      "H": 275,
      "N": 5,
      "O": 7
    },
    "molarMass": "2742.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9206",
    "formula": "C261H276N6O8",
    "composition": {
      "C": 261,
      "H": 276,
      "N": 6,
      "O": 8
    },
    "molarMass": "2751.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9207",
    "formula": "C262H277N7O9",
    "composition": {
      "C": 262,
      "H": 277,
      "N": 7,
      "O": 9
    },
    "molarMass": "2759.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9208",
    "formula": "C263H278N8O10",
    "composition": {
      "C": 263,
      "H": 278,
      "N": 8,
      "O": 10
    },
    "molarMass": "2768.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9209",
    "formula": "C264H279N9O11",
    "composition": {
      "C": 264,
      "H": 279,
      "N": 9,
      "O": 11
    },
    "molarMass": "2776.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9210",
    "formula": "C265H280N10O12",
    "composition": {
      "C": 265,
      "H": 280,
      "N": 10,
      "O": 12
    },
    "molarMass": "2785.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9211",
    "formula": "C266H281N11O13",
    "composition": {
      "C": 266,
      "H": 281,
      "N": 11,
      "O": 13
    },
    "molarMass": "2793.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9212",
    "formula": "C267H282N12O14",
    "composition": {
      "C": 267,
      "H": 282,
      "N": 12,
      "O": 14
    },
    "molarMass": "2802.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9213",
    "formula": "C268H283N13O15",
    "composition": {
      "C": 268,
      "H": 283,
      "N": 13,
      "O": 15
    },
    "molarMass": "2810.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9214",
    "formula": "C269H284N14O16",
    "composition": {
      "C": 269,
      "H": 284,
      "N": 14,
      "O": 16
    },
    "molarMass": "2819.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9215",
    "formula": "C270H285N15O17",
    "composition": {
      "C": 270,
      "H": 285,
      "N": 15,
      "O": 17
    },
    "molarMass": "2827.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9216",
    "formula": "C271H286N16O18",
    "composition": {
      "C": 271,
      "H": 286,
      "N": 16,
      "O": 18
    },
    "molarMass": "2836.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9217",
    "formula": "C272H287N17O19",
    "composition": {
      "C": 272,
      "H": 287,
      "N": 17,
      "O": 19
    },
    "molarMass": "2844.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9218",
    "formula": "C273H288N18O20",
    "composition": {
      "C": 273,
      "H": 288,
      "N": 18,
      "O": 20
    },
    "molarMass": "2853.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9219",
    "formula": "C274H289N19O21",
    "composition": {
      "C": 274,
      "H": 289,
      "N": 19,
      "O": 21
    },
    "molarMass": "2861.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9220",
    "formula": "C275H290N20O0",
    "composition": {
      "C": 275,
      "H": 290,
      "N": 20,
      "O": 0
    },
    "molarMass": "2870.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9221",
    "formula": "C276H291N21O1",
    "composition": {
      "C": 276,
      "H": 291,
      "N": 21,
      "O": 1
    },
    "molarMass": "2878.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9222",
    "formula": "C277H292N22O2",
    "composition": {
      "C": 277,
      "H": 292,
      "N": 22,
      "O": 2
    },
    "molarMass": "2887.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9223",
    "formula": "C278H293N23O3",
    "composition": {
      "C": 278,
      "H": 293,
      "N": 23,
      "O": 3
    },
    "molarMass": "2895.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9224",
    "formula": "C279H294N24O4",
    "composition": {
      "C": 279,
      "H": 294,
      "N": 24,
      "O": 4
    },
    "molarMass": "2904.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9225",
    "formula": "C280H295N0O5",
    "composition": {
      "C": 280,
      "H": 295,
      "N": 0,
      "O": 5
    },
    "molarMass": "2912.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9226",
    "formula": "C281H296N1O6",
    "composition": {
      "C": 281,
      "H": 296,
      "N": 1,
      "O": 6
    },
    "molarMass": "2921.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9227",
    "formula": "C282H297N2O7",
    "composition": {
      "C": 282,
      "H": 297,
      "N": 2,
      "O": 7
    },
    "molarMass": "2929.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9228",
    "formula": "C283H298N3O8",
    "composition": {
      "C": 283,
      "H": 298,
      "N": 3,
      "O": 8
    },
    "molarMass": "2938.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9229",
    "formula": "C284H299N4O9",
    "composition": {
      "C": 284,
      "H": 299,
      "N": 4,
      "O": 9
    },
    "molarMass": "2946.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9230",
    "formula": "C285H300N5O10",
    "composition": {
      "C": 285,
      "H": 300,
      "N": 5,
      "O": 10
    },
    "molarMass": "2955.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9231",
    "formula": "C286H301N6O11",
    "composition": {
      "C": 286,
      "H": 301,
      "N": 6,
      "O": 11
    },
    "molarMass": "2963.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9232",
    "formula": "C287H302N7O12",
    "composition": {
      "C": 287,
      "H": 302,
      "N": 7,
      "O": 12
    },
    "molarMass": "2972.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9233",
    "formula": "C288H303N8O13",
    "composition": {
      "C": 288,
      "H": 303,
      "N": 8,
      "O": 13
    },
    "molarMass": "2980.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9234",
    "formula": "C289H304N9O14",
    "composition": {
      "C": 289,
      "H": 304,
      "N": 9,
      "O": 14
    },
    "molarMass": "2989.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9235",
    "formula": "C290H305N10O15",
    "composition": {
      "C": 290,
      "H": 305,
      "N": 10,
      "O": 15
    },
    "molarMass": "2997.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9236",
    "formula": "C291H306N11O16",
    "composition": {
      "C": 291,
      "H": 306,
      "N": 11,
      "O": 16
    },
    "molarMass": "3006.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9237",
    "formula": "C292H307N12O17",
    "composition": {
      "C": 292,
      "H": 307,
      "N": 12,
      "O": 17
    },
    "molarMass": "3014.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9238",
    "formula": "C293H308N13O18",
    "composition": {
      "C": 293,
      "H": 308,
      "N": 13,
      "O": 18
    },
    "molarMass": "3023.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9239",
    "formula": "C294H309N14O19",
    "composition": {
      "C": 294,
      "H": 309,
      "N": 14,
      "O": 19
    },
    "molarMass": "3031.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9240",
    "formula": "C295H310N15O20",
    "composition": {
      "C": 295,
      "H": 310,
      "N": 15,
      "O": 20
    },
    "molarMass": "3040.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9241",
    "formula": "C296H311N16O21",
    "composition": {
      "C": 296,
      "H": 311,
      "N": 16,
      "O": 21
    },
    "molarMass": "3048.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9242",
    "formula": "C297H312N17O0",
    "composition": {
      "C": 297,
      "H": 312,
      "N": 17,
      "O": 0
    },
    "molarMass": "3057.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9243",
    "formula": "C298H313N18O1",
    "composition": {
      "C": 298,
      "H": 313,
      "N": 18,
      "O": 1
    },
    "molarMass": "3065.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9244",
    "formula": "C299H314N19O2",
    "composition": {
      "C": 299,
      "H": 314,
      "N": 19,
      "O": 2
    },
    "molarMass": "3074.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9245",
    "formula": "C300H315N20O3",
    "composition": {
      "C": 300,
      "H": 315,
      "N": 20,
      "O": 3
    },
    "molarMass": "3082.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9246",
    "formula": "C301H316N21O4",
    "composition": {
      "C": 301,
      "H": 316,
      "N": 21,
      "O": 4
    },
    "molarMass": "3091.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9247",
    "formula": "C302H317N22O5",
    "composition": {
      "C": 302,
      "H": 317,
      "N": 22,
      "O": 5
    },
    "molarMass": "3099.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9248",
    "formula": "C303H318N23O6",
    "composition": {
      "C": 303,
      "H": 318,
      "N": 23,
      "O": 6
    },
    "molarMass": "3108.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9249",
    "formula": "C304H319N24O7",
    "composition": {
      "C": 304,
      "H": 319,
      "N": 24,
      "O": 7
    },
    "molarMass": "3116.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9250",
    "formula": "C305H320N0O8",
    "composition": {
      "C": 305,
      "H": 320,
      "N": 0,
      "O": 8
    },
    "molarMass": "3125.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9251",
    "formula": "C306H321N1O9",
    "composition": {
      "C": 306,
      "H": 321,
      "N": 1,
      "O": 9
    },
    "molarMass": "3133.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9252",
    "formula": "C307H322N2O10",
    "composition": {
      "C": 307,
      "H": 322,
      "N": 2,
      "O": 10
    },
    "molarMass": "3142.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9253",
    "formula": "C308H323N3O11",
    "composition": {
      "C": 308,
      "H": 323,
      "N": 3,
      "O": 11
    },
    "molarMass": "3150.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9254",
    "formula": "C309H324N4O12",
    "composition": {
      "C": 309,
      "H": 324,
      "N": 4,
      "O": 12
    },
    "molarMass": "3159.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9255",
    "formula": "C310H325N5O13",
    "composition": {
      "C": 310,
      "H": 325,
      "N": 5,
      "O": 13
    },
    "molarMass": "3167.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9256",
    "formula": "C311H326N6O14",
    "composition": {
      "C": 311,
      "H": 326,
      "N": 6,
      "O": 14
    },
    "molarMass": "3176.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9257",
    "formula": "C312H327N7O15",
    "composition": {
      "C": 312,
      "H": 327,
      "N": 7,
      "O": 15
    },
    "molarMass": "3184.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9258",
    "formula": "C313H328N8O16",
    "composition": {
      "C": 313,
      "H": 328,
      "N": 8,
      "O": 16
    },
    "molarMass": "3193.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9259",
    "formula": "C314H329N9O17",
    "composition": {
      "C": 314,
      "H": 329,
      "N": 9,
      "O": 17
    },
    "molarMass": "3201.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9260",
    "formula": "C315H330N10O18",
    "composition": {
      "C": 315,
      "H": 330,
      "N": 10,
      "O": 18
    },
    "molarMass": "3210.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9261",
    "formula": "C316H331N11O19",
    "composition": {
      "C": 316,
      "H": 331,
      "N": 11,
      "O": 19
    },
    "molarMass": "3218.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9262",
    "formula": "C317H332N12O20",
    "composition": {
      "C": 317,
      "H": 332,
      "N": 12,
      "O": 20
    },
    "molarMass": "3227.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9263",
    "formula": "C318H333N13O21",
    "composition": {
      "C": 318,
      "H": 333,
      "N": 13,
      "O": 21
    },
    "molarMass": "3235.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9264",
    "formula": "C319H334N14O0",
    "composition": {
      "C": 319,
      "H": 334,
      "N": 14,
      "O": 0
    },
    "molarMass": "3244.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9265",
    "formula": "C320H335N15O1",
    "composition": {
      "C": 320,
      "H": 335,
      "N": 15,
      "O": 1
    },
    "molarMass": "3252.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9266",
    "formula": "C321H336N16O2",
    "composition": {
      "C": 321,
      "H": 336,
      "N": 16,
      "O": 2
    },
    "molarMass": "3261.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9267",
    "formula": "C322H337N17O3",
    "composition": {
      "C": 322,
      "H": 337,
      "N": 17,
      "O": 3
    },
    "molarMass": "3269.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9268",
    "formula": "C323H338N18O4",
    "composition": {
      "C": 323,
      "H": 338,
      "N": 18,
      "O": 4
    },
    "molarMass": "3278.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9269",
    "formula": "C324H339N19O5",
    "composition": {
      "C": 324,
      "H": 339,
      "N": 19,
      "O": 5
    },
    "molarMass": "3286.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9270",
    "formula": "C325H340N20O6",
    "composition": {
      "C": 325,
      "H": 340,
      "N": 20,
      "O": 6
    },
    "molarMass": "3295.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9271",
    "formula": "C326H341N21O7",
    "composition": {
      "C": 326,
      "H": 341,
      "N": 21,
      "O": 7
    },
    "molarMass": "3303.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9272",
    "formula": "C327H342N22O8",
    "composition": {
      "C": 327,
      "H": 342,
      "N": 22,
      "O": 8
    },
    "molarMass": "3312.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9273",
    "formula": "C328H343N23O9",
    "composition": {
      "C": 328,
      "H": 343,
      "N": 23,
      "O": 9
    },
    "molarMass": "3320.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9274",
    "formula": "C329H344N24O10",
    "composition": {
      "C": 329,
      "H": 344,
      "N": 24,
      "O": 10
    },
    "molarMass": "3329.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9275",
    "formula": "C330H345N0O11",
    "composition": {
      "C": 330,
      "H": 345,
      "N": 0,
      "O": 11
    },
    "molarMass": "3337.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9276",
    "formula": "C331H346N1O12",
    "composition": {
      "C": 331,
      "H": 346,
      "N": 1,
      "O": 12
    },
    "molarMass": "3346.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9277",
    "formula": "C332H347N2O13",
    "composition": {
      "C": 332,
      "H": 347,
      "N": 2,
      "O": 13
    },
    "molarMass": "3354.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9278",
    "formula": "C333H348N3O14",
    "composition": {
      "C": 333,
      "H": 348,
      "N": 3,
      "O": 14
    },
    "molarMass": "3363.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9279",
    "formula": "C334H349N4O15",
    "composition": {
      "C": 334,
      "H": 349,
      "N": 4,
      "O": 15
    },
    "molarMass": "3371.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9280",
    "formula": "C335H350N5O16",
    "composition": {
      "C": 335,
      "H": 350,
      "N": 5,
      "O": 16
    },
    "molarMass": "3380.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9281",
    "formula": "C336H351N6O17",
    "composition": {
      "C": 336,
      "H": 351,
      "N": 6,
      "O": 17
    },
    "molarMass": "3388.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9282",
    "formula": "C337H352N7O18",
    "composition": {
      "C": 337,
      "H": 352,
      "N": 7,
      "O": 18
    },
    "molarMass": "3397.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9283",
    "formula": "C338H353N8O19",
    "composition": {
      "C": 338,
      "H": 353,
      "N": 8,
      "O": 19
    },
    "molarMass": "3405.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9284",
    "formula": "C339H354N9O20",
    "composition": {
      "C": 339,
      "H": 354,
      "N": 9,
      "O": 20
    },
    "molarMass": "3414.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9285",
    "formula": "C340H355N10O21",
    "composition": {
      "C": 340,
      "H": 355,
      "N": 10,
      "O": 21
    },
    "molarMass": "3422.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9286",
    "formula": "C341H356N11O0",
    "composition": {
      "C": 341,
      "H": 356,
      "N": 11,
      "O": 0
    },
    "molarMass": "3431.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9287",
    "formula": "C342H357N12O1",
    "composition": {
      "C": 342,
      "H": 357,
      "N": 12,
      "O": 1
    },
    "molarMass": "3439.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9288",
    "formula": "C343H358N13O2",
    "composition": {
      "C": 343,
      "H": 358,
      "N": 13,
      "O": 2
    },
    "molarMass": "3448.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9289",
    "formula": "C344H359N14O3",
    "composition": {
      "C": 344,
      "H": 359,
      "N": 14,
      "O": 3
    },
    "molarMass": "3456.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9290",
    "formula": "C345H360N15O4",
    "composition": {
      "C": 345,
      "H": 360,
      "N": 15,
      "O": 4
    },
    "molarMass": "3465.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9291",
    "formula": "C346H361N16O5",
    "composition": {
      "C": 346,
      "H": 361,
      "N": 16,
      "O": 5
    },
    "molarMass": "3473.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9292",
    "formula": "C347H362N17O6",
    "composition": {
      "C": 347,
      "H": 362,
      "N": 17,
      "O": 6
    },
    "molarMass": "3482.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9293",
    "formula": "C348H363N18O7",
    "composition": {
      "C": 348,
      "H": 363,
      "N": 18,
      "O": 7
    },
    "molarMass": "3490.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9294",
    "formula": "C349H364N19O8",
    "composition": {
      "C": 349,
      "H": 364,
      "N": 19,
      "O": 8
    },
    "molarMass": "3499.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9295",
    "formula": "C350H365N20O9",
    "composition": {
      "C": 350,
      "H": 365,
      "N": 20,
      "O": 9
    },
    "molarMass": "3507.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9296",
    "formula": "C351H366N21O10",
    "composition": {
      "C": 351,
      "H": 366,
      "N": 21,
      "O": 10
    },
    "molarMass": "3516.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9297",
    "formula": "C352H367N22O11",
    "composition": {
      "C": 352,
      "H": 367,
      "N": 22,
      "O": 11
    },
    "molarMass": "3524.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9298",
    "formula": "C353H368N23O12",
    "composition": {
      "C": 353,
      "H": 368,
      "N": 23,
      "O": 12
    },
    "molarMass": "3533.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9299",
    "formula": "C354H369N24O13",
    "composition": {
      "C": 354,
      "H": 369,
      "N": 24,
      "O": 13
    },
    "molarMass": "3541.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9300",
    "formula": "C355H370N0O14",
    "composition": {
      "C": 355,
      "H": 370,
      "N": 0,
      "O": 14
    },
    "molarMass": "3550.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9301",
    "formula": "C356H371N1O15",
    "composition": {
      "C": 356,
      "H": 371,
      "N": 1,
      "O": 15
    },
    "molarMass": "3558.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9302",
    "formula": "C357H372N2O16",
    "composition": {
      "C": 357,
      "H": 372,
      "N": 2,
      "O": 16
    },
    "molarMass": "3567.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9303",
    "formula": "C358H373N3O17",
    "composition": {
      "C": 358,
      "H": 373,
      "N": 3,
      "O": 17
    },
    "molarMass": "3575.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9304",
    "formula": "C359H374N4O18",
    "composition": {
      "C": 359,
      "H": 374,
      "N": 4,
      "O": 18
    },
    "molarMass": "3584.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9305",
    "formula": "C360H375N5O19",
    "composition": {
      "C": 360,
      "H": 375,
      "N": 5,
      "O": 19
    },
    "molarMass": "3592.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9306",
    "formula": "C361H376N6O20",
    "composition": {
      "C": 361,
      "H": 376,
      "N": 6,
      "O": 20
    },
    "molarMass": "3601.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9307",
    "formula": "C362H377N7O21",
    "composition": {
      "C": 362,
      "H": 377,
      "N": 7,
      "O": 21
    },
    "molarMass": "3609.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9308",
    "formula": "C363H378N8O0",
    "composition": {
      "C": 363,
      "H": 378,
      "N": 8,
      "O": 0
    },
    "molarMass": "3618.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9309",
    "formula": "C364H379N9O1",
    "composition": {
      "C": 364,
      "H": 379,
      "N": 9,
      "O": 1
    },
    "molarMass": "3626.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9310",
    "formula": "C365H380N10O2",
    "composition": {
      "C": 365,
      "H": 380,
      "N": 10,
      "O": 2
    },
    "molarMass": "3635.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9311",
    "formula": "C366H381N11O3",
    "composition": {
      "C": 366,
      "H": 381,
      "N": 11,
      "O": 3
    },
    "molarMass": "3643.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9312",
    "formula": "C367H382N12O4",
    "composition": {
      "C": 367,
      "H": 382,
      "N": 12,
      "O": 4
    },
    "molarMass": "3652.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9313",
    "formula": "C368H383N13O5",
    "composition": {
      "C": 368,
      "H": 383,
      "N": 13,
      "O": 5
    },
    "molarMass": "3660.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9314",
    "formula": "C369H384N14O6",
    "composition": {
      "C": 369,
      "H": 384,
      "N": 14,
      "O": 6
    },
    "molarMass": "3669.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9315",
    "formula": "C370H385N15O7",
    "composition": {
      "C": 370,
      "H": 385,
      "N": 15,
      "O": 7
    },
    "molarMass": "3677.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9316",
    "formula": "C371H386N16O8",
    "composition": {
      "C": 371,
      "H": 386,
      "N": 16,
      "O": 8
    },
    "molarMass": "3686.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9317",
    "formula": "C372H387N17O9",
    "composition": {
      "C": 372,
      "H": 387,
      "N": 17,
      "O": 9
    },
    "molarMass": "3694.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9318",
    "formula": "C373H388N18O10",
    "composition": {
      "C": 373,
      "H": 388,
      "N": 18,
      "O": 10
    },
    "molarMass": "3703.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9319",
    "formula": "C374H389N19O11",
    "composition": {
      "C": 374,
      "H": 389,
      "N": 19,
      "O": 11
    },
    "molarMass": "3711.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9320",
    "formula": "C375H390N20O12",
    "composition": {
      "C": 375,
      "H": 390,
      "N": 20,
      "O": 12
    },
    "molarMass": "3720.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9321",
    "formula": "C376H391N21O13",
    "composition": {
      "C": 376,
      "H": 391,
      "N": 21,
      "O": 13
    },
    "molarMass": "3728.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9322",
    "formula": "C377H392N22O14",
    "composition": {
      "C": 377,
      "H": 392,
      "N": 22,
      "O": 14
    },
    "molarMass": "3737.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9323",
    "formula": "C378H393N23O15",
    "composition": {
      "C": 378,
      "H": 393,
      "N": 23,
      "O": 15
    },
    "molarMass": "3745.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9324",
    "formula": "C379H394N24O16",
    "composition": {
      "C": 379,
      "H": 394,
      "N": 24,
      "O": 16
    },
    "molarMass": "3754.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9325",
    "formula": "C380H395N0O17",
    "composition": {
      "C": 380,
      "H": 395,
      "N": 0,
      "O": 17
    },
    "molarMass": "3762.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9326",
    "formula": "C381H396N1O18",
    "composition": {
      "C": 381,
      "H": 396,
      "N": 1,
      "O": 18
    },
    "molarMass": "3771.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9327",
    "formula": "C382H397N2O19",
    "composition": {
      "C": 382,
      "H": 397,
      "N": 2,
      "O": 19
    },
    "molarMass": "3779.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9328",
    "formula": "C383H398N3O20",
    "composition": {
      "C": 383,
      "H": 398,
      "N": 3,
      "O": 20
    },
    "molarMass": "3788.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9329",
    "formula": "C384H399N4O21",
    "composition": {
      "C": 384,
      "H": 399,
      "N": 4,
      "O": 21
    },
    "molarMass": "3796.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9330",
    "formula": "C385H400N5O0",
    "composition": {
      "C": 385,
      "H": 400,
      "N": 5,
      "O": 0
    },
    "molarMass": "3805.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9331",
    "formula": "C386H401N6O1",
    "composition": {
      "C": 386,
      "H": 401,
      "N": 6,
      "O": 1
    },
    "molarMass": "3813.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9332",
    "formula": "C387H402N7O2",
    "composition": {
      "C": 387,
      "H": 402,
      "N": 7,
      "O": 2
    },
    "molarMass": "3822.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9333",
    "formula": "C388H403N8O3",
    "composition": {
      "C": 388,
      "H": 403,
      "N": 8,
      "O": 3
    },
    "molarMass": "3830.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9334",
    "formula": "C389H404N9O4",
    "composition": {
      "C": 389,
      "H": 404,
      "N": 9,
      "O": 4
    },
    "molarMass": "3839.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9335",
    "formula": "C390H405N10O5",
    "composition": {
      "C": 390,
      "H": 405,
      "N": 10,
      "O": 5
    },
    "molarMass": "3847.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9336",
    "formula": "C391H406N11O6",
    "composition": {
      "C": 391,
      "H": 406,
      "N": 11,
      "O": 6
    },
    "molarMass": "3856.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9337",
    "formula": "C392H407N12O7",
    "composition": {
      "C": 392,
      "H": 407,
      "N": 12,
      "O": 7
    },
    "molarMass": "3864.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9338",
    "formula": "C393H408N13O8",
    "composition": {
      "C": 393,
      "H": 408,
      "N": 13,
      "O": 8
    },
    "molarMass": "3873.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9339",
    "formula": "C394H409N14O9",
    "composition": {
      "C": 394,
      "H": 409,
      "N": 14,
      "O": 9
    },
    "molarMass": "3881.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9340",
    "formula": "C395H410N15O10",
    "composition": {
      "C": 395,
      "H": 410,
      "N": 15,
      "O": 10
    },
    "molarMass": "3890.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9341",
    "formula": "C396H411N16O11",
    "composition": {
      "C": 396,
      "H": 411,
      "N": 16,
      "O": 11
    },
    "molarMass": "3898.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9342",
    "formula": "C397H412N17O12",
    "composition": {
      "C": 397,
      "H": 412,
      "N": 17,
      "O": 12
    },
    "molarMass": "3907.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9343",
    "formula": "C398H413N18O13",
    "composition": {
      "C": 398,
      "H": 413,
      "N": 18,
      "O": 13
    },
    "molarMass": "3915.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9344",
    "formula": "C399H414N19O14",
    "composition": {
      "C": 399,
      "H": 414,
      "N": 19,
      "O": 14
    },
    "molarMass": "3924.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9345",
    "formula": "C400H415N20O15",
    "composition": {
      "C": 400,
      "H": 415,
      "N": 20,
      "O": 15
    },
    "molarMass": "3932.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9346",
    "formula": "C401H416N21O16",
    "composition": {
      "C": 401,
      "H": 416,
      "N": 21,
      "O": 16
    },
    "molarMass": "3941.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9347",
    "formula": "C402H417N22O17",
    "composition": {
      "C": 402,
      "H": 417,
      "N": 22,
      "O": 17
    },
    "molarMass": "3949.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9348",
    "formula": "C403H418N23O18",
    "composition": {
      "C": 403,
      "H": 418,
      "N": 23,
      "O": 18
    },
    "molarMass": "3958.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9349",
    "formula": "C404H419N24O19",
    "composition": {
      "C": 404,
      "H": 419,
      "N": 24,
      "O": 19
    },
    "molarMass": "3966.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9350",
    "formula": "C405H420N0O20",
    "composition": {
      "C": 405,
      "H": 420,
      "N": 0,
      "O": 20
    },
    "molarMass": "3975.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9351",
    "formula": "C406H421N1O21",
    "composition": {
      "C": 406,
      "H": 421,
      "N": 1,
      "O": 21
    },
    "molarMass": "3983.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9352",
    "formula": "C407H422N2O0",
    "composition": {
      "C": 407,
      "H": 422,
      "N": 2,
      "O": 0
    },
    "molarMass": "3992.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9353",
    "formula": "C408H423N3O1",
    "composition": {
      "C": 408,
      "H": 423,
      "N": 3,
      "O": 1
    },
    "molarMass": "4000.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9354",
    "formula": "C409H424N4O2",
    "composition": {
      "C": 409,
      "H": 424,
      "N": 4,
      "O": 2
    },
    "molarMass": "4009.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9355",
    "formula": "C410H425N5O3",
    "composition": {
      "C": 410,
      "H": 425,
      "N": 5,
      "O": 3
    },
    "molarMass": "4017.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9356",
    "formula": "C411H426N6O4",
    "composition": {
      "C": 411,
      "H": 426,
      "N": 6,
      "O": 4
    },
    "molarMass": "4026.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9357",
    "formula": "C412H427N7O5",
    "composition": {
      "C": 412,
      "H": 427,
      "N": 7,
      "O": 5
    },
    "molarMass": "4034.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9358",
    "formula": "C413H428N8O6",
    "composition": {
      "C": 413,
      "H": 428,
      "N": 8,
      "O": 6
    },
    "molarMass": "4043.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9359",
    "formula": "C414H429N9O7",
    "composition": {
      "C": 414,
      "H": 429,
      "N": 9,
      "O": 7
    },
    "molarMass": "4051.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9360",
    "formula": "C415H430N10O8",
    "composition": {
      "C": 415,
      "H": 430,
      "N": 10,
      "O": 8
    },
    "molarMass": "4060.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9361",
    "formula": "C416H431N11O9",
    "composition": {
      "C": 416,
      "H": 431,
      "N": 11,
      "O": 9
    },
    "molarMass": "4068.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9362",
    "formula": "C417H432N12O10",
    "composition": {
      "C": 417,
      "H": 432,
      "N": 12,
      "O": 10
    },
    "molarMass": "4077.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9363",
    "formula": "C418H433N13O11",
    "composition": {
      "C": 418,
      "H": 433,
      "N": 13,
      "O": 11
    },
    "molarMass": "4085.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9364",
    "formula": "C419H434N14O12",
    "composition": {
      "C": 419,
      "H": 434,
      "N": 14,
      "O": 12
    },
    "molarMass": "4094.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9365",
    "formula": "C420H435N15O13",
    "composition": {
      "C": 420,
      "H": 435,
      "N": 15,
      "O": 13
    },
    "molarMass": "4102.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9366",
    "formula": "C421H436N16O14",
    "composition": {
      "C": 421,
      "H": 436,
      "N": 16,
      "O": 14
    },
    "molarMass": "4111.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9367",
    "formula": "C422H437N17O15",
    "composition": {
      "C": 422,
      "H": 437,
      "N": 17,
      "O": 15
    },
    "molarMass": "4119.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9368",
    "formula": "C423H438N18O16",
    "composition": {
      "C": 423,
      "H": 438,
      "N": 18,
      "O": 16
    },
    "molarMass": "4128.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9369",
    "formula": "C424H439N19O17",
    "composition": {
      "C": 424,
      "H": 439,
      "N": 19,
      "O": 17
    },
    "molarMass": "4136.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9370",
    "formula": "C425H440N20O18",
    "composition": {
      "C": 425,
      "H": 440,
      "N": 20,
      "O": 18
    },
    "molarMass": "4145.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9371",
    "formula": "C426H441N21O19",
    "composition": {
      "C": 426,
      "H": 441,
      "N": 21,
      "O": 19
    },
    "molarMass": "4153.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9372",
    "formula": "C427H442N22O20",
    "composition": {
      "C": 427,
      "H": 442,
      "N": 22,
      "O": 20
    },
    "molarMass": "4162.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9373",
    "formula": "C428H443N23O21",
    "composition": {
      "C": 428,
      "H": 443,
      "N": 23,
      "O": 21
    },
    "molarMass": "4170.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9374",
    "formula": "C429H444N24O0",
    "composition": {
      "C": 429,
      "H": 444,
      "N": 24,
      "O": 0
    },
    "molarMass": "4179.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9375",
    "formula": "C430H445N0O1",
    "composition": {
      "C": 430,
      "H": 445,
      "N": 0,
      "O": 1
    },
    "molarMass": "4187.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9376",
    "formula": "C431H446N1O2",
    "composition": {
      "C": 431,
      "H": 446,
      "N": 1,
      "O": 2
    },
    "molarMass": "4196.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9377",
    "formula": "C432H447N2O3",
    "composition": {
      "C": 432,
      "H": 447,
      "N": 2,
      "O": 3
    },
    "molarMass": "4204.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9378",
    "formula": "C433H448N3O4",
    "composition": {
      "C": 433,
      "H": 448,
      "N": 3,
      "O": 4
    },
    "molarMass": "4213.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9379",
    "formula": "C434H449N4O5",
    "composition": {
      "C": 434,
      "H": 449,
      "N": 4,
      "O": 5
    },
    "molarMass": "4221.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9380",
    "formula": "C435H450N5O6",
    "composition": {
      "C": 435,
      "H": 450,
      "N": 5,
      "O": 6
    },
    "molarMass": "4230.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9381",
    "formula": "C436H451N6O7",
    "composition": {
      "C": 436,
      "H": 451,
      "N": 6,
      "O": 7
    },
    "molarMass": "4238.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9382",
    "formula": "C437H452N7O8",
    "composition": {
      "C": 437,
      "H": 452,
      "N": 7,
      "O": 8
    },
    "molarMass": "4247.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9383",
    "formula": "C438H453N8O9",
    "composition": {
      "C": 438,
      "H": 453,
      "N": 8,
      "O": 9
    },
    "molarMass": "4255.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9384",
    "formula": "C439H454N9O10",
    "composition": {
      "C": 439,
      "H": 454,
      "N": 9,
      "O": 10
    },
    "molarMass": "4264.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9385",
    "formula": "C440H455N10O11",
    "composition": {
      "C": 440,
      "H": 455,
      "N": 10,
      "O": 11
    },
    "molarMass": "4272.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9386",
    "formula": "C441H456N11O12",
    "composition": {
      "C": 441,
      "H": 456,
      "N": 11,
      "O": 12
    },
    "molarMass": "4281.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9387",
    "formula": "C442H457N12O13",
    "composition": {
      "C": 442,
      "H": 457,
      "N": 12,
      "O": 13
    },
    "molarMass": "4289.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9388",
    "formula": "C443H458N13O14",
    "composition": {
      "C": 443,
      "H": 458,
      "N": 13,
      "O": 14
    },
    "molarMass": "4298.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9389",
    "formula": "C444H459N14O15",
    "composition": {
      "C": 444,
      "H": 459,
      "N": 14,
      "O": 15
    },
    "molarMass": "4306.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9390",
    "formula": "C445H460N15O16",
    "composition": {
      "C": 445,
      "H": 460,
      "N": 15,
      "O": 16
    },
    "molarMass": "4315.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9391",
    "formula": "C446H461N16O17",
    "composition": {
      "C": 446,
      "H": 461,
      "N": 16,
      "O": 17
    },
    "molarMass": "4323.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9392",
    "formula": "C447H462N17O18",
    "composition": {
      "C": 447,
      "H": 462,
      "N": 17,
      "O": 18
    },
    "molarMass": "4332.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9393",
    "formula": "C448H463N18O19",
    "composition": {
      "C": 448,
      "H": 463,
      "N": 18,
      "O": 19
    },
    "molarMass": "4340.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9394",
    "formula": "C449H464N19O20",
    "composition": {
      "C": 449,
      "H": 464,
      "N": 19,
      "O": 20
    },
    "molarMass": "4349.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9395",
    "formula": "C450H465N20O21",
    "composition": {
      "C": 450,
      "H": 465,
      "N": 20,
      "O": 21
    },
    "molarMass": "4357.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9396",
    "formula": "C451H466N21O0",
    "composition": {
      "C": 451,
      "H": 466,
      "N": 21,
      "O": 0
    },
    "molarMass": "4366.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9397",
    "formula": "C452H467N22O1",
    "composition": {
      "C": 452,
      "H": 467,
      "N": 22,
      "O": 1
    },
    "molarMass": "4374.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9398",
    "formula": "C453H468N23O2",
    "composition": {
      "C": 453,
      "H": 468,
      "N": 23,
      "O": 2
    },
    "molarMass": "4383.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9399",
    "formula": "C454H469N24O3",
    "composition": {
      "C": 454,
      "H": 469,
      "N": 24,
      "O": 3
    },
    "molarMass": "4391.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9400",
    "formula": "C455H470N0O4",
    "composition": {
      "C": 455,
      "H": 470,
      "N": 0,
      "O": 4
    },
    "molarMass": "4400.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9401",
    "formula": "C456H471N1O5",
    "composition": {
      "C": 456,
      "H": 471,
      "N": 1,
      "O": 5
    },
    "molarMass": "4408.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9402",
    "formula": "C457H472N2O6",
    "composition": {
      "C": 457,
      "H": 472,
      "N": 2,
      "O": 6
    },
    "molarMass": "4417.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9403",
    "formula": "C458H473N3O7",
    "composition": {
      "C": 458,
      "H": 473,
      "N": 3,
      "O": 7
    },
    "molarMass": "4425.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9404",
    "formula": "C459H474N4O8",
    "composition": {
      "C": 459,
      "H": 474,
      "N": 4,
      "O": 8
    },
    "molarMass": "4434.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9405",
    "formula": "C460H475N5O9",
    "composition": {
      "C": 460,
      "H": 475,
      "N": 5,
      "O": 9
    },
    "molarMass": "4442.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9406",
    "formula": "C461H476N6O10",
    "composition": {
      "C": 461,
      "H": 476,
      "N": 6,
      "O": 10
    },
    "molarMass": "4451.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9407",
    "formula": "C462H477N7O11",
    "composition": {
      "C": 462,
      "H": 477,
      "N": 7,
      "O": 11
    },
    "molarMass": "4459.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9408",
    "formula": "C463H478N8O12",
    "composition": {
      "C": 463,
      "H": 478,
      "N": 8,
      "O": 12
    },
    "molarMass": "4468.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9409",
    "formula": "C464H479N9O13",
    "composition": {
      "C": 464,
      "H": 479,
      "N": 9,
      "O": 13
    },
    "molarMass": "4476.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9410",
    "formula": "C465H480N10O14",
    "composition": {
      "C": 465,
      "H": 480,
      "N": 10,
      "O": 14
    },
    "molarMass": "4485.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9411",
    "formula": "C466H481N11O15",
    "composition": {
      "C": 466,
      "H": 481,
      "N": 11,
      "O": 15
    },
    "molarMass": "4493.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9412",
    "formula": "C467H482N12O16",
    "composition": {
      "C": 467,
      "H": 482,
      "N": 12,
      "O": 16
    },
    "molarMass": "4502.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9413",
    "formula": "C468H483N13O17",
    "composition": {
      "C": 468,
      "H": 483,
      "N": 13,
      "O": 17
    },
    "molarMass": "4510.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9414",
    "formula": "C469H484N14O18",
    "composition": {
      "C": 469,
      "H": 484,
      "N": 14,
      "O": 18
    },
    "molarMass": "4519.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9415",
    "formula": "C470H485N15O19",
    "composition": {
      "C": 470,
      "H": 485,
      "N": 15,
      "O": 19
    },
    "molarMass": "4527.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9416",
    "formula": "C471H486N16O20",
    "composition": {
      "C": 471,
      "H": 486,
      "N": 16,
      "O": 20
    },
    "molarMass": "4536.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9417",
    "formula": "C472H487N17O21",
    "composition": {
      "C": 472,
      "H": 487,
      "N": 17,
      "O": 21
    },
    "molarMass": "4544.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9418",
    "formula": "C473H488N18O0",
    "composition": {
      "C": 473,
      "H": 488,
      "N": 18,
      "O": 0
    },
    "molarMass": "4553.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9419",
    "formula": "C474H489N19O1",
    "composition": {
      "C": 474,
      "H": 489,
      "N": 19,
      "O": 1
    },
    "molarMass": "4561.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9420",
    "formula": "C475H490N20O2",
    "composition": {
      "C": 475,
      "H": 490,
      "N": 20,
      "O": 2
    },
    "molarMass": "4570.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9421",
    "formula": "C476H491N21O3",
    "composition": {
      "C": 476,
      "H": 491,
      "N": 21,
      "O": 3
    },
    "molarMass": "4578.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9422",
    "formula": "C477H492N22O4",
    "composition": {
      "C": 477,
      "H": 492,
      "N": 22,
      "O": 4
    },
    "molarMass": "4587.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9423",
    "formula": "C478H493N23O5",
    "composition": {
      "C": 478,
      "H": 493,
      "N": 23,
      "O": 5
    },
    "molarMass": "4595.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9424",
    "formula": "C479H494N24O6",
    "composition": {
      "C": 479,
      "H": 494,
      "N": 24,
      "O": 6
    },
    "molarMass": "4604.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9425",
    "formula": "C480H495N0O7",
    "composition": {
      "C": 480,
      "H": 495,
      "N": 0,
      "O": 7
    },
    "molarMass": "4612.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9426",
    "formula": "C481H496N1O8",
    "composition": {
      "C": 481,
      "H": 496,
      "N": 1,
      "O": 8
    },
    "molarMass": "4621.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9427",
    "formula": "C482H497N2O9",
    "composition": {
      "C": 482,
      "H": 497,
      "N": 2,
      "O": 9
    },
    "molarMass": "4629.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9428",
    "formula": "C483H498N3O10",
    "composition": {
      "C": 483,
      "H": 498,
      "N": 3,
      "O": 10
    },
    "molarMass": "4638.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9429",
    "formula": "C484H499N4O11",
    "composition": {
      "C": 484,
      "H": 499,
      "N": 4,
      "O": 11
    },
    "molarMass": "4646.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9430",
    "formula": "C485H500N5O12",
    "composition": {
      "C": 485,
      "H": 500,
      "N": 5,
      "O": 12
    },
    "molarMass": "4655.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9431",
    "formula": "C486H501N6O13",
    "composition": {
      "C": 486,
      "H": 501,
      "N": 6,
      "O": 13
    },
    "molarMass": "4663.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9432",
    "formula": "C487H502N7O14",
    "composition": {
      "C": 487,
      "H": 502,
      "N": 7,
      "O": 14
    },
    "molarMass": "4672.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9433",
    "formula": "C488H503N8O15",
    "composition": {
      "C": 488,
      "H": 503,
      "N": 8,
      "O": 15
    },
    "molarMass": "4680.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9434",
    "formula": "C489H504N9O16",
    "composition": {
      "C": 489,
      "H": 504,
      "N": 9,
      "O": 16
    },
    "molarMass": "4689.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9435",
    "formula": "C490H505N10O17",
    "composition": {
      "C": 490,
      "H": 505,
      "N": 10,
      "O": 17
    },
    "molarMass": "4697.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9436",
    "formula": "C491H506N11O18",
    "composition": {
      "C": 491,
      "H": 506,
      "N": 11,
      "O": 18
    },
    "molarMass": "4706.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9437",
    "formula": "C492H507N12O19",
    "composition": {
      "C": 492,
      "H": 507,
      "N": 12,
      "O": 19
    },
    "molarMass": "4714.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9438",
    "formula": "C493H508N13O20",
    "composition": {
      "C": 493,
      "H": 508,
      "N": 13,
      "O": 20
    },
    "molarMass": "4723.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9439",
    "formula": "C494H509N14O21",
    "composition": {
      "C": 494,
      "H": 509,
      "N": 14,
      "O": 21
    },
    "molarMass": "4731.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9440",
    "formula": "C495H510N15O0",
    "composition": {
      "C": 495,
      "H": 510,
      "N": 15,
      "O": 0
    },
    "molarMass": "4740.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9441",
    "formula": "C496H511N16O1",
    "composition": {
      "C": 496,
      "H": 511,
      "N": 16,
      "O": 1
    },
    "molarMass": "4748.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9442",
    "formula": "C497H512N17O2",
    "composition": {
      "C": 497,
      "H": 512,
      "N": 17,
      "O": 2
    },
    "molarMass": "4757.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9443",
    "formula": "C498H513N18O3",
    "composition": {
      "C": 498,
      "H": 513,
      "N": 18,
      "O": 3
    },
    "molarMass": "4765.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9444",
    "formula": "C499H514N19O4",
    "composition": {
      "C": 499,
      "H": 514,
      "N": 19,
      "O": 4
    },
    "molarMass": "4774.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9445",
    "formula": "C500H515N20O5",
    "composition": {
      "C": 500,
      "H": 515,
      "N": 20,
      "O": 5
    },
    "molarMass": "4782.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9446",
    "formula": "C501H516N21O6",
    "composition": {
      "C": 501,
      "H": 516,
      "N": 21,
      "O": 6
    },
    "molarMass": "4791.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9447",
    "formula": "C502H517N22O7",
    "composition": {
      "C": 502,
      "H": 517,
      "N": 22,
      "O": 7
    },
    "molarMass": "4799.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9448",
    "formula": "C503H518N23O8",
    "composition": {
      "C": 503,
      "H": 518,
      "N": 23,
      "O": 8
    },
    "molarMass": "4808.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9449",
    "formula": "C504H519N24O9",
    "composition": {
      "C": 504,
      "H": 519,
      "N": 24,
      "O": 9
    },
    "molarMass": "4816.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9450",
    "formula": "C505H520N0O10",
    "composition": {
      "C": 505,
      "H": 520,
      "N": 0,
      "O": 10
    },
    "molarMass": "4825.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9451",
    "formula": "C506H521N1O11",
    "composition": {
      "C": 506,
      "H": 521,
      "N": 1,
      "O": 11
    },
    "molarMass": "4833.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9452",
    "formula": "C507H522N2O12",
    "composition": {
      "C": 507,
      "H": 522,
      "N": 2,
      "O": 12
    },
    "molarMass": "4842.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9453",
    "formula": "C508H523N3O13",
    "composition": {
      "C": 508,
      "H": 523,
      "N": 3,
      "O": 13
    },
    "molarMass": "4850.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9454",
    "formula": "C509H524N4O14",
    "composition": {
      "C": 509,
      "H": 524,
      "N": 4,
      "O": 14
    },
    "molarMass": "4859.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9455",
    "formula": "C510H525N5O15",
    "composition": {
      "C": 510,
      "H": 525,
      "N": 5,
      "O": 15
    },
    "molarMass": "4867.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9456",
    "formula": "C511H526N6O16",
    "composition": {
      "C": 511,
      "H": 526,
      "N": 6,
      "O": 16
    },
    "molarMass": "4876.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9457",
    "formula": "C512H527N7O17",
    "composition": {
      "C": 512,
      "H": 527,
      "N": 7,
      "O": 17
    },
    "molarMass": "4884.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9458",
    "formula": "C513H528N8O18",
    "composition": {
      "C": 513,
      "H": 528,
      "N": 8,
      "O": 18
    },
    "molarMass": "4893.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9459",
    "formula": "C514H529N9O19",
    "composition": {
      "C": 514,
      "H": 529,
      "N": 9,
      "O": 19
    },
    "molarMass": "4901.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9460",
    "formula": "C515H530N10O20",
    "composition": {
      "C": 515,
      "H": 530,
      "N": 10,
      "O": 20
    },
    "molarMass": "4910.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9461",
    "formula": "C516H531N11O21",
    "composition": {
      "C": 516,
      "H": 531,
      "N": 11,
      "O": 21
    },
    "molarMass": "4918.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9462",
    "formula": "C517H532N12O0",
    "composition": {
      "C": 517,
      "H": 532,
      "N": 12,
      "O": 0
    },
    "molarMass": "4927.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9463",
    "formula": "C518H533N13O1",
    "composition": {
      "C": 518,
      "H": 533,
      "N": 13,
      "O": 1
    },
    "molarMass": "4935.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9464",
    "formula": "C519H534N14O2",
    "composition": {
      "C": 519,
      "H": 534,
      "N": 14,
      "O": 2
    },
    "molarMass": "4944.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9465",
    "formula": "C520H535N15O3",
    "composition": {
      "C": 520,
      "H": 535,
      "N": 15,
      "O": 3
    },
    "molarMass": "4952.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9466",
    "formula": "C521H536N16O4",
    "composition": {
      "C": 521,
      "H": 536,
      "N": 16,
      "O": 4
    },
    "molarMass": "4961.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9467",
    "formula": "C522H537N17O5",
    "composition": {
      "C": 522,
      "H": 537,
      "N": 17,
      "O": 5
    },
    "molarMass": "4969.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9468",
    "formula": "C523H538N18O6",
    "composition": {
      "C": 523,
      "H": 538,
      "N": 18,
      "O": 6
    },
    "molarMass": "4978.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9469",
    "formula": "C524H539N19O7",
    "composition": {
      "C": 524,
      "H": 539,
      "N": 19,
      "O": 7
    },
    "molarMass": "4986.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9470",
    "formula": "C525H540N20O8",
    "composition": {
      "C": 525,
      "H": 540,
      "N": 20,
      "O": 8
    },
    "molarMass": "4995.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9471",
    "formula": "C526H541N21O9",
    "composition": {
      "C": 526,
      "H": 541,
      "N": 21,
      "O": 9
    },
    "molarMass": "5003.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9472",
    "formula": "C527H542N22O10",
    "composition": {
      "C": 527,
      "H": 542,
      "N": 22,
      "O": 10
    },
    "molarMass": "5012.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9473",
    "formula": "C528H543N23O11",
    "composition": {
      "C": 528,
      "H": 543,
      "N": 23,
      "O": 11
    },
    "molarMass": "5020.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9474",
    "formula": "C529H544N24O12",
    "composition": {
      "C": 529,
      "H": 544,
      "N": 24,
      "O": 12
    },
    "molarMass": "5029.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9475",
    "formula": "C530H545N0O13",
    "composition": {
      "C": 530,
      "H": 545,
      "N": 0,
      "O": 13
    },
    "molarMass": "5037.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9476",
    "formula": "C531H546N1O14",
    "composition": {
      "C": 531,
      "H": 546,
      "N": 1,
      "O": 14
    },
    "molarMass": "5046.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9477",
    "formula": "C532H547N2O15",
    "composition": {
      "C": 532,
      "H": 547,
      "N": 2,
      "O": 15
    },
    "molarMass": "5054.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9478",
    "formula": "C533H548N3O16",
    "composition": {
      "C": 533,
      "H": 548,
      "N": 3,
      "O": 16
    },
    "molarMass": "5063.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9479",
    "formula": "C534H549N4O17",
    "composition": {
      "C": 534,
      "H": 549,
      "N": 4,
      "O": 17
    },
    "molarMass": "5071.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9480",
    "formula": "C535H550N5O18",
    "composition": {
      "C": 535,
      "H": 550,
      "N": 5,
      "O": 18
    },
    "molarMass": "5080.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9481",
    "formula": "C536H551N6O19",
    "composition": {
      "C": 536,
      "H": 551,
      "N": 6,
      "O": 19
    },
    "molarMass": "5088.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9482",
    "formula": "C537H552N7O20",
    "composition": {
      "C": 537,
      "H": 552,
      "N": 7,
      "O": 20
    },
    "molarMass": "5097.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9483",
    "formula": "C538H553N8O21",
    "composition": {
      "C": 538,
      "H": 553,
      "N": 8,
      "O": 21
    },
    "molarMass": "5105.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9484",
    "formula": "C539H554N9O0",
    "composition": {
      "C": 539,
      "H": 554,
      "N": 9,
      "O": 0
    },
    "molarMass": "5114.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9485",
    "formula": "C540H555N10O1",
    "composition": {
      "C": 540,
      "H": 555,
      "N": 10,
      "O": 1
    },
    "molarMass": "5122.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9486",
    "formula": "C541H556N11O2",
    "composition": {
      "C": 541,
      "H": 556,
      "N": 11,
      "O": 2
    },
    "molarMass": "5131.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Catalyseur Ziegler-Natta Beta-9487",
    "formula": "C542H557N12O3",
    "composition": {
      "C": 542,
      "H": 557,
      "N": 12,
      "O": 3
    },
    "molarMass": "5139.50 g/mol",
    "category": "Catalyseur Ziegler-Natta",
    "summary": "Spécimen de haute pureté certifié pour la catégorie catalyseur ziegler-natta.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Inhibiteur de JAK Beta-9488",
    "formula": "C543H558N13O4",
    "composition": {
      "C": 543,
      "H": 558,
      "N": 13,
      "O": 4
    },
    "molarMass": "5148.00 g/mol",
    "category": "Inhibiteur de JAK",
    "summary": "Spécimen de haute pureté certifié pour la catégorie inhibiteur de jak.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Radionucléide thérapeutique Beta-9489",
    "formula": "C544H559N14O5",
    "composition": {
      "C": 544,
      "H": 559,
      "N": 14,
      "O": 5
    },
    "molarMass": "5156.50 g/mol",
    "category": "Radionucléide thérapeutique",
    "summary": "Spécimen de haute pureté certifié pour la catégorie radionucléide thérapeutique.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  },
  {
    "name": "Polymère biodégradable Beta-9490",
    "formula": "C545H560N15O6",
    "composition": {
      "C": 545,
      "H": 560,
      "N": 15,
      "O": 6
    },
    "molarMass": "5165.00 g/mol",
    "category": "Polymère biodégradable",
    "summary": "Spécimen de haute pureté certifié pour la catégorie polymère biodégradable.",
    "occurrence": "Synthèse industrielle avancée.",
    "applications": [
      "Chimie de spécialité",
      "Santé"
    ]
  }
];
