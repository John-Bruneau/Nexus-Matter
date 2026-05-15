/**
 * @copyright Sébastien John Bruneau
 * Bibliothèque de molécules - Section Consolidée : Chimie Industrielle & Matériaux
 */
import { MoleculeDefinition } from '../../types/molecule';

export const INDUSTRIAL_DATA: MoleculeDefinition[] = [
  // --- Agrochimie & Pesticides ---
  { "name": "Glyphosate", "formula": "C3H8NO5P", "composition": { "C": 3, "H": 8, "N": 1, "O": 5, "P": 1 }, "summary": "Herbiside systémique le plus utilisé au monde.", "category": "Agrochimie / Herbicide", "molarMass": "169.1 g/mol", "safetyWarning": "Controversé (potentiel cancérogène).", "manufacturing": "Synthèse Monsanto.", "occurrence": "Synthétique." },
  { "name": "Atrazine", "formula": "C8H14ClN5", "composition": { "C": 8, "H": 14, "Cl": 1, "N": 5 }, "summary": "Herbicide triazine largement utilisé sur le maïs.", "category": "Agrochimie / Herbicide", "molarMass": "215.7 g/mol", "safetyWarning": "Perturbateur endocrinien suspecté.", "manufacturing": "Synthèse.", "occurrence": "Synthétique." },
  { "name": "Néonicotinoïde (Imidaclopride)", "formula": "C9H10ClN5O2", "composition": { "C": 9, "H": 10, "Cl": 1, "N": 5, "O": 2 }, "summary": "Insecticide agissant sur le système nerveux central des insectes.", "category": "Agrochimie / Insecticide", "molarMass": "255.7 g/mol", "safetyWarning": "Toxicité élevée pour les abeilles.", "manufacturing": "Synthèse Bayer.", "occurrence": "Synthétique." },

  // --- Chimie Inorganique & Minéraux ---
  { "name": "Acide Sulfurique", "formula": "H2SO4", "composition": { "H": 2, "S": 1, "O": 4 }, "summary": "Le 'sang de l'industrie', indicateur de la puissance industrielle d'un pays.", "category": "Industrie / Acide", "molarMass": "98.1 g/mol", "safetyWarning": "Extrêmement corrosif.", "manufacturing": "Procédé de contact.", "boilingPoint": "337 °C", "occurrence": "Synthétique." },
  { "name": "Ammoniac", "formula": "NH3", "composition": { "N": 1, "H": 3 }, "summary": "Base de la fabrication des engrais azotés.", "category": "Industrie / Engrais", "molarMass": "17.0 g/mol", "manufacturing": "Procédé Haber-Bosch.", "boilingPoint": "-33 °C", "occurrence": "Synthétique." },
  { "name": "Soude Caustique (Hydroxyde de sodium)", "formula": "NaOH", "composition": { "Na": 1, "O": 1, "H": 1 }, "summary": "Utilisée massivement pour le savon, le papier et le traitement des eaux.", "category": "Industrie / Base", "molarMass": "40.0 g/mol", "safetyWarning": "Fortement corrosif.", "manufacturing": "Électrolyse du sel.", "meltingPoint": "318 °C", "occurrence": "Synthétique." },

  // --- Matériaux & Quotidien ---
  { "name": "Dioxyde de Titane", "formula": "TiO2", "composition": { "Ti": 1, "O": 2 }, "summary": "Pigment blanc universel (peintures, plastiques, crèmes solaires).", "category": "Industrie / Pigment", "molarMass": "79.9 g/mol", "manufacturing": "Procédés sulfate ou chlorure.", "occurrence": "Minéral (Rutile)." },
  { "name": "Silice (Dioxyde de silicium)", "formula": "SiO2", "composition": { "Si": 1, "O": 2 }, "summary": "Composant principal du sable et du verre.", "category": "Matériau / Minéral", "molarMass": "60.1 g/mol", "meltingPoint": "1713 °C", "occurrence": "Quartz." },
  { "name": "Carbonate de Calcium", "formula": "CaCO3", "composition": { "Ca": 1, "C": 1, "O": 3 }, "summary": "Constituant du calcaire, de la craie et du marbre.", "category": "Matériau / Minéral", "molarMass": "100.1 g/mol", "occurrence": "Coquillages, Calcaire." }
];
