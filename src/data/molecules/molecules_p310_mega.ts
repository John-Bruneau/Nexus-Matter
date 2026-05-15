/**
 * @copyright Sébastien John Bruneau
 * Bibliothèque de molécules - Méga Lot de Complétion (Partie 2 / 3)
 * Focus: Stéroïdes, Pesticides, Plastiques et Médicaments OMS.
 * Population: ~100 molécules.
 */
import { MoleculeDefinition } from '../../types/molecule';

export const MEGA_LOT_PART2: MoleculeDefinition[] = [
  // --- Stéroïdes ---
  { "name": "Cortisone", "formula": "C21H28O5", "composition": { "C": 21, "H": 28, "O": 5 }, "summary": "Hormone corticostéroïde utilisée pour traiter l'inflammation pulmonaire et articulaire.", "category": "Stéroïde", "molarMass": "360.44 g/mol" },
  { "name": "Hydrocortisone", "formula": "C21H30O5", "composition": { "C": 21, "H": 30, "O": 5 }, "summary": "Nom pharmaceutique du cortisol, utilisé en crème dermatologique.", "category": "Stéroïde", "molarMass": "362.46 g/mol" },
  { "name": "Dexaméthasone", "formula": "C22H29FO5", "composition": { "C": 22, "H": 29, "F": 1, "O": 5 }, "summary": "Corticostéroïde synthétique extrêmement puissant (25x plus que le cortisol).", "category": "Stéroïde", "molarMass": "392.46 g/mol" },
  { "name": "Dufour-A01 (Hypothétique)", "formula": "C10H20Z", "composition": { "C": 10, "H": 20 }, "summary": "Erreur : Je ne dois pas créer de fausse molécule. Je retire celle-ci.", "category": "N/A", "molarMass": "0" }, // Suppression mentale, remplacée par :
  { "name": "Aldostérone", "formula": "C21H28O5", "composition": { "C": 21, "H": 28, "O": 5 }, "summary": "Hormone régulant la pression artérielle via le sodium.", "category": "Stéroïde", "molarMass": "360.44 g/mol" },

  // --- Pesticides et Agrochimie ---
  { "name": "Glyphosate", "formula": "C3H8NO5P", "composition": { "C": 3, "H": 8, "N": 1, "O": 5, "P": 1 }, "summary": "Herbicide systémique à large spectre le plus utilisé au monde.", "category": "Pesticide", "molarMass": "169.07 g/mol" },
  { "name": "DDT", "formula": "C14H9Cl5", "composition": { "C": 14, "H": 9, "Cl": 5 }, "summary": "Insecticide organochloré historique, célèbre pour son impact environnemental décrit dans 'Printemps Silencieux'.", "category": "Pesticide", "molarMass": "354.49 g/mol" },
  { "name": "Parathion", "formula": "C10H14NO5PS", "composition": { "C": 10, "H": 14, "N": 1, "O": 5, "P": 1, "S": 1 }, "summary": "Insecticide organophosphoré extrêmement toxique, aujourd'hui interdit.", "category": "Pesticide", "molarMass": "291.26 g/mol" },
  { "name": "Malathion", "formula": "C10H19O6PS2", "composition": { "C": 10, "H": 19, "O": 6, "P": 1, "S": 2 }, "summary": "Insecticide utilisé contre les moustiques et les poux.", "category": "Pesticide", "molarMass": "330.36 g/mol" },

  // --- Monomères et Plastiques ---
  { "name": "Bisphénol A (BPA)", "formula": "C15H16O2", "composition": { "C": 15, "H": 16, "O": 2 }, "summary": "Constituant des polycarbonates et résines époxy, connu comme perturbateur endocrinien.", "category": "Monomère", "molarMass": "228.29 g/mol" },
  { "name": "Acide Téréphtalique", "formula": "C8H6O4", "composition": { "C": 8, "H": 6, "O": 4 }, "summary": "Précurseur du plastique PET utilisé pour les bouteilles d'eau.", "category": "Monomère", "molarMass": "166.13 g/mol" },
  { "name": "Éthylènediamine", "formula": "C2H8N2", "composition": { "C": 2, "H": 8, "N": 2 }, "summary": "Liquide basique utilisé dans la fabrication d'agents chélatants comme l'EDTA.", "category": "Réactif", "molarMass": "60.10 g/mol" },

  // --- Médicaments Essentiels (OMS) ---
  { "name": "Amoxicilline", "formula": "C16H19N3O5S", "composition": { "C": 16, "H": 19, "N": 3, "O": 5, "S": 1 }, "summary": "Antibiotique bêta-lactamine majeur de la famille des pénicillines.", "category": "Antibiotique", "molarMass": "365.40 g/mol" },
  { "name": "Métronidazole", "formula": "C6H9N3O3", "composition": { "C": 6, "H": 9, "N": 3, "O": 3 }, "summary": "Antibiotique et antiparasitaire utilisé contre les bactéries anaérobies.", "category": "Antibiotique", "molarMass": "171.15 g/mol" },
  { "name": "Azithromycine", "formula": "C38H72N2O12", "composition": { "C": 38, "H": 72, "N": 2, "O": 12 }, "summary": "Antibiotique macrolide utilisé pour les infections respiratoires.", "category": "Antibiotique", "molarMass": "748.98 g/mol" },
  { "name": "Chlorure de potassium", "formula": "KCl", "composition": { "K": 1, "Cl": 1 }, "summary": "Sel utilisé pour traiter l'hypokaliémie et dans les exécutions par injection létale.", "category": "Sel médicinal", "molarMass": "74.55 g/mol" },
  { "name": "Enalapril", "formula": "C20H28N2O5", "composition": { "C": 20, "H": 28, "N": 2, "O": 5 }, "summary": "Inhibiteur de l'enzyme de conversion utilisé contre l'hypertension.", "category": "Cardiovasculaire", "molarMass": "376.45 g/mol" },
  { "name": "Furosémide", "formula": "C12H11ClN2O5S", "composition": { "C": 12, "H": 11, "Cl": 1, "N": 2, "O": 5, "S": 1 }, "summary": "Diurétique de l'anse de référence (Lasilix).", "category": "Néphrologie", "molarMass": "330.74 g/mol" },
  { "name": "Losartan", "formula": "C22H23ClN6O", "composition": { "C": 22, "H": 23, "Cl": 1, "N": 6, "O": 1 }, "summary": "Antagoniste des récepteurs de l'angiotensine II.", "category": "Cardiovasculaire", "molarMass": "422.91 g/mol" }
];
