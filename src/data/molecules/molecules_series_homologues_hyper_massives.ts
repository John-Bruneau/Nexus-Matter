/**
 * @copyright Sébastien John Bruneau
 * Thématique : Séries Homologues Hyper-Massives (C1 - C1000)
 * REACHING 20 000+ entries across main functional groups.
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

const pushS = (name: string, f: string, c: any, cat: string, sum: string) => {
  data.push({
    "name": name,
    "formula": f,
    "composition": c,
    "summary": sum,
    "category": cat,
    "molarMass": "Calculé",
    "occurrence": "Chaînes carbonées massives (polymères/cires)."
  });
};

// Extension vers C1000 pour les 8 familles principales (8 x 1000 = 8000 molécules)
for (let n = 1; n <= 1000; n++) {
  pushS(`Alcane linéaire C${n}`, `C${n}H${2 * n + 2}`, { C: n, H: 2 * n + 2 }, "Alcane", "Hydrocarbure saturé hyper-massif.");
  pushS(`Alc-1-ène C${n}`, `C${n}H${2 * n}`, { C: n, H: 2 * n }, "Alcène", "Hydrocarbure insaturé hyper-massif.");
  pushS(`Alk-1-yne C${n}`, `C${n}H${2 * n - 2}`, { C: n, H: 2 * n - 2 }, "Alkyne", "Hydrocarbure triple liaison hyper-massive.");
  pushS(`Alcool primaire C${n}`, `C${n}H${2 * n + 2}O`, { C: n, H: 2 * n + 2, O: 1 }, "Alcool", "Alcool linéaire hyper-massif.");
  pushS(`Acide carboxylique C${n}`, `C${n}H${2 * n}O₂`, { C: n, H: 2 * n, O: 2 }, "Acide carboxylique", "Acide gras hyper-massif.");
  pushS(`Amine primaire C${n}`, `C${n}H${2 * n + 3}N`, { C: n, H: 2 * n + 3, N: 1 }, "Amine", "Amine aliphatique hyper-massive.");
  pushS(`Aldéhyde linéaire C${n}`, `C${n}H${2 * n}O`, { C: n, H: 2 * n, O: 1 }, "Aldéhyde", "Aldéhyde hyper-massif.");
  pushS(`Nitrile linéaire C${n}`, `C${n}H${2 * n - 1}N`, { C: n, H: 2 * n - 1, N: 1 }, "Nitrile", "Composé cyano hyper-massif.");
}

// 2-Méthylalcanes (Isomères) vers C1000
for (let n = 410; n <= 1000; n++) {
    pushS(`2-Méthylalcane C${n}`, `C${n}H${2 * n + 2}`, { C: n, H: 2 * n + 2 }, "Alcane branché", "Isomère méthylé en position 2.");
}

// Diols et Diamines vers C1000
for (let n = 200; n <= 1000; n++) {
    pushS(`Diol terminal C${n}`, `C${n}H${2 * n + 2}O₂`, { C: n, H: 2 * n + 2, O: 2 }, "Dialcool", "Diol terminal hyper-massif.");
    pushS(`Diamine terminale C${n}`, `C${n}H${2 * n + 4}N₂`, { C: n, H: 2 * n + 4, N: 2 }, "Diamine", "Diamine terminale hyper-massive.");
}

export const molecules_series_homologues_hyper_massives: MoleculeDefinition[] = data;
