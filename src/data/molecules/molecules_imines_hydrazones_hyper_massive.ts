/**
 * @copyright Sébastien John Bruneau
 * Thématique : Matrice Hyper-Massive des Imines et Hydrazones (R-CH=N-R', R-CH=N-NH-R')
 * Contient 20 000 entrées.
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

for (let n = 1; n <= 100; n++) {
  for (let m = 1; m <= 100; m++) {
    const totC = n + m;
    // Imines
    data.push({
      "name": `Imine de C${n} et C${m}`,
      "formula": `C${totC}H${2 * totC + 1}N`,
      "composition": { "C": totC, "H": 2 * totC + 1, "N": 1 },
      "summary": `Base de Schiff systématique.`,
      "category": "Imine",
      "molarMass": "Calculé",
      "safetyWarning": "Sensible à l'hydrolyse.",
      "manufacturing": "Condensation aldéhyde/cétone + amine.",
      "occurrence": "Intermédiaires biologiques."
    });
    // Hydrazones
    data.push({
      "name": `Hydrazone de C${n} et C${m}`,
      "formula": `C${totC}H${2 * totC + 2}N₂`,
      "composition": { "C": totC, "H": 2 * totC + 2, "N": 2 },
      "summary": `Hydrazone systématique.`,
      "category": "Hydrazone",
      "molarMass": "Calculé",
      "manufacturing": "Condensation avec l'hydrazine.",
      "occurrence": "Synthétique."
    });
  }
}

export const molecules_imines_hydrazones_hyper_massive: MoleculeDefinition[] = data;
