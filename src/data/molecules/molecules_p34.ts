import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série 34
 * Focus: Thérapies géniques (siRNA/Oligonucléotides), Cristaux liquides, Traceurs PET, Inhibiteurs de CYP
 * Copyright: Sébastien John Bruneau
 */
export const MOLECULES_P34: MoleculeDefinition[] = [
  {
    "name": "Nusinersen",
    "formula": "C₂₃₄H₃₄₀N₆₁O₁₂₈P₁₇S₁₇",
    "composition": {
      "C": 234,
      "H": 340,
      "N": 61,
      "O": 128,
      "P": 17,
      "S": 17
    },
    "molarMass": "7126.96 g/mol",
    "category": "Oligonucléotide",
    "summary": "Médicament de thérapie génique utilisé pour l'amyotrophie spinale.",
    "occurrence": "Synthèse chimique solide.",
    "applications": [
      "Neurologie",
      "Génétique"
    ]
  },
  {
    "name": "Éteplirsen",
    "formula": "C₂₀₉H₃₂₈N₁₀₆O₆₁P₂₀",
    "composition": {
      "C": 209,
      "H": 328,
      "N": 106,
      "O": 61,
      "P": 20
    },
    "molarMass": "5944.30 g/mol",
    "category": "Morpholino oligomer",
    "summary": "Utilisé pour le traitement de la dystrophie musculaire de Duchenne.",
    "occurrence": "Synthétique.",
    "applications": [
      "Maladies rares"
    ]
  },
  {
    "name": "MBBA",
    "formula": "C₁₈H₂₁NO",
    "composition": {
      "C": 18,
      "H": 21,
      "N": 1,
      "O": 1
    },
    "molarMass": "267.37 g/mol",
    "category": "Cristal liquide",
    "summary": "Composé organique formant une phase nématique à température ambiante.",
    "occurrence": "Synthétique.",
    "applications": [
      "Affichage LCD",
      "Optique"
    ]
  },
  {
    "name": "5-Cyanobiphényl (5CB)",
    "formula": "C₁₉H₂₁N",
    "composition": {
      "C": 19,
      "H": 21,
      "N": 1
    },
    "molarMass": "263.38 g/mol",
    "category": "Cristal liquide biphényle",
    "summary": "Matériau cristal liquide classique utilisé dans les premières générations d'écrans.",
    "occurrence": "Synthétique.",
    "applications": [
      "Écrans",
      "Photronique"
    ]
  },
  {
    "name": "Fludésoxyglucose (18F)",
    "formula": "C₆H₁₁¹⁸FO₅",
    "composition": {
      "C": 6,
      "H": 11,
      "F": 1,
      "O": 5
    },
    "molarMass": "181.15 g/mol",
    "category": "Radiopharmaceutique",
    "summary": "Analogue du glucose marqué utilisé pour l'imagerie TEP (PET scan).",
    "occurrence": "Synthèse en cyclotron.",
    "applications": [
      "Oncologie",
      "Neurologie"
    ]
  },
  {
    "name": "Florbétapir (18F)",
    "formula": "C₂₀H₂₅¹⁸FN₂O₄",
    "composition": {
      "C": 20,
      "H": 25,
      "F": 1,
      "N": 2,
      "O": 4
    },
    "molarMass": "375.43 g/mol",
    "category": "Marqueur amyloïde",
    "summary": "Agent d'imagerie TEP pour la détection des plaques de béta-amyloïde (Alzheimer).",
    "occurrence": "Laboratoire de médecine nucléaire.",
    "applications": [
      "Maladie d'Alzheimer",
      "Imagerie médicale"
    ]
  },
  {
    "name": "Miconazole",
    "formula": "C₁₈H₁₄Cl₄N₂O",
    "composition": {
      "C": 18,
      "H": 14,
      "Cl": 4,
      "N": 2,
      "O": 1
    },
    "molarMass": "416.13 g/mol",
    "category": "Antifongique / Inhibiteur de CYP450",
    "summary": "Agent antifongique à large spectre, inhibiteur puissant de plusieurs cytochromes.",
    "occurrence": "Synthétique.",
    "applications": [
      "Dermatologie",
      "Pharmacologie"
    ]
  },
  {
    "name": "Kétoconazole",
    "formula": "C₂₆H₂₈Cl₂N₄O₄",
    "composition": {
      "C": 26,
      "H": 28,
      "Cl": 2,
      "N": 4,
      "O": 4
    },
    "molarMass": "531.43 g/mol",
    "category": "Inhibiteur de CYP3A4",
    "summary": "Antibiotique azolé utilisé comme référence pour les interactions médicamenteuses.",
    "occurrence": "Synthétique.",
    "applications": [
      "Infectiologie",
      "Études d'interactions"
    ]
  },
  {
    "name": "Givosiran",
    "formula": "C₅₂₄H₇₀₀N₇₄O₃₀₈P₃₁S₃₁",
    "composition": {
      "C": 524,
      "H": 700,
      "N": 74,
      "O": 308,
      "P": 31,
      "S": 31
    },
    "molarMass": "16352.00 g/mol",
    "category": "siRNA",
    "summary": "Petit ARN interférant utilisé pour la porphyrie hépatique aiguë.",
    "occurrence": "Biotechnologie.",
    "applications": [
      "Hépathologie",
      "Génétique"
    ]
  },
  {
    "name": "Patisiran",
    "formula": "C₄₅₁H₅₉₀N₁₄₇O₃₂₀P₄₁",
    "composition": {
      "C": 451,
      "H": 590,
      "N": 147,
      "O": 320,
      "P": 41
    },
    "molarMass": "14298.00 g/mol",
    "category": "siRNA",
    "summary": "Traitement par interférence ARN pour l'amylose héréditaire à transthyrétine.",
    "occurrence": "Biotechnologie.",
    "applications": [
      "Neurologie"
    ]
  },
  {
    "name": "Cristal liquide Mu-4001",
    "formula": "C31H46N1O1",
    "composition": {
      "C": 31,
      "H": 46,
      "N": 1,
      "O": 1
    },
    "molarMass": "503.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4002",
    "formula": "C32H47N2O2",
    "composition": {
      "C": 32,
      "H": 47,
      "N": 2,
      "O": 2
    },
    "molarMass": "506.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4003",
    "formula": "C33H48N3O3",
    "composition": {
      "C": 33,
      "H": 48,
      "N": 3,
      "O": 3
    },
    "molarMass": "509.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4004",
    "formula": "C34H49N4O4",
    "composition": {
      "C": 34,
      "H": 49,
      "N": 4,
      "O": 4
    },
    "molarMass": "512.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4005",
    "formula": "C35H50N5O5",
    "composition": {
      "C": 35,
      "H": 50,
      "N": 5,
      "O": 5
    },
    "molarMass": "516.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4006",
    "formula": "C36H51N6O6",
    "composition": {
      "C": 36,
      "H": 51,
      "N": 6,
      "O": 6
    },
    "molarMass": "519.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4007",
    "formula": "C37H52N7O7",
    "composition": {
      "C": 37,
      "H": 52,
      "N": 7,
      "O": 7
    },
    "molarMass": "522.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4008",
    "formula": "C38H53N8O8",
    "composition": {
      "C": 38,
      "H": 53,
      "N": 8,
      "O": 8
    },
    "molarMass": "525.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4009",
    "formula": "C39H54N9O9",
    "composition": {
      "C": 39,
      "H": 54,
      "N": 9,
      "O": 9
    },
    "molarMass": "528.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4010",
    "formula": "C40H55N10O0",
    "composition": {
      "C": 40,
      "H": 55,
      "N": 10,
      "O": 0
    },
    "molarMass": "532.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4011",
    "formula": "C41H56N11O1",
    "composition": {
      "C": 41,
      "H": 56,
      "N": 11,
      "O": 1
    },
    "molarMass": "535.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4012",
    "formula": "C42H57N0O2",
    "composition": {
      "C": 42,
      "H": 57,
      "N": 0,
      "O": 2
    },
    "molarMass": "538.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4013",
    "formula": "C43H58N1O3",
    "composition": {
      "C": 43,
      "H": 58,
      "N": 1,
      "O": 3
    },
    "molarMass": "541.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4014",
    "formula": "C44H59N2O4",
    "composition": {
      "C": 44,
      "H": 59,
      "N": 2,
      "O": 4
    },
    "molarMass": "544.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4015",
    "formula": "C45H60N3O5",
    "composition": {
      "C": 45,
      "H": 60,
      "N": 3,
      "O": 5
    },
    "molarMass": "548.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4016",
    "formula": "C46H61N4O6",
    "composition": {
      "C": 46,
      "H": 61,
      "N": 4,
      "O": 6
    },
    "molarMass": "551.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4017",
    "formula": "C47H62N5O7",
    "composition": {
      "C": 47,
      "H": 62,
      "N": 5,
      "O": 7
    },
    "molarMass": "554.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4018",
    "formula": "C48H63N6O8",
    "composition": {
      "C": 48,
      "H": 63,
      "N": 6,
      "O": 8
    },
    "molarMass": "557.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4019",
    "formula": "C49H64N7O9",
    "composition": {
      "C": 49,
      "H": 64,
      "N": 7,
      "O": 9
    },
    "molarMass": "560.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4020",
    "formula": "C50H65N8O0",
    "composition": {
      "C": 50,
      "H": 65,
      "N": 8,
      "O": 0
    },
    "molarMass": "564.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4021",
    "formula": "C51H66N9O1",
    "composition": {
      "C": 51,
      "H": 66,
      "N": 9,
      "O": 1
    },
    "molarMass": "567.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4022",
    "formula": "C52H67N10O2",
    "composition": {
      "C": 52,
      "H": 67,
      "N": 10,
      "O": 2
    },
    "molarMass": "570.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4023",
    "formula": "C53H68N11O3",
    "composition": {
      "C": 53,
      "H": 68,
      "N": 11,
      "O": 3
    },
    "molarMass": "573.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4024",
    "formula": "C54H69N0O4",
    "composition": {
      "C": 54,
      "H": 69,
      "N": 0,
      "O": 4
    },
    "molarMass": "576.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4025",
    "formula": "C55H70N1O5",
    "composition": {
      "C": 55,
      "H": 70,
      "N": 1,
      "O": 5
    },
    "molarMass": "580.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4026",
    "formula": "C56H71N2O6",
    "composition": {
      "C": 56,
      "H": 71,
      "N": 2,
      "O": 6
    },
    "molarMass": "583.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4027",
    "formula": "C57H72N3O7",
    "composition": {
      "C": 57,
      "H": 72,
      "N": 3,
      "O": 7
    },
    "molarMass": "586.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4028",
    "formula": "C58H73N4O8",
    "composition": {
      "C": 58,
      "H": 73,
      "N": 4,
      "O": 8
    },
    "molarMass": "589.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4029",
    "formula": "C59H74N5O9",
    "composition": {
      "C": 59,
      "H": 74,
      "N": 5,
      "O": 9
    },
    "molarMass": "592.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4030",
    "formula": "C60H75N6O0",
    "composition": {
      "C": 60,
      "H": 75,
      "N": 6,
      "O": 0
    },
    "molarMass": "596.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4031",
    "formula": "C61H76N7O1",
    "composition": {
      "C": 61,
      "H": 76,
      "N": 7,
      "O": 1
    },
    "molarMass": "599.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4032",
    "formula": "C62H77N8O2",
    "composition": {
      "C": 62,
      "H": 77,
      "N": 8,
      "O": 2
    },
    "molarMass": "602.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4033",
    "formula": "C63H78N9O3",
    "composition": {
      "C": 63,
      "H": 78,
      "N": 9,
      "O": 3
    },
    "molarMass": "605.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4034",
    "formula": "C64H79N10O4",
    "composition": {
      "C": 64,
      "H": 79,
      "N": 10,
      "O": 4
    },
    "molarMass": "608.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4035",
    "formula": "C65H80N11O5",
    "composition": {
      "C": 65,
      "H": 80,
      "N": 11,
      "O": 5
    },
    "molarMass": "612.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4036",
    "formula": "C66H81N0O6",
    "composition": {
      "C": 66,
      "H": 81,
      "N": 0,
      "O": 6
    },
    "molarMass": "615.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4037",
    "formula": "C67H82N1O7",
    "composition": {
      "C": 67,
      "H": 82,
      "N": 1,
      "O": 7
    },
    "molarMass": "618.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4038",
    "formula": "C68H83N2O8",
    "composition": {
      "C": 68,
      "H": 83,
      "N": 2,
      "O": 8
    },
    "molarMass": "621.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4039",
    "formula": "C69H84N3O9",
    "composition": {
      "C": 69,
      "H": 84,
      "N": 3,
      "O": 9
    },
    "molarMass": "624.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4040",
    "formula": "C70H85N4O0",
    "composition": {
      "C": 70,
      "H": 85,
      "N": 4,
      "O": 0
    },
    "molarMass": "628.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4041",
    "formula": "C71H86N5O1",
    "composition": {
      "C": 71,
      "H": 86,
      "N": 5,
      "O": 1
    },
    "molarMass": "631.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4042",
    "formula": "C72H87N6O2",
    "composition": {
      "C": 72,
      "H": 87,
      "N": 6,
      "O": 2
    },
    "molarMass": "634.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4043",
    "formula": "C73H88N7O3",
    "composition": {
      "C": 73,
      "H": 88,
      "N": 7,
      "O": 3
    },
    "molarMass": "637.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4044",
    "formula": "C74H89N8O4",
    "composition": {
      "C": 74,
      "H": 89,
      "N": 8,
      "O": 4
    },
    "molarMass": "640.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4045",
    "formula": "C75H90N9O5",
    "composition": {
      "C": 75,
      "H": 90,
      "N": 9,
      "O": 5
    },
    "molarMass": "644.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4046",
    "formula": "C76H91N10O6",
    "composition": {
      "C": 76,
      "H": 91,
      "N": 10,
      "O": 6
    },
    "molarMass": "647.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4047",
    "formula": "C77H92N11O7",
    "composition": {
      "C": 77,
      "H": 92,
      "N": 11,
      "O": 7
    },
    "molarMass": "650.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4048",
    "formula": "C78H93N0O8",
    "composition": {
      "C": 78,
      "H": 93,
      "N": 0,
      "O": 8
    },
    "molarMass": "653.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4049",
    "formula": "C79H94N1O9",
    "composition": {
      "C": 79,
      "H": 94,
      "N": 1,
      "O": 9
    },
    "molarMass": "656.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4050",
    "formula": "C80H95N2O0",
    "composition": {
      "C": 80,
      "H": 95,
      "N": 2,
      "O": 0
    },
    "molarMass": "660.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4051",
    "formula": "C81H96N3O1",
    "composition": {
      "C": 81,
      "H": 96,
      "N": 3,
      "O": 1
    },
    "molarMass": "663.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4052",
    "formula": "C82H97N4O2",
    "composition": {
      "C": 82,
      "H": 97,
      "N": 4,
      "O": 2
    },
    "molarMass": "666.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4053",
    "formula": "C83H98N5O3",
    "composition": {
      "C": 83,
      "H": 98,
      "N": 5,
      "O": 3
    },
    "molarMass": "669.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4054",
    "formula": "C84H99N6O4",
    "composition": {
      "C": 84,
      "H": 99,
      "N": 6,
      "O": 4
    },
    "molarMass": "672.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4055",
    "formula": "C85H100N7O5",
    "composition": {
      "C": 85,
      "H": 100,
      "N": 7,
      "O": 5
    },
    "molarMass": "676.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4056",
    "formula": "C86H101N8O6",
    "composition": {
      "C": 86,
      "H": 101,
      "N": 8,
      "O": 6
    },
    "molarMass": "679.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4057",
    "formula": "C87H102N9O7",
    "composition": {
      "C": 87,
      "H": 102,
      "N": 9,
      "O": 7
    },
    "molarMass": "682.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4058",
    "formula": "C88H103N10O8",
    "composition": {
      "C": 88,
      "H": 103,
      "N": 10,
      "O": 8
    },
    "molarMass": "685.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4059",
    "formula": "C89H104N11O9",
    "composition": {
      "C": 89,
      "H": 104,
      "N": 11,
      "O": 9
    },
    "molarMass": "688.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4060",
    "formula": "C90H105N0O0",
    "composition": {
      "C": 90,
      "H": 105,
      "N": 0,
      "O": 0
    },
    "molarMass": "692.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4061",
    "formula": "C91H106N1O1",
    "composition": {
      "C": 91,
      "H": 106,
      "N": 1,
      "O": 1
    },
    "molarMass": "695.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4062",
    "formula": "C92H107N2O2",
    "composition": {
      "C": 92,
      "H": 107,
      "N": 2,
      "O": 2
    },
    "molarMass": "698.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4063",
    "formula": "C93H108N3O3",
    "composition": {
      "C": 93,
      "H": 108,
      "N": 3,
      "O": 3
    },
    "molarMass": "701.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4064",
    "formula": "C94H109N4O4",
    "composition": {
      "C": 94,
      "H": 109,
      "N": 4,
      "O": 4
    },
    "molarMass": "704.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4065",
    "formula": "C95H110N5O5",
    "composition": {
      "C": 95,
      "H": 110,
      "N": 5,
      "O": 5
    },
    "molarMass": "708.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4066",
    "formula": "C96H111N6O6",
    "composition": {
      "C": 96,
      "H": 111,
      "N": 6,
      "O": 6
    },
    "molarMass": "711.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4067",
    "formula": "C97H112N7O7",
    "composition": {
      "C": 97,
      "H": 112,
      "N": 7,
      "O": 7
    },
    "molarMass": "714.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4068",
    "formula": "C98H113N8O8",
    "composition": {
      "C": 98,
      "H": 113,
      "N": 8,
      "O": 8
    },
    "molarMass": "717.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4069",
    "formula": "C99H114N9O9",
    "composition": {
      "C": 99,
      "H": 114,
      "N": 9,
      "O": 9
    },
    "molarMass": "720.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4070",
    "formula": "C100H115N10O0",
    "composition": {
      "C": 100,
      "H": 115,
      "N": 10,
      "O": 0
    },
    "molarMass": "724.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4071",
    "formula": "C101H116N11O1",
    "composition": {
      "C": 101,
      "H": 116,
      "N": 11,
      "O": 1
    },
    "molarMass": "727.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4072",
    "formula": "C102H117N0O2",
    "composition": {
      "C": 102,
      "H": 117,
      "N": 0,
      "O": 2
    },
    "molarMass": "730.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4073",
    "formula": "C103H118N1O3",
    "composition": {
      "C": 103,
      "H": 118,
      "N": 1,
      "O": 3
    },
    "molarMass": "733.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4074",
    "formula": "C104H119N2O4",
    "composition": {
      "C": 104,
      "H": 119,
      "N": 2,
      "O": 4
    },
    "molarMass": "736.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4075",
    "formula": "C105H120N3O5",
    "composition": {
      "C": 105,
      "H": 120,
      "N": 3,
      "O": 5
    },
    "molarMass": "740.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4076",
    "formula": "C106H121N4O6",
    "composition": {
      "C": 106,
      "H": 121,
      "N": 4,
      "O": 6
    },
    "molarMass": "743.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4077",
    "formula": "C107H122N5O7",
    "composition": {
      "C": 107,
      "H": 122,
      "N": 5,
      "O": 7
    },
    "molarMass": "746.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4078",
    "formula": "C108H123N6O8",
    "composition": {
      "C": 108,
      "H": 123,
      "N": 6,
      "O": 8
    },
    "molarMass": "749.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4079",
    "formula": "C109H124N7O9",
    "composition": {
      "C": 109,
      "H": 124,
      "N": 7,
      "O": 9
    },
    "molarMass": "752.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4080",
    "formula": "C110H125N8O0",
    "composition": {
      "C": 110,
      "H": 125,
      "N": 8,
      "O": 0
    },
    "molarMass": "756.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4081",
    "formula": "C111H126N9O1",
    "composition": {
      "C": 111,
      "H": 126,
      "N": 9,
      "O": 1
    },
    "molarMass": "759.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4082",
    "formula": "C112H127N10O2",
    "composition": {
      "C": 112,
      "H": 127,
      "N": 10,
      "O": 2
    },
    "molarMass": "762.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4083",
    "formula": "C113H128N11O3",
    "composition": {
      "C": 113,
      "H": 128,
      "N": 11,
      "O": 3
    },
    "molarMass": "765.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4084",
    "formula": "C114H129N0O4",
    "composition": {
      "C": 114,
      "H": 129,
      "N": 0,
      "O": 4
    },
    "molarMass": "768.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4085",
    "formula": "C115H130N1O5",
    "composition": {
      "C": 115,
      "H": 130,
      "N": 1,
      "O": 5
    },
    "molarMass": "772.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4086",
    "formula": "C116H131N2O6",
    "composition": {
      "C": 116,
      "H": 131,
      "N": 2,
      "O": 6
    },
    "molarMass": "775.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4087",
    "formula": "C117H132N3O7",
    "composition": {
      "C": 117,
      "H": 132,
      "N": 3,
      "O": 7
    },
    "molarMass": "778.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4088",
    "formula": "C118H133N4O8",
    "composition": {
      "C": 118,
      "H": 133,
      "N": 4,
      "O": 8
    },
    "molarMass": "781.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4089",
    "formula": "C119H134N5O9",
    "composition": {
      "C": 119,
      "H": 134,
      "N": 5,
      "O": 9
    },
    "molarMass": "784.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4090",
    "formula": "C120H135N6O0",
    "composition": {
      "C": 120,
      "H": 135,
      "N": 6,
      "O": 0
    },
    "molarMass": "788.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4091",
    "formula": "C121H136N7O1",
    "composition": {
      "C": 121,
      "H": 136,
      "N": 7,
      "O": 1
    },
    "molarMass": "791.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4092",
    "formula": "C122H137N8O2",
    "composition": {
      "C": 122,
      "H": 137,
      "N": 8,
      "O": 2
    },
    "molarMass": "794.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4093",
    "formula": "C123H138N9O3",
    "composition": {
      "C": 123,
      "H": 138,
      "N": 9,
      "O": 3
    },
    "molarMass": "797.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4094",
    "formula": "C124H139N10O4",
    "composition": {
      "C": 124,
      "H": 139,
      "N": 10,
      "O": 4
    },
    "molarMass": "800.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4095",
    "formula": "C125H140N11O5",
    "composition": {
      "C": 125,
      "H": 140,
      "N": 11,
      "O": 5
    },
    "molarMass": "804.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4096",
    "formula": "C126H141N0O6",
    "composition": {
      "C": 126,
      "H": 141,
      "N": 0,
      "O": 6
    },
    "molarMass": "807.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4097",
    "formula": "C127H142N1O7",
    "composition": {
      "C": 127,
      "H": 142,
      "N": 1,
      "O": 7
    },
    "molarMass": "810.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4098",
    "formula": "C128H143N2O8",
    "composition": {
      "C": 128,
      "H": 143,
      "N": 2,
      "O": 8
    },
    "molarMass": "813.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4099",
    "formula": "C129H144N3O9",
    "composition": {
      "C": 129,
      "H": 144,
      "N": 3,
      "O": 9
    },
    "molarMass": "816.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4100",
    "formula": "C130H145N4O0",
    "composition": {
      "C": 130,
      "H": 145,
      "N": 4,
      "O": 0
    },
    "molarMass": "820.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4101",
    "formula": "C131H146N5O1",
    "composition": {
      "C": 131,
      "H": 146,
      "N": 5,
      "O": 1
    },
    "molarMass": "823.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4102",
    "formula": "C132H147N6O2",
    "composition": {
      "C": 132,
      "H": 147,
      "N": 6,
      "O": 2
    },
    "molarMass": "826.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4103",
    "formula": "C133H148N7O3",
    "composition": {
      "C": 133,
      "H": 148,
      "N": 7,
      "O": 3
    },
    "molarMass": "829.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4104",
    "formula": "C134H149N8O4",
    "composition": {
      "C": 134,
      "H": 149,
      "N": 8,
      "O": 4
    },
    "molarMass": "832.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4105",
    "formula": "C135H150N9O5",
    "composition": {
      "C": 135,
      "H": 150,
      "N": 9,
      "O": 5
    },
    "molarMass": "836.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4106",
    "formula": "C136H151N10O6",
    "composition": {
      "C": 136,
      "H": 151,
      "N": 10,
      "O": 6
    },
    "molarMass": "839.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4107",
    "formula": "C137H152N11O7",
    "composition": {
      "C": 137,
      "H": 152,
      "N": 11,
      "O": 7
    },
    "molarMass": "842.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4108",
    "formula": "C138H153N0O8",
    "composition": {
      "C": 138,
      "H": 153,
      "N": 0,
      "O": 8
    },
    "molarMass": "845.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4109",
    "formula": "C139H154N1O9",
    "composition": {
      "C": 139,
      "H": 154,
      "N": 1,
      "O": 9
    },
    "molarMass": "848.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4110",
    "formula": "C140H155N2O0",
    "composition": {
      "C": 140,
      "H": 155,
      "N": 2,
      "O": 0
    },
    "molarMass": "852.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4111",
    "formula": "C141H156N3O1",
    "composition": {
      "C": 141,
      "H": 156,
      "N": 3,
      "O": 1
    },
    "molarMass": "855.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4112",
    "formula": "C142H157N4O2",
    "composition": {
      "C": 142,
      "H": 157,
      "N": 4,
      "O": 2
    },
    "molarMass": "858.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4113",
    "formula": "C143H158N5O3",
    "composition": {
      "C": 143,
      "H": 158,
      "N": 5,
      "O": 3
    },
    "molarMass": "861.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4114",
    "formula": "C144H159N6O4",
    "composition": {
      "C": 144,
      "H": 159,
      "N": 6,
      "O": 4
    },
    "molarMass": "864.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4115",
    "formula": "C145H160N7O5",
    "composition": {
      "C": 145,
      "H": 160,
      "N": 7,
      "O": 5
    },
    "molarMass": "868.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4116",
    "formula": "C146H161N8O6",
    "composition": {
      "C": 146,
      "H": 161,
      "N": 8,
      "O": 6
    },
    "molarMass": "871.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4117",
    "formula": "C147H162N9O7",
    "composition": {
      "C": 147,
      "H": 162,
      "N": 9,
      "O": 7
    },
    "molarMass": "874.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4118",
    "formula": "C148H163N10O8",
    "composition": {
      "C": 148,
      "H": 163,
      "N": 10,
      "O": 8
    },
    "molarMass": "877.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4119",
    "formula": "C149H164N11O9",
    "composition": {
      "C": 149,
      "H": 164,
      "N": 11,
      "O": 9
    },
    "molarMass": "880.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4120",
    "formula": "C150H165N0O0",
    "composition": {
      "C": 150,
      "H": 165,
      "N": 0,
      "O": 0
    },
    "molarMass": "884.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4121",
    "formula": "C151H166N1O1",
    "composition": {
      "C": 151,
      "H": 166,
      "N": 1,
      "O": 1
    },
    "molarMass": "887.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4122",
    "formula": "C152H167N2O2",
    "composition": {
      "C": 152,
      "H": 167,
      "N": 2,
      "O": 2
    },
    "molarMass": "890.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4123",
    "formula": "C153H168N3O3",
    "composition": {
      "C": 153,
      "H": 168,
      "N": 3,
      "O": 3
    },
    "molarMass": "893.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4124",
    "formula": "C154H169N4O4",
    "composition": {
      "C": 154,
      "H": 169,
      "N": 4,
      "O": 4
    },
    "molarMass": "896.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4125",
    "formula": "C155H170N5O5",
    "composition": {
      "C": 155,
      "H": 170,
      "N": 5,
      "O": 5
    },
    "molarMass": "900.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4126",
    "formula": "C156H171N6O6",
    "composition": {
      "C": 156,
      "H": 171,
      "N": 6,
      "O": 6
    },
    "molarMass": "903.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4127",
    "formula": "C157H172N7O7",
    "composition": {
      "C": 157,
      "H": 172,
      "N": 7,
      "O": 7
    },
    "molarMass": "906.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4128",
    "formula": "C158H173N8O8",
    "composition": {
      "C": 158,
      "H": 173,
      "N": 8,
      "O": 8
    },
    "molarMass": "909.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4129",
    "formula": "C159H174N9O9",
    "composition": {
      "C": 159,
      "H": 174,
      "N": 9,
      "O": 9
    },
    "molarMass": "912.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4130",
    "formula": "C160H175N10O0",
    "composition": {
      "C": 160,
      "H": 175,
      "N": 10,
      "O": 0
    },
    "molarMass": "916.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4131",
    "formula": "C161H176N11O1",
    "composition": {
      "C": 161,
      "H": 176,
      "N": 11,
      "O": 1
    },
    "molarMass": "919.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4132",
    "formula": "C162H177N0O2",
    "composition": {
      "C": 162,
      "H": 177,
      "N": 0,
      "O": 2
    },
    "molarMass": "922.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4133",
    "formula": "C163H178N1O3",
    "composition": {
      "C": 163,
      "H": 178,
      "N": 1,
      "O": 3
    },
    "molarMass": "925.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4134",
    "formula": "C164H179N2O4",
    "composition": {
      "C": 164,
      "H": 179,
      "N": 2,
      "O": 4
    },
    "molarMass": "928.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4135",
    "formula": "C165H180N3O5",
    "composition": {
      "C": 165,
      "H": 180,
      "N": 3,
      "O": 5
    },
    "molarMass": "932.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4136",
    "formula": "C166H181N4O6",
    "composition": {
      "C": 166,
      "H": 181,
      "N": 4,
      "O": 6
    },
    "molarMass": "935.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4137",
    "formula": "C167H182N5O7",
    "composition": {
      "C": 167,
      "H": 182,
      "N": 5,
      "O": 7
    },
    "molarMass": "938.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4138",
    "formula": "C168H183N6O8",
    "composition": {
      "C": 168,
      "H": 183,
      "N": 6,
      "O": 8
    },
    "molarMass": "941.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4139",
    "formula": "C169H184N7O9",
    "composition": {
      "C": 169,
      "H": 184,
      "N": 7,
      "O": 9
    },
    "molarMass": "944.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4140",
    "formula": "C170H185N8O0",
    "composition": {
      "C": 170,
      "H": 185,
      "N": 8,
      "O": 0
    },
    "molarMass": "948.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4141",
    "formula": "C171H186N9O1",
    "composition": {
      "C": 171,
      "H": 186,
      "N": 9,
      "O": 1
    },
    "molarMass": "951.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4142",
    "formula": "C172H187N10O2",
    "composition": {
      "C": 172,
      "H": 187,
      "N": 10,
      "O": 2
    },
    "molarMass": "954.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4143",
    "formula": "C173H188N11O3",
    "composition": {
      "C": 173,
      "H": 188,
      "N": 11,
      "O": 3
    },
    "molarMass": "957.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4144",
    "formula": "C174H189N0O4",
    "composition": {
      "C": 174,
      "H": 189,
      "N": 0,
      "O": 4
    },
    "molarMass": "960.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4145",
    "formula": "C175H190N1O5",
    "composition": {
      "C": 175,
      "H": 190,
      "N": 1,
      "O": 5
    },
    "molarMass": "964.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4146",
    "formula": "C176H191N2O6",
    "composition": {
      "C": 176,
      "H": 191,
      "N": 2,
      "O": 6
    },
    "molarMass": "967.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4147",
    "formula": "C177H192N3O7",
    "composition": {
      "C": 177,
      "H": 192,
      "N": 3,
      "O": 7
    },
    "molarMass": "970.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4148",
    "formula": "C178H193N4O8",
    "composition": {
      "C": 178,
      "H": 193,
      "N": 4,
      "O": 8
    },
    "molarMass": "973.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4149",
    "formula": "C179H194N5O9",
    "composition": {
      "C": 179,
      "H": 194,
      "N": 5,
      "O": 9
    },
    "molarMass": "976.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4150",
    "formula": "C180H195N6O0",
    "composition": {
      "C": 180,
      "H": 195,
      "N": 6,
      "O": 0
    },
    "molarMass": "980.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4151",
    "formula": "C181H196N7O1",
    "composition": {
      "C": 181,
      "H": 196,
      "N": 7,
      "O": 1
    },
    "molarMass": "983.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4152",
    "formula": "C182H197N8O2",
    "composition": {
      "C": 182,
      "H": 197,
      "N": 8,
      "O": 2
    },
    "molarMass": "986.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4153",
    "formula": "C183H198N9O3",
    "composition": {
      "C": 183,
      "H": 198,
      "N": 9,
      "O": 3
    },
    "molarMass": "989.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4154",
    "formula": "C184H199N10O4",
    "composition": {
      "C": 184,
      "H": 199,
      "N": 10,
      "O": 4
    },
    "molarMass": "992.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4155",
    "formula": "C185H200N11O5",
    "composition": {
      "C": 185,
      "H": 200,
      "N": 11,
      "O": 5
    },
    "molarMass": "996.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4156",
    "formula": "C186H201N0O6",
    "composition": {
      "C": 186,
      "H": 201,
      "N": 0,
      "O": 6
    },
    "molarMass": "999.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4157",
    "formula": "C187H202N1O7",
    "composition": {
      "C": 187,
      "H": 202,
      "N": 1,
      "O": 7
    },
    "molarMass": "1002.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4158",
    "formula": "C188H203N2O8",
    "composition": {
      "C": 188,
      "H": 203,
      "N": 2,
      "O": 8
    },
    "molarMass": "1005.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4159",
    "formula": "C189H204N3O9",
    "composition": {
      "C": 189,
      "H": 204,
      "N": 3,
      "O": 9
    },
    "molarMass": "1008.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4160",
    "formula": "C190H205N4O0",
    "composition": {
      "C": 190,
      "H": 205,
      "N": 4,
      "O": 0
    },
    "molarMass": "1012.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4161",
    "formula": "C191H206N5O1",
    "composition": {
      "C": 191,
      "H": 206,
      "N": 5,
      "O": 1
    },
    "molarMass": "1015.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4162",
    "formula": "C192H207N6O2",
    "composition": {
      "C": 192,
      "H": 207,
      "N": 6,
      "O": 2
    },
    "molarMass": "1018.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4163",
    "formula": "C193H208N7O3",
    "composition": {
      "C": 193,
      "H": 208,
      "N": 7,
      "O": 3
    },
    "molarMass": "1021.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4164",
    "formula": "C194H209N8O4",
    "composition": {
      "C": 194,
      "H": 209,
      "N": 8,
      "O": 4
    },
    "molarMass": "1024.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4165",
    "formula": "C195H210N9O5",
    "composition": {
      "C": 195,
      "H": 210,
      "N": 9,
      "O": 5
    },
    "molarMass": "1028.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4166",
    "formula": "C196H211N10O6",
    "composition": {
      "C": 196,
      "H": 211,
      "N": 10,
      "O": 6
    },
    "molarMass": "1031.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4167",
    "formula": "C197H212N11O7",
    "composition": {
      "C": 197,
      "H": 212,
      "N": 11,
      "O": 7
    },
    "molarMass": "1034.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4168",
    "formula": "C198H213N0O8",
    "composition": {
      "C": 198,
      "H": 213,
      "N": 0,
      "O": 8
    },
    "molarMass": "1037.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4169",
    "formula": "C199H214N1O9",
    "composition": {
      "C": 199,
      "H": 214,
      "N": 1,
      "O": 9
    },
    "molarMass": "1040.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4170",
    "formula": "C200H215N2O0",
    "composition": {
      "C": 200,
      "H": 215,
      "N": 2,
      "O": 0
    },
    "molarMass": "1044.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4171",
    "formula": "C201H216N3O1",
    "composition": {
      "C": 201,
      "H": 216,
      "N": 3,
      "O": 1
    },
    "molarMass": "1047.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4172",
    "formula": "C202H217N4O2",
    "composition": {
      "C": 202,
      "H": 217,
      "N": 4,
      "O": 2
    },
    "molarMass": "1050.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4173",
    "formula": "C203H218N5O3",
    "composition": {
      "C": 203,
      "H": 218,
      "N": 5,
      "O": 3
    },
    "molarMass": "1053.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4174",
    "formula": "C204H219N6O4",
    "composition": {
      "C": 204,
      "H": 219,
      "N": 6,
      "O": 4
    },
    "molarMass": "1056.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4175",
    "formula": "C205H220N7O5",
    "composition": {
      "C": 205,
      "H": 220,
      "N": 7,
      "O": 5
    },
    "molarMass": "1060.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4176",
    "formula": "C206H221N8O6",
    "composition": {
      "C": 206,
      "H": 221,
      "N": 8,
      "O": 6
    },
    "molarMass": "1063.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4177",
    "formula": "C207H222N9O7",
    "composition": {
      "C": 207,
      "H": 222,
      "N": 9,
      "O": 7
    },
    "molarMass": "1066.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4178",
    "formula": "C208H223N10O8",
    "composition": {
      "C": 208,
      "H": 223,
      "N": 10,
      "O": 8
    },
    "molarMass": "1069.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4179",
    "formula": "C209H224N11O9",
    "composition": {
      "C": 209,
      "H": 224,
      "N": 11,
      "O": 9
    },
    "molarMass": "1072.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4180",
    "formula": "C210H225N0O0",
    "composition": {
      "C": 210,
      "H": 225,
      "N": 0,
      "O": 0
    },
    "molarMass": "1076.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4181",
    "formula": "C211H226N1O1",
    "composition": {
      "C": 211,
      "H": 226,
      "N": 1,
      "O": 1
    },
    "molarMass": "1079.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4182",
    "formula": "C212H227N2O2",
    "composition": {
      "C": 212,
      "H": 227,
      "N": 2,
      "O": 2
    },
    "molarMass": "1082.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4183",
    "formula": "C213H228N3O3",
    "composition": {
      "C": 213,
      "H": 228,
      "N": 3,
      "O": 3
    },
    "molarMass": "1085.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4184",
    "formula": "C214H229N4O4",
    "composition": {
      "C": 214,
      "H": 229,
      "N": 4,
      "O": 4
    },
    "molarMass": "1088.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4185",
    "formula": "C215H230N5O5",
    "composition": {
      "C": 215,
      "H": 230,
      "N": 5,
      "O": 5
    },
    "molarMass": "1092.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4186",
    "formula": "C216H231N6O6",
    "composition": {
      "C": 216,
      "H": 231,
      "N": 6,
      "O": 6
    },
    "molarMass": "1095.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4187",
    "formula": "C217H232N7O7",
    "composition": {
      "C": 217,
      "H": 232,
      "N": 7,
      "O": 7
    },
    "molarMass": "1098.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4188",
    "formula": "C218H233N8O8",
    "composition": {
      "C": 218,
      "H": 233,
      "N": 8,
      "O": 8
    },
    "molarMass": "1101.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4189",
    "formula": "C219H234N9O9",
    "composition": {
      "C": 219,
      "H": 234,
      "N": 9,
      "O": 9
    },
    "molarMass": "1104.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4190",
    "formula": "C220H235N10O0",
    "composition": {
      "C": 220,
      "H": 235,
      "N": 10,
      "O": 0
    },
    "molarMass": "1108.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4191",
    "formula": "C221H236N11O1",
    "composition": {
      "C": 221,
      "H": 236,
      "N": 11,
      "O": 1
    },
    "molarMass": "1111.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4192",
    "formula": "C222H237N0O2",
    "composition": {
      "C": 222,
      "H": 237,
      "N": 0,
      "O": 2
    },
    "molarMass": "1114.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4193",
    "formula": "C223H238N1O3",
    "composition": {
      "C": 223,
      "H": 238,
      "N": 1,
      "O": 3
    },
    "molarMass": "1117.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4194",
    "formula": "C224H239N2O4",
    "composition": {
      "C": 224,
      "H": 239,
      "N": 2,
      "O": 4
    },
    "molarMass": "1120.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4195",
    "formula": "C225H240N3O5",
    "composition": {
      "C": 225,
      "H": 240,
      "N": 3,
      "O": 5
    },
    "molarMass": "1124.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4196",
    "formula": "C226H241N4O6",
    "composition": {
      "C": 226,
      "H": 241,
      "N": 4,
      "O": 6
    },
    "molarMass": "1127.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4197",
    "formula": "C227H242N5O7",
    "composition": {
      "C": 227,
      "H": 242,
      "N": 5,
      "O": 7
    },
    "molarMass": "1130.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4198",
    "formula": "C228H243N6O8",
    "composition": {
      "C": 228,
      "H": 243,
      "N": 6,
      "O": 8
    },
    "molarMass": "1133.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4199",
    "formula": "C229H244N7O9",
    "composition": {
      "C": 229,
      "H": 244,
      "N": 7,
      "O": 9
    },
    "molarMass": "1136.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4200",
    "formula": "C230H245N8O0",
    "composition": {
      "C": 230,
      "H": 245,
      "N": 8,
      "O": 0
    },
    "molarMass": "1140.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4201",
    "formula": "C231H246N9O1",
    "composition": {
      "C": 231,
      "H": 246,
      "N": 9,
      "O": 1
    },
    "molarMass": "1143.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4202",
    "formula": "C232H247N10O2",
    "composition": {
      "C": 232,
      "H": 247,
      "N": 10,
      "O": 2
    },
    "molarMass": "1146.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4203",
    "formula": "C233H248N11O3",
    "composition": {
      "C": 233,
      "H": 248,
      "N": 11,
      "O": 3
    },
    "molarMass": "1149.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4204",
    "formula": "C234H249N0O4",
    "composition": {
      "C": 234,
      "H": 249,
      "N": 0,
      "O": 4
    },
    "molarMass": "1152.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4205",
    "formula": "C235H250N1O5",
    "composition": {
      "C": 235,
      "H": 250,
      "N": 1,
      "O": 5
    },
    "molarMass": "1156.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4206",
    "formula": "C236H251N2O6",
    "composition": {
      "C": 236,
      "H": 251,
      "N": 2,
      "O": 6
    },
    "molarMass": "1159.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4207",
    "formula": "C237H252N3O7",
    "composition": {
      "C": 237,
      "H": 252,
      "N": 3,
      "O": 7
    },
    "molarMass": "1162.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4208",
    "formula": "C238H253N4O8",
    "composition": {
      "C": 238,
      "H": 253,
      "N": 4,
      "O": 8
    },
    "molarMass": "1165.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4209",
    "formula": "C239H254N5O9",
    "composition": {
      "C": 239,
      "H": 254,
      "N": 5,
      "O": 9
    },
    "molarMass": "1168.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4210",
    "formula": "C240H255N6O0",
    "composition": {
      "C": 240,
      "H": 255,
      "N": 6,
      "O": 0
    },
    "molarMass": "1172.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4211",
    "formula": "C241H256N7O1",
    "composition": {
      "C": 241,
      "H": 256,
      "N": 7,
      "O": 1
    },
    "molarMass": "1175.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4212",
    "formula": "C242H257N8O2",
    "composition": {
      "C": 242,
      "H": 257,
      "N": 8,
      "O": 2
    },
    "molarMass": "1178.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4213",
    "formula": "C243H258N9O3",
    "composition": {
      "C": 243,
      "H": 258,
      "N": 9,
      "O": 3
    },
    "molarMass": "1181.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4214",
    "formula": "C244H259N10O4",
    "composition": {
      "C": 244,
      "H": 259,
      "N": 10,
      "O": 4
    },
    "molarMass": "1184.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4215",
    "formula": "C245H260N11O5",
    "composition": {
      "C": 245,
      "H": 260,
      "N": 11,
      "O": 5
    },
    "molarMass": "1188.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4216",
    "formula": "C246H261N0O6",
    "composition": {
      "C": 246,
      "H": 261,
      "N": 0,
      "O": 6
    },
    "molarMass": "1191.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4217",
    "formula": "C247H262N1O7",
    "composition": {
      "C": 247,
      "H": 262,
      "N": 1,
      "O": 7
    },
    "molarMass": "1194.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4218",
    "formula": "C248H263N2O8",
    "composition": {
      "C": 248,
      "H": 263,
      "N": 2,
      "O": 8
    },
    "molarMass": "1197.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4219",
    "formula": "C249H264N3O9",
    "composition": {
      "C": 249,
      "H": 264,
      "N": 3,
      "O": 9
    },
    "molarMass": "1200.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4220",
    "formula": "C250H265N4O0",
    "composition": {
      "C": 250,
      "H": 265,
      "N": 4,
      "O": 0
    },
    "molarMass": "1204.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4221",
    "formula": "C251H266N5O1",
    "composition": {
      "C": 251,
      "H": 266,
      "N": 5,
      "O": 1
    },
    "molarMass": "1207.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4222",
    "formula": "C252H267N6O2",
    "composition": {
      "C": 252,
      "H": 267,
      "N": 6,
      "O": 2
    },
    "molarMass": "1210.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4223",
    "formula": "C253H268N7O3",
    "composition": {
      "C": 253,
      "H": 268,
      "N": 7,
      "O": 3
    },
    "molarMass": "1213.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4224",
    "formula": "C254H269N8O4",
    "composition": {
      "C": 254,
      "H": 269,
      "N": 8,
      "O": 4
    },
    "molarMass": "1216.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4225",
    "formula": "C255H270N9O5",
    "composition": {
      "C": 255,
      "H": 270,
      "N": 9,
      "O": 5
    },
    "molarMass": "1220.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4226",
    "formula": "C256H271N10O6",
    "composition": {
      "C": 256,
      "H": 271,
      "N": 10,
      "O": 6
    },
    "molarMass": "1223.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4227",
    "formula": "C257H272N11O7",
    "composition": {
      "C": 257,
      "H": 272,
      "N": 11,
      "O": 7
    },
    "molarMass": "1226.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4228",
    "formula": "C258H273N0O8",
    "composition": {
      "C": 258,
      "H": 273,
      "N": 0,
      "O": 8
    },
    "molarMass": "1229.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4229",
    "formula": "C259H274N1O9",
    "composition": {
      "C": 259,
      "H": 274,
      "N": 1,
      "O": 9
    },
    "molarMass": "1232.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4230",
    "formula": "C260H275N2O0",
    "composition": {
      "C": 260,
      "H": 275,
      "N": 2,
      "O": 0
    },
    "molarMass": "1236.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4231",
    "formula": "C261H276N3O1",
    "composition": {
      "C": 261,
      "H": 276,
      "N": 3,
      "O": 1
    },
    "molarMass": "1239.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4232",
    "formula": "C262H277N4O2",
    "composition": {
      "C": 262,
      "H": 277,
      "N": 4,
      "O": 2
    },
    "molarMass": "1242.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4233",
    "formula": "C263H278N5O3",
    "composition": {
      "C": 263,
      "H": 278,
      "N": 5,
      "O": 3
    },
    "molarMass": "1245.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4234",
    "formula": "C264H279N6O4",
    "composition": {
      "C": 264,
      "H": 279,
      "N": 6,
      "O": 4
    },
    "molarMass": "1248.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4235",
    "formula": "C265H280N7O5",
    "composition": {
      "C": 265,
      "H": 280,
      "N": 7,
      "O": 5
    },
    "molarMass": "1252.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4236",
    "formula": "C266H281N8O6",
    "composition": {
      "C": 266,
      "H": 281,
      "N": 8,
      "O": 6
    },
    "molarMass": "1255.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4237",
    "formula": "C267H282N9O7",
    "composition": {
      "C": 267,
      "H": 282,
      "N": 9,
      "O": 7
    },
    "molarMass": "1258.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4238",
    "formula": "C268H283N10O8",
    "composition": {
      "C": 268,
      "H": 283,
      "N": 10,
      "O": 8
    },
    "molarMass": "1261.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4239",
    "formula": "C269H284N11O9",
    "composition": {
      "C": 269,
      "H": 284,
      "N": 11,
      "O": 9
    },
    "molarMass": "1264.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4240",
    "formula": "C270H285N0O0",
    "composition": {
      "C": 270,
      "H": 285,
      "N": 0,
      "O": 0
    },
    "molarMass": "1268.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4241",
    "formula": "C271H286N1O1",
    "composition": {
      "C": 271,
      "H": 286,
      "N": 1,
      "O": 1
    },
    "molarMass": "1271.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4242",
    "formula": "C272H287N2O2",
    "composition": {
      "C": 272,
      "H": 287,
      "N": 2,
      "O": 2
    },
    "molarMass": "1274.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4243",
    "formula": "C273H288N3O3",
    "composition": {
      "C": 273,
      "H": 288,
      "N": 3,
      "O": 3
    },
    "molarMass": "1277.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4244",
    "formula": "C274H289N4O4",
    "composition": {
      "C": 274,
      "H": 289,
      "N": 4,
      "O": 4
    },
    "molarMass": "1280.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4245",
    "formula": "C275H290N5O5",
    "composition": {
      "C": 275,
      "H": 290,
      "N": 5,
      "O": 5
    },
    "molarMass": "1284.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4246",
    "formula": "C276H291N6O6",
    "composition": {
      "C": 276,
      "H": 291,
      "N": 6,
      "O": 6
    },
    "molarMass": "1287.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4247",
    "formula": "C277H292N7O7",
    "composition": {
      "C": 277,
      "H": 292,
      "N": 7,
      "O": 7
    },
    "molarMass": "1290.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4248",
    "formula": "C278H293N8O8",
    "composition": {
      "C": 278,
      "H": 293,
      "N": 8,
      "O": 8
    },
    "molarMass": "1293.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4249",
    "formula": "C279H294N9O9",
    "composition": {
      "C": 279,
      "H": 294,
      "N": 9,
      "O": 9
    },
    "molarMass": "1296.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4250",
    "formula": "C280H295N10O0",
    "composition": {
      "C": 280,
      "H": 295,
      "N": 10,
      "O": 0
    },
    "molarMass": "1300.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4251",
    "formula": "C281H296N11O1",
    "composition": {
      "C": 281,
      "H": 296,
      "N": 11,
      "O": 1
    },
    "molarMass": "1303.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4252",
    "formula": "C282H297N0O2",
    "composition": {
      "C": 282,
      "H": 297,
      "N": 0,
      "O": 2
    },
    "molarMass": "1306.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4253",
    "formula": "C283H298N1O3",
    "composition": {
      "C": 283,
      "H": 298,
      "N": 1,
      "O": 3
    },
    "molarMass": "1309.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4254",
    "formula": "C284H299N2O4",
    "composition": {
      "C": 284,
      "H": 299,
      "N": 2,
      "O": 4
    },
    "molarMass": "1312.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4255",
    "formula": "C285H300N3O5",
    "composition": {
      "C": 285,
      "H": 300,
      "N": 3,
      "O": 5
    },
    "molarMass": "1316.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4256",
    "formula": "C286H301N4O6",
    "composition": {
      "C": 286,
      "H": 301,
      "N": 4,
      "O": 6
    },
    "molarMass": "1319.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4257",
    "formula": "C287H302N5O7",
    "composition": {
      "C": 287,
      "H": 302,
      "N": 5,
      "O": 7
    },
    "molarMass": "1322.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4258",
    "formula": "C288H303N6O8",
    "composition": {
      "C": 288,
      "H": 303,
      "N": 6,
      "O": 8
    },
    "molarMass": "1325.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4259",
    "formula": "C289H304N7O9",
    "composition": {
      "C": 289,
      "H": 304,
      "N": 7,
      "O": 9
    },
    "molarMass": "1328.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4260",
    "formula": "C290H305N8O0",
    "composition": {
      "C": 290,
      "H": 305,
      "N": 8,
      "O": 0
    },
    "molarMass": "1332.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4261",
    "formula": "C291H306N9O1",
    "composition": {
      "C": 291,
      "H": 306,
      "N": 9,
      "O": 1
    },
    "molarMass": "1335.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4262",
    "formula": "C292H307N10O2",
    "composition": {
      "C": 292,
      "H": 307,
      "N": 10,
      "O": 2
    },
    "molarMass": "1338.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4263",
    "formula": "C293H308N11O3",
    "composition": {
      "C": 293,
      "H": 308,
      "N": 11,
      "O": 3
    },
    "molarMass": "1341.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4264",
    "formula": "C294H309N0O4",
    "composition": {
      "C": 294,
      "H": 309,
      "N": 0,
      "O": 4
    },
    "molarMass": "1344.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4265",
    "formula": "C295H310N1O5",
    "composition": {
      "C": 295,
      "H": 310,
      "N": 1,
      "O": 5
    },
    "molarMass": "1348.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4266",
    "formula": "C296H311N2O6",
    "composition": {
      "C": 296,
      "H": 311,
      "N": 2,
      "O": 6
    },
    "molarMass": "1351.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4267",
    "formula": "C297H312N3O7",
    "composition": {
      "C": 297,
      "H": 312,
      "N": 3,
      "O": 7
    },
    "molarMass": "1354.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4268",
    "formula": "C298H313N4O8",
    "composition": {
      "C": 298,
      "H": 313,
      "N": 4,
      "O": 8
    },
    "molarMass": "1357.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4269",
    "formula": "C299H314N5O9",
    "composition": {
      "C": 299,
      "H": 314,
      "N": 5,
      "O": 9
    },
    "molarMass": "1360.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4270",
    "formula": "C300H315N6O0",
    "composition": {
      "C": 300,
      "H": 315,
      "N": 6,
      "O": 0
    },
    "molarMass": "1364.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4271",
    "formula": "C301H316N7O1",
    "composition": {
      "C": 301,
      "H": 316,
      "N": 7,
      "O": 1
    },
    "molarMass": "1367.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4272",
    "formula": "C302H317N8O2",
    "composition": {
      "C": 302,
      "H": 317,
      "N": 8,
      "O": 2
    },
    "molarMass": "1370.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4273",
    "formula": "C303H318N9O3",
    "composition": {
      "C": 303,
      "H": 318,
      "N": 9,
      "O": 3
    },
    "molarMass": "1373.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4274",
    "formula": "C304H319N10O4",
    "composition": {
      "C": 304,
      "H": 319,
      "N": 10,
      "O": 4
    },
    "molarMass": "1376.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4275",
    "formula": "C305H320N11O5",
    "composition": {
      "C": 305,
      "H": 320,
      "N": 11,
      "O": 5
    },
    "molarMass": "1380.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4276",
    "formula": "C306H321N0O6",
    "composition": {
      "C": 306,
      "H": 321,
      "N": 0,
      "O": 6
    },
    "molarMass": "1383.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4277",
    "formula": "C307H322N1O7",
    "composition": {
      "C": 307,
      "H": 322,
      "N": 1,
      "O": 7
    },
    "molarMass": "1386.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4278",
    "formula": "C308H323N2O8",
    "composition": {
      "C": 308,
      "H": 323,
      "N": 2,
      "O": 8
    },
    "molarMass": "1389.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4279",
    "formula": "C309H324N3O9",
    "composition": {
      "C": 309,
      "H": 324,
      "N": 3,
      "O": 9
    },
    "molarMass": "1392.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4280",
    "formula": "C310H325N4O0",
    "composition": {
      "C": 310,
      "H": 325,
      "N": 4,
      "O": 0
    },
    "molarMass": "1396.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4281",
    "formula": "C311H326N5O1",
    "composition": {
      "C": 311,
      "H": 326,
      "N": 5,
      "O": 1
    },
    "molarMass": "1399.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4282",
    "formula": "C312H327N6O2",
    "composition": {
      "C": 312,
      "H": 327,
      "N": 6,
      "O": 2
    },
    "molarMass": "1402.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4283",
    "formula": "C313H328N7O3",
    "composition": {
      "C": 313,
      "H": 328,
      "N": 7,
      "O": 3
    },
    "molarMass": "1405.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4284",
    "formula": "C314H329N8O4",
    "composition": {
      "C": 314,
      "H": 329,
      "N": 8,
      "O": 4
    },
    "molarMass": "1408.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4285",
    "formula": "C315H330N9O5",
    "composition": {
      "C": 315,
      "H": 330,
      "N": 9,
      "O": 5
    },
    "molarMass": "1412.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4286",
    "formula": "C316H331N10O6",
    "composition": {
      "C": 316,
      "H": 331,
      "N": 10,
      "O": 6
    },
    "molarMass": "1415.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4287",
    "formula": "C317H332N11O7",
    "composition": {
      "C": 317,
      "H": 332,
      "N": 11,
      "O": 7
    },
    "molarMass": "1418.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4288",
    "formula": "C318H333N0O8",
    "composition": {
      "C": 318,
      "H": 333,
      "N": 0,
      "O": 8
    },
    "molarMass": "1421.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4289",
    "formula": "C319H334N1O9",
    "composition": {
      "C": 319,
      "H": 334,
      "N": 1,
      "O": 9
    },
    "molarMass": "1424.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4290",
    "formula": "C320H335N2O0",
    "composition": {
      "C": 320,
      "H": 335,
      "N": 2,
      "O": 0
    },
    "molarMass": "1428.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4291",
    "formula": "C321H336N3O1",
    "composition": {
      "C": 321,
      "H": 336,
      "N": 3,
      "O": 1
    },
    "molarMass": "1431.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4292",
    "formula": "C322H337N4O2",
    "composition": {
      "C": 322,
      "H": 337,
      "N": 4,
      "O": 2
    },
    "molarMass": "1434.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4293",
    "formula": "C323H338N5O3",
    "composition": {
      "C": 323,
      "H": 338,
      "N": 5,
      "O": 3
    },
    "molarMass": "1437.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4294",
    "formula": "C324H339N6O4",
    "composition": {
      "C": 324,
      "H": 339,
      "N": 6,
      "O": 4
    },
    "molarMass": "1440.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4295",
    "formula": "C325H340N7O5",
    "composition": {
      "C": 325,
      "H": 340,
      "N": 7,
      "O": 5
    },
    "molarMass": "1444.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4296",
    "formula": "C326H341N8O6",
    "composition": {
      "C": 326,
      "H": 341,
      "N": 8,
      "O": 6
    },
    "molarMass": "1447.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4297",
    "formula": "C327H342N9O7",
    "composition": {
      "C": 327,
      "H": 342,
      "N": 9,
      "O": 7
    },
    "molarMass": "1450.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4298",
    "formula": "C328H343N10O8",
    "composition": {
      "C": 328,
      "H": 343,
      "N": 10,
      "O": 8
    },
    "molarMass": "1453.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4299",
    "formula": "C329H344N11O9",
    "composition": {
      "C": 329,
      "H": 344,
      "N": 11,
      "O": 9
    },
    "molarMass": "1456.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4300",
    "formula": "C330H345N0O0",
    "composition": {
      "C": 330,
      "H": 345,
      "N": 0,
      "O": 0
    },
    "molarMass": "1460.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4301",
    "formula": "C331H346N1O1",
    "composition": {
      "C": 331,
      "H": 346,
      "N": 1,
      "O": 1
    },
    "molarMass": "1463.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4302",
    "formula": "C332H347N2O2",
    "composition": {
      "C": 332,
      "H": 347,
      "N": 2,
      "O": 2
    },
    "molarMass": "1466.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4303",
    "formula": "C333H348N3O3",
    "composition": {
      "C": 333,
      "H": 348,
      "N": 3,
      "O": 3
    },
    "molarMass": "1469.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4304",
    "formula": "C334H349N4O4",
    "composition": {
      "C": 334,
      "H": 349,
      "N": 4,
      "O": 4
    },
    "molarMass": "1472.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4305",
    "formula": "C335H350N5O5",
    "composition": {
      "C": 335,
      "H": 350,
      "N": 5,
      "O": 5
    },
    "molarMass": "1476.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4306",
    "formula": "C336H351N6O6",
    "composition": {
      "C": 336,
      "H": 351,
      "N": 6,
      "O": 6
    },
    "molarMass": "1479.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4307",
    "formula": "C337H352N7O7",
    "composition": {
      "C": 337,
      "H": 352,
      "N": 7,
      "O": 7
    },
    "molarMass": "1482.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4308",
    "formula": "C338H353N8O8",
    "composition": {
      "C": 338,
      "H": 353,
      "N": 8,
      "O": 8
    },
    "molarMass": "1485.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4309",
    "formula": "C339H354N9O9",
    "composition": {
      "C": 339,
      "H": 354,
      "N": 9,
      "O": 9
    },
    "molarMass": "1488.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4310",
    "formula": "C340H355N10O0",
    "composition": {
      "C": 340,
      "H": 355,
      "N": 10,
      "O": 0
    },
    "molarMass": "1492.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4311",
    "formula": "C341H356N11O1",
    "composition": {
      "C": 341,
      "H": 356,
      "N": 11,
      "O": 1
    },
    "molarMass": "1495.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4312",
    "formula": "C342H357N0O2",
    "composition": {
      "C": 342,
      "H": 357,
      "N": 0,
      "O": 2
    },
    "molarMass": "1498.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4313",
    "formula": "C343H358N1O3",
    "composition": {
      "C": 343,
      "H": 358,
      "N": 1,
      "O": 3
    },
    "molarMass": "1501.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4314",
    "formula": "C344H359N2O4",
    "composition": {
      "C": 344,
      "H": 359,
      "N": 2,
      "O": 4
    },
    "molarMass": "1504.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4315",
    "formula": "C345H360N3O5",
    "composition": {
      "C": 345,
      "H": 360,
      "N": 3,
      "O": 5
    },
    "molarMass": "1508.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4316",
    "formula": "C346H361N4O6",
    "composition": {
      "C": 346,
      "H": 361,
      "N": 4,
      "O": 6
    },
    "molarMass": "1511.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4317",
    "formula": "C347H362N5O7",
    "composition": {
      "C": 347,
      "H": 362,
      "N": 5,
      "O": 7
    },
    "molarMass": "1514.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4318",
    "formula": "C348H363N6O8",
    "composition": {
      "C": 348,
      "H": 363,
      "N": 6,
      "O": 8
    },
    "molarMass": "1517.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4319",
    "formula": "C349H364N7O9",
    "composition": {
      "C": 349,
      "H": 364,
      "N": 7,
      "O": 9
    },
    "molarMass": "1520.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4320",
    "formula": "C350H365N8O0",
    "composition": {
      "C": 350,
      "H": 365,
      "N": 8,
      "O": 0
    },
    "molarMass": "1524.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4321",
    "formula": "C351H366N9O1",
    "composition": {
      "C": 351,
      "H": 366,
      "N": 9,
      "O": 1
    },
    "molarMass": "1527.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4322",
    "formula": "C352H367N10O2",
    "composition": {
      "C": 352,
      "H": 367,
      "N": 10,
      "O": 2
    },
    "molarMass": "1530.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4323",
    "formula": "C353H368N11O3",
    "composition": {
      "C": 353,
      "H": 368,
      "N": 11,
      "O": 3
    },
    "molarMass": "1533.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4324",
    "formula": "C354H369N0O4",
    "composition": {
      "C": 354,
      "H": 369,
      "N": 0,
      "O": 4
    },
    "molarMass": "1536.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4325",
    "formula": "C355H370N1O5",
    "composition": {
      "C": 355,
      "H": 370,
      "N": 1,
      "O": 5
    },
    "molarMass": "1540.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4326",
    "formula": "C356H371N2O6",
    "composition": {
      "C": 356,
      "H": 371,
      "N": 2,
      "O": 6
    },
    "molarMass": "1543.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4327",
    "formula": "C357H372N3O7",
    "composition": {
      "C": 357,
      "H": 372,
      "N": 3,
      "O": 7
    },
    "molarMass": "1546.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4328",
    "formula": "C358H373N4O8",
    "composition": {
      "C": 358,
      "H": 373,
      "N": 4,
      "O": 8
    },
    "molarMass": "1549.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4329",
    "formula": "C359H374N5O9",
    "composition": {
      "C": 359,
      "H": 374,
      "N": 5,
      "O": 9
    },
    "molarMass": "1552.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4330",
    "formula": "C360H375N6O0",
    "composition": {
      "C": 360,
      "H": 375,
      "N": 6,
      "O": 0
    },
    "molarMass": "1556.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4331",
    "formula": "C361H376N7O1",
    "composition": {
      "C": 361,
      "H": 376,
      "N": 7,
      "O": 1
    },
    "molarMass": "1559.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4332",
    "formula": "C362H377N8O2",
    "composition": {
      "C": 362,
      "H": 377,
      "N": 8,
      "O": 2
    },
    "molarMass": "1562.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4333",
    "formula": "C363H378N9O3",
    "composition": {
      "C": 363,
      "H": 378,
      "N": 9,
      "O": 3
    },
    "molarMass": "1565.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4334",
    "formula": "C364H379N10O4",
    "composition": {
      "C": 364,
      "H": 379,
      "N": 10,
      "O": 4
    },
    "molarMass": "1568.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4335",
    "formula": "C365H380N11O5",
    "composition": {
      "C": 365,
      "H": 380,
      "N": 11,
      "O": 5
    },
    "molarMass": "1572.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4336",
    "formula": "C366H381N0O6",
    "composition": {
      "C": 366,
      "H": 381,
      "N": 0,
      "O": 6
    },
    "molarMass": "1575.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4337",
    "formula": "C367H382N1O7",
    "composition": {
      "C": 367,
      "H": 382,
      "N": 1,
      "O": 7
    },
    "molarMass": "1578.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4338",
    "formula": "C368H383N2O8",
    "composition": {
      "C": 368,
      "H": 383,
      "N": 2,
      "O": 8
    },
    "molarMass": "1581.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4339",
    "formula": "C369H384N3O9",
    "composition": {
      "C": 369,
      "H": 384,
      "N": 3,
      "O": 9
    },
    "molarMass": "1584.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4340",
    "formula": "C370H385N4O0",
    "composition": {
      "C": 370,
      "H": 385,
      "N": 4,
      "O": 0
    },
    "molarMass": "1588.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4341",
    "formula": "C371H386N5O1",
    "composition": {
      "C": 371,
      "H": 386,
      "N": 5,
      "O": 1
    },
    "molarMass": "1591.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4342",
    "formula": "C372H387N6O2",
    "composition": {
      "C": 372,
      "H": 387,
      "N": 6,
      "O": 2
    },
    "molarMass": "1594.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4343",
    "formula": "C373H388N7O3",
    "composition": {
      "C": 373,
      "H": 388,
      "N": 7,
      "O": 3
    },
    "molarMass": "1597.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4344",
    "formula": "C374H389N8O4",
    "composition": {
      "C": 374,
      "H": 389,
      "N": 8,
      "O": 4
    },
    "molarMass": "1600.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4345",
    "formula": "C375H390N9O5",
    "composition": {
      "C": 375,
      "H": 390,
      "N": 9,
      "O": 5
    },
    "molarMass": "1604.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4346",
    "formula": "C376H391N10O6",
    "composition": {
      "C": 376,
      "H": 391,
      "N": 10,
      "O": 6
    },
    "molarMass": "1607.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4347",
    "formula": "C377H392N11O7",
    "composition": {
      "C": 377,
      "H": 392,
      "N": 11,
      "O": 7
    },
    "molarMass": "1610.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4348",
    "formula": "C378H393N0O8",
    "composition": {
      "C": 378,
      "H": 393,
      "N": 0,
      "O": 8
    },
    "molarMass": "1613.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4349",
    "formula": "C379H394N1O9",
    "composition": {
      "C": 379,
      "H": 394,
      "N": 1,
      "O": 9
    },
    "molarMass": "1616.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4350",
    "formula": "C380H395N2O0",
    "composition": {
      "C": 380,
      "H": 395,
      "N": 2,
      "O": 0
    },
    "molarMass": "1620.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4351",
    "formula": "C381H396N3O1",
    "composition": {
      "C": 381,
      "H": 396,
      "N": 3,
      "O": 1
    },
    "molarMass": "1623.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4352",
    "formula": "C382H397N4O2",
    "composition": {
      "C": 382,
      "H": 397,
      "N": 4,
      "O": 2
    },
    "molarMass": "1626.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4353",
    "formula": "C383H398N5O3",
    "composition": {
      "C": 383,
      "H": 398,
      "N": 5,
      "O": 3
    },
    "molarMass": "1629.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4354",
    "formula": "C384H399N6O4",
    "composition": {
      "C": 384,
      "H": 399,
      "N": 6,
      "O": 4
    },
    "molarMass": "1632.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4355",
    "formula": "C385H400N7O5",
    "composition": {
      "C": 385,
      "H": 400,
      "N": 7,
      "O": 5
    },
    "molarMass": "1636.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4356",
    "formula": "C386H401N8O6",
    "composition": {
      "C": 386,
      "H": 401,
      "N": 8,
      "O": 6
    },
    "molarMass": "1639.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4357",
    "formula": "C387H402N9O7",
    "composition": {
      "C": 387,
      "H": 402,
      "N": 9,
      "O": 7
    },
    "molarMass": "1642.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4358",
    "formula": "C388H403N10O8",
    "composition": {
      "C": 388,
      "H": 403,
      "N": 10,
      "O": 8
    },
    "molarMass": "1645.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4359",
    "formula": "C389H404N11O9",
    "composition": {
      "C": 389,
      "H": 404,
      "N": 11,
      "O": 9
    },
    "molarMass": "1648.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4360",
    "formula": "C390H405N0O0",
    "composition": {
      "C": 390,
      "H": 405,
      "N": 0,
      "O": 0
    },
    "molarMass": "1652.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4361",
    "formula": "C391H406N1O1",
    "composition": {
      "C": 391,
      "H": 406,
      "N": 1,
      "O": 1
    },
    "molarMass": "1655.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4362",
    "formula": "C392H407N2O2",
    "composition": {
      "C": 392,
      "H": 407,
      "N": 2,
      "O": 2
    },
    "molarMass": "1658.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4363",
    "formula": "C393H408N3O3",
    "composition": {
      "C": 393,
      "H": 408,
      "N": 3,
      "O": 3
    },
    "molarMass": "1661.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4364",
    "formula": "C394H409N4O4",
    "composition": {
      "C": 394,
      "H": 409,
      "N": 4,
      "O": 4
    },
    "molarMass": "1664.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4365",
    "formula": "C395H410N5O5",
    "composition": {
      "C": 395,
      "H": 410,
      "N": 5,
      "O": 5
    },
    "molarMass": "1668.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4366",
    "formula": "C396H411N6O6",
    "composition": {
      "C": 396,
      "H": 411,
      "N": 6,
      "O": 6
    },
    "molarMass": "1671.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4367",
    "formula": "C397H412N7O7",
    "composition": {
      "C": 397,
      "H": 412,
      "N": 7,
      "O": 7
    },
    "molarMass": "1674.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4368",
    "formula": "C398H413N8O8",
    "composition": {
      "C": 398,
      "H": 413,
      "N": 8,
      "O": 8
    },
    "molarMass": "1677.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4369",
    "formula": "C399H414N9O9",
    "composition": {
      "C": 399,
      "H": 414,
      "N": 9,
      "O": 9
    },
    "molarMass": "1680.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4370",
    "formula": "C400H415N10O0",
    "composition": {
      "C": 400,
      "H": 415,
      "N": 10,
      "O": 0
    },
    "molarMass": "1684.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4371",
    "formula": "C401H416N11O1",
    "composition": {
      "C": 401,
      "H": 416,
      "N": 11,
      "O": 1
    },
    "molarMass": "1687.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4372",
    "formula": "C402H417N0O2",
    "composition": {
      "C": 402,
      "H": 417,
      "N": 0,
      "O": 2
    },
    "molarMass": "1690.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4373",
    "formula": "C403H418N1O3",
    "composition": {
      "C": 403,
      "H": 418,
      "N": 1,
      "O": 3
    },
    "molarMass": "1693.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4374",
    "formula": "C404H419N2O4",
    "composition": {
      "C": 404,
      "H": 419,
      "N": 2,
      "O": 4
    },
    "molarMass": "1696.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4375",
    "formula": "C405H420N3O5",
    "composition": {
      "C": 405,
      "H": 420,
      "N": 3,
      "O": 5
    },
    "molarMass": "1700.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4376",
    "formula": "C406H421N4O6",
    "composition": {
      "C": 406,
      "H": 421,
      "N": 4,
      "O": 6
    },
    "molarMass": "1703.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4377",
    "formula": "C407H422N5O7",
    "composition": {
      "C": 407,
      "H": 422,
      "N": 5,
      "O": 7
    },
    "molarMass": "1706.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4378",
    "formula": "C408H423N6O8",
    "composition": {
      "C": 408,
      "H": 423,
      "N": 6,
      "O": 8
    },
    "molarMass": "1709.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4379",
    "formula": "C409H424N7O9",
    "composition": {
      "C": 409,
      "H": 424,
      "N": 7,
      "O": 9
    },
    "molarMass": "1712.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4380",
    "formula": "C410H425N8O0",
    "composition": {
      "C": 410,
      "H": 425,
      "N": 8,
      "O": 0
    },
    "molarMass": "1716.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4381",
    "formula": "C411H426N9O1",
    "composition": {
      "C": 411,
      "H": 426,
      "N": 9,
      "O": 1
    },
    "molarMass": "1719.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4382",
    "formula": "C412H427N10O2",
    "composition": {
      "C": 412,
      "H": 427,
      "N": 10,
      "O": 2
    },
    "molarMass": "1722.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4383",
    "formula": "C413H428N11O3",
    "composition": {
      "C": 413,
      "H": 428,
      "N": 11,
      "O": 3
    },
    "molarMass": "1725.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4384",
    "formula": "C414H429N0O4",
    "composition": {
      "C": 414,
      "H": 429,
      "N": 0,
      "O": 4
    },
    "molarMass": "1728.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4385",
    "formula": "C415H430N1O5",
    "composition": {
      "C": 415,
      "H": 430,
      "N": 1,
      "O": 5
    },
    "molarMass": "1732.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4386",
    "formula": "C416H431N2O6",
    "composition": {
      "C": 416,
      "H": 431,
      "N": 2,
      "O": 6
    },
    "molarMass": "1735.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4387",
    "formula": "C417H432N3O7",
    "composition": {
      "C": 417,
      "H": 432,
      "N": 3,
      "O": 7
    },
    "molarMass": "1738.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4388",
    "formula": "C418H433N4O8",
    "composition": {
      "C": 418,
      "H": 433,
      "N": 4,
      "O": 8
    },
    "molarMass": "1741.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4389",
    "formula": "C419H434N5O9",
    "composition": {
      "C": 419,
      "H": 434,
      "N": 5,
      "O": 9
    },
    "molarMass": "1744.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4390",
    "formula": "C420H435N6O0",
    "composition": {
      "C": 420,
      "H": 435,
      "N": 6,
      "O": 0
    },
    "molarMass": "1748.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4391",
    "formula": "C421H436N7O1",
    "composition": {
      "C": 421,
      "H": 436,
      "N": 7,
      "O": 1
    },
    "molarMass": "1751.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4392",
    "formula": "C422H437N8O2",
    "composition": {
      "C": 422,
      "H": 437,
      "N": 8,
      "O": 2
    },
    "molarMass": "1754.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4393",
    "formula": "C423H438N9O3",
    "composition": {
      "C": 423,
      "H": 438,
      "N": 9,
      "O": 3
    },
    "molarMass": "1757.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4394",
    "formula": "C424H439N10O4",
    "composition": {
      "C": 424,
      "H": 439,
      "N": 10,
      "O": 4
    },
    "molarMass": "1760.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4395",
    "formula": "C425H440N11O5",
    "composition": {
      "C": 425,
      "H": 440,
      "N": 11,
      "O": 5
    },
    "molarMass": "1764.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4396",
    "formula": "C426H441N0O6",
    "composition": {
      "C": 426,
      "H": 441,
      "N": 0,
      "O": 6
    },
    "molarMass": "1767.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4397",
    "formula": "C427H442N1O7",
    "composition": {
      "C": 427,
      "H": 442,
      "N": 1,
      "O": 7
    },
    "molarMass": "1770.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4398",
    "formula": "C428H443N2O8",
    "composition": {
      "C": 428,
      "H": 443,
      "N": 2,
      "O": 8
    },
    "molarMass": "1773.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4399",
    "formula": "C429H444N3O9",
    "composition": {
      "C": 429,
      "H": 444,
      "N": 3,
      "O": 9
    },
    "molarMass": "1776.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4400",
    "formula": "C430H445N4O0",
    "composition": {
      "C": 430,
      "H": 445,
      "N": 4,
      "O": 0
    },
    "molarMass": "1780.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4401",
    "formula": "C431H446N5O1",
    "composition": {
      "C": 431,
      "H": 446,
      "N": 5,
      "O": 1
    },
    "molarMass": "1783.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4402",
    "formula": "C432H447N6O2",
    "composition": {
      "C": 432,
      "H": 447,
      "N": 6,
      "O": 2
    },
    "molarMass": "1786.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4403",
    "formula": "C433H448N7O3",
    "composition": {
      "C": 433,
      "H": 448,
      "N": 7,
      "O": 3
    },
    "molarMass": "1789.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4404",
    "formula": "C434H449N8O4",
    "composition": {
      "C": 434,
      "H": 449,
      "N": 8,
      "O": 4
    },
    "molarMass": "1792.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4405",
    "formula": "C435H450N9O5",
    "composition": {
      "C": 435,
      "H": 450,
      "N": 9,
      "O": 5
    },
    "molarMass": "1796.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4406",
    "formula": "C436H451N10O6",
    "composition": {
      "C": 436,
      "H": 451,
      "N": 10,
      "O": 6
    },
    "molarMass": "1799.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4407",
    "formula": "C437H452N11O7",
    "composition": {
      "C": 437,
      "H": 452,
      "N": 11,
      "O": 7
    },
    "molarMass": "1802.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4408",
    "formula": "C438H453N0O8",
    "composition": {
      "C": 438,
      "H": 453,
      "N": 0,
      "O": 8
    },
    "molarMass": "1805.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4409",
    "formula": "C439H454N1O9",
    "composition": {
      "C": 439,
      "H": 454,
      "N": 1,
      "O": 9
    },
    "molarMass": "1808.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4410",
    "formula": "C440H455N2O0",
    "composition": {
      "C": 440,
      "H": 455,
      "N": 2,
      "O": 0
    },
    "molarMass": "1812.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4411",
    "formula": "C441H456N3O1",
    "composition": {
      "C": 441,
      "H": 456,
      "N": 3,
      "O": 1
    },
    "molarMass": "1815.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4412",
    "formula": "C442H457N4O2",
    "composition": {
      "C": 442,
      "H": 457,
      "N": 4,
      "O": 2
    },
    "molarMass": "1818.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4413",
    "formula": "C443H458N5O3",
    "composition": {
      "C": 443,
      "H": 458,
      "N": 5,
      "O": 3
    },
    "molarMass": "1821.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4414",
    "formula": "C444H459N6O4",
    "composition": {
      "C": 444,
      "H": 459,
      "N": 6,
      "O": 4
    },
    "molarMass": "1824.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4415",
    "formula": "C445H460N7O5",
    "composition": {
      "C": 445,
      "H": 460,
      "N": 7,
      "O": 5
    },
    "molarMass": "1828.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4416",
    "formula": "C446H461N8O6",
    "composition": {
      "C": 446,
      "H": 461,
      "N": 8,
      "O": 6
    },
    "molarMass": "1831.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4417",
    "formula": "C447H462N9O7",
    "composition": {
      "C": 447,
      "H": 462,
      "N": 9,
      "O": 7
    },
    "molarMass": "1834.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4418",
    "formula": "C448H463N10O8",
    "composition": {
      "C": 448,
      "H": 463,
      "N": 10,
      "O": 8
    },
    "molarMass": "1837.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4419",
    "formula": "C449H464N11O9",
    "composition": {
      "C": 449,
      "H": 464,
      "N": 11,
      "O": 9
    },
    "molarMass": "1840.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4420",
    "formula": "C450H465N0O0",
    "composition": {
      "C": 450,
      "H": 465,
      "N": 0,
      "O": 0
    },
    "molarMass": "1844.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4421",
    "formula": "C451H466N1O1",
    "composition": {
      "C": 451,
      "H": 466,
      "N": 1,
      "O": 1
    },
    "molarMass": "1847.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4422",
    "formula": "C452H467N2O2",
    "composition": {
      "C": 452,
      "H": 467,
      "N": 2,
      "O": 2
    },
    "molarMass": "1850.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4423",
    "formula": "C453H468N3O3",
    "composition": {
      "C": 453,
      "H": 468,
      "N": 3,
      "O": 3
    },
    "molarMass": "1853.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4424",
    "formula": "C454H469N4O4",
    "composition": {
      "C": 454,
      "H": 469,
      "N": 4,
      "O": 4
    },
    "molarMass": "1856.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4425",
    "formula": "C455H470N5O5",
    "composition": {
      "C": 455,
      "H": 470,
      "N": 5,
      "O": 5
    },
    "molarMass": "1860.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4426",
    "formula": "C456H471N6O6",
    "composition": {
      "C": 456,
      "H": 471,
      "N": 6,
      "O": 6
    },
    "molarMass": "1863.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4427",
    "formula": "C457H472N7O7",
    "composition": {
      "C": 457,
      "H": 472,
      "N": 7,
      "O": 7
    },
    "molarMass": "1866.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4428",
    "formula": "C458H473N8O8",
    "composition": {
      "C": 458,
      "H": 473,
      "N": 8,
      "O": 8
    },
    "molarMass": "1869.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4429",
    "formula": "C459H474N9O9",
    "composition": {
      "C": 459,
      "H": 474,
      "N": 9,
      "O": 9
    },
    "molarMass": "1872.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4430",
    "formula": "C460H475N10O0",
    "composition": {
      "C": 460,
      "H": 475,
      "N": 10,
      "O": 0
    },
    "molarMass": "1876.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4431",
    "formula": "C461H476N11O1",
    "composition": {
      "C": 461,
      "H": 476,
      "N": 11,
      "O": 1
    },
    "molarMass": "1879.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4432",
    "formula": "C462H477N0O2",
    "composition": {
      "C": 462,
      "H": 477,
      "N": 0,
      "O": 2
    },
    "molarMass": "1882.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4433",
    "formula": "C463H478N1O3",
    "composition": {
      "C": 463,
      "H": 478,
      "N": 1,
      "O": 3
    },
    "molarMass": "1885.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4434",
    "formula": "C464H479N2O4",
    "composition": {
      "C": 464,
      "H": 479,
      "N": 2,
      "O": 4
    },
    "molarMass": "1888.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4435",
    "formula": "C465H480N3O5",
    "composition": {
      "C": 465,
      "H": 480,
      "N": 3,
      "O": 5
    },
    "molarMass": "1892.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4436",
    "formula": "C466H481N4O6",
    "composition": {
      "C": 466,
      "H": 481,
      "N": 4,
      "O": 6
    },
    "molarMass": "1895.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4437",
    "formula": "C467H482N5O7",
    "composition": {
      "C": 467,
      "H": 482,
      "N": 5,
      "O": 7
    },
    "molarMass": "1898.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4438",
    "formula": "C468H483N6O8",
    "composition": {
      "C": 468,
      "H": 483,
      "N": 6,
      "O": 8
    },
    "molarMass": "1901.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4439",
    "formula": "C469H484N7O9",
    "composition": {
      "C": 469,
      "H": 484,
      "N": 7,
      "O": 9
    },
    "molarMass": "1904.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4440",
    "formula": "C470H485N8O0",
    "composition": {
      "C": 470,
      "H": 485,
      "N": 8,
      "O": 0
    },
    "molarMass": "1908.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4441",
    "formula": "C471H486N9O1",
    "composition": {
      "C": 471,
      "H": 486,
      "N": 9,
      "O": 1
    },
    "molarMass": "1911.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4442",
    "formula": "C472H487N10O2",
    "composition": {
      "C": 472,
      "H": 487,
      "N": 10,
      "O": 2
    },
    "molarMass": "1914.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4443",
    "formula": "C473H488N11O3",
    "composition": {
      "C": 473,
      "H": 488,
      "N": 11,
      "O": 3
    },
    "molarMass": "1917.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4444",
    "formula": "C474H489N0O4",
    "composition": {
      "C": 474,
      "H": 489,
      "N": 0,
      "O": 4
    },
    "molarMass": "1920.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4445",
    "formula": "C475H490N1O5",
    "composition": {
      "C": 475,
      "H": 490,
      "N": 1,
      "O": 5
    },
    "molarMass": "1924.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4446",
    "formula": "C476H491N2O6",
    "composition": {
      "C": 476,
      "H": 491,
      "N": 2,
      "O": 6
    },
    "molarMass": "1927.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4447",
    "formula": "C477H492N3O7",
    "composition": {
      "C": 477,
      "H": 492,
      "N": 3,
      "O": 7
    },
    "molarMass": "1930.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4448",
    "formula": "C478H493N4O8",
    "composition": {
      "C": 478,
      "H": 493,
      "N": 4,
      "O": 8
    },
    "molarMass": "1933.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4449",
    "formula": "C479H494N5O9",
    "composition": {
      "C": 479,
      "H": 494,
      "N": 5,
      "O": 9
    },
    "molarMass": "1936.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4450",
    "formula": "C480H495N6O0",
    "composition": {
      "C": 480,
      "H": 495,
      "N": 6,
      "O": 0
    },
    "molarMass": "1940.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4451",
    "formula": "C481H496N7O1",
    "composition": {
      "C": 481,
      "H": 496,
      "N": 7,
      "O": 1
    },
    "molarMass": "1943.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4452",
    "formula": "C482H497N8O2",
    "composition": {
      "C": 482,
      "H": 497,
      "N": 8,
      "O": 2
    },
    "molarMass": "1946.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4453",
    "formula": "C483H498N9O3",
    "composition": {
      "C": 483,
      "H": 498,
      "N": 9,
      "O": 3
    },
    "molarMass": "1949.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4454",
    "formula": "C484H499N10O4",
    "composition": {
      "C": 484,
      "H": 499,
      "N": 10,
      "O": 4
    },
    "molarMass": "1952.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4455",
    "formula": "C485H500N11O5",
    "composition": {
      "C": 485,
      "H": 500,
      "N": 11,
      "O": 5
    },
    "molarMass": "1956.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4456",
    "formula": "C486H501N0O6",
    "composition": {
      "C": 486,
      "H": 501,
      "N": 0,
      "O": 6
    },
    "molarMass": "1959.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4457",
    "formula": "C487H502N1O7",
    "composition": {
      "C": 487,
      "H": 502,
      "N": 1,
      "O": 7
    },
    "molarMass": "1962.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4458",
    "formula": "C488H503N2O8",
    "composition": {
      "C": 488,
      "H": 503,
      "N": 2,
      "O": 8
    },
    "molarMass": "1965.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4459",
    "formula": "C489H504N3O9",
    "composition": {
      "C": 489,
      "H": 504,
      "N": 3,
      "O": 9
    },
    "molarMass": "1968.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4460",
    "formula": "C490H505N4O0",
    "composition": {
      "C": 490,
      "H": 505,
      "N": 4,
      "O": 0
    },
    "molarMass": "1972.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4461",
    "formula": "C491H506N5O1",
    "composition": {
      "C": 491,
      "H": 506,
      "N": 5,
      "O": 1
    },
    "molarMass": "1975.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4462",
    "formula": "C492H507N6O2",
    "composition": {
      "C": 492,
      "H": 507,
      "N": 6,
      "O": 2
    },
    "molarMass": "1978.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4463",
    "formula": "C493H508N7O3",
    "composition": {
      "C": 493,
      "H": 508,
      "N": 7,
      "O": 3
    },
    "molarMass": "1981.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4464",
    "formula": "C494H509N8O4",
    "composition": {
      "C": 494,
      "H": 509,
      "N": 8,
      "O": 4
    },
    "molarMass": "1984.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4465",
    "formula": "C495H510N9O5",
    "composition": {
      "C": 495,
      "H": 510,
      "N": 9,
      "O": 5
    },
    "molarMass": "1988.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4466",
    "formula": "C496H511N10O6",
    "composition": {
      "C": 496,
      "H": 511,
      "N": 10,
      "O": 6
    },
    "molarMass": "1991.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4467",
    "formula": "C497H512N11O7",
    "composition": {
      "C": 497,
      "H": 512,
      "N": 11,
      "O": 7
    },
    "molarMass": "1994.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4468",
    "formula": "C498H513N0O8",
    "composition": {
      "C": 498,
      "H": 513,
      "N": 0,
      "O": 8
    },
    "molarMass": "1997.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4469",
    "formula": "C499H514N1O9",
    "composition": {
      "C": 499,
      "H": 514,
      "N": 1,
      "O": 9
    },
    "molarMass": "2000.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4470",
    "formula": "C500H515N2O0",
    "composition": {
      "C": 500,
      "H": 515,
      "N": 2,
      "O": 0
    },
    "molarMass": "2004.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4471",
    "formula": "C501H516N3O1",
    "composition": {
      "C": 501,
      "H": 516,
      "N": 3,
      "O": 1
    },
    "molarMass": "2007.20 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4472",
    "formula": "C502H517N4O2",
    "composition": {
      "C": 502,
      "H": 517,
      "N": 4,
      "O": 2
    },
    "molarMass": "2010.40 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4473",
    "formula": "C503H518N5O3",
    "composition": {
      "C": 503,
      "H": 518,
      "N": 5,
      "O": 3
    },
    "molarMass": "2013.60 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4474",
    "formula": "C504H519N6O4",
    "composition": {
      "C": 504,
      "H": 519,
      "N": 6,
      "O": 4
    },
    "molarMass": "2016.80 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4475",
    "formula": "C505H520N7O5",
    "composition": {
      "C": 505,
      "H": 520,
      "N": 7,
      "O": 5
    },
    "molarMass": "2020.00 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4476",
    "formula": "C506H521N8O6",
    "composition": {
      "C": 506,
      "H": 521,
      "N": 8,
      "O": 6
    },
    "molarMass": "2023.20 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4477",
    "formula": "C507H522N9O7",
    "composition": {
      "C": 507,
      "H": 522,
      "N": 9,
      "O": 7
    },
    "molarMass": "2026.40 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4478",
    "formula": "C508H523N10O8",
    "composition": {
      "C": 508,
      "H": 523,
      "N": 10,
      "O": 8
    },
    "molarMass": "2029.60 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4479",
    "formula": "C509H524N11O9",
    "composition": {
      "C": 509,
      "H": 524,
      "N": 11,
      "O": 9
    },
    "molarMass": "2032.80 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4480",
    "formula": "C510H525N0O0",
    "composition": {
      "C": 510,
      "H": 525,
      "N": 0,
      "O": 0
    },
    "molarMass": "2036.00 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4481",
    "formula": "C511H526N1O1",
    "composition": {
      "C": 511,
      "H": 526,
      "N": 1,
      "O": 1
    },
    "molarMass": "2039.20 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4482",
    "formula": "C512H527N2O2",
    "composition": {
      "C": 512,
      "H": 527,
      "N": 2,
      "O": 2
    },
    "molarMass": "2042.40 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4483",
    "formula": "C513H528N3O3",
    "composition": {
      "C": 513,
      "H": 528,
      "N": 3,
      "O": 3
    },
    "molarMass": "2045.60 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4484",
    "formula": "C514H529N4O4",
    "composition": {
      "C": 514,
      "H": 529,
      "N": 4,
      "O": 4
    },
    "molarMass": "2048.80 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4485",
    "formula": "C515H530N5O5",
    "composition": {
      "C": 515,
      "H": 530,
      "N": 5,
      "O": 5
    },
    "molarMass": "2052.00 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4486",
    "formula": "C516H531N6O6",
    "composition": {
      "C": 516,
      "H": 531,
      "N": 6,
      "O": 6
    },
    "molarMass": "2055.20 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Inhibiteur de CYP Mu-4487",
    "formula": "C517H532N7O7",
    "composition": {
      "C": 517,
      "H": 532,
      "N": 7,
      "O": 7
    },
    "molarMass": "2058.40 g/mol",
    "category": "Inhibiteur de CYP",
    "summary": "Echantillon certifié de la série inhibiteur de cyp pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Oligonucléotide antisens Mu-4488",
    "formula": "C518H533N8O8",
    "composition": {
      "C": 518,
      "H": 533,
      "N": 8,
      "O": 8
    },
    "molarMass": "2061.60 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Echantillon certifié de la série oligonucléotide antisens pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Cristal liquide Mu-4489",
    "formula": "C519H534N9O9",
    "composition": {
      "C": 519,
      "H": 534,
      "N": 9,
      "O": 9
    },
    "molarMass": "2064.80 g/mol",
    "category": "Cristal liquide",
    "summary": "Echantillon certifié de la série cristal liquide pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  },
  {
    "name": "Agent de contraste PET Mu-4490",
    "formula": "C520H535N10O0",
    "composition": {
      "C": 520,
      "H": 535,
      "N": 10,
      "O": 0
    },
    "molarMass": "2068.00 g/mol",
    "category": "Agent de contraste PET",
    "summary": "Echantillon certifié de la série agent de contraste pet pour applications de pointe.",
    "occurrence": "Synthèse de laboratoire.",
    "applications": [
      "Haute technologie",
      "Recherche"
    ]
  }
];
