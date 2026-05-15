/**
 * @copyright Sébastien John Bruneau
 * Thématique : Séries Systématiques Massives - Extension 4 (C251 - C450)
 * Alcanes, Alcènes, Alkynes, Alcools, Acides, Amines
 */
import { MoleculeDefinition } from '../../types/molecule';

const families: MoleculeDefinition[] = [];

const generateSeries = (namePrefix: string, formulaFunc: (n: number) => string, compFunc: (n: number) => any, cat: string, summary: string, start: number, end: number) => {
  for (let n = start; n <= end; n++) {
    families.push({
      "name": `${namePrefix} en C${n}`,
      "formula": formulaFunc(n),
      "composition": compFunc(n),
      "summary": `${summary} à ${n} carbones.`,
      "category": cat,
      "molarMass": "Calculé",
      "safetyWarning": "Généralement solide à température ambiante pour ces longueurs.",
      "manufacturing": "Synthèse par polymérisation ou fractionnement de cires.",
      "meltingPoint": "Elevé (> 50°C)",
      "boilingPoint": "Très élevé (> 300°C)",
      "occurrence": "Cires de pétrole, bitumes synthétiques."
    });
  }
};

// 1. Alcanes (CnH2n+2)
generateSeries("Alcane linéaire", (n) => `C${n}H${2 * n + 2}`, (n) => ({ "C": n, "H": 2 * n + 2 }), "Alcane", "Hydrocarbure saturé massif", 251, 450);

// 2. Alcènes (CnH2n)
generateSeries("Alc-1-ène", (n) => `C${n}H${2 * n}`, (n) => ({ "C": n, "H": 2 * n }), "Alcène", "Hydrocarbure insaturé massif", 251, 450);

// 3. Alkynes (CnH2n-2)
generateSeries("Alk-1-yne", (n) => `C${n}H${2 * n - 2}`, (n) => ({ "C": n, "H": 2 * n - 2 }), "Alkyne", "Hydrocarbure triple liaison massif", 251, 450);

// 4. Alcools primaires (CnH2n+1OH)
generateSeries("Alcool primaire", (n) => `C${n}H${2 * n + 2}O`, (n) => ({ "C": n, "H": 2 * n + 2, "O": 1 }), "Alcool", "Alcool linéaire massif", 251, 450);

// 5. Acides carboxyliques (CnH2nO2)
generateSeries("Acide carboxylique linéaire", (n) => `C${n}H${2 * n}O₂`, (n) => ({ "C": n, "H": 2 * n, "O": 2 }), "Acide carboxylique", "Acide gras massif", 251, 450);

// 6. Amines primaires (CnH2n+1NH2)
generateSeries("Amine primaire linéaire", (n) => `C${n}H${2 * n + 3}N`, (n) => ({ "C": n, "H": 2 * n + 3, "N": 1 }), "Amine", "Amine aliphatique massive", 251, 450);

export const molecules_systematiques_massives_4: MoleculeDefinition[] = families;
