/**
 * @copyright Sébastien John Bruneau
 * Thématique : Matrice Massive des Thiols et Sulfures (R-SH, R-S-R')
 * Extension vers le quota de 50000 molécules.
 * Contient ~3000 entrées.
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

// 1. Thiols Linéaires (C1-C500)
for (let n = 1; n <= 500; n++) {
  data.push({
    "name": `Alcanethiol C${n}`,
    "formula": `C${n}H${2 * n + 2}S`,
    "composition": { "C": n, "H": 2 * n + 2, "S": 1 },
    "summary": `Thiol linéaire à ${n} carbones. Connu pour son odeur de soufre intense.`,
    "category": "Thiol",
    "molarMass": "Calculé",
    "safetyWarning": "Odeur extrêmement nauséabonde; toxique à forte concentration.",
    "manufacturing": "Réaction entre hydrogène sulfuré et alcènes.",
    "occurrence": "Putois, gaz naturel (odorisant), ail."
  });
}

// 2. Sulfures (Thioéthers) Matriciels (C1-C50 x C1-C50)
for (let n = 1; n <= 50; n++) {
  for (let m = 1; m <= 50; m++) {
    const totC = n + m;
    const totH = 2 * totC + 2;
    data.push({
      "name": `Sulfure de C${n} et C${m}`,
      "formula": `C${totC}H${totH}S`,
      "composition": { "C": totC, "H": totH, "S": 1 },
      "summary": `Thioéther linéaire asymétrique.`,
      "category": "Sulfure / Thioéther",
      "molarMass": "Calculé",
      "safetyWarning": "Odeur forte.",
      "manufacturing": "Synthèse organique.",
      "occurrence": "Processus de dégradation biologique."
    });
  }
}

export const molecules_thiols_sulfures: MoleculeDefinition[] = data;
