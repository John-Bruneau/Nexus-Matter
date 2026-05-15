import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série P88
 * Focus: Phytostérols, Saveurs et Composés Industriels Célèbres.
 * Copyright Sébastien John Bruneau
 */
export const MOLECULES_P88: MoleculeDefinition[] = [
  { "name": "Curcumine", "formula": "C₂₁H₂₀O₆", "composition": { "C": 21, "H": 20, "O": 6 }, "molarMass": "368.38 g/mol", "category": "Polyphénol", "summary": "Pigment jaune du curcuma aux propriétés anti-inflammatoires.", "occurrence": "Curcuma longa.", "applications": ["Phytothérapie", "Colorant alimentaire"] },
  { "name": "Pipérine", "formula": "C₁₇H₁₉NO₃", "composition": { "C": 17, "H": 19, "N": 1, "O": 3 }, "molarMass": "285.34 g/mol", "category": "Alcaloïde piquant", "summary": "Responsable du goût piquant du poivre noir.", "occurrence": "Piper nigrum.", "applications": ["Pharmacologie (Bio-amplificateur)"] },
  { "name": "Limonène", "formula": "C₁₀H₁₆", "composition": { "C": 10, "H": 16 }, "molarMass": "136.23 g/mol", "category": "Terpène", "summary": "Molécule à l'odeur d'agrume (citron/orange).", "occurrence": "Écorces d'agrumes.", "applications": ["Parfumerie", "Solvant biodégradable"] },
  { "name": "Menthol", "formula": "C₁₀H₂₀O", "composition": { "C": 10, "H": 20, "O": 1 }, "molarMass": "156.27 g/mol", "category": "Monoterpène alcool", "summary": "Procure une sensation de fraîcheur par activation des récepteurs TRPM8.", "occurrence": "Menthe poivrée.", "applications": ["Hygiène buccale", "Confiserie"] },
  { "name": "Bisphénol A", "formula": "C₁₅H₁₆O₂", "composition": { "C": 15, "H": 16, "O": 2 }, "molarMass": "228.29 g/mol", "category": "Perturbateur endocrinien", "summary": "Utilisé dans la fabrication de plastiques polycarbonate; sujet à controverses.", "occurrence": "Synthétique", "applications": ["Plasturgie"] },
  { "name": "PFOA", "formula": "C₈HF₁₅O₂", "composition": { "C": 8, "H": 1, "F": 15, "O": 2 }, "molarMass": "414.07 g/mol", "category": "PFAS", "summary": "Acide perfluoro-octanoïque, polluant éternel utilisé pour le Téflon.", "occurrence": "Synthétique", "applications": ["Revêtements anti-adhésifs"] },
  { "name": "Saccharine", "formula": "C₇H₅NO₃S", "composition": { "C": 7, "H": 5, "N": 1, "O": 3, "S": 1 }, "molarMass": "183.18 g/mol", "category": "Édulcorant artificiel", "summary": "Le premier édulcorant synthétique, 300 fois plus sucré que le sucre.", "occurrence": "Synthétique", "applications": ["Agroalimentaire"] }
];
