/**
 * @copyright Sébastien John Bruneau
 * Part 77 of the molecule library - Industrial and advanced materials collection.
 */
import { MoleculeDefinition } from '../../types/molecule';

export const MOLECULES_P77: MoleculeDefinition[] = [
  {
    "name": "Fullerène C60",
    "formula": "C₆₀",
    "composition": { "C": 60 },
    "summary": "Molécule en forme de ballon de football composée uniquement de carbone, découverte en 1985.",
    "category": "Allotrope de carbone",
    "molarMass": "720.66 g/mol",
    "safetyWarning": "Poussière potentiellement inhalable; manipuler avec précaution.",
    "manufacturing": "Arc électrique entre des électrodes de graphite sous atmosphère inerte.",
    "meltingPoint": "280 °C (Sublimation)",
    "boilingPoint": "Sublimation",
    "occurrence": "Suie, espace interstellaire."
  },
  {
    "name": "Graphène (fragment)",
    "formula": "C₅₄H₁₈",
    "composition": { "C": 54, "H": 18 },
    "summary": "Représentation d'un fragment de nanographène, cristallisant dans un réseau hexagonal bidimensionnel.",
    "category": "Nanomatériau",
    "molarMass": "666.7 g/mol",
    "safetyWarning": "Nanomatériau; risques d'inhalation.",
    "manufacturing": "Exfoliation mécanique ou dépôt chimique en phase vapeur (CVD).",
    "meltingPoint": "Extrêmement élevé (> 3000 °C)",
    "boilingPoint": "N/A",
    "occurrence": "Forme synthétique pure."
  },
  {
    "name": "Nylon 6,6",
    "formula": "(C₁₂H₂₂N₂O₂)n",
    "composition": { "C": 12, "H": 22, "N": 2, "O": 2 },
    "summary": "Polyamide synthétique largement utilisé dans les textiles et les plastiques techniques.",
    "category": "Polymère",
    "molarMass": "226.32 g/mol (unité)",
    "safetyWarning": "Généralement inerte; fumées nocives si brûlé.",
    "manufacturing": "Polycondensation de l'hexaméthylènediamine et de l'acide adipique.",
    "meltingPoint": "265 °C",
    "boilingPoint": "Décomposition",
    "occurrence": "Textiles, engrenages, cordes."
  },
  {
    "name": "Polyéthylène téréphtalate (PET)",
    "formula": "(C₁₀H₈O₄)n",
    "composition": { "C": 10, "H": 8, "O": 4 },
    "summary": "Thermoplastique courant utilisé pour les bouteilles de boissons et les fibres textiles.",
    "category": "Polymère",
    "molarMass": "192.17 g/mol (unité)",
    "safetyWarning": "Recyclable; éviter le chauffage excessif des contenants.",
    "manufacturing": "Polymérisation de l'éthylène glycol et de l'acide téréphtalique.",
    "meltingPoint": "250-260 °C",
    "boilingPoint": "Décomposition",
    "occurrence": "Bouteilles, emballages."
  },
  {
    "name": "Polytétrafluoroéthylène (Téflon)",
    "formula": "(C₂F₄)n",
    "composition": { "C": 2, "F": 4 },
    "summary": "Polymère de fluorocarbone doté d'une résistance chimique exceptionnelle et d'un très faible coefficient de friction.",
    "category": "Fluoropolymère",
    "molarMass": "100.02 g/mol (unité)",
    "safetyWarning": "Dégage des vapeurs toxiques si chauffé au-dessus de 300 °C.",
    "manufacturing": "Polymérisation radicalaire du tétrafluoroéthylène.",
    "meltingPoint": "327 °C",
    "boilingPoint": "Décomposition",
    "occurrence": "Poêles antiadhésives, joints industriels."
  },
  {
    "name": "Aspirine (Acide acétylsalicylique)",
    "formula": "C₉H₈O₄",
    "composition": { "C": 9, "H": 8, "O": 4 },
    "summary": "Médicament analgésique, antipyrétique et anti-inflammatoire de référence.",
    "category": "AINS / Médicament",
    "molarMass": "180.158 g/mol",
    "safetyWarning": "Risque de syndrome de Reye chez les enfants; risque d'hémorragie.",
    "manufacturing": "Estérification de l'acide salicylique par l'anhydride acétique.",
    "meltingPoint": "136 °C",
    "boilingPoint": "140 °C (Décomposition)",
    "occurrence": "Produit de synthèse."
  }
];
