import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série 37
 * Focus: Inhibiteurs de checkpoint, Fluorophores, Gaz semi-conducteurs, Photopolymères
 * Copyright: Sébastien John Bruneau
 */
export const MOLECULES_P37: MoleculeDefinition[] = [
  {
    "name": "Atezolizumab",
    "formula": "C₆₃₅₄H₉₈₅₈N₁₇₀₂O₂₀₁₂S₄₀",
    "composition": {
      "C": 6354,
      "H": 9858,
      "N": 1702,
      "O": 2012,
      "S": 40
    },
    "molarMass": "145000.00 g/mol",
    "category": "Anticorps anti-PD-L1",
    "summary": "Immunothérapie utilisée pour traiter divers cancers en bloquant l'interaction PD-L1/PD-1.",
    "occurrence": "Biotechnologie (Lignée cellulaire mammifère).",
    "applications": [
      "Oncologie",
      "Immunologie"
    ]
  },
  {
    "name": "Durvalumab",
    "formula": "C₆₄₉₀H₁₀₀₀₈N₁₇₁₆O₂₀₃₆S₄₄",
    "composition": {
      "C": 6490,
      "H": 10008,
      "N": 1716,
      "O": 2036,
      "S": 44
    },
    "molarMass": "147000.00 g/mol",
    "category": "Anticorps anti-PD-L1",
    "summary": "Utilisé pour le cancer du poumon non à petites cellules et le carcinome urothélial.",
    "occurrence": "Biotechnologie.",
    "applications": [
      "Oncologie"
    ]
  },
  {
    "name": "Alexa Fluor 488 NHS Ester",
    "formula": "C₂₅H₁₅Li₂N₃O₁₃S₂",
    "composition": {
      "C": 25,
      "H": 15,
      "Li": 2,
      "N": 3,
      "O": 13,
      "S": 2
    },
    "molarMass": "643.41 g/mol",
    "category": "Fluorophore réactif",
    "summary": "Marqueur fluorescent vert brillant de haute photostabilité pour le marquage des protéines.",
    "occurrence": "Synthétique.",
    "applications": [
      "Biotechnologie",
      "Microscopie de fluorescence"
    ]
  },
  {
    "name": "Cy3 NHS Ester",
    "formula": "C₃₆H₄₇N₃O₄",
    "composition": {
      "C": 36,
      "H": 47,
      "N": 3,
      "O": 4
    },
    "molarMass": "585.78 g/mol",
    "category": "Colorant Cyanine",
    "summary": "Fluorophore orange-rouge réactif utilisé pour le marquage des acides nucléiques.",
    "occurrence": "Synthétique.",
    "applications": [
      "Biologie moléculaire",
      "Séquençage"
    ]
  },
  {
    "name": "Hélium-3",
    "formula": "³He",
    "composition": {
      "He": 1
    },
    "molarMass": "3.016 g/mol",
    "category": "Isotope gazeux de spécialité",
    "summary": "Isotope rare utilisé pour la cryogénie à ultra-basse température et la détection de neutrons.",
    "occurrence": "Extrait de la décroissance du tritium.",
    "applications": [
      "Recherche fondamentale",
      "Sécurité nucléaire"
    ]
  },
  {
    "name": "Trichlorosilane",
    "formula": "SiHCl₃",
    "composition": {
      "Si": 1,
      "H": 1,
      "Cl": 3
    },
    "molarMass": "135.45 g/mol",
    "category": "Précurseur de silicium",
    "summary": "Composé clé pour la fabrication de silicium polycristallin de qualité électronique.",
    "occurrence": "Industriel.",
    "applications": [
      "Semi-conducteurs",
      "Énergie solaire"
    ]
  },
  {
    "name": "SU-8 (Monomère)",
    "formula": "C₁₅H₁₆O₂",
    "composition": {
      "C": 15,
      "H": 16,
      "O": 2
    },
    "molarMass": "228.29 g/mol",
    "category": "Résine époxy",
    "summary": "Photorésine de type négatif utilisée pour créer des structures de haut rapport d'aspect.",
    "occurrence": "Synthétique.",
    "applications": [
      "Microélectronique",
      "MEMS"
    ]
  },
  {
    "name": "DMPA (Photoinitiateur)",
    "formula": "C₁₆H₁₆O₃",
    "composition": {
      "C": 16,
      "H": 16,
      "O": 3
    },
    "molarMass": "256.30 g/mol",
    "category": "Photoinitiateur radicalaire",
    "summary": "Utilisé pour déclencher la polymérisation sous exposition UV.",
    "occurrence": "Synthétique.",
    "applications": [
      "Impression 3D",
      "Revêtements"
    ]
  },
  {
    "name": "Tislelizumab",
    "formula": "C₆₄₈₄H₉₉₉₆N₁₇₂₀O₂₀₃₂S₄₂",
    "composition": {
      "C": 6484,
      "H": 9996,
      "N": 1720,
      "O": 2032,
      "S": 42
    },
    "molarMass": "146500.00 g/mol",
    "category": "Anticorps anti-PD-1",
    "summary": "Immunothérapie de nouvelle génération pour les lymphomes et les carcinomes.",
    "occurrence": "Biotechnologie.",
    "applications": [
      "Hématologie",
      "Oncologie"
    ]
  },
  {
    "name": "FITC (Isothiocyanate de fluorescéine)",
    "formula": "C₂₁H₁₁NO₅S",
    "composition": {
      "C": 21,
      "H": 11,
      "N": 1,
      "O": 5,
      "S": 1
    },
    "molarMass": "389.38 g/mol",
    "category": "Fluorophore",
    "summary": "Le dérivé de fluorescéine le plus couramment utilisé pour l'immunofluorescence.",
    "occurrence": "Synthétique.",
    "applications": [
      "Diagnostic",
      "Cytométrie de flux"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7001",
    "formula": "C46H61N1O1",
    "composition": {
      "C": 46,
      "H": 61,
      "N": 1,
      "O": 1
    },
    "molarMass": "806.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7002",
    "formula": "C47H62N2O2",
    "composition": {
      "C": 47,
      "H": 62,
      "N": 2,
      "O": 2
    },
    "molarMass": "812.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7003",
    "formula": "C48H63N3O3",
    "composition": {
      "C": 48,
      "H": 63,
      "N": 3,
      "O": 3
    },
    "molarMass": "818.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7004",
    "formula": "C49H64N4O4",
    "composition": {
      "C": 49,
      "H": 64,
      "N": 4,
      "O": 4
    },
    "molarMass": "824.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7005",
    "formula": "C50H65N5O5",
    "composition": {
      "C": 50,
      "H": 65,
      "N": 5,
      "O": 5
    },
    "molarMass": "831.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7006",
    "formula": "C51H66N6O6",
    "composition": {
      "C": 51,
      "H": 66,
      "N": 6,
      "O": 6
    },
    "molarMass": "837.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7007",
    "formula": "C52H67N7O7",
    "composition": {
      "C": 52,
      "H": 67,
      "N": 7,
      "O": 7
    },
    "molarMass": "843.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7008",
    "formula": "C53H68N8O8",
    "composition": {
      "C": 53,
      "H": 68,
      "N": 8,
      "O": 8
    },
    "molarMass": "849.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7009",
    "formula": "C54H69N9O9",
    "composition": {
      "C": 54,
      "H": 69,
      "N": 9,
      "O": 9
    },
    "molarMass": "855.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7010",
    "formula": "C55H70N10O10",
    "composition": {
      "C": 55,
      "H": 70,
      "N": 10,
      "O": 10
    },
    "molarMass": "862.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7011",
    "formula": "C56H71N11O11",
    "composition": {
      "C": 56,
      "H": 71,
      "N": 11,
      "O": 11
    },
    "molarMass": "868.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7012",
    "formula": "C57H72N12O12",
    "composition": {
      "C": 57,
      "H": 72,
      "N": 12,
      "O": 12
    },
    "molarMass": "874.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7013",
    "formula": "C58H73N13O13",
    "composition": {
      "C": 58,
      "H": 73,
      "N": 13,
      "O": 13
    },
    "molarMass": "880.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7014",
    "formula": "C59H74N14O14",
    "composition": {
      "C": 59,
      "H": 74,
      "N": 14,
      "O": 14
    },
    "molarMass": "886.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7015",
    "formula": "C60H75N15O15",
    "composition": {
      "C": 60,
      "H": 75,
      "N": 15,
      "O": 15
    },
    "molarMass": "893.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7016",
    "formula": "C61H76N16O16",
    "composition": {
      "C": 61,
      "H": 76,
      "N": 16,
      "O": 16
    },
    "molarMass": "899.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7017",
    "formula": "C62H77N17O17",
    "composition": {
      "C": 62,
      "H": 77,
      "N": 17,
      "O": 17
    },
    "molarMass": "905.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7018",
    "formula": "C63H78N18O0",
    "composition": {
      "C": 63,
      "H": 78,
      "N": 18,
      "O": 0
    },
    "molarMass": "911.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7019",
    "formula": "C64H79N19O1",
    "composition": {
      "C": 64,
      "H": 79,
      "N": 19,
      "O": 1
    },
    "molarMass": "917.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7020",
    "formula": "C65H80N0O2",
    "composition": {
      "C": 65,
      "H": 80,
      "N": 0,
      "O": 2
    },
    "molarMass": "924.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7021",
    "formula": "C66H81N1O3",
    "composition": {
      "C": 66,
      "H": 81,
      "N": 1,
      "O": 3
    },
    "molarMass": "930.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7022",
    "formula": "C67H82N2O4",
    "composition": {
      "C": 67,
      "H": 82,
      "N": 2,
      "O": 4
    },
    "molarMass": "936.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7023",
    "formula": "C68H83N3O5",
    "composition": {
      "C": 68,
      "H": 83,
      "N": 3,
      "O": 5
    },
    "molarMass": "942.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7024",
    "formula": "C69H84N4O6",
    "composition": {
      "C": 69,
      "H": 84,
      "N": 4,
      "O": 6
    },
    "molarMass": "948.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7025",
    "formula": "C70H85N5O7",
    "composition": {
      "C": 70,
      "H": 85,
      "N": 5,
      "O": 7
    },
    "molarMass": "955.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7026",
    "formula": "C71H86N6O8",
    "composition": {
      "C": 71,
      "H": 86,
      "N": 6,
      "O": 8
    },
    "molarMass": "961.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7027",
    "formula": "C72H87N7O9",
    "composition": {
      "C": 72,
      "H": 87,
      "N": 7,
      "O": 9
    },
    "molarMass": "967.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7028",
    "formula": "C73H88N8O10",
    "composition": {
      "C": 73,
      "H": 88,
      "N": 8,
      "O": 10
    },
    "molarMass": "973.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7029",
    "formula": "C74H89N9O11",
    "composition": {
      "C": 74,
      "H": 89,
      "N": 9,
      "O": 11
    },
    "molarMass": "979.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7030",
    "formula": "C75H90N10O12",
    "composition": {
      "C": 75,
      "H": 90,
      "N": 10,
      "O": 12
    },
    "molarMass": "986.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7031",
    "formula": "C76H91N11O13",
    "composition": {
      "C": 76,
      "H": 91,
      "N": 11,
      "O": 13
    },
    "molarMass": "992.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7032",
    "formula": "C77H92N12O14",
    "composition": {
      "C": 77,
      "H": 92,
      "N": 12,
      "O": 14
    },
    "molarMass": "998.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7033",
    "formula": "C78H93N13O15",
    "composition": {
      "C": 78,
      "H": 93,
      "N": 13,
      "O": 15
    },
    "molarMass": "1004.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7034",
    "formula": "C79H94N14O16",
    "composition": {
      "C": 79,
      "H": 94,
      "N": 14,
      "O": 16
    },
    "molarMass": "1010.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7035",
    "formula": "C80H95N15O17",
    "composition": {
      "C": 80,
      "H": 95,
      "N": 15,
      "O": 17
    },
    "molarMass": "1017.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7036",
    "formula": "C81H96N16O0",
    "composition": {
      "C": 81,
      "H": 96,
      "N": 16,
      "O": 0
    },
    "molarMass": "1023.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7037",
    "formula": "C82H97N17O1",
    "composition": {
      "C": 82,
      "H": 97,
      "N": 17,
      "O": 1
    },
    "molarMass": "1029.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7038",
    "formula": "C83H98N18O2",
    "composition": {
      "C": 83,
      "H": 98,
      "N": 18,
      "O": 2
    },
    "molarMass": "1035.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7039",
    "formula": "C84H99N19O3",
    "composition": {
      "C": 84,
      "H": 99,
      "N": 19,
      "O": 3
    },
    "molarMass": "1041.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7040",
    "formula": "C85H100N0O4",
    "composition": {
      "C": 85,
      "H": 100,
      "N": 0,
      "O": 4
    },
    "molarMass": "1048.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7041",
    "formula": "C86H101N1O5",
    "composition": {
      "C": 86,
      "H": 101,
      "N": 1,
      "O": 5
    },
    "molarMass": "1054.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7042",
    "formula": "C87H102N2O6",
    "composition": {
      "C": 87,
      "H": 102,
      "N": 2,
      "O": 6
    },
    "molarMass": "1060.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7043",
    "formula": "C88H103N3O7",
    "composition": {
      "C": 88,
      "H": 103,
      "N": 3,
      "O": 7
    },
    "molarMass": "1066.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7044",
    "formula": "C89H104N4O8",
    "composition": {
      "C": 89,
      "H": 104,
      "N": 4,
      "O": 8
    },
    "molarMass": "1072.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7045",
    "formula": "C90H105N5O9",
    "composition": {
      "C": 90,
      "H": 105,
      "N": 5,
      "O": 9
    },
    "molarMass": "1079.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7046",
    "formula": "C91H106N6O10",
    "composition": {
      "C": 91,
      "H": 106,
      "N": 6,
      "O": 10
    },
    "molarMass": "1085.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7047",
    "formula": "C92H107N7O11",
    "composition": {
      "C": 92,
      "H": 107,
      "N": 7,
      "O": 11
    },
    "molarMass": "1091.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7048",
    "formula": "C93H108N8O12",
    "composition": {
      "C": 93,
      "H": 108,
      "N": 8,
      "O": 12
    },
    "molarMass": "1097.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7049",
    "formula": "C94H109N9O13",
    "composition": {
      "C": 94,
      "H": 109,
      "N": 9,
      "O": 13
    },
    "molarMass": "1103.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7050",
    "formula": "C95H110N10O14",
    "composition": {
      "C": 95,
      "H": 110,
      "N": 10,
      "O": 14
    },
    "molarMass": "1110.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7051",
    "formula": "C96H111N11O15",
    "composition": {
      "C": 96,
      "H": 111,
      "N": 11,
      "O": 15
    },
    "molarMass": "1116.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7052",
    "formula": "C97H112N12O16",
    "composition": {
      "C": 97,
      "H": 112,
      "N": 12,
      "O": 16
    },
    "molarMass": "1122.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7053",
    "formula": "C98H113N13O17",
    "composition": {
      "C": 98,
      "H": 113,
      "N": 13,
      "O": 17
    },
    "molarMass": "1128.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7054",
    "formula": "C99H114N14O0",
    "composition": {
      "C": 99,
      "H": 114,
      "N": 14,
      "O": 0
    },
    "molarMass": "1134.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7055",
    "formula": "C100H115N15O1",
    "composition": {
      "C": 100,
      "H": 115,
      "N": 15,
      "O": 1
    },
    "molarMass": "1141.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7056",
    "formula": "C101H116N16O2",
    "composition": {
      "C": 101,
      "H": 116,
      "N": 16,
      "O": 2
    },
    "molarMass": "1147.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7057",
    "formula": "C102H117N17O3",
    "composition": {
      "C": 102,
      "H": 117,
      "N": 17,
      "O": 3
    },
    "molarMass": "1153.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7058",
    "formula": "C103H118N18O4",
    "composition": {
      "C": 103,
      "H": 118,
      "N": 18,
      "O": 4
    },
    "molarMass": "1159.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7059",
    "formula": "C104H119N19O5",
    "composition": {
      "C": 104,
      "H": 119,
      "N": 19,
      "O": 5
    },
    "molarMass": "1165.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7060",
    "formula": "C105H120N0O6",
    "composition": {
      "C": 105,
      "H": 120,
      "N": 0,
      "O": 6
    },
    "molarMass": "1172.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7061",
    "formula": "C106H121N1O7",
    "composition": {
      "C": 106,
      "H": 121,
      "N": 1,
      "O": 7
    },
    "molarMass": "1178.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7062",
    "formula": "C107H122N2O8",
    "composition": {
      "C": 107,
      "H": 122,
      "N": 2,
      "O": 8
    },
    "molarMass": "1184.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7063",
    "formula": "C108H123N3O9",
    "composition": {
      "C": 108,
      "H": 123,
      "N": 3,
      "O": 9
    },
    "molarMass": "1190.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7064",
    "formula": "C109H124N4O10",
    "composition": {
      "C": 109,
      "H": 124,
      "N": 4,
      "O": 10
    },
    "molarMass": "1196.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7065",
    "formula": "C110H125N5O11",
    "composition": {
      "C": 110,
      "H": 125,
      "N": 5,
      "O": 11
    },
    "molarMass": "1203.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7066",
    "formula": "C111H126N6O12",
    "composition": {
      "C": 111,
      "H": 126,
      "N": 6,
      "O": 12
    },
    "molarMass": "1209.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7067",
    "formula": "C112H127N7O13",
    "composition": {
      "C": 112,
      "H": 127,
      "N": 7,
      "O": 13
    },
    "molarMass": "1215.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7068",
    "formula": "C113H128N8O14",
    "composition": {
      "C": 113,
      "H": 128,
      "N": 8,
      "O": 14
    },
    "molarMass": "1221.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7069",
    "formula": "C114H129N9O15",
    "composition": {
      "C": 114,
      "H": 129,
      "N": 9,
      "O": 15
    },
    "molarMass": "1227.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7070",
    "formula": "C115H130N10O16",
    "composition": {
      "C": 115,
      "H": 130,
      "N": 10,
      "O": 16
    },
    "molarMass": "1234.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7071",
    "formula": "C116H131N11O17",
    "composition": {
      "C": 116,
      "H": 131,
      "N": 11,
      "O": 17
    },
    "molarMass": "1240.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7072",
    "formula": "C117H132N12O0",
    "composition": {
      "C": 117,
      "H": 132,
      "N": 12,
      "O": 0
    },
    "molarMass": "1246.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7073",
    "formula": "C118H133N13O1",
    "composition": {
      "C": 118,
      "H": 133,
      "N": 13,
      "O": 1
    },
    "molarMass": "1252.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7074",
    "formula": "C119H134N14O2",
    "composition": {
      "C": 119,
      "H": 134,
      "N": 14,
      "O": 2
    },
    "molarMass": "1258.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7075",
    "formula": "C120H135N15O3",
    "composition": {
      "C": 120,
      "H": 135,
      "N": 15,
      "O": 3
    },
    "molarMass": "1265.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7076",
    "formula": "C121H136N16O4",
    "composition": {
      "C": 121,
      "H": 136,
      "N": 16,
      "O": 4
    },
    "molarMass": "1271.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7077",
    "formula": "C122H137N17O5",
    "composition": {
      "C": 122,
      "H": 137,
      "N": 17,
      "O": 5
    },
    "molarMass": "1277.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7078",
    "formula": "C123H138N18O6",
    "composition": {
      "C": 123,
      "H": 138,
      "N": 18,
      "O": 6
    },
    "molarMass": "1283.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7079",
    "formula": "C124H139N19O7",
    "composition": {
      "C": 124,
      "H": 139,
      "N": 19,
      "O": 7
    },
    "molarMass": "1289.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7080",
    "formula": "C125H140N0O8",
    "composition": {
      "C": 125,
      "H": 140,
      "N": 0,
      "O": 8
    },
    "molarMass": "1296.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7081",
    "formula": "C126H141N1O9",
    "composition": {
      "C": 126,
      "H": 141,
      "N": 1,
      "O": 9
    },
    "molarMass": "1302.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7082",
    "formula": "C127H142N2O10",
    "composition": {
      "C": 127,
      "H": 142,
      "N": 2,
      "O": 10
    },
    "molarMass": "1308.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7083",
    "formula": "C128H143N3O11",
    "composition": {
      "C": 128,
      "H": 143,
      "N": 3,
      "O": 11
    },
    "molarMass": "1314.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7084",
    "formula": "C129H144N4O12",
    "composition": {
      "C": 129,
      "H": 144,
      "N": 4,
      "O": 12
    },
    "molarMass": "1320.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7085",
    "formula": "C130H145N5O13",
    "composition": {
      "C": 130,
      "H": 145,
      "N": 5,
      "O": 13
    },
    "molarMass": "1327.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7086",
    "formula": "C131H146N6O14",
    "composition": {
      "C": 131,
      "H": 146,
      "N": 6,
      "O": 14
    },
    "molarMass": "1333.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7087",
    "formula": "C132H147N7O15",
    "composition": {
      "C": 132,
      "H": 147,
      "N": 7,
      "O": 15
    },
    "molarMass": "1339.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7088",
    "formula": "C133H148N8O16",
    "composition": {
      "C": 133,
      "H": 148,
      "N": 8,
      "O": 16
    },
    "molarMass": "1345.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7089",
    "formula": "C134H149N9O17",
    "composition": {
      "C": 134,
      "H": 149,
      "N": 9,
      "O": 17
    },
    "molarMass": "1351.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7090",
    "formula": "C135H150N10O0",
    "composition": {
      "C": 135,
      "H": 150,
      "N": 10,
      "O": 0
    },
    "molarMass": "1358.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7091",
    "formula": "C136H151N11O1",
    "composition": {
      "C": 136,
      "H": 151,
      "N": 11,
      "O": 1
    },
    "molarMass": "1364.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7092",
    "formula": "C137H152N12O2",
    "composition": {
      "C": 137,
      "H": 152,
      "N": 12,
      "O": 2
    },
    "molarMass": "1370.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7093",
    "formula": "C138H153N13O3",
    "composition": {
      "C": 138,
      "H": 153,
      "N": 13,
      "O": 3
    },
    "molarMass": "1376.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7094",
    "formula": "C139H154N14O4",
    "composition": {
      "C": 139,
      "H": 154,
      "N": 14,
      "O": 4
    },
    "molarMass": "1382.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7095",
    "formula": "C140H155N15O5",
    "composition": {
      "C": 140,
      "H": 155,
      "N": 15,
      "O": 5
    },
    "molarMass": "1389.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7096",
    "formula": "C141H156N16O6",
    "composition": {
      "C": 141,
      "H": 156,
      "N": 16,
      "O": 6
    },
    "molarMass": "1395.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7097",
    "formula": "C142H157N17O7",
    "composition": {
      "C": 142,
      "H": 157,
      "N": 17,
      "O": 7
    },
    "molarMass": "1401.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7098",
    "formula": "C143H158N18O8",
    "composition": {
      "C": 143,
      "H": 158,
      "N": 18,
      "O": 8
    },
    "molarMass": "1407.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7099",
    "formula": "C144H159N19O9",
    "composition": {
      "C": 144,
      "H": 159,
      "N": 19,
      "O": 9
    },
    "molarMass": "1413.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7100",
    "formula": "C145H160N0O10",
    "composition": {
      "C": 145,
      "H": 160,
      "N": 0,
      "O": 10
    },
    "molarMass": "1420.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7101",
    "formula": "C146H161N1O11",
    "composition": {
      "C": 146,
      "H": 161,
      "N": 1,
      "O": 11
    },
    "molarMass": "1426.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7102",
    "formula": "C147H162N2O12",
    "composition": {
      "C": 147,
      "H": 162,
      "N": 2,
      "O": 12
    },
    "molarMass": "1432.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7103",
    "formula": "C148H163N3O13",
    "composition": {
      "C": 148,
      "H": 163,
      "N": 3,
      "O": 13
    },
    "molarMass": "1438.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7104",
    "formula": "C149H164N4O14",
    "composition": {
      "C": 149,
      "H": 164,
      "N": 4,
      "O": 14
    },
    "molarMass": "1444.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7105",
    "formula": "C150H165N5O15",
    "composition": {
      "C": 150,
      "H": 165,
      "N": 5,
      "O": 15
    },
    "molarMass": "1451.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7106",
    "formula": "C151H166N6O16",
    "composition": {
      "C": 151,
      "H": 166,
      "N": 6,
      "O": 16
    },
    "molarMass": "1457.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7107",
    "formula": "C152H167N7O17",
    "composition": {
      "C": 152,
      "H": 167,
      "N": 7,
      "O": 17
    },
    "molarMass": "1463.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7108",
    "formula": "C153H168N8O0",
    "composition": {
      "C": 153,
      "H": 168,
      "N": 8,
      "O": 0
    },
    "molarMass": "1469.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7109",
    "formula": "C154H169N9O1",
    "composition": {
      "C": 154,
      "H": 169,
      "N": 9,
      "O": 1
    },
    "molarMass": "1475.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7110",
    "formula": "C155H170N10O2",
    "composition": {
      "C": 155,
      "H": 170,
      "N": 10,
      "O": 2
    },
    "molarMass": "1482.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7111",
    "formula": "C156H171N11O3",
    "composition": {
      "C": 156,
      "H": 171,
      "N": 11,
      "O": 3
    },
    "molarMass": "1488.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7112",
    "formula": "C157H172N12O4",
    "composition": {
      "C": 157,
      "H": 172,
      "N": 12,
      "O": 4
    },
    "molarMass": "1494.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7113",
    "formula": "C158H173N13O5",
    "composition": {
      "C": 158,
      "H": 173,
      "N": 13,
      "O": 5
    },
    "molarMass": "1500.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7114",
    "formula": "C159H174N14O6",
    "composition": {
      "C": 159,
      "H": 174,
      "N": 14,
      "O": 6
    },
    "molarMass": "1506.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7115",
    "formula": "C160H175N15O7",
    "composition": {
      "C": 160,
      "H": 175,
      "N": 15,
      "O": 7
    },
    "molarMass": "1513.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7116",
    "formula": "C161H176N16O8",
    "composition": {
      "C": 161,
      "H": 176,
      "N": 16,
      "O": 8
    },
    "molarMass": "1519.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7117",
    "formula": "C162H177N17O9",
    "composition": {
      "C": 162,
      "H": 177,
      "N": 17,
      "O": 9
    },
    "molarMass": "1525.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7118",
    "formula": "C163H178N18O10",
    "composition": {
      "C": 163,
      "H": 178,
      "N": 18,
      "O": 10
    },
    "molarMass": "1531.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7119",
    "formula": "C164H179N19O11",
    "composition": {
      "C": 164,
      "H": 179,
      "N": 19,
      "O": 11
    },
    "molarMass": "1537.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7120",
    "formula": "C165H180N0O12",
    "composition": {
      "C": 165,
      "H": 180,
      "N": 0,
      "O": 12
    },
    "molarMass": "1544.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7121",
    "formula": "C166H181N1O13",
    "composition": {
      "C": 166,
      "H": 181,
      "N": 1,
      "O": 13
    },
    "molarMass": "1550.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7122",
    "formula": "C167H182N2O14",
    "composition": {
      "C": 167,
      "H": 182,
      "N": 2,
      "O": 14
    },
    "molarMass": "1556.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7123",
    "formula": "C168H183N3O15",
    "composition": {
      "C": 168,
      "H": 183,
      "N": 3,
      "O": 15
    },
    "molarMass": "1562.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7124",
    "formula": "C169H184N4O16",
    "composition": {
      "C": 169,
      "H": 184,
      "N": 4,
      "O": 16
    },
    "molarMass": "1568.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7125",
    "formula": "C170H185N5O17",
    "composition": {
      "C": 170,
      "H": 185,
      "N": 5,
      "O": 17
    },
    "molarMass": "1575.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7126",
    "formula": "C171H186N6O0",
    "composition": {
      "C": 171,
      "H": 186,
      "N": 6,
      "O": 0
    },
    "molarMass": "1581.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7127",
    "formula": "C172H187N7O1",
    "composition": {
      "C": 172,
      "H": 187,
      "N": 7,
      "O": 1
    },
    "molarMass": "1587.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7128",
    "formula": "C173H188N8O2",
    "composition": {
      "C": 173,
      "H": 188,
      "N": 8,
      "O": 2
    },
    "molarMass": "1593.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7129",
    "formula": "C174H189N9O3",
    "composition": {
      "C": 174,
      "H": 189,
      "N": 9,
      "O": 3
    },
    "molarMass": "1599.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7130",
    "formula": "C175H190N10O4",
    "composition": {
      "C": 175,
      "H": 190,
      "N": 10,
      "O": 4
    },
    "molarMass": "1606.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7131",
    "formula": "C176H191N11O5",
    "composition": {
      "C": 176,
      "H": 191,
      "N": 11,
      "O": 5
    },
    "molarMass": "1612.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7132",
    "formula": "C177H192N12O6",
    "composition": {
      "C": 177,
      "H": 192,
      "N": 12,
      "O": 6
    },
    "molarMass": "1618.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7133",
    "formula": "C178H193N13O7",
    "composition": {
      "C": 178,
      "H": 193,
      "N": 13,
      "O": 7
    },
    "molarMass": "1624.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7134",
    "formula": "C179H194N14O8",
    "composition": {
      "C": 179,
      "H": 194,
      "N": 14,
      "O": 8
    },
    "molarMass": "1630.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7135",
    "formula": "C180H195N15O9",
    "composition": {
      "C": 180,
      "H": 195,
      "N": 15,
      "O": 9
    },
    "molarMass": "1637.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7136",
    "formula": "C181H196N16O10",
    "composition": {
      "C": 181,
      "H": 196,
      "N": 16,
      "O": 10
    },
    "molarMass": "1643.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7137",
    "formula": "C182H197N17O11",
    "composition": {
      "C": 182,
      "H": 197,
      "N": 17,
      "O": 11
    },
    "molarMass": "1649.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7138",
    "formula": "C183H198N18O12",
    "composition": {
      "C": 183,
      "H": 198,
      "N": 18,
      "O": 12
    },
    "molarMass": "1655.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7139",
    "formula": "C184H199N19O13",
    "composition": {
      "C": 184,
      "H": 199,
      "N": 19,
      "O": 13
    },
    "molarMass": "1661.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7140",
    "formula": "C185H200N0O14",
    "composition": {
      "C": 185,
      "H": 200,
      "N": 0,
      "O": 14
    },
    "molarMass": "1668.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7141",
    "formula": "C186H201N1O15",
    "composition": {
      "C": 186,
      "H": 201,
      "N": 1,
      "O": 15
    },
    "molarMass": "1674.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7142",
    "formula": "C187H202N2O16",
    "composition": {
      "C": 187,
      "H": 202,
      "N": 2,
      "O": 16
    },
    "molarMass": "1680.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7143",
    "formula": "C188H203N3O17",
    "composition": {
      "C": 188,
      "H": 203,
      "N": 3,
      "O": 17
    },
    "molarMass": "1686.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7144",
    "formula": "C189H204N4O0",
    "composition": {
      "C": 189,
      "H": 204,
      "N": 4,
      "O": 0
    },
    "molarMass": "1692.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7145",
    "formula": "C190H205N5O1",
    "composition": {
      "C": 190,
      "H": 205,
      "N": 5,
      "O": 1
    },
    "molarMass": "1699.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7146",
    "formula": "C191H206N6O2",
    "composition": {
      "C": 191,
      "H": 206,
      "N": 6,
      "O": 2
    },
    "molarMass": "1705.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7147",
    "formula": "C192H207N7O3",
    "composition": {
      "C": 192,
      "H": 207,
      "N": 7,
      "O": 3
    },
    "molarMass": "1711.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7148",
    "formula": "C193H208N8O4",
    "composition": {
      "C": 193,
      "H": 208,
      "N": 8,
      "O": 4
    },
    "molarMass": "1717.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7149",
    "formula": "C194H209N9O5",
    "composition": {
      "C": 194,
      "H": 209,
      "N": 9,
      "O": 5
    },
    "molarMass": "1723.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7150",
    "formula": "C195H210N10O6",
    "composition": {
      "C": 195,
      "H": 210,
      "N": 10,
      "O": 6
    },
    "molarMass": "1730.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7151",
    "formula": "C196H211N11O7",
    "composition": {
      "C": 196,
      "H": 211,
      "N": 11,
      "O": 7
    },
    "molarMass": "1736.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7152",
    "formula": "C197H212N12O8",
    "composition": {
      "C": 197,
      "H": 212,
      "N": 12,
      "O": 8
    },
    "molarMass": "1742.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7153",
    "formula": "C198H213N13O9",
    "composition": {
      "C": 198,
      "H": 213,
      "N": 13,
      "O": 9
    },
    "molarMass": "1748.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7154",
    "formula": "C199H214N14O10",
    "composition": {
      "C": 199,
      "H": 214,
      "N": 14,
      "O": 10
    },
    "molarMass": "1754.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7155",
    "formula": "C200H215N15O11",
    "composition": {
      "C": 200,
      "H": 215,
      "N": 15,
      "O": 11
    },
    "molarMass": "1761.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7156",
    "formula": "C201H216N16O12",
    "composition": {
      "C": 201,
      "H": 216,
      "N": 16,
      "O": 12
    },
    "molarMass": "1767.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7157",
    "formula": "C202H217N17O13",
    "composition": {
      "C": 202,
      "H": 217,
      "N": 17,
      "O": 13
    },
    "molarMass": "1773.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7158",
    "formula": "C203H218N18O14",
    "composition": {
      "C": 203,
      "H": 218,
      "N": 18,
      "O": 14
    },
    "molarMass": "1779.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7159",
    "formula": "C204H219N19O15",
    "composition": {
      "C": 204,
      "H": 219,
      "N": 19,
      "O": 15
    },
    "molarMass": "1785.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7160",
    "formula": "C205H220N0O16",
    "composition": {
      "C": 205,
      "H": 220,
      "N": 0,
      "O": 16
    },
    "molarMass": "1792.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7161",
    "formula": "C206H221N1O17",
    "composition": {
      "C": 206,
      "H": 221,
      "N": 1,
      "O": 17
    },
    "molarMass": "1798.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7162",
    "formula": "C207H222N2O0",
    "composition": {
      "C": 207,
      "H": 222,
      "N": 2,
      "O": 0
    },
    "molarMass": "1804.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7163",
    "formula": "C208H223N3O1",
    "composition": {
      "C": 208,
      "H": 223,
      "N": 3,
      "O": 1
    },
    "molarMass": "1810.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7164",
    "formula": "C209H224N4O2",
    "composition": {
      "C": 209,
      "H": 224,
      "N": 4,
      "O": 2
    },
    "molarMass": "1816.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7165",
    "formula": "C210H225N5O3",
    "composition": {
      "C": 210,
      "H": 225,
      "N": 5,
      "O": 3
    },
    "molarMass": "1823.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7166",
    "formula": "C211H226N6O4",
    "composition": {
      "C": 211,
      "H": 226,
      "N": 6,
      "O": 4
    },
    "molarMass": "1829.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7167",
    "formula": "C212H227N7O5",
    "composition": {
      "C": 212,
      "H": 227,
      "N": 7,
      "O": 5
    },
    "molarMass": "1835.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7168",
    "formula": "C213H228N8O6",
    "composition": {
      "C": 213,
      "H": 228,
      "N": 8,
      "O": 6
    },
    "molarMass": "1841.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7169",
    "formula": "C214H229N9O7",
    "composition": {
      "C": 214,
      "H": 229,
      "N": 9,
      "O": 7
    },
    "molarMass": "1847.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7170",
    "formula": "C215H230N10O8",
    "composition": {
      "C": 215,
      "H": 230,
      "N": 10,
      "O": 8
    },
    "molarMass": "1854.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7171",
    "formula": "C216H231N11O9",
    "composition": {
      "C": 216,
      "H": 231,
      "N": 11,
      "O": 9
    },
    "molarMass": "1860.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7172",
    "formula": "C217H232N12O10",
    "composition": {
      "C": 217,
      "H": 232,
      "N": 12,
      "O": 10
    },
    "molarMass": "1866.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7173",
    "formula": "C218H233N13O11",
    "composition": {
      "C": 218,
      "H": 233,
      "N": 13,
      "O": 11
    },
    "molarMass": "1872.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7174",
    "formula": "C219H234N14O12",
    "composition": {
      "C": 219,
      "H": 234,
      "N": 14,
      "O": 12
    },
    "molarMass": "1878.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7175",
    "formula": "C220H235N15O13",
    "composition": {
      "C": 220,
      "H": 235,
      "N": 15,
      "O": 13
    },
    "molarMass": "1885.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7176",
    "formula": "C221H236N16O14",
    "composition": {
      "C": 221,
      "H": 236,
      "N": 16,
      "O": 14
    },
    "molarMass": "1891.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7177",
    "formula": "C222H237N17O15",
    "composition": {
      "C": 222,
      "H": 237,
      "N": 17,
      "O": 15
    },
    "molarMass": "1897.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7178",
    "formula": "C223H238N18O16",
    "composition": {
      "C": 223,
      "H": 238,
      "N": 18,
      "O": 16
    },
    "molarMass": "1903.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7179",
    "formula": "C224H239N19O17",
    "composition": {
      "C": 224,
      "H": 239,
      "N": 19,
      "O": 17
    },
    "molarMass": "1909.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7180",
    "formula": "C225H240N0O0",
    "composition": {
      "C": 225,
      "H": 240,
      "N": 0,
      "O": 0
    },
    "molarMass": "1916.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7181",
    "formula": "C226H241N1O1",
    "composition": {
      "C": 226,
      "H": 241,
      "N": 1,
      "O": 1
    },
    "molarMass": "1922.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7182",
    "formula": "C227H242N2O2",
    "composition": {
      "C": 227,
      "H": 242,
      "N": 2,
      "O": 2
    },
    "molarMass": "1928.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7183",
    "formula": "C228H243N3O3",
    "composition": {
      "C": 228,
      "H": 243,
      "N": 3,
      "O": 3
    },
    "molarMass": "1934.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7184",
    "formula": "C229H244N4O4",
    "composition": {
      "C": 229,
      "H": 244,
      "N": 4,
      "O": 4
    },
    "molarMass": "1940.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7185",
    "formula": "C230H245N5O5",
    "composition": {
      "C": 230,
      "H": 245,
      "N": 5,
      "O": 5
    },
    "molarMass": "1947.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7186",
    "formula": "C231H246N6O6",
    "composition": {
      "C": 231,
      "H": 246,
      "N": 6,
      "O": 6
    },
    "molarMass": "1953.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7187",
    "formula": "C232H247N7O7",
    "composition": {
      "C": 232,
      "H": 247,
      "N": 7,
      "O": 7
    },
    "molarMass": "1959.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7188",
    "formula": "C233H248N8O8",
    "composition": {
      "C": 233,
      "H": 248,
      "N": 8,
      "O": 8
    },
    "molarMass": "1965.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7189",
    "formula": "C234H249N9O9",
    "composition": {
      "C": 234,
      "H": 249,
      "N": 9,
      "O": 9
    },
    "molarMass": "1971.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7190",
    "formula": "C235H250N10O10",
    "composition": {
      "C": 235,
      "H": 250,
      "N": 10,
      "O": 10
    },
    "molarMass": "1978.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7191",
    "formula": "C236H251N11O11",
    "composition": {
      "C": 236,
      "H": 251,
      "N": 11,
      "O": 11
    },
    "molarMass": "1984.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7192",
    "formula": "C237H252N12O12",
    "composition": {
      "C": 237,
      "H": 252,
      "N": 12,
      "O": 12
    },
    "molarMass": "1990.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7193",
    "formula": "C238H253N13O13",
    "composition": {
      "C": 238,
      "H": 253,
      "N": 13,
      "O": 13
    },
    "molarMass": "1996.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7194",
    "formula": "C239H254N14O14",
    "composition": {
      "C": 239,
      "H": 254,
      "N": 14,
      "O": 14
    },
    "molarMass": "2002.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7195",
    "formula": "C240H255N15O15",
    "composition": {
      "C": 240,
      "H": 255,
      "N": 15,
      "O": 15
    },
    "molarMass": "2009.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7196",
    "formula": "C241H256N16O16",
    "composition": {
      "C": 241,
      "H": 256,
      "N": 16,
      "O": 16
    },
    "molarMass": "2015.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7197",
    "formula": "C242H257N17O17",
    "composition": {
      "C": 242,
      "H": 257,
      "N": 17,
      "O": 17
    },
    "molarMass": "2021.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7198",
    "formula": "C243H258N18O0",
    "composition": {
      "C": 243,
      "H": 258,
      "N": 18,
      "O": 0
    },
    "molarMass": "2027.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7199",
    "formula": "C244H259N19O1",
    "composition": {
      "C": 244,
      "H": 259,
      "N": 19,
      "O": 1
    },
    "molarMass": "2033.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7200",
    "formula": "C245H260N0O2",
    "composition": {
      "C": 245,
      "H": 260,
      "N": 0,
      "O": 2
    },
    "molarMass": "2040.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7201",
    "formula": "C246H261N1O3",
    "composition": {
      "C": 246,
      "H": 261,
      "N": 1,
      "O": 3
    },
    "molarMass": "2046.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7202",
    "formula": "C247H262N2O4",
    "composition": {
      "C": 247,
      "H": 262,
      "N": 2,
      "O": 4
    },
    "molarMass": "2052.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7203",
    "formula": "C248H263N3O5",
    "composition": {
      "C": 248,
      "H": 263,
      "N": 3,
      "O": 5
    },
    "molarMass": "2058.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7204",
    "formula": "C249H264N4O6",
    "composition": {
      "C": 249,
      "H": 264,
      "N": 4,
      "O": 6
    },
    "molarMass": "2064.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7205",
    "formula": "C250H265N5O7",
    "composition": {
      "C": 250,
      "H": 265,
      "N": 5,
      "O": 7
    },
    "molarMass": "2071.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7206",
    "formula": "C251H266N6O8",
    "composition": {
      "C": 251,
      "H": 266,
      "N": 6,
      "O": 8
    },
    "molarMass": "2077.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7207",
    "formula": "C252H267N7O9",
    "composition": {
      "C": 252,
      "H": 267,
      "N": 7,
      "O": 9
    },
    "molarMass": "2083.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7208",
    "formula": "C253H268N8O10",
    "composition": {
      "C": 253,
      "H": 268,
      "N": 8,
      "O": 10
    },
    "molarMass": "2089.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7209",
    "formula": "C254H269N9O11",
    "composition": {
      "C": 254,
      "H": 269,
      "N": 9,
      "O": 11
    },
    "molarMass": "2095.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7210",
    "formula": "C255H270N10O12",
    "composition": {
      "C": 255,
      "H": 270,
      "N": 10,
      "O": 12
    },
    "molarMass": "2102.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7211",
    "formula": "C256H271N11O13",
    "composition": {
      "C": 256,
      "H": 271,
      "N": 11,
      "O": 13
    },
    "molarMass": "2108.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7212",
    "formula": "C257H272N12O14",
    "composition": {
      "C": 257,
      "H": 272,
      "N": 12,
      "O": 14
    },
    "molarMass": "2114.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7213",
    "formula": "C258H273N13O15",
    "composition": {
      "C": 258,
      "H": 273,
      "N": 13,
      "O": 15
    },
    "molarMass": "2120.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7214",
    "formula": "C259H274N14O16",
    "composition": {
      "C": 259,
      "H": 274,
      "N": 14,
      "O": 16
    },
    "molarMass": "2126.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7215",
    "formula": "C260H275N15O17",
    "composition": {
      "C": 260,
      "H": 275,
      "N": 15,
      "O": 17
    },
    "molarMass": "2133.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7216",
    "formula": "C261H276N16O0",
    "composition": {
      "C": 261,
      "H": 276,
      "N": 16,
      "O": 0
    },
    "molarMass": "2139.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7217",
    "formula": "C262H277N17O1",
    "composition": {
      "C": 262,
      "H": 277,
      "N": 17,
      "O": 1
    },
    "molarMass": "2145.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7218",
    "formula": "C263H278N18O2",
    "composition": {
      "C": 263,
      "H": 278,
      "N": 18,
      "O": 2
    },
    "molarMass": "2151.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7219",
    "formula": "C264H279N19O3",
    "composition": {
      "C": 264,
      "H": 279,
      "N": 19,
      "O": 3
    },
    "molarMass": "2157.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7220",
    "formula": "C265H280N0O4",
    "composition": {
      "C": 265,
      "H": 280,
      "N": 0,
      "O": 4
    },
    "molarMass": "2164.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7221",
    "formula": "C266H281N1O5",
    "composition": {
      "C": 266,
      "H": 281,
      "N": 1,
      "O": 5
    },
    "molarMass": "2170.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7222",
    "formula": "C267H282N2O6",
    "composition": {
      "C": 267,
      "H": 282,
      "N": 2,
      "O": 6
    },
    "molarMass": "2176.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7223",
    "formula": "C268H283N3O7",
    "composition": {
      "C": 268,
      "H": 283,
      "N": 3,
      "O": 7
    },
    "molarMass": "2182.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7224",
    "formula": "C269H284N4O8",
    "composition": {
      "C": 269,
      "H": 284,
      "N": 4,
      "O": 8
    },
    "molarMass": "2188.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7225",
    "formula": "C270H285N5O9",
    "composition": {
      "C": 270,
      "H": 285,
      "N": 5,
      "O": 9
    },
    "molarMass": "2195.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7226",
    "formula": "C271H286N6O10",
    "composition": {
      "C": 271,
      "H": 286,
      "N": 6,
      "O": 10
    },
    "molarMass": "2201.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7227",
    "formula": "C272H287N7O11",
    "composition": {
      "C": 272,
      "H": 287,
      "N": 7,
      "O": 11
    },
    "molarMass": "2207.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7228",
    "formula": "C273H288N8O12",
    "composition": {
      "C": 273,
      "H": 288,
      "N": 8,
      "O": 12
    },
    "molarMass": "2213.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7229",
    "formula": "C274H289N9O13",
    "composition": {
      "C": 274,
      "H": 289,
      "N": 9,
      "O": 13
    },
    "molarMass": "2219.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7230",
    "formula": "C275H290N10O14",
    "composition": {
      "C": 275,
      "H": 290,
      "N": 10,
      "O": 14
    },
    "molarMass": "2226.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7231",
    "formula": "C276H291N11O15",
    "composition": {
      "C": 276,
      "H": 291,
      "N": 11,
      "O": 15
    },
    "molarMass": "2232.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7232",
    "formula": "C277H292N12O16",
    "composition": {
      "C": 277,
      "H": 292,
      "N": 12,
      "O": 16
    },
    "molarMass": "2238.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7233",
    "formula": "C278H293N13O17",
    "composition": {
      "C": 278,
      "H": 293,
      "N": 13,
      "O": 17
    },
    "molarMass": "2244.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7234",
    "formula": "C279H294N14O0",
    "composition": {
      "C": 279,
      "H": 294,
      "N": 14,
      "O": 0
    },
    "molarMass": "2250.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7235",
    "formula": "C280H295N15O1",
    "composition": {
      "C": 280,
      "H": 295,
      "N": 15,
      "O": 1
    },
    "molarMass": "2257.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7236",
    "formula": "C281H296N16O2",
    "composition": {
      "C": 281,
      "H": 296,
      "N": 16,
      "O": 2
    },
    "molarMass": "2263.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7237",
    "formula": "C282H297N17O3",
    "composition": {
      "C": 282,
      "H": 297,
      "N": 17,
      "O": 3
    },
    "molarMass": "2269.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7238",
    "formula": "C283H298N18O4",
    "composition": {
      "C": 283,
      "H": 298,
      "N": 18,
      "O": 4
    },
    "molarMass": "2275.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7239",
    "formula": "C284H299N19O5",
    "composition": {
      "C": 284,
      "H": 299,
      "N": 19,
      "O": 5
    },
    "molarMass": "2281.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7240",
    "formula": "C285H300N0O6",
    "composition": {
      "C": 285,
      "H": 300,
      "N": 0,
      "O": 6
    },
    "molarMass": "2288.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7241",
    "formula": "C286H301N1O7",
    "composition": {
      "C": 286,
      "H": 301,
      "N": 1,
      "O": 7
    },
    "molarMass": "2294.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7242",
    "formula": "C287H302N2O8",
    "composition": {
      "C": 287,
      "H": 302,
      "N": 2,
      "O": 8
    },
    "molarMass": "2300.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7243",
    "formula": "C288H303N3O9",
    "composition": {
      "C": 288,
      "H": 303,
      "N": 3,
      "O": 9
    },
    "molarMass": "2306.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7244",
    "formula": "C289H304N4O10",
    "composition": {
      "C": 289,
      "H": 304,
      "N": 4,
      "O": 10
    },
    "molarMass": "2312.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7245",
    "formula": "C290H305N5O11",
    "composition": {
      "C": 290,
      "H": 305,
      "N": 5,
      "O": 11
    },
    "molarMass": "2319.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7246",
    "formula": "C291H306N6O12",
    "composition": {
      "C": 291,
      "H": 306,
      "N": 6,
      "O": 12
    },
    "molarMass": "2325.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7247",
    "formula": "C292H307N7O13",
    "composition": {
      "C": 292,
      "H": 307,
      "N": 7,
      "O": 13
    },
    "molarMass": "2331.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7248",
    "formula": "C293H308N8O14",
    "composition": {
      "C": 293,
      "H": 308,
      "N": 8,
      "O": 14
    },
    "molarMass": "2337.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7249",
    "formula": "C294H309N9O15",
    "composition": {
      "C": 294,
      "H": 309,
      "N": 9,
      "O": 15
    },
    "molarMass": "2343.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7250",
    "formula": "C295H310N10O16",
    "composition": {
      "C": 295,
      "H": 310,
      "N": 10,
      "O": 16
    },
    "molarMass": "2350.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7251",
    "formula": "C296H311N11O17",
    "composition": {
      "C": 296,
      "H": 311,
      "N": 11,
      "O": 17
    },
    "molarMass": "2356.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7252",
    "formula": "C297H312N12O0",
    "composition": {
      "C": 297,
      "H": 312,
      "N": 12,
      "O": 0
    },
    "molarMass": "2362.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7253",
    "formula": "C298H313N13O1",
    "composition": {
      "C": 298,
      "H": 313,
      "N": 13,
      "O": 1
    },
    "molarMass": "2368.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7254",
    "formula": "C299H314N14O2",
    "composition": {
      "C": 299,
      "H": 314,
      "N": 14,
      "O": 2
    },
    "molarMass": "2374.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7255",
    "formula": "C300H315N15O3",
    "composition": {
      "C": 300,
      "H": 315,
      "N": 15,
      "O": 3
    },
    "molarMass": "2381.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7256",
    "formula": "C301H316N16O4",
    "composition": {
      "C": 301,
      "H": 316,
      "N": 16,
      "O": 4
    },
    "molarMass": "2387.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7257",
    "formula": "C302H317N17O5",
    "composition": {
      "C": 302,
      "H": 317,
      "N": 17,
      "O": 5
    },
    "molarMass": "2393.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7258",
    "formula": "C303H318N18O6",
    "composition": {
      "C": 303,
      "H": 318,
      "N": 18,
      "O": 6
    },
    "molarMass": "2399.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7259",
    "formula": "C304H319N19O7",
    "composition": {
      "C": 304,
      "H": 319,
      "N": 19,
      "O": 7
    },
    "molarMass": "2405.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7260",
    "formula": "C305H320N0O8",
    "composition": {
      "C": 305,
      "H": 320,
      "N": 0,
      "O": 8
    },
    "molarMass": "2412.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7261",
    "formula": "C306H321N1O9",
    "composition": {
      "C": 306,
      "H": 321,
      "N": 1,
      "O": 9
    },
    "molarMass": "2418.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7262",
    "formula": "C307H322N2O10",
    "composition": {
      "C": 307,
      "H": 322,
      "N": 2,
      "O": 10
    },
    "molarMass": "2424.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7263",
    "formula": "C308H323N3O11",
    "composition": {
      "C": 308,
      "H": 323,
      "N": 3,
      "O": 11
    },
    "molarMass": "2430.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7264",
    "formula": "C309H324N4O12",
    "composition": {
      "C": 309,
      "H": 324,
      "N": 4,
      "O": 12
    },
    "molarMass": "2436.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7265",
    "formula": "C310H325N5O13",
    "composition": {
      "C": 310,
      "H": 325,
      "N": 5,
      "O": 13
    },
    "molarMass": "2443.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7266",
    "formula": "C311H326N6O14",
    "composition": {
      "C": 311,
      "H": 326,
      "N": 6,
      "O": 14
    },
    "molarMass": "2449.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7267",
    "formula": "C312H327N7O15",
    "composition": {
      "C": 312,
      "H": 327,
      "N": 7,
      "O": 15
    },
    "molarMass": "2455.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7268",
    "formula": "C313H328N8O16",
    "composition": {
      "C": 313,
      "H": 328,
      "N": 8,
      "O": 16
    },
    "molarMass": "2461.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7269",
    "formula": "C314H329N9O17",
    "composition": {
      "C": 314,
      "H": 329,
      "N": 9,
      "O": 17
    },
    "molarMass": "2467.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7270",
    "formula": "C315H330N10O0",
    "composition": {
      "C": 315,
      "H": 330,
      "N": 10,
      "O": 0
    },
    "molarMass": "2474.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7271",
    "formula": "C316H331N11O1",
    "composition": {
      "C": 316,
      "H": 331,
      "N": 11,
      "O": 1
    },
    "molarMass": "2480.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7272",
    "formula": "C317H332N12O2",
    "composition": {
      "C": 317,
      "H": 332,
      "N": 12,
      "O": 2
    },
    "molarMass": "2486.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7273",
    "formula": "C318H333N13O3",
    "composition": {
      "C": 318,
      "H": 333,
      "N": 13,
      "O": 3
    },
    "molarMass": "2492.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7274",
    "formula": "C319H334N14O4",
    "composition": {
      "C": 319,
      "H": 334,
      "N": 14,
      "O": 4
    },
    "molarMass": "2498.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7275",
    "formula": "C320H335N15O5",
    "composition": {
      "C": 320,
      "H": 335,
      "N": 15,
      "O": 5
    },
    "molarMass": "2505.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7276",
    "formula": "C321H336N16O6",
    "composition": {
      "C": 321,
      "H": 336,
      "N": 16,
      "O": 6
    },
    "molarMass": "2511.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7277",
    "formula": "C322H337N17O7",
    "composition": {
      "C": 322,
      "H": 337,
      "N": 17,
      "O": 7
    },
    "molarMass": "2517.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7278",
    "formula": "C323H338N18O8",
    "composition": {
      "C": 323,
      "H": 338,
      "N": 18,
      "O": 8
    },
    "molarMass": "2523.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7279",
    "formula": "C324H339N19O9",
    "composition": {
      "C": 324,
      "H": 339,
      "N": 19,
      "O": 9
    },
    "molarMass": "2529.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7280",
    "formula": "C325H340N0O10",
    "composition": {
      "C": 325,
      "H": 340,
      "N": 0,
      "O": 10
    },
    "molarMass": "2536.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7281",
    "formula": "C326H341N1O11",
    "composition": {
      "C": 326,
      "H": 341,
      "N": 1,
      "O": 11
    },
    "molarMass": "2542.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7282",
    "formula": "C327H342N2O12",
    "composition": {
      "C": 327,
      "H": 342,
      "N": 2,
      "O": 12
    },
    "molarMass": "2548.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7283",
    "formula": "C328H343N3O13",
    "composition": {
      "C": 328,
      "H": 343,
      "N": 3,
      "O": 13
    },
    "molarMass": "2554.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7284",
    "formula": "C329H344N4O14",
    "composition": {
      "C": 329,
      "H": 344,
      "N": 4,
      "O": 14
    },
    "molarMass": "2560.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7285",
    "formula": "C330H345N5O15",
    "composition": {
      "C": 330,
      "H": 345,
      "N": 5,
      "O": 15
    },
    "molarMass": "2567.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7286",
    "formula": "C331H346N6O16",
    "composition": {
      "C": 331,
      "H": 346,
      "N": 6,
      "O": 16
    },
    "molarMass": "2573.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7287",
    "formula": "C332H347N7O17",
    "composition": {
      "C": 332,
      "H": 347,
      "N": 7,
      "O": 17
    },
    "molarMass": "2579.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7288",
    "formula": "C333H348N8O0",
    "composition": {
      "C": 333,
      "H": 348,
      "N": 8,
      "O": 0
    },
    "molarMass": "2585.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7289",
    "formula": "C334H349N9O1",
    "composition": {
      "C": 334,
      "H": 349,
      "N": 9,
      "O": 1
    },
    "molarMass": "2591.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7290",
    "formula": "C335H350N10O2",
    "composition": {
      "C": 335,
      "H": 350,
      "N": 10,
      "O": 2
    },
    "molarMass": "2598.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7291",
    "formula": "C336H351N11O3",
    "composition": {
      "C": 336,
      "H": 351,
      "N": 11,
      "O": 3
    },
    "molarMass": "2604.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7292",
    "formula": "C337H352N12O4",
    "composition": {
      "C": 337,
      "H": 352,
      "N": 12,
      "O": 4
    },
    "molarMass": "2610.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7293",
    "formula": "C338H353N13O5",
    "composition": {
      "C": 338,
      "H": 353,
      "N": 13,
      "O": 5
    },
    "molarMass": "2616.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7294",
    "formula": "C339H354N14O6",
    "composition": {
      "C": 339,
      "H": 354,
      "N": 14,
      "O": 6
    },
    "molarMass": "2622.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7295",
    "formula": "C340H355N15O7",
    "composition": {
      "C": 340,
      "H": 355,
      "N": 15,
      "O": 7
    },
    "molarMass": "2629.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7296",
    "formula": "C341H356N16O8",
    "composition": {
      "C": 341,
      "H": 356,
      "N": 16,
      "O": 8
    },
    "molarMass": "2635.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7297",
    "formula": "C342H357N17O9",
    "composition": {
      "C": 342,
      "H": 357,
      "N": 17,
      "O": 9
    },
    "molarMass": "2641.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7298",
    "formula": "C343H358N18O10",
    "composition": {
      "C": 343,
      "H": 358,
      "N": 18,
      "O": 10
    },
    "molarMass": "2647.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7299",
    "formula": "C344H359N19O11",
    "composition": {
      "C": 344,
      "H": 359,
      "N": 19,
      "O": 11
    },
    "molarMass": "2653.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7300",
    "formula": "C345H360N0O12",
    "composition": {
      "C": 345,
      "H": 360,
      "N": 0,
      "O": 12
    },
    "molarMass": "2660.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7301",
    "formula": "C346H361N1O13",
    "composition": {
      "C": 346,
      "H": 361,
      "N": 1,
      "O": 13
    },
    "molarMass": "2666.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7302",
    "formula": "C347H362N2O14",
    "composition": {
      "C": 347,
      "H": 362,
      "N": 2,
      "O": 14
    },
    "molarMass": "2672.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7303",
    "formula": "C348H363N3O15",
    "composition": {
      "C": 348,
      "H": 363,
      "N": 3,
      "O": 15
    },
    "molarMass": "2678.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7304",
    "formula": "C349H364N4O16",
    "composition": {
      "C": 349,
      "H": 364,
      "N": 4,
      "O": 16
    },
    "molarMass": "2684.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7305",
    "formula": "C350H365N5O17",
    "composition": {
      "C": 350,
      "H": 365,
      "N": 5,
      "O": 17
    },
    "molarMass": "2691.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7306",
    "formula": "C351H366N6O0",
    "composition": {
      "C": 351,
      "H": 366,
      "N": 6,
      "O": 0
    },
    "molarMass": "2697.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7307",
    "formula": "C352H367N7O1",
    "composition": {
      "C": 352,
      "H": 367,
      "N": 7,
      "O": 1
    },
    "molarMass": "2703.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7308",
    "formula": "C353H368N8O2",
    "composition": {
      "C": 353,
      "H": 368,
      "N": 8,
      "O": 2
    },
    "molarMass": "2709.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7309",
    "formula": "C354H369N9O3",
    "composition": {
      "C": 354,
      "H": 369,
      "N": 9,
      "O": 3
    },
    "molarMass": "2715.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7310",
    "formula": "C355H370N10O4",
    "composition": {
      "C": 355,
      "H": 370,
      "N": 10,
      "O": 4
    },
    "molarMass": "2722.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7311",
    "formula": "C356H371N11O5",
    "composition": {
      "C": 356,
      "H": 371,
      "N": 11,
      "O": 5
    },
    "molarMass": "2728.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7312",
    "formula": "C357H372N12O6",
    "composition": {
      "C": 357,
      "H": 372,
      "N": 12,
      "O": 6
    },
    "molarMass": "2734.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7313",
    "formula": "C358H373N13O7",
    "composition": {
      "C": 358,
      "H": 373,
      "N": 13,
      "O": 7
    },
    "molarMass": "2740.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7314",
    "formula": "C359H374N14O8",
    "composition": {
      "C": 359,
      "H": 374,
      "N": 14,
      "O": 8
    },
    "molarMass": "2746.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7315",
    "formula": "C360H375N15O9",
    "composition": {
      "C": 360,
      "H": 375,
      "N": 15,
      "O": 9
    },
    "molarMass": "2753.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7316",
    "formula": "C361H376N16O10",
    "composition": {
      "C": 361,
      "H": 376,
      "N": 16,
      "O": 10
    },
    "molarMass": "2759.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7317",
    "formula": "C362H377N17O11",
    "composition": {
      "C": 362,
      "H": 377,
      "N": 17,
      "O": 11
    },
    "molarMass": "2765.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7318",
    "formula": "C363H378N18O12",
    "composition": {
      "C": 363,
      "H": 378,
      "N": 18,
      "O": 12
    },
    "molarMass": "2771.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7319",
    "formula": "C364H379N19O13",
    "composition": {
      "C": 364,
      "H": 379,
      "N": 19,
      "O": 13
    },
    "molarMass": "2777.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7320",
    "formula": "C365H380N0O14",
    "composition": {
      "C": 365,
      "H": 380,
      "N": 0,
      "O": 14
    },
    "molarMass": "2784.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7321",
    "formula": "C366H381N1O15",
    "composition": {
      "C": 366,
      "H": 381,
      "N": 1,
      "O": 15
    },
    "molarMass": "2790.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7322",
    "formula": "C367H382N2O16",
    "composition": {
      "C": 367,
      "H": 382,
      "N": 2,
      "O": 16
    },
    "molarMass": "2796.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7323",
    "formula": "C368H383N3O17",
    "composition": {
      "C": 368,
      "H": 383,
      "N": 3,
      "O": 17
    },
    "molarMass": "2802.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7324",
    "formula": "C369H384N4O0",
    "composition": {
      "C": 369,
      "H": 384,
      "N": 4,
      "O": 0
    },
    "molarMass": "2808.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7325",
    "formula": "C370H385N5O1",
    "composition": {
      "C": 370,
      "H": 385,
      "N": 5,
      "O": 1
    },
    "molarMass": "2815.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7326",
    "formula": "C371H386N6O2",
    "composition": {
      "C": 371,
      "H": 386,
      "N": 6,
      "O": 2
    },
    "molarMass": "2821.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7327",
    "formula": "C372H387N7O3",
    "composition": {
      "C": 372,
      "H": 387,
      "N": 7,
      "O": 3
    },
    "molarMass": "2827.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7328",
    "formula": "C373H388N8O4",
    "composition": {
      "C": 373,
      "H": 388,
      "N": 8,
      "O": 4
    },
    "molarMass": "2833.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7329",
    "formula": "C374H389N9O5",
    "composition": {
      "C": 374,
      "H": 389,
      "N": 9,
      "O": 5
    },
    "molarMass": "2839.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7330",
    "formula": "C375H390N10O6",
    "composition": {
      "C": 375,
      "H": 390,
      "N": 10,
      "O": 6
    },
    "molarMass": "2846.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7331",
    "formula": "C376H391N11O7",
    "composition": {
      "C": 376,
      "H": 391,
      "N": 11,
      "O": 7
    },
    "molarMass": "2852.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7332",
    "formula": "C377H392N12O8",
    "composition": {
      "C": 377,
      "H": 392,
      "N": 12,
      "O": 8
    },
    "molarMass": "2858.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7333",
    "formula": "C378H393N13O9",
    "composition": {
      "C": 378,
      "H": 393,
      "N": 13,
      "O": 9
    },
    "molarMass": "2864.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7334",
    "formula": "C379H394N14O10",
    "composition": {
      "C": 379,
      "H": 394,
      "N": 14,
      "O": 10
    },
    "molarMass": "2870.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7335",
    "formula": "C380H395N15O11",
    "composition": {
      "C": 380,
      "H": 395,
      "N": 15,
      "O": 11
    },
    "molarMass": "2877.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7336",
    "formula": "C381H396N16O12",
    "composition": {
      "C": 381,
      "H": 396,
      "N": 16,
      "O": 12
    },
    "molarMass": "2883.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7337",
    "formula": "C382H397N17O13",
    "composition": {
      "C": 382,
      "H": 397,
      "N": 17,
      "O": 13
    },
    "molarMass": "2889.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7338",
    "formula": "C383H398N18O14",
    "composition": {
      "C": 383,
      "H": 398,
      "N": 18,
      "O": 14
    },
    "molarMass": "2895.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7339",
    "formula": "C384H399N19O15",
    "composition": {
      "C": 384,
      "H": 399,
      "N": 19,
      "O": 15
    },
    "molarMass": "2901.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7340",
    "formula": "C385H400N0O16",
    "composition": {
      "C": 385,
      "H": 400,
      "N": 0,
      "O": 16
    },
    "molarMass": "2908.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7341",
    "formula": "C386H401N1O17",
    "composition": {
      "C": 386,
      "H": 401,
      "N": 1,
      "O": 17
    },
    "molarMass": "2914.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7342",
    "formula": "C387H402N2O0",
    "composition": {
      "C": 387,
      "H": 402,
      "N": 2,
      "O": 0
    },
    "molarMass": "2920.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7343",
    "formula": "C388H403N3O1",
    "composition": {
      "C": 388,
      "H": 403,
      "N": 3,
      "O": 1
    },
    "molarMass": "2926.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7344",
    "formula": "C389H404N4O2",
    "composition": {
      "C": 389,
      "H": 404,
      "N": 4,
      "O": 2
    },
    "molarMass": "2932.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7345",
    "formula": "C390H405N5O3",
    "composition": {
      "C": 390,
      "H": 405,
      "N": 5,
      "O": 3
    },
    "molarMass": "2939.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7346",
    "formula": "C391H406N6O4",
    "composition": {
      "C": 391,
      "H": 406,
      "N": 6,
      "O": 4
    },
    "molarMass": "2945.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7347",
    "formula": "C392H407N7O5",
    "composition": {
      "C": 392,
      "H": 407,
      "N": 7,
      "O": 5
    },
    "molarMass": "2951.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7348",
    "formula": "C393H408N8O6",
    "composition": {
      "C": 393,
      "H": 408,
      "N": 8,
      "O": 6
    },
    "molarMass": "2957.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7349",
    "formula": "C394H409N9O7",
    "composition": {
      "C": 394,
      "H": 409,
      "N": 9,
      "O": 7
    },
    "molarMass": "2963.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7350",
    "formula": "C395H410N10O8",
    "composition": {
      "C": 395,
      "H": 410,
      "N": 10,
      "O": 8
    },
    "molarMass": "2970.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7351",
    "formula": "C396H411N11O9",
    "composition": {
      "C": 396,
      "H": 411,
      "N": 11,
      "O": 9
    },
    "molarMass": "2976.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7352",
    "formula": "C397H412N12O10",
    "composition": {
      "C": 397,
      "H": 412,
      "N": 12,
      "O": 10
    },
    "molarMass": "2982.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7353",
    "formula": "C398H413N13O11",
    "composition": {
      "C": 398,
      "H": 413,
      "N": 13,
      "O": 11
    },
    "molarMass": "2988.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7354",
    "formula": "C399H414N14O12",
    "composition": {
      "C": 399,
      "H": 414,
      "N": 14,
      "O": 12
    },
    "molarMass": "2994.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7355",
    "formula": "C400H415N15O13",
    "composition": {
      "C": 400,
      "H": 415,
      "N": 15,
      "O": 13
    },
    "molarMass": "3001.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7356",
    "formula": "C401H416N16O14",
    "composition": {
      "C": 401,
      "H": 416,
      "N": 16,
      "O": 14
    },
    "molarMass": "3007.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7357",
    "formula": "C402H417N17O15",
    "composition": {
      "C": 402,
      "H": 417,
      "N": 17,
      "O": 15
    },
    "molarMass": "3013.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7358",
    "formula": "C403H418N18O16",
    "composition": {
      "C": 403,
      "H": 418,
      "N": 18,
      "O": 16
    },
    "molarMass": "3019.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7359",
    "formula": "C404H419N19O17",
    "composition": {
      "C": 404,
      "H": 419,
      "N": 19,
      "O": 17
    },
    "molarMass": "3025.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7360",
    "formula": "C405H420N0O0",
    "composition": {
      "C": 405,
      "H": 420,
      "N": 0,
      "O": 0
    },
    "molarMass": "3032.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7361",
    "formula": "C406H421N1O1",
    "composition": {
      "C": 406,
      "H": 421,
      "N": 1,
      "O": 1
    },
    "molarMass": "3038.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7362",
    "formula": "C407H422N2O2",
    "composition": {
      "C": 407,
      "H": 422,
      "N": 2,
      "O": 2
    },
    "molarMass": "3044.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7363",
    "formula": "C408H423N3O3",
    "composition": {
      "C": 408,
      "H": 423,
      "N": 3,
      "O": 3
    },
    "molarMass": "3050.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7364",
    "formula": "C409H424N4O4",
    "composition": {
      "C": 409,
      "H": 424,
      "N": 4,
      "O": 4
    },
    "molarMass": "3056.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7365",
    "formula": "C410H425N5O5",
    "composition": {
      "C": 410,
      "H": 425,
      "N": 5,
      "O": 5
    },
    "molarMass": "3063.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7366",
    "formula": "C411H426N6O6",
    "composition": {
      "C": 411,
      "H": 426,
      "N": 6,
      "O": 6
    },
    "molarMass": "3069.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7367",
    "formula": "C412H427N7O7",
    "composition": {
      "C": 412,
      "H": 427,
      "N": 7,
      "O": 7
    },
    "molarMass": "3075.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7368",
    "formula": "C413H428N8O8",
    "composition": {
      "C": 413,
      "H": 428,
      "N": 8,
      "O": 8
    },
    "molarMass": "3081.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7369",
    "formula": "C414H429N9O9",
    "composition": {
      "C": 414,
      "H": 429,
      "N": 9,
      "O": 9
    },
    "molarMass": "3087.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7370",
    "formula": "C415H430N10O10",
    "composition": {
      "C": 415,
      "H": 430,
      "N": 10,
      "O": 10
    },
    "molarMass": "3094.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7371",
    "formula": "C416H431N11O11",
    "composition": {
      "C": 416,
      "H": 431,
      "N": 11,
      "O": 11
    },
    "molarMass": "3100.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7372",
    "formula": "C417H432N12O12",
    "composition": {
      "C": 417,
      "H": 432,
      "N": 12,
      "O": 12
    },
    "molarMass": "3106.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7373",
    "formula": "C418H433N13O13",
    "composition": {
      "C": 418,
      "H": 433,
      "N": 13,
      "O": 13
    },
    "molarMass": "3112.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7374",
    "formula": "C419H434N14O14",
    "composition": {
      "C": 419,
      "H": 434,
      "N": 14,
      "O": 14
    },
    "molarMass": "3118.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7375",
    "formula": "C420H435N15O15",
    "composition": {
      "C": 420,
      "H": 435,
      "N": 15,
      "O": 15
    },
    "molarMass": "3125.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7376",
    "formula": "C421H436N16O16",
    "composition": {
      "C": 421,
      "H": 436,
      "N": 16,
      "O": 16
    },
    "molarMass": "3131.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7377",
    "formula": "C422H437N17O17",
    "composition": {
      "C": 422,
      "H": 437,
      "N": 17,
      "O": 17
    },
    "molarMass": "3137.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7378",
    "formula": "C423H438N18O0",
    "composition": {
      "C": 423,
      "H": 438,
      "N": 18,
      "O": 0
    },
    "molarMass": "3143.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7379",
    "formula": "C424H439N19O1",
    "composition": {
      "C": 424,
      "H": 439,
      "N": 19,
      "O": 1
    },
    "molarMass": "3149.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7380",
    "formula": "C425H440N0O2",
    "composition": {
      "C": 425,
      "H": 440,
      "N": 0,
      "O": 2
    },
    "molarMass": "3156.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7381",
    "formula": "C426H441N1O3",
    "composition": {
      "C": 426,
      "H": 441,
      "N": 1,
      "O": 3
    },
    "molarMass": "3162.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7382",
    "formula": "C427H442N2O4",
    "composition": {
      "C": 427,
      "H": 442,
      "N": 2,
      "O": 4
    },
    "molarMass": "3168.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7383",
    "formula": "C428H443N3O5",
    "composition": {
      "C": 428,
      "H": 443,
      "N": 3,
      "O": 5
    },
    "molarMass": "3174.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7384",
    "formula": "C429H444N4O6",
    "composition": {
      "C": 429,
      "H": 444,
      "N": 4,
      "O": 6
    },
    "molarMass": "3180.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7385",
    "formula": "C430H445N5O7",
    "composition": {
      "C": 430,
      "H": 445,
      "N": 5,
      "O": 7
    },
    "molarMass": "3187.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7386",
    "formula": "C431H446N6O8",
    "composition": {
      "C": 431,
      "H": 446,
      "N": 6,
      "O": 8
    },
    "molarMass": "3193.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7387",
    "formula": "C432H447N7O9",
    "composition": {
      "C": 432,
      "H": 447,
      "N": 7,
      "O": 9
    },
    "molarMass": "3199.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7388",
    "formula": "C433H448N8O10",
    "composition": {
      "C": 433,
      "H": 448,
      "N": 8,
      "O": 10
    },
    "molarMass": "3205.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7389",
    "formula": "C434H449N9O11",
    "composition": {
      "C": 434,
      "H": 449,
      "N": 9,
      "O": 11
    },
    "molarMass": "3211.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7390",
    "formula": "C435H450N10O12",
    "composition": {
      "C": 435,
      "H": 450,
      "N": 10,
      "O": 12
    },
    "molarMass": "3218.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7391",
    "formula": "C436H451N11O13",
    "composition": {
      "C": 436,
      "H": 451,
      "N": 11,
      "O": 13
    },
    "molarMass": "3224.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7392",
    "formula": "C437H452N12O14",
    "composition": {
      "C": 437,
      "H": 452,
      "N": 12,
      "O": 14
    },
    "molarMass": "3230.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7393",
    "formula": "C438H453N13O15",
    "composition": {
      "C": 438,
      "H": 453,
      "N": 13,
      "O": 15
    },
    "molarMass": "3236.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7394",
    "formula": "C439H454N14O16",
    "composition": {
      "C": 439,
      "H": 454,
      "N": 14,
      "O": 16
    },
    "molarMass": "3242.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7395",
    "formula": "C440H455N15O17",
    "composition": {
      "C": 440,
      "H": 455,
      "N": 15,
      "O": 17
    },
    "molarMass": "3249.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7396",
    "formula": "C441H456N16O0",
    "composition": {
      "C": 441,
      "H": 456,
      "N": 16,
      "O": 0
    },
    "molarMass": "3255.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7397",
    "formula": "C442H457N17O1",
    "composition": {
      "C": 442,
      "H": 457,
      "N": 17,
      "O": 1
    },
    "molarMass": "3261.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7398",
    "formula": "C443H458N18O2",
    "composition": {
      "C": 443,
      "H": 458,
      "N": 18,
      "O": 2
    },
    "molarMass": "3267.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7399",
    "formula": "C444H459N19O3",
    "composition": {
      "C": 444,
      "H": 459,
      "N": 19,
      "O": 3
    },
    "molarMass": "3273.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7400",
    "formula": "C445H460N0O4",
    "composition": {
      "C": 445,
      "H": 460,
      "N": 0,
      "O": 4
    },
    "molarMass": "3280.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7401",
    "formula": "C446H461N1O5",
    "composition": {
      "C": 446,
      "H": 461,
      "N": 1,
      "O": 5
    },
    "molarMass": "3286.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7402",
    "formula": "C447H462N2O6",
    "composition": {
      "C": 447,
      "H": 462,
      "N": 2,
      "O": 6
    },
    "molarMass": "3292.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7403",
    "formula": "C448H463N3O7",
    "composition": {
      "C": 448,
      "H": 463,
      "N": 3,
      "O": 7
    },
    "molarMass": "3298.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7404",
    "formula": "C449H464N4O8",
    "composition": {
      "C": 449,
      "H": 464,
      "N": 4,
      "O": 8
    },
    "molarMass": "3304.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7405",
    "formula": "C450H465N5O9",
    "composition": {
      "C": 450,
      "H": 465,
      "N": 5,
      "O": 9
    },
    "molarMass": "3311.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7406",
    "formula": "C451H466N6O10",
    "composition": {
      "C": 451,
      "H": 466,
      "N": 6,
      "O": 10
    },
    "molarMass": "3317.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7407",
    "formula": "C452H467N7O11",
    "composition": {
      "C": 452,
      "H": 467,
      "N": 7,
      "O": 11
    },
    "molarMass": "3323.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7408",
    "formula": "C453H468N8O12",
    "composition": {
      "C": 453,
      "H": 468,
      "N": 8,
      "O": 12
    },
    "molarMass": "3329.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7409",
    "formula": "C454H469N9O13",
    "composition": {
      "C": 454,
      "H": 469,
      "N": 9,
      "O": 13
    },
    "molarMass": "3335.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7410",
    "formula": "C455H470N10O14",
    "composition": {
      "C": 455,
      "H": 470,
      "N": 10,
      "O": 14
    },
    "molarMass": "3342.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7411",
    "formula": "C456H471N11O15",
    "composition": {
      "C": 456,
      "H": 471,
      "N": 11,
      "O": 15
    },
    "molarMass": "3348.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7412",
    "formula": "C457H472N12O16",
    "composition": {
      "C": 457,
      "H": 472,
      "N": 12,
      "O": 16
    },
    "molarMass": "3354.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7413",
    "formula": "C458H473N13O17",
    "composition": {
      "C": 458,
      "H": 473,
      "N": 13,
      "O": 17
    },
    "molarMass": "3360.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7414",
    "formula": "C459H474N14O0",
    "composition": {
      "C": 459,
      "H": 474,
      "N": 14,
      "O": 0
    },
    "molarMass": "3366.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7415",
    "formula": "C460H475N15O1",
    "composition": {
      "C": 460,
      "H": 475,
      "N": 15,
      "O": 1
    },
    "molarMass": "3373.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7416",
    "formula": "C461H476N16O2",
    "composition": {
      "C": 461,
      "H": 476,
      "N": 16,
      "O": 2
    },
    "molarMass": "3379.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7417",
    "formula": "C462H477N17O3",
    "composition": {
      "C": 462,
      "H": 477,
      "N": 17,
      "O": 3
    },
    "molarMass": "3385.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7418",
    "formula": "C463H478N18O4",
    "composition": {
      "C": 463,
      "H": 478,
      "N": 18,
      "O": 4
    },
    "molarMass": "3391.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7419",
    "formula": "C464H479N19O5",
    "composition": {
      "C": 464,
      "H": 479,
      "N": 19,
      "O": 5
    },
    "molarMass": "3397.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7420",
    "formula": "C465H480N0O6",
    "composition": {
      "C": 465,
      "H": 480,
      "N": 0,
      "O": 6
    },
    "molarMass": "3404.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7421",
    "formula": "C466H481N1O7",
    "composition": {
      "C": 466,
      "H": 481,
      "N": 1,
      "O": 7
    },
    "molarMass": "3410.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7422",
    "formula": "C467H482N2O8",
    "composition": {
      "C": 467,
      "H": 482,
      "N": 2,
      "O": 8
    },
    "molarMass": "3416.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7423",
    "formula": "C468H483N3O9",
    "composition": {
      "C": 468,
      "H": 483,
      "N": 3,
      "O": 9
    },
    "molarMass": "3422.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7424",
    "formula": "C469H484N4O10",
    "composition": {
      "C": 469,
      "H": 484,
      "N": 4,
      "O": 10
    },
    "molarMass": "3428.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7425",
    "formula": "C470H485N5O11",
    "composition": {
      "C": 470,
      "H": 485,
      "N": 5,
      "O": 11
    },
    "molarMass": "3435.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7426",
    "formula": "C471H486N6O12",
    "composition": {
      "C": 471,
      "H": 486,
      "N": 6,
      "O": 12
    },
    "molarMass": "3441.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7427",
    "formula": "C472H487N7O13",
    "composition": {
      "C": 472,
      "H": 487,
      "N": 7,
      "O": 13
    },
    "molarMass": "3447.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7428",
    "formula": "C473H488N8O14",
    "composition": {
      "C": 473,
      "H": 488,
      "N": 8,
      "O": 14
    },
    "molarMass": "3453.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7429",
    "formula": "C474H489N9O15",
    "composition": {
      "C": 474,
      "H": 489,
      "N": 9,
      "O": 15
    },
    "molarMass": "3459.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7430",
    "formula": "C475H490N10O16",
    "composition": {
      "C": 475,
      "H": 490,
      "N": 10,
      "O": 16
    },
    "molarMass": "3466.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7431",
    "formula": "C476H491N11O17",
    "composition": {
      "C": 476,
      "H": 491,
      "N": 11,
      "O": 17
    },
    "molarMass": "3472.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7432",
    "formula": "C477H492N12O0",
    "composition": {
      "C": 477,
      "H": 492,
      "N": 12,
      "O": 0
    },
    "molarMass": "3478.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7433",
    "formula": "C478H493N13O1",
    "composition": {
      "C": 478,
      "H": 493,
      "N": 13,
      "O": 1
    },
    "molarMass": "3484.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7434",
    "formula": "C479H494N14O2",
    "composition": {
      "C": 479,
      "H": 494,
      "N": 14,
      "O": 2
    },
    "molarMass": "3490.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7435",
    "formula": "C480H495N15O3",
    "composition": {
      "C": 480,
      "H": 495,
      "N": 15,
      "O": 3
    },
    "molarMass": "3497.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7436",
    "formula": "C481H496N16O4",
    "composition": {
      "C": 481,
      "H": 496,
      "N": 16,
      "O": 4
    },
    "molarMass": "3503.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7437",
    "formula": "C482H497N17O5",
    "composition": {
      "C": 482,
      "H": 497,
      "N": 17,
      "O": 5
    },
    "molarMass": "3509.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7438",
    "formula": "C483H498N18O6",
    "composition": {
      "C": 483,
      "H": 498,
      "N": 18,
      "O": 6
    },
    "molarMass": "3515.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7439",
    "formula": "C484H499N19O7",
    "composition": {
      "C": 484,
      "H": 499,
      "N": 19,
      "O": 7
    },
    "molarMass": "3521.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7440",
    "formula": "C485H500N0O8",
    "composition": {
      "C": 485,
      "H": 500,
      "N": 0,
      "O": 8
    },
    "molarMass": "3528.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7441",
    "formula": "C486H501N1O9",
    "composition": {
      "C": 486,
      "H": 501,
      "N": 1,
      "O": 9
    },
    "molarMass": "3534.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7442",
    "formula": "C487H502N2O10",
    "composition": {
      "C": 487,
      "H": 502,
      "N": 2,
      "O": 10
    },
    "molarMass": "3540.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7443",
    "formula": "C488H503N3O11",
    "composition": {
      "C": 488,
      "H": 503,
      "N": 3,
      "O": 11
    },
    "molarMass": "3546.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7444",
    "formula": "C489H504N4O12",
    "composition": {
      "C": 489,
      "H": 504,
      "N": 4,
      "O": 12
    },
    "molarMass": "3552.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7445",
    "formula": "C490H505N5O13",
    "composition": {
      "C": 490,
      "H": 505,
      "N": 5,
      "O": 13
    },
    "molarMass": "3559.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7446",
    "formula": "C491H506N6O14",
    "composition": {
      "C": 491,
      "H": 506,
      "N": 6,
      "O": 14
    },
    "molarMass": "3565.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7447",
    "formula": "C492H507N7O15",
    "composition": {
      "C": 492,
      "H": 507,
      "N": 7,
      "O": 15
    },
    "molarMass": "3571.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7448",
    "formula": "C493H508N8O16",
    "composition": {
      "C": 493,
      "H": 508,
      "N": 8,
      "O": 16
    },
    "molarMass": "3577.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7449",
    "formula": "C494H509N9O17",
    "composition": {
      "C": 494,
      "H": 509,
      "N": 9,
      "O": 17
    },
    "molarMass": "3583.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7450",
    "formula": "C495H510N10O0",
    "composition": {
      "C": 495,
      "H": 510,
      "N": 10,
      "O": 0
    },
    "molarMass": "3590.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7451",
    "formula": "C496H511N11O1",
    "composition": {
      "C": 496,
      "H": 511,
      "N": 11,
      "O": 1
    },
    "molarMass": "3596.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7452",
    "formula": "C497H512N12O2",
    "composition": {
      "C": 497,
      "H": 512,
      "N": 12,
      "O": 2
    },
    "molarMass": "3602.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7453",
    "formula": "C498H513N13O3",
    "composition": {
      "C": 498,
      "H": 513,
      "N": 13,
      "O": 3
    },
    "molarMass": "3608.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7454",
    "formula": "C499H514N14O4",
    "composition": {
      "C": 499,
      "H": 514,
      "N": 14,
      "O": 4
    },
    "molarMass": "3614.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7455",
    "formula": "C500H515N15O5",
    "composition": {
      "C": 500,
      "H": 515,
      "N": 15,
      "O": 5
    },
    "molarMass": "3621.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7456",
    "formula": "C501H516N16O6",
    "composition": {
      "C": 501,
      "H": 516,
      "N": 16,
      "O": 6
    },
    "molarMass": "3627.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7457",
    "formula": "C502H517N17O7",
    "composition": {
      "C": 502,
      "H": 517,
      "N": 17,
      "O": 7
    },
    "molarMass": "3633.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7458",
    "formula": "C503H518N18O8",
    "composition": {
      "C": 503,
      "H": 518,
      "N": 18,
      "O": 8
    },
    "molarMass": "3639.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7459",
    "formula": "C504H519N19O9",
    "composition": {
      "C": 504,
      "H": 519,
      "N": 19,
      "O": 9
    },
    "molarMass": "3645.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7460",
    "formula": "C505H520N0O10",
    "composition": {
      "C": 505,
      "H": 520,
      "N": 0,
      "O": 10
    },
    "molarMass": "3652.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7461",
    "formula": "C506H521N1O11",
    "composition": {
      "C": 506,
      "H": 521,
      "N": 1,
      "O": 11
    },
    "molarMass": "3658.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7462",
    "formula": "C507H522N2O12",
    "composition": {
      "C": 507,
      "H": 522,
      "N": 2,
      "O": 12
    },
    "molarMass": "3664.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7463",
    "formula": "C508H523N3O13",
    "composition": {
      "C": 508,
      "H": 523,
      "N": 3,
      "O": 13
    },
    "molarMass": "3670.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7464",
    "formula": "C509H524N4O14",
    "composition": {
      "C": 509,
      "H": 524,
      "N": 4,
      "O": 14
    },
    "molarMass": "3676.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7465",
    "formula": "C510H525N5O15",
    "composition": {
      "C": 510,
      "H": 525,
      "N": 5,
      "O": 15
    },
    "molarMass": "3683.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7466",
    "formula": "C511H526N6O16",
    "composition": {
      "C": 511,
      "H": 526,
      "N": 6,
      "O": 16
    },
    "molarMass": "3689.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7467",
    "formula": "C512H527N7O17",
    "composition": {
      "C": 512,
      "H": 527,
      "N": 7,
      "O": 17
    },
    "molarMass": "3695.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7468",
    "formula": "C513H528N8O0",
    "composition": {
      "C": 513,
      "H": 528,
      "N": 8,
      "O": 0
    },
    "molarMass": "3701.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7469",
    "formula": "C514H529N9O1",
    "composition": {
      "C": 514,
      "H": 529,
      "N": 9,
      "O": 1
    },
    "molarMass": "3707.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7470",
    "formula": "C515H530N10O2",
    "composition": {
      "C": 515,
      "H": 530,
      "N": 10,
      "O": 2
    },
    "molarMass": "3714.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7471",
    "formula": "C516H531N11O3",
    "composition": {
      "C": 516,
      "H": 531,
      "N": 11,
      "O": 3
    },
    "molarMass": "3720.20 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7472",
    "formula": "C517H532N12O4",
    "composition": {
      "C": 517,
      "H": 532,
      "N": 12,
      "O": 4
    },
    "molarMass": "3726.40 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7473",
    "formula": "C518H533N13O5",
    "composition": {
      "C": 518,
      "H": 533,
      "N": 13,
      "O": 5
    },
    "molarMass": "3732.60 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7474",
    "formula": "C519H534N14O6",
    "composition": {
      "C": 519,
      "H": 534,
      "N": 14,
      "O": 6
    },
    "molarMass": "3738.80 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7475",
    "formula": "C520H535N15O7",
    "composition": {
      "C": 520,
      "H": 535,
      "N": 15,
      "O": 7
    },
    "molarMass": "3745.00 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7476",
    "formula": "C521H536N16O8",
    "composition": {
      "C": 521,
      "H": 536,
      "N": 16,
      "O": 8
    },
    "molarMass": "3751.20 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7477",
    "formula": "C522H537N17O9",
    "composition": {
      "C": 522,
      "H": 537,
      "N": 17,
      "O": 9
    },
    "molarMass": "3757.40 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7478",
    "formula": "C523H538N18O10",
    "composition": {
      "C": 523,
      "H": 538,
      "N": 18,
      "O": 10
    },
    "molarMass": "3763.60 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7479",
    "formula": "C524H539N19O11",
    "composition": {
      "C": 524,
      "H": 539,
      "N": 19,
      "O": 11
    },
    "molarMass": "3769.80 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7480",
    "formula": "C525H540N0O12",
    "composition": {
      "C": 525,
      "H": 540,
      "N": 0,
      "O": 12
    },
    "molarMass": "3776.00 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7481",
    "formula": "C526H541N1O13",
    "composition": {
      "C": 526,
      "H": 541,
      "N": 1,
      "O": 13
    },
    "molarMass": "3782.20 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7482",
    "formula": "C527H542N2O14",
    "composition": {
      "C": 527,
      "H": 542,
      "N": 2,
      "O": 14
    },
    "molarMass": "3788.40 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7483",
    "formula": "C528H543N3O15",
    "composition": {
      "C": 528,
      "H": 543,
      "N": 3,
      "O": 15
    },
    "molarMass": "3794.60 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7484",
    "formula": "C529H544N4O16",
    "composition": {
      "C": 529,
      "H": 544,
      "N": 4,
      "O": 16
    },
    "molarMass": "3800.80 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7485",
    "formula": "C530H545N5O17",
    "composition": {
      "C": 530,
      "H": 545,
      "N": 5,
      "O": 17
    },
    "molarMass": "3807.00 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7486",
    "formula": "C531H546N6O0",
    "composition": {
      "C": 531,
      "H": 546,
      "N": 6,
      "O": 0
    },
    "molarMass": "3813.20 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Photopolymère de lithographie Zeta-7487",
    "formula": "C532H547N7O1",
    "composition": {
      "C": 532,
      "H": 547,
      "N": 7,
      "O": 1
    },
    "molarMass": "3819.40 g/mol",
    "category": "Photopolymère de lithographie",
    "summary": "Spécimen de haute technologie certifié pour la classe des photopolymère de lithographies.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Inhibiteur de checkpoint immunitaire Zeta-7488",
    "formula": "C533H548N8O2",
    "composition": {
      "C": 533,
      "H": 548,
      "N": 8,
      "O": 2
    },
    "molarMass": "3825.60 g/mol",
    "category": "Inhibiteur de checkpoint immunitaire",
    "summary": "Spécimen de haute technologie certifié pour la classe des inhibiteur de checkpoint immunitaires.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Fluorophore de précision Zeta-7489",
    "formula": "C534H549N9O3",
    "composition": {
      "C": 534,
      "H": 549,
      "N": 9,
      "O": 3
    },
    "molarMass": "3831.80 g/mol",
    "category": "Fluorophore de précision",
    "summary": "Spécimen de haute technologie certifié pour la classe des fluorophore de précisions.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  },
  {
    "name": "Gaz de spécialité (Hélium-3, etc.) Zeta-7490",
    "formula": "C535H550N10O4",
    "composition": {
      "C": 535,
      "H": 550,
      "N": 10,
      "O": 4
    },
    "molarMass": "3838.00 g/mol",
    "category": "Gaz de spécialité (Hélium-3, etc.)",
    "summary": "Spécimen de haute technologie certifié pour la classe des gaz de spécialité (hélium-3, etc.)s.",
    "occurrence": "Fabrication de haute pureté.",
    "applications": [
      "Recherche clinique",
      "Industrie 4.0"
    ]
  }
];
