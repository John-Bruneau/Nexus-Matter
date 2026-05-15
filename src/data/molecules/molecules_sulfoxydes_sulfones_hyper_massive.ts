/**
 * @copyright Sébastien John Bruneau
 * Thématique : Matrice Hyper-Massive des Sulfoxydes et Sulfones (R-SO-R', R-SO2-R')
 * Contient 20 000 entrées.
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

for (let n = 1; n <= 100; n++) {
  for (let m = 1; m <= 100; m++) {
    const totC = n + m;
    // Sulfoxydes
    data.push({
      "name": `Sulfoxyde de C${n} et C${m}`,
      "formula": `C${totC}H${2 * totC + 2}OS`,
      "composition": { "C": totC, "H": 2 * totC + 2, "O": 1, "S": 1 },
      "summary": `Sulfoxyde organique systématique.`,
      "category": "Sulfoxyde",
      "molarMass": "Calculé",
      "safetyWarning": "Pénètre facilement la barrière cutanée.",
      "manufacturing": "Oxydation contrôlée de sulfures.",
      "occurrence": "Produits de dégradation du soufre."
    });
    // Sulfones
    data.push({
      "name": `Sulfone de C${n} et C${m}`,
      "formula": `C${totC}H${2 * totC + 2}O₂S`,
      "composition": { "C": totC, "H": 2 * totC + 2, "O": 2, "S": 1 },
      "summary": `Sulfone organique stable.`,
      "category": "Sulfone",
      "molarMass": "Calculé",
      "manufacturing": "Oxydation poussée de sulfures.",
      "occurrence": "Synthétique."
    });
  }
}

export const molecules_sulfoxydes_sulfones_hyper_massive: MoleculeDefinition[] = data;
