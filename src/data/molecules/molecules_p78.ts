/**
 * @copyright Sébastien John Bruneau
 * Part 78 of the molecule library - Everyday compounds, flavors and vitamins.
 */
import { MoleculeDefinition } from '../../types/molecule';

export const MOLECULES_P78: MoleculeDefinition[] = [
  {
    "name": "Vitamine C (Acide ascorbique)",
    "formula": "C₆H₈O₆",
    "composition": { "C": 6, "H": 8, "O": 6 },
    "summary": "Vitamine hydrosoluble essentielle à la biosynthèse du collagène.",
    "category": "Vitamine",
    "molarMass": "176.12 g/mol",
    "safetyWarning": "Sûre à doses nutritionnelles; peut causer des calculs rénaux à doses massives.",
    "manufacturing": "Procédé Reichstein (synthèse chimique à partir du glucose).",
    "meltingPoint": "190-192 °C",
    "boilingPoint": "Décomposition",
    "occurrence": "Agrumes, poivrons rouges, kiwis."
  },
  {
    "name": "Vitamine E (Alpha-tocophérol)",
    "formula": "C₂₉H₅₀O₂",
    "composition": { "C": 29, "H": 50, "O": 2 },
    "summary": "Antioxydant lipophile protégeant les membranes cellulaires.",
    "category": "Vitamine / Antioxydant",
    "molarMass": "430.71 g/mol",
    "safetyWarning": "Éviter les surdosages avec des anticoagulants.",
    "manufacturing": "Synthèse chimique ou extraction d'huiles végétales.",
    "meltingPoint": "2.5-3.5 °C",
    "boilingPoint": "235 °C (sous vide)",
    "occurrence": "Huiles végétales, noix, graines."
  },
  {
    "name": "Vanilline",
    "formula": "C₈H₈O₃",
    "composition": { "C": 8, "H": 8, "O": 3 },
    "summary": "Composé principal de l'arôme de vanille.",
    "category": "Aldéhyde aromatique / Arôme",
    "molarMass": "152.15 g/mol",
    "safetyWarning": "Généralement reconnue comme sûre (GRAS).",
    "manufacturing": "Biosynthèse à partir de l'eugénol ou synthèse à partir du gaïacol.",
    "meltingPoint": "81-83 °C",
    "boilingPoint": "285 °C",
    "occurrence": "Gousses de vanille."
  },
  {
    "name": "Eugénol",
    "formula": "C₁₀H₁₂O₂",
    "composition": { "C": 10, "H": 12, "O": 2 },
    "summary": "Principal constituant de l'huile essentielle de clou de girofle.",
    "category": "Phénylpropanoïde / Arôme",
    "molarMass": "164.20 g/mol",
    "safetyWarning": "Hautement toxique si ingéré pur; irritant cutané.",
    "manufacturing": "Distillation par entraînement à la vapeur des clous de girofle.",
    "meltingPoint": "-9 °C",
    "boilingPoint": "254 °C",
    "occurrence": "Clous de girofle, cannelle, basilic."
  },
  {
    "name": "Acide Citrique",
    "formula": "C₆H₈O₇",
    "composition": { "C": 6, "H": 8, "O": 7 },
    "summary": "Acide organique tricarboxylique présent dans les agrumes.",
    "category": "Acide organique",
    "molarMass": "192.12 g/mol",
    "safetyWarning": "Irritant pour les yeux à concentration élevée.",
    "manufacturing": "Fermentation fongique (Aspergillus niger).",
    "meltingPoint": "153 °C",
    "boilingPoint": "Décomposition",
    "occurrence": "Citrons, oranges, limettes."
  },
  {
    "name": "L-Glutamate de Sodium (MSG)",
    "formula": "C₅H₈NO₄Na",
    "composition": { "C": 5, "H": 8, "N": 1, "O": 4, "Na": 1 },
    "summary": "Sel de sodium de l'acide glutamique utilisé comme exhausteur de goût (Umami).",
    "category": "Additif alimentaire / Acide aminé",
    "molarMass": "169.11 g/mol",
    "safetyWarning": "Controverse historique (Syndrome du restaurant chinois) non prouvée scientifiquement.",
    "manufacturing": "Fermentation bactérienne.",
    "meltingPoint": "225 °C",
    "boilingPoint": "Décomposition",
    "occurrence": "Tomates mûres, fromages vieillis, algues."
  }
];
