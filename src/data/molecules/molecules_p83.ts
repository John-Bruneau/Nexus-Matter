import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série P83
 * Focus: Neurobiologie et Hormones Endogènes.
 * Copyright Sébastien John Bruneau
 */
export const MOLECULES_P83: MoleculeDefinition[] = [
  { "name": "Adrénaline", "formula": "C₉H₁₃NO₃", "composition": { "C": 9, "H": 13, "N": 1, "O": 3 }, "molarMass": "183.20 g/mol", "category": "Hormone / Neurotransmetteur", "summary": "Hormone du stress augmentant le rythme cardiaque et la pression artérielle.", "occurrence": "Glandes surrénales.", "applications": ["Urgence médicale", "Réanimation"] },
  { "name": "Noradrénaline", "formula": "C₈H₁₁NO₃", "composition": { "C": 8, "H": 11, "N": 1, "O": 3 }, "molarMass": "169.18 g/mol", "category": "Catécholamine", "summary": "Précurseur de l'adrénaline, joue un rôle clé dans l'attention et le sommeil.", "occurrence": "Système nerveux.", "applications": ["Choc septique", "Lutte contre l'hypotension"] },
  { "name": "Dopamine", "formula": "C₈H₁₁NO₂", "composition": { "C": 8, "H": 11, "N": 1, "O": 2 }, "molarMass": "153.18 g/mol", "category": "Molécule du plaisir", "summary": "Neurotransmetteur associé à la récompense, au mouvement et à la motivation.", "occurrence": "Cerveau (Substance noire).", "applications": ["Maladie de Parkinson", "Addiction"] },
  { "name": "Mélatonine", "formula": "C₁₃H₁₆N₂O₂", "composition": { "C": 13, "H": 16, "N": 2, "O": 2 }, "molarMass": "232.28 g/mol", "category": "Hormone du sommeil", "summary": "Régule les cycles circadiens (veille/sommeil).", "occurrence": "Glande pinéale.", "applications": ["Troubles du sommeil", "Décalage horaire"] },
  { "name": "Ocytocine", "formula": "C₄₃H₆₆N₁₂O₁₂S₂", "composition": { "C": 43, "H": 66, "N": 12, "O": 12, "S": 2 }, "molarMass": "1007.19 g/mol", "category": "Hormone de l'attachement", "summary": "Hormone favorisant le lien social, l'accouchement et l'allaitement.", "occurrence": "Hypothalamus.", "applications": ["Obstétrique"] },
  { "name": "GABA", "formula": "C₄H₉NO₂", "composition": { "C": 4, "H": 9, "N": 1, "O": 2 }, "molarMass": "103.12 g/mol", "category": "Neurotransmetteur inhibiteur", "summary": "Principal inhibiteur du système nerveux central, calme l'activité neuronale.", "occurrence": "Cerveau.", "applications": ["Anxiolytiques"] },
  { "name": "Glutamate", "formula": "C₅H₈NO₄", "composition": { "C": 5, "H": 8, "N": 1, "O": 4 }, "molarMass": "146.12 g/mol", "category": "Neurotransmetteur excitateur", "summary": "Principal excitateur du système nerveux, impliqué dans l'apprentissage.", "occurrence": "Abondant dans tout le corps.", "applications": ["Cognition"] }
];
