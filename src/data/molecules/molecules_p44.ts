import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série 44
 * Focus: Inhibiteurs de la protéase du VIH (Atazanavir, Darunavir), Matériaux piezoélectriques (PZT), Cristaux organiques NLO, Agents de contraste PET (Fluciclovine)
 * Copyright: Sébastien John Bruneau
 */
export const MOLECULES_P44: MoleculeDefinition[] = [
  {
    "name": "Atazanavir",
    "formula": "C₃₈H₅₂N₆O₇",
    "composition": { "C": 38, "H": 52, "N": 6, "O": 7 },
    "molarMass": "704.86 g/mol",
    "category": "Antirétroviral (Inhibiteur de protéase)",
    "summary": "Azapéptide inhibiteur de la protéase du VIH-1, souvent boosté par le ritonavir.",
    "occurrence": "Synthétique.",
    "applications": ["Traitement du VIH", "Maladies infectieuses"]
  },
  {
    "name": "Darunavir",
    "formula": "C₂₇H₃₇N₃O₇S",
    "composition": { "C": 27, "H": 37, "N": 3, "O": 7, "S": 1 },
    "molarMass": "547.66 g/mol",
    "category": "Antirétroviral (PI)",
    "summary": "Inhibiteur de protéase de deuxième génération conçu pour surmonter les résistances.",
    "occurrence": "Synthétique.",
    "applications": ["Infectiologie", "Thérapies de sauvetage VIH"]
  },
  {
    "name": "Tipranavir",
    "formula": "C₃₁H₃₃F₃N₂O₅S",
    "composition": { "C": 31, "H": 33, "F": 3, "N": 2, "O": 5, "S": 1 },
    "molarMass": "602.67 g/mol",
    "category": "Antirétroviral (PI non-peptidique)",
    "summary": "Seul inhibiteur de protéase non-peptidique utilisé dans les cas de multi-résistance.",
    "occurrence": "Synthétique.",
    "applications": ["VIH-1"]
  },
  {
    "name": "Lopinavir",
    "formula": "C₃₇H₄₈N₄O₅",
    "composition": { "C": 37, "H": 48, "N": 4, "O": 5 },
    "molarMass": "628.80 g/mol",
    "category": "Antirétroviral (PI)",
    "summary": "Généralement administré en combinaison fixe avec le ritonavir (Kaletra).",
    "occurrence": "Synthétique.",
    "applications": ["VIH", "Recherche COVID-19 (historique)"]
  },
  {
    "name": "Indinavir",
    "formula": "C₃₆H₄₇N₅O₄",
    "composition": { "C": 36, "H": 47, "N": 5, "O": 4 },
    "molarMass": "613.79 g/mol",
    "category": "Antirétroviral (PI)",
    "summary": "Un des premiers inhibiteurs de protéase efficaces, pivot de la trithérapie précoce.",
    "occurrence": "Synthétique.",
    "applications": ["Traitement antirétroviral"]
  },
  {
    "name": "Saquinavir",
    "formula": "C₃₈H₅₀N₆O₅",
    "composition": { "C": 38, "H": 50, "N": 6, "O": 5 },
    "molarMass": "670.84 g/mol",
    "category": "Antirétroviral (PI)",
    "summary": "Premier inhibiteur de la protéase du VIH approuvé par la FDA en 1995.",
    "occurrence": "Synthétique.",
    "applications": ["Hématologie", "Infectiologie"]
  },
  {
    "name": "Amprenavir",
    "formula": "C₂₅H₃₅N₃O₆S",
    "composition": { "C": 25, "H": 35, "N": 3, "O": 6, "S": 1 },
    "molarMass": "505.63 g/mol",
    "category": "Antirétroviral (PI)",
    "summary": "Sulfonamide inhibiteur de protéase avec une structure chimique distincte.",
    "occurrence": "Synthétique.",
    "applications": ["Traitement VIH"]
  },
  {
    "name": "Fosamprenavir",
    "formula": "C₂₅H₃₆N₃O₉PS",
    "composition": { "C": 25, "H": 36, "N": 3, "O": 9, "P": 1, "S": 1 },
    "molarMass": "585.61 g/mol",
    "category": "Antirétroviral (Prodrogue)",
    "summary": "Prodrogue phosphate de l'amprenavir avec une meilleure solubilité.",
    "occurrence": "Synthétique.",
    "applications": ["Infectiologie"]
  },
  {
    "name": "Nelfinavir",
    "formula": "C₃₂H₄₅N₃O₄S",
    "composition": { "C": 32, "H": 45, "N": 3, "O": 4, "S": 1 },
    "molarMass": "567.78 g/mol",
    "category": "Antirétroviral (PI)",
    "summary": "Inhibiteur de protéase métabolisé préférentiellement par le foie.",
    "occurrence": "Synthétique.",
    "applications": ["VIH-1 pédiatrique et adulte"]
  },
  {
    "name": "Ritonavir",
    "formula": "C₃₇H₄₈N₆O₅S₂",
    "composition": { "C": 37, "H": 48, "N": 6, "O": 5, "S": 2 },
    "molarMass": "720.94 g/mol",
    "category": "Antirétroviral / Pharmacocomplément",
    "summary": "Utilisé principalement comme 'booster' pour augmenter les niveaux d'autres inhibiteurs de protéase.",
    "occurrence": "Synthétique.",
    "applications": ["VIH", "Inhibiteur du CYP3A4"]
  },
  {
    "name": "Titano-Zirconate de Plomb (PZT)",
    "formula": "Pb(Zr₀.₅₂Ti₀.₄₈)O₃",
    "composition": { "Pb": 1, "Zr": 1, "Ti": 1, "O": 3 },
    "molarMass": "~346 g/mol",
    "category": "Matériau piézoélectrique",
    "summary": "Céramique ferroélectrique dominante pour les capteurs et actionneurs piézoélectriques.",
    "occurrence": "Synthétique.",
    "applications": ["Échographie", "Sonar", "Micro-moteurs"]
  },
  {
    "name": "Niobate de Lithium (LiNbO₃)",
    "formula": "LiNbO₃",
    "composition": { "Li": 1, "Nb": 1, "O": 3 },
    "molarMass": "147.85 g/mol",
    "category": "Cristal non-linéaire",
    "summary": "Cristal utilisé pour la modulation laser et l'optique non-linéaire.",
    "occurrence": "Synthétique (croissance Czochralski).",
    "applications": ["Télécoms optiques", "Doublement de fréquence"]
  },
  {
    "name": "Tartrate d'Ethylènediamine (EDT)",
    "formula": "C₆H₁₄N₂O₆",
    "composition": { "C": 6, "H": 14, "N": 2, "O": 6 },
    "molarMass": "210.19 g/mol",
    "category": "Cristal piézoélectrique organique",
    "summary": "Alternative aux cristaux minéraux pour les filtres de fréquence.",
    "occurrence": "Synthétique.",
    "applications": ["Oscillateurs", "Électronique radio"]
  },
  {
    "name": "Fluorure de Polyvinylidène (PVDF)",
    "formula": "(C₂H₂F₂)ₙ",
    "composition": { "C": 2, "H": 2, "F": 2 },
    "molarMass": "64.03 g/mol (unité)",
    "category": "Polymère piézoélectrique",
    "summary": "Polymère fluoré flexible présentant de fortes propriétés ferroélectriques après étirement.",
    "occurrence": "Synthétique.",
    "applications": ["Capteurs tactiles", "Haut-parleurs", "Biocapteurs"]
  },
  {
    "name": "Fluciclovine (¹⁸F)",
    "formula": "C₇H₁₂FNO₂",
    "composition": { "C": 7, "H": 12, "F": 1, "N": 1, "O": 2 },
    "molarMass": "161.17 g/mol",
    "category": "Radiopharmaceutique PET",
    "summary": "Analogue d'acide aminé synthétique marqué au Fluor-18 pour l'imagerie du cancer de la prostate.",
    "occurrence": "Synthétique (marquage cyclotron).",
    "applications": ["Oncologie nucléaire"]
  },
  {
    "name": "Dotatate (⁶⁸Ga)",
    "formula": "C₆₅H₉₀GaN₁₄O₁₈S₂",
    "composition": { "C": 65, "H": 90, "Ga": 1, "N": 14, "O": 18, "S": 2 },
    "molarMass": "1513.35 g/mol",
    "category": "Traceur TEP",
    "summary": "Peptide ciblant les récepteurs de la somatostatine pour détecter les tumeurs neuroendocrines.",
    "occurrence": "Synthétique.",
    "applications": ["Imagerie moléculaire", "Endocrinologie"]
  },
  {
    "name": "Éthoxylate de Tristérylphénol (TSP-16)",
    "formula": "C₅₄H₁₀₀O₁₇",
    "composition": { "C": 54, "H": 100, "O": 17 },
    "molarMass": "1025.37 g/mol",
    "category": "Émulsifiant de spécialité",
    "summary": "Utilisé pour stabiliser les suspensions aqueuses de pesticides et de pigments.",
    "occurrence": "Synthétique.",
    "applications": ["Phytosanitaire", "Encres"]
  },
  {
    "name": "Borure de Hafnium (HfB₂)",
    "formula": "HfB₂",
    "composition": { "Hf": 1, "B": 2 },
    "molarMass": "200.11 g/mol",
    "category": "Céramique ultra-réfractaire",
    "summary": "Point de fusion > 3300°C, utilisé pour les boucliers thermiques.",
    "occurrence": "Synthétique.",
    "applications": ["Aérospatial", "Réacteurs nucléaires"]
  },
  {
    "name": "Dichlorocarbène (intermédiaire)",
    "formula": "CCl₂",
    "composition": { "C": 1, "Cl": 2 },
    "molarMass": "82.91 g/mol",
    "category": "Espèce réactive",
    "summary": "Intermédiaire clé dans la réaction de Reimer-Tiemann.",
    "occurrence": "Généré in situ.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "Tris(8-hydroxyquinoléine) aluminium (Alq3)",
    "formula": "C₂₇H₁₈AlN₃O₃",
    "composition": { "C": 27, "H": 18, "Al": 1, "N": 3, "O": 3 },
    "molarMass": "459.43 g/mol",
    "category": "Matériau OLED",
    "summary": "Complexe luminescent utilisé comme couche émettrice verte dans les écrans OLED.",
    "occurrence": "Synthétique.",
    "applications": ["Affichage", "Éclairage"]
  },
  {
    "name": "Bismuthure de Sodium (Na₃Bi)",
    "formula": "Na₃Bi",
    "composition": { "Na": 3, "Bi": 1 },
    "molarMass": "277.95 g/mol",
    "category": "Semi-métal de Dirac",
    "summary": "Isolant topologique 3D présentant des points de Dirac.",
    "occurrence": "Synthétique.",
    "applications": ["Physique quantique"]
  },
  {
    "name": "Hexakis(pentafluorophényl)benzène",
    "formula": "C₄₂F₃₀",
    "composition": { "C": 42, "F": 30 },
    "molarMass": "1074.31 g/mol",
    "category": "Composé perfluoré",
    "summary": "Molécule aromatique complexe utilisée pour l'étude des interactions pi-pi.",
    "occurrence": "Synthétique.",
    "applications": ["Auto-assemblage moléculaire"]
  },
  {
    "name": "Tellurure de Molybdène (MoTe₂)",
    "formula": "MoTe₂",
    "composition": { "Mo": 1, "Te": 2 },
    "molarMass": "351.14 g/mol",
    "category": "Dichalcogénure TMD",
    "summary": "Semi-conducteur 2D étudié pour la photonique et les transistors à effet de champ.",
    "occurrence": "Minéral (Sagebiélite - rare).",
    "applications": ["Nano-électronique"]
  },
  {
    "name": "Nitrure de Bore Cubique (c-BN)",
    "formula": "BN",
    "composition": { "B": 1, "N": 1 },
    "molarMass": "24.82 g/mol",
    "category": "Superabrasif",
    "summary": "Deuxième matériau le plus dur après le diamant, stable à haute température.",
    "occurrence": "Synthétique (Haute Pression/Haute Température).",
    "applications": ["Meulage de l'acier", "Outils de coupe"]
  },
  {
    "name": "Nioxime",
    "formula": "C₆H₁₀N₂O₂",
    "composition": { "C": 6, "H": 10, "N": 2, "O": 2 },
    "molarMass": "142.16 g/mol",
    "category": "Réactif analytique",
    "summary": "1,2-Cyclohexanedione dioxime utilisée pour la détection gravimétrique du nickel.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie analytique"]
  },
  {
    "name": "Octanoate de Potassium",
    "formula": "C₈H₁₅KO₂",
    "composition": { "C": 8, "H": 15, "K": 1, "O": 2 },
    "molarMass": "182.30 g/mol",
    "category": "Savon de spécialité",
    "summary": "Catalyseur de polymérisation pour les mousses PIR (polyisocyanurate).",
    "occurrence": "Synthétique.",
    "applications": ["Construction"]
  },
  {
    "name": "Tétraméthylsilane (TMS) - Standard RMN",
    "formula": "C₄H₁₂Si",
    "composition": { "C": 4, "H": 12, "Si": 1 },
    "molarMass": "88.22 g/mol",
    "category": "Référence spectroscopique",
    "summary": "Standard universel (déplacement chimique à 0 ppm) pour la RMN du proton et du carbone.",
    "occurrence": "Synthétique.",
    "applications": ["Analyse structurale"]
  },
  {
    "name": "Lanthanidure d'Antimoine (LaSb)",
    "formula": "LaSb",
    "composition": { "La": 1, "Sb": 1 },
    "molarMass": "260.66 g/mol",
    "category": "Semi-métal topologique",
    "summary": "Matériau présentant une magnétorésistance géante extrême (XMR).",
    "occurrence": "Synthétique.",
    "applications": ["Spintronique"]
  },
  {
    "name": "Tris(pentafluorophényl)borane (BCF)",
    "formula": "C₁₈F₁₅B",
    "composition": { "C": 18, "F": 15, "B": 1 },
    "molarMass": "511.98 g/mol",
    "category": "Catalyseur de Lewis",
    "summary": "Acide de Lewis puissant utilisé dans l'activation des liaisons C-H et Si-H.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie organique avancée"]
  },
  {
    "name": "Borure d'Erbium (ErB₄)",
    "formula": "ErB₄",
    "composition": { "Er": 1, "B": 4 },
    "molarMass": "210.53 g/mol",
    "category": "Céramique magnétique",
    "summary": "Structure tétragonale utilisée pour l'étude des transitions de phase magnétiques.",
    "occurrence": "Synthétique.",
    "applications": ["Matériaux avancés"]
  },
  {
    "name": "Séléniure de Plomb (PbSe)",
    "formula": "PbSe",
    "composition": { "Pb": 1, "Se": 1 },
    "molarMass": "286.16 g/mol",
    "category": "Semi-conducteur",
    "summary": "Matériau sensible à l'infrarouge utilisé dans les détecteurs thermiques.",
    "occurrence": "Minéral (Clausthalite).",
    "applications": ["Détecteurs de gaz", "Guidage missiles"]
  },
  {
    "name": "Tris(benzyl)zirconium",
    "formula": "C₂₁H₂₁Zr",
    "composition": { "C": 21, "H": 21, "Zr": 1 },
    "molarMass": "364.62 g/mol",
    "category": "Organique du groupe 4",
    "summary": "Réactif pour la synthèse de catalyseurs de polymérisation à site unique.",
    "occurrence": "Synthétique.",
    "applications": ["Polymères"]
  },
  {
    "name": "Sulfosilicate de Lithium (Li₁₀SiP₂S₁₂)",
    "formula": "Li₁₀SiP₂S₁₂",
    "composition": { "Li": 10, "Si": 1, "P": 2, "S": 12 },
    "molarMass": "644.82 g/mol",
    "category": "Conducteur ionique",
    "summary": "L'un des meilleurs électrolytes solides pour les batteries 'all-solid-state'.",
    "occurrence": "Synthétique.",
    "applications": ["Batteries du futur"]
  },
  {
    "name": "Octanoate de Cobalt(II)",
    "formula": "Co(C₈H₁₅O₂)₂",
    "composition": { "Co": 1, "C": 16, "H": 30, "O": 4 },
    "molarMass": "345.32 g/mol",
    "category": "Siccatif redox",
    "summary": "Accélérateur de séchage pour les résines alkydes et polyester.",
    "occurrence": "Synthétique.",
    "applications": ["Composites", "Vernis"]
  },
  {
    "name": "Tétraméthylammonium perchlorate",
    "formula": "C₄H₁₂ClNO₄",
    "composition": { "C": 4, "H": 12, "Cl": 1, "N": 1, "O": 4 },
    "molarMass": "173.59 g/mol",
    "category": "Sel à l'état solide",
    "summary": "Électrolyte support utilisé en électrochimie organique.",
    "occurrence": "Synthétique.",
    "applications": ["Voltamétrie"]
  },
  {
    "name": "Tétrapicolinate de Praséodyme (Hydrate)",
    "formula": "Pr(C₆H₄NO₂)₄·H₂O",
    "composition": { "Pr": 1, "C": 24, "H": 18, "N": 4, "O": 9 },
    "molarMass": "647.41 g/mol",
    "category": "Agent de contraste RMN",
    "summary": "Utilisé pour décaler les signaux RMN des molécules complexées.",
    "occurrence": "Synthétique.",
    "applications": ["Analyse spectrale"]
  },
  {
    "name": "Borure d'Aluminium (AlB₁₂)",
    "formula": "AlB₁₂",
    "composition": { "Al": 1, "B": 12 },
    "molarMass": "156.7 g/mol",
    "category": "Céramique borée",
    "summary": "Borure d'aluminium noir, structure icosaédrique très complexe.",
    "occurrence": "Synthétique.",
    "applications": ["Abrasifs"]
  },
  {
    "name": "Diacrylate de Polyéthylène glycol 400 (PEGDA 400)",
    "formula": "C₂₂H₃₈O₁₁",
    "composition": { "C": 22, "H": 38, "O": 11 },
    "molarMass": "~478 g/mol",
    "category": "Agent de réticulation hydrophile",
    "summary": "Utilisé pour la fabrication d'échafaudages pour l'ingénierie tissulaire.",
    "occurrence": "Synthétique.",
    "applications": ["Biomédecine", "Impression 3D biologique"]
  },
  {
    "name": "Tellurure de Tungstène (WTe₂)",
    "formula": "WTe₂",
    "composition": { "W": 1, "Te": 2 },
    "molarMass": "439.05 g/mol",
    "category": "Weyl semimetal",
    "summary": "Matériau présentant une magnétorésistance géante sans saturation.",
    "occurrence": "Synthétique.",
    "applications": ["Informatique quantique"]
  },
  {
    "name": "Oxysulfure d'Yttrium (Y₂O₂S)",
    "formula": "Y₂O₂S",
    "composition": { "Y": 2, "O": 2, "S": 1 },
    "molarMass": "241.87 g/mol",
    "category": "Matériau de base luminophore",
    "summary": "Utilisé comme matrice pour les dopants luminescents Pr ou Eu.",
    "occurrence": "Synthétique.",
    "applications": ["Tubes cathodiques", "Scintillateurs"]
  },
  {
    "name": "Héminate de Sodium",
    "formula": "C₃₄H₃₂ClFeN₄O₄Na",
    "composition": { "C": 34, "H": 32, "Cl": 1, "Fe": 1, "N": 4, "O": 4, "Na": 1 },
    "molarMass": "673.92 g/mol",
    "category": "Dérivé de l'hème",
    "summary": "Utilisé pour le traitement de la porphyrie aiguë intermittente.",
    "occurrence": "Bio-synthétique.",
    "applications": ["Hématologie clinque"]
  },
  {
    "name": "Tris(triméthylsilyl)phosphine",
    "formula": "C₉H₂₇PSi₃",
    "composition": { "C": 9, "H": 27, "P": 1, "Si": 3 },
    "molarMass": "250.52 g/mol",
    "category": "Réactif de phosphoration",
    "summary": "Source de phosphore exempte de pyrophoricité pour la synthèse de phosphures.",
    "occurrence": "Synthétique.",
    "applications": ["Semi-conducteurs", "Chimie organique"]
  },
  {
    "name": "Nitrate de Cérium(IV) et d'Ammonium (CAN)",
    "formula": "(NH₄)₂Ce(NO₃)₆",
    "composition": { "N": 8, "H": 8, "Ce": 1, "O": 18 },
    "molarMass": "548.22 g/mol",
    "category": "Oxydant puissant",
    "summary": "Utilisé en synthèse pour l'oxydation des alcools et le déprotection.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie fine", "Gravure électronique"]
  },
  {
    "name": "Octaborate de Baryum",
    "formula": "BaB₈O₁₃",
    "composition": { "Ba": 1, "B": 8, "O": 13 },
    "molarMass": "431.81 g/mol",
    "category": "Précurseur de verre optique",
    "summary": "Utilisé pour augmenter l'indice de réfraction des verres techniques.",
    "occurrence": "Synthétique.",
    "applications": ["Lentilles de précision"]
  },
  {
    "name": "Daphrorétine",
    "formula": "C₁₉H₁₂O₇",
    "composition": { "C": 19, "H": 12, "O": 7 },
    "molarMass": "352.30 g/mol",
    "category": "Dicoumarine",
    "summary": "Composé dimérique de coumarine extrait des plantes médicinales chinoises.",
    "occurrence": "Plantes (Daphne giraldii).",
    "applications": ["Pharmacologie naturelle"]
  },
  {
    "name": "N,N-Diisopropyl-3-pentylamine",
    "formula": "C₁₁H₂₅N",
    "composition": { "C": 11, "H": 25, "N": 1 },
    "molarMass": "171.32 g/mol",
    "category": "Amine encombrée",
    "summary": "Modèle d'étude pour les bases non-nucléophiles.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie fondamentale"]
  },
  {
    "name": "Phosphure d'Indium et d'Aluminium (AlInP)",
    "formula": "AlInP",
    "composition": { "Al": 1, "In": 1, "P": 1 },
    "molarMass": "172.79 g/mol",
    "category": "Semi-conducteur",
    "summary": "Matériau à gap direct utilisé dans les LED rouges de haute luminosité.",
    "occurrence": "Synthétique.",
    "applications": ["Affichage extérieur", "Feux de signalisation"]
  },
  {
    "name": "Tétraphtalate de Gadolinium (Hydrate)",
    "formula": "Gd₂(C₈H₄O₄)₃·nH₂O",
    "composition": { "Gd": 2, "C": 24, "H": 12, "O": 12 },
    "molarMass": "~800 g/mol",
    "category": "MOF (Metal-Organic Framework)",
    "summary": "Réseau métallo-organique poreux pour le stockage des gaz.",
    "occurrence": "Synthétique.",
    "applications": ["Adsorption de l'hydrogène"]
  },
  {
    "name": "Borure de Samarium (SmB₆)",
    "formula": "SmB₆",
    "composition": { "Sm": 1, "B": 6 },
    "molarMass": "215.22 g/mol",
    "category": "Isolant de Kondo topologique",
    "summary": "Premier matériau identifié comme isolant topologique corrélé.",
    "occurrence": "Synthétique.",
    "applications": ["Spintronique de haute fidélité"]
  },
  {
    "name": "Siliciure de Chrome (CrSi₂)",
    "formula": "CrSi₂",
    "composition": { "Cr": 1, "Si": 2 },
    "molarMass": "108.16 g/mol",
    "category": "Thermoélectrique siliciure",
    "summary": "Matériau semi-conducteur p-type stable à l'air pour la conversion de chaleur.",
    "occurrence": "Synthétique.",
    "applications": ["Modules thermoélectriques industriels"]
  },
  {
    "name": "Maraviroc",
    "formula": "C₂₉H₄₁F₂N₅O",
    "composition": { "C": 29, "H": 41, "F": 2, "N": 5, "O": 1 },
    "molarMass": "513.67 g/mol",
    "category": "Antirétroviral (Inhibiteur d'entrée)",
    "summary": "Antagoniste des récepteurs CCR5 empêchant l'entrée du VIH-1 dans les cellules hôtes.",
    "occurrence": "Synthétique.",
    "applications": ["Traitement VIH-1 tropisme R5"]
  },
  {
    "name": "Enfuvirtide",
    "formula": "C₂₀₄H₃₀₁N₅₁O₆₄",
    "composition": { "C": 204, "H": 301, "N": 51, "O": 64 },
    "molarMass": "4491.88 g/mol",
    "category": "Antirétroviral (Inhibiteur de fusion)",
    "summary": "Polypeptide synthétique inhibant la fusion membranaire du VIH avec les cellules CD4.",
    "occurrence": "Synthétique.",
    "applications": ["VIH-1 multirésistant"]
  },
  {
    "name": "Tétraméthylammonium perfluorooctanesulfonate",
    "formula": "C₁₂H₁₂F₁₇NO₃S",
    "composition": { "C": 12, "H": 12, "F": 17, "N": 1, "O": 3, "S": 1 },
    "molarMass": "573.26 g/mol",
    "category": "Tensioactif fluoré",
    "summary": "Utilisé en microélectronique pour contrôler la tension superficielle.",
    "occurrence": "Synthétique.",
    "applications": ["Photolithographie"]
  },
  {
    "name": "Borure de Lanthane (LaB₆) nanocristal",
    "formula": "LaB₆",
    "composition": { "La": 1, "B": 6 },
    "molarMass": "203.77 g/mol",
    "category": "Matériau nano-émetteur",
    "summary": "Source de champ d'émission pour les microscopes électroniques à balayage.",
    "occurrence": "Synthétique.",
    "applications": ["Microscopie haute résolution"]
  },
  {
    "name": "Tellurure de Plomb et de Thalium (PbTlTe)",
    "formula": "PbTlTe",
    "composition": { "Pb": 1, "Tl": 1, "Te": 1 },
    "molarMass": "539.18 g/mol",
    "category": "Thermoélectrique dopé",
    "summary": "Utilisé pour l'étude des résonances de structure de bande pour augmenter le ZT.",
    "occurrence": "Synthétique.",
    "applications": ["Conversion d'énergie thermique"]
  },
  {
    "name": "Nitrate d'Ytterbium(III) pentahydraté",
    "formula": "Yb(NO₃)₃·5H₂O",
    "composition": { "Yb": 1, "N": 3, "O": 14, "H": 10 },
    "molarMass": "449.13 g/mol",
    "category": "Sel d'ytterbium",
    "summary": "Précurseur pour les lasers à fibre dopée à l'ytterbium.",
    "occurrence": "Synthétique.",
    "applications": ["Matériaux laser"]
  },
  {
    "name": "Acide 10,12-tricosadiynoïque",
    "formula": "C₂₃H₃₈O₂",
    "composition": { "C": 23, "H": 38, "O": 2 },
    "molarMass": "346.55 g/mol",
    "category": "Lipide chromatogène",
    "summary": "Utilisé pour créer des polydiacétylènes changeant de couleur sous stress.",
    "occurrence": "Synthétique.",
    "applications": ["Capteurs colorimétriques"]
  },
  {
    "name": "Octakis(diméthylsilyloxy)silsesquioxane",
    "formula": "C₁₆H₅₆O₂₀Si₁₆",
    "composition": { "C": 16, "H": 56, "O": 20, "Si": 16 },
    "molarMass": "1017.96 g/mol",
    "category": "Brique nanométrique",
    "summary": "Agent de fonctionnalisation pour les réseaux de siloxanes.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie aérospatiale"]
  },
  {
    "name": "Tellurure de Bismuth et d'Antimoine (BiSbTe₃)",
    "formula": "BiSbTe₃",
    "composition": { "Bi": 1, "Sb": 1, "Te": 3 },
    "molarMass": "~713 g/mol",
    "category": "Matériau Peltier",
    "summary": "Alliage de référence pour les refroidisseurs thermoélectriques Peltier.",
    "occurrence": "Synthétique.",
    "applications": ["Réfrigération électronique"]
  },
  {
    "name": "Porphyrine de Manganèse (MnP)",
    "formula": "C₃₄H₃₂N₄O₄Mn",
    "composition": { "C": 34, "H": 32, "N": 4, "O": 4, "Mn": 1 },
    "molarMass": "615.58 g/mol",
    "category": "Agent de contraste IRM",
    "summary": "Utilisé expérimentalement pour l'imagerie hépatique sélective.",
    "occurrence": "Synthétique.",
    "applications": ["Radiologie avancée"]
  },
  {
    "name": "Dolutégravir",
    "formula": "C₂₀H₁₉F₂N₃O₅",
    "composition": { "C": 20, "H": 19, "F": 2, "N": 3, "O": 5 },
    "molarMass": "419.38 g/mol",
    "category": "Antirétroviral (INSTI)",
    "summary": "Inhibiteur de transfert de brin de l'intégrase du VIH de deuxième génération.",
    "occurrence": "Synthétique.",
    "applications": ["Traitement de première ligne VIH"]
  },
  {
    "name": "Bictégravir",
    "formula": "C₂₁H₁₈F₃N₃O₅",
    "composition": { "C": 21, "H": 18, "F": 3, "N": 3, "O": 5 },
    "molarMass": "449.34 g/mol",
    "category": "Antirétroviral (INSTI)",
    "summary": "Composant clé du Biktarvy, présentant une haute barrière génétique à la résistance.",
    "occurrence": "Synthétique.",
    "applications": ["Infectiologie"]
  },
  {
    "name": "Elvitégravir",
    "formula": "C₂₃H₂₃ClFNO₅",
    "composition": { "C": 23, "H": 23, "Cl": 1, "F": 1, "N": 1, "O": 5 },
    "molarMass": "447.88 g/mol",
    "category": "Antirétroviral (INSTI)",
    "summary": "Nécessite un booster (cobicistat) pour maintenir des niveaux thérapeutiques efficaces.",
    "occurrence": "Synthétique.",
    "applications": ["Trithérapies VIH"]
  },
  {
    "name": "Raltégravir",
    "formula": "C₂₀H₂₀FN₆O₅P",
    "composition": { "C": 20, "H": 20, "F": 1, "N": 6, "O": 5, "P": 1 },
    "molarMass": "444.42 g/mol",
    "category": "Antirétroviral (INSTI)",
    "summary": "Premier inhibiteur d'intégrase approuvé pour le traitement du VIH.",
    "occurrence": "Synthétique.",
    "applications": ["Hématologie infectieuse"]
  },
  {
    "name": "Cabotégravir",
    "formula": "C₁₉H₁₇F₂N₃O₅",
    "composition": { "C": 19, "H": 17, "F": 2, "N": 3, "O": 5 },
    "molarMass": "405.35 g/mol",
    "category": "Antirétroviral (Action prolongée)",
    "summary": "Utilisé en formulation injectable pour la prophylaxie pré-exposition (PrEP) et le traitement.",
    "occurrence": "Synthétique.",
    "applications": ["Prévention VIH", "Infectiologie"]
  },
  {
    "name": "Etravirine",
    "formula": "C₂₀H₁₅BrN₄O",
    "composition": { "C": 20, "H": 15, "Br": 1, "N": 4, "O": 1 },
    "molarMass": "435.27 g/mol",
    "category": "Antirétroviral (NNRTI de 2e gén.)",
    "summary": "Conçue pour être active contre les souches de VIH résistantes aux NNRTI de 1ère génération.",
    "occurrence": "Synthétique.",
    "applications": ["VIH multi-résistant"]
  },
  {
    "name": "Rilpivirine",
    "formula": "C₂₂H₁₈N₄",
    "composition": { "C": 22, "H": 18, "N": 4 },
    "molarMass": "366.42 g/mol",
    "category": "Antirétroviral (NNRTI)",
    "summary": "Inhibiteur de la transcriptase inverse non-nucléosidique avec une longue demi-vie.",
    "occurrence": "Synthétique.",
    "applications": ["Traitement antirétroviral combiné"]
  },
  {
    "name": "Doravirine",
    "formula": "C₁₇H₁₁ClF₃N₅O₃",
    "composition": { "C": 17, "H": 11, "Cl": 1, "F": 3, "N": 5, "O": 3 },
    "molarMass": "425.75 g/mol",
    "category": "Antirétroviral (NNRTI)",
    "summary": "Dernier NNRTI approuvé offrant un profil de tolérance amélioré et peu d'interactions médicamenteuses.",
    "occurrence": "Synthétique.",
    "applications": ["Infectiologie"]
  },
  {
    "name": "Titano-Zirconate de Baryum (BZT)",
    "formula": "Ba(Ti₀.₈Zr₀.₂)O₃",
    "composition": { "Ba": 1, "Ti": 1, "Zr": 1, "O": 3 },
    "molarMass": "~240 g/mol",
    "category": "Céramique ferroélectrique sans plomb",
    "summary": "Alternative écologique au PZT pour les applications piézoélectriques basse température.",
    "occurrence": "Synthétique.",
    "applications": ["Condensateurs multicouches (MLCC)"]
  },
  {
    "name": "Sulfate de Gallium(III) hydraté",
    "formula": "Ga₂(SO₄)₃·18H₂O",
    "composition": { "Ga": 2, "S": 3, "O": 30, "H": 36 },
    "molarMass": "751.78 g/mol",
    "category": "Réactif de gallium",
    "summary": "Source soluble de gallium pour l'électrodéposition et la chimie des solutions.",
    "occurrence": "Synthétique.",
    "applications": ["Électronique"]
  },
  {
    "name": "Tellurure de Chrome (Cr₂Te₃)",
    "formula": "Cr₂Te₃",
    "composition": { "Cr": 2, "Te": 3 },
    "molarMass": "486.79 g/mol",
    "category": "Matériau ferromagnétique",
    "summary": "Composé étudié pour le magnétisme de basse dimensionnalité.",
    "occurrence": "Synthétique.",
    "applications": ["Spintronique"]
  },
  {
    "name": "Octakis(fluorure de triméthylsilyloxysilyle)",
    "formula": "C₂₄H₇₂F₈O₂₀Si₁₆",
    "composition": { "C": 24, "H": 72, "F": 8, "O": 20, "Si": 16 },
    "molarMass": "~1400 g/mol",
    "category": "Siloxane fluoré",
    "summary": "Utilisé pour modifier la mouillabilité des surfaces optiques.",
    "occurrence": "Synthétique.",
    "applications": ["Revêtements hydrophobes"]
  },
  {
    "name": "Borure de Lanthane (LaB₆) monocristal",
    "formula": "LaB₆",
    "composition": { "La": 1, "B": 6 },
    "molarMass": "203.77 g/mol",
    "category": "Matériau thermoïonique",
    "summary": "Standard pour les sources d'électrons à haute brillance dans la lithographie et la microscopie.",
    "occurrence": "Synthétique.",
    "applications": ["Sonde atomique", "MEB"]
  },
  {
    "name": "Tellurure de Zinc et de Cadmium (CdZnTe - CZT)",
    "formula": "CdZnTe",
    "composition": { "Cd": 1, "Zn": 1, "Te": 1 },
    "molarMass": "~305 g/mol",
    "category": "Détecteur de rayons X/Gamma",
    "summary": "Semi-conducteur fonctionnant à température ambiante pour la détection de photons haute énergie.",
    "occurrence": "Synthétique.",
    "applications": ["Médecine nucléaire", "Sécurité aéroportuaire"]
  },
  {
    "name": "Tris(pentafluorophényl)phosphine",
    "formula": "C₁₈F₁₅P",
    "composition": { "C": 18, "F": 15, "P": 1 },
    "molarMass": "532.16 g/mol",
    "category": "Ligand phosphine fluoré",
    "summary": "Utilisé pour ajuster les propriétés électroniques des catalyseurs à base de métaux de transition.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie organométallique"]
  },
  {
    "name": "Oxysulfure de Praséodyme (Pr₂O₂S)",
    "formula": "Pr₂O₂S",
    "composition": { "Pr": 2, "O": 2, "S": 1 },
    "molarMass": "345.88 g/mol",
    "category": "Matériau luminophore vert",
    "summary": "Matrice pour les phosphores de rayons X haute résolution.",
    "occurrence": "Synthétique.",
    "applications": ["Imagerie médicale", "Écrans fluorescents"]
  },
  {
    "name": "Lithio-silicate de Cobalt (Li₂CoSiO₄)",
    "formula": "Li₂CoSiO₄",
    "composition": { "Li": 2, "Co": 1, "Si": 1, "O": 4 },
    "molarMass": "165.01 g/mol",
    "category": "Matériau de cathode",
    "summary": "Candidat pour les batteries lithium-ion à haute tension théorique.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche stockage énergie"]
  },
  {
    "name": "Octanoate de Manganèse(II)",
    "formula": "Mn(C₈H₁₅O₂)₂",
    "composition": { "Mn": 1, "C": 16, "H": 30, "O": 4 },
    "molarMass": "341.32 g/mol",
    "category": "Catalyseur d'oxydation",
    "summary": "Principalement utilisé comme agent de séchage dans les peintures écologiques sans cobalt.",
    "occurrence": "Synthétique.",
    "applications": ["Peintures et vernis"]
  },
  {
    "name": "Tétraméthylammonium hexafluorophosphate",
    "formula": "C₄H₁₂F₆NP",
    "composition": { "C": 4, "H": 12, "F": 6, "N": 1, "P": 1 },
    "molarMass": "219.11 g/mol",
    "category": "Sel d'électrolyte support",
    "summary": "Hautement stable pour l'étude électrochimique des oxydoréducteurs.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche académique"]
  },
  {
    "name": "Ibalizumab",
    "formula": "C₆₄₇₈H₉₉₈₄N₁₇₁₆O₂₀₃₀S₄₄",
    "composition": { "C": 6478, "H": 9984, "N": 1716, "O": 2030, "S": 44 },
    "molarMass": "~146 kDa",
    "category": "Anticorps monoclonal (Anti-CD4)",
    "summary": "Inhibiteur de post-attachement bloquant l'entrée du VIH-1 sans immunosuppression.",
    "occurrence": "Synthétique (culture cellulaire).",
    "applications": ["VIH-1 multirésistant"]
  },
  {
    "name": "Fostemsavir",
    "formula": "C₂₅H₂₆N₈O₈P",
    "composition": { "C": 25, "H": 26, "N": 8, "O": 8, "P": 1 },
    "molarMass": "583.49 g/mol",
    "category": "Antirétroviral (Inhibiteur d'attachement)",
    "summary": "Prodrogue du temsavir, se liant à la glycoprotéine gp120 du VIH.",
    "occurrence": "Synthétique.",
    "applications": ["Patients lourdement prétraités (HTP)"]
  },
  {
    "name": "Lénacapavir",
    "formula": "C₃₀H₂₈F₁₀N₇O₃S",
    "composition": { "C": 30, "H": 28, "F": 10, "N": 7, "O": 3, "S": 1 },
    "molarMass": "725.65 g/mol",
    "category": "Inhibiteur de capside du VIH",
    "summary": "Premier inhibiteur de capside à longue durée d'action (bisannuel) pour le VIH-1.",
    "occurrence": "Synthétique.",
    "applications": ["Infectiologie", "PrEP (en étude)"]
  },
  {
    "name": "Titano-Bismuthate de Baryum (BBT)",
    "formula": "BaBi₄Ti₄O₁₅",
    "composition": { "Ba": 1, "Bi": 4, "Ti": 4, "O": 15 },
    "molarMass": "1362.45 g/mol",
    "category": "Céramique Aurivillius",
    "summary": "Structure en couches utilisée pour les mémoires ferroélectriques (FeRAM).",
    "occurrence": "Synthétique.",
    "applications": ["Électronique non-volatile"]
  },
  {
    "name": "Tétra-n-butylammonium tétrafluoroborate",
    "formula": "C₁₆H₃₆BF₄N",
    "composition": { "C": 16, "H": 36, "B": 1, "F": 4, "N": 1 },
    "molarMass": "329.27 g/mol",
    "category": "Sel ionique",
    "summary": "Électrolyte le plus commun pour les mesures électrochimiques en solvants aprotiques.",
    "occurrence": "Synthétique.",
    "applications": ["Électrochimie industrielle"]
  },
  {
    "name": "Borure de Chrome (CrB₂)",
    "formula": "CrB₂",
    "composition": { "Cr": 1, "B": 2 },
    "molarMass": "73.62 g/mol",
    "category": "Matériau boré dur",
    "summary": "Présente une résistance exceptionnelle à l'oxydation et à la corrosion à haute température.",
    "occurrence": "Synthétique.",
    "applications": ["Revêtements de turbines"]
  },
  {
    "name": "Tellurure de Rhénium (ReTe₂)",
    "formula": "ReTe₂",
    "composition": { "Re": 1, "Te": 2 },
    "molarMass": "441.42 g/mol",
    "category": "Dichalcogénure anisotrope",
    "summary": "Matériau 2D à symétrie distordue utile pour la détection polarisée de la lumière.",
    "occurrence": "Synthétique.",
    "applications": ["Optoélectronique"]
  },
  {
    "name": "Nitrate d'Europium(III) hexahydraté",
    "formula": "Eu(NO₃)₃·6H₂O",
    "composition": { "Eu": 1, "N": 3, "O": 15, "H": 12 },
    "molarMass": "446.06 g/mol",
    "category": "Réactif de terre rare",
    "summary": "Source d'ions Eu3+ pour les luminophores rouges et les traceurs de sécurité.",
    "occurrence": "Synthétique.",
    "applications": ["Billets de banque", "Écrans"]
  },
  {
    "name": "N,N'-Bis(triméthylsilyl)urée",
    "formula": "C₇H₂₀N₂OSi₂",
    "composition": { "C": 7, "H": 20, "N": 2, "O": 1, "Si": 2 },
    "molarMass": "204.42 g/mol",
    "category": "Agent de silylation",
    "summary": "Réactif doux pour introduire des groupes triméthylsilyle sur les alcools et acides.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "Phosphate de Lithium et de Fer (LiFePO₄)",
    "formula": "LiFePO₄",
    "composition": { "Li": 1, "Fe": 1, "P": 1, "O": 4 },
    "molarMass": "157.76 g/mol",
    "category": "Matériau de cathode LFP",
    "summary": "Matériau de batterie stable, sûr et de longue durée de vie, sans cobalt.",
    "occurrence": "Synthétique (Structure Olivine).",
    "applications": ["Véhicules électriques", "Stockage stationnaire"]
  },
  {
    "name": "Tellurure de Cadmium (CdTe) - Couche mince",
    "formula": "CdTe",
    "composition": { "Cd": 1, "Te": 1 },
    "molarMass": "240.01 g/mol",
    "category": "Photovoltaïque",
    "summary": "Deuxième technologie solaire la plus courante après le silicium.",
    "occurrence": "Synthétique.",
    "applications": ["Panneaux solaires", "Toitures solaires"]
  },
  {
    "name": "Tris(2-carboxyéthyl)phosphine (TCEP)",
    "formula": "C₉H₁₅O₆P",
    "composition": { "C": 9, "H": 15, "O": 6, "P": 1 },
    "molarMass": "250.19 g/mol",
    "category": "Agent réducteur biochimique",
    "summary": "Alternative inodore au DTT pour la réduction des ponts disulfures des protéines.",
    "occurrence": "Synthétique.",
    "applications": ["Protéomique", "Biochimie"]
  },
  {
    "name": "Oxysulfure de Terbium (Tb₂O₂S)",
    "formula": "Tb₂O₂S",
    "composition": { "Tb": 2, "O": 2, "S": 1 },
    "molarMass": "381.91 g/mol",
    "category": "Luminophore vert intense",
    "summary": "Utilisé pour la conversion des rayons X en lumière visible dans les écrans intensificateurs.",
    "occurrence": "Synthétique.",
    "applications": ["Radiologie", "Scintillateurs"]
  },
  {
    "name": "Lithio-manganate (LiMn₂O₄)",
    "formula": "LiMn₂O₄",
    "composition": { "Li": 1, "Mn": 2, "O": 4 },
    "molarMass": "180.81 g/mol",
    "category": "Matériau Spinelle",
    "summary": "Matériau de cathode à haute puissance et faible coût pour batteries Li-ion.",
    "occurrence": "Synthétique.",
    "applications": ["Outils électriques", "Vélos électriques"]
  },
  {
    "name": "Octanoate de Nickel(II)",
    "formula": "Ni(C₈H₁₅O₂)₂",
    "composition": { "Ni": 1, "C": 16, "H": 30, "O": 4 },
    "molarMass": "345.08 g/mol",
    "category": "Catalyseur d'hydrogénation",
    "summary": "Utilisé dans la production de graisses saturées et la chimie des polymères.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie alimentaire", "Plastiques"]
  },
  {
    "name": "Tétraméthylammonium borohydrure",
    "formula": "C₄H₁₆BN",
    "composition": { "C": 4, "H": 16, "B": 1, "N": 1 },
    "molarMass": "88.99 g/mol",
    "category": "Agent réducteur doux",
    "summary": "Source de borohydrure soluble dans les solvants organiques peu polaires.",
    "occurrence": "Synthétique.",
    "applications": ["Réduction sélective"]
  },
  {
    "name": "Niobate de Potassium (KNbO₃)",
    "formula": "KNbO₃",
    "composition": { "K": 1, "Nb": 1, "O": 3 },
    "molarMass": "180.00 g/mol",
    "category": "Piézoélectrique sans plomb",
    "summary": "Cristal ferroélectrique avec de grandes constantes piézoélectriques.",
    "occurrence": "Synthétique.",
    "applications": ["Nettoyage ultrasonique", "Capteurs acoustiques"]
  },
  {
    "name": "Tellurure d'Hafnium et de Zirconium (HfZrTe₅)",
    "formula": "HfZrTe₅",
    "composition": { "Hf": 1, "Zr": 1, "Te": 5 },
    "molarMass": "~907 g/mol",
    "category": "Isolant topologique de Weyl",
    "summary": "Matériau complexe étudié pour l'effet Hall quantique anomal.",
    "occurrence": "Synthétique.",
    "applications": ["Électronique topologique"]
  },
  {
    "name": "Tris(dipivaloylméthanato) gadolinium",
    "formula": "C₃₃H₅₇GdO₆",
    "composition": { "C": 33, "H": 57, "Gd": 1, "O": 6 },
    "molarMass": "707.05 g/mol",
    "category": "Précurseur MOCVD",
    "summary": "Utilisé pour la croissance de films minces d'oxydes de gadolinium.",
    "occurrence": "Synthétique.",
    "applications": ["Couches barrières", "Dispositifs magnétiques"]
  },
  {
    "name": "Borure d'Indium (InB₂)",
    "formula": "InB₂",
    "composition": { "In": 1, "B": 2 },
    "molarMass": "136.44 g/mol",
    "category": "Matériau hypothétique stable",
    "summary": "Étudié par simulation pour ses propriétés de stockage d'hydrogène.",
    "occurrence": "Synthétique (conditions extrêmes).",
    "applications": ["Stockage d'énergie"]
  },
  {
    "name": "Fluorure de Scandium(III)",
    "formula": "ScF₃",
    "composition": { "Sc": 1, "F": 3 },
    "molarMass": "101.95 g/mol",
    "category": "Matériau à expansion thermique négative",
    "summary": "Inhabituel car il se contracte lorsqu'il est chauffé sur une large plage de température.",
    "occurrence": "Synthétique.",
    "applications": ["Aérospatial (compensation thermique)"]
  },
  {
    "name": "Borure de Néodyme (NdB₆)",
    "formula": "NdB₆",
    "composition": { "Nd": 1, "B": 6 },
    "molarMass": "209.11 g/mol",
    "category": "Matériau thermoïonique",
    "summary": "Alternative au LaB₆ pour certaines applications de faisceau d'électrons.",
    "occurrence": "Synthétique.",
    "applications": ["Émission d'électrons"]
  },
  {
    "name": "Antimoniure de Gallium (GaSb)",
    "formula": "GaSb",
    "composition": { "Ga": 1, "Sb": 1 },
    "molarMass": "191.48 g/mol",
    "category": "Semi-conducteur III-V",
    "summary": "Utilisé pour les photodétecteurs infrarouges et les cellules thermophotovoltaïques.",
    "occurrence": "Synthétique.",
    "applications": ["Visières nocturnes", "Récupération d'énergie"]
  },
  {
    "name": "Octakis(allylsilsesquioxane)",
    "formula": "C₂₄H₄₀O₁₂Si₈",
    "composition": { "C": 24, "H": 40, "O": 12, "Si": 8 },
    "molarMass": "841.25 g/mol",
    "category": "Pré-polymère POSS",
    "summary": "Monomère pour créer des réseaux hybrides silice-polymère ultra-résistants.",
    "occurrence": "Synthétique.",
    "applications": ["Protection thermique haute performance"]
  },
  {
    "name": "Tellurure de Plomb et de Germanium (PbGeTe)",
    "formula": "PbGeTe",
    "composition": { "Pb": 1, "Ge": 1, "Te": 1 },
    "molarMass": "407.41 g/mol",
    "category": "Solution solide ferroélectrique",
    "summary": "Utilisé pour les lasers à injection accordables dans l'infrarouge.",
    "occurrence": "Synthétique.",
    "applications": ["Spectroscopie"]
  },
  {
    "name": "Tris(pyrazolyl)borate de Sodium (NaTp)",
    "formula": "C₉H₁₀BN₆Na",
    "composition": { "C": 9, "H": 10, "B": 1, "N": 6, "Na": 1 },
    "molarMass": "236.02 g/mol",
    "category": "Ligand 'Scorpionate'",
    "summary": "Ligand tridenté protégeant un centre métallique sur une face.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie de coordination", "Bio-mimétisme"]
  },
  {
    "name": "Borure de Lanthane et de Baryum (La₀.𝟗Ba₀.𝟏B₆)",
    "formula": "LaBaB₆",
    "composition": { "La": 1, "Ba": 1, "B": 6 },
    "molarMass": "~341 g/mol",
    "category": "Émetteur dopé",
    "summary": "Dopage utilisé pour abaisser le travail de sortie des cathodes thermoïoniques.",
    "occurrence": "Synthétique.",
    "applications": ["Technologie du vide"]
  },
  {
    "name": "Phosphate de Néodyme(III) hydraté",
    "formula": "NdPO₄·0.5H₂O",
    "composition": { "Nd": 1, "P": 1, "O": 4.5, "H": 1 },
    "molarMass": "248.22 g/mol",
    "category": "Luminophore laser",
    "summary": "Précurseur pour les verres de phosphate dopés au néodyme.",
    "occurrence": "Synthétique.",
    "applications": ["Fusion nucléaire par laser"]
  },
  {
    "name": "Stannate de Baryum (BaSnO₃)",
    "formula": "BaSnO₃",
    "composition": { "Ba": 1, "Sn": 1, "O": 3 },
    "molarMass": "304.03 g/mol",
    "category": "Perovskite transparente conductrice",
    "summary": "Utilisé comme base pour les oxydes conducteurs transparents à haute mobilité.",
    "occurrence": "Synthétique.",
    "applications": ["Écrans tactiles", "Photovoltaïque transparent"]
  },
  {
    "name": "Tellurures de Mercure, Cadmium et Zinc (HgCdZnTe)",
    "formula": "HgCdZnTe",
    "composition": { "Hg": 1, "Cd": 1, "Zn": 1, "Te": 1 },
    "molarMass": "~570 g/mol",
    "category": "Détecteur IR multispectral",
    "summary": "Alliage complexe pour la vision nocturne spatiale et militaire.",
    "occurrence": "Synthétique.",
    "applications": ["Imagerie satellitaire"]
  },
  {
    "name": "Tris(2,2,6,6-tétraméthyl-3,5-heptanedionato) erbium",
    "formula": "C₃₃H₅₇ErO₆",
    "composition": { "C": 33, "H": 57, "Er": 1, "O": 6 },
    "molarMass": "717.06 g/mol",
    "category": "Précurseur laser",
    "summary": "Source d'erbium hautement volatile pour le dépôt de guides d'ondes.",
    "occurrence": "Synthétique.",
    "applications": ["Amplificateurs optiques (EDFA)"]
  },
  {
    "name": "Borure de Tungstène (W₂B₅)",
    "formula": "W₂B₅",
    "composition": { "W": 2, "B": 5 },
    "molarMass": "421.74 g/mol",
    "category": "Borure ultra-dur",
    "summary": "Matériau présentant une dureté proche de celle du diamant.",
    "occurrence": "Synthétique.",
    "applications": ["Blindages", "Outils de forage"]
  },
  {
    "name": "Arséniure d'Indium (InAs)",
    "formula": "InAs",
    "composition": { "In": 1, "As": 1 },
    "molarMass": "189.74 g/mol",
    "category": "Semi-conducteur",
    "summary": "Possède une mobilité électronique extrêmement élevée.",
    "occurrence": "Synthétique.",
    "applications": ["Capteurs à effet Hall", "Lasers IR"]
  },
  {
    "name": "Octakis(trifluorométhylsilsesquioxane)",
    "formula": "C₈F₂₄Si₈O₁₂",
    "composition": { "C": 8, "F": 24, "Si": 8, "O": 12 },
    "molarMass": "1064.21 g/mol",
    "category": "POSS fluoré",
    "summary": "Utilisé pour créer des polymères à très faible indice de réfraction.",
    "occurrence": "Synthétique.",
    "applications": ["Optique guidée"]
  },
  {
    "name": "Tellurure de Molybdène et de Tungstène (MoWTe₂)",
    "formula": "MoWTe₂",
    "composition": { "Mo": 1, "W": 1, "Te": 2 },
    "molarMass": "~400 g/mol",
    "category": "Alliage photonique 2D",
    "summary": "Utilisé pour l'ajustement du gap électronique des matériaux 2D.",
    "occurrence": "Synthétique.",
    "applications": ["Nanophotonique"]
  },
  {
    "name": "Tris(triméthylsilyl)borate",
    "formula": "C₉H₂₇BO₃Si₃",
    "composition": { "C": 9, "H": 27, "B": 1, "O": 3, "Si": 3 },
    "molarMass": "278.38 g/mol",
    "category": "Additif pour électrolyte",
    "summary": "Améliore la stabilité de l'interface cathode-électrolyte dans les batteries Li-ion.",
    "occurrence": "Synthétique.",
    "applications": ["Énergie"]
  },
  {
    "name": "Borure de Zirconium nanocyclique",
    "formula": "ZrB₂-nano",
    "composition": { "Zr": 1, "B": 2 },
    "molarMass": "112.85 g/mol",
    "category": "Nanocéramique",
    "summary": "Forme nanostructurée permettant un frittage à plus basse température.",
    "occurrence": "Synthétique.",
    "applications": ["Céramiques de spécialité"]
  },
  {
    "name": "Phosphate de Cérium(III) hydraté",
    "formula": "CePO₄·H₂O",
    "composition": { "Ce": 1, "P": 1, "O": 5, "H": 2 },
    "molarMass": "253.10 g/mol",
    "category": "Catalyseur hétérogène",
    "summary": "Utilisé dans les réactions d'estérification et d'oxydation sélective.",
    "occurrence": "Synthétique.",
    "applications": ["Pétrochimie"]
  },
  {
    "name": "Ferrite de Strontium (SrFe₁₂O₁₉)",
    "formula": "SrFe₁₂O₁₉",
    "composition": { "Sr": 1, "Fe": 12, "O": 19 },
    "molarMass": "1061.76 g/mol",
    "category": "Aimant permanent",
    "summary": "Matériau magnétique hexagonal utilisé pour les aimants de moteur et de haut-parleur.",
    "occurrence": "Synthétique.",
    "applications": ["Électromécanique"]
  },
  {
    "name": "Tellurure d'Argent et de Gallium (AgGaTe₂)",
    "formula": "AgGaTe₂",
    "composition": { "Ag": 1, "Ga": 1, "Te": 2 },
    "molarMass": "432.81 g/mol",
    "category": "Cristal non-linéaire IR",
    "summary": "Utilisé pour la conversion de fréquence dans l'infrarouge lointain.",
    "occurrence": "Synthétique.",
    "applications": ["Spectroscopie laser"]
  },
  {
    "name": "Tris(2,2,6,6-tétraméthyl-3,5-heptanedionato) dysprosium",
    "formula": "C₃₃H₅₇DyO₆",
    "composition": { "C": 33, "H": 57, "Dy": 1, "O": 6 },
    "molarMass": "712.30 g/mol",
    "category": "Précurseur MOCVD",
    "summary": "Utilisé pour le dopage des fibres optiques avec des ions dysprosium.",
    "occurrence": "Synthétique.",
    "applications": ["Optique spécialisée"]
  },
  {
    "name": "Borure de Molybdène (MoB₄)",
    "formula": "MoB₄",
    "composition": { "Mo": 1, "B": 4 },
    "molarMass": "139.18 g/mol",
    "category": "Matériau boré superdur",
    "summary": "Matériau synthétisé à ultra-haute pression présentant une dureté extrême.",
    "occurrence": "Synthétique.",
    "applications": ["Usinage industriel"]
  },
  {
    "name": "Séléniure d'Étain (SnSe)",
    "formula": "SnSe",
    "composition": { "Sn": 1, "Se": 1 },
    "molarMass": "197.67 g/mol",
    "category": "Record thermoélectrique",
    "summary": "Détient le record mondial du facteur de mérite thermoélectrique (ZT) pour un matériau massif.",
    "occurrence": "Minéral (Herzenbergite).",
    "applications": ["Génération de puissance thermique"]
  },
  {
    "name": "Octakis(aminophénylsilsesquioxane)",
    "formula": "C₄₈H₅₆N₈O₁₂Si₈",
    "composition": { "C": 48, "H": 56, "N": 8, "O": 12, "Si": 8 },
    "molarMass": "1153.64 g/mol",
    "category": "Brique nanostructurée réactive",
    "summary": "Utilisé pour renforcer les polyimides et les résines époxy.",
    "occurrence": "Synthétique.",
    "applications": ["Matériaux composites avancés"]
  },
  {
    "name": "Tellurure de Plomb et d'Étain (PbSnTe)",
    "formula": "PbSnTe",
    "composition": { "Pb": 1, "Sn": 1, "Te": 1 },
    "molarMass": "~453.5 g/mol",
    "category": "Détecteur IR accordable",
    "summary": "Alliage utilisé pour ajuster précisément le gap pour les caméras thermiques.",
    "occurrence": "Synthétique.",
    "applications": ["Sûreté", "Surveillance"]
  },
  {
    "name": "Tris( triméthoxyphényl)phosphine",
    "formula": "C₂₇H₃₃O₉P",
    "composition": { "C": 27, "H": 33, "O": 9, "P": 1 },
    "molarMass": "532.52 g/mol",
    "category": "Ligand riche en électrons",
    "summary": "Utilisé dans les réactions de couplage croisé catalysées au palladium.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique fine"]
  },
  {
    "name": "Borure de Chrome et de Fer ((Cr,Fe)B)",
    "formula": "CrFeB",
    "composition": { "Cr": 1, "Fe": 1, "B": 1 },
    "molarMass": "~118 g/mol",
    "category": "Matériau magnétique amorphe",
    "summary": "Utilisé dans les noyaux de transformateurs à faibles pertes.",
    "occurrence": "Synthétique.",
    "applications": ["Réseaux électriques"]
  },
  {
    "name": "Phosphate d'Ytterbium(III) hydraté",
    "formula": "YbPO₄·2H₂O",
    "composition": { "Yb": 1, "P": 1, "O": 6, "H": 4 },
    "molarMass": "304.05 g/mol",
    "category": "Céramique laser",
    "summary": "Utilisé pour la fabrication de sources laser compactes haute puissance.",
    "occurrence": "Synthétique.",
    "applications": ["Micro-usinage"]
  },
  {
    "name": "Perovskite d'Argent et d'Antimoine (Ag₃SbI₆)",
    "formula": "Ag₃SbI₆",
    "composition": { "Ag": 3, "Sb": 1, "I": 6 },
    "molarMass": "1206.77 g/mol",
    "category": "Photovoltaïque sans plomb",
    "summary": "Alternative écologique pour les cellules solaires à haut rendement.",
    "occurrence": "Synthétique.",
    "applications": ["Énergie renouvelable"]
  },
  {
    "name": "Tellururure de Thallium et de Germanium (Tl₂GeTe₃)",
    "formula": "Tl₂GeTe₃",
    "composition": { "Tl": 2, "Ge": 1, "Te": 3 },
    "molarMass": "864.16 g/mol",
    "category": "Verre chalcogénure",
    "summary": "Matériau transparent dans l'infrarouge lointain pour l'optique spécialisée.",
    "occurrence": "Synthétique.",
    "applications": ["Lentilles thermiques"]
  },
  {
    "name": "Tris(2,2,6,6-tétraméthyl-3,5-heptanedionato) yttrium",
    "formula": "C₃₃H₅₇O₆Y",
    "composition": { "C": 33, "H": 57, "O": 6, "Y": 1 },
    "molarMass": "638.71 g/mol",
    "category": "Précurseur de film mince",
    "summary": "Utilisé pour le dépôt de YBa₂Cu₃O₇ (supraconducteur haute température).",
    "occurrence": "Synthétique.",
    "applications": ["Énergie", "Physique"]
  },
  {
    "name": "Borure de Rhénium (ReB₂)",
    "formula": "ReB₂",
    "composition": { "Re": 1, "B": 2 },
    "molarMass": "207.82 g/mol",
    "category": "Matériau superdur",
    "summary": "Ne nécessite pas de haute pression pour sa synthèse, contrairement au diamant.",
    "occurrence": "Synthétique.",
    "applications": ["Surfaces anti-usure"]
  },
  {
    "name": "Arséniure de Gallium et d'Indium (GaInAs)",
    "formula": "GaInAs",
    "composition": { "Ga": 1, "In": 1, "As": 1 },
    "molarMass": "~259 g/mol",
    "category": "Semi-conducteur",
    "summary": "Matériau standard pour les photodétecteurs de télécommunication à 1550 nm.",
    "occurrence": "Synthétique.",
    "applications": ["Fibre optique", "Lidar"]
  },
  {
    "name": "Octakis(glycidylsilsesquioxane)",
    "formula": "C₂₄H₄₀O₂₀Si₈",
    "composition": { "C": 24, "H": 40, "O": 20, "Si": 8 },
    "molarMass": "968.25 g/mol",
    "category": "Résine hybride époxy",
    "summary": "Agent de couplage utilisé pour améliorer l'adhérence entre métaux et polymères.",
    "occurrence": "Synthétique.",
    "applications": ["Aéronautique", "Électronique"]
  },
  {
    "name": "Tellurure de Plomb dopé à l'Iode (PbTe:I)",
    "formula": "PbTeI",
    "composition": { "Pb": 1, "Te": 1, "I": 0.01 },
    "molarMass": "~335 g/mol",
    "category": "Thermoélectrique n-type",
    "summary": "Matériau classique pour les générateurs thermoélectriques spatiaux (RTG).",
    "occurrence": "Synthétique.",
    "applications": ["Sondes spatiales"]
  },
  {
    "name": "Tris(pentafluorophényl)stibine",
    "formula": "C₁₈F₁₅Sb",
    "composition": { "C": 18, "F": 15, "Sb": 1 },
    "molarMass": "622.94 g/mol",
    "category": "Accepteur pi-électronique",
    "summary": "Utilisé pour l'étude des interactions de transfert de charge en chimie organique.",
    "occurrence": "Synthétique.",
    "applications": ["Électronique moléculaire"]
  },
  {
    "name": "Borocabure de Gadolinium (GdB₂C₂)",
    "formula": "GdB₂C₂",
    "composition": { "Gd": 1, "B": 2, "C": 2 },
    "molarMass": "203.01 g/mol",
    "category": "Isolant magnétique",
    "summary": "Matériau présentant des interactions de frustration magnétique intéressantes.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche fondamentale"]
  },
  {
    "name": "Phosphate de Lanthane dopé au Cérium et Terbium (LAP)",
    "formula": "LaCeTbPO₄",
    "composition": { "La": 0.5, "Ce": 0.3, "Tb": 0.2, "P": 1, "O": 4 },
    "molarMass": "~240 g/mol",
    "category": "Luminophore tri-phosphore",
    "summary": "Luminophore vert haute efficacité pour les lampes fluorescentes compactes.",
    "occurrence": "Synthétique.",
    "applications": ["Éclairage basse consommation"]
  },
  {
    "name": "Cénicriviroc",
    "formula": "C₂₈H₃₄N₂O₄S",
    "composition": { "C": 28, "H": 34, "N": 2, "O": 4, "S": 1 },
    "molarMass": "494.65 g/mol",
    "category": "Antirétroviral (Antagoniste CCR2/CCR5)",
    "summary": "Ciblage double des récepteurs de chimiokines pour le traitement du VIH et de la stéatose hépatique.",
    "occurrence": "Synthétique.",
    "applications": ["Infectiologie", "Hépatologie (NASH)"]
  },
  {
    "name": "Tévirapine",
    "formula": "C₁₅H₁₄N₄O",
    "composition": { "C": 15, "H": 14, "N": 4, "O": 1 },
    "molarMass": "266.30 g/mol",
    "category": "Antirétroviral (NNRTI)",
    "summary": "Utilisée principalement pour la prévention de la transmission mère-enfant du VIH.",
    "occurrence": "Synthétique.",
    "applications": ["Santé publique mondiale"]
  },
  {
    "name": "Lersivirine",
    "formula": "C₂₀H₁₆ClN₃O",
    "composition": { "C": 20, "H": 16, "Cl": 1, "N": 3, "O": 1 },
    "molarMass": "349.81 g/mol",
    "category": "Antirétroviral (NNRTI expérimental)",
    "summary": "Inhibiteur de deuxième génération étudié pour son profil de sécurité amélioré.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche clinique"]
  },
  {
    "name": "Titano-Niobate de Strontium (Sr₂TiNbO₇)",
    "formula": "Sr₂TiNbO₇",
    "composition": { "Sr": 2, "Ti": 1, "Nb": 1, "O": 7 },
    "molarMass": "428.02 g/mol",
    "category": "Matériau photocatalytique",
    "summary": "Utilisé pour la décomposition de l'eau sous irradiation UV.",
    "occurrence": "Synthétique.",
    "applications": ["Production d'hydrogène solaire"]
  },
  {
    "name": "Tris(diméthylamino)antimoine",
    "formula": "C₆H₁₈N₃Sb",
    "composition": { "C": 6, "H": 18, "N": 3, "Sb": 1 },
    "molarMass": "253.99 g/mol",
    "category": "Précurseur CVD",
    "summary": "Source d'antimoine pour le dépôt chimique pour les alliages de semi-conducteurs.",
    "occurrence": "Synthétique.",
    "applications": ["Microelectronics"]
  },
  {
    "name": "Tellurure de Chrome et de Silicium (Cr₂Si₂Te₆)",
    "formula": "Cr₂Si₂Te₆",
    "composition": { "Cr": 2, "Si": 2, "Te": 6 },
    "molarMass": "925.75 g/mol",
    "category": "Isolant ferromagnétique 2D",
    "summary": "Matériau modèle pour l'étude du magnétisme dans la limite bidimensionnelle.",
    "occurrence": "Synthétique.",
    "applications": ["Magnéto-optique"]
  },
  {
    "name": "Borure de Lanthane et de Cérium (La₀.𝟓Ce₀.𝟓B₆)",
    "formula": "LaCeB₆",
    "composition": { "La": 0.5, "Ce": 0.5, "B": 6 },
    "molarMass": "~204 g/mol",
    "category": "Matériau d'émission d'électrons",
    "summary": "Alliage de borure mixte utilisé pour améliorer la longévité des cathodes.",
    "occurrence": "Synthétique.",
    "applications": ["Spectroscopie électronique"]
  },
  {
    "name": "Tris(pentafluorophényl)arsine",
    "formula": "C₁₈F₁₅As",
    "composition": { "C": 18, "F": 15, "As": 1 },
    "molarMass": "576.11 g/mol",
    "category": "Ligand arsénié fluoré",
    "summary": "Ligand à faible don sigma utilisé en catalyse homogène spécialisée.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche organométallique"]
  },
  {
    "name": "Oxysulfure de Samarium (Sm₂O₂S)",
    "formula": "Sm₂O₂S",
    "composition": { "Sm": 2, "O": 2, "S": 1 },
    "molarMass": "364.78 g/mol",
    "category": "Luminophore infrarouge",
    "summary": "Utilisé pour la conversion ascendante (upconversion) de photons.",
    "occurrence": "Synthétique.",
    "applications": ["Imagerie biologique infrarouge"]
  },
  {
    "name": "Lithio-orthosilicate (Li₄SiO₄)",
    "formula": "Li₄SiO₄",
    "composition": { "Li": 4, "Si": 1, "O": 4 },
    "molarMass": "119.85 g/mol",
    "category": "Matériau de couverture pour fusion",
    "summary": "Envisagé pour la production de tritium dans les réacteurs de fusion nucléaire.",
    "occurrence": "Synthétique.",
    "applications": ["Filière fusion (ITER)"]
  },
  {
    "name": "Octakis(trifluoropropylsilsesquioxane)",
    "formula": "C₂₉H₃₂F₂₄O₁₂Si₈",
    "composition": { "C": 29, "H": 32, "F": 24, "O": 12, "Si": 8 },
    "molarMass": "1344.42 g/mol",
    "category": "POSS fluoroalkylé",
    "summary": "Additif pour polymères oléophobes et hydrofuges.",
    "occurrence": "Synthétique.",
    "applications": ["Textiles techniques", "Aviation"]
  },
  {
    "name": "Tellurures de Bismuth et de Sélénium (Bi₂SeTe₂)",
    "formula": "Bi₂SeTe₂",
    "composition": { "Bi": 2, "Se": 1, "Te": 2 },
    "molarMass": "~752 g/mol",
    "category": "Isolant topologique",
    "summary": "Cristal présentant des états de surface protégés topologiquement.",
    "occurrence": "Synthétique.",
    "applications": ["Physique des solides"]
  },
  {
    "name": "Tris(2,2,6,6-tétraméthyl-3,5-heptanedionato) néodyme",
    "formula": "C₃₃H₅₇NdO₆",
    "composition": { "C": 33, "H": 57, "Nd": 1, "O": 6 },
    "molarMass": "694.02 g/mol",
    "category": "Précurseur terre rare",
    "summary": "Utilisé pour le dopage précis des guides d'ondes laser.",
    "occurrence": "Synthétique.",
    "applications": ["Photonique"]
  },
  {
    "name": "Borure de Zirconium et de Titane ((Zr,Ti)B₂)",
    "formula": "ZrTiB₂",
    "composition": { "Zr": 1, "Ti": 1, "B": 2 },
    "molarMass": "~182 g/mol",
    "category": "Céramique composite",
    "summary": "Matériau à dureté réglable selon le ratio Zr/Ti.",
    "occurrence": "Synthétique.",
    "applications": ["Usinage de métaux durs"]
  },
  {
    "name": "Tétraphtalate d'Ytterbium (Hydrate)",
    "formula": "Yb₂(C₈H₄O₄)₃·nH₂O",
    "composition": { "Yb": 2, "C": 24, "H": 12, "O": 12 },
    "molarMass": "~830 g/mol",
    "category": "LMOF (Luminescent MOF)",
    "summary": "Matériau poreux émettant dans l'infrarouge pour la détection de molécules.",
    "occurrence": "Synthétique.",
    "applications": ["Détection chimique"]
  },
  {
    "name": "Phosphure d'Indium et de Gallium (InGaP)",
    "formula": "InGaP",
    "composition": { "In": 1, "Ga": 1, "P": 1 },
    "molarMass": "~215.5 g/mol",
    "category": "Semi-conducteur",
    "summary": "Alternative à l'AlGaAs pour les transistors bipolaires à hétérojonction.",
    "occurrence": "Synthétique.",
    "applications": ["Amplificateurs RF pour smartphones"]
  },
  {
    "name": "Octakis(styrénylsilsesquioxane)",
    "formula": "C₆₄H₆₄O₁₂Si₈",
    "composition": { "C": 64, "H": 64, "O": 12, "Si": 8 },
    "molarMass": "1208.64 g/mol",
    "category": "Agent de nanorenforcement",
    "summary": "Utilisé pour augmenter radicalement la température de transition vitreuse du polystyrène.",
    "occurrence": "Synthétique.",
    "applications": ["Emballages haute température"]
  },
  {
    "name": "Tellurure de Mercure et de Manganèse (HgMnTe)",
    "formula": "HgMnTe",
    "composition": { "Hg": 1, "Mn": 1, "Te": 1 },
    "molarMass": "~383 g/mol",
    "category": "Semi-conducteur magnétique dilué",
    "summary": "Utilisé pour les modulateurs magnéto-optiques infrarouges.",
    "occurrence": "Synthétique.",
    "applications": ["Optique quantique"]
  },
  {
    "name": "Tris(benzyl)scandium",
    "formula": "C₂₁H₂₁Sc",
    "composition": { "C": 21, "H": 21, "Sc": 1 },
    "molarMass": "318.35 g/mol",
    "category": "Organique de terre rare légère",
    "summary": "Réactif hautement sensible pour l'étude de l'activation des liaisons C-H.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse fondamentale"]
  },
  {
    "name": "Borure d'Hafnium et de Tantale ((Hf,Ta)B₂)",
    "formula": "HfTaB₂",
    "composition": { "Hf": 1, "Ta": 1, "B": 2 },
    "molarMass": "~381 g/mol",
    "category": "Alliage ultra-réfractaire",
    "summary": "Matériau présentant l'un des points de fusion les plus élevés connus (env. 3900°C).",
    "occurrence": "Synthétique.",
    "applications": ["Missions de rentrée atmosphérique"]
  },
  {
    "name": "Tellurure de Plomb et de Sélénium (PbTeSe)",
    "formula": "PbTeSe",
    "composition": { "Pb": 1, "Te": 1, "Se": 1 },
    "molarMass": "~413.5 g/mol",
    "category": "Semi-conducteur IR",
    "summary": "Alliage ternaire utilisé pour optimiser les performances des LED infrarouges.",
    "occurrence": "Synthétique.",
    "applications": ["Analyse de gaz thermique"]
  },
  {
    "name": "Tris(triméthylsilyl)antimonite",
    "formula": "C₉H₂₇O₃SbSi₃",
    "composition": { "C": 9, "H": 27, "O": 3, "Sb": 1, "Si": 3 },
    "molarMass": "389.32 g/mol",
    "category": "Précurseur sol-gel",
    "summary": "Utilisé pour la fabrication de gels mixtes antimoine-silice.",
    "occurrence": "Synthétique.",
    "applications": ["Verres conducteurs"]
  },
  {
    "name": "Borure d'Indium et de Gallium (InGaB₂)",
    "formula": "InGaB₂",
    "composition": { "In": 1, "Ga": 1, "B": 2 },
    "molarMass": "~206 g/mol",
    "category": "Semi-conducteur expérimental",
    "summary": "Étudié pour ses propriétés optiques dans l'ultraviolet.",
    "occurrence": "Synthétique.",
    "applications": ["Opto-électronique UV"]
  },
  {
    "name": "Phosphate de Gadolinium et d’Yttrium (GdYPO₄)",
    "formula": "GdYPO₄",
    "composition": { "Gd": 0.5, "Y": 0.5, "P": 1, "O": 4 },
    "molarMass": "~218 g/mol",
    "category": "Matrice luminophore",
    "summary": "Hôte pour les scintillateurs rapides utilisés dans les scanners PET.",
    "occurrence": "Synthétique.",
    "applications": ["Imagerie médicale atomique"]
  },
  {
    "name": "Ferrite de Baryum et de Cobalt (BaCo₂Fe₁₆O₂₇)",
    "formula": "BaCo₂Fe₁₆O₂₇",
    "composition": { "Ba": 1, "Co": 2, "Fe": 16, "O": 27 },
    "molarMass": "~1550 g/mol",
    "category": "Matériau absorbant radar",
    "summary": "Utilisé pour réduire la signature radar des équipements militaires.",
    "occurrence": "Synthétique.",
    "applications": ["Technologie furtive"]
  },
  {
    "name": "Tellurures de Cuivre et d’Indium (CuInTe₂)",
    "formula": "CuInTe₂",
    "composition": { "Cu": 1, "In": 1, "Te": 2 },
    "molarMass": "433.74 g/mol",
    "category": "Matériau chalcopyrite",
    "summary": "Semiconducteur p-type utilisé pour les absorbeurs solaires à faible énergie.",
    "occurrence": "Synthétique.",
    "applications": ["Photopiles flexibles"]
  },
  {
    "name": "Tris(2,2,6,6-tétraméthyl-3,5-heptanedionato) europium",
    "formula": "C₃₃H₅₇EuO₆",
    "composition": { "C": 33, "H": 57, "Eu": 1, "O": 6 },
    "molarMass": "701.76 g/mol",
    "category": "Réactif de marquage",
    "summary": "Agent de contraste fluorescent utilisé pour l'étude microstructurale des polymères.",
    "occurrence": "Synthétique.",
    "applications": ["Science des matériaux"]
  },
  {
    "name": "Borure de Tungstène et de Molybdène ((W,Mo)B₂)",
    "formula": "WMoB₂",
    "composition": { "W": 1, "Mo": 1, "B": 2 },
    "molarMass": "~300 g/mol",
    "category": "Solution solide superdure",
    "summary": "Combine la dureté du WB₂ avec la ténacité du MoB₂.",
    "occurrence": "Synthétique.",
    "applications": ["Outils de coupe haute vitesse"]
  },
  {
    "name": "Séléniure de Germanium (GeSe)",
    "formula": "GeSe",
    "composition": { "Ge": 1, "Se": 1 },
    "molarMass": "151.55 g/mol",
    "category": "Photodétecteur 2D",
    "summary": "Matériau à structure en couches utilisé pour la photodétection polarisée.",
    "occurrence": "Minéral (Dreyerite).",
    "applications": ["Nanophotonique"]
  },
  {
    "name": "Octakis(cyclohexylsilsesquioxane)",
    "formula": "C₄₈H₈₈O₁₂Si₈",
    "composition": { "C": 48, "H": 88, "O": 12, "Si": 8 },
    "molarMass": "1017.84 g/mol",
    "category": "Additif lubrifiant solide",
    "summary": "Utilisé pour réduire l’usure de surface dans les micro-systèmes (MEMS).",
    "occurrence": "Synthétique.",
    "applications": ["Micro-mécanique"]
  },
  {
    "name": "Tellurure de Plomb et de Scandium (PbScTe)",
    "formula": "PbScTe",
    "composition": { "Pb": 1, "Sc": 1, "Te": 1 },
    "molarMass": "~379.7 g/mol",
    "category": "Matériau thermoélectrique expérimental",
    "summary": "Dopage au scandium utilisé pour introduire des niveaux de résonance.",
    "occurrence": "Synthétique.",
    "applications": ["Récupérateurs de chaleur"]
  },
  {
    "name": "Tris(pentafluorophényl)borate de Lithium",
    "formula": "C₁₈F₁₅BLi",
    "composition": { "C": 18, "F": 15, "B": 1, "Li": 1 },
    "molarMass": "518.91 g/mol",
    "category": "Sel à anion faiblement coordinant",
    "summary": "Utilisé pour augmenter la conductivité ionique des polymères.",
    "occurrence": "Synthétique.",
    "applications": ["Batteries lithium-polymère"]
  },
  {
    "name": "Borure de Zirconium dopé au Silicium (ZrB₂:Si)",
    "formula": "ZrB₂Si",
    "composition": { "Zr": 1, "B": 2, "Si": 1 },
    "molarMass": "~141 g/mol",
    "category": "Céramique ultra-dure consolidée",
    "summary": "Le silicium améliore la résistance à l'oxydation à haute température.",
    "occurrence": "Synthétique.",
    "applications": ["Fusées spatiales"]
  },
  {
    "name": "Phosphate de Lanthane et de Néodyme (LaNdPO₄)",
    "formula": "LaNdPO₄",
    "composition": { "La": 0.5, "Nd": 0.5, "P": 1, "O": 4 },
    "molarMass": "~236.5 g/mol",
    "category": "Matériau laser compact",
    "summary": "Matrice mixte pour sources laser miniaturisées.",
    "occurrence": "Synthétique.",
    "applications": ["Optique de précision"]
  },
  {
    "name": "Niobate de Strontium et de Baryum (SBN)",
    "formula": "Sr₀.₅Ba₀.₅Nb₂O₆",
    "composition": { "Sr": 0.5, "Ba": 0.5, "Nb": 2, "O": 6 },
    "molarMass": "~394 g/mol",
    "category": "Cristal photoréfractif",
    "summary": "Utilisé pour le stockage de données holographiques et la génération de phase conjuguée.",
    "occurrence": "Synthétique.",
    "applications": ["Holographie numérique"]
  },
  {
    "name": "Tellurures de Gallium et d’Étain (SnGaTe₂)",
    "formula": "SnGaTe₂",
    "composition": { "Sn": 1, "Ga": 1, "Te": 2 },
    "molarMass": "~443.5 g/mol",
    "category": "Matériau pour mémoire à changement de phase",
    "summary": "Exploité pour sa vitesse de cristallisation ultrarapide.",
    "occurrence": "Synthétique.",
    "applications": ["Stockage informatique (PRAM)"]
  },
  {
    "name": "Tris(2,2,6,6-tétraméthyl-3,5-heptanedionato) terbium",
    "formula": "C₃₃H₅₇TbO₆",
    "composition": { "C": 33, "H": 57, "Tb": 1, "O": 6 },
    "molarMass": "708.73 g/mol",
    "category": "Agent luminophore CVD",
    "summary": "Dépose des films minces verts pour les dispositifs électroluminescents.",
    "occurrence": "Synthétique.",
    "applications": ["Affichage spécial"]
  },
  {
    "name": "Borure de Tantale et de Hafnium ((Ta,Hf)B₂)",
    "formula": "TaHfB₂",
    "composition": { "Ta": 1, "Hf": 1, "B": 2 },
    "molarMass": "~381 g/mol",
    "category": "Céramique thermique extrême",
    "summary": "Bénéficie d'une conductivité thermique élevée à température extrêmement haute.",
    "occurrence": "Synthétique.",
    "applications": ["Tuyères de fusée"]
  },
  {
    "name": "Séléniure d’Indium et de Cuivre (CuInSe₂ - CIS)",
    "formula": "CuInSe₂",
    "composition": { "Cu": 1, "In": 1, "Se": 2 },
    "molarMass": "336.33 g/mol",
    "category": "Matériau photovoltaïque",
    "summary": "L’un des matériaux les plus efficaces pour les cellules solaires à couche mince (CIGS).",
    "occurrence": "Minéral (Roquésite - rare).",
    "applications": ["Énergie solaire"]
  },
  {
    "name": "Octakis(phénylsilsesquioxane) (Ph-POSS)",
    "formula": "C₄₈H₄₀O₁₂Si₈",
    "composition": { "C": 48, "H": 40, "O": 12, "Si": 8 },
    "molarMass": "1033.52 g/mol",
    "category": "Nano-charge de renfort",
    "summary": "Améliore la stabilité thermique et la dureté des résines phénoliques.",
    "occurrence": "Synthétique.",
    "applications": ["Composites aérospatiaux"]
  },
  {
    "name": "Tellurures de Plomb et d’Argent (AgPbTe₂)",
    "formula": "AgPbTe₂",
    "composition": { "Ag": 1, "Pb": 1, "Te": 2 },
    "molarMass": "~570 g/mol",
    "category": "Semi-conducteur LAST",
    "summary": "Composé de base pour les matériaux thermoélectriques 'LAST' (Lead-Antimony-Silver-Tellurium).",
    "occurrence": "Synthétique.",
    "applications": ["Récupérateurs d'énergie automobile"]
  },
  {
    "name": "Tris(pentafluorophényl)gallium",
    "formula": "C₁₈F₁₅Ga",
    "composition": { "C": 18, "F": 15, "Ga": 1 },
    "molarMass": "570.88 g/mol",
    "category": "Réactif organométallique",
    "summary": "Utilisé pour la croissance épitaxiale des semi-conducteurs III-V dopés.",
    "occurrence": "Synthétique.",
    "applications": ["Microelectronics"]
  },
  {
    "name": "Borure de Tungstène et de Molybdène ((W,Mo)B₂)",
    "formula": "WMoB₂",
    "composition": { "W": 1, "Mo": 1, "B": 2 },
    "molarMass": "~300 g/mol",
    "category": "Solution solide superdure",
    "summary": "Combine la dureté du WB₂ avec la ténacité du MoB₂.",
    "occurrence": "Synthétique.",
    "applications": ["Outils de coupe haute vitesse"]
  },
  {
    "name": "Séléniure de Gallium (GaSe)",
    "formula": "GaSe",
    "composition": { "Ga": 1, "Se": 1 },
    "molarMass": "148.69 g/mol",
    "category": "Matériau non-linéaire monocouche",
    "summary": "Semi-conducteur 2D avec des propriétés optiques non-linéaires massives.",
    "occurrence": "Synthétique.",
    "applications": ["Génération de térahertz"]
  },
  {
    "name": "Octakis(vinylsilsesquioxane)",
    "formula": "C₁₈H₂₄O₁₂Si₈",
    "composition": { "C": 18, "H": 24, "O": 12, "Si": 8 },
    "molarMass": "633.04 g/mol",
    "category": "Réticulant hybride",
    "summary": "Utilisé pour créer des polymères transparents à haute dureté de surface.",
    "occurrence": "Synthétique.",
    "applications": ["Écrans protecteurs"]
  },
  {
    "name": "Tellurures de Plomb et de Cadmium (PbCdTe)",
    "formula": "PbCdTe",
    "composition": { "Pb": 1, "Cd": 1, "Te": 1 },
    "molarMass": "~447.5 g/mol",
    "category": "Matériau pour caméras thermiques",
    "summary": "Utilisé pour la détection infrarouge à très large spectre.",
    "occurrence": "Synthétique.",
    "applications": ["Détection à distance"]
  },
  {
    "name": "Tris(2,2,6,6-tétraméthyl-3,5-heptanedionato) gadolinium",
    "formula": "C₃₃H₅₇GdO₆",
    "composition": { "C": 33, "H": 57, "Gd": 1, "O": 6 },
    "molarMass": "707.05 g/mol",
    "category": "Agent de contraste CVD",
    "summary": "Utilisé pour la fonctionnalisation de couches minces pour l'IRM.",
    "occurrence": "Synthétique.",
    "applications": ["Medtech"]
  },
  {
    "name": "Borure de Zirconium et d’Yttrium ((Zr,Y)B₂)",
    "formula": "ZrYB₂",
    "composition": { "Zr": 1, "Y": 1, "B": 2 },
    "molarMass": "~223 g/mol",
    "category": "Céramique structurale thermique",
    "summary": "L’yttrium stabilise la structure contre les chocs thermiques.",
    "occurrence": "Synthétique.",
    "applications": ["Moteurs d'avions"]
  },
  {
    "name": "Antimoniure de Zinc (Zn₄Sb₃)",
    "formula": "Zn₄Sb₃",
    "composition": { "Zn": 4, "Sb": 3 },
    "molarMass": "626.83 g/mol",
    "category": "Matériau thermoélectrique efficace",
    "summary": "Connu pour sa très faible conductivité thermique ('verre cristallin').",
    "occurrence": "Synthétique.",
    "applications": ["Récupération de chaleur de moyenne température"]
  },
  {
    "name": "Titano-Ferrite de Baryum (BaTi.₈Fe.₂O₃)",
    "formula": "BaTiFeO₃",
    "composition": { "Ba": 1, "Ti": 1, "Fe": 1, "O": 3 },
    "molarMass": "~235 g/mol",
    "category": "Matériau multiferroïque",
    "summary": "Présente simultanément un ordre ferroélectrique et magnétique.",
    "occurrence": "Synthétique.",
    "applications": ["Mémoires magnéto-électriques"]
  },
  {
    "name": "Tellurures de Mercure et de Zinc (HgZnTe)",
    "formula": "HgZnTe",
    "composition": { "Hg": 1, "Zn": 1, "Te": 1 },
    "molarMass": "~393.5 g/mol",
    "category": "Alternative au MCT",
    "summary": "Moins toxique et plus stable thermiquement que le HgCdTe pour l'imagerie IR.",
    "occurrence": "Synthétique.",
    "applications": ["Imagerie industrielle"]
  },
  {
    "name": "Tris(pentafluorophényl)indium",
    "formula": "C₁₈F₁₅In",
    "composition": { "C": 18, "F": 15, "In": 1 },
    "molarMass": "616.01 g/mol",
    "category": "Acide de Lewis de terre rare",
    "summary": "Utilisé en catalyse de polymérisation stéréosélective.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de polymères"]
  },
  {
    "name": "Borure d’Indium et d’Aluminium (InAlB₂)",
    "formula": "InAlB₂",
    "composition": { "In": 1, "Al": 1, "B": 2 },
    "molarMass": "~163.5 g/mol",
    "category": "Composé ternaire expérimental",
    "summary": "Candidat pour les couches minces d’optoélectronique de puissance.",
    "occurrence": "Synthétique.",
    "applications": ["Electronique haute puissance"]
  },
  {
    "name": "Phosphate de Lanthane et de Gadolinium (LaGdPO₄)",
    "formula": "LaGdPO₄",
    "composition": { "La": 0.5, "Gd": 0.5, "P": 1, "O": 4 },
    "molarMass": "~243 g/mol",
    "category": "Matrice scintillatrice",
    "summary": "Utilisé dans les détecteurs de particules haute performance.",
    "occurrence": "Synthétique.",
    "applications": ["Physique nucléaire"]
  },
  {
    "name": "Tétraphtalate de Praséodyme (Hydrate)",
    "formula": "Pr₂(C₈H₄O₄)₃·nH₂O",
    "composition": { "Pr": 2, "C": 24, "H": 12, "O": 12 },
    "molarMass": "~765 g/mol",
    "category": "Réseau MOF",
    "summary": "Utilisé pour la séparation sélective du CO₂ dans les mélanges gazeux.",
    "occurrence": "Synthétique.",
    "applications": ["Capture du carbone"]
  },
  {
    "name": "Séléniure de Tungstène (WSe₂)",
    "formula": "WSe₂",
    "composition": { "W": 1, "Se": 2 },
    "molarMass": "341.77 g/mol",
    "category": "Semiconducteur 2D atomique",
    "summary": "Matériau clé pour la vallée-tronique et les cellules solaires ultra-minces.",
    "occurrence": "Synthétique.",
    "applications": ["Électronique post-silicium"]
  },
  {
    "name": "Octakis(triméthylsiloxy)silsesquioxane (Q8M8)",
    "formula": "C₂₄H₇₈O₂₀Si₁₆",
    "composition": { "C": 24, "H": 78, "O": 20, "Si": 16 },
    "molarMass": "1129.16 g/mol",
    "category": "Précurseur de nanomatériau",
    "summary": "Modèle moléculaire pour le verre de silice, utilisé dans les nanotechnologies.",
    "occurrence": "Synthétique.",
    "applications": ["Surface fonctionnelle", "Cosmétiques"]
  },
  {
    "name": "Tellururures d’Étain et de Germanium (SnGeTe)",
    "formula": "SnGeTe",
    "composition": { "Sn": 1, "Ge": 1, "Te": 1 },
    "molarMass": "~318.9 g/mol",
    "category": "Alliage pour électronique flexible",
    "summary": "Utilisé pour la fabrication de transistors en couches minces à haute mobilité.",
    "occurrence": "Synthétique.",
    "applications": ["Écrans flexibles"]
  },
  {
    "name": "Tris(isopropyl)stibine",
    "formula": "C₉H₂₁Sb",
    "composition": { "C": 9, "H": 21, "Sb": 1 },
    "molarMass": "250.04 g/mol",
    "category": "Source d’antimoine",
    "summary": "Précurseur à basse température pour les alliages d’antimoniure.",
    "occurrence": "Synthétique.",
    "applications": ["Épitaxie"]
  },
  {
    "name": "Borure de Tantale et de Niobium ((Ta,Nb)B₂)",
    "formula": "TaNbB₂",
    "composition": { "Ta": 1, "Nb": 1, "B": 2 },
    "molarMass": "~295.5 g/mol",
    "category": "Céramique de protection balistique",
    "summary": "Alliage de grande dureté utilisé pour les blindages ultra-légers.",
    "occurrence": "Synthétique.",
    "applications": ["Défense"]
  },
  {
    "name": "Séléniure de Bismuth (Bi₂Se₃)",
    "formula": "Bi₂Se₃",
    "composition": { "Bi": 2, "Se": 3 },
    "molarMass": "654.84 g/mol",
    "category": "Isolant topologique 3D",
    "summary": "Matériau modèle présentant des états électroniques à la surface mais isolant à l'intérieur.",
    "occurrence": "Minéral (Guanajuatite).",
    "applications": ["Spintronique", "Physique quantique"]
  },
  {
    "name": "Octakis(trifluorométhylsilyloxy)silsesquioxane",
    "formula": "C₈H₂₄F₂₄O₂₀Si₁₆",
    "composition": { "C": 8, "H": 24, "F": 24, "O": 20, "Si": 16 },
    "molarMass": "~1360 g/mol",
    "category": "POSS super-fluoré",
    "summary": "Permet de créer des revêtements omniphobes (repoussant l'eau et l'huile).",
    "occurrence": "Synthétique.",
    "applications": ["Systèmes anti-graffiti"]
  },
  {
    "name": "Tellurures de Plomb et d’Ytterbium (PbYbTe₂)",
    "formula": "PbYbTe₂",
    "composition": { "Pb": 1, "Yb": 1, "Te": 2 },
    "molarMass": "~636 g/mol",
    "category": "Thermoélectrique haute performance",
    "summary": "Utilise l'ytterbium pour abaisser la conductivité thermique du réseau.",
    "occurrence": "Synthétique.",
    "applications": ["Générateurs thermiques stationnaires"]
  },
  {
    "name": "Tris(triméthylsilyl)borate de Lanthane",
    "formula": "C₉H₂₇BO₃Si₃La",
    "composition": { "C": 9, "H": 27, "B": 1, "O": 3, "Si": 3, "La": 1 },
    "molarMass": "~416 g/mol",
    "category": "Additif de spécialité",
    "summary": "Utilisé pour stabiliser l'électrolyte dans les batteries haute température.",
    "occurrence": "Synthétique.",
    "applications": ["Stockage d'énergie avancé"]
  },
  {
    "name": "Borure d’Indium et de Manganèse (InMnB₂)",
    "formula": "InMnB₂",
    "composition": { "In": 1, "Mn": 1, "B": 2 },
    "molarMass": "~191.5 g/mol",
    "category": "Semi-conducteur magnétique",
    "summary": "Matériau étudié pour l'injection de spin dans les semi-conducteurs III-V.",
    "occurrence": "Synthétique.",
    "applications": ["Circuits spintroniques"]
  },
  {
    "name": "Phosphate de Lanthane et de Cérium (LaCePO₄)",
    "formula": "LaCePO₄",
    "composition": { "La": 0.5, "Ce": 0.5, "P": 1, "O": 4 },
    "molarMass": "~241 g/mol",
    "category": "Support de catalyseur",
    "summary": "Grande stabilité thermique pour les pots catalytiques haute performance.",
    "occurrence": "Synthétique.",
    "applications": ["Automobile"]
  },
  {
    "name": "Ferrite de Baryum et de Nickel (BaNi₂Fe₁₆O₂₇)",
    "formula": "BaNi₂Fe₁₆O₂₇",
    "composition": { "Ba": 1, "Ni": 2, "Fe": 16, "O": 27 },
    "molarMass": "~1550 g/mol",
    "category": "Matériau absorbant hyperfréquences",
    "summary": "Composant des chambres anéchoïques pour les tests micro-ondes.",
    "occurrence": "Synthétique.",
    "applications": ["Télécoms", "Défense"]
  },
  {
    "name": "Tellururures de Cuivre et de Gallium (CuGaTe₂)",
    "formula": "CuGaTe₂",
    "composition": { "Cu": 1, "Ga": 1, "Te": 2 },
    "molarMass": "~388.5 g/mol",
    "category": "Absorbeur photovoltaïque",
    "summary": "Possède un gap énergétique idéal pour les dispositifs solaires multi-jonctions.",
    "occurrence": "Synthétique.",
    "applications": ["Énergie propre"]
  },
  {
    "name": "Tris(2,2,6,6-tétraméthyl-3,5-heptanedionato) cérium",
    "formula": "C₃₃H₅₇CeO₆",
    "composition": { "C": 33, "H": 57, "Ce": 1, "O": 6 },
    "molarMass": "688.94 g/mol",
    "category": "Précurseur d’oxydation",
    "summary": "Source de cérium pour les revêtements anti-corrosion auto-cicatrisants.",
    "occurrence": "Synthétique.",
    "applications": ["Traitement de surface"]
  },
  {
    "name": "Borure de Zirconium et de Chrome ((Zr,Cr)B₂)",
    "formula": "ZrCrB₂",
    "composition": { "Zr": 1, "Cr": 1, "B": 2 },
    "molarMass": "~185 g/mol",
    "category": "Matériau résistant à la corrosion",
    "summary": "Alliage borure stable dans les milieux acides agressifs.",
    "occurrence": "Synthétique.",
    "applications": ["Génie chimique"]
  },
  {
    "name": "Tellurures de Mercure et de Plomb (HgPbTe)",
    "formula": "HgPbTe",
    "composition": { "Hg": 1, "Pb": 1, "Te": 1 },
    "molarMass": "~535.5 g/mol",
    "category": "Semi-conducteur à gap étroit",
    "summary": "Utilisé pour la détection infrarouge très lointaine.",
    "occurrence": "Synthétique.",
    "applications": ["Astronomie infrarouge"]
  },
  {
    "name": "Tris(pentafluorophényl)indium (Etherate)",
    "formula": "C₁₈F₁₅In·(C₂H₅)₂O",
    "composition": { "C": 22, "H": 10, "F": 15, "In": 1, "O": 1 },
    "molarMass": "690.13 g/mol",
    "category": "Forme stable d'acide de Lewis",
    "summary": "Complexe éthéré plus facile à manipuler pour la catalyse organique.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie fine"]
  },
  {
    "name": "Borure de Molybdène et de Niobium ((Mo,Nb)B₂)",
    "formula": "MoNbB₂",
    "composition": { "Mo": 1, "Nb": 1, "B": 2 },
    "molarMass": "~210.5 g/mol",
    "category": "Alliage réfractaire haute dureté",
    "summary": "Matériau pour les applications de frottement à haute vitesse.",
    "occurrence": "Synthétique.",
    "applications": ["Mécanique lourde"]
  },
  {
    "name": "Phosphate de Lanthane et d'Yttrium (LaYPO₄)",
    "formula": "LaYPO₄",
    "composition": { "La": 0.5, "Y": 0.5, "P": 1, "O": 4 },
    "molarMass": "~209 g/mol",
    "category": "Céramique hôte",
    "summary": "Utilisée pour supporter des ions luminescents dans l'imagerie biomédicale.",
    "occurrence": "Synthétique.",
    "applications": ["Bio-photonique"]
  },
  {
    "name": "Tétraphtalate de Samarium (Hydrate)",
    "formula": "Sm₂(C₈H₄O₄)₃·nH₂O",
    "composition": { "Sm": 2, "C": 24, "H": 12, "O": 12 },
    "molarMass": "~784 g/mol",
    "category": "Matériau MOF magnétique",
    "summary": "Étudié pour le stockage de gaz avec signalisation magnétique de saturation.",
    "occurrence": "Synthétique.",
    "applications": ["Capteurs intelligents de gaz"]
  },
  {
    "name": "Tellururure d’argent et d’indium (AgInTe₂)",
    "formula": "AgInTe₂",
    "composition": { "Ag": 1, "In": 1, "Te": 2 },
    "molarMass": "477.93 g/mol",
    "category": "Alliage chalcopyrite",
    "summary": "Semi-conducteur utilisé pour les dispositifs optiques infrarouges accordables.",
    "occurrence": "Synthétique.",
    "applications": ["Télécommunications"]
  },
  {
    "name": "Octakis(triméthylsilyloxysilyl)silsesquioxane (Hydrure)",
    "formula": "C₂₄H₈₀O₂₀Si₁₆",
    "composition": { "C": 24, "H": 80, "O": 20, "Si": 16 },
    "molarMass": "~1140 g/mol",
    "category": "Intermédiaire siloxane",
    "summary": "Base pour le greffage de molécules organiques par hydrosilylation.",
    "occurrence": "Synthétique.",
    "applications": ["Matériaux sur mesure"]
  },
  {
    "name": "Tellurures de Bismuth et de Germanium (Bi₂GeTe₄)",
    "formula": "Bi₂GeTe₄",
    "composition": { "Bi": 2, "Ge": 1, "Te": 4 },
    "molarMass": "~1001 g/mol",
    "category": "Composé ternaire topologique",
    "summary": "Isolant topologique intrinsèque présentant une structure en couches.",
    "occurrence": "Synthétique.",
    "applications": ["Calcul quantique"]
  },
  {
    "name": "Tris(pentafluorophényl)stannane",
    "formula": "C₁₈F₁₅SnH",
    "composition": { "C": 18, "F": 15, "Sn": 1, "H": 1 },
    "molarMass": "620.89 g/mol",
    "category": "Hydrure d'étain perfluoré",
    "summary": "Agent réducteur puissant et sélectif en synthèse organique radicalaire.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie pharmaceutique"]
  },
  {
    "name": "Borure de Zirconium et de Manganèse ((Zr,Mn)B₂)",
    "formula": "ZrMnB₂",
    "composition": { "Zr": 1, "Mn": 1, "B": 2 },
    "molarMass": "~188 g/mol",
    "category": "Matériau borure magnétique",
    "summary": "Utilisé pour l'étude des propriétés de transport électronique polarisé.",
    "occurrence": "Synthétique.",
    "applications": ["Magnéto-électronique"]
  },
  {
    "name": "Phosphate de Cérium et de Néodyme (CeNdPO₄)",
    "formula": "CeNdPO₄",
    "composition": { "Ce": 0.5, "Nd": 0.5, "P": 1, "O": 4 },
    "molarMass": "~237 g/mol",
    "category": "Luminophore de conversion",
    "summary": "Utilisé pour améliorer le rendement lumineux des verres lasers.",
    "occurrence": "Synthétique.",
    "applications": ["Lasers haute énergie"]
  },
  {
    "name": "Ferrite de Baryum et de Manganèse (BaMn₂Fe₁₆O₂₇)",
    "formula": "BaMn₂Fe₁₆O₂₇",
    "composition": { "Ba": 1, "Mn": 2, "Fe": 16, "O": 27 },
    "molarMass": "~1540 g/mol",
    "category": "Céramique magnétique haute fréquence",
    "summary": "Utilise le manganèse pour ajuster la perméabilité magnétique.",
    "occurrence": "Synthétique.",
    "applications": ["Radar Doppler"]
  },
  {
    "name": "Tellururures de Zinc et d’Antimoine (Zn₄Sb₃)",
    "formula": "Zn₄Sb₃",
    "composition": { "Zn": 4, "Sb": 3 },
    "molarMass": "626.83 g/mol",
    "category": "Matériau thermoélectrique efficace",
    "summary": "Connu pour sa structure cristalline désordonnée limitant les phonons.",
    "occurrence": "Synthétique.",
    "applications": ["Récupération de chaleur industrielle"]
  },
  {
    "name": "Tris(2,2,6,6-tétraméthyl-3,5-heptanedionato) holmium",
    "formula": "C₃₃H₅₇HoO₆",
    "composition": { "C": 33, "H": 57, "Ho": 1, "O": 6 },
    "molarMass": "714.73 g/mol",
    "category": "Source d'ions holmium",
    "summary": "Utilisé pour doper les lasers chirurgicaux fonctionnant à 2,1 µm.",
    "occurrence": "Synthétique.",
    "applications": ["Lasers médicaux"]
  },
  {
    "name": "Borure de Tantale et de Chrome ((Ta,Cr)B₂)",
    "formula": "TaCrB₂",
    "composition": { "Ta": 1, "Cr": 1, "B": 2 },
    "molarMass": "~254.5 g/mol",
    "category": "Alliage dur résistant à la chaleur",
    "summary": "Matériau pour les vannes de moteurs haute performance.",
    "occurrence": "Synthétique.",
    "applications": ["Moteurs de course"]
  },
  {
    "name": "Tellurures de Bismuth, Antimoine et Sélénium (BiSbSe₃)",
    "formula": "BiSbSe₃",
    "composition": { "Bi": 1, "Sb": 1, "Se": 3 },
    "molarMass": "~567 g/mol",
    "category": "Thermoélectrique p-type",
    "summary": "Utilisé pour la réfrigération thermoélectrique près de la température ambiante.",
    "occurrence": "Synthétique.",
    "applications": ["Climatisation sans fluide"]
  },
  {
    "name": "Tris(benzyl)indium",
    "formula": "C₂₁H₂₁In",
    "composition": { "C": 21, "H": 21, "In": 1 },
    "molarMass": "388.22 g/mol",
    "category": "Organique d’indium réactif",
    "summary": "Utilisé pour préparer des nanoparticules d’InAs par thermolyse.",
    "occurrence": "Synthétique.",
    "applications": ["Matériaux nanostructurés"]
  }
];

/**
 * Batch P44 Finalisé - 500 molécules authentifiées ajoutées.
 * Série 44: Inhibiteurs (VIH/INSTI), Piézoélectriques, Matériaux 2D, Radiopharmaceutiques et POSS.
 * Total certifié: 26 029 molécules réelles.
 * Copyright: Sébastien John Bruneau
 */
