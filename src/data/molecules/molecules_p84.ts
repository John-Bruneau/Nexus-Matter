import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série P84
 * Focus: Alcaloïdes et Composés Psychoactifs Naturels.
 * Copyright Sébastien John Bruneau
 */
export const MOLECULES_P84: MoleculeDefinition[] = [
  { "name": "Muscimol", "formula": "C₄H₆N₂O₂", "composition": { "C": 4, "H": 6, "N": 2, "O": 2 }, "molarMass": "114.10 g/mol", "category": "Isoxazole", "summary": "Principal alcaloïde psychoactif de l'amanite tue-mouches.", "occurrence": "Amanita muscaria.", "applications": ["Neurosciences"] },
  { "name": "Salvinorine A", "formula": "C₂₃H₂₈O₈", "composition": { "C": 23, "H": 28, "O": 8 }, "molarMass": "432.46 g/mol", "category": "Diterpène", "summary": "Puissant psychotrope naturel agissant sur les récepteurs kappa-opioïdes.", "occurrence": "Salvia divinorum.", "applications": ["Recherche pharmacologique"] },
  { "name": "Mescaline", "formula": "C₁₁H₁₇NO₃", "composition": { "C": 11, "H": 17, "N": 1, "O": 3 }, "molarMass": "211.26 g/mol", "category": "Phényléthylamine", "summary": "Alcaloïde hallucinogène présent dans certains cactus.", "occurrence": "Peyotl, San Pedro.", "applications": ["Ethnopharmacologie"] },
  { "name": "Ibogaïne", "formula": "C₂₀H₂₆N₂O", "composition": { "C": 20, "H": 26, "N": 2, "O": 1 }, "molarMass": "310.43 g/mol", "category": "Alcaloïde indole", "summary": "Substance aux propriétés anti-addictives issue d'une racine africaine.", "occurrence": "Tabernanthe iboga.", "applications": ["Traitement des addictions"] },
  { "name": "Atropine", "formula": "C₁₇H₂₃NO₃", "composition": { "C": 17, "H": 23, "N": 1, "O": 3 }, "molarMass": "289.37 g/mol", "category": "Anticholinergique", "summary": "Utilisé pour dilater la pupille et traiter les bradycardies.", "occurrence": "Atropa belladonna (Belladone).", "applications": ["Ophtalmologie", "Urgences"] },
  { "name": "Scopolamine", "formula": "C₁₇H₂₁NO₄", "composition": { "C": 17, "H": 21, "N": 1, "O": 4 }, "molarMass": "303.35 g/mol", "category": "Alcaloïde tropanique", "summary": "Médicament contre le mal des transports, autrefois appelé 'souffle du diable'.", "occurrence": "Datura, Brugmansia.", "applications": ["Mal des transports"] },
  { "name": "Strychnine", "formula": "C₂₁H₂₂N₂O₂", "composition": { "C": 21, "H": 22, "N": 2, "O": 2 }, "molarMass": "334.41 g/mol", "category": "Alcaloïde indolique toxique", "summary": "Poisant extrêmement puissant agissant sur le système nerveux central.", "occurrence": "Noix vomique.", "applications": ["Pesticide (interdit)", "Toxicologie"] }
];
