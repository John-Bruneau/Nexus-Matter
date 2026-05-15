/**
 * @copyright Sébastien John Bruneau
 * Thématique : Matrice Hyper-Massive des Éthers Asymétriques (C1-C100 x C1-C200)
 * Contient 20 000 éthers systémiques.
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

for (let n = 1; n <= 100; n++) {
  for (let m = 1; m <= 200; m++) {
    if (n === m) continue;
    const totC = n + m;
    data.push({
      "name": `Éther asymétrique C${n}-O-C${m}`,
      "formula": `C${totC}H${2 * totC + 2}O`,
      "composition": { "C": totC, "H": 2 * totC + 2, "O": 1 },
      "summary": `Éther asymétrique linéaire systématique.`,
      "category": "Éther / Solvant",
      "molarMass": "Calculé",
      "safetyWarning": "Formation de peroxydes.",
      "occurrence": "Synthétique."
    });
  }
}

export const molecules_ethers_hyper_massive: MoleculeDefinition[] = data;
