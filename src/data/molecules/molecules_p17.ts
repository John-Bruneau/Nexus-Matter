import { MoleculeDefinition } from '../../types/molecule';

/**
 * Copyright Sébastien John Bruneau
 * Bibliothèque de molécules Série 17 - Batch 1 (Nucléotides, Grignard, Organométalliques)
 */

export const MOLECULES_P17: MoleculeDefinition[] = [
  {
    "name": "Adénosine Monophosphate (AMP)",
    "formula": "C₁₀H₁₄N₅O₇P",
    "composition": { "C": 10, "H": 14, "N": 5, "O": 7, "P": 1 },
    "molarMass": "347.22 g/mol",
    "category": "Nucléotide",
    "summary": "Nucléotide impliqué dans les transferts d'énergie cellulaire.",
    "occurrence": "Toutes les cellules vivantes.",
    "applications": ["Métabolisme", "Signalisation cellulaire"]
  },
  {
    "name": "Guanosine Monophosphate (GMP)",
    "formula": "C₁₀H₁₄N₅O₈P",
    "composition": { "C": 10, "H": 14, "N": 5, "O": 8, "P": 1 },
    "molarMass": "363.22 g/mol",
    "category": "Nucléotide",
    "summary": "Composant de l'ARN et précurseur du second messager cGMP.",
    "occurrence": "Organismes vivants.",
    "applications": ["Synthèse protéique"]
  },
  {
    "name": "Cytidine Monophosphate (CMP)",
    "formula": "C₉H₁₄N₃O₈P",
    "composition": { "C": 9, "H": 14, "N": 3, "O": 8, "P": 1 },
    "molarMass": "323.20 g/mol",
    "category": "Nucléotide",
    "summary": "Nucléotide constitutif de l'acide ribonucléique.",
    "occurrence": "Noyaux cellulaires.",
    "applications": ["Génétique"]
  },
  {
    "name": "Uridine Monophosphate (UMP)",
    "formula": "C₉H₁₃N₂O₉P",
    "composition": { "C": 9, "H": 13, "N": 2, "O": 9, "P": 1 },
    "molarMass": "324.18 g/mol",
    "category": "Nucléotide",
    "summary": "Nucléotide spécifique à l'ARN remplaçant la thymidine.",
    "occurrence": "Cellules eucaryotes.",
    "applications": ["Transcription"]
  },
  {
    "name": "Bromure de Méthylmagnésium",
    "formula": "CH₃MgBr",
    "composition": { "C": 1, "H": 3, "Mg": 1, "Br": 1 },
    "molarMass": "119.24 g/mol",
    "category": "Réactif de Grignard",
    "summary": "L'un des réactifs de Grignard les plus simples pour la méthylation.",
    "safetyWarning": "Réagit violemment avec l'eau, pyrophorique en solution concentrée.",
    "occurrence": "Synthétique (solution d'éther).",
    "applications": ["Synthèse organique", "Chimie fine"]
  },
  {
    "name": "Chlorure de Phénylmagnésium",
    "formula": "C₆H₅MgCl",
    "composition": { "C": 6, "H": 5, "Mg": 1, "Cl": 1 },
    "molarMass": "136.86 g/mol",
    "category": "Réactif de Grignard",
    "summary": "Utilisé pour introduire des groupements phényles.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie pharmaceutique"]
  },
  {
    "name": "Iodure d'Ethylmagnésium",
    "formula": "C₂H₅MgI",
    "composition": { "C": 2, "H": 5, "Mg": 1, "I": 1 },
    "molarMass": "180.27 g/mol",
    "category": "Réactif de Grignard",
    "summary": "Réactif puissant pour l'éthylations de carbonyles.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche"]
  },
  {
    "name": "Carbène de Schrock (Exemple)",
    "formula": "C₁₀H₁₈Ta",
    "composition": { "C": 10, "H": 18, "Ta": 1 },
    "molarMass": "327.19 g/mol",
    "category": "Organometallique / Carbène",
    "summary": "Complexe métal-alkyle à double liaison métal-carbone nucléophile.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse de métathèse"]
  },
  {
    "name": "Cobaltocène",
    "formula": "C₁₀H₁₀Co",
    "composition": { "C": 10, "H": 10, "Co": 1 },
    "molarMass": "189.12 g/mol",
    "category": "Métallocène",
    "summary": "Analogue du ferrocène, mais avec 19 électrons de valence, ce qui le rend réducteur.",
    "occurrence": "Synthétique.",
    "applications": ["Agent réducteur en organométallique"]
  },
  {
    "name": "Chromocène",
    "formula": "C₁₀H₁₀Cr",
    "composition": { "C": 10, "H": 10, "Cr": 1 },
    "molarMass": "182.18 g/mol",
    "category": "Métallocène",
    "summary": "Sandwich de chrome paramagnétique et hautement réactif à l'air.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyseurs de polymérisation"]
  },
  {
    "name": "Vanadocène",
    "formula": "C₁₀H₁₀V",
    "composition": { "C": 10, "H": 10, "V": 1 },
    "molarMass": "181.13 g/mol",
    "category": "Métallocène",
    "summary": "Sandwich de vanadium utilisé comme précurseur organométallique.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche fondamentale"]
  },
  {
    "name": "Uranocène",
    "formula": "C₁₆H₁₆U",
    "composition": { "C": 16, "H": 16, "U": 1 },
    "molarMass": "446.33 g/mol",
    "category": "Actinocène",
    "summary": "Le premier composé organo-actinide avec un ligand cyclo-octatétraène.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie des actinides"]
  },
  {
    "name": "Platinium-Cyclo-hexadiène",
    "formula": "C₆H₈Pt",
    "composition": { "C": 6, "H": 8, "Pt": 1 },
    "molarMass": "275.21 g/mol",
    "category": "Complexe Organoplatine",
    "summary": "Intermédiaire dans les catalyseurs de réticulation des silicones.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie des polymères"]
  },
  {
    "name": "Dodécacarbonyle de Triruthénium",
    "formula": "Ru₃(CO)₁₂",
    "composition": { "Ru": 3, "C": 12, "O": 12 },
    "molarMass": "639.33 g/mol",
    "category": "Cluster Carbonyle",
    "summary": "Cluster métallique utilisé comme catalyseur de carbonylation.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse industrielle"]
  },
  {
    "name": "Tétramère de Méthyllithium",
    "formula": "C₄H₁₂Li₄",
    "composition": { "C": 4, "H": 12, "Li": 4 },
    "molarMass": "87.82 g/mol",
    "category": "Organolithien",
    "summary": "Forme agrégée du méthyllithium en solution solide.",
    "occurrence": "Synthétique.",
    "applications": ["Base forte", "Agent de nucléophilie"]
  },
  {
    "name": "Acétate de Cuivre(II) Monohydraté",
    "formula": "Cu₂(CH₃COO)₄(H₂O)₂",
    "composition": { "Cu": 2, "C": 8, "H": 16, "O": 10 },
    "molarMass": "399.33 g/mol",
    "category": "Sel Hydraté",
    "summary": "Structure en 'cage' caractéristique avec liaison Cu-Cu.",
    "occurrence": "Synthétique.",
    "applications": ["Pigment (Vert-de-gris)", "Oxydant"]
  },
  {
    "name": "Ambroxan",
    "formula": "C₁₆H₂₈O",
    "composition": { "C": 16, "H": 28, "O": 1 },
    "molarMass": "236.39 g/mol",
    "category": "Fragrance / Terpène",
    "summary": "Responsable de l'odeur ambrée et boisée du précieux ambre gris.",
    "occurrence": "Sauge sclarée (précurseur).",
    "applications": ["Parfumerie de luxe (Note de fond)"]
  },
  {
    "name": "Hedione",
    "formula": "C₁₃H₂₂O₃",
    "composition": { "C": 13, "H": 22, "O": 3 },
    "molarMass": "226.31 g/mol",
    "category": "Fragrance",
    "summary": "Odeur de jasmin frais et transparent, révolution du parfum moderne.",
    "occurrence": "Synthétique.",
    "applications": ["Parfumerie (CK One, etc.)"]
  },
  {
    "name": "Calone",
    "formula": "C₁₀H₁₀O₃",
    "composition": { "C": 10, "H": 10, "O": 3 },
    "molarMass": "178.18 g/mol",
    "category": "Fragrance Marine",
    "summary": "Note 'brise marine' ou 'pastèque' utilisée dans les parfums aquatiques.",
    "occurrence": "Synthétique.",
    "applications": ["Parfumerie (Années 90)"]
  },
  {
    "name": "Iso E Super",
    "formula": "C₁₆H₂₆O",
    "composition": { "C": 16, "H": 26, "O": 1 },
    "molarMass": "234.38 g/mol",
    "category": "Fragrance Boisée",
    "summary": "Molécule au sillage velouté et ambré, très utilisée comme exhausteur.",
    "occurrence": "Synthétique.",
    "applications": ["Parfumerie moderne"]
  },
  {
    "name": "Éthyl Maltol",
    "formula": "C₇H₈O₃",
    "composition": { "C": 7, "H": 8, "O": 3 },
    "molarMass": "140.14 g/mol",
    "category": "Fragrance Gourmande",
    "summary": "Odeur de barbe à papa et de caramel brûlé.",
    "occurrence": "Synthétique.",
    "applications": ["Parfums orientaux gourmands", "E-liquides"]
  },
  {
    "name": "Musc Xylène",
    "formula": "C₁₂H₁₅N₃O₆",
    "composition": { "C": 12, "H": 15, "N": 3, "O": 6 },
    "molarMass": "297.26 g/mol",
    "category": "Musc Synthétique",
    "summary": "Ancien musc nitré à l'odeur très persistante.",
    "safetyWarning": "Hautement bioaccumulable, banni dans de nombreux pays.",
    "occurrence": "Synthétique.",
    "applications": ["Savonnerie (historique)"]
  },
  {
    "name": "Cyclopentadécénone (Civetone)",
    "formula": "C₁₇H₃₀O",
    "composition": { "C": 17, "H": 30, "O": 1 },
    "molarMass": "250.42 g/mol",
    "category": "Musc Macrocylique",
    "summary": "Composant principal de l'odeur de civette, musc naturel très puissant.",
    "occurrence": "Sécrétions de la Civette.",
    "applications": ["Parfumerie fine"]
  },
  {
    "name": "Tétrodotoxine",
    "formula": "C₁₁H₁₇N₃O₈",
    "composition": { "C": 11, "H": 17, "N": 3, "O": 8 },
    "molarMass": "319.27 g/mol",
    "category": "Neurotoxine",
    "summary": "Bloqueur des canaux sodium, mortelle si ingérée.",
    "safetyWarning": "Mortelle à dose infime.",
    "occurrence": "Poissons-globes (Fugu).",
    "applications": ["Recherche en neurosciences"]
  },
  {
    "name": "Saxitoxine",
    "formula": "C₁₀H₁₇N₇O₄",
    "composition": { "C": 10, "H": 17, "N": 7, "O": 4 },
    "molarMass": "299.29 g/mol",
    "category": "Toxine Marine",
    "summary": "Cause d'intoxication paralysante par les mollusques.",
    "occurrence": "Dinoflagellés.",
    "applications": ["Étude ionique"]
  },
  {
    "name": "Conotoxine (Fragment G)",
    "formula": "C₈H₁₂N₂O₃",
    "composition": { "C": 8, "H": 12, "N": 2, "O": 3 },
    "molarMass": "184.19 g/mol",
    "category": "Peptide Toxique",
    "summary": "Fragment d'un venin de cône marin ciblant les récepteurs nicotiniques.",
    "occurrence": "Conus geographus.",
    "applications": ["Antidouleurs de synthèse"]
  },
  {
    "name": "Batrachotoxine",
    "formula": "C₃₁H₄₂N₂O₆",
    "composition": { "C": 31, "H": 42, "N": 2, "O": 6 },
    "molarMass": "538.68 g/mol",
    "category": "Alcaloïde Stéroïdien",
    "summary": "Une des toxines les plus puissantes connues, force l'ouverture des canaux sodium.",
    "occurrence": "Grenouilles Phyllobates.",
    "applications": ["Aucune (Extrêmement dangereuse)"]
  },
  {
    "name": "Chlorure de Radium",
    "formula": "RaCl₂",
    "composition": { "Ra": 1, "Cl": 2 },
    "molarMass": "296.91 g/mol",
    "category": "Sel Radioactif",
    "summary": "Utilisé historiquement pour les peintures luminescentes.",
    "safetyWarning": "Fortement radioactif, émetteur de Radon.",
    "occurrence": "Minerais d'uranium.",
    "applications": ["Recherche (historique)"]
  },
  {
    "name": "Fluorodésoxyglucose (FDG)",
    "formula": "C₆H₁₁FO₅",
    "composition": { "C": 6, "H": 11, "F": 1, "O": 5 },
    "molarMass": "181.16 g/mol",
    "category": "Radiopharmaceutique",
    "summary": "Utilisé avec le Fluor-18 pour la tomographie par émission de positrons (TEP).",
    "occurrence": "Synthétique.",
    "applications": ["Oncologie (imagerie)"]
  },
  {
    "name": "Lutétium-177 Dotatate",
    "formula": "C₆₅H₉₀N₁₄O₁₉S₂Lu",
    "composition": { "C": 65, "H": 90, "N": 14, "O": 19, "S": 2, "Lu": 1 },
    "molarMass": "1609.6 g/mol",
    "category": "Radioligand",
    "summary": "Traitement de pointe pour les tumeurs neuroendocrines.",
    "occurrence": "Synthétique.",
    "applications": ["Radiothérapie ciblée"]
  },
  {
    "name": "Technétium-99m Sestamibi",
    "formula": "C₃₆H₆₆N₆O₆Tc",
    "composition": { "C": 36, "H": 66, "N": 6, "O": 6, "Tc": 1 },
    "molarMass": "777.6 g/mol",
    "category": "Traceur Cardiaque",
    "summary": "Traceur radioactif le plus utilisé pour l'imagerie du cœur.",
    "occurrence": "Générateur Mo/Tc.",
    "applications": ["Scintigraphie myocardique"]
  },
  {
    "name": "Cobalt-60 (Source - forme métallique encapsulée)",
    "formula": "Co",
    "composition": { "Co": 1 },
    "molarMass": "59.93 g/mol",
    "category": "Isotope Radioactif",
    "summary": "Émetteur gamma puissant utilisé pour la stérilisation.",
    "safetyWarning": "Risque d'irradiation majeure.",
    "occurrence": "Activation neutronique industrielle.",
    "applications": ["Stérilisation médicale", "Gammathérapie"]
  },
  {
    "name": "Catalyseur de Grubbs (2ème Génération)",
    "formula": "C₄₆H₆₅Cl₂N₂PRu",
    "composition": { "C": 46, "H": 65, "Cl": 2, "N": 2, "P": 1, "Ru": 1 },
    "molarMass": "848.98 g/mol",
    "category": "Catalyseur",
    "summary": "Catalyseur au ruthénium révolutionnaire pour la métathèse des alcènes.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de polymères", "Industrie pharmaceutique"]
  },
  {
    "name": "Catalyseur de Hoveyda-Grubbs (2ème Génération)",
    "formula": "C₃₁H₃₈Cl₂N₂ORu",
    "composition": { "C": 31, "H": 38, "Cl": 2, "N": 2, "O": 1, "Ru": 1 },
    "molarMass": "626.62 g/mol",
    "category": "Catalyseur",
    "summary": "Version plus stable et recyclable du catalyseur de Grubbs.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie organique avancée"]
  },
  {
    "name": "Catalyseur de Crabtree",
    "formula": "C₃₁H₅₀NP Ir",
    "composition": { "C": 31, "H": 50, "N": 1, "P": 1, "Ir": 1 },
    "molarMass": "643.92 g/mol",
    "category": "Catalyseur d'Hydrogénation",
    "summary": "Complexe d'iridium pour l'hydrogénation homogène des alcènes trisubstitués.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse asymétrique"]
  },
  {
    "name": "n-Butyllithium",
    "formula": "C₄H₉Li",
    "composition": { "C": 4, "H": 9, "Li": 1 },
    "molarMass": "64.06 g/mol",
    "category": "Organolithien / Base",
    "summary": "Base extrêmement forte utilisée pour la lithiation.",
    "safetyWarning": "Pyrophorique, s'enflamme spontanément à l'air.",
    "occurrence": "Synthétique.",
    "applications": ["Initiateur de polymérisation", "Synthèse organique"]
  },
  {
    "name": "tert-Butyllithium",
    "formula": "C₄H₉Li",
    "composition": { "C": 4, "H": 9, "Li": 1 },
    "molarMass": "64.06 g/mol",
    "category": "Organolithien / Base",
    "summary": "Encore plus réactif que le n-BuLi, extrêmement dangereux à manipuler.",
    "safetyWarning": "Danger d'incendie majeur, manipulation sous gaz inerte stricte.",
    "occurrence": "Synthétique.",
    "applications": ["Échanges halogène-métal"]
  },
  {
    "name": "Acide Perfluorooctanesulfonique (PFOS)",
    "formula": "C₈HF₁₇O₃S",
    "composition": { "C": 8, "H": 1, "F": 17, "O": 3, "S": 1 },
    "molarMass": "500.13 g/mol",
    "category": "Surfactant / PFAS",
    "summary": "Molécule 'éternelle' polluante, extrêmement stable.",
    "occurrence": "Synthétique, accumulation environnementale.",
    "applications": ["Imperméabilisation (historique)"]
  },
  {
    "name": "Acide Perfluorooctanoïque (PFOA)",
    "formula": "C₈HF₁₅O₂",
    "composition": { "C": 8, "H": 1, "F": 15, "O": 2 },
    "molarMass": "414.07 g/mol",
    "category": "Acide / PFAS",
    "summary": "Utilisé dans la fabrication du Téflon, polluant persistant.",
    "occurrence": "Sols, eaux usées.",
    "applications": ["Fluoropolymères"]
  },
  {
    "name": "Éthoxylate de Nonylphénol",
    "formula": "C₁₅H₂₄O",
    "composition": { "C": 15, "H": 24, "O": 1 },
    "molarMass": "220.35 g/mol",
    "category": "Surfactant",
    "summary": "Agent mouillant industriel, perturbateur endocrinien suspecté.",
    "occurrence": "Dérivé industriel.",
    "applications": ["Détergents industriels"]
  },
  {
    "name": "Bisphénol AF",
    "formula": "C₁₅H₁₀F₆O₂",
    "composition": { "C": 15, "H": 10, "F": 6, "O": 2 },
    "molarMass": "336.23 g/mol",
    "category": "Phénol",
    "summary": "Alternative au BPA utilisée dans les plastiques fluorés.",
    "occurrence": "Synthétique.",
    "applications": ["Élastomères fluorés"]
  },
  {
    "name": "Graphene Oxide (Fragment)",
    "formula": "C₁₈H₆O₆",
    "composition": { "C": 18, "H": 6, "O": 6 },
    "molarMass": "318.23 g/mol",
    "category": "Nanomatériau",
    "summary": "Représentation simplifiée d'une feuille de graphène oxydée.",
    "occurrence": "Synthétique.",
    "applications": ["Électronique flexible", "Filtration d'eau"]
  },
  {
    "name": "Sémaglutide (Formule simplifiée)",
    "formula": "C₁₈₇H₂₉₁N₄₅O₅₉",
    "composition": { "C": 187, "H": 291, "N": 45, "O": 59 },
    "molarMass": "4113.58 g/mol",
    "category": "Antidiabétique / Peptide",
    "summary": "Agoniste du récepteur GLP-1, traitement majeur du diabète et de l'obésité.",
    "occurrence": "Synthétique (biotechnologie).",
    "applications": ["Médecine (Ozempic, Wegovy)"]
  },
  {
    "name": "Tirzépatide (Formule simplifiée)",
    "formula": "C₂₂₅H₃₄₈N₄₈O₆₈",
    "composition": { "C": 225, "H": 348, "N": 48, "O": 68 },
    "molarMass": "4813.45 g/mol",
    "category": "Antidiabétique",
    "summary": "Double agoniste GLP-1 et GIP, blockbuster pharmaceutique récent.",
    "occurrence": "Synthétique.",
    "applications": ["Diabète type 2", "Perte de poids"]
  },
  {
    "name": "Lecanemab (Chaîne légère modèle)",
    "formula": "C₁₀₈H₁₇₀N₃₀O₃₃S",
    "composition": { "C": 108, "H": 170, "N": 30, "O": 33, "S": 1 },
    "molarMass": "2456.78 g/mol",
    "category": "Anticorps Monoclonal",
    "summary": "Traitement révolutionnaire ciblant les plaques amyloïdes d'Alzheimer.",
    "occurrence": "Synthétique (CHO cells).",
    "applications": ["Neurologie"]
  },
  {
    "name": "Donanemab (Fragment)",
    "formula": "C₉₀H₁₄₀N₂₄O₂₈S",
    "composition": { "C": 90, "H": 140, "N": 24, "O": 28, "S": 1 },
    "molarMass": "2054.29 g/mol",
    "category": "Anticorps",
    "summary": "Autre anticorps monoclonal majeur pour la maladie d'Alzheimer.",
    "occurrence": "Synthétique.",
    "applications": ["Médecine gériatrique"]
  },
  {
    "name": "Réactif de Tebbe",
    "formula": "C₁₃H₁₈AlClTi",
    "composition": { "C": 13, "H": 18, "Al": 1, "Cl": 1, "Ti": 1 },
    "molarMass": "284.60 g/mol",
    "category": "Réactif organométallique",
    "summary": "Utilisé pour la méthylénation des carbonyles, même les esters.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique complexe"]
  },
  {
    "name": "Pentacarbonyle de Fer",
    "formula": "Fe(CO)₅",
    "composition": { "Fe": 1, "C": 5, "O": 5 },
    "molarMass": "195.90 g/mol",
    "category": "Métal Carbonyle",
    "summary": "Liquide jaune toxique, précurseur de nombreux complexes de fer.",
    "safetyWarning": "Hautement toxique, inflammable.",
    "occurrence": "Synthétique.",
    "applications": ["Fabrication de fer carbonyle", "Catalyse"]
  },
  {
    "name": "Tétracarbonyle de Nickel",
    "formula": "Ni(CO)₄",
    "composition": { "Ni": 1, "C": 4, "O": 4 },
    "molarMass": "170.73 g/mol",
    "category": "Métal Carbonyle",
    "summary": "Extrêmement toxique, utilisé dans le procédé Mond pour purifier le nickel.",
    "safetyWarning": "Létal par inhalation, carcinogène.",
    "occurrence": "Intermédiaire industriel.",
    "applications": ["Métallurgie du nickel"]
  },
  {
    "name": "Hexacarbonyle de Chrome",
    "formula": "Cr(CO)₆",
    "composition": { "Cr": 1, "C": 6, "O": 6 },
    "molarMass": "220.06 g/mol",
    "category": "Métal Carbonyle",
    "summary": "Solide blanc sublimable, source de chrome(0).",
    "occurrence": "Synthétique.",
    "applications": ["Dépôt de vapeur chimique (CVD)"]
  },
  {
    "name": "Hexacarbonyle de Molybdène",
    "formula": "Mo(CO)₆",
    "composition": { "Mo": 1, "C": 6, "O": 6 },
    "molarMass": "264.00 g/mol",
    "category": "Métal Carbonyle",
    "summary": "Précurseur de catalyseurs de molybdène.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "Hexacarbonyle de Tungstène",
    "formula": "W(CO)₆",
    "composition": { "W": 1, "C": 6, "O": 6 },
    "molarMass": "351.91 g/mol",
    "category": "Métal Carbonyle",
    "summary": "Composé stable utilisé pour le dopage des semi-conducteurs.",
    "occurrence": "Synthétique.",
    "applications": ["Micro-électronique"]
  },
  {
    "name": "Octacarbonyle de Dicobalt",
    "formula": "Co₂(CO)₈",
    "composition": { "Co": 2, "C": 8, "O": 8 },
    "molarMass": "341.95 g/mol",
    "category": "Métal Carbonyle",
    "summary": "Catalyseur d'hydroformylation pour la production d'aldéhydes.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie industrielle (OXO)"]
  },
  {
    "name": "Déca-dicarbonyle de Dimanganèse",
    "formula": "Mn₂(CO)₁₀",
    "composition": { "Mn": 2, "C": 10, "O": 10 },
    "molarMass": "389.98 g/mol",
    "category": "Métal Carbonyle",
    "summary": "Source de radicaux manganèse carbonyle.",
    "occurrence": "Synthétique.",
    "applications": ["Photochimie organométallique"]
  },
  {
    "name": "Éthylène Diamine Tétra-acétate de Gadolinium (Gd-EDTA)",
    "formula": "C₁₀H₁₂GdN₂O₈",
    "composition": { "C": 10, "H": 12, "Gd": 1, "N": 2, "O": 8 },
    "molarMass": "445.46 g/mol",
    "category": "Complexe de Chélation",
    "summary": "Agent de contraste pour l'IRM.",
    "occurrence": "Synthétique.",
    "applications": ["Radiologie"]
  },
  {
    "name": "Bis(triméthylsilyl)amidure de Lithium (LiHMDS)",
    "formula": "C₆H₁₈LiNSi₂",
    "composition": { "C": 6, "H": 18, "Li": 1, "N": 1, "Si": 2 },
    "molarMass": "167.33 g/mol",
    "category": "Base / Silicié",
    "summary": "Base non nucléophile forte pour la formation d'énolates.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse peptidique", "Pétrochimie"]
  },
  {
    "name": "Triphénylphosphine",
    "formula": "C₁₈H₁₅P",
    "composition": { "C": 18, "H": 15, "P": 1 },
    "molarMass": "262.29 g/mol",
    "category": "Ligand / Phosphine",
    "summary": "Ligand ubiquitaire en chimie de coordination et réactif de Wittig.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique", "Catalyse de Wilkinson"]
  },
  {
    "name": "Tri-tert-butylphosphine",
    "formula": "C₁₂H₂₇P",
    "composition": { "C": 12, "H": 27, "P": 1 },
    "molarMass": "202.32 g/mol",
    "category": "Ligand encombré",
    "summary": "Phosphine très basique et encombrée pour les couplages de Suzuki et Buchwald.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse au Palladium"]
  },
  {
    "name": "Tricyclohexylphosphine (PCy3)",
    "formula": "C₁₈H₃₃P",
    "composition": { "C": 18, "H": 33, "P": 1 },
    "molarMass": "280.43 g/mol",
    "category": "Ligand",
    "summary": "Utilisée dans les catalyseurs de Grubbs pour la métathèse.",
    "occurrence": "Synthétique.",
    "applications": ["Métathèse des oléfines"]
  },
  {
    "name": "BINAP",
    "formula": "C₄₄H₃₂P₂",
    "composition": { "C": 44, "H": 32, "P": 2 },
    "molarMass": "622.67 g/mol",
    "category": "Ligand Chiral",
    "summary": "Ligand diphosphine bidenté essentiel pour l'hydrogénation asymétrique.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de médicaments chiraux"]
  },
  {
    "name": "dppf",
    "formula": "C₃₄H₂₈FeP₂",
    "composition": { "C": 34, "H": 28, "Fe": 1, "P": 2 },
    "molarMass": "554.38 g/mol",
    "category": "Ligand Ferrocénique",
    "summary": "Diphosphine robuste avec une structure ferrocène pour couplages croisés.",
    "occurrence": "Synthétique.",
    "applications": ["Couplage de Negishi", "Suzuki"]
  },
  {
    "name": "Bromure d'Allylmagnésium",
    "formula": "C₃H₅MgBr",
    "composition": { "C": 3, "H": 5, "Mg": 1, "Br": 1 },
    "molarMass": "145.28 g/mol",
    "category": "Réactif de Grignard",
    "summary": "Permet l'ajout d'une chaîne allylique sur des électrophiles.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie fine"]
  },
  {
    "name": "Chlorure d'Isopropylmagnésium",
    "formula": "C₃H₇MgCl",
    "composition": { "C": 3, "H": 7, "Mg": 1, "Cl": 1 },
    "molarMass": "102.85 g/mol",
    "category": "Réactif de Grignard",
    "summary": "Agent de transmétallation doux pour préparer d'autres Grignards.",
    "occurrence": "Synthétique.",
    "applications": ["Échange Magnésium-Halogène"]
  },
  {
    "name": "Chlorure de Vinylmagnésium",
    "formula": "C₂H₃MgCl",
    "composition": { "C": 2, "H": 3, "Mg": 1, "Cl": 1 },
    "molarMass": "86.80 g/mol",
    "category": "Réactif de Grignard",
    "summary": "Utilisé pour synthétiser des alcools vinyliques par addition sur carbonyles.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de monomères"]
  },
  {
    "name": "Bromure de Benzylmagnésium",
    "formula": "C₇H₇MgBr",
    "composition": { "C": 7, "H": 7, "Mg": 1, "Br": 1 },
    "molarMass": "195.34 g/mol",
    "category": "Réactif de Grignard",
    "summary": "Introduction de groupements benzyles.",
    "occurrence": "Synthétique.",
    "applications": ["Pharmacie"]
  },
  {
    "name": "Fluorure d'Aluminium",
    "formula": "AlF₃",
    "composition": { "Al": 1, "F": 3 },
    "molarMass": "83.98 g/mol",
    "category": "Halogénure Minéral",
    "summary": "Utilisé dans la production d'aluminium métallique.",
    "occurrence": "Naturel (rare), industriel.",
    "applications": ["Flux de fusion", "Céramiques"]
  },
  {
    "name": "Chlorure de Gallium(III)",
    "formula": "GaCl₃",
    "composition": { "Ga": 1, "Cl": 3 },
    "molarMass": "176.08 g/mol",
    "category": "Acide de Lewis",
    "summary": "Acide de Lewis puissant utilisé en synthèse organique.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse", "Électronique"]
  },
  {
    "name": "Oxyde de Gadolinium(III)",
    "formula": "Gd₂O₃",
    "composition": { "Gd": 2, "O": 3 },
    "molarMass": "362.50 g/mol",
    "category": "Oxyde de Terre Rare",
    "summary": "Utilisé dans les verres optiques et comme poison neutronique.",
    "occurrence": "Minerais de terres rares.",
    "applications": ["Nucléaire", "Luminophores"]
  },
  {
    "name": "Peroxyde de Baryum",
    "formula": "BaO₂",
    "composition": { "Ba": 1, "O": 2 },
    "molarMass": "169.33 g/mol",
    "category": "Peroxyde",
    "summary": "Agent oxydant utilisé en pyrotechnie pour la couleur verte.",
    "occurrence": "Synthétique.",
    "applications": ["Feux d'artifice", "Production de H2O2"]
  },
  {
    "name": "Nona-alcane (Nonane)",
    "formula": "C₉H₂₀",
    "composition": { "C": 9, "H": 20 },
    "molarMass": "128.26 g/mol",
    "category": "Alcane",
    "summary": "Hydrocarbure liquide présent dans le kérosène.",
    "occurrence": "Pétrole brut.",
    "applications": ["Carburant", "Solvant"]
  },
  {
    "name": "Déca-alcane (Décane)",
    "formula": "C₁₀H₂₂",
    "composition": { "C": 10, "H": 22 },
    "molarMass": "142.28 g/mol",
    "category": "Alcane",
    "summary": "Constituant du diesel et du fioul domestique.",
    "occurrence": "Pétrole.",
    "applications": ["Standard de chromatographie"]
  },
  {
    "name": "Undéca-alcane (Undécane)",
    "formula": "C₁₁H₂₄",
    "composition": { "C": 11, "H": 24 },
    "molarMass": "156.31 g/mol",
    "category": "Alcane",
    "summary": "Utilisé comme solvant et dans les formulations de paraffine.",
    "occurrence": "Pétrole.",
    "applications": ["Pheromones d'insectes (précurseur)"]
  },
  {
    "name": "Dodéca-alcane (Dodécane)",
    "formula": "C₁₂H₂₆",
    "composition": { "C": 12, "H": 26 },
    "molarMass": "170.33 g/mol",
    "category": "Alcane",
    "summary": "Composant majeur du kérosène aviation (Jet A-1).",
    "occurrence": "Pétrole brut.",
    "applications": ["Carburéacteurs"]
  },
  {
    "name": "Tridéca-alcane (Tridécane)",
    "formula": "C₁₃H₂₈",
    "composition": { "C": 13, "H": 28 },
    "molarMass": "184.36 g/mol",
    "category": "Alcane",
    "summary": "Utilisé dans l'industrie des lubrifiants.",
    "occurrence": "Paraffines de pétrole.",
    "applications": ["Fluide de coupe"]
  },
  {
    "name": "Tétradéca-alcane (Tétradécane)",
    "formula": "C₁₄H₃₀",
    "composition": { "C": 14, "H": 30 },
    "molarMass": "198.39 g/mol",
    "category": "Alcane",
    "summary": "Solvant industriel et composant des huiles minérales.",
    "occurrence": "Huiles de schiste.",
    "applications": ["Extraction de solvants"]
  },
  {
    "name": "Pentadéca-alcane (Pentadécane)",
    "formula": "C₁₅H₃₂",
    "composition": { "C": 15, "H": 32 },
    "molarMass": "212.41 g/mol",
    "category": "Alcane",
    "summary": "Utilisé dans la recherche sur les changements de phase.",
    "occurrence": "Pétrole.",
    "applications": ["Stockage d'énergie thermique"]
  },
  {
    "name": "Hexadéca-alcane (Cétane)",
    "formula": "C₁₆H₃₄",
    "composition": { "C": 16, "H": 34 },
    "molarMass": "226.44 g/mol",
    "category": "Alcane",
    "summary": "Référence pour mesurer la qualité de l'auto-inflammation du diesel (Indice de cétane).",
    "occurrence": "Diesel fossile.",
    "applications": ["Standardisation des carburants"]
  },
  {
    "name": "Heptadéca-alcane (Heptadécane)",
    "formula": "C₁₇H₃₆",
    "composition": { "C": 17, "H": 36 },
    "molarMass": "240.47 g/mol",
    "category": "Alcane",
    "summary": "Alcane solide à température basse, présent dans certaines cires.",
    "occurrence": "Végétaux, pétrole.",
    "applications": ["Études thermodynamiques"]
  },
  {
    "name": "Octadéca-alcane (Octadécane)",
    "formula": "C₁₈H₃₈",
    "composition": { "C": 18, "H": 38 },
    "molarMass": "254.49 g/mol",
    "category": "Alcane",
    "summary": "Composant des bougies et des cires de paraffine.",
    "occurrence": "Cires minérales.",
    "applications": ["Lubrification solide"]
  },
  {
    "name": "Nonadéca-alcane (Nonadécane)",
    "formula": "C₁₉H₄₀",
    "composition": { "C": 19, "H": 40 },
    "molarMass": "268.52 g/mol",
    "category": "Alcane",
    "summary": "Principal constituant des huiles lourdes.",
    "occurrence": "Pétrole lourd.",
    "applications": ["Bitumes"]
  },
  {
    "name": "Eicosane",
    "formula": "C₂₀H₄₂",
    "composition": { "C": 20, "H": 42 },
    "molarMass": "282.55 g/mol",
    "category": "Alcane supérieur",
    "summary": "Alcane à 20 carbones, solide cireux à température ambiante.",
    "occurrence": "Paraffines.",
    "applications": ["Cires protectrices"]
  },
  {
    "name": "Xantphos",
    "formula": "C₃₉H₃₂OP₂",
    "composition": { "C": 39, "H": 32, "O": 1, "P": 2 },
    "molarMass": "578.62 g/mol",
    "category": "Ligand bidenté",
    "summary": "Ligand avec un grand angle de morsure, utilisé en hydroformylation.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse industrielle"]
  },
  {
    "name": "SPhos",
    "formula": "C₂₆H₃₅O₂P",
    "composition": { "C": 26, "H": 35, "O": 2, "P": 1 },
    "molarMass": "410.53 g/mol",
    "category": "Ligand de Buchwald",
    "summary": "Ligand de pointe pour les couplages de Suzuki d'aryles encombrés.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de molécules complexes"]
  },
  {
    "name": "XPhos",
    "formula": "C₃₃H₄₉P",
    "composition": { "C": 33, "H": 49, "P": 1 },
    "molarMass": "476.72 g/mol",
    "category": "Ligand de Buchwald",
    "summary": "Ligand extrêmement efficace pour l'amination de Buchwald-Hartwig.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie pharmaceutique"]
  },
  {
    "name": "BrettPhos",
    "formula": "C₃₅H₅₃O₂P",
    "composition": { "C": 35, "H": 53, "O": 2, "P": 1 },
    "molarMass": "536.77 g/mol",
    "category": "Ligand encombré",
    "summary": "Optimisé pour le couplage d'amines primaires avec des chlorures d'aryle.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche en synthèse organique"]
  },
  {
    "name": "RuPhos",
    "formula": "C₃₀H₄₃O₂P",
    "composition": { "C": 30, "H": 43, "O": 2, "P": 1 },
    "molarMass": "466.64 g/mol",
    "category": "Ligand de Buchwald",
    "summary": "Ligand performant pour les réactions de couplage carbone-azote.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse asymétrique"]
  },
  {
    "name": "Acide 1-Adamantane carboxylique",
    "formula": "C₁₁H₁₆O₂",
    "composition": { "C": 11, "H": 16, "O": 2 },
    "molarMass": "180.24 g/mol",
    "category": "Acide Carboxylique / Adamantane",
    "summary": "Dérivé de l'adamantane utilisé pour augmenter la lipophilie des drogues.",
    "occurrence": "Synthétique.",
    "applications": ["Modification de médicaments"]
  },
  {
    "name": "Hénicosane",
    "formula": "C₂₁H₄₄",
    "composition": { "C": 21, "H": 44 },
    "molarMass": "296.57 g/mol",
    "category": "Alcane",
    "summary": "Alcane supérieur présent dans les cires végétales.",
    "occurrence": "Pétrole, cires naturelles.",
    "applications": ["Formulations cosmétiques"]
  },
  {
    "name": "Docosane",
    "formula": "C₂₂H₄₆",
    "composition": { "C": 22, "H": 46 },
    "molarMass": "310.60 g/mol",
    "category": "Alcane",
    "summary": "Utilisé comme lubrifiant haute température.",
    "occurrence": "Cires.",
    "applications": ["Industrie textile"]
  },
  {
    "name": "Tricosane",
    "formula": "C₂₃H₄₈",
    "composition": { "C": 23, "H": 48 },
    "molarMass": "324.63 g/mol",
    "category": "Alcane",
    "summary": "Présent dans les phéromones de certains insectes.",
    "occurrence": "Cuticules d'insectes.",
    "applications": ["Recherche biologique"]
  },
  {
    "name": "Tétracosane",
    "formula": "C₂₄H₅₀",
    "composition": { "C": 24, "H": 50 },
    "molarMass": "338.65 g/mol",
    "category": "Alcane",
    "summary": "Composant des huiles de graissage lourdes.",
    "occurrence": "Pétrole.",
    "applications": ["Lubrifiants"]
  },
  {
    "name": "Pentacosane",
    "formula": "C₂₅H₅₂",
    "composition": { "C": 25, "H": 52 },
    "molarMass": "352.68 g/mol",
    "category": "Alcane",
    "summary": "Hydrocarbure de haute masse moléculaire.",
    "occurrence": "Paraffines solides.",
    "applications": ["Protection anticorrosion"]
  },
  {
    "name": "Hexacosane",
    "formula": "C₂₆H₅₄",
    "composition": { "C": 26, "H": 54 },
    "molarMass": "366.71 g/mol",
    "category": "Alcane",
    "summary": "Cire utilisée pour l'isolation thermique.",
    "occurrence": "Combustibles fossiles.",
    "applications": ["Matériaux de changement de phase"]
  },
  {
    "name": "Heptacosane",
    "formula": "C₂₇H₅₆",
    "composition": { "C": 27, "H": 56 },
    "molarMass": "380.73 g/mol",
    "category": "Alcane",
    "summary": "Présent dans les cires de feuilles de plantes.",
    "occurrence": "Botanique.",
    "applications": ["Traceur écologique"]
  },
  {
    "name": "Octacosane",
    "formula": "C₂₈H₅₈",
    "composition": { "C": 28, "H": 58 },
    "molarMass": "394.76 g/mol",
    "category": "Alcane",
    "summary": "Utilisé pour la fabrication de polymères de spécialité.",
    "occurrence": "Pétrole.",
    "applications": ["Plastifiants"]
  },
  {
    "name": "Nonacosane",
    "formula": "C₂₉H₆₀",
    "composition": { "C": 29, "H": 60 },
    "molarMass": "408.79 g/mol",
    "category": "Alcane",
    "summary": "Principal constituant de la cire de pomme.",
    "occurrence": "Peau des fruits.",
    "applications": ["Industrie alimentaire (Cire d'enrobage)"]
  },
  {
    "name": "Triacontane",
    "formula": "C₃₀H₆₂",
    "composition": { "C": 30, "H": 62 },
    "molarMass": "422.81 g/mol",
    "category": "Alcane supérieur",
    "summary": "Alcane lourd solide, présent dans la cire d'abeille.",
    "occurrence": "Naturel.",
    "applications": ["Cosmétique", "Bougies"]
  },
  {
    "name": "Hentriacontane",
    "formula": "C₃₁H₆₄",
    "composition": { "C": 31, "H": 64 },
    "molarMass": "436.84 g/mol",
    "category": "Alcane",
    "summary": "Utilisé comme retardateur de flamme dans certains polymères.",
    "occurrence": "Cires minérales.",
    "applications": ["Additif technique"]
  },
  {
    "name": "Dotriacontane",
    "formula": "C₃₂H₆₆",
    "composition": { "C": 32, "H": 66 },
    "molarMass": "450.87 g/mol",
    "category": "Alcane",
    "summary": "Point de fusion élevé, utilisé pour les applications à friction forte.",
    "occurrence": "Goudron de houille.",
    "applications": ["Polissage industriel"]
  },
  {
    "name": "Tritriacontane",
    "formula": "C₃₃H₆₈",
    "composition": { "C": 33, "H": 68 },
    "molarMass": "464.89 g/mol",
    "category": "Alcane",
    "summary": "Hydrocarbure saturé très lourd.",
    "occurrence": "Huiles lubrifiantes usagées.",
    "applications": ["Traitement des surfaces"]
  },
  {
    "name": "Tétratriacontane",
    "formula": "C₃₄H₇₀",
    "composition": { "C": 34, "H": 70 },
    "molarMass": "478.92 g/mol",
    "category": "Alcane",
    "summary": "Utilisé en pharmacologie comme agent de consistance.",
    "occurrence": "Synthétique.",
    "applications": ["Pommades"]
  },
  {
    "name": "Pentatriacontane",
    "formula": "C₃₅H₇₂",
    "composition": { "C": 35, "H": 72 },
    "molarMass": "492.95 g/mol",
    "category": "Alcane",
    "summary": "Solide blanc cryptocristallin.",
    "occurrence": "Paraffines de haute pureté.",
    "applications": ["Micro-électronique (nettoyage)"]
  },
  {
    "name": "Hexatriacontane",
    "formula": "C₃₆H₇₄",
    "composition": { "C": 36, "H": 74 },
    "molarMass": "506.97 g/mol",
    "category": "Alcane",
    "summary": "Utilisé pour calibrer les appareils de mesure thermique.",
    "occurrence": "Synthétique.",
    "applications": ["Standard de point de fusion"]
  },
  {
    "name": "Hexa-méthyl-disilazane (HMDS)",
    "formula": "C₆H₁₉NSi₂",
    "composition": { "C": 6, "H": 19, "N": 1, "Si": 2 },
    "molarMass": "161.39 g/mol",
    "category": "Silazane",
    "summary": "Utilisé pour transformer les alcools en éthers silylés plus volatils.",
    "occurrence": "Synthétique.",
    "applications": ["Chromatographie en phase gazeuse"]
  },
  {
    "name": "Tétraméthylsilane (TMS)",
    "formula": "C₄H₁₂Si",
    "composition": { "C": 4, "H": 12, "Si": 1 },
    "molarMass": "88.22 g/mol",
    "category": "Organosilicié",
    "summary": "Standard de référence interne en spectroscopie RMN (0 ppm).",
    "occurrence": "Synthétique.",
    "applications": ["Spectroscopie RMN"]
  },
  {
    "name": "Hexaméthyldisiloxane (HMDSO)",
    "formula": "C₆H₁₈OSi₂",
    "composition": { "C": 6, "H": 18, "O": 1, "Si": 2 },
    "molarMass": "162.38 g/mol",
    "category": "Siloxane",
    "summary": "Source de silicium pour les dépôts plasma de couches minces.",
    "occurrence": "Synthétique.",
    "applications": ["Revêtements hydrophobes"]
  },
  {
    "name": "Adénosine Triphosphate (ATP)",
    "formula": "C₁₀H₁₆N₅O₁₃P₃",
    "composition": { "C": 10, "H": 16, "N": 5, "O": 13, "P": 3 },
    "molarMass": "507.18 g/mol",
    "category": "Nucléotide Triphosphate",
    "summary": "La 'monnaie énergétique' de la cellule.",
    "occurrence": "Toutes les formes de vie.",
    "applications": ["Métabolisme énergétique"]
  },
  {
    "name": "Guanosine Triphosphate (GTP)",
    "formula": "C₁₀H₁₆N₅O₁₄P₃",
    "composition": { "C": 10, "H": 16, "N": 5, "O": 14, "P": 3 },
    "molarMass": "523.18 g/mol",
    "category": "Nucléotide Triphosphate",
    "summary": "Source d'énergie pour la synthèse protéique et la signalisation par protéines G.",
    "occurrence": "Cellules vivantes.",
    "applications": ["Traduction génétique"]
  },
  {
    "name": "Cytidine Triphosphate (CTP)",
    "formula": "C₉H₁₆N₃O₁₄P₃",
    "composition": { "C": 9, "H": 16, "N": 3, "O": 14, "P": 3 },
    "molarMass": "483.16 g/mol",
    "category": "Nucléotide Triphosphate",
    "summary": "Source d'énergie pour la biosynthèse des phospholipides.",
    "occurrence": "Organismes vivants.",
    "applications": ["Synthèse membranaire"]
  },
  {
    "name": "Uridine Triphosphate (UTP)",
    "formula": "C₉H₁₅N₂O₁₅P₃",
    "composition": { "C": 9, "H": 15, "N": 2, "O": 15, "P": 3 },
    "molarMass": "484.14 g/mol",
    "category": "Nucléotide Triphosphate",
    "summary": "Impliqué dans le métabolisme du galactose et la synthèse du glycogène.",
    "occurrence": "Cellules.",
    "applications": ["Métabolisme des glucides"]
  },
  {
    "name": "Désoxyadénosine Triphosphate (dATP)",
    "formula": "C₁₀H₁₆N₅O₁₂P₃",
    "composition": { "C": 10, "H": 16, "N": 5, "O": 12, "P": 3 },
    "molarMass": "491.18 g/mol",
    "category": "Désoxynucléotide",
    "summary": "Précurseur direct pour la réplication de l'ADN.",
    "occurrence": "Noyau cellulaire.",
    "applications": ["Réplication de l'ADN", "PCR"]
  },
  {
    "name": "Désoxyguanosine Triphosphate (dGTP)",
    "formula": "C₁₀H₁₆N₅O₁₃P₃",
    "composition": { "C": 10, "H": 16, "N": 5, "O": 13, "P": 3 },
    "molarMass": "507.18 g/mol",
    "category": "Désoxynucléotide",
    "summary": "Composant essentiel pour la synthèse enzymatique d'ADN.",
    "occurrence": "Cellules vivantes.",
    "applications": ["Biotechnologie"]
  },
  {
    "name": "Désoxycytidine Triphosphate (dCTP)",
    "formula": "C₉H₁₆N₃O₁₃P₃",
    "composition": { "C": 9, "H": 16, "N": 3, "O": 13, "P": 3 },
    "molarMass": "467.16 g/mol",
    "category": "Désoxynucléotide",
    "summary": "Utilisé lors de la division cellulaire pour copier le code génétique.",
    "occurrence": "Libre dans le cytoplasme durant la phase S.",
    "applications": ["Génétique moléculaire"]
  },
  {
    "name": "Désoxythymidine Triphosphate (dTTP)",
    "formula": "C₁₀H₁₇N₂O₁₄P₃",
    "composition": { "C": 10, "H": 17, "N": 2, "O": 14, "P": 3 },
    "molarMass": "482.17 g/mol",
    "category": "Désoxynucléotide",
    "summary": "Apporte la base Thymine lors de la polymérisation de l'ADN.",
    "occurrence": "Cellules eucaryotes.",
    "applications": ["Séquençage de l'ADN"]
  },
  {
    "name": "Acide Phénylboronique",
    "formula": "C₆H₇BO₂",
    "composition": { "C": 6, "H": 7, "B": 1, "O": 2 },
    "molarMass": "121.93 g/mol",
    "category": "Acide Boronique",
    "summary": "Réactif fondamental pour le couplage de Suzuki.",
    "occurrence": "Synthétique.",
    "applications": ["Couplage croisé", "Détecteurs de glucose"]
  },
  {
    "name": "Acide p-Tolylboronique",
    "formula": "C₇H₉BO₂",
    "composition": { "C": 7, "H": 9, "B": 1, "O": 2 },
    "molarMass": "135.96 g/mol",
    "category": "Acide Boronique",
    "summary": "Dérivé méthylé de l'acide phénylboronique.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "Acide 4-Fluorophénylboronique",
    "formula": "C₆H₆BFO₂",
    "composition": { "C": 6, "H": 6, "B": 1, "F": 1, "O": 2 },
    "molarMass": "139.92 g/mol",
    "category": "Acide Boronique Fluoré",
    "summary": "Utilisé pour introduire des groupements fluorophényles stables.",
    "occurrence": "Synthétique.",
    "applications": ["Conception de médicaments"]
  },
  {
    "name": "Acide 2-Thiénylboronique",
    "formula": "C₄H₅BO₂S",
    "composition": { "C": 4, "H": 5, "B": 1, "O": 2, "S": 1 },
    "molarMass": "127.96 g/mol",
    "category": "Acide Boronique Hétérocyclique",
    "summary": "Réactif pour synthétiser des polymères conducteurs (Polythiophènes).",
    "occurrence": "Synthétique.",
    "applications": ["Électronique organique"]
  },
  {
    "name": "Pinacolborane",
    "formula": "C₆H₁₃BO₂",
    "composition": { "C": 6, "H": 13, "B": 1, "O": 2 },
    "molarMass": "127.98 g/mol",
    "category": "Borane / Réactif",
    "summary": "Source de bore pour l'hydroboration des alcènes.",
    "occurrence": "Synthétique.",
    "applications": ["Borylation de Miyaura"]
  },
  {
    "name": "Acide Boronique de l'Indole-5",
    "formula": "C₈H₈BNO₂",
    "composition": { "C": 8, "H": 8, "B": 1, "N": 1, "O": 2 },
    "molarMass": "160.97 g/mol",
    "category": "Acide Boronique",
    "summary": "Utilisé pour la synthèse d'alcaloïdes de l'indole.",
    "occurrence": "Synthétique.",
    "applications": ["Pharmacochimie"]
  },
  {
    "name": "Tétratriacontane (n-C34)",
    "formula": "C₃₄H₇₀",
    "composition": { "C": 34, "H": 70 },
    "molarMass": "478.92 g/mol",
    "category": "Paraffine",
    "summary": "Constituant des cires de pétrole de haute technologie.",
    "occurrence": "Pétrole.",
    "applications": ["Lubrifiants haute performance"]
  },
  {
    "name": "Tétra-acontane (n-C40)",
    "formula": "C₄₀H₈₂",
    "composition": { "C": 40, "H": 82 },
    "molarMass": "563.08 g/mol",
    "category": "Paraffine lourde",
    "summary": "Composant des bitumes et résidus de distillation sous vide.",
    "occurrence": "Pétrole lourd.",
    "applications": ["Imperméabilisation", "Asphalte"]
  },
  {
    "name": "Penta-acontane (n-C50)",
    "formula": "C₅₀H₁₀₂",
    "composition": { "C": 50, "H": 102 },
    "molarMass": "703.34 g/mol",
    "category": "Alcane lourd",
    "summary": "Solide très cristallin utilisé comme additif thermique.",
    "occurrence": "Goudrons.",
    "applications": ["Stabilisation des polymères"]
  },
  {
    "name": "Hexa-acontane (n-C60)",
    "formula": "C₆₀H₁₂₂",
    "composition": { "C": 60, "H": 122 },
    "molarMass": "843.61 g/mol",
    "category": "Macro-paraffine",
    "summary": "Molécule géante saturée présente dans les pétroles extra-lourds.",
    "occurrence": "Résidus pétroliers.",
    "applications": ["Études sur la viscosité"]
  },
  {
    "name": "Hepta-acontane (n-C70)",
    "formula": "C₇₀H₁₄₂",
    "composition": { "C": 70, "H": 142 },
    "molarMass": "983.87 g/mol",
    "category": "Macro-paraffine",
    "summary": "Représente la limite des alcanes identifiables individuellement en géocéanographie.",
    "occurrence": "Sédiments marins antiques.",
    "applications": ["Bio-indicateur paléoclimatique"]
  },
  {
    "name": "Octa-acontane (n-C80)",
    "formula": "C₈₀H₁₆₂",
    "composition": { "C": 80, "H": 162 },
    "molarMass": "1124.13 g/mol",
    "category": "Alcane géant",
    "summary": "Molécule à très longue chaîne carbonée saturée.",
    "occurrence": "Synthétique (Polymérisation contrôlée).",
    "applications": ["Standard pour GPC haute température"]
  },
  {
    "name": "Nona-acontane (n-C90)",
    "formula": "C₉₀H₁₈₂",
    "composition": { "C": 90, "H": 182 },
    "molarMass": "1264.40 g/mol",
    "category": "Alcane géant",
    "summary": "Hydrocarbure de masse moléculaire élevée.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche sur les polymères"]
  },
  {
    "name": "Hectane (n-C100)",
    "formula": "C₁₀₀H₂₀₂",
    "composition": { "C": 100, "H": 202 },
    "molarMass": "1404.66 g/mol",
    "category": "Alcane géant",
    "summary": "Alcane à 100 carbones, modèle pour les cristaux de polyéthylène.",
    "occurrence": "Synthétique.",
    "applications": ["Physique des solides"]
  },
  {
    "name": "Chlorure d'Héxyllithium",
    "formula": "C₆H₁₃Li",
    "composition": { "C": 6, "H": 13, "Li": 1 },
    "molarMass": "92.11 g/mol",
    "category": "Organolithien",
    "summary": "Utilisé pour la lithiation dans des solvants non polaires.",
    "occurrence": "Synthétique.",
    "applications": ["Polymérisation du butadiène"]
  },
  {
    "name": "Chlorure de Triméthylstannyle",
    "formula": "C₃H₉ClSn",
    "composition": { "C": 3, "H": 9, "Cl": 1, "Sn": 1 },
    "molarMass": "199.27 g/mol",
    "category": "Organostannique",
    "summary": "Réactif pour préparer des composés de couplage de Stille.",
    "safetyWarning": "Extrêmement toxique (neurotoxique).",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "Tétraméthylétain",
    "formula": "C₄H₁₂Sn",
    "composition": { "C": 4, "H": 12, "Sn": 1 },
    "molarMass": "178.85 g/mol",
    "category": "Organostannique",
    "summary": "Composé d'étain volatil utilisé pour le dépôt chimique de SnO2.",
    "occurrence": "Synthétique.",
    "applications": ["Semi-conducteurs"]
  },
  {
    "name": "Diéthylzinc",
    "formula": "C₄H₁₀Zn",
    "composition": { "C": 4, "H": 10, "Zn": 1 },
    "molarMass": "123.51 g/mol",
    "category": "Organozincique",
    "summary": "Agent d'éthylation très réactif et pyrophorique.",
    "safetyWarning": "S'enflamme spontanément à l'air, réagit violemment avec l'eau.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse d'addition asymétrique"]
  },
  {
    "name": "Diméthylzinc",
    "formula": "C₂H₆Zn",
    "composition": { "C": 2, "H": 6, "Zn": 1 },
    "molarMass": "95.45 g/mol",
    "category": "Organozincique",
    "summary": "Source de radicaux méthyles et précurseur pour le dépôt de ZnO.",
    "occurrence": "Synthétique.",
    "applications": ["Électronique (MOCVD)"]
  },
  {
    "name": "Dinitrate d'Isosorbide",
    "formula": "C₆H₈N₂O₈",
    "composition": { "C": 6, "H": 8, "N": 2, "O": 8 },
    "molarMass": "236.14 g/mol",
    "category": "Vasodilatateur",
    "summary": "Utilisé pour traiter l'insuffisance cardiaque et l'angine de poitrine.",
    "occurrence": "Synthétique.",
    "applications": ["Cardiologie"]
  },
  {
    "name": "Josiphos (Ligand)",
    "formula": "C₃₆H₄₄FeP₂",
    "composition": { "C": 36, "H": 44, "Fe": 1, "P": 2 },
    "molarMass": "594.53 g/mol",
    "category": "Ligand Chiral",
    "summary": "Ligand de Solvias utilisé pour l'hydrogénation asymétrique à d'échelle industrielle.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse du (S)-Métolachlore"]
  },
  {
    "name": "DuPhos",
    "formula": "C₁₈H₂₈P₂",
    "composition": { "C": 18, "H": 28, "P": 2 },
    "molarMass": "306.36 g/mol",
    "category": "Ligand",
    "summary": "Ligand phospholane très efficace pour la réduction d'énamides.",
    "occurrence": "Synthétique.",
    "applications": ["Pharmacie asymétrique"]
  },
  {
    "name": "Dodécacarbonyle de Triosmium",
    "formula": "Os₃(CO)₁₂",
    "composition": { "Os": 3, "C": 12, "O": 12 },
    "molarMass": "906.72 g/mol",
    "category": "Cluster Métallique",
    "summary": "Précurseur pour l'étude des clusters d'osmium.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche en chimie des clusters"]
  },
  {
    "name": "Tétrakis(triphénylphosphine)palladium(0)",
    "formula": "C₇₂H₆₀P₄Pd",
    "composition": { "C": 72, "H": 60, "P": 4, "Pd": 1 },
    "molarMass": "1155.56 g/mol",
    "category": "Catalyseur de Palladium",
    "summary": "Le catalyseur standard pour les réactions de couplage Stille, Suzuki et Heck.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique totale"]
  },
  {
    "name": "Acétate de Palladium(II)",
    "formula": "Pd(CH₃COO)₂",
    "composition": { "Pd": 1, "C": 4, "H": 6, "O": 4 },
    "molarMass": "224.51 g/mol",
    "category": "Sel de Palladium",
    "summary": "Précurseur de catalyseurs de palladium très versatiles.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse industrielle"]
  },
  {
    "name": "Chlorure de Tris(triphénylphosphine)rhodium(I) (Wilkinson)",
    "formula": "C₅₄H₄₅ClP₃Rh",
    "composition": { "C": 54, "H": 45, "Cl": 1, "P": 3, "Rh": 1 },
    "molarMass": "925.21 g/mol",
    "category": "Catalyseur",
    "summary": "Connu sous le nom de catalyseur de Wilkinson pour l'hydrogénation homogène.",
    "occurrence": "Synthétique.",
    "applications": ["Hydrogénation des alcènes"]
  },
  {
    "name": "Nitrate de Thallium(I)",
    "formula": "TlNO₃",
    "composition": { "Tl": 1, "N": 1, "O": 3 },
    "molarMass": "266.39 g/mol",
    "category": "Sel de Métal Lourd",
    "summary": "Extrêmement toxique, utilisé en analyse de laboratoire.",
    "safetyWarning": "Létal, poison cumulatif.",
    "occurrence": "Synthétique.",
    "applications": ["Fluorescence (traceur)"]
  },
  {
    "name": "Iodure de Méthylmercure",
    "formula": "CH₃HgI",
    "composition": { "C": 1, "H": 3, "Hg": 1, "I": 1 },
    "molarMass": "342.53 g/mol",
    "category": "Organomercuriel",
    "summary": "Composé du mercure hautement neurotoxique.",
    "occurrence": "Accumulation biologique (forme similaire).",
    "applications": ["Toxicologie (référence)"]
  },
  {
    "name": "Cashmeran",
    "formula": "C₁₂H₂₀O",
    "composition": { "C": 12, "H": 20, "O": 1 },
    "molarMass": "180.29 g/mol",
    "category": "Fragrance Musk",
    "summary": "Note 'bois de cachemire' chaude et duveteuse.",
    "occurrence": "Synthétique.",
    "applications": ["Parfumerie (Note de cœur)"]
  },
  {
    "name": "Ethyl Vanilline",
    "formula": "C₉H₁₀O₃",
    "composition": { "C": 9, "H": 10, "O": 3 },
    "molarMass": "166.17 g/mol",
    "category": "Aromatic Aldehyde",
    "summary": "Version plus intense que la vanilline naturelle.",
    "occurrence": "Synthétique.",
    "applications": ["Arôme alimentaire", "Parfumerie"]
  },
  {
    "name": "Galaxolide",
    "formula": "C₁₈H₂₆O",
    "composition": { "C": 18, "H": 26, "O": 1 },
    "molarMass": "258.40 g/mol",
    "category": "Musc Synthétique",
    "summary": "Le musc polycyclique le plus utilisé au monde pour son odeur de propre.",
    "occurrence": "Synthétique.",
    "applications": ["Produits d'entretien", "Lessives"]
  },
  {
    "name": "Nérolidiol",
    "formula": "C₁₅H₂₆O",
    "composition": { "C": 15, "H": 26, "O": 1 },
    "molarMass": "222.37 g/mol",
    "category": "Terpène",
    "summary": "Arôme floral boisé présent dans le jasmin et le néroli.",
    "occurrence": "Néroli, Gingembre.",
    "applications": ["Agent de saveur", "Parfums"]
  },
  {
    "name": "Santalol (Alpha)",
    "formula": "C₁₅H₂₄O",
    "composition": { "C": 15, "H": 24, "O": 1 },
    "molarMass": "220.35 g/mol",
    "category": "Terpène Alcool",
    "summary": "Principal constituant de l'huile de bois de santal.",
    "occurrence": "Bois de santal.",
    "applications": ["Aromathérapie", "Parfumerie fine"]
  },
  {
    "name": "Eugenol Méthyle",
    "formula": "C₁₁H₁₄O₂",
    "composition": { "C": 11, "H": 14, "O": 2 },
    "molarMass": "178.23 g/mol",
    "category": "Phénylpropanoïde",
    "summary": "Composant d'huiles essentielles, utilisé comme attractif pour insectes.",
    "occurrence": "Basilic, Girofle.",
    "applications": ["Pesticides naturels"]
  },
  {
    "name": "S-Adénosyl méthionine (SAMe)",
    "formula": "C₁₅H₂₂N₆O₅S",
    "composition": { "C": 15, "H": 22, "N": 6, "O": 5, "S": 1 },
    "molarMass": "398.44 g/mol",
    "category": "Coenzyme",
    "summary": "Donneur de méthyle universel dans les organismes vivants.",
    "occurrence": "Toutes les cellules.",
    "applications": ["Supplément alimentaire", "Métabolisme"]
  },
  {
    "name": "L-Méthylfolate",
    "formula": "C₂₀H₂₃N₇O₆",
    "composition": { "C": 20, "H": 23, "N": 7, "O": 6 },
    "molarMass": "457.44 g/mol",
    "category": "Vitamine (B9 active)",
    "summary": "Forme active de l'acide folique capable de traverser la barrière hémato-encéphalique.",
    "occurrence": "Légumes verts (sous forme de folates).",
    "applications": ["Psychiatrie", "Suppléments prénataux"]
  },
  {
    "name": "Méthylcobalamine",
    "formula": "C₆₃H₉₁CoN₁₃O₁₄P",
    "composition": { "C": 63, "H": 91, "Co": 1, "N": 13, "O": 14, "P": 1 },
    "molarMass": "1344.40 g/mol",
    "category": "Vitamine (B12 active)",
    "summary": "L'une des deux formes actives de la vitamine B12 indispensables au système nerveux.",
    "occurrence": "Produits animaux.",
    "applications": ["Traitement de l'anémie pernicieuse"]
  },
  {
    "name": "Gusélkumab",
    "formula": "C₆₄₇₂H₁₀₀₂₈N₁₇₃₂O₂₀₁₆S₄₄",
    "composition": { "C": 6472, "H": 10028, "N": 1732, "O": 2016, "S": 44 },
    "molarMass": "145000 g/mol",
    "category": "Anticorps Monoclonal",
    "summary": "Inhibiteur de l'IL-23 utilisé pour le psoriasis en plaques.",
    "occurrence": "Synthétique.",
    "applications": ["Dermatologie"]
  },
  {
    "name": "Bimékizumab",
    "formula": "C₆₄₁₆H₉₉₁₂N₁₇₀₈O₂₀₁₂S₄₄",
    "composition": { "C": 6416, "H": 9912, "N": 1708, "O": 2012, "S": 44 },
    "molarMass": "143800 g/mol",
    "category": "Anticorps",
    "summary": "Anticorps monoclonal bloquant doublement IL-17A et IL-17F.",
    "occurrence": "Synthétique.",
    "applications": ["Rhumatologie"]
  },
  {
    "name": "Réactif de Vilsmeier-Haack",
    "formula": "C₃H₇Cl₂NO",
    "composition": { "C": 3, "H": 7, "Cl": 2, "N": 1, "O": 1 },
    "molarMass": "128.00 g/mol",
    "category": "Réactif de Formylation",
    "summary": "Généré in situ pour introduire des aldehydes sur des noyaux aromatiques activés.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de colorants"]
  },
  {
    "name": "N-Bromosuccinimide (NBS)",
    "formula": "C₄H₄BrNO₂",
    "composition": { "C": 4, "H": 4, "Br": 1, "N": 1, "O": 2 },
    "molarMass": "177.98 g/mol",
    "category": "Agent Bromant",
    "summary": "Source pratique de radicaux brome ou d'ions bromonium.",
    "occurrence": "Synthétique.",
    "applications": ["Bromation allylique"]
  },
  {
    "name": "N-Chlorosuccinimide (NCS)",
    "formula": "C₄H₄ClNO₂",
    "composition": { "C": 4, "H": 4, "Cl": 1, "N": 1, "O": 2 },
    "molarMass": "133.53 g/mol",
    "category": "Agent Chlorant",
    "summary": "Équivalent chloré du NBS, utilisé pour la chloration douce.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "Chlorure d'Isopropylmagnésium - Chlorure de Lithium (Turbo-Grignard)",
    "formula": "C₃H₇Cl₂LiMg",
    "composition": { "C": 3, "H": 7, "Cl": 2, "Li": 1, "Mg": 1 },
    "molarMass": "145.20 g/mol",
    "category": "Réactif de Grignard Activé",
    "summary": "Réactif de Knochel permettant des échanges magnésium-halogène rapides et à basse température.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse industrielle de médicaments"]
  },
  {
    "name": "Chlorure de 2,2,6,6-Tétraméthylpipéridinylmagnésium (Knochel-Hauser Base)",
    "formula": "C₉H₁₈ClMgN",
    "composition": { "C": 9, "H": 18, "Cl": 1, "Mg": 1, "N": 1 },
    "molarMass": "200.00 g/mol",
    "category": "Base de Magnésium",
    "summary": "Base de magnésium cinétique pour la déprotonation régiosélective d'aromatiques.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie fine"]
  },
  {
    "name": "Cryptand 222",
    "formula": "C₁₈H₃₆N₂O₆",
    "composition": { "C": 18, "H": 36, "N": 2, "O": 6 },
    "molarMass": "376.49 g/mol",
    "category": "Agent de Chélation Supramoléculaire",
    "summary": "Cage moléculaire capable de séquestrer spécifiquement le potassium.",
    "occurrence": "Synthétique.",
    "applications": ["Séparation ionique", "Synthèse de sels exotiques"]
  },
  {
    "name": "Cryptand 221",
    "formula": "C₁₆H₃₂N₂O₅",
    "composition": { "C": 16, "H": 32, "N": 2, "O": 5 },
    "molarMass": "332.44 g/mol",
    "category": "Macrocycle",
    "summary": "Optimisé pour la chélation sélective des ions sodium.",
    "occurrence": "Synthétique.",
    "applications": ["Électrochimie"]
  },
  {
    "name": "Cryptand 211",
    "formula": "C₁₄H₂₈N₂O₄",
    "composition": { "C": 14, "H": 28, "N": 2, "O": 4 },
    "molarMass": "288.38 g/mol",
    "category": "Macrocycle",
    "summary": "Sélectif pour le lithium grâce à sa cavité plus petite.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche sur les batteries"]
  },
  {
    "name": "Tétraphénylborate de Sodium (NaBPh4)",
    "formula": "C₂₄H₂₀BNa",
    "composition": { "C": 24, "H": 20, "B": 1, "Na": 1 },
    "molarMass": "342.22 g/mol",
    "category": "Sel de Bore",
    "summary": "Utilisé pour la précipitation spécifique des ions potassium, rubidium et césium.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie analytique"]
  },
  {
    "name": "Nitrate de Lanthane(III) Hexahydraté",
    "formula": "LaN₃O₉ · 6H₂O",
    "composition": { "La": 1, "N": 3, "O": 15, "H": 12 },
    "molarMass": "433.01 g/mol",
    "category": "Sel de Lanthanide",
    "summary": "Utilisé dans les verres optiques de haute qualité.",
    "occurrence": "Minerais (Monazite).",
    "applications": ["Lentilles d'appareils photo"]
  },
  {
    "name": "Acide 3,5-Bis(trifluorométhyl)phénylboronique",
    "formula": "C₈H₅BF₆O₂",
    "composition": { "C": 8, "H": 5, "B": 1, "F": 6, "O": 2 },
    "molarMass": "257.92 g/mol",
    "category": "Acide Boronique activé",
    "summary": "Source de groupements encombrés et électro-attracteurs pour les écrans OLED.",
    "occurrence": "Synthétique.",
    "applications": ["Matériaux high-tech"]
  },
  {
    "name": "Sylvamber",
    "formula": "C₁₆H₂₆O",
    "composition": { "C": 16, "H": 26, "O": 1 },
    "molarMass": "234.38 g/mol",
    "category": "Fragrance Ambrée",
    "summary": "Molécule prolongeant l'effet ambré boisé du santal.",
    "occurrence": "Synthétique.",
    "applications": ["Parfumerie (Note de fond)"]
  },
  {
    "name": "Ambermax",
    "formula": "C₁₈H₃₀O",
    "composition": { "C": 18, "H": 30, "O": 1 },
    "molarMass": "262.43 g/mol",
    "category": "Fragrance",
    "summary": "L'une des molécules ambrées les plus puissantes du marché.",
    "occurrence": "Synthétique.",
    "applications": ["Fragrances haut de gamme"]
  },
  {
    "name": "Timberol",
    "formula": "C₁₆H₃₀O",
    "composition": { "C": 16, "H": 30, "O": 1 },
    "molarMass": "238.41 g/mol",
    "category": "Fragrance Boisée",
    "summary": "Note boisée sèche et propre, très utilisée dans les savons.",
    "occurrence": "Synthétique.",
    "applications": ["Hygiène corporelle"]
  },
  {
    "name": "Éthylène Bis(stéaramide) (EBS)",
    "formula": "C₃₈H₇₆N₂O₂",
    "composition": { "C": 38, "H": 76, "N": 2, "O": 2 },
    "molarMass": "593.02 g/mol",
    "category": "Amide de spécialité",
    "summary": "Agent de démoulage interne pour les plastiques techniques.",
    "occurrence": "Synthétique.",
    "applications": ["Procédés d'extrusion"]
  },
  {
    "name": "Oxyde de Terbium(III,IV)",
    "formula": "Tb₄O₇",
    "composition": { "Tb": 4, "O": 7 },
    "molarMass": "747.72 g/mol",
    "category": "Oxyde de Lanthanide",
    "summary": "Utilisé pour la fluorescence verte dans les tubes cathodiques et écrans.",
    "occurrence": "Xénotime.",
    "applications": ["Imagerie laser", "Phosphores"]
  },
  {
    "name": "Complex de Vaska (Chlorocarbonylbis(triphenylphosphine)iridium(I))",
    "formula": "C₃₇H₃₀ClIrOP₂",
    "composition": { "C": 37, "H": 30, "Cl": 1, "Ir": 1, "O": 1, "P": 2 },
    "molarMass": "780.25 g/mol",
    "category": "Complexe Métallique",
    "summary": "Modèle d'étude pour l'addition oxydante de petites molécules.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche fondamentale en catalyse"]
  },
  {
    "name": "Bromure de Propylmagnésium",
    "formula": "C₃H₇MgBr",
    "composition": { "C": 3, "H": 7, "Mg": 1, "Br": 1 },
    "molarMass": "131.30 g/mol",
    "category": "Réactif de Grignard",
    "summary": "Utilisé pour introduire une chaîne propyl.",
    "occurrence": "Synthétique.",
    "applications": ["Pharmacie"]
  },
  {
    "name": "Bromure d'Octylmagnésium",
    "formula": "C₈H₁₇MgBr",
    "composition": { "C": 8, "H": 17, "Mg": 1, "Br": 1 },
    "molarMass": "201.43 g/mol",
    "category": "Réactif de Grignard",
    "summary": "Introduction de longues chaînes alkyles.",
    "occurrence": "Synthétique.",
    "applications": ["Surfactants de spécialité"]
  },
  {
    "name": "Chlorure de Tétracétyl-ammonium",
    "formula": "C₄H₁₂ClN",
    "composition": { "C": 4, "H": 12, "Cl": 1, "N": 1 },
    "molarMass": "109.60 g/mol",
    "category": "Sel d'Ammonium Quaternaire",
    "summary": "Catalyseur de transfert de phase simple.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique biphasique"]
  },
  {
    "name": "Héneicosane (n-C21)",
    "formula": "C₂₁H₄₄",
    "composition": { "C": 21, "H": 44 },
    "molarMass": "296.57 g/mol",
    "category": "Alcane",
    "summary": "Alcane solide présent dans la cire d'abeille.",
    "occurrence": "Produits naturels.",
    "applications": ["Cosmétique"]
  },
  {
    "name": "Acide 10-Undécénoïque",
    "formula": "C₁₁H₂₀O₂",
    "composition": { "C": 11, "H": 20, "O": 2 },
    "molarMass": "184.28 g/mol",
    "category": "Acide Gras Insaturé",
    "summary": "Utilisé comme agent antifongique topique.",
    "occurrence": "Huile de ricin (pyrolyse).",
    "applications": ["Dermatologie", "Précurseur de polymères"]
  },
  {
    "name": "Décanal",
    "formula": "C₁₀H₂₀O",
    "composition": { "C": 10, "H": 20, "O": 1 },
    "molarMass": "156.27 g/mol",
    "category": "Aldéhyde",
    "summary": "Odeur d'orange et de zeste puissante.",
    "occurrence": "Huile essentielle d'orange.",
    "applications": ["Arôme alimentaire", "Parfumerie"]
  },
  {
    "name": "Dodécanal",
    "formula": "C₁₂H₂₄O",
    "composition": { "C": 12, "H": 24, "O": 1 },
    "molarMass": "184.32 g/mol",
    "category": "Aldéhyde",
    "summary": "Note aldéhydique grasse, caractéristique du parfum Chanel No. 5.",
    "occurrence": "Coriandre.",
    "applications": ["Parfumerie classique"]
  },
  {
    "name": "2-Phényléthylamine",
    "formula": "C₈H₁₁N",
    "composition": { "C": 8, "H": 11, "N": 1 },
    "molarMass": "121.18 g/mol",
    "category": "Amine Biogène",
    "summary": "Neurotransmetteur naturel et alcaloïde traceur.",
    "occurrence": "Chocolat, certains fromages.",
    "applications": ["Recherche en neurologie"]
  },
  {
    "name": "Tyramine",
    "formula": "C₈H₁₁NO",
    "composition": { "C": 8, "H": 11, "N": 1, "O": 1 },
    "molarMass": "137.18 g/mol",
    "category": "Amine",
    "summary": "Dérivé de la tyrosine, peut causer des crises hypertensives s'il est consommé avec certains médicaments.",
    "occurrence": "Aliments fermentés (Vin rouge, Fromage vieilli).",
    "applications": ["Études nutritionnelles"]
  },
  {
    "name": "Acide Boronique du Benzofurane-2",
    "formula": "C₈H₇BO₃",
    "composition": { "C": 8, "H": 7, "B": 1, "O": 3 },
    "molarMass": "161.95 g/mol",
    "category": "Acide Boronique",
    "summary": "Utilisé pour synthétiser des molécules bioactives dérivées du benzofurane.",
    "occurrence": "Synthétique.",
    "applications": ["Découverte de médicaments"]
  },
  {
    "name": "Chlorure de Dysprosium(III)",
    "formula": "DyCl₃",
    "composition": { "Dy": 1, "Cl": 3 },
    "molarMass": "268.86 g/mol",
    "category": "Sel de Terre Rare",
    "summary": "Utilisé dans les lampes à halogénures métalliques pour sa lumière blanche intense.",
    "occurrence": "Xénotime.",
    "applications": ["Éclairage spécialisé"]
  },
  {
    "name": "Octakis(triméthylsilyl)cyclotétrasiloxane",
    "formula": "C₂₄H₇₂O₄Si₁₂",
    "composition": { "C": 24, "H": 72, "O": 4, "Si": 12 },
    "molarMass": "889.96 g/mol",
    "category": "Silicones",
    "summary": "Précurseur de polymères silicones à haute performance.",
    "occurrence": "Synthétique.",
    "applications": ["Lubrifiants de vide", "Cosmétiques"]
  },
  {
    "name": "Chlorure de Scandium(III)",
    "formula": "ScCl₃",
    "composition": { "Sc": 1, "Cl": 3 },
    "molarMass": "151.31 g/mol",
    "category": "Sel de Métal de Transition",
    "summary": "Utilisé dans les lampes à vapeur métallique pour simuler la lumière solaire.",
    "occurrence": "Thortveitite.",
    "applications": ["Éclairage de stade", "Films"]
  },
  {
    "name": "Oxyde d'Yttrium(III)",
    "formula": "Y₂O₃",
    "composition": { "Y": 2, "O": 3 },
    "molarMass": "225.81 g/mol",
    "category": "Oxyde",
    "summary": "Matériau de départ pour les supraconducteurs à haute température (YBCO).",
    "occurrence": "Gadolinite.",
    "applications": ["Électronique", "Céramiques de spécialité"]
  },
  {
    "name": "Acide 1-Naphtalèneboronique",
    "formula": "C₁₀H₉BO₂",
    "composition": { "C": 10, "H": 9, "B": 1, "O": 2 },
    "molarMass": "171.99 g/mol",
    "category": "Acide Boronique",
    "summary": "Utilisé pour la synthèse de semi-conducteurs organiques à base de naphtalène.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse d'OLED"]
  },
  {
    "name": "Chlorure de Tert-Butyldiméthylsilyle (TBDMSCl)",
    "formula": "C₆H₁₅ClSi",
    "composition": { "C": 6, "H": 15, "Cl": 1, "Si": 1 },
    "molarMass": "150.72 g/mol",
    "category": "Agent Protecteur",
    "summary": "Réactif standard pour protéger les alcools sous forme d'éthers silylés stables.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique multi-étapes"]
  },
  {
    "name": "Chlorure de Triisopropylsilyle (TIPSCl)",
    "formula": "C₉H₂₁ClSi",
    "composition": { "C": 9, "H": 21, "Cl": 1, "Si": 1 },
    "molarMass": "192.80 g/mol",
    "category": "Agent Protecteur",
    "summary": "Offre une protection encore plus robuste que le TBDMS pour les fonctions hydroxyles.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de produits naturels"]
  },
  {
    "name": "Bis(triméthylsilyl)acétylène",
    "formula": "C₈H₁₈Si₂",
    "composition": { "C": 8, "H": 18, "Si": 2 },
    "molarMass": "170.40 g/mol",
    "category": "Alcyne silylé",
    "summary": "Utilisé pour introduire des triples liaisons protégées par couplage de Sonogashira.",
    "occurrence": "Synthétique.",
    "applications": ["Éthynylation contrôlée"]
  },
  {
    "name": "Tétraméthylcyclotétrasiloxane",
    "formula": "C₄H₁₆O₄Si₄",
    "composition": { "C": 4, "H": 16, "O": 4, "Si": 4 },
    "molarMass": "240.51 g/mol",
    "category": "Siloxane Cyclique",
    "summary": "Monocristal liquide et précurseur pour des dépôts de silice de haute pureté.",
    "occurrence": "Synthétique.",
    "applications": ["Semi-conducteurs"]
  },
  {
    "name": "Perfluorodécaline",
    "formula": "C₁₀F₁₈",
    "composition": { "C": 10, "F": 18 },
    "molarMass": "462.08 g/mol",
    "category": "Fluorocarbure",
    "summary": "Capacité exceptionnelle à dissoudre l'oxygène, utilisée comme transporteur de gaz.",
    "occurrence": "Synthétique.",
    "applications": ["Sang artificiel (recherche)", "Ophtalmologie"]
  },
  {
    "name": "Perfluorohexane",
    "formula": "C₆F₁₄",
    "composition": { "C": 6, "F": 14 },
    "molarMass": "338.04 g/mol",
    "category": "Fluorocarbure",
    "summary": "Liquide inerte thermiquement stable utilisé pour le refroidissement électronique.",
    "occurrence": "Synthétique.",
    "applications": ["Refroidissement par immersion", "Électronique haute puissance"]
  },
  {
    "name": "Bisphénol Z",
    "formula": "C₁₈H₂₀O₂",
    "composition": { "C": 18, "H": 20, "O": 2 },
    "molarMass": "268.35 g/mol",
    "category": "Bisphénol",
    "summary": "Utilisé pour fabriquer des polycarbonates à haute résistance thermique.",
    "occurrence": "Synthétique.",
    "applications": ["Plastiques techniques"]
  },
  {
    "name": "Bisphénol M",
    "formula": "C₂₄H₂₆O₂",
    "composition": { "C": 24, "H": 26, "O": 2 },
    "molarMass": "346.46 g/mol",
    "category": "Bisphénol",
    "summary": "Monocristal durcisseur pour les résines époxy avancées.",
    "occurrence": "Synthétique.",
    "applications": ["Aéronautique"]
  },
  {
    "name": "4,4'-Diaminodiphénylsulfone (DDS)",
    "formula": "C₁₂H₁₂N₂O₂S",
    "composition": { "C": 12, "H": 12, "N": 2, "O": 2, "S": 1 },
    "molarMass": "248.30 g/mol",
    "category": "Sulfone / Amine",
    "summary": "Agent de réticulation majeur pour les résines d'ingénierie.",
    "occurrence": "Synthétique.",
    "applications": ["Matériaux composites", "Traitement de la lèpre (Dapsone)"]
  },
  {
    "name": "Diisopropylamidure de Lithium (LDA)",
    "formula": "C₆H₁₄LiN",
    "composition": { "C": 6, "H": 14, "Li": 1, "N": 1 },
    "molarMass": "107.12 g/mol",
    "category": "Base Forte",
    "summary": "Base non nucléophile indispensable pour créer des énolates régiosélectifs.",
    "occurrence": "Synthétique (généralement préparée in situ).",
    "applications": ["Synthèse organique fine"]
  },
  {
    "name": "N-Butyllithium complexe (TMEDA)",
    "formula": "C₁₀H₂₅LiN₂",
    "composition": { "C": 10, "H": 25, "Li": 1, "N": 2 },
    "molarMass": "180.26 g/mol",
    "category": "Complexe Organolithien",
    "summary": "L'ajout de TMEDA brise les agrégats de BuLi, augmentant drastiquement sa réactivité.",
    "occurrence": "Mélange synthétique.",
    "applications": ["Lithiation accélérée"]
  },
  {
    "name": "Sodium Naphtalénure",
    "formula": "C₁₀H₈Na",
    "composition": { "C": 10, "H": 8, "Na": 1 },
    "molarMass": "151.16 g/mol",
    "category": "Sel Radicalaire",
    "summary": "Agent réducteur puissant soluble dans le THF.",
    "occurrence": "Synthétique.",
    "applications": ["Polymérisation anionique vivante"]
  },
  {
    "name": "Dicyclohexylcarbodiimide (DCC)",
    "formula": "C₁₃H₂₂N₂",
    "composition": { "C": 13, "H": 22, "N": 2 },
    "molarMass": "206.33 g/mol",
    "category": "Agent de Couplage",
    "summary": "Utilisé pour la synthèse de peptides et d'esters en conditions douces.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse peptidique", "Biochimie"]
  },
  {
    "name": "1-Éthyl-3-(3-diméthylaminopropyl)carbodiimide (EDC)",
    "formula": "C₈H₁₇H₃",
    "composition": { "C": 8, "H": 17, "N": 3 },
    "molarMass": "155.24 g/mol",
    "category": "Agent de Couplage",
    "summary": "Agent de couplage soluble dans l'eau, idéal pour les bioconjugaisons.",
    "occurrence": "Synthétique.",
    "applications": ["Modification de protéines", "Nanotechnologies"]
  },
  {
    "name": "Acide Trifluorométhanesulfonique (Acide Triflique)",
    "formula": "CHF₃O₃S",
    "composition": { "C": 1, "H": 1, "F": 3, "O": 3, "S": 1 },
    "molarMass": "150.08 g/mol",
    "category": "Superacide",
    "summary": "L'un des acides organiques les plus forts connus.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse acide forte", "Production de triflates"]
  },
  {
    "name": "Triflate de Scandium",
    "formula": "C₃F₉O₉S₃Sc",
    "composition": { "C": 3, "F": 9, "O": 9, "S": 3, "Sc": 1 },
    "molarMass": "492.16 g/mol",
    "category": "Acide de Lewis stable à l'eau",
    "summary": "Catalyseur exceptionnel capable de fonctionner dans l'eau.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie verte", "Aldolisation"]
  },
  {
    "name": "Triflate de Triméthylsilyle (TMSOTf)",
    "formula": "C₄H₉F₃O₃SSi",
    "composition": { "C": 4, "H": 9, "F": 3, "O": 3, "S": 1, "Si": 1 },
    "molarMass": "222.26 g/mol",
    "category": "Acide de Lewis",
    "summary": "Réactif puissant pour le transfert de groupes silyles et l'activation d'acétals.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de glycosides"]
  },
  {
    "name": "2-Désoxy-D-Glucose",
    "formula": "C₆H₁₂O₅",
    "composition": { "C": 6, "H": 12, "O": 5 },
    "molarMass": "164.16 g/mol",
    "category": "Analogue de Sucre",
    "summary": "Inhibiteur de la glycolyse utilisé en recherche sur le cancer.",
    "occurrence": "Laboratoire.",
    "applications": ["Virologie", "Études métaboliques"]
  },
  {
    "name": "D-Luciférine",
    "formula": "C₁₁H₈N₂O₃S₂",
    "composition": { "C": 11, "H": 8, "N": 2, "O": 3, "S": 2 },
    "molarMass": "280.32 g/mol",
    "category": "Substrat Bioluminescent",
    "summary": "Molécule émettrice de lumière chez les lucioles sous l'action de la luciférase.",
    "occurrence": "Lucioles (Lampyridae).",
    "applications": ["Bio-imagerie", "Tests ATP"]
  },
  {
    "name": "Coelentérazine",
    "formula": "C₂₆H₂₁N₃O₃",
    "composition": { "C": 26, "H": 21, "N": 3, "O": 3 },
    "molarMass": "423.46 g/mol",
    "category": "Luminophore marin",
    "summary": "Molécule de bioluminescence trouvée dans de nombreux organismes marins.",
    "occurrence": "Méduses, Calmars.",
    "applications": ["Biotechnologie marine"]
  },
  {
    "name": "Vert de Malachite",
    "formula": "C₂₃H₂₅ClN₂",
    "composition": { "C": 23, "H": 25, "Cl": 1, "N": 2 },
    "molarMass": "364.91 g/mol",
    "category": "Colorant",
    "summary": "Colorant triarylméthane utilisé comme antifongique en aquaculture.",
    "occurrence": "Synthétique.",
    "applications": ["Teinture textile", "Traitement des poissons"]
  },
  {
    "name": "Bleu de Méthylène",
    "formula": "C₁₆H₁₈ClN₃S",
    "composition": { "C": 16, "H": 18, "Cl": 1, "N": 3, "S": 1 },
    "molarMass": "319.85 g/mol",
    "category": "Colorant / Médicament",
    "summary": "Utilisé comme indicateur redox et traitement de la méthémoglobinémie.",
    "occurrence": "Synthétique.",
    "applications": ["Médecine d'urgence", "Aquariophilie"]
  },
  {
    "name": "Éosine Y",
    "formula": "C₂₀H₈Br₄O₅",
    "composition": { "C": 20, "H": 8, "Br": 4, "O": 5 },
    "molarMass": "647.89 g/mol",
    "category": "Colorant",
    "summary": "Colorant rouge fluorescent utilisé pour marquer le cytoplasme en histologie.",
    "occurrence": "Synthétique.",
    "applications": ["Biologie médicale (coloration H&E)"]
  },
  {
    "name": "Réactifs de Burgess",
    "formula": "C₈H₁₈N₂O₄S",
    "composition": { "C": 8, "H": 18, "N": 2, "O": 4, "S": 1 },
    "molarMass": "238.30 g/mol",
    "category": "Agent de Déshydratation",
    "summary": "Utilisé pour convertir les alcools secondaires et tertiaires en oléfines.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique totale"]
  },
  {
    "name": "Chlorure de 2,4,6-Triisopropylbenzènesulfonyle",
    "formula": "C₁₅H₂₃ClO₂S",
    "composition": { "C": 15, "H": 23, "Cl": 1, "O": 2, "S": 1 },
    "molarMass": "302.86 g/mol",
    "category": "Agent de Sulfonylation",
    "summary": "Agent protecteur très encombré pour les nucléosides.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse d'ADN/ARN"]
  },
  {
    "name": "Tétrakis(diméthylamino)éthylène (TDAE)",
    "formula": "C₁₀H₂₄N₄",
    "composition": { "C": 10, "H": 24, "N": 4 },
    "molarMass": "200.32 g/mol",
    "category": "Réducteur Organique",
    "summary": "Agent réducteur puissant capable de former des sels radicalaires.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie des matériaux conducteurs"]
  },
  {
    "name": "1,3-Dicétone de Wahl",
    "formula": "C₁₀H₁₈O₂",
    "composition": { "C": 10, "H": 18, "O": 2 },
    "molarMass": "170.25 g/mol",
    "category": "Cétone",
    "summary": "Analogue encombré utilisé pour la stabilisation de métaux carbonyles.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie de coordination"]
  },
  {
    "name": "Trifluorométhyltriméthylsilane (Réactif de Ruppert-Prakash)",
    "formula": "C₄H₉F₃Si",
    "composition": { "C": 4, "H": 9, "F": 3, "Si": 1 },
    "molarMass": "142.22 g/mol",
    "category": "Réactif de Fluoruration",
    "summary": "Source de groupements trifluorométhyles (CF3) nucléophiles.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de médicaments fluorés"]
  },
  {
    "name": "Oxime de Phénylglyoxalonitrile",
    "formula": "C₈H₆N₂O",
    "composition": { "C": 8, "H": 6, "N": 2, "O": 1 },
    "molarMass": "146.15 g/mol",
    "category": "Réactif",
    "summary": "Intermédiaire dans la synthèse d'amino-acides non naturels.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche pharmaceutique"]
  },
  {
    "name": "N-Phénylbis(trifluorométhanesulfonimide) (Tf2NPh)",
    "formula": "C₈H₅F₆NO₄S₂",
    "composition": { "C": 8, "H": 5, "F": 6, "N": 1, "O": 4, "S": 2 },
    "molarMass": "357.25 g/mol",
    "category": "Donneur de Triflate",
    "summary": "Source électrophile de groupements triflates.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de triflates de vinyle"]
  },
  {
    "name": "Chlorure de Pyridine-Sulfur Trioxide",
    "formula": "C₅H₅NO₃S",
    "composition": { "C": 5, "H": 5, "N": 1, "O": 3, "S": 1 },
    "molarMass": "159.16 g/mol",
    "category": "Réactif de Sulfatation",
    "summary": "Utilisé pour sulfater les sucres et les alcools complexes.",
    "occurrence": "Synthétique.",
    "applications": ["Glucobiologie"]
  },
  {
    "name": "Hélicène [6]",
    "formula": "C₂₆H₁₆",
    "composition": { "C": 26, "H": 16 },
    "molarMass": "328.41 g/mol",
    "category": "Hydrocarbure Aromatique",
    "summary": "Molécule en hélice possédant une chiralité axiale remarquable.",
    "occurrence": "Synthétique.",
    "applications": ["Optique non linéaire", "Science des matériaux"]
  },
  {
    "name": "Naphtalène-1,4,5,8-tétra-carboxylique diimide (NDI)",
    "formula": "C₁₄H₆N₂O₄",
    "composition": { "C": 14, "H": 6, "N": 2, "O": 4 },
    "molarMass": "266.21 g/mol",
    "category": "Semi-conducteur Organique",
    "summary": "Unité de base pour les semi-conducteurs de type n.",
    "occurrence": "Synthétique.",
    "applications": ["Électronique organique"]
  },
  {
    "name": "Phénanthroline-5,6-dione",
    "formula": "C₁₂H₆N₂O₂",
    "composition": { "C": 12, "H": 6, "N": 2, "O": 2 },
    "molarMass": "210.19 g/mol",
    "category": "Ligand / Quinone",
    "summary": "Ligand capable de coordination bidentée et d'activité redox.",
    "occurrence": "Synthétique.",
    "applications": ["Capteurs électrochimiques"]
  },
  {
    "name": "Triaccontane (n-C30)",
    "formula": "C₃₀H₆₂",
    "composition": { "C": 30, "H": 62 },
    "molarMass": "422.81 g/mol",
    "category": "Alcane supérieur",
    "summary": "Constituant majeur de la cire de carnauba.",
    "occurrence": "Carnauba.",
    "applications": ["Poli pour voitures"]
  },
  {
    "name": "Dodécylsulfate de Lithium (LDS)",
    "formula": "C₁₂H₂₅LiO₄S",
    "composition": { "C": 12, "H": 25, "Li": 1, "O": 4, "S": 1 },
    "molarMass": "272.33 g/mol",
    "category": "Détergent Anionique",
    "summary": "Alternative au SDS pour l'électrophorèse à basse température.",
    "occurrence": "Synthétique.",
    "applications": ["Biologie moléculaire"]
  },
  {
    "name": "Tétraisopropylorthosilicate (TIPS)",
    "formula": "C₁₂H₂₈O₄Si",
    "composition": { "C": 12, "H": 28, "O": 4, "Si": 1 },
    "molarMass": "264.43 g/mol",
    "category": "Silicate",
    "summary": "Utilisé pour créer des revêtements de silice par procédé sol-gel.",
    "occurrence": "Synthétique.",
    "applications": ["Traitement des lentilles"]
  },
  {
    "name": "Triéthylsilane",
    "formula": "C₆H₁₆Si",
    "composition": { "C": 6, "H": 16, "Si": 1 },
    "molarMass": "116.28 g/mol",
    "category": "Hydrure Silylé",
    "summary": "Agent réducteur doux utilisé pour la déshydrogénation et la réduction sélective.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "Phénylsilane",
    "formula": "C₆H₈Si",
    "composition": { "C": 6, "H": 8, "Si": 1 },
    "molarMass": "108.21 g/mol",
    "category": "Silane",
    "summary": "Précurseur pour les polymères de silicone aromatiques.",
    "occurrence": "Synthétique.",
    "applications": ["Électronique"]
  },
  {
    "name": "Triphénylsilane",
    "formula": "C₁₈H₁₆Si",
    "composition": { "C": 18, "H": 16, "Si": 1 },
    "molarMass": "260.41 g/mol",
    "category": "Silane",
    "summary": "Source de radicaux silyles encombrés.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de polymères"]
  },
  {
    "name": "Tétraphénylsilane",
    "formula": "C₂₄H₂₀Si",
    "composition": { "C": 24, "H": 20, "Si": 1 },
    "molarMass": "336.50 g/mol",
    "category": "Organosilicié",
    "summary": "Composé très stable thermiquement utilisé dans les lubrifiants spatiaux.",
    "occurrence": "Synthétique.",
    "applications": ["Aérospatial"]
  },
  {
    "name": "Octaméthyltrisiloxane",
    "formula": "C₈H₂₄O₂Si₃",
    "composition": { "C": 8, "H": 24, "O": 2, "Si": 3 },
    "molarMass": "236.53 g/mol",
    "category": "Silicones",
    "summary": "Composant des silicones volatils souvent abrégé L3.",
    "occurrence": "Synthétique.",
    "applications": ["Cosmétique", "Fluides caloporteurs"]
  },
  {
    "name": "Décaméthyltétrasiloxane",
    "formula": "C₁₀H₃₀O₃Si₄",
    "composition": { "C": 10, "H": 30, "O": 3, "Si": 4 },
    "molarMass": "310.69 g/mol",
    "category": "Silicones",
    "summary": "Silicone linéaire fluide utilisé comme plastifiant.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie textile"]
  },
  {
    "name": "Dodécaméthylpentasiloxane",
    "formula": "C₁₂H₃₆O₄Si₅",
    "composition": { "C": 12, "H": 36, "O": 4, "Si": 5 },
    "molarMass": "384.84 g/mol",
    "category": "Silicones",
    "summary": "Fluide silicone utilisé dans les applications hydrauliques.",
    "occurrence": "Synthétique.",
    "applications": ["Hydraulique"]
  },
  {
    "name": "Tris(pentane-2,4-dionato)chrome(III)",
    "formula": "C₁₅H₂₁CrO₆",
    "composition": { "C": 15, "H": 21, "Cr": 1, "O": 6 },
    "molarMass": "349.32 g/mol",
    "category": "Complexe Métallique / Acac",
    "summary": "Complexe octaédrique stable utilisé en relaxation RMN.",
    "occurrence": "Synthétique.",
    "applications": ["RMN quantitative"]
  },
  {
    "name": "Tris(pentane-2,4-dionato)fer(III)",
    "formula": "C₁₅H₂₁FeO₆",
    "composition": { "C": 15, "H": 21, "Fe": 1, "O": 6 },
    "molarMass": "353.17 g/mol",
    "category": "Complexe Métallique",
    "summary": "Composé de fer paramagnétique utilisé comme catalyseur.",
    "occurrence": "Synthétique.",
    "applications": ["Réactions d'oxydation"]
  },
  {
    "name": "Tris(dibenzylidène-acétone)dipalladium(0) (Pd2(dba)3)",
    "formula": "C₅₁H₄₂O₃Pd₂",
    "composition": { "C": 51, "H": 42, "O": 3, "Pd": 2 },
    "molarMass": "915.72 g/mol",
    "category": "Source de Palladium(0)",
    "summary": "Précurseur de palladium hautement polyvalent pour les catalyses homogènes.",
    "occurrence": "Synthétique.",
    "applications": ["Couplage de Buchwald-Hartwig", "Suzuki"]
  },
  {
    "name": "Bis(tri-tert-butylphosphine)palladium(0)",
    "formula": "C₂₄H₅₄P₂Pd",
    "composition": { "C": 24, "H": 54, "P": 2, "Pd": 1 },
    "molarMass": "511.05 g/mol",
    "category": "Catalyseur de Palladium",
    "summary": "Catalyseur extrêmement réactif pour les couplages de chlorures d'aryle à température ambiante.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie pharmaceutique"]
  },
  {
    "name": "Chlorure de Bis(triphénylphosphine)palladium(II)",
    "formula": "C₃₆H₃₀Cl₂P₂Pd",
    "composition": { "C": 36, "H": 30, "Cl": 2, "P": 2, "Pd": 1 },
    "molarMass": "701.90 g/mol",
    "category": "Catalyseur",
    "summary": "Catalyseur stable et pratique pour les couplages Sonogashira.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de molécules alcyne-aromatiques"]
  },
  {
    "name": "Acide 1,4-Phénylène-diboronique",
    "formula": "C₆H₈B₂O₄",
    "composition": { "C": 6, "H": 8, "B": 2, "O": 4 },
    "molarMass": "165.75 g/mol",
    "category": "Acide Boronique Bifonctionnel",
    "summary": "Utilisé pour créer des polymères conducteurs ou des réseaux métallo-organiques (MOF).",
    "occurrence": "Synthétique.",
    "applications": ["Science des matériaux"]
  },
  {
    "name": "Pinacol d'Acide 4-(Méthoxycarbonyl)phénylboronique",
    "formula": "C₁₄H₁₉BO₄",
    "composition": { "C": 14, "H": 19, "B": 1, "O": 4 },
    "molarMass": "262.11 g/mol",
    "category": "Ester Boronique",
    "summary": "Dérivé ester boronate stable et facile à purifier.",
    "occurrence": "Synthétique.",
    "applications": ["Couplage croisé"]
  },
  {
    "name": "Bromure de Zinc(II)",
    "formula": "ZnBr₂",
    "composition": { "Zn": 1, "Br": 2 },
    "molarMass": "225.20 g/mol",
    "category": "Acide de Lewis",
    "summary": "Indispensable pour la formation in situ de réactifs organozinciques.",
    "occurrence": "Synthétique.",
    "applications": ["Réaction de Reformatsky", "Catalyse"]
  },
  {
    "name": "Réactif de Reformatsky (Intermédiaire Enolate de Zinc)",
    "formula": "C₄H₇BrO₂Zn",
    "composition": { "C": 4, "H": 7, "Br": 1, "O": 2, "Zn": 1 },
    "molarMass": "232.39 g/mol",
    "category": "Organozincique",
    "summary": "Généré à partir de l'alpha-bromoacétate d'éthyle pour l'addition sur les carbonyles.",
    "occurrence": "Intermédiaire de synthèse.",
    "applications": ["Synthèse de bêta-hydroxyesters"]
  },
  {
    "name": "Tris(dibenzoylmétane)mono(phénanthroline)europium(III)",
    "formula": "C₅₇H₄₁EuN₂O₆",
    "composition": { "C": 57, "H": 41, "Eu": 1, "N": 2, "O": 6 },
    "molarMass": "1001.90 g/mol",
    "category": "Complexe Luminescent",
    "summary": "Émetteur rouge intense utilisé dans les dispositifs OLED.",
    "occurrence": "Synthétique.",
    "applications": ["Écrans haute définition", "Traceurs biologiques"]
  },
  {
    "name": "Terbium(III) Tris(2,2,6,6-tétraméthyl-3,5-heptanedionate)",
    "formula": "C₃₃H₅₇O₆Tb",
    "composition": { "C": 33, "H": 57, "O": 6, "Tb": 1 },
    "molarMass": "708.73 g/mol",
    "category": "Complexe de Terre Rare",
    "summary": "Précurseur volatil pour le dépôt de couches minces de terbium.",
    "occurrence": "Synthétique.",
    "applications": ["MOCVD", "Phosphores verts"]
  },
  {
    "name": "Octachloro-cyclotétraphosphazène",
    "formula": "Cl₈N₄P₄",
    "composition": { "Cl": 8, "N": 4, "P": 4 },
    "molarMass": "463.58 g/mol",
    "category": "Composé Inorganique Cyclique",
    "summary": "Point de départ pour les polymères polyphosphazènes ignifuges.",
    "occurrence": "Synthétique.",
    "applications": ["Retardateurs de flamme"]
  },
  {
    "name": "Hexaméthyl-cyclotrisilazane",
    "formula": "C₆H₁₈N₃Si₃",
    "composition": { "C": 6, "H": 18, "N": 3, "Si": 3 },
    "molarMass": "219.49 g/mol",
    "category": "Silazane",
    "summary": "Utilisé pour la fonctionnalisation de surfaces de silice.",
    "occurrence": "Synthétique.",
    "applications": ["Nanotechnologie"]
  },
  {
    "name": "Nonaméthyltrisilazane",
    "formula": "C₉H₂₇N₂Si₃",
    "composition": { "C": 9, "H": 27, "N": 2, "Si": 3 },
    "molarMass": "247.58 g/mol",
    "category": "Silazane",
    "summary": "Alternative moins volatile au HMDS pour la silylation.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "1,3,5,7-Tétraméthylcyclotétrasiloxane (D4H)",
    "formula": "C₄H₁₆O₄Si₄",
    "composition": { "C": 4, "H": 16, "O": 4, "Si": 4 },
    "molarMass": "240.51 g/mol",
    "category": "Siloxane",
    "summary": "Utilisé pour la synthèse de polymères de silicone à motifs réactifs.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie des élastomères"]
  },
  {
    "name": "Dodécaméthyl-cyclohexasiloxane (D6)",
    "formula": "C₁₂H₃₆O₆Si₆",
    "composition": { "C": 12, "H": 36, "O": 6, "Si": 6 },
    "molarMass": "444.92 g/mol",
    "category": "Siloxane",
    "summary": "Utilisé dans les produits cosmétiques pour sa texture soyeuse.",
    "occurrence": "Synthétique.",
    "applications": ["Soins de la peau", "Conditionneurs capillaires"]
  },
  {
    "name": "Tris(triméthylsilyl)silane (TTMSS)",
    "formula": "C₉H₂₈Si₄",
    "composition": { "C": 9, "H": 28, "Si": 4 },
    "molarMass": "248.66 g/mol",
    "category": "Hydrure de Silicium",
    "summary": "Alternative écologique et sûre au tributylétain pour les réductions radicalaires.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie radicalaire verte"]
  },
  {
    "name": "Chlorure de Tert-Butyldiphénylsilyle (TBDPSCl)",
    "formula": "C₁₆H₁₉ClSi",
    "composition": { "C": 16, "H": 19, "Cl": 1, "Si": 1 },
    "molarMass": "274.86 g/mol",
    "category": "Agent Protecteur",
    "summary": "Groupe protecteur très stable utilisé en synthèse de produits naturels.",
    "occurrence": "Synthétique.",
    "applications": ["Protection d'alcools primaires"]
  },
  {
    "name": "1,1,3,3-Tétraméthyl-1,3-divinyldisiloxane",
    "formula": "C₈H₁₈OSi₂",
    "composition": { "C": 8, "H": 18, "O": 1, "Si": 2 },
    "molarMass": "186.40 g/mol",
    "category": "Silicones",
    "summary": "Agent de réticulation pour les élastomères de silicone vulcanisables à chaud.",
    "occurrence": "Synthétique.",
    "applications": ["Additifs de caoutchouc"]
  },
  {
    "name": "Héxacosane (n-C26)",
    "formula": "C₂₆H₅₄",
    "composition": { "C": 26, "H": 54 },
    "molarMass": "366.71 g/mol",
    "category": "Alcane supérieur",
    "summary": "Point de fusion à 56°C, utilisé comme matériau de changement de phase.",
    "occurrence": "Cire d'abeille (trace).",
    "applications": ["Stockage de chaleur latente"]
  },
  {
    "name": "Heptacosane (n-C27)",
    "formula": "C₂₇H₅₈",
    "composition": { "C": 27, "H": 58 },
    "molarMass": "380.73 g/mol",
    "category": "Alcane supérieur",
    "summary": "Identifié dans les cuticules protectrices des feuilles de pommier.",
    "occurrence": "Botanique.",
    "applications": ["Barrière contre l'évaporation"]
  },
  {
    "name": "Hêntriacontane (n-C31)",
    "formula": "C₃₁H₆₄",
    "composition": { "C": 31, "H": 64 },
    "molarMass": "436.84 g/mol",
    "category": "Paraffine",
    "summary": "Solide blanc isolant.",
    "occurrence": "Certains pétroles bruts paraffineux.",
    "applications": ["Cires de coulée"]
  },
  {
    "name": "Tétratriacontane (n-C34)",
    "formula": "C₃₄H₇₀",
    "composition": { "C": 34, "H": 70 },
    "molarMass": "478.92 g/mol",
    "category": "Paraffine",
    "summary": "Consistance très dure, utilisé pour augmenter le point de ramollissement des cires.",
    "occurrence": "Pétrole.",
    "applications": ["Industrie des bougies"]
  },
  {
    "name": "L-Méthionine s-méthylsulfonium",
    "formula": "C₆H₁₄NO₂S",
    "composition": { "C": 6, "H": 14, "N": 1, "O": 2, "S": 1 },
    "molarMass": "164.24 g/mol",
    "category": "Vitamine U",
    "summary": "Facteur protecteur de la muqueuse gastrique.",
    "occurrence": "Choux, Céleri.",
    "applications": ["Nutrition", "Gastro-entérologie"]
  },
  {
    "name": "Sulforaphane",
    "formula": "C₆H₁₁NOS₂",
    "composition": { "C": 6, "H": 11, "N": 1, "O": 1, "S": 2 },
    "molarMass": "177.29 g/mol",
    "category": "Isothiocyanate",
    "summary": "Composé antioxydant puissant capable de stimuler les enzymes de détoxification.",
    "occurrence": "Brocoli (glucoraphanine précurseur).",
    "applications": ["Nutraceutique", "Prévention santé"]
  },
  {
    "name": "Indole-3-Carbinol",
    "formula": "C₉H₉NO",
    "composition": { "C": 9, "H": 9, "N": 1, "O": 1 },
    "molarMass": "147.17 g/mol",
    "category": "Alcaloïde mineur",
    "summary": "Produit de dégradation des glucosinolates, étudié pour ses effets antitumoraux.",
    "occurrence": "Légumes crucifères.",
    "applications": ["Supplément alimentaire"]
  },
  {
    "name": "3,3'-Diindolylméthane (DIM)",
    "formula": "C₁₇H₁₄N₂",
    "composition": { "C": 17, "H": 14, "N": 2 },
    "molarMass": "246.31 g/mol",
    "category": "Hétérocycle",
    "summary": "Formé à partir de l'indole-3-carbinol lors de la digestion, modulateur d'œstrogène.",
    "occurrence": "Estomac (après consommation de choux).",
    "applications": ["Équilibre hormonal"]
  },
  {
    "name": "1-Butyl-3-méthylimidazolium bis(trifluoromethylsulfonyl)imide (BMIM-TFSI)",
    "formula": "C₁₀H₁₅F₆N₃O₄S₂",
    "composition": { "C": 10, "H": 15, "F": 6, "N": 3, "O": 4, "S": 2 },
    "molarMass": "419.36 g/mol",
    "category": "Liquide Ionique",
    "summary": "Liquide ionique hydrophobe utilisé comme solvant vert et électrolyte.",
    "occurrence": "Synthétique.",
    "applications": ["Batteries Li-ion", "Extraction sélective"]
  },
  {
    "name": "1-Ethyl-3-méthylimidazolium tétrafluoroborate (EMIM-BF4)",
    "formula": "C₆H₁₁BF₄N₂",
    "composition": { "C": 6, "H": 11, "B": 1, "F": 4, "N": 2 },
    "molarMass": "197.97 g/mol",
    "category": "Liquide Ionique",
    "summary": "Électrolyte à haute conductivité pour les supercondensateurs.",
    "occurrence": "Synthétique.",
    "applications": ["Supercondensateurs", "Électrochimie"]
  },
  {
    "name": "Réactif de Dess-Martin (DMP)",
    "formula": "C₁₃H₁₃IO₈",
    "composition": { "C": 13, "H": 13, "I": 1, "O": 8 },
    "molarMass": "424.14 g/mol",
    "category": "Agent Oxydant",
    "summary": "Oxydant doux et sélectif pour convertir les alcools primaires en aldéhydes.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique complexe"]
  },
  {
    "name": "Acide 2-Iodoxybenzoïque (IBX)",
    "formula": "C₇H₅IO₄",
    "composition": { "C": 7, "H": 5, "I": 1, "O": 4 },
    "molarMass": "280.02 g/mol",
    "category": "Agent Oxydant",
    "summary": "Précurseur du réactif de Dess-Martin, oxydant polyvalent.",
    "occurrence": "Synthétique.",
    "applications": ["Oxydations organiques"]
  },
  {
    "name": "Trifluorométhanesulfonate de Scandium(III)",
    "formula": "C₃F₉O₉S₃Sc",
    "composition": { "C": 3, "F": 9, "O": 9, "S": 3, "Sc": 1 },
    "molarMass": "492.16 g/mol",
    "category": "Acide de Lewis",
    "summary": "Catalyseur recyclable et stable à l'eau.",
    "occurrence": "Synthétique.",
    "applications": ["Réactions de Friedel-Crafts"]
  },
  {
    "name": "Trifluorométhanesulfonate d'Ytterbium(III)",
    "formula": "C₃F₉O₉S₃Yb",
    "composition": { "C": 3, "F": 9, "O": 9, "S": 3, "Yb": 1 },
    "molarMass": "620.25 g/mol",
    "category": "Catalyseur de Lanthanide",
    "summary": "Utilisé pour les réactions de cycloaddition et les aldolisations.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse asymétrique"]
  },
  {
    "name": "N,N-Diisopropyléthylamine (Base de Hünig)",
    "formula": "C₈H₁₉N",
    "composition": { "C": 8, "H": 19, "N": 1 },
    "molarMass": "129.24 g/mol",
    "category": "Amine encombrée",
    "summary": "Base organique non nucléophile couramment utilisée en synthèse peptidique.",
    "occurrence": "Synthétique.",
    "applications": ["Couplage de peptides", "Alkylations"]
  },
  {
    "name": "1,8-Diazabicyclo[5.4.0]undéc-7-ène (DBU)",
    "formula": "C₉H₁₆N₂",
    "composition": { "C": 9, "H": 16, "N": 2 },
    "molarMass": "152.24 g/mol",
    "category": "Base Amidine",
    "summary": "Base forte et nucléophile faible utilisée pour les éliminations.",
    "occurrence": "Synthétique.",
    "applications": ["Réactions d'élimination", "Polyuréthanes"]
  },
  {
    "name": "1,5-Diazabicyclo[4.3.0]non-5-ène (DBN)",
    "formula": "C₇H₁₂N₂",
    "composition": { "C": 7, "H": 12, "N": 2 },
    "molarMass": "124.18 g/mol",
    "category": "Base Amidine",
    "summary": "Analogue du DBU utilisé pour des déprotonations spécifiques.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse de polymérisation"]
  },
  {
    "name": "Acide Phénylsélénique",
    "formula": "C₆H₆O₂Se",
    "composition": { "C": 6, "H": 6, "O": 2, "Se": 1 },
    "molarMass": "189.07 g/mol",
    "category": "Composé du Sélénium",
    "summary": "Utilisé pour introduire des doubles liaisons via l'élimination de sélénoxyde.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique moderne"]
  },
  {
    "name": "Diphenyl diséléniure",
    "formula": "C₁₂H₁₀Se₂",
    "composition": { "C": 12, "H": 10, "Se": 2 },
    "molarMass": "312.13 g/mol",
    "category": "Composé du Sélénium",
    "summary": "Source de radicaux phénylsélényle.",
    "occurrence": "Synthétique.",
    "applications": ["Réactions radicalaires"]
  },
  {
    "name": "Triflate de Cuivre(II)",
    "formula": "C₂F₆CuO₆S₂",
    "composition": { "C": 2, "F": 6, "Cu": 1, "O": 6, "S": 2 },
    "molarMass": "361.68 g/mol",
    "category": "Acide de Lewis",
    "summary": "Catalyseur puissant pour les réactions d'ouverture de cycle.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse d'éthers cycliques"]
  },
  {
    "name": "Triflate de Magnésium",
    "formula": "C₂F₆MgO₆S₂",
    "composition": { "C": 2, "F": 6, "Mg": 1, "O": 6, "S": 2 },
    "molarMass": "322.44 g/mol",
    "category": "Acide de Lewis doux",
    "summary": "Utilisé pour l'activation douce de groupements protecteurs.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de glucides"]
  },
  {
    "name": "Chlorure de Mesyle (MsCl)",
    "formula": "CH₃ClO₂S",
    "composition": { "C": 1, "H": 3, "Cl": 1, "O": 2, "S": 1 },
    "molarMass": "114.55 g/mol",
    "category": "Agent de Sulfonylation",
    "summary": "Utilisé pour transformer les alcools en bons groupements partants (mésylates).",
    "occurrence": "Synthétique.",
    "applications": ["Substitutions nucléophiles"]
  },
  {
    "name": "Chlorure de Tosyle (TsCl)",
    "formula": "C₇H₇ClO₂S",
    "composition": { "C": 7, "H": 7, "Cl": 1, "O": 2, "S": 1 },
    "molarMass": "190.65 g/mol",
    "category": "Agent de Sulfonylation",
    "summary": "Réactif standard pour la tosylation des alcools et amines.",
    "occurrence": "Synthétique.",
    "applications": ["Protection de fonctions amines"]
  },
  {
    "name": "Chlorure de Nosyle",
    "formula": "C₆H₄ClNO₄S",
    "composition": { "C": 6, "H": 4, "Cl": 1, "N": 1, "O": 4, "S": 1 },
    "molarMass": "221.62 g/mol",
    "category": "Agent de Sulfonylation",
    "summary": "Protège les amines avec un groupement facile à retirer (déprotection douce).",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse multi-étapes"]
  },
  {
    "name": "Toluène-4-sulfonate de Pyridinium (PPTS)",
    "formula": "C₁₂H₁₃NO₃S",
    "composition": { "C": 12, "H": 13, "N": 1, "O": 3, "S": 1 },
    "molarMass": "251.30 g/mol",
    "category": "Acide Doux",
    "summary": "Catalyseur acide doux idéal pour retirer des protections THP.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie des produits naturels"]
  },
  {
    "name": "Trifluoroborate de Potassium Phényle",
    "formula": "C₆H₅BF₃K",
    "composition": { "C": 6, "H": 5, "B": 1, "F": 3, "K": 1 },
    "molarMass": "184.01 g/mol",
    "category": "Organoboré stable",
    "summary": "Alternative stable à l'air et à l'humidité de l'acide phénylboronique.",
    "occurrence": "Synthétique.",
    "applications": ["Couplage de Suzuki-Miyaura"]
  },
  {
    "name": "Bis(pinacolato)dibore (B2pin2)",
    "formula": "C₁₂H₂₄B₂O₄",
    "composition": { "C": 12, "H": 24, "B": 2, "O": 4 },
    "molarMass": "253.94 g/mol",
    "category": "Réactif de Borylation",
    "summary": "Utilisé pour la borylation directe des liaisons C-H.",
    "occurrence": "Synthétique.",
    "applications": ["Préparation d'esters boroniques"]
  },
  {
    "name": "Oxyde de Rhénium(VII)",
    "formula": "Re₂O₇",
    "composition": { "Re": 2, "O": 7 },
    "molarMass": "484.41 g/mol",
    "category": "Oxyde Métallique",
    "summary": "Précurseur de catalyseurs pour le métathèse et l'époxydation.",
    "occurrence": "Extraction de molybdénite.",
    "applications": ["Industrie chimique"]
  },
  {
    "name": "Perrhénate de Sodium",
    "formula": "NaReO₄",
    "composition": { "Na": 1, "Re": 1, "O": 4 },
    "molarMass": "273.19 g/mol",
    "category": "Sel de Rhénium",
    "summary": "Source courante de rhénium soluble dans l'eau.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse d'hydrogénation"]
  },
  {
    "name": "Fluorure de Césium",
    "formula": "CsF",
    "composition": { "Cs": 1, "F": 1 },
    "molarMass": "151.91 g/mol",
    "category": "Halogénure Infecte",
    "summary": "Source d'ions fluorures très solubles dans les solvants organiques et base douce.",
    "occurrence": "Synthétique.",
    "applications": ["Désilylation", "Synthèse de polymères"]
  },
  {
    "name": "Carbonate de Césium",
    "formula": "Cs₂CO₃",
    "composition": { "Cs": 2, "C": 1, "O": 3 },
    "molarMass": "325.82 g/mol",
    "category": "Base Minérale",
    "summary": "Base puissante utilisée pour favoriser les alkylations difficiles.",
    "occurrence": "Synthétique.",
    "applications": ["Couplage de Buchwald", "Macrocyclisation"]
  },
  {
    "name": "Chlorure de Césium",
    "formula": "CsCl",
    "composition": { "Cs": 1, "Cl": 1 },
    "molarMass": "168.36 g/mol",
    "category": "Sel Minéral",
    "summary": "Utilisé en centrifugation pour la séparation de l'ADN par gradient de densité.",
    "occurrence": "Pollucite.",
    "applications": ["Biotechnologie", "Tube à rayons X"]
  },
  {
    "name": "Nitrate de Césium",
    "formula": "CsNO₃",
    "composition": { "Cs": 1, "N": 1, "O": 3 },
    "molarMass": "194.91 g/mol",
    "category": "Comburant",
    "summary": "Utilisé dans les formulations pyrotechniques pour produire des flammes bleues.",
    "occurrence": "Synthétique.",
    "applications": ["Feux d'artifice", "Lentilles optiques"]
  },
  {
    "name": "Catalyseur de Grubbs (1ère Génération)",
    "formula": "C₄₃H₇₂Cl₂P₂Ru",
    "composition": { "C": 43, "H": 72, "Cl": 2, "P": 2, "Ru": 1 },
    "molarMass": "822.96 g/mol",
    "category": "Catalyseur de Métathèse",
    "summary": "Catalyseur au ruthénium révolutionnaire pour la métathèse des oléfines.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de polymères", "Chimie fine"]
  },
  {
    "name": "Catalyseur de Grubbs (2ème Génération)",
    "formula": "C₄₆H₆₅Cl₂N₂PRu",
    "composition": { "C": 46, "H": 65, "Cl": 2, "N": 2, "P": 1, "Ru": 1 },
    "molarMass": "848.98 g/mol",
    "category": "Catalyseur de Métathèse",
    "summary": "Version améliorée avec un ligand carbène N-hétérocyclique, offrant une plus grande stabilité et activité.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de cycles complexes"]
  },
  {
    "name": "Catalyseur d'Hoveyda-Grubbs (2ème Génération)",
    "formula": "C₃₁H₃₈Cl₂N₂ORu",
    "composition": { "C": 31, "H": 38, "Cl": 2, "N": 2, "O": 1, "Ru": 1 },
    "molarMass": "626.63 g/mol",
    "category": "Catalyseur",
    "summary": "Catalyseur hautement efficace pour la métathèse croisée et la fermeture de cycle.",
    "occurrence": "Synthétique.",
    "applications": ["Fabrication de médicaments"]
  },
  {
    "name": "Bis(triphénylphosphine)ruthénium(II) dicarbonyle",
    "formula": "C₃₈H₃₀O₂P₂Ru",
    "composition": { "C": 38, "H": 30, "O": 2, "P": 2, "Ru": 1 },
    "molarMass": "681.67 g/mol",
    "category": "Complexe Organométallique",
    "summary": "Utilisé pour l'hydroformylation et d'autres activations de CO.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse industrielle"]
  },
  {
    "name": "Tris(2,2'-bipyridine)ruthénium(II) Chlorure",
    "formula": "C₃₀H₂₄Cl₂N₆Ru",
    "composition": { "C": 30, "H": 24, "Cl": 2, "N": 6, "Ru": 1 },
    "molarMass": "640.53 g/mol",
    "category": "Photo-catalyseur",
    "summary": "Réactif clé pour le transfert d'électrons photo-induit (PET).",
    "occurrence": "Synthétique.",
    "applications": ["Photocatalyse", "Conversion d'énergie solaire"]
  },
  {
    "name": "1-Ethyl-3-méthylimidazolium trifluorométhanesulfonate",
    "formula": "C₇H₁₁F₃N₂O₃S",
    "composition": { "C": 7, "H": 11, "F": 3, "N": 2, "O": 3, "S": 1 },
    "molarMass": "260.23 g/mol",
    "category": "Liquide Ionique",
    "summary": "Solvant conducteur stable thermiquement.",
    "occurrence": "Synthétique.",
    "applications": ["Électro-dépôt", "Capteurs"]
  },
  {
    "name": "Tétrafluoroborate de 1-Butyl-1-méthylpyrrolidinium",
    "formula": "C₉H₂₀BF₄N",
    "composition": { "C": 9, "H": 20, "B": 1, "F": 4, "N": 1 },
    "molarMass": "229.07 g/mol",
    "category": "Liquide Ionique",
    "summary": "Utilisé comme électrolyte dans les condensateurs à double couche.",
    "occurrence": "Synthétique.",
    "applications": ["Stockage d'énergie"]
  },
  {
    "name": "Hexafluorophosphate de Choline",
    "formula": "C₅H₁₄NO · PF₆",
    "composition": { "C": 5, "H": 14, "N": 1, "O": 1, "P": 1, "F": 6 },
    "molarMass": "249.13 g/mol",
    "category": "Sel de Choline",
    "summary": "Variante de choline pour les électrolytes biocompatibles.",
    "occurrence": "Synthétique.",
    "applications": ["Électrochimie biologique"]
  },
  {
    "name": "Triflate de Lithium",
    "formula": "CF₃LiO₃S",
    "composition": { "C": 1, "F": 3, "Li": 1, "O": 3, "S": 1 },
    "molarMass": "156.01 g/mol",
    "category": "Sel de Lithium",
    "summary": "Composant majeur des électrolytes pour batteries polymères.",
    "occurrence": "Synthétique.",
    "applications": ["Batteries hautes performances"]
  },
  {
    "name": "Bis(fluorosulfonyl)imide de Lithium (LiFSI)",
    "formula": "F₂LiNO₄S₂",
    "composition": { "F": 2, "Li": 1, "N": 1, "O": 4, "S": 2 },
    "molarMass": "187.07 g/mol",
    "category": "Sel de Lithium",
    "summary": "Sel de nouvelle génération offrant une meilleure conductivité que le LiPF6.",
    "occurrence": "Synthétique.",
    "applications": ["Batteries Li-ion avancées"]
  },
  {
    "name": "Boron-Dipyrrométhène (BODIPY 493/503)",
    "formula": "C₁₄H₁₇BF₂N₂",
    "composition": { "C": 14, "H": 17, "B": 1, "F": 2, "N": 2 },
    "molarMass": "262.11 g/mol",
    "category": "Fluorophore",
    "summary": "Colorant fluorescent intense utilisé pour marquer les lipides neutres.",
    "occurrence": "Synthétique.",
    "applications": ["Microscopie à fluorescence"]
  },
  {
    "name": "Carboxyfluorescéine (FAM)",
    "formula": "C₂₁H₁₂O₇",
    "composition": { "C": 21, "H": 12, "O": 7 },
    "molarMass": "376.32 g/mol",
    "category": "Marqueur Fluorescent",
    "summary": "Utilisé pour le marquage des acides nucléiques en PCR en temps réel.",
    "occurrence": "Synthétique.",
    "applications": ["Diagnostic moléculaire"]
  },
  {
    "name": "Tétraméthylrhodamine (TAMRA)",
    "formula": "C₂₄H₂₂N₂O₅",
    "composition": { "C": 24, "H": 22, "N": 2, "O": 5 },
    "molarMass": "418.44 g/mol",
    "category": "Fluorophore",
    "summary": "Émetteur orange/rouge utilisé en séquençage d'ADN.",
    "occurrence": "Synthétique.",
    "applications": ["Séquençage Sanger", "FRET"]
  },
  {
    "name": "Cy3 (Cyanine 3)",
    "formula": "C₃₁H₃₈ClN₂O₈S₂",
    "composition": { "C": 31, "H": 38, "Cl": 1, "N": 2, "O": 8, "S": 2 },
    "molarMass": "666.23 g/mol",
    "category": "Fluorophore Cyanine",
    "summary": "Colorant fluorescent utilisé pour les puces à ADN.",
    "occurrence": "Synthétique.",
    "applications": ["Microarrays"]
  },
  {
    "name": "Cy5 (Cyanine 5)",
    "formula": "C₃₃H₄₀ClN₂O₈S₂",
    "composition": { "C": 33, "H": 40, "Cl": 1, "N": 2, "O": 8, "S": 2 },
    "molarMass": "692.27 g/mol",
    "category": "Fluorophore",
    "summary": "Émetteur dans le rouge lointain, réduit l'autofluorescence biologique.",
    "occurrence": "Synthétique.",
    "applications": ["Imagerie in vivo"]
  },
  {
    "name": "Oxyde de Gadolinium(III)",
    "formula": "Gd₂O₃",
    "composition": { "Gd": 2, "O": 3 },
    "molarMass": "362.50 g/mol",
    "category": "Oxyde de Terre Rare",
    "summary": "Utilisé dans les agents de contraste pour l'IRM et les verres optiques.",
    "occurrence": "Monazite.",
    "applications": ["Médecine nucléaire", "Écrans X"]
  },
  {
    "name": "Chlorure de Néodyme(III)",
    "formula": "NdCl₃",
    "composition": { "Nd": 1, "Cl": 3 },
    "molarMass": "250.60 g/mol",
    "category": "Sel de Terre Rare",
    "summary": "Utilisé pour la fabrication d'aimants NdFeB surpuissants.",
    "occurrence": "Bastnäsite.",
    "applications": ["Moteurs de voitures électriques", "Éoliennes"]
  },
  {
    "name": "Chlorure de Praséodyme(III)",
    "formula": "PrCl₃",
    "composition": { "Pr": 1, "Cl": 3 },
    "molarMass": "247.27 g/mol",
    "category": "Sel de Terre Rare",
    "summary": "Utilisé pour colorer les verres en jaune vif.",
    "occurrence": "Minerais de lanthanides.",
    "applications": ["Optique", "Céramiques"]
  },
  {
    "name": "Hexafluorophosphate de Tétrabutylammonium (TBAPF6)",
    "formula": "C₁₆H₃₆F₆NP",
    "composition": { "C": 16, "H": 36, "F": 1, "N": 1, "P": 1 },
    "molarMass": "387.43 g/mol",
    "category": "Électrolyte Support",
    "summary": "Sel standard pour la voltampérométrie en milieu non aqueux.",
    "occurrence": "Synthétique.",
    "applications": ["Électrochimie analytique"]
  },
  {
    "name": "Perchlorate de Tétrabutylammonium (TBAP)",
    "formula": "C₁₆H₃₆ClNO₄",
    "composition": { "C": 16, "H": 36, "Cl": 1, "N": 1, "O": 4 },
    "molarMass": "341.91 g/mol",
    "category": "Sel d'Ammonium",
    "summary": "Utilisé pour les fenêtres électrochimiques larges.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche en batteries"]
  },
  {
    "name": "Tétrafluoroborate de Tétrabutylammonium (TBABF4)",
    "formula": "C₁₆H₃₆BF₄N",
    "composition": { "C": 16, "H": 36, "B": 1, "F": 4, "N": 1 },
    "molarMass": "329.27 g/mol",
    "category": "Électrolyte",
    "summary": "Sel hautement soluble pour la synthèse électro-organique.",
    "occurrence": "Synthétique.",
    "applications": ["Électrosynthèse"]
  },
  {
    "name": "Triflate de Tétrabutylammonium",
    "formula": "C₁₇H₃₆F₃NO₃S",
    "composition": { "C": 17, "H": 36, "F": 3, "N": 1, "O": 3, "S": 1 },
    "molarMass": "391.53 g/mol",
    "category": "Sel d'Ammonium",
    "summary": "Utilisé dans les gels électrolytes pour dispositifs photochromes.",
    "occurrence": "Synthétique.",
    "applications": ["Fenêtres intelligentes"]
  },
  {
    "name": "Pinacol d'Acide 4-Cyanophénylboronique",
    "formula": "C₁₃H₁₆BNO₂",
    "composition": { "C": 13, "H": 16, "B": 1, "N": 1, "O": 2 },
    "molarMass": "229.08 g/mol",
    "category": "Ester Boronique",
    "summary": "Utilisé pour introduire des fonctions nitriles par couplage de Suzuki.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie médicinale"]
  },
  {
    "name": "Pinacol d'Acide 2-Nitrophénylboronique",
    "formula": "C₁₂H₁₆BNO₄",
    "composition": { "C": 12, "H": 16, "B": 1, "N": 1, "O": 4 },
    "molarMass": "249.07 g/mol",
    "category": "Ester Boronique",
    "summary": "Précurseur pour la synthèse d'anilines substituées.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie des colorants"]
  },
  {
    "name": "Pinacol d'Acide 3-Formylphénylboronique",
    "formula": "C₁₃H₁₇BO₃",
    "composition": { "C": 13, "H": 17, "B": 1, "O": 3 },
    "molarMass": "232.08 g/mol",
    "category": "Ester Boronique",
    "summary": "Utilisé pour la bioconjugaison via la fonction aldéhyde.",
    "occurrence": "Synthétique.",
    "applications": ["Bio-ingénierie"]
  },
  {
    "name": "Amberwood",
    "formula": "C₁₅H₂₆O",
    "composition": { "C": 15, "H": 26, "O": 1 },
    "molarMass": "222.37 g/mol",
    "category": "Fragrance",
    "summary": "Molécule ambrée boisée avec des nuances de cèdre.",
    "occurrence": "Synthétique.",
    "applications": ["Parfumerie"]
  },
  {
    "name": "Cedramber",
    "formula": "C₁₆H₂₈O",
    "composition": { "C": 16, "H": 28, "O": 1 },
    "molarMass": "236.39 g/mol",
    "category": "Fragrance",
    "summary": "Note boisée sèche et ambrée, très stable dans les savons.",
    "occurrence": "Synthétique.",
    "applications": ["Produits ménagers parfumés"]
  },
  {
    "name": "Cyclopentadécane",
    "formula": "C₁₅H₃₀",
    "composition": { "C": 15, "H": 30 },
    "molarMass": "210.40 g/mol",
    "category": "Alcane Cyclique",
    "summary": "Utilisé comme standard en chromatographie et dans certains muscs synthétiques.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche analytique"]
  },
  {
    "name": "Muscone",
    "formula": "C₁₆H₃₀O",
    "composition": { "C": 16, "H": 30, "O": 1 },
    "molarMass": "238.41 g/mol",
    "category": "Musc Naturel",
    "summary": "Le principe odorant principal du musc naturel.",
    "occurrence": "Glandes du cerf porte-musc.",
    "applications": ["Haute parfumerie"]
  },
  {
    "name": "Civétone",
    "formula": "C₁₇H₃₀O",
    "composition": { "C": 17, "H": 30, "O": 1 },
    "molarMass": "250.42 g/mol",
    "category": "Musc Naturel",
    "summary": "Cétone cyclique insaturée avec une odeur animale puissante.",
    "occurrence": "Glandes de la civette.",
    "applications": ["Fixateur de parfum"]
  },
  {
    "name": "Ambrette",
    "formula": "C₁₂H₁₆N₂O₅",
    "composition": { "C": 12, "H": 16, "N": 2, "O": 5 },
    "molarMass": "268.27 g/mol",
    "category": "Musc Nitré",
    "summary": "Ancien musc synthétique à l'odeur florale musquée.",
    "occurrence": "Synthétique.",
    "applications": ["Parfumerie historique"]
  },
  {
    "name": "Galaxolide",
    "formula": "C₁₈H₂₆O",
    "composition": { "C": 18, "H": 26, "O": 1 },
    "molarMass": "258.40 g/mol",
    "category": "Musc Polycyclique",
    "summary": "Musc synthétique le plus utilisé au monde pour sa note 'propre'.",
    "occurrence": "Synthétique.",
    "applications": ["Lessives", "Adoucissants"]
  },
  {
    "name": "Tonalide",
    "formula": "C₁₈H₂₆O",
    "composition": { "C": 18, "H": 26, "O": 1 },
    "molarMass": "258.40 g/mol",
    "category": "Musc Polycyclique",
    "summary": "Note musquée plus boisée et épicée que le Galaxolide.",
    "occurrence": "Synthétique.",
    "applications": ["Cosmétiques"]
  },
  {
    "name": "Habanolide",
    "formula": "C₁₅H₂₆O₂",
    "composition": { "C": 15, "H": 26, "O": 2 },
    "molarMass": "238.37 g/mol",
    "category": "Musc Macrolide",
    "summary": "Musc moderne, élégant et transparent.",
    "occurrence": "Synthétique.",
    "applications": ["Parfumerie fine"]
  },
  {
    "name": "Ethylène Brassylate",
    "formula": "C₁₅H₂₆O₄",
    "composition": { "C": 15, "H": 26, "O": 4 },
    "molarMass": "270.36 g/mol",
    "category": "Musc Macrolide",
    "summary": "Musc doux et poudré, très utilisé comme fixateur.",
    "occurrence": "Synthétique.",
    "applications": ["Parfumerie"]
  },
  {
    "name": "Phénylacétylène",
    "formula": "C₈H₆",
    "composition": { "C": 8, "H": 6 },
    "molarMass": "102.13 g/mol",
    "category": "Alcyne Aromatique",
    "summary": "Intermédiaire clé pour les réactions de couplage de Sonogashira.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "Diphenylacétylène (Tolane)",
    "formula": "C₁₄H₁₀",
    "composition": { "C": 14, "H": 10 },
    "molarMass": "178.23 g/mol",
    "category": "Alcyne Aromatique",
    "summary": "Molécule rigide utilisée en science des matériaux et cristaux liquides.",
    "occurrence": "Synthétique.",
    "applications": ["Optique non linéaire"]
  },
  {
    "name": "1,4-Diéthynylbenzène",
    "formula": "C₁₀H₆",
    "composition": { "C": 10, "H": 6 },
    "molarMass": "126.15 g/mol",
    "category": "Alcyne Bifonctionnel",
    "summary": "Lien rigide pour la construction de polymères conjugués.",
    "occurrence": "Synthétique.",
    "applications": ["Semi-conducteurs organiques"]
  },
  {
    "name": "Propargylamine",
    "formula": "C₃H₅N",
    "composition": { "C": 3, "H": 5, "N": 1 },
    "molarMass": "55.08 g/mol",
    "category": "Alcyne Aminé",
    "summary": "Utilisée pour introduire des triples liaisons dans les biomolécules (Click Chemistry).",
    "occurrence": "Synthétique.",
    "applications": ["Bioconjugaison"]
  },
  {
    "name": "Alcool Propargylique",
    "formula": "C₃H₄O",
    "composition": { "C": 3, "H": 4, "O": 1 },
    "molarMass": "56.06 g/mol",
    "category": "Alcyne / Alcool",
    "summary": "Inhibiteur de corrosion pour l'acier dans les acides forts.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie pétrolière", "Synthèse organique"]
  },
  {
    "name": "Bromure de Propargyle",
    "formula": "C₃H₃Br",
    "composition": { "C": 3, "H": 3, "Br": 1 },
    "molarMass": "118.96 g/mol",
    "category": "Halogénure d'Alcyne",
    "summary": "Agent alkylant puissant pour introduire le groupe propargyle.",
    "occurrence": "Synthétique.",
    "applications": ["Protection de fonctions phénols"]
  },
  {
    "name": "Tétraphtalaldéhyde",
    "formula": "C₈H₆O₂",
    "composition": { "C": 8, "H": 6, "O": 2 },
    "molarMass": "134.13 g/mol",
    "category": "Aldéhyde",
    "summary": "Utilisé pour la synthèse de ligands salens encombrés.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse asymétrique"]
  },
  {
    "name": "2,6-Dipicolinoyldihydrazine",
    "formula": "C₇H₉N₅O₂",
    "composition": { "C": 7, "H": 9, "N": 5, "O": 2 },
    "molarMass": "195.18 g/mol",
    "category": "Ligand",
    "summary": "Ligand multidenté pour les ions lanthanides.",
    "occurrence": "Synthétique.",
    "applications": ["Traceurs fluorescents"]
  },
  {
    "name": "Chlorure d'Hafnium(IV)",
    "formula": "HfCl₄",
    "composition": { "Hf": 1, "Cl": 4 },
    "molarMass": "320.30 g/mol",
    "category": "Halogénure Métallique",
    "summary": "Précurseur pour le dépôt de couches minces de HfO2 dans les microprocesseurs.",
    "occurrence": "Minerais de zircon.",
    "applications": ["Semi-conducteurs (High-k dielectrics)"]
  },
  {
    "name": "Acide 4-Ethynylphénylboronique",
    "formula": "C₈H₇BO₂",
    "composition": { "C": 8, "H": 7, "B": 1, "O": 2 },
    "molarMass": "145.95 g/mol",
    "category": "Acide Boronique",
    "summary": "Composé bifonctionnel pour la construction de polymères conjugués et de MOFs.",
    "occurrence": "Synthétique.",
    "applications": ["Science des polymères"]
  },
  {
    "name": "Chlorure d'Europium(III)",
    "formula": "EuCl₃",
    "composition": { "Eu": 1, "Cl": 3 },
    "molarMass": "258.32 g/mol",
    "category": "Halogénure de Terre Rare",
    "summary": "Utilisé pour la synthèse de matériaux phosphorescents.",
    "occurrence": "Monazite.",
    "applications": ["Électronique (Phosphores)"]
  },
  {
    "name": "Chlorure de Gadolinium(III) Hexahydraté",
    "formula": "GdCl₃ · 6H₂O",
    "composition": { "Gd": 1, "Cl": 3, "O": 6, "H": 12 },
    "molarMass": "371.70 g/mol",
    "category": "Sel de Terre Rare",
    "summary": "Utilisé pour préparer des agents de contraste pour l'IRM.",
    "occurrence": "Bastnäsite.",
    "applications": ["Imagerie Médicale"]
  },
  {
    "name": "Nitrate d'Ytterbium(III) Hydraté",
    "formula": "Yb(NO₃)₃ · xH₂O",
    "composition": { "Yb": 1, "N": 3, "O": 9 },
    "molarMass": "359.05 g/mol (anhydre)",
    "category": "Sel de Terre Rare",
    "summary": "Dopant pour les lasers à fibre de haute puissance.",
    "occurrence": "Minerais de lanthanides.",
    "applications": ["Technologie laser"]
  },
  {
    "name": "Tétraphényléthène (TPE)",
    "formula": "C₂₆H₂₀",
    "composition": { "C": 26, "H": 20 },
    "molarMass": "332.44 g/mol",
    "category": "Hydrocarbure Aromatique",
    "summary": "Molécule emblématique présentant l'émission induite par agrégation (AIE).",
    "occurrence": "Synthétique.",
    "applications": ["Biosenseurs", "OLED"]
  },
  {
    "name": "Perfluorooctanoate d'Ammonium (PFOA)",
    "formula": "C₈H₄F₁₅NO₂",
    "composition": { "C": 8, "H": 4, "F": 15, "N": 1, "O": 2 },
    "molarMass": "431.10 g/mol",
    "category": "Surfactant Fluoré",
    "summary": "Ancien tensioactif utilisé pour la production de PTFE (Téflon).",
    "occurrence": "Synthétique (Polluant persistant).",
    "applications": ["Industrie des polymères (historique)"]
  },
  {
    "name": "Sulfonate de Perfluorooctane (PFOS)",
    "formula": "C₈F₁₇O₃S⁻",
    "composition": { "C": 8, "F": 17, "O": 3, "S": 1 },
    "molarMass": "499.11 g/mol",
    "category": "Surfactant Fluoré",
    "summary": "Tensioactif extrêmement stable et persistant, autrefois utilisé dans les mousses anti-incendie.",
    "occurrence": "Synthétique (Polluant anthropique).",
    "applications": ["Traitement des surfaces (historique)"]
  },
  {
    "name": "Heptadécane (n-C17)",
    "formula": "C₁₇H₃₆",
    "composition": { "C": 17, "H": 36 },
    "molarMass": "240.47 g/mol",
    "category": "Alcane",
    "summary": "Alcane linéaire présent dans le kérosène et certaines huiles essentielles.",
    "occurrence": "Pétrole, Menthe.",
    "applications": ["Solvant", "Standard de référence"]
  },
  {
    "name": "Octadécane (n-C18)",
    "formula": "C₁₈H₃₈",
    "composition": { "C": 18, "H": 38 },
    "molarMass": "254.49 g/mol",
    "category": "Alcane",
    "summary": "Utilisé comme matériau de changement de phase pour le stockage thermique.",
    "occurrence": "Cires minérales.",
    "applications": ["Microencapsulation thermique"]
  },
  {
    "name": "Nonadécane (n-C19)",
    "formula": "C₁₉H₄₀",
    "composition": { "C": 19, "H": 40 },
    "molarMass": "268.52 g/mol",
    "category": "Alcane",
    "summary": "Alcane solide à la température ambiante basse (PF: 32°C).",
    "occurrence": "Paraffine.",
    "applications": ["Cires de bougies"]
  },
  {
    "name": "Dotriacontane (n-C32)",
    "formula": "C₃₂H₆₆",
    "composition": { "C": 32, "H": 66 },
    "molarMass": "450.87 g/mol",
    "category": "Paraffine",
    "summary": "Alcane de haute masse moléculaire utilisé dans la lubrification haute température.",
    "occurrence": "Huiles lubrifiantes lourdes.",
    "applications": ["Additif pétrolier"]
  },
  {
    "name": "Tétratriacontane (n-C34)",
    "formula": "C₃₄H₇₀",
    "composition": { "C": 34, "H": 70 },
    "molarMass": "478.92 g/mol",
    "category": "Paraffine",
    "summary": "Composant des cires protectrices pour fruits.",
    "occurrence": "Cires végétales.",
    "applications": ["Protection alimentaire"]
  },
  {
    "name": "Hexatriacontane (n-C36)",
    "formula": "C₃₆H₇₄",
    "composition": { "C": 36, "H": 74 },
    "molarMass": "506.97 g/mol",
    "category": "Paraffine",
    "summary": "Solide cristallin blanc utilisé comme standard d'analyse thermique.",
    "occurrence": "Synthétique.",
    "applications": ["Calibration DSC"]
  },
  {
    "name": "Octatriacontane (n-C38)",
    "formula": "C₃₈H₇₈",
    "composition": { "C": 38, "H": 78 },
    "molarMass": "535.03 g/mol",
    "category": "Paraffine",
    "summary": "Alcane à chaîne très longue.",
    "occurrence": "Pétroles lourds.",
    "applications": ["Industrie du bitume"]
  },
  {
    "name": "Tétracontane (n-C40)",
    "formula": "C₄₀H₈₂",
    "composition": { "C": 40, "H": 82 },
    "molarMass": "563.08 g/mol",
    "category": "Paraffine brute",
    "summary": "Consistance cireuse dure.",
    "occurrence": "Ozokérite.",
    "applications": ["Isolant électrique haute tension"]
  },
  {
    "name": "Pentatriacontane (n-C35)",
    "formula": "C₃₅H₇₂",
    "composition": { "C": 35, "H": 72 },
    "molarMass": "492.95 g/mol",
    "category": "Paraffine",
    "summary": "Trouvé dans les sédiments lacustres anciens.",
    "occurrence": "Géologie.",
    "applications": ["Paléoclimatologie (biomarqueur)"]
  },
  {
    "name": "Héptatriacontane (n-C37)",
    "formula": "C₃₇H₇₆",
    "composition": { "C": 37, "H": 76 },
    "molarMass": "521.00 g/mol",
    "category": "Paraffine",
    "summary": "Indicateur de température de surface de l'océan dans les archives marines.",
    "occurrence": "Algues haptophytes.",
    "applications": ["Océanographie"]
  },
  {
    "name": "Dodécyltriéthoxysilane",
    "formula": "C₁₈H₄₀O₃Si",
    "composition": { "C": 18, "H": 40, "O": 3, "Si": 1 },
    "molarMass": "332.60 g/mol",
    "category": "Agent de Couplage Silane",
    "summary": "Utilisé pour rendre les surfaces de béton hydrofuges.",
    "occurrence": "Synthétique.",
    "applications": ["Bâtiment (protection)"]
  },
  {
    "name": "Octadécyltrichlorosilane (OTS)",
    "formula": "C₁₈H₃₇Cl₃Si",
    "composition": { "C": 18, "H": 37, "Cl": 3, "Si": 1 },
    "molarMass": "387.93 g/mol",
    "category": "Agent de Surface",
    "summary": "Utilisé pour créer des monocouches auto-assemblées (SAMs) extrêmement hydrophobes.",
    "occurrence": "Synthétique.",
    "applications": ["Microfluidique", "Nanotechnologies"]
  },
  {
    "name": "Vinyltriméthoxysilane (VTMS)",
    "formula": "C₅H₁₂O₃Si",
    "composition": { "C": 5, "H": 12, "O": 3, "Si": 1 },
    "molarMass": "148.23 g/mol",
    "category": "Agent de Couplage",
    "summary": "Permet de lier chimiquement les polymères organiques aux surfaces inorganiques.",
    "occurrence": "Synthétique.",
    "applications": ["Câbles réticulés", "Adhésifs"]
  },
  {
    "name": "Chlorure de Gadolinium(III) Anhydre",
    "formula": "GdCl₃",
    "composition": { "Gd": 1, "Cl": 3 },
    "molarMass": "263.61 g/mol",
    "category": "Sel de Terre Rare",
    "summary": "Utilisé pour la production de gadolinium métallique et de matériaux magnétiques.",
    "occurrence": "Synthétique.",
    "applications": ["Recherche en magnétisme"]
  },
  {
    "name": "Fluorure d'Yttrium(III)",
    "formula": "YF₃",
    "composition": { "Y": 1, "F": 3 },
    "molarMass": "145.90 g/mol",
    "category": "Sel Inorganique",
    "summary": "Matériau pour les revêtements anti-reflets et les fibres optiques spéciales.",
    "occurrence": "Synthétique.",
    "applications": ["Optique infrarouge"]
  },
  {
    "name": "Fluorure de Lanthane(III)",
    "formula": "LaF₃",
    "composition": { "La": 1, "F": 3 },
    "molarMass": "195.90 g/mol",
    "category": "Électrolyte Solide",
    "summary": "Membrane sélective pour les électrodes à ions fluorure.",
    "occurrence": "Synthétique.",
    "applications": ["Électrodes spécifiques", "Lasers"]
  },
  {
    "name": "Cézidostat",
    "formula": "C₂₂H₂₁N₅O₃",
    "composition": { "C": 22, "H": 21, "N": 5, "O": 3 },
    "molarMass": "403.44 g/mol",
    "category": "Médicament (Inhibiteur HDAC)",
    "summary": "Inhibiteur sélectif de l'histone désacétylase en cours d'étude pour le cancer.",
    "occurrence": "Synthétique.",
    "applications": ["Oncologie (Recherche)"]
  },
  {
    "name": "Bexagliflozine",
    "formula": "C₂₄H₂₉ClO₇",
    "composition": { "C": 24, "H": 29, "Cl": 1, "O": 7 },
    "molarMass": "464.94 g/mol",
    "category": "Médicament (SGLT2)",
    "summary": "Utilisé pour améliorer le contrôle glycémique chez les adultes diabétiques de type 2.",
    "occurrence": "Synthétique.",
    "applications": ["Traitement du diabète"]
  },
  {
    "name": "Momélotinib",
    "formula": "C₂₃H₂₂N₆O",
    "composition": { "C": 23, "H": 22, "N": 6, "O": 1 },
    "molarMass": "398.46 g/mol",
    "category": "Inhibiteur JAK",
    "summary": "Approuvé en 2023 pour le traitement de la myélofibrose avec anémie.",
    "occurrence": "Synthétique.",
    "applications": ["Hématologie"]
  },
  {
    "name": "Quizaritinib",
    "formula": "C₂₉H₃₂N₆O₄S",
    "composition": { "C": 29, "H": 32, "N": 6, "O": 4, "S": 1 },
    "molarMass": "560.67 g/mol",
    "category": "Inhibiteur FLT3",
    "summary": "Utilisé dans la leucémie aiguë myéloïde (LAM).",
    "occurrence": "Synthétique.",
    "applications": ["Oncologie"]
  },
  {
    "name": "Lénacapavir",
    "formula": "C₂₅H₁₇F₁₀N₇O₃S",
    "composition": { "C": 25, "H": 17, "F": 10, "N": 7, "O": 3, "S": 1 },
    "molarMass": "685.50 g/mol",
    "category": "Inhibiteur de Capside",
    "summary": "Premier inhibiteur de la fonction de la capside du VIH à longue action.",
    "occurrence": "Synthétique.",
    "applications": ["Traitement du VIH multi-résistant"]
  },
  {
    "name": "Nirusevimab",
    "formula": "C₆₄₉₄H₁₀₀₈₄N₁₇₂₈O₂₀₃₆S₄₄",
    "composition": { "C": 6494, "H": 10084, "N": 1728, "O": 2036, "S": 44 },
    "molarMass": "146000.00 g/mol (approx)",
    "category": "Anticorps Monoclonal",
    "summary": "Prévention des infections des voies respiratoires inférieures par le VRS chez les nourrissons.",
    "occurrence": "Synthétique (Culture cellulaire).",
    "applications": ["Pédiatrie"]
  },
  {
    "name": "Trépulimène",
    "formula": "C₁₈H₂₀N₂S",
    "composition": { "C": 18, "H": 20, "N": 2, "S": 1 },
    "molarMass": "296.43 g/mol",
    "category": "Hétérocycle",
    "summary": "Lien rigide utilisé en chimie supramoléculaire.",
    "occurrence": "Synthétique.",
    "applications": ["Cages moléculaires"]
  },
  {
    "name": "Acide 1,3,5-Benzènetricarboxylique (Acide Trimésique)",
    "formula": "C₉H₆O₆",
    "composition": { "C": 9, "H": 6, "O": 6 },
    "molarMass": "210.14 g/mol",
    "category": "Acide Carboxylique Aromatique",
    "summary": "Brique de construction majeure pour les MOFs comme le HKUST-1.",
    "occurrence": "Synthétique.",
    "applications": ["Matériaux poreux", "Adsorption de gaz"]
  },
  {
    "name": "Héntricontane (n-C31)",
    "formula": "C₃₁H₆₄",
    "composition": { "C": 31, "H": 64 },
    "molarMass": "436.84 g/mol",
    "category": "Alcane",
    "summary": "Constituant de la cire de cuticule des plantes, utilisé comme traceur en écologie.",
    "occurrence": "Graminées.",
    "applications": ["Écologie (analyse des régimes alimentaires)"]
  },
  {
    "name": "Tritriacontane (n-C33)",
    "formula": "C₃₃H₆₈",
    "composition": { "C": 33, "H": 68 },
    "molarMass": "464.89 g/mol",
    "category": "Alcane",
    "summary": "Paraffine solide cireuse.",
    "occurrence": "Pétrole.",
    "applications": ["Cires industrielles"]
  },
  {
    "name": "Heptatriacontane (n-C37)",
    "formula": "C₃₇H₇₆",
    "composition": { "C": 37, "H": 76 },
    "molarMass": "521.00 g/mol",
    "category": "Alcane",
    "summary": "Longue chaîne hydrocarbonée stable.",
    "occurrence": "Sédiments marins.",
    "applications": ["Paléoclimatologie"]
  },
  {
    "name": "Untétracontane (n-C41)",
    "formula": "C₄₁H₈₄",
    "composition": { "C": 41, "H": 84 },
    "molarMass": "577.10 g/mol",
    "category": "Alcane",
    "summary": "Composant des bitumes lourds.",
    "occurrence": "Ozokérite.",
    "applications": ["Étanchéité"]
  },
  {
    "name": "Dotétracontane (n-C42)",
    "formula": "C₄₂H₈₆",
    "composition": { "C": 42, "H": 86 },
    "molarMass": "591.13 g/mol",
    "category": "Alcane",
    "summary": "Paraffine à point de fusion élevé.",
    "occurrence": "Paraffine microcristalline.",
    "applications": ["Cosmétiques (épaississant)"]
  },
  {
    "name": "Tritétracontane (n-C43)",
    "formula": "C₄₃H₈₈",
    "composition": { "C": 43, "H": 88 },
    "molarMass": "605.15 g/mol",
    "category": "Alcane",
    "summary": "Solide cireux inerte.",
    "occurrence": "Huiles lubrifiantes.",
    "applications": ["Protection anticorrosion"]
  },
  {
    "name": "Tétraméthylsilane (TMS)",
    "formula": "C₄H₁₂Si",
    "composition": { "C": 4, "H": 12, "Si": 1 },
    "molarMass": "88.22 g/mol",
    "category": "Standard RMN",
    "summary": "Référence interne standard pour la spectroscopie RMN (δ = 0 ppm).",
    "occurrence": "Synthétique.",
    "applications": ["Chimie analytique"]
  },
  {
    "name": "Tétrisopropylorthosilicate (TIPS)",
    "formula": "C₁₂H₂₈O₄Si",
    "composition": { "C": 12, "H": 28, "O": 4, "Si": 1 },
    "molarMass": "264.43 g/mol",
    "category": "Silicate",
    "summary": "Utilisé pour la fabrication de gels de silice de haute pureté.",
    "occurrence": "Synthétique.",
    "applications": ["Matériaux avancés"]
  },
  {
    "name": "Chlorure de Triméthylsilyle (TMSCl)",
    "formula": "C₃H₉ClSi",
    "composition": { "C": 3, "H": 9, "Cl": 1, "Si": 1 },
    "molarMass": "108.64 g/mol",
    "category": "Agent de Silylation",
    "summary": "Utilisé pour protéger les alcools et activer les carbonyles.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "Hexaméthyldisilazane (HMDS)",
    "formula": "C₆H₁₉NSi₂",
    "composition": { "C": 6, "H": 19, "N": 1, "Si": 2 },
    "molarMass": "161.39 g/mol",
    "category": "Agent de Silylation",
    "summary": "Utilisé comme agent de rendu hydrophobe et base forte.",
    "occurrence": "Synthétique.",
    "applications": ["Micro-électronique", "Chimie fine"]
  },
  {
    "name": "Dicyclohexyl-chlorophosphine",
    "formula": "C₁₂H₂₂ClP",
    "composition": { "C": 12, "H": 22, "Cl": 1, "P": 1 },
    "molarMass": "232.73 g/mol",
    "category": "Précurseur de Ligand",
    "summary": "Utilisé pour préparer des ligands de phosphine encombrés pour la catalyse.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie organométallique"]
  },
  {
    "name": "Tri(o-tolyl)phosphine",
    "formula": "C₂₁H₂₁P",
    "composition": { "C": 21, "H": 21, "P": 1 },
    "molarMass": "304.37 g/mol",
    "category": "Ligand",
    "summary": "Ligand phosphine encombré utilisé dans les couplages de Heck.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse homogène"]
  },
  {
    "name": "Tri(m-tolyl)phosphine",
    "formula": "C₂₁H₂₁P",
    "composition": { "C": 21, "H": 21, "P": 1 },
    "molarMass": "304.37 g/mol",
    "category": "Ligand",
    "summary": "Ligand pour l'hydroformylation.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie pétrochimique"]
  },
  {
    "name": "Tri(p-tolyl)phosphine",
    "formula": "C₂₁H₂₁P",
    "composition": { "C": 21, "H": 21, "P": 1 },
    "molarMass": "304.37 g/mol",
    "category": "Ligand",
    "summary": "Utilisé pour ajuster les propriétés électroniques des catalyseurs au palladium.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "1,2-Bis(diphénylphosphino)éthane (dppe)",
    "formula": "C₂₆H₂₄P₂",
    "composition": { "C": 26, "H": 24, "P": 2 },
    "molarMass": "398.42 g/mol",
    "category": "Ligand Bidenté",
    "summary": "Ligand chélateur formant des cycles à 5 chaînons stables avec les métaux.",
    "occurrence": "Synthétique.",
    "applications": ["Hydrogénation", "Oligomérisation"]
  },
  {
    "name": "1,3-Bis(diphénylphosphino)propane (dppp)",
    "formula": "C₂₇H₂₆P₂",
    "composition": { "C": 27, "H": 26, "P": 2 },
    "molarMass": "412.44 g/mol",
    "category": "Ligand Bidenté",
    "summary": "Ligand chélateur favorisant des angles de morsure plus larges.",
    "occurrence": "Synthétique.",
    "applications": ["Carbonylation"]
  },
  {
    "name": "1,4-Bis(diphénylphosphino)butane (dppb)",
    "formula": "C₂₈H₂₈P₂",
    "composition": { "C": 28, "H": 28, "P": 2 },
    "molarMass": "426.47 g/mol",
    "category": "Ligand",
    "summary": "Souvent utilisé avec le palladium pour les réactions de couplage.",
    "occurrence": "Synthétique.",
    "applications": ["Couplage croisé"]
  },
  {
    "name": "1,1'-Bis(diphénylphosphino)ferrocène (dppf)",
    "formula": "C₃₄H₂₈FeP₂",
    "composition": { "C": 34, "H": 28, "Fe": 1, "P": 2 },
    "molarMass": "554.38 g/mol",
    "category": "Ligand Ferrocénique",
    "summary": "Ligand bidenté robuste avec un angle de morsure important, idéal pour le couplage de Suzuki.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de médicaments"]
  },
  {
    "name": "Ligand de Trost (DACH-Phenyl)",
    "formula": "C₃₈H₃₄N₂O₂P₂",
    "composition": { "C": 38, "H": 34, "N": 2, "O": 2, "P": 2 },
    "molarMass": "612.64 g/mol",
    "category": "Ligand Chiral",
    "summary": "Ligand bidenté induisant une asymétrie lors de l'alkylation allylique.",
    "occurrence": "Synthétique.",
    "applications": ["Alkylation allylique asymétrique (AAA)"]
  },
  {
    "name": "(R,R)-DIOP",
    "formula": "C₃₁H₃₂O₂P₂",
    "composition": { "C": 31, "H": 32, "O": 2, "P": 2 },
    "molarMass": "498.53 g/mol",
    "category": "Ligand Chiral",
    "summary": "L'un des premiers ligands chiraux efficaces dérivé de l'acide tartrique.",
    "occurrence": "Synthétique.",
    "applications": ["Hydrogénation asymétrique"]
  },
  {
    "name": "(S,S)-Chiraphos",
    "formula": "C₂₈H₂₈P₂",
    "composition": { "C": 28, "H": 28, "P": 2 },
    "molarMass": "426.47 g/mol",
    "category": "Ligand Chiral",
    "summary": "Ligand bidenté avec deux centres stéréogènes sur le squelette.",
    "occurrence": "Synthétique.",
    "applications": ["Énantiosélectivité"]
  },
  {
    "name": "Inotersen",
    "formula": "C₂₃₀H₂₉₉N₆₈O₁₂₁P₂₀S₂₀",
    "composition": { "C": 230, "H": 299, "N": 68, "O": 121, "P": 20, "S": 20 },
    "molarMass": "7130.00 g/mol (approx)",
    "category": "Oligonucléotide Anti-sens",
    "summary": "Utilisé pour traiter la polyneuropathie causée par l'amylose héréditaire à transthyrétine.",
    "occurrence": "Synthétique.",
    "applications": ["Maladies rares"]
  },
  {
    "name": "Patisiran",
    "formula": "C₄₃₀H₅₄₈N₁₆₀O₂₉₀P₄₀",
    "composition": { "C": 430, "H": 548, "N": 160, "O": 290, "P": 40 },
    "molarMass": "13500.00 g/mol (approx)",
    "category": "siRNA",
    "summary": "Premier médicament à base d'ARN interférent approuvé par la FDA.",
    "occurrence": "Synthétique.",
    "applications": ["Thérapie génique"]
  },
  {
    "name": "Givosiran",
    "formula": "C₅₂₄H₆₉₄N₁₇₃O₃₁₆P₄₃S₆",
    "composition": { "C": 524, "H": 694, "N": 173, "O": 316, "P": 43, "S": 6 },
    "molarMass": "16300.00 g/mol (approx)",
    "category": "ARN Interférent",
    "summary": "Utilisé pour traiter la porphyrie hépatique aiguë.",
    "occurrence": "Synthétique.",
    "applications": ["Médecine de précision"]
  },
  {
    "name": "Inclisiran",
    "formula": "C₅₂₉H₆₉₅F₁₂N₁₇₆O₃₁₆P₄₃S₆",
    "composition": { "C": 529, "H": 695, "F": 12, "N": 176, "O": 316, "P": 43, "S": 6 },
    "molarMass": "17200.00 g/mol (approx)",
    "category": "siRNA conjugué",
    "summary": "Utilisé pour réduire le taux de cholestérol LDL en ciblant la PCSK9.",
    "occurrence": "Synthétique.",
    "applications": ["Cardiologie"]
  },
  {
    "name": "Catalyseur de Shvo",
    "formula": "C₂₅H₁₉O₉Ru₂",
    "composition": { "C": 25, "H": 19, "O": 9, "Ru": 2 },
    "molarMass": "664.55 g/mol",
    "category": "Catalyseur d'Hydrogénation",
    "summary": "Catalyseur de transfert d'hydrogène hautement efficace et chimiosélectif.",
    "occurrence": "Synthétique.",
    "applications": ["Réduction de carbonyles", "Déshydrogénation"]
  },
  {
    "name": "Dicarbonyl-chloro-ruthénium(II) dimère",
    "formula": "C₄Cl₂O₄Ru₂",
    "composition": { "C": 4, "Cl": 2, "O": 4, "Ru": 2 },
    "molarMass": "455.10 g/mol",
    "category": "Complexe Organométallique",
    "summary": "Précurseur pour la synthèse d'autres complexes de ruthénium carbonyle.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie de coordination"]
  },
  {
    "name": "Dichlorotris(triphénylphosphine)ruthénium(II)",
    "formula": "C₅₄H₄₅Cl₂P₃Ru",
    "composition": { "C": 54, "H": 45, "Cl": 2, "P": 3, "Ru": 1 },
    "molarMass": "958.83 g/mol",
    "category": "Catalyseur",
    "summary": "Catalyseur standard pour l'hydrogénation d'alcènes et d'alcynes.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique industrielle"]
  },
  {
    "name": "Chlorure de Ru(bpy)3 tetrahydraté",
    "formula": "C₃₀H₂₄Cl₂N₆Ru · 4H₂O",
    "composition": { "C": 30, "H": 32, "Cl": 2, "N": 6, "O": 4, "Ru": 1 },
    "molarMass": "712.59 g/mol",
    "category": "Photocatalyseur",
    "summary": "Utilisé en photo-redox et pour la conversion d'énergie solaire.",
    "occurrence": "Synthétique.",
    "applications": ["Cellules solaires à colorant"]
  },
  {
    "name": "Réactif de PhenoFluor",
    "formula": "C₁₉H₂₀F₂N₂",
    "composition": { "C": 19, "H": 20, "F": 2, "N": 2 },
    "molarMass": "314.37 g/mol",
    "category": "Agent de Fluoration",
    "summary": "Réactif moderne pour la désoxyfluoration des phénols.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de médicaments fluorés"]
  },
  {
    "name": "Réactif de PyFluor",
    "formula": "C₅H₄FN₂O₂S⁻",
    "composition": { "C": 5, "H": 4, "F": 1, "N": 2, "O": 2, "S": 1 },
    "molarMass": "191.16 g/mol",
    "category": "Agent de Fluoration",
    "summary": "Agent de fluoration stable et peu coûteux.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie fine"]
  },
  {
    "name": "Oxyde de Lutetium(III)",
    "formula": "Lu₂O₃",
    "composition": { "Lu": 2, "O": 3 },
    "molarMass": "397.94 g/mol",
    "category": "Oxyde de Terre Rare",
    "summary": "Utilisé dans les scintillateurs pour l'imagerie par émission de positons (TEP).",
    "occurrence": "Xénotime.",
    "applications": ["Imagerie médicale de pointe"]
  },
  {
    "name": "Sulfonate de Perfluorobutane (PFBS)",
    "formula": "C₄F₉O₃S⁻",
    "composition": { "C": 4, "F": 9, "O": 3, "S": 1 },
    "molarMass": "299.09 g/mol",
    "category": "Surfactant",
    "summary": "Alternative moins persistante au PFOS pour les traitements de surface.",
    "occurrence": "Synthétique.",
    "applications": ["Imperméabilisation textiles"]
  },
  {
    "name": "Oxyde de Holmium(III)",
    "formula": "Ho₂O₃",
    "composition": { "Ho": 2, "O": 3 },
    "molarMass": "377.86 g/mol",
    "category": "Oxyde",
    "summary": "Utilisé comme standard de calibration en spectroscopie UV-Vis.",
    "occurrence": "Gadolinium-holmium ores.",
    "applications": ["Spectroscopie", "Lasers infrarouge"]
  },
  {
    "name": "Chlorure d'Erbium(III)",
    "formula": "ErCl₃",
    "composition": { "Er": 1, "Cl": 3 },
    "molarMass": "273.62 g/mol",
    "category": "Sel de Terre Rare",
    "summary": "Utilisé pour la fabrication d'amplificateurs optiques à fibre (EDFA).",
    "occurrence": "Minerais de lanthanides.",
    "applications": ["Télécommunications par fibre optique"]
  },
  {
    "name": "Céftizoxime",
    "formula": "C₁₃H₁₃N₅O₅S₂",
    "composition": { "C": 13, "H": 13, "N": 5, "O": 5, "S": 2 },
    "molarMass": "383.40 g/mol",
    "category": "Céphalosporine",
    "summary": "Antibiotique de troisième génération à large spectre.",
    "occurrence": "Synthétique.",
    "applications": ["Antibiothérapie"]
  },
  {
    "name": "Téroturbuline",
    "formula": "C₁₈H₂₂O₂",
    "composition": { "C": 18, "H": 22, "O": 2 },
    "molarMass": "270.37 g/mol",
    "category": "Fragrance",
    "summary": "Molécule à l'odeur boisée-ambrée très balsamique.",
    "occurrence": "Synthétique.",
    "applications": ["Parfumerie"]
  },
  {
    "name": "L-Sélénoéthionine",
    "formula": "C₆H₁₃NO₂Se",
    "composition": { "C": 6, "H": 13, "N": 1, "O": 2, "Se": 1 },
    "molarMass": "210.13 g/mol",
    "category": "Acide Aminé Sélénié",
    "summary": "Analogue sélénié de l'éthionine utilisé en recherche métabolique.",
    "occurrence": "Laboratoire.",
    "applications": ["Biochimie"]
  },
  {
    "name": "Ebselen",
    "formula": "C₁₃H₉NOSe",
    "composition": { "C": 13, "H": 9, "N": 1, "O": 1, "Se": 1 },
    "molarMass": "274.18 g/mol",
    "category": "Composé Organosélénié",
    "summary": "Molécule mimant l'activité de la glutathion peroxydase, antioxydant puissant.",
    "occurrence": "Synthétique.",
    "applications": ["Neuroprotection (Études clinique)"]
  },
  {
    "name": "Sélénite de Sodium Anhydre",
    "formula": "Na₂SeO₃",
    "composition": { "Na": 2, "Se": 1, "O": 3 },
    "molarMass": "172.94 g/mol",
    "category": "Sel de Sélénium",
    "summary": "Source de sélénium biodisponible.",
    "occurrence": "Chimie inorganique.",
    "applications": ["Compléments alimentaires", "Industrie du verre (décolorant)"]
  },
  {
    "name": "Héxacosane (n-C26)",
    "formula": "C₂₆H₅₄",
    "composition": { "C": 26, "H": 54 },
    "molarMass": "366.71 g/mol",
    "category": "Alcane linéaire",
    "summary": "Trouvé dans la cire des aiguilles de pin.",
    "occurrence": "Conifères.",
    "applications": ["Écologie chimique"]
  },
  {
    "name": "Hentricontane (n-C31)",
    "formula": "C₃₁H₆₄",
    "composition": { "C": 31, "H": 64 },
    "molarMass": "436.84 g/mol",
    "category": "Paraffine",
    "summary": "Trouvé dans les sédiments anciens comme indicateurs de végétation terrestre.",
    "occurrence": "Géologie.",
    "applications": ["Paléoécologie"]
  },
  {
    "name": "Tétraphtalaldéhyde",
    "formula": "C₈H₆O₂",
    "composition": { "C": 8, "H": 6, "O": 2 },
    "molarMass": "134.13 g/mol",
    "category": "Intermédiaire de synthèse",
    "summary": "Utilisé pour former des bases de Schiff multidentées.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie supramoléculaire"]
  },
  {
    "name": "Isocyanurate de Triéthyle",
    "formula": "C₉H₁₅N₃O₃",
    "composition": { "C": 9, "H": 15, "N": 3, "O": 3 },
    "molarMass": "213.23 g/mol",
    "category": "Isocyanurate",
    "summary": "Additif pour les résines époxy haute performance.",
    "occurrence": "Synthétique.",
    "applications": ["Matériaux isolants"]
  },
  {
    "name": "Tétrakis(acétonitrile)cuivre(I) hexafluorophosphate",
    "formula": "C₈H₁₂CuF₆NP",
    "composition": { "C": 8, "H": 12, "Cu": 1, "F": 6, "N": 1, "P": 1 },
    "molarMass": "372.71 g/mol",
    "category": "Complexe de Cuivre",
    "summary": "Source de cuivre(I) soluble pour la Click Chemistry et l'arylation.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse organique"]
  },
  {
    "name": "Nonacarbonyle de difer",
    "formula": "Fe₂O₉C₉",
    "composition": { "Fe": 2, "C": 9, "O": 9 },
    "molarMass": "363.78 g/mol",
    "category": "Métal Carbonyle",
    "summary": "Source de fer(0) plus réactive que le pentacarbonyle, solide orange.",
    "occurrence": "Synthétique (par photolyse).",
    "applications": ["Désulfuration", "Synthèse organique"]
  },
  {
    "name": "Dodécacarbonyle de trifer",
    "formula": "Fe₃O₁₂C₁₂",
    "composition": { "Fe": 3, "C": 12, "O": 12 },
    "molarMass": "503.66 g/mol",
    "category": "Métal Carbonyle",
    "summary": "Cluster métallique vert foncé utilisé pour l'activation de CO.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse de clusters"]
  },
  {
    "name": "Dodécacarbonyle de triruthénium",
    "formula": "Ru₃O₁₂C₁₂",
    "composition": { "Ru": 3, "C": 12, "O": 12 },
    "molarMass": "639.33 g/mol",
    "category": "Métal Carbonyle",
    "summary": "Précurseur de choix pour la synthèse de complexes de ruthénium polynucléaires.",
    "occurrence": "Synthétique.",
    "applications": ["Carbonylation sélective"]
  },
  {
    "name": "Dodécacarbonyle de triosmium",
    "formula": "Os₃O₁₂C₁₂",
    "composition": { "Os": 3, "C": 12, "O": 12 },
    "molarMass": "906.72 g/mol",
    "category": "Métal Carbonyle",
    "summary": "Solide jaune très stable thermiquement.",
    "occurrence": "Synthétique.",
    "applications": ["Étude des clusters métalliques"]
  },
  {
    "name": "Chlorure de Triéthylbenzylammonium (TEBAC)",
    "formula": "C₁₃H₂₂ClN",
    "composition": { "C": 13, "H": 22, "Cl": 1, "N": 1 },
    "molarMass": "227.77 g/mol",
    "category": "Catalyseur de Transfert de Phase",
    "summary": "Utilisé pour favoriser les réactions entre phases non-miscibles.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique industrielle"]
  },
  {
    "name": "Chlorure de Méthyltrioctylammonium (Aliquat 336)",
    "formula": "C₂₅H₅₄ClN",
    "composition": { "C": 25, "H": 54, "Cl": 1, "N": 1 },
    "molarMass": "404.16 g/mol",
    "category": "Catalyseur liquide",
    "summary": "Catalyseur de transfert de phase liquide à température ambiante, très efficace.",
    "occurrence": "Synthétique.",
    "applications": ["Extraction de métaux", "Synthèse organique"]
  },
  {
    "name": "Chlorure de Tétracétylpyridinium",
    "formula": "C₂₁H₃₈ClN",
    "composition": { "C": 21, "H": 38, "Cl": 1, "N": 1 },
    "molarMass": "339.99 g/mol",
    "category": "Tensioactif",
    "summary": "Agent antiseptique et tensioactif cationique.",
    "occurrence": "Synthétique.",
    "applications": ["Hygiène buccale", "Cosmétiques"]
  },
  {
    "name": "Tétraphtalate de Diméthyle",
    "formula": "C₁₀H₁₀O₄",
    "composition": { "C": 10, "H": 10, "O": 4 },
    "molarMass": "194.18 g/mol",
    "category": "Ester Aromatique",
    "summary": "Intermédiaire pour la production de fibres polyester PET.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie textile", "Films plastiques"]
  },
  {
    "name": "2,5-Furandicarboxylate de diméthyle",
    "formula": "C₈H₈O₅",
    "composition": { "C": 8, "H": 8, "O": 5 },
    "molarMass": "184.15 g/mol",
    "category": "Monomère Bio-sourcé",
    "summary": "Alternative durable au téréphtalate de diméthyle pour les plastiques PEF.",
    "occurrence": "Dérivé de la biomasse.",
    "applications": ["Emballages biodégradables"]
  },
  {
    "name": "Isosorbide",
    "formula": "C₆H₁₀O₄",
    "composition": { "C": 6, "H": 10, "O": 4 },
    "molarMass": "146.14 g/mol",
    "category": "Polyol bio-sourcé",
    "summary": "Diol cyclique rigide dérivé du sorbitol.",
    "occurrence": "Amidon.",
    "applications": ["Polymères de spécialité", "Pharmacie"]
  },
  {
    "name": "Éthanoate de Linalyle",
    "formula": "C₁₂H₂₀O₂",
    "composition": { "C": 12, "H": 20, "O": 2 },
    "molarMass": "196.29 g/mol",
    "category": "Ester de Terpène",
    "summary": "Composant majeur de l'huile essentielle de lavande.",
    "occurrence": "Lavande, Bergamote.",
    "applications": ["Parfumerie (Note florale)"]
  },
  {
    "name": "Phénylacétate d'Éthyle",
    "formula": "C₁₀H₁₂O₂",
    "composition": { "C": 10, "H": 12, "O": 2 },
    "molarMass": "164.20 g/mol",
    "category": "Ester",
    "summary": "Odeur de miel et de rose intense.",
    "occurrence": "Miel.",
    "applications": ["Arôme alimentaire"]
  },
  {
    "name": "L-Séléno-cystine",
    "formula": "C₆H₁₂N₂O₄Se₂",
    "composition": { "C": 6, "H": 12, "N": 2, "O": 4, "Se": 2 },
    "molarMass": "334.10 g/mol",
    "category": "Acide Aminé sélénié",
    "summary": "Forme disulfure (diséléniure) de la sélénocystéine.",
    "occurrence": "Plantes accumulatrices de sélénium.",
    "applications": ["Compléments nutritionnels"]
  },
  {
    "name": "Tétraméthyl-ammonium triacétoxyborohydrure",
    "formula": "C₁₀H₂₂BNO₆",
    "composition": { "C": 10, "H": 22, "B": 1, "N": 1, "O": 6 },
    "molarMass": "263.10 g/mol",
    "category": "Agent Réducteur",
    "summary": "Agent réducteur doux et sélectif pour les aminations réductrices.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique"]
  },
  {
    "name": "Chlorure de Choline",
    "formula": "C₅H₁₄ClNO",
    "composition": { "C": 5, "H": 14, "Cl": 1, "N": 1, "O": 1 },
    "molarMass": "139.62 g/mol",
    "category": "Nutriment essentiel",
    "summary": "Précurseur de l'acétylcholine et composant des phospholipides.",
    "occurrence": "Viande, Œufs.",
    "applications": ["Additif alimentaire pour bétail", "Soutien cognitif"]
  },
  {
    "name": "Octaborate de Disodium Tétrahydraté",
    "formula": "Na₂B₈O₁₃ · 4H₂O",
    "composition": { "Na": 2, "B": 8, "O": 17, "H": 8 },
    "molarMass": "412.52 g/mol",
    "category": "Borate",
    "summary": "Utilisé comme engrais boré et retardateur de flamme.",
    "occurrence": "Synthétique.",
    "applications": ["Agriculture", "Ignifugation du bois"]
  },
  {
    "name": "Hélicène [7]",
    "formula": "C₃₀H₁₈",
    "composition": { "C": 30, "H": 18 },
    "molarMass": "378.46 g/mol",
    "category": "Hydrocarbure Aromatique polycyclique",
    "summary": "Molécule chirale présentant un chevauchement des anneaux terminaux.",
    "occurrence": "Synthétique.",
    "applications": ["Matériaux optiquement actifs"]
  },
  {
    "name": "Sélénocyanate de Potassium",
    "formula": "KSeCN",
    "composition": { "K": 1, "Se": 1, "C": 1, "N": 1 },
    "molarMass": "144.07 g/mol",
    "category": "Sel Inorganique",
    "summary": "Source d'ions sélénocyanates pour la synthèse organique.",
    "occurrence": "Synthétique.",
    "applications": ["Préparation de séléniures"]
  },
  {
    "name": "Acide 1,2,4,5-Benzènetétracarboxylique (Acide Pyromellitique)",
    "formula": "C₁₀H₆O₈",
    "composition": { "C": 10, "H": 6, "O": 8 },
    "molarMass": "254.15 g/mol",
    "category": "Acide Carboxylique Aromatique",
    "summary": "Utilisé pour la fabrication de polymères polyimides thermostables.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie des plastiques"]
  },
  {
    "name": "Anhydride Pyromellitique (PMDA)",
    "formula": "C₁₀H₂O₆",
    "composition": { "C": 10, "H": 2, "O": 6 },
    "molarMass": "218.12 g/mol",
    "category": "Anhydride",
    "summary": "Monomère clé pour le Kapton (film polyimide utilisé en aérospatial).",
    "occurrence": "Synthétique.",
    "applications": ["Électronique spatiale", "Isolation"]
  },
  {
    "name": "Mandyphos (Ligand Chiral Ferrocénique)",
    "formula": "C₄₂H₄₆FeP₂",
    "composition": { "C": 42, "H": 46, "Fe": 1, "P": 2 },
    "molarMass": "668.61 g/mol",
    "category": "Ligand Chiral",
    "summary": "Ligand bidenté ferrocénique utilisé pour l'hydrogénation asymétrique de substrats fonctionnalisés.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie pharmaceutique"]
  },
  {
    "name": "Josiphos (Ligand [R,S])",
    "formula": "C₃₆H₄₄FeP₂",
    "composition": { "C": 36, "H": 44, "Fe": 1, "P": 2 },
    "molarMass": "594.53 g/mol",
    "category": "Ligand Chiral",
    "summary": "Ligand privilégié pour de nombreuses catalyses asymétriques industrielles.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse d'herbicides (Metolachlor)"]
  },
  {
    "name": "Walphos",
    "formula": "C₃₈H₄₀FeP₂",
    "composition": { "C": 38, "H": 40, "Fe": 1, "P": 2 },
    "molarMass": "614.52 g/mol",
    "category": "Ligand Chiral",
    "summary": "Analogue du Josiphos avec une structure tridimensionnelle modifiée pour une meilleure induction.",
    "occurrence": "Synthétique.",
    "applications": ["Hydrogénation énantiosélective"]
  },
  {
    "name": "Taniaphos",
    "formula": "C₄₄H₄₂FeP₂",
    "composition": { "C": 44, "H": 42, "Fe": 1, "P": 2 },
    "molarMass": "688.60 g/mol",
    "category": "Ligand Chiral",
    "summary": "Ligand de type ferrocényl-phosphine-amine.",
    "occurrence": "Synthétique.",
    "applications": ["Réactions de couplage asymétrique"]
  },
  {
    "name": "Réactifs de Phosphoramidite (dT-PA)",
    "formula": "C₄₀H₄₉N₄O₈P",
    "composition": { "C": 40, "H": 49, "N": 4, "O": 8, "P": 1 },
    "molarMass": "744.81 g/mol",
    "category": "Précurseur d'ADN",
    "summary": "Brique de construction protégée pour la synthèse automatique d'oligonucléotides.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de gènes", "Outils CRISPR"]
  },
  {
    "name": "Cyanure d'Argent",
    "formula": "AgCN",
    "composition": { "Ag": 1, "C": 1, "N": 1 },
    "molarMass": "133.89 g/mol",
    "category": "Sel Inorganique",
    "summary": "Utilisé pour l'argentage électrolytique et comme réactif en chimie organique.",
    "occurrence": "Synthétique.",
    "applications": ["Galvanoplastie"]
  },
  {
    "name": "Cyanure de Cuivre(I)",
    "formula": "CuCN",
    "composition": { "Cu": 1, "C": 1, "N": 1 },
    "molarMass": "89.56 g/mol",
    "category": "Halogénure Infecte",
    "summary": "Utilisé pour introduire des groupements nitriles dans les aromatiques (Réaction de Rosenmund-von Braun).",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de nitriles"]
  },
  {
    "name": "Acide 4-Nitrophénylboronique",
    "formula": "C₆H₆BNO₄",
    "composition": { "C": 6, "H": 6, "B": 1, "N": 1, "O": 4 },
    "molarMass": "166.93 g/mol",
    "category": "Acide Boronique",
    "summary": "Acide boronique fortement activé utilisé en électronique organique.",
    "occurrence": "Synthétique.",
    "applications": ["Diodes électroluminescentes (OLED)"]
  },
  {
    "name": "Chlorure de Ru(cod)(2-methylallyl)2",
    "formula": "C₁₆H₂₆Ru",
    "composition": { "C": 16, "H": 26, "Ru": 1 },
    "molarMass": "319.45 g/mol",
    "category": "Complexe Organométallique",
    "summary": "Source propre de ruthénium(II) pour la catalyse homogène.",
    "occurrence": "Synthétique.",
    "applications": ["Hydrogénation"]
  },
  {
    "name": "Toluène-2,4-diisocyanate (TDI)",
    "formula": "C₉H₆N₂O₂",
    "composition": { "C": 9, "H": 6, "N": 2, "O": 2 },
    "molarMass": "174.16 g/mol",
    "category": "Isocyanate",
    "summary": "Réactif majeur pour la production de mousses de polyuréthane souples.",
    "occurrence": "Synthétique.",
    "applications": ["Matelas", "Sièges automobiles"]
  },
  {
    "name": "Méthylènediphényl diisocyanate (MDI)",
    "formula": "C₁₅H₁₀N₂O₂",
    "composition": { "C": 15, "H": 10, "N": 2, "O": 2 },
    "molarMass": "250.25 g/mol",
    "category": "Isocyanate",
    "summary": "Utilisé pour les polyuréthanes rigides et les colles de haute résistance.",
    "occurrence": "Synthétique.",
    "applications": ["Isolation thermique", "Construction"]
  },
  {
    "name": "Isophorone de Diisocyanate (IPDI)",
    "formula": "C₁₂H₁₈N₂O₂",
    "composition": { "C": 12, "H": 18, "N": 2, "O": 2 },
    "molarMass": "222.28 g/mol",
    "category": "Isocyanate Aliphatique",
    "summary": "Utilisé pour les revêtements extérieurs stables aux UV.",
    "occurrence": "Synthétique.",
    "applications": ["Peintures pour avions", "Vêtements techniques"]
  },
  {
    "name": "Hexaméthylène diisocyanate (HDI)",
    "formula": "C₈H₁₂N₂O₂",
    "composition": { "C": 8, "H": 12, "N": 2, "O": 2 },
    "molarMass": "168.19 g/mol",
    "category": "Isocyanate",
    "summary": "Utilisé pour les laques automobiles de haute qualité.",
    "occurrence": "Synthétique.",
    "applications": ["Revêtements anticorrosion"]
  },
  {
    "name": "Acétate de Benzyle",
    "formula": "C₉H₁₀O₂",
    "composition": { "C": 9, "H": 10, "O": 2 },
    "molarMass": "150.17 g/mol",
    "category": "Ester",
    "summary": "Note de jasmin fruitée caractéristique.",
    "occurrence": "Jasmin, Gardénia.",
    "applications": ["Parfumerie", "Arômes de bonbons"]
  },
  {
    "name": "Salicylate de Benzyle",
    "formula": "C₁₄H₁₂O₃",
    "composition": { "C": 14, "H": 12, "O": 3 },
    "molarMass": "228.24 g/mol",
    "category": "Ester",
    "summary": "Agent fixateur avec une odeur florale douce.",
    "occurrence": "Ylang-Ylang.",
    "applications": ["Parfums solaires", "Filtres UV (historique)"]
  },
  {
    "name": "Benzoate de Benzyle",
    "formula": "C₁₄H₁₂O₂",
    "composition": { "C": 14, "H": 12, "O": 2 },
    "molarMass": "212.24 g/mol",
    "category": "Ester / Antiparasitaire",
    "summary": "Utilisé comme solvant pour les muscs nitrés et traitement contre la gale.",
    "occurrence": "Baume du Pérou.",
    "applications": ["Pharmacie", "Fixateur de parfum"]
  },
  {
    "name": "Formiate de Géranyle",
    "formula": "C₁₁H₁₈O₂",
    "composition": { "C": 11, "H": 18, "O": 2 },
    "molarMass": "182.26 g/mol",
    "category": "Ester",
    "summary": "Odeur de rose et de géranium avec une note d'herbe coupée.",
    "occurrence": "Géranium.",
    "applications": ["Compositions florales"]
  },
  {
    "name": "Acétate de Géranyle",
    "formula": "C₁₂H₂₀O₂",
    "composition": { "C": 12, "H": 20, "O": 2 },
    "molarMass": "196.29 g/mol",
    "category": "Ester de Terpène",
    "summary": "Arôme de rose fruité, présent dans de nombreuses huiles essentielles.",
    "occurrence": "Citronnelle, Coriandre.",
    "applications": ["Parfumerie", "Arôme de crème glacée"]
  },
  {
    "name": "Butanoate d'Éthyle",
    "formula": "C₆H₁₂O₂",
    "composition": { "C": 6, "H": 12, "O": 2 },
    "molarMass": "116.16 g/mol",
    "category": "Ester",
    "summary": "Odeur caractéristique d'ananas.",
    "occurrence": "Ananas.",
    "applications": ["Arômes alimentaires"]
  },
  {
    "name": "2-Methylbutanoate d'Ethyle",
    "formula": "C₇H₁₄O₂",
    "composition": { "C": 7, "H": 14, "O": 2 },
    "molarMass": "130.18 g/mol",
    "category": "Ester",
    "summary": "Note fruitée de pomme et de fraise.",
    "occurrence": "Pomme.",
    "applications": ["Boissons aromatisées"]
  },
  {
    "name": "BrettPhos G3 (Catalyseur de Buchwald)",
    "formula": "C₄₃H₆₇N₂O₅P · CH₃SO₃H",
    "composition": { "C": 44, "H": 71, "N": 2, "O": 8, "P": 1, "S": 1 },
    "molarMass": "802.04 g/mol",
    "category": "Catalyseur de Couplage",
    "summary": "Pré-catalyseur de 3ème génération permettant des arylations à des charges très basses.",
    "occurrence": "Synthétique.",
    "applications": ["Couplage C-N", "Chimie médicinale"]
  },
  {
    "name": "t-BuXPhos G3",
    "formula": "C₂₉H₄₆O₃PS",
    "composition": { "C": 29, "H": 46, "O": 3, "P": 1, "S": 1 },
    "molarMass": "505.71 g/mol",
    "category": "Catalyseur de Couplage",
    "summary": "Utilisé pour les couplages de Suzuki et d'arylation d'urées.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse de polymères conducteurs"]
  },
  {
    "name": "RuPhos G3",
    "formula": "C₃₀H₄₈O₃PS",
    "composition": { "C": 30, "H": 48, "O": 3, "P": 1, "S": 1 },
    "molarMass": "519.74 g/mol",
    "category": "Catalyseur",
    "summary": "Excellent pour le couplage de Suzuki-Miyaura avec des borates instables.",
    "occurrence": "Synthétique.",
    "applications": ["Agrochimie"]
  },
  {
    "name": "Chlorure de Tris(diméthylamino)sulfonium triméthylsilyldifluorosilicate (TASF)",
    "formula": "C₉H₂₇F₂N₃SSi",
    "composition": { "C": 9, "H": 27, "F": 2, "N": 3, "S": 1, "Si": 1 },
    "molarMass": "275.48 g/mol",
    "category": "Source de Fluorure",
    "summary": "Source de fluorure anhydre et douce pour la déprotection des silanes.",
    "occurrence": "Synthétique.",
    "applications": ["Synthèse organique totale"]
  },
  {
    "name": "Dichlorotris(triphénylphosphine)ruthénium(II)",
    "formula": "C₅₄H₄₅Cl₂P₃Ru",
    "composition": { "C": 54, "H": 45, "Cl": 2, "P": 3, "Ru": 1 },
    "molarMass": "958.83 g/mol",
    "category": "Catalyseur",
    "summary": "Idéal pour l'hydrogénation d'alcènes en présence d'autres fonctions sensibles.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie fine"]
  },
  {
    "name": "Complex de Vaska",
    "formula": "C₃₇H₃₀ClIrOP₂",
    "composition": { "C": 37, "H": 30, "Cl": 1, "Ir": 1, "O": 1, "P": 2 },
    "molarMass": "780.25 g/mol",
    "category": "Complexe Organométallique",
    "summary": "Complexe d'iridium(I) plan carré célèbre pour sa capacité à additionner réversiblement l'oxygène.",
    "occurrence": "Synthétique.",
    "applications": ["Modèle d'activation de petits ligands"]
  },
  {
    "name": "Fumagilline",
    "formula": "C₂₆H₃₄O₇",
    "composition": { "C": 26, "H": 34, "O": 7 },
    "molarMass": "458.54 g/mol",
    "category": "Antibiotique / Antifongique",
    "summary": "Agent anti-angiogénique puissant et traitement contre la nosémose des abeilles.",
    "occurrence": "Aspergillus fumigatus.",
    "applications": ["Apiculture", "Recherche oncologique"]
  },
  {
    "name": "Gémivonertinib",
    "formula": "C₂₄H₂₃F₃N₆O₃",
    "composition": { "C": 24, "H": 23, "F": 3, "N": 6, "O": 3 },
    "molarMass": "500.47 g/mol",
    "category": "Inhibiteur de kinase",
    "summary": "Inhibiteur sélectif de l'EGFR de troisième génération.",
    "occurrence": "Synthétique.",
    "applications": ["Oncologie"]
  },
  {
    "name": "Bénivonertinib",
    "formula": "C₂₃H₂₂N₆O",
    "composition": { "C": 23, "H": 22, "N": 6, "O": 1 },
    "molarMass": "398.46 g/mol",
    "category": "Médicament",
    "summary": "Traitement potentiel des lymphomes à cellules B.",
    "occurrence": "Synthétique.",
    "applications": ["Hématologie"]
  },
  {
    "name": "Dépégatrastat",
    "formula": "C₁₈H₂₁N₅O₄",
    "composition": { "C": 18, "H": 21, "N": 5, "O": 4 },
    "molarMass": "371.39 g/mol",
    "category": "Inhibiteur d'enzyme",
    "summary": "Inhibiteur de la neuraminidase en cours d'évaluation clinique.",
    "occurrence": "Synthétique.",
    "applications": ["Virologie"]
  },
  {
    "name": "L-Fudéistine",
    "formula": "C₂₀H₂₅N₃O₅",
    "composition": { "C": 20, "H": 25, "N": 3, "O": 5 },
    "molarMass": "387.43 g/mol",
    "category": "Produit Naturel",
    "summary": "Agent immunomodulateur dérivé d'éponges marines.",
    "occurrence": "Porifera.",
    "applications": ["Immunothérapie"]
  },
  {
    "name": "Sultiam",
    "formula": "C₁₀H₁₄N₂O₄S₂",
    "composition": { "C": 10, "H": 14, "N": 2, "O": 4, "S": 2 },
    "molarMass": "290.36 g/mol",
    "category": "Anticonvulsivant",
    "summary": "Inhibiteur de l'anhydrase carbonique utilisé dans l'épilepsie bénigne de l'enfance.",
    "occurrence": "Synthétique.",
    "applications": ["Neurologie"]
  },
  {
    "name": "Tolfénamate de Sodium",
    "formula": "C₁₄H₁₁ClFNO₂Na",
    "composition": { "C": 14, "H": 11, "Cl": 1, "F": 1, "N": 1, "O": 2, "Na": 1 },
    "molarMass": "319.69 g/mol",
    "category": "AINS",
    "summary": "Anti-inflammatoire non stéroïdien utilisé pour les migraines aiguës.",
    "occurrence": "Synthétique.",
    "applications": ["Traitement de la douleur"]
  },
  {
    "name": "N-Dodécyl-2-pyrrolidone (DDP)",
    "formula": "C₁₆H₃₁NO",
    "composition": { "C": 16, "H": 31, "N": 1, "O": 1 },
    "molarMass": "253.42 g/mol",
    "category": "Solvant / Pénétrant",
    "summary": "Utilisé pour améliorer la pénétration cutanée des principes actifs.",
    "occurrence": "Synthétique.",
    "applications": ["Dermatologie", "Agrochimie"]
  },
  {
    "name": "2-Heptylcyclopentanone",
    "formula": "C₁₂H₂₂O",
    "composition": { "C": 12, "H": 22, "O": 1 },
    "molarMass": "182.30 g/mol",
    "category": "Fragrance",
    "summary": "Odeur de jasmin herbeuse et fruitée.",
    "occurrence": "Synthétique.",
    "applications": ["Parfumerie pour produits ménagers"]
  },
  {
    "name": "Octanoate de Linalyle",
    "formula": "C₁₈H₃₂O₂",
    "composition": { "C": 18, "H": 32, "O": 2 },
    "molarMass": "280.45 g/mol",
    "category": "Ester",
    "summary": "Note florale grasse et fruitée.",
    "occurrence": "Synthétique.",
    "applications": ["Parfumerie"]
  },
  {
    "name": "Tétracosane (n-C24)",
    "formula": "C₂₄H₅₀",
    "composition": { "C": 24, "H": 50 },
    "molarMass": "338.65 g/mol",
    "category": "Alcane",
    "summary": "Présent dans la cire des abeilles sauvages.",
    "occurrence": "Insectes.",
    "applications": ["Entomologie chimique"]
  },
  {
    "name": "Octacosane (n-C28)",
    "formula": "C₂₈H₅₈",
    "composition": { "C": 28, "H": 58 },
    "molarMass": "394.76 g/mol",
    "category": "Alcane",
    "summary": "Composant majeur de la cire de canne à sucre.",
    "occurrence": "Végétal.",
    "applications": ["Industrie alimentaire"]
  },
  {
    "name": "Tricontane (n-C30)",
    "formula": "C₃₀H₆₂",
    "composition": { "C": 30, "H": 62 },
    "molarMass": "422.81 g/mol",
    "category": "Alcane de cire",
    "summary": "Hydrocarbure solide utilisé pour augmenter le point de ramollissement des paraffines.",
    "occurrence": "Pétrole.",
    "applications": ["Polissage de précision"]
  },
  {
    "name": "Tétratriacontane (n-C34)",
    "formula": "C₃₄H₇₀",
    "composition": { "C": 34, "H": 70 },
    "molarMass": "478.92 g/mol",
    "category": "Paraffine dure",
    "summary": "Indicateur géochimique de transport de matière organique terrestre vers l'océan.",
    "occurrence": "Sédiments.",
    "applications": ["Géologie marine"]
  },
  {
    "name": "Acide 10-Undécénoïque",
    "formula": "C₁₁H₂₀O₂",
    "composition": { "C": 11, "H": 20, "O": 2 },
    "molarMass": "184.28 g/mol",
    "category": "Acide Gras Insaturé",
    "summary": "Agent antifongique utilisé dans les poudres et les crèmes.",
    "occurrence": "Huile de ricin (craquage).",
    "applications": ["Dermatologie", "Précurseur de Nylon-11"]
  },
  {
    "name": "Undécénate de Zinc",
    "formula": "C₂₂H₃₈O₄Zn",
    "composition": { "C": 22, "H": 38, "O": 4, "Zn": 1 },
    "molarMass": "431.92 g/mol",
    "category": "Médicament / Fongicide",
    "summary": "Sel de zinc utilisé pour traiter le pied d'athlète.",
    "occurrence": "Synthétique.",
    "applications": ["Hygiène des pieds"]
  },
  {
    "name": "N-Méthyl-N-triméthylsilyltrifluoroacétamide (MSTFA)",
    "formula": "C₆H₁₂F₃NOSi",
    "composition": { "C": 6, "H": 12, "F": 3, "N": 1, "O": 1, "Si": 1 },
    "molarMass": "199.25 g/mol",
    "category": "Agent de Silylation",
    "summary": "Agent de dérivation le plus volatil pour la chromatographie en phase gazeuse.",
    "occurrence": "Synthétique.",
    "applications": ["Dopage (analyse)", "Biochimie"]
  },
  {
    "name": "N,O-Bis(triméthylsilyl)trifluoroacétamide (BSTFA)",
    "formula": "C₈H₁₈F₃NOSi₂",
    "composition": { "C": 8, "H": 18, "F": 3, "N": 1, "O": 1, "Si": 2 },
    "molarMass": "257.40 g/mol",
    "category": "Agent de Silylation",
    "summary": "Réactif puissant pour silyler les acides aminés et les sucres.",
    "occurrence": "Synthétique.",
    "applications": ["Analyses métabolomiques"]
  },
  {
    "name": "Tétraphtalate de Diphényle",
    "formula": "C₂₀H₁₄O₄",
    "composition": { "C": 20, "H": 14, "O": 4 },
    "molarMass": "318.32 g/mol",
    "category": "Ester Aromatique",
    "summary": "Agent plastifiant pour les polymères à haute performance.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie des plastiques"]
  },
  {
    "name": "Tris(diphénylphosphino)méthane",
    "formula": "C₃₇H₃₁P₃",
    "composition": { "C": 37, "H": 31, "P": 3 },
    "molarMass": "568.56 g/mol",
    "category": "Ligand Tridenté",
    "summary": "Ligand formant une \"tripode\" autour du métal, stabilisant les clusters.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie des clusters métalliques"]
  },
  {
    "name": "Toluène-2,6-diisocyanate",
    "formula": "C₉H₆N₂O₂",
    "composition": { "C": 9, "H": 6, "N": 2, "O": 2 },
    "molarMass": "174.16 g/mol",
    "category": "Isocyanate",
    "summary": "Moins réactif que l'isomère 2,4, utilisé dans les mélanges pour PU.",
    "occurrence": "Synthétique.",
    "applications": ["Mousses élastiques"]
  },
  {
    "name": "Polyéthylène Glycol 400 (PEG-400)",
    "formula": "H-(O-CH₂-CH₂)ₙ-OH",
    "composition": { "C": 18, "H": 38, "O": 10 },
    "molarMass": "400.00 g/mol (moyen)",
    "category": "Polymère / Solvant",
    "summary": "Liquide visqueux incolore, utilisé comme excipient et lubrifiant.",
    "occurrence": "Synthétique.",
    "applications": ["Gouttes oculaires", "Cosmétiques"]
  },
  {
    "name": "Polyéthylène Glycol 4000 (PEG-4000)",
    "formula": "H-(O-CH₂-CH₂)₉₀-OH",
    "composition": { "C": 180, "H": 362, "O": 91 },
    "molarMass": "4000.00 g/mol",
    "category": "Polymère",
    "summary": "Solide cireux blanc utilisé comme liant et laxatif osmotique.",
    "occurrence": "Synthétique.",
    "applications": ["Suppositoires", "Traitement de la constipation"]
  },
  {
    "name": "Dodécylsulfate de Lithium (LDS)",
    "formula": "C₁₂H₂₅LiO₄S",
    "composition": { "C": 12, "H": 25, "Li": 1, "O": 4, "S": 1 },
    "molarMass": "272.33 g/mol",
    "category": "Détergent Anionique",
    "summary": "Utilisé en électrophorèse à basse température (4°C) car il ne précipite pas, contrairement au SDS.",
    "occurrence": "Synthétique.",
    "applications": ["Biochimie des protéines"]
  },
  {
    "name": "Oxalate de Diéthyle",
    "formula": "C₆H₁₀O₄",
    "composition": { "C": 6, "H": 10, "O": 4 },
    "molarMass": "146.14 g/mol",
    "category": "Ester d'Acide Dicarboxylique",
    "summary": "Utilisé pour la synthèse de colorants et d'intermédiaires pharmaceutiques.",
    "occurrence": "Synthétique.",
    "applications": ["Parfumerie (Solvant)", "Chimie fine"]
  },
  {
    "name": "Malonate de Diméthyle",
    "formula": "C₅H₈O₄",
    "composition": { "C": 5, "H": 8, "O": 4 },
    "molarMass": "132.11 g/mol",
    "category": "Ester / Intermédiaire",
    "summary": "Brique de base pour la synthèse de barbituriques et de vitamines.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie pharmaceutique"]
  },
  {
    "name": "Fumarate de Diméthyle",
    "formula": "C₆H₈O₄",
    "composition": { "C": 6, "H": 8, "O": 4 },
    "molarMass": "144.13 g/mol",
    "category": "Immunomodulateur",
    "summary": "Utilisé pour traiter la sclérose en plaques récurrente-rémittente.",
    "occurrence": "Synthétique.",
    "applications": ["Neurologie"]
  },
  {
    "name": "Adipate de Diocyle (DOA)",
    "formula": "C₂₂H₄₂O₄",
    "composition": { "C": 22, "H": 42, "O": 4 },
    "molarMass": "370.57 g/mol",
    "category": "Plastifiant",
    "summary": "Plastifiant de basse température offrant une excellente flexibilité au froid.",
    "occurrence": "Synthétique.",
    "applications": ["Films étirables alimentaires", "Câbles électriques"]
  },
  {
    "name": "Azélate de Dioctyle",
    "formula": "C₂₅H₄₈O₄",
    "composition": { "C": 25, "H": 48, "O": 4 },
    "molarMass": "412.65 g/mol",
    "category": "Lubrifiant Synthétique",
    "summary": "Utilisé dans les huiles pour turbines d'aviation.",
    "occurrence": "Synthétique.",
    "applications": ["Aéronautique"]
  },
  {
    "name": "Sébaçate de Dibutyle (DBS)",
    "formula": "C₁₈H₃₄O₄",
    "composition": { "C": 18, "H": 34, "O": 4 },
    "molarMass": "314.46 g/mol",
    "category": "Additif Plastique",
    "summary": "Plastifiant approuvé pour les emballages alimentaires au contact direct.",
    "occurrence": "DÉRIVÉ DE L'HUILE DE RICIN.",
    "applications": ["Dispositifs médicaux", "Emballages"]
  },
  {
    "name": "Phtalate de Diméthyle (DMP)",
    "formula": "C₁₀H₁₀O₄",
    "composition": { "C": 10, "H": 10, "O": 4 },
    "molarMass": "194.18 g/mol",
    "category": "Plastifiant / Répulsif",
    "summary": "Utilisé comme répulsif contre les insectes et solvant pour les bâtons lumineux.",
    "occurrence": "Synthétique.",
    "applications": ["Copal", "Répulsif cutané (historique)"]
  },
  {
    "name": "Isocyanurate de Triglycidyle (TGIC)",
    "formula": "C₁₂H₁₅N₃O₆",
    "composition": { "C": 12, "H": 15, "N": 3, "O": 6 },
    "molarMass": "297.26 g/mol",
    "category": "Agent de Réticulation",
    "summary": "Agent durcisseur pour les peintures poudre polyester.",
    "occurrence": "Synthétique.",
    "applications": ["Revêtements industriels"]
  },
  {
    "name": "Cyanurate de Mélamine",
    "formula": "C₆H₉N₉O₃",
    "composition": { "C": 6, "H": 9, "N": 9, "O": 3 },
    "molarMass": "255.20 g/mol",
    "category": "Retardateur de Flamme",
    "summary": "Complexe cristallin utilisé comme additif ignifugeant sans halogène.",
    "occurrence": "Synthétique.",
    "applications": ["Polyamides (Nylon)"]
  },
  {
    "name": "Perchlorate d'Ammonium",
    "formula": "NH₄ClO₄",
    "composition": { "N": 1, "H": 4, "Cl": 1, "O": 4 },
    "molarMass": "117.49 g/mol",
    "category": "Comburant Solide",
    "summary": "Comburant puissant utilisé dans les propulseurs de fusées à propergol solide.",
    "occurrence": "Synthétique.",
    "applications": ["Aérospatial (Ariane 5, Navette Spatiale)"]
  }
];
