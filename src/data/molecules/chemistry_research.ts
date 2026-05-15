/**
 * @copyright Sébastien John Bruneau
 * Bibliothèque de molécules - Section Consolidée : Recherche & Réactifs de Laboratoire
 */
import { MoleculeDefinition } from '../../types/molecule';

export const RESEARCH_DATA: MoleculeDefinition[] = [
  { "name": "Luminol", "formula": "C8H7N3O2", "composition": { "C": 8, "H": 7, "N": 3, "O": 2 }, "summary": "Substance chimiluminescente utilisée en police scientifique pour détecter le sang.", "category": "Recherche / Luminophore", "molarMass": "177.2 g/mol", "occurrence": "Synthétique." },
  { "name": "Fluorescéine", "formula": "C20H12O5", "composition": { "C": 20, "H": 12, "O": 5 }, "summary": "Traceur fluorescent utilisé en ophtalmologie et hydrologie.", "category": "Recherche / Fluorescent", "molarMass": "332.3 g/mol", "occurrence": "Synthétique." },
  { "name": "Tétroxyde d'osmium", "formula": "OsO4", "composition": { "Os": 1, "O": 4 }, "summary": "Réactif puissant en microscopie électronique et en synthèse organique.", "category": "Réactif / Métal lourd", "molarMass": "254.2 g/mol", "safetyWarning": "Extrêmement toxique (vapeurs destructrices pour les yeux).", "boilingPoint": "130 °C" },
  { "name": "Réactif de Grignard (Chlorure de méthylmagnésium)", "formula": "CH3MgCl", "composition": { "C": 1, "H": 3, "Mg": 1, "Cl": 1 }, "summary": "Outil fondamental pour la création de liaisons Carbone-Carbone.", "category": "Réactif / Organométallique", "molarMass": "74.8 g/mol", "safetyWarning": "Sensible à l'air et à l'humidité.", "occurrence": "Synthétique." },
  { "name": "Ninhydrine", "formula": "C9H6O4", "composition": { "C": 9, "H": 6, "O": 4 }, "summary": "Détecteur d'acides aminés (pour les empreintes digitales).", "category": "Réactif / Analyse", "molarMass": "178.1 g/mol", "occurrence": "Synthétique." }
];
