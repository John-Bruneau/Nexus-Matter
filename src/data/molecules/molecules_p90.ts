import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série P90
 * Focus: Agrochimie, Pesticides et Herbicides.
 * Copyright Sébastien John Bruneau
 */
export const MOLECULES_P90: MoleculeDefinition[] = [
  { "name": "Glyphosate", "formula": "C₃H₈NO₅P", "composition": { "C": 3, "H": 8, "N": 1, "O": 5, "P": 1 }, "molarMass": "169.07 g/mol", "category": "Herbicide systémique", "summary": "L'herbicide le plus utilisé au monde, inhibe l'enzyme EPSPS.", "occurrence": "Synthétique", "applications": ["Agriculture"] },
  { "name": "Atrazine", "formula": "C₈H₁₄ClN₅", "composition": { "C": 8, "H": 14, "Cl": 1, "N": 5 }, "molarMass": "215.68 g/mol", "category": "Triazine", "summary": "Herbicide utilisé pour le maïs, perturbateur endocrinien connu chez les amphibiens.", "occurrence": "Synthétique", "applications": ["Désherbage"] },
  { "name": "Malathion", "formula": "C₁₀H₁₉O₆PS₂", "composition": { "C": 10, "H": 19, "O": 6, "P": 1, "S": 2 }, "molarMass": "330.36 g/mol", "category": "Organophosphoré", "summary": "Insecticide agissant par inhibition de l'acétylcholinestérase.", "occurrence": "Synthétique", "applications": ["Lutte antivectorielle"] },
  { "name": "Néonicotinoïde (Imidaclopride)", "formula": "C₉H₁₀ClN₅O₂", "composition": { "C": 9, "H": 10, "Cl": 1, "N": 5, "O": 2 }, "molarMass": "255.66 g/mol", "category": "Insecticide", "summary": "Agoniste des récepteurs nicotiniques, très controversé car toxique pour les abeilles.", "occurrence": "Synthétique", "applications": ["Protection des cultures"] },
  { "name": "Paraquat", "formula": "C₁₂H₁₄Cl₂N₂", "composition": { "C": 12, "H": 14, "Cl": 2, "N": 2 }, "molarMass": "257.16 g/mol", "category": "Dipyridylium", "summary": "Herbicide de contact extrêmement toxique pour l'homme en cas d'ingestion.", "occurrence": "Synthétique", "applications": ["Agriculture intensive"] },
  { "name": "DDT", "formula": "C₁₄H₉Cl₅", "composition": { "C": 14, "H": 9, "Cl": 5 }, "molarMass": "354.49 g/mol", "category": "Organochloré", "summary": "Insecticide historique persistant, banni dans la plupart des pays à cause de son impact écologique.", "occurrence": "Synthétique", "applications": ["Lutte contre le paludisme (historique)"] },
  { "name": "Lindane", "formula": "C₆H₆Cl₆", "composition": { "C": 6, "H": 6, "Cl": 6 }, "molarMass": "290.83 g/mol", "category": "Isomère gamma de l'HCH", "summary": "Utilisé autrefois comme insecticide et traitement contre les poux.", "occurrence": "Synthétique", "applications": ["Santé publique (limité)"] }
];
