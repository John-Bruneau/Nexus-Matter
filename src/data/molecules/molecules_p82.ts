/**
 * @copyright Sébastien John Bruneau
 * Part 82 of the molecule library - Rare and Exotic Natural Compounds.
 */
import { MoleculeDefinition } from '../../types/molecule';

export const MOLECULES_P82: MoleculeDefinition[] = [
  {
    "name": "Squalène",
    "formula": "C₃₀H₅₀",
    "composition": { "C": 30, "H": 50 },
    "summary": "Hydrocarbure triterpénique naturel, précurseur des stéroïdes.",
    "category": "Triterpène",
    "molarMass": "410.72 g/mol",
    "safetyWarning": "Sûr pour un usage cosmétique.",
    "manufacturing": "Extraction de foie de requin ou d'huile d'olive.",
    "meltingPoint": "-75 °C",
    "boilingPoint": "285 °C",
    "occurrence": "Foie de requin, sébum humain, végétaux."
  },
  {
    "name": "Biline",
    "formula": "C₃₃H₃₄N₄O₆",
    "composition": { "C": 33, "H": 34, "N": 4, "O": 6 },
    "summary": "Pigment biliaire impliqué dans le catabolisme de l'hémoglobine.",
    "category": "Tétrapyrrole / Pigment",
    "molarMass": "582.65 g/mol",
    "safetyWarning": "Indicateur clinique de la fonction hépatique.",
    "manufacturing": "Dégradation enzymatique de l'hème.",
    "meltingPoint": "N/A",
    "boilingPoint": "N/A",
    "occurrence": "Bile, sang."
  }
];
