export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface Element {
  number: number;
  symbol: string;
  name: string;
  atomic_mass: number;
  category: string;
  group: number;
  period: number;
  phase: string;
  source?: string;
  spectral_img?: string;
  summary: string;
  xpos: number;
  ypos: number;
  shells: number[];
  electron_configuration: string;
  electron_configuration_semantic: string;
  electron_affinity?: number;
  electronegativity_pauling?: number;
  ionization_energies?: number[];
  cpk_hex?: string;
  appearance?: string;
  atomic_radius?: number;
  boil?: number;
  density?: number;
  melt?: number;
  molar_heat?: number;
  discovered_by?: string;
  oxidation_states?: number[];
  isotopes?: Isotope[];
  compounds?: Compound[];
  reactions?: ChemicalReaction[];
}

export interface Compound {
  name: string;
  formula: string;
  summary: string;
}

export interface ChemicalReaction {
  type?: string;
  description: string;
  equation: string;
}

export interface Isotope {
  name: string;
  mass: number;
  abundance?: number;
  halfLife?: string;
  decayMode?: string;
}

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  role: 'researcher' | 'admin';
}

export interface ResearchNote {
  id: string;
  elementId: number;
  authorId: string;
  authorName: string;
  content: string;
  projectId?: string;
  isPrivate: boolean;
  tags: string[];
  createdAt: any; // Firestore Timestamp
}

export interface ResearchProject {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  members: string[];
  status: 'active' | 'completed' | 'archived';
  createdAt: any;
  updatedAt: any;
}

export interface ScientificTerm {
  term: string;
  definition: string;
  category: string;
}
