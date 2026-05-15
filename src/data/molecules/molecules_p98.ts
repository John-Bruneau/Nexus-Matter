import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série P98
 * Focus: Composés de Gaz Nobles et Curiosités Chimiques.
 * Copyright Sébastien John Bruneau
 */
export const MOLECULES_P98: MoleculeDefinition[] = [
  { "name": "Difluorure de Xénon", "formula": "XeF₂", "composition": { "Xe": 1, "F": 2 }, "molarMass": "170.29 g/mol", "category": "Noble Gas Compound", "summary": "L'un des premiers composés de gaz noble synthétisé, puissant agent de fluoration.", "occurrence": "Synthétique", "applications": ["Électronique (gravure)", "Synthèse organique"] },
  { "name": "Tétrafluorure de Xénon", "formula": "XeF₄", "composition": { "Xe": 1, "F": 4 }, "molarMass": "207.28 g/mol", "category": "Noble Gas halide", "summary": "Cristaux incolores stables à température ambiante.", "occurrence": "Synthétique", "applications": ["Recherche fondamentale"] },
  { "name": "Hexafluorure de Xénon", "formula": "XeF₆", "composition": { "Xe": 1, "F": 6 }, "molarMass": "245.28 g/mol", "category": "Noble Gas halide", "summary": "Le fluorure de xénon le plus stable et le plus réactif.", "occurrence": "Synthétique", "applications": ["Réactif chimique"] },
  { "name": "Trioxyde de Xénon", "formula": "XeO₃", "composition": { "Xe": 1, "O": 3 }, "molarMass": "179.29 g/mol", "category": "Oxyde instable", "summary": "Un explosif extrêmement puissant et dangereux, sensible au choc.", "occurrence": "Hydrolyse de XeF6.", "applications": ["Aucune (trop instable)"] },
  { "name": "Tétraoxyde de Xénon", "formula": "XeO₄", "composition": { "Xe": 1, "O": 4 }, "molarMass": "195.29 g/mol", "category": "Gaz instable", "summary": "Gaz jaune explosif à -36 °C.", "occurrence": "Synthétique", "applications": ["Recherche en haute pression"] },
  { "name": "Difluorure de Krypton", "formula": "KrF₂", "composition": { "Kr": 1, "F": 2 }, "molarMass": "121.79 g/mol", "category": "Oxydant extrême", "summary": "Le seul composé de krypton isolable en quantités macroscopiques, instable au-dessus de -30 °C.", "occurrence": "Synthétique", "applications": ["Synthèse de composés fluorés exotiques"] },
  { "name": "Fluorohydrure d'Argon", "formula": "HArF", "composition": { "H": 1, "Ar": 1, "F": 1 }, "molarMass": "59.95 g/mol", "category": "Composé d'argon stable à basse température", "summary": "Découvert en 2000, n'existe qu'en dessous de 17 K dans une matrice de gaz solide.", "occurrence": "Matrice cryogénique.", "applications": ["Cosmochimie"] },
  { "name": "Cubane", "formula": "C₈H₈", "composition": { "C": 8, "H": 8 }, "molarMass": "104.15 g/mol", "category": "Hydrocarbure géométrique", "summary": "Molécule synthétique en forme de cube parfait, extrêmement contrainte.", "occurrence": "Synthétique", "applications": ["Explosifs haute densité", "Pharmacie (recherche)"] },
  { "name": "Fullerène C60", "formula": "C₆₀", "composition": { "C": 60 }, "molarMass": "720.64 g/mol", "category": "Allotrope du carbone", "summary": "Molécule en forme de ballon de football (Buckminsterfullerene).", "occurrence": "Suie, Nébuloses planétaires.", "applications": ["Nanotechnologie", "Antioxydants"] },
  { "name": "Nanotube de Carbone (Unité)", "formula": "C₉₀", "composition": { "C": 90 }, "molarMass": "1080.96 g/mol", "category": "Nanostructure", "summary": "Architecture cylindrique aux propriétés mécaniques et électriques exceptionnelles.", "occurrence": "Synthétique", "applications": ["Matériaux composites", "Électronique"] }
];
