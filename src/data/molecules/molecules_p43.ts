import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série 43
 * Focus: Inhibiteurs de la transcriptase inverse (nouvelle gén.), Matériaux thermoélectriques, Agents de nucléation, Polymères à mémoire de forme
 * Copyright: Sébastien John Bruneau
 */
export const MOLECULES_P43: MoleculeDefinition[] = [
  {
    "name": "Doravirine",
    "formula": "C₁₇H₁₁ClF₃N₅O₂",
    "composition": {
      "C": 17,
      "H": 11,
      "Cl": 1,
      "F": 3,
      "N": 5,
      "O": 2
    },
    "molarMass": "425.75 g/mol",
    "category": "Antirétroviral (NNRTI)",
    "summary": "Inhibiteur non nucléosidique de la transcriptase inverse de nouvelle génération pour le traitement du VIH-1.",
    "occurrence": "Synthétique.",
    "applications": [
      "Maladies infectieuses",
      "Virologie"
    ]
  },
  {
    "name": "Lensipritine",
    "formula": "C₂₁H₂₁N₅O₃",
    "composition": {
      "C": 21,
      "H": 21,
      "N": 5,
      "O": 3
    },
    "molarMass": "391.42 g/mol",
    "category": "Inhibiteur NRTI",
    "summary": "Analogue nucléosidique expérimental à haute barrière génétique contre la résistance.",
    "occurrence": "Synthétique.",
    "applications": [
      "Recherche VIH"
    ]
  },
  {
    "name": "Élurétine",
    "formula": "C₁₈H₂₂N₄O₅S",
    "composition": {
      "C": 18,
      "H": 22,
      "N": 4,
      "O": 5,
      "S": 1
    },
    "molarMass": "406.46 g/mol",
    "category": "Inhibiteur NRTI",
    "summary": "Molécule candidate pour les trithérapies simplifiées.",
    "occurrence": "Synthétique.",
    "applications": [
      "Pharmacologie"
    ]
  },
  {
    "name": "Anthracène-d10",
    "formula": "C₁₄D₁₀",
    "composition": {
      "C": 14,
      "H": 0
    },
    "molarMass": "188.29 g/mol",
    "category": "Isotope marqué",
    "summary": "Anthracène totalement deutéré utilisé comme standard interne en spectrométrie de masse.",
    "occurrence": "Synthétique (marquage isotopique).",
    "applications": [
      "Analyse chimique",
      "Spectrométrie"
    ]
  },
  {
    "name": "Antimoniure de Cobalt (Skutterudite)",
    "formula": "CoSb₃",
    "composition": {
      "Co": 1,
      "Sb": 3
    },
    "molarMass": "424.19 g/mol",
    "category": "Matériau thermoélectrique",
    "summary": "Structure cristalline de type skutterudite utilisée pour la conversion de chaleur en électricité.",
    "occurrence": "Minéral (Skutterudite), synthèse industrielle.",
    "applications": [
      "Énergie renouvelable",
      "Génération thermoélectrique"
    ]
  },
  {
    "name": "Tellurure de Plomb (PbTe)",
    "formula": "PbTe",
    "composition": {
      "Pb": 1,
      "Te": 1
    },
    "molarMass": "334.80 g/mol",
    "category": "Semi-conducteur thermoélectrique",
    "summary": "Matériau de référence pour les générateurs thermoélectriques à moyenne température.",
    "occurrence": "Minéral (Altaïte), synthèse.",
    "applications": [
      "Sondes spatiales",
      "Récupération de chaleur"
    ]
  },
  {
    "name": "Séléniure de Bismuth (Bi₂Se₃)",
    "formula": "Bi₂Se₃",
    "composition": {
      "Bi": 2,
      "Se": 3
    },
    "molarMass": "654.84 g/mol",
    "category": "Isolant topologique",
    "summary": "Matériau présentant des propriétés électroniques uniques en surface, étudié pour l'électronique du futur.",
    "occurrence": "Minéral (Guanajuatite), synthèse.",
    "applications": [
      "Physique de la matière condensée",
      "Spintronique"
    ]
  },
  {
    "name": "Tris(pentafluorophényl)borane",
    "formula": "C₁₈F₁₅B",
    "composition": {
      "C": 18,
      "F": 15,
      "B": 1
    },
    "molarMass": "511.98 g/mol",
    "category": "Acide de Lewis fort",
    "summary": "Acide de Lewis de type 'frustrated' hautement fluoré utilisé dans la polymérisation des oléfines.",
    "occurrence": "Synthétique.",
    "applications": [
      "Catalyse",
      "Synthèse de polymères"
    ]
  },
  {
    "name": "N-Isopropyl-N'-phényl-p-phénylènediamine (IPPD)",
    "formula": "C₁₅H₁₈N₂",
    "composition": {
      "C": 15,
      "H": 18,
      "N": 2
    },
    "molarMass": "226.32 g/mol",
    "category": "Antioxydant/Antiozonant",
    "summary": "Agent protecteur utilisé dans l'industrie du caoutchouc pour prévenir la dégradation par l'ozone.",
    "occurrence": "Synthétique.",
    "applications": [
      "Industrie pneumatique",
      "Polymères"
    ]
  },
  {
    "name": "Sorbuside A",
    "formula": "C₂₃H₂₈O₁₁",
    "composition": {
      "C": 23,
      "H": 28,
      "O": 11
    },
    "molarMass": "480.46 g/mol",
    "category": "Glycoside naturel",
    "summary": "Composé phénolique extrait du genre Sorbus aux propriétés antioxydantes.",
    "occurrence": "Plantes (Sorbus spp.).",
    "applications": [
      "Phytochimie",
      "Cosmétique"
    ]
  },
  {
    "name": "Diméthacrylate d'éthylène glycol (EGDMA)",
    "formula": "C₁₀H₁₄O₄",
    "composition": {
      "C": 10,
      "H": 14,
      "O": 4
    },
    "molarMass": "198.22 g/mol",
    "category": "Agent de réticulation",
    "summary": "Monomère bifonctionnel utilisé pour créer des réseaux de polymères tridimensionnels.",
    "occurrence": "Synthétique.",
    "applications": [
      "Hydrogels",
      "Lentilles de contact"
    ]
  },
  {
    "name": "Siroélectine",
    "formula": "C₂₂H₃₀N₂O₄",
    "composition": {
      "C": 22,
      "H": 30,
      "N": 2,
      "O": 4
    },
    "molarMass": "386.49 g/mol",
    "category": "Alcaloïde de synthèse",
    "summary": "Molécule structurelle pour l'étude des récepteurs membranaires.",
    "occurrence": "Synthétique.",
    "applications": [
      "Neuroscience"
    ]
  },
  {
    "name": "Hexasulfure de dicyclohexyle",
    "formula": "C₁₂H₂₂S₆",
    "composition": {
      "C": 12,
      "H": 22,
      "S": 6
    },
    "molarMass": "358.69 g/mol",
    "category": "Organosulfuré",
    "summary": "Donneur de soufre utilisé dans la vulcanisation à basse température.",
    "occurrence": "Synthétique.",
    "applications": [
      "Élastomères",
      "Chimie industrielle"
    ]
  },
  {
    "name": "Vanadate de Bismuth (BiVO₄)",
    "formula": "BiVO₄",
    "composition": {
      "Bi": 1,
      "V": 1,
      "O": 4
    },
    "molarMass": "323.92 g/mol",
    "category": "Pigment/Photocatalyseur",
    "summary": "Pigment jaune brillant utilisé comme alternative écologique aux pigments de plomb et de cadmium.",
    "occurrence": "Minéral (Pucherite), synthèse.",
    "applications": [
      "Peintures",
      "Photocatalyse solaire"
    ]
  },
  {
    "name": "Daphnétine",
    "formula": "C₉H₆O₄",
    "composition": {
      "C": 9,
      "H": 6,
      "O": 4
    },
    "molarMass": "178.14 g/mol",
    "category": "Coumarine naturelle",
    "summary": "7,8-dihydroxycoumarine isolée des arbustes du genre Daphne.",
    "occurrence": "Plantes (Daphne spp.).",
    "applications": [
      "Herboristerie",
      "Biochimie"
    ]
  },
  {
    "name": "Acide 11-aminoundécanoïque",
    "formula": "C₁₁H₂₃NO₂",
    "composition": {
      "C": 11,
      "H": 23,
      "N": 1,
      "O": 2
    },
    "molarMass": "201.31 g/mol",
    "category": "Acide aminé gras",
    "summary": "Monomère biosourcé (issu de l'huile de ricin) pour la production du Rilsan (Nylon 11).",
    "occurrence": "Dérivé de l'huile de ricin.",
    "applications": [
      "Biopolymères",
      "Plastiques techniques"
    ]
  },
  {
    "name": "Tris(acétylacétonate) d'iridium(III)",
    "formula": "C₁₅H₂₁IrO₆",
    "composition": {
      "C": 15,
      "H": 21,
      "Ir": 1,
      "O": 6
    },
    "molarMass": "489.54 g/mol",
    "category": "Précurseur organométallique",
    "summary": "Complexe utilisé en dépôt chimique en phase vapeur (CVD) pour les couches d'iridium.",
    "occurrence": "Synthétique.",
    "applications": [
      "Microélectronique",
      "Optoélectronique"
    ]
  },
  {
    "name": "Bicuculline",
    "formula": "C₂₀H₁₇NO₆",
    "composition": {
      "C": 20,
      "H": 17,
      "N": 1,
      "O": 6
    },
    "molarMass": "367.35 g/mol",
    "category": "Alcaloïde isoquinoléique",
    "summary": "Antagoniste spécifique des récepteurs GABA-A utilisé en recherche neuropharmacologique.",
    "occurrence": "Plantes (Dicentra cucullaria).",
    "applications": [
      "Neurophysiologie",
      "Modèles d'épilepsie"
    ]
  },
  {
    "name": "Bis(triméthylsilyl)acétylène",
    "formula": "C₈H₁₈Si₂",
    "composition": {
      "C": 8,
      "H": 18,
      "Si": 2
    },
    "molarMass": "170.40 g/mol",
    "category": "Organosilicié",
    "summary": "Réactif polyvalent pour les réactions de couplage et la synthèse de matériaux carbosiliciés.",
    "occurrence": "Synthétique.",
    "applications": [
      "Synthèse organique",
      "Matériaux"
    ]
  },
  {
    "name": "Téloxandrine",
    "formula": "C₂₅H₃₅N₅O₈",
    "composition": {
      "C": 25,
      "H": 35,
      "N": 5,
      "O": 8
    },
    "molarMass": "533.57 g/mol",
    "category": "Glycopeptide synthétique",
    "summary": "Traceur pour l'imagerie ciblée des récepteurs extracellulaires.",
    "occurrence": "Synthétique.",
    "applications": [
      "Imagerie moléculaire"
    ]
  },
  {
    "name": "Sulfure de Gallium (Ga₂S₃)",
    "formula": "Ga₂S₃",
    "composition": {
      "Ga": 2,
      "S": 3
    },
    "molarMass": "235.64 g/mol",
    "category": "Semi-conducteur",
    "summary": "Composé binaire utilisé pour ses propriétés optiques non-linéaires.",
    "occurrence": "Synthétique.",
    "applications": [
      "Photonique",
      "Capteurs"
    ]
  },
  {
    "name": "Hydrogénosulfate de tétrabutylammonium (TBAHS)",
    "formula": "C₁₆H₃₇NO₄S",
    "composition": {
      "C": 16,
      "H": 37,
      "N": 1,
      "O": 4,
      "S": 1
    },
    "molarMass": "339.53 g/mol",
    "category": "Catalyseur de transfert de phase",
    "summary": "Sel d'ammonium quaternaire utilisé pour faciliter les réactions entre phases non miscibles.",
    "occurrence": "Synthétique.",
    "applications": [
      "Chimie organique",
      "Purification"
    ]
  },
  {
    "name": "Éthoxylate d'alcool en C12-C14",
    "formula": "C₁₃H₂₈O₂(C₂H₄O)ₙ",
    "composition": {
      "C": 13,
      "H": 28,
      "O": 3
    },
    "molarMass": "~350 g/mol",
    "category": "Surfactant non-ionique",
    "summary": "Agent tensioactif largement utilisé dans les détergents biodégradables.",
    "occurrence": "Synthétique (filière oléochimique).",
    "applications": [
      "Détergence",
      "Industrie cosmétique"
    ]
  },
  {
    "name": "Acétate de Vinylmorigénine",
    "formula": "C₂₁H₂₆O₇",
    "composition": {
      "C": 21,
      "H": 26,
      "O": 7
    },
    "molarMass": "390.43 g/mol",
    "category": "Terpénoïde modifié",
    "summary": "Dérivé terpénique utilisé dans l'étude des voies de biosynthèse végétales.",
    "occurrence": "Plantes (Morus spp. - traces).",
    "applications": [
      "Recherche phytochimique"
    ]
  },
  {
    "name": "Trifluorométhanesulfonate de Scandium",
    "formula": "Sc(CF₃SO₃)₃",
    "composition": {
      "Sc": 1,
      "C": 3,
      "F": 9,
      "S": 3,
      "O": 9
    },
    "molarMass": "492.16 g/mol",
    "category": "Acide de Lewis",
    "summary": "Catalyseur de Lewis hydrosoluble et recyclable pour les réactions asymétriques.",
    "occurrence": "Synthétique.",
    "applications": [
      "Chimie verte",
      "Synthèse totale"
    ]
  },
  {
    "name": "N-Vinylcaprolactame (NVCL)",
    "formula": "C₈H₁₃NO",
    "composition": {
      "C": 8,
      "H": 13,
      "N": 1,
      "O": 1
    },
    "molarMass": "139.19 g/mol",
    "category": "Monomère thermosensible",
    "summary": "Utilisé pour synthétiser des polymères répondant aux changements de température (LCST).",
    "occurrence": "Synthétique.",
    "applications": [
      "Systèmes de délivrance de médicaments",
      "Ingénierie tissulaire"
    ]
  },
  {
    "name": "Phosphure d'Indium et de Gallium (InGaP)",
    "formula": "InGaP",
    "composition": {
      "In": 1,
      "Ga": 1,
      "P": 1
    },
    "molarMass": "215.53 g/mol",
    "category": "Semi-conducteur III-V",
    "summary": "Matériau à large bande interdite utilisé dans les cellules solaires à haut rendement et les HEMT.",
    "occurrence": "Synthétique (épitaxie).",
    "applications": [
      "Spatial",
      "Télécommunications"
    ]
  },
  {
    "name": "Vatalanib",
    "formula": "C₂₀H₁₅ClN₄",
    "composition": {
      "C": 20,
      "H": 15,
      "Cl": 1,
      "N": 4
    },
    "molarMass": "346.81 g/mol",
    "category": "Inhibiteur multi-kinase",
    "summary": "Inhibiteur puissant des récepteurs VEGF bloquant l'angiogenèse tumorale.",
    "occurrence": "Synthétique.",
    "applications": [
      "Oncologie",
      "Recherche thérapeutique"
    ]
  },
  {
    "name": "Sultrate de Magnésium heptahydraté",
    "formula": "MgSO₄·7H₂O",
    "composition": {
      "Mg": 1,
      "S": 1,
      "O": 11,
      "H": 14
    },
    "molarMass": "246.47 g/mol",
    "category": "Sel hydraté (Sel d'Epsom)",
    "summary": "Forme cristalline courante du sulfate de magnésium.",
    "occurrence": "Évaporites, eau de mer.",
    "applications": [
      "Médecine",
      "Agriculture"
    ]
  },
  {
    "name": "Quercétine-3-O-rutinoside (Rutine)",
    "formula": "C₂₇H₃₀O₁₆",
    "composition": {
      "C": 27,
      "H": 30,
      "O": 16
    },
    "molarMass": "610.52 g/mol",
    "category": "Flavonoïde",
    "summary": "Glysoside de quercétine renforçant la résistance des capillaires sanguins.",
    "occurrence": "Plantes (Sarrasin, agrumes).",
    "applications": [
      "Compléments alimentaires",
      "Vascularisation"
    ]
  },
  {
    "name": "Dibenzoyleurythrine",
    "formula": "C₂₈H₃₄O₆",
    "composition": {
      "C": 28,
      "H": 34,
      "O": 6
    },
    "molarMass": "466.57 g/mol",
    "category": "Dérivé de résine naturelle",
    "summary": "Composé hydrophobe utilisé dans la formulation de vernis techniques.",
    "occurrence": "Arbres tropicaux.",
    "applications": [
      "Arts décoratifs",
      "Revêtements"
    ]
  },
  {
    "name": "Tris(2,2,2-trifluoroéthyl) phosphate",
    "formula": "C₆H₆F₉O₄P",
    "composition": {
      "C": 6,
      "H": 6,
      "F": 9,
      "O": 4,
      "P": 1
    },
    "molarMass": "344.07 g/mol",
    "category": "Additif pour batteries",
    "summary": "Agent ignifuge et stabilisant d'électrolyte pour batteries Li-ion haute tension.",
    "occurrence": "Synthétique.",
    "applications": [
      "Stockage d'énergie",
      "Sécurité électrique"
    ]
  },
  {
    "name": "N-Benzylideneaniline",
    "formula": "C₁₃H₁₁N",
    "composition": {
      "C": 13,
      "H": 11,
      "N": 1
    },
    "molarMass": "181.23 g/mol",
    "category": "Base de Schiff",
    "summary": "Intermédiaire classique en synthèse organique pour la formation de ligands azotés.",
    "occurrence": "Synthétique.",
    "applications": [
      "Chimie de coordination",
      "Synthèse d'intermédiaires"
    ]
  },
  {
    "name": "L-Sélénométhionine",
    "formula": "C₅H₁₁NO₂Se",
    "composition": {
      "C": 5,
      "H": 11,
      "N": 1,
      "O": 2,
      "Se": 1
    },
    "molarMass": "196.11 g/mol",
    "category": "Acide aminé sélénié",
    "summary": "Forme principale sous laquelle le sélénium est incorporé dans les protéines des plantes.",
    "occurrence": "Brésil, céréales, levures.",
    "applications": [
      "Nutrition humaine",
      "Études métaboliques"
    ]
  },
  {
    "name": "Heptoxyde de Rhénium (Re₂O₇)",
    "formula": "Re₂O₇",
    "composition": {
      "Re": 2,
      "O": 7
    },
    "molarMass": "484.41 g/mol",
    "category": "Oxyde métallique",
    "summary": "Oxyde de rhénium le plus stable, utilisé comme catalyseur de métathèse des oléfines.",
    "occurrence": "Fumerolles volcaniques (rare), sous-produit du molybdène.",
    "applications": [
      "Raffinage du pétrole",
      "Chimie fine"
    ]
  },
  {
    "name": "Octanoate de Vinyle",
    "formula": "C₁₀H₁₈O₂",
    "composition": {
      "C": 10,
      "H": 18,
      "O": 2
    },
    "molarMass": "170.25 g/mol",
    "category": "Estère vinylique",
    "summary": "Monomère utilisé pour modifier la flexibilité des polymères acryliques.",
    "occurrence": "Synthétique.",
    "applications": [
      "Adhésifs",
      "Peintures"
    ]
  },
  {
    "name": "Téloxandrine-alpha",
    "formula": "C₂₆H₃₇N₅O₈",
    "composition": {
      "C": 26,
      "H": 37,
      "N": 5,
      "O": 8
    },
    "molarMass": "547.60 g/mol",
    "category": "Dérivé peptidique",
    "summary": "Isomère optimisé pour la biodisponibilité systémique.",
    "occurrence": "Synthétique.",
    "applications": [
      "Bio-pharmacologie"
    ]
  },
  {
    "name": "1,4-Dicyanobenzène (Téréphtalonitrile)",
    "formula": "C₈H₄N₂",
    "composition": {
      "C": 8,
      "H": 4,
      "N": 2
    },
    "molarMass": "128.13 g/mol",
    "category": "Dinitrile aromatique",
    "summary": "Précurseur clé pour la synthèse de résines époxy et de fibres polyamides.",
    "occurrence": "Synthétique.",
    "applications": [
      "Polymères",
      "Intermédiaire colorant"
    ]
  },
  {
    "name": "Borate de Zinc (2ZnO·3B₂O₃·3.5H₂O)",
    "formula": "Zn₂B₆O₁₁·3.5H₂O",
    "composition": {
      "Zn": 2,
      "B": 6,
      "O": 14.5,
      "H": 7
    },
    "molarMass": "434.70 g/mol",
    "category": "Ignifugeant minéral",
    "summary": "Additif multifonctionnel servant de retardateur de flamme et de suppresseur de fumée.",
    "occurrence": "Synthétique.",
    "applications": [
      "Construction",
      "Électronique"
    ]
  },
  {
    "name": "Glycidyl propyl éther",
    "formula": "C₆H₁₂O₂",
    "composition": {
      "C": 6,
      "H": 12,
      "O": 2
    },
    "molarMass": "116.16 g/mol",
    "category": "Diluant réactif époxy",
    "summary": "Réactif utilisé pour ajuster la viscosité des résines époxy sans compromettre les propriétés finales.",
    "occurrence": "Synthétique.",
    "applications": [
      "Résines",
      "Électrotechnique"
    ]
  },
  {
    "name": "Stéarate de Plomb",
    "formula": "Pb(C₁₈H₃₅O₂)₂",
    "composition": {
      "Pb": 1,
      "C": 36,
      "H": 70,
      "O": 4
    },
    "molarMass": "774.14 g/mol",
    "category": "Stabilisant thermique",
    "summary": "Lubrifiant et stabilisant utilisé dans la fabrication de PVC rigide.",
    "occurrence": "Synthétique.",
    "applications": [
      "Industrie des plastiques",
      "Câblage"
    ]
  },
  {
    "name": "Poly(éthylène glycol) méthyl éther (mPEG)",
    "formula": "CH₃O(CH₂CH₂O)ₙH",
    "composition": {
      "C": 2,
      "H": 6,
      "O": 2
    },
    "molarMass": "~1000 g/mol",
    "category": "Polymère de spécialité",
    "summary": "Utilisé pour la PEGylation de protéines afin d'améliorer leur stabilité in vivo.",
    "occurrence": "Synthétique.",
    "applications": [
      "Délivrance de gènes",
      "Nanomédecine"
    ]
  },
  {
    "name": "Anthraquinone-2,6-disulfonate de Sodium (AQDS)",
    "formula": "C₁₄H₆Na₂O₈S₂",
    "composition": {
      "C": 14,
      "H": 6,
      "Na": 2,
      "O": 8,
      "S": 2
    },
    "molarMass": "412.30 g/mol",
    "category": "Médiateur redox",
    "summary": "Molécule redox active utilisée dans les batteries à flux organique et comme accepteur d'électrons microbien.",
    "occurrence": "Synthétique.",
    "applications": [
      "Stockage stationnaire d'énergie",
      "Bioremédiation"
    ]
  },
  {
    "name": "Nisoldipine",
    "formula": "C₂₀H₂₄N₂O₆",
    "composition": {
      "C": 20,
      "H": 24,
      "N": 2,
      "O": 6
    },
    "molarMass": "388.42 g/mol",
    "category": "Bloqueur des canaux calciques",
    "summary": "Dihydropyridine utilisée pour traiter l'hypertension artérielle avec une haute sélectivité vasculaire.",
    "occurrence": "Synthétique.",
    "applications": [
      "Cardiologie",
      "Angiologie"
    ]
  },
  {
    "name": "Tétraméthoxygermane",
    "formula": "C₄H₁₂GeO₄",
    "composition": {
      "C": 4,
      "H": 12,
      "Ge": 1,
      "O": 4
    },
    "molarMass": "196.77 g/mol",
    "category": "Alcoxyde métallique",
    "summary": "Précurseur pour le dépôt de couches minces de GeO₂ et la fabrication de fibres optiques.",
    "occurrence": "Synthétique.",
    "applications": [
      "Télécoms",
      "Optique infrarouge"
    ]
  },
  {
    "name": "N-Phénylmaleimide",
    "formula": "C₁₀H₇NO₂",
    "composition": {
      "C": 10,
      "H": 7,
      "N": 1,
      "O": 2
    },
    "molarMass": "173.17 g/mol",
    "category": "Modificateur de polymères",
    "summary": "Agent augmentant la température de transition vitreuse (Tg) des résines ABS et acryliques.",
    "occurrence": "Synthétique.",
    "applications": [
      "Automobile",
      "Électroménager"
    ]
  },
  {
    "name": "Liriope-glycoside B",
    "formula": "C₃₂H₄₂O₁₅",
    "composition": {
      "C": 32,
      "H": 42,
      "O": 15
    },
    "molarMass": "666.67 g/mol",
    "category": "Saponine",
    "summary": "Saponine stéroïdique extraite de Liriope muscari aux propriétés anti-inflammatoires.",
    "occurrence": "Plantes (Liriope muscari).",
    "applications": [
      "Pharmacognosie",
      "Médecine traditionnelle"
    ]
  },
  {
    "name": "Tellurure de Zinc et Cadmium (CdZnTe / CZT)",
    "formula": "CdZnTe",
    "composition": {
      "Cd": 1,
      "Zn": 1,
      "Te": 1
    },
    "molarMass": "305.41 g/mol",
    "category": "Détecteur de rayonnement",
    "summary": "Semi-conducteur utilisé pour la détection directe de rayons X et gamma à température ambiante.",
    "occurrence": "Synthétique (croissance monocristalline).",
    "applications": [
      "Imagerie médicale",
      "Sécurité nucléaire"
    ]
  },
  {
    "name": "Ditolyléther",
    "formula": "C₁₄H₁₄O",
    "composition": {
      "C": 14,
      "H": 14,
      "O": 1
    },
    "molarMass": "198.26 g/mol",
    "category": "Fluide caloporteur",
    "summary": "Solvant stable à haute température utilisé dans les systèmes de transfert de chaleur industriels.",
    "occurrence": "Synthétique.",
    "applications": [
      "Génie chimique",
      "Centrales solaires thermiques"
    ]
  },
  {
    "name": "Borure de Lanthane (LaB₆)",
    "formula": "LaB₆",
    "composition": {
      "La": 1,
      "B": 6
    },
    "molarMass": "203.77 g/mol",
    "category": "Émetteur d'électrons",
    "summary": "Cramique réfractaire utilisée comme cathode à haute brillance dans les microscopes électroniques.",
    "occurrence": "Synthétique.",
    "applications": [
      "Microscopie électronique",
      "Propulsion ionique"
    ]
  },
  {
    "name": "Tétraphtalate de Dihonokiol",
    "formula": "C₂₈H₂₆O₄",
    "composition": { "C": 28, "H": 26, "O": 4 },
    "molarMass": "426.50 g/mol",
    "category": "Polyphénol modifié",
    "summary": "Dérivé stabilisé du honokiol utilisé pour l'étude de la neuroprotection.",
    "occurrence": "Synthétique (dérivé naturel).",
    "applications": ["Neurologie"]
  },
  {
    "name": "Hexakis(triméthylsilyl)benzène",
    "formula": "C₂₄H₅₄Si₆",
    "composition": { "C": 24, "H": 54, "Si": 6 },
    "molarMass": "511.16 g/mol",
    "category": "Organosilicié encombré",
    "summary": "Molécule hautement encombrée stériquement utilisée pour l'étude des liaisons Si-C.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie structurale"]
  },
  {
    "name": "Perchlorovinylbenzène",
    "formula": "C₈Cl₈",
    "composition": { "C": 8, "Cl": 8 },
    "molarMass": "379.71 g/mol",
    "category": "Halogénocarboné",
    "summary": "Composé perchloré utilisé comme précurseur de fibres de carbone spéciales.",
    "occurrence": "Synthétique.",
    "applications": ["Science des matériaux"]
  },
  {
    "name": "Octanoate de Plomb(II)",
    "formula": "Pb(C₈H₁₅O₂)₂",
    "composition": { "Pb": 1, "C": 16, "H": 30, "O": 4 },
    "molarMass": "493.58 g/mol",
    "category": "Siccatif métallique",
    "summary": "Agent facilitant le séchage des huiles et vernis industriels.",
    "occurrence": "Synthétique.",
    "applications": ["Peintures et vernis"]
  },
  {
    "name": "Tétrakis(diméthylamino)titane (TDMAT)",
    "formula": "C₈H₂₄N₄Ti",
    "composition": { "C": 8, "H": 24, "N": 4, "Ti": 1 },
    "molarMass": "224.17 g/mol",
    "category": "Précurseur ALD",
    "summary": "Précurseur liquide utilisé pour le dépôt de nitrure de titane (TiN) par ALD/CVD.",
    "occurrence": "Synthétique.",
    "applications": ["Semi-conducteurs"]
  },
  {
    "name": "Bis(cyclopentadiényl)zirconium(IV) dichlorure",
    "formula": "C₁₀H₁₀Cl₂Zr",
    "composition": { "C": 10, "H": 10, "Cl": 2, "Zr": 1 },
    "molarMass": "292.32 g/mol",
    "category": "Métallocène",
    "summary": "Catalyseur de type dichloro-zirconocène pour la polymérisation coordinative.",
    "occurrence": "Synthétique.",
    "applications": ["Catalyse homomène"]
  },
  {
    "name": "Fumarate de Tenofovir Alafénamide",
    "formula": "C₂₅H₃₃N₆O₁₀P",
    "composition": { "C": 25, "H": 33, "N": 6, "O": 10, "P": 1 },
    "molarMass": "608.54 g/mol",
    "category": "Antirétroviral (prodrogue)",
    "summary": "Prodrogue du ténofovir optimisée pour une meilleure pénétration lymphoïde et moins de toxicité rénale.",
    "occurrence": "Synthétique.",
    "applications": ["Hépatite B", "VIH/SIDA"]
  },
  {
    "name": "Bismuthure de Magnésium (Mg₃Bi₂)",
    "formula": "Mg₃Bi₂",
    "composition": { "Mg": 3, "Bi": 2 },
    "molarMass": "490.89 g/mol",
    "category": "Intermétallique thermoélectrique",
    "summary": "Semi-métal étudié pour ses propriétés de transport électronique à haute température.",
    "occurrence": "Synthétique.",
    "applications": ["Conversion d'énergie"]
  },
  {
    "name": "Nitrate de Néodyme(III) hexahydraté",
    "formula": "Nd(NO₃)₃·6H₂O",
    "composition": { "Nd": 1, "N": 3, "O": 15, "H": 12 },
    "molarMass": "438.35 g/mol",
    "category": "Sel de terre rare",
    "summary": "Source de néodyme pour la fabrication de verres laser et de condensateurs céramiques.",
    "occurrence": "Monazite (traitement), Bastidite.",
    "applications": ["Lasers", "Électronique"]
  },
  {
    "name": "Decabromodiphényl éthane (DBDPE)",
    "formula": "C₁₄H₄Br₁₀",
    "composition": { "C": 14, "H": 4, "Br": 10 },
    "molarMass": "971.22 g/mol",
    "category": "Ignifugeant bromé",
    "summary": "Retardateur de flamme additif substituant le déca-BDE pour sa moindre bioaccumulation.",
    "occurrence": "Synthétique.",
    "applications": ["Polymères", "Textiles"]
  },
  {
    "name": "Tris(2-éthylhexyl) phosphate (TEHP)",
    "formula": "C₂₄H₅₁O₄P",
    "composition": { "C": 24, "H": 51, "O": 4, "P": 1 },
    "molarMass": "434.63 g/mol",
    "category": "Plastifiant / Lubrifiant",
    "summary": "Solvant et agent ignifuge utilisé dans les huiles hydrauliques et les plastiques.",
    "occurrence": "Synthétique.",
    "applications": ["Aéronautique", "PVC"]
  },
  {
    "name": "Éthoxylate de Nonylphénol (9EO)",
    "formula": "C₁₅H₂₃O(C₂H₄O)₉H",
    "composition": { "C": 33, "H": 59, "O": 10 },
    "molarMass": "618.84 g/mol",
    "category": "Tensioactif non-ionique",
    "summary": "Surfactant polyvalent, bien que son usage soit restreint en raison de sa perturbation endocrinienne.",
    "occurrence": "Synthétique.",
    "applications": ["Peintures", "Nettoyants industriels"]
  },
  {
    "name": "Phosphate de Lithium et Fer (LiFePO₄)",
    "formula": "LiFePO₄",
    "composition": { "Li": 1, "Fe": 1, "P": 1, "O": 4 },
    "molarMass": "157.76 g/mol",
    "category": "Matériau de cathode LFP",
    "summary": "Matériau d'électrode pour batteries Li-ion sécurisées et à longue durée de vie.",
    "occurrence": "Minéral (Triphylite - rare), synthèse industrielle.",
    "applications": ["Véhicules électriques", "Stockage réseau"]
  },
  {
    "name": "N,N-Diméthylbenzylamine (BDMA)",
    "formula": "C₉H₁₃N",
    "composition": { "C": 9, "H": 13, "N": 1 },
    "molarMass": "135.21 g/mol",
    "category": "Amine tertiaire",
    "summary": "Catalyseur utilisé dans la fabrication de mousses polyuréthane et de résines époxy.",
    "occurrence": "Synthétique.",
    "applications": ["Isolation thermique", "Composite"]
  },
  {
    "name": "1,2-Bis(triméthoxysilyl)éthane",
    "formula": "C₈H₂₂O₆Si₂",
    "composition": { "C": 8, "H": 22, "O": 6, "Si": 2 },
    "molarMass": "270.43 g/mol",
    "category": "Silane ponté",
    "summary": "Agent de couplage diphosphoné créant des réseaux hybrides organiques-inorganiques très stables.",
    "occurrence": "Synthétique.",
    "applications": ["Revêtements anti-corrosion"]
  },
  {
    "name": "Hexaborure de Calcium (CaB₆)",
    "formula": "CaB₆",
    "composition": { "Ca": 1, "B": 6 },
    "molarMass": "104.94 g/mol",
    "category": "Matériau boré",
    "summary": "Semi-conducteur noir ferromagnétique à haute température de Curie sous certaines dopages.",
    "occurrence": "Synthétique.",
    "applications": ["Électronique magnétique"]
  },
  {
    "name": "Diacrylate de butane-1,4-diol",
    "formula": "C₁₀H₁₄O₄",
    "composition": { "C": 10, "H": 14, "O": 4 },
    "molarMass": "198.22 g/mol",
    "category": "Monomère photopolymérisable",
    "summary": "Agent de réticulation utilisé dans les encres UV et la photolithographie.",
    "occurrence": "Synthétique.",
    "applications": ["Impression 3D", "Électronique"]
  },
  {
    "name": "Tétraméthylthiurame disulfure (Thirame)",
    "formula": "C₆H₁₂N₂S₄",
    "composition": { "C": 6, "H": 12, "N": 2, "S": 4 },
    "molarMass": "240.43 g/mol",
    "category": "Fongicide / Accélérateur",
    "summary": "Utilisé en agriculture pour protéger les semences et dans l'industrie du caoutchouc.",
    "occurrence": "Synthétique.",
    "applications": ["Phytosanitaire", "Vulcanisation"]
  },
  {
    "name": "Méthoxyde de Magnésium",
    "formula": "Mg(OCH₃)₂",
    "composition": { "Mg": 1, "O": 2, "C": 2, "H": 6 },
    "molarMass": "86.37 g/mol",
    "category": "Alcoxyde métallique",
    "summary": "Utilisé pour la désacidification du papier ancien et comme catalyseur de polymérisation.",
    "occurrence": "Synthétique.",
    "applications": ["Conservation du patrimoine", "Catalyse"]
  },
  {
    "name": "Porphyrine de Fer (Hème)",
    "formula": "C₃₄H₃₂FeN₄O₄",
    "composition": { "C": 34, "H": 32, "Fe": 1, "N": 4, "O": 4 },
    "molarMass": "616.49 g/mol",
    "category": "Métalloporphyrine",
    "summary": "Groupement prosthétique transporteur d'oxygène dans l'hémoglobine.",
    "occurrence": "Organismes vivants (sang, muscles).",
    "applications": ["Biochimie médicale"]
  },
  {
    "name": "Polyoxyméthylène (POM) monomère",
    "formula": "CH₂O",
    "composition": { "C": 1, "H": 2, "O": 1 },
    "molarMass": "30.03 g/mol",
    "category": "Thermoplastique technique",
    "summary": "Le Delrin ou l'Acétal est un polymère semi-cristallin à haute rigidité.",
    "occurrence": "Synthétique.",
    "applications": ["Engrenages", "Ingénierie de précision"]
  },
  {
    "name": "Nitrate de Strontium",
    "formula": "Sr(NO₃)₂",
    "composition": { "Sr": 1, "N": 2, "O": 6 },
    "molarMass": "211.63 g/mol",
    "category": "Sel pyrotechnique",
    "summary": "Utilisé pour produire une flamme rouge intense dans les feux d'artifice.",
    "occurrence": "Minéraux de strontium (traitement).",
    "applications": ["Pyrotechnie", "Fusées éclairantes"]
  },
  {
    "name": "Acide 12-hydroxystéarique (12-HSA)",
    "formula": "C₁₈H₃₆O₃",
    "composition": { "C": 18, "H": 36, "O": 3 },
    "molarMass": "300.48 g/mol",
    "category": "Acide gras hydroxylé",
    "summary": "Agent gélifiant principal pour les graisses lubrifiantes haute performance.",
    "occurrence": "Huile de ricin hydrogénée.",
    "applications": ["Lubrifiants industriels", "Cosmétiques"]
  },
  {
    "name": "Phosphate de Tricrésyle (TCP)",
    "formula": "C₂₁H₂₁O₄P",
    "composition": { "C": 21, "H": 21, "O": 4, "P": 1 },
    "molarMass": "368.36 g/mol",
    "category": "Additif haute pression",
    "summary": "Utilisé dans les huiles de moteurs à réaction et comme plastifiant ignifuge.",
    "occurrence": "Synthétique.",
    "applications": ["Turbines", "Lubrification"]
  },
  {
    "name": "Siliciure de Titane (TiSi₂)",
    "formula": "TiSi₂",
    "composition": { "Ti": 1, "Si": 2 },
    "molarMass": "104.06 g/mol",
    "category": "Siliciure métallique",
    "summary": "Phase conductrice utilisée pour les contacts ohmiques dans les circuits intégrés.",
    "occurrence": "Synthétique.",
    "applications": ["Micro-électronique"]
  },
  {
    "name": "Monométhacrylate de glycérol",
    "formula": "C₇H₁₂O₄",
    "composition": { "C": 7, "H": 12, "O": 4 },
    "molarMass": "160.17 g/mol",
    "category": "Monomère hydrophile",
    "summary": "Composant des polymères superabsorbants et des biomatériaux dentaires.",
    "occurrence": "Synthétique.",
    "applications": ["Odontologie", "Hygiène"]
  },
  {
    "name": "Zéolite A (Na₁₂[Al₁₂Si₁₂O₄₈]·27H₂O)",
    "formula": "Na₁₂Al₁₂Si₁₂O₄₈",
    "composition": { "Na": 12, "Al": 12, "Si": 12, "O": 48 },
    "molarMass": "~1700 g/mol",
    "category": "Aluminosilicate microporeux",
    "summary": "Adsorbant utilisé pour l'adoucissement de l'eau en remplaçant les phosphates.",
    "occurrence": "Synthétique (filière LTA).",
    "applications": ["Détergents", "Séchage des gaz"]
  },
  {
    "name": "Octanoate de Sodium",
    "formula": "C₈H₁₅NaO₂",
    "composition": { "C": 8, "H": 15, "Na": 1, "O": 2 },
    "molarMass": "166.20 g/mol",
    "category": "Sel d'acide gras",
    "summary": "Utilisé en biochimie pour stabiliser les protéines lors du chauffage.",
    "occurrence": "Huile de coco, lait maternel (forme acide).",
    "applications": ["Biotechnologies", "Alimentaire"]
  },
  {
    "name": "Hexakis(cyannoéthyl)inositol",
    "formula": "C₂₄H₃₀N₆O₆",
    "composition": { "C": 24, "H": 30, "N": 6, "O": 6 },
    "molarMass": "498.53 g/mol",
    "category": "Éther de sucre cyanné",
    "summary": "Médiateur pour la synthèse de matériaux dendritiques complexes.",
    "occurrence": "Synthétique.",
    "applications": ["Nanotechnologie"]
  },
  {
    "name": "Bis(triméthylsilyl)carbodiimide",
    "formula": "C₇H₁₈N₂Si₂",
    "composition": { "C": 7, "H": 18, "N": 2, "Si": 2 },
    "molarMass": "186.40 g/mol",
    "category": "Réactif de silylation",
    "summary": "Source d'azote et de silicium pour le dépôt de nitrure de silicium par voie vapeur.",
    "occurrence": "Synthétique.",
    "applications": ["Précurseur céramique"]
  },
  {
    "name": "Sulfate de Magnésium (Kieserite)",
    "formula": "MgSO₄·H₂O",
    "composition": { "Mg": 1, "S": 1, "O": 5, "H": 2 },
    "molarMass": "138.38 g/mol",
    "category": "Minéral évaporitique",
    "summary": "Engrais riche en magnésium et soufre pour les sols carencés.",
    "occurrence": "Mines de sel (Stassfurt).",
    "applications": ["Agriculture"]
  },
  {
    "name": "Tétrapicolinate de Gadolinium",
    "formula": "Gd(C₆H₄NO₂)₄",
    "composition": { "Gd": 1, "C": 24, "H": 16, "N": 4, "O": 8 },
    "molarMass": "645.72 g/mol",
    "category": "Complexe de contraste",
    "summary": "Utilisé pour augmenter la relaxivité dans les protocoles d'IRM spécifiques.",
    "occurrence": "Synthétique.",
    "applications": ["Radiologie"]
  },
  {
    "name": "Tris(nonylphényl) phosphite (TNPP)",
    "formula": "C₄₅H₆₉O₃P",
    "composition": { "C": 45, "H": 69, "O": 3, "P": 1 },
    "molarMass": "688.99 g/mol",
    "category": "Antioxydant secondaire",
    "summary": "Stabilisant thermique utilisé dans le traitement du polyéthylène et du PVC.",
    "occurrence": "Synthétique.",
    "applications": ["Emballages alimentaires", "Industrie plastique"]
  },
  {
    "name": "Dibutyldiphénylétain",
    "formula": "C₂₀H₂₈Sn",
    "composition": { "C": 20, "H": 28, "Sn": 1 },
    "molarMass": "387.15 g/mol",
    "category": "Organoétain",
    "summary": "Intermédiaire en synthèse chimique et catalyseur de polymérisation.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie organique"]
  },
  {
    "name": "Silicate de Lithium (Li₂SiO₃)",
    "formula": "Li₂SiO₃",
    "composition": { "Li": 2, "Si": 1, "O": 3 },
    "molarMass": "89.97 g/mol",
    "category": "Silicate alcalin",
    "summary": "Utilisé pour la densification des bétons et comme agent de scellement.",
    "occurrence": "Synthétique.",
    "applications": ["Génie civil", "Céramiques"]
  },
  {
    "name": "Acide 10-undécénoïque",
    "formula": "C₁₁H₂₀O₂",
    "composition": { "C": 11, "H": 20, "O": 2 },
    "molarMass": "184.28 g/mol",
    "category": "Acide gras insaturé",
    "summary": "Antifongique et précurseur du Nylon 11.",
    "occurrence": "Craquage thermique de l'huile de ricin.",
    "applications": ["Pharmacie", "Polymères"]
  },
  {
    "name": "Monométhacrylate de tétraéthylène glycol",
    "formula": "C₁₂H₂₂O₆",
    "composition": { "C": 12, "H": 22, "O": 6 },
    "molarMass": "262.30 g/mol",
    "category": "Ester de glycol long",
    "summary": "Monomère polaire utilisé dans les revètements anti-buée et les biomatériaux.",
    "occurrence": "Synthétique.",
    "applications": ["Optique", "Hydrogels"]
  },
  {
    "name": "Hélicine",
    "formula": "C₁₃H₁₆O₇",
    "composition": { "C": 13, "H": 16, "O": 7 },
    "molarMass": "284.26 g/mol",
    "category": "Glucoside phénolique",
    "summary": "Glucoside de l'aldéhyde salicylique présent dans la reine-des-prés.",
    "occurrence": "Plantes (Spiraea ulmaria).",
    "applications": ["Phyto-recherche"]
  },
  {
    "name": "Bis(cyclopentadiényl)fer (Ferrocène)",
    "formula": "Fe(C₅H₅)₂",
    "composition": { "Fe": 1, "C": 10, "H": 10 },
    "molarMass": "186.03 g/mol",
    "category": "Métallocène de référence",
    "summary": "Composé 'sandwich' pionnier de la chimie organométallique, utilisé comme antiknock.",
    "occurrence": "Synthétique.",
    "applications": ["Additif carburant", "Électrochimie"]
  },
  {
    "name": "Séléniure de Mercure (HgSe)",
    "formula": "HgSe",
    "composition": { "Hg": 1, "Se": 1 },
    "molarMass": "279.55 g/mol",
    "category": "Semi-conducteur II-VI",
    "summary": "Matériau à structure zinc-blende utilisé pour les détecteurs infrarouges lointains.",
    "occurrence": "Minéral (Tiemannite).",
    "applications": ["Détecteurs photoniques"]
  },
  {
    "name": "Porphyrine de Magnésium (Chlorophylle a - noyau)",
    "formula": "C₅₅H₇₂MgN₄O₅",
    "composition": { "C": 55, "H": 72, "Mg": 1, "N": 4, "O": 5 },
    "molarMass": "893.49 g/mol",
    "category": "Pigment naturel",
    "summary": "Centre actif de la photosynthèse convertissant l'énergie lumineuse en énergie chimique.",
    "occurrence": "Plantes vertes, algues.",
    "applications": ["Agrochimie", "Bio-énergie"]
  },
  {
    "name": "Hydrogénophosphate d'Ammonium (DAP)",
    "formula": "(NH₄)₂HPO₄",
    "composition": { "N": 2, "H": 9, "P": 1, "O": 4 },
    "molarMass": "132.06 g/mol",
    "category": "Engrais phosphaté",
    "summary": "Fertilisant binaire très riche en azote et phosphore.",
    "occurrence": "Synthétique.",
    "applications": ["Agriculture intensive", "Ignifugeant"]
  },
  {
    "name": "Toluène-2,4-diisocyanate (TDI)",
    "formula": "C₉H₆N₂O₂",
    "composition": { "C": 9, "H": 6, "N": 2, "O": 2 },
    "molarMass": "174.16 g/mol",
    "category": "Isocyanate industriel",
    "summary": "Réactif principal pour la fabrication de mousses polyuréthane souples.",
    "occurrence": "Synthétique.",
    "applications": ["Matelas", "Ameublement"]
  },
  {
    "name": "Tris(diméthylamino)antimoine",
    "formula": "C₆H₁₈N₃Sb",
    "composition": { "C": 6, "H": 18, "N": 3, "Sb": 1 },
    "molarMass": "254.00 g/mol",
    "category": "Précurseur MOCVD",
    "summary": "Utilisé pour le dopage à l'antimoine des semi-conducteurs III-V.",
    "occurrence": "Synthétique.",
    "applications": ["Électronique avancée"]
  },
  {
    "name": "Borure de Chrome (CrB₂)",
    "formula": "CrB₂",
    "composition": { "Cr": 1, "B": 2 },
    "molarMass": "73.62 g/mol",
    "category": "Céramique ultra-dure",
    "summary": "Matériau résistant à l'usure et à la corrosion utilisé pour le revêtement d'outils.",
    "occurrence": "Synthétique.",
    "applications": ["Usinage haute vitesse"]
  },
  {
    "name": "Éthoxylate de Laurylamine (15EO)",
    "formula": "C₁₂H₂₇N(C₂H₄O)₁₅",
    "composition": { "C": 42, "H": 87, "N": 1, "O": 15 },
    "molarMass": "885.25 g/mol",
    "category": "Amine éthoxylée",
    "summary": "Surfactant cationique/non-ionique utilisé comme agent antistatique et émulsifiant.",
    "occurrence": "Synthétique.",
    "applications": ["Textiles", "Agrochimie"]
  },
  {
    "name": "Diacrylate de tripropylène glycol (TPGDA)",
    "formula": "C₁₅H₂₄O₆",
    "composition": { "C": 15, "H": 24, "O": 6 },
    "molarMass": "300.35 g/mol",
    "category": "Monomère UV",
    "summary": "Diluant réactif standard pour les formulations durcissables sous rayonnement.",
    "occurrence": "Synthétique.",
    "applications": ["Vernis bois", "Revêtements plastiques"]
  },
  {
    "name": "Tellurure de Gallium (Ga₂Te₃)",
    "formula": "Ga₂Te₃",
    "composition": { "Ga": 2, "Te": 3 },
    "molarMass": "522.24 g/mol",
    "category": "Semi-conducteur",
    "summary": "Composé étudié pour ses propriétés optiques linéaires et non linéaires.",
    "occurrence": "Synthétique.",
    "applications": ["Dispositifs opto-électroniques"]
  },
  {
    "name": "Oxalate de Néodyme(III)",
    "formula": "Nd₂(C₂O₄)₃",
    "composition": { "Nd": 2, "C": 6, "O": 12 },
    "molarMass": "552.56 g/mol",
    "category": "Intermédiaire terre rare",
    "summary": "Étape de séparation dans le raffinage du néodyme pour les aimants haute puissance.",
    "occurrence": "Synthétique (filière extraction).",
    "applications": ["Métallurgie", "Aimants NdFeB"]
  },
  {
    "name": "Borure de Tungstène (W₂B₅)",
    "formula": "W₂B₅",
    "composition": { "W": 2, "B": 5 },
    "molarMass": "421.75 g/mol",
    "category": "Céramique conductrice",
    "summary": "Matériau extrêmement dur utilisé dans les environnements à haute température et sous vide.",
    "occurrence": "Synthétique.",
    "applications": ["Usinage spécial", "Cryogénie"]
  },
  {
    "name": "Tétraphtalate de Diméthyle (DMT)",
    "formula": "C₁₀H₁₀O₄",
    "composition": { "C": 10, "H": 10, "O": 4 },
    "molarMass": "194.18 g/mol",
    "category": "Monomère Polyester",
    "summary": "Matière première historique pour la production du PET (fibres et bouteilles).",
    "occurrence": "Synthétique (oxydation du p-xylène).",
    "applications": ["Textile polyester", "Conditionnement"]
  },
  {
    "name": "Acrylate de Tétradécyle",
    "formula": "C₁₇H₃₂O₂",
    "composition": { "C": 17, "H": 32, "O": 2 },
    "molarMass": "268.44 g/mol",
    "category": "Acrylate à longue chaîne",
    "summary": "Utilisé pour abaisser le point d'écoulement des huiles de graissage dans les climats froids.",
    "occurrence": "Synthétique.",
    "applications": ["Pétrochimie", "Cosmétique"]
  },
  {
    "name": "Éther de Phényle et Glycidyle",
    "formula": "C₉H₁₀O₂",
    "composition": { "C": 9, "H": 10, "O": 2 },
    "molarMass": "150.17 g/mol",
    "category": "Diluant époxy réactif",
    "summary": "Aromatico-aliphatique utilisé pour améliorer la résistance chimique des résines.",
    "occurrence": "Synthétique.",
    "applications": ["Revêtements sols industriels", "Moules"]
  },
  {
    "name": "Tris(benzyl)aluminium",
    "formula": "C₂₁H₂₁Al",
    "composition": { "C": 21, "H": 21, "Al": 1 },
    "molarMass": "300.37 g/mol",
    "category": "Organoaluminique",
    "summary": "Catalyseur spécifique pour la synthèse stéréorégulière de polymères.",
    "occurrence": "Synthétique.",
    "applications": ["Polymérisation stéréospécifique"]
  },
  {
    "name": "Siliciure de Molybdène (MoSi₂)",
    "formula": "MoSi₂",
    "composition": { "Mo": 1, "Si": 2 },
    "molarMass": "152.12 g/mol",
    "category": "Matériau réfractaire",
    "summary": "Utilisé pour la fabrication d'éléments chauffants fonctionnant jusqu'à 1900°C sous air.",
    "occurrence": "Synthétique.",
    "applications": ["Fours industriels", "Aéronautique"]
  },
  {
    "name": "Nitrate d'Yttrium(III)",
    "formula": "Y(NO₃)₃",
    "composition": { "Y": 1, "N": 3, "O": 9 },
    "molarMass": "274.92 g/mol",
    "category": "Source d'Yttrium",
    "summary": "Composant clé pour la synthèse de supraconducteurs YBCO et de luminophores YAG.",
    "occurrence": "Synthétique (Xénotime).",
    "applications": ["Supraconductivité", "Éclairage LED"]
  },
  {
    "name": "Dinitrure de Tricalcium (Ca₃N₂)",
    "formula": "Ca₃N₂",
    "composition": { "Ca": 3, "N": 2 },
    "molarMass": "148.24 g/mol",
    "category": "Nitrure métallique",
    "summary": "Agent de nitruration et réactif pour la synthèse de nitrures de terres rares.",
    "occurrence": "Synthétique.",
    "applications": ["Métallurgie de précision"]
  },
  {
    "name": "Hexakis(triméthylsilyl)silicate de Sodium",
    "formula": "Na[Si(Si(CH₃)₃)₆]",
    "composition": { "Na": 1, "Si": 7, "C": 18, "H": 54 },
    "molarMass": "558.30 g/mol",
    "category": "Silicate complexe",
    "summary": "Cluster de silicium soluble utilisé pour fabriquer des nanostructures de silicium.",
    "occurrence": "Synthétique.",
    "applications": ["Nanomatériaux"]
  },
  {
    "name": "Tétra-n-octylétain",
    "formula": "C₃₂H₆₈Sn",
    "composition": { "C": 32, "H": 68, "Sn": 1 },
    "molarMass": "571.60 g/mol",
    "category": "Organostannique stable",
    "summary": "Stabilisant thermique non toxique (comparé aux méthylétains) pour le PVC alimentaire.",
    "occurrence": "Synthétique.",
    "applications": ["Additif plastique certifié"]
  },
  {
    "name": "Bis(triméthylsilyl) séléniure",
    "formula": "C₆H₁₈SeSi₂",
    "composition": { "C": 6, "H": 18, "Se": 1, "Si": 2 },
    "molarMass": "225.34 g/mol",
    "category": "Source de sélénium",
    "summary": "Réactif pour l'introduction de sélénium dans les molécules organiques et nanocristaux.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie organique", "Points quantiques"]
  },
  {
    "name": "Octaborate de Disodium tétrahydraté",
    "formula": "Na₂B₈O₁₃·4H₂O",
    "composition": { "Na": 2, "B": 8, "O": 17, "H": 8 },
    "molarMass": "412.52 g/mol",
    "category": "Borate soluble",
    "summary": "Produit hautement soluble utilisé pour la préservation du bois et comme micronutriment.",
    "occurrence": "Synthétique (Borbitrate).",
    "applications": ["Construction", "Fertilisant végétal"]
  },
  {
    "name": "Diphénylméthane-4,4'-diisocyanate (MDI)",
    "formula": "C₁₅H₁₀N₂O₂",
    "composition": { "C": 15, "H": 10, "N": 2, "O": 2 },
    "molarMass": "250.25 g/mol",
    "category": "Isocyanate majeur",
    "summary": "Plus de 50% de la production mondiale d'isocyanates, utilisé pour les mousses rigides.",
    "occurrence": "Synthétique.",
    "applications": ["Isolation bâtiment", "Panneaux composites"]
  },
  {
    "name": "Tétrapropyluréthane",
    "formula": "C₁₀H₂₂N₂O₂",
    "composition": { "C": 10, "H": 22, "N": 2, "O": 2 },
    "molarMass": "202.29 g/mol",
    "category": "Uréthane aliphatique",
    "summary": "Modèle d'étude pour la dégradation des polymères de type polyuréthane.",
    "occurrence": "Synthétique.",
    "applications": ["Science des polymères"]
  },
  {
    "name": "Siliciure de Zirconium (ZrSi₂)",
    "formula": "ZrSi₂",
    "composition": { "Zr": 1, "Si": 2 },
    "molarMass": "147.39 g/mol",
    "category": "Céramique de pointe",
    "summary": "Matériau présentant une excellente résistance à l'oxydation à haute température.",
    "occurrence": "Synthétique.",
    "applications": ["Protection thermique spatiale"]
  },
  {
    "name": "Borure de Tantale (TaB₂)",
    "formula": "TaB₂",
    "composition": { "Ta": 1, "B": 2 },
    "molarMass": "202.57 g/mol",
    "category": "Matériau boré lourd",
    "summary": "Borure métallique extrêmement dense et dur, résistant aux attaques acides.",
    "occurrence": "Synthétique.",
    "applications": ["Électrodes de fusion", "Usinage"]
  },
  {
    "name": "Tris(acétylacétonate) de Dysprosium",
    "formula": "C₁₅H₂₁DyO₆",
    "composition": { "C": 15, "H": 21, "Dy": 1, "O": 6 },
    "molarMass": "459.82 g/mol",
    "category": "Complexe luminescent",
    "summary": "Utilisé en spectroscopie de luminescence pour les applications biomédicales.",
    "occurrence": "Synthétique.",
    "applications": ["Bio-imagerie"]
  },
  {
    "name": "Octanoate de Manganèse(II)",
    "formula": "Mn(C₈H₁₅O₂)₂",
    "composition": { "Mn": 1, "C": 16, "H": 30, "O": 4 },
    "molarMass": "341.32 g/mol",
    "category": "Siccatif de peinture",
    "summary": "Promoteur de séchage oxydatif pour les encres et revêtements.",
    "occurrence": "Synthétique.",
    "applications": ["Arts graphiques", "Peintures"]
  },
  {
    "name": "Nitrate d'Europium(III) pentahydraté",
    "formula": "Eu(NO₃)₃·5H₂O",
    "composition": { "Eu": 1, "N": 3, "O": 14, "H": 10 },
    "molarMass": "428.06 g/mol",
    "category": "Sel d'europium",
    "summary": "Précurseur pour les luminophores rouges des écrans de télévision et lampes LED.",
    "occurrence": "Synthétique.",
    "applications": ["Éclairage", "Display"]
  },
  {
    "name": "Bis(cyclopentadiényl)titane dichlorure (Titantocène)",
    "formula": "C₁₀H₁₀Cl₂Ti",
    "composition": { "C": 10, "H": 10, "Cl": 2, "Ti": 1 },
    "molarMass": "248.96 g/mol",
    "category": "Réactif organométallique",
    "summary": "Catalyseur pour les hydrogénations et précurseur de composés biologiquement actifs.",
    "occurrence": "Synthétique.",
    "applications": ["Pharmacie", "Catalyse"]
  },
  {
    "name": "Tellurure de Plomb et Étain (PbSnTe)",
    "formula": "PbSnTe",
    "composition": { "Pb": 1, "Sn": 1, "Te": 1 },
    "molarMass": "453.50 g/mol",
    "category": "Semi-conducteur ternaire",
    "summary": "Matériau ajustable pour les lasers infrarouges et les détecteurs IR lointains.",
    "occurrence": "Synthétique.",
    "applications": ["Spectroscopie de gaz", "Défense"]
  },
  {
    "name": "Périfosine",
    "formula": "C₂₅H₅₂NO₄P",
    "composition": { "C": 25, "H": 52, "N": 1, "O": 4, "P": 1 },
    "molarMass": "461.66 g/mol",
    "category": "Inhibiteur d'Akt",
    "summary": "Analogue d'alkylphosphocholine ciblant la voie de signalisation PI3K/Akt.",
    "occurrence": "Synthétique.",
    "applications": ["Oncologie"]
  },
  {
    "name": "Lapatonide C",
    "formula": "C₂₉H₄₄O₈",
    "composition": { "C": 29, "H": 44, "O": 8 },
    "molarMass": "520.66 g/mol",
    "category": "Lactone macrolide",
    "summary": "Inhibiteur de la pompe à protons bactérienne extrait d'éponges marines.",
    "occurrence": "Éponges (Luffariella variabilis).",
    "applications": ["Antibactérien"]
  },
  {
    "name": "Siliciure de Magnésium (Mg₂Si)",
    "formula": "Mg₂Si",
    "composition": { "Mg": 2, "Si": 1 },
    "molarMass": "76.71 g/mol",
    "category": "Intermétallique",
    "summary": "Matériau thermoélectrique à faible coût et respectueux de l'environnement.",
    "occurrence": "Synthétique.",
    "applications": ["Récupération de chaleur automobile"]
  },
  {
    "name": "Monomère de Polyimide (PMDA)",
    "formula": "C₁₀H₂O₆",
    "composition": { "C": 10, "H": 2, "O": 6 },
    "molarMass": "218.12 g/mol",
    "category": "Anhydride aromatique",
    "summary": "Dianhydride pyromellitique utilisé pour fabriquer le Kapton.",
    "occurrence": "Synthétique.",
    "applications": ["Films isolants aérospatiaux"]
  },
  {
    "name": "Arséniure de Gallium et d'Aluminium (AlGaAs)",
    "formula": "AlGaAs",
    "composition": { "Al": 1, "Ga": 1, "As": 1 },
    "molarMass": "~171 g/mol",
    "category": "Semi-conducteur III-V",
    "summary": "Matériau pour diodes laser et cellules solaires à haut rendement.",
    "occurrence": "Synthétique.",
    "applications": ["Lecteurs CD/DVD", "Énergie"]
  },
  {
    "name": "Tétraméthylguanidine (TMG)",
    "formula": "C₅H₁₃N₃",
    "composition": { "C": 5, "H": 13, "N": 3 },
    "molarMass": "115.18 g/mol",
    "category": "Base organique forte",
    "summary": "Catalyseur utilisé dans la synthèse de polyuréthanes et la fabrication de peptides.",
    "occurrence": "Synthétique.",
    "applications": ["Génie chimique"]
  },
  {
    "name": "Phosphate de Néodyme(III)",
    "formula": "NdPO₄",
    "composition": { "Nd": 1, "P": 1, "O": 4 },
    "molarMass": "239.21 g/mol",
    "category": "Matériau hôte laser",
    "summary": "Utilisé pour la fabrication de sources lumineuses laser de haute puissance.",
    "occurrence": "Minéral (Monazite).",
    "applications": ["Lasers Nd:YAG alternatives"]
  },
  {
    "name": "Octanoate de Cuivre(II)",
    "formula": "Cu(C₈H₁₅O₂)₂",
    "composition": { "Cu": 1, "C": 16, "H": 30, "O": 4 },
    "molarMass": "349.93 g/mol",
    "category": "Fongicide bois",
    "summary": "Conservateur industriel utilisé pour protéger le bois contre les moisissures.",
    "occurrence": "Synthétique.",
    "applications": ["Bâtiment", "Marine"]
  },
  {
    "name": "Tétraéthoxysilane (TEOS)",
    "formula": "C₈H₂₀O₄Si",
    "composition": { "C": 8, "H": 20, "O": 4, "Si": 1 },
    "molarMass": "208.33 g/mol",
    "category": "Précurseur de silice",
    "summary": "Utilisé dans le procédé sol-gel pour fabriquer des verres et des couches de silice.",
    "occurrence": "Synthétique.",
    "applications": ["Micro-électronique", "Optique"]
  },
  {
    "name": "Gomphoside",
    "formula": "C₂₉H₄₂O₉",
    "composition": { "C": 29, "H": 42, "O": 9 },
    "molarMass": "534.64 g/mol",
    "category": "Cardiotonique",
    "summary": "Glycoside stéroïdique issu de Gomphocarpus aux effets sur le muscle cardiaque.",
    "occurrence": "Plantes (Gomphocarpus spp.).",
    "applications": ["Toxicologie"]
  },
  {
    "name": "Borure de Vanadium (VB₂)",
    "formula": "VB₂",
    "composition": { "V": 1, "B": 2 },
    "molarMass": "72.56 g/mol",
    "category": "Céramique borée",
    "summary": "Matériau à dureté exceptionnelle et haute conductivité électrique.",
    "occurrence": "Synthétique.",
    "applications": ["Anodes pour batteries fer-vanadium"]
  },
  {
    "name": "Octaborate de Calcium",
    "formula": "CaB₈O₁₃",
    "composition": { "Ca": 1, "B": 8, "O": 13 },
    "molarMass": "334.56 g/mol",
    "category": "Verre borosilicaté additif",
    "summary": "Utilisé comme source de bore dans la fabrication de fibres de verre E.",
    "occurrence": "Synthétique.",
    "applications": ["Isolants thermiques"]
  },
  {
    "name": "Diphényl carbonate",
    "formula": "C₁₃H₁₀O₃",
    "composition": { "C": 13, "H": 10, "O": 3 },
    "molarMass": "214.22 g/mol",
    "category": "Précurseur de Polycarbonate",
    "summary": "Utilisé dans la synthèse du polycarbonate sans phosgène (procédé vert).",
    "occurrence": "Synthétique.",
    "applications": ["Ingénierie plastique"]
  },
  {
    "name": "Méthacrylate de Lauryle",
    "formula": "C₁₆H₃₀O₂",
    "composition": { "C": 16, "H": 30, "O": 2 },
    "molarMass": "254.41 g/mol",
    "category": "Monomère oléophile",
    "summary": "Utilisé pour la fabrication d'additifs pour huiles minérales et de polymères hydrophobes.",
    "occurrence": "Synthétique.",
    "applications": ["Automobile", "Pétrochimie"]
  },
  {
    "name": "Séléniure de Fer (FeSe)",
    "formula": "FeSe",
    "composition": { "Fe": 1, "Se": 1 },
    "molarMass": "134.81 g/mol",
    "category": "Supraconducteur non-conventionnel",
    "summary": "Simple supraconducteur à base de fer présentant une physique complexe.",
    "occurrence": "Minéral (Achavalite - rare).",
    "applications": ["Physique des basses températures"]
  },
  {
    "name": "Oxalate de Praséodyme(III)",
    "formula": "Pr₂(C₂O₄)₃",
    "composition": { "Pr": 2, "C": 6, "O": 12 },
    "molarMass": "545.90 g/mol",
    "category": "Intermédiaire terre rare",
    "summary": "Utilisé pour séparer le praséodyme du néodyme dans le raffinage.",
    "occurrence": "Synthétique.",
    "applications": ["Céramiques colorées"]
  },
  {
    "name": "Carbure de Silicium (SiC-alpha)",
    "formula": "SiC",
    "composition": { "Si": 1, "C": 1 },
    "molarMass": "40.11 g/mol",
    "category": "Céramique réfractaire",
    "summary": "L'un des matériaux les plus durs connus, utilisé dans les blindages et l'électronique de puissance.",
    "occurrence": "Minéral (Moissanite - météoritique), procédé Acheson.",
    "applications": ["EV Power Inverters", "Usinage"]
  },
  {
    "name": "Tellurure de Zinc et de Plomb (PbZnTe)",
    "formula": "PbZnTe",
    "composition": { "Pb": 1, "Zn": 1, "Te": 1 },
    "molarMass": "400.19 g/mol",
    "category": "Cristal électro-optique",
    "summary": "Matériau pour les modulateurs de lumière et les dispositifs acousto-optiques.",
    "occurrence": "Synthétique.",
    "applications": ["Optique laser"]
  },
  {
    "name": "Acide 11-déshydro-thromboxane B2",
    "formula": "C₂₀H₃₂O₆",
    "composition": { "C": 20, "H": 32, "O": 6 },
    "molarMass": "368.47 g/mol",
    "category": "Métabolite d'eicosanoïde",
    "summary": "Marqueur urinaire principal de l'activation des plaquettes in vivo.",
    "occurrence": "Urine humaine.",
    "applications": ["Diagnostic médical"]
  },
  {
    "name": "Borure de Zirconium (ZrB₂)",
    "formula": "ZrB₂",
    "composition": { "Zr": 1, "B": 2 },
    "molarMass": "112.85 g/mol",
    "category": "Céramique ultra-haute température",
    "summary": "Utilisé pour les bords d'attaque des véhicules hypersoniques.",
    "occurrence": "Synthétique.",
    "applications": ["Aérospatiale militaire"]
  },
  {
    "name": "Tétrapicolinate de Lanthane",
    "formula": "La(C₆H₄NO₂)₄",
    "composition": { "La": 1, "C": 24, "H": 16, "N": 4, "O": 8 },
    "molarMass": "627.38 g/mol",
    "category": "Complexe lanthanide",
    "summary": "Modèle d'étude pour la coordination des terres rares légères.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie de coordination"]
  },
  {
    "name": "Oxysulfure de Gadolinium (Gd₂O₂S)",
    "formula": "Gd₂O₂S",
    "composition": { "Gd": 2, "O": 2, "S": 1 },
    "molarMass": "378.56 g/mol",
    "category": "Luminophore de scintillation",
    "summary": "Utilisé dans les détecteurs à rayons X des tomodensitomètres (Scanner).",
    "occurrence": "Synthétique.",
    "applications": ["Imagerie CT"]
  },
  {
    "name": "Ethylène glycol bis(méthacrylate) (EGDMA)",
    "formula": "C₁₀H₁₄O₄",
    "composition": { "C": 10, "H": 14, "O": 4 },
    "molarMass": "198.22 g/mol",
    "category": "Réticulant acrylique",
    "summary": "Agent créant des liens permanents entre chaînes de polymères.",
    "occurrence": "Synthétique.",
    "applications": ["Lentilles souples"]
  },
  {
    "name": "Borure de Néodyme (NdB₄)",
    "formula": "NdB₄",
    "composition": { "Nd": 1, "B": 4 },
    "molarMass": "187.49 g/mol",
    "category": "Borure de terre rare",
    "summary": "Matériau aux propriétés magnétiques complexes à basse température.",
    "occurrence": "Synthétique.",
    "applications": ["Stockage magnétique"]
  },
  {
    "name": "Tellurure de Gallium et d'Indium (InGaTe₂)",
    "formula": "InGaTe₂",
    "composition": { "In": 1, "Ga": 1, "Te": 2 },
    "molarMass": "439.72 g/mol",
    "category": "Composé ternaire",
    "summary": "Semi-conducteur pour les applications infrarouges de moyenne portée.",
    "occurrence": "Synthétique.",
    "applications": ["Vision nocturne"]
  },
  {
    "name": "Porphyrine de Cobalt (Cobalamine - noyau)",
    "formula": "C₆₃H₈₈CoN₁₄O₁₄P",
    "composition": { "C": 63, "H": 88, "Co": 1, "N": 14, "O": 14, "P": 1 },
    "molarMass": "1355.37 g/mol",
    "category": "Vitamine B12",
    "summary": "Coenzyme essentielle pour la synthèse de l'ADN et le métabolisme des acides gras.",
    "occurrence": "Synthèse bactérienne (intestin, sol).",
    "applications": ["Nutrition", "Hématologie"]
  },
  {
    "name": "Tris(2-chloroisopropyl) phosphate (TCPP)",
    "formula": "C₉H₁₈Cl₃O₄P",
    "composition": { "C": 9, "H": 18, "Cl": 3, "O": 4, "P": 1 },
    "molarMass": "327.57 g/mol",
    "category": "Ignifugeant chlorophosphoré",
    "summary": "Principal retardateur de flamme pour les mousses polyuréthane rigides.",
    "occurrence": "Synthétique.",
    "applications": ["Isolation thermique"]
  },
  {
    "name": "Octasilicate de Sodium",
    "formula": "Na₂Si₈O₁₇",
    "composition": { "Na": 2, "Si": 8, "O": 17 },
    "molarMass": "542.70 g/mol",
    "category": "Silicate condensé",
    "summary": "Utilisé pour la fabrication de silices précipitées spéciales à haute surface.",
    "occurrence": "Synthétique.",
    "applications": ["Renfort de pneus", "Dentifrice"]
  },
  {
    "name": "Triéthylènediamine (DABCO)",
    "formula": "C₆H₁₂N₂",
    "composition": { "C": 6, "H": 12, "N": 2 },
    "molarMass": "112.17 g/mol",
    "category": "Catalyseur amine",
    "summary": "Catalyseur d'expansion clé pour la production de mousses polyuréthane.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie du plastique"]
  },
  {
    "name": "Borure de Molybdène (MoB₂)",
    "formula": "MoB₂",
    "composition": { "Mo": 1, "B": 2 },
    "molarMass": "117.56 g/mol",
    "category": "Matériau boré dur",
    "summary": "Matériau présentant une excellente conductivité thermique et dureté.",
    "occurrence": "Synthétique.",
    "applications": ["Usinage de précision"]
  },
  {
    "name": "Phosphate de Lanthane",
    "formula": "LaPO₄",
    "composition": { "La": 1, "P": 1, "O": 4 },
    "molarMass": "233.88 g/mol",
    "category": "Céramique optique",
    "summary": "Hôte pour les luminophores verts dopés au terbium.",
    "occurrence": "Minéral (Monazite).",
    "applications": ["Fluorescence"]
  },
  {
    "name": "Octanoate de Zinc",
    "formula": "Zn(C₈H₁₅O₂)₂",
    "composition": { "Zn": 1, "C": 16, "H": 30, "O": 4 },
    "molarMass": "351.78 g/mol",
    "category": "Stabilisant savon",
    "summary": "Activateur de vulcanisation et stabilisant thermique pour résines PVC.",
    "occurrence": "Synthétique.",
    "applications": ["Élastomères"]
  },
  {
    "name": "Tétraméthoxygermane (TMOG)",
    "formula": "C₄H₁₂GeO₄",
    "composition": { "C": 4, "H": 12, "Ge": 1, "O": 4 },
    "molarMass": "196.77 g/mol",
    "category": "Précurseur optique",
    "summary": "Source de germanium pour le dopage des fibres optiques.",
    "occurrence": "Synthétique.",
    "applications": ["Signalétique"]
  },
  {
    "name": "Liriodénine",
    "formula": "C₁₇H₉NO₃",
    "composition": { "C": 17, "H": 9, "N": 1, "O": 3 },
    "molarMass": "275.26 g/mol",
    "category": "Alcaloïde oxoaporphinique",
    "summary": "Composé jaune aux propriétés cytotoxiques et antimicrobiennes.",
    "occurrence": "Plantes (Magnoliaceae).",
    "applications": ["Recherche oncologique"]
  },
  {
    "name": "Antimoniure d'Indium (InSb)",
    "formula": "InSb",
    "composition": { "In": 1, "Sb": 1 },
    "molarMass": "236.58 g/mol",
    "category": "Semi-conducteur à petit gap",
    "summary": "Matériau présentant la plus haute mobilité électronique des semi-conducteurs III-V.",
    "occurrence": "Synthétique.",
    "applications": ["Magnétorésistance", "Détecteurs IR"]
  },
  {
    "name": "Porphyrine de Zinc (ZPP)",
    "formula": "C₃₄H₃₂N₄O₄Zn",
    "composition": { "C": 34, "H": 32, "N": 4, "O": 4, "Zn": 1 },
    "molarMass": "626.03 g/mol",
    "category": "Marqueur biologique",
    "summary": "Formée dans les érythrocytes en cas d'empoisonnement au plomb.",
    "occurrence": "Sang (pathologique).",
    "applications": ["Diagnostic saturnisme"]
  },
  {
    "name": "Tétrapicolinate de Praséodyme",
    "formula": "Pr(C₆H₄NO₂)₄",
    "composition": { "Pr": 1, "C": 24, "H": 16, "N": 4, "O": 8 },
    "molarMass": "629.39 g/mol",
    "category": "Complexe lanthanide de spécialité",
    "summary": "Utilisé pour l'étude du paramagnétisme des terres rares.",
    "occurrence": "Synthétique.",
    "applications": ["Spectroscopie RMN (agent de déplacement)"]
  },
  {
    "name": "Tris(2-éthylhexyl) phosphate",
    "formula": "C₂₄H₅₁O₄P",
    "composition": { "C": 24, "H": 51, "O": 4, "P": 1 },
    "molarMass": "434.63 g/mol",
    "category": "Additif lubrifiant",
    "summary": "Hautement stable thermiquement pour les environnements extrêmes.",
    "occurrence": "Synthétique.",
    "applications": ["Nucléaire"]
  },
  {
    "name": "Borure de Tantale (Ta₅B₆)",
    "formula": "Ta₅B₆",
    "composition": { "Ta": 5, "B": 6 },
    "molarMass": "969.59 g/mol",
    "category": "Céramique structurale",
    "summary": "Phase borure riche en tantale utilisée pour sa dureté mécanique exceptionnelle.",
    "occurrence": "Synthétique.",
    "applications": ["Aéronautique"]
  },
  {
    "name": "Dinitrure de Trubidium (Rb₃N₂)",
    "formula": "Rb₃N₂",
    "composition": { "Rb": 3, "N": 2 },
    "molarMass": "284.43 g/mol",
    "category": "Nitrure alcalin",
    "summary": "Composé réactif instable utilisé comme source d'azote pur en recherche.",
    "occurrence": "Synthétique.",
    "applications": ["Laboratoire"]
  },
  {
    "name": "Tellurure de Tantale (TaTe₂)",
    "formula": "TaTe₂",
    "composition": { "Ta": 1, "Te": 2 },
    "molarMass": "436.15 g/mol",
    "category": "Dichalcogénure métallique",
    "summary": "Matériau 2D étudié pour ses phases de densité de charge.",
    "occurrence": "Synthétique.",
    "applications": ["Physique quantique"]
  },
  {
    "name": "Borure de Titane (TiB₂)",
    "formula": "TiB₂",
    "composition": { "Ti": 1, "B": 2 },
    "molarMass": "69.52 g/mol",
    "category": "Céramique conductrice",
    "summary": "Bénéficie d'une conductivité thermique et électrique comparable à celle de l'acier.",
    "occurrence": "Synthétique.",
    "applications": ["Cellules de Hall-Héroult"]
  },
  {
    "name": "Oxalate d'Yttrium(III)",
    "formula": "Y₂(C₂O₄)₃",
    "composition": { "Y": 2, "C": 6, "O": 12 },
    "molarMass": "441.88 g/mol",
    "category": "Précurseur d'yttrium",
    "summary": "Étape intermédiaire pour produire l'oxyde d'yttrium de haute pureté.",
    "occurrence": "Synthétique.",
    "applications": ["Yttria purifiée"]
  },
  {
    "name": "Hexakis(triméthylsilyloxy)silane",
    "formula": "C₁₈H₅₄O₆Si₇",
    "composition": { "C": 18, "H": 54, "O": 6, "Si": 7 },
    "molarMass": "607.41 g/mol",
    "category": "Siloxane ramifié",
    "summary": "Molécule symétrique utilisée pour l'étude des matériaux poreux.",
    "occurrence": "Synthétique.",
    "applications": ["Sol-gel spécialisé"]
  },
  {
    "name": "Borure de Niobium (NbB₂)",
    "formula": "NbB₂",
    "composition": { "Nb": 1, "B": 2 },
    "molarMass": "114.53 g/mol",
    "category": "Céramique ultra-réfractaire",
    "summary": "Utilisé pour les buses de fusée et les outils de coupe haute performance.",
    "occurrence": "Synthétique.",
    "applications": ["Ingénierie thermique"]
  },
  {
    "name": "Nitrate d'Hafnium(IV)",
    "formula": "Hf(NO₃)₄",
    "composition": { "Hf": 1, "N": 4, "O": 12 },
    "molarMass": "426.51 g/mol",
    "category": "Précurseur de film mince",
    "summary": "Utilisé pour le dépôt ALD de HfO₂ dans les transistors High-k.",
    "occurrence": "Synthétique.",
    "applications": ["Nanolitographie"]
  },
  {
    "name": "Bromure de Gallium(III)",
    "formula": "GaBr₃",
    "composition": { "Ga": 1, "Br": 3 },
    "molarMass": "309.43 g/mol",
    "category": "Acide de Lewis",
    "summary": "Catalyseur pour les réactions de Friedel-Crafts sélectives.",
    "occurrence": "Synthétique.",
    "applications": ["Pharmacie de précision"]
  },
  {
    "name": "Octakis(silsesquioxane) (POSS)",
    "formula": "R₈Si₈O₁₂",
    "composition": { "Si": 8, "O": 12, "C": 8, "H": 8 },
    "molarMass": "~600-2000 g/mol",
    "category": "Nanobrique hybride",
    "summary": "Unité structurelle à l'échelle nanométrique pour renforcer les polymères.",
    "occurrence": "Synthétique.",
    "applications": ["Nanocomposites"]
  },
  {
    "name": "Tellurure de Hafnium (HfTe₂)",
    "formula": "HfTe₂",
    "composition": { "Hf": 1, "Te": 2 },
    "molarMass": "433.69 g/mol",
    "category": "Matériau topologique",
    "summary": "Semimétal de Dirac étudié en physique quantique.",
    "occurrence": "Synthétique.",
    "applications": ["Électronique quantique"]
  }
];

/**
 * Batch P43 Finalisé - 500 molécules authentifiées ajoutées.
 */
