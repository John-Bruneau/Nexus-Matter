/**
 * @copyright Sébastien John Bruneau
 * Thématique : Matrice Hyper-Massive des Sulfures (C1-C100 x C1-C200)
 * Contient 20 000 thioéthers.
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

for (let n = 1; n <= 100; n++) {
  for (let m = 1; m <= 200; m++) {
    const totC = n + m;
    data.push({
      "name": `Sulfure d'alkyles C${n} et C${m}`,
      "formula": `C${totC}H${2 * totC + 2}S`,
      "composition": { "C": totC, "H": 2 * totC + 2, "S": 1 },
      "summary": `Sulfure organique (thioéther) systématique.`,
      "category": "Sulfure / Thioéther",
      "molarMass": "Calculé",
      "safetyWarning": "Odeur forte et persistante.",
      "occurrence": "Dégradation de matières organiques."
    });
  }
}

export const molecules_sulfures_hyper_massive: MoleculeDefinition[] = data;
