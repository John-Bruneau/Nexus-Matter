/**
 * Copyright Sébastien John Bruneau
 * Série 18 : Chimie de Coordination, Bio-polymères, Click Chemistry et Médicaments récents.
 */
import { MoleculeDefinition } from '../../types/molecule';

export const MOLECULES_P18: MoleculeDefinition[] = [
  {
    "name": "Catalyseur de Crabtree",
    "formula": "C₃₁H₅₀IrP",
    "composition": { "C": 31, "H": 50, "Ir": 1, "P": 1 },
    "molarMass": "645.92 g/mol",
    "category": "Catalyseur organométallique",
    "summary": "Catalyseur à l'iridium utilisé pour l'hydrogénation d'alcènes hautement encombrés.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique", "Hydrogénation"]
  },
  {
    "name": "Tris(benzyltriazolylméthyl)amine (TBTA)",
    "formula": "C₃₀H₃₀N₁₀",
    "composition": { "C": 30, "H": 30, "N": 10 },
    "molarMass": "530.64 g/mol",
    "category": "Ligand Click Chemistry",
    "summary": "Ligand stabilisant pour le cuivre(I) dans la réaction de cycloaddition azide-alcyne de Huisgen.",
    "occurrence": "Synthétique.",
    "applications": ["Bioconjugaison", "Chimie click"]
  },
  {
    "name": "Capivasertib",
    "formula": "C₂₁H₂₅ClN₆O",
    "composition": { "C": 21, "H": 25, "Cl": 1, "N": 6, "O": 1 },
    "molarMass": "412.92 g/mol",
    "category": "Inhibiteur d'AKT",
    "summary": "Médicament approuvé en 2023 pour le traitement de certains cancers du sein avancés.",
    "occurrence": "Synthétique.",
    "applications": ["Oncologie"]
  },
  {
    "name": "Eplontersen",
    "formula": "C₂₃₀H₂₉₉N₆₈O₁₂₁P₂₀S₂₀",
    "composition": { "C": 230, "H": 299, "N": 68, "O": 121, "P": 20, "S": 20 },
    "molarMass": "7130.00 g/mol (approx)",
    "category": "Oligonucléotide anti-sens",
    "summary": "Utilisé pour l'amylose héréditaire à transthyrétine médiée par la polyneuropathie.",
    "occurrence": "Synthétique.",
    "applications": ["Traitements génétiques"]
  },
  {
    "name": "Zilucoplan",
    "formula": "C₁₇₂H₂₇₈N₄₂O₅₁S₂",
    "composition": { "C": 172, "H": 278, "N": 42, "O": 51, "S": 2 },
    "molarMass": "3562.00 g/mol (approx)",
    "category": "Inhibiteur du Complément C5",
    "summary": "Peptide macrocyclique utilisé pour la myasthénie grave généralisée.",
    "occurrence": "Synthétique.",
    "applications": ["Neurologie"]
  },
  {
    "name": "Frutintinib",
    "formula": "C₂₅H₂₄N₄O₃",
    "composition": { "C": 25, "H": 24, "N": 4, "O": 3 },
    "molarMass": "428.48 g/mol",
    "category": "Inhibiteur de VEGFR",
    "summary": "Inhibiteur hautement sélectif des récepteurs du facteur de croissance endothélial vasculaire.",
    "occurrence": "Synthétique.",
    "applications": ["Oncologie"]
  },
  {
    "name": "Nirogacestat",
    "formula": "C₂₇H₃₄F₂N₄O₂",
    "composition": { "C": 27, "H": 34, "F": 2, "N": 4, "O": 2 },
    "molarMass": "484.58 g/mol",
    "category": "Inhibiteur de Gamma-Sécrétase",
    "summary": "Utilisé pour le traitement des tumeurs desmoïdes progressives.",
    "occurrence": "Synthétique.",
    "applications": ["Oncologie"]
  },
  {
    "name": "Sotantercept",
    "formula": "C₂₀H₂₅N₃O₅",
    "composition": { "C": 20, "H": 25, "N": 3, "O": 5 },
    "molarMass": "387.43 g/mol (Fragment)",
    "category": "Protéine de Fusion",
    "summary": "Piège à ligands de l'activine pour le traitement de l'hypertension artérielle pulmonaire.",
    "occurrence": "Bio-ingénierie.",
    "applications": ["Cardiologie"]
  },
  {
    "name": "Ligand de Buchwald (XPhos)",
    "formula": "C₃₃H₄₇P",
    "composition": { "C": 33, "H": 47, "P": 1 },
    "molarMass": "474.70 g/mol",
    "category": "Ligand de Phosphine",
    "summary": "Ligand biphasé encombré utilisé dans les réactions de couplage croisé au palladium.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse"]
  },
  {
    "name": "SPhos",
    "formula": "C₂₆H₃₅O₂P",
    "composition": { "C": 26, "H": 35, "O": 2, "P": 1 },
    "molarMass": "410.53 g/mol",
    "category": "Ligand de Phosphine",
    "summary": "Ligand extrêmement efficace pour le couplage de Suzuki-Miyaura de chlorures d'aryle encombrés.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "tBuXPhos",
    "formula": "C₃₅H₅₁P",
    "composition": { "C": 35, "H": 51, "P": 1 },
    "molarMass": "502.75 g/mol",
    "category": "Ligand",
    "summary": "Utilisé pour l'amination et l'arylation d'urées.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de molécules complexes"]
  },
  {
    "name": "DavePhos",
    "formula": "C₂₂H₃₁NP",
    "composition": { "C": 22, "H": 31, "N": 1, "P": 1 },
    "molarMass": "340.46 g/mol",
    "category": "Ligand",
    "summary": "Ligand de Buchwald polyvalent pour les couplages C-N et C-C.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse homogène"]
  },
  {
    "name": "BrettPhos",
    "formula": "C₃₅H₅₃O₂P",
    "composition": { "C": 35, "H": 53, "O": 2, "P": 1 },
    "molarMass": "536.77 g/mol",
    "category": "Ligand",
    "summary": "Sélectionné pour les aminations d'aryles primaires difficiles.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie pharmaceutique"]
  },
  {
    "name": "Complex de Grubbs (2ème génération)",
    "formula": "C₄₆H₆₅Cl₂N₂PRu",
    "composition": { "C": 46, "H": 65, "Cl": 2, "N": 2, "P": 1, "Ru": 1 },
    "molarMass": "848.97 g/mol",
    "category": "Catalyseur de Métathèse",
    "summary": "Catalyseur au ruthénium incorporant un carbène N-hétérocyclique stable.",
    "occurrence": "Synthétique.",
    "applications": ["Métathèse d'oléfines", "Industrie des polymères"]
  },
  {
    "name": "Catalyseur d'Hoveyda-Grubbs (2ème génération)",
    "formula": "C₃₁H₃₈Cl₂N₂ORu",
    "composition": { "C": 31, "H": 38, "Cl": 2, "N": 2, "O": 1, "Ru": 1 },
    "molarMass": "626.62 g/mol",
    "category": "Catalyseur",
    "summary": "Version améliorée du catalyseur de Grubbs, très stable à l'air.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse totale de produits naturels"]
  },
  {
    "name": "Cyanure de Triméthylsilyle (TMSCN)",
    "formula": "C₄H₉NSi",
    "composition": { "C": 4, "H": 9, "N": 1, "Si": 1 },
    "molarMass": "99.21 g/mol",
    "category": "Réactif de Silylation",
    "summary": "Source de Michael pour les ions cyanure, utilisé pour la formation de cyanohydrines.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "Azidotriméthylsilane (TMSA)",
    "formula": "C₃H₉N₃Si",
    "composition": { "C": 3, "H": 9, "N": 3, "Si": 1 },
    "molarMass": "115.21 g/mol",
    "category": "Réactif",
    "summary": "Alternative sûre à l'acide hydrazoïque pour la synthèse d'azides organiques.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie Click", "Hétérocycles"]
  },
  {
    "name": "Héneicosanamide",
    "formula": "C₂₁H₄₃NO",
    "composition": { "C": 21, "H": 43, "N": 1, "O": 1 },
    "molarMass": "325.57 g/mol",
    "category": "Amide de Gras",
    "summary": "Amide à longue chaîne utilisé comme agent de démoulage.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie du plastique"]
  },
  {
    "name": "Docosanamide (Behénamide)",
    "formula": "C₂₂H₄₅NO",
    "composition": { "C": 22, "H": 45, "N": 1, "O": 1 },
    "molarMass": "339.60 g/mol",
    "category": "Amide de Gras",
    "summary": "Agent de glissement utilisé dans les films en polyéthylène.",
    "occurrence": "Synthétique.",
    "applications": ["Lubrification de surface"]
  },
  {
    "name": "Acétate de Cholestéryle",
    "formula": "C₂₉H₄₈O₂",
    "composition": { "C": 29, "H": 48, "O": 2 },
    "molarMass": "428.69 g/mol",
    "category": "Stéroïde",
    "summary": "Dérivé ester du cholestérol utilisé dans l'étude des cristaux liquides.",
    "occurrence": "Tissus animaux.",
    "applications": ["Biochimie"]
  },
  {
    "name": "Linoléate de Cholestéryle",
    "formula": "C₄₅H₇₆O₂",
    "composition": { "C": 45, "H": 76, "O": 2 },
    "molarMass": "649.08 g/mol",
    "category": "Ester de Cholestérol",
    "summary": "Principal composant des lipoprotéines de basse densité (LDL).",
    "occurrence": "Plasma sanguin.",
    "applications": ["Lipidologie"]
  },
  {
    "name": "Oxyde de Néodyme(III)",
    "formula": "Nd₂O₃",
    "composition": { "Nd": 2, "O": 3 },
    "molarMass": "336.48 g/mol",
    "category": "Oxyde de Terre Rare",
    "summary": "Utilisé pour teinter le verre et fabriquer des aimants puissants NdFeB.",
    "occurrence": "Monazite.",
    "applications": ["Lasers", "Aimants permanents"]
  },
  {
    "name": "Oxyde de Praséodyme(III,IV)",
    "formula": "Pr₆O₁₁",
    "composition": { "Pr": 6, "O": 11 },
    "molarMass": "1021.44 g/mol",
    "category": "Oxyde",
    "summary": "Pigment noir utilisé pour colorer les céramiques en jaune.",
    "occurrence": "Synthétique.",
    "applications": ["Pigments", "Condensateurs"]
  },
  {
    "name": "Fluorure de Magnésium",
    "formula": "MgF₂",
    "composition": { "Mg": 1, "F": 2 },
    "molarMass": "62.30 g/mol",
    "category": "Halogénure",
    "summary": "Matériau optique transparent dans l'UV lointain.",
    "occurrence": "Séllaïte.",
    "applications": ["Revêtements anti-reflets", "Optique de précision"]
  },
  {
    "name": "N-Hydroxysuccinimide (NHS)",
    "formula": "C₄H₅NO₃",
    "composition": { "C": 4, "H": 5, "N": 1, "O": 3 },
    "molarMass": "115.09 g/mol",
    "category": "Réactif de Couplage",
    "summary": "Utilisé pour activer les acides carboxyliques en esters NHS réactifs.",
    "occurrence": "Synthétique.",
    "applications": ["Bioconjugaison", "Synthèse de peptides"]
  },
  {
    "name": "EDC (Chlorhydrate de 1-éthyl-3-(3-diméthylaminopropyl)carbodiimide)",
    "formula": "C₈H₁₈ClN₃",
    "composition": { "C": 8, "H": 18, "Cl": 1, "N": 3 },
    "molarMass": "191.70 g/mol",
    "category": "Réactif de Couplage",
    "summary": "Carbodiimide soluble dans l'eau pour le couplage amide.",
    "occurrence": "Synthétique.",
    "applications": ["Biochimie", "Immobilisation d'enzymes"]
  },
  {
    "name": "HATU",
    "formula": "C₁₀H₁₅F₆N₆OP",
    "composition": { "C": 10, "H": 15, "F": 6, "N": 6, "O": 1, "P": 1 },
    "molarMass": "380.23 g/mol",
    "category": "Agent de Couplage",
    "summary": "Agent de couplage peptidique de haute performance.",
    "occurrence": "Synthétique.",
    "applications": ["Phase solide", "Peptides"]
  },
  {
    "name": "PyBOP",
    "formula": "C₁₈H₂₈F₆N₆P₂",
    "composition": { "C": 18, "H": 28, "F": 6, "N": 6, "P": 2 },
    "molarMass": "520.39 g/mol",
    "category": "Agent de Couplage",
    "summary": "Alternative plus sûre au BOP (évite la formation de HMPA cancérigène).",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "Tirzépatide",
    "formula": "C₂₂₅H₃₄₈N₄₈O₆₈",
    "composition": { "C": 225, "H": 348, "N": 48, "O": 68 },
    "molarMass": "4813.52 g/mol",
    "category": "Double Agoniste GIP/GLP-1",
    "summary": "Médicament de pointe pour le diabète de type 2 et la gestion du poids.",
    "occurrence": "Bio-ingénierie.",
    "applications": ["Endocrinologie"]
  },
  {
    "name": "Retatrutide",
    "formula": "C₂₂₁H₃₄₂N₄₆O₆₈",
    "composition": { "C": 221, "H": 342, "N": 46, "O": 68 },
    "molarMass": "4731.33 g/mol",
    "category": "Triple Agoniste",
    "summary": "Agoniste des récepteurs GLP-1, GIP et Glucagon en développement clinique avancé.",
    "occurrence": "Bio-ingénierie.",
    "applications": ["Obésité", "Stéatose hépatique"]
  },
  {
    "name": "Donanemab",
    "formula": "C₆₄₇₂H₉₉₈₄N₁₇₂₀O₂₀₁₆S₄₄",
    "composition": { "C": 6472, "H": 9984, "N": 1720, "O": 2016, "S": 44 },
    "molarMass": "145000.00 g/mol (approx)",
    "category": "Anticorps Monoclonal",
    "summary": "Cible les plaques amyloïdes dans la maladie d'Alzheimer.",
    "occurrence": "Bio-ingénierie.",
    "applications": ["Neurologie"]
  },
  {
    "name": "Lecanemab",
    "formula": "C₆₅₁₂H₁₀₀₈₈N₁₇₄₈O₂₀₃₆S₄₄",
    "composition": { "C": 6512, "H": 10088, "N": 1748, "O": 2036, "S": 44 },
    "molarMass": "146000.00 g/mol (approx)",
    "category": "Anticorps Monoclonal",
    "summary": "Immunothérapie pour ralentir la progression de la maladie d'Alzheimer.",
    "occurrence": "Bio-ingénierie.",
    "applications": ["Neurologie"]
  },
  {
    "name": "Efruxifermine",
    "formula": "C₉₆₈H₁₅₂₂N₂₆₀O₂₈₂S₈",
    "composition": { "C": 968, "H": 1522, "N": 260, "O": 282, "S": 8 },
    "molarMass": "21600.00 g/mol (approx)",
    "category": "Analogue de FGF21",
    "summary": "Utilisé pour le traitement de la NASH (stéatohépatite non alcoolique).",
    "occurrence": "Bio-ingénierie.",
    "applications": ["Hépatologie"]
  },
  {
    "name": "Iptacopan",
    "formula": "C₂₅H₃₀N₄O₄",
    "composition": { "C": 25, "H": 30, "N": 4, "O": 4 },
    "molarMass": "450.53 g/mol",
    "category": "Inhibiteur du Facteur B",
    "summary": "Premier inhibiteur oral du complément pour l'hémoglobinurie paroxystique nocturne.",
    "occurrence": "Synthétique.",
    "applications": ["Hématologie"]
  },
  {
    "name": "Momelotinib",
    "formula": "C₂₃H₂₂N₆O",
    "composition": { "C": 23, "H": 22, "N": 6, "O": 1 },
    "molarMass": "398.46 g/mol",
    "category": "Inhibiteur de JAK1/JAK2/ACVR1",
    "summary": "Approuvé pour la myélofibrose avec anémie.",
    "occurrence": "Synthétique.",
    "applications": ["Oncologie"]
  },
  {
    "name": "Quizartinib",
    "formula": "C₂₉H₃₂N₆O₄S",
    "composition": { "C": 29, "H": 32, "N": 6, "O": 4, "S": 1 },
    "molarMass": "560.67 g/mol",
    "category": "Inhibiteur de FLT3",
    "summary": "Utilisé pour la leucémie myéloïde aiguë (LMA) FLT3-ITD positive.",
    "occurrence": "Synthétique.",
    "applications": ["Oncologie"]
  },
  {
    "name": "Talazoparib",
    "formula": "C₁₉H₁₄F₂N₆O",
    "composition": { "C": 19, "H": 14, "F": 2, "N": 6, "O": 1 },
    "molarMass": "380.35 g/mol",
    "category": "Inhibiteur de PARP",
    "summary": "Traitement pour le cancer du sein métastatique BRCA-muté.",
    "occurrence": "Synthétique.",
    "applications": ["Oncologie"]
  },
  {
    "name": "Elacestrant",
    "formula": "C₃₀H₃₄O₃",
    "composition": { "C": 30, "H": 34, "O": 3 },
    "molarMass": "442.59 g/mol",
    "category": "SERD (Dégradateur sélectif de RE)",
    "summary": "Utilisé pour le cancer du sein ER-positif, HER2-négatif avec mutations ESR1.",
    "occurrence": "Synthétique.",
    "applications": ["Oncologie"]
  },
  {
    "name": "Gepotidacine",
    "formula": "C₁₉H₁₉FN₄O₄S",
    "composition": { "C": 19, "H": 19, "F": 1, "N": 4, "O": 4, "S": 1 },
    "molarMass": "418.44 g/mol",
    "category": "Antibiotique (Inhibiteur de Topoisomérase)",
    "summary": "Nouvel antibiotique pour les infections urinaires simples.",
    "occurrence": "Synthétique.",
    "applications": ["Infectiologie"]
  },
  {
    "name": "Popsalimod",
    "formula": "C₂₄H₃₂N₂O₃",
    "composition": { "C": 24, "H": 32, "N": 2, "O": 3 },
    "molarMass": "396.52 g/mol",
    "category": "Modulateur de S1P",
    "summary": "Traitement expérimental pour la sclérose en plaques.",
    "occurrence": "Synthétique.",
    "applications": ["Neurologie"]
  },
  {
    "name": "Obicetrapib",
    "formula": "C₂₆H₂₅F₆N₃O₄",
    "composition": { "C": 26, "H": 25, "F": 6, "N": 3, "O": 4 },
    "molarMass": "557.48 g/mol",
    "category": "Inhibiteur de CETP",
    "summary": "Puissant réducteur de LDL-cholestérol en phase III.",
    "occurrence": "Synthétique.",
    "applications": ["Cardiologie"]
  },
  {
    "name": "Orforglipron",
    "formula": "C₃₂H₂₈F₃N₇O₃",
    "composition": { "C": 32, "H": 28, "F": 3, "N": 7, "O": 3 },
    "molarMass": "615.60 g/mol",
    "category": "Agoniste GLP-1 Oral Non-Peptidique",
    "summary": "Alternative orale aux injections de GLP-1 pour le diabète et l'obésité.",
    "occurrence": "Synthétique.",
    "applications": ["Métabolisme"]
  },
  {
    "name": "Survodutide",
    "formula": "C₂₂₀H₃₃₉N₄₇O₆₄",
    "composition": { "C": 220, "H": 339, "N": 47, "O": 64 },
    "molarMass": "4666.25 g/mol",
    "category": "Double Agoniste Glucagon/GLP-1",
    "summary": "Utilisé pour la perte de poids et les maladies hépatiques.",
    "occurrence": "Bio-ingénierie.",
    "applications": ["Endocrinologie"]
  },
  {
    "name": "Catalyseur de Wilkinson",
    "formula": "C₅₄H₄₅ClP₃Rh",
    "composition": { "C": 54, "H": 45, "Cl": 1, "P": 3, "Rh": 1 },
    "molarMass": "925.22 g/mol",
    "category": "Catalyseur",
    "summary": "Chlorotris(triphénylphosphine)rhodium(I), majeur pour l'hydrogénation homogène.",
    "occurrence": "Synthétique.",
    "applications": ["Pétrochimie", "Synthèse fine"]
  },
  {
    "name": "Complexe de Vaska",
    "formula": "C₃₇H₃₀ClIrOP₂",
    "composition": { "C": 37, "H": 30, "Cl": 1, "Ir": 1, "O": 1, "P": 2 },
    "molarMass": "780.25 g/mol",
    "category": "Coordination",
    "summary": "Complexe d'iridium(I) plan-carré, célèbre pour sa liaison réversible avec l'oxygène.",
    "occurrence": "Synthétique.",
    "applications": ["Études mécanistiques", "Capteurs de gaz"]
  },
  {
    "name": "Ferrocène",
    "formula": "C₁₀H₁₀Fe",
    "composition": { "C": 10, "H": 10, "Fe": 1 },
    "molarMass": "186.03 g/mol",
    "category": "Organométallique",
    "summary": "Premier métallocène isolé, structure en sandwich.",
    "occurrence": "Synthétique.",
    "applications": ["Additif de carburant", "Électrochimie"]
  },
  {
    "name": "Nickelocène",
    "formula": "C₁₀H₁₀Ni",
    "composition": { "C": 10, "H": 10, "Ni": 1 },
    "molarMass": "188.88 g/mol",
    "category": "Métallocène",
    "summary": "Complexe vert paramagnétique, très réactif aux oxydants.",
    "occurrence": "Synthétique.",
    "applications": ["Source de Ni(0)", "Catalyse"]
  },
  {
    "name": "Cobaltocène",
    "formula": "C₁₀H₁₀Co",
    "composition": { "C": 10, "H": 10, "Co": 1 },
    "molarMass": "189.12 g/mol",
    "category": "Métallocène",
    "summary": "Sandwich de cobalt(II), puissant réducteur à un électron.",
    "occurrence": "Synthétique.",
    "applications": ["Réduction chimique", "Matériaux"]
  },
  {
    "name": "Niobiocène bichlorure",
    "formula": "C₁₀H₁₀Cl₂Nb",
    "composition": { "C": 10, "H": 10, "Cl": 2, "Nb": 1 },
    "molarMass": "294.00 g/mol",
    "category": "Organométallique",
    "summary": "Complexe précurseur pour la synthèse de dérivés du niobium.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche"]
  },
  {
    "name": "Titanocène bichlorure",
    "formula": "C₁₀H₁₀Cl₂Ti",
    "composition": { "C": 10, "H": 10, "Cl": 2, "Ti": 1 },
    "molarMass": "248.97 g/mol",
    "category": "Réactif de Tebbe précurseur",
    "summary": "Utilisé pour préparer le réactif de Petasis et d'autres outils d'oléfination.",
    "occurrence": "Synthétique.",
    "applications": ["Oléfination", "Réduction"]
  },
  {
    "name": "Zirconocène bichlorure",
    "formula": "C₁₀H₁₀Cl₂Zr",
    "composition": { "C": 10, "H": 10, "Cl": 2, "Zr": 1 },
    "molarMass": "292.32 g/mol",
    "category": "Catalyseur Kaminsky",
    "summary": "Utilisé avec le MAO pour la polymérisation d'oléfines.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie du plastique"]
  },
  {
    "name": "Manganocène",
    "formula": "C₁₀H₁₀Mn",
    "composition": { "C": 10, "H": 10, "Mn": 1 },
    "molarMass": "185.13 g/mol",
    "category": "Métallocène",
    "summary": "Sandwich de manganèse(II) montrant un équilibre de spin inhabituel.",
    "occurrence": "Synthétique.",
    "applications": ["Magnétisme moléculaire"]
  },
  {
    "name": "Vanadocène",
    "formula": "C₁₀H₁₀V",
    "composition": { "C": 10, "H": 10, "V": 1 },
    "molarMass": "181.13 g/mol",
    "category": "Métallocène",
    "summary": "Complexe paramagnétique violet de vanadium(II).",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse d'éthylation"]
  },
  {
    "name": "Ruthénocène",
    "formula": "C₁₀H₁₀Ru",
    "composition": { "C": 10, "H": 10, "Ru": 1 },
    "molarMass": "231.25 g/mol",
    "category": "Métallocène",
    "summary": "Isostructural du ferrocène, mais avec une réactivité d'électrophilie différente.",
    "occurrence": "Synthétique.",
    "applications": ["Photochimie"]
  },
  {
    "name": "Osmocène",
    "formula": "C₁₀H₁₀Os",
    "composition": { "C": 10, "H": 10, "Os": 1 },
    "molarMass": "320.39 g/mol",
    "category": "Métallocène",
    "summary": "Plus stable thermiquement que ses analogues Ru et Fe.",
    "occurrence": "Synthétique.",
    "applications": ["Matériaux avancés"]
  },
  {
    "name": "Chromocène",
    "formula": "C₁₀H₁₀Cr",
    "composition": { "C": 10, "H": 10, "Cr": 1 },
    "molarMass": "182.18 g/mol",
    "category": "Métallocène",
    "summary": "Sandwich de chrome(II), hautement sensible à l'air.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse Union Carbide"]
  },
  {
    "name": "Platinocène (Cp2Pt)",
    "formula": "C₁₀H₁₀Pt",
    "composition": { "C": 10, "H": 10, "Pt": 1 },
    "molarMass": "325.27 g/mol",
    "category": "Organométallique",
    "summary": "Découvert plus récemment que les autres métallocènes de la première série.",
    "occurrence": "Synthétique.",
    "applications": ["Dépôt de couches minces"]
  },
  {
    "name": "Aluminocène (Cp*2Al)",
    "formula": "C₂₀H₃₀Al",
    "composition": { "C": 20, "H": 30, "Al": 1 },
    "molarMass": "297.43 g/mol",
    "category": "Organo-aluminium",
    "summary": "Sandwich encombré d'aluminium montrant des structures insolites.",
    "occurrence": "Synthétique.",
    "applications": ["Études de liaisons"]
  },
  {
    "name": "Dichlorure de palladocène",
    "formula": "C₁₀H₁₀Cl₂Pd",
    "composition": { "C": 10, "H": 10, "Cl": 2, "Pd": 1 },
    "molarMass": "277.51 g/mol",
    "category": "Catalyseur",
    "summary": "Source pratique de palladium Cp pour divers couplages.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "Acétylacétonate de cuivre(II) (Cu(acac)2)",
    "formula": "C₁₀H₁₄CuO₄",
    "composition": { "C": 10, "H": 14, "Cu": 1, "O": 4 },
    "molarMass": "261.76 g/mol",
    "category": "Chélate",
    "summary": "Catalyseur bleu profond utilisé pour les carbénoïdes.",
    "occurrence": "Synthétique.",
    "applications": ["Insertion de carbène", "PVC"]
  },
  {
    "name": "Tris(acétylacétonate) de fer(III)",
    "formula": "C₁₅H₂₁FeO₆",
    "composition": { "C": 15, "H": 21, "Fe": 1, "O": 6 },
    "molarMass": "353.17 g/mol",
    "category": "Chélate de Fer",
    "summary": "Utilisé comme catalyseur pour le couplage croisé d'arènes.",
    "occurrence": "Synthétique.",
    "applications": ["Couplage de Kharasch"]
  },
  {
    "name": "Tris(acétylacétonate) de chrome(III)",
    "formula": "C₁₅H₂₁CrO₆",
    "composition": { "C": 15, "H": 21, "Cr": 1, "O": 6 },
    "molarMass": "349.32 g/mol",
    "category": "Coordination",
    "summary": "Agent protecteur utilisé pour améliorer la relaxation en RMN.",
    "occurrence": "Synthétique.",
    "applications": ["Spectroscopie RMN"]
  },
  {
    "name": "Bleu de Méthylène",
    "formula": "C₁₆H₁₈ClN₃S",
    "composition": { "C": 16, "H": 18, "Cl": 1, "N": 3, "S": 1 },
    "molarMass": "319.85 g/mol",
    "category": "Colorant",
    "summary": "Composé hétérocyclique aromatique utilisé comme colorant biologique et antidote.",
    "occurrence": "Synthétique.",
    "applications": ["Microscopie", "Médecine"]
  },
  {
    "name": "Rouge de Phénol",
    "formula": "C₁₉H₁₄O₅S",
    "composition": { "C": 19, "H": 14, "O": 5, "S": 1 },
    "molarMass": "354.38 g/mol",
    "category": "Indicateur pH",
    "summary": "Indicateur coloré virant du jaune au rouge entre pH 6,6 et 8,0.",
    "occurrence": "Synthétique.",
    "applications": ["Laboratoire", "Culture cellulaire"]
  },
  {
    "name": "Phénolphtaléine",
    "formula": "C₂₀H₁₄O₄",
    "composition": { "C": 20, "H": 14, "O": 4 },
    "molarMass": "318.32 g/mol",
    "category": "Indicateur",
    "summary": "Utilisé en titrage acide-base, vire au rose purpurin en milieu basique.",
    "occurrence": "Synthétique.",
    "applications": ["Titrimétrie", "Analyse chimique"]
  },
  {
    "name": "Héliantine (Méthylorange)",
    "formula": "C₁₄H₁₄N₃NaO₃S",
    "composition": { "C": 14, "H": 14, "N": 3, "Na": 1, "O": 3, "S": 1 },
    "molarMass": "327.33 g/mol",
    "category": "Indicateur pH",
    "summary": "Indicateur coloré azofonctionnel virant en zone acide.",
    "occurrence": "Synthétique.",
    "applications": ["Titres acido-basiques"]
  },
  {
    "name": "Alizarine",
    "formula": "C₁₄H₈O₄",
    "composition": { "C": 14, "H": 8, "O": 4 },
    "molarMass": "240.21 g/mol",
    "category": "Pigment Organique",
    "summary": "Colorant rouge extrait historiquement de la racine de garance.",
    "occurrence": "Rubia tinctorum.",
    "applications": ["Art", "Textiles"]
  },
  {
    "name": "Indigo",
    "formula": "C₁₆H₁₀N₂O₂",
    "composition": { "C": 16, "H": 10, "N": 2, "O": 2 },
    "molarMass": "262.26 g/mol",
    "category": "Colorant",
    "summary": "Colorant bleu profond célèbre, utilisé pour la teinture des jeans.",
    "occurrence": "Indigofera tinctoria.",
    "applications": ["Mode", "Coloration de fibres"]
  },
  {
    "name": "Tétrathiafulvalène (TTF)",
    "formula": "C₆H₄S₄",
    "composition": { "C": 6, "H": 4, "S": 4 },
    "molarMass": "204.36 g/mol",
    "category": "Semi-conducteur Organique",
    "summary": "Organosulfuré formant des sels de transfert de charge conducteurs.",
    "occurrence": "Synthétique.",
    "applications": ["Électronique organique"]
  },
  {
    "name": "Tétracyanoquinodiméthane (TCNQ)",
    "formula": "C₁₂H₄N₄",
    "composition": { "C": 12, "H": 4, "N": 4 },
    "molarMass": "204.19 g/mol",
    "category": "Accepteur d'électrons",
    "summary": "Matière organique utilisée pour créer des conducteurs synthétiques.",
    "occurrence": "Synthétique.",
    "applications": ["Physique des solides"]
  },
  {
    "name": "Pérylène-3,4,9,10-tétracarboxylique dianhydride (PTCDA)",
    "formula": "C₂₄H₈O₆",
    "composition": { "C": 24, "H": 8, "O": 6 },
    "molarMass": "392.32 g/mol",
    "category": "Semi-conducteur",
    "summary": "Pigment pérylène utilisé pour les couches minces organiques.",
    "occurrence": "Synthétique.",
    "applications": ["Photovoltaïque organique"]
  },
  {
    "name": "Rubrène",
    "formula": "C₄₂H₂₈",
    "composition": { "C": 42, "H": 28 },
    "molarMass": "532.67 g/mol",
    "category": "Semi-conducteur aromatique",
    "summary": "Hydrocarbure aromatique polycyclique ayant la mobilité de porteurs de charge la plus élevée.",
    "occurrence": "Synthétique.",
    "applications": ["OLED", "Transistors organiques"]
  },
  {
    "name": "Pentacène",
    "formula": "C₂₂H₁₄",
    "composition": { "C": 22, "H": 14 },
    "molarMass": "278.35 g/mol",
    "category": "HAP",
    "summary": "Composé de cinq cycles benzéniques fusionnés, modèle pour les dispositifs organiques.",
    "occurrence": "Synthétique.",
    "applications": ["O-FET", "Cellules solaires"]
  },
  {
    "name": "Phtalocyanine de Cuivre",
    "formula": "C₃₂H₁₆CuN₈",
    "composition": { "C": 32, "H": 16, "Cu": 1, "N": 8 },
    "molarMass": "576.07 g/mol",
    "category": "Pigment",
    "summary": "Pigment bleu extrêmement stable et brillant, utilisé mondialement.",
    "occurrence": "Synthétique.",
    "applications": ["Encres", "Peintures", "Plastiques"]
  },
  {
    "name": "Vert de Malachite",
    "formula": "C₂₃H₂₅ClN₂",
    "composition": { "C": 23, "H": 25, "Cl": 1, "N": 2 },
    "molarMass": "364.91 g/mol",
    "category": "Colorant Triarylméthane",
    "summary": "Utilisé comme colorant pour la soie et le cuir, et comme anti-fongique piscicole.",
    "occurrence": "Synthétique.",
    "applications": ["Aquaculture", "Textile"]
  },
  {
    "name": "Rose Bengale",
    "formula": "C₂₀H₂Cl₄I₄Na₂O₅",
    "composition": { "C": 20, "H": 2, "Cl": 4, "I": 4, "Na": 2, "O": 5 },
    "molarMass": "1017.64 g/mol",
    "category": "Colorant / Photosensibilisateur",
    "summary": "Dérivé de la fluorescéine utilisé pour générer de l'oxygène singulet.",
    "occurrence": "Synthétique.",
    "applications": ["Diagnostic oculaire", "Thérapie photodynamique"]
  },
  {
    "name": "Éosine Y",
    "formula": "C₂₀H₆Br₄Na₂O₅",
    "composition": { "C": 20, "H": 6, "Br": 4, "Na": 2, "O": 5 },
    "molarMass": "691.85 g/mol",
    "category": "Colorant histologique",
    "summary": "Colorant rouge/rose utilisé pour colorer le cytoplasme dans la technique H&E.",
    "occurrence": "Synthétique.",
    "applications": ["Cytopathologie"]
  },
  {
    "name": "Hématoxyline",
    "formula": "C₁₆H₁₄O₆",
    "composition": { "C": 16, "H": 14, "O": 6 },
    "molarMass": "302.28 g/mol",
    "category": "Produit Naturel",
    "summary": "Composé extrait du bois de Campeche, essentiel pour colorer les noyaux cellulaires.",
    "occurrence": "Haematoxylum campechianum.",
    "applications": ["Histologie"]
  },
  {
    "name": "Carmine (Acide Carminique)",
    "formula": "C₂₂H₂₀O₁₃",
    "composition": { "C": 22, "H": 20, "O": 13 },
    "molarMass": "492.39 g/mol",
    "category": "Pigment naturel",
    "summary": "Colorant rouge vif extrait de la cochenille.",
    "occurrence": "Dactylopius coccus.",
    "applications": ["Additif alimentaire E120", "Cosmétiques"]
  },
  {
    "name": "Lantéron (Tétraacétate de plomb)",
    "formula": "C₈H₁₂O₈Pb",
    "composition": { "C": 8, "H": 12, "O": 8, "Pb": 1 },
    "molarMass": "443.38 g/mol",
    "category": "Oxydant",
    "summary": "Puissant agent d'oxydation pour le clivage des glycols vicinaux.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "Niobiocène bichlorure",
    "formula": "C₁₀H₁₀Cl₂Nb",
    "composition": { "C": 10, "H": 10, "Cl": 2, "Nb": 1 },
    "molarMass": "294.00 g/mol",
    "category": "Organométallique",
    "summary": "Complexe précurseur pour la synthèse de dérivés du niobium.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche"]
  },
  {
    "name": "Dodécylsulfate de sodium (SDS)",
    "formula": "C₁₂H₂₅NaO₄S",
    "composition": { "C": 12, "H": 25, "Na": 1, "O": 4, "S": 1 },
    "molarMass": "288.38 g/mol",
    "category": "Tensioactif",
    "summary": "Détergent anionique majeur utilisé pour dénaturer les protéines en électrophorèse.",
    "occurrence": "Synthétique.",
    "applications": ["Biologie moléculaire", "Produits d'hygiène"]
  },
  {
    "name": "Bromure de cétyltrimethylammonium (CTAB)",
    "formula": "C₁₉H₄₂BrN",
    "composition": { "C": 19, "H": 42, "Br": 1, "N": 1 },
    "molarMass": "364.45 g/mol",
    "category": "Tensioactif cationique",
    "summary": "Utilisé pour l'extraction de l'ADN et la synthèse de nanoparticules d'or.",
    "occurrence": "Synthétique.",
    "applications": ["Génie des matériaux", "Extraction d'ADN"]
  },
  {
    "name": "Triton X-100",
    "formula": "C₁₄H₂₂O(C₂H₄O)ₙ",
    "composition": { "C": 34, "H": 62, "O": 11 },
    "molarMass": "646.86 g/mol (n=9.5)",
    "category": "Tensioactif non-ionique",
    "summary": "Détergent doux utilisé pour perméabiliser les membranes cellulaires.",
    "occurrence": "Synthétique.",
    "applications": ["Histologie", "Biochimie"]
  },
  {
    "name": "Tween 20 (Polysorbate 20)",
    "formula": "C₅₈H₁₁₄O₂₆",
    "composition": { "C": 58, "H": 114, "O": 26 },
    "molarMass": "1227.54 g/mol",
    "category": "Émulsifiant",
    "summary": "Surfactant utilisé pour stabiliser les émulsions alimentaires et cosmétiques.",
    "occurrence": "Synthétique.",
    "applications": ["Pharmacie", "Agroalimentaire"]
  },
  {
    "name": "Spur (Acide sulfonique)",
    "formula": "C₁₇H₃₄O₃S",
    "composition": { "C": 17, "H": 34, "O": 3, "S": 1 },
    "molarMass": "318.51 g/mol",
    "category": "Tensioactif",
    "summary": "Composant de nombreux détergents industriels.",
    "occurrence": "Synthétique.",
    "applications": ["Nettoyage industriel"]
  },
  {
    "name": "Chlorure de 1-butyl-3-méthylimidazolium ([BMIM]Cl)",
    "formula": "C₈H₁₅ClN₂",
    "composition": { "C": 8, "H": 15, "Cl": 1, "N": 2 },
    "molarMass": "174.67 g/mol",
    "category": "Liquide ionique",
    "summary": "Sel fondant à basse température, utilisé comme solvant vert.",
    "occurrence": "Synthétique.",
    "applications": ["Dissolution de cellulose", "Catalyse"]
  },
  {
    "name": "Bis(trifluorométhylsulfonyl)imide de lithium (LiTFSI)",
    "formula": "C₂F₆LiNO₄S₂",
    "composition": { "C": 2, "F": 6, "Li": 1, "N": 1, "O": 4, "S": 2 },
    "molarMass": "287.09 g/mol",
    "category": "Électrolyte",
    "summary": "Sel de lithium utilisé dans les batteries lithium-polymère de nouvelle génération.",
    "occurrence": "Synthétique.",
    "applications": ["Stockage d'énergie"]
  },
  {
    "name": "Tétrafluoroborate de 1-éthyl-3-méthylimidazolium ([EMIM]BF4)",
    "formula": "C₆H₁₁BF₄N₂",
    "composition": { "C": 6, "H": 11, "B": 1, "F": 4, "N": 2 },
    "molarMass": "197.97 g/mol",
    "category": "Liquide ionique",
    "summary": "Solvant conducteur avec une large fenêtre électrochimique.",
    "occurrence": "Synthétique.",
    "applications": ["Supercondensateurs"]
  },
  {
    "name": "Néotame",
    "formula": "C₂₀H₃₀N₂O₅",
    "composition": { "C": 20, "H": 30, "N": 2, "O": 5 },
    "molarMass": "378.46 g/mol",
    "category": "Édulcorant",
    "summary": "Édulcorant artificiel 7000 à 13000 fois plus sucré que le saccharose.",
    "occurrence": "Synthétique.",
    "applications": ["Alimentation E961"]
  },
  {
    "name": "Advantame",
    "formula": "C₂₄H₃₀N₂O₇",
    "composition": { "C": 24, "H": 30, "N": 2, "O": 7 },
    "molarMass": "458.50 g/mol",
    "category": "Édulcorant",
    "summary": "Édulcorant démultiplié dérivé de l'aspartame et de la vanilline.",
    "occurrence": "Synthétique.",
    "applications": ["Alimentation E969"]
  },
  {
    "name": "Stevioside",
    "formula": "C₃₈H₆₀O₁₈",
    "composition": { "C": 38, "H": 60, "O": 18 },
    "molarMass": "804.87 g/mol",
    "category": "Glycoside",
    "summary": "Édulcorant naturel extrait des feuilles de Stévia.",
    "occurrence": "Stevia rebaudiana.",
    "applications": ["Boissons light"]
  },
  {
    "name": "Rebaudioside A",
    "formula": "C₄₄H₇₀O₂₃",
    "composition": { "C": 44, "H": 70, "O": 23 },
    "molarMass": "966.98 g/mol",
    "category": "Glycoside de stéviol",
    "summary": "Principal édulcorant de la stévia, plus stable et moins amer que le stévioside.",
    "occurrence": "Stevia rebaudiana.",
    "applications": ["Industrie alimentaire"]
  },
  {
    "name": "Complexe de Gadolinium-DTPA (Magnevist)",
    "formula": "C₁₄H₂₀GdN₃O₁₀",
    "composition": { "C": 14, "H": 20, "Gd": 1, "N": 3, "O": 10 },
    "molarMass": "547.57 g/mol (Anion)",
    "category": "Agent de contraste",
    "summary": "Utilisé en IRM pour améliorer la visibilité des tumeurs et des vaisseaux.",
    "occurrence": "Synthétique.",
    "applications": ["Radiologie"]
  },
  {
    "name": "Gadotérate de méglumine (Dotarem)",
    "formula": "C₁₆H₂₅GdN₄O₈",
    "composition": { "C": 16, "H": 25, "Gd": 1, "N": 4, "O": 8 },
    "molarMass": "558.64 g/mol (Complexe Gado)",
    "category": "Agent de contraste",
    "summary": "Agent macrocyclique de contraste pour IRM très stable.",
    "occurrence": "Synthétique.",
    "applications": ["Imagerie cérébrale"]
  },
  {
    "name": "Acide folique (Vitamine B9)",
    "formula": "C₁₉H₁₉N₇O₆",
    "composition": { "C": 19, "H": 19, "N": 7, "O": 6 },
    "molarMass": "441.40 g/mol",
    "category": "Vitamine",
    "summary": "Essentiel pour la synthèse d'ADN et la division cellulaire.",
    "occurrence": "Légumes verts, foie.",
    "applications": ["Suppléments nutritionnels"]
  },
  {
    "name": "Cyanocobalamine (Vitamine B12)",
    "formula": "C₆₃H₈₈CoN₁₄O₁₄P",
    "composition": { "C": 63, "H": 88, "Co": 1, "N": 14, "O": 14, "P": 1 },
    "molarMass": "1355.37 g/mol",
    "category": "Vitamine organométallique",
    "summary": "Seule vitamine contenant un atome de métal (cobalt), prévient l'anémie pernicieuse.",
    "occurrence": "Produits animaux.",
    "applications": ["Santé humaine"]
  },
  {
    "name": "Ménadione (Vitamine K3)",
    "formula": "C₁₁H₈O₂",
    "composition": { "C": 11, "H": 8, "O": 2 },
    "molarMass": "172.18 g/mol",
    "category": "Vitamine (Synthétique)",
    "summary": "Précurseur de la vitamine K utilisé dans l'alimentation animale.",
    "occurrence": "Synthétique.",
    "applications": ["Vétérinaire"]
  },
  {
    "name": "Phylloquinone (Vitamine K1)",
    "formula": "C₃₁H₄₆O₂",
    "composition": { "C": 31, "H": 46, "O": 2 },
    "molarMass": "450.70 g/mol",
    "category": "Vitamine",
    "summary": "Impliquée dans la photosynthèse et la coagulation sanguine chez l'homme.",
    "occurrence": "Plantes vertes.",
    "applications": ["Hémostase"]
  },
  {
    "name": "Ergocalciférol (Vitamine D2)",
    "formula": "C₂₈H₄₄O",
    "composition": { "C": 28, "H": 44, "O": 1 },
    "molarMass": "396.65 g/mol",
    "category": "Vitamine",
    "summary": "Forme de vitamine D produite par les champignons sous UV.",
    "occurrence": "Levures, Champignons.",
    "applications": ["Nutrition"]
  },
  {
    "name": "Glyphosate",
    "formula": "C₃H₈NO₅P",
    "composition": { "C": 3, "H": 8, "N": 1, "O": 5, "P": 1 },
    "molarMass": "169.07 g/mol",
    "category": "Herbicide",
    "summary": "Herbicide systémique à large spectre, inhibition de l'enzyme EPSPS.",
    "occurrence": "Synthétique.",
    "applications": ["Agriculture mondiale"]
  },
  {
    "name": "Atrazine",
    "formula": "C₈H₁₄ClN₅",
    "composition": { "C": 8, "H": 14, "Cl": 1, "N": 5 },
    "molarMass": "215.68 g/mol",
    "category": "Herbicide",
    "summary": "Herbicide de la famille des triazines, très utilisé pour le maïs.",
    "occurrence": "Synthétique.",
    "applications": ["Contrôle des mauvaises herbes"]
  },
  {
    "name": "Malathion",
    "formula": "C₁₀H₁₉O₆PS₂",
    "composition": { "C": 10, "H": 19, "O": 6, "P": 1, "S": 2 },
    "molarMass": "330.36 g/mol",
    "category": "Insecticide",
    "summary": "Organophosphoré utilisé comme insecticide et acaricide.",
    "occurrence": "Synthétique.",
    "applications": ["Hygiène publique", "Agriculture"]
  },
  {
    "name": "Chlorpyrifos",
    "formula": "C₉H₁₁Cl₃NO₃PS",
    "composition": { "C": 9, "H": 11, "Cl": 3, "N": 1, "O": 3, "P": 1, "S": 1 },
    "molarMass": "350.59 g/mol",
    "category": "Organophosphoré",
    "summary": "Insecticide agissant sur le système nerveux des insectes.",
    "occurrence": "Synthétique.",
    "applications": ["Protection des cultures"]
  },
  {
    "name": "Perméthrine",
    "formula": "C₂₁H₂₀Cl₂O₃",
    "composition": { "C": 21, "H": 20, "Cl": 2, "O": 3 },
    "molarMass": "391.29 g/mol",
    "category": "Pyréthrinoïde",
    "summary": "Insecticide de synthèse imitant les pyrétines naturelles des chrysanthèmes.",
    "occurrence": "Synthétique.",
    "applications": ["Antiparasitaire", "Moustiquaires"]
  },
  {
    "name": "DDT (Dichlorodiphényltrichloroéthane)",
    "formula": "C₁₄H₉Cl₅",
    "composition": { "C": 14, "H": 9, "Cl": 5 },
    "molarMass": "354.49 g/mol",
    "category": "Organochloré",
    "summary": "Insecticide historique puissant, mondialement restreint en raison de sa persistance.",
    "occurrence": "Synthétique.",
    "applications": ["Lutte antipaludique (OMS)"]
  },
  {
    "name": "Paraquat",
    "formula": "C₁₂H₁₄N₂Cl₂",
    "composition": { "C": 12, "H": 14, "N": 2, "Cl": 2 },
    "molarMass": "257.16 g/mol",
    "category": "Herbicide",
    "summary": "Herbicide de contact extrêmement toxique agissant par stress oxydatif.",
    "occurrence": "Synthétique.",
    "applications": ["Horticulture"]
  },
  {
    "name": "2,4-D (Acide 2,4-dichlorophénoxyacétique)",
    "formula": "C₈H₆Cl₂O₃",
    "composition": { "C": 8, "H": 6, "Cl": 2, "O": 3 },
    "molarMass": "221.04 g/mol",
    "category": "Auxine de synthèse",
    "summary": "Herbicide mimant les hormones de croissance végétales.",
    "occurrence": "Synthétique.",
    "applications": ["Céréales", "Gazons"]
  },
  {
    "name": "Dicamba",
    "formula": "C₈H₆Cl₂O₃",
    "composition": { "C": 8, "H": 6, "Cl": 2, "O": 3 },
    "molarMass": "221.04 g/mol",
    "category": "Herbicide",
    "summary": "Acide benzoïque chloré utilisé contre les dicotylédones.",
    "occurrence": "Synthétique.",
    "applications": ["Agriculture extensive"]
  },
  {
    "name": "Bisphénol A (BPA)",
    "formula": "C₁₅H₁₆O₂",
    "composition": { "C": 15, "H": 16, "O": 2 },
    "molarMass": "228.29 g/mol",
    "category": "Monomère",
    "summary": "Utilisé pour fabriquer des plastiques polycarbonates et des résines époxy.",
    "occurrence": "Synthétique.",
    "applications": ["Plasturgie", "Revêtements"]
  },
  {
    "name": "Caprolactame",
    "formula": "C₆H₁₁NO",
    "composition": { "C": 6, "H": 11, "N": 1, "O": 1 },
    "molarMass": "113.16 g/mol",
    "category": "Précurseur de polymère",
    "summary": "Monomère essentiel pour la production du Nylon 6.",
    "occurrence": "Synthétique.",
    "applications": ["Fibres textiles", "Pièces auto"]
  },
  {
    "name": "Adiponitrile",
    "formula": "C₆H₈N₂",
    "composition": { "C": 6, "H": 8, "N": 2 },
    "molarMass": "108.14 g/mol",
    "category": "Intermédiaire",
    "summary": "Précurseur de l'hexaméthylènediamine pour le Nylon 6,6.",
    "occurrence": "Synthétique.",
    "applications": ["Pétrochimie"]
  },
  {
    "name": "Hexaméthylènediamine",
    "formula": "C₆H₁₆N₂",
    "composition": { "C": 6, "H": 16, "N": 2 },
    "molarMass": "116.21 g/mol",
    "category": "Diamine",
    "summary": "Composant clé pour la synthèse des polyamides.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie chimique"]
  },
  {
    "name": "Acide Téréphtalique",
    "formula": "C₈H₆O₄",
    "composition": { "C": 8, "H": 6, "O": 4 },
    "molarMass": "166.13 g/mol",
    "category": "Acide carboxylique",
    "summary": "Utilisé massivement pour produire le polyester PET.",
    "occurrence": "Synthétique.",
    "applications": ["Bouteilles plastiques", "Vêtements"]
  },
  {
    "name": "Éthylène Glycol",
    "formula": "C₂H₆O₂",
    "composition": { "C": 2, "H": 6, "O": 2 },
    "molarMass": "62.07 g/mol",
    "category": "Diol",
    "summary": "Liquide sucré et toxique, utilisé comme antigel et monomère PET.",
    "occurrence": "Synthétique.",
    "applications": ["Liquide de refroidissement", "Polyesters"]
  },
  {
    "name": "Isocyanate de Méthyle (MIC)",
    "formula": "C₂H₃NO",
    "composition": { "C": 2, "H": 3, "N": 1, "O": 1 },
    "molarMass": "57.05 g/mol",
    "category": "Réactif hautement toxique",
    "summary": "Intermédiaire célèbre impliqué dans la catastrophe de Bhopal.",
    "occurrence": "Synthétique.",
    "applications": ["Pesticides (historique)"]
  },
  {
    "name": "Diisocyanate de Toluène (TDI)",
    "formula": "C₉H₆N₂O₂",
    "composition": { "C": 9, "H": 6, "N": 2, "O": 2 },
    "molarMass": "174.16 g/mol",
    "category": "Isocyanate",
    "summary": "Utilisé pour produire des mousses de polyuréthane flexibles.",
    "occurrence": "Synthétique.",
    "applications": ["Ameublement", "Isolation"]
  },
  {
    "name": "Chlorure de Vinyle",
    "formula": "C₂H₃Cl",
    "composition": { "C": 2, "H": 3, "Cl": 1 },
    "molarMass": "62.50 g/mol",
    "category": "Monomère",
    "summary": "Gaz précurseur du PVC (Polychlorure de vinyle).",
    "occurrence": "Synthétique.",
    "applications": ["Bâtiment", "Tuyauteries"]
  },
  {
    "name": "Styrène",
    "formula": "C₈H₈",
    "composition": { "C": 8, "H": 8 },
    "molarMass": "104.15 g/mol",
    "category": "Hydrocarbure aromatique",
    "summary": "Précurseur du polystyrène et de nombreux copolymères (ABS, SBR).",
    "occurrence": "Arôme de storax.",
    "applications": ["Emballages", "Jouets"]
  },
  {
    "name": "Iodure de Méthylmagnésium",
    "formula": "CH₃MgI",
    "composition": { "C": 1, "H": 3, "Mg": 1, "I": 1 },
    "molarMass": "166.27 g/mol",
    "category": "Réactif de Grignard",
    "summary": "Réactif organométallique classique pour l'addition nucléophile sur carbonyles.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "Bromure d'Éthylmagnésium",
    "formula": "C₂H₅MgBr",
    "composition": { "C": 2, "H": 5, "Mg": 1, "Br": 1 },
    "molarMass": "133.27 g/mol",
    "category": "Réactif de Grignard",
    "summary": "Agent d'éthylation puissant utilisé en solution dans l'éther.",
    "occurrence": "Synthétique.",
    "applications": ["Pharmacie"]
  },
  {
    "name": "Chlorure de Phénylmagnésium",
    "formula": "C₆H₅MgCl",
    "composition": { "C": 6, "H": 5, "Mg": 1, "Cl": 1 },
    "molarMass": "136.86 g/mol",
    "category": "Réactif de Grignard",
    "summary": "Source de phényle nucléophile utilisée pour synthétiser des alcools tertiaires.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie fine"]
  },
  {
    "name": "Bromure de Vinylmagnésium",
    "formula": "C₂H₃MgBr",
    "composition": { "C": 2, "H": 3, "Mg": 1, "Br": 1 },
    "molarMass": "131.25 g/mol",
    "category": "Réactif de Grignard",
    "summary": "Utilisé pour introduire des groupements vinyles dans des molécules organiques.",
    "occurrence": "Synthétique.",
    "applications": ["Fabrication de résines"]
  },
  {
    "name": "n-Butyllitium (n-BuLi)",
    "formula": "C₄H₉Li",
    "composition": { "C": 4, "H": 9, "Li": 1 },
    "molarMass": "64.06 g/mol",
    "category": "Organolithien",
    "summary": "Base extrêmement forte et nucléophile utilisé pour la métallation.",
    "occurrence": "Synthétique.",
    "applications": ["Polymérisation anionique", "Synthèse organique"]
  },
  {
    "name": "t-Butyllitium (t-BuLi)",
    "formula": "C₄H₉Li",
    "composition": { "C": 4, "H": 9, "Li": 1 },
    "molarMass": "64.06 g/mol",
    "category": "Organolithien",
    "summary": "Base encore plus puissante que le n-BuLi, extrêmement pyrophorique.",
    "occurrence": "Synthétique.",
    "applications": ["Échange halogène-métal"]
  },
  {
    "name": "LDA (Diisopropylamidure de lithium)",
    "formula": "C₆H₁₄LiN",
    "composition": { "C": 6, "H": 14, "Li": 1, "N": 1 },
    "molarMass": "107.12 g/mol",
    "category": "Base forte non-nucléophile",
    "summary": "Utilisé pour générer des énolates à partir de composés carbonylés encombrés.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie des énolates"]
  },
  {
    "name": "HMPA (Hexaméthylphosphoramide)",
    "formula": "C₆H₁₈N₃OP",
    "composition": { "C": 6, "H": 18, "N": 3, "O": 1, "P": 1 },
    "molarMass": "179.20 g/mol",
    "category": "Solvant aprotique dipolaire",
    "summary": "Solvant exceptionnel pour solvater les cations mais classé cancérigène.",
    "occurrence": "Synthétique.",
    "applications": ["Coordination", "Réactions délicates"]
  },
  {
    "name": "DMPU (1,3-Diméthyl-3,4,5,6-tétrahydro-2(1H)-pyrimidinone)",
    "formula": "C₆H₁₂N₂O",
    "composition": { "C": 6, "H": 12, "N": 2, "O": 1 },
    "molarMass": "128.17 g/mol",
    "category": "Solvant",
    "summary": "Alternative moins toxique au HMPA.",
    "occurrence": "Synthétique.",
    "applications": ["Substitut de solvant"]
  },
  {
    "name": "Limonène",
    "formula": "C₁₀H₁₆",
    "composition": { "C": 10, "H": 16 },
    "molarMass": "136.24 g/mol",
    "category": "Terpène",
    "summary": "Principal constituant de l'huile d'agrumes, utilisé en parfumerie et nettoyage.",
    "occurrence": "Citron, orange.",
    "applications": ["Solvant biodégradable", "Arômes"]
  },
  {
    "name": "Alpha-Pinène",
    "formula": "C₁₀H₁₆",
    "composition": { "C": 10, "H": 16 },
    "molarMass": "136.24 g/mol",
    "category": "Terpène",
    "summary": "Constituant majeur de la térébenthine.",
    "occurrence": "Pins, conifères.",
    "applications": ["Synthèse de parfums", "Industrie"]
  },
  {
    "name": "Bêta-Carotène",
    "formula": "C₄₀H₅₆",
    "composition": { "C": 40, "H": 56 },
    "molarMass": "536.87 g/mol",
    "category": "Terpénoïde / Pigment",
    "summary": "Précurseur de la vitamine A (rétinol) et antioxydant puissant.",
    "occurrence": "Carottes, citrouilles.",
    "applications": ["Compléments alimentaires"]
  },
  {
    "name": "Lycopène",
    "formula": "C₄₀H₅₆",
    "composition": { "C": 40, "H": 56 },
    "molarMass": "536.87 g/mol",
    "category": "Caroténoïde",
    "summary": "Hydrocarbure insaturé responsable de la couleur rouge des tomates.",
    "occurrence": "Tomates, pastèques.",
    "applications": ["Santé cardiovasculaire"]
  },
  {
    "name": "Squalène",
    "formula": "C₃₀H₅₀",
    "composition": { "C": 30, "H": 50 },
    "molarMass": "410.72 g/mol",
    "category": "Triterpène",
    "summary": "Intermédiaire clé dans la biosynthèse du cholestérol.",
    "occurrence": "Huile de foie de requin, olive.",
    "applications": ["Adjuvants de vaccins", "Cosmétiques"]
  },
  {
    "name": "Menthol",
    "formula": "C₁₀H₂₀O",
    "composition": { "C": 10, "H": 20, "O": 1 },
    "molarMass": "156.27 g/mol",
    "category": "Monoterpénoïde",
    "summary": "Produit un effet de fraîcheur par activation des récepteurs cutanés.",
    "occurrence": "Menthe.",
    "applications": ["Pharmacie", "Confiserie"]
  },
  {
    "name": "Camphre",
    "formula": "C₁₀H₁₆O",
    "composition": { "C": 10, "H": 16, "O": 1 },
    "molarMass": "152.23 g/mol",
    "category": "Terpénoïde",
    "summary": "Solide blanc à odeur forte utilisé comme plastifiant et baume.",
    "occurrence": "Cinnamomum camphora.",
    "applications": ["Celluloïd", "Médiations"]
  },
  {
    "name": "Chirale (L-DOPA)",
    "formula": "C₉H₁₁NO₄",
    "composition": { "C": 9, "H": 11, "N": 1, "O": 4 },
    "molarMass": "197.19 g/mol",
    "category": "Acide aminé / Médicament",
    "summary": "Précurseur de la dopamine utilisé pour traiter la maladie de Parkinson.",
    "occurrence": "Pois mascate.",
    "applications": ["Neurologie"]
  },
  {
    "name": "Sérotonine",
    "formula": "C₁₀H₁₂N₂O",
    "composition": { "C": 10, "H": 12, "N": 2, "O": 1 },
    "molarMass": "176.22 g/mol",
    "category": "Neurotransmetteur",
    "summary": "Régulateur de l'humeur, du sommeil et de l'appétit.",
    "occurrence": "Système nerveux central.",
    "applications": ["Neurosciences"]
  },
  {
    "name": "Amphétamine",
    "formula": "C₉H₁₃N",
    "composition": { "C": 9, "H": 13, "N": 1 },
    "molarMass": "135.21 g/mol",
    "category": "Phényléthylamine",
    "summary": "Puissant stimulant du système nerveux central.",
    "occurrence": "Synthétique.",
    "applications": ["Traitement TDAH", "Narcolepsie"]
  },
  {
    "name": "Estradiol",
    "formula": "C₁₈H₂₄O₂",
    "composition": { "C": 18, "H": 24, "O": 2 },
    "molarMass": "272.38 g/mol",
    "category": "Hormone Stéroïde",
    "summary": "Principale hormone sexuelle féminine chez l'humain.",
    "occurrence": "Ovaires.",
    "applications": ["Hormonothérapie"]
  },
  {
    "name": "Testostérone",
    "formula": "C₁₉H₂₈O₂",
    "composition": { "C": 19, "H": 28, "O": 2 },
    "molarMass": "288.42 g/mol",
    "category": "Androgène",
    "summary": "Principale hormone sexuelle mâle, clé pour le développement musculaire.",
    "occurrence": "Testicules, glandes surrénales.",
    "applications": ["Santé masculine"]
  },
  {
    "name": "Progestérone",
    "formula": "C₂₁H₃₀O₂",
    "composition": { "C": 21, "H": 30, "O": 2 },
    "molarMass": "314.46 g/mol",
    "category": "Progestagène",
    "summary": "Impliquée dans le cycle menstruel et la grossesse.",
    "occurrence": "Corps jaune.",
    "applications": ["Contraception"]
  },
  {
    "name": "Cortisol",
    "formula": "C₂₁H₃₀O₅",
    "composition": { "C": 21, "H": 30, "O": 5 },
    "molarMass": "362.46 g/mol",
    "category": "Glucocorticoïde",
    "summary": "L'hormone du stress, régule le métabolisme et l'inflammation.",
    "occurrence": "Glandes surrénales.",
    "applications": ["Immunosuppression"]
  },
  {
    "name": "Adrénaline (Épinéphrine)",
    "formula": "C₉H₁₃NO₃",
    "composition": { "C": 9, "H": 13, "N": 1, "O": 3 },
    "molarMass": "183.20 g/mol",
    "category": "Catécholamine",
    "summary": "Hormone de la réaction de lutte ou de fuite.",
    "occurrence": "Surrénales.",
    "applications": ["Choc anaphylactique"]
  },
  {
    "name": "Dopamine",
    "formula": "C₈H₁₁NO₂",
    "composition": { "C": 8, "H": 11, "N": 1, "O": 2 },
    "molarMass": "153.18 g/mol",
    "category": "Catécholamine",
    "summary": "Molécule du plaisir et de la récompense dans le cerveau.",
    "occurrence": "Cerveau.",
    "applications": ["Neurobiologie"]
  },
  {
    "name": "Mélatonine",
    "formula": "C₁₃H₁₆N₂O₂",
    "composition": { "C": 13, "H": 16, "N": 2, "O": 2 },
    "molarMass": "232.28 g/mol",
    "category": "Hormone du Sommeil",
    "summary": "Régule les rythmes circadiens veille-sommeil.",
    "occurrence": "Glande pinéale.",
    "applications": ["Aide au sommeil"]
  },
  {
    "name": "Ocytocine",
    "formula": "C₄₃H₆₆N₁₂O₁₂S₂",
    "composition": { "C": 43, "H": 66, "N": 12, "O": 12, "S": 2 },
    "molarMass": "1007.19 g/mol",
    "category": "Neuropeptide",
    "summary": "Hormone de l'attachement et de l'accouchement.",
    "occurrence": "Hypothalamus.",
    "applications": ["Obstétrique"]
  },
  {
    "name": "Vasopressine (ADH)",
    "formula": "C₄₆H₆₅N₁₅O₁₂S₂",
    "composition": { "C": 46, "H": 65, "N": 15, "O": 12, "S": 2 },
    "molarMass": "1084.23 g/mol",
    "category": "Hormone antidiurétique",
    "summary": "Régule la rétention d'eau par les reins.",
    "occurrence": "Neurohypophyse.",
    "applications": ["Traitement du diabète insipide"]
  },
  {
    "name": "Acide Gibbérellique (GA3)",
    "formula": "C₁₉H₂₂O₆",
    "composition": { "C": 19, "H": 22, "O": 6 },
    "molarMass": "346.37 g/mol",
    "category": "Phytohormone",
    "summary": "Hormone végétale stimulant la croissance et la germination.",
    "occurrence": "Plantes, champignons.",
    "applications": ["Horticulture"]
  },
  {
    "name": "Acide Abscissique (ABA)",
    "formula": "C₁₅H₂₀O₄",
    "composition": { "C": 15, "H": 20, "O": 4 },
    "molarMass": "264.32 g/mol",
    "category": "Hormone Végétale",
    "summary": "Impliquée dans la dormance des graines et la réponse à la sécheresse.",
    "occurrence": "Feuilles, fruits.",
    "applications": ["Botanique"]
  },
  {
    "name": "Zéatine",
    "formula": "C₁₀H₁₃N₅O",
    "composition": { "C": 10, "H": 13, "N": 5, "O": 1 },
    "molarMass": "219.24 g/mol",
    "category": "Cytokinine",
    "summary": "Hormone végétale favorisant la division cellulaire.",
    "occurrence": "Maïs immatur.",
    "applications": ["Culture in vitro"]
  },
  {
    "name": "Acide Indole-3-acétique (Auxine)",
    "formula": "C₁₀H₉NO₂",
    "composition": { "C": 10, "H": 9, "N": 1, "O": 2 },
    "molarMass": "175.18 g/mol",
    "category": "Phytohormone",
    "summary": "Hormone de croissance principale chez les plantes.",
    "occurrence": "Apex des plantes.",
    "applications": ["Bouturage"]
  },
  {
    "name": "Xylène (Mélange d'isomères)",
    "formula": "C₈H₁₀",
    "composition": { "C": 8, "H": 10 },
    "molarMass": "106.16 g/mol",
    "category": "Solvant Aromatique",
    "summary": "Utilisé massivement comme solvant et dans la production de PET.",
    "occurrence": "Goudron de houille.",
    "applications": ["Peintures", "Encres"]
  },
  {
    "name": "Tétrahydrofurane (THF)",
    "formula": "C₄H₈O",
    "composition": { "C": 4, "H": 8, "O": 1 },
    "molarMass": "72.11 g/mol",
    "category": "Éther cyclique",
    "summary": "Solvant polaire aprotique majeur en chimie organique.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de Grignard"]
  },
  {
    "name": "Diméthylsulfoxyde (DMSO)",
    "formula": "C₂H₆OS",
    "composition": { "C": 2, "H": 6, "O": 1, "S": 1 },
    "molarMass": "78.13 g/mol",
    "category": "Solvant",
    "summary": "Excellent solvant pour de nombreuses substances organiques et inorganiques.",
    "occurrence": "Synthétique.",
    "applications": ["Cryoconservation", "Synthèse"]
  },
  {
    "name": "Diméthylformamide (DMF)",
    "formula": "C₃H₇NO",
    "composition": { "C": 3, "H": 7, "N": 1, "O": 1 },
    "molarMass": "73.09 g/mol",
    "category": "Solvant Aprotique",
    "summary": "Utilisé pour la filature des fibres acryliques et en synthèse organique.",
    "occurrence": "Synthétique.",
    "applications": ["Pistolage", "Industrie du cuir"]
  },
  {
    "name": "Acétonitrile",
    "formula": "CH₃CN",
    "composition": { "C": 2, "H": 3, "N": 1 },
    "molarMass": "41.05 g/mol",
    "category": "Nitrile",
    "summary": "Solvant courant pour l'HPLC et la synthèse organique.",
    "occurrence": "Synthétique.",
    "applications": ["Analyse chimique"]
  },
  {
    "name": "Dichlorométhane (Chlorure de méthylène)",
    "formula": "CH₂Cl₂",
    "composition": { "C": 1, "H": 2, "Cl": 2 },
    "molarMass": "84.93 g/mol",
    "category": "Solvant halogéné",
    "summary": "Utilisé pour l'extraction de la caféine et le décapage de peintures.",
    "occurrence": "Synthétique.",
    "applications": ["Décapage", "Pharmacie"]
  },
  {
    "name": "TNT (2,4,6-Trinitrotoluène)",
    "formula": "C₇H₅N₃O₆",
    "composition": { "C": 7, "H": 5, "N": 3, "O": 6 },
    "molarMass": "227.13 g/mol",
    "category": "Explosif",
    "summary": "Explosif brisant standardisé, stable aux chocs.",
    "occurrence": "Synthétique.",
    "applications": ["Démolition", "Militaire"]
  },
  {
    "name": "Nitroglycérine",
    "formula": "C₃H₅N₃O₉",
    "composition": { "C": 3, "H": 5, "N": 3, "O": 9 },
    "molarMass": "227.09 g/mol",
    "category": "Explosif / Vasodilatateur",
    "summary": "Composant instable de la dynamite et médicament pour l'angine de poitrine.",
    "occurrence": "Synthétique.",
    "applications": ["Dynamite", "Cardiologie"]
  },
  {
    "name": "RDX (Cyclotriméthylènetrinitramine)",
    "formula": "C₃H₆N₆O₆",
    "composition": { "C": 3, "H": 6, "N": 6, "O": 6 },
    "molarMass": "222.12 g/mol",
    "category": "Explosif performant",
    "summary": "Constituant majeur du C-4.",
    "occurrence": "Synthétique.",
    "applications": ["Explosifs plastiques"]
  },
  {
    "name": "HMX (Octogène)",
    "formula": "C₄H₈N₈O₈",
    "composition": { "C": 4, "H": 8, "N": 8, "O": 8 },
    "molarMass": "296.16 g/mol",
    "category": "Explosif",
    "summary": "Plus puissant et plus stable que le RDX.",
    "occurrence": "Synthétique.",
    "applications": ["Charges creuses"]
  },
  {
    "name": "PETN (Pentaérythritol tétranitrate)",
    "formula": "C₅H₈N₄O₁₂",
    "composition": { "C": 5, "H": 8, "N": 4, "O": 12 },
    "molarMass": "316.14 g/mol",
    "category": "Explosif",
    "summary": "Un des explosifs les plus sensibles et les plus brisants.",
    "occurrence": "Synthétique.",
    "applications": ["Cordeaux détonants"]
  },
  {
    "name": "Gaz Sarin (GB)",
    "formula": "C₄H₁₀FO₂P",
    "composition": { "C": 4, "H": 10, "F": 1, "O": 2, "P": 1 },
    "molarMass": "140.09 g/mol",
    "category": "Agent Neurotoxique",
    "summary": "Organophosphoré létal, inhibiteur irréversible de l'acétylcholinestérase.",
    "occurrence": "Synthétique.",
    "applications": ["Arme chimique (interdite)"]
  },
  {
    "name": "Gaz VX",
    "formula": "C₁₁H₂₆NO₂PS",
    "composition": { "C": 11, "H": 26, "N": 1, "O": 2, "P": 1, "S": 1 },
    "molarMass": "267.37 g/mol",
    "category": "Agent innervant",
    "summary": "Le plus toxique des agents chimiques de guerre persistants.",
    "occurrence": "Synthétique.",
    "applications": ["Armement (restreint)"]
  },
  {
    "name": "Gaz Moutarde (Ypérite)",
    "formula": "C₄H₈Cl₂S",
    "composition": { "C": 4, "H": 8, "Cl": 2, "S": 1 },
    "molarMass": "159.08 g/mol",
    "category": "Agent vésicant",
    "summary": "Provoque de graves brûlures de la peau et des muqueuses.",
    "occurrence": "Synthétique.",
    "applications": ["Guerre chimique (historique)"]
  },
  {
    "name": "Acrylonitrile",
    "formula": "C₃H₃N",
    "composition": { "C": 3, "H": 3, "N": 1 },
    "molarMass": "53.06 g/mol",
    "category": "Monomère",
    "summary": "Utilisé pour fabriquer des plastiques ABS et des fibres acryliques.",
    "occurrence": "Synthétique.",
    "applications": ["Textile", "Ingénierie"]
  },
  {
    "name": "Acétate de Vinyle",
    "formula": "C₄H₆O₂",
    "composition": { "C": 4, "H": 6, "O": 2 },
    "molarMass": "86.09 g/mol",
    "category": "Monomère",
    "summary": "Précurseur de l'acétate de polyvinyle (colle blanche).",
    "occurrence": "Synthétique.",
    "applications": ["Adhésifs", "Peintures"]
  },
  {
    "name": "Méthacrylate de Méthyle (MMA)",
    "formula": "C₅H₈O₂",
    "composition": { "C": 5, "H": 8, "O": 2 },
    "molarMass": "100.12 g/mol",
    "category": "Monomère",
    "summary": "Utilisé pour la fabrication du Plexiglas (PMMA).",
    "occurrence": "Synthétique.",
    "applications": ["Verre acrylique"]
  },
  {
    "name": "Tartrazine (E102)",
    "formula": "C₁₆H₉N₄Na₃O₉S₂",
    "composition": { "C": 16, "H": 9, "N": 4, "Na": 3, "O": 9, "S": 2 },
    "molarMass": "534.36 g/mol",
    "category": "Colorant alimentaire",
    "summary": "Colorant jaune synthétique très répandu.",
    "occurrence": "Synthétique.",
    "applications": ["Confiserie", "Boissons"]
  },
  {
    "name": "Jaune Soleil FCF (E110)",
    "formula": "C₁₆H₁₀N₂Na₂O₇S₂",
    "composition": { "C": 16, "H": 10, "N": 2, "Na": 2, "O": 7, "S": 2 },
    "molarMass": "452.37 g/mol",
    "category": "Colorant",
    "summary": "Donne une couleur orange aux aliments transformés.",
    "occurrence": "Synthétique.",
    "applications": ["Pétrissage", "Sodas"]
  },
  {
    "name": "Rouge Allura AC (E129)",
    "formula": "C₁₈H₁₄N₂Na₂O₈S₂",
    "composition": { "C": 18, "H": 14, "N": 2, "Na": 2, "O": 8, "S": 2 },
    "molarMass": "496.42 g/mol",
    "category": "Colorant Azoïque",
    "summary": "Le colorant rouge le plus utilisé aux États-Unis.",
    "occurrence": "Synthétique.",
    "applications": ["Glaces", "Sirops"]
  },
  {
    "name": "Histamine",
    "formula": "C₅H₉N₃",
    "composition": { "C": 5, "H": 9, "N": 3 },
    "molarMass": "111.15 g/mol",
    "category": "Amine biogène",
    "summary": "Responsable des réactions allergiques et régulateur gastrique.",
    "occurrence": "Mastocytes.",
    "applications": ["Allergologie"]
  },
  {
    "name": "Putrescine",
    "formula": "C₄H₁₂N₂",
    "composition": { "C": 4, "H": 12, "N": 2 },
    "molarMass": "88.15 g/mol",
    "category": "Polyamine",
    "summary": "Responsable de l'odeur de chair en décomposition.",
    "occurrence": "Tissus morts.",
    "applications": ["Légale"]
  },
  {
    "name": "Cadavérine",
    "formula": "C₅H₁₄N₂",
    "composition": { "C": 5, "H": 14, "N": 2 },
    "molarMass": "102.18 g/mol",
    "category": "Polyamine",
    "summary": "Produit de décomposition des acides aminés, odeur fétide.",
    "occurrence": "Protéolyse.",
    "applications": ["Médecine légale"]
  },
  {
    "name": "Acide Malique",
    "formula": "C₄H₆O₅",
    "composition": { "C": 4, "H": 6, "O": 5 },
    "molarMass": "134.09 g/mol",
    "category": "Acide Organique",
    "summary": "Donne le goût acide aux pommes vertes.",
    "occurrence": "Pommes, raisins.",
    "applications": ["Additif alimentaire E296"]
  },
  {
    "name": "Acide Tartrique",
    "formula": "C₄H₆O₆",
    "composition": { "C": 4, "H": 6, "O": 6 },
    "molarMass": "150.09 g/mol",
    "category": "Acide",
    "summary": "Présent naturellement dans le raisin, utilisé comme acidifiant.",
    "occurrence": "Raisins.",
    "applications": ["Œnologie"]
  },
  {
    "name": "Thiamine (Vitamine B1)",
    "formula": "C₁₂H₁₇ClN₄OS",
    "composition": { "C": 12, "H": 17, "Cl": 1, "N": 4, "O": 1, "S": 1 },
    "molarMass": "300.81 g/mol",
    "category": "Vitamine",
    "summary": "Essentielle pour le métabolisme du glucose et des acides aminés.",
    "occurrence": "Céréales complètes, levure.",
    "applications": ["Santé du système nerveux"]
  },
  {
    "name": "Riboflavine (Vitamine B2)",
    "formula": "C₁₇H₂₀N₄O₆",
    "composition": { "C": 17, "H": 20, "N": 4, "O": 6 },
    "molarMass": "376.36 g/mol",
    "category": "Vitamine / Colorant",
    "summary": "Intervient dans la chaîne respiratoire et donne une couleur jaune fluorescente.",
    "occurrence": "Lait, œufs, légumes verts.",
    "applications": ["Compléments", "F101"]
  },
  {
    "name": "Niacine (Vitamine B3)",
    "formula": "C₆H₅NO₂",
    "composition": { "C": 6, "H": 5, "N": 1, "O": 2 },
    "molarMass": "123.11 g/mol",
    "category": "Vitamine",
    "summary": "Précurseur de NAD+/NADH, crucial pour le métabolisme énergétique.",
    "occurrence": "Viande, poisson.",
    "applications": ["Régulation du cholestérol"]
  },
  {
    "name": "Acide Pantothénique (Vitamine B5)",
    "formula": "C₉H₁₇NO₅",
    "composition": { "C": 9, "H": 17, "N": 1, "O": 5 },
    "molarMass": "219.23 g/mol",
    "category": "Vitamine",
    "summary": "Composant essentiel de la coenzyme A.",
    "occurrence": "Quasiment tous les aliments.",
    "applications": ["Synthèse d'acides gras"]
  },
  {
    "name": "Pyridoxine (Vitamine B6)",
    "formula": "C₈H₁₁NO₃",
    "composition": { "C": 8, "H": 11, "N": 1, "O": 3 },
    "molarMass": "169.18 g/mol",
    "category": "Vitamine",
    "summary": "Cofacteur pour le métabolisme des protéines et la synthèse d'HB.",
    "occurrence": "Pommes de terre, bananes.",
    "applications": ["Hématologie"]
  },
  {
    "name": "Biotine (Vitamine B8)",
    "formula": "C₁₀H₁₆N₂O₃S",
    "composition": { "C": 10, "H": 16, "N": 2, "O": 3, "S": 1 },
    "molarMass": "244.31 g/mol",
    "category": "Vitamine",
    "summary": "Cruciale pour le métabolisme des graisses et des sucres.",
    "occurrence": "Jaune d'œuf, noix.",
    "applications": ["Peau et cheveux"]
  },
  {
    "name": "Polytétrafluoroéthylène (PTFE/Téflon)",
    "formula": "(C₂F₄)ₙ",
    "composition": { "C": 2, "F": 4 },
    "molarMass": "100.02 g/mol (unité)",
    "category": "Polymère fluoré",
    "summary": "Matériau au coefficient de friction extrêmement bas, hydrophobe et oléophobe.",
    "occurrence": "Synthétique.",
    "applications": ["Ustensiles de cuisine", "Spatial"]
  },
  {
    "name": "Kevlar (Poly-para-phénylène téréphtalamide)",
    "formula": "(C₁₄H₁₀N₂O₂)ₙ",
    "composition": { "C": 14, "H": 10, "N": 2, "O": 2 },
    "molarMass": "238.24 g/mol (unité)",
    "category": "Polyamide aromatique",
    "summary": "Fibre ultrarésistante à la traction et à la chaleur.",
    "occurrence": "Synthétique.",
    "applications": ["Gilets pare-balles", "Aéronautique"]
  },
  {
    "name": "PEEK (Polyétheréthercétone)",
    "formula": "(C₁₉H₁₂O₃)ₙ",
    "composition": { "C": 19, "H": 12, "O": 3 },
    "molarMass": "288.30 g/mol (unité)",
    "category": "Thermoplastique haute performance",
    "summary": "Excellentes propriétés mécaniques et résistance chimique.",
    "occurrence": "Synthétique.",
    "applications": ["Implants médicaux", "Formule 1"]
  },
  {
    "name": "Iohexol",
    "formula": "C₁₉H₂₆I₃N₃O₉",
    "composition": { "C": 19, "H": 26, "I": 3, "N": 3, "O": 9 },
    "molarMass": "821.14 g/mol",
    "category": "Agent de contraste iodé",
    "summary": "Utilisé en radiographie et scanner pour visualiser les vaisseaux sanguins.",
    "occurrence": "Synthétique.",
    "applications": ["Angiographie", "Imagerie médicale"]
  },
  {
    "name": "Iopamidol",
    "formula": "C₁₇H₂₂I₃N₃O₈",
    "composition": { "C": 17, "H": 22, "I": 3, "N": 3, "O": 8 },
    "molarMass": "777.08 g/mol",
    "category": "Agent de contraste",
    "summary": "Composé non ionique utilisé pour la myélographie.",
    "occurrence": "Synthétique.",
    "applications": ["Urographie", "Scanner X"]
  },
  {
    "name": "Hexafluorure de Soufre (SF6)",
    "formula": "SF₆",
    "composition": { "S": 1, "F": 6 },
    "molarMass": "146.06 g/mol",
    "category": "Gaz inorganique",
    "summary": "Gaz diélectrique inerte, mais puissant gaz à effet de serre.",
    "occurrence": "Synthétique.",
    "applications": ["Isolation électrique", "Ophtalmologie"]
  },
  {
    "name": "Trifluorure d'Azote (NF3)",
    "formula": "NF₃",
    "composition": { "N": 1, "F": 3 },
    "molarMass": "71.00 g/mol",
    "category": "Gaz de spécialité",
    "summary": "Utilisé pour le nettoyage des chambres de plasma dans l'électronique.",
    "occurrence": "Synthétique.",
    "applications": ["Semi-conducteurs", "Écrans LCD"]
  },
  {
    "name": "Tétrafluorométhane (CF4)",
    "formula": "CF₄",
    "composition": { "C": 1, "F": 4 },
    "molarMass": "88.00 g/mol",
    "category": "Perfluorocarbure",
    "summary": "Fluide frigorigène et gravure par plasma.",
    "occurrence": "Éruptions volcaniques (traces).",
    "applications": ["Microfabrication"]
  },
  {
    "name": "Difluorure de Xénon",
    "formula": "XeF₂",
    "composition": { "Xe": 1, "F": 2 },
    "molarMass": "169.29 g/mol",
    "category": "Composé de gaz noble",
    "summary": "Agent fluorant puissant et sélectif.",
    "occurrence": "Synthétique.",
    "applications": ["Gravure du silicium", "Synthèse organique"]
  },
  {
    "name": "Tétrafluorure de Xénon",
    "formula": "XeF₄",
    "composition": { "Xe": 1, "F": 4 },
    "molarMass": "207.28 g/mol",
    "category": "Gaz noble stable",
    "summary": "Premier composé binaire stable d'un gaz noble découvert.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche fondamentale"]
  },
  {
    "name": "Hexafluorure de Xénon",
    "formula": "XeF₆",
    "composition": { "Xe": 1, "F": 6 },
    "molarMass": "245.28 g/mol",
    "category": "Agent fluorant",
    "summary": "Plus fort agent fluorant parmi les fluorures de xénon.",
    "occurrence": "Synthétique.",
    "applications": ["Fluoruration"]
  },
  {
    "name": "Boron Trifluorure (BF3)",
    "formula": "BF₃",
    "composition": { "B": 1, "F": 3 },
    "molarMass": "67.81 g/mol",
    "category": "Acide de Lewis",
    "summary": "Gaz corrosif utilisé comme catalyseur d'alkylation.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse d'estérification"]
  },
  {
    "name": "Sulfure de Diméthyle",
    "formula": "C₂H₆S",
    "composition": { "C": 2, "H": 6, "S": 1 },
    "molarMass": "62.13 g/mol",
    "category": "Organosulfuré",
    "summary": "Responsable de l'odeur caractéristique de la mer et de certains choux.",
    "occurrence": "Phytoplancton marin.",
    "applications": ["Arôme alimentaire", "Synthèse"]
  },
  {
    "name": "Curcumine",
    "formula": "C₂₁H₂₀O₆",
    "composition": { "C": 21, "H": 20, "O": 6 },
    "molarMass": "368.38 g/mol",
    "category": "Polyphénol",
    "summary": "Principal pigment du curcuma, connu pour ses propriétés antioxydantes.",
    "occurrence": "Curcuma longa.",
    "applications": ["Complément alimentaire", "Colorant E100"]
  },
  {
    "name": "Resvératrol",
    "formula": "C₁₄H₁₂O₃",
    "composition": { "C": 14, "H": 12, "O": 3 },
    "molarMass": "228.24 g/mol",
    "category": "Stilbénoïde",
    "summary": "Polyphénol présent dans la peau du raisin rouge, associé au 'paradoxe français'.",
    "occurrence": "Raisin, vin rouge, renouée du Japon.",
    "applications": ["Anti-âge", "Santé cardiovasculaire"]
  },
  {
    "name": "Quercétine",
    "formula": "C₁₅H₁₀O₇",
    "composition": { "C": 15, "H": 10, "O": 7 },
    "molarMass": "302.24 g/mol",
    "category": "Flavonoïde",
    "summary": "Antioxydant ubiquitaire chez les plantes, stabilisateur des mastocytes.",
    "occurrence": "Oignons, câpres, pommes.",
    "applications": ["Anti-inflammatoire"]
  },
  {
    "name": "Vancomycine",
    "formula": "C₆₆H₇₅Cl₂N₉O₂₄",
    "composition": { "C": 66, "H": 75, "Cl": 2, "N": 9, "O": 24 },
    "molarMass": "1449.25 g/mol",
    "category": "Antibiotique Glycopeptide",
    "summary": "Antibiotique de 'dernier recours' contre les bactéries Gram-positives résistantes.",
    "occurrence": "Amycolatopsis orientalis.",
    "applications": ["Infections à SARM"]
  },
  {
    "name": "Tétracycline",
    "formula": "C₂₂H₂₄N₂O₈",
    "composition": { "C": 22, "H": 24, "N": 2, "O": 8 },
    "molarMass": "444.43 g/mol",
    "category": "Antibiotique à large spectre",
    "summary": "Inhibiteur de la synthèse protéique bactérienne en se liant au ribosome 30S.",
    "occurrence": "Streptomyces.",
    "applications": ["Acné", "Maladie de Lyme"]
  },
  {
    "name": "Chloramphénicol",
    "formula": "C₁₁H₁₂Cl₂N₂O₅",
    "composition": { "C": 11, "H": 12, "Cl": 2, "N": 2, "O": 5 },
    "molarMass": "323.13 g/mol",
    "category": "Antibiotique",
    "summary": "Antibiotique efficace mais dont l'usage est limité par des risques d'anémie aplasique.",
    "occurrence": "Streptomyces venezuelae.",
    "applications": ["Ophtalmologie", "Fièvre typhoïde"]
  },
  {
    "name": "Méthotrexate",
    "formula": "C₂₀H₂₂N₈O₅",
    "composition": { "C": 20, "H": 22, "N": 8, "O": 5 },
    "molarMass": "454.44 g/mol",
    "category": "Antimétabolite / Chimiothérapie",
    "summary": "Antagoniste de l'acide folique utilisé pour le cancer et les maladies auto-immunes.",
    "occurrence": "Synthétique.",
    "applications": ["Polyarthrite rhumatoïde", "Leucémies"]
  },
  {
    "name": "Cyclophosphamide",
    "formula": "C₇H₁₅Cl₂N₂O₂P",
    "composition": { "C": 7, "H": 15, "Cl": 2, "N": 2, "O": 2, "P": 1 },
    "molarMass": "261.09 g/mol",
    "category": "Agent Alkylant",
    "summary": "Moutarde à l'azote utilisée comme puissant agent anticancéreux.",
    "occurrence": "Synthétique.",
    "applications": ["Chimiothérapie", "Lupus"]
  },
  {
    "name": "Fluorouracil (5-FU)",
    "formula": "C₄H₃FN₂O₂",
    "composition": { "C": 4, "H": 3, "F": 1, "N": 2, "O": 2 },
    "molarMass": "130.08 g/mol",
    "category": "Antimétabolite",
    "summary": "Analogue de l'uracile bloquant la synthèse d'ADN.",
    "occurrence": "Synthétique.",
    "applications": ["Cancer colorectal", "Dermatologie"]
  },
  {
    "name": "Ninhydrine",
    "formula": "C₉H₆O₄",
    "composition": { "C": 9, "H": 6, "O": 4 },
    "molarMass": "178.14 g/mol",
    "category": "Réactif Chimique",
    "summary": "Réactif pour détecter les acides aminés, virant au pourpre de Ruhemann.",
    "occurrence": "Synthétique.",
    "applications": ["Police scientifique (Empreintes)", "Biochimie"]
  },
  {
    "name": "Ferricyanure de Potassium",
    "formula": "K₃[Fe(CN)₆]",
    "composition": { "K": 3, "Fe": 1, "C": 6, "N": 6 },
    "molarMass": "329.24 g/mol",
    "category": "Complexe de Coordination",
    "summary": "Sel rouge vif utilisé en photographie et pour la détection du fer(II).",
    "occurrence": "Synthétique.",
    "applications": ["Cyanotypie", "Chimie analytique"]
  },
  {
    "name": "Ferrocyanure de Potassium",
    "formula": "K₄[Fe(CN)₆]",
    "composition": { "K": 4, "Fe": 1, "C": 6, "N": 6 },
    "molarMass": "368.35 g/mol",
    "category": "Complexe",
    "summary": "Utilisé comme anti-agglomérant dans le sel de table.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie alimentaire E536"]
  },
  {
    "name": "Nitroprussiate de Sodium",
    "formula": "Na₂[Fe(CN)₅NO]",
    "composition": { "Na": 2, "Fe": 1, "C": 5, "N": 6, "O": 1 },
    "molarMass": "261.92 g/mol (Anion)",
    "category": "Vasodilatateur",
    "summary": "Relâche puissamment les muscles lisses vasculaires en libérant du NO.",
    "occurrence": "Synthétique.",
    "applications": ["Urgences hypertensives"]
  },
  {
    "name": "Arsine",
    "formula": "AsH₃",
    "composition": { "As": 1, "H": 3 },
    "molarMass": "77.95 g/mol",
    "category": "Hydrure Métalloïde",
    "summary": "Gaz extrêmement toxique et inflammable.",
    "occurrence": "Synthétique.",
    "applications": ["Dopage des semi-conducteurs"]
  },
  {
    "name": "Phosphine",
    "formula": "PH₃",
    "composition": { "P": 1, "H": 3 },
    "molarMass": "33.99 g/mol",
    "category": "Hydrure",
    "summary": "Gaz à odeur de poisson pourri, utilisé comme fumigant.",
    "occurrence": "Décomposition anaérobie (traces).",
    "applications": ["Extermination de nuisibles"]
  },
  {
    "name": "Silane",
    "formula": "SiH₄",
    "composition": { "Si": 1, "H": 4 },
    "molarMass": "32.12 g/mol",
    "category": "Hydrure de Silicium",
    "summary": "Gaz pyrophorique utilisé pour le dépôt de silicium.",
    "occurrence": "Synthétique.",
    "applications": ["Fabrication de puces solaires"]
  },
  {
    "name": "Chlorure de Thionyle",
    "formula": "SOCl₂",
    "composition": { "S": 1, "O": 1, "Cl": 2 },
    "molarMass": "118.97 g/mol",
    "category": "Réactif de Chloration",
    "summary": "Réactif pour convertir les acides carboxyliques en chlorures d'acyle.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique", "Batteries Lithium"]
  },
  {
    "name": "Oxychlorure de Phosphore (POCl3)",
    "formula": "POCl₃",
    "composition": { "P": 1, "O": 1, "Cl": 3 },
    "molarMass": "153.33 g/mol",
    "category": "Réactif liquide",
    "summary": "Agent de chloration et intermédiaire pour les esters de phosphate.",
    "occurrence": "Synthétique.",
    "applications": ["Plastifiants", "Pesticides"]
  },
  {
    "name": "Tétraoxyde d'Osmium (OsO4)",
    "formula": "OsO₄",
    "composition": { "Os": 1, "O": 4 },
    "molarMass": "254.23 g/mol",
    "category": "Oxydant puissant",
    "summary": "Cristaux jaunes hautement toxiques pour les yeux, utilisés pour la dihydroxylation.",
    "occurrence": "Synthétique.",
    "applications": ["Microscopie électronique (fixateur)"]
  },
  {
    "name": "TEMPO",
    "formula": "C₉H₁₈NO",
    "composition": { "C": 9, "H": 18, "N": 1, "O": 1 },
    "molarMass": "156.25 g/mol",
    "category": "Radical stable",
    "summary": "Radical nitroxyle utilisé comme oxydant sélectif en synthèse organique.",
    "occurrence": "Synthétique.",
    "applications": ["Oxydation d'alcools", "RPE"]
  },
  {
    "name": "DPPH (2,2-Diphényl-1-picrylhydrazyle)",
    "formula": "C₁₈H₁₂N₅O₆",
    "composition": { "C": 18, "H": 12, "N": 5, "O": 6 },
    "molarMass": "394.32 g/mol",
    "category": "Radical libre stable",
    "summary": "Réactif standard pour mesurer l'activité antioxydante d'extraits végétaux.",
    "occurrence": "Synthétique.",
    "applications": ["Dosage d'antioxydants"]
  },
  {
    "name": "Acide Domoïque",
    "formula": "C₁₅H₂₁NO₆",
    "composition": { "C": 15, "H": 21, "N": 1, "O": 6 },
    "molarMass": "311.33 g/mol",
    "category": "Phycotoxine",
    "summary": "Neurotoxine produite par les diatomées, causant l'empoisonnement amnésique par les mollusques.",
    "occurrence": "Pseudo-nitzschia.",
    "applications": ["Toxicologie marine"]
  },
  {
    "name": "Acide Okadaïque",
    "formula": "C₄₄H₆₈O₁₃",
    "composition": { "C": 44, "H": 68, "O": 13 },
    "molarMass": "805.00 g/mol",
    "category": "Toxine",
    "summary": "Inhibiteur de phosphatase, responsable de l'empoisonnement diarrhéique.",
    "occurrence": "Dinoflagellés.",
    "applications": ["Recherche en signalisation"]
  },
  {
    "name": "Aconitine",
    "formula": "C₃₄H₄₇NO₁₁",
    "composition": { "C": 34, "H": 47, "N": 1, "O": 11 },
    "molarMass": "645.74 g/mol",
    "category": "Alcaloïde toxique",
    "summary": "Toxine extrêmement puissante de l'aconit, 'reine des poisons'.",
    "occurrence": "Aconitum napellus.",
    "applications": ["Aucune (Hautement létale)"]
  },
  {
    "name": "Physostigmine",
    "formula": "C₁₅H₂₁N₃O₂",
    "composition": { "C": 15, "H": 21, "N": 3, "O": 2 },
    "molarMass": "275.35 g/mol",
    "category": "Alcaloïde / Parasympathomimétique",
    "summary": "Inhibiteur de l'acétylcholinestérase utilisé pour traiter le glaucome.",
    "occurrence": "Fève du Calabar.",
    "applications": ["Antidote aux anticholinergiques"]
  },
  {
    "name": "Néostigmine",
    "formula": "C₁₂H₁₉N₂O₂",
    "composition": { "C": 12, "H": 19, "N": 2, "O": 2 },
    "molarMass": "223.30 g/mol (Anion)",
    "category": "Médicament",
    "summary": "Utilisé pour la myasthénie grave et pour inverser le blocage neuromusculaire.",
    "occurrence": "Synthétique.",
    "applications": ["Anesthésiologie"]
  },
  {
    "name": "Atropine",
    "formula": "C₁₇H₂₃NO₃",
    "composition": { "C": 17, "H": 23, "N": 1, "O": 3 },
    "molarMass": "289.37 g/mol",
    "category": "Anticholinergique",
    "summary": "Alcaloïde tropanique provoquant une dilatation des pupilles.",
    "occurrence": "Belladone (Atropa belladonna).",
    "applications": ["Ophtalmologie", "Antidote aux organophosphorés"]
  },
  {
    "name": "Scopolamine (Hyoscine)",
    "formula": "C₁₇H₂₁NO₄",
    "composition": { "C": 17, "H": 21, "N": 1, "O": 4 },
    "molarMass": "303.35 g/mol",
    "category": "Antimuscarinique",
    "summary": "Utilisée pour traiter le mal des transports et les nausées postopératoires.",
    "occurrence": "Plantes de la famille des Solanaceae.",
    "applications": ["Patchs anti-mal de mer"]
  },
  {
    "name": "HBTU",
    "formula": "C₁₁H₁₆F₆N₅OP",
    "composition": { "C": 11, "H": 16, "F": 1, "N": 5, "O": 1, "P": 1 },
    "molarMass": "379.24 g/mol",
    "category": "Agent de Couplage",
    "summary": "Agent courant pour la synthèse peptidique en phase solide.",
    "occurrence": "Synthétique.",
    "applications": ["Biochimie"]
  },
  {
    "name": "TBTU",
    "formula": "C₁₁H₁₆BF₄N₅O",
    "composition": { "C": 11, "H": 16, "B": 1, "F": 4, "N": 5, "O": 1 },
    "molarMass": "321.09 g/mol",
    "category": "Agent de Couplage",
    "summary": "Analogue du HBTU avec un contre-ion tétrafluoroborate.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse par micro-ondes"]
  },
  {
    "name": "BOP (Réactif de Castro)",
    "formula": "C₁₂H₂₂F₆N₆OP₂",
    "composition": { "C": 12, "H": 22, "F": 6, "N": 6, "O": 1, "P": 2 },
    "molarMass": "442.28 g/mol",
    "category": "Couplage Peptidique",
    "summary": "Réactif efficace mais libère du HMPA cancérigène.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie des peptides (historique)"]
  },
  {
    "name": "DMTMM",
    "formula": "C₁₀H₁₇ClN₄O₃",
    "composition": { "C": 10, "H": 17, "Cl": 1, "N": 4, "O": 3 },
    "molarMass": "276.72 g/mol",
    "category": "Réactif de Condensation",
    "summary": "Agent de couplage activé par le méthanol, idéal pour les glycosylations.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse d'oligosaccharides"]
  },
  {
    "name": "Chlorocholine (Chlorure de)",
    "formula": "C₅H₁₃Cl₂N",
    "composition": { "C": 5, "H": 13, "Cl": 2, "N": 1 },
    "molarMass": "158.07 g/mol",
    "category": "Régulateur de croissance",
    "summary": "Utilisé en agriculture pour raccourcir et solidifier les tiges de céréales.",
    "occurrence": "Synthétique.",
    "applications": ["Cultures céréalières"]
  },
  {
    "name": "Tétrathionate de Sodium",
    "formula": "Na₂S₄O₆",
    "composition": { "Na": 2, "S": 4, "O": 6 },
    "molarMass": "270.24 g/mol",
    "category": "Sel Inorganique",
    "summary": "Produit de l'oxydation de l'iode par le thiosulfate.",
    "occurrence": "Synthétique.",
    "applications": ["Iodométrie"]
  },
  {
    "name": "Ferrioxamine B",
    "formula": "C₂₅H₄₆FeN₆O₈",
    "composition": { "C": 25, "H": 46, "Fe": 1, "N": 6, "O": 8 },
    "molarMass": "614.51 g/mol",
    "category": "Sidérophone",
    "summary": "Chélateur naturel de fer produit par les bactéries pour l'assimilation du fer.",
    "occurrence": "Streptomyces pilosus.",
    "applications": ["Traitement de l'hémochromatose"]
  },
  {
    "name": "Enterobactine",
    "formula": "C₃₀H₂₇N₃O₁₅",
    "composition": { "C": 30, "H": 27, "N": 3, "O": 15 },
    "molarMass": "669.55 g/mol",
    "category": "Sidérophore",
    "summary": "Un des chélateurs de fer(III) les plus puissants connus.",
    "occurrence": "Escherichia coli.",
    "applications": ["Microbiologie"]
  },
  {
    "name": "Chlorure de Cholestéryl",
    "formula": "C₂₇H₄₅Cl",
    "composition": { "C": 27, "H": 45, "Cl": 1 },
    "molarMass": "405.10 g/mol",
    "category": "Stéroïde",
    "summary": "Utilisé pour la fabrication de cristaux liquides cholestériques.",
    "occurrence": "Synthétique.",
    "applications": ["Affichages thermochromiques"]
  },
  {
    "name": "Olvanil",
    "formula": "C₂₆H₄₃NO₃",
    "composition": { "C": 26, "H": 43, "N": 1, "O": 3 },
    "molarMass": "417.62 g/mol",
    "category": "Analogue de la Capsaïcine",
    "summary": "Agoniste sélectif des récepteurs vanilloïdes sans l'effet de brûlure.",
    "occurrence": "Synthétique.",
    "applications": ["Antalgique expérimental"]
  },
  {
    "name": "Triphénylphosphine (PPh3)",
    "formula": "C₁₈H₁₅P",
    "composition": { "C": 18, "H": 15, "P": 1 },
    "molarMass": "262.29 g/mol",
    "category": "Organophosphoré / Ligand",
    "summary": "Ligand ubiquitaire en catalyse et réactif pour la réaction de Wittig.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse de Wilkinson", "Réduction d'ozonides"]
  },
  {
    "name": "Oxyde de Triphénylphosphine (Ph3PO)",
    "formula": "C₁₈H₁₅OP",
    "composition": { "C": 18, "H": 15, "O": 1, "P": 1 },
    "molarMass": "278.29 g/mol",
    "category": "Sous-produit / Additif",
    "summary": "Produit thermodynamiquement stable issu de nombreuses réactions impliquant la PPh3.",
    "occurrence": "Synthétique.",
    "applications": ["Cristallisation", "Catalyse"]
  },
  {
    "name": "L-Sélénométhionine",
    "formula": "C₅H₁₁NO₂Se",
    "composition": { "C": 5, "H": 11, "N": 1, "O": 2, "Se": 1 },
    "molarMass": "196.11 g/mol",
    "category": "Acide aminé / Sélénié",
    "summary": "Source majeure de sélénium organique dans l'alimentation.",
    "occurrence": "Céréales, soja.",
    "applications": ["Nutrition", "Crystallographie aux rayons X"]
  },
  {
    "name": "Sélénocystéine",
    "formula": "C₃H₇NO₂Se",
    "composition": { "C": 3, "H": 7, "N": 1, "O": 2, "Se": 1 },
    "molarMass": "168.05 g/mol",
    "category": "21e Acide Aminé",
    "summary": "Incorporée directement dans les sélénoprotéines via un codon STOP spécifique.",
    "occurrence": "Protéines cellulaires.",
    "applications": ["Biochimie redox"]
  },
  {
    "name": "Indigo",
    "formula": "C₁₆H₁₀N₂O₂",
    "composition": { "C": 16, "H": 10, "N": 2, "O": 2 },
    "molarMass": "262.26 g/mol",
    "category": "Colorant de cuve",
    "summary": "Pigment bleu historique utilisé pour teindre les Jeans.",
    "occurrence": "Indigofera tinctoria.",
    "applications": ["Textile"]
  },
  {
    "name": "Alizarine",
    "formula": "C₁₄H₈O₄",
    "composition": { "C": 14, "H": 8, "O": 4 },
    "molarMass": "240.21 g/mol",
    "category": "Pigment Anthraquinonique",
    "summary": "Colorant rouge extrait autrefois de la garance.",
    "occurrence": "Rubia tinctorum.",
    "applications": ["Beaux-arts", "Histopathologie"]
  },
  {
    "name": "Trioxanne",
    "formula": "C₃H₆O₃",
    "composition": { "C": 3, "H": 6, "O": 3 },
    "molarMass": "90.08 g/mol",
    "category": "Cyclique",
    "summary": "Trimère cyclique du formaldéhyde, utilisé comme combustible solide.",
    "occurrence": "Synthétique.",
    "applications": ["Chauffage de rations", "Précurseur POM"]
  },
  {
    "name": "Méthanol (Espace)",
    "formula": "CH₃OH",
    "composition": { "C": 1, "H": 4, "O": 1 },
    "molarMass": "32.04 g/mol",
    "category": "Molécule Interstellaire",
    "summary": "Détecté dans les masers astronomiques et les nuages moléculaires géants.",
    "occurrence": "Milieu interstellaire.",
    "applications": ["Astrophysique"]
  },
  {
    "name": "Formaldéhyde (Cométaire)",
    "formula": "CH₂O",
    "composition": { "C": 1, "H": 2, "O": 1 },
    "molarMass": "30.03 g/mol",
    "category": "Gaz Astrochimique",
    "summary": "Composant organique simple observé dans les comètes comme 67P.",
    "occurrence": "Comètes.",
    "applications": ["Étude des origines de la vie"]
  },
  {
    "name": "Acide Cyanhydrique (Interstellaire)",
    "formula": "HCN",
    "composition": { "H": 1, "C": 1, "N": 1 },
    "molarMass": "27.03 g/mol",
    "category": "Nitrile",
    "summary": "Abondant dans l'espace, précurseur potentiel des acides aminés prébiotiques.",
    "occurrence": "Nébuleuses.",
    "applications": ["Chimie prébiotique"]
  },
  {
    "name": "Cyanure d'Argent",
    "formula": "AgCN",
    "composition": { "Ag": 1, "C": 1, "N": 1 },
    "molarMass": "133.89 g/mol",
    "category": "Sel Inorganique",
    "summary": "Précipité blanc utilisé dans la galvanoplastie de l'argent.",
    "occurrence": "Synthétique.",
    "applications": ["Argenture"]
  },
  {
    "name": "Nitrate d'Argent",
    "formula": "AgNO₃",
    "composition": { "Ag": 1, "N": 1, "O": 3 },
    "molarMass": "169.87 g/mol",
    "category": "Réactif",
    "summary": "Pierre infernale, agent caustique et précurseur des halogénures d'argent.",
    "occurrence": "Synthétique.",
    "applications": ["Photographie", "Médecine (Verrrues)"]
  },
  {
    "name": "Fluorure de Krypton (KrF2)",
    "formula": "KrF₂",
    "composition": { "Kr": 1, "F": 2 },
    "molarMass": "121.79 g/mol",
    "category": "Composé de gaz noble",
    "summary": "Agent fluorant encore plus puissant que le XeF2, stable uniquement à basse température.",
    "occurrence": "Synthétique.",
    "applications": ["Oxydant de puissance extrême"]
  },
  {
    "name": "Tétra-n-butylammonium Fluorure (TBAF)",
    "formula": "C₁₆H₃₆FN",
    "composition": { "C": 16, "H": 36, "F": 1, "N": 1 },
    "molarMass": "261.46 g/mol",
    "category": "Source de Fluorure",
    "summary": "Réactif soluble en milieu organique pour la déprotection des groupes silylés (TBS, TMS).",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique fine"]
  },
  {
    "name": "Tris(benzyltriazolylméthyl)amine (TBTA)",
    "formula": "C₃₀H₃₀N₁₀",
    "composition": { "C": 30, "H": 30, "N": 10 },
    "molarMass": "530.63 g/mol",
    "category": "Ligand pour Click Chemistry",
    "summary": "Stabilisé le cuivre(I) pour accélérer la cycloaddition azoture-alcyne.",
    "occurrence": "Synthétique.",
    "applications": ["Bioconjugaison"]
  },
  {
    "name": "Tris(3-hydroxypropyltriazolylméthyl)amine (THPTA)",
    "formula": "C₁₈H₃₀N₁₀O₃",
    "composition": { "C": 18, "H": 30, "N": 10, "O": 3 },
    "molarMass": "434.50 g/mol",
    "category": "Ligand hydrosoluble",
    "summary": "Alternative au TBTA pour les réactions Click en milieu aqueux/cellulaire.",
    "occurrence": "Synthétique.",
    "applications": ["Marquage de protéines"]
  },
  {
    "name": "N-Hydroxysuccinimide (NHS)",
    "formula": "C₄H₅NO₃",
    "composition": { "C": 4, "H": 5, "N": 1, "O": 3 },
    "molarMass": "115.09 g/mol",
    "category": "Réactif d'activation",
    "summary": "Utilisé pour préparer des esters actifs pour le couplage d'amines.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de biopuces", "Marquage fluorescent"]
  },
  {
    "name": "EDC (1-Éthyl-3-(3-diméthylaminopropyl)carbodiimide)",
    "formula": "C₈H₁₇N₃",
    "composition": { "C": 8, "H": 17, "N": 3 },
    "molarMass": "155.24 g/mol (Base)",
    "category": "Agent de couplage",
    "summary": "Carbodiimide hydrosoluble pour la formation de liaisons amide.",
    "occurrence": "Synthétique.",
    "applications": ["Biotechnologie"]
  },
  {
    "name": "Sulfo-NHS",
    "formula": "C₄H₄NNaO₆S",
    "composition": { "C": 4, "H": 4, "N": 1, "Na": 1, "O": 6, "S": 1 },
    "molarMass": "217.13 g/mol",
    "category": "Réactif d'activation hydrosoluble",
    "summary": " NHS sulfoné pour des réactions de couplage ne nécessitant pas de solvant organique.",
    "occurrence": "Synthétique.",
    "applications": ["Immunohistochimie"]
  },
  {
    "name": "Catalyseur de Grubbs (1ère Gén.)",
    "formula": "C₄₃H₇₂Cl₂P₂Ru",
    "composition": { "C": 43, "H": 72, "Cl": 2, "P": 2, "Ru": 1 },
    "molarMass": "822.96 g/mol",
    "category": "Catalyseur de Métathèse",
    "summary": "Complexe de ruthénium majeur pour la métathèse des oléfines.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de polymères", "Chimie fine"]
  },
  {
    "name": "Catalyseur de Grubbs (2ème Gén.)",
    "formula": "C₄₆H₆₅Cl₂N₂PRu",
    "composition": { "C": 46, "H": 65, "Cl": 2, "N": 2, "P": 1, "Ru": 1 },
    "molarMass": "848.97 g/mol",
    "category": "Catalyseur",
    "summary": "Plus stable et plus actif que la première génération grâce au ligand NHC.",
    "occurrence": "Synthétique.",
    "applications": ["Métathèse fermante de cycle"]
  },
  {
    "name": "Pd(PPh3)4 (Trakis)",
    "formula": "C₇₂H₆₀P₄Pd",
    "composition": { "C": 72, "H": 60, "P": 4, "Pd": 1 },
    "molarMass": "1155.56 g/mol",
    "category": "Catalyseur au Palladium",
    "summary": "Catalyseur de référence pour les couplages de Suzuki, Heck et Stille.",
    "occurrence": "Synthétique.",
    "applications": ["Couplage carbone-carbone"]
  },
  {
    "name": "PdCl2(dppf)",
    "formula": "C₃₄H₂₈Cl₂FeP₂Pd",
    "composition": { "C": 34, "H": 28, "Cl": 2, "Fe": 1, "P": 2, "Pd": 1 },
    "molarMass": "731.70 g/mol",
    "category": "Catalyseur",
    "summary": "Utilisé pour les couplages croisés impliquant des borates encombrés.",
    "occurrence": "Synthétique.",
    "applications": ["Pharmacie"]
  },
  {
    "name": "BINAP",
    "formula": "C₄₄H₃₂P₂",
    "composition": { "C": 44, "H": 32, "P": 2 },
    "molarMass": "622.67 g/mol",
    "category": "Ligand Chiral",
    "summary": "Ligand diphosphine atroposisomérique pour l'hydrogénation asymétrique.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse chirale"]
  },
  {
    "name": "XPhos",
    "formula": "C₃₃H₄₇P",
    "composition": { "C": 33, "H": 47, "P": 1 },
    "molarMass": "474.70 g/mol",
    "category": "Ligand de Buchwald",
    "summary": "Ligand phosphine encombré pour les couplages C-N et C-O difficiles.",
    "occurrence": "Synthétique.",
    "applications": ["Amination de Buchwald-Hartwig"]
  },
  {
    "name": "Ambrette (Musc)",
    "formula": "C₁₂H₁₆N₂O₅",
    "composition": { "C": 12, "H": 16, "N": 2, "O": 5 },
    "molarMass": "268.27 g/mol",
    "category": "Fragrance",
    "summary": "Composé nitré à odeur de musc très prisé en parfumerie fine.",
    "occurrence": "Synthétique.",
    "applications": ["Parfums"]
  },
  {
    "name": "Vanilline",
    "formula": "C₈H₈O₃",
    "composition": { "C": 8, "H": 8, "O": 3 },
    "molarMass": "152.15 g/mol",
    "category": "Aldéhyde Aromatique",
    "summary": "Composant principal de l'arôme de vanille.",
    "occurrence": "Gousse de vanille.",
    "applications": ["Alimentation", "Parfumerie"]
  },
  {
    "name": "Colchicine",
    "formula": "C₂₂H₂₅NO₆",
    "composition": { "C": 22, "H": 25, "N": 1, "O": 6 },
    "molarMass": "399.44 g/mol",
    "category": "Alcaloïde / Médicament",
    "summary": "Utilisé pour traiter la goutte, bloque la polymérisation de la tubuline.",
    "occurrence": "Colchique d'automne.",
    "applications": ["Rhumatologie"]
  },
  {
    "name": "EDTA (Acide éthylènediaminetétraacétique)",
    "formula": "C₁₀H₁₆N₂O₈",
    "composition": { "C": 10, "H": 16, "N": 2, "O": 8 },
    "molarMass": "292.24 g/mol",
    "category": "Agent Chélatant",
    "summary": "Chélateur hexadenté puissant pour les métaux divalents.",
    "occurrence": "Synthétique.",
    "applications": ["Décontamination", "Conserve alimentaire"]
  },
  {
    "name": "DOTA",
    "formula": "C₁₆H₂₈N₄O₈",
    "composition": { "C": 16, "H": 28, "N": 4, "O": 8 },
    "molarMass": "404.42 g/mol",
    "category": "Chélateur macrocyclique",
    "summary": "Chélateur extrêmement stable pour les lanthanides et les radio-isotopes.",
    "occurrence": "Synthétique.",
    "applications": ["Radiothérapie ciblée"]
  },
  {
    "name": "Deferoxamine",
    "formula": "C₂₅H₄₈N₆O₈",
    "composition": { "C": 25, "H": 48, "N": 6, "O": 8 },
    "molarMass": "560.68 g/mol",
    "category": "Médicament / Sidérophore",
    "summary": "Chélateur de fer utilisé pour traiter les surcharges en fer chroniques.",
    "occurrence": "Streptomyces pilosus.",
    "applications": ["Toxicologie"]
  },
  {
    "name": "Plomb Tétraéthyle",
    "formula": "C₈H₂₀Pb",
    "composition": { "C": 8, "H": 20, "Pb": 1 },
    "molarMass": "323.44 g/mol",
    "category": "Organique / Toxique",
    "summary": "Additif antidétonant historique pour l'essence, responsable d'une pollution massive au plomb.",
    "occurrence": "Synthétique.",
    "applications": ["Carburants aviation (AVGAS)"]
  },
  {
    "name": "Hémoglobine (fragment Hème B)",
    "formula": "C₃₄H₃₂FeN₄O₄",
    "composition": { "C": 34, "H": 32, "Fe": 1, "N": 4, "O": 4 },
    "molarMass": "616.48 g/mol",
    "category": "Protoporphyrine",
    "summary": "Groupe prosthétique fixant l'oxygène dans le sang.",
    "occurrence": "Globules rouges.",
    "applications": ["Biologie"]
  },
  {
    "name": "Bilirubine",
    "formula": "C₃₃H₃₆N₄O₆",
    "composition": { "C": 33, "H": 36, "N": 4, "O": 6 },
    "molarMass": "584.66 g/mol",
    "category": "Pigment biliaire",
    "summary": "Produit de dégradation de l'hème, responsable de l'ictère (jaunisse).",
    "occurrence": "Bile.",
    "applications": ["Diagnostic médical"]
  },
  {
    "name": "Biliverdine",
    "formula": "C₃₃H₃₄N₄O₆",
    "composition": { "C": 33, "H": 34, "N": 4, "O": 6 },
    "molarMass": "582.65 g/mol",
    "category": "Pigment vert",
    "summary": "Intermédiaire entre l'hème et la bilirubine.",
    "occurrence": "Hématomes (couleur verte).",
    "applications": ["Physiologie"]
  },
  {
    "name": "Uréthane (Carbamate d'éthyle)",
    "formula": "C₃H₇NO₂",
    "composition": { "C": 3, "H": 7, "N": 1, "O": 2 },
    "molarMass": "89.09 g/mol",
    "category": "Carbamate",
    "summary": "Composé autrefois utilisé comme anesthésique, aujourd'hui reconnu cancérigène.",
    "occurrence": "Fermentations (vins, spiritueux).",
    "applications": ["Recherche animale"]
  },
  {
    "name": "Chlorure de Gallium (Inhabité)",
    "formula": "GaCl₃",
    "composition": { "Ga": 1, "Cl": 3 },
    "molarMass": "176.08 g/mol",
    "category": "Acide de Lewis",
    "summary": "Solide blanc fumant, utilisé pour synthétiser des complexes de gallium.",
    "occurrence": "Synthétique.",
    "applications": ["Imagerie (isotopes)", "Catalyse"]
  },
  {
    "name": "Triacontanol",
    "formula": "C₃₀H₆₂O",
    "composition": { "C": 30, "H": 62, "O": 1 },
    "molarMass": "438.81 g/mol",
    "category": "Alcool gras",
    "summary": "Stimulant de croissance végétale puissant et naturel.",
    "occurrence": "Cire d'abeille, luzerne.",
    "applications": ["Agriculture"]
  },
  {
    "name": "Acide Fluorosulfurique",
    "formula": "FSO₃H",
    "composition": { "F": 1, "S": 1, "O": 3, "H": 1 },
    "molarMass": "100.07 g/mol",
    "category": "Superacide",
    "summary": "L'un des acides de Brønsted les plus puissants disponibles commercialement.",
    "occurrence": "Synthétique.",
    "applications": ["Isomérisation d'alcanes"]
  },
  {
    "name": "Acide Magique",
    "formula": "FSO₃H-SbF₅",
    "composition": { "F": 6, "S": 1, "O": 3, "H": 1, "Sb": 1 },
    "molarMass": "316.82 g/mol",
    "category": "Superacide de Olah",
    "summary": "Mélange capable de protoner les hydrocarbures saturés, valant un prix Nobel.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie des carbocations"]
  },
  {
    "name": "Nitrate d'Uranyle",
    "formula": "UO₂(NO₃)₂",
    "composition": { "U": 1, "O": 8, "N": 2 },
    "molarMass": "394.04 g/mol",
    "category": "Sel d'uranium",
    "summary": "Sel jaune citron fluorescent, intermédiaire clé du cycle du combustible nucléaire.",
    "occurrence": "Synthétique.",
    "applications": ["Traitement du combustible", "Photographie (historique)"]
  },
  {
    "name": "Acétate d'Uranyle",
    "formula": "UO₂(CH₃COO)₂",
    "composition": { "U": 1, "O": 6, "C": 4, "H": 6 },
    "molarMass": "388.12 g/mol",
    "category": "Réactif",
    "summary": "Utilisé comme colorant négatif en microscopie électronique à transmission.",
    "occurrence": "Synthétique.",
    "applications": ["Biologie structurale"]
  },
  {
    "name": "Trioxyde de Xénon (XeO3)",
    "formula": "XeO₃",
    "composition": { "Xe": 1, "O": 3 },
    "molarMass": "179.29 g/mol",
    "category": "Oxyde de gaz noble",
    "summary": "Solide cristallin hautement explosif et puissant oxydant.",
    "occurrence": "Synthétique.",
    "applications": ["Aucune (Dangereux)"]
  },
  {
    "name": "Perxénate de Sodium",
    "formula": "Na₄XeO₆",
    "composition": { "Na": 4, "Xe": 1, "O": 6 },
    "molarMass": "311.23 g/mol",
    "category": "Sel de gaz noble",
    "summary": "Oxydant extrêmement puissant capable d'oxyder le Mn(II) en Mn(VII).",
    "occurrence": "Synthétique.",
    "applications": ["Chimie analytique de pointe"]
  },
  {
    "name": "Fluorodésoxyglucose (18F-FDG)",
    "formula": "C₆H₁₁¹⁸FO₅",
    "composition": { "C": 6, "H": 11, "F": 1, "O": 5 },
    "molarMass": "181.15 g/mol",
    "category": "Radiopharmaceutique",
    "summary": "Analogue du glucose utilisé en TEP pour détecter les tumeurs cancéreuses.",
    "occurrence": "Synthétique.",
    "applications": ["Oncologie", "Neurologie"]
  },
  {
    "name": "Sotolon",
    "formula": "C₆H₈O₃",
    "composition": { "C": 6, "H": 8, "O": 3 },
    "molarMass": "128.13 g/mol",
    "category": "Lactone / Arôme",
    "summary": "Molécule à l'odeur puissante de foin coupé ou de sirop d'érable.",
    "occurrence": "Fenugrec, Vin de paille.",
    "applications": ["Arômes alimentaires"]
  },
  {
    "name": "Furaneol",
    "formula": "C₆H₈O₃",
    "composition": { "C": 6, "H": 8, "O": 3 },
    "molarMass": "128.13 g/mol",
    "category": "Arôme de Fraise",
    "summary": "Donne l'odeur sucrée et caramélisée caractéristique des fraises mûres.",
    "occurrence": "Ananas, Fraise.",
    "applications": ["Confiserie"]
  },
  {
    "name": "Cyclohexylacétate d'éthyle",
    "formula": "C₁₀H₁₈O₂",
    "composition": { "C": 10, "H": 18, "O": 2 },
    "molarMass": "170.25 g/mol",
    "category": "Ester / Fragrance",
    "summary": "Utilisé pour ses notes fruitées et herbacées en parfumerie.",
    "occurrence": "Synthétique.",
    "applications": ["Cosmétique"]
  },
  {
    "name": "Borax (Tétraborate de sodium)",
    "formula": "Na₂B₄O₇·10H₂O",
    "composition": { "Na": 2, "B": 4, "O": 17, "H": 20 },
    "molarMass": "381.37 g/mol",
    "category": "Minéral / Détergent",
    "summary": "Utilisé comme fondant, insecticide et composant de détergents.",
    "occurrence": "Dépôts évaporitiques (lac Borax).",
    "applications": ["Métallurgie", "Nettoyage"]
  },
  {
    "name": "Acide Borique",
    "formula": "H₃BO₃",
    "composition": { "H": 3, "B": 1, "O": 3 },
    "molarMass": "61.83 g/mol",
    "category": "Antiseptique",
    "summary": "Acide faible utilisé comme insecticide et pour le contrôle des neutrons dans le nucléaire.",
    "occurrence": "Sources thermales.",
    "applications": ["Pharmacie", "Industrie nucléaire"]
  },
  {
    "name": "Perborate de Sodium",
    "formula": "NaBO₃",
    "composition": { "Na": 1, "B": 1, "O": 3 },
    "molarMass": "81.80 g/mol",
    "category": "Agent de blanchiment",
    "summary": "Source de peroxyde d'hydrogène utilisée dans les poudres à laver.",
    "occurrence": "Synthétique.",
    "applications": ["Lessives industrielles"]
  },
  {
    "name": "L-Thréonine",
    "formula": "C₄H₉NO₃",
    "composition": { "C": 4, "H": 9, "N": 1, "O": 3 },
    "molarMass": "119.12 g/mol",
    "category": "Acide Aminé Essentiel",
    "summary": "Précurseur de la glycine et composant du collagène.",
    "occurrence": "Produits laitiers, viande.",
    "applications": ["Nutrition animale"]
  },
  {
    "name": "L-Valine",
    "formula": "C₅H₁₁NO₂",
    "composition": { "C": 5, "H": 11, "N": 1, "O": 2 },
    "molarMass": "117.15 g/mol",
    "category": "Acide Aminé à chaîne ramifiée (BCAA)",
    "summary": "Crucial pour la croissance musculaire et la réparation tissulaire.",
    "occurrence": "Céréales, légumineuses.",
    "applications": ["Bodybuilding"]
  },
  {
    "name": "L-Isoleucine",
    "formula": "C₆H₁₃NO₂",
    "composition": { "C": 6, "H": 13, "N": 1, "O": 2 },
    "molarMass": "131.18 g/mol",
    "category": "Acide Aminé",
    "summary": "Impliqué dans la régulation de la glycémie et la formation d'hémoglobine.",
    "occurrence": "Noix, graines.",
    "applications": ["Suppléments sportifs"]
  },
  {
    "name": "L-Leucine",
    "formula": "C₆H₁₃NO₂",
    "composition": { "C": 6, "H": 13, "N": 1, "O": 2 },
    "molarMass": "131.18 g/mol",
    "category": "BCAA",
    "summary": "Le plus puissant stimulateur de la synthèse protéique musculaire.",
    "occurrence": "Soja, maïs.",
    "applications": ["Récupération musculaire"]
  },
  {
    "name": "L-Lysine",
    "formula": "C₆H₁₄N₂O₂",
    "composition": { "C": 6, "H": 14, "N": 2, "O": 2 },
    "molarMass": "146.19 g/mol",
    "category": "Acide Aminé Essentiel",
    "summary": "Indispensable à la fixation du calcium et à la production d'anticorps.",
    "occurrence": "Lentilles, viande rouge.",
    "applications": ["Traitement de l'herpès"]
  },
  {
    "name": "Nitrate de Thorium",
    "formula": "Th(NO₃)₄",
    "composition": { "Th": 1, "N": 4, "O": 12 },
    "molarMass": "480.06 g/mol",
    "category": "Sel de Thorium",
    "summary": "Utilisé autrefois pour les manchons à incandescence des lampes à gaz.",
    "occurrence": "Monazite.",
    "applications": ["Éclairage (historique)", "Catalyse"]
  },
  {
    "name": "Sulfure d'Hydrogène (H2S)",
    "formula": "H₂S",
    "composition": { "H": 2, "S": 1 },
    "molarMass": "34.08 g/mol",
    "category": "Gaz Toxique",
    "summary": "Gaz à odeur d'œuf pourri, produit par la décomposition bactérienne.",
    "occurrence": "Gaz naturel, Volcans.",
    "applications": ["Synthèse d'organosulfurés"]
  },
  {
    "name": "Dioxyde de Soufre (SO2)",
    "formula": "SO₂",
    "composition": { "S": 1, "O": 2 },
    "molarMass": "64.06 g/mol",
    "category": "Oxydant / Réducteur",
    "summary": "Gaz piquant responsable des pluies acides, utilisé comme conservateur.",
    "occurrence": "Éruptions volcaniques.",
    "applications": ["Vinification E220", "Blanchiment"]
  },
  {
    "name": "Trioxyde de Soufre (SO3)",
    "formula": "SO₃",
    "composition": { "S": 1, "O": 3 },
    "molarMass": "80.06 g/mol",
    "category": "Intermédiaire industriel",
    "summary": "Précurseur de l'acide sulfurique, forme des fumées blanches avec l'humidité.",
    "occurrence": "Synthétique.",
    "applications": ["Production d'H2SO4"]
  },
  {
    "name": "Ammoniac (NH3)",
    "formula": "NH₃",
    "composition": { "N": 1, "H": 3 },
    "molarMass": "17.03 g/mol",
    "category": "Base faible",
    "summary": "Gaz incolore à odeur piquante, pilier de l'industrie des engrais.",
    "occurrence": "Synthèse Haber-Bosch.",
    "applications": ["Engrais", "Produits de nettoyage"]
  },
  {
    "name": "Hydrazine",
    "formula": "N₂H₄",
    "composition": { "N": 2, "H": 4 },
    "molarMass": "32.05 g/mol",
    "category": "Réducteur puissant",
    "summary": "Liquide toxique et instable utilisé comme carburant de fusée.",
    "occurrence": "Synthétique.",
    "applications": ["Propulsion spatiale", "Synthèse de polymères"]
  },
  {
    "name": "Azoture de Sodium",
    "formula": "NaN₃",
    "composition": { "Na": 1, "N": 3 },
    "molarMass": "65.01 g/mol",
    "category": "Composé Azoté",
    "summary": "Source de gaz diazote pour le gonflage instantané des airbags.",
    "occurrence": "Synthétique.",
    "applications": ["Sécurité routière", "Chimie organique"]
  },
  {
    "name": "Trichlorure de Phosphore (PCl3)",
    "formula": "PCl₃",
    "composition": { "P": 1, "Cl": 3 },
    "molarMass": "137.33 g/mol",
    "category": "Réactif de Phosphorylation",
    "summary": "Intermédiaire clé pour la fabrication de pesticides et de retardateurs de flamme.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie chimique"]
  },
  {
    "name": "Pentachlorure de Phosphore (PCl5)",
    "formula": "PCl₅",
    "composition": { "P": 1, "Cl": 5 },
    "molarMass": "208.24 g/mol",
    "category": "Agent de Chloration",
    "summary": "Solide blanc utilisé pour convertir les alcools en chlorures d'alkyle.",
    "occurrence": "Synthétique.",
    "applications": ["Pharmacie"]
  },
  {
    "name": "Tribromure de Phosphore (PBr3)",
    "formula": "PBr₃",
    "composition": { "P": 1, "Br": 3 },
    "molarMass": "270.69 g/mol",
    "category": "Réactif",
    "summary": "Utilisé pour la conversion sélective des alcools en bromures d'alkyle.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie fine"]
  },
  {
    "name": "Monoxyde de Carbone (CO)",
    "formula": "CO",
    "composition": { "C": 1, "O": 1 },
    "molarMass": "28.01 g/mol",
    "category": "Gaz Toxique",
    "summary": "Gaz inodore et incolore, poison de l'hémoglobine et ligand en catalyse.",
    "occurrence": "Combustion incomplète.",
    "applications": ["Métallurgie", "Synthèse Fischer-Tropsch"]
  },
  {
    "name": "Dioxyde de Carbone (CO2)",
    "formula": "CO₂",
    "composition": { "C": 1, "O": 2 },
    "molarMass": "44.01 g/mol",
    "category": "Gaz à effet de serre",
    "summary": "Produit de la respiration et de la combustion, fluide supercritique utile.",
    "occurrence": "Atmosphère.",
    "applications": ["Extraction supercritique", "Sodas"]
  },
  {
    "name": "Sous-oxyde de Carbone (C3O2)",
    "formula": "C₃O₂",
    "composition": { "C": 3, "O": 2 },
    "molarMass": "68.03 g/mol",
    "category": "Cumulène",
    "summary": "Gaz malodorant avec une structure linéaire O=C=C=C=O.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique avancée"]
  },
  {
    "name": "DCC (Dicyclohexylcarbodiimide)",
    "formula": "C₁₃H₂₂N₂",
    "composition": { "C": 13, "H": 22, "N": 2 },
    "molarMass": "206.33 g/mol",
    "category": "Agent de couplage",
    "summary": "Réactif classique pour la synthèse de liaisons ester et amide.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse peptidique"]
  },
  {
    "name": "DIC (Diisopropylcarbodiimide)",
    "formula": "C₇H₁₄N₂",
    "composition": { "C": 7, "H": 14, "N": 2 },
    "molarMass": "126.20 g/mol",
    "category": "Agent de couplage liquide",
    "summary": "Alternative liquide au DCC, plus facile à manipuler.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse en phase solide"]
  },
  {
    "name": "Mauvéine (Pourpre de Perkin)",
    "formula": "C₂₆H₂₃N₄⁺",
    "composition": { "C": 26, "H": 23, "N": 4 },
    "molarMass": "391.49 g/mol",
    "category": "Colorant Historique",
    "summary": "Premier colorant synthétique industriel, découvert par hasard en 1856.",
    "occurrence": "Synthétique.",
    "applications": ["Teinture textile (historique)"]
  },
  {
    "name": "Bleu de Prusse",
    "formula": "Fe₄[Fe(CN)₆]₃",
    "composition": { "Fe": 7, "C": 18, "N": 18 },
    "molarMass": "859.23 g/mol",
    "category": "Pigment Inorganique",
    "summary": "Pigment bleu profond utilisé en art et comme antidote au thallium.",
    "occurrence": "Synthétique.",
    "applications": ["Peinture", "Médecine"]
  },
  {
    "name": "Diborane",
    "formula": "B₂H₆",
    "composition": { "B": 2, "H": 6 },
    "molarMass": "27.67 g/mol",
    "category": "Hydrure de Bore",
    "summary": "Gaz hautement réactif avec des liaisons bananes (3-centres 2-électrons).",
    "occurrence": "Synthétique.",
    "applications": ["Hydroboration", "Microélectronique"]
  },
  {
    "name": "Décaborane",
    "formula": "B₁₀H₁₄",
    "composition": { "B": 10, "H": 14 },
    "molarMass": "122.22 g/mol",
    "category": "Agrégat de Bore",
    "summary": "Solide blanc utilisé comme source de bore de haute densité.",
    "occurrence": "Synthétique.",
    "applications": ["Carburant solide", "Dopage"]
  },
  {
    "name": "Acide Perchlorique",
    "formula": "HClO₄",
    "composition": { "H": 1, "Cl": 1, "O": 4 },
    "molarMass": "100.46 g/mol",
    "category": "Acide Fort / Oxydant",
    "summary": "Acide minéral extrêmement puissant, dangereux au contact de matières organiques.",
    "occurrence": "Synthétique.",
    "applications": ["Analyse minérale", "Propergol"]
  },
  {
    "name": "Acide Périodique",
    "formula": "H₅IO₆",
    "composition": { "H": 5, "I": 1, "O": 6 },
    "molarMass": "227.94 g/mol",
    "category": "Oxydant",
    "summary": "Utilisé pour le clivage oxydatif des diols vicinaux et dans la coloration PAS.",
    "occurrence": "Synthétique.",
    "applications": ["Histologie", "Synthèse organique"]
  },
  {
    "name": "Acide Sélénieux",
    "formula": "H₂SeO₃",
    "composition": { "H": 2, "Se": 1, "O": 3 },
    "molarMass": "128.97 g/mol",
    "category": "Composé du Sélénium",
    "summary": "Agent d'oxydation et réactif pour la coloration de l'acier.",
    "occurrence": "Synthétique.",
    "applications": ["Bronzage des métaux", "Radiopharmacie"]
  },
  {
    "name": "Hexachloroplatinate de Potassium",
    "formula": "K₂PtCl₆",
    "composition": { "K": 2, "Pt": 1, "Cl": 6 },
    "molarMass": "485.99 g/mol",
    "category": "Sel de Platine",
    "summary": "Précurseur important pour la synthèse de complexes de platine et catalyseurs.",
    "occurrence": "Synthétique.",
    "applications": ["Électrodéposition", "Photographie"]
  },
  {
    "name": "Tétrachloropaladate de Potassium",
    "formula": "K₂PdCl₄",
    "composition": { "K": 2, "Pd": 1, "Cl": 4 },
    "molarMass": "326.51 g/mol",
    "category": "Réactif de Palladium",
    "summary": "Source soluble de palladium(II) pour la préparation de catalyseurs.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse homogène"]
  },
  {
    "name": "Hexaméthyldisilazane (HMDS)",
    "formula": "C₆H₁₉NSi₂",
    "composition": { "C": 6, "H": 19, "N": 1, "Si": 2 },
    "molarMass": "161.39 g/mol",
    "category": "Réactif de Silylation",
    "summary": "Base forte et agent de protection des groupes hydroxyle.",
    "occurrence": "Synthétique.",
    "applications": ["Lithographie", "Synthèse peptidique"]
  },
  {
    "name": "Chlorure de Triméthylsilyle (TMSCl)",
    "formula": "C₃H₉ClSi",
    "composition": { "C": 3, "H": 9, "Cl": 1, "Si": 1 },
    "molarMass": "108.64 g/mol",
    "category": "Agent de Silylation",
    "summary": "Utilisé pour introduire des groupements TMS protecteurs ou activer les nucléophiles.",
    "occurrence": "Synthétique.",
    "applications": ["Protection de fonctions", "Synthèse organique"]
  },
  {
    "name": "Silice (Dioxyde de Silicium)",
    "formula": "SiO₂",
    "composition": { "Si": 1, "O": 2 },
    "molarMass": "60.08 g/mol",
    "category": "Oxyde",
    "summary": "Constituant principal du sable et du verre, utilisé comme adsorbant en chromatographie.",
    "occurrence": "Quartz, Sable.",
    "applications": ["Verrerie", "Purification"]
  },
  {
    "name": "Silicate de Sodium",
    "formula": "Na₂SiO₃",
    "composition": { "Na": 2, "Si": 1, "O": 3 },
    "molarMass": "122.06 g/mol",
    "category": "Verre soluble",
    "summary": "Utilisé comme adhésif, retardateur de flamme et dans la conservation des œufs.",
    "occurrence": "Synthétique.",
    "applications": ["Ciments", "Détergents"]
  },
  {
    "name": "Silicones (Polydiméthylsiloxanes)",
    "formula": "(C₂H₆OSi)ₙ",
    "composition": { "C": 2, "H": 6, "O": 1, "Si": 1 },
    "molarMass": "74.15 g/mol (unité)",
    "category": "Polymère inorganique-organique",
    "summary": "Fluides ou élastomères stables thermiquement et chimiquement inertes.",
    "occurrence": "Synthétique.",
    "applications": ["Lubrifiants", "Implants", "Étanchéité"]
  },
  {
    "name": "Fluorure d'Hydrogène (HF)",
    "formula": "HF",
    "composition": { "H": 1, "F": 1 },
    "molarMass": "20.01 g/mol",
    "category": "Acide Faible / Corrosif",
    "summary": "Extrêmement dangereux, capable de graver le verre et de pénétrer les tissus cutanés.",
    "occurrence": "Synthétique.",
    "applications": ["Gravure acide", "Raffinage de l'uranium"]
  },
  {
    "name": "Bifluorure d'Ammonium",
    "formula": "NH₄HF₂",
    "composition": { "N": 1, "H": 5, "F": 2 },
    "molarMass": "57.04 g/mol",
    "category": "Sel de Fluorure",
    "summary": "Source sèche de HF utilisée pour le nettoyage industriel et la gravure du verre.",
    "occurrence": "Synthétique.",
    "applications": ["Traitement de surface"]
  },
  {
    "name": "Tétrafluorure de Silicium",
    "formula": "SiF₄",
    "composition": { "Si": 1, "F": 4 },
    "molarMass": "104.08 g/mol",
    "category": "Halogénure de Silicium",
    "summary": "Gaz incolore formé par l'action de HF sur la silice.",
    "occurrence": "Synthétique.",
    "applications": ["Microélectronique"]
  },
  {
    "name": "Réactif de Gilman (Diméthylcuprate de lithium)",
    "formula": "Li[Cu(CH₃)₂]",
    "composition": { "Li": 1, "Cu": 1, "C": 2, "H": 6 },
    "molarMass": "100.58 g/mol",
    "category": "Organocuprate",
    "summary": "Réactif sélectif pour l'addition 1,4 sur les énones (addition de Michael).",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de stéroïdes"]
  },
  {
    "name": "Réactif de Tebbe",
    "formula": "C₁₃H₁₈AlClTi",
    "composition": { "C": 13, "H": 18, "Al": 1, "Cl": 1, "Ti": 1 },
    "molarMass": "284.60 g/mol",
    "category": "Métallocène de titane",
    "summary": "Utilisé pour la méthylénation des carbonyles, y compris les esters.",
    "occurrence": "Synthétique.",
    "applications": ["Oléfination"]
  },
  {
    "name": "Réactif de Petasis",
    "formula": "C₁₂H₁₄Ti",
    "composition": { "C": 12, "H": 14, "Ti": 1 },
    "molarMass": "206.11 g/mol",
    "category": "Agent de méthylénation",
    "summary": "Alternative plus stable et moins sensible que le réactif de Tebbe.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique complexe"]
  },
  {
    "name": "Dés-Martin Périodinane (DMP)",
    "formula": "C₁₃H₁₃IO₈",
    "composition": { "C": 13, "H": 13, "I": 1, "O": 8 },
    "molarMass": "424.14 g/mol",
    "category": "Oxydant d'iode hypervalent",
    "summary": "Oxydant doux et sélectif pour convertir les alcools primaires en aldéhydes.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse totale"]
  },
  {
    "name": "IBX (Acide 2-iodoxybenzoïque)",
    "formula": "C₇H₅IO₄",
    "composition": { "C": 7, "H": 5, "I": 1, "O": 4 },
    "molarMass": "280.02 g/mol",
    "category": "Réactif d'oxydation",
    "summary": "Précurseur du DMP, utilisable comme oxydant hétérogène.",
    "occurrence": "Synthétique.",
    "applications": ["CH-activation"]
  },
  {
    "name": "Acide Hypochloreux",
    "formula": "HOCl",
    "composition": { "H": 1, "O": 1, "Cl": 1 },
    "molarMass": "52.46 g/mol",
    "category": "Oxydant",
    "summary": "Agent désinfectant actif produit par la dissolution du chlore dans l'eau.",
    "occurrence": "Synthétique.",
    "applications": ["Traitement de l'eau"]
  },
  {
    "name": "Acide Iodique",
    "formula": "HIO₃",
    "composition": { "H": 1, "I": 1, "O": 3 },
    "molarMass": "175.91 g/mol",
    "category": "Acide Fort",
    "summary": "Solide cristallin blanc utilisé comme agent d'oxydation puissant.",
    "occurrence": "Synthétique.",
    "applications": ["Gravure de métaux"]
  },
  {
    "name": "Arséniate de Sodium",
    "formula": "Na₃AsO₄",
    "composition": { "Na": 3, "As": 1, "O": 4 },
    "molarMass": "208.91 g/mol",
    "category": "Sel d'Arsenic",
    "summary": "Composé hautement toxique autrefois utilisé comme herbicide et insecticide.",
    "occurrence": "Synthétique.",
    "applications": ["Mise en conserve (historique)"]
  },
  {
    "name": "Acide Cacodylique",
    "formula": "C₂H₇AsO₂",
    "composition": { "C": 2, "H": 7, "As": 1, "O": 2 },
    "molarMass": "138.00 g/mol",
    "category": "Organoarsénié",
    "summary": "Herbicide célèbre (Agent Bleu) utilisé pendant la guerre du Vietnam.",
    "occurrence": "Synthétique.",
    "applications": ["Microscopie (tampon)"]
  },
  {
    "name": "Pentafluorure d'Antimoine",
    "formula": "SbF₅",
    "composition": { "Sb": 1, "F": 5 },
    "molarMass": "216.75 g/mol",
    "category": "Acide de Lewis puissant",
    "summary": "Liquide visqueux, composant clé des superacides comme l'acide magique.",
    "occurrence": "Synthétique.",
    "applications": ["Fluoration", "Chimie des carbocations"]
  },
  {
    "name": "Tartre Émétique",
    "formula": "K₂Sb₂(C₄H₂O₆)₂·3H₂O",
    "composition": { "K": 2, "Sb": 2, "C": 8, "H": 10, "O": 15 },
    "molarMass": "667.87 g/mol",
    "category": "Composé de l'antimoine",
    "summary": "Utilisé autrefois comme médicament pour provoquer le vomissement.",
    "occurrence": "Synthétique.",
    "applications": ["Mordant pour teinture"]
  },
  {
    "name": "Diazométhane",
    "formula": "CH₂N₂",
    "composition": { "C": 1, "H": 2, "N": 2 },
    "molarMass": "42.04 g/mol",
    "category": "Agent de Méthylation",
    "summary": "Gaz jaune toxique et explosif utilisé pour convertir les acides en esters méthyliques.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique fine"]
  },
  {
    "name": "Diazoacétate d'éthyle (EDA)",
    "formula": "C₄H₆N₂O₂",
    "composition": { "C": 4, "H": 6, "N": 2, "O": 2 },
    "molarMass": "114.10 g/mol",
    "category": "Composé Diazo",
    "summary": "Réactif important pour la carbénylation et l'insertion dans les liaisons C-H.",
    "occurrence": "Synthétique.",
    "applications": ["Cyclopropanation"]
  },
  {
    "name": "Azoture de Phényle",
    "formula": "C₆H₅N₃",
    "composition": { "C": 6, "H": 5, "N": 3 },
    "molarMass": "119.13 g/mol",
    "category": "Azoture organique",
    "summary": "Utilisé comme précurseur de nitrènes en photo-affinité et Click chemistry.",
    "occurrence": "Synthétique.",
    "applications": ["Bi Conjugaison"]
  },
  {
    "name": "Acide Phénylboronique",
    "formula": "C₆H₇BO₂",
    "composition": { "C": 6, "H": 7, "B": 1, "O": 2 },
    "molarMass": "121.93 g/mol",
    "category": "Acide Boronique",
    "summary": "Réactif fondamental pour le couplage de Suzuki-Miyaura.",
    "occurrence": "Synthétique.",
    "applications": ["Fabrication de cristaux liquides"]
  },
  {
    "name": "Bis(pinacolato)dibore (B2pin2)",
    "formula": "C₁₂H₂₄B₂O₄",
    "composition": { "C": 12, "H": 24, "B": 2, "O": 4 },
    "molarMass": "253.94 g/mol",
    "category": "Réactif de Borylation",
    "summary": "Utilisé pour la borylation des halogénures d'aryle catalysée au palladium.",
    "occurrence": "Synthétique.",
    "applications": ["Matériaux organiques semi-conducteurs"]
  },
  {
    "name": "IMes (Ligand NHC)",
    "formula": "C₂₁H₂₆N₂",
    "composition": { "C": 21, "H": 26, "N": 2 },
    "molarMass": "306.45 g/mol",
    "category": "Carbène N-hétérocyclique",
    "summary": "Ligand riche en électrons et encombré pour la catalyse organométallique.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse de couplage"]
  },
  {
    "name": "IPr (Ligand NHC)",
    "formula": "C₂₇H₃₈N₂",
    "composition": { "C": 27, "H": 38, "N": 2 },
    "molarMass": "390.61 g/mol",
    "category": "Ligand",
    "summary": "Un des ligands NHC les plus versatiles et les plus utilisés en chimie moderne.",
    "occurrence": "Synthétique.",
    "applications": ["Amination", "Métathèse"]
  },
  {
    "name": "Nitrate de Thallium(I)",
    "formula": "TlNO₃",
    "composition": { "Tl": 1, "N": 1, "O": 3 },
    "molarMass": "266.39 g/mol",
    "category": "Sel de Thallium",
    "summary": "Composé incolore et extrêmement toxique, agissant comme poison systémique.",
    "occurrence": "Synthétique.",
    "applications": ["Analyse minérale", "Optique IR"]
  },
  {
    "name": "Acétate de Thallium(I)",
    "formula": "CH₃COOTl",
    "composition": { "C": 2, "H": 3, "O": 2, "Tl": 1 },
    "molarMass": "263.43 g/mol",
    "category": "Réactif",
    "summary": "Utilisé comme intermédiaire en synthèse organique et en médecine (historique).",
    "occurrence": "Synthétique.",
    "applications": ["Microbiologie (milieux de culture)"]
  },
  {
    "name": "Acide Chloroacétique",
    "formula": "ClCH₂COOH",
    "composition": { "Cl": 1, "C": 2, "H": 3, "O": 2 },
    "molarMass": "94.50 g/mol",
    "category": "Acide Carboxylique",
    "summary": "Matière première pour la production de carboxyméthylcellulose (CMC).",
    "occurrence": "Synthétique.",
    "applications": ["Herbicides", "Chimie organique"]
  },
  {
    "name": "Acide Cyanurique",
    "formula": "C₃H₃N₃O₃",
    "composition": { "C": 3, "H": 3, "N": 3, "O": 3 },
    "molarMass": "129.07 g/mol",
    "category": "Triazine",
    "summary": "Stabilisant pour le chlore dans les piscines.",
    "occurrence": "Synthétique.",
    "applications": ["Désinfection", "Précurseur de résines"]
  },
  {
    "name": "Trichloroisocyanurate de Sodium",
    "formula": "C₃Cl₃N₃O₃Na",
    "composition": { "C": 3, "Cl": 3, "N": 3, "O": 3, "Na": 1 },
    "molarMass": "232.41 g/mol",
    "category": "Agent Chlorant",
    "summary": "Source de chlore solide pour la désinfection de l'eau.",
    "occurrence": "Synthétique.",
    "applications": ["Piscines", "Industrie alimentaire"]
  },
  {
    "name": "Saccharinate de Sodium",
    "formula": "C₇H₄NNaO₃S",
    "composition": { "C": 7, "H": 4, "N": 1, "Na": 1, "O": 3, "S": 1 },
    "molarMass": "205.17 g/mol",
    "category": "Édulcorant",
    "summary": "Forme soluble de la saccharine, premier édulcorant de synthèse.",
    "occurrence": "Synthétique.",
    "applications": ["Boissons diététiques"]
  },
  {
    "name": "Cyclamate de Sodium",
    "formula": "C₆H₁₂NNaO₃S",
    "composition": { "C": 6, "H": 12, "N": 1, "Na": 1, "O": 3, "S": 1 },
    "molarMass": "201.22 g/mol",
    "category": "Édulcorant",
    "summary": "Édulcorant controversé, souvent associé à la saccharine.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie alimentaire E952"]
  },
  {
    "name": "Advantame",
    "formula": "C₂₄H₃₀N₂O₇",
    "composition": { "C": 24, "H": 30, "N": 2, "O": 7 },
    "molarMass": "458.50 g/mol",
    "category": "Édulcorant Intense",
    "summary": "Dérivé de l'aspartame ultra-puissant approuvé en 2014.",
    "occurrence": "Synthétique.",
    "applications": ["Alimentation de précision"]
  },
  {
    "name": "Iodoforme (Triiodométhane)",
    "formula": "CHI₃",
    "composition": { "C": 1, "H": 1, "I": 3 },
    "molarMass": "393.73 g/mol",
    "category": "Antiseptique",
    "summary": "Poudre jaune à odeur caractéristique, utilisé autrefois pour désinfecter les plaies.",
    "occurrence": "Synthétique.",
    "applications": ["Dentisterie"]
  },
  {
    "name": "Diiodométhane",
    "formula": "CH₂I₂",
    "composition": { "C": 1, "H": 2, "I": 2 },
    "molarMass": "267.84 g/mol",
    "category": "Liquide Dense",
    "summary": "Liquide à haute densité utilisé pour la détermination de la densité des minéraux.",
    "occurrence": "Synthétique.",
    "applications": ["Minéralogie", "Synthèse de Simmon-Smith"]
  },
  {
    "name": "Bromoforme (Tribromométhane)",
    "formula": "CHBr₃",
    "composition": { "C": 1, "H": 1, "Br": 3 },
    "molarMass": "252.73 g/mol",
    "category": "Solvant Lourd",
    "summary": "Liquide incolore utilisé comme intermédiaire et pour la séparation de minéraux.",
    "occurrence": "Phytoplancton marin (traces).",
    "applications": ["Laboratoire"]
  },
  {
    "name": "Fluoroforme (Trifluorométhane)",
    "formula": "CHF₃",
    "composition": { "C": 1, "H": 1, "F": 3 },
    "molarMass": "70.01 g/mol",
    "category": "Frigorigène",
    "summary": "HFC-23, utilisé comme fluide frigorigène et agent d'extinction d'incendie.",
    "occurrence": "Synthétique.",
    "applications": ["Climatisation", "Protection incendie"]
  },
  {
    "name": "Méthyléthylcétone (Butanone)",
    "formula": "C₄H₈O",
    "composition": { "C": 4, "H": 8, "O": 1 },
    "molarMass": "72.11 g/mol",
    "category": "Solvant",
    "summary": "Solvant industriel commun pour les résines et les laques.",
    "occurrence": "Fruits (traces).",
    "applications": ["Nettoyage", "Adhésifs"]
  },
  {
    "name": "Cyclohexanone",
    "formula": "C₆H₁₀O",
    "composition": { "C": 6, "H": 10, "O": 1 },
    "molarMass": "98.14 g/mol",
    "category": "Cétone cyclique",
    "summary": "Intermédiaire clé pour la production d'acide adipique et de caprolactame (Nylon).",
    "occurrence": "Synthétique.",
    "applications": ["Plasturgie"]
  },
  {
    "name": "Acétate d'Amyle (Huile de Banane)",
    "formula": "C₇H₁₄O₂",
    "composition": { "C": 7, "H": 14, "O": 2 },
    "molarMass": "130.18 g/mol",
    "category": "Ester / Arôme",
    "summary": "Ester à odeur de banane utilisé comme solvant et fragrance.",
    "occurrence": "Banane.",
    "applications": ["Varnis à ongles", "Alimentation"]
  },
  {
    "name": "Butyrate d'Éthyle",
    "formula": "C₆H₁₂O₂",
    "composition": { "C": 6, "H": 12, "O": 2 },
    "molarMass": "116.16 g/mol",
    "category": "Arôme d'Ananas",
    "summary": "Ester présent dans de nombreux fruits, utilisé pour sa note fruitée.",
    "occurrence": "Ananas.",
    "applications": ["Parfumerie", "Sodas"]
  },
  {
    "name": "Acétamide",
    "formula": "C₂H₅NO",
    "composition": { "C": 2, "H": 5, "N": 1, "O": 1 },
    "molarMass": "59.07 g/mol",
    "category": "Amide",
    "summary": "Amide le plus simple dérivé de l'acide acétique.",
    "occurrence": "Espace interstellaire.",
    "applications": ["Solvant", "Plastifiant"]
  },
  {
    "name": "Benzonitrile",
    "formula": "C₇H₅N",
    "composition": { "C": 7, "H": 5, "N": 1 },
    "molarMass": "103.12 g/mol",
    "category": "Nitrile Aromatique",
    "summary": "Liquide incolore à odeur d'amande amère, précurseur de résines.",
    "occurrence": "Synthétique.",
    "applications": ["Revêtements", "Intermédiaire"]
  },
  {
    "name": "Isopentanol (Alcool Isoamylique)",
    "formula": "C₅H₁₂O",
    "composition": { "C": 5, "H": 12, "O": 1 },
    "molarMass": "88.15 g/mol",
    "category": "Alcool",
    "summary": "Principal constituant de l'huile de fusel, utilisé en extraction.",
    "occurrence": "Fermentation alcoolique.",
    "applications": ["Extraction d'ADN", "Arômes"]
  },
  {
    "name": "Néopentanol",
    "formula": "C₅H₁₂O",
    "composition": { "C": 5, "H": 12, "O": 1 },
    "molarMass": "88.15 g/mol",
    "category": "Alcool encombré",
    "summary": "Utilisé en recherche pour étudier les effets stériques.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "Acétate d'Isopropyle",
    "formula": "C₅H₁₀O₂",
    "composition": { "C": 5, "H": 10, "O": 2 },
    "molarMass": "102.13 g/mol",
    "category": "Solvant",
    "summary": "Solvant à évaporation rapide pour les encres d'imprimerie.",
    "occurrence": "Synthétique.",
    "applications": ["Emballage alimentaire"]
  },
  {
    "name": "Propionitrile",
    "formula": "C₃H₅N",
    "composition": { "C": 3, "H": 5, "N": 1 },
    "molarMass": "55.08 g/mol",
    "category": "Nitrile",
    "summary": "Nitrile simple utilisé comme solvant et précurseur chimique.",
    "occurrence": "Espace.",
    "applications": ["Pharmacie"]
  },
  {
    "name": "Acide Valérique (Acide Pentanoïque)",
    "formula": "C₅H₁₀O₂",
    "composition": { "C": 5, "H": 10, "O": 2 },
    "molarMass": "102.13 g/mol",
    "category": "Acide Gras à chaîne courte",
    "summary": "Responsable de l'odeur désagréable de la sueur et des pieds.",
    "occurrence": "Valériane.",
    "applications": ["Parfumerie (esters)"]
  },
  {
    "name": "Acide Caproïque (Acide Hexanoïque)",
    "formula": "C₆H₁₂O₂",
    "composition": { "C": 6, "H": 12, "O": 2 },
    "molarMass": "116.16 g/mol",
    "category": "Acide Gras",
    "summary": "Donne l'odeur caractéristique du bouc et de certains fromages.",
    "occurrence": "Graisse animale, Ginkgo.",
    "applications": ["Arômes artificiels"]
  },
  {
    "name": "Gaiacol",
    "formula": "C₇H₈O₂",
    "composition": { "C": 7, "H": 8, "O": 2 },
    "molarMass": "124.14 g/mol",
    "category": "Phénol",
    "summary": "Responsable de l'odeur fumée du bois brûlé et du café.",
    "occurrence": "Fumée de bois, Vanille.",
    "applications": ["Expectorant", "Synthèse de vanilline"]
  },
  {
    "name": "Anéthol",
    "formula": "C₁₀H₁₂O",
    "composition": { "C": 10, "H": 12, "O": 1 },
    "molarMass": "148.20 g/mol",
    "category": "Phénylpropène",
    "summary": "Composé responsable de l'odeur et du goût de l'anis.",
    "occurrence": "Anis vert, Anis étoilé.",
    "applications": ["Boissons anisées", "Dentisterie"]
  },
  {
    "name": "Eugénol",
    "formula": "C₁₀H₁₂O₂",
    "composition": { "C": 10, "H": 12, "O": 2 },
    "molarMass": "164.20 g/mol",
    "category": "Phénylpropénoïde",
    "summary": "Constituant principal de l'huile de clou de girofle, utilisé comme analgésique dentaire.",
    "occurrence": "Clou de girofle.",
    "applications": ["Médecine dentaire", "Parfumerie"]
  },
  {
    "name": "Uranocène",
    "formula": "C₁₆H₁₆U",
    "composition": { "C": 16, "H": 16, "U": 1 },
    "molarMass": "422.33 g/mol",
    "category": "Organo-uranium",
    "summary": "Complexe sandwich d'uranium avec deux cycles cyclooctatétraène.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche fondamentale"]
  },
  {
    "name": "Thorocène",
    "formula": "C₁₆H₁₆Th",
    "composition": { "C": 16, "H": 16, "Th": 1 },
    "molarMass": "422.37 g/mol",
    "category": "Organométallique",
    "summary": "Analogue du thallium de l'uranocène, extrêmement sensible à l'air.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie des actinides"]
  },
  {
    "name": "Capsaïcine",
    "formula": "C₁₈H₂₇NO₃",
    "composition": { "C": 18, "H": 27, "N": 1, "O": 3 },
    "molarMass": "305.41 g/mol",
    "category": "Alcaloïde",
    "summary": "Composé responsable de la sensation de piquant dans les piments.",
    "occurrence": "Piments (Capsicum).",
    "applications": ["Analgésique topique", "Bombe lacrymogène"]
  },
  {
    "name": "Pipérine",
    "formula": "C₁₇H₁₉NO₃",
    "composition": { "C": 17, "H": 19, "N": 1, "O": 3 },
    "molarMass": "285.34 g/mol",
    "category": "Alcaloïde",
    "summary": "Responsable du goût piquant du poivre noir.",
    "occurrence": "Poivre noir.",
    "applications": ["Amélioration de la biodisponibilité"]
  },
  {
    "name": "Géosmine",
    "formula": "C₁₂H₂₂O",
    "composition": { "C": 12, "H": 22, "O": 1 },
    "molarMass": "182.30 m/mol",
    "category": "Terpénoïde",
    "summary": "Donne l'odeur de terre mouillée après la pluie.",
    "occurrence": "Actinobactéries.",
    "applications": ["Arôme terreux"]
  },
  {
    "name": "Toxine de Choléra (fragment A)",
    "formula": "C₅₆H₈₀N₁₄O₁₅",
    "composition": { "C": 56, "H": 80, "N": 14, "O": 15 },
    "molarMass": "1189.32 g/mol",
    "category": "Entérotoxine",
    "summary": "Provoque une sécrétion massive d'eau et d'électrolytes dans l'intestin.",
    "occurrence": "Vibrio cholerae.",
    "applications": ["Immunologie"]
  },
  {
    "name": "Gramicidine",
    "formula": "C₉₉H₁₄₀N₂₀O₁₇",
    "composition": { "C": 99, "H": 140, "N": 20, "O": 17 },
    "molarMass": "1882.26 g/mol",
    "category": "Antibiotique Polypeptidique",
    "summary": "Médicament topique qui forme des canaux ioniques dans les membranes bactériennes.",
    "occurrence": "Bacillus brevis.",
    "applications": ["Ophtalmologie"]
  },
  {
    "name": "Polyamide 6,6 (Nylon 6,6)",
    "formula": "(C₁₂H₂₂N₂O₂)ₙ",
    "composition": { "C": 12, "H": 22, "N": 2, "O": 2 },
    "molarMass": "226.32 g/mol (unité)",
    "category": "Polymère",
    "summary": "Fibre synthétique résistante utilisée dès 1935 pour les bas.",
    "occurrence": "Synthétique.",
    "applications": ["Textile", "Ingénierie automobile"]
  },
  {
    "name": "Isocyanurate de Triglycidyle (TGIC)",
    "formula": "C₁₂H₁₅N₃O₆",
    "composition": { "C": 12, "H": 15, "N": 3, "O": 6 },
    "molarMass": "297.26 g/mol",
    "category": "Agent de réticulation",
    "summary": "Utilisé pour durcir les peintures en poudre.",
    "occurrence": "Synthétique.",
    "applications": ["Revêtements industriels"]
  },
  {
    "name": "Fluorure de Sulfuryle",
    "formula": "SO₂F₂",
    "composition": { "S": 1, "O": 2, "F": 2 },
    "molarMass": "102.06 g/mol",
    "category": "Fumigant",
    "summary": "Gaz utilisé pour éliminer les termites dans les bâtiments.",
    "occurrence": "Synthétique.",
    "applications": ["Lutte antiparasitaire"]
  },
  {
    "name": "Triéthylènetétramine (TETA)",
    "formula": "C₆H₁₈N₄",
    "composition": { "C": 6, "H": 18, "N": 4 },
    "molarMass": "146.23 g/mol",
    "category": "Agent Chélatant",
    "summary": "Utilisé pour traiter la maladie de Wilson par chélation du cuivre.",
    "occurrence": "Synthétique.",
    "applications": ["Réticulant époxy", "Médecine"]
  },
  {
    "name": "Cyclodextrine (Bêta)",
    "formula": "C₄₂H₇₀O₃₅",
    "composition": { "C": 42, "H": 70, "O": 35 },
    "molarMass": "1134.98 g/mol",
    "category": "Oligosaccharide cyclique",
    "summary": "Molécule en forme de cône tronqué capable d'encapsuler des molécules hydrophobes.",
    "occurrence": "Dégradation enzymatique de l'amidon.",
    "applications": ["Pharmacie", "Encapsulation d'arômes"]
  },
  {
    "name": "Hydroxychloroquine",
    "formula": "C₁₈H₂₆ClN₃O",
    "composition": { "C": 18, "H": 26, "Cl": 1, "N": 3, "O": 1 },
    "molarMass": "335.87 g/mol",
    "category": "Antipaludique",
    "summary": "Utilisé pour le paludisme et les maladies auto-immunes comme le lupus.",
    "occurrence": "Synthétique.",
    "applications": ["Rhumatologie"]
  },
  {
    "name": "Acide Hyaluronique (unité diglucosidique)",
    "formula": "C₁₄H₂₁NO₁₁",
    "composition": { "C": 14, "H": 21, "N": 1, "O": 11 },
    "molarMass": "379.32 g/mol",
    "category": "Glycosaminoglycane",
    "summary": "Composant majeur de la matrice extracellulaire et du liquide synovial.",
    "occurrence": "Crestes de coq, cartilage.",
    "applications": ["Cosmétique", "Chirurgie esthétique"]
  },
  {
    "name": "Condroitine Sulfate",
    "formula": "C₁₄H₂₁NO₁₄S",
    "composition": { "C": 14, "H": 21, "N": 1, "O": 14, "S": 1 },
    "molarMass": "459.38 g/mol",
    "category": "Polysaccharide",
    "summary": "Essentiel pour la structure et la résistance à la compression des cartilages.",
    "occurrence": "Bones, cartilage de requin.",
    "applications": ["Arthrose"]
  },
  {
    "name": "Glucosamine",
    "formula": "C₆H₁₃NO₅",
    "composition": { "C": 6, "H": 13, "N": 1, "O": 5 },
    "molarMass": "179.17 g/mol",
    "category": "Amino-sucre",
    "summary": "Précurseur de nombreux glycosaminoglycanes.",
    "occurrence": "Exosquelettes de crustacés.",
    "applications": ["Compléments articulaires"]
  },
  {
    "name": "Chitine",
    "formula": "(C₈H₁₃NO₅)ₙ",
    "composition": { "C": 8, "H": 13, "N": 1, "O": 5 },
    "molarMass": "203.19 g/mol (unité)",
    "category": "Polysaccharide structural",
    "summary": "Deuxième polymère naturel le plus abondant au monde après la cellulose.",
    "occurrence": "Carapaces de crabes, champignons.",
    "applications": ["Filtration", "Chirurgie"]
  },
  {
    "name": "Nitrate d'Ammonium",
    "formula": "NH₄NO₃",
    "composition": { "N": 2, "H": 4, "O": 3 },
    "molarMass": "80.04 g/mol",
    "category": "Sel Inorganique",
    "summary": "Engrais azoté majeur et composant d'explosifs miniers (ANFO).",
    "occurrence": "Synthétique.",
    "applications": ["Agriculture", "Génie civil"]
  },
  {
    "name": "Perchlorate d'Ammonium",
    "formula": "NH₄ClO₄",
    "composition": { "N": 1, "H": 4, "Cl": 1, "O": 4 },
    "molarMass": "117.49 g/mol",
    "category": "Oxydant puissant",
    "summary": "Oxydant standard utilisé dans les propulseurs à poudre des fusées.",
    "occurrence": "Synthétique.",
    "applications": ["Aérospatiale (Ariane, STS)"]
  },
  {
    "name": "D-Ribose",
    "formula": "C₅H₁₀O₅",
    "composition": { "C": 5, "H": 10, "O": 5 },
    "molarMass": "150.13 g/mol",
    "category": "Pentose",
    "summary": "Sucre composant l'ARN, essentiel à la vie.",
    "occurrence": "Organismes vivants.",
    "applications": ["Biologie moléculaire"]
  },
  {
    "name": "2-Désoxy-D-Ribose",
    "formula": "C₅H₁₀O₄",
    "composition": { "C": 5, "H": 10, "O": 4 },
    "molarMass": "134.13 g/mol",
    "category": "Sucre",
    "summary": "Sucre constitutif de l'ADN.",
    "occurrence": "Cellules vivantes.",
    "applications": ["Génétique"]
  },
  {
    "name": "Vitamine B1 (Thiamine)",
    "formula": "C₁₂H₁₇N₄OS⁺",
    "composition": { "C": 12, "H": 17, "N": 4, "O": 1, "S": 1 },
    "molarMass": "265.35 g/mol",
    "category": "Vitamine",
    "summary": "Indispensable au métabolisme des glucides et au système nerveux.",
    "occurrence": "Levure, céréales complètes.",
    "applications": ["Nutrition"]
  },
  {
    "name": "Vitamine B2 (Riboflavine)",
    "formula": "C₁₇H₂₀N₄O₆",
    "composition": { "C": 17, "H": 20, "N": 4, "O": 6 },
    "molarMass": "376.36 g/mol",
    "category": "Vitamine / Colorant",
    "summary": "Donne la couleur jaune au lait et à l'urine, cruciale pour la production d'énergie.",
    "occurrence": "Œufs, légumes verts.",
    "applications": ["Additif E101"]
  },
  {
    "name": "Vitamine B6 (Pyridoxine)",
    "formula": "C₈H₁₁NO₃",
    "composition": { "C": 8, "H": 11, "N": 1, "O": 3 },
    "molarMass": "169.18 g/mol",
    "category": "Vitamine",
    "summary": "Impliquée dans la synthèse des neurotransmetteurs et des globules rouges.",
    "occurrence": "Bananes, viande.",
    "applications": ["Santé mentale"]
  },
  {
    "name": "Vitamine B12 (Cobalamine)",
    "formula": "C₆₃H₈₈CoN₁₄O₁₄P",
    "composition": { "C": 63, "H": 88, "Co": 1, "N": 14, "O": 14, "P": 1 },
    "molarMass": "1355.37 g/mol",
    "category": "Vitamine / Complexe de Cobalt",
    "summary": "La plus complexe des vitamines, nécessaire au fonctionnement du cerveau.",
    "occurrence": "Produits animaux.",
    "applications": ["Anémie", "Suppléments vegan"]
  },
  {
    "name": "Fluorescéine",
    "formula": "C₂₀H₁₂O₅",
    "composition": { "C": 20, "H": 12, "O": 5 },
    "molarMass": "332.31 g/mol",
    "category": "Traceur fluorescent",
    "summary": "Poudre orange devenant vert fluo intense en solution basique.",
    "occurrence": "Synthétique.",
    "applications": ["Ophtalmologie", "Hydrologie"]
  },
  {
    "name": "Bleu de Méthylène",
    "formula": "C₁₆H₁₈ClN₃S",
    "composition": { "C": 16, "H": 18, "Cl": 1, "N": 3, "S": 1 },
    "molarMass": "319.85 g/mol",
    "category": "Colorant / Médicament",
    "summary": "Utilisé pour traiter la méthémoglobinémie et comme colorant biologique.",
    "occurrence": "Synthétique.",
    "applications": ["Aquariophilie", "Microscopie"]
  },
  {
    "name": "Éosine Y",
    "formula": "C₂₀H₈Br₄O₅",
    "composition": { "C": 20, "H": 8, "Br": 4, "O": 5 },
    "molarMass": "647.89 g/mol",
    "category": "Colorant",
    "summary": "Colorant rouge utilisé pour teindre le cytoplasme en histologie.",
    "occurrence": "Synthétique.",
    "applications": ["Dermatologie", "Biologie"]
  },
  {
    "name": "DMAP (4-Diméthylaminopyridine)",
    "formula": "C₇H₁₀N₂",
    "composition": { "C": 7, "H": 10, "N": 2 },
    "molarMass": "122.17 g/mol",
    "category": "Catalyseur d'acétylation",
    "summary": "Base nucléophile très efficace pour catalyser l'estérification.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "HOBt (Hydroxybenzotriazole)",
    "formula": "C₆H₅N₃O",
    "composition": { "C": 6, "H": 5, "N": 3, "O": 1 },
    "molarMass": "135.12 g/mol",
    "category": "Réactif de couplage",
    "summary": "Supprime la racémisation pendant la formation des liaisons peptidiques.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de peptides"]
  },
  {
    "name": "HATU",
    "formula": "C₁₀H₁₅N₆O·PF₆",
    "composition": { "C": 10, "H": 15, "N": 6, "O": 1, "P": 1, "F": 6 },
    "molarMass": "380.23 g/mol",
    "category": "Agent de couplage efficace",
    "summary": "Réactif de choix pour les couplages difficiles de peptides encombrés.",
    "occurrence": "Synthétique.",
    "applications": ["Génie chimique"]
  },
  {
    "name": "Luminol",
    "formula": "C₈H₇N₃O₂",
    "composition": { "C": 8, "H": 7, "N": 3, "O": 2 },
    "molarMass": "177.16 g/mol",
    "category": "Agent Chimioluminescent",
    "summary": "Émet une lumière bleue en présence de fer (sang) et d'un oxydant.",
    "occurrence": "Synthétique.",
    "applications": ["Police scientifique"]
  },
  {
    "name": "Rouge de Phénol",
    "formula": "C₁₉H₁₄O₅S",
    "composition": { "C": 19, "H": 14, "O": 5, "S": 1 },
    "molarMass": "354.38 g/mol",
    "category": "Indicateur pH",
    "summary": "Vire du jaune au rouge entre pH 6,8 et 8,4.",
    "occurrence": "Synthétique.",
    "applications": ["Culture cellulaire", "Piscines"]
  },
  {
    "name": "Camphre",
    "formula": "C₁₀H₁₆O",
    "composition": { "C": 10, "H": 16, "O": 1 },
    "molarMass": "152.23 g/mol",
    "category": "Terpénoïde",
    "summary": "Céton à odeur forte utilisé en médecine et comme plastifiant du celluloïd.",
    "occurrence": "Camphrier.",
    "applications": ["Baumes", "Feux d'artifice"]
  },
  {
    "name": "Carvone (L)",
    "formula": "C₁₀H₁₄O",
    "composition": { "C": 10, "H": 14, "O": 1 },
    "molarMass": "150.22 g/mol",
    "category": "Terpène / Arôme",
    "summary": "Odeur caractéristique de la menthe verte (isomère L) ou du carvi (isomère D).",
    "occurrence": "Menthe verte.",
    "applications": ["Arômes"]
  },
  {
    "name": "Linalol",
    "formula": "C₁₀H₁₈O",
    "composition": { "C": 10, "H": 18, "O": 1 },
    "molarMass": "154.25 g/mol",
    "category": "Alcool Terpénique",
    "summary": "Fragrance florale très commune évoquant le muguet et la lavande.",
    "occurrence": "Lavande, Menthe.",
    "applications": ["Parfumerie", "Hygiène"]
  },
  {
    "name": "Acide Palmitique",
    "formula": "C₁₆H₃₂O₂",
    "composition": { "C": 16, "H": 32, "O": 2 },
    "molarMass": "256.42 g/mol",
    "category": "Acide Gras Saturé",
    "summary": "L'acide gras le plus courant dans les organismes vivants.",
    "occurrence": "Huile de palme, Beurre.",
    "applications": ["Savons", "Bougies"]
  },
  {
    "name": "Acide Oléique",
    "formula": "C₁₈H₃₄O₂",
    "composition": { "C": 18, "H": 34, "O": 2 },
    "molarMass": "282.46 g/mol",
    "category": "Acide Gras Mono-insaturé",
    "summary": "Composant majeur de l'huile d'olive, bénéfique pour la santé cardiovasculaire.",
    "occurrence": "Huile d'olive.",
    "applications": ["Nutrition", "Cosmétique"]
  },
  {
    "name": "Toluène (Méthylbenzène)",
    "formula": "C₇H₈",
    "composition": { "C": 7, "H": 8 },
    "molarMass": "92.14 g/mol",
    "category": "Hydrocarbure Aromatique",
    "summary": "Solant industriel courant, substitut moins toxique du benzène.",
    "occurrence": "Goudron de houille.",
    "applications": ["Diluant peinture", "Octane booster"]
  },
  {
    "name": "o-Xylène (1,2-Diméthylbenzène)",
    "formula": "C₈H₁₀",
    "composition": { "C": 8, "H": 10 },
    "molarMass": "106.17 g/mol",
    "category": "Hydrocarbure",
    "summary": "Isomère du xylène utilisé pour la production d'anhydride phtalique.",
    "occurrence": "Pétrole brut.",
    "applications": ["Plastifiants"]
  },
  {
    "name": "p-Xylène (1,4-Diméthylbenzène)",
    "formula": "C₈H₁₀",
    "composition": { "C": 8, "H": 10 },
    "molarMass": "106.17 g/mol",
    "category": "Intermédiaire Pétrochimique",
    "summary": "Matière première pour l'acide téréphtalique et le PET (polyester).",
    "occurrence": "Réformage catalytique.",
    "applications": ["Bouteilles plastiques"]
  },
  {
    "name": "Mésitylène (1,3,5-Triméthylbenzène)",
    "formula": "C₉H₁₂",
    "composition": { "C": 9, "H": 12 },
    "molarMass": "120.19 g/mol",
    "category": "Solvant Aromatique",
    "summary": "Solvant symétrique utilisé en chimie organique et spécialités.",
    "occurrence": "Goudron de houille.",
    "applications": ["Additif carburant"]
  },
  {
    "name": "Catégorie de Grignard (Bromure de phénylmagnésium)",
    "formula": "C₆H₅MgBr",
    "composition": { "C": 6, "H": 5, "Mg": 1, "Br": 1 },
    "molarMass": "181.31 g/mol",
    "category": "Organomagnésien",
    "summary": "Réactif nucléophile puissant pour la formation de liaisons C-C.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de alcools tertiaires"]
  },
  {
    "name": "Catalyseur de Wilkinson",
    "formula": "[RhCl(PPh₃)₃]",
    "composition": { "Rh": 1, "Cl": 1, "P": 3, "C": 54, "H": 45 },
    "molarMass": "925.22 g/mol",
    "category": "Catalyseur au Rhodium",
    "summary": "Premier catalyseur homogène efficace pour l'hydrogénation des alcènes.",
    "occurrence": "Synthétique.",
    "applications": ["Hydrogénation"]
  },
  {
    "name": "Catalyseur de Schrock",
    "formula": "M(CH-t-Bu)(NAr)(OR)₂",
    "composition": { "Mo": 1, "C": 10, "H": 15, "N": 1, "O": 2 },
    "molarMass": "Variable",
    "category": "Complexe d'Alkylidène",
    "summary": "Catalyseur de métathèse des alcènes hautement réactif.",
    "occurrence": "Synthétique.",
    "applications": ["Polymérisation par ouverture de cycle (ROMP)"]
  },
  {
    "name": "Acide Trifluoroacétique (TFA)",
    "formula": "CF₃COOH",
    "composition": { "C": 2, "H": 1, "F": 3, "O": 2 },
    "molarMass": "114.02 g/mol",
    "category": "Acide Fort Organique",
    "summary": "Solvant et acide utilisé pour le déprotection des groupements Boc et t-Bu.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse peptidique", "HPLC (additif)"]
  },
  {
    "name": "Anhydride Trifluoroacétique (TFAA)",
    "formula": "(CF₃CO)₂O",
    "composition": { "C": 4, "F": 6, "O": 3 },
    "molarMass": "210.03 g/mol",
    "category": "Agent d'Acylation",
    "summary": "Réactif puissant pour introduire des groupements trifluoroacétyle.",
    "occurrence": "Synthétique.",
    "applications": ["Dérivatisation GC-MS"]
  },
  {
    "name": "Chlorure de Thionyle (SOCl2)",
    "formula": "SOCl₂",
    "composition": { "S": 1, "O": 1, "Cl": 2 },
    "molarMass": "118.97 g/mol",
    "category": "Agent de chloration",
    "summary": "Utilisé pour convertir les acides carboxyliques en chlorures d'acyle.",
    "occurrence": "Synthétique.",
    "applications": ["Batteries au lithium", "Pharmacie"]
  },
  {
    "name": "Chlorure de Sulfuryle (SO2Cl2)",
    "formula": "SO₂Cl₂",
    "composition": { "S": 1, "O": 2, "Cl": 2 },
    "molarMass": "134.97 g/mol",
    "category": "Réactif",
    "summary": "Agent de chloration et de sulfonation sélectif.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "Acétanilide",
    "formula": "C₈H₉NO",
    "composition": { "C": 8, "H": 9, "N": 1, "O": 1 },
    "molarMass": "135.16 g/mol",
    "category": "Amide Aromatique",
    "summary": "Ancien antipyrétique, précurseur de la synthèse du paracétamol.",
    "occurrence": "Synthétique.",
    "applications": ["Stabilisant pour H2O2"]
  },
  {
    "name": "Acide Sulfanilique",
    "formula": "C₆H₇NO₃S",
    "composition": { "C": 6, "H": 7, "N": 1, "O": 3, "S": 1 },
    "molarMass": "173.19 g/mol",
    "category": "Acide Aminosulfonique",
    "summary": "Utilisé en analyse pour la détection des nitrites (réactif de Griess).",
    "occurrence": "Synthétique.",
    "applications": ["Colorants azoïques"]
  },
  {
    "name": "Sulfanilamide",
    "formula": "C₆H₈N₂O₂S",
    "composition": { "C": 6, "H": 8, "N": 2, "O": 2, "S": 1 },
    "molarMass": "172.21 g/mol",
    "category": "Sulfonamide",
    "summary": "Le premier antibiotique de la classe des sulfamidés.",
    "occurrence": "Synthétique.",
    "applications": ["Infections bactériennes (historique)"]
  },
  {
    "name": "Gingérol (6-Gingérol)",
    "formula": "C₁₇H₂₆O₄",
    "composition": { "C": 17, "H": 26, "O": 4 },
    "molarMass": "294.39 g/mol",
    "category": "Phénol / Arôme",
    "summary": "Composé piquant majeur du gingembre frais.",
    "occurrence": "Gingembre.",
    "applications": ["Gastronomie", "Phytothérapie"]
  },
  {
    "name": "Shogaol (6-Shogaol)",
    "formula": "C₁₇H₂₄O₃",
    "composition": { "C": 17, "H": 24, "O": 3 },
    "molarMass": "276.37 g/mol",
    "category": "Arôme",
    "summary": "Produit de déshydratation du gingérol, deux fois plus piquant que ce dernier.",
    "occurrence": "Gingembre séché.",
    "applications": ["Épices"]
  },
  {
    "name": "Muscone",
    "formula": "C₁₆H₃₀O",
    "composition": { "C": 16, "H": 30, "O": 1 },
    "molarMass": "238.41 g/mol",
    "category": "Cétone macrocyclique",
    "summary": "Responsable de l'odeur animale du musc naturel.",
    "occurrence": "Musc (Cerf porte-musc).",
    "applications": ["Haute parfumerie"]
  },
  {
    "name": "Civétone",
    "formula": "C₁₇H₃₀O",
    "composition": { "C": 17, "H": 30, "O": 1 },
    "molarMass": "250.42 g/mol",
    "category": "Cétone de Musc",
    "summary": "L'un des plus anciens ingrédients de parfums, extrait de la civette.",
    "occurrence": "Civette.",
    "applications": ["Fragrances de caractère"]
  },
  {
    "name": "Squalane",
    "formula": "C₃₀H₆₂",
    "composition": { "C": 30, "H": 62 },
    "molarMass": "422.82 g/mol",
    "category": "Hydrocarbure / Émollient",
    "summary": "Version saturée et stable du squalène utilisée en cosmétique de luxe.",
    "occurrence": "Foie de requin, Olive.",
    "applications": ["Hydratation cutanée"]
  },
  {
    "name": "n-Pentane",
    "formula": "C₅H₁₂",
    "composition": { "C": 5, "H": 12 },
    "molarMass": "72.15 g/mol",
    "category": "Alcane",
    "summary": "Alcane liquide volatil utilisé comme agent d'expansion dans la mousse polystyrène.",
    "occurrence": "Gaz naturel, pétrole.",
    "applications": ["Solvant", "Géothermie"]
  },
  {
    "name": "n-Hexane",
    "formula": "C₆H₁₄",
    "composition": { "C": 6, "H": 14 },
    "molarMass": "86.18 g/mol",
    "category": "Solvant apolaire",
    "summary": "Utilisé pour extraire les huiles végétales des graines.",
    "occurrence": "Pétrole.",
    "applications": ["Extraction de l'huile de soja"]
  },
  {
    "name": "n-Heptane",
    "formula": "C₇H₁₆",
    "composition": { "C": 7, "H": 16 },
    "molarMass": "100.21 g/mol",
    "category": "Hydrocarbure",
    "summary": "Le point zéro de l'échelle d'octane pour le carburant automobile.",
    "occurrence": "Pétrole.",
    "applications": ["Référence de cliquetis"]
  },
  {
    "name": "n-Octane",
    "formula": "C₈H₁₈",
    "composition": { "C": 8, "H": 18 },
    "molarMass": "114.23 g/mol",
    "category": "Alcane",
    "summary": "Composant de l'essence, utilisé pour étudier la combustion.",
    "occurrence": "Pétrole.",
    "applications": ["Carburants"]
  },
  {
    "name": "Isooctane (2,2,4-Triméthylpentane)",
    "formula": "C₈H₁₈",
    "composition": { "C": 8, "H": 18 },
    "molarMass": "114.23 g/mol",
    "category": "Référence d'Octane",
    "summary": "Définit le point 100 de l'échelle d'octane.",
    "occurrence": "Synthétique (alkylat).",
    "applications": ["Carburant aviation"]
  },
  {
    "name": "n-Nonane",
    "formula": "C₉H₂₀",
    "composition": { "C": 9, "H": 20 },
    "molarMass": "128.26 g/mol",
    "category": "Hydrocarbure",
    "summary": "Constituant du kérosène et de l'essence.",
    "occurrence": "Pétrole.",
    "applications": ["Combustibles"]
  },
  {
    "name": "n-Décane",
    "formula": "C₁₀H₂₂",
    "composition": { "C": 10, "H": 22 },
    "molarMass": "142.29 g/mol",
    "category": "Alcane",
    "summary": "Utilisé comme solvant et dans les mélanges de carburants de référence.",
    "occurrence": "Pétrole.",
    "applications": ["Industrie"]
  },
  {
    "name": "Cyclopentane",
    "formula": "C₅H₁₀",
    "composition": { "C": 5, "H": 10 },
    "molarMass": "70.13 g/mol",
    "category": "Cycloalkane",
    "summary": "Agent gonflant écologique pour les réfrigérateurs sans CFC.",
    "occurrence": "Pétrole.",
    "applications": ["Isolation"]
  },
  {
    "name": "Cyclooctane",
    "formula": "C₈H₁₆",
    "composition": { "C": 8, "H": 16 },
    "molarMass": "112.21 g/mol",
    "category": "Cycloalcanes",
    "summary": "Utilisé en recherche pour l'étude des conformations de cycles moyens.",
    "occurrence": "Pétrole.",
    "applications": ["Études thermodynamiques"]
  },
  {
    "name": "Isopropanol (Alcool Isopropylique)",
    "formula": "C₃H₈O",
    "composition": { "C": 3, "H": 8, "O": 1 },
    "molarMass": "60.10 g/mol",
    "category": "Alcool de nettoyage",
    "summary": "Désinfectant ménager courant et solvant pour l'électronique.",
    "occurrence": "Synthétique.",
    "applications": ["Désinfection", "Nettoyage d'écrans"]
  },
  {
    "name": "Butanol-2",
    "formula": "C₄H₁₀O",
    "composition": { "C": 4, "H": 10, "O": 1 },
    "molarMass": "74.12 g/mol",
    "category": "Alcool Sec",
    "summary": "Utilisé comme solvant industriel et précurseur chimique.",
    "occurrence": "Synthétique.",
    "applications": ["Nettoyants industriels"]
  },
  {
    "name": "tert-Amyl Alcohol (TAA)",
    "formula": "C₅H₁₂O",
    "composition": { "C": 5, "H": 12, "O": 1 },
    "molarMass": "88.15 g/mol",
    "category": "Alcool tertiaire",
    "summary": "Solvant pour les réactions de Grignard et les polymérisations.",
    "occurrence": "Synthétique.",
    "applications": ["Laboratoire"]
  },
  {
    "name": "Acétophénone",
    "formula": "C₈H₈O",
    "composition": { "C": 8, "H": 8, "O": 1 },
    "molarMass": "120.15 g/mol",
    "category": "Cétone Aromatique",
    "summary": "Utilisée en parfumerie (odeur de cerise/pistache) et comme précurseur.",
    "occurrence": "Goudron de houille.",
    "applications": ["Fragrances", "Synthèse"]
  },
  {
    "name": "Benzophénone",
    "formula": "C₁₃H₁₀O",
    "composition": { "C": 13, "H": 10, "O": 1 },
    "molarMass": "182.22 g/mol",
    "category": "Photo-initiateur",
    "summary": "Agent protecteur contre les UV dans les parfums et les plastiques.",
    "occurrence": "Synthétique.",
    "applications": ["Encres UV", "Crèmes solaires"]
  },
  {
    "name": "Formiate de Méthyle",
    "formula": "C₂H₄O₂",
    "composition": { "C": 2, "H": 4, "O": 2 },
    "molarMass": "60.05 g/mol",
    "category": "Ester Simple",
    "summary": "Liquide volatil utilisé comme fumigant et intermédiaire.",
    "occurrence": "Synthétique.",
    "applications": ["Agriculture"]
  },
  {
    "name": "Propionate de Méthyle",
    "formula": "C₄H₈O₂",
    "composition": { "C": 4, "H": 8, "O": 2 },
    "molarMass": "88.11 g/mol",
    "category": "Ester de saveur",
    "summary": "Ester à l'odeur fruitée évoquant le rhum.",
    "occurrence": "Fromage (traces).",
    "applications": ["Solvant acrylique"]
  },
  {
    "name": "Propionate de Sodium",
    "formula": "C₃H₅NaO₂",
    "composition": { "C": 3, "H": 5, "Na": 1, "O": 2 },
    "molarMass": "96.06 g/mol",
    "category": "Conservateur",
    "summary": "Agent antifongique utilisé pour prévenir les moisissures dans le pain.",
    "occurrence": "Lait.",
    "applications": ["Boulangerie E281"]
  },
  {
    "name": "TEMPO",
    "formula": "C₉H₁₈NO",
    "composition": { "C": 9, "H": 18, "N": 1, "O": 1 },
    "molarMass": "156.25 g/mol",
    "category": "Radical Stable",
    "summary": "Radical nitroxyle utilisé comme catalyseur d'oxydation sélectif.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie des polysaccharides"]
  },
  {
    "name": "mCPBA",
    "formula": "C₇H₅ClO₃",
    "composition": { "C": 7, "H": 5, "Cl": 1, "O": 3 },
    "molarMass": "172.57 g/mol",
    "category": "Peracide",
    "summary": "Réactif standard pour l'époxydation des alcènes et l'oxydation de Baeyer-Villiger.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "n-Pentanol (Alcool Amylique)",
    "formula": "C₅H₁₂O",
    "composition": { "C": 5, "H": 12, "O": 1 },
    "molarMass": "88.15 g/mol",
    "category": "Alcool",
    "summary": "Utilisé comme solvant et dans la fabrication d'arômes.",
    "occurrence": "Fermentation.",
    "applications": ["Industrie pharmaceutique"]
  },
  {
    "name": "n-Hexanol",
    "formula": "C₆H₁₄O",
    "composition": { "C": 6, "H": 14, "O": 1 },
    "molarMass": "102.17 g/mol",
    "category": "Alcool linéaire",
    "summary": "Utilisé en parfumerie et comme intermédiaire chimique.",
    "occurrence": "Herbe coupée (traces).",
    "applications": ["Fragrances"]
  },
  {
    "name": "n-Heptanol",
    "formula": "C₇H₁₆O",
    "composition": { "C": 7, "H": 16, "O": 1 },
    "molarMass": "116.20 g/mol",
    "category": "Alcool",
    "summary": "Utilisé en recherche et pour la fabrication de plastifiants.",
    "occurrence": "Synthétique.",
    "applications": ["Solvant"]
  },
  {
    "name": "n-Octanol",
    "formula": "C₈H₁₈O",
    "composition": { "C": 8, "H": 18, "O": 1 },
    "molarMass": "130.23 g/mol",
    "category": "Référence Lipophile",
    "summary": "Utilisé pour mesurer le coefficient de partage octanol-eau (LogP).",
    "occurrence": "Synthétique.",
    "applications": ["Pharmacocinétique"]
  },
  {
    "name": "Pentanone-2",
    "formula": "C₅H₁₀O",
    "composition": { "C": 5, "H": 10, "O": 1 },
    "molarMass": "86.13 g/mol",
    "category": "Cétone",
    "summary": "Solvant pour les vernis et les peintures.",
    "occurrence": "Synthétique.",
    "applications": ["Dégraissage"]
  },
  {
    "name": "Pentanone-3",
    "formula": "C₅H₁₀O",
    "composition": { "C": 5, "H": 10, "O": 1 },
    "molarMass": "86.13 g/mol",
    "category": "Cétone symétrique",
    "summary": "Moins commune que l'isomère-2, utilisée en synthèse organique.",
    "occurrence": "Synthétique.",
    "applications": ["Solvant spécialisé"]
  },
  {
    "name": "Acétate de Butyle",
    "formula": "C₆H₁₂O₂",
    "composition": { "C": 6, "H": 12, "O": 2 },
    "molarMass": "116.16 g/mol",
    "category": "Ester",
    "summary": "Ester à odeur fruitée utilisé dans de nombreux solvants de peinture.",
    "occurrence": "Pommes.",
    "applications": ["Verreries", "Cosmétiques"]
  },
  {
    "name": "Acétate d'Isobutyle",
    "formula": "C₆H₁₂O₂",
    "composition": { "C": 6, "H": 12, "O": 2 },
    "molarMass": "116.16 g/mol",
    "category": "Ester / Fragrance",
    "summary": "Utilisé comme solvant pour la nitrocellulose et dans les parfums.",
    "occurrence": "Fruits.",
    "applications": ["Laques"]
  },
  {
    "name": "Acide Heptanoïque",
    "formula": "C₇H₁₄O₂",
    "composition": { "C": 7, "H": 14, "O": 2 },
    "molarMass": "130.18 g/mol",
    "category": "Acide Gras linéaire",
    "summary": "Utilisé pour fabriquer des lubrifiants synthétiques et des esters.",
    "occurrence": "Huile de ricin (dérivé).",
    "applications": ["Polymères"]
  },
  {
    "name": "Acide Octanoïque (Acide Caprylique)",
    "formula": "C₈H₁₆O₂",
    "composition": { "C": 8, "H": 16, "O": 2 },
    "molarMass": "144.21 g/mol",
    "category": "Acide Gras saturé",
    "summary": "Utilisé pour traiter les infections fongiques et comme additif alimentaire.",
    "occurrence": "Lait de coco.",
    "applications": ["Nutrition", "Désinfectants"]
  },
  {
    "name": "Butylamine",
    "formula": "C₄H₁₁N",
    "composition": { "C": 4, "H": 11, "N": 1 },
    "molarMass": "73.14 g/mol",
    "category": "Amine Primaire",
    "summary": "Matière première pour les pesticides, les produits pharmaceutiques et les émulsifiants.",
    "occurrence": "Synthétique.",
    "applications": ["Inhibiteurs de corrosion"]
  },
  {
    "name": "Butyronitrile",
    "formula": "C₄H₇N",
    "composition": { "C": 4, "H": 7, "N": 1 },
    "molarMass": "69.11 g/mol",
    "category": "Nitrile liquide",
    "summary": "Intermédiaire chimique pour la production de médicaments vétérinaires.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie chimique"]
  },
  {
    "name": "Cyclohexyl Méthyl Cétone",
    "formula": "C₈H₁₄O",
    "composition": { "C": 8, "H": 14, "O": 1 },
    "molarMass": "126.20 g/mol",
    "category": "Cétone",
    "summary": "Utilisée en parfumerie pour ses notes boisées.",
    "occurrence": "Synthétique.",
    "applications": ["Savons"]
  },
  {
    "name": "Isopropoxyde d'Aluminium",
    "formula": "C₉H₂₁AlO₃",
    "composition": { "C": 9, "H": 21, "Al": 1, "O": 3 },
    "molarMass": "204.24 g/mol",
    "category": "Alcoolate de métal",
    "summary": "Réactif clé pour l'oxydation de Meerwein-Ponndorf-Verley.",
    "occurrence": "Synthétique.",
    "applications": ["Réduction sélective"]
  },
  {
    "name": "Triflate d'Argent",
    "formula": "AgCF₃SO₃",
    "composition": { "Ag": 1, "C": 1, "F": 3, "S": 1, "O": 3 },
    "molarMass": "256.94 g/mol",
    "category": "Acide de Lewis / Sel d'argent",
    "summary": "Utilisé pour activer les halogénures d'alkyle et de glycosyle.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de glycosides"]
  },
  {
    "name": "Acide Dodécanoïque (Acide Laurique)",
    "formula": "C₁₂H₂₄O₂",
    "composition": { "C": 12, "H": 24, "O": 2 },
    "molarMass": "200.32 g/mol",
    "category": "Acide Gras",
    "summary": "Acide gras saturé à chaîne moyenne avec des propriétés antimicrobiennes.",
    "occurrence": "Huile de coco, Lait maternel.",
    "applications": ["Savonnerie", "Alimentation"]
  },
  {
    "name": "Acide Myristique (Acide Tétradécanoïque)",
    "formula": "C₁₄H₂₈O₂",
    "composition": { "C": 14, "H": 28, "O": 2 },
    "molarMass": "228.37 g/mol",
    "category": "Acide Gras Saturé",
    "summary": "Utilisé en cosmétique pour ses propriétés émollientes.",
    "occurrence": "Noix de muscade.",
    "applications": ["Crèmes de soin"]
  },
  {
    "name": "n-Undécanol",
    "formula": "C₁₁H₂₄O",
    "composition": { "C": 11, "H": 24, "O": 1 },
    "molarMass": "172.31 g/mol",
    "category": "Alcool gras",
    "summary": "Utilisé comme agent aromatique et dans les parfums.",
    "occurrence": "Agrumes (traces).",
    "applications": ["Arômes artificiels"]
  },
  {
    "name": "n-Dodécanol (Alcool Laurique)",
    "formula": "C₁₂H₂₆O",
    "composition": { "C": 12, "H": 26, "O": 1 },
    "molarMass": "186.33 g/mol",
    "category": "Alcool gras",
    "summary": "Matière première pour les tensioactifs (ex: Laurylsulfate de sodium).",
    "occurrence": "Huile de palmiste.",
    "applications": ["Détergents", "Lubrifiants"]
  },
  {
    "name": "Aldéhyde Caprique (Décanal)",
    "formula": "C₁₀H₂₀O",
    "composition": { "C": 10, "H": 20, "O": 1 },
    "molarMass": "156.27 g/mol",
    "category": "Aldéhyde",
    "summary": "Composant important de l'arôme d'orange.",
    "occurrence": "Huiles essentielles d'agrumes.",
    "applications": ["Arômes d'agrumes"]
  },
  {
    "name": "Aldéhyde Laurique (Dodécanal)",
    "formula": "C₁₂H₂₄O",
    "composition": { "C": 12, "H": 24, "O": 1 },
    "molarMass": "184.32 g/mol",
    "category": "Aldéhyde gras",
    "summary": "Note florale et cireuse utilisée en parfumerie fine.",
    "occurrence": "Coriandre.",
    "applications": ["Parfums de luxe"]
  },
  {
    "name": "Myristate de Méthyle",
    "formula": "C₁₅H₃₀O₂",
    "composition": { "C": 15, "H": 30, "O": 2 },
    "molarMass": "242.40 g/mol",
    "category": "Ester gras",
    "summary": "Ester utilisé en cosmétique et comme étalon en chromatographie.",
    "occurrence": "Iris.",
    "applications": ["Analyse chimique"]
  },
  {
    "name": "Palmitate d'Éthyle",
    "formula": "C₁₈H₃₆O₂",
    "composition": { "C": 18, "H": 36, "O": 2 },
    "molarMass": "284.48 g/mol",
    "category": "Ester d'acide gras",
    "summary": "Émollient présent dans les huiles végétales et les cires.",
    "occurrence": "Fruits tropicaux.",
    "applications": ["Sels capillaires"]
  },
  {
    "name": "Isododécane",
    "formula": "C₁₂H₂₆",
    "composition": { "C": 12, "H": 26 },
    "molarMass": "170.33 g/mol",
    "category": "Hydrocarbure ramifié",
    "summary": "Solvant hautement volatil utilisé dans le maquillage longue tenue.",
    "occurrence": "Synthétique.",
    "applications": ["Cosmétiques (Waterproof)"]
  },
  {
    "name": "Propionamide",
    "formula": "C₃H₇NO",
    "composition": { "C": 3, "H": 7, "N": 1, "O": 1 },
    "molarMass": "73.09 g/mol",
    "category": "Amide linéaire",
    "summary": "Dérivé de l'acide propionique, utilisé comme intermédiaire de synthèse.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche"]
  },
  {
    "name": "Butyramide",
    "formula": "C₄H₉NO",
    "composition": { "C": 4, "H": 9, "N": 1, "O": 1 },
    "molarMass": "87.12 g/mol",
    "category": "Amide",
    "summary": "Utilisé en pharmacie pour la synthèse de produits dérivés.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse médicinale"]
  },
  {
    "name": "Dipropylamine",
    "formula": "C₆H₁₅N",
    "composition": { "C": 6, "H": 15, "N": 1 },
    "molarMass": "101.19 g/mol",
    "category": "Amide Secondaire",
    "summary": "Intermédiaire pour la production d'herbicides sélectifs.",
    "occurrence": "Synthétique.",
    "applications": ["Agrochimie"]
  },
  {
    "name": "Tripropylamine",
    "formula": "C₉H₂₁N",
    "composition": { "C": 9, "H": 21, "N": 1 },
    "molarMass": "143.27 g/mol",
    "category": "Amine Tertiaire",
    "summary": "Utilisée comme catalyseur et dans la fabrication d'électrodépositions.",
    "occurrence": "Synthétique.",
    "applications": ["Galvanoplastie"]
  },
  {
    "name": "Chlorure de Benzyle",
    "formula": "C₇H₇Cl",
    "composition": { "C": 7, "H": 7, "Cl": 1 },
    "molarMass": "126.58 g/mol",
    "category": "Agent Alkylant",
    "summary": "Réactif important pour introduire le groupement benzyle.",
    "occurrence": "Synthétique.",
    "applications": ["Plastifiants", "Parfums"]
  },
  {
    "name": "Alcool Benzylique",
    "formula": "C₇H₈O",
    "composition": { "C": 7, "H": 8, "O": 1 },
    "molarMass": "108.14 g/mol",
    "category": "Alcool Aromatique",
    "summary": "Conservateur et solvant à odeur florale douce.",
    "occurrence": "Jasmin, Jacinthe.",
    "applications": ["Cosmétique E1519"]
  },
  {
    "name": "Benzaldéhyde",
    "formula": "C₇H₆O",
    "composition": { "C": 7, "H": 6, "O": 1 },
    "molarMass": "106.12 g/mol",
    "category": "Aldéhyde Aromatique",
    "summary": "Responsable de l'odeur caractéristique de l'amande amère.",
    "occurrence": "Amandes amères.",
    "applications": ["Arômes", "Colorants"]
  },
  {
    "name": "Acide Benzoïque",
    "formula": "C₇H₆O₂",
    "composition": { "C": 7, "H": 6, "O": 2 },
    "molarMass": "122.12 g/mol",
    "category": "Conservateur alimentaire",
    "summary": "Inhibe la croissance des levures et des moisissures.",
    "occurrence": "Résines végétales.",
    "applications": ["Additif E210"]
  },
  {
    "name": "Benzoate de Sodium",
    "formula": "C₇H₅NaO₂",
    "composition": { "C": 7, "H": 5, "Na": 1, "O": 2 },
    "molarMass": "144.11 g/mol",
    "category": "Agent de conservation",
    "summary": "Forme soluble de l'acide benzoïque, très utilisé dans les sodas.",
    "occurrence": "Synthétique.",
    "applications": ["Alimentation E211"]
  },
  {
    "name": "Acide Salicylique",
    "formula": "C₇H₆O₃",
    "composition": { "C": 7, "H": 6, "O": 3 },
    "molarMass": "138.12 g/mol",
    "category": "BHA (Bêta-Hydroxy-Acide)",
    "summary": "Précurseur de l'aspirine et ingrédient clé contre l'acné.",
    "occurrence": "Écorce de saule.",
    "applications": ["Dermatologie"]
  },
  {
    "name": "Salicylate de Méthyle (Huile de Gaulthérie)",
    "formula": "C₈H₈O₃",
    "composition": { "C": 8, "H": 8, "O": 3 },
    "molarMass": "152.15 g/mol",
    "category": "Analgésique topique",
    "summary": "Ester à odeur de camphre rafraîchissante, utilisé en rubs musculaires.",
    "occurrence": "Gaulthérie.",
    "applications": ["Baumes chauffants"]
  },
  {
    "name": "Chlorobenzène",
    "formula": "C₆H₅Cl",
    "composition": { "C": 6, "H": 5, "Cl": 1 },
    "molarMass": "112.56 g/mol",
    "category": "Solvant halogéné",
    "summary": "Liquide à point d'ébullition élevé utilisé autrefois pour produire le DDT.",
    "occurrence": "Synthétique.",
    "applications": ["Intermédiaire chimique"]
  },
  {
    "name": "Nitrobenzène",
    "formula": "C₆H₅NO₂",
    "composition": { "C": 6, "H": 5, "N": 1, "O": 2 },
    "molarMass": "123.11 g/mol",
    "category": "Intermédiaire industriel",
    "summary": "Utilisé principalement pour la fabrication de l'aniline.",
    "occurrence": "Synthétique.",
    "applications": ["Production de colorants"]
  },
  {
    "name": "Aniline",
    "formula": "C₆H₇N",
    "composition": { "C": 6, "H": 7, "N": 1 },
    "molarMass": "93.13 g/mol",
    "category": "Amine Aromatique",
    "summary": "Base fondamentale pour l'industrie du caoutchouc et des colorants.",
    "occurrence": "Indigo.",
    "applications": ["Polyuréthanes", "Teintures"]
  },
  {
    "name": "Phénol",
    "formula": "C₆H₆O",
    "composition": { "C": 6, "H": 6, "O": 1 },
    "molarMass": "94.11 g/mol",
    "category": "Composé Aromatique Hydroxylé",
    "summary": "Premier antiseptique de chirurgie (Lister), aujourd'hui précurseur plastique.",
    "occurrence": "Goudron de houille.",
    "applications": ["Résines phénoliques"]
  },
  {
    "name": "Catéchol (1,2-Dihydroxybenzène)",
    "formula": "C₆H₆O₂",
    "composition": { "C": 6, "H": 6, "O": 2 },
    "molarMass": "110.11 g/mol",
    "category": "Polyphénol",
    "summary": "Intermédiaire pour la production de pesticides, d'arômes et de médicaments.",
    "occurrence": "Fruits, Légumes (brunit à l'air).",
    "applications": ["Photographie", "Synthèse de catécholamines"]
  },
  {
    "name": "Résorcinol (1,3-Dihydroxybenzène)",
    "formula": "C₆H₆O₂",
    "composition": { "C": 6, "H": 6, "O": 2 },
    "molarMass": "110.11 g/mol",
    "category": "Phénol",
    "summary": "Utilisé dans les adhésifs pour pneus et dans les traitements topiques.",
    "occurrence": "Arganier (huile).",
    "applications": ["Cosmétique", "Résines"]
  },
  {
    "name": "Hydroquinone (1,4-Dihydroxybenzène)",
    "formula": "C₆H₆O₂",
    "composition": { "C": 6, "H": 6, "O": 2 },
    "molarMass": "110.11 g/mol",
    "category": "Agent Réducteur",
    "summary": "Développeur photographique et inhibiteur de polymérisation efficace.",
    "occurrence": "Bombardier (coléoptère).",
    "applications": ["Blanchiment cutané", "Stabilisant"]
  },
  {
    "name": "Pyrogallol (1,2,3-Trihydroxybenzène)",
    "formula": "C₆H₆O₃",
    "composition": { "C": 6, "H": 6, "O": 3 },
    "molarMass": "126.11 g/mol",
    "category": "Antioxydant",
    "summary": "Capable d'absorber l'oxygène de l'air en solution basique.",
    "occurrence": "Écorce de chêne.",
    "applications": ["Analyse des gaz", "Photographie"]
  },
  {
    "name": "o-Crésol",
    "formula": "C₇H₈O",
    "composition": { "C": 7, "H": 8, "O": 1 },
    "molarMass": "108.14 g/mol",
    "category": "Phénol",
    "summary": "Intermédiaire pour les résines époxy et les colorants.",
    "occurrence": "Goudron de houille.",
    "applications": ["Désinfectants"]
  },
  {
    "name": "m-Crésol",
    "formula": "C₇H₈O",
    "composition": { "C": 7, "H": 8, "O": 1 },
    "molarMass": "108.14 g/mol",
    "category": "Cresol",
    "summary": "Utilisé pour synthétiser des antioxydants comme le BHT.",
    "occurrence": "Goudron de bois.",
    "applications": ["Parfumerie (esters)"]
  },
  {
    "name": "p-Crésol",
    "formula": "C₇H₈O",
    "composition": { "C": 7, "H": 8, "O": 1 },
    "molarMass": "108.14 g/mol",
    "category": "Isomère",
    "summary": "Produit par les bactéries intestinales, précurseur de plastifiants.",
    "occurrence": "Sueur de cheval, Urine.",
    "applications": ["Arômes"]
  },
  {
    "name": "Phthalate de Diméthyle (DMP)",
    "formula": "C₁₀H₁₀O₄",
    "composition": { "C": 10, "H": 10, "O": 4 },
    "molarMass": "194.18 g/mol",
    "category": "Plastifiant / Répulsif",
    "summary": "Utilisé comme répulsif contre les insectes et plastifiant pour celluloïd.",
    "occurrence": "Synthétique.",
    "applications": ["Insecticides"]
  },
  {
    "name": "Phthalate de Diéthyle (DEP)",
    "formula": "C₁₂H₁₄O₄",
    "composition": { "C": 12, "H": 14, "O": 4 },
    "molarMass": "222.24 g/mol",
    "category": "Plastifiant",
    "summary": "Fréquemment utilisé pour dénaturer l'alcool et stabiliser les fragrances.",
    "occurrence": "Synthétique.",
    "applications": ["Cosmétique"]
  },
  {
    "name": "Isophorone",
    "formula": "C₉H₁₄O",
    "composition": { "C": 9, "H": 14, "O": 1 },
    "molarMass": "138.21 g/mol",
    "category": "Cétone Cyclique alpha-bêta insaturée",
    "summary": "Solvant puissant pour les peintures et les adhésifs.",
    "occurrence": "Synthétique.",
    "applications": ["Intermédiaire de synthèse"]
  },
  {
    "name": "Mésityle Oxyde",
    "formula": "C₆H₁₀O",
    "composition": { "C": 6, "H": 10, "O": 1 },
    "molarMass": "98.14 g/mol",
    "category": "Cétone insaturée",
    "summary": "Produit de condensation de l'acétone, utilisé comme solvant.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie chimique"]
  },
  {
    "name": "Aldéhyde Cinnamique",
    "formula": "C₉H₈O",
    "composition": { "C": 9, "H": 8, "O": 1 },
    "molarMass": "132.16 g/mol",
    "category": "Composé Aromatique",
    "summary": "Donne l'odeur et le goût caractéristiques de la cannelle.",
    "occurrence": "Cannelle.",
    "applications": ["Gommes à mâcher", "Parfums"]
  },
  {
    "name": "Acide Cinnamique",
    "formula": "C₉H₈O₂",
    "composition": { "C": 9, "H": 8, "O": 2 },
    "molarMass": "148.16 g/mol",
    "category": "Acide Aromatique",
    "summary": "Précurseur de nombreux produits naturels et édulcorants.",
    "occurrence": "Baume du Pérou.",
    "applications": ["Industrie cosmétique"]
  },
  {
    "name": "Coumarine",
    "formula": "C₉H₆O₂",
    "composition": { "C": 9, "H": 6, "O": 2 },
    "molarMass": "146.14 g/mol",
    "category": "Lactone",
    "summary": "Odeur de foin fraîchement coupé, interdite comme additif alimentaire direct.",
    "occurrence": "Fève tonka, Mélilot.",
    "applications": ["Parfumerie"]
  },
  {
    "name": "Ombelliférone",
    "formula": "C₉H₆O₃",
    "composition": { "C": 9, "H": 6, "O": 3 },
    "molarMass": "162.14 g/mol",
    "category": "Coumarine Hydroxylée",
    "summary": "Fluorescente sous UV, utilisée comme crème solaire naturelle.",
    "occurrence": "Ombellifères.",
    "applications": ["Cosmétique"]
  },
  {
    "name": "Scolétine",
    "formula": "C₁₀H₈O₄",
    "composition": { "C": 10, "H": 8, "O": 4 },
    "molarMass": "192.17 g/mol",
    "category": "Coumarine",
    "summary": "Possède des propriétés anti-inflammatoires et régulatrices sur les plantes.",
    "occurrence": "Chicorée.",
    "applications": ["Phytothérapie"]
  },
  {
    "name": "Apséine",
    "formula": "C₁₀H₈O₃",
    "composition": { "C": 10, "H": 8, "O": 3 },
    "molarMass": "176.17 g/mol",
    "category": "Composé Phénolique",
    "summary": "Molécule simplifiée issue de l'analyse structurelle des tanins.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche"]
  },
  {
    "name": "P-Anisaldéhyde",
    "formula": "C₈H₈O₂",
    "composition": { "C": 8, "H": 8, "O": 2 },
    "molarMass": "136.15 g/mol",
    "category": "Aldéhyde",
    "summary": "Dérivé de l'aneth, utilisé pour son arôme doux et anisé.",
    "occurrence": "Anis.",
    "applications": ["Végétaux", "Industrie du goût"]
  },
  {
    "name": "Quinine",
    "formula": "C₂₀H₂₄N₂O₂",
    "composition": { "C": 20, "H": 24, "N": 2, "O": 2 },
    "molarMass": "324.42 g/mol",
    "category": "Alcaloïde Quinoléique",
    "summary": "Médicament historique contre le paludisme, donne son amertume à l'eau tonique.",
    "occurrence": "Écorce de quinquina.",
    "applications": ["Médecine", "Boissons (Tonic)"]
  }
];
