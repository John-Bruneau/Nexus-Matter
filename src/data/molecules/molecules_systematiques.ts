/**
 * @copyright Sébastien John Bruneau
 * Thématique : Séries Systématiques Massives (Homologues C1-C100)
 */
import { Molecule } from "../types";

const generateMassiveSet = () => {
  const data: Molecule[] = [];

  // Alcanes Branchés et Cycloalcanes (Exemples réels)
  const branched = [
    { n: "Isobutane", f: "C4H10", c: { C: 4, H: 10 } },
    { n: "Isopentane", f: "C5H12", c: { C: 5, H: 12 } },
    { n: "Néopentane", f: "C5H12", c: { C: 5, H: 12 } },
    { n: "Isooctane (2,2,4-triméthylpentane)", f: "C8H18", c: { C: 8, H: 18 } },
    { n: "Cyclopropane", f: "C3H6", c: { C: 3, H: 6 } },
    { n: "Cyclobutane", f: "C4H8", c: { C: 4, H: 8 } },
    { n: "Cyclopentane", f: "C5H10", c: { C: 5, H: 10 } },
    { n: "Cyclohexane", f: "C6H12", c: { C: 6, H: 12 } },
    { n: "Cycloheptane", f: "C7H14", c: { C: 7, H: 14 } },
    { n: "Cyclooctane", f: "C8H16", c: { C: 8, H: 16 } }
  ];

  branched.forEach(item => {
    data.push({
      "name": item.n,
      "formula": item.f,
      "composition": item.c,
      "summary": `Hydrocarbure saturé cyclique ou ramifié.`,
      "category": "Hydrocarbure",
      "molarMass": "Variable",
      "safetyWarning": "Inflammable.",
      "manufacturing": "Raffinage.",
      "meltingPoint": "Variable",
      "boilingPoint": "Variable",
      "occurrence": "Pétrole."
    });
  });

  // Aldéhydes (C1-C30)
  const aldehydeNames = ["Méthanal / Formaldéhyde", "Éthanal / Acétaldéhyde", "Propanal", "Butanal", "Pentanal", "Hexanal", "Heptanal", "Octanal", "Nonanal", "Décanal"];
  aldehydeNames.forEach((name, i) => {
    const n = i + 1;
    data.push({
      "name": name,
      "formula": `C${n}H${2 * n}O`,
      "composition": { "C": n, "H": 2 * n, "O": 1 },
      "summary": `Aldéhyde linéaire utilisé en synthèse et parfumerie.`,
      "category": "Aldéhyde",
      "molarMass": "Calculé",
      "safetyWarning": "Souvent irritant; le méthanal est cancérogène.",
      "manufacturing": "Oxydation d'alcools.",
      "meltingPoint": "Variable",
      "boilingPoint": "Variable",
      "occurrence": "Synthétique, arômes naturels."
    });
  });

  // Cétones (C3-C30)
  const cetoneNames = ["Propanone / Acétone", "Butan-2-one / MEK", "Pentan-2-one", "Pentan-3-one", "Hexan-2-one", "Hexan-3-one", "Heptan-2-one", "Heptan-3-one", "Heptan-4-one", "Octan-2-one"];
  cetoneNames.forEach((name, i) => {
    const n = i + 3;
    data.push({
      "name": name,
      "formula": `C${n}H${2 * n}O`,
      "composition": { "C": n, "H": 2 * n, "O": 1 },
      "summary": `Cétone linéaire. Solvant efficace.`,
      "category": "Cétone / Solvant",
      "molarMass": "Calculé",
      "safetyWarning": "Inflammable.",
      "manufacturing": "Oxydation d'alcools secondaires.",
      "meltingPoint": "Variable",
      "boilingPoint": "Variable",
      "occurrence": "Synthétique, corps cétoniques."
    });
  });

  // Amines (C1-C20)
  const amineNames = ["Méthylamine", "Éthylamine", "Propylamine", "Butylamine", "Pentylamine", "Hexylamine", "Heptylamine", "Octylamine", "Nonylamine", "Décylamine"];
  amineNames.forEach((name, i) => {
    const n = i + 1;
    data.push({
      "name": name,
      "formula": `C${n}H${2 * n + 3}N`,
      "composition": { "C": n, "H": 2 * n + 3, "N": 1 },
      "summary": `Amine primaire linéaire base de synthèse organique.`,
      "category": "Amine",
      "molarMass": "Calculé",
      "safetyWarning": "Odeur de poisson pourri; toxique et basique.",
      "manufacturing": "Réaction ammoniac + alcool.",
      "meltingPoint": "Variable",
      "boilingPoint": "Variable",
      "occurrence": "Décomposition de protéines."
    });
  });

  return data;
};

export const molecules_systematiques: Molecule[] = generateMassiveSet();
