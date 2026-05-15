import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série P89
 * Focus: Réactifs de Laboratoire et Molécules Spécialisées.
 * Copyright Sébastien John Bruneau
 */
export const MOLECULES_P89: MoleculeDefinition[] = [
  { "name": "Luminol", "formula": "C₈H₇N₃O₂", "composition": { "C": 8, "H": 7, "N": 3, "O": 2 }, "molarMass": "177.16 g/mol", "category": "Chimioluminescent", "summary": "Émet de la lumière bleue en présence de fer; utilisé en police scientifique.", "occurrence": "Synthétique", "applications": ["Criminalistique"] },
  { "name": "Fluorescéine", "formula": "C₂₀H₁₂O₅", "composition": { "C": 20, "H": 12, "O": 5 }, "molarMass": "332.31 g/mol", "category": "Colorant fluorescent", "summary": "Utilisé comme traceur pour suivre le cours des eaux souterraines.", "occurrence": "Synthétique", "applications": ["Hydrologie", "Ophtalmologie"] },
  { "name": "EDTA", "formula": "C₁₀H₁₆N₂O₈", "composition": { "C": 10, "H": 16, "N": 2, "O": 8 }, "molarMass": "292.24 g/mol", "category": "Agent chélatant", "summary": "Se lie fortement aux ions métalliques (calcium, magnésium).", "occurrence": "Synthétique", "applications": ["Médecine (saturnisme)", "Détergents"] },
  { "name": "Trinitrotoluène", "formula": "C₇H₅N₃O₆", "composition": { "C": 7, "H": 5, "N": 3, "O": 6 }, "molarMass": "227.13 g/mol", "category": "Explosif (TNT)", "summary": "Standard de référence pour la puissance des explosions.", "occurrence": "Synthétique", "applications": ["Militaire", "Démolition"] },
  { "name": "Nitroglycérine", "formula": "C₃H₅N₃O₉", "composition": { "C": 3, "H": 5, "N": 3, "O": 9 }, "molarMass": "227.09 g/mol", "category": "Explosif / Vasodilatateur", "summary": "Composant de la dynamite et médicament pour l'angine de poitrine.", "occurrence": "Synthétique", "applications": ["Cardiologie", "Travaux publics"] },
  { "name": "Isocyanante de Méthyle", "formula": "C₂H₃NO", "composition": { "C": 2, "H": 3, "N": 1, "O": 1 }, "molarMass": "57.05 g/mol", "category": "Gaz toxique", "summary": "Responsable de la catastrophe de Bhopal; extrêmement réactif.", "occurrence": "Synthétique", "applications": ["Production de pesticides"] },
  { "name": "Hème B", "formula": "C₃₄H₃₂FeN₄O₄", "composition": { "C": 34, "H": 32, "Fe": 1, "N": 4, "O": 4 }, "molarMass": "616.49 g/mol", "category": "Métalloporphyrine", "summary": "Cœur de l'hémoglobine responsable du transport de l'oxygène.", "occurrence": "Sang (globules rouges).", "applications": ["Biologie cellulaire"] }
];
