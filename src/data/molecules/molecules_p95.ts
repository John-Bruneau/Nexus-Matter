import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série P95
 * Focus: Sels Minéraux et Oxydes Inorganiques.
 * Copyright Sébastien John Bruneau
 */
export const MOLECULES_P95: MoleculeDefinition[] = [
  { "name": "Bicarbonate de Soude", "formula": "NaHCO₃", "composition": { "Na": 1, "H": 1, "C": 1, "O": 3 }, "molarMass": "84.01 g/mol", "category": "Sel minéral", "summary": "Poudre polyvalente (levure, nettoyage, antiacide).", "occurrence": "Naturel (Nahcolite).", "applications": ["Cuisine", "Hygiène"] },
  { "name": "Carbonate de Calcium", "formula": "CaCO₃", "composition": { "Ca": 1, "C": 1, "O": 3 }, "molarMass": "100.09 g/mol", "category": "Minéral", "summary": "Constituant majeur de la craie, du calcaire et du marbre.", "occurrence": "Coquillages, roches sédimentaires.", "applications": ["Construction", "Papeterie"] },
  { "name": "Sulfate de Magnésium", "formula": "MgSO₄", "composition": { "Mg": 1, "S": 1, "O": 4 }, "molarMass": "120.37 g/mol", "category": "Sel d'Epsom", "summary": "Utilisé dans les sels de bain pour détendre les muscles.", "occurrence": "Eaux minérales, évaporites.", "applications": ["Agriculture", "Santé"] },
  { "name": "Chlorure de Potassium", "formula": "KCl", "composition": { "K": 1, "Cl": 1 }, "molarMass": "74.55 g/mol", "category": "Halogénure", "summary": "Alternative au sel de table pour les régimes sans sodium.", "occurrence": "Sylvine (Minéral).", "applications": ["Engrais", "Médecine"] },
  { "name": "Oxyde de Zinc", "formula": "ZnO", "composition": { "Zn": 1, "O": 1 }, "molarMass": "81.38 g/mol", "category": "Oxyde métallique", "summary": "Pigment blanc utilisé dans les crèmes solaires et les onguents.", "occurrence": "Zincite.", "applications": ["Cosmétique", "Peinture"] },
  { "name": "Dioxyde de Titane", "formula": "TiO₂", "composition": { "Ti": 1, "O": 2 }, "molarMass": "79.87 g/mol", "category": "Oxyde", "summary": "Le pigment blanc le plus blanc, utilisé pour l'opacité.", "occurrence": "Rutile, Anatase.", "applications": ["Peintures", "Plastiques", "Alimentation (E171)"] },
  { "name": "Sulfate de Cuivre (II)", "formula": "CuSO₄", "composition": { "Cu": 1, "S": 1, "O": 4 }, "molarMass": "159.61 g/mol", "category": "Sel métallique", "summary": "Cristaux bleus vifs utilisés comme fongicide.", "occurrence": "Chalcantite.", "applications": ["Agriculture (Bouillie bordelaise)", "Piscines"] },
  { "name": "Permanganate de Potassium", "formula": "KMnO₄", "composition": { "K": 1, "Mn": 1, "O": 4 }, "molarMass": "158.03 g/mol", "category": "Oxydant puissant", "summary": "Cristaux violets foncés utilisés pour la désinfection.", "occurrence": "Synthétique", "applications": ["Traitement de l'eau", "Médecine"] },
  { "name": "Nitrate d'Ammonium", "formula": "NH₄NO₃", "composition": { "N": 2, "H": 4, "O": 3 }, "molarMass": "80.04 g/mol", "category": "Engrais / Explosif", "summary": "Source d'azote pour les plantes, mais aussi explosif puissant.", "occurrence": "Synthétique", "applications": ["Agriculture", "Mines"] },
  { "name": "Phosphate de Diammonium", "formula": "(NH₄)₂HPO₄", "composition": { "N": 2, "H": 9, "P": 1, "O": 4 }, "molarMass": "132.06 g/mol", "category": "Engrais soluble", "summary": "L'un des engrais phosphatés les plus utilisés.", "occurrence": "Synthétique", "applications": ["Agriculture", "Retardateur de flamme"] },
  { "name": "Silice (Quartz)", "formula": "SiO₂", "composition": { "Si": 1, "O": 2 }, "molarMass": "60.08 g/mol", "category": "Minéral silicaté", "summary": "Le composant principal du sable et du verre.", "occurrence": "Quartz, Sable, Terre de diatomées.", "applications": ["Verrerie", "Électronique"] },
  { "name": "Alumine", "formula": "Al₂O₃", "composition": { "Al": 2, "O": 3 }, "molarMass": "101.96 g/mol", "category": "Oxyde d'aluminium", "summary": "Présent dans le corindon, le saphir et le rubis.", "occurrence": "Bauxite.", "applications": ["Abrasifs", "Production d'aluminium"] },
  { "name": "Oxyde de Fer (III)", "formula": "Fe₂O₃", "composition": { "Fe": 2, "O": 3 }, "molarMass": "159.69 g/mol", "category": "Rouille", "summary": "L'oxyde de fer le plus courant, donne sa couleur rouge à Mars.", "occurrence": "Hématite, Rouille.", "applications": ["Pigments", "Magnétisme"] }
];
