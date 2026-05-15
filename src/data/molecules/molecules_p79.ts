/**
 * @copyright Sébastien John Bruneau
 * Part 79 of the molecule library - Essential Amino Acids and Life Building Blocks.
 */
import { MoleculeDefinition } from '../../types/molecule';

export const MOLECULES_P79: MoleculeDefinition[] = [
  {
    "name": "L-Alanine",
    "formula": "C₃H₇NO₂",
    "composition": { "C": 3, "H": 7, "N": 1, "O": 2 },
    "summary": "Acide aminé non essentiel impliqué dans le métabolisme du glucose.",
    "category": "Acide aminé",
    "molarMass": "89.09 g/mol",
    "safetyWarning": "Sûr pour la consommation humaine.",
    "manufacturing": "Fermentation ou synthèse chimique.",
    "meltingPoint": "258 °C",
    "boilingPoint": "Décomposition",
    "occurrence": "Protéines animales et végétales."
  },
  {
    "name": "L-Valine",
    "formula": "C₅H₁₁NO₂",
    "composition": { "C": 5, "H": 11, "N": 1, "O": 2 },
    "summary": "Acide aminé essentiel à chaîne latérale ramifiée, crucial pour la réparation musculaire.",
    "category": "Acide aminé essentiel",
    "molarMass": "117.15 g/mol",
    "safetyWarning": "Essentiel dans l'alimentation.",
    "manufacturing": "Fermentation.",
    "meltingPoint": "298 °C",
    "boilingPoint": "Sublimation",
    "occurrence": "Laitage, viande, céréales."
  },
  {
    "name": "L-Leucine",
    "formula": "C₆H₁₃NO₂",
    "composition": { "C": 6, "H": 13, "N": 1, "O": 2 },
    "summary": "Le plus abondant des trois acides aminés à chaîne ramifiée (BCAA).",
    "category": "Acide aminé essentiel",
    "molarMass": "131.17 g/mol",
    "safetyWarning": "Importante pour la synthèse protéique.",
    "manufacturing": "Fermentation.",
    "meltingPoint": "293 °C",
    "boilingPoint": "Sublimation",
    "occurrence": "Oeufs, poisson, lentilles."
  },
  {
    "name": "L-Isoleucine",
    "formula": "C₆H₁₃NO₂",
    "composition": { "C": 6, "H": 13, "N": 1, "O": 2 },
    "summary": "Isomère de la leucine, impliqué dans la régulation du sucre sanguin.",
    "category": "Acide aminé essentiel",
    "molarMass": "131.17 g/mol",
    "safetyWarning": "Indispensable au métabolisme.",
    "manufacturing": "Fermentation.",
    "meltingPoint": "284 °C",
    "boilingPoint": "Sublimation",
    "occurrence": "Noix, graines, pois."
  },
  {
    "name": "Adénosine Triphosphate (ATP)",
    "formula": "C₁₀H₁₆N₅O₁₃P₃",
    "composition": { "C": 10, "H": 16, "N": 5, "O": 13, "P": 3 },
    "summary": "La 'monnaie énergétique' universelle de la cellule vivante.",
    "category": "Nucléotide / Énergie cellulaire",
    "molarMass": "507.18 g/mol",
    "safetyWarning": "Instable en solution aqueuse (hydrolyse).",
    "manufacturing": "Biosynthèse cellulaire ou synthèse enzymatique.",
    "meltingPoint": "187 °C",
    "boilingPoint": "N/A",
    "occurrence": "Toutes les cellules vivantes."
  }
];
