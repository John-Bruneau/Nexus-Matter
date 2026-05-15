import { useState, useEffect } from 'react';
import { ELEMENTS, CATEGORY_COLORS } from '../../data/elements';
import { Element } from '../../types';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, Atom, Sparkles, Binary, List, Beaker as BeakerIcon, Search, Loader2, Globe, Lightbulb, X, FileText } from 'lucide-react';
import { identifyMolecule, searchMoleculeByName, suggestPossibleMolecules } from '../../lib/gemini';
import { MoleculeDefinition } from '../../types/molecule';
import { normalizeFormula } from '../../data/molecules';
import { ALL_MOLECULES } from '../../data/moleculeLibrary';

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

// --- Atom Visualizer Component ---
interface AtomVisualizerProps {
  number: number;
  shells: number[];
  symbol: string;
}

export function AtomVisualizer({ number, shells, symbol }: AtomVisualizerProps) {
  const protons = number;
  const neutrons = Math.round(number * 1.2); 

  return (
    <div className="relative w-full aspect-square max-w-[300px] flex items-center justify-center bg-black/20 rounded-full border border-white/5 overflow-hidden">
      {shells.map((count, shellIdx) => {
        const radius = 40 + shellIdx * 25;
        return (
          <div 
            key={shellIdx}
            className="absolute rounded-full border border-blue-500/10"
            style={{ 
              width: `${radius * 2}px`, 
              height: `${radius * 2}px`,
            }}
          >
            {Array.from({ length: count }).map((_, electronIdx) => {
              const angle = (electronIdx / count) * 360;
              return (
                <motion.div
                  key={electronIdx}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10 + shellIdx * 5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 origin-center"
                  style={{ rotate: `${angle}deg` }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                </motion.div>
              );
            })}
          </div>
        );
      })}

      <div className="relative w-12 h-12 flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-blue-600/20 rounded-full blur-xl"
        />
        <div className="flex flex-wrap gap-0.5 items-center justify-center w-8 h-8 relative z-10">
          {Array.from({ length: Math.min(protons, 15) }).map((_, i) => (
            <div key={`p-${i}`} className="w-1.5 h-1.5 rounded-full bg-red-400 shadow-sm" />
          ))}
          {Array.from({ length: Math.min(neutrons, 15) }).map((_, i) => (
            <div key={`n-${i}`} className="w-1.5 h-1.5 rounded-full bg-gray-400 shadow-sm" />
          ))}
          {protons > 15 && <span className="absolute text-[8px] font-bold text-white shadow-sm">+{protons}</span>}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-black text-white/40 select-none">{symbol}</span>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center">
        <div className="flex justify-center gap-4 text-[10px] font-medium text-gray-500 uppercase tracking-tighter">
          <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-400"/> {protons} Protons</span>
          <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"/> {neutrons} Neutrons</span>
          <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"/> {shells.reduce((a, b) => a + b, 0)} Électrons</span>
        </div>
      </div>
    </div>
  );
}

// --- Molecule 3D Component ---
export function Molecule3D({ symbol }: { symbol: string }) {
  return (
    <div className="w-48 h-48 [perspective:1000px] flex items-center justify-center">
      <motion.div 
        animate={{ rotateY: 360, rotateX: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative w-24 h-24 [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center font-bold text-2xl text-white border-2 border-white/20">
          {symbol}
        </div>

        <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 border border-blue-500/30 rounded-full [transform:rotateX(75deg)]" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 [transform:rotateX(75deg)]"
        >
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-300 rounded-full shadow-[0_0_10px_#93c5fd]" />
        </motion.div>

        <div className="absolute top-1/2 left-1/2 w-56 h-56 -translate-x-1/2 -translate-y-1/2 border border-purple-500/20 rounded-full [transform:rotateX(10deg)rotateY(45deg)]" />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-56 h-56 -translate-x-1/2 -translate-y-1/2 [transform:rotateX(10deg)rotateY(45deg)]"
        >
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-purple-300 rounded-full shadow-[0_0_10px_#d8b4fe]" />
        </motion.div>
      </motion.div>
    </div>
  );
}

// --- Molecule Modal Component ---
interface MoleculeModalProps {
  molecule: MoleculeDefinition;
  onClose: () => void;
}

export function MoleculeModal({ molecule, onClose }: MoleculeModalProps) {
  if (!molecule) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-2xl bg-[#161618] border border-[#27272a] rounded-3xl overflow-hidden shadow-2xl p-8"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
            <Binary size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{molecule.name}</h2>
            <span className="text-sm font-mono text-gray-500">{normalizeFormula(molecule.formula)}</span>
          </div>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-1 custom-scrollbar space-y-6">
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Résumé</h3>
            <p className="text-gray-300 leading-relaxed">{molecule.summary}</p>
          </section>

          {molecule.category && (
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Catégorie</h3>
              <p className="text-gray-300">{molecule.category}</p>
            </section>
          )}

          {molecule.molarMass && (
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Masse Molaire</h3>
              <p className="font-mono text-blue-400">{molecule.molarMass}</p>
            </section>
          )}

          {molecule.safetyWarning && (
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-red-500 mb-2">Sécurité</h3>
              <p className="text-red-300">{molecule.safetyWarning}</p>
            </section>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(molecule.meltingPoint || molecule.boilingPoint) && (
              <section>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Températures</h3>
                <div className="space-y-1 text-sm bg-black/20 p-3 rounded-xl border border-white/5">
                  {molecule.meltingPoint && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Fusion</span>
                      <span className="text-blue-400 font-mono">{molecule.meltingPoint}</span>
                    </div>
                  )}
                  {molecule.boilingPoint && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Ébullition</span>
                      <span className="text-blue-400 font-mono">{molecule.boilingPoint}</span>
                    </div>
                  )}
                </div>
              </section>
            )}

            {molecule.occurrence && (
              <section>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Occurrence</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{molecule.occurrence}</p>
              </section>
            )}
          </div>

          {molecule.manufacturing && (
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Fabrication / Synthèse</h3>
              <p className="text-gray-300 text-sm leading-relaxed italic">{molecule.manufacturing}</p>
            </section>
          )}

          {molecule.applications && molecule.applications.length > 0 && (
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                <BeakerIcon size={16} /> Applications
              </h3>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                {molecule.applications.map((app, i) => (
                  <li key={i}>{app}</li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
              <FileText size={16} /> Composition
            </h3>
            <div className="flex flex-wrap gap-2">
              {Object.entries(molecule.composition).map(([sym, count]) => (
                <div key={sym} className="px-3 py-1 bg-black/40 rounded-lg text-xs font-bold border border-white/5">
                  <span className="text-blue-400">{sym}</span>
                  <span className="text-gray-600 ml-1">x{count}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

// --- Molar Mass Calculator Tool ---
function MolarMassCalculator({ atoms }: { atoms: { element: Element; count: number }[] }) {
  if (atoms.length === 0) return null;

  const totalMass = atoms.reduce((sum, a) => sum + (a.element.atomic_mass * a.count), 0);
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-[#111113] border border-white/5 rounded-2xl p-6 space-y-4 shadow-xl"
    >
      <div className="flex items-center gap-2 text-indigo-400">
        <Binary size={18} />
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Calculateur de Masse Molaire</h3>
      </div>
      
      <div className="flex flex-col items-center py-4 bg-black/20 rounded-xl border border-white/5">
        <span className="text-4xl font-display font-black text-white">
          {totalMass.toFixed(3)}
        </span>
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">u (Masse Atomique)</span>
      </div>

      <div className="space-y-2">
        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Composition Centésimale</h4>
        <div className="space-y-1.5">
          {atoms.map((a) => {
            const percentage = ((a.element.atomic_mass * a.count) / totalMass) * 100;
            return (
              <div key={a.element.symbol} className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono">
                  <span className="text-gray-400">{a.element.name} ({a.element.symbol})</span>
                  <span className="text-indigo-400">{percentage.toFixed(1)}%</span>
                </div>
                <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    className="h-full bg-indigo-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

// --- Main Molecule Builder Component ---

export default function MoleculeBuilder() {
  const [selectedAtoms, setSelectedAtoms] = useState<{ element: Element; count: number }[]>([]);
  const [discoveredMolecule, setDiscoveredMolecule] = useState<MoleculeDefinition | null>(null);
  const [selectedMolecule, setSelectedMolecule] = useState<MoleculeDefinition | null>(null);
  const [history, setHistory] = useState<MoleculeDefinition[]>([]);
  const COMMON_MOLECULES = ALL_MOLECULES.filter(Boolean); // Filtrer les éléments invalides par précaution
  const [activeTab, setActiveTab] = useState<'fusion' | 'library'>('fusion');
  const [searchLibrary, setSearchLibrary] = useState('');
  const [isFusing, setIsFusing] = useState(false);
  const [aiSearchResult, setAiSearchResult] = useState<MoleculeDefinition | null>(null);
  const [isSearchingAI, setIsSearchingAI] = useState(false);
  const [suggestions, setSuggestions] = useState<MoleculeDefinition[]>([]);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [sortBy, setSortBy] = useState<'name' | 'formula' | 'complexity'>('name');

  useEffect(() => {
    if (selectedAtoms.length > 0) {
      const timer = setTimeout(async () => {
        setIsSuggesting(true);
        const atomList = selectedAtoms.map(a => a.element.symbol);
        const results = await suggestPossibleMolecules(atomList);
        setSuggestions(results);
        setIsSuggesting(false);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
    }
  }, [selectedAtoms]);

  const useSuggestion = (suggestion: MoleculeDefinition) => {
    const newAtoms = Object.entries(suggestion.composition).map(([sym, count]) => {
      const element = ELEMENTS.find(e => e.symbol === sym);
      return element ? { element, count } : null;
    }).filter(Boolean) as { element: Element; count: number }[];
    
    setSelectedAtoms(newAtoms);
    setDiscoveredMolecule(null);
  };

  const [displayLimit, setDisplayLimit] = useState(36);

  useEffect(() => {
    setDisplayLimit(36);
  }, [searchLibrary, activeTab]);

  const loadMore = () => {
    setDisplayLimit(prev => prev + 36);
  };

  const performAISearch = async () => {
    if (!searchLibrary.trim()) return;
    setIsSearchingAI(true);
    setAiSearchResult(null);
    try {
      const result = await searchMoleculeByName(searchLibrary);
      if (result) {
        setAiSearchResult(result);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSearchingAI(false);
    }
  };

  const addAtom = (element: Element) => {
    setSelectedAtoms(prev => {
      const existing = prev.find(a => a.element.number === element.number);
      if (existing) {
        return prev.map(a => a.element.number === element.number ? { ...a, count: a.count + 1 } : a);
      }
      return [...prev, { element, count: 1 }];
    });
    setDiscoveredMolecule(null);
  };

  const removeAtom = (number: number) => {
    setSelectedAtoms(prev => {
      const existing = prev.find(a => a.element.number === number);
      if (existing && existing.count > 1) {
        return prev.map(a => a.element.number === number ? { ...a, count: a.count - 1 } : a);
      }
      return prev.filter(a => a.element.number !== number);
    });
    setDiscoveredMolecule(null);
  };

  const clearWorkbench = () => {
    setSelectedAtoms([]);
    setDiscoveredMolecule(null);
  };

  const fuseMolecules = async () => {
    setIsFusing(true);
    setDiscoveredMolecule(null);
    
    const currentComposition: { [symbol: string]: number } = {};
    selectedAtoms.forEach(a => {
      currentComposition[a.element.symbol] = a.count;
    });

    // Tentative match local
    const match = COMMON_MOLECULES.find(m => {
      const mKeys = Object.keys(m.composition);
      const cKeys = Object.keys(currentComposition);
      if (mKeys.length !== cKeys.length) return false;
      return mKeys.every(k => m.composition[k] === currentComposition[k]);
    });

    let result: MoleculeDefinition;

    if (match) {
      result = match;
    } else {
      // Découverte par IA
      result = await identifyMolecule(currentComposition);
    }

    setDiscoveredMolecule(result);
    if (result && !history.find(h => h.formula === result.formula)) {
      setHistory(prev => [result, ...prev].slice(0, 5));
    }
    setIsFusing(false);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20 px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-gradient-to-r from-gray-900 to-[#161618] p-8 rounded-3xl border border-gray-800 shadow-2xl">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black font-display tracking-tight text-white">Station de Fusion</h1>
          <p className="text-gray-400">Combinez les briques élémentaires de l'univers ({COMMON_MOLECULES.length} modèles).</p>
        </div>

        <div className="flex bg-[#121214] p-1 rounded-2xl border border-white/5 self-start">
          <button 
            onClick={() => setActiveTab('fusion')}
            className={cn(
              "px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2",
              activeTab === 'fusion' ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30" : "text-gray-500 hover:text-white"
            )}
          >
            <BeakerIcon size={16} /> Laboratoire
          </button>
          <button 
            onClick={() => setActiveTab('library')}
            className={cn(
              "px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2",
              activeTab === 'library' ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30" : "text-gray-500 hover:text-white"
            )}
          >
            <List size={16} /> Bibliothèque
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'fusion' ? (
          <motion.div 
            key="fusion"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-8"
          >
        {/* Element Picker */}
        <div className="lg:col-span-1 bg-[#161618] border border-[#27272a] rounded-3xl p-6 h-[700px] flex flex-col shadow-xl">
          <div className="flex items-center gap-2 mb-6 text-blue-400 px-2">
            <Plus size={20} />
            <h2 className="font-black uppercase tracking-widest text-[10px]">Magasin d'Atomes</h2>
          </div>
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-2">
            {ELEMENTS.map(element => (
              <button
                key={element.number}
                onClick={() => addAtom(element)}
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-[#0a0a0b] hover:bg-gray-800 border border-[#27272a] transition-all group hover:scale-[1.02] active:scale-95"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center font-bold text-xs" style={{ color: CATEGORY_COLORS[element.category] }}>
                    {element.symbol}
                  </div>
                  <span className="text-xs font-bold">{element.name}</span>
                </div>
                <span className="text-[10px] text-gray-500 group-hover:text-blue-400 transition-colors font-mono">Z={element.number}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Workbench */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-[#161618] border border-[#27272a] rounded-[2.5rem] p-10 relative overflow-hidden min-h-[500px] flex flex-col items-center justify-center border-dashed group shadow-inner">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
            
            <AnimatePresence>
              {selectedAtoms.length > 0 && (
                <>
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 0.1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    className="absolute w-80 h-80 border-2 border-blue-500 rounded-full blur-2xl"
                  />
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
                </>
              )}
            </AnimatePresence>

            <AnimatePresence mode="popLayout">
              {selectedAtoms.length === 0 ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center space-y-4 z-10">
                  <div className="w-24 h-24 rounded-full bg-gray-900/50 border border-dashed border-white/5 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <Atom className="text-gray-700" size={48} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Chambre de Réaction Vide</p>
                    <p className="text-gray-600 text-[10px] italic">Injectez des éléments pour initier la liaison</p>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-wrap justify-center gap-8 z-10 max-w-lg">
                  {selectedAtoms.map((atom) => (
                    <motion.div key={atom.element.number} layout initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} className="relative group">
                      <div className="w-24 h-24 rounded-[2rem] bg-[#0a0a0b] border border-blue-500/20 flex flex-col items-center justify-center shadow-2xl group-hover:border-blue-400/50 transition-all">
                        <span className="text-3xl font-black text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.4)]">{atom.element.symbol}</span>
                        <div className="absolute -top-3 -right-3 bg-blue-600 text-[10px] font-black w-8 h-8 rounded-full flex items-center justify-center border-4 border-[#161618] shadow-lg">
                          {atom.count}
                        </div>
                      </div>
                      <button onClick={() => removeAtom(atom.element.number)} className="absolute -bottom-2 -right-2 p-2 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg"><Trash2 size={12} className="text-white" /></button>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>

            {selectedAtoms.length > 0 && (
              <div className="mt-16 flex gap-4 z-10">
                <button onClick={clearWorkbench} className="px-6 py-3 rounded-2xl border border-white/5 hover:bg-gray-800 transition-all text-[10px] font-black uppercase tracking-widest text-gray-500">Vidre Réacteur</button>
                <button onClick={fuseMolecules} disabled={isFusing} className="px-10 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-3 shadow-xl shadow-blue-900/40 transition-all active:scale-95 group">
                  {isFusing ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} className="group-hover:rotate-12 transition-transform" /> }
                  {isFusing ? "Séquençage..." : "Synthétiser"}
                </button>
              </div>
            )}
          </div>

          <AnimatePresence>
            {discoveredMolecule && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-3xl p-8 flex items-center gap-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none transform translate-x-4 -translate-y-4"><Binary size={120} /></div>
                <div className="w-20 h-20 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-900/40 shrink-0"><Binary size={40} className="text-white" /></div>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-black text-white">{discoveredMolecule.name}</h3>
                    <span className="px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-400 text-xs font-mono font-bold border border-indigo-500/20">{discoveredMolecule.formula}</span>
                  </div>
                  <p className="text-indigo-200/60 text-sm leading-relaxed line-clamp-2">{discoveredMolecule.summary}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Toolbox / Predictions */}
        <div className="lg:col-span-1 space-y-6">
          <MolarMassCalculator atoms={selectedAtoms} />

          <AnimatePresence>
            {selectedAtoms.length > 0 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-[#161618] border border-white/5 rounded-3xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6 px-2">
                  <div className="flex items-center gap-3 text-amber-400">
                    <Lightbulb size={20} />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Stabilités Potentielles</h3>
                  </div>
                  {isSuggesting && <Loader2 size={14} className="animate-spin text-gray-600" />}
                </div>
                
                <div className="space-y-3">
                  {suggestions.length > 0 ? (
                    suggestions.slice(0, 4).filter(Boolean).map((s, idx) => (
                      <button key={idx} onClick={() => useSuggestion(s)} className="w-full text-left p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all group flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-black group-hover:text-amber-400 transition-colors uppercase">{s?.name}</span>
                          <span className="text-[10px] font-mono text-gray-500">{normalizeFormula(s?.formula || '')}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[8px] font-black uppercase text-amber-500/30 group-hover:text-amber-500 transition-colors"><Plus size={10} /> Fusionner</div>
                      </button>
                    ))
                  ) : (
                    <div className="py-10 text-center text-[10px] text-gray-600 italic font-medium px-4">
                      {isSuggesting ? "Calcul des liaisons via Orbitale Moléculaire..." : "Aucune structure stable détectée"}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </motion.div>
      ) : (
          <motion.div
            key="library"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1 group">
                  <Search className={cn(
                    "absolute left-4 top-1/2 -translate-y-1/2 transition-colors",
                    searchLibrary ? "text-blue-400" : "text-gray-500"
                  )} size={20} />
                  <input 
                    type="text" 
                    placeholder="Filtrer par nom ou formule (ex: Eau, H2O)..."
                    className="w-full bg-[#161618] border border-[#27272a] rounded-2xl py-4 pl-12 pr-12 text-sm focus:outline-none focus:border-blue-500 transition-all font-medium placeholder:text-gray-600 shadow-inner group-hover:border-gray-700"
                    value={searchLibrary}
                    onChange={(e) => {
                      setSearchLibrary(e.target.value);
                      setAiSearchResult(null);
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && performAISearch()}
                  />
                  {searchLibrary && (
                    <button 
                      onClick={() => {
                        setSearchLibrary('');
                        setAiSearchResult(null);
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors p-1"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-[#161618] border border-[#27272a] rounded-xl px-4 py-4 text-xs font-medium text-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="name">Trier par Nom</option>
                    <option value="formula">Trier par Formule</option>
                    <option value="complexity">Trier par Densité</option>
                  </select>
                  <div className="h-10 w-px bg-gray-800 hidden md:block mx-2" />
                  <button 
                    onClick={performAISearch}
                    disabled={isSearchingAI || !searchLibrary.trim()}
                    className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:bg-gray-800 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/20 whitespace-nowrap group active:scale-95"
                  >
                    {isSearchingAI ? <Loader2 size={16} className="animate-spin" /> : <Globe size={16} className="group-hover:rotate-12 transition-transform" />}
                    <span>Exploration IA</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* AI result if present */}
              <AnimatePresence>
                {aiSearchResult && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="lg:col-span-1 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-500/50 rounded-2xl p-6 relative overflow-hidden group shadow-2xl shadow-blue-500/10"
                  >
                    <div className="absolute top-2 right-2 px-2 py-1 bg-blue-500 rounded text-[8px] font-black tracking-tighter text-white">IA DISCOVERY</div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors text-lg">{aiSearchResult.name}</h3>
                        <span className="text-xs font-mono text-blue-300">{normalizeFormula(aiSearchResult.formula)}</span>
                      </div>
                      <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
                        <Sparkles size={20} />
                      </div>
                    </div>
                    <p className="text-xs text-blue-100/70 leading-relaxed mb-6">{aiSearchResult.summary}</p>
                    <div className="flex flex-wrap gap-2">
                       {Object.entries(aiSearchResult.composition).map(([sym, count]) => (
                        <div key={sym} className="px-2 py-1 bg-blue-900/40 rounded text-[10px] font-bold border border-blue-500/20">
                          <span className="text-blue-300">{sym}</span>
                          <span className="text-blue-100/50 ml-1">x{count}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {(() => {
                const filtered = COMMON_MOLECULES.filter(m => {
                  if (!m) return false;
                  const query = searchLibrary.toLowerCase();
                  const normalizedFormula = m.formula.replace(/[₀-₉]/g, (char) => 
                    String.fromCharCode(char.charCodeAt(0) - 0x2080 + 48)
                  ).toLowerCase();
                  
                  return m.name.toLowerCase().includes(query) || 
                         normalizedFormula.includes(query) ||
                         m.formula.toLowerCase().includes(query) ||
                         m.summary.toLowerCase().includes(query);
                }).sort((a, b) => {
                  if (!a || !b) return 0;
                  if (sortBy === 'name') return a.name.localeCompare(b.name);
                  if (sortBy === 'formula') return a.formula.localeCompare(b.formula);
                  if (sortBy === 'complexity') {
                    const sumA = Object.values(a.composition as Record<string, number>).reduce((acc: number, val: number) => acc + val, 0);
                    const sumB = Object.values(b.composition as Record<string, number>).reduce((acc: number, val: number) => acc + val, 0);
                    return sumB - sumA;
                  }
                  return 0;
                });

                if (filtered.length === 0 && !aiSearchResult && !isSearchingAI) {
                  return (
                    <div className="col-span-full py-20 text-center">
                      <div className="w-16 h-16 bg-gray-900 border border-dashed border-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="text-gray-700" size={24} />
                      </div>
                      <p className="text-gray-500 font-medium italic">Aucune molécule trouvée localement pour "{searchLibrary}"</p>
                      <p className="text-gray-600 text-xs mt-2">Essayez l'Exploration IA pour interroger la base de données universelle.</p>
                    </div>
                  );
                }

                const pageItems = filtered.slice(0, displayLimit);

                return (
                  <>
                    {pageItems.map((mol, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setSelectedMolecule(mol)}
                        className="bg-[#161618] border border-[#27272a] rounded-2xl p-6 hover:border-blue-500/30 transition-all hover:bg-white/5 group text-left w-full"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">{mol.name}</h3>
                            <span className="text-xs font-mono text-gray-500">{normalizeFormula(mol.formula)}</span>
                          </div>
                          <div className="p-2 bg-blue-600/10 rounded-lg text-blue-400">
                            <Binary size={20} />
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed mb-6">{mol.summary}</p>
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(mol.composition).map(([sym, count]) => (
                            <div key={sym} className="px-2 py-1 bg-black/40 rounded text-[10px] font-bold border border-white/5">
                              <span className="text-blue-400">{sym}</span>
                              <span className="text-gray-600 ml-1">x{count as React.ReactNode}</span>
                            </div>
                          ))}
                        </div>
                      </button>
                    ))}
                    {filtered.length > displayLimit && (
                      <div className="col-span-full py-8 flex justify-center">
                        <button
                          onClick={loadMore}
                          className="px-8 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 transition-all font-medium border border-gray-700 flex items-center gap-2"
                        >
                          <Plus size={16} /> Afficher plus de molécules ({filtered.length - displayLimit} restantes)
                        </button>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {selectedMolecule && (
          <MoleculeModal 
            molecule={selectedMolecule} 
            onClose={() => setSelectedMolecule(null)} 
          />
        )}
      </AnimatePresence>
      
      <div className="pt-8 border-t border-[#27272a] text-center text-xs text-gray-600 uppercase tracking-widest">
        © Sébastien John Bruneau — Outil de Simulation Moléculaire
      </div>
    </div>
  );
}
