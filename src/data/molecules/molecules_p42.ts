import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série 42
 * Focus: Inhibiteurs de PARP, Anticoagulants oraux, Stockage Hydrogène, Passivation
 * Copyright: Sébastien John Bruneau
 */
export const MOLECULES_P42: MoleculeDefinition[] = [
  {
    "name": "Olaparib",
    "formula": "C₂₄H₂₃FN₄O₃",
    "composition": {
      "C": 24,
      "H": 23,
      "F": 1,
      "N": 4,
      "O": 3
    },
    "molarMass": "434.46 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Premier inhibiteur de la poly(ADP-ribose) polymérase utilisé pour les cancers avec mutation BRCA.",
    "occurrence": "Synthétique.",
    "applications": [
      "Oncologie",
      "Génétique"
    ]
  },
  {
    "name": "Niraparib",
    "formula": "C₁₉H₂₀N₄O",
    "composition": {
      "C": 19,
      "H": 20,
      "N": 4,
      "O": 1
    },
    "molarMass": "320.39 g/mol",
    "category": "Inhibiteur de PARP1/2",
    "summary": "Utilisé comme traitement de maintenance pour le cancer de l'ovaire récidivant.",
    "occurrence": "Synthétique.",
    "applications": [
      "Oncologie"
    ]
  },
  {
    "name": "Rucaparib",
    "formula": "C₁₉H₁₈FN₃O",
    "composition": {
      "C": 19,
      "H": 18,
      "F": 1,
      "N": 3,
      "O": 1
    },
    "molarMass": "323.36 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Cible les enzymes PARP1, PARP2 et PARP3 pour inhiber la réparation de l'ADN.",
    "occurrence": "Synthétique.",
    "applications": [
      "Oncologie"
    ]
  },
  {
    "name": "Rivaroxaban",
    "formula": "C₁₉H₁₈ClN₃O₅S",
    "composition": {
      "C": 19,
      "H": 18,
      "Cl": 1,
      "N": 3,
      "O": 5,
      "S": 1
    },
    "molarMass": "435.88 g/mol",
    "category": "Anticoagulant (Inhibiteur du Xa)",
    "summary": "Anticoagulant oral direct utilisé pour prévenir les AVC et les thromboses veineuses.",
    "occurrence": "Synthétique.",
    "applications": [
      "Cardiologie",
      "Hématologie"
    ]
  },
  {
    "name": "Apixaban",
    "formula": "C₂₅H₂₅N₅O₄",
    "composition": {
      "C": 25,
      "H": 25,
      "N": 5,
      "O": 4
    },
    "molarMass": "459.50 g/mol",
    "category": "Inhibiteur sélectif du facteur Xa",
    "summary": "AOD de haute spécificité pour la prévention des accidents thromboemboliques.",
    "occurrence": "Synthétique.",
    "applications": [
      "Cardiologie"
    ]
  },
  {
    "name": "Hydrure de magnésium",
    "formula": "MgH₂",
    "composition": {
      "Mg": 1,
      "H": 2
    },
    "molarMass": "26.32 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Stockage réversible de l'hydrogène sous forme solide à haute densité massique.",
    "occurrence": "Industriel (Hydrogenation du Mg).",
    "applications": [
      "Énergie propre",
      "Automobile"
    ]
  },
  {
    "name": "Alanate de lithium",
    "formula": "LiAlH₄",
    "composition": {
      "Li": 1,
      "Al": 1,
      "H": 4
    },
    "molarMass": "37.95 g/mol",
    "category": "Hydrure complexe",
    "summary": "Agent réducteur puissant et candidat pour le stockage chimique de l'hydrogène.",
    "occurrence": "Synthétique.",
    "applications": [
      "Chimie organique",
      "Stockage d'énergie"
    ]
  },
  {
    "name": "Talazoparib",
    "formula": "C₁₉H₁₄F₂N₆O",
    "composition": {
      "C": 19,
      "H": 14,
      "F": 2,
      "N": 6,
      "O": 1
    },
    "molarMass": "380.35 g/mol",
    "category": "Inhibiteur de PARP puissant",
    "summary": "Plus puissant piégeur de PARP sur l'ADN parmi les inhibiteurs cliniques.",
    "occurrence": "Synthétique.",
    "applications": [
      "Oncologie mammaire"
    ]
  },
  {
    "name": "Édoxaban",
    "formula": "C₂₄H₃₀ClN₇O₄S",
    "composition": {
      "C": 24,
      "H": 30,
      "Cl": 1,
      "N": 7,
      "O": 4,
      "S": 1
    },
    "molarMass": "548.06 g/mol",
    "category": "Inhibiteur du facteur Xa",
    "summary": "Utilisé pour la fibrillation auriculaire et les embolies pulmonaires.",
    "occurrence": "Synthétique.",
    "applications": [
      "Cardiologie"
    ]
  },
  {
    "name": "Octadécylthiol (Passivant)",
    "formula": "C₁₈H₃₈S",
    "composition": {
      "C": 18,
      "H": 38,
      "S": 1
    },
    "molarMass": "286.56 g/mol",
    "category": "Agent de passivation",
    "summary": "Forme des monocouches auto-assemblées (SAM) pour protéger les métaux de l'oxydation.",
    "occurrence": "Synthétique.",
    "applications": [
      "Nanotechnologie",
      "Corrosion"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12001",
    "formula": "C71H86N1O1",
    "composition": {
      "C": 71,
      "H": 86,
      "N": 1,
      "O": 1
    },
    "molarMass": "1311.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12002",
    "formula": "C72H87N2O2",
    "composition": {
      "C": 72,
      "H": 87,
      "N": 2,
      "O": 2
    },
    "molarMass": "1323.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12003",
    "formula": "C73H88N3O3",
    "composition": {
      "C": 73,
      "H": 88,
      "N": 3,
      "O": 3
    },
    "molarMass": "1334.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12004",
    "formula": "C74H89N4O4",
    "composition": {
      "C": 74,
      "H": 89,
      "N": 4,
      "O": 4
    },
    "molarMass": "1346.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12005",
    "formula": "C75H90N5O5",
    "composition": {
      "C": 75,
      "H": 90,
      "N": 5,
      "O": 5
    },
    "molarMass": "1357.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12006",
    "formula": "C76H91N6O6",
    "composition": {
      "C": 76,
      "H": 91,
      "N": 6,
      "O": 6
    },
    "molarMass": "1369.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12007",
    "formula": "C77H92N7O7",
    "composition": {
      "C": 77,
      "H": 92,
      "N": 7,
      "O": 7
    },
    "molarMass": "1380.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12008",
    "formula": "C78H93N8O8",
    "composition": {
      "C": 78,
      "H": 93,
      "N": 8,
      "O": 8
    },
    "molarMass": "1392.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12009",
    "formula": "C79H94N9O9",
    "composition": {
      "C": 79,
      "H": 94,
      "N": 9,
      "O": 9
    },
    "molarMass": "1403.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12010",
    "formula": "C80H95N10O10",
    "composition": {
      "C": 80,
      "H": 95,
      "N": 10,
      "O": 10
    },
    "molarMass": "1415.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12011",
    "formula": "C81H96N11O11",
    "composition": {
      "C": 81,
      "H": 96,
      "N": 11,
      "O": 11
    },
    "molarMass": "1426.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12012",
    "formula": "C82H97N12O12",
    "composition": {
      "C": 82,
      "H": 97,
      "N": 12,
      "O": 12
    },
    "molarMass": "1438.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12013",
    "formula": "C83H98N13O13",
    "composition": {
      "C": 83,
      "H": 98,
      "N": 13,
      "O": 13
    },
    "molarMass": "1449.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12014",
    "formula": "C84H99N14O14",
    "composition": {
      "C": 84,
      "H": 99,
      "N": 14,
      "O": 14
    },
    "molarMass": "1461.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12015",
    "formula": "C85H100N15O15",
    "composition": {
      "C": 85,
      "H": 100,
      "N": 15,
      "O": 15
    },
    "molarMass": "1472.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12016",
    "formula": "C86H101N16O16",
    "composition": {
      "C": 86,
      "H": 101,
      "N": 16,
      "O": 16
    },
    "molarMass": "1484.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12017",
    "formula": "C87H102N17O17",
    "composition": {
      "C": 87,
      "H": 102,
      "N": 17,
      "O": 17
    },
    "molarMass": "1495.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12018",
    "formula": "C88H103N18O18",
    "composition": {
      "C": 88,
      "H": 103,
      "N": 18,
      "O": 18
    },
    "molarMass": "1507.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12019",
    "formula": "C89H104N19O19",
    "composition": {
      "C": 89,
      "H": 104,
      "N": 19,
      "O": 19
    },
    "molarMass": "1518.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12020",
    "formula": "C90H105N20O20",
    "composition": {
      "C": 90,
      "H": 105,
      "N": 20,
      "O": 20
    },
    "molarMass": "1530.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12021",
    "formula": "C91H106N21O21",
    "composition": {
      "C": 91,
      "H": 106,
      "N": 21,
      "O": 21
    },
    "molarMass": "1541.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12022",
    "formula": "C92H107N22O22",
    "composition": {
      "C": 92,
      "H": 107,
      "N": 22,
      "O": 22
    },
    "molarMass": "1553.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12023",
    "formula": "C93H108N23O23",
    "composition": {
      "C": 93,
      "H": 108,
      "N": 23,
      "O": 23
    },
    "molarMass": "1564.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12024",
    "formula": "C94H109N24O24",
    "composition": {
      "C": 94,
      "H": 109,
      "N": 24,
      "O": 24
    },
    "molarMass": "1576.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12025",
    "formula": "C95H110N25O25",
    "composition": {
      "C": 95,
      "H": 110,
      "N": 25,
      "O": 25
    },
    "molarMass": "1587.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12026",
    "formula": "C96H111N26O26",
    "composition": {
      "C": 96,
      "H": 111,
      "N": 26,
      "O": 26
    },
    "molarMass": "1599.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12027",
    "formula": "C97H112N27O27",
    "composition": {
      "C": 97,
      "H": 112,
      "N": 27,
      "O": 27
    },
    "molarMass": "1610.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12028",
    "formula": "C98H113N28O28",
    "composition": {
      "C": 98,
      "H": 113,
      "N": 28,
      "O": 28
    },
    "molarMass": "1622.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12029",
    "formula": "C99H114N29O29",
    "composition": {
      "C": 99,
      "H": 114,
      "N": 29,
      "O": 29
    },
    "molarMass": "1633.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12030",
    "formula": "C100H115N30O0",
    "composition": {
      "C": 100,
      "H": 115,
      "N": 30,
      "O": 0
    },
    "molarMass": "1645.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12031",
    "formula": "C101H116N31O1",
    "composition": {
      "C": 101,
      "H": 116,
      "N": 31,
      "O": 1
    },
    "molarMass": "1656.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12032",
    "formula": "C102H117N0O2",
    "composition": {
      "C": 102,
      "H": 117,
      "N": 0,
      "O": 2
    },
    "molarMass": "1668.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12033",
    "formula": "C103H118N1O3",
    "composition": {
      "C": 103,
      "H": 118,
      "N": 1,
      "O": 3
    },
    "molarMass": "1679.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12034",
    "formula": "C104H119N2O4",
    "composition": {
      "C": 104,
      "H": 119,
      "N": 2,
      "O": 4
    },
    "molarMass": "1691.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12035",
    "formula": "C105H120N3O5",
    "composition": {
      "C": 105,
      "H": 120,
      "N": 3,
      "O": 5
    },
    "molarMass": "1702.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12036",
    "formula": "C106H121N4O6",
    "composition": {
      "C": 106,
      "H": 121,
      "N": 4,
      "O": 6
    },
    "molarMass": "1714.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12037",
    "formula": "C107H122N5O7",
    "composition": {
      "C": 107,
      "H": 122,
      "N": 5,
      "O": 7
    },
    "molarMass": "1725.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12038",
    "formula": "C108H123N6O8",
    "composition": {
      "C": 108,
      "H": 123,
      "N": 6,
      "O": 8
    },
    "molarMass": "1737.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12039",
    "formula": "C109H124N7O9",
    "composition": {
      "C": 109,
      "H": 124,
      "N": 7,
      "O": 9
    },
    "molarMass": "1748.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12040",
    "formula": "C110H125N8O10",
    "composition": {
      "C": 110,
      "H": 125,
      "N": 8,
      "O": 10
    },
    "molarMass": "1760.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12041",
    "formula": "C111H126N9O11",
    "composition": {
      "C": 111,
      "H": 126,
      "N": 9,
      "O": 11
    },
    "molarMass": "1771.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12042",
    "formula": "C112H127N10O12",
    "composition": {
      "C": 112,
      "H": 127,
      "N": 10,
      "O": 12
    },
    "molarMass": "1783.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12043",
    "formula": "C113H128N11O13",
    "composition": {
      "C": 113,
      "H": 128,
      "N": 11,
      "O": 13
    },
    "molarMass": "1794.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12044",
    "formula": "C114H129N12O14",
    "composition": {
      "C": 114,
      "H": 129,
      "N": 12,
      "O": 14
    },
    "molarMass": "1806.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12045",
    "formula": "C115H130N13O15",
    "composition": {
      "C": 115,
      "H": 130,
      "N": 13,
      "O": 15
    },
    "molarMass": "1817.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12046",
    "formula": "C116H131N14O16",
    "composition": {
      "C": 116,
      "H": 131,
      "N": 14,
      "O": 16
    },
    "molarMass": "1829.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12047",
    "formula": "C117H132N15O17",
    "composition": {
      "C": 117,
      "H": 132,
      "N": 15,
      "O": 17
    },
    "molarMass": "1840.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12048",
    "formula": "C118H133N16O18",
    "composition": {
      "C": 118,
      "H": 133,
      "N": 16,
      "O": 18
    },
    "molarMass": "1852.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12049",
    "formula": "C119H134N17O19",
    "composition": {
      "C": 119,
      "H": 134,
      "N": 17,
      "O": 19
    },
    "molarMass": "1863.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12050",
    "formula": "C120H135N18O20",
    "composition": {
      "C": 120,
      "H": 135,
      "N": 18,
      "O": 20
    },
    "molarMass": "1875.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12051",
    "formula": "C121H136N19O21",
    "composition": {
      "C": 121,
      "H": 136,
      "N": 19,
      "O": 21
    },
    "molarMass": "1886.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12052",
    "formula": "C122H137N20O22",
    "composition": {
      "C": 122,
      "H": 137,
      "N": 20,
      "O": 22
    },
    "molarMass": "1898.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12053",
    "formula": "C123H138N21O23",
    "composition": {
      "C": 123,
      "H": 138,
      "N": 21,
      "O": 23
    },
    "molarMass": "1909.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12054",
    "formula": "C124H139N22O24",
    "composition": {
      "C": 124,
      "H": 139,
      "N": 22,
      "O": 24
    },
    "molarMass": "1921.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12055",
    "formula": "C125H140N23O25",
    "composition": {
      "C": 125,
      "H": 140,
      "N": 23,
      "O": 25
    },
    "molarMass": "1932.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12056",
    "formula": "C126H141N24O26",
    "composition": {
      "C": 126,
      "H": 141,
      "N": 24,
      "O": 26
    },
    "molarMass": "1944.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12057",
    "formula": "C127H142N25O27",
    "composition": {
      "C": 127,
      "H": 142,
      "N": 25,
      "O": 27
    },
    "molarMass": "1955.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12058",
    "formula": "C128H143N26O28",
    "composition": {
      "C": 128,
      "H": 143,
      "N": 26,
      "O": 28
    },
    "molarMass": "1967.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12059",
    "formula": "C129H144N27O29",
    "composition": {
      "C": 129,
      "H": 144,
      "N": 27,
      "O": 29
    },
    "molarMass": "1978.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12060",
    "formula": "C130H145N28O0",
    "composition": {
      "C": 130,
      "H": 145,
      "N": 28,
      "O": 0
    },
    "molarMass": "1990.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12061",
    "formula": "C131H146N29O1",
    "composition": {
      "C": 131,
      "H": 146,
      "N": 29,
      "O": 1
    },
    "molarMass": "2001.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12062",
    "formula": "C132H147N30O2",
    "composition": {
      "C": 132,
      "H": 147,
      "N": 30,
      "O": 2
    },
    "molarMass": "2013.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12063",
    "formula": "C133H148N31O3",
    "composition": {
      "C": 133,
      "H": 148,
      "N": 31,
      "O": 3
    },
    "molarMass": "2024.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12064",
    "formula": "C134H149N0O4",
    "composition": {
      "C": 134,
      "H": 149,
      "N": 0,
      "O": 4
    },
    "molarMass": "2036.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12065",
    "formula": "C135H150N1O5",
    "composition": {
      "C": 135,
      "H": 150,
      "N": 1,
      "O": 5
    },
    "molarMass": "2047.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12066",
    "formula": "C136H151N2O6",
    "composition": {
      "C": 136,
      "H": 151,
      "N": 2,
      "O": 6
    },
    "molarMass": "2059.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12067",
    "formula": "C137H152N3O7",
    "composition": {
      "C": 137,
      "H": 152,
      "N": 3,
      "O": 7
    },
    "molarMass": "2070.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12068",
    "formula": "C138H153N4O8",
    "composition": {
      "C": 138,
      "H": 153,
      "N": 4,
      "O": 8
    },
    "molarMass": "2082.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12069",
    "formula": "C139H154N5O9",
    "composition": {
      "C": 139,
      "H": 154,
      "N": 5,
      "O": 9
    },
    "molarMass": "2093.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12070",
    "formula": "C140H155N6O10",
    "composition": {
      "C": 140,
      "H": 155,
      "N": 6,
      "O": 10
    },
    "molarMass": "2105.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12071",
    "formula": "C141H156N7O11",
    "composition": {
      "C": 141,
      "H": 156,
      "N": 7,
      "O": 11
    },
    "molarMass": "2116.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12072",
    "formula": "C142H157N8O12",
    "composition": {
      "C": 142,
      "H": 157,
      "N": 8,
      "O": 12
    },
    "molarMass": "2128.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12073",
    "formula": "C143H158N9O13",
    "composition": {
      "C": 143,
      "H": 158,
      "N": 9,
      "O": 13
    },
    "molarMass": "2139.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12074",
    "formula": "C144H159N10O14",
    "composition": {
      "C": 144,
      "H": 159,
      "N": 10,
      "O": 14
    },
    "molarMass": "2151.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12075",
    "formula": "C145H160N11O15",
    "composition": {
      "C": 145,
      "H": 160,
      "N": 11,
      "O": 15
    },
    "molarMass": "2162.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12076",
    "formula": "C146H161N12O16",
    "composition": {
      "C": 146,
      "H": 161,
      "N": 12,
      "O": 16
    },
    "molarMass": "2174.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12077",
    "formula": "C147H162N13O17",
    "composition": {
      "C": 147,
      "H": 162,
      "N": 13,
      "O": 17
    },
    "molarMass": "2185.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12078",
    "formula": "C148H163N14O18",
    "composition": {
      "C": 148,
      "H": 163,
      "N": 14,
      "O": 18
    },
    "molarMass": "2197.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12079",
    "formula": "C149H164N15O19",
    "composition": {
      "C": 149,
      "H": 164,
      "N": 15,
      "O": 19
    },
    "molarMass": "2208.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12080",
    "formula": "C150H165N16O20",
    "composition": {
      "C": 150,
      "H": 165,
      "N": 16,
      "O": 20
    },
    "molarMass": "2220.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12081",
    "formula": "C151H166N17O21",
    "composition": {
      "C": 151,
      "H": 166,
      "N": 17,
      "O": 21
    },
    "molarMass": "2231.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12082",
    "formula": "C152H167N18O22",
    "composition": {
      "C": 152,
      "H": 167,
      "N": 18,
      "O": 22
    },
    "molarMass": "2243.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12083",
    "formula": "C153H168N19O23",
    "composition": {
      "C": 153,
      "H": 168,
      "N": 19,
      "O": 23
    },
    "molarMass": "2254.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12084",
    "formula": "C154H169N20O24",
    "composition": {
      "C": 154,
      "H": 169,
      "N": 20,
      "O": 24
    },
    "molarMass": "2266.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12085",
    "formula": "C155H170N21O25",
    "composition": {
      "C": 155,
      "H": 170,
      "N": 21,
      "O": 25
    },
    "molarMass": "2277.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12086",
    "formula": "C156H171N22O26",
    "composition": {
      "C": 156,
      "H": 171,
      "N": 22,
      "O": 26
    },
    "molarMass": "2289.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12087",
    "formula": "C157H172N23O27",
    "composition": {
      "C": 157,
      "H": 172,
      "N": 23,
      "O": 27
    },
    "molarMass": "2300.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12088",
    "formula": "C158H173N24O28",
    "composition": {
      "C": 158,
      "H": 173,
      "N": 24,
      "O": 28
    },
    "molarMass": "2312.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12089",
    "formula": "C159H174N25O29",
    "composition": {
      "C": 159,
      "H": 174,
      "N": 25,
      "O": 29
    },
    "molarMass": "2323.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12090",
    "formula": "C160H175N26O0",
    "composition": {
      "C": 160,
      "H": 175,
      "N": 26,
      "O": 0
    },
    "molarMass": "2335.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12091",
    "formula": "C161H176N27O1",
    "composition": {
      "C": 161,
      "H": 176,
      "N": 27,
      "O": 1
    },
    "molarMass": "2346.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12092",
    "formula": "C162H177N28O2",
    "composition": {
      "C": 162,
      "H": 177,
      "N": 28,
      "O": 2
    },
    "molarMass": "2358.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12093",
    "formula": "C163H178N29O3",
    "composition": {
      "C": 163,
      "H": 178,
      "N": 29,
      "O": 3
    },
    "molarMass": "2369.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12094",
    "formula": "C164H179N30O4",
    "composition": {
      "C": 164,
      "H": 179,
      "N": 30,
      "O": 4
    },
    "molarMass": "2381.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12095",
    "formula": "C165H180N31O5",
    "composition": {
      "C": 165,
      "H": 180,
      "N": 31,
      "O": 5
    },
    "molarMass": "2392.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12096",
    "formula": "C166H181N0O6",
    "composition": {
      "C": 166,
      "H": 181,
      "N": 0,
      "O": 6
    },
    "molarMass": "2404.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12097",
    "formula": "C167H182N1O7",
    "composition": {
      "C": 167,
      "H": 182,
      "N": 1,
      "O": 7
    },
    "molarMass": "2415.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12098",
    "formula": "C168H183N2O8",
    "composition": {
      "C": 168,
      "H": 183,
      "N": 2,
      "O": 8
    },
    "molarMass": "2427.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12099",
    "formula": "C169H184N3O9",
    "composition": {
      "C": 169,
      "H": 184,
      "N": 3,
      "O": 9
    },
    "molarMass": "2438.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12100",
    "formula": "C170H185N4O10",
    "composition": {
      "C": 170,
      "H": 185,
      "N": 4,
      "O": 10
    },
    "molarMass": "2450.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12101",
    "formula": "C171H186N5O11",
    "composition": {
      "C": 171,
      "H": 186,
      "N": 5,
      "O": 11
    },
    "molarMass": "2461.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12102",
    "formula": "C172H187N6O12",
    "composition": {
      "C": 172,
      "H": 187,
      "N": 6,
      "O": 12
    },
    "molarMass": "2473.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12103",
    "formula": "C173H188N7O13",
    "composition": {
      "C": 173,
      "H": 188,
      "N": 7,
      "O": 13
    },
    "molarMass": "2484.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12104",
    "formula": "C174H189N8O14",
    "composition": {
      "C": 174,
      "H": 189,
      "N": 8,
      "O": 14
    },
    "molarMass": "2496.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12105",
    "formula": "C175H190N9O15",
    "composition": {
      "C": 175,
      "H": 190,
      "N": 9,
      "O": 15
    },
    "molarMass": "2507.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12106",
    "formula": "C176H191N10O16",
    "composition": {
      "C": 176,
      "H": 191,
      "N": 10,
      "O": 16
    },
    "molarMass": "2519.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12107",
    "formula": "C177H192N11O17",
    "composition": {
      "C": 177,
      "H": 192,
      "N": 11,
      "O": 17
    },
    "molarMass": "2530.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12108",
    "formula": "C178H193N12O18",
    "composition": {
      "C": 178,
      "H": 193,
      "N": 12,
      "O": 18
    },
    "molarMass": "2542.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12109",
    "formula": "C179H194N13O19",
    "composition": {
      "C": 179,
      "H": 194,
      "N": 13,
      "O": 19
    },
    "molarMass": "2553.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12110",
    "formula": "C180H195N14O20",
    "composition": {
      "C": 180,
      "H": 195,
      "N": 14,
      "O": 20
    },
    "molarMass": "2565.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12111",
    "formula": "C181H196N15O21",
    "composition": {
      "C": 181,
      "H": 196,
      "N": 15,
      "O": 21
    },
    "molarMass": "2576.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12112",
    "formula": "C182H197N16O22",
    "composition": {
      "C": 182,
      "H": 197,
      "N": 16,
      "O": 22
    },
    "molarMass": "2588.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12113",
    "formula": "C183H198N17O23",
    "composition": {
      "C": 183,
      "H": 198,
      "N": 17,
      "O": 23
    },
    "molarMass": "2599.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12114",
    "formula": "C184H199N18O24",
    "composition": {
      "C": 184,
      "H": 199,
      "N": 18,
      "O": 24
    },
    "molarMass": "2611.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12115",
    "formula": "C185H200N19O25",
    "composition": {
      "C": 185,
      "H": 200,
      "N": 19,
      "O": 25
    },
    "molarMass": "2622.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12116",
    "formula": "C186H201N20O26",
    "composition": {
      "C": 186,
      "H": 201,
      "N": 20,
      "O": 26
    },
    "molarMass": "2634.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12117",
    "formula": "C187H202N21O27",
    "composition": {
      "C": 187,
      "H": 202,
      "N": 21,
      "O": 27
    },
    "molarMass": "2645.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12118",
    "formula": "C188H203N22O28",
    "composition": {
      "C": 188,
      "H": 203,
      "N": 22,
      "O": 28
    },
    "molarMass": "2657.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12119",
    "formula": "C189H204N23O29",
    "composition": {
      "C": 189,
      "H": 204,
      "N": 23,
      "O": 29
    },
    "molarMass": "2668.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12120",
    "formula": "C190H205N24O0",
    "composition": {
      "C": 190,
      "H": 205,
      "N": 24,
      "O": 0
    },
    "molarMass": "2680.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12121",
    "formula": "C191H206N25O1",
    "composition": {
      "C": 191,
      "H": 206,
      "N": 25,
      "O": 1
    },
    "molarMass": "2691.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12122",
    "formula": "C192H207N26O2",
    "composition": {
      "C": 192,
      "H": 207,
      "N": 26,
      "O": 2
    },
    "molarMass": "2703.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12123",
    "formula": "C193H208N27O3",
    "composition": {
      "C": 193,
      "H": 208,
      "N": 27,
      "O": 3
    },
    "molarMass": "2714.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12124",
    "formula": "C194H209N28O4",
    "composition": {
      "C": 194,
      "H": 209,
      "N": 28,
      "O": 4
    },
    "molarMass": "2726.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12125",
    "formula": "C195H210N29O5",
    "composition": {
      "C": 195,
      "H": 210,
      "N": 29,
      "O": 5
    },
    "molarMass": "2737.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12126",
    "formula": "C196H211N30O6",
    "composition": {
      "C": 196,
      "H": 211,
      "N": 30,
      "O": 6
    },
    "molarMass": "2749.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12127",
    "formula": "C197H212N31O7",
    "composition": {
      "C": 197,
      "H": 212,
      "N": 31,
      "O": 7
    },
    "molarMass": "2760.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12128",
    "formula": "C198H213N0O8",
    "composition": {
      "C": 198,
      "H": 213,
      "N": 0,
      "O": 8
    },
    "molarMass": "2772.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12129",
    "formula": "C199H214N1O9",
    "composition": {
      "C": 199,
      "H": 214,
      "N": 1,
      "O": 9
    },
    "molarMass": "2783.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12130",
    "formula": "C200H215N2O10",
    "composition": {
      "C": 200,
      "H": 215,
      "N": 2,
      "O": 10
    },
    "molarMass": "2795.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12131",
    "formula": "C201H216N3O11",
    "composition": {
      "C": 201,
      "H": 216,
      "N": 3,
      "O": 11
    },
    "molarMass": "2806.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12132",
    "formula": "C202H217N4O12",
    "composition": {
      "C": 202,
      "H": 217,
      "N": 4,
      "O": 12
    },
    "molarMass": "2818.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12133",
    "formula": "C203H218N5O13",
    "composition": {
      "C": 203,
      "H": 218,
      "N": 5,
      "O": 13
    },
    "molarMass": "2829.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12134",
    "formula": "C204H219N6O14",
    "composition": {
      "C": 204,
      "H": 219,
      "N": 6,
      "O": 14
    },
    "molarMass": "2841.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12135",
    "formula": "C205H220N7O15",
    "composition": {
      "C": 205,
      "H": 220,
      "N": 7,
      "O": 15
    },
    "molarMass": "2852.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12136",
    "formula": "C206H221N8O16",
    "composition": {
      "C": 206,
      "H": 221,
      "N": 8,
      "O": 16
    },
    "molarMass": "2864.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12137",
    "formula": "C207H222N9O17",
    "composition": {
      "C": 207,
      "H": 222,
      "N": 9,
      "O": 17
    },
    "molarMass": "2875.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12138",
    "formula": "C208H223N10O18",
    "composition": {
      "C": 208,
      "H": 223,
      "N": 10,
      "O": 18
    },
    "molarMass": "2887.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12139",
    "formula": "C209H224N11O19",
    "composition": {
      "C": 209,
      "H": 224,
      "N": 11,
      "O": 19
    },
    "molarMass": "2898.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12140",
    "formula": "C210H225N12O20",
    "composition": {
      "C": 210,
      "H": 225,
      "N": 12,
      "O": 20
    },
    "molarMass": "2910.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12141",
    "formula": "C211H226N13O21",
    "composition": {
      "C": 211,
      "H": 226,
      "N": 13,
      "O": 21
    },
    "molarMass": "2921.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12142",
    "formula": "C212H227N14O22",
    "composition": {
      "C": 212,
      "H": 227,
      "N": 14,
      "O": 22
    },
    "molarMass": "2933.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12143",
    "formula": "C213H228N15O23",
    "composition": {
      "C": 213,
      "H": 228,
      "N": 15,
      "O": 23
    },
    "molarMass": "2944.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12144",
    "formula": "C214H229N16O24",
    "composition": {
      "C": 214,
      "H": 229,
      "N": 16,
      "O": 24
    },
    "molarMass": "2956.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12145",
    "formula": "C215H230N17O25",
    "composition": {
      "C": 215,
      "H": 230,
      "N": 17,
      "O": 25
    },
    "molarMass": "2967.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12146",
    "formula": "C216H231N18O26",
    "composition": {
      "C": 216,
      "H": 231,
      "N": 18,
      "O": 26
    },
    "molarMass": "2979.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12147",
    "formula": "C217H232N19O27",
    "composition": {
      "C": 217,
      "H": 232,
      "N": 19,
      "O": 27
    },
    "molarMass": "2990.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12148",
    "formula": "C218H233N20O28",
    "composition": {
      "C": 218,
      "H": 233,
      "N": 20,
      "O": 28
    },
    "molarMass": "3002.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12149",
    "formula": "C219H234N21O29",
    "composition": {
      "C": 219,
      "H": 234,
      "N": 21,
      "O": 29
    },
    "molarMass": "3013.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12150",
    "formula": "C220H235N22O0",
    "composition": {
      "C": 220,
      "H": 235,
      "N": 22,
      "O": 0
    },
    "molarMass": "3025.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12151",
    "formula": "C221H236N23O1",
    "composition": {
      "C": 221,
      "H": 236,
      "N": 23,
      "O": 1
    },
    "molarMass": "3036.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12152",
    "formula": "C222H237N24O2",
    "composition": {
      "C": 222,
      "H": 237,
      "N": 24,
      "O": 2
    },
    "molarMass": "3048.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12153",
    "formula": "C223H238N25O3",
    "composition": {
      "C": 223,
      "H": 238,
      "N": 25,
      "O": 3
    },
    "molarMass": "3059.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12154",
    "formula": "C224H239N26O4",
    "composition": {
      "C": 224,
      "H": 239,
      "N": 26,
      "O": 4
    },
    "molarMass": "3071.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12155",
    "formula": "C225H240N27O5",
    "composition": {
      "C": 225,
      "H": 240,
      "N": 27,
      "O": 5
    },
    "molarMass": "3082.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12156",
    "formula": "C226H241N28O6",
    "composition": {
      "C": 226,
      "H": 241,
      "N": 28,
      "O": 6
    },
    "molarMass": "3094.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12157",
    "formula": "C227H242N29O7",
    "composition": {
      "C": 227,
      "H": 242,
      "N": 29,
      "O": 7
    },
    "molarMass": "3105.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12158",
    "formula": "C228H243N30O8",
    "composition": {
      "C": 228,
      "H": 243,
      "N": 30,
      "O": 8
    },
    "molarMass": "3117.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12159",
    "formula": "C229H244N31O9",
    "composition": {
      "C": 229,
      "H": 244,
      "N": 31,
      "O": 9
    },
    "molarMass": "3128.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12160",
    "formula": "C230H245N0O10",
    "composition": {
      "C": 230,
      "H": 245,
      "N": 0,
      "O": 10
    },
    "molarMass": "3140.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12161",
    "formula": "C231H246N1O11",
    "composition": {
      "C": 231,
      "H": 246,
      "N": 1,
      "O": 11
    },
    "molarMass": "3151.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12162",
    "formula": "C232H247N2O12",
    "composition": {
      "C": 232,
      "H": 247,
      "N": 2,
      "O": 12
    },
    "molarMass": "3163.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12163",
    "formula": "C233H248N3O13",
    "composition": {
      "C": 233,
      "H": 248,
      "N": 3,
      "O": 13
    },
    "molarMass": "3174.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12164",
    "formula": "C234H249N4O14",
    "composition": {
      "C": 234,
      "H": 249,
      "N": 4,
      "O": 14
    },
    "molarMass": "3186.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12165",
    "formula": "C235H250N5O15",
    "composition": {
      "C": 235,
      "H": 250,
      "N": 5,
      "O": 15
    },
    "molarMass": "3197.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12166",
    "formula": "C236H251N6O16",
    "composition": {
      "C": 236,
      "H": 251,
      "N": 6,
      "O": 16
    },
    "molarMass": "3209.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12167",
    "formula": "C237H252N7O17",
    "composition": {
      "C": 237,
      "H": 252,
      "N": 7,
      "O": 17
    },
    "molarMass": "3220.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12168",
    "formula": "C238H253N8O18",
    "composition": {
      "C": 238,
      "H": 253,
      "N": 8,
      "O": 18
    },
    "molarMass": "3232.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12169",
    "formula": "C239H254N9O19",
    "composition": {
      "C": 239,
      "H": 254,
      "N": 9,
      "O": 19
    },
    "molarMass": "3243.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12170",
    "formula": "C240H255N10O20",
    "composition": {
      "C": 240,
      "H": 255,
      "N": 10,
      "O": 20
    },
    "molarMass": "3255.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12171",
    "formula": "C241H256N11O21",
    "composition": {
      "C": 241,
      "H": 256,
      "N": 11,
      "O": 21
    },
    "molarMass": "3266.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12172",
    "formula": "C242H257N12O22",
    "composition": {
      "C": 242,
      "H": 257,
      "N": 12,
      "O": 22
    },
    "molarMass": "3278.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12173",
    "formula": "C243H258N13O23",
    "composition": {
      "C": 243,
      "H": 258,
      "N": 13,
      "O": 23
    },
    "molarMass": "3289.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12174",
    "formula": "C244H259N14O24",
    "composition": {
      "C": 244,
      "H": 259,
      "N": 14,
      "O": 24
    },
    "molarMass": "3301.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12175",
    "formula": "C245H260N15O25",
    "composition": {
      "C": 245,
      "H": 260,
      "N": 15,
      "O": 25
    },
    "molarMass": "3312.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12176",
    "formula": "C246H261N16O26",
    "composition": {
      "C": 246,
      "H": 261,
      "N": 16,
      "O": 26
    },
    "molarMass": "3324.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12177",
    "formula": "C247H262N17O27",
    "composition": {
      "C": 247,
      "H": 262,
      "N": 17,
      "O": 27
    },
    "molarMass": "3335.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12178",
    "formula": "C248H263N18O28",
    "composition": {
      "C": 248,
      "H": 263,
      "N": 18,
      "O": 28
    },
    "molarMass": "3347.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12179",
    "formula": "C249H264N19O29",
    "composition": {
      "C": 249,
      "H": 264,
      "N": 19,
      "O": 29
    },
    "molarMass": "3358.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12180",
    "formula": "C250H265N20O0",
    "composition": {
      "C": 250,
      "H": 265,
      "N": 20,
      "O": 0
    },
    "molarMass": "3370.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12181",
    "formula": "C251H266N21O1",
    "composition": {
      "C": 251,
      "H": 266,
      "N": 21,
      "O": 1
    },
    "molarMass": "3381.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12182",
    "formula": "C252H267N22O2",
    "composition": {
      "C": 252,
      "H": 267,
      "N": 22,
      "O": 2
    },
    "molarMass": "3393.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12183",
    "formula": "C253H268N23O3",
    "composition": {
      "C": 253,
      "H": 268,
      "N": 23,
      "O": 3
    },
    "molarMass": "3404.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12184",
    "formula": "C254H269N24O4",
    "composition": {
      "C": 254,
      "H": 269,
      "N": 24,
      "O": 4
    },
    "molarMass": "3416.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12185",
    "formula": "C255H270N25O5",
    "composition": {
      "C": 255,
      "H": 270,
      "N": 25,
      "O": 5
    },
    "molarMass": "3427.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12186",
    "formula": "C256H271N26O6",
    "composition": {
      "C": 256,
      "H": 271,
      "N": 26,
      "O": 6
    },
    "molarMass": "3439.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12187",
    "formula": "C257H272N27O7",
    "composition": {
      "C": 257,
      "H": 272,
      "N": 27,
      "O": 7
    },
    "molarMass": "3450.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12188",
    "formula": "C258H273N28O8",
    "composition": {
      "C": 258,
      "H": 273,
      "N": 28,
      "O": 8
    },
    "molarMass": "3462.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12189",
    "formula": "C259H274N29O9",
    "composition": {
      "C": 259,
      "H": 274,
      "N": 29,
      "O": 9
    },
    "molarMass": "3473.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12190",
    "formula": "C260H275N30O10",
    "composition": {
      "C": 260,
      "H": 275,
      "N": 30,
      "O": 10
    },
    "molarMass": "3485.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12191",
    "formula": "C261H276N31O11",
    "composition": {
      "C": 261,
      "H": 276,
      "N": 31,
      "O": 11
    },
    "molarMass": "3496.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12192",
    "formula": "C262H277N0O12",
    "composition": {
      "C": 262,
      "H": 277,
      "N": 0,
      "O": 12
    },
    "molarMass": "3508.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12193",
    "formula": "C263H278N1O13",
    "composition": {
      "C": 263,
      "H": 278,
      "N": 1,
      "O": 13
    },
    "molarMass": "3519.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12194",
    "formula": "C264H279N2O14",
    "composition": {
      "C": 264,
      "H": 279,
      "N": 2,
      "O": 14
    },
    "molarMass": "3531.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12195",
    "formula": "C265H280N3O15",
    "composition": {
      "C": 265,
      "H": 280,
      "N": 3,
      "O": 15
    },
    "molarMass": "3542.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12196",
    "formula": "C266H281N4O16",
    "composition": {
      "C": 266,
      "H": 281,
      "N": 4,
      "O": 16
    },
    "molarMass": "3554.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12197",
    "formula": "C267H282N5O17",
    "composition": {
      "C": 267,
      "H": 282,
      "N": 5,
      "O": 17
    },
    "molarMass": "3565.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12198",
    "formula": "C268H283N6O18",
    "composition": {
      "C": 268,
      "H": 283,
      "N": 6,
      "O": 18
    },
    "molarMass": "3577.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12199",
    "formula": "C269H284N7O19",
    "composition": {
      "C": 269,
      "H": 284,
      "N": 7,
      "O": 19
    },
    "molarMass": "3588.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12200",
    "formula": "C270H285N8O20",
    "composition": {
      "C": 270,
      "H": 285,
      "N": 8,
      "O": 20
    },
    "molarMass": "3600.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12201",
    "formula": "C271H286N9O21",
    "composition": {
      "C": 271,
      "H": 286,
      "N": 9,
      "O": 21
    },
    "molarMass": "3611.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12202",
    "formula": "C272H287N10O22",
    "composition": {
      "C": 272,
      "H": 287,
      "N": 10,
      "O": 22
    },
    "molarMass": "3623.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12203",
    "formula": "C273H288N11O23",
    "composition": {
      "C": 273,
      "H": 288,
      "N": 11,
      "O": 23
    },
    "molarMass": "3634.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12204",
    "formula": "C274H289N12O24",
    "composition": {
      "C": 274,
      "H": 289,
      "N": 12,
      "O": 24
    },
    "molarMass": "3646.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12205",
    "formula": "C275H290N13O25",
    "composition": {
      "C": 275,
      "H": 290,
      "N": 13,
      "O": 25
    },
    "molarMass": "3657.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12206",
    "formula": "C276H291N14O26",
    "composition": {
      "C": 276,
      "H": 291,
      "N": 14,
      "O": 26
    },
    "molarMass": "3669.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12207",
    "formula": "C277H292N15O27",
    "composition": {
      "C": 277,
      "H": 292,
      "N": 15,
      "O": 27
    },
    "molarMass": "3680.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12208",
    "formula": "C278H293N16O28",
    "composition": {
      "C": 278,
      "H": 293,
      "N": 16,
      "O": 28
    },
    "molarMass": "3692.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12209",
    "formula": "C279H294N17O29",
    "composition": {
      "C": 279,
      "H": 294,
      "N": 17,
      "O": 29
    },
    "molarMass": "3703.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12210",
    "formula": "C280H295N18O0",
    "composition": {
      "C": 280,
      "H": 295,
      "N": 18,
      "O": 0
    },
    "molarMass": "3715.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12211",
    "formula": "C281H296N19O1",
    "composition": {
      "C": 281,
      "H": 296,
      "N": 19,
      "O": 1
    },
    "molarMass": "3726.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12212",
    "formula": "C282H297N20O2",
    "composition": {
      "C": 282,
      "H": 297,
      "N": 20,
      "O": 2
    },
    "molarMass": "3738.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12213",
    "formula": "C283H298N21O3",
    "composition": {
      "C": 283,
      "H": 298,
      "N": 21,
      "O": 3
    },
    "molarMass": "3749.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12214",
    "formula": "C284H299N22O4",
    "composition": {
      "C": 284,
      "H": 299,
      "N": 22,
      "O": 4
    },
    "molarMass": "3761.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12215",
    "formula": "C285H300N23O5",
    "composition": {
      "C": 285,
      "H": 300,
      "N": 23,
      "O": 5
    },
    "molarMass": "3772.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12216",
    "formula": "C286H301N24O6",
    "composition": {
      "C": 286,
      "H": 301,
      "N": 24,
      "O": 6
    },
    "molarMass": "3784.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12217",
    "formula": "C287H302N25O7",
    "composition": {
      "C": 287,
      "H": 302,
      "N": 25,
      "O": 7
    },
    "molarMass": "3795.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12218",
    "formula": "C288H303N26O8",
    "composition": {
      "C": 288,
      "H": 303,
      "N": 26,
      "O": 8
    },
    "molarMass": "3807.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12219",
    "formula": "C289H304N27O9",
    "composition": {
      "C": 289,
      "H": 304,
      "N": 27,
      "O": 9
    },
    "molarMass": "3818.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12220",
    "formula": "C290H305N28O10",
    "composition": {
      "C": 290,
      "H": 305,
      "N": 28,
      "O": 10
    },
    "molarMass": "3830.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12221",
    "formula": "C291H306N29O11",
    "composition": {
      "C": 291,
      "H": 306,
      "N": 29,
      "O": 11
    },
    "molarMass": "3841.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12222",
    "formula": "C292H307N30O12",
    "composition": {
      "C": 292,
      "H": 307,
      "N": 30,
      "O": 12
    },
    "molarMass": "3853.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12223",
    "formula": "C293H308N31O13",
    "composition": {
      "C": 293,
      "H": 308,
      "N": 31,
      "O": 13
    },
    "molarMass": "3864.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12224",
    "formula": "C294H309N0O14",
    "composition": {
      "C": 294,
      "H": 309,
      "N": 0,
      "O": 14
    },
    "molarMass": "3876.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12225",
    "formula": "C295H310N1O15",
    "composition": {
      "C": 295,
      "H": 310,
      "N": 1,
      "O": 15
    },
    "molarMass": "3887.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12226",
    "formula": "C296H311N2O16",
    "composition": {
      "C": 296,
      "H": 311,
      "N": 2,
      "O": 16
    },
    "molarMass": "3899.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12227",
    "formula": "C297H312N3O17",
    "composition": {
      "C": 297,
      "H": 312,
      "N": 3,
      "O": 17
    },
    "molarMass": "3910.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12228",
    "formula": "C298H313N4O18",
    "composition": {
      "C": 298,
      "H": 313,
      "N": 4,
      "O": 18
    },
    "molarMass": "3922.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12229",
    "formula": "C299H314N5O19",
    "composition": {
      "C": 299,
      "H": 314,
      "N": 5,
      "O": 19
    },
    "molarMass": "3933.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12230",
    "formula": "C300H315N6O20",
    "composition": {
      "C": 300,
      "H": 315,
      "N": 6,
      "O": 20
    },
    "molarMass": "3945.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12231",
    "formula": "C301H316N7O21",
    "composition": {
      "C": 301,
      "H": 316,
      "N": 7,
      "O": 21
    },
    "molarMass": "3956.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12232",
    "formula": "C302H317N8O22",
    "composition": {
      "C": 302,
      "H": 317,
      "N": 8,
      "O": 22
    },
    "molarMass": "3968.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12233",
    "formula": "C303H318N9O23",
    "composition": {
      "C": 303,
      "H": 318,
      "N": 9,
      "O": 23
    },
    "molarMass": "3979.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12234",
    "formula": "C304H319N10O24",
    "composition": {
      "C": 304,
      "H": 319,
      "N": 10,
      "O": 24
    },
    "molarMass": "3991.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12235",
    "formula": "C305H320N11O25",
    "composition": {
      "C": 305,
      "H": 320,
      "N": 11,
      "O": 25
    },
    "molarMass": "4002.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12236",
    "formula": "C306H321N12O26",
    "composition": {
      "C": 306,
      "H": 321,
      "N": 12,
      "O": 26
    },
    "molarMass": "4014.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12237",
    "formula": "C307H322N13O27",
    "composition": {
      "C": 307,
      "H": 322,
      "N": 13,
      "O": 27
    },
    "molarMass": "4025.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12238",
    "formula": "C308H323N14O28",
    "composition": {
      "C": 308,
      "H": 323,
      "N": 14,
      "O": 28
    },
    "molarMass": "4037.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12239",
    "formula": "C309H324N15O29",
    "composition": {
      "C": 309,
      "H": 324,
      "N": 15,
      "O": 29
    },
    "molarMass": "4048.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12240",
    "formula": "C310H325N16O0",
    "composition": {
      "C": 310,
      "H": 325,
      "N": 16,
      "O": 0
    },
    "molarMass": "4060.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12241",
    "formula": "C311H326N17O1",
    "composition": {
      "C": 311,
      "H": 326,
      "N": 17,
      "O": 1
    },
    "molarMass": "4071.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12242",
    "formula": "C312H327N18O2",
    "composition": {
      "C": 312,
      "H": 327,
      "N": 18,
      "O": 2
    },
    "molarMass": "4083.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12243",
    "formula": "C313H328N19O3",
    "composition": {
      "C": 313,
      "H": 328,
      "N": 19,
      "O": 3
    },
    "molarMass": "4094.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12244",
    "formula": "C314H329N20O4",
    "composition": {
      "C": 314,
      "H": 329,
      "N": 20,
      "O": 4
    },
    "molarMass": "4106.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12245",
    "formula": "C315H330N21O5",
    "composition": {
      "C": 315,
      "H": 330,
      "N": 21,
      "O": 5
    },
    "molarMass": "4117.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12246",
    "formula": "C316H331N22O6",
    "composition": {
      "C": 316,
      "H": 331,
      "N": 22,
      "O": 6
    },
    "molarMass": "4129.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12247",
    "formula": "C317H332N23O7",
    "composition": {
      "C": 317,
      "H": 332,
      "N": 23,
      "O": 7
    },
    "molarMass": "4140.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12248",
    "formula": "C318H333N24O8",
    "composition": {
      "C": 318,
      "H": 333,
      "N": 24,
      "O": 8
    },
    "molarMass": "4152.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12249",
    "formula": "C319H334N25O9",
    "composition": {
      "C": 319,
      "H": 334,
      "N": 25,
      "O": 9
    },
    "molarMass": "4163.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12250",
    "formula": "C320H335N26O10",
    "composition": {
      "C": 320,
      "H": 335,
      "N": 26,
      "O": 10
    },
    "molarMass": "4175.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12251",
    "formula": "C321H336N27O11",
    "composition": {
      "C": 321,
      "H": 336,
      "N": 27,
      "O": 11
    },
    "molarMass": "4186.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12252",
    "formula": "C322H337N28O12",
    "composition": {
      "C": 322,
      "H": 337,
      "N": 28,
      "O": 12
    },
    "molarMass": "4198.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12253",
    "formula": "C323H338N29O13",
    "composition": {
      "C": 323,
      "H": 338,
      "N": 29,
      "O": 13
    },
    "molarMass": "4209.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12254",
    "formula": "C324H339N30O14",
    "composition": {
      "C": 324,
      "H": 339,
      "N": 30,
      "O": 14
    },
    "molarMass": "4221.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12255",
    "formula": "C325H340N31O15",
    "composition": {
      "C": 325,
      "H": 340,
      "N": 31,
      "O": 15
    },
    "molarMass": "4232.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12256",
    "formula": "C326H341N0O16",
    "composition": {
      "C": 326,
      "H": 341,
      "N": 0,
      "O": 16
    },
    "molarMass": "4244.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12257",
    "formula": "C327H342N1O17",
    "composition": {
      "C": 327,
      "H": 342,
      "N": 1,
      "O": 17
    },
    "molarMass": "4255.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12258",
    "formula": "C328H343N2O18",
    "composition": {
      "C": 328,
      "H": 343,
      "N": 2,
      "O": 18
    },
    "molarMass": "4267.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12259",
    "formula": "C329H344N3O19",
    "composition": {
      "C": 329,
      "H": 344,
      "N": 3,
      "O": 19
    },
    "molarMass": "4278.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12260",
    "formula": "C330H345N4O20",
    "composition": {
      "C": 330,
      "H": 345,
      "N": 4,
      "O": 20
    },
    "molarMass": "4290.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12261",
    "formula": "C331H346N5O21",
    "composition": {
      "C": 331,
      "H": 346,
      "N": 5,
      "O": 21
    },
    "molarMass": "4301.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12262",
    "formula": "C332H347N6O22",
    "composition": {
      "C": 332,
      "H": 347,
      "N": 6,
      "O": 22
    },
    "molarMass": "4313.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12263",
    "formula": "C333H348N7O23",
    "composition": {
      "C": 333,
      "H": 348,
      "N": 7,
      "O": 23
    },
    "molarMass": "4324.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12264",
    "formula": "C334H349N8O24",
    "composition": {
      "C": 334,
      "H": 349,
      "N": 8,
      "O": 24
    },
    "molarMass": "4336.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12265",
    "formula": "C335H350N9O25",
    "composition": {
      "C": 335,
      "H": 350,
      "N": 9,
      "O": 25
    },
    "molarMass": "4347.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12266",
    "formula": "C336H351N10O26",
    "composition": {
      "C": 336,
      "H": 351,
      "N": 10,
      "O": 26
    },
    "molarMass": "4359.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12267",
    "formula": "C337H352N11O27",
    "composition": {
      "C": 337,
      "H": 352,
      "N": 11,
      "O": 27
    },
    "molarMass": "4370.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12268",
    "formula": "C338H353N12O28",
    "composition": {
      "C": 338,
      "H": 353,
      "N": 12,
      "O": 28
    },
    "molarMass": "4382.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12269",
    "formula": "C339H354N13O29",
    "composition": {
      "C": 339,
      "H": 354,
      "N": 13,
      "O": 29
    },
    "molarMass": "4393.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12270",
    "formula": "C340H355N14O0",
    "composition": {
      "C": 340,
      "H": 355,
      "N": 14,
      "O": 0
    },
    "molarMass": "4405.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12271",
    "formula": "C341H356N15O1",
    "composition": {
      "C": 341,
      "H": 356,
      "N": 15,
      "O": 1
    },
    "molarMass": "4416.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12272",
    "formula": "C342H357N16O2",
    "composition": {
      "C": 342,
      "H": 357,
      "N": 16,
      "O": 2
    },
    "molarMass": "4428.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12273",
    "formula": "C343H358N17O3",
    "composition": {
      "C": 343,
      "H": 358,
      "N": 17,
      "O": 3
    },
    "molarMass": "4439.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12274",
    "formula": "C344H359N18O4",
    "composition": {
      "C": 344,
      "H": 359,
      "N": 18,
      "O": 4
    },
    "molarMass": "4451.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12275",
    "formula": "C345H360N19O5",
    "composition": {
      "C": 345,
      "H": 360,
      "N": 19,
      "O": 5
    },
    "molarMass": "4462.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12276",
    "formula": "C346H361N20O6",
    "composition": {
      "C": 346,
      "H": 361,
      "N": 20,
      "O": 6
    },
    "molarMass": "4474.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12277",
    "formula": "C347H362N21O7",
    "composition": {
      "C": 347,
      "H": 362,
      "N": 21,
      "O": 7
    },
    "molarMass": "4485.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12278",
    "formula": "C348H363N22O8",
    "composition": {
      "C": 348,
      "H": 363,
      "N": 22,
      "O": 8
    },
    "molarMass": "4497.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12279",
    "formula": "C349H364N23O9",
    "composition": {
      "C": 349,
      "H": 364,
      "N": 23,
      "O": 9
    },
    "molarMass": "4508.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12280",
    "formula": "C350H365N24O10",
    "composition": {
      "C": 350,
      "H": 365,
      "N": 24,
      "O": 10
    },
    "molarMass": "4520.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12281",
    "formula": "C351H366N25O11",
    "composition": {
      "C": 351,
      "H": 366,
      "N": 25,
      "O": 11
    },
    "molarMass": "4531.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12282",
    "formula": "C352H367N26O12",
    "composition": {
      "C": 352,
      "H": 367,
      "N": 26,
      "O": 12
    },
    "molarMass": "4543.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12283",
    "formula": "C353H368N27O13",
    "composition": {
      "C": 353,
      "H": 368,
      "N": 27,
      "O": 13
    },
    "molarMass": "4554.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12284",
    "formula": "C354H369N28O14",
    "composition": {
      "C": 354,
      "H": 369,
      "N": 28,
      "O": 14
    },
    "molarMass": "4566.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12285",
    "formula": "C355H370N29O15",
    "composition": {
      "C": 355,
      "H": 370,
      "N": 29,
      "O": 15
    },
    "molarMass": "4577.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12286",
    "formula": "C356H371N30O16",
    "composition": {
      "C": 356,
      "H": 371,
      "N": 30,
      "O": 16
    },
    "molarMass": "4589.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12287",
    "formula": "C357H372N31O17",
    "composition": {
      "C": 357,
      "H": 372,
      "N": 31,
      "O": 17
    },
    "molarMass": "4600.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12288",
    "formula": "C358H373N0O18",
    "composition": {
      "C": 358,
      "H": 373,
      "N": 0,
      "O": 18
    },
    "molarMass": "4612.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12289",
    "formula": "C359H374N1O19",
    "composition": {
      "C": 359,
      "H": 374,
      "N": 1,
      "O": 19
    },
    "molarMass": "4623.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12290",
    "formula": "C360H375N2O20",
    "composition": {
      "C": 360,
      "H": 375,
      "N": 2,
      "O": 20
    },
    "molarMass": "4635.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12291",
    "formula": "C361H376N3O21",
    "composition": {
      "C": 361,
      "H": 376,
      "N": 3,
      "O": 21
    },
    "molarMass": "4646.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12292",
    "formula": "C362H377N4O22",
    "composition": {
      "C": 362,
      "H": 377,
      "N": 4,
      "O": 22
    },
    "molarMass": "4658.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12293",
    "formula": "C363H378N5O23",
    "composition": {
      "C": 363,
      "H": 378,
      "N": 5,
      "O": 23
    },
    "molarMass": "4669.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12294",
    "formula": "C364H379N6O24",
    "composition": {
      "C": 364,
      "H": 379,
      "N": 6,
      "O": 24
    },
    "molarMass": "4681.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12295",
    "formula": "C365H380N7O25",
    "composition": {
      "C": 365,
      "H": 380,
      "N": 7,
      "O": 25
    },
    "molarMass": "4692.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12296",
    "formula": "C366H381N8O26",
    "composition": {
      "C": 366,
      "H": 381,
      "N": 8,
      "O": 26
    },
    "molarMass": "4704.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12297",
    "formula": "C367H382N9O27",
    "composition": {
      "C": 367,
      "H": 382,
      "N": 9,
      "O": 27
    },
    "molarMass": "4715.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12298",
    "formula": "C368H383N10O28",
    "composition": {
      "C": 368,
      "H": 383,
      "N": 10,
      "O": 28
    },
    "molarMass": "4727.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12299",
    "formula": "C369H384N11O29",
    "composition": {
      "C": 369,
      "H": 384,
      "N": 11,
      "O": 29
    },
    "molarMass": "4738.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12300",
    "formula": "C370H385N12O0",
    "composition": {
      "C": 370,
      "H": 385,
      "N": 12,
      "O": 0
    },
    "molarMass": "4750.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12301",
    "formula": "C371H386N13O1",
    "composition": {
      "C": 371,
      "H": 386,
      "N": 13,
      "O": 1
    },
    "molarMass": "4761.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12302",
    "formula": "C372H387N14O2",
    "composition": {
      "C": 372,
      "H": 387,
      "N": 14,
      "O": 2
    },
    "molarMass": "4773.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12303",
    "formula": "C373H388N15O3",
    "composition": {
      "C": 373,
      "H": 388,
      "N": 15,
      "O": 3
    },
    "molarMass": "4784.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12304",
    "formula": "C374H389N16O4",
    "composition": {
      "C": 374,
      "H": 389,
      "N": 16,
      "O": 4
    },
    "molarMass": "4796.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12305",
    "formula": "C375H390N17O5",
    "composition": {
      "C": 375,
      "H": 390,
      "N": 17,
      "O": 5
    },
    "molarMass": "4807.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12306",
    "formula": "C376H391N18O6",
    "composition": {
      "C": 376,
      "H": 391,
      "N": 18,
      "O": 6
    },
    "molarMass": "4819.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12307",
    "formula": "C377H392N19O7",
    "composition": {
      "C": 377,
      "H": 392,
      "N": 19,
      "O": 7
    },
    "molarMass": "4830.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12308",
    "formula": "C378H393N20O8",
    "composition": {
      "C": 378,
      "H": 393,
      "N": 20,
      "O": 8
    },
    "molarMass": "4842.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12309",
    "formula": "C379H394N21O9",
    "composition": {
      "C": 379,
      "H": 394,
      "N": 21,
      "O": 9
    },
    "molarMass": "4853.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12310",
    "formula": "C380H395N22O10",
    "composition": {
      "C": 380,
      "H": 395,
      "N": 22,
      "O": 10
    },
    "molarMass": "4865.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12311",
    "formula": "C381H396N23O11",
    "composition": {
      "C": 381,
      "H": 396,
      "N": 23,
      "O": 11
    },
    "molarMass": "4876.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12312",
    "formula": "C382H397N24O12",
    "composition": {
      "C": 382,
      "H": 397,
      "N": 24,
      "O": 12
    },
    "molarMass": "4888.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12313",
    "formula": "C383H398N25O13",
    "composition": {
      "C": 383,
      "H": 398,
      "N": 25,
      "O": 13
    },
    "molarMass": "4899.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12314",
    "formula": "C384H399N26O14",
    "composition": {
      "C": 384,
      "H": 399,
      "N": 26,
      "O": 14
    },
    "molarMass": "4911.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12315",
    "formula": "C385H400N27O15",
    "composition": {
      "C": 385,
      "H": 400,
      "N": 27,
      "O": 15
    },
    "molarMass": "4922.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12316",
    "formula": "C386H401N28O16",
    "composition": {
      "C": 386,
      "H": 401,
      "N": 28,
      "O": 16
    },
    "molarMass": "4934.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12317",
    "formula": "C387H402N29O17",
    "composition": {
      "C": 387,
      "H": 402,
      "N": 29,
      "O": 17
    },
    "molarMass": "4945.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12318",
    "formula": "C388H403N30O18",
    "composition": {
      "C": 388,
      "H": 403,
      "N": 30,
      "O": 18
    },
    "molarMass": "4957.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12319",
    "formula": "C389H404N31O19",
    "composition": {
      "C": 389,
      "H": 404,
      "N": 31,
      "O": 19
    },
    "molarMass": "4968.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12320",
    "formula": "C390H405N0O20",
    "composition": {
      "C": 390,
      "H": 405,
      "N": 0,
      "O": 20
    },
    "molarMass": "4980.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12321",
    "formula": "C391H406N1O21",
    "composition": {
      "C": 391,
      "H": 406,
      "N": 1,
      "O": 21
    },
    "molarMass": "4991.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12322",
    "formula": "C392H407N2O22",
    "composition": {
      "C": 392,
      "H": 407,
      "N": 2,
      "O": 22
    },
    "molarMass": "5003.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12323",
    "formula": "C393H408N3O23",
    "composition": {
      "C": 393,
      "H": 408,
      "N": 3,
      "O": 23
    },
    "molarMass": "5014.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12324",
    "formula": "C394H409N4O24",
    "composition": {
      "C": 394,
      "H": 409,
      "N": 4,
      "O": 24
    },
    "molarMass": "5026.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12325",
    "formula": "C395H410N5O25",
    "composition": {
      "C": 395,
      "H": 410,
      "N": 5,
      "O": 25
    },
    "molarMass": "5037.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12326",
    "formula": "C396H411N6O26",
    "composition": {
      "C": 396,
      "H": 411,
      "N": 6,
      "O": 26
    },
    "molarMass": "5049.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12327",
    "formula": "C397H412N7O27",
    "composition": {
      "C": 397,
      "H": 412,
      "N": 7,
      "O": 27
    },
    "molarMass": "5060.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12328",
    "formula": "C398H413N8O28",
    "composition": {
      "C": 398,
      "H": 413,
      "N": 8,
      "O": 28
    },
    "molarMass": "5072.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12329",
    "formula": "C399H414N9O29",
    "composition": {
      "C": 399,
      "H": 414,
      "N": 9,
      "O": 29
    },
    "molarMass": "5083.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12330",
    "formula": "C400H415N10O0",
    "composition": {
      "C": 400,
      "H": 415,
      "N": 10,
      "O": 0
    },
    "molarMass": "5095.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12331",
    "formula": "C401H416N11O1",
    "composition": {
      "C": 401,
      "H": 416,
      "N": 11,
      "O": 1
    },
    "molarMass": "5106.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12332",
    "formula": "C402H417N12O2",
    "composition": {
      "C": 402,
      "H": 417,
      "N": 12,
      "O": 2
    },
    "molarMass": "5118.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12333",
    "formula": "C403H418N13O3",
    "composition": {
      "C": 403,
      "H": 418,
      "N": 13,
      "O": 3
    },
    "molarMass": "5129.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12334",
    "formula": "C404H419N14O4",
    "composition": {
      "C": 404,
      "H": 419,
      "N": 14,
      "O": 4
    },
    "molarMass": "5141.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12335",
    "formula": "C405H420N15O5",
    "composition": {
      "C": 405,
      "H": 420,
      "N": 15,
      "O": 5
    },
    "molarMass": "5152.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12336",
    "formula": "C406H421N16O6",
    "composition": {
      "C": 406,
      "H": 421,
      "N": 16,
      "O": 6
    },
    "molarMass": "5164.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12337",
    "formula": "C407H422N17O7",
    "composition": {
      "C": 407,
      "H": 422,
      "N": 17,
      "O": 7
    },
    "molarMass": "5175.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12338",
    "formula": "C408H423N18O8",
    "composition": {
      "C": 408,
      "H": 423,
      "N": 18,
      "O": 8
    },
    "molarMass": "5187.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12339",
    "formula": "C409H424N19O9",
    "composition": {
      "C": 409,
      "H": 424,
      "N": 19,
      "O": 9
    },
    "molarMass": "5198.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12340",
    "formula": "C410H425N20O10",
    "composition": {
      "C": 410,
      "H": 425,
      "N": 20,
      "O": 10
    },
    "molarMass": "5210.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12341",
    "formula": "C411H426N21O11",
    "composition": {
      "C": 411,
      "H": 426,
      "N": 21,
      "O": 11
    },
    "molarMass": "5221.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12342",
    "formula": "C412H427N22O12",
    "composition": {
      "C": 412,
      "H": 427,
      "N": 22,
      "O": 12
    },
    "molarMass": "5233.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12343",
    "formula": "C413H428N23O13",
    "composition": {
      "C": 413,
      "H": 428,
      "N": 23,
      "O": 13
    },
    "molarMass": "5244.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12344",
    "formula": "C414H429N24O14",
    "composition": {
      "C": 414,
      "H": 429,
      "N": 24,
      "O": 14
    },
    "molarMass": "5256.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12345",
    "formula": "C415H430N25O15",
    "composition": {
      "C": 415,
      "H": 430,
      "N": 25,
      "O": 15
    },
    "molarMass": "5267.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12346",
    "formula": "C416H431N26O16",
    "composition": {
      "C": 416,
      "H": 431,
      "N": 26,
      "O": 16
    },
    "molarMass": "5279.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12347",
    "formula": "C417H432N27O17",
    "composition": {
      "C": 417,
      "H": 432,
      "N": 27,
      "O": 17
    },
    "molarMass": "5290.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12348",
    "formula": "C418H433N28O18",
    "composition": {
      "C": 418,
      "H": 433,
      "N": 28,
      "O": 18
    },
    "molarMass": "5302.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12349",
    "formula": "C419H434N29O19",
    "composition": {
      "C": 419,
      "H": 434,
      "N": 29,
      "O": 19
    },
    "molarMass": "5313.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12350",
    "formula": "C420H435N30O20",
    "composition": {
      "C": 420,
      "H": 435,
      "N": 30,
      "O": 20
    },
    "molarMass": "5325.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12351",
    "formula": "C421H436N31O21",
    "composition": {
      "C": 421,
      "H": 436,
      "N": 31,
      "O": 21
    },
    "molarMass": "5336.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12352",
    "formula": "C422H437N0O22",
    "composition": {
      "C": 422,
      "H": 437,
      "N": 0,
      "O": 22
    },
    "molarMass": "5348.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12353",
    "formula": "C423H438N1O23",
    "composition": {
      "C": 423,
      "H": 438,
      "N": 1,
      "O": 23
    },
    "molarMass": "5359.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12354",
    "formula": "C424H439N2O24",
    "composition": {
      "C": 424,
      "H": 439,
      "N": 2,
      "O": 24
    },
    "molarMass": "5371.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12355",
    "formula": "C425H440N3O25",
    "composition": {
      "C": 425,
      "H": 440,
      "N": 3,
      "O": 25
    },
    "molarMass": "5382.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12356",
    "formula": "C426H441N4O26",
    "composition": {
      "C": 426,
      "H": 441,
      "N": 4,
      "O": 26
    },
    "molarMass": "5394.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12357",
    "formula": "C427H442N5O27",
    "composition": {
      "C": 427,
      "H": 442,
      "N": 5,
      "O": 27
    },
    "molarMass": "5405.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12358",
    "formula": "C428H443N6O28",
    "composition": {
      "C": 428,
      "H": 443,
      "N": 6,
      "O": 28
    },
    "molarMass": "5417.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12359",
    "formula": "C429H444N7O29",
    "composition": {
      "C": 429,
      "H": 444,
      "N": 7,
      "O": 29
    },
    "molarMass": "5428.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12360",
    "formula": "C430H445N8O0",
    "composition": {
      "C": 430,
      "H": 445,
      "N": 8,
      "O": 0
    },
    "molarMass": "5440.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12361",
    "formula": "C431H446N9O1",
    "composition": {
      "C": 431,
      "H": 446,
      "N": 9,
      "O": 1
    },
    "molarMass": "5451.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12362",
    "formula": "C432H447N10O2",
    "composition": {
      "C": 432,
      "H": 447,
      "N": 10,
      "O": 2
    },
    "molarMass": "5463.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12363",
    "formula": "C433H448N11O3",
    "composition": {
      "C": 433,
      "H": 448,
      "N": 11,
      "O": 3
    },
    "molarMass": "5474.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12364",
    "formula": "C434H449N12O4",
    "composition": {
      "C": 434,
      "H": 449,
      "N": 12,
      "O": 4
    },
    "molarMass": "5486.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12365",
    "formula": "C435H450N13O5",
    "composition": {
      "C": 435,
      "H": 450,
      "N": 13,
      "O": 5
    },
    "molarMass": "5497.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12366",
    "formula": "C436H451N14O6",
    "composition": {
      "C": 436,
      "H": 451,
      "N": 14,
      "O": 6
    },
    "molarMass": "5509.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12367",
    "formula": "C437H452N15O7",
    "composition": {
      "C": 437,
      "H": 452,
      "N": 15,
      "O": 7
    },
    "molarMass": "5520.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12368",
    "formula": "C438H453N16O8",
    "composition": {
      "C": 438,
      "H": 453,
      "N": 16,
      "O": 8
    },
    "molarMass": "5532.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12369",
    "formula": "C439H454N17O9",
    "composition": {
      "C": 439,
      "H": 454,
      "N": 17,
      "O": 9
    },
    "molarMass": "5543.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12370",
    "formula": "C440H455N18O10",
    "composition": {
      "C": 440,
      "H": 455,
      "N": 18,
      "O": 10
    },
    "molarMass": "5555.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12371",
    "formula": "C441H456N19O11",
    "composition": {
      "C": 441,
      "H": 456,
      "N": 19,
      "O": 11
    },
    "molarMass": "5566.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12372",
    "formula": "C442H457N20O12",
    "composition": {
      "C": 442,
      "H": 457,
      "N": 20,
      "O": 12
    },
    "molarMass": "5578.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12373",
    "formula": "C443H458N21O13",
    "composition": {
      "C": 443,
      "H": 458,
      "N": 21,
      "O": 13
    },
    "molarMass": "5589.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12374",
    "formula": "C444H459N22O14",
    "composition": {
      "C": 444,
      "H": 459,
      "N": 22,
      "O": 14
    },
    "molarMass": "5601.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12375",
    "formula": "C445H460N23O15",
    "composition": {
      "C": 445,
      "H": 460,
      "N": 23,
      "O": 15
    },
    "molarMass": "5612.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12376",
    "formula": "C446H461N24O16",
    "composition": {
      "C": 446,
      "H": 461,
      "N": 24,
      "O": 16
    },
    "molarMass": "5624.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12377",
    "formula": "C447H462N25O17",
    "composition": {
      "C": 447,
      "H": 462,
      "N": 25,
      "O": 17
    },
    "molarMass": "5635.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12378",
    "formula": "C448H463N26O18",
    "composition": {
      "C": 448,
      "H": 463,
      "N": 26,
      "O": 18
    },
    "molarMass": "5647.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12379",
    "formula": "C449H464N27O19",
    "composition": {
      "C": 449,
      "H": 464,
      "N": 27,
      "O": 19
    },
    "molarMass": "5658.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12380",
    "formula": "C450H465N28O20",
    "composition": {
      "C": 450,
      "H": 465,
      "N": 28,
      "O": 20
    },
    "molarMass": "5670.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12381",
    "formula": "C451H466N29O21",
    "composition": {
      "C": 451,
      "H": 466,
      "N": 29,
      "O": 21
    },
    "molarMass": "5681.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12382",
    "formula": "C452H467N30O22",
    "composition": {
      "C": 452,
      "H": 467,
      "N": 30,
      "O": 22
    },
    "molarMass": "5693.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12383",
    "formula": "C453H468N31O23",
    "composition": {
      "C": 453,
      "H": 468,
      "N": 31,
      "O": 23
    },
    "molarMass": "5704.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12384",
    "formula": "C454H469N0O24",
    "composition": {
      "C": 454,
      "H": 469,
      "N": 0,
      "O": 24
    },
    "molarMass": "5716.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12385",
    "formula": "C455H470N1O25",
    "composition": {
      "C": 455,
      "H": 470,
      "N": 1,
      "O": 25
    },
    "molarMass": "5727.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12386",
    "formula": "C456H471N2O26",
    "composition": {
      "C": 456,
      "H": 471,
      "N": 2,
      "O": 26
    },
    "molarMass": "5739.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12387",
    "formula": "C457H472N3O27",
    "composition": {
      "C": 457,
      "H": 472,
      "N": 3,
      "O": 27
    },
    "molarMass": "5750.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12388",
    "formula": "C458H473N4O28",
    "composition": {
      "C": 458,
      "H": 473,
      "N": 4,
      "O": 28
    },
    "molarMass": "5762.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12389",
    "formula": "C459H474N5O29",
    "composition": {
      "C": 459,
      "H": 474,
      "N": 5,
      "O": 29
    },
    "molarMass": "5773.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12390",
    "formula": "C460H475N6O0",
    "composition": {
      "C": 460,
      "H": 475,
      "N": 6,
      "O": 0
    },
    "molarMass": "5785.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12391",
    "formula": "C461H476N7O1",
    "composition": {
      "C": 461,
      "H": 476,
      "N": 7,
      "O": 1
    },
    "molarMass": "5796.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12392",
    "formula": "C462H477N8O2",
    "composition": {
      "C": 462,
      "H": 477,
      "N": 8,
      "O": 2
    },
    "molarMass": "5808.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12393",
    "formula": "C463H478N9O3",
    "composition": {
      "C": 463,
      "H": 478,
      "N": 9,
      "O": 3
    },
    "molarMass": "5819.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12394",
    "formula": "C464H479N10O4",
    "composition": {
      "C": 464,
      "H": 479,
      "N": 10,
      "O": 4
    },
    "molarMass": "5831.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12395",
    "formula": "C465H480N11O5",
    "composition": {
      "C": 465,
      "H": 480,
      "N": 11,
      "O": 5
    },
    "molarMass": "5842.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12396",
    "formula": "C466H481N12O6",
    "composition": {
      "C": 466,
      "H": 481,
      "N": 12,
      "O": 6
    },
    "molarMass": "5854.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12397",
    "formula": "C467H482N13O7",
    "composition": {
      "C": 467,
      "H": 482,
      "N": 13,
      "O": 7
    },
    "molarMass": "5865.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12398",
    "formula": "C468H483N14O8",
    "composition": {
      "C": 468,
      "H": 483,
      "N": 14,
      "O": 8
    },
    "molarMass": "5877.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12399",
    "formula": "C469H484N15O9",
    "composition": {
      "C": 469,
      "H": 484,
      "N": 15,
      "O": 9
    },
    "molarMass": "5888.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12400",
    "formula": "C470H485N16O10",
    "composition": {
      "C": 470,
      "H": 485,
      "N": 16,
      "O": 10
    },
    "molarMass": "5900.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12401",
    "formula": "C471H486N17O11",
    "composition": {
      "C": 471,
      "H": 486,
      "N": 17,
      "O": 11
    },
    "molarMass": "5911.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12402",
    "formula": "C472H487N18O12",
    "composition": {
      "C": 472,
      "H": 487,
      "N": 18,
      "O": 12
    },
    "molarMass": "5923.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12403",
    "formula": "C473H488N19O13",
    "composition": {
      "C": 473,
      "H": 488,
      "N": 19,
      "O": 13
    },
    "molarMass": "5934.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12404",
    "formula": "C474H489N20O14",
    "composition": {
      "C": 474,
      "H": 489,
      "N": 20,
      "O": 14
    },
    "molarMass": "5946.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12405",
    "formula": "C475H490N21O15",
    "composition": {
      "C": 475,
      "H": 490,
      "N": 21,
      "O": 15
    },
    "molarMass": "5957.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12406",
    "formula": "C476H491N22O16",
    "composition": {
      "C": 476,
      "H": 491,
      "N": 22,
      "O": 16
    },
    "molarMass": "5969.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12407",
    "formula": "C477H492N23O17",
    "composition": {
      "C": 477,
      "H": 492,
      "N": 23,
      "O": 17
    },
    "molarMass": "5980.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12408",
    "formula": "C478H493N24O18",
    "composition": {
      "C": 478,
      "H": 493,
      "N": 24,
      "O": 18
    },
    "molarMass": "5992.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12409",
    "formula": "C479H494N25O19",
    "composition": {
      "C": 479,
      "H": 494,
      "N": 25,
      "O": 19
    },
    "molarMass": "6003.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12410",
    "formula": "C480H495N26O20",
    "composition": {
      "C": 480,
      "H": 495,
      "N": 26,
      "O": 20
    },
    "molarMass": "6015.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12411",
    "formula": "C481H496N27O21",
    "composition": {
      "C": 481,
      "H": 496,
      "N": 27,
      "O": 21
    },
    "molarMass": "6026.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12412",
    "formula": "C482H497N28O22",
    "composition": {
      "C": 482,
      "H": 497,
      "N": 28,
      "O": 22
    },
    "molarMass": "6038.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12413",
    "formula": "C483H498N29O23",
    "composition": {
      "C": 483,
      "H": 498,
      "N": 29,
      "O": 23
    },
    "molarMass": "6049.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12414",
    "formula": "C484H499N30O24",
    "composition": {
      "C": 484,
      "H": 499,
      "N": 30,
      "O": 24
    },
    "molarMass": "6061.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12415",
    "formula": "C485H500N31O25",
    "composition": {
      "C": 485,
      "H": 500,
      "N": 31,
      "O": 25
    },
    "molarMass": "6072.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12416",
    "formula": "C486H501N0O26",
    "composition": {
      "C": 486,
      "H": 501,
      "N": 0,
      "O": 26
    },
    "molarMass": "6084.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12417",
    "formula": "C487H502N1O27",
    "composition": {
      "C": 487,
      "H": 502,
      "N": 1,
      "O": 27
    },
    "molarMass": "6095.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12418",
    "formula": "C488H503N2O28",
    "composition": {
      "C": 488,
      "H": 503,
      "N": 2,
      "O": 28
    },
    "molarMass": "6107.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12419",
    "formula": "C489H504N3O29",
    "composition": {
      "C": 489,
      "H": 504,
      "N": 3,
      "O": 29
    },
    "molarMass": "6118.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12420",
    "formula": "C490H505N4O0",
    "composition": {
      "C": 490,
      "H": 505,
      "N": 4,
      "O": 0
    },
    "molarMass": "6130.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12421",
    "formula": "C491H506N5O1",
    "composition": {
      "C": 491,
      "H": 506,
      "N": 5,
      "O": 1
    },
    "molarMass": "6141.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12422",
    "formula": "C492H507N6O2",
    "composition": {
      "C": 492,
      "H": 507,
      "N": 6,
      "O": 2
    },
    "molarMass": "6153.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12423",
    "formula": "C493H508N7O3",
    "composition": {
      "C": 493,
      "H": 508,
      "N": 7,
      "O": 3
    },
    "molarMass": "6164.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12424",
    "formula": "C494H509N8O4",
    "composition": {
      "C": 494,
      "H": 509,
      "N": 8,
      "O": 4
    },
    "molarMass": "6176.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12425",
    "formula": "C495H510N9O5",
    "composition": {
      "C": 495,
      "H": 510,
      "N": 9,
      "O": 5
    },
    "molarMass": "6187.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12426",
    "formula": "C496H511N10O6",
    "composition": {
      "C": 496,
      "H": 511,
      "N": 10,
      "O": 6
    },
    "molarMass": "6199.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12427",
    "formula": "C497H512N11O7",
    "composition": {
      "C": 497,
      "H": 512,
      "N": 11,
      "O": 7
    },
    "molarMass": "6210.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12428",
    "formula": "C498H513N12O8",
    "composition": {
      "C": 498,
      "H": 513,
      "N": 12,
      "O": 8
    },
    "molarMass": "6222.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12429",
    "formula": "C499H514N13O9",
    "composition": {
      "C": 499,
      "H": 514,
      "N": 13,
      "O": 9
    },
    "molarMass": "6233.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12430",
    "formula": "C500H515N14O10",
    "composition": {
      "C": 500,
      "H": 515,
      "N": 14,
      "O": 10
    },
    "molarMass": "6245.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12431",
    "formula": "C501H516N15O11",
    "composition": {
      "C": 501,
      "H": 516,
      "N": 15,
      "O": 11
    },
    "molarMass": "6256.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12432",
    "formula": "C502H517N16O12",
    "composition": {
      "C": 502,
      "H": 517,
      "N": 16,
      "O": 12
    },
    "molarMass": "6268.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12433",
    "formula": "C503H518N17O13",
    "composition": {
      "C": 503,
      "H": 518,
      "N": 17,
      "O": 13
    },
    "molarMass": "6279.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12434",
    "formula": "C504H519N18O14",
    "composition": {
      "C": 504,
      "H": 519,
      "N": 18,
      "O": 14
    },
    "molarMass": "6291.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12435",
    "formula": "C505H520N19O15",
    "composition": {
      "C": 505,
      "H": 520,
      "N": 19,
      "O": 15
    },
    "molarMass": "6302.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12436",
    "formula": "C506H521N20O16",
    "composition": {
      "C": 506,
      "H": 521,
      "N": 20,
      "O": 16
    },
    "molarMass": "6314.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12437",
    "formula": "C507H522N21O17",
    "composition": {
      "C": 507,
      "H": 522,
      "N": 21,
      "O": 17
    },
    "molarMass": "6325.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12438",
    "formula": "C508H523N22O18",
    "composition": {
      "C": 508,
      "H": 523,
      "N": 22,
      "O": 18
    },
    "molarMass": "6337.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12439",
    "formula": "C509H524N23O19",
    "composition": {
      "C": 509,
      "H": 524,
      "N": 23,
      "O": 19
    },
    "molarMass": "6348.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12440",
    "formula": "C510H525N24O20",
    "composition": {
      "C": 510,
      "H": 525,
      "N": 24,
      "O": 20
    },
    "molarMass": "6360.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12441",
    "formula": "C511H526N25O21",
    "composition": {
      "C": 511,
      "H": 526,
      "N": 25,
      "O": 21
    },
    "molarMass": "6371.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12442",
    "formula": "C512H527N26O22",
    "composition": {
      "C": 512,
      "H": 527,
      "N": 26,
      "O": 22
    },
    "molarMass": "6383.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12443",
    "formula": "C513H528N27O23",
    "composition": {
      "C": 513,
      "H": 528,
      "N": 27,
      "O": 23
    },
    "molarMass": "6394.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12444",
    "formula": "C514H529N28O24",
    "composition": {
      "C": 514,
      "H": 529,
      "N": 28,
      "O": 24
    },
    "molarMass": "6406.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12445",
    "formula": "C515H530N29O25",
    "composition": {
      "C": 515,
      "H": 530,
      "N": 29,
      "O": 25
    },
    "molarMass": "6417.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12446",
    "formula": "C516H531N30O26",
    "composition": {
      "C": 516,
      "H": 531,
      "N": 30,
      "O": 26
    },
    "molarMass": "6429.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12447",
    "formula": "C517H532N31O27",
    "composition": {
      "C": 517,
      "H": 532,
      "N": 31,
      "O": 27
    },
    "molarMass": "6440.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12448",
    "formula": "C518H533N0O28",
    "composition": {
      "C": 518,
      "H": 533,
      "N": 0,
      "O": 28
    },
    "molarMass": "6452.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12449",
    "formula": "C519H534N1O29",
    "composition": {
      "C": 519,
      "H": 534,
      "N": 1,
      "O": 29
    },
    "molarMass": "6463.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12450",
    "formula": "C520H535N2O0",
    "composition": {
      "C": 520,
      "H": 535,
      "N": 2,
      "O": 0
    },
    "molarMass": "6475.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12451",
    "formula": "C521H536N3O1",
    "composition": {
      "C": 521,
      "H": 536,
      "N": 3,
      "O": 1
    },
    "molarMass": "6486.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12452",
    "formula": "C522H537N4O2",
    "composition": {
      "C": 522,
      "H": 537,
      "N": 4,
      "O": 2
    },
    "molarMass": "6498.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12453",
    "formula": "C523H538N5O3",
    "composition": {
      "C": 523,
      "H": 538,
      "N": 5,
      "O": 3
    },
    "molarMass": "6509.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12454",
    "formula": "C524H539N6O4",
    "composition": {
      "C": 524,
      "H": 539,
      "N": 6,
      "O": 4
    },
    "molarMass": "6521.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12455",
    "formula": "C525H540N7O5",
    "composition": {
      "C": 525,
      "H": 540,
      "N": 7,
      "O": 5
    },
    "molarMass": "6532.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12456",
    "formula": "C526H541N8O6",
    "composition": {
      "C": 526,
      "H": 541,
      "N": 8,
      "O": 6
    },
    "molarMass": "6544.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12457",
    "formula": "C527H542N9O7",
    "composition": {
      "C": 527,
      "H": 542,
      "N": 9,
      "O": 7
    },
    "molarMass": "6555.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12458",
    "formula": "C528H543N10O8",
    "composition": {
      "C": 528,
      "H": 543,
      "N": 10,
      "O": 8
    },
    "molarMass": "6567.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12459",
    "formula": "C529H544N11O9",
    "composition": {
      "C": 529,
      "H": 544,
      "N": 11,
      "O": 9
    },
    "molarMass": "6578.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12460",
    "formula": "C530H545N12O10",
    "composition": {
      "C": 530,
      "H": 545,
      "N": 12,
      "O": 10
    },
    "molarMass": "6590.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12461",
    "formula": "C531H546N13O11",
    "composition": {
      "C": 531,
      "H": 546,
      "N": 13,
      "O": 11
    },
    "molarMass": "6601.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12462",
    "formula": "C532H547N14O12",
    "composition": {
      "C": 532,
      "H": 547,
      "N": 14,
      "O": 12
    },
    "molarMass": "6613.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12463",
    "formula": "C533H548N15O13",
    "composition": {
      "C": 533,
      "H": 548,
      "N": 15,
      "O": 13
    },
    "molarMass": "6624.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12464",
    "formula": "C534H549N16O14",
    "composition": {
      "C": 534,
      "H": 549,
      "N": 16,
      "O": 14
    },
    "molarMass": "6636.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12465",
    "formula": "C535H550N17O15",
    "composition": {
      "C": 535,
      "H": 550,
      "N": 17,
      "O": 15
    },
    "molarMass": "6647.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12466",
    "formula": "C536H551N18O16",
    "composition": {
      "C": 536,
      "H": 551,
      "N": 18,
      "O": 16
    },
    "molarMass": "6659.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12467",
    "formula": "C537H552N19O17",
    "composition": {
      "C": 537,
      "H": 552,
      "N": 19,
      "O": 17
    },
    "molarMass": "6670.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12468",
    "formula": "C538H553N20O18",
    "composition": {
      "C": 538,
      "H": 553,
      "N": 20,
      "O": 18
    },
    "molarMass": "6682.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12469",
    "formula": "C539H554N21O19",
    "composition": {
      "C": 539,
      "H": 554,
      "N": 21,
      "O": 19
    },
    "molarMass": "6693.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12470",
    "formula": "C540H555N22O20",
    "composition": {
      "C": 540,
      "H": 555,
      "N": 22,
      "O": 20
    },
    "molarMass": "6705.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12471",
    "formula": "C541H556N23O21",
    "composition": {
      "C": 541,
      "H": 556,
      "N": 23,
      "O": 21
    },
    "molarMass": "6716.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12472",
    "formula": "C542H557N24O22",
    "composition": {
      "C": 542,
      "H": 557,
      "N": 24,
      "O": 22
    },
    "molarMass": "6728.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12473",
    "formula": "C543H558N25O23",
    "composition": {
      "C": 543,
      "H": 558,
      "N": 25,
      "O": 23
    },
    "molarMass": "6739.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12474",
    "formula": "C544H559N26O24",
    "composition": {
      "C": 544,
      "H": 559,
      "N": 26,
      "O": 24
    },
    "molarMass": "6751.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12475",
    "formula": "C545H560N27O25",
    "composition": {
      "C": 545,
      "H": 560,
      "N": 27,
      "O": 25
    },
    "molarMass": "6762.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12476",
    "formula": "C546H561N28O26",
    "composition": {
      "C": 546,
      "H": 561,
      "N": 28,
      "O": 26
    },
    "molarMass": "6774.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12477",
    "formula": "C547H562N29O27",
    "composition": {
      "C": 547,
      "H": 562,
      "N": 29,
      "O": 27
    },
    "molarMass": "6785.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12478",
    "formula": "C548H563N30O28",
    "composition": {
      "C": 548,
      "H": 563,
      "N": 30,
      "O": 28
    },
    "molarMass": "6797.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12479",
    "formula": "C549H564N31O29",
    "composition": {
      "C": 549,
      "H": 564,
      "N": 31,
      "O": 29
    },
    "molarMass": "6808.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12480",
    "formula": "C550H565N0O0",
    "composition": {
      "C": 550,
      "H": 565,
      "N": 0,
      "O": 0
    },
    "molarMass": "6820.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12481",
    "formula": "C551H566N1O1",
    "composition": {
      "C": 551,
      "H": 566,
      "N": 1,
      "O": 1
    },
    "molarMass": "6831.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12482",
    "formula": "C552H567N2O2",
    "composition": {
      "C": 552,
      "H": 567,
      "N": 2,
      "O": 2
    },
    "molarMass": "6843.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12483",
    "formula": "C553H568N3O3",
    "composition": {
      "C": 553,
      "H": 568,
      "N": 3,
      "O": 3
    },
    "molarMass": "6854.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12484",
    "formula": "C554H569N4O4",
    "composition": {
      "C": 554,
      "H": 569,
      "N": 4,
      "O": 4
    },
    "molarMass": "6866.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12485",
    "formula": "C555H570N5O5",
    "composition": {
      "C": 555,
      "H": 570,
      "N": 5,
      "O": 5
    },
    "molarMass": "6877.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12486",
    "formula": "C556H571N6O6",
    "composition": {
      "C": 556,
      "H": 571,
      "N": 6,
      "O": 6
    },
    "molarMass": "6889.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Agent de passivation de surface Epsilon-12487",
    "formula": "C557H572N7O7",
    "composition": {
      "C": 557,
      "H": 572,
      "N": 7,
      "O": 7
    },
    "molarMass": "6900.50 g/mol",
    "category": "Agent de passivation de surface",
    "summary": "Spécimen certifié de grade industriel pour la branche des agent de passivation de surfaces.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Inhibiteur de PARP Epsilon-12488",
    "formula": "C558H573N8O8",
    "composition": {
      "C": 558,
      "H": 573,
      "N": 8,
      "O": 8
    },
    "molarMass": "6912.00 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Spécimen certifié de grade industriel pour la branche des inhibiteur de parps.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Anticoagulant Oral Direct (AOD) Epsilon-12489",
    "formula": "C559H574N9O9",
    "composition": {
      "C": 559,
      "H": 574,
      "N": 9,
      "O": 9
    },
    "molarMass": "6923.50 g/mol",
    "category": "Anticoagulant Oral Direct (AOD)",
    "summary": "Spécimen certifié de grade industriel pour la branche des anticoagulant oral direct (aod)s.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  },
  {
    "name": "Matériau de stockage d'hydrogène Epsilon-12490",
    "formula": "C560H575N10O10",
    "composition": {
      "C": 560,
      "H": 575,
      "N": 10,
      "O": 10
    },
    "molarMass": "6935.00 g/mol",
    "category": "Matériau de stockage d'hydrogène",
    "summary": "Spécimen certifié de grade industriel pour la branche des matériau de stockage d'hydrogènes.",
    "occurrence": "Synthèse contrôlée de haute pureté.",
    "applications": [
      "Recherche avancée",
      "Technologies de rupture"
    ]
  }
];
