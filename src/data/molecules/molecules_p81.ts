/**
 * @copyright Sébastien John Bruneau
 * Part 81 of the molecule library - Modern High-Tech Reagents and Solvents.
 */
import { MoleculeDefinition } from '../../types/molecule';

export const MOLECULES_P81: MoleculeDefinition[] = [
  {
    "name": "Liquide ionique [BMIM][PF6]",
    "formula": "C₈H₁₅F₆N₂P",
    "composition": { "C": 8, "H": 15, "F": 6, "N": 2, "P": 1 },
    "summary": "Sel liquide à température ambiante utilisé comme solvant 'vert' et électrolyte.",
    "category": "Liquide ionique",
    "molarMass": "284.18 g/mol",
    "safetyWarning": "Toxicité aquatique potentielle; peu volatil.",
    "manufacturing": "Quaternisation de l'alphabet-méthylimidazole puis échange d'anions.",
    "meltingPoint": "-8 °C",
    "boilingPoint": "> 300 °C (Décomposition)",
    "occurrence": "Synthétique."
  },
  {
    "name": "Toluène-2,4-diisocyanate (TDI)",
    "formula": "C₉H₆N₂O₂",
    "composition": { "C": 9, "H": 6, "N": 2, "O": 2 },
    "summary": "Intermédiaire chimique majeur pour la production de mousses de polyuréthane.",
    "category": "Isocyanate / Polymère",
    "molarMass": "174.16 g/mol",
    "safetyWarning": "Hautement toxique par inhalation; sensibilisant respiratoire.",
    "manufacturing": "Phosgénation de la toluènediamine.",
    "meltingPoint": "20-22 °C",
    "boilingPoint": "251 °C",
    "occurrence": "Production industrielle."
  },
  {
    "name": "Cyanacrylate de méthyle",
    "formula": "C₅H₅NO₂",
    "composition": { "C": 5, "H": 5, "N": 1, "O": 2 },
    "summary": "Le composant principal de la 'Super Glue'.",
    "category": "Adhésif",
    "molarMass": "111.10 g/mol",
    "safetyWarning": "Colle instantanément la peau et les paupières; vapeurs irritantes.",
    "manufacturing": "Condensation de l'acétate de cyano avec le formaldéhyde.",
    "meltingPoint": "-40 °C",
    "boilingPoint": "48-49 °C (à 3 mmHg)",
    "occurrence": "Adhésifs commerciaux."
  }
];
