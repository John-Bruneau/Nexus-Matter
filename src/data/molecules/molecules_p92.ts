import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série P92
 * Focus: Réactifs de Chimie Organique et Solvents Industriels.
 * Copyright Sébastien John Bruneau
 */
export const MOLECULES_P92: MoleculeDefinition[] = [
  { "name": "Diméthylformamide", "formula": "C₃H₇NO", "composition": { "C": 3, "H": 7, "N": 1, "O": 1 }, "molarMass": "73.09 g/mol", "category": "Solvant polaire aprotique", "summary": "Solvant universel en synthèse organique.", "occurrence": "Synthétique", "applications": ["Chimie fine", "Synthèse de peptides"] },
  { "name": "Diméthylsulfoxyde", "formula": "C₂H₆OS", "composition": { "C": 2, "H": 6, "O": 1, "S": 1 }, "molarMass": "78.13 g/mol", "category": "Solvant", "summary": "Solvant capable de dissoudre de nombreux sels et molécules organiques, pénètre la peau.", "occurrence": "Papeteries (sous-produit)", "applications": ["Biologie cellulaire", "Cryopréservation"] },
  { "name": "Toluène", "formula": "C₇H₈", "composition": { "C": 7, "H": 8 }, "molarMass": "92.14 g/mol", "category": "Hydrocarbure aromatique", "summary": "Solvant commun remplaçant souvent le benzène car moins toxique.", "occurrence": "Goudron de houille, pétrole.", "applications": ["Peintures", "Diluants"] },
  { "name": "Xylène", "formula": "C₈H₁₀", "composition": { "C": 8, "H": 10 }, "molarMass": "106.16 g/mol", "category": "Hydrocarbure", "summary": "Mélange d'isomères (ortho, méta, para) utilisé dans l'industrie.", "occurrence": "Pétrochimie", "applications": ["Histologie (fixation)", "Carburants"] },
  { "name": "Acétonitrile", "formula": "C₂H₃N", "composition": { "C": 2, "H": 3, "N": 1 }, "molarMass": "41.05 g/mol", "category": "Nitrile", "summary": "Solvant de choix pour la chromatographie liquide (HPLC).", "occurrence": "Synthétique", "applications": ["Analyse chimique"] },
  { "name": "Tétrahydrofurane", "formula": "C₄H₈O", "composition": { "C": 4, "H": 8, "O": 1 }, "molarMass": "72.11 g/mol", "category": "Éther cyclique", "summary": "Solvant polyvalent, souvent utilisé dans les réactions de Grignard.", "occurrence": "Synthétique", "applications": ["Synthèse organique"] },
  { "name": "Dichlorométhane", "formula": "CH₂Cl₂", "composition": { "C": 1, "H": 2, "Cl": 2 }, "molarMass": "84.93 g/mol", "category": "Composé organochloré", "summary": "Solvant volatil utilisé pour les extractions, notamment du café (décaféination).", "occurrence": "Synthétique", "applications": ["Décapage", "Pharmacie"] },
  { "name": "Chloroforme", "formula": "CHCl₃", "composition": { "C": 1, "H": 1, "Cl": 3 }, "molarMass": "119.38 g/mol", "category": "Anesthésique historique", "summary": "Ancien anesthésique, aujourd'hui utilisé comme solvant de laboratoire.", "occurrence": "Synthétique", "applications": ["Réactif analytique"] },
  { "name": "Tétrachlorure de Carbone", "formula": "CCl₄", "composition": { "C": 1, "Cl": 4 }, "molarMass": "153.82 g/mol", "category": "Halogénométhane", "summary": "Banni pour les usages domestiques en raison de sa toxicité hépatique et ozone.", "occurrence": "Synthétique", "applications": ["Extincteurs (historique)", "Recherche"] },
  { "name": "Acétate d'Éthyle", "formula": "C₄H₈O₂", "composition": { "C": 4, "H": 8, "O": 2 }, "molarMass": "88.11 g/mol", "category": "Ester", "summary": "Solvant à l'odeur fruitée (dissolvant pour vernis à ongles).", "occurrence": "Vin, fruits.", "applications": ["Parfums", "Entomologie"] },
  { "name": "Pyridine", "formula": "C₅H₅N", "composition": { "C": 5, "H": 5, "N": 1 }, "molarMass": "79.10 g/mol", "category": "Hétérocycle azoté", "summary": "Base faible et solvant à l'odeur nauséabonde caractéristique.", "occurrence": "Goudron de houille.", "applications": ["Catalyse", "Synthèse chimique"] },
  { "name": "Triéthylamine", "formula": "C₆H₁₅N", "composition": { "C": 6, "H": 15, "N": 1 }, "molarMass": "101.19 g/mol", "category": "Amine tertiaire", "summary": "Base organique servant à neutraliser les acides lors de synthèses.", "occurrence": "Synthétique", "applications": ["Synthèse organique"] },
  { "name": "Aniline", "formula": "C₆H₇N", "composition": { "C": 6, "H": 7, "N": 1 }, "molarMass": "93.13 g/mol", "category": "Amine aromatique", "summary": "Précurseur fondamental pour la fabrication de teintures et médicaments.", "occurrence": "Synthétique", "applications": ["Industrie des colorants"] }
];
