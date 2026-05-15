/**
 * @copyright Sébastien John Bruneau
 * Bibliothèque de molécules - Section Consolidée : Pharmacopée & Médecine
 */
import { MoleculeDefinition } from '../../types/molecule';

export const PHARMA_DATA: MoleculeDefinition[] = [
  // --- Antibiotiques ---
  { "name": "Azithromycine (Zithromax)", "formula": "C38H72N2O12", "composition": { "C": 38, "H": 72, "N": 2, "O": 12 }, "summary": "Macrolide utilisé pour les angines et infections respiratoires.", "category": "Pharma / Macrolide", "molarMass": "749 g/mol", "manufacturing": "Hémisynthèse.", "meltingPoint": "114 °C", "occurrence": "Synthétique." },
  { "name": "Clarithromycine", "formula": "C38H69NO13", "composition": { "C": 38, "H": 69, "N": 1, "O": 13 }, "summary": "Macrolide efficace contre Helicobacter pylori.", "category": "Pharma / Antibiotique", "molarMass": "747.9 g/mol", "manufacturing": "Synthèse.", "meltingPoint": "219 °C", "occurrence": "Synthétique." },
  { "name": "Érythromycine", "formula": "C37H67NO13", "composition": { "C": 37, "H": 67, "N": 1, "O": 13 }, "summary": "L’ancêtre des macrolides.", "category": "Pharma / Macrolide", "molarMass": "733.9 g/mol", "manufacturing": "Fermentation de Saccharopolyspora erythraea.", "meltingPoint": "135 °C", "occurrence": "Naturel." },
  { "name": "Doxycycline", "formula": "C22H24N2O8", "composition": { "C": 22, "H": 24, "N": 2, "O": 8 }, "summary": "Tétracycline pour l'acné, la maladie de Lyme et le paludisme.", "category": "Pharma / Tétracycline", "molarMass": "444.4 g/mol", "safetyWarning": "Photosensibilisation.", "manufacturing": "Hémisynthèse.", "meltingPoint": "201 °C", "occurrence": "Synthétique." },
  { "name": "Lévofloxacine", "formula": "C18H20FN3O4", "composition": { "C": 18, "H": 20, "F": 1, "N": 3, "O": 4 }, "summary": "Fluoroquinolone respiratoire puissante.", "category": "Pharma / Quinolone", "molarMass": "361.4 g/mol", "safetyWarning": "Risque de tendinite.", "manufacturing": "Synthèse chirale.", "meltingPoint": "226 °C", "occurrence": "Synthétique." },
  { "name": "Métronidazole", "formula": "C6H9N3O3", "composition": { "C": 6, "H": 9, "N": 3, "O": 3 }, "summary": "Antibiotique et antiparasitaire pour les infections anaérobies.", "category": "Pharma / Nitroimidazole", "molarMass": "171.2 g/mol", "safetyWarning": "Effet antabuse avec l'alcool.", "manufacturing": "Synthèse.", "meltingPoint": "159 °C", "occurrence": "Synthétique." },

  // --- Oncologie ---
  { "name": "Paclitaxel (Taxol)", "formula": "C47H51NO14", "composition": { "C": 47, "H": 51, "N": 1, "O": 14 }, "summary": "Anticancéreux majeur découvert dans l'écorce de l'if.", "category": "Pharma / Oncologie", "molarMass": "853.9 g/mol", "safetyWarning": "Hautement toxique.", "manufacturing": "Hémisynthèse.", "meltingPoint": "213 °C", "occurrence": "If." },
  { "name": "Imatinib (Glivec)", "formula": "C29H31N7O", "composition": { "C": 29, "H": 31, "N": 7, "O": 1 }, "summary": "Thérapie ciblée pour la Leucémie Myéloïde Chronique.", "category": "Pharma / Oncologie", "molarMass": "493.6 g/mol", "manufacturing": "Synthèse Novartis.", "meltingPoint": "211 °C", "occurrence": "Synthétique." },
  { "name": "Tamoxifène", "formula": "C26H29NO", "composition": { "C": 26, "H": 29, "N": 1, "O": 1 }, "summary": "Hormonothérapie pour prévenir la récidive du cancer du sein.", "category": "Pharma / Antioestrogène", "molarMass": "371.5 g/mol", "manufacturing": "Synthèse.", "meltingPoint": "97 °C", "occurrence": "Synthétique." },

  // --- Cardiovasculaire ---
  { "name": "Atorvastatine", "formula": "C33H35FN2O5", "composition": { "C": 33, "H": 35, "F": 1, "N": 2, "O": 5 }, "summary": "Statine la plus vendue pour réduire le cholestérol.", "category": "Pharma / Cardiovasculaire", "molarMass": "558.6 g/mol", "manufacturing": "Synthèse totale.", "occurrence": "Synthétique." },
  { "name": "Ramipril", "formula": "C23H32N2O5", "composition": { "C": 23, "H": 32, "N": 2, "O": 5 }, "summary": "Inhibiteur de l'enzyme de conversion de l'angiotensine (IEC).", "category": "Pharma / Cardiovasculaire", "molarMass": "416.5 g/mol", "manufacturing": "Synthèse.", "occurrence": "Synthétique." },
  { "name": "Amlodipine", "formula": "C20H25ClN2O5", "composition": { "C": 20, "H": 25, "Cl": 1, "N": 2, "O": 5 }, "summary": "Antagoniste calcique utilisé pour traiter l'hypertension.", "category": "Pharma / Cardiovasculaire", "molarMass": "408.9 g/mol", "manufacturing": "Synthèse.", "occurrence": "Synthétique." },

  // --- Psychotropes ---
  { "name": "Sertraline (Zoloft)", "formula": "C17H17Cl2N", "composition": { "C": 17, "H": 17, "Cl": 2, "N": 1 }, "summary": "Inhibiteur sélectif de la recapture de la sérotonine (ISRS).", "category": "Pharma / Psychotrope", "molarMass": "306.2 g/mol", "manufacturing": "Synthèse.", "occurrence": "Synthétique." },
  { "name": "Diazépam (Valium)", "formula": "C16H13ClN2O", "composition": { "C": 16, "H": 13, "Cl": 1, "N": 2, "O": 1 }, "summary": "Benzodiazépine pour l'anxiété et les spasmes musculaires.", "category": "Pharma / Benzodiazépine", "molarMass": "284.7 g/mol", "manufacturing": "Synthèse.", "occurrence": "Synthétique." },
  { "name": "Quétiapine", "formula": "C21H25N3O2S", "composition": { "C": 21, "H": 25, "N": 3, "O": 2, "S": 1 }, "summary": "Antipsychotique atypique.", "category": "Pharma / Psychotrope", "molarMass": "383.5 g/mol", "manufacturing": "Synthèse.", "occurrence": "Synthétique." },

  // --- Douleur & Inflammation ---
  { "name": "Ibuprofène", "formula": "C13H18O2", "composition": { "C": 13, "H": 18, "O": 2 }, "summary": "Anti-inflammatoire non stéroïdien (AINS) très courant.", "category": "Pharma / Analgésique", "molarMass": "206.3 g/mol", "manufacturing": "Procédé Boots.", "meltingPoint": "76 °C", "occurrence": "Synthétique." },
  { "name": "Paracétamol", "formula": "C8H9NO2", "composition": { "C": 8, "H": 9, "N": 1, "O": 2 }, "summary": "L'analgésique le plus utilisé, sûr si les doses sont respectées.", "category": "Pharma / Analgésique", "molarMass": "151.2 g/mol", "safetyWarning": "Hépatoxique en cas de surdosage.", "manufacturing": "Synthèse à partir du phénol.", "meltingPoint": "169 °C", "occurrence": "Synthétique." },
  { "name": "Codéine", "formula": "C18H21NO3", "composition": { "C": 18, "H": 21, "N": 1, "O": 3 }, "summary": "Alcaloïde de l'opium utilisé comme antitussif et analgésique.", "category": "Pharma / Opioïde", "molarMass": "299.4 g/mol", "manufacturing": "Extraction ou hémisynthèse.", "occurrence": "Naturel (Pavot)." },

  // --- Gastro-entérologie ---
  { "name": "Oméprazole", "formula": "C17H19N3O3S", "composition": { "C": 17, "H": 19, "N": 3, "O": 3, "S": 1 }, "summary": "Inhibiteur de la pompe à protons pour l'acidité gastrique.", "category": "Pharma / Gastro", "molarMass": "345.4 g/mol", "manufacturing": "Synthèse.", "occurrence": "Synthétique." },
  { "name": "Lopéramide (Imodium)", "formula": "C29H33ClN2O2", "composition": { "C": 29, "H": 33, "Cl": 1, "N": 2, "O": 2 }, "summary": "Antidiarrhéique ralentisseur du transit.", "category": "Pharma / Gastro", "molarMass": "477.0 g/mol", "manufacturing": "Synthèse Janssen.", "occurrence": "Synthétique." }
];
