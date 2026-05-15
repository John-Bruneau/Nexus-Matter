/**
 * @copyright Sébastien John Bruneau
 * Thématique : Extension de la Matrice des Esters (C101-C200 x C1-C100)
 * Contient 20 000 esters supplémentaires.
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

for (let n = 101; n <= 200; n++) {
  for (let m = 1; m <= 200; m++) {
    const totC = n + m;
    data.push({
      "name": `Alcanoate lourd C${n} de alkyle C${m}`,
      "formula": `C${totC}H${2 * totC}O₂`,
      "composition": { "C": totC, "H": 2 * totC, "O": 2 },
      "summary": `Ester à très longue chaîne carbonée.`,
      "category": "Ester / Lipide",
      "molarMass": "Calculé",
      "occurrence": "Cires synthétiques, lubrifiants haute performance."
    });
  }
}

export const molecules_esters_extension_hyper_massive: MoleculeDefinition[] = data;
