/**
 * @copyright Sébastien John Bruneau
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Beaker, List, Dna, Sparkles, Plus, Trash2, Loader2, Info, ChevronRight, Search, FlaskConical, Zap, ShieldAlert, X, History, User, Factory, Recycle } from 'lucide-react';
import { MoleculeDefinition, PolymerDefinition } from '../../types/molecule';
import { ALL_MOLECULES } from '../../data/moleculeLibrary';

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

// --- Polymer Lab Component ---

const MONOMERS = ALL_MOLECULES.filter(m => 
  (m.category && m.category === 'Monomère') || 
  (m.name && (
    m.name.toLowerCase().includes('acrylate') ||
    m.name.toLowerCase().includes('styrène') ||
    m.name.toLowerCase().includes('éthylène') ||
    m.name.toLowerCase().includes('acide adipique') ||
    m.name.toLowerCase().includes('hexane')
  ))
);

// --- Mechanical Analyzer Component ---
function MechanicalAnalyzer({ polymer }: { polymer: PolymerDefinition }) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [data, setData] = useState<{ x: number; y: number }[]>([]);

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setData([]);
    
    // Simulate Stress-Strain Curve generation
    setTimeout(() => {
      const newData = [];
      const dpFactor = (polymer.chainLength || 100) / 1000;
      const elasticity = 50 + dpFactor * 100;
      const strength = 20 + dpFactor * 80;

      for (let i = 0; i <= 20; i++) {
        const strain = i * 2;
        // Young's modulus phase + plastic deformation
        let stress;
        if (strain < 10) {
          stress = strain * elasticity * 0.1;
        } else {
          stress = (10 * elasticity * 0.1) + (strain - 10) * strength * 0.05;
        }
        newData.push({ x: strain, y: stress });
      }
      setData(newData);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="bg-[#0a0a0b] border border-gray-800 rounded-2xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-indigo-400">
          <Zap size={18} />
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Analyseur de Propriétés Mécaniques</h3>
        </div>
        <button 
          onClick={startAnalysis}
          disabled={isAnalyzing}
          className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-[10px] font-black uppercase tracking-widest transition-all"
        >
          {isAnalyzing ? "Calcul..." : "Lancer Simulation"}
        </button>
      </div>

      <div className="h-48 relative border-l border-b border-gray-800 flex items-end px-2">
        {data.length > 0 ? (
          <div className="absolute inset-0 flex items-end px-4 gap-1">
             {data.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${(point.y / (data[data.length-1].y)) * 100}%` }}
                  className="flex-1 bg-indigo-500/40 rounded-t-sm"
                />
             ))}
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[10px] text-gray-700 italic">
            Appuyez sur "Lancer Simulation" pour voir la courbe de traction
          </div>
        )}
        <div className="absolute -bottom-5 left-0 right-0 flex justify-between text-[8px] text-gray-600 font-bold uppercase">
          <span>Déformation (ε)</span>
          <span>Contrainte (σ)</span>
        </div>
      </div>

      {data.length > 0 && (
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
          <div className="space-y-1">
            <span className="text-[8px] text-gray-600 block uppercase font-bold">Module de Young (Est.)</span>
            <span className="text-xs text-indigo-400 font-mono">{(5 + (polymer.chainLength || 100) / 100).toFixed(2)} GPa</span>
          </div>
          <div className="space-y-1">
            <span className="text-[8px] text-gray-600 block uppercase font-bold">Résilience</span>
            <span className="text-xs text-indigo-400 font-mono">{((polymer.chainLength || 100) * 0.45).toFixed(1)} J/m²</span>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Evolution de PolymerLab ---

export function PolymerLab() {
  const [selectedMonomers, setSelectedMonomers] = useState<MoleculeDefinition[]>([]);
  const [chainLength, setChainLength] = useState(100);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [synthesizedPolymer, setSynthesizedPolymer] = useState<PolymerDefinition | null>(null);

  const addMonomer = (monomer: MoleculeDefinition) => {
    if (selectedMonomers.length >= 2) return;
    setSelectedMonomers([...selectedMonomers, monomer]);
  };

  const removeMonomer = (index: number) => {
    setSelectedMonomers(selectedMonomers.filter((_, i) => i !== index));
    setSynthesizedPolymer(null);
  };

  const synthesize = () => {
    if (selectedMonomers.length === 0) return;
    setIsSynthesizing(true);
    setSynthesizedPolymer(null);

    setTimeout(() => {
      const isHomo = selectedMonomers.length === 1;
      const names = selectedMonomers.map(m => m.name);
      
      const polymerName = isHomo 
        ? `Poly(${names[0]})` 
        : `Copolymère ${names[0]}-${names[1]}`;
      
      const result: PolymerDefinition = {
        name: polymerName,
        formula: isHomo ? `(${selectedMonomers[0].formula})n` : `(${selectedMonomers[0].formula}-${selectedMonomers[1].formula})n`,
        composition: selectedMonomers.reduce((acc, m) => {
          Object.entries(m.composition).forEach(([sym, count]) => {
            acc[sym] = (acc[sym] || 0) + (count as number);
          });
          return acc;
        }, {} as { [key: string]: number }),
        summary: `Polymère de haute performance obtenu par ${isHomo ? 'homopolymérisation' : 'copolymérisation'} de ${names.join(' et ')}.`,
        category: 'Polymère Synthétique',
        molarMass: "> 10,000 g/mol",
        monomerUnits: names,
        polymerType: isHomo ? 'addition' : 'copolymer',
        chainLength: chainLength
      };

      setSynthesizedPolymer(result);
      setIsSynthesizing(false);
    }, 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1 bg-[#161618] border border-[#27272a] rounded-3xl p-6 h-[700px] flex flex-col shadow-xl">
        <div className="flex items-center gap-2 mb-6 text-blue-400 px-2">
          <Plus size={20} />
          <h2 className="font-black uppercase tracking-widest text-[10px]">Banque de Monomères</h2>
        </div>
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-2">
          {MONOMERS.map((monomer, idx) => (
            <button
              key={idx}
              onClick={() => addMonomer(monomer)}
              disabled={selectedMonomers.length >= 2}
              className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#0a0a0b] hover:bg-gray-800 border border-[#27272a] transition-all group disabled:opacity-50 hover:scale-[1.02] active:scale-95"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-900/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-inner">
                  <Dna size={20} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{monomer.name}</div>
                  <div className="text-[10px] text-gray-500 font-mono tracking-tighter italic">{monomer.formula}</div>
                </div>
              </div>
              <ChevronRight size={14} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2 flex flex-col gap-6">
        <div className="flex-1 bg-[#161618] border border-[#27272a] rounded-[2.5rem] p-10 relative overflow-hidden min-h-[450px] flex flex-col items-center justify-center border-dashed group shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)]" />
          
          <AnimatePresence>
            {isSynthesizing && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 z-20 bg-[#161618]/80 backdrop-blur-md flex flex-col items-center justify-center">
                <div className="relative w-32 h-32 mb-8">
                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)]" />
                   <Dna className="absolute inset-0 m-auto text-blue-400 animate-pulse" size={48} />
                </div>
                <p className="text-blue-400 font-black tracking-[0.3em] text-xs animate-pulse">SYNTHÈSE MOLÉCULAIRE</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(3)].map((_, i) => (
                    <motion.div key={i} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {selectedMonomers.length === 0 ? (
            <div className="text-center space-y-6">
              <div className="w-24 h-24 rounded-full bg-blue-900/10 border border-dashed border-blue-500/20 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Dna className="text-blue-500/20" size={48} />
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 font-black uppercase tracking-widest text-[10px]">Chambre de Polymérisation</p>
                <p className="text-gray-600 text-[10px] italic">Préparez le mélange de monomères pour lancer la réaction</p>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-lg space-y-12 z-10">
              <div className="flex justify-center items-center gap-10">
                {selectedMonomers.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-6">
                    <motion.div layout initial={{ scale: 0, y: 20 }} animate={{ scale: 1, y: 0 }} className="w-40 p-6 rounded-3xl bg-[#0a0a0b] border border-blue-500/20 flex flex-col items-center text-center relative group shadow-2xl hover:border-blue-500/50 transition-all">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform">
                        <Dna size={20} />
                      </div>
                      <span className="text-xs font-black text-white mb-2 line-clamp-1 uppercase tracking-tight">{m.name}</span>
                      <span className="text-[10px] font-mono text-blue-500/70">{m.formula}</span>
                      <button onClick={() => removeMonomer(idx)} className="absolute -top-2 -right-2 p-2 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:scale-110"><Trash2 size={12} className="text-white" /></button>
                    </motion.div>
                    {idx === 0 && selectedMonomers.length > 1 && (
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-[2px] w-8 bg-gradient-to-r from-blue-500/50 to-transparent" />
                        <Sparkles size={12} className="text-blue-500/30" />
                        <div className="h-[2px] w-8 bg-gradient-to-l from-blue-500/50 to-transparent" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-[#111113] p-8 rounded-[2rem] border border-white/5 space-y-8 shadow-2xl">
                <div className="flex justify-between items-center px-2">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Degré de Polymérisation (DP)</span>
                    <p className="text-[10px] text-gray-600 italic">Nombre moyen de monomères par chaîne</p>
                  </div>
                  <span className="text-blue-400 font-mono font-black text-lg">{chainLength} <span className="text-[10px] text-gray-700">unités</span></span>
                </div>
                <input 
                  type="range" min="10" max="2000" step="10"
                  value={chainLength}
                  onChange={(e) => setChainLength(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                
                <button 
                  onClick={synthesize} disabled={isSynthesizing}
                  className="w-full py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-black uppercase tracking-[0.3em] text-[10px] shadow-xl shadow-blue-900/40 flex items-center justify-center gap-3 transition-all active:scale-[0.98] group"
                >
                  <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                  INITIER LA POLYMÉRISATION
                </button>
              </div>
            </div>
          )}
        </div>

        <AnimatePresence>
          {synthesizedPolymer && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="bg-green-600/10 border border-green-500/30 rounded-3xl p-8 flex items-center gap-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none transform translate-x-4 -translate-y-4"><Dna size={120} /></div>
                <div className="w-24 h-24 rounded-3xl bg-green-600 flex items-center justify-center shadow-lg shadow-green-900/40 shrink-0"><Dna size={40} className="text-white" /></div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-6">
                    <h3 className="text-3xl font-black text-white italic tracking-tighter">{synthesizedPolymer.name}</h3>
                    <span className="px-3 py-1 rounded-xl bg-green-500/20 text-green-400 text-xs font-mono font-bold border border-green-500/20">{synthesizedPolymer.formula}</span>
                  </div>
                  <p className="text-green-100/60 text-sm leading-relaxed line-clamp-2 italic">{synthesizedPolymer.summary}</p>
                  <div className="flex gap-8">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-600 uppercase font-black tracking-widest">Macro-Masse</span>
                      <span className="text-xs text-white font-mono">{synthesizedPolymer.molarMass}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-600 uppercase font-black tracking-widest">Morphologie</span>
                      <span className="text-xs text-white font-bold capitalize">{synthesizedPolymer.polymerType}</span>
                    </div>
                  </div>
                </div>
              </div>

              <MechanicalAnalyzer polymer={synthesizedPolymer} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// --- Polymer Library Component ---

const POLYMERS_IN_LIBRARY = ALL_MOLECULES.filter(m => 
  (m.category && (
    m.category.includes('Polymère') || 
    m.category.includes('Plastique') ||
    m.category.includes('Caoutchouc') ||
    m.category.includes('Polyester') ||
    m.category.includes('Polyamide') ||
    m.category.includes('Acrylique') ||
    m.category.includes('Élastomère')
  )) ||
  (m.name && ['Kevlar', 'Nylon', 'PVC', 'Téflon', 'Plexiglas', 'Bakélite', 'Polyéthylène', 'Celluloïd', 'Lycra', 'Néoprène'].some(name => m.name.includes(name)))
);

export function PolymerLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState<MoleculeDefinition | null>(null);

  const filteredPolymers = POLYMERS_IN_LIBRARY.filter(p => 
    (p.name && p.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (p.summary && p.summary.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (p.category && p.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const isPolymer = (mol: MoleculeDefinition): mol is PolymerDefinition => {
    return 'polymerType' in mol;
  };

  return (
    <div className="space-y-6">
      <div className="relative group">
        <Search className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 transition-colors",
          searchTerm ? "text-blue-400" : "text-gray-500"
        )} size={20} />
        <input 
          type="text" 
          placeholder="Rechercher un polymère, plastique ou matériau (ex: Kevlar, Nylon)..."
          className="w-full bg-[#161618] border border-[#27272a] rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-all font-medium placeholder:text-gray-600 shadow-inner group-hover:border-gray-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPolymers.map((poly, idx) => (
          <button 
            key={idx} 
            onClick={() => setSelectedMaterial(poly)}
            className="bg-[#161618] border border-[#27272a] rounded-2xl p-6 hover:border-blue-500/30 transition-all hover:bg-white/5 group text-left flex flex-col h-full"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">{poly.name}</h3>
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-500/60">{poly.category}</span>
              </div>
              <div className="p-2 bg-blue-600/10 rounded-lg text-blue-400 shrink-0">
                {isPolymer(poly) && poly.recyclingCode ? (
                  <div className="flex flex-col items-center">
                    <Recycle size={18} />
                    <span className="text-[8px] font-black">{poly.recyclingCode}</span>
                  </div>
                ) : (
                  <Zap size={20} />
                )}
              </div>
            </div>
            
            <p className="text-xs text-gray-500 leading-relaxed mb-6 line-clamp-3">{poly.summary}</p>
            
            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="text-[10px] font-mono text-gray-600">{poly.formula}</div>
              <div className="text-[10px] font-bold text-blue-400 flex items-center gap-1">
                <Info size={12} /> Détails techniques
              </div>
            </div>
          </button>
        ))}

        {filteredPolymers.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <Beaker className="text-gray-700 mx-auto mb-4" size={48} />
            <p className="text-gray-500">Aucun matériau trouvé pour cette recherche.</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedMaterial && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMaterial(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#161618] border border-gray-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600 relative p-8 flex items-end shrink-0">
                <button 
                  onClick={() => setSelectedMaterial(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-black/20 rounded-full text-white/70 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-2xl">
                    <FlaskConical size={32} className="text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedMaterial.name}</h2>
                    <p className="text-blue-100/70 text-xs font-mono">{selectedMaterial.formula}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <section>
                  <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-3">Résumé du Matériau</h4>
                  <p className="text-gray-300 leading-relaxed text-sm">{selectedMaterial.summary}</p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Catégorie</h4>
                        <p className="text-sm font-medium text-white">{selectedMaterial.category}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Masse Molaire</h4>
                        <p className="text-xs font-medium text-white">{selectedMaterial.molarMass}</p>
                      </div>
                    </div>

                    {isPolymer(selectedMaterial) && (
                      <div className="p-4 rounded-2xl bg-[#0a0a0b] border border-gray-800 space-y-4">
                        <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest flex items-center gap-2">
                          <Factory size={12} /> Propriétés du Polymère
                        </h4>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                          <div>
                            <span className="text-[9px] text-gray-600 block uppercase">Type de chaîne</span>
                            <span className="text-xs text-gray-300 capitalize">{selectedMaterial.polymerType}</span>
                          </div>
                          {selectedMaterial.glassTransitionTemp && (
                            <div>
                              <span className="text-[9px] text-gray-600 block uppercase">Temp. Transition (Tg)</span>
                              <span className="text-xs text-gray-300">{selectedMaterial.glassTransitionTemp}</span>
                            </div>
                          )}
                          {selectedMaterial.crystallinity && (
                            <div>
                              <span className="text-[9px] text-gray-600 block uppercase">Cristallinité</span>
                              <span className="text-xs text-gray-300">{selectedMaterial.crystallinity}</span>
                            </div>
                          )}
                          {selectedMaterial.recyclingCode && (
                            <div>
                              <span className="text-[9px] text-gray-600 block uppercase">Code Recyclage</span>
                              <span className="text-xs text-blue-400 font-bold">#{selectedMaterial.recyclingCode}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    {isPolymer(selectedMaterial) && (selectedMaterial.inventor || selectedMaterial.yearOfDiscovery) && (
                      <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 space-y-3">
                         <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                          <History size={12} /> Origine Historique
                        </h4>
                        <div className="space-y-2">
                          {selectedMaterial.inventor && (
                             <div className="flex items-center gap-2">
                               <User size={12} className="text-gray-500" />
                               <span className="text-xs text-gray-300">{selectedMaterial.inventor}</span>
                             </div>
                          )}
                          {selectedMaterial.yearOfDiscovery && (
                             <div className="flex items-center gap-2">
                               <Zap size={12} className="text-gray-500" />
                               <span className="text-xs text-gray-300">Découvert en {selectedMaterial.yearOfDiscovery}</span>
                             </div>
                          )}
                        </div>
                      </div>
                    )}

                    {selectedMaterial.safetyWarning && (
                      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                        <div className="flex items-center gap-2 text-amber-500 mb-2">
                          <ShieldAlert size={14} />
                          <span className="text-[10px] font-black uppercase tracking-widest">Avertissement Sécurité</span>
                        </div>
                        <p className="text-[10px] text-amber-200/70 leading-relaxed font-medium">{selectedMaterial.safetyWarning}</p>
                      </div>
                    )}
                  </div>
                </div>

                {selectedMaterial.applications && selectedMaterial.applications.length > 0 && (
                  <section>
                    <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Applications Industrielles & Usages</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMaterial.applications.map((app, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-bold">
                          {app}
                        </span>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Main Polymer View Component ---

export default function PolymerView() {
  const [activeView, setActiveView] = useState<'lab' | 'library'>('lab');

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-gradient-to-r from-gray-900 to-[#161618] p-6 rounded-2xl border border-gray-800">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold font-display text-white flex items-center gap-3">
            <Dna className="text-blue-500" size={32} />
            Ingénierie des Polymères
          </h1>
          <p className="text-gray-400">Assemblez des monomères pour créer des chaînes polymères et des nouveaux matériaux plastiques.</p>
        </div>

        <div className="flex bg-[#161618] p-1 rounded-xl border border-[#27272a] self-start">
          <button 
            onClick={() => setActiveView('lab')}
            className={cn(
               "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
               activeView === 'lab' ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" : "text-gray-500 hover:text-gray-300"
            )}
          >
            <Beaker size={16} /> Laboratoire de Synthèse
          </button>
          <button 
            onClick={() => setActiveView('library')}
            className={cn(
               "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
               activeView === 'library' ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" : "text-gray-500 hover:text-gray-300"
            )}
          >
            <List size={16} /> Catalogue de Matériaux
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeView === 'lab' ? (
          <motion.div
            key="lab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <PolymerLab />
          </motion.div>
        ) : (
          <motion.div
            key="library"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <PolymerLibrary />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-8 border-t border-[#27272a] text-center text-xs text-gray-600 uppercase tracking-widest">
        © Sébastien John Bruneau — Station de Polymérisation Avancée
      </div>
    </div>
  );
}
