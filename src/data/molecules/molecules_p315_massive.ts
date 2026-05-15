/**
 * @copyright Sébastien John Bruneau
 * Bibliothèque de molécules - Lot de Complétion Massive (Partie 1 / 2)
 * Focus: Pharmacopée OMS, Minéralogie et Chimie Industrielle.
 * Population: ~100 molécules.
 */
import { MoleculeDefinition } from '../../types/molecule';

export const MASSIVE_LOT_PART1: MoleculeDefinition[] = [
  // --- Antibiotiques et Antivirals ---
  { "name": "Ciprofloxacine", "formula": "C17H18FN3O3", "composition": { "C": 17, "H": 18, "F": 1, "N": 3, "O": 3 }, "summary": "Antibiotique de la famille des fluoroquinolones.", "category": "Antibiotique", "molarMass": "331.34 g/mol" },
  { "name": "Clarithromycine", "formula": "C38H69NO13", "composition": { "C": 38, "H": 69, "N": 1, "O": 13 }, "summary": "Macrolide utilisé pour les infections respiratoires et l'éradication d'H. pylori.", "category": "Antibiotique", "molarMass": "747.95 g/mol" },
  { "name": "Lévofloxacine", "formula": "C18H20FN3O4", "composition": { "C": 18, "H": 20, "F": 1, "N": 3, "O": 4 }, "summary": "Fluoroquinolone à spectre élargi.", "category": "Antibiotique", "molarMass": "361.37 g/mol" },
  { "name": "Oseltamivir (Tamiflu)", "formula": "C16H28N2O4", "composition": { "C": 16, "H": 28, "N": 2, "O": 4 }, "summary": "Antiviral utilisé pour le traitement et la prévention de la grippe.", "category": "Antiviral", "molarMass": "312.40 g/mol" },
  { "name": "Ténofovir", "formula": "C9H14N5O4P", "composition": { "C": 9, "H": 14, "N": 5, "O": 4, "P": 1 }, "summary": "Antirétroviral majeur pour le traitement du VIH et de l'hépatite B.", "category": "Antiviral", "molarMass": "287.21 g/mol" },

  // --- Cardiovasculaire et divers ---
  { "name": "Lisinopril", "formula": "C21H31N3O5", "composition": { "C": 21, "H": 31, "N": 3, "O": 5 }, "summary": "Inhibiteur de l'ECA de référence.", "category": "Cardiovasculaire", "molarMass": "405.49 g/mol" },
  { "name": "Amlodipine", "formula": "C20H25ClN2O5", "composition": { "C": 20, "H": 25, "Cl": 1, "N": 2, "O": 5 }, "summary": "Inhibiteur des canaux calciques utilisé contre l'hypertension.", "category": "Cardiovasculaire", "molarMass": "408.88 g/mol" },
  { "name": "Valsartan", "formula": "C24H29N5O3", "composition": { "C": 24, "H": 29, "N": 5, "O": 3 }, "summary": "Sartan bloquant les récepteurs de l'angiotensine II.", "category": "Cardiovasculaire", "molarMass": "435.52 g/mol" },
  { "name": "Spironolactone", "formula": "C24H32O4S", "composition": { "C": 24, "H": 32, "O": 4, "S": 1 }, "summary": "Diurétique épargneur de potassium.", "category": "Cardiovasculaire", "molarMass": "416.57 g/mol" },

  // --- Psychotropes ---
  { "name": "Fluoxétine (Prozac)", "formula": "C17H18F3NO", "composition": { "C": 17, "H": 18, "F": 3, "N": 1, "O": 1 }, "summary": "Antidépresseur ISRS de référence.", "category": "Psychotrope", "molarMass": "309.33 g/mol" },
  { "name": "Halopéridol", "formula": "C21H23ClFNO2", "composition": { "C": 21, "H": 23, "Cl": 1, "F": 1, "N": 1, "O": 2 }, "summary": "Neuroleptique classique utilisé dans les psychoses.", "category": "Psychotrope", "molarMass": "375.86 g/mol" },
  { "name": "Lithium (Carbonate)", "formula": "Li2CO3", "composition": { "Li": 2, "C": 1, "O": 3 }, "summary": "Régulateur de l'humeur utilisé dans le trouble bipolaire.", "category": "Psychotrope", "molarMass": "73.89 g/mol" },

  // --- Minéraux ---
  { "name": "Pyrite", "formula": "FeS2", "composition": { "Fe": 1, "S": 2 }, "summary": "Disulfure de fer, l'or des fous.", "category": "Minéral", "molarMass": "119.98 g/mol" },
  { "name": "Galène", "formula": "PbS", "composition": { "Pb": 1, "S": 1 }, "summary": "Sulfure de plomb, principal minerai de plomb.", "category": "Minéral", "molarMass": "239.27 g/mol" },
  { "name": "Sphalérite", "formula": "ZnS", "composition": { "Zn": 1, "S": 1 }, "summary": "Sulfure de zinc, minerai de zinc.", "category": "Minéral", "molarMass": "97.47 g/mol" },
  { "name": "Barytine", "formula": "BaSO4", "composition": { "Ba": 1, "S": 1, "O": 4 }, "summary": "Sulfate de baryum dense, utilisé dans les boues de forage.", "category": "Minéral", "molarMass": "233.39 g/mol" },
  { "name": "Fluorapatite", "formula": "Ca5(PO4)3F", "composition": { "Ca": 5, "P": 3, "O": 12, "F": 1 }, "summary": "Phosphate de calcium présent dans les dents et les engrais.", "category": "Minéral", "molarMass": "504.30 g/mol" },

  // --- Chimie Industrielle Diverse ---
  { "name": "Éthylène glycol", "formula": "C2H6O2", "composition": { "C": 2, "H": 6, "O": 2 }, "summary": "Antigel et précurseur du PET.", "category": "Industriel", "molarMass": "62.07 g/mol" },
  { "name": "Diéthylène glycol", "formula": "C4H10O3", "composition": { "C": 4, "H": 10, "O": 3 }, "summary": "Solvant et humectant industriel.", "category": "Industriel", "molarMass": "106.12 g/mol" },
  { "name": "Triéthylène glycol", "formula": "C6H14O4", "composition": { "C": 6, "H": 14, "O": 4 }, "summary": "Agent de déshydratation pour le gaz naturel.", "category": "Industriel", "molarMass": "150.17 g/mol" },
  { "name": "Isocyanate de méthyle", "formula": "C2H3NO", "composition": { "C": 2, "H": 3, "N": 1, "O": 1 }, "summary": "Intermédiaire chimique extrêmement toxique (accident de Bhopal).", "category": "Toxique industriel", "molarMass": "57.05 g/mol" }
];
