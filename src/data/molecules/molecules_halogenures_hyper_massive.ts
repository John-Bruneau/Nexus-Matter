/**
 * @copyright Sébastien John Bruneau
 * Thématique : Matrice Hyper-Massive des Halogénures d'alkyles (Cl, Br, I)
 * Contient ~15 000 isomères de position systématiques.
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

const halos = [
  { sym: "Cl", name: "Chloro", mass: 35.45 },
  { sym: "Br", name: "Bromo", mass: 79.90 },
  { sym: "I", name: "Iodo", mass: 126.90 }
];

// Pour chaque longueur de chaîne n (1 à 100)
// On génère tous les isomères de position m (1 à n)
for (const h of halos) {
  for (let n = 1; n <= 100; n++) {
    for (let m = 1; m <= n; m++) {
      data.push({
        "name": `${m}-${h.name}alcane C${n}`,
        "formula": `C${n}H${2 * n + 1}${h.sym}`,
        "composition": { "C": n, "H": 2 * n + 1, [h.sym]: 1 },
        "summary": `Halogénure d'alkyle avec l'atome de ${h.name} en position ${m}.`,
        "category": "Halogénure d'alkyle",
        "molarMass": "Calculé",
        "safetyWarning": "Souvent toxique et dommageable pour la couche d'ozone (pour les chaînes courtes).",
        "manufacturing": "Halogénation radicalaire d'alcanes.",
        "occurrence": "Principalement synthétique."
      });
    }
  }
}

export const molecules_halogenures_hyper_massive: MoleculeDefinition[] = data;
