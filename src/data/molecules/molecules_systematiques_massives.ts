/**
 * @copyright Sébastien John Bruneau
 * Thématique : Séries Systématiques Massives - Extension vers 5000+ nouvelles entrées
 * Alcanes, Alcènes, Alkynes, Alcools, Acides, Amines, Éthers jusqu'à C200.
 */
import { MoleculeDefinition } from '../../types/molecule';

const families: MoleculeDefinition[] = [];

// Générateur systématique IUPAC
const generateSeries = (namePrefix: string, formulaFunc: (n: number) => string, compFunc: (n: number) => any, cat: string, summary: string, limit: number = 200) => {
  for (let n = 1; n <= limit; n++) {
    families.push({
      "name": `${namePrefix} en C${n}`,
      "formula": formulaFunc(n),
      "composition": compFunc(n),
      "summary": `${summary} à ${n} carbones.`,
      "category": cat,
      "molarMass": "Calculé",
      "safetyWarning": "Variable selon la longueur de chaîne.",
      "manufacturing": "Synthèse industrielle / Fractionnement.",
      "meltingPoint": "Variable",
      "boilingPoint": "Variable",
      "occurrence": "Pétrole / Synthétique."
    });
  }
};

// 1. Alcanes (CnH2n+2)
generateSeries("Alcane linéaire", (n) => `C${n}H${2 * n + 2}`, (n) => ({ "C": n, "H": 2 * n + 2 }), "Alcane", "Hydrocarbure saturé", 250);

// 2. Alcènes (CnH2n) - Position 1
generateSeries("Alc-1-ène", (n) => `C${n}H${2 * n}`, (n) => ({ "C": n, "H": 2 * n }), "Alcène", "Hydrocarbure insaturé", 250);

// 3. Alkynes (CnH2n-2) - Position 1
generateSeries("Alk-1-yne", (n) => `C${n}H${2 * n - 2}`, (n) => ({ "C": n, "H": 2 * n - 2 }), "Alkyne", "Hydrocarbure triple liaison", 250);

// 4. Alcools primaires (CnH2n+1OH)
generateSeries("Alcool primaire", (n) => `C${n}H${2 * n + 2}O`, (n) => ({ "C": n, "H": 2 * n + 2, "O": 1 }), "Alcool", "Alcool linéaire", 250);

// 5. Acides carboxyliques (CnH2nO2)
generateSeries("Acide carboxylique linéaire", (n) => `C${n}H${2 * n}O₂`, (n) => ({ "C": n, "H": 2 * n, "O": 2 }), "Acide carboxylique", "Acide gras saturé", 250);

// 6. Amines primaires (CnH2n+1NH2)
generateSeries("Amine primaire linéaire", (n) => `C${n}H${2 * n + 3}N`, (n) => ({ "C": n, "H": 2 * n + 3, "N": 1 }), "Amine", "Amine aliphatique", 250);

// 7. Aldéhydes (CnH2nO)
generateSeries("Aldéhyde linéaire", (n) => `C${n}H${2 * n}O`, (n) => ({ "C": n, "H": 2 * n, "O": 1 }), "Aldéhyde", "Aldéhyde aliphatique", 250);

// 8. Nitriles (CnH2n-1N)
generateSeries("Nitrile linéaire", (n) => `C${n}H${2 * n - 1}N`, (n) => ({ "C": n, "H": 2 * n - 1, "N": 1 }), "Nitrile", "Composé cyano", 250);

// 9. Thiols (CnH2n+1SH)
generateSeries("Alcanethiol linéaire", (n) => `C${n}H${2 * n + 2}S`, (n) => ({ "C": n, "H": 2 * n + 2, "S": 1 }), "Thiol", "Composé soufré", 250);

// 10. Perfluoroalkanes (CnF2n+2)
generateSeries("Perfluoroalkane", (n) => `C${n}F${2 * n + 2}`, (n) => ({ "C": n, "F": 2 * n + 2 }), "Fluorocarbure", "Hydrocarbure totalement fluoré", 250);

export const molecules_systematiques_massives: MoleculeDefinition[] = families;
