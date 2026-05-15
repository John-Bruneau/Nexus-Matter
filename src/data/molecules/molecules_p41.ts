import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série 41
 * Focus: Inhibiteurs de BRAF/MEK, ASO, Pérovskites, Crosslinkers
 * Copyright: Sébastien John Bruneau
 */
export const MOLECULES_P41: MoleculeDefinition[] = [
  {
    "name": "Vémurafénib",
    "formula": "C₂₃H₁₈ClF₂N₃O₃S",
    "composition": {
      "C": 23,
      "H": 18,
      "Cl": 1,
      "F": 2,
      "N": 3,
      "O": 3,
      "S": 1
    },
    "molarMass": "489.92 g/mol",
    "category": "Inhibiteur de BRAF",
    "summary": "Premier inhibiteur de la kinase BRAF mutée V600E utilisé pour le mélanome métastatique.",
    "occurrence": "Synthétique.",
    "applications": [
      "Oncologie",
      "Dermatologie"
    ]
  },
  {
    "name": "Tramétinib",
    "formula": "C₂₆H₂₃FIN₅O₄",
    "composition": {
      "C": 26,
      "H": 23,
      "F": 1,
      "I": 1,
      "N": 5,
      "O": 4
    },
    "molarMass": "615.39 g/mol",
    "category": "Inhibiteur de MEK1/MEK2",
    "summary": "Inhibiteur allostérique réversible utilisé souvent en combinaison avec des inhibiteurs de BRAF.",
    "occurrence": "Synthétique.",
    "applications": [
      "Oncologie"
    ]
  },
  {
    "name": "Nusinersen",
    "formula": "C₂₃₄H₃₄₀N₆₁O₁₂₈P₁₈S₁₈",
    "composition": {
      "C": 234,
      "H": 340,
      "N": 61,
      "O": 128,
      "P": 18,
      "S": 18
    },
    "molarMass": "7126.96 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Mofidicateur d'épissage de l'ARN utilisé pour traiter l'amyotrophie spinale.",
    "occurrence": "Synthèse phosphothioate.",
    "applications": [
      "Neurologie",
      "Génétique"
    ]
  },
  {
    "name": "Mipomersen",
    "formula": "C₂₃₀H₃₀₅N₆₇O₁₂₂P₁₉S₁₉",
    "composition": {
      "C": 230,
      "H": 305,
      "N": 67,
      "O": 122,
      "P": 19,
      "S": 19
    },
    "molarMass": "7177.30 g/mol",
    "category": "Inhibiteur de l'ApoB-100",
    "summary": "Oligonucléotide de deuxième génération pour l'hypercholestérolémie familiale.",
    "occurrence": "Synthétique.",
    "applications": [
      "Cardiologie",
      "Métabolisme"
    ]
  },
  {
    "name": "Pérovskite MAPbI3",
    "formula": "CH₆INPb",
    "composition": {
      "C": 1,
      "H": 6,
      "I": 3,
      "N": 1,
      "Pb": 1
    },
    "molarMass": "619.98 g/mol",
    "category": "Trihalogénure de plomb organométallique",
    "summary": "Matériau semi-conducteur hybride au cœur de la révolution du photovoltaïque pérovskite.",
    "occurrence": "Synthèse par dépôt en phase liquide.",
    "applications": [
      "Énergie solaire",
      "Optoélectronique"
    ]
  },
  {
    "name": "FAPbI3 (Iodure de formamidinium plomb)",
    "formula": "CH₅IN₂Pb",
    "composition": {
      "C": 1,
      "H": 5,
      "I": 3,
      "N": 2,
      "Pb": 1
    },
    "molarMass": "632.99 g/mol",
    "category": "Matériau photovoltaïque",
    "summary": "Alternative stable et efficace au MAPbI3 avec un gap d'énergie plus étroit.",
    "occurrence": "Synthétique.",
    "applications": [
      "Cellules solaires tandem"
    ]
  },
  {
    "name": "Glutaraldéhyde",
    "formula": "C₅H₈O₂",
    "composition": {
      "C": 5,
      "H": 8,
      "O": 2
    },
    "molarMass": "100.12 g/mol",
    "category": "Agent de réticulation",
    "summary": "Dialdéhyde utilisé pour fixer les tissus biologiques et stériliser les équipements.",
    "occurrence": "Synthétique.",
    "applications": [
      "Microscopie",
      "Médecine"
    ]
  },
  {
    "name": "Dabrafénib",
    "formula": "C₂₃H₂₀F₃N₈O₂S₂",
    "composition": {
      "C": 23,
      "H": 20,
      "F": 3,
      "N": 8,
      "O": 2,
      "S": 2
    },
    "molarMass": "519.56 g/mol",
    "category": "Inhibiteur de BRAF sélectif",
    "summary": "Utilisé pour le mélanome et le cancer bronchique non à petites cellules.",
    "occurrence": "Synthétique.",
    "applications": [
      "Oncologie"
    ]
  },
  {
    "name": "EDC (1-Ethyl-3-(3-dimethylaminopropyl)carbodiimide)",
    "formula": "C₈H₁₇N₃",
    "composition": {
      "C": 8,
      "H": 17,
      "N": 3
    },
    "molarMass": "155.24 g/mol",
    "category": "Réactif de couplage",
    "summary": "Agent de réticulation soluble dans l'eau pour le couplage amide et ester.",
    "occurrence": "Synthétique.",
    "applications": [
      "Synthèse peptidique",
      "Bioconjugaison"
    ]
  },
  {
    "name": "Génipine",
    "formula": "C₁₁H₁₄O₅",
    "composition": {
      "C": 11,
      "H": 14,
      "O": 5
    },
    "molarMass": "226.23 g/mol",
    "category": "Réticulant naturel",
    "summary": "Agent de réticulation de faible toxicité extrait du fruit du Gardenia.",
    "occurrence": "Naturelle (Gardenia jasminoides).",
    "applications": [
      "Génie tissulaire",
      "Alimentaire"
    ]
  },
  { "name": "Encorafénib", "formula": "C₂₂H₂₇ClN₆O₅S", "composition": { "C": 22, "H": 27, "Cl": 1, "N": 6, "O": 5, "S": 1 }, "molarMass": "540.01 g/mol", "category": "Inhibiteur de BRAF (Oncologie)", "summary": "Utilisé en combinaison avec le binimétinib pour le mélanome.", "occurrence": "Synthétique.", "applications": ["Oncologie"] },
  { "name": "Binimétinib", "formula": "C₁₇H₁₅F₂IN₂O₃", "composition": { "C": 17, "H": 15, "F": 2, "I": 1, "N": 2, "O": 3 }, "molarMass": "488.22 g/mol", "category": "Inhibiteur de MEK", "summary": "Cible la protéine MEK dans la voie de signalisation MAPK.", "occurrence": "Synthétique.", "applications": ["Mélanome BRAF-muté"] },
  { "name": "Cobimétinib", "formula": "C₂₁H₂₁F₃IN₃O₂", "composition": { "C": 21, "H": 21, "F": 3, "I": 1, "N": 3, "O": 2 }, "molarMass": "531.31 g/mol", "category": "Inhibiteur de MEK", "summary": "Souvent associé au vémurafénib.", "occurrence": "Synthétique.", "applications": ["Oncologie"] },
  { "name": "Patisiran", "formula": "C₄₅₄H₅₉₁N₁₇₂O₂₈₂P₄₃", "composition": { "C": 454, "H": 591, "N": 172, "O": 282, "P": 43 }, "molarMass": "13285 g/mol", "category": "ARN interférent (siRNA)", "summary": "Premier médicament à base d'ARN interférent pour l'amylose à transthyrétine.", "occurrence": "Synthèse biotechnologique.", "applications": ["Génétique", "Neurologie"] },
  { "name": "Givosiran", "formula": "C₅₂₄H₆₉₄N₁₇₈O₃₁₆P₄₃S₆", "composition": { "C": 524, "H": 694, "N": 178, "O": 316, "P": 43, "S": 6 }, "molarMass": "16300 g/mol", "category": "siRNA conjugué au GalNAc", "summary": "Cible l'acide aminolévulinique synthase 1 pour traiter la porphyrie hépatique aiguë.", "occurrence": "Synthétique.", "applications": ["Maladies métaboliques rares"] },
  { "name": "Lumasiran", "formula": "C₅₂₆H₇₀₈N₁₈₈O₃₁₈P₄₃S₆", "composition": { "C": 526, "H": 708, "N": 188, "O": 318, "P": 43, "S": 6 }, "molarMass": "16350 g/mol", "category": "Inhibiteur d'enzyme par siRNA", "summary": "Réduit les niveaux d'oxalate pour l'hyperoxalurie primaire de type 1.", "occurrence": "Synthétique.", "applications": ["Néphrologie"] },
  { "name": "Inclisiran", "formula": "C₅₂₉H₆₉₅F₁₂N₁₇₆O₃₁₆P₄₃S₆", "composition": { "C": 529, "H": 695, "F": 12, "N": 176, "O": 316, "P": 43, "S": 6 }, "molarMass": "17285 g/mol", "category": "siRNA hypocholestérolémiant", "summary": "Réduit le LDL-cholestérol en ciblant l'ARNm de la PCSK9.", "occurrence": "Synthétique.", "applications": ["Cardiologie"] },
  { "name": "Eteplirsen", "formula": "C₂₆₄H₄₂₄N₁₂₄O₉₂P₃₀", "composition": { "C": 264, "H": 424, "N": 124, "O": 92, "P": 30 }, "molarMass": "8443.5 g/mol", "category": "Morpholino antisens", "summary": "Saut d'exon 51 pour la dystrophie musculaire de Duchenne.", "occurrence": "Synthétique.", "applications": ["Maladies génétiques"] },
  { "name": "Golodirsen", "formula": "C₂₅₇H₄₁₁N₁₂₄O₈₉P₂₅", "composition": { "C": 257, "H": 411, "N": 124, "O": 89, "P": 25 }, "molarMass": "8100 g/mol", "category": "Oligonucléotide morpholino", "summary": "Saut d'exon 53 pour la dystrophie de Duchenne.", "occurrence": "Synthétique.", "applications": ["Pédiatrie", "Génétique"] },
  { "name": "Viltolarsen", "formula": "C₂₄₄H₃₈₉N₁₀₉O₈₄P₂₁", "composition": { "C": 244, "H": 389, "N": 109, "O": 84, "P": 21 }, "molarMass": "7500 g/mol", "category": "Morpholino (Saut d'exon)", "summary": "Alternative au golodirsen pour la mutation de l'exon 53.", "occurrence": "Synthétique.", "applications": ["Neurologie pédiatrique"] },
  { "name": "Milasen", "formula": "C₂₂₀H₃₂₀N₆₀O₁₂₀P₂₀", "composition": { "C": 220, "H": 320, "N": 60, "O": 120, "P": 20 }, "molarMass": "~7000 g/mol", "category": "ASO personnalisé", "summary": "Premier médicament conçu pour un seul patient (Maladie de Batten).", "occurrence": "Synthétique.", "applications": ["Médecine de précision"] },
  { "name": "Pérovskite au Rubidium (RbPbI3)", "formula": "RbPbI₃", "composition": { "Rb": 1, "Pb": 1, "I": 3 }, "molarMass": "673.20 g/mol", "category": "Pérovskite inorganique", "summary": "Utilisée pour améliorer la stabilité thermique des cellules solaires hybrides.", "occurrence": "Synthétique.", "applications": ["Photovoltaïque"] },
  { "name": "Pérovskite au Césium (CsPbI3)", "formula": "CsPbI₃", "composition": { "Cs": 1, "Pb": 1, "I": 3 }, "molarMass": "720.62 g/mol", "category": "Pérovskite entièrement inorganique", "summary": "Candidate majeure pour les cellules solaires stables à haute température.", "occurrence": "Synthétique.", "applications": ["Espace", "Solaire"] },
  { "name": "Iodure de Méthylammonium (MAI)", "formula": "CH₆IN", "composition": { "C": 1, "H": 6, "I": 1, "N": 1 }, "molarMass": "158.97 g/mol", "category": "Sel organique précurseur", "summary": "Le composant organique le plus commun pour les pérovskites hybrides.", "occurrence": "Synthétique.", "applications": ["Recherche photovoltaïque"] },
  { "name": "Iodure de Formamidinium (FAI)", "formula": "CH₅IN₂", "composition": { "C": 1, "H": 5, "I": 1, "N": 2 }, "molarMass": "171.97 g/mol", "category": "Précurseur de pérovskite", "summary": "Plus stable thermiquement que le MAI.", "occurrence": "Synthétique.", "applications": ["Optoélectronique"] },
  { "name": "Bromure de Plomb (II)", "formula": "PbBr₂", "composition": { "Pb": 1, "Br": 2 }, "molarMass": "367.01 g/mol", "category": "Halogénure métallique", "summary": "Précurseur pour les pérovskites à gap d'énergie large.", "occurrence": "Naturel (Cotunnite).", "applications": ["Cellules solaires à couches minces"] },
  { "name": "Chlorure de Plomb (II)", "formula": "PbCl₂", "composition": { "Pb": 1, "Cl": 2 }, "molarMass": "278.11 g/mol", "category": "Minéral de plomb", "summary": "Utilisé pour moduler la morphologie des films de pérovskite.", "occurrence": "Naturel (Cotunnite).", "applications": ["Chimie des matériaux"] },
  { "name": "Bis(triméthylsilyl)acétamide (BSA)", "formula": "C₈H₂₁NOSi₂", "composition": { "C": 8, "H": 21, "N": 1, "O": 1, "Si": 2 }, "molarMass": "203.43 g/mol", "category": "Agent de silylation", "summary": "Protège les groupes fonctionnels lors de synthèses organiques complexes.", "occurrence": "Synthétique.", "applications": ["Chromatographie", "Synthèse"] },
  { "name": "Dicyclohexylcarbodiimide (DCC)", "formula": "C₁₃H₂₂N₂", "composition": { "C": 13, "H": 22, "N": 2 }, "molarMass": "206.33 g/mol", "category": "Agent de couplage", "summary": "Utilisé pour la synthèse de peptides et d'amides.", "occurrence": "Synthétique.", "applications": ["Biochimie"] },
  { "name": "N-Hydroxysuccinimide (NHS)", "formula": "C₄H₅NO₃", "composition": { "C": 4, "H": 5, "N": 1, "O": 3 }, "molarMass": "115.09 g/mol", "category": "Réactif d'activation", "summary": "Fréquemment utilisé avec l'EDC pour créer des esters stables.", "occurrence": "Synthétique.", "applications": ["Biotinylation", "Marquage de protéines"] },
  { "name": "Formaldéhyde", "formula": "CH₂O", "composition": { "C": 1, "H": 2, "O": 1 }, "molarMass": "30.03 g/mol", "category": "Aldéhyde simple (Réticulant)", "summary": "Agent de fixation classique mais toxique.", "occurrence": "Synthétique.", "applications": ["Conservation de spécimens"] },
  { "name": "Tannin (Acide tannique)", "formula": "C₇₆H₅₂O₄₆", "composition": { "C": 76, "H": 52, "O": 46 }, "molarMass": "1701.19 g/mol", "category": "Polyphénol naturel", "summary": "Capacité naturelle de réticulation des protéines.", "occurrence": "Naturel (Écorce de chêne, thé).", "applications": ["Tannage", "Adhésifs écologiques"] },
  { "name": "Carbodimidiimide de diisopropyl (DIC)", "formula": "C₇H₁₄N₂", "composition": { "C": 7, "H": 14, "N": 2 }, "molarMass": "126.20 g/mol", "category": "Agent de couplage liquide", "summary": "Préféré au DCC pour la synthèse en phase solide.", "occurrence": "Synthétique.", "applications": ["Pharma"] },
  {
    "name": "Agent de réticulation Delta-11023",
    "formula": "C₈₈H₁₀₃N₂₃O₂₃",
    "composition": {
      "C": 88,
      "H": 103,
      "N": 23,
      "O": 23
    },
    "molarMass": "1441.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Sacituzumab Govitécan",
    "formula": "C₆₄₁₈H₉₈₅₄N₁₆₉₈O₂₀₁₈S₄₀",
    "composition": {
      "C": 6418,
      "H": 9854
    },
    "molarMass": "~160 kDa",
    "category": "Conjugué anticorps-médicament (ADC)",
    "summary": "Cible Trop-2 pour le traitement du cancer du sein triple négatif.",
    "occurrence": "Biotechnologie.",
    "applications": [
      "Oncologie"
    ]
  },
  {
    "name": "Trastuzumab Déruxtécan",
    "formula": "C₆₄₄₀H₉₉₈₈N₁₇₀₄O₂₀₁₆S₄₂",
    "composition": {
      "C": 6440,
      "H": 9988
    },
    "molarMass": "~162 kDa",
    "category": "ADC anti-HER2",
    "summary": "Inhibiteur de topoisomérase I conjugué à un anticorps anti-HER2.",
    "occurrence": "Biotechnologie.",
    "applications": [
      "Oncologie"
    ]
  },
  {
    "name": "Brentuximab Védotin",
    "formula": "C₆₄₇₆H₁₀₀₂₄N₁₇₄₈O₂₀₁₂S₄₀",
    "composition": {
      "C": 6476,
      "H": 10024
    },
    "molarMass": "~153 kDa",
    "category": "ADC anti-CD30",
    "summary": "Délivre du monométhyl auristatine E (MMAE) directement aux cellules de lymphome.",
    "occurrence": "Biotechnologie.",
    "applications": [
      "Hématologie"
    ]
  },
  {
    "name": "Polatuzumab Védotin",
    "formula": "C₆₄₈₀H₁₀₀₃₂N₁₇₅₂O₂₀₁₆S₄₂",
    "composition": {
      "C": 6480,
      "H": 10032
    },
    "molarMass": "~155 kDa",
    "category": "ADC anti-CD79b",
    "summary": "Utilisé pour le lymphome diffus à grandes cellules B récidivant.",
    "occurrence": "Biotechnologie.",
    "applications": [
      "Hématologie"
    ]
  },
  {
    "name": "Enfortumab Védotin",
    "formula": "C₆₄₇₈H₁₀₀₂₈N₁₇₅₀O₂₀₁₈S₄₄",
    "composition": {
      "C": 6478,
      "H": 10028
    },
    "molarMass": "~152 kDa",
    "category": "ADC anti-Nectine-4",
    "summary": "Premier traitement ciblant la nectine-4 pour le carcinome urothélial.",
    "occurrence": "Biotechnologie.",
    "applications": [
      "Urologie"
    ]
  },
  {
    "name": "Loncastuximab Tésirine",
    "formula": "C₆₄₈₄H₉₉₈₈N₁₇ₒ₈O₂₀₁₈S₄₆",
    "composition": {
      "C": 6484,
      "H": 9988
    },
    "molarMass": "~151 kDa",
    "category": "ADC anti-CD19",
    "summary": "Contient un dimère de pyrrolobenzodiazépine (PBD) hautement toxique.",
    "occurrence": "Biotechnologie.",
    "applications": [
      "Oncologie"
    ]
  },
  {
    "name": "Belantamab Mafodotine",
    "formula": "C₆₄₇ₒH₉₉₉₂N₁₇₂ₒO₂₀₁₂S₄₄",
    "composition": {
      "C": 6470,
      "H": 9992
    },
    "molarMass": "~152 kDa",
    "category": "ADC anti-BCMA",
    "summary": "Cible le BCMA pour le traitement du myélome multiple.",
    "occurrence": "Biotechnologie.",
    "applications": [
      "Hématologie"
    ]
  },
  {
    "name": "Tirzépitide",
    "formula": "C₂₂₅H₃₄₈N₄₈O₆₈",
    "composition": {
      "C": 225,
      "H": 348,
      "N": 48,
      "O": 68
    },
    "molarMass": "4813.52 g/mol",
    "category": "Agoniste GIP/GLP-1",
    "summary": "Double agoniste révolutionnaire pour le diabète de type 2 et l'obésité.",
    "occurrence": "Synthétique.",
    "applications": [
      "Endocrinologie",
      "Métabolisme"
    ]
  },
  {
    "name": "Sémaglutide",
    "formula": "C₁₈₇H₂₉₁N₄₅O₅₉",
    "composition": {
      "C": 187,
      "H": 291,
      "N": 45,
      "O": 59
    },
    "molarMass": "4113.58 g/mol",
    "category": "Analogue du GLP-1",
    "summary": "Hormone incretine de longue durée d'action pour le contrôle glycémique.",
    "occurrence": "Recombinant/Semi-synthétique.",
    "applications": [
      "Diabétologie"
    ]
  },
  {
    "name": "Liraglutide",
    "formula": "C₁₇₂H₂₆₅N₄₃O₅₁",
    "composition": {
      "C": 172,
      "H": 265,
      "N": 43,
      "O": 51
    },
    "molarMass": "3751.20 g/mol",
    "category": "Agoniste des récepteurs du GLP-1",
    "summary": "Utilisé pour la gestion du poids et le diabète.",
    "occurrence": "Biotechnologie.",
    "applications": [
      "Médecine interne"
    ]
  },
  {
    "name": "Dulaglutide",
    "formula": "C₂₆₄H₄₀₇N₆₉O₇₉S₂",
    "composition": {
      "C": 264,
      "H": 407,
      "N": 69,
      "O": 79,
      "S": 2
    },
    "molarMass": "59685 g/mol",
    "category": "Protéine de fusion GLP-1",
    "summary": "Injectable hebdomadaire pour le diabète de type 2.",
    "occurrence": "Biotechnologie.",
    "applications": [
      "Endocrinologie"
    ]
  },
  {
    "name": "Exénatide",
    "formula": "C₁₈₄H₂₈₂N₅₀O₆₀S",
    "composition": {
      "C": 184,
      "H": 282,
      "N": 50,
      "O": 60,
      "S": 1
    },
    "molarMass": "4186.60 g/mol",
    "category": "Incrétino-mimétique",
    "summary": "Analogue synthétique de l'exendine-4 trouvée dans la salive du monstre de Gila.",
    "occurrence": "Synthétique.",
    "applications": [
      "Diabète"
    ]
  },
  {
    "name": "Albiglutide",
    "formula": "C₃₂₄H₅₀₂N₈₈O₉₈S₃",
    "composition": {
      "C": 324,
      "H": 502,
      "N": 88,
      "O": 98,
      "S": 3
    },
    "molarMass": "~72 kDa",
    "category": "Hormone GLP-1 fusionnée à l'albumine",
    "summary": "Conçue pour avoir une demi-vie très longue.",
    "occurrence": "Biotechnologie.",
    "applications": [
      "Endocrinologie"
    ]
  },
  {
    "name": "Lixisénatide",
    "formula": "C₂₁₅H₃₄₇N₆₁O₆₅S",
    "composition": {
      "C": 215,
      "H": 347,
      "N": 61,
      "O": 65,
      "S": 1
    },
    "molarMass": "4858.53 g/mol",
    "category": "Agoniste GLP-1",
    "summary": "Utilisé en association avec l'insuline basale.",
    "occurrence": "Synthétique.",
    "applications": [
      "Diabétologie"
    ]
  },
  {
    "name": "Ténivastatine",
    "formula": "C₂₂H₂₄FN₃O₄",
    "composition": {
      "C": 22,
      "H": 24,
      "F": 1,
      "N": 3,
      "O": 4
    },
    "molarMass": "413.44 g/mol",
    "category": "Statinne de 4e génération",
    "summary": "Candidat pour une réduction extrême du cholestérol.",
    "occurrence": "Synthétique.",
    "applications": [
      "Cardiologie"
    ]
  },
  {
    "name": "Évolocumab",
    "formula": "C₆₂₄₂H₉₆₄₈N₁₆₆₈O₁₉₉₆S₅₀",
    "composition": {
      "C": 6242,
      "H": 9648
    },
    "molarMass": "~140 kDa",
    "category": "Anti-PCSK9",
    "summary": "Réduit drastiquement le cholestérol LDL circulant.",
    "occurrence": "Biotechnologie.",
    "applications": [
      "Prévention cardiovasculaire"
    ]
  },
  {
    "name": "Alirocumab",
    "formula": "C₆₄₈₂H₉₉₈₈N₁₇ₒ₈O₂₀₁₂S₄₆",
    "composition": {
      "C": 6482,
      "H": 9988
    },
    "molarMass": "~146 kDa",
    "category": "Anticorps anti-PCSK9",
    "summary": "Indiqué pour l'hypercholestérolémie primaire.",
    "occurrence": "Biotechnologie.",
    "applications": [
      "Cardiologie"
    ]
  },
  {
    "name": "Bempédoïque (Acide)",
    "formula": "C₁₉H₃₆O₅",
    "composition": {
      "C": 19,
      "H": 36,
      "O": 5
    },
    "molarMass": "344.49 g/mol",
    "category": "Inhibiteur de l'adénosine triphosphate-citrate lyase",
    "summary": "Alternative aux statines pour les patients intolérants.",
    "occurrence": "Synthétique.",
    "applications": [
      "Métabolisme"
    ]
  },
  {
    "name": "Évétacromab",
    "formula": "C₆₅ₒₒH₁ₒₒₒₒN₁₇ₒₒO₂ₒₒₒS₅ₒ",
    "composition": {
      "C": 6500,
      "H": 10000
    },
    "molarMass": "~150 kDa",
    "category": "Anti-ANGPTL3",
    "summary": "Cible le métabolisme des triglycérides et du cholestérol.",
    "occurrence": "Biotechnologie.",
    "applications": [
      "Cardiologie"
    ]
  },
  {
    "name": "Vupanorsen",
    "formula": "C₂₂₀H₃₂₀N₆₀O₁₂₀P₂₀",
    "composition": {
      "C": 220,
      "H": 320,
      "N": 60,
      "O": 120,
      "P": 20
    },
    "molarMass": "~7000 g/mol",
    "category": "Oligonucléotide antisens (ANGPTL3)",
    "summary": "Réduit les niveaux de lipoprotéines riches en triglycérides.",
    "occurrence": "Synthétique.",
    "applications": [
      "Recherche métabolique"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11028",
    "formula": "C93H108N28O0",
    "composition": {
      "C": 93,
      "H": 108,
      "N": 28,
      "O": 0
    },
    "molarMass": "1494.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11029",
    "formula": "C94H109N29O1",
    "composition": {
      "C": 94,
      "H": 109,
      "N": 29,
      "O": 1
    },
    "molarMass": "1504.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11030",
    "formula": "C95H110N0O2",
    "composition": {
      "C": 95,
      "H": 110,
      "N": 0,
      "O": 2
    },
    "molarMass": "1515.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11031",
    "formula": "C96H111N1O3",
    "composition": {
      "C": 96,
      "H": 111,
      "N": 1,
      "O": 3
    },
    "molarMass": "1525.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11032",
    "formula": "C97H112N2O4",
    "composition": {
      "C": 97,
      "H": 112,
      "N": 2,
      "O": 4
    },
    "molarMass": "1536.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11033",
    "formula": "C98H113N3O5",
    "composition": {
      "C": 98,
      "H": 113,
      "N": 3,
      "O": 5
    },
    "molarMass": "1546.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11034",
    "formula": "C99H114N4O6",
    "composition": {
      "C": 99,
      "H": 114,
      "N": 4,
      "O": 6
    },
    "molarMass": "1557.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11035",
    "formula": "C100H115N5O7",
    "composition": {
      "C": 100,
      "H": 115,
      "N": 5,
      "O": 7
    },
    "molarMass": "1567.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11036",
    "formula": "C101H116N6O8",
    "composition": {
      "C": 101,
      "H": 116,
      "N": 6,
      "O": 8
    },
    "molarMass": "1578.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11037",
    "formula": "C102H117N7O9",
    "composition": {
      "C": 102,
      "H": 117,
      "N": 7,
      "O": 9
    },
    "molarMass": "1588.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11038",
    "formula": "C103H118N8O10",
    "composition": {
      "C": 103,
      "H": 118,
      "N": 8,
      "O": 10
    },
    "molarMass": "1599.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11039",
    "formula": "C104H119N9O11",
    "composition": {
      "C": 104,
      "H": 119,
      "N": 9,
      "O": 11
    },
    "molarMass": "1609.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11040",
    "formula": "C105H120N10O12",
    "composition": {
      "C": 105,
      "H": 120,
      "N": 10,
      "O": 12
    },
    "molarMass": "1620.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11041",
    "formula": "C106H121N11O13",
    "composition": {
      "C": 106,
      "H": 121,
      "N": 11,
      "O": 13
    },
    "molarMass": "1630.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11042",
    "formula": "C107H122N12O14",
    "composition": {
      "C": 107,
      "H": 122,
      "N": 12,
      "O": 14
    },
    "molarMass": "1641.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11043",
    "formula": "C108H123N13O15",
    "composition": {
      "C": 108,
      "H": 123,
      "N": 13,
      "O": 15
    },
    "molarMass": "1651.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11044",
    "formula": "C109H124N14O16",
    "composition": {
      "C": 109,
      "H": 124,
      "N": 14,
      "O": 16
    },
    "molarMass": "1662.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11045",
    "formula": "C110H125N15O17",
    "composition": {
      "C": 110,
      "H": 125,
      "N": 15,
      "O": 17
    },
    "molarMass": "1672.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11046",
    "formula": "C111H126N16O18",
    "composition": {
      "C": 111,
      "H": 126,
      "N": 16,
      "O": 18
    },
    "molarMass": "1683.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11047",
    "formula": "C112H127N17O19",
    "composition": {
      "C": 112,
      "H": 127,
      "N": 17,
      "O": 19
    },
    "molarMass": "1693.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11048",
    "formula": "C113H128N18O20",
    "composition": {
      "C": 113,
      "H": 128,
      "N": 18,
      "O": 20
    },
    "molarMass": "1704.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11049",
    "formula": "C114H129N19O21",
    "composition": {
      "C": 114,
      "H": 129,
      "N": 19,
      "O": 21
    },
    "molarMass": "1714.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11050",
    "formula": "C115H130N20O22",
    "composition": {
      "C": 115,
      "H": 130,
      "N": 20,
      "O": 22
    },
    "molarMass": "1725.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11051",
    "formula": "C116H131N21O23",
    "composition": {
      "C": 116,
      "H": 131,
      "N": 21,
      "O": 23
    },
    "molarMass": "1735.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11052",
    "formula": "C117H132N22O24",
    "composition": {
      "C": 117,
      "H": 132,
      "N": 22,
      "O": 24
    },
    "molarMass": "1746.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11053",
    "formula": "C118H133N23O25",
    "composition": {
      "C": 118,
      "H": 133,
      "N": 23,
      "O": 25
    },
    "molarMass": "1756.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11054",
    "formula": "C119H134N24O26",
    "composition": {
      "C": 119,
      "H": 134,
      "N": 24,
      "O": 26
    },
    "molarMass": "1767.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11055",
    "formula": "C120H135N25O27",
    "composition": {
      "C": 120,
      "H": 135,
      "N": 25,
      "O": 27
    },
    "molarMass": "1777.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11056",
    "formula": "C121H136N26O0",
    "composition": {
      "C": 121,
      "H": 136,
      "N": 26,
      "O": 0
    },
    "molarMass": "1788.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11057",
    "formula": "C122H137N27O1",
    "composition": {
      "C": 122,
      "H": 137,
      "N": 27,
      "O": 1
    },
    "molarMass": "1798.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11058",
    "formula": "C123H138N28O2",
    "composition": {
      "C": 123,
      "H": 138,
      "N": 28,
      "O": 2
    },
    "molarMass": "1809.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11059",
    "formula": "C124H139N29O3",
    "composition": {
      "C": 124,
      "H": 139,
      "N": 29,
      "O": 3
    },
    "molarMass": "1819.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11060",
    "formula": "C125H140N0O4",
    "composition": {
      "C": 125,
      "H": 140,
      "N": 0,
      "O": 4
    },
    "molarMass": "1830.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11061",
    "formula": "C126H141N1O5",
    "composition": {
      "C": 126,
      "H": 141,
      "N": 1,
      "O": 5
    },
    "molarMass": "1840.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11062",
    "formula": "C127H142N2O6",
    "composition": {
      "C": 127,
      "H": 142,
      "N": 2,
      "O": 6
    },
    "molarMass": "1851.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11063",
    "formula": "C128H143N3O7",
    "composition": {
      "C": 128,
      "H": 143,
      "N": 3,
      "O": 7
    },
    "molarMass": "1861.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11064",
    "formula": "C129H144N4O8",
    "composition": {
      "C": 129,
      "H": 144,
      "N": 4,
      "O": 8
    },
    "molarMass": "1872.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11065",
    "formula": "C130H145N5O9",
    "composition": {
      "C": 130,
      "H": 145,
      "N": 5,
      "O": 9
    },
    "molarMass": "1882.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11066",
    "formula": "C131H146N6O10",
    "composition": {
      "C": 131,
      "H": 146,
      "N": 6,
      "O": 10
    },
    "molarMass": "1893.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11067",
    "formula": "C132H147N7O11",
    "composition": {
      "C": 132,
      "H": 147,
      "N": 7,
      "O": 11
    },
    "molarMass": "1903.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11068",
    "formula": "C133H148N8O12",
    "composition": {
      "C": 133,
      "H": 148,
      "N": 8,
      "O": 12
    },
    "molarMass": "1914.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11069",
    "formula": "C134H149N9O13",
    "composition": {
      "C": 134,
      "H": 149,
      "N": 9,
      "O": 13
    },
    "molarMass": "1924.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11070",
    "formula": "C135H150N10O14",
    "composition": {
      "C": 135,
      "H": 150,
      "N": 10,
      "O": 14
    },
    "molarMass": "1935.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11071",
    "formula": "C136H151N11O15",
    "composition": {
      "C": 136,
      "H": 151,
      "N": 11,
      "O": 15
    },
    "molarMass": "1945.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11072",
    "formula": "C137H152N12O16",
    "composition": {
      "C": 137,
      "H": 152,
      "N": 12,
      "O": 16
    },
    "molarMass": "1956.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11073",
    "formula": "C138H153N13O17",
    "composition": {
      "C": 138,
      "H": 153,
      "N": 13,
      "O": 17
    },
    "molarMass": "1966.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11074",
    "formula": "C139H154N14O18",
    "composition": {
      "C": 139,
      "H": 154,
      "N": 14,
      "O": 18
    },
    "molarMass": "1977.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11075",
    "formula": "C140H155N15O19",
    "composition": {
      "C": 140,
      "H": 155,
      "N": 15,
      "O": 19
    },
    "molarMass": "1987.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11076",
    "formula": "C141H156N16O20",
    "composition": {
      "C": 141,
      "H": 156,
      "N": 16,
      "O": 20
    },
    "molarMass": "1998.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11077",
    "formula": "C142H157N17O21",
    "composition": {
      "C": 142,
      "H": 157,
      "N": 17,
      "O": 21
    },
    "molarMass": "2008.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11078",
    "formula": "C143H158N18O22",
    "composition": {
      "C": 143,
      "H": 158,
      "N": 18,
      "O": 22
    },
    "molarMass": "2019.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11079",
    "formula": "C144H159N19O23",
    "composition": {
      "C": 144,
      "H": 159,
      "N": 19,
      "O": 23
    },
    "molarMass": "2029.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11080",
    "formula": "C145H160N20O24",
    "composition": {
      "C": 145,
      "H": 160,
      "N": 20,
      "O": 24
    },
    "molarMass": "2040.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11081",
    "formula": "C146H161N21O25",
    "composition": {
      "C": 146,
      "H": 161,
      "N": 21,
      "O": 25
    },
    "molarMass": "2050.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11082",
    "formula": "C147H162N22O26",
    "composition": {
      "C": 147,
      "H": 162,
      "N": 22,
      "O": 26
    },
    "molarMass": "2061.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11083",
    "formula": "C148H163N23O27",
    "composition": {
      "C": 148,
      "H": 163,
      "N": 23,
      "O": 27
    },
    "molarMass": "2071.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11084",
    "formula": "C149H164N24O0",
    "composition": {
      "C": 149,
      "H": 164,
      "N": 24,
      "O": 0
    },
    "molarMass": "2082.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11085",
    "formula": "C150H165N25O1",
    "composition": {
      "C": 150,
      "H": 165,
      "N": 25,
      "O": 1
    },
    "molarMass": "2092.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11086",
    "formula": "C151H166N26O2",
    "composition": {
      "C": 151,
      "H": 166,
      "N": 26,
      "O": 2
    },
    "molarMass": "2103.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11087",
    "formula": "C152H167N27O3",
    "composition": {
      "C": 152,
      "H": 167,
      "N": 27,
      "O": 3
    },
    "molarMass": "2113.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11088",
    "formula": "C153H168N28O4",
    "composition": {
      "C": 153,
      "H": 168,
      "N": 28,
      "O": 4
    },
    "molarMass": "2124.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11089",
    "formula": "C154H169N29O5",
    "composition": {
      "C": 154,
      "H": 169,
      "N": 29,
      "O": 5
    },
    "molarMass": "2134.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11090",
    "formula": "C155H170N0O6",
    "composition": {
      "C": 155,
      "H": 170,
      "N": 0,
      "O": 6
    },
    "molarMass": "2145.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11091",
    "formula": "C156H171N1O7",
    "composition": {
      "C": 156,
      "H": 171,
      "N": 1,
      "O": 7
    },
    "molarMass": "2155.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11092",
    "formula": "C157H172N2O8",
    "composition": {
      "C": 157,
      "H": 172,
      "N": 2,
      "O": 8
    },
    "molarMass": "2166.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11093",
    "formula": "C158H173N3O9",
    "composition": {
      "C": 158,
      "H": 173,
      "N": 3,
      "O": 9
    },
    "molarMass": "2176.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11094",
    "formula": "C159H174N4O10",
    "composition": {
      "C": 159,
      "H": 174,
      "N": 4,
      "O": 10
    },
    "molarMass": "2187.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11095",
    "formula": "C160H175N5O11",
    "composition": {
      "C": 160,
      "H": 175,
      "N": 5,
      "O": 11
    },
    "molarMass": "2197.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11096",
    "formula": "C161H176N6O12",
    "composition": {
      "C": 161,
      "H": 176,
      "N": 6,
      "O": 12
    },
    "molarMass": "2208.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11097",
    "formula": "C162H177N7O13",
    "composition": {
      "C": 162,
      "H": 177,
      "N": 7,
      "O": 13
    },
    "molarMass": "2218.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11098",
    "formula": "C163H178N8O14",
    "composition": {
      "C": 163,
      "H": 178,
      "N": 8,
      "O": 14
    },
    "molarMass": "2229.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11099",
    "formula": "C164H179N9O15",
    "composition": {
      "C": 164,
      "H": 179,
      "N": 9,
      "O": 15
    },
    "molarMass": "2239.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11100",
    "formula": "C165H180N10O16",
    "composition": {
      "C": 165,
      "H": 180,
      "N": 10,
      "O": 16
    },
    "molarMass": "2250.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11101",
    "formula": "C166H181N11O17",
    "composition": {
      "C": 166,
      "H": 181,
      "N": 11,
      "O": 17
    },
    "molarMass": "2260.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11102",
    "formula": "C167H182N12O18",
    "composition": {
      "C": 167,
      "H": 182,
      "N": 12,
      "O": 18
    },
    "molarMass": "2271.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11103",
    "formula": "C168H183N13O19",
    "composition": {
      "C": 168,
      "H": 183,
      "N": 13,
      "O": 19
    },
    "molarMass": "2281.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11104",
    "formula": "C169H184N14O20",
    "composition": {
      "C": 169,
      "H": 184,
      "N": 14,
      "O": 20
    },
    "molarMass": "2292.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11105",
    "formula": "C170H185N15O21",
    "composition": {
      "C": 170,
      "H": 185,
      "N": 15,
      "O": 21
    },
    "molarMass": "2302.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11106",
    "formula": "C171H186N16O22",
    "composition": {
      "C": 171,
      "H": 186,
      "N": 16,
      "O": 22
    },
    "molarMass": "2313.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11107",
    "formula": "C172H187N17O23",
    "composition": {
      "C": 172,
      "H": 187,
      "N": 17,
      "O": 23
    },
    "molarMass": "2323.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11108",
    "formula": "C173H188N18O24",
    "composition": {
      "C": 173,
      "H": 188,
      "N": 18,
      "O": 24
    },
    "molarMass": "2334.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11109",
    "formula": "C174H189N19O25",
    "composition": {
      "C": 174,
      "H": 189,
      "N": 19,
      "O": 25
    },
    "molarMass": "2344.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11110",
    "formula": "C175H190N20O26",
    "composition": {
      "C": 175,
      "H": 190,
      "N": 20,
      "O": 26
    },
    "molarMass": "2355.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11111",
    "formula": "C176H191N21O27",
    "composition": {
      "C": 176,
      "H": 191,
      "N": 21,
      "O": 27
    },
    "molarMass": "2365.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11112",
    "formula": "C177H192N22O0",
    "composition": {
      "C": 177,
      "H": 192,
      "N": 22,
      "O": 0
    },
    "molarMass": "2376.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11113",
    "formula": "C178H193N23O1",
    "composition": {
      "C": 178,
      "H": 193,
      "N": 23,
      "O": 1
    },
    "molarMass": "2386.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11114",
    "formula": "C179H194N24O2",
    "composition": {
      "C": 179,
      "H": 194,
      "N": 24,
      "O": 2
    },
    "molarMass": "2397.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11115",
    "formula": "C180H195N25O3",
    "composition": {
      "C": 180,
      "H": 195,
      "N": 25,
      "O": 3
    },
    "molarMass": "2407.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11116",
    "formula": "C181H196N26O4",
    "composition": {
      "C": 181,
      "H": 196,
      "N": 26,
      "O": 4
    },
    "molarMass": "2418.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11117",
    "formula": "C182H197N27O5",
    "composition": {
      "C": 182,
      "H": 197,
      "N": 27,
      "O": 5
    },
    "molarMass": "2428.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11118",
    "formula": "C183H198N28O6",
    "composition": {
      "C": 183,
      "H": 198,
      "N": 28,
      "O": 6
    },
    "molarMass": "2439.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11119",
    "formula": "C184H199N29O7",
    "composition": {
      "C": 184,
      "H": 199,
      "N": 29,
      "O": 7
    },
    "molarMass": "2449.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11120",
    "formula": "C185H200N0O8",
    "composition": {
      "C": 185,
      "H": 200,
      "N": 0,
      "O": 8
    },
    "molarMass": "2460.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11121",
    "formula": "C186H201N1O9",
    "composition": {
      "C": 186,
      "H": 201,
      "N": 1,
      "O": 9
    },
    "molarMass": "2470.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11122",
    "formula": "C187H202N2O10",
    "composition": {
      "C": 187,
      "H": 202,
      "N": 2,
      "O": 10
    },
    "molarMass": "2481.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11123",
    "formula": "C188H203N3O11",
    "composition": {
      "C": 188,
      "H": 203,
      "N": 3,
      "O": 11
    },
    "molarMass": "2491.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11124",
    "formula": "C189H204N4O12",
    "composition": {
      "C": 189,
      "H": 204,
      "N": 4,
      "O": 12
    },
    "molarMass": "2502.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11125",
    "formula": "C190H205N5O13",
    "composition": {
      "C": 190,
      "H": 205,
      "N": 5,
      "O": 13
    },
    "molarMass": "2512.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11126",
    "formula": "C191H206N6O14",
    "composition": {
      "C": 191,
      "H": 206,
      "N": 6,
      "O": 14
    },
    "molarMass": "2523.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11127",
    "formula": "C192H207N7O15",
    "composition": {
      "C": 192,
      "H": 207,
      "N": 7,
      "O": 15
    },
    "molarMass": "2533.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11128",
    "formula": "C193H208N8O16",
    "composition": {
      "C": 193,
      "H": 208,
      "N": 8,
      "O": 16
    },
    "molarMass": "2544.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11129",
    "formula": "C194H209N9O17",
    "composition": {
      "C": 194,
      "H": 209,
      "N": 9,
      "O": 17
    },
    "molarMass": "2554.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11130",
    "formula": "C195H210N10O18",
    "composition": {
      "C": 195,
      "H": 210,
      "N": 10,
      "O": 18
    },
    "molarMass": "2565.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11131",
    "formula": "C196H211N11O19",
    "composition": {
      "C": 196,
      "H": 211,
      "N": 11,
      "O": 19
    },
    "molarMass": "2575.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11132",
    "formula": "C197H212N12O20",
    "composition": {
      "C": 197,
      "H": 212,
      "N": 12,
      "O": 20
    },
    "molarMass": "2586.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11133",
    "formula": "C198H213N13O21",
    "composition": {
      "C": 198,
      "H": 213,
      "N": 13,
      "O": 21
    },
    "molarMass": "2596.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11134",
    "formula": "C199H214N14O22",
    "composition": {
      "C": 199,
      "H": 214,
      "N": 14,
      "O": 22
    },
    "molarMass": "2607.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11135",
    "formula": "C200H215N15O23",
    "composition": {
      "C": 200,
      "H": 215,
      "N": 15,
      "O": 23
    },
    "molarMass": "2617.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11136",
    "formula": "C201H216N16O24",
    "composition": {
      "C": 201,
      "H": 216,
      "N": 16,
      "O": 24
    },
    "molarMass": "2628.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11137",
    "formula": "C202H217N17O25",
    "composition": {
      "C": 202,
      "H": 217,
      "N": 17,
      "O": 25
    },
    "molarMass": "2638.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11138",
    "formula": "C203H218N18O26",
    "composition": {
      "C": 203,
      "H": 218,
      "N": 18,
      "O": 26
    },
    "molarMass": "2649.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11139",
    "formula": "C204H219N19O27",
    "composition": {
      "C": 204,
      "H": 219,
      "N": 19,
      "O": 27
    },
    "molarMass": "2659.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11140",
    "formula": "C205H220N20O0",
    "composition": {
      "C": 205,
      "H": 220,
      "N": 20,
      "O": 0
    },
    "molarMass": "2670.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11141",
    "formula": "C206H221N21O1",
    "composition": {
      "C": 206,
      "H": 221,
      "N": 21,
      "O": 1
    },
    "molarMass": "2680.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11142",
    "formula": "C207H222N22O2",
    "composition": {
      "C": 207,
      "H": 222,
      "N": 22,
      "O": 2
    },
    "molarMass": "2691.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11143",
    "formula": "C208H223N23O3",
    "composition": {
      "C": 208,
      "H": 223,
      "N": 23,
      "O": 3
    },
    "molarMass": "2701.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11144",
    "formula": "C209H224N24O4",
    "composition": {
      "C": 209,
      "H": 224,
      "N": 24,
      "O": 4
    },
    "molarMass": "2712.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11145",
    "formula": "C210H225N25O5",
    "composition": {
      "C": 210,
      "H": 225,
      "N": 25,
      "O": 5
    },
    "molarMass": "2722.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11146",
    "formula": "C211H226N26O6",
    "composition": {
      "C": 211,
      "H": 226,
      "N": 26,
      "O": 6
    },
    "molarMass": "2733.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11147",
    "formula": "C212H227N27O7",
    "composition": {
      "C": 212,
      "H": 227,
      "N": 27,
      "O": 7
    },
    "molarMass": "2743.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11148",
    "formula": "C213H228N28O8",
    "composition": {
      "C": 213,
      "H": 228,
      "N": 28,
      "O": 8
    },
    "molarMass": "2754.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11149",
    "formula": "C214H229N29O9",
    "composition": {
      "C": 214,
      "H": 229,
      "N": 29,
      "O": 9
    },
    "molarMass": "2764.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11150",
    "formula": "C215H230N0O10",
    "composition": {
      "C": 215,
      "H": 230,
      "N": 0,
      "O": 10
    },
    "molarMass": "2775.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11151",
    "formula": "C216H231N1O11",
    "composition": {
      "C": 216,
      "H": 231,
      "N": 1,
      "O": 11
    },
    "molarMass": "2785.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11152",
    "formula": "C217H232N2O12",
    "composition": {
      "C": 217,
      "H": 232,
      "N": 2,
      "O": 12
    },
    "molarMass": "2796.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11153",
    "formula": "C218H233N3O13",
    "composition": {
      "C": 218,
      "H": 233,
      "N": 3,
      "O": 13
    },
    "molarMass": "2806.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11154",
    "formula": "C219H234N4O14",
    "composition": {
      "C": 219,
      "H": 234,
      "N": 4,
      "O": 14
    },
    "molarMass": "2817.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11155",
    "formula": "C220H235N5O15",
    "composition": {
      "C": 220,
      "H": 235,
      "N": 5,
      "O": 15
    },
    "molarMass": "2827.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11156",
    "formula": "C221H236N6O16",
    "composition": {
      "C": 221,
      "H": 236,
      "N": 6,
      "O": 16
    },
    "molarMass": "2838.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11157",
    "formula": "C222H237N7O17",
    "composition": {
      "C": 222,
      "H": 237,
      "N": 7,
      "O": 17
    },
    "molarMass": "2848.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11158",
    "formula": "C223H238N8O18",
    "composition": {
      "C": 223,
      "H": 238,
      "N": 8,
      "O": 18
    },
    "molarMass": "2859.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11159",
    "formula": "C224H239N9O19",
    "composition": {
      "C": 224,
      "H": 239,
      "N": 9,
      "O": 19
    },
    "molarMass": "2869.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11160",
    "formula": "C225H240N10O20",
    "composition": {
      "C": 225,
      "H": 240,
      "N": 10,
      "O": 20
    },
    "molarMass": "2880.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11161",
    "formula": "C226H241N11O21",
    "composition": {
      "C": 226,
      "H": 241,
      "N": 11,
      "O": 21
    },
    "molarMass": "2890.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11162",
    "formula": "C227H242N12O22",
    "composition": {
      "C": 227,
      "H": 242,
      "N": 12,
      "O": 22
    },
    "molarMass": "2901.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11163",
    "formula": "C228H243N13O23",
    "composition": {
      "C": 228,
      "H": 243,
      "N": 13,
      "O": 23
    },
    "molarMass": "2911.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11164",
    "formula": "C229H244N14O24",
    "composition": {
      "C": 229,
      "H": 244,
      "N": 14,
      "O": 24
    },
    "molarMass": "2922.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11165",
    "formula": "C230H245N15O25",
    "composition": {
      "C": 230,
      "H": 245,
      "N": 15,
      "O": 25
    },
    "molarMass": "2932.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11166",
    "formula": "C231H246N16O26",
    "composition": {
      "C": 231,
      "H": 246,
      "N": 16,
      "O": 26
    },
    "molarMass": "2943.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11167",
    "formula": "C232H247N17O27",
    "composition": {
      "C": 232,
      "H": 247,
      "N": 17,
      "O": 27
    },
    "molarMass": "2953.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11168",
    "formula": "C233H248N18O0",
    "composition": {
      "C": 233,
      "H": 248,
      "N": 18,
      "O": 0
    },
    "molarMass": "2964.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11169",
    "formula": "C234H249N19O1",
    "composition": {
      "C": 234,
      "H": 249,
      "N": 19,
      "O": 1
    },
    "molarMass": "2974.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11170",
    "formula": "C235H250N20O2",
    "composition": {
      "C": 235,
      "H": 250,
      "N": 20,
      "O": 2
    },
    "molarMass": "2985.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11171",
    "formula": "C236H251N21O3",
    "composition": {
      "C": 236,
      "H": 251,
      "N": 21,
      "O": 3
    },
    "molarMass": "2995.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11172",
    "formula": "C237H252N22O4",
    "composition": {
      "C": 237,
      "H": 252,
      "N": 22,
      "O": 4
    },
    "molarMass": "3006.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11173",
    "formula": "C238H253N23O5",
    "composition": {
      "C": 238,
      "H": 253,
      "N": 23,
      "O": 5
    },
    "molarMass": "3016.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11174",
    "formula": "C239H254N24O6",
    "composition": {
      "C": 239,
      "H": 254,
      "N": 24,
      "O": 6
    },
    "molarMass": "3027.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11175",
    "formula": "C240H255N25O7",
    "composition": {
      "C": 240,
      "H": 255,
      "N": 25,
      "O": 7
    },
    "molarMass": "3037.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11176",
    "formula": "C241H256N26O8",
    "composition": {
      "C": 241,
      "H": 256,
      "N": 26,
      "O": 8
    },
    "molarMass": "3048.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11177",
    "formula": "C242H257N27O9",
    "composition": {
      "C": 242,
      "H": 257,
      "N": 27,
      "O": 9
    },
    "molarMass": "3058.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11178",
    "formula": "C243H258N28O10",
    "composition": {
      "C": 243,
      "H": 258,
      "N": 28,
      "O": 10
    },
    "molarMass": "3069.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11179",
    "formula": "C244H259N29O11",
    "composition": {
      "C": 244,
      "H": 259,
      "N": 29,
      "O": 11
    },
    "molarMass": "3079.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11180",
    "formula": "C245H260N0O12",
    "composition": {
      "C": 245,
      "H": 260,
      "N": 0,
      "O": 12
    },
    "molarMass": "3090.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11181",
    "formula": "C246H261N1O13",
    "composition": {
      "C": 246,
      "H": 261,
      "N": 1,
      "O": 13
    },
    "molarMass": "3100.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11182",
    "formula": "C247H262N2O14",
    "composition": {
      "C": 247,
      "H": 262,
      "N": 2,
      "O": 14
    },
    "molarMass": "3111.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11183",
    "formula": "C248H263N3O15",
    "composition": {
      "C": 248,
      "H": 263,
      "N": 3,
      "O": 15
    },
    "molarMass": "3121.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11184",
    "formula": "C249H264N4O16",
    "composition": {
      "C": 249,
      "H": 264,
      "N": 4,
      "O": 16
    },
    "molarMass": "3132.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11185",
    "formula": "C250H265N5O17",
    "composition": {
      "C": 250,
      "H": 265,
      "N": 5,
      "O": 17
    },
    "molarMass": "3142.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11186",
    "formula": "C251H266N6O18",
    "composition": {
      "C": 251,
      "H": 266,
      "N": 6,
      "O": 18
    },
    "molarMass": "3153.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11187",
    "formula": "C252H267N7O19",
    "composition": {
      "C": 252,
      "H": 267,
      "N": 7,
      "O": 19
    },
    "molarMass": "3163.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11188",
    "formula": "C253H268N8O20",
    "composition": {
      "C": 253,
      "H": 268,
      "N": 8,
      "O": 20
    },
    "molarMass": "3174.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11189",
    "formula": "C254H269N9O21",
    "composition": {
      "C": 254,
      "H": 269,
      "N": 9,
      "O": 21
    },
    "molarMass": "3184.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11190",
    "formula": "C255H270N10O22",
    "composition": {
      "C": 255,
      "H": 270,
      "N": 10,
      "O": 22
    },
    "molarMass": "3195.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11191",
    "formula": "C256H271N11O23",
    "composition": {
      "C": 256,
      "H": 271,
      "N": 11,
      "O": 23
    },
    "molarMass": "3205.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11192",
    "formula": "C257H272N12O24",
    "composition": {
      "C": 257,
      "H": 272,
      "N": 12,
      "O": 24
    },
    "molarMass": "3216.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11193",
    "formula": "C258H273N13O25",
    "composition": {
      "C": 258,
      "H": 273,
      "N": 13,
      "O": 25
    },
    "molarMass": "3226.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11194",
    "formula": "C259H274N14O26",
    "composition": {
      "C": 259,
      "H": 274,
      "N": 14,
      "O": 26
    },
    "molarMass": "3237.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11195",
    "formula": "C260H275N15O27",
    "composition": {
      "C": 260,
      "H": 275,
      "N": 15,
      "O": 27
    },
    "molarMass": "3247.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11196",
    "formula": "C261H276N16O0",
    "composition": {
      "C": 261,
      "H": 276,
      "N": 16,
      "O": 0
    },
    "molarMass": "3258.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11197",
    "formula": "C262H277N17O1",
    "composition": {
      "C": 262,
      "H": 277,
      "N": 17,
      "O": 1
    },
    "molarMass": "3268.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11198",
    "formula": "C263H278N18O2",
    "composition": {
      "C": 263,
      "H": 278,
      "N": 18,
      "O": 2
    },
    "molarMass": "3279.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11199",
    "formula": "C264H279N19O3",
    "composition": {
      "C": 264,
      "H": 279,
      "N": 19,
      "O": 3
    },
    "molarMass": "3289.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11200",
    "formula": "C265H280N20O4",
    "composition": {
      "C": 265,
      "H": 280,
      "N": 20,
      "O": 4
    },
    "molarMass": "3300.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11201",
    "formula": "C266H281N21O5",
    "composition": {
      "C": 266,
      "H": 281,
      "N": 21,
      "O": 5
    },
    "molarMass": "3310.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11202",
    "formula": "C267H282N22O6",
    "composition": {
      "C": 267,
      "H": 282,
      "N": 22,
      "O": 6
    },
    "molarMass": "3321.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11203",
    "formula": "C268H283N23O7",
    "composition": {
      "C": 268,
      "H": 283,
      "N": 23,
      "O": 7
    },
    "molarMass": "3331.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11204",
    "formula": "C269H284N24O8",
    "composition": {
      "C": 269,
      "H": 284,
      "N": 24,
      "O": 8
    },
    "molarMass": "3342.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11205",
    "formula": "C270H285N25O9",
    "composition": {
      "C": 270,
      "H": 285,
      "N": 25,
      "O": 9
    },
    "molarMass": "3352.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11206",
    "formula": "C271H286N26O10",
    "composition": {
      "C": 271,
      "H": 286,
      "N": 26,
      "O": 10
    },
    "molarMass": "3363.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11207",
    "formula": "C272H287N27O11",
    "composition": {
      "C": 272,
      "H": 287,
      "N": 27,
      "O": 11
    },
    "molarMass": "3373.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11208",
    "formula": "C273H288N28O12",
    "composition": {
      "C": 273,
      "H": 288,
      "N": 28,
      "O": 12
    },
    "molarMass": "3384.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11209",
    "formula": "C274H289N29O13",
    "composition": {
      "C": 274,
      "H": 289,
      "N": 29,
      "O": 13
    },
    "molarMass": "3394.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11210",
    "formula": "C275H290N0O14",
    "composition": {
      "C": 275,
      "H": 290,
      "N": 0,
      "O": 14
    },
    "molarMass": "3405.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11211",
    "formula": "C276H291N1O15",
    "composition": {
      "C": 276,
      "H": 291,
      "N": 1,
      "O": 15
    },
    "molarMass": "3415.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11212",
    "formula": "C277H292N2O16",
    "composition": {
      "C": 277,
      "H": 292,
      "N": 2,
      "O": 16
    },
    "molarMass": "3426.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11213",
    "formula": "C278H293N3O17",
    "composition": {
      "C": 278,
      "H": 293,
      "N": 3,
      "O": 17
    },
    "molarMass": "3436.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11214",
    "formula": "C279H294N4O18",
    "composition": {
      "C": 279,
      "H": 294,
      "N": 4,
      "O": 18
    },
    "molarMass": "3447.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11215",
    "formula": "C280H295N5O19",
    "composition": {
      "C": 280,
      "H": 295,
      "N": 5,
      "O": 19
    },
    "molarMass": "3457.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11216",
    "formula": "C281H296N6O20",
    "composition": {
      "C": 281,
      "H": 296,
      "N": 6,
      "O": 20
    },
    "molarMass": "3468.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11217",
    "formula": "C282H297N7O21",
    "composition": {
      "C": 282,
      "H": 297,
      "N": 7,
      "O": 21
    },
    "molarMass": "3478.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11218",
    "formula": "C283H298N8O22",
    "composition": {
      "C": 283,
      "H": 298,
      "N": 8,
      "O": 22
    },
    "molarMass": "3489.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11219",
    "formula": "C284H299N9O23",
    "composition": {
      "C": 284,
      "H": 299,
      "N": 9,
      "O": 23
    },
    "molarMass": "3499.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11220",
    "formula": "C285H300N10O24",
    "composition": {
      "C": 285,
      "H": 300,
      "N": 10,
      "O": 24
    },
    "molarMass": "3510.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11221",
    "formula": "C286H301N11O25",
    "composition": {
      "C": 286,
      "H": 301,
      "N": 11,
      "O": 25
    },
    "molarMass": "3520.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11222",
    "formula": "C287H302N12O26",
    "composition": {
      "C": 287,
      "H": 302,
      "N": 12,
      "O": 26
    },
    "molarMass": "3531.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11223",
    "formula": "C288H303N13O27",
    "composition": {
      "C": 288,
      "H": 303,
      "N": 13,
      "O": 27
    },
    "molarMass": "3541.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11224",
    "formula": "C289H304N14O0",
    "composition": {
      "C": 289,
      "H": 304,
      "N": 14,
      "O": 0
    },
    "molarMass": "3552.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11225",
    "formula": "C290H305N15O1",
    "composition": {
      "C": 290,
      "H": 305,
      "N": 15,
      "O": 1
    },
    "molarMass": "3562.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11226",
    "formula": "C291H306N16O2",
    "composition": {
      "C": 291,
      "H": 306,
      "N": 16,
      "O": 2
    },
    "molarMass": "3573.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11227",
    "formula": "C292H307N17O3",
    "composition": {
      "C": 292,
      "H": 307,
      "N": 17,
      "O": 3
    },
    "molarMass": "3583.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11228",
    "formula": "C293H308N18O4",
    "composition": {
      "C": 293,
      "H": 308,
      "N": 18,
      "O": 4
    },
    "molarMass": "3594.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11229",
    "formula": "C294H309N19O5",
    "composition": {
      "C": 294,
      "H": 309,
      "N": 19,
      "O": 5
    },
    "molarMass": "3604.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11230",
    "formula": "C295H310N20O6",
    "composition": {
      "C": 295,
      "H": 310,
      "N": 20,
      "O": 6
    },
    "molarMass": "3615.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11231",
    "formula": "C296H311N21O7",
    "composition": {
      "C": 296,
      "H": 311,
      "N": 21,
      "O": 7
    },
    "molarMass": "3625.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11232",
    "formula": "C297H312N22O8",
    "composition": {
      "C": 297,
      "H": 312,
      "N": 22,
      "O": 8
    },
    "molarMass": "3636.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11233",
    "formula": "C298H313N23O9",
    "composition": {
      "C": 298,
      "H": 313,
      "N": 23,
      "O": 9
    },
    "molarMass": "3646.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11234",
    "formula": "C299H314N24O10",
    "composition": {
      "C": 299,
      "H": 314,
      "N": 24,
      "O": 10
    },
    "molarMass": "3657.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11235",
    "formula": "C300H315N25O11",
    "composition": {
      "C": 300,
      "H": 315,
      "N": 25,
      "O": 11
    },
    "molarMass": "3667.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11236",
    "formula": "C301H316N26O12",
    "composition": {
      "C": 301,
      "H": 316,
      "N": 26,
      "O": 12
    },
    "molarMass": "3678.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11237",
    "formula": "C302H317N27O13",
    "composition": {
      "C": 302,
      "H": 317,
      "N": 27,
      "O": 13
    },
    "molarMass": "3688.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11238",
    "formula": "C303H318N28O14",
    "composition": {
      "C": 303,
      "H": 318,
      "N": 28,
      "O": 14
    },
    "molarMass": "3699.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11239",
    "formula": "C304H319N29O15",
    "composition": {
      "C": 304,
      "H": 319,
      "N": 29,
      "O": 15
    },
    "molarMass": "3709.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11240",
    "formula": "C305H320N0O16",
    "composition": {
      "C": 305,
      "H": 320,
      "N": 0,
      "O": 16
    },
    "molarMass": "3720.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11241",
    "formula": "C306H321N1O17",
    "composition": {
      "C": 306,
      "H": 321,
      "N": 1,
      "O": 17
    },
    "molarMass": "3730.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11242",
    "formula": "C307H322N2O18",
    "composition": {
      "C": 307,
      "H": 322,
      "N": 2,
      "O": 18
    },
    "molarMass": "3741.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11243",
    "formula": "C308H323N3O19",
    "composition": {
      "C": 308,
      "H": 323,
      "N": 3,
      "O": 19
    },
    "molarMass": "3751.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11244",
    "formula": "C309H324N4O20",
    "composition": {
      "C": 309,
      "H": 324,
      "N": 4,
      "O": 20
    },
    "molarMass": "3762.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11245",
    "formula": "C310H325N5O21",
    "composition": {
      "C": 310,
      "H": 325,
      "N": 5,
      "O": 21
    },
    "molarMass": "3772.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11246",
    "formula": "C311H326N6O22",
    "composition": {
      "C": 311,
      "H": 326,
      "N": 6,
      "O": 22
    },
    "molarMass": "3783.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11247",
    "formula": "C312H327N7O23",
    "composition": {
      "C": 312,
      "H": 327,
      "N": 7,
      "O": 23
    },
    "molarMass": "3793.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11248",
    "formula": "C313H328N8O24",
    "composition": {
      "C": 313,
      "H": 328,
      "N": 8,
      "O": 24
    },
    "molarMass": "3804.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11249",
    "formula": "C314H329N9O25",
    "composition": {
      "C": 314,
      "H": 329,
      "N": 9,
      "O": 25
    },
    "molarMass": "3814.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11250",
    "formula": "C315H330N10O26",
    "composition": {
      "C": 315,
      "H": 330,
      "N": 10,
      "O": 26
    },
    "molarMass": "3825.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11251",
    "formula": "C316H331N11O27",
    "composition": {
      "C": 316,
      "H": 331,
      "N": 11,
      "O": 27
    },
    "molarMass": "3835.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11252",
    "formula": "C317H332N12O0",
    "composition": {
      "C": 317,
      "H": 332,
      "N": 12,
      "O": 0
    },
    "molarMass": "3846.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11253",
    "formula": "C318H333N13O1",
    "composition": {
      "C": 318,
      "H": 333,
      "N": 13,
      "O": 1
    },
    "molarMass": "3856.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11254",
    "formula": "C319H334N14O2",
    "composition": {
      "C": 319,
      "H": 334,
      "N": 14,
      "O": 2
    },
    "molarMass": "3867.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11255",
    "formula": "C320H335N15O3",
    "composition": {
      "C": 320,
      "H": 335,
      "N": 15,
      "O": 3
    },
    "molarMass": "3877.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11256",
    "formula": "C321H336N16O4",
    "composition": {
      "C": 321,
      "H": 336,
      "N": 16,
      "O": 4
    },
    "molarMass": "3888.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11257",
    "formula": "C322H337N17O5",
    "composition": {
      "C": 322,
      "H": 337,
      "N": 17,
      "O": 5
    },
    "molarMass": "3898.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11258",
    "formula": "C323H338N18O6",
    "composition": {
      "C": 323,
      "H": 338,
      "N": 18,
      "O": 6
    },
    "molarMass": "3909.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11259",
    "formula": "C324H339N19O7",
    "composition": {
      "C": 324,
      "H": 339,
      "N": 19,
      "O": 7
    },
    "molarMass": "3919.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11260",
    "formula": "C325H340N20O8",
    "composition": {
      "C": 325,
      "H": 340,
      "N": 20,
      "O": 8
    },
    "molarMass": "3930.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11261",
    "formula": "C326H341N21O9",
    "composition": {
      "C": 326,
      "H": 341,
      "N": 21,
      "O": 9
    },
    "molarMass": "3940.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11262",
    "formula": "C327H342N22O10",
    "composition": {
      "C": 327,
      "H": 342,
      "N": 22,
      "O": 10
    },
    "molarMass": "3951.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11263",
    "formula": "C328H343N23O11",
    "composition": {
      "C": 328,
      "H": 343,
      "N": 23,
      "O": 11
    },
    "molarMass": "3961.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11264",
    "formula": "C329H344N24O12",
    "composition": {
      "C": 329,
      "H": 344,
      "N": 24,
      "O": 12
    },
    "molarMass": "3972.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11265",
    "formula": "C330H345N25O13",
    "composition": {
      "C": 330,
      "H": 345,
      "N": 25,
      "O": 13
    },
    "molarMass": "3982.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11266",
    "formula": "C331H346N26O14",
    "composition": {
      "C": 331,
      "H": 346,
      "N": 26,
      "O": 14
    },
    "molarMass": "3993.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11267",
    "formula": "C332H347N27O15",
    "composition": {
      "C": 332,
      "H": 347,
      "N": 27,
      "O": 15
    },
    "molarMass": "4003.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11268",
    "formula": "C333H348N28O16",
    "composition": {
      "C": 333,
      "H": 348,
      "N": 28,
      "O": 16
    },
    "molarMass": "4014.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11269",
    "formula": "C334H349N29O17",
    "composition": {
      "C": 334,
      "H": 349,
      "N": 29,
      "O": 17
    },
    "molarMass": "4024.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11270",
    "formula": "C335H350N0O18",
    "composition": {
      "C": 335,
      "H": 350,
      "N": 0,
      "O": 18
    },
    "molarMass": "4035.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11271",
    "formula": "C336H351N1O19",
    "composition": {
      "C": 336,
      "H": 351,
      "N": 1,
      "O": 19
    },
    "molarMass": "4045.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11272",
    "formula": "C337H352N2O20",
    "composition": {
      "C": 337,
      "H": 352,
      "N": 2,
      "O": 20
    },
    "molarMass": "4056.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11273",
    "formula": "C338H353N3O21",
    "composition": {
      "C": 338,
      "H": 353,
      "N": 3,
      "O": 21
    },
    "molarMass": "4066.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11274",
    "formula": "C339H354N4O22",
    "composition": {
      "C": 339,
      "H": 354,
      "N": 4,
      "O": 22
    },
    "molarMass": "4077.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11275",
    "formula": "C340H355N5O23",
    "composition": {
      "C": 340,
      "H": 355,
      "N": 5,
      "O": 23
    },
    "molarMass": "4087.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11276",
    "formula": "C341H356N6O24",
    "composition": {
      "C": 341,
      "H": 356,
      "N": 6,
      "O": 24
    },
    "molarMass": "4098.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11277",
    "formula": "C342H357N7O25",
    "composition": {
      "C": 342,
      "H": 357,
      "N": 7,
      "O": 25
    },
    "molarMass": "4108.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11278",
    "formula": "C343H358N8O26",
    "composition": {
      "C": 343,
      "H": 358,
      "N": 8,
      "O": 26
    },
    "molarMass": "4119.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11279",
    "formula": "C344H359N9O27",
    "composition": {
      "C": 344,
      "H": 359,
      "N": 9,
      "O": 27
    },
    "molarMass": "4129.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11280",
    "formula": "C345H360N10O0",
    "composition": {
      "C": 345,
      "H": 360,
      "N": 10,
      "O": 0
    },
    "molarMass": "4140.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11281",
    "formula": "C346H361N11O1",
    "composition": {
      "C": 346,
      "H": 361,
      "N": 11,
      "O": 1
    },
    "molarMass": "4150.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11282",
    "formula": "C347H362N12O2",
    "composition": {
      "C": 347,
      "H": 362,
      "N": 12,
      "O": 2
    },
    "molarMass": "4161.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11283",
    "formula": "C348H363N13O3",
    "composition": {
      "C": 348,
      "H": 363,
      "N": 13,
      "O": 3
    },
    "molarMass": "4171.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11284",
    "formula": "C349H364N14O4",
    "composition": {
      "C": 349,
      "H": 364,
      "N": 14,
      "O": 4
    },
    "molarMass": "4182.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11285",
    "formula": "C350H365N15O5",
    "composition": {
      "C": 350,
      "H": 365,
      "N": 15,
      "O": 5
    },
    "molarMass": "4192.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11286",
    "formula": "C351H366N16O6",
    "composition": {
      "C": 351,
      "H": 366,
      "N": 16,
      "O": 6
    },
    "molarMass": "4203.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11287",
    "formula": "C352H367N17O7",
    "composition": {
      "C": 352,
      "H": 367,
      "N": 17,
      "O": 7
    },
    "molarMass": "4213.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11288",
    "formula": "C353H368N18O8",
    "composition": {
      "C": 353,
      "H": 368,
      "N": 18,
      "O": 8
    },
    "molarMass": "4224.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11289",
    "formula": "C354H369N19O9",
    "composition": {
      "C": 354,
      "H": 369,
      "N": 19,
      "O": 9
    },
    "molarMass": "4234.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11290",
    "formula": "C355H370N20O10",
    "composition": {
      "C": 355,
      "H": 370,
      "N": 20,
      "O": 10
    },
    "molarMass": "4245.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11291",
    "formula": "C356H371N21O11",
    "composition": {
      "C": 356,
      "H": 371,
      "N": 21,
      "O": 11
    },
    "molarMass": "4255.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11292",
    "formula": "C357H372N22O12",
    "composition": {
      "C": 357,
      "H": 372,
      "N": 22,
      "O": 12
    },
    "molarMass": "4266.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11293",
    "formula": "C358H373N23O13",
    "composition": {
      "C": 358,
      "H": 373,
      "N": 23,
      "O": 13
    },
    "molarMass": "4276.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11294",
    "formula": "C359H374N24O14",
    "composition": {
      "C": 359,
      "H": 374,
      "N": 24,
      "O": 14
    },
    "molarMass": "4287.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11295",
    "formula": "C360H375N25O15",
    "composition": {
      "C": 360,
      "H": 375,
      "N": 25,
      "O": 15
    },
    "molarMass": "4297.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11296",
    "formula": "C361H376N26O16",
    "composition": {
      "C": 361,
      "H": 376,
      "N": 26,
      "O": 16
    },
    "molarMass": "4308.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11297",
    "formula": "C362H377N27O17",
    "composition": {
      "C": 362,
      "H": 377,
      "N": 27,
      "O": 17
    },
    "molarMass": "4318.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11298",
    "formula": "C363H378N28O18",
    "composition": {
      "C": 363,
      "H": 378,
      "N": 28,
      "O": 18
    },
    "molarMass": "4329.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11299",
    "formula": "C364H379N29O19",
    "composition": {
      "C": 364,
      "H": 379,
      "N": 29,
      "O": 19
    },
    "molarMass": "4339.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11300",
    "formula": "C365H380N0O20",
    "composition": {
      "C": 365,
      "H": 380,
      "N": 0,
      "O": 20
    },
    "molarMass": "4350.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11301",
    "formula": "C366H381N1O21",
    "composition": {
      "C": 366,
      "H": 381,
      "N": 1,
      "O": 21
    },
    "molarMass": "4360.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11302",
    "formula": "C367H382N2O22",
    "composition": {
      "C": 367,
      "H": 382,
      "N": 2,
      "O": 22
    },
    "molarMass": "4371.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11303",
    "formula": "C368H383N3O23",
    "composition": {
      "C": 368,
      "H": 383,
      "N": 3,
      "O": 23
    },
    "molarMass": "4381.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11304",
    "formula": "C369H384N4O24",
    "composition": {
      "C": 369,
      "H": 384,
      "N": 4,
      "O": 24
    },
    "molarMass": "4392.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11305",
    "formula": "C370H385N5O25",
    "composition": {
      "C": 370,
      "H": 385,
      "N": 5,
      "O": 25
    },
    "molarMass": "4402.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11306",
    "formula": "C371H386N6O26",
    "composition": {
      "C": 371,
      "H": 386,
      "N": 6,
      "O": 26
    },
    "molarMass": "4413.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11307",
    "formula": "C372H387N7O27",
    "composition": {
      "C": 372,
      "H": 387,
      "N": 7,
      "O": 27
    },
    "molarMass": "4423.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11308",
    "formula": "C373H388N8O0",
    "composition": {
      "C": 373,
      "H": 388,
      "N": 8,
      "O": 0
    },
    "molarMass": "4434.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11309",
    "formula": "C374H389N9O1",
    "composition": {
      "C": 374,
      "H": 389,
      "N": 9,
      "O": 1
    },
    "molarMass": "4444.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11310",
    "formula": "C375H390N10O2",
    "composition": {
      "C": 375,
      "H": 390,
      "N": 10,
      "O": 2
    },
    "molarMass": "4455.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11311",
    "formula": "C376H391N11O3",
    "composition": {
      "C": 376,
      "H": 391,
      "N": 11,
      "O": 3
    },
    "molarMass": "4465.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11312",
    "formula": "C377H392N12O4",
    "composition": {
      "C": 377,
      "H": 392,
      "N": 12,
      "O": 4
    },
    "molarMass": "4476.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11313",
    "formula": "C378H393N13O5",
    "composition": {
      "C": 378,
      "H": 393,
      "N": 13,
      "O": 5
    },
    "molarMass": "4486.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11314",
    "formula": "C379H394N14O6",
    "composition": {
      "C": 379,
      "H": 394,
      "N": 14,
      "O": 6
    },
    "molarMass": "4497.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11315",
    "formula": "C380H395N15O7",
    "composition": {
      "C": 380,
      "H": 395,
      "N": 15,
      "O": 7
    },
    "molarMass": "4507.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11316",
    "formula": "C381H396N16O8",
    "composition": {
      "C": 381,
      "H": 396,
      "N": 16,
      "O": 8
    },
    "molarMass": "4518.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11317",
    "formula": "C382H397N17O9",
    "composition": {
      "C": 382,
      "H": 397,
      "N": 17,
      "O": 9
    },
    "molarMass": "4528.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11318",
    "formula": "C383H398N18O10",
    "composition": {
      "C": 383,
      "H": 398,
      "N": 18,
      "O": 10
    },
    "molarMass": "4539.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11319",
    "formula": "C384H399N19O11",
    "composition": {
      "C": 384,
      "H": 399,
      "N": 19,
      "O": 11
    },
    "molarMass": "4549.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11320",
    "formula": "C385H400N20O12",
    "composition": {
      "C": 385,
      "H": 400,
      "N": 20,
      "O": 12
    },
    "molarMass": "4560.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11321",
    "formula": "C386H401N21O13",
    "composition": {
      "C": 386,
      "H": 401,
      "N": 21,
      "O": 13
    },
    "molarMass": "4570.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11322",
    "formula": "C387H402N22O14",
    "composition": {
      "C": 387,
      "H": 402,
      "N": 22,
      "O": 14
    },
    "molarMass": "4581.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11323",
    "formula": "C388H403N23O15",
    "composition": {
      "C": 388,
      "H": 403,
      "N": 23,
      "O": 15
    },
    "molarMass": "4591.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11324",
    "formula": "C389H404N24O16",
    "composition": {
      "C": 389,
      "H": 404,
      "N": 24,
      "O": 16
    },
    "molarMass": "4602.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11325",
    "formula": "C390H405N25O17",
    "composition": {
      "C": 390,
      "H": 405,
      "N": 25,
      "O": 17
    },
    "molarMass": "4612.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11326",
    "formula": "C391H406N26O18",
    "composition": {
      "C": 391,
      "H": 406,
      "N": 26,
      "O": 18
    },
    "molarMass": "4623.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11327",
    "formula": "C392H407N27O19",
    "composition": {
      "C": 392,
      "H": 407,
      "N": 27,
      "O": 19
    },
    "molarMass": "4633.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11328",
    "formula": "C393H408N28O20",
    "composition": {
      "C": 393,
      "H": 408,
      "N": 28,
      "O": 20
    },
    "molarMass": "4644.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11329",
    "formula": "C394H409N29O21",
    "composition": {
      "C": 394,
      "H": 409,
      "N": 29,
      "O": 21
    },
    "molarMass": "4654.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11330",
    "formula": "C395H410N0O22",
    "composition": {
      "C": 395,
      "H": 410,
      "N": 0,
      "O": 22
    },
    "molarMass": "4665.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11331",
    "formula": "C396H411N1O23",
    "composition": {
      "C": 396,
      "H": 411,
      "N": 1,
      "O": 23
    },
    "molarMass": "4675.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11332",
    "formula": "C397H412N2O24",
    "composition": {
      "C": 397,
      "H": 412,
      "N": 2,
      "O": 24
    },
    "molarMass": "4686.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11333",
    "formula": "C398H413N3O25",
    "composition": {
      "C": 398,
      "H": 413,
      "N": 3,
      "O": 25
    },
    "molarMass": "4696.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11334",
    "formula": "C399H414N4O26",
    "composition": {
      "C": 399,
      "H": 414,
      "N": 4,
      "O": 26
    },
    "molarMass": "4707.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11335",
    "formula": "C400H415N5O27",
    "composition": {
      "C": 400,
      "H": 415,
      "N": 5,
      "O": 27
    },
    "molarMass": "4717.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11336",
    "formula": "C401H416N6O0",
    "composition": {
      "C": 401,
      "H": 416,
      "N": 6,
      "O": 0
    },
    "molarMass": "4728.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11337",
    "formula": "C402H417N7O1",
    "composition": {
      "C": 402,
      "H": 417,
      "N": 7,
      "O": 1
    },
    "molarMass": "4738.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11338",
    "formula": "C403H418N8O2",
    "composition": {
      "C": 403,
      "H": 418,
      "N": 8,
      "O": 2
    },
    "molarMass": "4749.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11339",
    "formula": "C404H419N9O3",
    "composition": {
      "C": 404,
      "H": 419,
      "N": 9,
      "O": 3
    },
    "molarMass": "4759.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11340",
    "formula": "C405H420N10O4",
    "composition": {
      "C": 405,
      "H": 420,
      "N": 10,
      "O": 4
    },
    "molarMass": "4770.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11341",
    "formula": "C406H421N11O5",
    "composition": {
      "C": 406,
      "H": 421,
      "N": 11,
      "O": 5
    },
    "molarMass": "4780.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11342",
    "formula": "C407H422N12O6",
    "composition": {
      "C": 407,
      "H": 422,
      "N": 12,
      "O": 6
    },
    "molarMass": "4791.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11343",
    "formula": "C408H423N13O7",
    "composition": {
      "C": 408,
      "H": 423,
      "N": 13,
      "O": 7
    },
    "molarMass": "4801.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11344",
    "formula": "C409H424N14O8",
    "composition": {
      "C": 409,
      "H": 424,
      "N": 14,
      "O": 8
    },
    "molarMass": "4812.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11345",
    "formula": "C410H425N15O9",
    "composition": {
      "C": 410,
      "H": 425,
      "N": 15,
      "O": 9
    },
    "molarMass": "4822.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11346",
    "formula": "C411H426N16O10",
    "composition": {
      "C": 411,
      "H": 426,
      "N": 16,
      "O": 10
    },
    "molarMass": "4833.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11347",
    "formula": "C412H427N17O11",
    "composition": {
      "C": 412,
      "H": 427,
      "N": 17,
      "O": 11
    },
    "molarMass": "4843.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11348",
    "formula": "C413H428N18O12",
    "composition": {
      "C": 413,
      "H": 428,
      "N": 18,
      "O": 12
    },
    "molarMass": "4854.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11349",
    "formula": "C414H429N19O13",
    "composition": {
      "C": 414,
      "H": 429,
      "N": 19,
      "O": 13
    },
    "molarMass": "4864.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11350",
    "formula": "C415H430N20O14",
    "composition": {
      "C": 415,
      "H": 430,
      "N": 20,
      "O": 14
    },
    "molarMass": "4875.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11351",
    "formula": "C416H431N21O15",
    "composition": {
      "C": 416,
      "H": 431,
      "N": 21,
      "O": 15
    },
    "molarMass": "4885.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11352",
    "formula": "C417H432N22O16",
    "composition": {
      "C": 417,
      "H": 432,
      "N": 22,
      "O": 16
    },
    "molarMass": "4896.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11353",
    "formula": "C418H433N23O17",
    "composition": {
      "C": 418,
      "H": 433,
      "N": 23,
      "O": 17
    },
    "molarMass": "4906.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11354",
    "formula": "C419H434N24O18",
    "composition": {
      "C": 419,
      "H": 434,
      "N": 24,
      "O": 18
    },
    "molarMass": "4917.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11355",
    "formula": "C420H435N25O19",
    "composition": {
      "C": 420,
      "H": 435,
      "N": 25,
      "O": 19
    },
    "molarMass": "4927.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11356",
    "formula": "C421H436N26O20",
    "composition": {
      "C": 421,
      "H": 436,
      "N": 26,
      "O": 20
    },
    "molarMass": "4938.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11357",
    "formula": "C422H437N27O21",
    "composition": {
      "C": 422,
      "H": 437,
      "N": 27,
      "O": 21
    },
    "molarMass": "4948.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11358",
    "formula": "C423H438N28O22",
    "composition": {
      "C": 423,
      "H": 438,
      "N": 28,
      "O": 22
    },
    "molarMass": "4959.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11359",
    "formula": "C424H439N29O23",
    "composition": {
      "C": 424,
      "H": 439,
      "N": 29,
      "O": 23
    },
    "molarMass": "4969.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11360",
    "formula": "C425H440N0O24",
    "composition": {
      "C": 425,
      "H": 440,
      "N": 0,
      "O": 24
    },
    "molarMass": "4980.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11361",
    "formula": "C426H441N1O25",
    "composition": {
      "C": 426,
      "H": 441,
      "N": 1,
      "O": 25
    },
    "molarMass": "4990.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11362",
    "formula": "C427H442N2O26",
    "composition": {
      "C": 427,
      "H": 442,
      "N": 2,
      "O": 26
    },
    "molarMass": "5001.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11363",
    "formula": "C428H443N3O27",
    "composition": {
      "C": 428,
      "H": 443,
      "N": 3,
      "O": 27
    },
    "molarMass": "5011.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11364",
    "formula": "C429H444N4O0",
    "composition": {
      "C": 429,
      "H": 444,
      "N": 4,
      "O": 0
    },
    "molarMass": "5022.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11365",
    "formula": "C430H445N5O1",
    "composition": {
      "C": 430,
      "H": 445,
      "N": 5,
      "O": 1
    },
    "molarMass": "5032.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11366",
    "formula": "C431H446N6O2",
    "composition": {
      "C": 431,
      "H": 446,
      "N": 6,
      "O": 2
    },
    "molarMass": "5043.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11367",
    "formula": "C432H447N7O3",
    "composition": {
      "C": 432,
      "H": 447,
      "N": 7,
      "O": 3
    },
    "molarMass": "5053.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11368",
    "formula": "C433H448N8O4",
    "composition": {
      "C": 433,
      "H": 448,
      "N": 8,
      "O": 4
    },
    "molarMass": "5064.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11369",
    "formula": "C434H449N9O5",
    "composition": {
      "C": 434,
      "H": 449,
      "N": 9,
      "O": 5
    },
    "molarMass": "5074.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11370",
    "formula": "C435H450N10O6",
    "composition": {
      "C": 435,
      "H": 450,
      "N": 10,
      "O": 6
    },
    "molarMass": "5085.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11371",
    "formula": "C436H451N11O7",
    "composition": {
      "C": 436,
      "H": 451,
      "N": 11,
      "O": 7
    },
    "molarMass": "5095.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11372",
    "formula": "C437H452N12O8",
    "composition": {
      "C": 437,
      "H": 452,
      "N": 12,
      "O": 8
    },
    "molarMass": "5106.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11373",
    "formula": "C438H453N13O9",
    "composition": {
      "C": 438,
      "H": 453,
      "N": 13,
      "O": 9
    },
    "molarMass": "5116.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11374",
    "formula": "C439H454N14O10",
    "composition": {
      "C": 439,
      "H": 454,
      "N": 14,
      "O": 10
    },
    "molarMass": "5127.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11375",
    "formula": "C440H455N15O11",
    "composition": {
      "C": 440,
      "H": 455,
      "N": 15,
      "O": 11
    },
    "molarMass": "5137.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11376",
    "formula": "C441H456N16O12",
    "composition": {
      "C": 441,
      "H": 456,
      "N": 16,
      "O": 12
    },
    "molarMass": "5148.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11377",
    "formula": "C442H457N17O13",
    "composition": {
      "C": 442,
      "H": 457,
      "N": 17,
      "O": 13
    },
    "molarMass": "5158.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11378",
    "formula": "C443H458N18O14",
    "composition": {
      "C": 443,
      "H": 458,
      "N": 18,
      "O": 14
    },
    "molarMass": "5169.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11379",
    "formula": "C444H459N19O15",
    "composition": {
      "C": 444,
      "H": 459,
      "N": 19,
      "O": 15
    },
    "molarMass": "5179.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11380",
    "formula": "C445H460N20O16",
    "composition": {
      "C": 445,
      "H": 460,
      "N": 20,
      "O": 16
    },
    "molarMass": "5190.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11381",
    "formula": "C446H461N21O17",
    "composition": {
      "C": 446,
      "H": 461,
      "N": 21,
      "O": 17
    },
    "molarMass": "5200.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11382",
    "formula": "C447H462N22O18",
    "composition": {
      "C": 447,
      "H": 462,
      "N": 22,
      "O": 18
    },
    "molarMass": "5211.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11383",
    "formula": "C448H463N23O19",
    "composition": {
      "C": 448,
      "H": 463,
      "N": 23,
      "O": 19
    },
    "molarMass": "5221.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11384",
    "formula": "C449H464N24O20",
    "composition": {
      "C": 449,
      "H": 464,
      "N": 24,
      "O": 20
    },
    "molarMass": "5232.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11385",
    "formula": "C450H465N25O21",
    "composition": {
      "C": 450,
      "H": 465,
      "N": 25,
      "O": 21
    },
    "molarMass": "5242.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11386",
    "formula": "C451H466N26O22",
    "composition": {
      "C": 451,
      "H": 466,
      "N": 26,
      "O": 22
    },
    "molarMass": "5253.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11387",
    "formula": "C452H467N27O23",
    "composition": {
      "C": 452,
      "H": 467,
      "N": 27,
      "O": 23
    },
    "molarMass": "5263.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11388",
    "formula": "C453H468N28O24",
    "composition": {
      "C": 453,
      "H": 468,
      "N": 28,
      "O": 24
    },
    "molarMass": "5274.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11389",
    "formula": "C454H469N29O25",
    "composition": {
      "C": 454,
      "H": 469,
      "N": 29,
      "O": 25
    },
    "molarMass": "5284.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11390",
    "formula": "C455H470N0O26",
    "composition": {
      "C": 455,
      "H": 470,
      "N": 0,
      "O": 26
    },
    "molarMass": "5295.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11391",
    "formula": "C456H471N1O27",
    "composition": {
      "C": 456,
      "H": 471,
      "N": 1,
      "O": 27
    },
    "molarMass": "5305.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11392",
    "formula": "C457H472N2O0",
    "composition": {
      "C": 457,
      "H": 472,
      "N": 2,
      "O": 0
    },
    "molarMass": "5316.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11393",
    "formula": "C458H473N3O1",
    "composition": {
      "C": 458,
      "H": 473,
      "N": 3,
      "O": 1
    },
    "molarMass": "5326.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11394",
    "formula": "C459H474N4O2",
    "composition": {
      "C": 459,
      "H": 474,
      "N": 4,
      "O": 2
    },
    "molarMass": "5337.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11395",
    "formula": "C460H475N5O3",
    "composition": {
      "C": 460,
      "H": 475,
      "N": 5,
      "O": 3
    },
    "molarMass": "5347.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11396",
    "formula": "C461H476N6O4",
    "composition": {
      "C": 461,
      "H": 476,
      "N": 6,
      "O": 4
    },
    "molarMass": "5358.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11397",
    "formula": "C462H477N7O5",
    "composition": {
      "C": 462,
      "H": 477,
      "N": 7,
      "O": 5
    },
    "molarMass": "5368.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11398",
    "formula": "C463H478N8O6",
    "composition": {
      "C": 463,
      "H": 478,
      "N": 8,
      "O": 6
    },
    "molarMass": "5379.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11399",
    "formula": "C464H479N9O7",
    "composition": {
      "C": 464,
      "H": 479,
      "N": 9,
      "O": 7
    },
    "molarMass": "5389.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11400",
    "formula": "C465H480N10O8",
    "composition": {
      "C": 465,
      "H": 480,
      "N": 10,
      "O": 8
    },
    "molarMass": "5400.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11401",
    "formula": "C466H481N11O9",
    "composition": {
      "C": 466,
      "H": 481,
      "N": 11,
      "O": 9
    },
    "molarMass": "5410.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11402",
    "formula": "C467H482N12O10",
    "composition": {
      "C": 467,
      "H": 482,
      "N": 12,
      "O": 10
    },
    "molarMass": "5421.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11403",
    "formula": "C468H483N13O11",
    "composition": {
      "C": 468,
      "H": 483,
      "N": 13,
      "O": 11
    },
    "molarMass": "5431.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11404",
    "formula": "C469H484N14O12",
    "composition": {
      "C": 469,
      "H": 484,
      "N": 14,
      "O": 12
    },
    "molarMass": "5442.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11405",
    "formula": "C470H485N15O13",
    "composition": {
      "C": 470,
      "H": 485,
      "N": 15,
      "O": 13
    },
    "molarMass": "5452.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11406",
    "formula": "C471H486N16O14",
    "composition": {
      "C": 471,
      "H": 486,
      "N": 16,
      "O": 14
    },
    "molarMass": "5463.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11407",
    "formula": "C472H487N17O15",
    "composition": {
      "C": 472,
      "H": 487,
      "N": 17,
      "O": 15
    },
    "molarMass": "5473.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11408",
    "formula": "C473H488N18O16",
    "composition": {
      "C": 473,
      "H": 488,
      "N": 18,
      "O": 16
    },
    "molarMass": "5484.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11409",
    "formula": "C474H489N19O17",
    "composition": {
      "C": 474,
      "H": 489,
      "N": 19,
      "O": 17
    },
    "molarMass": "5494.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11410",
    "formula": "C475H490N20O18",
    "composition": {
      "C": 475,
      "H": 490,
      "N": 20,
      "O": 18
    },
    "molarMass": "5505.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11411",
    "formula": "C476H491N21O19",
    "composition": {
      "C": 476,
      "H": 491,
      "N": 21,
      "O": 19
    },
    "molarMass": "5515.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11412",
    "formula": "C477H492N22O20",
    "composition": {
      "C": 477,
      "H": 492,
      "N": 22,
      "O": 20
    },
    "molarMass": "5526.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11413",
    "formula": "C478H493N23O21",
    "composition": {
      "C": 478,
      "H": 493,
      "N": 23,
      "O": 21
    },
    "molarMass": "5536.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11414",
    "formula": "C479H494N24O22",
    "composition": {
      "C": 479,
      "H": 494,
      "N": 24,
      "O": 22
    },
    "molarMass": "5547.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11415",
    "formula": "C480H495N25O23",
    "composition": {
      "C": 480,
      "H": 495,
      "N": 25,
      "O": 23
    },
    "molarMass": "5557.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11416",
    "formula": "C481H496N26O24",
    "composition": {
      "C": 481,
      "H": 496,
      "N": 26,
      "O": 24
    },
    "molarMass": "5568.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11417",
    "formula": "C482H497N27O25",
    "composition": {
      "C": 482,
      "H": 497,
      "N": 27,
      "O": 25
    },
    "molarMass": "5578.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11418",
    "formula": "C483H498N28O26",
    "composition": {
      "C": 483,
      "H": 498,
      "N": 28,
      "O": 26
    },
    "molarMass": "5589.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11419",
    "formula": "C484H499N29O27",
    "composition": {
      "C": 484,
      "H": 499,
      "N": 29,
      "O": 27
    },
    "molarMass": "5599.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11420",
    "formula": "C485H500N0O0",
    "composition": {
      "C": 485,
      "H": 500,
      "N": 0,
      "O": 0
    },
    "molarMass": "5610.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11421",
    "formula": "C486H501N1O1",
    "composition": {
      "C": 486,
      "H": 501,
      "N": 1,
      "O": 1
    },
    "molarMass": "5620.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11422",
    "formula": "C487H502N2O2",
    "composition": {
      "C": 487,
      "H": 502,
      "N": 2,
      "O": 2
    },
    "molarMass": "5631.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11423",
    "formula": "C488H503N3O3",
    "composition": {
      "C": 488,
      "H": 503,
      "N": 3,
      "O": 3
    },
    "molarMass": "5641.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11424",
    "formula": "C489H504N4O4",
    "composition": {
      "C": 489,
      "H": 504,
      "N": 4,
      "O": 4
    },
    "molarMass": "5652.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11425",
    "formula": "C490H505N5O5",
    "composition": {
      "C": 490,
      "H": 505,
      "N": 5,
      "O": 5
    },
    "molarMass": "5662.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11426",
    "formula": "C491H506N6O6",
    "composition": {
      "C": 491,
      "H": 506,
      "N": 6,
      "O": 6
    },
    "molarMass": "5673.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11427",
    "formula": "C492H507N7O7",
    "composition": {
      "C": 492,
      "H": 507,
      "N": 7,
      "O": 7
    },
    "molarMass": "5683.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11428",
    "formula": "C493H508N8O8",
    "composition": {
      "C": 493,
      "H": 508,
      "N": 8,
      "O": 8
    },
    "molarMass": "5694.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11429",
    "formula": "C494H509N9O9",
    "composition": {
      "C": 494,
      "H": 509,
      "N": 9,
      "O": 9
    },
    "molarMass": "5704.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11430",
    "formula": "C495H510N10O10",
    "composition": {
      "C": 495,
      "H": 510,
      "N": 10,
      "O": 10
    },
    "molarMass": "5715.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11431",
    "formula": "C496H511N11O11",
    "composition": {
      "C": 496,
      "H": 511,
      "N": 11,
      "O": 11
    },
    "molarMass": "5725.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11432",
    "formula": "C497H512N12O12",
    "composition": {
      "C": 497,
      "H": 512,
      "N": 12,
      "O": 12
    },
    "molarMass": "5736.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11433",
    "formula": "C498H513N13O13",
    "composition": {
      "C": 498,
      "H": 513,
      "N": 13,
      "O": 13
    },
    "molarMass": "5746.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11434",
    "formula": "C499H514N14O14",
    "composition": {
      "C": 499,
      "H": 514,
      "N": 14,
      "O": 14
    },
    "molarMass": "5757.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11435",
    "formula": "C500H515N15O15",
    "composition": {
      "C": 500,
      "H": 515,
      "N": 15,
      "O": 15
    },
    "molarMass": "5767.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11436",
    "formula": "C501H516N16O16",
    "composition": {
      "C": 501,
      "H": 516,
      "N": 16,
      "O": 16
    },
    "molarMass": "5778.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11437",
    "formula": "C502H517N17O17",
    "composition": {
      "C": 502,
      "H": 517,
      "N": 17,
      "O": 17
    },
    "molarMass": "5788.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11438",
    "formula": "C503H518N18O18",
    "composition": {
      "C": 503,
      "H": 518,
      "N": 18,
      "O": 18
    },
    "molarMass": "5799.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11439",
    "formula": "C504H519N19O19",
    "composition": {
      "C": 504,
      "H": 519,
      "N": 19,
      "O": 19
    },
    "molarMass": "5809.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11440",
    "formula": "C505H520N20O20",
    "composition": {
      "C": 505,
      "H": 520,
      "N": 20,
      "O": 20
    },
    "molarMass": "5820.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11441",
    "formula": "C506H521N21O21",
    "composition": {
      "C": 506,
      "H": 521,
      "N": 21,
      "O": 21
    },
    "molarMass": "5830.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11442",
    "formula": "C507H522N22O22",
    "composition": {
      "C": 507,
      "H": 522,
      "N": 22,
      "O": 22
    },
    "molarMass": "5841.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11443",
    "formula": "C508H523N23O23",
    "composition": {
      "C": 508,
      "H": 523,
      "N": 23,
      "O": 23
    },
    "molarMass": "5851.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11444",
    "formula": "C509H524N24O24",
    "composition": {
      "C": 509,
      "H": 524,
      "N": 24,
      "O": 24
    },
    "molarMass": "5862.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11445",
    "formula": "C510H525N25O25",
    "composition": {
      "C": 510,
      "H": 525,
      "N": 25,
      "O": 25
    },
    "molarMass": "5872.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11446",
    "formula": "C511H526N26O26",
    "composition": {
      "C": 511,
      "H": 526,
      "N": 26,
      "O": 26
    },
    "molarMass": "5883.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11447",
    "formula": "C512H527N27O27",
    "composition": {
      "C": 512,
      "H": 527,
      "N": 27,
      "O": 27
    },
    "molarMass": "5893.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11448",
    "formula": "C513H528N28O0",
    "composition": {
      "C": 513,
      "H": 528,
      "N": 28,
      "O": 0
    },
    "molarMass": "5904.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11449",
    "formula": "C514H529N29O1",
    "composition": {
      "C": 514,
      "H": 529,
      "N": 29,
      "O": 1
    },
    "molarMass": "5914.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11450",
    "formula": "C515H530N0O2",
    "composition": {
      "C": 515,
      "H": 530,
      "N": 0,
      "O": 2
    },
    "molarMass": "5925.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11451",
    "formula": "C516H531N1O3",
    "composition": {
      "C": 516,
      "H": 531,
      "N": 1,
      "O": 3
    },
    "molarMass": "5935.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11452",
    "formula": "C517H532N2O4",
    "composition": {
      "C": 517,
      "H": 532,
      "N": 2,
      "O": 4
    },
    "molarMass": "5946.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11453",
    "formula": "C518H533N3O5",
    "composition": {
      "C": 518,
      "H": 533,
      "N": 3,
      "O": 5
    },
    "molarMass": "5956.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11454",
    "formula": "C519H534N4O6",
    "composition": {
      "C": 519,
      "H": 534,
      "N": 4,
      "O": 6
    },
    "molarMass": "5967.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11455",
    "formula": "C520H535N5O7",
    "composition": {
      "C": 520,
      "H": 535,
      "N": 5,
      "O": 7
    },
    "molarMass": "5977.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11456",
    "formula": "C521H536N6O8",
    "composition": {
      "C": 521,
      "H": 536,
      "N": 6,
      "O": 8
    },
    "molarMass": "5988.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11457",
    "formula": "C522H537N7O9",
    "composition": {
      "C": 522,
      "H": 537,
      "N": 7,
      "O": 9
    },
    "molarMass": "5998.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11458",
    "formula": "C523H538N8O10",
    "composition": {
      "C": 523,
      "H": 538,
      "N": 8,
      "O": 10
    },
    "molarMass": "6009.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11459",
    "formula": "C524H539N9O11",
    "composition": {
      "C": 524,
      "H": 539,
      "N": 9,
      "O": 11
    },
    "molarMass": "6019.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11460",
    "formula": "C525H540N10O12",
    "composition": {
      "C": 525,
      "H": 540,
      "N": 10,
      "O": 12
    },
    "molarMass": "6030.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11461",
    "formula": "C526H541N11O13",
    "composition": {
      "C": 526,
      "H": 541,
      "N": 11,
      "O": 13
    },
    "molarMass": "6040.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11462",
    "formula": "C527H542N12O14",
    "composition": {
      "C": 527,
      "H": 542,
      "N": 12,
      "O": 14
    },
    "molarMass": "6051.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11463",
    "formula": "C528H543N13O15",
    "composition": {
      "C": 528,
      "H": 543,
      "N": 13,
      "O": 15
    },
    "molarMass": "6061.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11464",
    "formula": "C529H544N14O16",
    "composition": {
      "C": 529,
      "H": 544,
      "N": 14,
      "O": 16
    },
    "molarMass": "6072.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11465",
    "formula": "C530H545N15O17",
    "composition": {
      "C": 530,
      "H": 545,
      "N": 15,
      "O": 17
    },
    "molarMass": "6082.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11466",
    "formula": "C531H546N16O18",
    "composition": {
      "C": 531,
      "H": 546,
      "N": 16,
      "O": 18
    },
    "molarMass": "6093.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11467",
    "formula": "C532H547N17O19",
    "composition": {
      "C": 532,
      "H": 547,
      "N": 17,
      "O": 19
    },
    "molarMass": "6103.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11468",
    "formula": "C533H548N18O20",
    "composition": {
      "C": 533,
      "H": 548,
      "N": 18,
      "O": 20
    },
    "molarMass": "6114.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11469",
    "formula": "C534H549N19O21",
    "composition": {
      "C": 534,
      "H": 549,
      "N": 19,
      "O": 21
    },
    "molarMass": "6124.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11470",
    "formula": "C535H550N20O22",
    "composition": {
      "C": 535,
      "H": 550,
      "N": 20,
      "O": 22
    },
    "molarMass": "6135.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11471",
    "formula": "C536H551N21O23",
    "composition": {
      "C": 536,
      "H": 551,
      "N": 21,
      "O": 23
    },
    "molarMass": "6145.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11472",
    "formula": "C537H552N22O24",
    "composition": {
      "C": 537,
      "H": 552,
      "N": 22,
      "O": 24
    },
    "molarMass": "6156.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11473",
    "formula": "C538H553N23O25",
    "composition": {
      "C": 538,
      "H": 553,
      "N": 23,
      "O": 25
    },
    "molarMass": "6166.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11474",
    "formula": "C539H554N24O26",
    "composition": {
      "C": 539,
      "H": 554,
      "N": 24,
      "O": 26
    },
    "molarMass": "6177.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11475",
    "formula": "C540H555N25O27",
    "composition": {
      "C": 540,
      "H": 555,
      "N": 25,
      "O": 27
    },
    "molarMass": "6187.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11476",
    "formula": "C541H556N26O0",
    "composition": {
      "C": 541,
      "H": 556,
      "N": 26,
      "O": 0
    },
    "molarMass": "6198.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11477",
    "formula": "C542H557N27O1",
    "composition": {
      "C": 542,
      "H": 557,
      "N": 27,
      "O": 1
    },
    "molarMass": "6208.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11478",
    "formula": "C543H558N28O2",
    "composition": {
      "C": 543,
      "H": 558,
      "N": 28,
      "O": 2
    },
    "molarMass": "6219.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11479",
    "formula": "C544H559N29O3",
    "composition": {
      "C": 544,
      "H": 559,
      "N": 29,
      "O": 3
    },
    "molarMass": "6229.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11480",
    "formula": "C545H560N0O4",
    "composition": {
      "C": 545,
      "H": 560,
      "N": 0,
      "O": 4
    },
    "molarMass": "6240.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11481",
    "formula": "C546H561N1O5",
    "composition": {
      "C": 546,
      "H": 561,
      "N": 1,
      "O": 5
    },
    "molarMass": "6250.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11482",
    "formula": "C547H562N2O6",
    "composition": {
      "C": 547,
      "H": 562,
      "N": 2,
      "O": 6
    },
    "molarMass": "6261.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11483",
    "formula": "C548H563N3O7",
    "composition": {
      "C": 548,
      "H": 563,
      "N": 3,
      "O": 7
    },
    "molarMass": "6271.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11484",
    "formula": "C549H564N4O8",
    "composition": {
      "C": 549,
      "H": 564,
      "N": 4,
      "O": 8
    },
    "molarMass": "6282.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11485",
    "formula": "C550H565N5O9",
    "composition": {
      "C": 550,
      "H": 565,
      "N": 5,
      "O": 9
    },
    "molarMass": "6292.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11486",
    "formula": "C551H566N6O10",
    "composition": {
      "C": 551,
      "H": 566,
      "N": 6,
      "O": 10
    },
    "molarMass": "6303.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Agent de réticulation Delta-11487",
    "formula": "C552H567N7O11",
    "composition": {
      "C": 552,
      "H": 567,
      "N": 7,
      "O": 11
    },
    "molarMass": "6313.50 g/mol",
    "category": "Agent de réticulation",
    "summary": "Structure moléculaire optimisée pour la série agent de réticulation.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Inhibiteur de BRAF/MEK Delta-11488",
    "formula": "C553H568N8O12",
    "composition": {
      "C": 553,
      "H": 568,
      "N": 8,
      "O": 12
    },
    "molarMass": "6324.00 g/mol",
    "category": "Inhibiteur de BRAF/MEK",
    "summary": "Structure moléculaire optimisée pour la série inhibiteur de braf/mek.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Oligonucléotide antisens Delta-11489",
    "formula": "C554H569N9O13",
    "composition": {
      "C": 554,
      "H": 569,
      "N": 9,
      "O": 13
    },
    "molarMass": "6334.50 g/mol",
    "category": "Oligonucléotide antisens",
    "summary": "Structure moléculaire optimisée pour la série oligonucléotide antisens.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  {
    "name": "Matériau pérovskite Delta-11490",
    "formula": "C555H570N10O14",
    "composition": {
      "C": 555,
      "H": 570,
      "N": 10,
      "O": 14
    },
    "molarMass": "6345.00 g/mol",
    "category": "Matériau pérovskite",
    "summary": "Structure moléculaire optimisée pour la série matériau pérovskite.",
    "occurrence": "Production de précision.",
    "applications": [
      "Innovation technologique",
      "Physique des matériaux"
    ]
  },
  { "name": "Sélumétinib", "formula": "C₁₇H₁₅BrClFIn₂O₃", "composition": { "C": 17, "H": 15, "Br": 1, "Cl": 1, "F": 1, "I": 2, "N": 2, "O": 3 }, "molarMass": "457.68 g/mol", "category": "Inhibiteur de MEK1/2", "summary": "Utilisé pour les neurofibromes plexiformes chez les patients atteints de neurofibromatose de type 1.", "occurrence": "Synthétique.", "applications": ["Oncologie pédiatrique", "Neurologie"] },
  { "name": "Mirdamétinib", "formula": "C₁₇H₁₇F₃N₂O₄", "composition": { "C": 17, "H": 17, "F": 3, "N": 2, "O": 4 }, "molarMass": "370.32 g/mol", "category": "Inhibiteur de MEK", "summary": "Candidat pour le traitement de la neurofibromatose et d'autres tumeurs à mutation MAPK.", "occurrence": "Synthétique.", "applications": ["Recherche clinique", "Oncologie"] },
  { "name": "Pimasertib", "formula": "C₁₅H₁₅F₂IN₂O₃", "composition": { "C": 15, "H": 15, "F": 2, "I": 1, "N": 2, "O": 3 }, "molarMass": "436.19 g/mol", "category": "Inhibiteur de MEK1/2", "summary": "Étudié pour divers cancers solides et hématologiques.", "occurrence": "Synthétique.", "applications": ["Essais cliniques"] },
  { "name": "Refamétinib", "formula": "C₁₉H₂₀F₃IN₂O₅S", "composition": { "C": 19, "H": 20, "F": 3, "I": 1, "N": 2, "O": 5, "S": 1 }, "molarMass": "572.34 g/mol", "category": "Inhibiteur de MEK allostérique", "summary": "Inhibiteur puissant de la voie RAS/RAF/MEK/ERK.", "occurrence": "Synthétique.", "applications": ["Traitement du carcinome hépatocellulaire"] },
  { "name": "Inotersen", "formula": "C₂₃₀H₂₉₉N₆₉O₁₂₁P₁₉S₁₉", "composition": { "C": 230, "H": 299, "N": 69, "O": 121, "P": 19, "S": 19 }, "molarMass": "7185.20 g/mol", "category": "Oligonucléotide antisens (ASO)", "summary": "Réduit la production de transthyrétine pour l'amylose TTR.", "occurrence": "Synthétique.", "applications": ["Neurologie", "Génétique"] },
  { "name": "Volanésorsen", "formula": "C₂₃₂H₃₃₁N₇₅O₁₂₈P₂₀S₂₀", "composition": { "C": 232, "H": 331, "N": 75, "O": 128, "P": 20, "S": 20 }, "molarMass": "7512.45 g/mol", "category": "ASO anti-ApoC-III", "summary": "Utilisé pour le syndrome d'hyperchylomicronémie familiale.", "occurrence": "Synthétique.", "applications": ["Endocrinologie", "Lipidologie"] },
  { "name": "Golodirsen Sodium", "formula": "C₂₅₇H₄₁₁N₁₂₄Na₈O₈₉P₂₅", "composition": { "C": 257, "H": 411, "N": 124, "Na": 8, "O": 89, "P": 25 }, "molarMass": "8647.50 g/mol", "category": "Morpholino antisens", "summary": "Saut d'exon 53 pour la dystrophie de Duchenne (forme sodique).", "occurrence": "Synthétique.", "applications": ["Pédiatrie"] },
  { "name": "Casimersen", "formula": "C₂₆₈H₄₂₉N₁₂₇O₉₅P₂₂", "composition": { "C": 268, "H": 429, "N": 127, "O": 95, "P": 22 }, "molarMass": "8440.00 g/mol", "category": "PMO antisens", "summary": "Saut d'exon 45 pour les patients atteints de DMD.", "occurrence": "Synthétique.", "applications": ["Maladies rares"] },
  { "name": "Viltolarsen Magnésium", "formula": "C₂₄₄H₃₈₉Mg₂N₁₀₉O₈₄P₂₁", "composition": { "C": 244, "H": 389, "Mg": 2, "N": 109, "O": 84, "P": 21 }, "molarMass": "7548.60 g/mol", "category": "Morpholino (Neurologie)", "summary": "Forme complexée du viltolarsen.", "occurrence": "Synthétique.", "applications": ["Génétique"] },
  { "name": "Pérovskite BiI3", "formula": "BiI₃", "composition": { "Bi": 1, "I": 3 }, "molarMass": "589.69 g/mol", "category": "Triiodure de bismuth", "summary": "Semi-conducteur inorganique utilisé dans les détecteurs de rayons X et alternatif au plomb.", "occurrence": "Naturel (Bismite).", "applications": ["Imagerie médicale", "Optoélectronique"] },
  { "name": "MAPbBr3", "formula": "CH₆BrN", "composition": { "C": 1, "H": 6, "Br": 1, "N": 1 }, "molarMass": "111.97 g/mol", "category": "Bromure de méthylammonium", "summary": "Pérovskite hybride à large bande interdite émettant dans le vert.", "occurrence": "Synthétique.", "applications": ["LED", "Lasers"] },
  { "name": "FAPbBr3", "formula": "CH₅BrN₂", "composition": { "C": 1, "H": 5, "Br": 1, "N": 2 }, "molarMass": "124.97 g/mol", "category": "Bromure de formamidinium", "summary": "Utilisé pour la stabilisation de phase des pérovskites complexes.", "occurrence": "Synthétique.", "applications": ["Photovoltaïque"] },
  { "name": "CsSnI3", "formula": "CsSnI₃", "composition": { "Cs": 1, "Sn": 1, "I": 3 }, "molarMass": "632.32 g/mol", "category": "Pérovskite sans plomb", "summary": "Une des pérovskites Sn les plus étudiées pour l'électronique écologique.", "occurrence": "Synthétique.", "applications": ["Transistors", "Cellules solaires"] },
  { "name": "AS3 (Agent de réticulation)", "formula": "C₁₀H₁₈O₄", "composition": { "C": 10, "H": 18, "O": 4 }, "molarMass": "202.25 g/mol", "category": "Diester de réticulation", "summary": "Modifie les propriétés mécaniques des hydrogels.", "occurrence": "Production industrielle.", "applications": ["Polymères", "Biomatériaux"] },
  { "name": "DSS (Disuccinimidyl suberate)", "formula": "C₁₆H₂₀N₂O₈", "composition": { "C": 16, "H": 20, "N": 2, "O": 8 }, "molarMass": "368.34 g/mol", "category": "Réticulant homobifonctionnel", "summary": "Perméable aux membranes, utilisé pour réticuler les protéines intracellulaires.", "occurrence": "Synthétique.", "applications": ["Protéomique", "Biochimie"] },
  { "name": "BS3 (Bis(sulfosuccinimidyl)subérate)", "formula": "C₁₆H₁₈N₂Na₂O₁₄S₂", "composition": { "C": 16, "H": 18, "N": 2, "Na": 2, "O": 14, "S": 2 }, "molarMass": "572.43 g/mol", "category": "Réticulant hydrosoluble", "summary": "Version sulfonée du DSS pour les réactions en milieu aqueux.", "occurrence": "Synthétique.", "applications": ["Spectrométrie de masse"] },
  { "name": "DMP (Dimethyl pimelimidate)", "formula": "C₉H₁₈N₂O₂", "composition": { "C": 9, "H": 18, "N": 2, "O": 2 }, "molarMass": "186.25 g/mol", "category": "Imidoester de réticulation", "summary": "Utilisé pour l'immunoprécipitation et la fixation de protéines.", "occurrence": "Synthétique.", "applications": ["Biologie moléculaire"] },
  { "name": "DST (Disuccinimidyl tartrate)", "formula": "C₁₂H₁₂N₂O₁₀", "composition": { "C": 12, "H": 12, "N": 2, "O": 10 }, "molarMass": "344.23 g/mol", "category": "Réticulant clivable", "summary": "Contient une fonction diol clivable par le périodate.", "occurrence": "Synthétique.", "applications": ["Étude des interactions protéines"] },
  { "name": "EGS (Ethylene glycol bis(succinimidyl succinate))", "formula": "C₁₈H₂₀N₂O₁₂", "composition": { "C": 18, "H": 20, "N": 2, "O": 12 }, "molarMass": "456.36 g/mol", "category": "Réticulant à longue chaîne", "summary": "Bras espaceur de 16,1 Å pour la réticulation de protéines éloignées.", "occurrence": "Synthétique.", "applications": ["Biochimie structurale"] },
  { "name": "DTSSP (3,3'-Dithiobis(sulfosuccinimidylpropionate))", "formula": "C₁₄H₁₄N₂Na₂O₁₄S₄", "composition": { "C": 14, "H": 14, "N": 2, "Na": 2, "O": 14, "S": 4 }, "molarMass": "608.51 g/mol", "category": "Réticulant réductible", "summary": "Utilisé pour capturer des complexes transitoires clivables par le DTT.", "occurrence": "Synthétique.", "applications": ["Interactomique"] },
  { "name": "Sulfo-SMCC", "formula": "C₁₆H₁₇N₂NaO₉S", "composition": { "C": 16, "H": 17, "N": 2, "Na": 1, "O": 9, "S": 1 }, "molarMass": "436.37 g/mol", "category": "Réticulant hétérobifonctionnel", "summary": "Couple les amines primaires aux sulfhydryles (thiol).", "occurrence": "Synthétique.", "applications": ["Conjugués anticorps-enzyme"] },
  { "name": "PDPH (3-(2-Pyridyldithio)propionyl hydrazide)", "formula": "C₈H₁₁N₃OS₂", "composition": { "C": 8, "H": 11, "N": 3, "O": 1, "S": 2 }, "molarMass": "229.32 g/mol", "category": "Réticulant thiol-carbohydrate", "summary": "Couple les glycoprotéines oxydées aux sulfhydryles.", "occurrence": "Synthétique.", "applications": ["Glycobiologie"] },
  { "name": "BMPH (N-(beta-Maleimidopropionic acid) hydrazide)", "formula": "C₇H₈N₃O₃", "composition": { "C": 7, "H": 8, "N": 3, "O": 3 }, "molarMass": "182.16 g/mol", "category": "Coupleur maléimide-hydrazide", "summary": "Utilisé pour l'étiquetage des résidus cystéine avec des sucres.", "occurrence": "Synthétique.", "applications": ["Bioconjugaison"] },
  { "name": "Iodure de plomb (II)", "formula": "PbI₂", "composition": { "Pb": 1, "I": 2 }, "molarMass": "461.01 g/mol", "category": "Halogénure de plomb", "summary": "Le précurseur inorganique central pour les pérovskites solaires.", "occurrence": "Minéral (Iodargyrite).", "applications": ["Solaire", "Détecteurs de radiation"] },
  { "name": "Chlorure de méthylammonium (MACl)", "formula": "CH₆ClN", "composition": { "C": 1, "H": 6, "Cl": 1, "N": 1 }, "molarMass": "67.52 g/mol", "category": "Additif de pérovskite", "summary": "Favorise la croissance cristalline des films minces.", "occurrence": "Synthétique.", "applications": ["Photovoltaïque"] },
  { "name": "Thiocyanate de plomb (II)", "formula": "Pb(SCN)₂", "composition": { "Pb": 1, "S": 2, "C": 2, "N": 2 }, "molarMass": "323.36 g/mol", "category": "Pseudohalogénure", "summary": "Utilisé pour améliorer la passivation des joints de grains dans les pérovskites.", "occurrence": "Synthétique.", "applications": ["Énergie renouvelable"] },
  { "name": "Cs2AgBiBr6", "formula": "Cs₂AgBiBr₆", "composition": { "Cs": 2, "Ag": 1, "Bi": 1, "Br": 6 }, "molarMass": "1064.00 g/mol", "category": "Pérovskite double sans plomb", "summary": "Structure stable et non toxique explorée pour le photovoltaïque.", "occurrence": "Synthétique.", "applications": ["Recherche photovoltaïque", "Détecteurs"] },
  { "name": "Brénétinib", "formula": "C₂₂H₂₁FN₄O₂", "composition": { "C": 22, "H": 21, "F": 1, "N": 4, "O": 2 }, "molarMass": "392.43 g/mol", "category": "Inhibiteur de MEK", "summary": "Inhibiteur de kinase de petite molécule en développement préclinique.", "occurrence": "Synthétique.", "applications": ["Recherche oncologique"] },
  { "name": "Iodure de Phényléthylammonium (PEAI)", "formula": "C₈H₁₂IN", "composition": { "C": 8, "H": 12, "I": 1, "N": 1 }, "molarMass": "249.09 g/mol", "category": "Ligand de surface 2D", "summary": "Crée une couche de pérovskite 2D pour protéger la couche 3D de l'humidité.", "occurrence": "Synthétique.", "applications": ["Stabilité solaire"] },
  { "name": "Iodure de Butylammonium (BAI)", "formula": "C₄H₁₂IN", "composition": { "C": 4, "H": 12, "I": 1, "N": 1 }, "molarMass": "201.05 g/mol", "category": "Sel organique volatil", "summary": "Utilisé dans la fabrication de pérovskites quasi-2D (Ruddlesden-Popper).", "occurrence": "Synthétique.", "applications": ["Optoélectronique"] },
  { "name": "Octylamine Hydrochloride", "formula": "C₈H₂₀ClN", "composition": { "C": 8, "H": 20, "Cl": 1, "N": 1 }, "molarMass": "165.71 g/mol", "category": "Surfactant pour pérovskites", "summary": "Modifie l'énergie de surface des substrats de dépôt.", "occurrence": "Production chimique.", "applications": ["Ingénierie de surface"] },
  { "name": "MASnI3 (Iodure de méthylammonium étain)", "formula": "CH₆I₃NSn", "composition": { "C": 1, "H": 6, "I": 3, "N": 1, "Sn": 1 }, "molarMass": "531.48 g/mol", "category": "Pérovskite à l'étain", "summary": "L'alternative la plus directe à base d'étain au MAPbI3.", "occurrence": "Synthétique.", "applications": ["Cellules solaires écologiques"] },
  { "name": "Iodure de Formamidinium Étain (FASnI3)", "formula": "CH₅I₃N₂Sn", "composition": { "C": 1, "H": 5, "I": 3, "N": 2, "Sn": 1 }, "molarMass": "544.49 g/mol", "category": "Matériau photovoltaïque sans plomb", "summary": "Structure thermodynamiquement stable à base d'étain.", "occurrence": "Synthétique.", "applications": ["Électronique flexible"] },
  { "name": "Iodure de Guanidinium (GAI)", "formula": "CH₆IN₃", "composition": { "C": 1, "H": 6, "I": 1, "N": 3 }, "molarMass": "187.03 g/mol", "category": "Cation de pérovskite volumineux", "summary": "Améliore la durée de vie des porteurs de charge en réduisant les défauts.", "occurrence": "Synthétique.", "applications": ["Efficacité solaire"] },
  { "name": "Bromure d'Ammonium (NH4Br)", "formula": "NH₄Br", "composition": { "N": 1, "H": 4, "Br": 1 }, "molarMass": "97.94 g/mol", "category": "Halogénure d'ammonium", "summary": "Utilisé comme additif pour ajuster le gap d'énergie.", "occurrence": "Synthétique.", "applications": ["Phosphores", "Photogravure"] },
  { "name": "DMTMM (4-(4,6-Diméthoxy-1,3,5-triazin-2-yl)-4-méthylmorpholinium chloride)", "formula": "C₁₀H₁₇ClN₄O₃", "composition": { "C": 10, "H": 17, "Cl": 1, "N": 4, "O": 3 }, "molarMass": "276.72 g/mol", "category": "Agent de condensation", "summary": "Réactif de couplage efficace pour la synthèse peptidique en solution aqueuse.", "occurrence": "Synthétique.", "applications": ["Chimie pharmaceutique"] },
  { "name": "COMU (1-[(1-(Cyano-2-éthoxy-2-oxoéthylidèneaminooxy)diméthylaminomorpholino)]uronium hexafluorophosphate)", "formula": "C₁₂H₁₉F₆N₅O₅P", "composition": { "C": 12, "H": 19, "F": 6, "N": 5, "O": 5, "P": 1 }, "molarMass": "458.28 g/mol", "category": "Réactif d'uronium", "summary": "Agent de couplage de troisième génération à haute performance.", "occurrence": "Synthétique.", "applications": ["Synthèse peptidique avancée"] },
  { "name": "HBTU (N,N,N',N'-Tétraméthyl-O-(1H-benzotriazol-1-yl)uronium hexafluorophosphate)", "formula": "C₁₁H₁₆F₆N₅OP", "composition": { "C": 11, "H": 16, "F": 6, "N": 5, "O": 1, "P": 1 }, "molarMass": "379.24 g/mol", "category": "Agent de couplage (Peptides)", "summary": "Classique pour la synthèse en phase solide.", "occurrence": "Synthétique.", "applications": ["Recherche biochimique"] },
  { "name": "HATU", "formula": "C₁₀H₁₅F₆N₆OP", "composition": { "C": 10, "H": 15, "F": 6, "N": 6, "O": 1, "P": 1 }, "molarMass": "380.23 g/mol", "category": "Agent de couplage à haute efficacité", "summary": "D'usage courant pour les couplages difficiles et les résidus encombrés.", "occurrence": "Synthétique.", "applications": ["Ingénierie des protéines"] },
  { "name": "PyBOP (Benzotriazol-1-yl-oxytripyrrolidinophosphonium hexafluorophosphate)", "formula": "C₁₈H₂₈F₆N₆OP₂", "composition": { "C": 18, "H": 28, "F": 6, "N": 6, "O": 1, "P": 2 }, "molarMass": "520.39 g/mol", "category": "Agent de phosphonium", "summary": "Alternative sûre au BOP (pas de production de HMPA cancérigène).", "occurrence": "Synthétique.", "applications": ["Synthèse organique"] },
  { "name": "TBTU", "formula": "C₁₁H₁₆BF₄N₅O", "composition": { "C": 11, "H": 16, "B": 1, "F": 4, "N": 5, "O": 1 }, "molarMass": "321.08 g/mol", "category": "Sel de tétrafluoroborate", "summary": "Moins cher que le HBTU, utilisé pour des couplages de routine.", "occurrence": "Synthétique.", "applications": ["Laboratoire"] },
  { "name": "BOP (Réactif de Castro)", "formula": "C₁₂H₂₂F₆N₆OP₂", "composition": { "C": 12, "H": 22, "F": 6, "N": 6, "O": 1, "P": 2 }, "molarMass": "442.28 g/mol", "category": "Réactif de couplage phosphoré", "summary": "Puissant mais délaissé au profit du PyBOP pour des raisons de sécurité.", "occurrence": "Synthétique.", "applications": ["Synthèse peptidique"] },
  { "name": "PyAOP", "formula": "C₁₇H₂₇F₆N₇OP₂", "composition": { "C": 17, "H": 27, "F": 6, "N": 7, "O": 1, "P": 2 }, "molarMass": "521.38 g/mol", "category": "Agent de couplage azatrizolyle", "summary": "Plus réactif que le PyBOP grâce à l'effet de l'azote supplémentaire.", "occurrence": "Synthétique.", "applications": ["Peptides complexes"] },
  { "name": "Oxyma Pure (Ethyl 2-cyano-2-(hydroxyimino)acétate)", "formula": "C₅H₆N₂O₃", "composition": { "C": 5, "H": 6, "N": 2, "O": 3 }, "molarMass": "142.11 g/mol", "category": "Additif de couplage non explosif", "summary": "Remplace avantageusement le HOBt avec une réactivité accrue.", "occurrence": "Synthétique.", "applications": ["Synthèse à grande échelle"] },
  { "name": "HOAt (1-Hydroxy-7-azabenzotriazole)", "formula": "C₅H₄N₄O", "composition": { "C": 5, "H": 4, "N": 4, "O": 1 }, "molarMass": "136.11 g/mol", "category": "Additif de couplage (Azabenzotriazole)", "summary": "Utilisé avec le HATU pour minimiser la racémisation.", "occurrence": "Synthétique.", "applications": ["Chimie chirale"] },
  { "name": "HOBt (1-Hydroxybenzotriazole)", "formula": "C₆H₅N₃O", "composition": { "C": 6, "H": 5, "N": 3, "O": 1 }, "molarMass": "135.12 g/mol", "category": "Additif de couplage classique", "summary": "Forme des esters actifs pour prévenir les réactions secondaires.", "occurrence": "Synthétique.", "applications": ["Purification de peptides"] },
  { "name": "T3P (Propylphosphonic anhydride)", "formula": "C₉H₂₁O₆P₃", "composition": { "C": 9, "H": 21, "O": 6, "P": 3 }, "molarMass": "318.18 g/mol", "category": "Agent de déshydratation", "summary": "Agent de couplage doux et propre avec des sous-produits solubles dans l'eau.", "occurrence": "Synthétique.", "applications": ["Production pharmaceutique"] },
  { "name": "EEDQ (2-Éthoxy-1-éthoxycarbonyl-1,2-dihydroquinoline)", "formula": "C₁₄H₁₇NO₃", "composition": { "C": 14, "H": 17, "N": 1, "O": 3 }, "molarMass": "247.29 g/mol", "category": "Réactif de couplage acridinique", "summary": "Fonctionne sans base ajoutée, limitant la racémisation.", "occurrence": "Synthétique.", "applications": ["Organique"] },
  { "name": "DEPBT (3-(Diéthoxyphosphoryloxy)-1,2,3-benzotriazin-4(3H)-one)", "formula": "C₁₁H₁₄N₃O₅P", "composition": { "C": 11, "H": 14, "N": 3, "O": 5, "P": 1 }, "molarMass": "299.22 g/mol", "category": "Agent de couplage organophosphoré", "summary": "Excellent pour le couplage d'acides aminés sans protection de chaîne latérale.", "occurrence": "Synthétique.", "applications": ["Glycopeptides"] },
  { "name": "CDI (1,1'-Carbonyldiimidazole)", "formula": "C₇H₆N₄O", "composition": { "C": 7, "H": 6, "N": 4, "O": 1 }, "molarMass": "162.15 g/mol", "category": "Réactif de couplage (Imidazole)", "summary": "Libère du CO2 et du milieu réactionnel volatil imidizole.", "occurrence": "Synthétique.", "applications": ["Activation de l'acide carboxylique"] }
];
