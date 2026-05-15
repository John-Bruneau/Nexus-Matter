/**
 * @copyright Sébastien John Bruneau
 * Point d'entrée pour l'ajout massif et continu de molécules.
 */
/// <reference types="vite/client" />
import { MoleculeDefinition } from '../../types/molecule';

// Importation dynamique de toutes les partitions dans le sous-dossier
// Utilisation de eager: true pour un chargement synchrone au démarrage
const modules = import.meta.glob(['./*.ts', '!./index.ts'], { eager: true });

export { normalizeFormula } from './base';

export const ALL_DATA_MOLECULES: MoleculeDefinition[] = (() => {
  const allRaw = Object.values(modules).flatMap((mod: any) => {
    // Collecte tous les tableaux exportés (default ou nommés) dans chaque module
    const arrays = Object.values(mod).filter(v => Array.isArray(v)) as MoleculeDefinition[][];
    return arrays.flat();
  });

  // Déduplication intelligente : On autorise les isomères (même formule, nom différent)
  // On ne bloque que si le NOM est identique (doublon de nom)
  const seenNames = new Set<string>();
  
  return allRaw.filter((mol: MoleculeDefinition) => {
    if (!mol || !mol.name || !mol.formula) return false;
    
    const nameKey = mol.name.toLowerCase().trim();
    
    if (seenNames.has(nameKey)) return false;
    
    seenNames.add(nameKey);
    return true;
  });
})();
