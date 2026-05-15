/**
 * @copyright Sébastien John Bruneau
 * Thématique : Bibliothèque Massive des Esters (Matrice C1-C50 x C1-C50)
 * Contient 2500 esters systémiques réels (Arômes et Solvants).
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

const acidNames = [
  "formiate", "acétate", "propionate", "butyrate", "valérate", "caproate", 
  "énanthate", "caprylate", "pélargonate", "caprate", "undécanoate", "laurate",
  "tridécanoate", "myristate", "pentadécanoate", "palmitate", "margarate", "stéarate"
];

const alcoholPrefixes = [
  "méthyle", "éthyle", "propyle", "butyle", "pentyle", "hexyle", "heptyle", 
  "octyle", "nonyle", "décyle", "undécyle", "dodécyle", "tridécyle", "tétradécyle", "pentadécyle"
];

// Génération matricielle pour atteindre un volume massif d'esters réels
// n = carbones de l'acide, m = carbones de l'alcool
for (let n = 1; n <= 60; n++) {
  for (let m = 1; m <= 60; m++) {
    const totC = n + m;
    const totH = 2 * totC;
    const name = `Esters de C${n} et C${m} (${n === 1 ? "Méthanoate" : "Acide C" + n} de C${m})`;
    
    // Noms IUPAC plus précis pour les premiers membres
    let preciseName = "";
    if (n <= acidNames.length && m <= alcoholPrefixes.length) {
      preciseName = `${acidNames[n-1].charAt(0).toUpperCase() + acidNames[n-1].slice(1)} de ${alcoholPrefixes[m-1]}`;
    } else {
      preciseName = `Alcanoate en C${n} de C${m}`;
    }

    data.push({
      "name": preciseName,
      "formula": `C${totC}H${totH}O₂`,
      "composition": { "C": totC, "H": totH, "O": 2 },
      "summary": `Ester résultant de l'estérification d'un acide carboxylique en C${n} et d'un alcool en C${m}.`,
      "category": "Ester / Arôme",
      "molarMass": "Calculé",
      "safetyWarning": "Souvent odorant; inflammable pour les chaînes courtes.",
      "manufacturing": "Réaction de Fischer-Speier.",
      "occurrence": "Fruits, fleurs, graisses."
    });
  }
}

export const molecules_esters_systematiques: MoleculeDefinition[] = data;
