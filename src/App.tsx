/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * @copyright Sébastien John Bruneau
 */

import { useState, useEffect } from 'react';
import { auth, loginWithGoogle, logout, db } from './lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { ELEMENTS } from './data/elements';
import { Element } from './types';
import PeriodicTable, { CategoryLegend, ElementModal } from './components/periodic-table/PeriodicTable';
import ResearchHub from './components/research/ResearchHub';
import MoleculeBuilder from './components/molecules/MoleculeBuilder';
import PolymerView from './components/polymers/PolymerView';
import { ErrorProvider } from './context/ErrorContext';
import { FlaskConical, Search, Beaker, Users, Info, Settings, LogOut, LogIn, ChevronRight, Menu, Atom, Dna } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [compareElements, setCompareElements] = useState<Element[]>([]);
  const [activeTab, setActiveTab] = useState<'table' | 'research' | 'fusion' | 'polymers'>('table');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCharge, setSelectedCharge] = useState<number | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const filteredElements = ELEMENTS.filter(e => {
    const matchesSearch = e.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          e.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.number.toString() === searchQuery;
    const matchesCharge = selectedCharge === null || (e.oxidation_states && e.oxidation_states.includes(selectedCharge));
    return matchesSearch && matchesCharge;
  });

  return (
    <ErrorProvider>
      <div className="flex h-screen bg-[#0a0a0b] text-gray-100 font-sans overflow-hidden">
      {/* Sidebar Nav */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 260 : 80 }}
        className="flex flex-col border-r border-[#27272a] bg-[#161618] z-50 overflow-hidden"
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/20">
            <FlaskConical size={24} className="text-white" />
          </div>
          {isSidebarOpen && (
            <span className="font-display font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Nexus Atomica
            </span>
          )}
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <NavItem 
            icon={<Beaker size={20} />} 
            label="Tableau Périodique" 
            active={activeTab === 'table'} 
            collapsed={!isSidebarOpen}
            onClick={() => setActiveTab('table')}
          />
          <NavItem 
            icon={<Users size={20} />} 
            label="Espace Recherche" 
            active={activeTab === 'research'} 
            collapsed={!isSidebarOpen}
            onClick={() => setActiveTab('research')}
          />
          <NavItem 
            icon={<Atom size={20} />} 
            label="Fusion Moléculaire" 
            active={activeTab === 'fusion'} 
            collapsed={!isSidebarOpen}
            onClick={() => setActiveTab('fusion')}
          />
          <NavItem 
            icon={<Dna size={20} />} 
            label="Laboratoire Polymères" 
            active={activeTab === 'polymers'} 
            collapsed={!isSidebarOpen}
            onClick={() => setActiveTab('polymers')}
          />
        </nav>

        <div className="mt-auto p-4 border-t border-[#27272a] space-y-4">
          {user ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 px-2">
                <img src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}`} className="w-8 h-8 rounded-full border border-gray-600" alt="Avatar" referrerPolicy="no-referrer" />
                {isSidebarOpen && (
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-sm font-medium truncate">{user.displayName}</span>
                    <span className="text-xs text-gray-500 truncate">{user.email}</span>
                  </div>
                )}
              </div>
              <button 
                onClick={logout}
                className={cn(
                  "flex items-center gap-3 p-2 rounded-lg hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition-colors w-full",
                  !isSidebarOpen && "justify-center"
                )}
              >
                <LogOut size={20} />
                {isSidebarOpen && <span className="text-sm font-medium">Déconnexion</span>}
              </button>
            </div>
          ) : (
            <button 
              onClick={loginWithGoogle}
              className={cn(
                "flex items-center gap-3 p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors w-full shadow-lg shadow-blue-900/20",
                !isSidebarOpen && "justify-center"
              )}
            >
              <LogIn size={20} />
              {isSidebarOpen && <span className="text-sm font-medium">Se connecter</span>}
            </button>
          )}
          <div className="text-[10px] text-gray-600 text-center uppercase tracking-widest pt-4">
            © Sébastien John Bruneau
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 relative">
        <header className="h-16 border-b border-[#27272a] bg-[#161618]/50 backdrop-blur-md px-8 flex items-center justify-between z-40">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Rechercher un élément (nom, symbole, numéro)..."
                className="w-full bg-[#0a0a0b] border border-[#27272a] rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {activeTab === 'table' && (
              <select
                value={selectedCharge ?? ''}
                onChange={(e) => setSelectedCharge(e.target.value ? Number(e.target.value) : null)}
                className="bg-[#0a0a0b] border border-[#27272a] rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-all text-gray-300"
              >
                <option value="">Tous les états d'oxydation</option>
                {[...Array(15)].map((_, i) => i - 7).filter(n => n !== 0).map(charge => (
                  <option key={charge} value={charge}>{charge > 0 ? `+${charge}` : charge}</option>
                ))}
              </select>
            )}
          </div>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 transition-colors ml-4"
          >
            <Menu size={20} />
          </button>
        </header>

        <div className="flex-1 overflow-auto p-8 custom-scrollbar">
          <AnimatePresence mode="wait">
            {activeTab === 'table' && (
              <motion.div
                key="table"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <PeriodicTable 
                  elements={searchQuery ? filteredElements : ELEMENTS} 
                  onSelectElement={setSelectedElement}
                />
                <CategoryLegend />
              </motion.div>
            )}
            {activeTab === 'research' && (
              <motion.div
                key="research"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <ResearchHub user={user} />
              </motion.div>
            )}
            {activeTab === 'fusion' && (
              <MoleculeBuilder />
            )}
            {activeTab === 'polymers' && (
              <PolymerView />
            )}
          </AnimatePresence>
        </div>
      </main>

      <AnimatePresence>
        {selectedElement && (
          <ElementModal 
            element={selectedElement} 
            onClose={() => setSelectedElement(null)} 
            user={user}
          />
        )}
      </AnimatePresence>
    </div>
    </ErrorProvider>
  );
}

function NavItem({ icon, label, active, onClick, collapsed }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void, collapsed: boolean }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex items-center gap-4 w-full p-3 rounded-xl transition-all duration-200 group",
        active 
          ? "bg-blue-600/10 text-blue-400 border border-blue-500/20" 
          : "text-gray-500 hover:text-gray-200 hover:bg-gray-800/50"
      )}
    >
      <div className={cn(
        "transition-transform",
        active ? "scale-110" : "group-hover:scale-110"
      )}>
        {icon}
      </div>
      {!collapsed && <span className="font-medium text-sm">{label}</span>}
    </button>
  );
}
