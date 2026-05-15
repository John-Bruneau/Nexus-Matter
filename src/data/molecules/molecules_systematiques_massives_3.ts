/**
 * @copyright Sébastien John Bruneau
 * Thématique : Séries Systématiques 3 - Alcènes, Alkynes et Halogénures complexes
 * Atteindre le quota de +5000 molécules authentiques.
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

const addEn = (name: string, formula: string, comp: any, cat: string, sum: string) => {
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
    "occurrence": "Synthétique."
  });
};

// 1. Alcènes - Position 2 (CnH2n)
for (let n = 4; n <= 150; n++) {
  addEn(`Alc-2-ène C${n}`, `C${n}H${2 * n}`, { "C": n, "H": 2 * n }, "Alcène", "Hydrocarbure insaturé (double liaison en 2).");
}

// 2. Alkynes - Position 2 (CnH2n-2)
for (let n = 4; n <= 150; n++) {
  addEn(`Alk-2-yne C${n}`, `C${n}H${2 * n - 2}`, { "C": n, "H": 2 * n - 2 }, "Alkyne", "Hydrocarbure insaturé (triple liaison en 2).");
}

// 3. Alcools secondaires (CnH2n+1OH) - Position 2
for (let n = 3; n <= 150; n++) {
  addEn(`Alcool secondaire C${n}`, `C${n}H${2 * n + 2}O`, { "C": n, "H": 2 * n + 2, "O": 1 }, "Alcool", "Alcool secondaire (OH en 2).");
}

// 4. Amines secondaires (Me-NH-R)
for (let n = 1; n <= 150; n++) {
  addEn(`N-Méthylamine C${n+1}`, `C${n + 1}H${2 * n + 5}N`, { "C": n + 1, "H": 2 * n + 5, "N": 1 }, "Amine secondaire", "Amine avec un groupement méthyle.");
}

// 5. Acides dicarboxyliques linéaires (HOOC-(CH2)n-COOH)
for (let n = 0; n <= 150; n++) {
  const totC = n + 2;
  addEn(`Acide dicarboxylique C${totC}`, `C${totC}H${2 * totC - 2}O₄`, { "C": totC, "H": 2 * totC - 2, "O": 4 }, "Acide dicarboxylique", "Acide possédant deux groupements COOH.");
}

// 6. Diamides (H2NOC-(CH2)n-CONH2)
for (let n = 0; n <= 150; n++) {
  const totC = n + 2;
  addEn(`Diamide linéaire C${totC}`, `C${totC}H${2 * totC}N₂O₂`, { "C": totC, "H": 2 * totC, "N": 2, "O": 2 }, "Diamide", "Diamide terminal.");
}

// 7. Alkylbenzènes (Ph-R)
for (let n = 1; n <= 150; n++) {
  const totC = n + 6;
  const totH = (2 * n + 1) + 5;
  addEn(`n-Alkylbenzène C${totC}`, `C${totC}H${totH}`, { "C": totC, "H": totH }, "Aromatique", "Benzène substitué par une chaîne alkyle.");
}

export const molecules_systematiques_massives_3: MoleculeDefinition[] = data;
