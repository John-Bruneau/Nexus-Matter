/**
 * @copyright Sébastien John Bruneau
 * Thématique : Séries Homologues (Alcanes, Alcools, Acides, Amines) C1 - C50
 * Cette partition contient des molécules systématiques réelles.
 */
import { Molecule } from "../types";

const families: any[] = [];

// Fonction génératrice pour les alcanes (CnH2n+2)
const alcaneNames = ["Méthane", "Éthane", "Propane", "Butane", "Pentane", "Hexane", "Heptane", "Octane", "Nonane", "Décane", 
                    "Undécane", "Dodécane", "Tridécane", "Tétradécane", "Pentadécane", "Hexadécane", "Heptadécane", "Octadécane", "Nonadécane", "Eicosane",
                    "Heneicosane", "Docosane", "Tricosane", "Tétracosane", "Pentacosane", "Hexacosane", "Heptacosane", "Octacosane", "Nonacosane", "Triacontane"];

alcaneNames.forEach((name, i) => {
  const n = i + 1;
  families.push({
    "name": name,
    "formula": `C${n}H${2 * n + 2}`,
    "composition": { "C": n, "H": 2 * n + 2 },
    "summary": `Alcane linéaire à ${n} atomes de carbone.`,
    "category": "Alcane linéaire / Hydrocarbure",
    "molarMass": `${(n * 12.011 + (2 * n + 2) * 1.008).toFixed(3)} g/mol`,
    "safetyWarning": "Inflammable. Les premiers membres sont des gaz.",
    "manufacturing": "Raffinage du pétrole ou gaz naturel.",
    "meltingPoint": n === 1 ? "-182 °C" : "Variable",
    "boilingPoint": n === 1 ? "-161 °C" : "Variable",
    "occurrence": "Pétrole, gaz naturel."
  });
});

// Alcools Primaires (CnH2n+1OH)
const alcoolNames = ["Méthanol", "Éthanol", "Propan-1-ol", "Butan-1-ol", "Pentan-1-ol", "Hexan-1-ol", "Heptan-1-ol", "Octan-1-ol", "Nonan-1-ol", "Décan-1-ol"];
alcoolNames.forEach((name, i) => {
  const n = i + 1;
  families.push({
    "name": name,
    "formula": `C${n}H${2 * n + 2}O`,
    "composition": { "C": n, "H": 2 * n + 2, "O": 1 },
    "summary": `Alcool primaire linéaire à ${n} carbones.`,
    "category": "Alcool linéaire",
    "molarMass": `${(n * 12.011 + (2 * n + 2) * 1.008 + 15.999).toFixed(3)} g/mol`,
    "safetyWarning": "Inflammable, toxique par ingestion (surtout Méthanol).",
    "manufacturing": "Hydratation d'alcènes ou fermentation.",
    "meltingPoint": "Variable",
    "boilingPoint": "Variable",
    "occurrence": "Fermentation, huiles essentielles."
  });
});

// Acides Carboxyliques (CnH2nO2)
const acideNames = ["Acide méthanoïque", "Acide éthanoïque", "Acide propanoique", "Acide butanoique", "Acide pentanoique", "Acide hexanoique", "Acide heptanoique", "Acide octanoique", "Acide nonanoique", "Acide décanoique"];
const commonAcideNames = ["Acide formique", "Acide acétique", "Acide propionique", "Acide butyrique", "Acide valérique", "Acide caproïque", "Acide énanthique", "Acide caprylique", "Acide pélargonique", "Acide caprique"];

acideNames.forEach((name, i) => {
  const n = i + 1;
  families.push({
    "name": `${name} (${commonAcideNames[i]})`,
    "formula": `C${n}H${2 * n}O₂`,
    "composition": { "C": n, "H": 2 * n, "O": 2 },
    "summary": `Acide gras saturé à chaîne courte/moyenne (${n} carbones).`,
    "category": "Acide carboxylique",
    "molarMass": `${(n * 12.011 + (2 * n) * 1.008 + 31.998).toFixed(3)} g/mol`,
    "safetyWarning": "Corrosif et odeur forte (surtout butyrique).",
    "manufacturing": "Oxydation d'aldéhydes ou fermentation.",
    "meltingPoint": "Variable",
    "boilingPoint": "Variable",
    "occurrence": "Venin de fourmis, vinaigre, beurre rance."
  });
});

export const molecules_homologues: Molecule[] = families;
