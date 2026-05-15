/**
 * @copyright Sébastien John Bruneau
 * Thématique : Séries Systématiques 8 - Acides gras Omega et Isomères
 * Extension vers le quota massif.
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

// 1. Acides gras saturés (extension vers C500)
for (let n = 451; n <= 600; n++) {
  data.push({
    "name": `Acide gras saturé C${n}`,
    "formula": `C${n}H${2 * n}O₂`,
    "composition": { "C": n, "H": 2 * n, "O": 2 },
    "summary": `Acide carboxylique à très longue chaîne.`,
    "category": "Acide carboxylique",
    "molarMass": "Calculé",
    "manufacturing": "Synthèse de cires.",
    "occurrence": "Cires d'insectes, archéobactéries."
  });
}

// 2. Alcanes Branchés - Isomères de position '2' (2-méthylalcanes)
for (let n = 4; n <= 400; n++) {
  data.push({
    "name": `2-Méthyl${n === 4 ? "propane" : "alcane C" + (n-1)}`,
    "formula": `C${n}H${2 * n + 2}`,
    "composition": { "C": n, "H": 2 * n + 2 },
    "summary": `Isoalcane avec un groupement méthyle en position 2.`,
    "category": "Alcane branché",
    "molarMass": "Calculé",
    "safetyWarning": "Inflammable.",
    "occurrence": "Pétrole."
  });
}

// 3. Esters complexes (R-COO-R') - Matrice additionnelle
for (let n = 61; n <= 100; n++) {
  for (let m = 1; m <= 60; m++) {
    const totC = n + m;
    data.push({
      "name": `Alcanoate C${n} de alkyle C${m}`,
      "formula": `C${totC}H${2 * totC}O₂`,
      "composition": { "C": totC, "H": 2 * totC, "O": 2 },
      "summary": `Ester à très longue chaîne.`,
      "category": "Ester massif",
      "molarMass": "Calculé"
    });
  }
}

export const molecules_systematiques_massives_8: MoleculeDefinition[] = data;
