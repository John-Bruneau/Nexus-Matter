/**
 * @copyright Sébastien John Bruneau
 * Thématique : Matrice Hyper-Massive des Amides N-Disubstituées (R-CON(Me)R')
 * Contient 20 000 amides tertiaires systémiques.
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

for (let n = 1; n <= 100; n++) {
  for (let m = 1; m <= 200; m++) {
    const totC = n + m + 1; // Acide(n) + Amine(m) + N-Me(1)
    data.push({
      "name": `N-Méthyl-N-alkyl C${m} alkanamide C${n}`,
      "formula": `C${totC}H${2 * totC + 1}NO`,
      "composition": { "C": totC, "H": 2 * totC + 1, "N": 1, "O": 1 },
      "summary": `Amide tertiaire systématique avec un groupement méthyle et un alkyle long sur l'azote.`,
      "category": "Amide tertiaire",
      "molarMass": "Calculé",
      "safetyWarning": "Souvent utilisé comme solvant aprotique polaire.",
      "manufacturing": "Réaction d'amines secondaires sur des chlorures d'acyle.",
      "occurrence": "Synthétique."
    });
  }
}

export const molecules_amides_disubstituees_hyper_massive: MoleculeDefinition[] = data;
