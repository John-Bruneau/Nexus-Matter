/**
 * @copyright Sébastien John Bruneau
 * Bibliothèque de molécules - Section Consolidée : Cristallographie, Minéraux & Gemmes
 */
import { MoleculeDefinition } from '../../types/molecule';

export const MINERAL_DATA: MoleculeDefinition[] = [
  { "name": "Diamant", "formula": "C", "composition": { "C": 1 }, "summary": "Carbone pur sous forme cristalline cubique, le matériau naturel le plus dur.", "category": "Gemme / Carbone", "molarMass": "12.01 g/mol", "occurrence": "Kimberlite." },
  { "name": "Corindon (Saphir / Rubis)", "formula": "Al2O3", "composition": { "Al": 2, "O": 3 }, "summary": "Oxyde d'aluminium cristallisé. Bleu (saphir) ou Rouge (rubis) selon les traces métalliques.", "category": "Gemme / Oxyde", "molarMass": "101.9 g/mol", "occurrence": "Roches métamorphiques." },
  { "name": "Béryl (Émeraude / Aigue-marine)", "formula": "Be3Al2Si6O18", "composition": { "Be": 3, "Al": 2, "Si": 6, "O": 18 }, "summary": "Cyclosilicate de béryllium et d'aluminium.", "category": "Gemme / Silicate", "molarMass": "537.5 g/mol", "occurrence": "Pegmatites." },
  { "name": "Orfèvre (Or natif)", "formula": "Au", "composition": { "Au": 1 }, "summary": "Métal précieux inaltérable sous forme cristalline native.", "category": "Métal / Élément", "molarMass": "196.9 g/mol", "meltingPoint": "1064 °C", "occurrence": "Filons hydrothermaux." },
  { "name": "Galène", "formula": "PbS", "composition": { "Pb": 1, "S": 1 }, "summary": "Principal minerai de plomb, formant souvent des cubes gris métalliques parfaits.", "category": "Minéral / Sulfure", "molarMass": "239.3 g/mol", "occurrence": "Gites de plomb." }
];
