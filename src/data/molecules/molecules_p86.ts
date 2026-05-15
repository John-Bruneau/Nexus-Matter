import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série P86
 * Focus: Complexe Vitaminique B (Hydrosolubles).
 * Copyright Sébastien John Bruneau
 */
export const MOLECULES_P86: MoleculeDefinition[] = [
  { "name": "Thiamine", "formula": "C₁₂H₁₇N₄OS⁺", "composition": { "C": 12, "H": 17, "N": 4, "O": 1, "S": 1 }, "molarMass": "265.35 g/mol", "category": "Vitamine B1", "summary": "Essentielle au métabolisme des glucides et au système nerveux.", "occurrence": "Céréales complètes, viande.", "applications": ["Nutrition", "Béri-béri"] },
  { "name": "Riboflavine", "formula": "C₁₇H₂₀N₄O₆", "composition": { "C": 17, "H": 20, "N": 4, "O": 6 }, "molarMass": "376.36 g/mol", "category": "Vitamine B2", "summary": "Composant des coenzymes FAD et FMN, donne une couleur jaune à l'urine.", "occurrence": "Lait, œufs, légumes verts.", "applications": ["Métabolisme énergétique"] },
  { "name": "Niacine", "formula": "C₆H₅NO₂", "composition": { "C": 6, "H": 5, "N": 1, "O": 2 }, "molarMass": "123.11 g/mol", "category": "Vitamine B3", "summary": "Prévient la pellagre et régule le cholestérol.", "occurrence": "Viande, poisson, noix.", "applications": ["Synthèse d'ADN"] },
  { "name": "Acide Pantothénique", "formula": "C₉H₁₇NO₅", "composition": { "C": 9, "H": 17, "N": 1, "O": 5 }, "molarMass": "219.23 g/mol", "category": "Vitamine B5", "summary": "Constituant essentiel du coenzyme A.", "occurrence": "Présent dans presque tous les aliments.", "applications": ["Synthèse des acides gras"] },
  { "name": "Pyridoxine", "formula": "C₈H₁₁NO₃", "composition": { "C": 8, "H": 11, "N": 1, "O": 3 }, "molarMass": "169.18 g/mol", "category": "Vitamine B6", "summary": "Impliquée dans le métabolisme des acides aminés et des neurotransmetteurs.", "occurrence": "Bananes, pommes de terre.", "applications": ["Hématologie"] },
  { "name": "Biotine", "formula": "C₁₀H₁₆N₂O₃S", "composition": { "C": 10, "H": 16, "N": 2, "O": 3, "S": 1 }, "molarMass": "244.31 g/mol", "category": "Vitamine B8 / B7", "summary": "Essentielle pour la santé de la peau, des cheveux et des ongles.", "occurrence": "Jaune d'œuf, foie.", "applications": ["Cosmétique", "Métabolisme"] },
  { "name": "Cobalamine", "formula": "C₆₃H₈₈CoN₁₄O₁₄P", "composition": { "C": 63, "H": 88, "Co": 1, "N": 14, "O": 14, "P": 1 }, "molarMass": "1355.37 g/mol", "category": "Vitamine B12", "summary": "Molécule complexe contenant du cobalt, vitale pour la formation du sang.", "occurrence": "Produits animaux seulement.", "applications": ["Anémie pernicieuse"] }
];
