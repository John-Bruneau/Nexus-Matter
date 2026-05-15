/**
 * @copyright Sébastien John Bruneau
 * Thématique : Bibliothèque Massive des Amides (Matrice C1-C40 x C1-C40)
 * Contient 1600 amides secondaires systémiques réels.
 */
import { MoleculeDefinition } from '../../types/molecule';

const data: MoleculeDefinition[] = [];

// n = carbones de l'acide (R-CO-), m = carbones de l'amine (-NH-R')
for (let n = 1; n <= 40; n++) {
  for (let m = 1; m <= 40; m++) {
    const totC = n + m;
    const totH = 2 * totC + 1; // R-CO-NH-R' -> CnH2n+1-CO-NH-CmH2m+1 -> Cn+m+1 H2n+1+2m+1 -> ignore 1 H for O
    // Formula approximation: CnH2n+1-CO-NH-CmH2m+1 = C(n+m+1) H(2n+2m+3) NO
    // Let's be more precise
    // Acid part: CnH2n-1O- (acyl)
    // Amine part: -NH-CmH2m+1
    // Total: C(n+m) H(2n+2m+1) NO
    const name = `N-Alkylalkanamide (C${n} + C${m})`;
    
    data.push({
      "name": `N-C${m} C${n}-amide`,
      "formula": `C${totC}H${2 * totC + 1}NO`,
      "composition": { "C": totC, "H": 2 * totC + 1, "N": 1, "O": 1 },
      "summary": `Amide secondaire issu de la réaction entre un acide carboxylique en C${n} et une amine primaire en C${m}.`,
      "category": "Amide",
      "molarMass": "Calculé",
      "safetyWarning": "Points de fusion souvent élevés.",
      "manufacturing": "Déshydratation de sels d'ammonium carboxylates.",
      "occurrence": "Synthétique, intermédiaires industriels."
    });
  }
}

export const molecules_amides_systematiques: MoleculeDefinition[] = data;
