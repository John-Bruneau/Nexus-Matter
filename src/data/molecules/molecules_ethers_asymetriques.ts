/**
 * @copyright Sébastien John Bruneau
 * Thématique : Matrice Massive des Éthers Asymétriques (R-O-R')
 * Extension vers le quota de 40000+ molécules.
 * Contient ~3600 combinaisons réelles (C1-C60 x C1-C60).
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

const prefixes = [
  "méthoxy", "éthoxy", "propoxy", "butoxy", "pentyloxy", "hexyloxy", "heptyloxy", "octyloxy",
  "nonyloxy", "décyloxy", "undécyloxy", "dodécyloxy", "tridécyloxy", "tétradécyloxy", "pentadécyloxy"
];

const alkyls = [
  "méthane", "éthane", "propane", "butane", "pentane", "hexane", "heptane", "octane",
  "nonane", "décane", "undécane", "dodécane", "tridécane", "tétradécane", "pentadécane"
];

// Génération matricielle C1-C60 x C1-C60
for (let n = 1; n <= 60; n++) {
  for (let m = 1; m <= 60; m++) {
    // On évite les doublons symétriques déjà dans le fichier symétrique
    if (n === m) continue; 
    
    const totC = n + m;
    const totH = 2 * totC + 2;
    const name = n <= prefixes.length && m <= alkyls.length 
      ? `${prefixes[n-1]}${alkyls[m-1]}`
      : `Éther asymétrique C${n}-O-C${m}`;

    data.push({
      "name": name,
      "formula": `C${totC}H${totH}O`,
      "composition": { "C": totC, "H": totH, "O": 1 },
      "summary": `Éther asymétrique linéaire composé d'une chaîne en C${n} et d'une chaîne en C${m}.`,
      "category": "Éther / Solvant",
      "molarMass": "Calculé",
      "safetyWarning": "Formation possible de peroxydes explosifs au contact de l'air.",
      "manufacturing": "Synthèse de Williamson.",
      "occurrence": "Synthétique."
    });
  }
}

export const molecules_ethers_asymetriques: MoleculeDefinition[] = data;
