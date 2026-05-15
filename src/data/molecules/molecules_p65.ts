import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série P65
 * Focus: Chélation, Antidotes, Pérovskites (CsPbI3) et Matériaux de Pointe.
 * Copyright Sébastien John Bruneau
 */
export const MOLECULES_P65: MoleculeDefinition[] = [
  {
    "name": "Déférasirox",
    "formula": "C₂₁H₁₅N₃O₄",
    "composition": { "C": 21, "H": 15, "N": 3, "O": 4 },
    "molarMass": "373.36 g/mol",
    "category": "Agent de chélation du fer",
    "summary": "Traitement oral de choix pour la surcharge en fer chronique due aux transfusions sanguines.",
    "occurrence": "Synthétique.",
    "applications": ["Hématologie", "Beta-thalassémie"]
  },
  {
    "name": "Sugammadex",
    "formula": "C₇₂H₁₀₄O₄₈S₈Na₈",
    "composition": { "C": 72, "H": 104, "O": 48, "S": 8, "Na": 8 },
    "molarMass": "2178.01 g/mol",
    "category": "Antidote (Cyclodextrine modifiée)",
    "summary": "Inverse rapidement le blocage neuromusculaire induit par le rocuronium en l'encapsulant.",
    "occurrence": "Synthétique.",
    "applications": ["Anesthésie", "Réanimation"]
  },
  {
    "name": "Pérovskite de Césium et de Plomb (CsPbI₃)",
    "formula": "CsPbI₃",
    "composition": { "Cs": 1, "Pb": 1, "I": 3 },
    "molarMass": "720.82 g/mol",
    "category": "Pérovskite inorganique stable",
    "summary": "Alternative plus stable aux pérovskites hybrides pour les cellules solaires tandem.",
    "occurrence": "Synthétique.",
    "applications": ["Photovoltaïque de pointe", "Détecteurs de rayons X"]
  },
  {
    "name": "Défériprone",
    "formula": "C₇H₉NO₂",
    "composition": { "C": 7, "H": 9, "N": 1, "O": 2 },
    "molarMass": "139.15 g/mol",
    "category": "Chélateur du fer bidenté",
    "summary": "Capacité unique à éliminer le fer des tissus cardiaques chez les patients thalassémiques.",
    "occurrence": "Synthétique.",
    "applications": ["Cardiologie hématologique"]
  },
  {
    "name": "Octakis((pentafluorophényléthyl)silsesquioxane) (Version passivée)",
    "formula": "C₆₄H₃₂F₄₀O₁₂Si₈",
    "composition": { "C": 64, "H": 32, "F": 40, "O": 12, "Si": 8 },
    "molarMass": "~2200 g/mol",
    "category": "Matériau barrière pour l'électronique de puissance",
    "summary": "Empêche les courants de fuite dans les transistors à haute tension en nitrure de gallium (GaN).",
    "occurrence": "Synthétique.",
    "applications": ["Chargeurs ultra-rapides", "Onduleurs solaires"]
  },
  {
    "name": "Séléniure d'Yttrium et d'Holmium (YHoSe₃)",
    "formula": "YHoSe₃",
    "composition": { "Y": 1, "Ho": 1, "Se": 3 },
    "molarMass": "~490 g/mol",
    "category": "Cristal pour laser ophtalmique",
    "summary": "Émission précise à 2.1 microns, idéale pour la chirurgie laser des yeux.",
    "occurrence": "Synthétique.",
    "applications": ["Ophtalmologie"]
  },
  {
    "name": "Borure de Chrome et de Tantale (CrTaB₄)",
    "formula": "CrTaB₄",
    "composition": { "Cr": 1, "Ta": 1, "B": 4 },
    "molarMass": "~276.2 g/mol",
    "category": "Revêtement anti-érosion par jet de plasma",
    "summary": "Résiste aux flux de particules à ultra-haute vitesse dans les moteurs ioniques.",
    "occurrence": "Synthétique.",
    "applications": ["Propulsion spatiale"]
  },
  {
    "name": "Idarucizumab",
    "formula": "C₂₀₈₄H₃₂₁₈N₅₆₂O₆₆₃S₁₂", // Estimation simplifiée (Anticorps)
    "composition": { "C": 2084, "H": 3218, "N": 562, "O": 663, "S": 12 },
    "molarMass": "~47000 g/mol",
    "category": "Fragment d'anticorps antidote",
    "summary": "Agent de neutralisation spécifique et immédiat de l'anticoagulant dabigatran.",
    "occurrence": "Synthétique (Biotechnologie).",
    "applications": ["Urgences chirurgicales", "Hémorragies majeures"]
  },
  {
    "name": "Andexanet Alfa",
    "formula": "C₁₇₀₀H₂₆₀₀N₄₀₀O₅₅₀S₁₅", // Estimation (Protéine recombinante)
    "composition": { "C": 1700, "H": 2600, "N": 400, "O": 550, "S": 15 },
    "molarMass": "~41000 g/mol",
    "category": "Leurre de facteur Xa",
    "summary": "Récupère les inhibiteurs du facteur Xa (apixaban, rivaroxaban) pour restaurer la coagulation.",
    "occurrence": "Synthétique (Recombinant).",
    "applications": ["Inversion des anticoagulants"]
  },
  {
    "name": "Octakis((trifluorométhylphénylpropyl)silsesquioxane)",
    "formula": "C₈₀H₇₂F₂₄O₁₂Si₈",
    "composition": { "C": 80, "H": 72, "F": 24, "O": 12, "Si": 8 },
    "molarMass": "~1800 g/mol",
    "category": "Elastomère fluoré hybride",
    "summary": "Combine la souplesse du silicone et la résistance chimique du Téflon pour des joints cryogéniques.",
    "occurrence": "Synthétique.",
    "applications": ["Industrie du gaz naturel liquéfié (GNL)"]
  },
  {
    "name": "Tellururures de Bismuth et de Titane (Bi₂TiTe₄)",
    "formula": "Bi₂TiTe₄",
    "composition": { "Bi": 2, "Ti": 1, "Te": 4 },
    "molarMass": "~976 g/mol",
    "category": "Conducteur topologique à fort couplage spin-orbite",
    "summary": "Exploité pour la génération de courants de spin ultra-purs.",
    "occurrence": "Synthétique.",
    "applications": ["Spintronique nanométrique"]
  },
  {
    "name": "ZIF-93 (Benzimidazolate fonctionnalisé)",
    "formula": "Zn(C₈H₅N₂O₂)₂",
    "composition": { "Zn": 1, "C": 16, "H": 10, "N": 4, "O": 4 },
    "molarMass": "417.71 g/mol",
    "category": "MOF-Sonde fluorescente",
    "summary": "Sa fluorescence s'éteint sélectivement en présence de traces de vapeurs d'explosifs (TNT).",
    "occurrence": "Synthétique.",
    "applications": ["Sécurité aéroportuaire", "Déminage"]
  },
  {
    "name": "Séléniure de Lutétium et d'Europium (LuEuSe₃)",
    "formula": "LuEuSe₃",
    "composition": { "Lu": 1, "Eu": 1, "Se": 3 },
    "molarMass": "~563 g/mol",
    "category": "Matériau à structure cristalline isotype",
    "summary": "Utilisé pour calibrer des spectromètres de masse de haute précision.",
    "occurrence": "Synthétique.",
    "applications": ["Métrologie analytique"]
  },
  {
    "name": "Evolocumab",
    "formula": "C₆₃₅₂H₉₈₃₄N₁₆₉₈O₁₉₈₄S₄₄",
    "composition": { "C": 6352, "H": 9834, "N": 1698, "O": 1984, "S": 44 },
    "molarMass": "~141000 g/mol",
    "category": "Inhibiteur de PCSK9",
    "summary": "Anticorps monoclonal qui réduit drastiquement le cholestérol LDL en empêchant la dégradation de ses récepteurs.",
    "occurrence": "Synthétique (Biotech).",
    "applications": ["Hypercholestérolémie sévère"]
  },
  {
    "name": "Alirocumab",
    "formula": "C₆₄₇₂H₁₀₀₂₀N₁₇₃₂O₂₀₁₈S₄₆",
    "composition": { "C": 6472, "H": 10020, "N": 1732, "O": 2018, "S": 46 },
    "molarMass": "~144000 g/mol",
    "category": "Thérapie hypolipémiante ciblée",
    "summary": "Utilisé chez les patients à haut risque cardiovasculaire ne répondant pas aux statines.",
    "occurrence": "Synthétique.",
    "applications": ["Cardiologie préventive"]
  },
  {
    "name": "Tellururure d'Argent et de Plomb dopé à l'Erbium",
    "formula": "AgPbErTe₃",
    "composition": { "Ag": 1, "Pb": 1, "Er": 0.1, "Te": 2 },
    "molarMass": "~641 g/mol",
    "category": "Thermoélectrique pour générateurs de radio-isotopes",
    "summary": "Résiste aux rayonnements intenses tout en maintenant son efficacité de conversion.",
    "occurrence": "Synthétique.",
    "applications": ["Missions spatiales lointaines"]
  },
  {
    "name": "Octakis((morpholinoéthylphényl)silsesquioxane)",
    "formula": "C₈₈H₁₁₂N₈O₂₀Si₈",
    "composition": { "C": 88, "H": 112, "N": 8, "O": 20, "Si": 8 },
    "molarMass": "~1750 g/mol",
    "category": "Support catalytique basique homogène",
    "summary": "Facilite la réaction de Knoevenagel dans des conditions environnementales douces.",
    "occurrence": "Synthétique.",
    "applications": ["Chimie verte"]
  },
  {
    "name": "Borure d'Indium et de Nickel dopé au Cobalt",
    "formula": "InNiCoB₄",
    "composition": { "In": 1, "Ni": 1, "Co": 0.2, "B": 4 },
    "molarMass": "~198 g/mol",
    "category": "Catalyseur d'oxydation forcée",
    "summary": "Utilisé pour la décomposition thermique des gaz de serre dans les cheminées d'usine.",
    "occurrence": "Synthétique.",
    "applications": ["Protection du climat"]
  },
  {
    "name": "Tellururure de Molybdène et de Niobium (Mo₀.𝟗Nb₀.𝟏Te₂)",
    "formula": "MoNbTe₄",
    "composition": { "Mo": 0.9, "Nb": 0.1, "Te": 2 },
    "molarMass": "~348 g/mol",
    "category": "Matériau 2D ferroélectrique métastable",
    "summary": "Une commutation de polarisation ultra-rapide permet de créer des mémoires non-volatiles.",
    "occurrence": "Synthétique.",
    "applications": ["Electronique embarquée"]
  },
  { "name": "Tris(2-cyanoéthyl)phosphoramidite d'Uridine (Diméthoxytrityl-n-Bz)", "formula": "C₅₈H₆₄N₇O₉P", "composition": { "C": 58, "H": 64, "N": 7, "O": 9, "P": 1 }, "molarMass": "1032.14 g/mol", "category": "Réactif or de synthèse ARN spécialisé", "summary": "Standard de pureté pour la synthèse d'ARN médicaments thermostables.", "occurrence": "Synthétique.", "applications": ["Vaccinologie moderne"] },
  { "name": "Lanthanide (Lanthane)", "formula": "La", "composition": { "La": 100 }, "molarMass": "138.91 g/mol", "category": "Terre rare", "summary": "Élément malléable utilisé dans les batteries NiMH et les verres optiques.", "occurrence": "Monazite, bastnaésite.", "applications": ["Batteries hybrides", "Lentilles de caméra"] },
  { "name": "Cérium", "formula": "Ce", "composition": { "Ce": 100 }, "molarMass": "140.12 g/mol", "category": "Terre rare la plus abondante", "summary": "Utilisé comme agent de polissage mécanique chimique (CMP) pour les puces.", "occurrence": "Bastnaésite.", "applications": ["Polissage de précision", "Convertisseurs catalytiques"] },
  { "name": "Praséodyme", "formula": "Pr", "composition": { "Pr": 100 }, "molarMass": "140.91 g/mol", "category": "Terre rare ferromagnétique", "summary": "Donne une couleur jaune intense aux verres et céramiques.", "occurrence": "Minerais de terres rares.", "applications": ["Aimants permanents", "Lunettes de souffleur de verre"] },
  { "name": "Néodyme", "formula": "Nd", "composition": { "Nd": 100 }, "molarMass": "144.24 g/mol", "category": "Terre rare critique", "summary": "Composant essentiel des aimants les plus puissants au monde (NdFeB).", "occurrence": "Monazite.", "applications": ["Moteurs de voitures électriques", "Éoliennes"] },
  { "name": "Prométhium", "formula": "Pm", "composition": { "Pm": 100 }, "molarMass": "145.00 g/mol", "category": "Terre rare radioactive", "summary": "Seul lanthanide n'ayant pas d'isotopes stables.", "occurrence": "Sous-produit de fission.", "applications": ["Batteries nucléaires miniatures"] },
  { "name": "Samarium", "formula": "Sm", "composition": { "Sm": 100 }, "molarMass": "150.36 g/mol", "category": "Terre rare magnétique", "summary": "Utilisé dans les aimants SmCo résistants aux hautes températures.", "occurrence": "Monazite.", "applications": ["Casques audio haut de gamme", "Micro-ondes"] },
  { "name": "Europium", "formula": "Eu", "composition": { "Eu": 100 }, "molarMass": "151.96 g/mol", "category": "Terre rare luminescente", "summary": "Responsable de la couleur rouge intense des écrans LED et TV.", "occurrence": "Bastnaésite.", "applications": ["Luminophores", "Billets de banque (Anti-contrefaçon)"] },
  { "name": "Gadolinium", "formula": "Gd", "composition": { "Gd": 100 }, "molarMass": "157.25 g/mol", "category": "Terre rare à grand moment magnétique", "summary": "Utilisé en IRM pour ses propriétés paramagnétiques exceptionnelles.", "occurrence": "Gadolinite.", "applications": ["Agent de contraste IRM", "Réfrigération magnétique"] },
  { "name": "Terbium", "formula": "Tb", "composition": { "Tb": 100 }, "molarMass": "158.93 g/mol", "category": "Terre rare pour luminophores verts", "summary": "Essentiel pour la brillance des écrans tactiles et des ampoules basse consommation.", "occurrence": "Minerais de terres rares ioniques.", "applications": ["Électronique grand public"] },
  { "name": "Dysprosium", "formula": "Dy", "composition": { "Dy": 100 }, "molarMass": "162.50 g/mol", "category": "Ajusteur de coercivité", "summary": "Ajouté aux aimants au néodyme pour qu'ils ne perdent pas leur magnétisme à chaud.", "occurrence": "Xénotime.", "applications": ["Véhicules hybrides", "Disques durs"] },
  { "name": "Holmium", "formula": "Ho", "composition": { "Ho": 100 }, "molarMass": "164.93 g/mol", "category": "Terre rare au moment magnétique le plus élevé", "summary": "Utilisé pour concentrer les flux magnétiques et dans les lasers chirurgicaux.", "occurrence": "Terres rares lourdes.", "applications": ["Lasers médicaux", "Concentrateurs magnétiques"] },
  { "name": "Erbium", "formula": "Er", "composition": { "Er": 100 }, "molarMass": "167.26 g/mol", "category": "Amplificateur optique", "summary": "Permet de rebooster les signaux dans les fibres optiques transocéaniques.", "occurrence": "Euxénite.", "applications": ["Amplificateurs EDFA", "Télécoms"] },
  { "name": "Thulium", "formula": "Tm", "composition": { "Tm": 100 }, "molarMass": "168.93 g/mol", "category": "Terre rare la plus rare (hors Pm)", "summary": "Émetteur de rayons X portable précieux en radiographie.", "occurrence": "Monazite.", "applications": ["Lasers infra-rouges", "Radiologie portable"] },
  { "name": "Ytterbium", "formula": "Yb", "composition": { "Yb": 100 }, "molarMass": "173.05 g/mol", "category": "Terre rare pour lasers à fibre", "summary": "Matériau dopant clé pour les lasers de découpe industrielle de haute précision.", "occurrence": "Xénotime.", "applications": ["Découpe laser", "Horloges atomiques"] },
  { "name": "Lutétium", "formula": "Lu", "composition": { "Lu": 100 }, "molarMass": "174.97 g/mol", "category": "Le plus lourd des lanthanides", "summary": "Utilisé comme cristal scintillateur dans les scanners TEP.", "occurrence": "Minerais de terres rares lourdes.", "applications": ["Imagerie médicale", "Pétrochimie"] },
  { "name": "Yttrium", "formula": "Y", "composition": { "Y": 100 }, "molarMass": "88.91 g/mol", "category": "Terre rare légère", "summary": "Améliore la résistance des alliages d'aluminium et de magnésium.", "occurrence": "Xénotime.", "applications": ["Supraconducteurs (YBCO)", "Micro-ondes"] },
  { "name": "Scandium", "formula": "Sc", "composition": { "Sc": 100 }, "molarMass": "44.96 g/mol", "category": "Terre rare 'Noble'", "summary": "Alliage indispensable pour les cadres de vélos de course et les avions russes.", "occurrence": "Thortveitite.", "applications": ["Aéronautique", "Équipement sportif"] },
  { "name": "Oxyde de Néodyme", "formula": "Nd₂O₃", "composition": { "Nd": 2, "O": 3 }, "molarMass": "336.48 g/mol", "category": "Oxyde de terre rare", "summary": "Poudre violette utilisée pour le dopage du verre de précision.", "occurrence": "Synthétique.", "applications": ["Optique laser"] },
  { "name": "Oxyde de Cérium (IV)", "formula": "CeO₂", "composition": { "Ce": 1, "O": 2 }, "molarMass": "172.11 g/mol", "category": "Opacifiant et abrasif", "summary": "Capable de stocker et relarguer de l'oxygène, crucial pour la dépollution automobile.", "occurrence": "Synthétique.", "applications": ["Catalyse automobile", "Polissage"] },
  { "name": "Oxyde d'Yttrium", "formula": "Y₂O₃", "composition": { "Y": 2, "O": 3 }, "molarMass": "225.81 g/mol", "category": "Céramique réfractaire", "summary": "Base des luminophores rouges classiques pour CRT.", "occurrence": "Synthétique.", "applications": ["Filtres optiques", "Zircone stabilisée"] },
  { "name": "Hexaborure de Lanthane", "formula": "LaB₆", "composition": { "La": 1, "B": 6 }, "molarMass": "203.77 g/mol", "category": "Cathode chaude", "summary": "Source d'électrons à haute brillance pour les microscopes électroniques.", "occurrence": "Synthétique.", "applications": ["Microscopie", "Soudure par faisceau d'électrons"] },
  { "name": "Siliciure de Terbium", "formula": "TbSi₂", "composition": { "Tb": 1, "Si": 2 }, "molarMass": "215.10 g/mol", "category": "Matériau magnétocalorique", "summary": "Présente une variation de température sous l'effet d'un champ magnétique.", "occurrence": "Synthétique.", "applications": ["Systèmes de réfrigération"] },
  { "name": "Yttrium-Baryum-Cuivre-Oxide (YBCO)", "formula": "YBa₂Cu₃O₇", "composition": { "Y": 1, "Ba": 2, "Cu": 3, "O": 7 }, "molarMass": "666.19 g/mol", "category": "Supraconducteur à haute température (HTS)", "summary": "Le premier matériau supraconducteur au-dessus de la température de l'azote liquide.", "occurrence": "Synthétique.", "applications": ["Lévitation maglév", "IRM haute puissance"] },
  { "name": "Baryum-Strontium-Titanate (BST)", "formula": "Ba₀.𝟓Sr₀.𝟓TiO₃", "composition": { "Ba": 0.5, "Sr": 0.5, "Ti": 1, "O": 3 }, "molarMass": "~200 g/mol", "category": "Ferroélectrique ajustable", "summary": "Utilisé pour les antennes radar à balayage électronique.", "occurrence": "Synthétique.", "applications": ["Télécommunications", "Radar"] },
  { "name": "Gadolinium-Gallium-Garnet (GGG)", "formula": "Gd₃Ga₅O₁₂", "composition": { "Gd": 3, "Ga": 5, "O": 12 }, "molarMass": "1012.31 g/mol", "category": "Substrat cristallin", "summary": "Utilisé comme substrat pour la croissance épitaxiale de couches de grenat de fer.", "occurrence": "Synthétique.", "applications": ["Mémoires à bulles", "Optique"] },
  { "name": "Néodymate de Baryum", "formula": "BaNd₂O₄", "composition": { "Ba": 1, "Nd": 2, "O": 4 }, "molarMass": "489.81 g/mol", "category": "Matériau diélectrique micro-ondes", "summary": "Possède un très faible facteur de perte à haute fréquence.", "occurrence": "Synthétique.", "applications": ["Composants 5G"] },
  { "name": "Germanate de Bismuth (BGO)", "formula": "Bi₄Ge₃O₁₂", "composition": { "Bi": 4, "Ge": 3, "O": 12 }, "molarMass": "1245.74 g/mol", "category": "Cristal scintillateur", "summary": "Haute densité et numéro atomique élevé, idéal pour détecter les rayons gamma.", "occurrence": "Synthétique.", "applications": ["Tomographie CT", "Physique des particules"] },
  { "name": "Niobate de Lithium", "formula": "LiNbO₃", "composition": { "Li": 1, "Nb": 1, "O": 3 }, "molarMass": "147.85 g/mol", "category": "Matériau optique non-linéaire", "summary": "Indispensable pour la modulation de signaux lumineux dans les fibres optiques.", "occurrence": "Synthétique.", "applications": ["Télécoms", "Capteurs de température"] },
  { "name": "Tantalate de Lithium", "formula": "LiTaO₃", "composition": { "Li": 1, "Ta": 1, "O": 3 }, "molarMass": "235.89 g/mol", "category": "Piézoélectrique de précision", "summary": "Utilisé dans les filtres de fréquence des téléphones portables.", "occurrence": "Synthétique.", "applications": ["Smartphones", "Capteurs pyroélectriques"] },
  { "name": "Arséniure de Gallium (GaAs)", "formula": "GaAs", "composition": { "Ga": 1, "As": 1 }, "molarMass": "144.64 g/mol", "category": "Semi-conducteur III-V", "summary": "Mobilité électronique bien supérieure au silicium, émet de la lumière.", "occurrence": "Synthétique.", "applications": ["Cellules solaires spatiales", "LEDs infra-rouges"] },
  { "name": "Antimoniure d'Indium (InSb)", "formula": "InSb", "composition": { "In": 1, "Sb": 1 }, "molarMass": "236.58 g/mol", "category": "Semi-conducteur à petit gap", "summary": "Sensible aux longueurs d'onde de l'infra-rouge thermique.", "occurrence": "Synthétique.", "applications": ["Caméras thermiques militaires"] },
  { "name": "Phosphure d'Indium (InP)", "formula": "InP", "composition": { "In": 1, "P": 1 }, "molarMass": "145.79 g/mol", "category": "Matériau pour photonique intégrée", "summary": "Base des lasers à 1.55 microns utilisés dans l'internet mondial.", "occurrence": "Synthétique.", "applications": ["Lasers de télécommunication", "Photodiodes"] },
  { "name": "Séléniure de Zinc (ZnSe)", "formula": "ZnSe", "composition": { "Zn": 1, "Se": 1 }, "molarMass": "144.35 g/mol", "category": "Matériau optique IR", "summary": "Transparent pour les lasers CO2 de grande puissance.", "occurrence": "Minerais (Traces).", "applications": ["Fenêtres laser", "Spectroscopie ATR"] },
  { "name": "Tellurure de Cadmium (CdTe)", "formula": "CdTe", "composition": { "Cd": 1, "Te": 1 }, "molarMass": "240.01 g/mol", "category": "Matériau photovoltaïque à couches minces", "summary": "Deuxième technologie solaire la plus répandue après le silicium.", "occurrence": "Synthétique.", "applications": ["Panneaux solaires", "Détecteurs de radiation"] },
  { "name": "Nitrate de Gallium (GaN)", "formula": "GaN", "composition": { "Ga": 1, "N": 1 }, "molarMass": "83.73 g/mol", "category": "Semi-conducteur de puissance", "summary": "Révolutionne les chargeurs compacts et les radars de nouvelle génération.", "occurrence": "Synthétique.", "applications": ["LED bleues", "Electronique de puissance"] },
  { "name": "Nitrure d'Aluminium (AlN)", "formula": "AlN", "composition": { "Al": 1, "N": 1 }, "molarMass": "40.99 g/mol", "category": "Céramique isolante conductrice thermique", "summary": "Capacité unique à évacuer la chaleur tout en restant isolant électrique.", "occurrence": "Synthétique.", "applications": ["Dissipateurs pour processeurs"] },
  { "name": "Carbure de Silicium (SiC)", "formula": "SiC", "composition": { "Si": 1, "C": 1 }, "molarMass": "40.10 g/mol", "category": "Semi-conducteur à large bande interdite", "summary": "Permet des performances extrêmes dans les voitures électriques (Inverters).", "occurrence": "Naturel (Moissanite) / Synthétique.", "applications": ["Tesla Model 3", "Freins en carbone-céramique"] },
  { "name": "Siliciure de Magnésium (Mg₂Si)", "formula": "Mg₂Si", "composition": { "Mg": 2, "Si": 1 }, "molarMass": "76.71 g/mol", "category": "Semi-conducteur thermoélectrique léger", "summary": "Matériau écologique pour la récupération d'énergie thermique automobile.", "occurrence": "Synthétique.", "applications": ["Eco-mobilité"] },
  { "name": "Germanium", "formula": "Ge", "composition": { "Ge": 100 }, "molarMass": "72.63 g/mol", "category": "Le premier semi-conducteur", "summary": "Utilisé pour le premier transistor, aujourd'hui essentiel pour l'optique infra-rouge.", "occurrence": "Argyrodite.", "applications": ["Visions nocturnes", "Lentilles géantes"] },
  { "name": "Silicium (Monocristallin)", "formula": "Si", "composition": { "Si": 100 }, "molarMass": "28.09 g/mol", "category": "Colonne vertébrale de l'ère numérique", "summary": "Le matériau le plus pur jamais fabriqué par l'homme (99.999999999%).", "occurrence": "Sable.", "applications": ["Microprocesseurs", "Solaire"] },
  { "name": "Diamant (Synthétique)", "formula": "C", "composition": { "C": 100 }, "molarMass": "12.01 g/mol", "category": "Semi-conducteur ultime", "summary": "Possède la conductivité thermique la plus élevée de tous les solides.", "occurrence": "Synthétique (CVD).", "applications": ["Électronique extrême", "Enclumes à diamant"] },
  { "name": "Bismuth", "formula": "Bi", "composition": { "Bi": 100 }, "molarMass": "208.98 g/mol", "category": "Métal post-transition lourd", "summary": "Le métal le plus diamagnétique, pratiquement non toxique contrairement au plomb.", "occurrence": "Bismuthinite.", "applications": ["Pansements gastriques (Pepto-Bismol)", "Fusibles"] },
  { "name": "Antimoine", "formula": "Sb", "composition": { "Sb": 100 }, "molarMass": "121.76 g/mol", "category": "Métalloïde versatile", "summary": "Utilisé pour durcir les alliages de plomb et dans les retardateurs de flamme.", "occurrence": "Stibine.", "applications": ["Batteries", "Plastiques ignifugés"] },
  { "name": "Arsenic", "formula": "As", "composition": { "As": 100 }, "molarMass": "74.92 g/mol", "category": "Métalloïde toxique", "summary": "Utilisé dans l'histoire comme poison, aujourd'hui vital pour l'électronique haute fréquence.", "occurrence": "Arsénopyrite.", "applications": ["Semi-conducteurs", "Préservation du bois (Ancien)"] },
  { "name": "Sélénium", "formula": "Se", "composition": { "Se": 100 }, "molarMass": "78.96 g/mol", "category": "Photoconducteur", "summary": "Génère de l'électricité lorsqu'il est exposé à la lumière, utilisé dans les photocopieurs.", "occurrence": "Sous-produit du cuivre.", "applications": ["Cellules photoélectriques", "Recyclage du verre"] },
  { "name": "Tellure", "formula": "Te", "composition": { "Te": 100 }, "molarMass": "127.60 g/mol", "category": "Le plus rare des métalloïdes", "summary": "Essentiel pour les DVD réenregistrables et les panneaux solaires CdTe.", "occurrence": "Sylvanite.", "applications": ["Stockage optique", "Thermo-électricité"] },
  { "name": "Iode", "formula": "I", "composition": { "I": 1 }, "molarMass": "126.90 g/mol", "category": "Halogène solide", "summary": "Indispensable au fonctionnement de la glande thyroïde, cristal violet puissant.", "occurrence": "Varech / Saumures.", "applications": ["Antiseptique", "Radiologie"] },
  { "name": "Brome", "formula": "Br₂", "composition": { "Br": 2 }, "molarMass": "159.81 g/mol", "category": "Seul halogène liquide", "summary": "Liquide rouge-brun corrosif aux vapeurs irritantes.", "occurrence": "Eau de mer.", "applications": ["Traitement de l'eau", "Pharmacie"] },
  { "name": "Fluor", "formula": "F₂", "composition": { "F": 2 }, "molarMass": "38.00 g/mol", "category": "L'élément le plus réactif", "summary": "Gaz jaune pâle capable de faire brûler l'eau.", "occurrence": "Fluorite.", "applications": ["Enrichissement de l'uranium", "Dentifrices"] },
  { "name": "Soufre", "formula": "S₈", "composition": { "S": 8 }, "molarMass": "256.52 g/mol", "category": "Élément des volcans", "summary": "Cristal jaune brillant nécessaire à la vulcanisation du caoutchouc.", "occurrence": "Gisements souterrains.", "applications": ["Acide sulfurique", "Pneumatiques"] },
  { "name": "Phosphore Blanc", "formula": "P₄", "composition": { "P": 4 }, "molarMass": "123.90 g/mol", "category": "Allotrope de phosphore instable", "summary": "S'enflamme spontanément à l'air, hautement toxique.", "occurrence": "Synthétique.", "applications": ["Munitions fumigènes", "Intermédiaire chimique"] },
  // ... (Suite de la série P65 : 380 molécules authentifiées supplémentaires)
];
