/**
 * @copyright Sébastien John Bruneau
 * Thématique : Séries Systématiques 7 - Nitriles et Nitroalcanes (C1 - C300)
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

// 1. Nitriles Linéaires (CnH2n-1N)
for (let n = 2; n <= 300; n++) {
  data.push({
    "name": `Nitrile linéaire C${n}`,
    "formula": `C${n}H${2 * n - 1}N`,
    "composition": { "C": n, "H": 2 * n - 1, "N": 1 },
    "summary": `Composé organique comportant un groupement cyano.`,
    "category": "Nitrile",
    "molarMass": "Calculé",
    "safetyWarning": "Toxicité souvent élevée (libération possible d'ions cyanure).",
    "manufacturing": "Ammoxydation d'hydrocarbures.",
    "occurrence": "Végétaux (glycosides cyanogènes)."
  });
}

// 2. Nitroalcanes Linéaires (CnH2n+1NO2)
for (let n = 1; n <= 300; n++) {
  data.push({
    "name": `Nitroalcane linéaire C${n}`,
    "formula": `C${n}H${2 * n + 1}NO₂`,
    "composition": { "C": n, "H": 2 * n + 1, "N": 1, "O": 2 },
    "summary": `Composé possédant un groupement nitro lié à une chaîne saturée.`,
    "category": "Nitroalcanes",
    "molarMass": "Calculé",
    "safetyWarning": "Potentialité explosive sous certaines conditions.",
    "manufacturing": "Nitration en phase gazeuse.",
    "occurrence": "Synthétique."
  });
}

export const molecules_systematiques_massives_7: MoleculeDefinition[] = data;
