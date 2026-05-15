import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série P93
 * Focus: Acides Organiques et Glucides Fondamentaux.
 * Copyright Sébastien John Bruneau
 */
export const MOLECULES_P93: MoleculeDefinition[] = [
  { "name": "Acide Citrique", "formula": "C₆H₈O₇", "composition": { "C": 6, "H": 8, "O": 7 }, "molarMass": "192.12 g/mol", "category": "Acide organique", "summary": "Acide naturel présent dans les agrumes, utilisé comme conservateur.", "occurrence": "Citrons, oranges.", "applications": ["Agroalimentaire", "Nettoyage"] },
  { "name": "Acide Tartrique", "formula": "C₄H₆O₆", "composition": { "C": 4, "H": 6, "O": 6 }, "molarMass": "150.09 g/mol", "category": "Acide carboxylique", "summary": "Acide présent dans le raisin et le vin, forme des cristaux.", "occurrence": "Raisin.", "applications": ["Œnologie", "Levure chimique"] },
  { "name": "Acide Malique", "formula": "C₄H₆O₅", "composition": { "C": 4, "H": 6, "O": 5 }, "molarMass": "134.09 g/mol", "category": "Dicarboxylique", "summary": "Responsable de la saveur acidulée des pommes vertes.", "occurrence": "Pommes, rhubarbe.", "applications": ["Additif alimentaire"] },
  { "name": "Acide Oxalique", "formula": "C₂H₂O₄", "composition": { "C": 2, "H": 2, "O": 4 }, "molarMass": "90.03 g/mol", "category": "Acide toxique", "summary": "Présent dans les épinards, peut causer des calculs rénaux.", "occurrence": "Oseille, épinards.", "applications": ["Blanchiment du bois", "Polissage"] },
  { "name": "Acide Succinique", "formula": "C₄H₆O₄", "composition": { "C": 4, "H": 6, "O": 4 }, "molarMass": "118.09 g/mol", "category": "Intermédiaire métabolique", "summary": "Joue un rôle dans la respiration cellulaire (cycle de Krebs).", "occurrence": "Ambre, organismes vivants.", "applications": ["Plastifiants", "Santé"] },
  { "name": "Glucose", "formula": "C₆H₁₂O₆", "composition": { "C": 6, "H": 12, "O": 6 }, "molarMass": "180.16 g/mol", "category": "Aldohexose", "summary": "La principale source d'énergie des cellules vivantes.", "occurrence": "Sève des plantes, sang.", "applications": ["Métabolisme", "Confiserie"] },
  { "name": "Fructose", "formula": "C₆H₁₂O₆", "composition": { "C": 6, "H": 12, "O": 6 }, "molarMass": "180.16 g/mol", "category": "Cétohexose", "summary": "Le sucre le plus doux, présent en abondance dans les fruits et le miel.", "occurrence": "Fruits, miel.", "applications": ["Édulcorant"] },
  { "name": "Galactose", "formula": "C₆H₁₂O₆", "composition": { "C": 6, "H": 12, "O": 6 }, "molarMass": "180.16 g/mol", "category": "Sucre simple", "summary": "Monosaccharide constituant du lactose.", "occurrence": "Produits laitiers.", "applications": ["Biologie cellulaire"] },
  { "name": "Lactose", "formula": "C₁₂H₂₂O₁₁", "composition": { "C": 12, "H": 22, "O": 11 }, "molarMass": "342.30 g/mol", "category": "Disaccharide", "summary": "Sucre complexe présent dans le lait.", "occurrence": "Lait.", "applications": ["Pharmacie (excipient)"] },
  { "name": "Saccharose", "formula": "C₁₂H₂₂O₁₁", "composition": { "C": 12, "H": 22, "O": 11 }, "molarMass": "342.30 g/mol", "category": "Sucre de table", "summary": "Composé de glucose et de fructose; le sucre commun.", "occurrence": "Canne à sucre, betterave.", "applications": ["Alimentation"] },
  { "name": "Maltose", "formula": "C₁₂H₂₂O₁₁", "composition": { "C": 12, "H": 22, "O": 11 }, "molarMass": "342.30 g/mol", "category": "Sucre de malt", "summary": "Produit de la digestion de l'amidon par l'amylase.", "occurrence": "Céréales germées.", "applications": ["Brasserie"] },
  { "name": "Amidon (Unité)", "formula": "C₆H₁₀O₅", "composition": { "C": 6, "H": 10, "O": 5 }, "molarMass": "162.14 g/mol", "category": "Polysaccharide", "summary": "Réserve énergétique des plantes, composé d'amylose et amylopectine.", "occurrence": "Pommes de terre, riz, blé.", "applications": ["Papeterie", "Alimentation"] },
  { "name": "Cellulose (Unité)", "formula": "C₆H₁₀O₅", "composition": { "C": 6, "H": 10, "O": 5 }, "molarMass": "162.14 g/mol", "category": "Biopolymère", "summary": "Constituant principal des parois cellulaires végétales et du bois.", "occurrence": "Plantes, bois, coton.", "applications": ["Papier", "Textile"] }
];
