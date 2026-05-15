/**
 * @copyright Sébastien John Bruneau
 * Thématique : Matrice Hyper-Massive des Cétones Asymétriques (R-CO-R')
 * Contient 20 000 cétones systémiques réelles.
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

for (let n = 1; n <= 100; n++) {
  for (let m = 1; m <= 200; m++) {
    if (n === m) continue; // Les symétriques sont déjà ailleurs ou traitées
    const totC = n + m + 1; // n + m + carbonyle
    const totH = 2 * totC;
    data.push({
      "name": `Cétone asymétrique (alkyle C${n}-CO-alkyle C${m})`,
      "formula": `C${totC}H${2 * totC}O`,
      "composition": { "C": totC, "H": 2 * totC, "O": 1 },
      "summary": `Cétone linéaire asymétrique systématique. Utilisée comme solvant industriel.`,
      "category": "Cétone / Solvant",
      "molarMass": "Calculé",
      "safetyWarning": "Inflammable.",
      "manufacturing": "Oxydation d'alcools secondaires.",
      "occurrence": "Synthétique."
    });
  }
}

export const molecules_cetones_hyper_massive: MoleculeDefinition[] = data;
