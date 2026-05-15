import { useState, useEffect } from 'react';
import { db, handleFirestoreError } from '../../lib/firebase';
import { collection, query, onSnapshot, addDoc, serverTimestamp, where } from 'firebase/firestore';
import { ResearchProject, OperationType, Element } from '../../types';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Folder, UserPlus, Clock, MessageSquare, BookOpen, BarChart3, TrendingUp, ArrowLeftRight, Minus, Book, Search, Sparkles, Loader2, FileText, Layout } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { ELEMENTS, SCIENTIFIC_TERMS, CATEGORY_COLORS } from '../../data/elements';
import ReactMarkdown from 'react-markdown';
import { generateResearchReport, explainScientificTerm } from '../../lib/gemini';

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

// --- Unit Converter Component ---

type UnitCategory = 'temperature' | 'energy' | 'pressure' | 'distance';

export function UnitConverter() {
  const [category, setCategory] = useState<UnitCategory>('temperature');
  const [value, setValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<string>('');
  const [toUnit, setToToUnit] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const units: Record<UnitCategory, { name: string; symbol: string; factor?: number; offset?: number }[]> = {
    temperature: [
      { name: 'Kelvin', symbol: 'K' },
      { name: 'Celsius', symbol: '°C' },
      { name: 'Fahrenheit', symbol: '°F' }
    ],
    energy: [
      { name: 'Joule', symbol: 'J', factor: 1 },
      { name: 'Electron-Volt', symbol: 'eV', factor: 1.60218e-19 },
      { name: 'Calorie', symbol: 'cal', factor: 4.184 },
      { name: 'Kilowatt-heure', symbol: 'kWh', factor: 3.6e6 }
    ],
    pressure: [
      { name: 'Pascal', symbol: 'Pa', factor: 1 },
      { name: 'Atmosphère', symbol: 'atm', factor: 101325 },
      { name: 'Bar', symbol: 'bar', factor: 100000 },
      { name: 'Torr (mmHg)', symbol: 'Torr', factor: 133.322 }
    ],
    distance: [
      { name: 'Mètre', symbol: 'm', factor: 1 },
      { name: 'Ångström', symbol: 'Å', factor: 1e-10 },
      { name: 'Picomètre', symbol: 'pm', factor: 1e-12 },
      { name: 'Unité Astronomique', symbol: 'UA', factor: 1.496e11 }
    ]
  };

  useEffect(() => {
    const defaultUnits = units[category];
    setFromUnit(defaultUnits[0].symbol);
    setToToUnit(defaultUnits[1].symbol);
  }, [category]);

  const convert = () => {
    const list = units[category];
    const uFrom = list.find(u => u.symbol === fromUnit)!;
    const uTo = list.find(u => u.symbol === toUnit)!;

    if (category === 'temperature') {
      let k = value;
      if (fromUnit === '°C') k = value + 273.15;
      if (fromUnit === '°F') k = (value - 32) * 5/9 + 273.15;

      let res = k;
      if (toUnit === '°C') res = k - 273.15;
      if (toUnit === '°F') res = (k - 273.15) * 9/5 + 32;
      setResult(res);
    } else {
      const baseValue = value * uFrom.factor!;
      setResult(baseValue / uTo.factor!);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-[#161618] border border-[#27272a] rounded-3xl p-8 space-y-8 shadow-2xl">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 bg-indigo-600/20 rounded-2xl flex items-center justify-center mx-auto text-indigo-400 mb-4">
          <ArrowLeftRight size={24} />
        </div>
        <h2 className="text-2xl font-display font-bold">Convertisseur Universel</h2>
        <p className="text-gray-500 text-xs uppercase font-black tracking-widest">Outil de Précision Scientifique</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-2">
          {(Object.keys(units) as UnitCategory[]).map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border",
                category === cat ? "bg-indigo-600 border-indigo-400 text-white shadow-lg" : "bg-white/5 border-white/5 text-gray-500 hover:border-white/20"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest ml-2">Valeur à convertir</label>
            <input 
              type="number" 
              value={value} 
              onChange={(e) => setValue(parseFloat(e.target.value) || 0)}
              className="w-full bg-[#0a0a0b] border border-[#27272a] rounded-2xl py-4 px-6 text-xl font-mono focus:outline-none focus:border-indigo-500 transition-all"
            />
          </div>

          <div className="flex items-center gap-4">
            <select 
              value={fromUnit} 
              onChange={(e) => setFromUnit(e.target.value)}
              className="flex-1 bg-[#0a0a0b] border border-[#27272a] rounded-xl p-3 text-sm focus:outline-none"
            >
              {units[category].map(u => <option key={u.symbol} value={u.symbol}>{u.name} ({u.symbol})</option>)}
            </select>
            <ArrowLeftRight className="text-gray-600" size={20} />
            <select 
              value={toUnit} 
              onChange={(e) => setToToUnit(e.target.value)}
              className="flex-1 bg-[#0a0a0b] border border-[#27272a] rounded-xl p-3 text-sm focus:outline-none"
            >
              {units[category].map(u => <option key={u.symbol} value={u.symbol}>{u.name} ({u.symbol})</option>)}
            </select>
          </div>

          <button 
            onClick={convert}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-indigo-900/40 transition-all active:scale-95"
          >
            Calculer Conversion
          </button>
        </div>

        {result !== null && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-indigo-500/10 border border-indigo-500/20 p-6 rounded-2xl text-center space-y-1"
          >
            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">Résultat</span>
            <div className="text-3xl font-mono font-black text-white">
              {result < 0.001 ? result.toExponential(4) : result.toLocaleString(undefined, { maximumFractionDigits: 6 })}
              <span className="text-sm ml-2 text-indigo-400">{toUnit}</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// --- Comparison View Component ---

export function ComparisonView({ elements }: { elements: Element[] }) {
  const [e1, setE1] = useState<Element | null>(elements[0]);
  const [e2, setE2] = useState<Element | null>(elements[1]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-display font-bold">Comparateur Atomique</h1>
          <p className="text-gray-500">Analysez les différences de propriétés entre deux éléments côte à côte.</p>
        </div>
        <div className="flex items-center gap-4 bg-[#161618] p-2 rounded-2xl border border-[#27272a]">
          <select 
            value={e1?.number} 
            onChange={(e) => setE1(elements.find(el => el.number === Number(e.target.value)) || null)}
            className="bg-[#0a0a0b] border border-[#27272a] rounded-lg p-2 text-sm focus:outline-none"
          >
            {elements.map(el => <option key={el.number} value={el.number}>{el.symbol} - {el.name}</option>)}
          </select>
          <ArrowLeftRight className="text-blue-500" size={20} />
          <select 
            value={e2?.number} 
            onChange={(e) => setE2(elements.find(el => el.number === Number(e.target.value)) || null)}
            className="bg-[#0a0a0b] border border-[#27272a] rounded-lg p-2 text-sm focus:outline-none"
          >
            {elements.map(el => <option key={el.number} value={el.number}>{el.symbol} - {el.name}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-6 pt-12">
          <div className="h-12 flex items-center text-sm font-semibold text-gray-500 uppercase tracking-tighter">Masse Atomique</div>
          <div className="h-12 flex items-center text-sm font-semibold text-gray-500 uppercase tracking-tighter">Point de Fusion</div>
          <div className="h-12 flex items-center text-sm font-semibold text-gray-500 uppercase tracking-tighter">Point d'Ébullition</div>
          <div className="h-12 flex items-center text-sm font-semibold text-gray-500 uppercase tracking-tighter">Électronégativité</div>
          <div className="h-12 flex items-center text-sm font-semibold text-gray-500 uppercase tracking-tighter">Rayon Atomique</div>
          <div className="h-12 flex items-center text-sm font-semibold text-gray-500 uppercase tracking-tighter">Densité</div>
          <div className="h-12 flex items-center text-sm font-semibold text-gray-500 uppercase tracking-tighter">Configuration</div>
        </div>

        <div className="space-y-6">
           {e1 && (
             <div className={cn(
               "p-6 rounded-3xl border border-[#27272a] text-center",
               CATEGORY_COLORS[e1.category] || "bg-gray-800",
               "bg-opacity-10"
             )}>
               <div className="text-5xl font-display font-black mb-1">{e1.symbol}</div>
               <div className="text-sm font-bold opacity-80">{e1.name}</div>
             </div>
           )}
           <div className="space-y-6 px-4">
              <div className="h-12 flex items-center font-mono text-lg">{e1?.atomic_mass} u</div>
              <div className="h-12 flex items-center font-mono text-lg">{e1?.melt || <Minus className="text-gray-800" />} K</div>
              <div className="h-12 flex items-center font-mono text-lg">{e1?.boil || <Minus className="text-gray-800" />} K</div>
              <div className="h-12 flex items-center font-mono text-lg">{e1?.electronegativity_pauling || 'N/A'}</div>
              <div className="h-12 flex items-center font-mono text-lg">{e1?.atomic_radius} pm</div>
              <div className="h-12 flex items-center font-mono text-lg">{e1?.density} g/cm³</div>
              <div className="h-12 flex items-center font-mono text-[10px] break-all">{e1?.electron_configuration}</div>
           </div>
        </div>

        <div className="space-y-6">
           {e2 && (
             <div className={cn(
               "p-6 rounded-3xl border border-[#27272a] text-center",
               CATEGORY_COLORS[e2.category] || "bg-gray-800",
               "bg-opacity-10"
             )}>
               <div className="text-5xl font-display font-black mb-1">{e2.symbol}</div>
               <div className="text-sm font-bold opacity-80">{e2.name}</div>
             </div>
           )}
           <div className="space-y-6 px-4">
              <div className="h-12 flex items-center font-mono text-lg">{e2?.atomic_mass} u</div>
              <div className="h-12 flex items-center font-mono text-lg">{e2?.melt || <Minus className="text-gray-800" />} K</div>
              <div className="h-12 flex items-center font-mono text-lg">{e2?.boil || <Minus className="text-gray-800" />} K</div>
              <div className="h-12 flex items-center font-mono text-lg">{e2?.electronegativity_pauling || 'N/A'}</div>
              <div className="h-12 flex items-center font-mono text-lg">{e2?.atomic_radius} pm</div>
              <div className="h-12 flex items-center font-mono text-lg">{e2?.density} g/cm³</div>
              <div className="h-12 flex items-center font-mono text-[10px] break-all">{e2?.electron_configuration}</div>
           </div>
        </div>
      </div>
    </div>
  );
}

// --- Dictionary View Component ---

export function DictionaryView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [aiResult, setAiResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAiDefine = async (term: string) => {
    setLoading(true);
    setAiResult(null);
    const result = await explainScientificTerm(term);
    setAiResult(result || "Définition non disponible.");
    setLoading(false);
  };

  const filteredTerms = SCIENTIFIC_TERMS.filter(t => 
    t.term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto text-blue-500">
          <Book size={32} />
        </div>
        <h1 className="text-4xl font-display font-bold">Dictionnaire Atomique</h1>
        <p className="text-gray-500">Comprenez les concepts complexes avec l'aide de l'IA Scientifique.</p>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Rechercher un terme (ex: Électronégativité)..."
            className="w-full bg-[#161618] border border-[#27272a] rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-all font-medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button 
          onClick={() => handleAiDefine(searchTerm)}
          disabled={!searchTerm || loading}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-6 py-4 rounded-2xl flex items-center gap-2 font-bold transition-all disabled:opacity-50 shadow-lg shadow-blue-900/20"
        >
          {loading ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
          Demander à l'IA
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {aiResult && (
          <div className="col-span-2 bg-[#161618] border border-blue-500/20 rounded-3xl p-8 space-y-4 animate-in fade-in slide-in-from-top-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2 text-blue-400">
                <Sparkles size={20} /> Définition IA : {searchTerm}
              </h2>
              <button onClick={() => setAiResult(null)} className="text-xs text-gray-500 hover:text-white">Fermer</button>
            </div>
            <div className="prose prose-invert max-w-none text-sm text-gray-300 leading-relaxed italic">
              <ReactMarkdown>{aiResult}</ReactMarkdown>
            </div>
          </div>
        )}

        {filteredTerms.map((t, i) => (
          <div key={i} className="bg-[#161618] border border-[#27272a] p-6 rounded-3xl hover:border-gray-600 transition-colors group cursor-help">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-lg">{t.term}</h3>
              <span className="text-[10px] uppercase font-bold text-gray-600 tracking-widest">{t.category}</span>
            </div>
            <p className="text-sm text-gray-500">{t.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Main Research Hub Component ---

export default function ResearchHub({ user }: { user: any }) {
  const [activeTab, setActiveTab] = useState<'projects' | 'compare' | 'dictionary' | 'converter'>('projects');
  const [projects, setProjects] = useState<ResearchProject[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showNewProject, setShowNewProject] = useState(false);
  const [newProject, setNewProject] = useState({ name: '', description: '' });

  const categoryStats = ELEMENTS.reduce((acc, el) => {
    const existing = acc.find(a => a.name === el.category);
    if (existing) {
      existing.count += 1;
      existing.totalMass += el.atomic_mass;
    } else {
      acc.push({ name: el.category, count: 1, totalMass: el.atomic_mass });
    }
    return acc;
  }, [] as any[]).map(item => ({
    ...item,
    avgMass: item.totalMass / item.count
  }));

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#6366f1', '#14b8a6', '#f43f5e'];

  const handleExport = async (project: ResearchProject) => {
    setIsGenerating(true);
    const report = await generateResearchReport(project);
    const blob = new Blob([report], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Rapport_${project.name}.md`;
    a.click();
    setIsGenerating(false);
  };

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'projects'), where('members', 'array-contains', user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setProjects(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ResearchProject)));
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'projects');
    });
    return () => unsubscribe();
  }, [user]);

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newProject.name) return;
    try {
      await addDoc(collection(db, 'projects'), {
        ...newProject,
        ownerId: user.uid,
        members: [user.uid],
        status: 'active',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      setShowNewProject(false);
      setNewProject({ name: '', description: '' });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'projects');
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-gradient-to-r from-gray-900 to-[#161618] p-8 rounded-3xl border border-gray-800 shadow-2xl">
        <div>
          <h1 className="text-4xl font-display font-black tracking-tight text-white">Centre de Recherche Nexus</h1>
          <p className="text-gray-400 mt-2">Station de collaboration atomique et analyse moléculaire avancée.</p>
        </div>
        
        <div className="flex bg-[#121214] p-1 rounded-2xl border border-white/5">
          <button 
            onClick={() => setActiveTab('projects')}
            className={cn("px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2", activeTab === 'projects' ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30" : "text-gray-500 hover:text-white")}
          >
            <Layout size={16} /> Projets
          </button>
          <button 
            onClick={() => setActiveTab('compare')}
            className={cn("px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2", activeTab === 'compare' ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30" : "text-gray-500 hover:text-white")}
          >
            <ArrowLeftRight size={16} /> Comparer
          </button>
          <button 
            onClick={() => setActiveTab('dictionary')}
            className={cn("px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2", activeTab === 'dictionary' ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30" : "text-gray-500 hover:text-white")}
          >
            <Book size={16} /> Définitions
          </button>
          <button 
            onClick={() => setActiveTab('converter')}
            className={cn("px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2", activeTab === 'converter' ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30" : "text-gray-500 hover:text-white")}
          >
            <ArrowLeftRight size={16} /> Unités
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'projects' && (
          <motion.div key="projects" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
            {!user ? (
              <div className="flex flex-col items-center justify-center p-20 text-center bg-[#161618] rounded-3xl border border-dashed border-[#27272a] space-y-6">
                <BookOpen size={64} className="text-gray-800" />
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Accès Restreint</h2>
                  <p className="text-gray-500 max-w-sm">Connectez-vous pour accéder à l'espace de recherche collaboratif et gérer vos projets.</p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                   <h2 className="text-xl font-bold flex items-center gap-3"><Folder className="text-blue-500" /> Mes Expéditions Scientifiques</h2>
                   <button onClick={() => setShowNewProject(true)} className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl text-white font-bold flex items-center gap-2 shadow-lg shadow-blue-900/30 transition-all"><Plus size={18} /> Nouveau Projet</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <motion.div key={project.id} whileHover={{ y: -4 }} className="bg-[#161618] border border-[#27272a] p-6 rounded-3xl space-y-4 group transition-colors hover:border-blue-500/30">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors">{project.name}</h3>
                        <span className="text-[9px] uppercase font-black px-2 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">{project.status}</span>
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-2 h-10">{project.description || "Aucune description fournie."}</p>
                      <button onClick={() => handleExport(project)} className="w-full py-3 bg-[#0a0a0b] hover:bg-gray-800 border border-[#27272a] rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2">{isGenerating ? "Génération..." : "Générer Rapport IA"}</button>
                      <div className="flex items-center gap-4 pt-4 border-t border-[#27272a]">
                        <div className="flex -space-x-2">
                          {project.members.map((m, i) => <div key={i} className="w-6 h-6 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center text-[8px] font-bold">{m.substring(0, 2).toUpperCase()}</div>)}
                        </div>
                        <div className="text-[10px] text-gray-500 ml-auto font-mono">{project.updatedAt?.toDate()?.toLocaleDateString()}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 border-t border-[#27272a]">
                  <div className="lg:col-span-2 bg-[#161618] border border-[#27272a] rounded-3xl p-8">
                     <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-gray-500 flex items-center gap-3"><TrendingUp size={16} /> Tendances Massiques</h3>
                     <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                           <BarChart data={categoryStats}>
                             <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                             <XAxis dataKey="name" stroke="#52525b" fontSize={9} interval={0} angle={-35} textAnchor="end" height={60} />
                             <YAxis stroke="#52525b" fontSize={9} />
                             <Tooltip contentStyle={{ backgroundColor: '#161618', border: '1px solid #27272a', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)' }} />
                             <Bar dataKey="avgMass" radius={[8, 8, 0, 0]}>
                               {categoryStats.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                             </Bar>
                           </BarChart>
                        </ResponsiveContainer>
                     </div>
                  </div>
                  <div className="bg-[#161618] border border-[#27272a] rounded-3xl p-8">
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-gray-500 flex items-center gap-3"><BarChart3 size={16} /> Répartition</h3>
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={categoryStats} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={8} dataKey="count">
                            {categoryStats.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                          </Pie>
                          <Tooltip contentStyle={{ backgroundColor: '#161618', border: '1px solid #27272a', borderRadius: '16px' }} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
        {activeTab === 'compare' && (
          <motion.div key="compare" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <ComparisonView elements={ELEMENTS} />
          </motion.div>
        )}
        {activeTab === 'dictionary' && (
          <motion.div key="dictionary" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <DictionaryView />
          </motion.div>
        )}
        {activeTab === 'converter' && (
          <motion.div key="converter" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <UnitConverter />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-12 border-t border-[#27272a] text-[10px] text-gray-700 text-center uppercase tracking-widest font-black">
        © Sébastien John Bruneau — Nexus Atomica Research Terminal
      </div>

      <AnimatePresence>
        {showNewProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowNewProject(false)} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.form initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onSubmit={handleCreateProject} className="relative w-full max-w-md bg-[#161618] border border-white/5 p-10 rounded-[2.5rem] shadow-2xl space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-black tracking-tight">Nouveau Projet</h2>
                <p className="text-gray-500 text-xs font-medium">Définissez vos objectifs scientifiques.</p>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Nom de l'expédition</label>
                  <input required className="w-full bg-[#0a0a0b] border border-[#27272a] rounded-2xl py-4 px-5 focus:outline-none focus:border-blue-500 transition-all font-medium" placeholder="ex: Analyse Isotopique..." value={newProject.name} onChange={(e) => setNewProject({ ...newProject, name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Description / Hypothèse</label>
                  <textarea className="w-full bg-[#0a0a0b] border border-[#27272a] rounded-2xl py-4 px-5 focus:outline-none focus:border-blue-500 transition-all min-h-[120px] font-medium" placeholder="Quels secrets atomiques tentez-vous de percer ?" value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} />
                </div>
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => setShowNewProject(false)} className="flex-1 py-4 bg-gray-800 hover:bg-gray-700 rounded-2xl transition-all font-bold text-sm">Annuler</button>
                <button type="submit" className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-sm transition-all shadow-lg shadow-blue-900/40">Lancer Projet</button>
              </div>
            </motion.form>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
