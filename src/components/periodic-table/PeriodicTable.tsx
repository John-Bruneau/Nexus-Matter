import { Element, ResearchNote } from '../../types';
import { CATEGORY_COLORS } from '../../data/elements';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { X, ExternalLink, Dna, Database, Beaker, Thermometer, Star, MessageSquare, Send, Loader2, Sparkles } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, ScatterChart, Scatter, ZAxis } from 'recharts';
import { db, handleFirestoreError } from '../../lib/firebase';
import { collection, query, where, onSnapshot, addDoc, serverTimestamp, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { fetchElementCompounds } from '../../lib/gemini';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Category Legend Component ---
const CATEGORY_LABELS: { [key: string]: string } = {
  "non-metal": "Non-métaux",
  "noble": "Gaz nobles",
  "alkali": "Métaux alcalins",
  "alkaline": "Métaux alcalino-terreux",
  "metalloid": "Métalloïdes",
  "post-transition": "Métaux pauvres",
  "transition": "Métaux de transition",
  "lanthanide": "Lanthanides",
  "actinide": "Actinides"
};

export function CategoryLegend() {
  return (
    <div className="flex flex-wrap gap-3 mt-6 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
      {Object.entries(CATEGORY_COLORS).map(([category, colorClass]) => (
        <div key={category} className="flex items-center gap-2 px-2 py-1">
          <div className={cn(
            "w-4 h-4 rounded-sm shadow-sm border border-white/20",
            colorClass,
            "bg-opacity-60"
          )} />
          <span className="text-xs font-medium text-gray-400 capitalize whitespace-nowrap">
            {CATEGORY_LABELS[category] || category}
          </span>
        </div>
      ))}
    </div>
  );
}

// --- Element Modal Component ---
import { AtomVisualizer, Molecule3D } from '../molecules/MoleculeBuilder';

interface ElementModalProps {
  element: Element;
  onClose: () => void;
  user: any;
}

// --- Radioactive Decay Calculator ---
function RadioactiveDecayCalculator({ element }: { element: Element }) {
  const [initialAmount, setInitialAmount] = useState(100);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isotopeIndex, setIsotopeIndex] = useState(0);

  const isotopes = element.isotopes?.filter(iso => !!iso.halfLife) || [];
  if (isotopes.length === 0) return null;

  const currentIsotope = isotopes[isotopeIndex];
  
  // Parse half life string (e.g., "5.27 y" or "2.6 h")
  const parseHalfLife = (hl: string) => {
    const parts = hl.split(' ');
    const val = parseFloat(parts[0]);
    const unit = parts[1]?.toLowerCase();
    
    switch(unit) {
      case 'y': case 'a': return val;
      case 'd': return val / 365.25;
      case 'h': return val / (365.25 * 24);
      case 'm': case 'min': return val / (365.25 * 24 * 60);
      case 's': return val / (365.25 * 24 * 60 * 60);
      case 'ms': return val / (365.25 * 24 * 60 * 60 * 1000);
      default: return val;
    }
  };

  const hlValue = parseHalfLife(currentIsotope.halfLife!);
  const lambda = Math.LN2 / hlValue;
  const remainingPercent = initialAmount * Math.exp(-lambda * (timeElapsed / 365.25)); // simplified for years

  return (
    <div className="bg-[#111113] border border-red-500/20 rounded-2xl p-6 space-y-6 shadow-xl shadow-red-500/5">
      <div className="flex items-center gap-2 text-red-400">
        <Thermometer size={18} />
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Calculateur de Désintégration</h3>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Isotope Radioactif</label>
            <select 
              value={isotopeIndex}
              onChange={(e) => setIsotopeIndex(parseInt(e.target.value))}
              className="w-full bg-black border border-white/5 rounded-lg p-2 text-xs text-gray-300 focus:outline-none focus:border-red-500/50"
            >
              {isotopes.map((iso, i) => (
                <option key={i} value={i}>{iso.name} ({iso.halfLife})</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Quantité Initiale (%)</label>
            <input 
              type="number"
              value={initialAmount}
              onChange={(e) => setInitialAmount(parseFloat(e.target.value))}
              className="w-full bg-black border border-white/5 rounded-lg p-2 text-xs text-gray-300"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-[9px] font-bold text-gray-500 uppercase tracking-widest">
            <span>Temps Écoulé (Jours)</span>
            <span className="text-red-400">{timeElapsed} d</span>
          </div>
          <input 
            type="range" min="0" max={365 * 10} step="1"
            value={timeElapsed}
            onChange={(e) => setTimeElapsed(parseInt(e.target.value))}
            className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-red-600"
          />
        </div>
      </div>

      <div className="flex flex-col items-center py-6 bg-black/40 rounded-xl border border-white/5 relative overflow-hidden">
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-red-600/10 pointer-events-none" 
        />
        <span className="text-4xl font-display font-black text-white">{remainingPercent.toFixed(2)}%</span>
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Échantillon Restant</span>
      </div>
    </div>
  );
}

export function ElementModal({ element, onClose, user }: ElementModalProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [notes, setNotes] = useState<ResearchNote[]>([]);
  const [newNote, setNewNote] = useState('');
  const [activeTab, setActiveTab] = useState<'properties' | 'isotopes' | 'reactions' | 'notes'>('properties');
  const [dynamicCompounds, setDynamicCompounds] = useState<any[]>([]);
  const [isDiscovering, setIsDiscovering] = useState(false);
  const [selectedReactionType, setSelectedReactionType] = useState<string>('All');
  
  const [currentTags, setCurrentTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [selectedFilterTag, setSelectedFilterTag] = useState<string | null>(null);

  const reactionTypes = ['All', 'Combustion', 'Combinaison', 'Décomposition', 'Substitution', 'Redox', 'Acido-Basique'];

  const filteredReactions = (element.reactions || []).filter(r => 
    selectedReactionType === 'All' || r.type === selectedReactionType
  );

  const handleDiscoverCompounds = async () => {
    setIsDiscovering(true);
    try {
      const results = await fetchElementCompounds(element.name);
      setDynamicCompounds(results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsDiscovering(false);
    }
  };

  useEffect(() => {
    if (!user) return;
    
    // Check favorite
    const favUnsubscribe = onSnapshot(doc(db, `users/${user.uid}/favorites`, element.number.toString()), (doc) => {
      setIsFavorite(doc.exists());
    }, (error) => {
      handleFirestoreError(error, 'get' as any, `users/${user.uid}/favorites/${element.number}`);
    });

    // Load notes
    const notesQuery = query(
      collection(db, 'notes'), 
      where('elementId', '==', element.number),
      where('isPrivate', '==', false)
    );

    const notesUnsubscribe = onSnapshot(notesQuery, (snapshot) => {
      setNotes(snapshot.docs.map(d => ({ id: d.id, ...d.data() } as ResearchNote)));
    }, (error) => {
      handleFirestoreError(error, 'get' as any, 'notes');
    });

    return () => {
      favUnsubscribe();
      notesUnsubscribe();
    };
  }, [user, element.number]);

  const toggleFavorite = async () => {
    if (!user) return;
    const ref = doc(db, `users/${user.uid}/favorites`, element.number.toString());
    try {
      if (isFavorite) {
        await deleteDoc(ref);
      } else {
        await setDoc(ref, { userId: user.uid, elementId: element.number, addedAt: serverTimestamp() });
      }
    } catch (err) {
      handleFirestoreError(err, 'get' as any, `users/${user.uid}/favorites/${element.number}`);
    }
  };

  const addNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newNote.trim()) return;
    try {
      await addDoc(collection(db, 'notes'), {
        elementId: element.number,
        authorId: user.uid,
        authorName: user.displayName,
        content: newNote,
        isPrivate: false,
        tags: currentTags,
        createdAt: serverTimestamp()
      });
      setNewNote('');
      setCurrentTags([]);
    } catch (err) {
      handleFirestoreError(err, 'get' as any, 'notes');
    }
  };

  const energyData = element.ionization_energies?.length ? 
    element.ionization_energies.map((val, idx) => ({
      name: `E${idx + 1}`,
      value: val
    })) : 
    [1, 2, 3, 4, 5, 6].map(i => ({ name: `E${i}`, value: Math.round((element.number * 50 + 400) * Math.pow(1.3, i)) }));

  const isotopeChartData = element.isotopes?.map(iso => ({
    name: iso.name,
    abundance: iso.abundance || 0,
    isRadioactive: !!iso.halfLife
  })) || [];

  const allTags = Array.from(new Set(notes.flatMap(n => n.tags || [])));
  const filteredNotes = selectedFilterTag 
    ? notes.filter(n => (n.tags || []).includes(selectedFilterTag))
    : notes;

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
          layoutId={`element-${element.number}`}
          className={cn(
            "relative w-full max-w-5xl max-h-[90vh] bg-[#161618] border rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row transition-all duration-500",
            element.category === "alkali" && "border-red-500/30 shadow-red-500/10",
            element.category === "alkaline" && "border-orange-500/30 shadow-orange-500/10",
            element.category === "transition" && "border-yellow-500/30 shadow-yellow-500/10",
            element.category === "post-transition" && "border-green-500/30 shadow-green-500/10",
            element.category === "metalloid" && "border-cyan-500/30 shadow-cyan-500/10",
            element.category === "non-metal" && "border-blue-500/30 shadow-blue-500/10",
            element.category === "noble" && "border-purple-500/30 shadow-purple-500/10",
            element.category === "lanthanide" && "border-pink-500/30 shadow-pink-500/10",
            element.category === "actinide" && "border-indigo-500/30 shadow-indigo-500/10"
          )}
        >
          {/* Left Side: Visual & Header */}
          <div className={cn(
            "md:w-2/5 p-8 flex flex-col items-center justify-center relative border-r border-[#27272a]",
            CATEGORY_COLORS[element.category] || "bg-gray-800",
            "bg-opacity-30 backdrop-blur-md"
          )}>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors md:hidden"
          >
            <X size={20} />
          </button>

          <div className="mb-0 space-y-8 flex flex-col items-center">
             <Molecule3D symbol={element.symbol} />
             <div className="hidden md:block">
                <AtomVisualizer 
                  number={element.number} 
                  shells={element.shells} 
                  symbol={element.symbol} 
                />
             </div>
          </div>

          <div className="text-2xl font-bold mb-1">{element.name}</div>
          <div className="text-sm font-mono opacity-60 mb-6">Numéro Atomique: {element.number}</div>
          
          <div className="w-full space-y-4">
            <DataRow icon={<Thermometer size={16}/>} label="Phase" value={element.phase} />
            <DataRow icon={<Database size={16}/>} label="Masse" value={element.atomic_mass.toFixed(4)} />
            <div className="flex items-center gap-3 text-sm">
              <div className="text-blue-400 opacity-80"><Dna size={16}/></div>
              <span className="text-gray-400">Configuration:</span>
              <span className="font-mono ml-auto text-[11px] bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                {formatElectronConfig(element.electron_configuration_semantic)}
              </span>
            </div>
          </div>

          <div className="mt-auto pt-8 flex flex-col gap-4">
             {user && (
               <button 
                onClick={toggleFavorite}
                className={cn(
                  "flex items-center justify-center gap-2 px-4 py-2 rounded-xl border transition-all text-xs font-bold",
                  isFavorite ? "bg-yellow-500/20 border-yellow-500 text-yellow-500" : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                )}
               >
                 <Star size={14} fill={isFavorite ? "currentColor" : "none"} />
                 {isFavorite ? "Dans les favoris" : "Ajouter aux favoris"}
               </button>
             )}
             <a 
              href={element.source} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 text-xs text-blue-400 hover:underline"
             >
               <ExternalLink size={14} /> Wikipédia
             </a>
          </div>
        </div>

        {/* Right Side: Details & Tabs */}
        <div className="flex-1 p-8 overflow-y-auto custom-scrollbar bg-[#0a0a0b]/40 flex flex-col">
          <div className="flex items-center justify-between mb-6 shrink-0">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Beaker className="text-blue-500" size={20} /> Dossier de l'Élément
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors hidden md:block"
            >
              <X size={20} />
            </button>
          </div>

          {/* New Tab Navigation */}
          <div className="flex border-b border-[#27272a] mb-6 shrink-0 overflow-x-auto custom-scrollbar">
            <TabButton 
              active={activeTab === 'properties'} 
              onClick={() => setActiveTab('properties')} 
              label="Propriétés" 
            />
            <TabButton 
              active={activeTab === 'isotopes'} 
              onClick={() => setActiveTab('isotopes')} 
              label="Isotopes" 
            />
            <TabButton 
              active={activeTab === 'reactions'} 
              onClick={() => setActiveTab('reactions')} 
              label="Réactions & Composés" 
            />
            <TabButton 
              active={activeTab === 'notes'} 
              onClick={() => setActiveTab('notes')} 
              label="Notes" 
              badge={notes.length}
            />
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            <AnimatePresence mode="wait">
              {activeTab === 'properties' && (
                <motion.div
                  key="properties"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <section className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Résumé</h3>
                    <p className="text-sm leading-relaxed text-gray-300 italic">
                      "{element.summary}"
                    </p>

                    <div className="pt-2">
                       <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500/60 mb-3">Structure Subatomique</h4>
                       <div className="grid grid-cols-3 gap-3">
                         <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-3 flex flex-col items-center justify-center">
                            <span className="text-xs font-bold text-red-400">Protons</span>
                            <span className="text-xl font-black text-red-500">{element.number}</span>
                            <span className="text-[8px] text-red-500/40 uppercase font-black">Charge +</span>
                         </div>
                         <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-3 flex flex-col items-center justify-center">
                            <span className="text-xs font-bold text-blue-400">Électrons</span>
                            <span className="text-xl font-black text-blue-500">{element.number}</span>
                            <span className="text-[8px] text-blue-500/40 uppercase font-black">Charge -</span>
                         </div>
                         <div className="bg-gray-500/5 border border-gray-500/20 rounded-xl p-3 flex flex-col items-center justify-center">
                            <span className="text-xs font-bold text-gray-400">Neutrons</span>
                            <span className="text-xl font-black text-gray-100">{Math.round(element.atomic_mass) - element.number}</span>
                            <span className="text-[8px] text-gray-500/40 uppercase font-black">Neutre</span>
                         </div>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <StatBox label="Point de Fusion" value={element.melt ? `${element.melt} K` : 'N/A'} />
                      <StatBox label="Point d'Ébullition" value={element.boil ? `${element.boil} K` : 'N/A'} />
                      <StatBox label="Densité" value={element.density ? `${element.density} g/cm³` : 'N/A'} />
                      <StatBox label="Rayon Atomique" value={element.atomic_radius ? `${element.atomic_radius} pm` : 'N/A'} />
                      <StatBox label="Électronégativité" value={element.electronegativity_pauling ? element.electronegativity_pauling.toString() : 'N/A'} />
                      <StatBox label="Affinité Électronique" value={element.electron_affinity ? `${element.electron_affinity} kJ/mol` : 'N/A'} />
                      <div className="col-span-2">
                        <StatBox 
                          label="Configuration Électronique Complète" 
                          value={formatElectronConfig(element.electron_configuration)} 
                        />
                      </div>
                    </div>

                    {element.oxidation_states && element.oxidation_states.length > 0 && (
                      <div className="pt-4 space-y-3">
                         <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-cyan-500/60">États d'Oxydation Possibles</h4>
                         <div className="flex flex-wrap gap-3">
                           {element.oxidation_states.map(state => (
                             <div key={state} className="bg-[#111113] border border-white/5 rounded-xl p-3 flex-1 min-w-[140px] max-w-[200px]">
                               <div className="flex items-center gap-2 mb-1">
                                 <span className={cn(
                                   "text-lg font-black",
                                   state > 0 ? "text-red-400" : state < 0 ? "text-blue-400" : "text-gray-400"
                                 )}>
                                   {state > 0 ? `+${state}` : state}
                                 </span>
                                 {state === element.oxidation_states![0] && (
                                   <span className="text-[8px] bg-white/10 px-1.5 py-0.5 rounded text-gray-300 font-bold uppercase">Principal</span>
                                 )}
                               </div>
                               <p className="text-[10px] text-gray-400 leading-tight">
                                 {state > 0 ? `Composé agissant comme un réducteur, tendance à perdre ${state} électron${state > 1 ? 's' : ''}.` : 
                                  state < 0 ? `Composé agissant comme un oxydant, tendance à capter ${Math.abs(state)} électron${Math.abs(state) > 1 ? 's' : ''}.` : 
                                  `État fondamental pur, aucune liaison ionique établie.`}
                               </p>
                             </div>
                           ))}
                         </div>
                      </div>
                    )}
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Énergie d'Ionisation (Trend)</h3>
                    <div className="h-48 w-full bg-[#161618] rounded-xl border border-[#27272a] p-2">
                      {energyData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={energyData}>
                            <defs>
                              <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                            <XAxis dataKey="name" stroke="#52525b" fontSize={10} />
                            <YAxis hide />
                            <Tooltip 
                              contentStyle={{ backgroundColor: '#161618', border: '1px solid #27272a', borderRadius: '8px' }}
                              itemStyle={{ color: '#fff' }}
                            />
                            <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#colorEnergy)" />
                          </AreaChart>
                        </ResponsiveContainer>
                      ) : (
                        <div className="h-full flex items-center justify-center text-xs text-gray-500">Données non disponibles</div>
                      )}
                    </div>
                  </section>
                </motion.div>
              )}

              {activeTab === 'isotopes' && (
                <motion.div
                  key="isotopes"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <section className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2 underline underline-offset-8 decoration-gray-800">Isotopes & Stabilité</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Profil d'Abondance</div>
                        <div className="h-48 w-full bg-[#111113] rounded-2xl border border-[#27272a] p-4">
                          {isotopeChartData.filter(d => d.abundance > 0).length > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={isotopeChartData.filter(d => d.abundance > 0)} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" stroke="#1f1f23" horizontal={false} />
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" stroke="#a1a1aa" fontSize={10} width={60} tickLine={false} axisLine={false} />
                                <Tooltip 
                                  cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                                />
                                <Bar dataKey="abundance" radius={[0, 4, 4, 0]}>
                                  {isotopeChartData.filter(d => d.abundance > 0).map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.isRadioactive ? '#ef4444' : '#3b82f6'} fillOpacity={0.8} />
                                  ))}
                                </Bar>
                              </BarChart>
                            </ResponsiveContainer>
                          ) : (
                            <div className="h-full flex items-center justify-center text-xs text-gray-500 italic">Pas d'abondance mesurable.</div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Masse vs Stabilité</div>
                        <div className="h-48 w-full bg-[#111113] rounded-2xl border border-[#27272a] p-4">
                          <ResponsiveContainer width="100%" height="100%">
                            <ScatterChart margin={{ top: 10, right: 10, bottom: 20, left: 0 }}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#1f1f23" />
                              <XAxis 
                                type="number" 
                                dataKey="mass" 
                                name="Masse" 
                                unit="u" 
                                stroke="#52525b" 
                                fontSize={10}
                                domain={['dataMin - 1', 'dataMax + 1']}
                              />
                              <YAxis 
                                type="number" 
                                dataKey="abundance" 
                                name="Abondance" 
                                unit="%" 
                                stroke="#52525b" 
                                fontSize={10}
                              />
                              <ZAxis type="number" dataKey="z" range={[50, 400]} />
                              <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '12px' }} />
                              <Scatter 
                                name="Isotopes" 
                                data={element.isotopes?.map(iso => ({
                                  name: iso.name,
                                  mass: iso.mass,
                                  abundance: iso.abundance || 0,
                                  z: (iso.abundance || 1) * 10,
                                  isRadioactive: !!iso.halfLife
                                })) || []}
                              >
                                {element.isotopes?.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={!!entry.halfLife ? '#ef4444' : '#10b981'} />
                                ))}
                              </Scatter>
                            </ScatterChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Registre des Isotopes</h3>
                    <div className="grid grid-cols-1 gap-6">
                      <RadioactiveDecayCalculator element={element} />
                      <div className="overflow-hidden bg-[#111113] border border-white/5 rounded-2xl">
                        <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-white/[0.02] border-b border-white/5">
                            <th className="px-4 py-3 font-semibold text-gray-400">Nom</th>
                            <th className="px-4 py-3 font-semibold text-gray-400 text-right">Masse (u)</th>
                            <th className="px-4 py-3 font-semibold text-gray-400 text-right">Abondance (%)</th>
                            <th className="px-4 py-3 font-semibold text-gray-400">Stabilité / Demi-vie</th>
                            <th className="px-4 py-3 font-semibold text-gray-400">Désintégration</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {element.isotopes?.map((iso, i) => (
                            <tr key={i} className="hover:bg-white/[0.01] transition-colors group">
                              <td className="px-4 py-3 font-bold text-gray-200">{iso.name}</td>
                              <td className="px-4 py-3 text-right font-mono text-gray-400">{iso.mass.toFixed(3)}</td>
                              <td className="px-4 py-3 text-right">
                                {iso.abundance ? (
                                  <span className="text-blue-400 font-bold">{iso.abundance}%</span>
                                ) : (
                                  <span className="text-gray-600 italic">traces</span>
                                )}
                              </td>
                              <td className="px-4 py-3">
                                {iso.halfLife ? (
                                  <span className="text-red-400 font-medium">{iso.halfLife}</span>
                                ) : (
                                  <span className="text-green-400 font-medium font-mono text-[10px] uppercase tracking-tighter">Stable</span>
                                )}
                              </td>
                              <td className="px-4 py-3">
                                {iso.decayMode ? (
                                  <span className="px-1.5 py-0.5 rounded bg-red-500/10 text-red-300 font-mono italic text-[10px]">{iso.decayMode}</span>
                                ) : (
                                  <span className="text-gray-600">—</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
                </motion.div>
              )}

              {activeTab === 'reactions' && (
                <motion.div
                  key="reactions"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Réactions Chimiques</h3>
                        <div className="flex flex-wrap gap-2">
                          {reactionTypes.map(type => (
                            <button
                              key={type}
                              onClick={() => setSelectedReactionType(type)}
                              className={cn(
                                "px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-tighter transition-all border",
                                selectedReactionType === type 
                                  ? "bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-900/40" 
                                  : "bg-white/5 border-white/5 text-gray-500 hover:border-white/20"
                              )}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        {filteredReactions.map((reaction, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-[#111113] border border-white/5 p-4 rounded-xl space-y-3 group hover:border-blue-500/20 transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-black uppercase tracking-widest text-blue-500/80 bg-blue-500/10 px-2 py-0.5 rounded">
                                {reaction.type || 'Général'}
                              </span>
                            </div>
                            <p className="text-xs text-gray-300 font-medium">{reaction.description}</p>
                            <div className="bg-black/40 p-3 rounded-lg border border-white/5 group-hover:border-blue-500/20 transition-all overflow-x-auto">
                              <code className="text-blue-400 font-mono text-xs">{reaction.equation}</code>
                            </div>
                          </motion.div>
                        ))}
                        {filteredReactions.length === 0 && (
                          <div className="text-center py-8 text-gray-600 text-xs italic bg-white/5 rounded-xl border border-dashed border-gray-800">
                            Aucune réaction de type "{selectedReactionType}" répertoriée pour cet élément.
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Composés Majeurs</h3>
                          {dynamicCompounds.length === 0 && (
                             <button 
                              onClick={handleDiscoverCompounds}
                              disabled={isDiscovering}
                              className="flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border border-blue-500/20 disabled:opacity-50 shadow-lg shadow-blue-500/5 group"
                             >
                               {isDiscovering ? <Loader2 size={12} className="animate-spin" /> : <Sparkles size={12} className="group-hover:animate-pulse" />}
                               Analyse IA des Composés
                             </button>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[...(element.compounds || []), ...dynamicCompounds].filter(Boolean).map((comp, i) => (
                            <motion.div 
                              key={i} 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="group bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-4 rounded-xl border border-white/5 space-y-2 hover:border-blue-500/30 transition-all shadow-lg"
                            >
                              <div className="flex items-center justify-between">
                                <span className={cn(
                                  "font-bold text-blue-400 group-hover:scale-105 transition-transform",
                                  i >= (element.compounds?.length || 0) && "text-blue-300"
                                )}>
                                  {comp?.formula}
                                </span>
                                <span className="text-xs font-medium text-gray-300">{comp?.name}</span>
                              </div>
                              <p className="text-[11px] text-gray-500 leading-tight line-clamp-2">{comp?.summary}</p>
                              {i >= (element.compounds?.length || 0) && (
                                <div className="text-[8px] font-black tracking-tighter text-blue-500/50 uppercase">IA DISCOVERY</div>
                              )}
                            </motion.div>
                          ))}
                          {!element.compounds && dynamicCompounds.length === 0 && (
                            <div className="col-span-2 text-center py-8 text-gray-600 text-xs italic bg-white/5 rounded-xl border border-dashed border-gray-800">
                              {isDiscovering ? "Analyse moléculaire via Gemini en cours..." : "Pas de données locales. Cliquez sur 'Analyse IA' pour explorer cet élément."}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

              {activeTab === 'notes' && (
                <motion.div
                  key="notes"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {user ? (
                    <form onSubmit={addNote} className="space-y-3">
                      <textarea 
                        className="w-full bg-[#161618] border border-[#27272a] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 min-h-[100px] resize-none"
                        placeholder="Ajouter une observation scientifique..."
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                      />
                      <div className="flex flex-wrap gap-2 items-center bg-[#161618] border border-[#27272a] rounded-xl px-3 py-2">
                        {currentTags.map(tag => (
                          <span key={tag} className="bg-blue-500/20 text-blue-400 text-[10px] px-2 py-1 rounded-full flex items-center gap-1">
                            #{tag}
                            <button type="button" onClick={() => setCurrentTags(currentTags.filter(t => t !== tag))} className="text-blue-400 hover:text-white">
                              <X size={10} />
                            </button>
                          </span>
                        ))}
                        <input
                          type="text"
                          value={tagInput}
                          onChange={(e) => setTagInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ',') {
                              e.preventDefault();
                              const tag = tagInput.trim().toLowerCase();
                              if (tag && !currentTags.includes(tag) && currentTags.length < 10) {
                                setCurrentTags([...currentTags, tag]);
                                setTagInput('');
                              }
                            }
                          }}
                          placeholder="Ajouter un tag (Entrée pour valider)"
                          className="bg-transparent text-sm text-gray-300 focus:outline-none flex-1 min-w-[150px]"
                        />
                      </div>
                      <button type="submit" className="w-full py-2 bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
                        <Send size={16} /> Enregistrer l'Observation
                      </button>
                    </form>
                  ) : (
                    <div className="text-[12px] text-gray-500 bg-white/5 p-4 rounded-xl italic border border-dashed border-gray-800 text-center">
                      Connectez-vous pour contribuer à l'espace de recherche collaboratif.
                    </div>
                  )}

                  <div className="space-y-3">
                    {allTags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pb-2">
                        <button
                          onClick={() => setSelectedFilterTag(null)}
                          className={cn(
                            "px-3 py-1 rounded-full text-[10px] font-semibold transition-colors",
                            selectedFilterTag === null ? "bg-white text-black" : "bg-white/10 text-gray-400 hover:bg-white/20"
                          )}
                        >
                          Tous
                        </button>
                        {allTags.map(tag => (
                          <button
                            key={tag}
                            onClick={() => setSelectedFilterTag(tag)}
                            className={cn(
                              "px-3 py-1 rounded-full text-[10px] font-semibold transition-colors",
                              selectedFilterTag === tag ? "bg-blue-500 text-white" : "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
                            )}
                          >
                            #{tag}
                          </button>
                        ))}
                      </div>
                    )}
                    {filteredNotes.map(note => (
                      <div key={note.id} className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                        <div className="flex justify-between items-center pb-2 border-b border-white/5">
                          <span className="text-xs font-bold text-blue-400">{note.authorName}</span>
                          <span className="text-[10px] text-gray-600">{note.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}</span>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">{note.content}</p>
                        {note.tags && note.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {note.tags.map(t => (
                              <span key={t} className="text-[9px] text-blue-400/70 bg-blue-500/10 px-1.5 py-0.5 rounded">#{t}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    {filteredNotes.length === 0 && (
                      <div className="text-center py-20">
                        <MessageSquare className="mx-auto text-gray-800 mb-4" size={40} />
                        <p className="text-gray-600 text-sm italic">Soyez le premier à ajouter une note de recherche.</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="pt-4 mt-auto border-t border-[#27272a] text-[10px] text-gray-600 text-center uppercase tracking-widest">
            © Sébastien John Bruneau — Nexus Atomica Research Terminal
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function formatElectronConfig(config: string) {
  const superScripts: Record<string, string> = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', 
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
  };
  
  return config.split(' ').map(part => {
    return part.replace(/([spdf])(\d+)/g, (_, shell, count) => {
      const formattedCount = count.split('').map((char: string) => superScripts[char] || char).join('');
      return `${shell}${formattedCount}`;
    });
  }).join(' ');
}

function TabButton({ active, onClick, label, badge }: { active: boolean, onClick: () => void, label: string, badge?: number }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-3 text-sm font-medium transition-all relative shrink-0",
        active ? "text-blue-400" : "text-gray-500 hover:text-gray-300"
      )}
    >
      <div className="flex items-center gap-2">
        {label}
        {badge !== undefined && badge > 0 && (
          <span className="bg-indigo-600 text-white text-[10px] px-1.5 rounded-full font-black min-w-[18px]">
            {badge}
          </span>
        )}
      </div>
      {active && (
        <motion.div 
          layoutId="modal-tab-underline"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" 
        />
      )}
    </button>
  );
}

function DataRow({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | number }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="text-blue-400 opacity-80">{icon}</div>
      <span className="text-gray-400">{label}:</span>
      <span className="font-mono ml-auto">{value}</span>
    </div>
  );
}

function StatBox({ label, value }: { label: string, value: string }) {
  return (
    <div className="bg-white/5 p-3 rounded-xl border border-white/5">
      <div className="text-[10px] text-gray-500 uppercase font-bold mb-1">{label}</div>
      <div className="text-sm font-mono">{value}</div>
    </div>
  );
}

// --- Main Periodic Table Component ---

interface PeriodicTableProps {
  elements: Element[];
  onSelectElement: (element: Element) => void;
}

export default function PeriodicTable({ elements, onSelectElement }: PeriodicTableProps) {
  return (
    <div className="grid grid-cols-18 gap-1 md:gap-2 p-2 min-w-[1000px]">
      {elements.map((element) => (
        <motion.div
          key={element.number}
          layoutId={`element-${element.number}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, zIndex: 10 }}
          onClick={() => onSelectElement(element)}
          className={cn(
            "aspect-square flex flex-col p-1 md:p-2 cursor-pointer border border-white/10 rounded-md element-card transition-all duration-300",
            CATEGORY_COLORS[element.category] || "bg-gray-800",
            "bg-opacity-40 hover:bg-opacity-80 shadow-lg",
            element.category === "alkali" && "border-red-400/50",
            element.category === "alkaline" && "border-orange-400/50",
            element.category === "transition" && "border-yellow-400/50",
            element.category === "post-transition" && "border-green-400/50",
            element.category === "metalloid" && "border-cyan-400/50",
            element.category === "non-metal" && "border-blue-400/50",
            element.category === "noble" && "border-purple-400/50",
            element.category === "lanthanide" && "border-pink-400/50",
            element.category === "actinide" && "border-indigo-400/50"
          )}
          style={{
            gridColumn: element.xpos as any,
            gridRow: element.ypos as any,
          }}
        >
          <span className="text-[10px] md:text-xs font-mono opacity-60 leading-none">
            {element.number}
          </span>
          <span className="text-sm md:text-xl font-display font-bold text-center flex-1 flex items-center justify-center">
            {element.symbol}
          </span>
          <span className="text-[8px] md:text-[10px] truncate opacity-80 text-center">
            {element.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
