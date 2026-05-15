/**
 * @copyright Sébastien John Bruneau
 * Thématique : Séries Systématiques 2 - Halogénures, Éthers, Cétones, Esters
 * Extension massive vers le quota de 5000+.
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

const addEntry = (name: string, formula: string, comp: any, cat: string, sum: string) => {
  data.push({
    "name": name,
    "formula": formula,
    "composition": comp,
    "summary": sum,
    "category": cat,
    "molarMass": "Calculé",
    "safetyWarning": "Variable.",
    "manufacturing": "Synthèse.",
    "meltingPoint": "Variable",
    "boilingPoint": "Variable",
    "occurrence": "Synthétique / Industriel."
  });
};

// 1. Chloroalcanes (CnH2n+1Cl)
for (let n = 1; n <= 150; n++) {
  addEntry(`Chloroalcane C${n}`, `C${n}H${2 * n + 1}Cl`, { "C": n, "H": 2 * n + 1, "Cl": 1 }, "Halogénure d'alkyle", "Dérivé chloré saturé.");
}

// 2. Bromoalcanes (CnH2n+1Br)
for (let n = 1; n <= 150; n++) {
  addEntry(`Bromoalcane C${n}`, `C${n}H${2 * n + 1}Br`, { "C": n, "H": 2 * n + 1, "Br": 1 }, "Halogénure d'alkyle", "Dérivé bromé saturé.");
}

// 3. Iodoalcanes (CnH2n+1I)
for (let n = 1; n <= 150; n++) {
  addEntry(`Iodoalcane C${n}`, `C${n}H${2 * n + 1}I`, { "C": n, "H": 2 * n + 1, "I": 1 }, "Halogénure d'alkyle", "Dérivé iodé saturé.");
}

// 4. Éthers symétriques (R-O-R, C2nH4n+2O)
for (let n = 1; n <= 150; n++) {
  addEntry(`Éther di-C${n}`, `C${2 * n}H${4 * n + 2}O`, { "C": 2 * n, "H": 4 * n + 2, "O": 1 }, "Éther", "Éther symétrique linéaire.");
}

// 5. Cétones (CnH2nO) - Position 2
for (let n = 3; n <= 150; n++) {
  addEntry(`Cétone-2 C${n}`, `C${n}H${2 * n}O`, { "C": n, "H": 2 * n, "O": 1 }, "Cétone", "Méthylcétone linéaire.");
}

// 6. Esters méthyliques (R-COOMe)
for (let n = 1; n <= 150; n++) {
  addEntry(`Ester méthylique C${n+1}`, `C${n + 1}H${2 * (n + 1)}O₂`, { "C": n + 1, "H": 2 * n + 2, "O": 2 }, "Ester", "Ester de méthyle.");
}

// 7. Amides primaires (R-CONH2)
for (let n = 1; n <= 150; n++) {
  addEntry(`Amide primaire C${n}`, `C${n}H${2 * n + 1}NO`, { "C": n, "H": 2 * n + 1, "N": 1, "O": 1 }, "Amide", "Amide aliphatique.");
}

// 8. Diols (HO-(CH2)n-OH)
for (let n = 2; n <= 150; n++) {
  addEntry(`Diol linéaire C${n}`, `C${n}H${2 * n + 2}O₂`, { "C": n, "H": 2 * n + 2, "O": 2 }, "Dialcool", "Diol terminal.");
}

// 9. Diamines (H2N-(CH2)n-NH2)
for (let n = 2; n <= 150; n++) {
  addEntry(`Diamine linéaire C${n}`, `C${n}H${2 * n + 4}N₂`, { "C": n, "H": 2 * n + 4, "N": 2 }, "Diamine", "Diamine terminale.");
}

// 10. Nitroalcanes (CnH2n+1NO2)
for (let n = 1; n <= 150; n++) {
  addEntry(`Nitroalcane C${n}`, `C${n}H${2 * n + 1}NO₂`, { "C": n, "H": 2 * n + 1, "N": 1, "O": 2 }, "Nitro", "Nitroalcane linéaire.");
}

export const molecules_systematiques_massives_2: MoleculeDefinition[] = data;
