/**
 * @copyright Sébastien John Bruneau
 * Part 80 of the molecule library - Pigments, Dyes and Optical Materials.
 */
import { MoleculeDefinition } from '../../types/molecule';

export const MOLECULES_P80: MoleculeDefinition[] = [
  {
    "name": "Indigo",
    "formula": "C₁₆H₁₀N₂O₂",
    "composition": { "C": 16, "H": 10, "N": 2, "O": 2 },
    "summary": "Colorant bleu historique utilisé pour teindre les jeans.",
    "category": "Colorant organique",
    "molarMass": "262.26 g/mol",
    "safetyWarning": "Peu toxique mais peut causer des irritations cutanées.",
    "manufacturing": "Synthèse à partir de l'aniline ou extraction végétale.",
    "meltingPoint": "390-392 °C",
    "boilingPoint": "Sublimation",
    "occurrence": "Plantes Indigofera."
  },
  {
    "name": "Alizarine",
    "formula": "C₁₄H₈O₄",
    "composition": { "C": 14, "H": 8, "O": 4 },
    "summary": "Pigment rouge historiquement extrait de la garance, premier colorant naturel synthétisé.",
    "category": "Anthraquinone / Pigment",
    "molarMass": "240.21 g/mol",
    "safetyWarning": "Irritant modéré.",
    "manufacturing": "Synthèse à partir de l'anthraquinone.",
    "meltingPoint": "279-283 °C",
    "boilingPoint": "430 °C",
    "occurrence": "Racines de garance."
  },
  {
    "name": "Fluorescéine",
    "formula": "C₂₀H₁₂O₅",
    "composition": { "C": 20, "H": 12, "O": 5 },
    "summary": "Composé organique utilisé comme traceur fluorescent.",
    "category": "Fluorophore / Traceur",
    "molarMass": "332.31 g/mol",
    "safetyWarning": "Coloration intense des tissus; généralement peu toxique.",
    "manufacturing": "Condensation de l'anhydride phtalique et du résorcinol.",
    "meltingPoint": "314-316 °C",
    "boilingPoint": "Décomposition",
    "occurrence": "Produit de synthèse."
  },
  {
    "name": "Phthalocyanine de Cuivre",
    "formula": "C₃₂H₁₆CuN₈",
    "composition": { "C": 32, "H": 16, "Cu": 1, "N": 8 },
    "summary": "Pigment bleu extrêmement stable et résistant utilisé dans les encres et plastiques.",
    "category": "Pigment organométallique",
    "molarMass": "576.07 g/mol",
    "safetyWarning": "Très stable, faible toxicité aiguë.",
    "manufacturing": "Réaction du phtalonitrile avec des sels de cuivre.",
    "meltingPoint": "> 600 °C",
    "boilingPoint": "N/A",
    "occurrence": "Forme synthétique uniquement."
  }
];
