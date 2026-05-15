import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série P85
 * Focus: Dermatologie et Anti-inflammatoires Stéroïdiens.
 * Copyright Sébastien John Bruneau
 */
export const MOLECULES_P85: MoleculeDefinition[] = [
  { "name": "Lidocaïne", "formula": "C₁₄H₂₂N₂O", "composition": { "C": 14, "H": 22, "N": 2, "O": 1 }, "molarMass": "234.34 g/mol", "category": "Anesthésique local", "summary": "Utilisé pour l'anesthésie locale et le traitement des arythmies cardiaques.", "occurrence": "Synthétique", "applications": ["Dentisterie", "Chirurgie"] },
  { "name": "Benzocaïne", "formula": "C₉H₁₁NO₂", "composition": { "C": 9, "H": 11, "N": 1, "O": 2 }, "molarMass": "165.19 g/mol", "category": "Ester aminé", "summary": "Anesthésique de surface utilisé dans les gels buccaux et les pastilles.", "occurrence": "Synthétique", "applications": ["ORL", "Produits de confort"] },
  { "name": "Hydrocortisone", "formula": "C₂₁H₃₀O₅", "composition": { "C": 21, "H": 30, "O": 5 }, "molarMass": "362.46 g/mol", "category": "Glucocorticoïde", "summary": "Hormone stéroïde naturelle utilisée comme anti-inflammatoire cutané.", "occurrence": "Naturel (Glandes surrénales).", "applications": ["Dermatologie", "Allergies"] },
  { "name": "Prednisone", "formula": "C₂₁H₂₆O₅", "composition": { "C": 21, "H": 26, "O": 5 }, "molarMass": "358.43 g/mol", "category": "Corticoïde de synthèse", "summary": "L'un des médicaments les plus prescrits pour les maladies auto-immunes.", "occurrence": "Synthétique", "applications": ["Rhumatologie", "Pneumologie"] },
  { "name": "Dexaméthasone", "formula": "C₂₂H₂₉FO₅", "composition": { "C": 22, "H": 29, "F": 1, "O": 5 }, "molarMass": "392.46 g/mol", "category": "Corticoïde puissant", "summary": "Utilisé pour réduire l'inflammation sévère et l'œdème cérébral.", "occurrence": "Synthétique", "applications": ["Chimiothérapie", "Réanimation COVID-19"] },
  { "name": "Trétinoïne", "formula": "C₂₀H₂₈O₂", "composition": { "C": 20, "H": 28, "O": 2 }, "molarMass": "300.44 g/mol", "category": "Rétinoïde", "summary": "Acide rétinoïque utilisé pour traiter l'acné sévère et le photo-vieillissement.", "occurrence": "Dérivé Vitamine A", "applications": ["Dermatologie"] },
  { "name": "Adapalène", "formula": "C₂₈H₂₈O₃", "composition": { "C": 28, "H": 28, "O": 3 }, "molarMass": "412.52 g/mol", "category": "Rétinoïde de troisième génération", "summary": "Moins irritant que la trétinoïne, standard pour le traitement de l'acné.", "occurrence": "Synthétique", "applications": ["Dermatologie"] }
];
