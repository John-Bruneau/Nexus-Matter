import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série P87
 * Focus: Vitamines Liposolubles (A, D, E, K).
 * Copyright Sébastien John Bruneau
 */
export const MOLECULES_P87: MoleculeDefinition[] = [
  { "name": "Rétinol", "formula": "C₂₀H₃₀O", "composition": { "C": 20, "H": 30, "O": 1 }, "molarMass": "286.45 g/mol", "category": "Vitamine A", "summary": "Essentiel pour la vision (cycle de la rhodopsine) et la peau.", "occurrence": "Huile de foie de morue, carottes (bêta-carotène).", "applications": ["Ophtalmologie", "Dermatologie"] },
  { "name": "Cholécalciférol", "formula": "C₂₇H₄₄O", "composition": { "C": 27, "H": 44, "O": 1 }, "molarMass": "384.64 g/mol", "category": "Vitamine D3", "summary": "Synthétisé par la peau sous l'effet des UV, régule le calcium.", "occurrence": "Exposition solaire, poissons gras.", "applications": ["Rhumatologie", "Immunité"] },
  { "name": "Alpha-Tocophérol", "formula": "C₂₉H₅₀O₂", "composition": { "C": 29, "H": 50, "O": 2 }, "molarMass": "430.71 g/mol", "category": "Vitamine E", "summary": "Antioxydant majeur protégeant les membranes cellulaires.", "occurrence": "Huiles végétales, noix.", "applications": ["Anti-âge", "Nutrition"] },
  { "name": "Phylloquinone", "formula": "C₃₁H₄₆O₂", "composition": { "C": 31, "H": 46, "O": 2 }, "molarMass": "450.70 g/mol", "category": "Vitamine K1", "summary": "Co-facteur indispensable à la coagulation sanguine.", "occurrence": "Légumes verts à feuilles (épinards, choux).", "applications": ["Hématologie"] },
  { "name": "Ménadione", "formula": "C₁₁H₈O₂", "composition": { "C": 11, "H": 8, "O": 2 }, "molarMass": "172.18 g/mol", "category": "Vitamine K3", "summary": "Forme synthétique de la vitamine K.", "occurrence": "Synthétique", "applications": ["Supplémentation animale"] },
  { "name": "Calcidiol", "formula": "C₂₇H₄₄O₂", "composition": { "C": 27, "H": 44, "O": 2 }, "molarMass": "400.64 g/mol", "category": "25-hydroxyvitamine D", "summary": "Forme circulante de la vitamine D mesurée dans le sang.", "occurrence": "Métabolite hépatique.", "applications": ["Diagnostic biologique"] },
  { "name": "Calcitriol", "formula": "C₂₇H₄₄O₃", "composition": { "C": 27, "H": 44, "O": 3 }, "molarMass": "416.64 g/mol", "category": "Hormone D active", "summary": "Forme hormonalement active de la vitamine D.", "occurrence": "Métabolite rénal.", "applications": ["Insuffisance rénale"] }
];
