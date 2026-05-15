import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série P99
 * Focus: Agents de Guerre Chimique et Gaz Industriels à Haut Risque.
 * Copyright Sébastien John Bruneau
 */
export const MOLECULES_P99: MoleculeDefinition[] = [
  { "name": "Gaz Moutarde (Yperite)", "formula": "C₄H₈Cl₂S", "composition": { "C": 4, "H": 8, "Cl": 2, "S": 1 }, "molarMass": "159.08 g/mol", "category": "Vésicant", "summary": "Agent chimique provoquant de graves brûlures et des cloques sur la peau et les poumons.", "occurrence": "Synthétique", "applications": ["Interdit (Convention sur les armes chimiques)"] },
  { "name": "Sarin", "formula": "C₄H₁₀FO₂P", "composition": { "C": 4, "H": 10, "F": 1, "O": 2, "P": 1 }, "molarMass": "140.09 g/mol", "category": "Neurotoxique organophosphoré", "summary": "Agent innervant extrêmement létal par inhalation.", "occurrence": "Synthétique", "applications": ["Interdit"] },
  { "name": "VX", "formula": "C₁₁H₂₆NO₂PS", "composition": { "C": 11, "H": 26, "N": 1, "O": 2, "P": 1, "S": 1 }, "molarMass": "267.37 g/mol", "category": "Agent innervant persistant", "summary": "Une goutte sur la peau suffit à tuer un homme en quelques minutes.", "occurrence": "Synthétique", "applications": ["Interdit"] },
  { "name": "Soman", "formula": "C₇H₁₆FO₂P", "composition": { "C": 7, "H": 16, "F": 1, "O": 2, "P": 1 }, "molarMass": "182.18 g/mol", "category": "Agent neurotoxique", "summary": "Similaire au sarin mais plus résistant au traitement médical.", "occurrence": "Synthétique", "applications": ["Interdit"] },
  { "name": "Tabun", "formula": "C₅H₁₁N₂O₂P", "composition": { "C": 5, "H": 11, "N": 2, "O": 2, "P": 1 }, "molarMass": "162.13 g/mol", "category": "Agent innervant (G-series)", "summary": "Le premier agent innervant découvert, doté d'une odeur fruitée trompeuse.", "occurrence": "Synthétique", "applications": ["Interdit"] },
  { "name": "Phosgène", "formula": "COCl₂", "composition": { "C": 1, "O": 1, "Cl": 2 }, "molarMass": "98.92 g/mol", "category": "Gaz suffocant", "summary": "Utilisé pendant la WWI, aujourd'hui intermédiaire majeur en plasturgie.", "occurrence": "Synthétique", "applications": ["Production de polyuréthane"] },
  { "name": "Chloropicrine", "formula": "CCl₃NO₂", "composition": { "C": 1, "Cl": 3, "N": 1, "O": 2 }, "molarMass": "164.38 g/mol", "category": "Gaz lacrymogène / Fumigant", "summary": "Provoque des vomissements et des larmoiements intenses.", "occurrence": "Synthétique", "applications": ["Pesticide de sol", "Historique (WWI)"] },
  { "name": "Gaz CS", "formula": "C₁₀H₅ClN₂", "composition": { "C": 10, "H": 5, "Cl": 1, "N": 2 }, "molarMass": "188.61 g/mol", "category": "Agent anti-émeute", "summary": "Gaz lacrymogène standard utilisé par les forces de l'ordre.", "occurrence": "Synthétique", "applications": ["Maintien de l'ordre"] },
  { "name": "Gaz CN (Mace)", "formula": "C₈H₇ClO", "composition": { "C": 8, "H": 7, "Cl": 1, "O": 1 }, "molarMass": "154.59 g/mol", "category": "Lacrymogène", "summary": "Chloroacétophénone, moins puissant que le CS mais plus irritant pour la peau.", "occurrence": "Synthétique", "applications": ["Défense personnelle (Sprays)"] },
  { "name": "Novichok A-234", "formula": "C₅H₁₂N₂FO₂P", "composition": { "C": 5, "H": 12, "N": 2, "F": 1, "O": 2, "P": 1 }, "molarMass": "182.13 g/mol", "category": "Agent innervant de quatrième génération", "summary": "Agent extrêmement puissant conçu pour être difficile à détecter.", "occurrence": "Synthétique", "applications": ["Interdit"] }
];
