import { MoleculeDefinition } from '../../types/molecule';

/**
 * Super-Bibliothèque de Molécules - Série P97
 * Focus: Pigments Industriels, Colorants Organiques et Encres.
 * Copyright Sébastien John Bruneau
 */
export const MOLECULES_P97: MoleculeDefinition[] = [
  { "name": "Bleu de Prusse", "formula": "Fe₄[Fe(CN)₆]₃", "composition": { "Fe": 7, "C": 18, "N": 18 }, "molarMass": "859.23 g/mol", "category": "Pigment inorganique", "summary": "Un bleu intense utilisé dans les plans et la peinture, aussi un antidote contre le césium.", "occurrence": "Synthétique", "applications": ["Art", "Médecine (chélateur)"] },
  { "name": "Rouge de Lithol", "formula": "C₂₀H₁₂CaN₂O₇S₂", "composition": { "C": 20, "H": 12, "Ca": 1, "N": 2, "O": 7, "S": 2 }, "molarMass": "520.55 g/mol", "category": "Dye monoazo", "summary": "Pigment rouge brillant utilisé pour les plastiques.", "occurrence": "Synthétique", "applications": ["Industrie du plastique"] },
  { "name": "Phthalocyanine de Cuivre", "formula": "C₃₂H₁₆CuN₈", "composition": { "C": 32, "H": 16, "Cu": 1, "N": 8 }, "molarMass": "576.08 g/mol", "category": "Pigment bleu organique", "summary": "Bleu Phthalo, extrêmement stable et résistant à la lumière.", "occurrence": "Synthétique", "applications": ["Encres", "Peintures automobiles"] },
  { "name": "Lilas d'Alun", "formula": "KAl(SO₄)₂", "composition": { "K": 1, "Al": 1, "S": 2, "O": 8 }, "molarMass": "258.21 g/mol", "category": "Sel de mordant", "summary": "Utilisé historiquement pour fixer les colorants sur les tissus.", "occurrence": "Naturel (Alunite).", "applications": ["Textile", "Papeterie"] },
  { "name": "Rhodamine B", "formula": "C₂₈H₃₁ClN₂O₃", "composition": { "C": 28, "H": 31, "Cl": 1, "N": 2, "O": 3 }, "molarMass": "479.01 g/mol", "category": "Fluorophore", "summary": "Colorant rose fluorescent utilisé comme traceur.", "occurrence": "Synthétique", "applications": ["Biotechnologie", "Laser à colorant"] },
  { "name": "Tartrazine", "formula": "C₁₆H₉N₄Na₃O₉S₂", "composition": { "C": 16, "H": 9, "N": 4, "Na": 3, "O": 9, "S": 2 }, "molarMass": "534.37 g/mol", "category": "Colorant azoïque jaune", "summary": "Colorant alimentaire jaune très courant (E102), peut provoquer des allergies.", "occurrence": "Synthétique", "applications": ["Alimentation", "Cosmétiques"] },
  { "name": "Azorubine", "formula": "C₂₀H₁₂N₂Na₂O₇S₂", "composition": { "C": 20, "H": 12, "N": 2, "Na": 2, "O": 7, "S": 2 }, "molarMass": "502.43 g/mol", "category": "Colorant rouge (E122)", "summary": "Donne une couleur rouge-noirâtre, banni aux USA mais autorisé en Europe.", "occurrence": "Synthétique", "applications": ["Alimentation", "Confiserie"] },
  { "name": "Noir de Carbone", "formula": "C", "composition": { "C": 1 }, "molarMass": "12.01 g/mol", "category": "Pigment basique", "summary": "Résultat de la combustion incomplète d'hydrocarbures, utilisé pour renforcer les pneus.", "occurrence": "Combustion contrôlée.", "applications": ["Pneumatiques", "Encres noires"] }
];
