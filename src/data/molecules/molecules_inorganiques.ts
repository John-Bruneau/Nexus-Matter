/**
 * @copyright Sébastien John Bruneau
 * Thématique : Chimie Inorganique - Sels, Oxydes, Acides, Bases et Complexes
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

// Métaux courants pour générer des sels
const metals = [
  { n: "Lithium", s: "Li", v: 1 }, { n: "Sodium", s: "Na", v: 1 }, { n: "Potassium", s: "K", v: 1 },
  { "n": "Magnésium", "s": "Mg", "v": 2 }, { "n": "Calcium", "s": "Ca", "v": 2 }, { "n": "Baryum", "s": "Ba", "v": 2 },
  { "n": "Aluminium", "s": "Al", "v": 3 }, { "n": "Fer", "s": "Fe", "v": [2, 3] }, { "n": "Cuivre", "s": "Cu", "v": [1, 2] },
  { "n": "Zinc", "s": "Zn", "v": 2 }, { "n": "Argent", "s": "Ag", "v": 1 }, { "n": "Plomb", "s": "Pb", "v": [2, 4] }
];

// Anions inorganiques
const anions = [
  { n: "Fluorure", s: "F", v: 1 }, { n: "Chlorure", s: "Cl", v: 1 }, { n: "Bromure", s: "Br", v: 1 }, { n: "Iodure", s: "I", v: 1 },
  { n: "Oxyde", s: "O", v: 2 }, { n: "Sulfure", s: "S", v: 2 }, { n: "Nitrure", s: "N", v: 3 }
];

metals.forEach(m => {
  const valencies = Array.isArray(m.v) ? m.v : [m.v];
  valencies.forEach(v => {
    anions.forEach(a => {
      // Simplification basique de la stoechiométrie pour la génération
      const f = `${m.s}${a.v > 1 ? a.v : ""}${a.s}${v > 1 ? v : ""}`;
      data.push({
        "name": `${a.n} de ${m.n}${Array.isArray(m.v) ? " (" + v + ")" : ""}`,
        "formula": f,
        "composition": { [m.s]: a.v, [a.s]: v },
        "summary": `Composé inorganique simple formé d'un métal et d'un non-métal.`,
        "category": "Inorganique / Sel",
        "molarMass": "Calculé",
        "occurrence": "Minéraux, roches."
      });
    });
  });
});

// Polyatomiques
const polyanions = [
  { n: "Sulfate", f: "SO₄", c: { S: 1, O: 4 }, v: 2 },
  { n: "Nitrate", f: "NO₃", c: { N: 1, O: 3 }, v: 1 },
  { n: "Carbonate", f: "CO₃", c: { C: 1, O: 3 }, v: 2 },
  { n: "Phosphate", f: "PO₄", c: { P: 1, O: 4 }, v: 3 },
  { n: "Hydroxyde", f: "OH", c: { O: 1, H: 1 }, v: 1 }
];

metals.forEach(m => {
  const valencies = Array.isArray(m.v) ? m.v : [m.v];
  valencies.forEach(v => {
    polyanions.forEach(pa => {
      const f = `${m.s}${pa.v > 1 ? pa.v : ""}(${pa.f})${v > 1 ? v : ""}`;
      data.push({
        "name": `${pa.n} de ${m.n}${Array.isArray(m.v) ? " (" + v + ")" : ""}`,
        "formula": f,
        "composition": { ...pa.c, [m.s]: pa.v },
        "summary": `Sel inorganique contenant un groupement polyatomique.`,
        "category": "Inorganique / Sel",
        "molarMass": "Calculé",
        "occurrence": "Naturel ou synthétique."
      });
    });
  });
});

// Ajout de molécules minérales spécifiques
const minerals = [
  { "name": "Quartz", "formula": "SiO₂", "composition": { "Si": 1, "O": 2 }, "summary": "Forme cristalline de la silice.", "category": "Minéral / Oxyde", "molarMass": "60.1 g/mol", "occurrence": "Écorce terrestre." },
  { "name": "Corindon", "formula": "Al₂O₃", "composition": { "Al": 2, "O": 3 }, "summary": "Oxyde d'aluminium cristallisé (Rubis, Saphir).", "category": "Minéral / Oxyde", "molarMass": "101.96 g/mol" },
  { "name": "Hématite", "formula": "Fe₂O₃", "composition": { "Fe": 2, "O": 3 }, "summary": "Principal minerai de fer.", "category": "Minéral / Oxyde", "molarMass": "159.7 g/mol" },
  { "name": "Magnétite", "formula": "Fe₃O₄", "composition": { "Fe": 3, "O": 4 }, "summary": "Oxyde de fer noir magnétique.", "category": "Minéral", "molarMass": "231.5 g/mol" },
  { "name": "Pyrite", "formula": "FeS₂", "composition": { "Fe": 1, "S": 2 }, "summary": "L'or des fous.", "category": "Minéral / Sulfure", "molarMass": "119.98 g/mol" },
  { "name": "Galène", "formula": "PbS", "composition": { "Pb": 1, "S": 1 }, "summary": "Minerai de plomb principal.", "category": "Minéral / Sulfure", "molarMass": "239.3 g/mol" },
  { "name": "Blende / Sphalérite", "formula": "ZnS", "composition": { "Zn": 1, "S": 1 }, "summary": "Minerai de zinc principal.", "category": "Minéral", "molarMass": "97.4 g/mol" }
];

minerals.forEach(min => data.push(min));

export const molecules_inorganiques: MoleculeDefinition[] = data;
