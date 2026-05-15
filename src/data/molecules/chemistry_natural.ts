/**
 * @copyright Sébastien John Bruneau
 * Bibliothèque de molécules - Section Consolidée : Chimie Naturelle & Bio
 */
import { MoleculeDefinition } from '../../types/molecule';

export const NATURAL_DATA: MoleculeDefinition[] = [
  // --- Biochimie & Vie ---
  { "name": "Adénosine triphosphate (ATP)", "formula": "C10H16N5O13P3", "composition": { "C": 10, "H": 16, "N": 5, "O": 13, "P": 3 }, "summary": "La 'devise énergétique' de la cellule.", "category": "Biochimie / Nucleotide", "molarMass": "507.2 g/mol", "occurrence": "Toute cellule vivante." },
  { "name": "Chlorophylle a", "formula": "C55H72MgN4O5", "composition": { "C": 55, "H": 72, "Mg": 1, "N": 4, "O": 5 }, "summary": "Pigment vert essentiel à la photosynthèse.", "category": "Biochimie / Pigment", "molarMass": "893.5 g/mol", "occurrence": "Végétaux, algues." },
  { "name": "Hémoglobine (Hème B)", "formula": "C34H32FeN4O4", "composition": { "C": 34, "H": 32, "Fe": 1, "N": 4, "O": 4 }, "summary": "Partie non protéique de l'hémoglobine transportant l'oxygène.", "category": "Biochimie / Métalloporphyrine", "molarMass": "616.5 g/mol", "occurrence": "Sang (Vertébrés)." },
  { "name": "Glucose", "formula": "C6H12O6", "composition": { "C": 6, "H": 12, "O": 6 }, "summary": "Principal sucre source d'énergie pour l'organisme.", "category": "Sucre / Monosaccharide", "molarMass": "180.2 g/mol", "meltingPoint": "146 °C", "occurrence": "Miel, fruits." },

  // --- Fragrances & Parfumerie ---
  { "name": "Linalol", "formula": "C10H18O", "composition": { "C": 10, "H": 18, "O": 1 }, "summary": "Alcool terpénique à l'odeur florale et fraîche (lavande).", "category": "Fragrance / Terpène", "molarMass": "154.2 g/mol", "occurrence": "Lavande, Menthe." },
  { "name": "Limonène", "formula": "C10H16", "composition": { "C": 10, "H": 16 }, "summary": "Terpène à l'odeur d'agrume caractéristique.", "category": "Fragrance / Terpène", "molarMass": "136.2 g/mol", "occurrence": "Citron, Orange." },
  { "name": "Muscone", "formula": "C16H30O", "composition": { "C": 16, "H": 30, "O": 1 }, "summary": "Phéromone à l'odeur musquée puissante.", "category": "Fragrance / Musc", "molarMass": "238.4 g/mol", "occurrence": "Musc naturel ou synthèse." },
  { "name": "Géraniol", "formula": "C10H18O", "composition": { "C": 10, "H": 18, "O": 1 }, "summary": "Composant principal de l'huile de rose et de palmarosa.", "category": "Fragrance / Alcool", "molarMass": "154.2 g/mol", "occurrence": "Rose, Géranium." },

  // --- Additifs Alimentaires (E-Numbers) ---
  { "name": "Curcumine (E100)", "formula": "C21H20O6", "composition": { "C": 21, "H": 20, "O": 6 }, "summary": "Colorant jaune naturel issu du curcuma.", "category": "Additif / Colorant", "molarMass": "368.4 g/mol", "occurrence": "Curcuma." },
  { "name": "Lycopène (E160d)", "formula": "C40H56", "composition": { "C": 40, "H": 56 }, "summary": "Caroténoïde rouge puissant antioxydant.", "category": "Additif / Pigment", "molarMass": "536.9 g/mol", "occurrence": "Tomate, Pastèque." },
  { "name": "Acide Citrique (E330)", "formula": "C6H8O7", "composition": { "C": 6, "H": 8, "O": 7 }, "summary": "Acidifiant naturel omniprésent dans les agrumes.", "category": "Additif / Acidifiant", "molarMass": "192.1 g/mol", "occurrence": "Citron, Orange." }
];
