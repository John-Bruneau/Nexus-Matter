import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série P94
 * Focus: Polymères et Monomères Industriels.
 * Copyright Sébastien John Bruneau
 */
export const MOLECULES_P94: MoleculeDefinition[] = [
  { "name": "Éthylène", "formula": "C₂H₄", "composition": { "C": 2, "H": 4 }, "molarMass": "28.05 g/mol", "category": "Alcène", "summary": "La base du polyéthylène, le plastique le plus courant.", "occurrence": "Naturelle (gaz de mûrissement des fruits), Pétrochimie.", "applications": ["Plastiques", "Hormone végétale"] },
  { "name": "Propylène", "formula": "C₃H₆", "composition": { "C": 3, "H": 6 }, "molarMass": "42.08 g/mol", "category": "Monomère", "summary": "Utilisé pour produire le polypropylène (récipients, fibres).", "occurrence": "Raffinage du pétrole.", "applications": ["Plastiques"] },
  { "name": "Styrène", "formula": "C₈H₈", "composition": { "C": 8, "H": 8 }, "molarMass": "104.15 g/mol", "category": "Aromatique vinylique", "summary": "Liquide huileux utilisé pour produire le polystyrène.", "occurrence": "Résines naturelles (Storax), Synthétique.", "applications": ["Isolants", "Emballages"] },
  { "name": "Chlorure de Vinyle", "formula": "C₂H₃Cl", "composition": { "C": 2, "H": 3, "Cl": 1 }, "molarMass": "62.50 g/mol", "category": "Halogénoalcène", "summary": "Monomère du PVC (Polychlorure de vinyle).", "occurrence": "Synthétique", "applications": ["Canalisations", "Fenêtres"] },
  { "name": "Acrylonitrile", "formula": "C₃H₃N", "composition": { "C": 3, "H": 3, "N": 1 }, "molarMass": "53.06 g/mol", "category": "Nitrile vinylique", "summary": "Composant clé pour les fibres acryliques et le plastique ABS.", "occurrence": "Synthétique", "applications": ["Automobile", "Textile"] },
  { "name": "Téréphtalate de diméthyle", "formula": "C₁₀H₁₀O₄", "composition": { "C": 10, "H": 10, "O": 4 }, "molarMass": "194.18 g/mol", "category": "Ester aromatique", "summary": "Intermédiaire pour la production de PET (bouteilles plastiques).", "occurrence": "Synthétique", "applications": ["Plastiques"] },
  { "name": "Éthylène Glycol", "formula": "C₂H₆O₂", "composition": { "C": 2, "H": 6, "O": 2 }, "molarMass": "62.07 g/mol", "category": "Diol", "summary": "Antigel automobile et précurseur du polyester.", "occurrence": "Synthétique", "applications": ["Automobile", "Polymères"] },
  { "name": "Cyclohexane", "formula": "C₆H₁₂", "composition": { "C": 6, "H": 12 }, "molarMass": "84.16 g/mol", "category": "Cycloalcane", "summary": "Solvant et intermédiaire pour la production du nylon.", "occurrence": "Synthétique", "applications": ["Fibres synthétiques"] },
  { "name": "Caprolactame", "formula": "C₆H₁₁NO", "composition": { "C": 6, "H": 11, "N": 1, "O": 1 }, "molarMass": "113.16 g/mol", "category": "Lactame", "summary": "Le monomère utilisé pour synthétiser le Nylon-6.", "occurrence": "Synthétique", "applications": ["Textile", "Ingénierie"] },
  { "name": "Isocyanante de Toluène (TDI)", "formula": "C₉H₆N₂O₂", "composition": { "C": 9, "H": 6, "N": 2, "O": 2 }, "molarMass": "174.16 g/mol", "category": "Isocyanate", "summary": "Utilisé pour fabriquer des mousses de polyuréthane (matelas).", "occurrence": "Synthétique", "applications": ["Mobiliers", "Isolants"] },
  { "name": "Phénol", "formula": "C₆H₆O", "composition": { "C": 6, "H": 6, "O": 1 }, "molarMass": "94.11 g/mol", "category": "Alcool aromatique", "summary": "Précurseur de résines phénoliques et d'herbicides.", "occurrence": "Goudron, pétrole.", "applications": ["Désinfectants", "Électronique"] },
  { "name": "Acétone", "formula": "C₃H₆O", "composition": { "C": 3, "H": 6, "O": 1 }, "molarMass": "58.08 g/mol", "category": "Cétone", "summary": "Solvant organique universel, produit par le procédé au cumène.", "occurrence": "Métabolisme humain (cétose), fruits.", "applications": ["Solvant", "Cosmétiques"] },
  { "name": "Cumène", "formula": "C₉H₁₂", "composition": { "C": 9, "H": 12 }, "molarMass": "120.19 g/mol", "category": "Hydrocarbure alkylé", "summary": "Intermédiaire pour la production de phénol et d'acétone.", "occurrence": "Pétrole brut.", "applications": ["Chimie industrielle"] }
];
