
export interface MoleculeDefinition {
  name: string;
  formula: string;
  composition: { [key: string]: number };
  summary: string;
  category: string;
  molarMass: string;
  safetyWarning?: string;
  manufacturing?: string;
  meltingPoint?: string;
  boilingPoint?: string;
  occurrence?: string;
  applications?: string[];
  manufacturingDetails?: string;
  isGlowEffect?: boolean;
  notableHistory?: string;
  copyright?: string;
  isMonomer?: boolean;
}

export interface PolymerDefinition extends MoleculeDefinition {
  monomerUnits: string[]; // List of monomer names
  polymerType: 'addition' | 'condensation' | 'copolymer' | 'natural' | 'biological';
  chainLength?: number;
  glassTransitionTemp?: string; // Tg
  meltingTemp?: string; // Tm
  recyclingCode?: number;
  crystallinity?: string; // Amorphe, semi-cristallin, etc.
  inventor?: string;
  yearOfDiscovery?: number;
}
