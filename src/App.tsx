import React, { useMemo } from 'react';
import { useApp, AppProvider } from './context/AppContext';
import { CATEGORIES } from './data/categories';
import { sound } from './services/audio';
import { Navbar } from './components/Navbar';
import { PrintableCard } from './components/PrintableCard';
import { PrintableDetailModal } from './components/PrintableDetailModal';
import { DigitalColoringStudio } from './components/DigitalColoringStudio';
import { WorksheetPlayStudio } from './components/WorksheetPlayStudio';
import { ParentGateModal } from './components/ParentGateModal';
import { OnboardingModal } from './components/OnboardingModal';
import { ChildProfilesModal } from './components/ChildProfilesModal';
import { ParentZoneModal } from './components/ParentZoneModal';
import { AdminDashboard } from './components/AdminDashboard';
import { ArtGalleryModal } from './components/ArtGalleryModal';
import { PrintHistoryModal } from './components/PrintHistoryModal';
import {
  Sparkles,
  Calendar,
  Flame,
  Filter,
  Palette,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Clock,
  Layers,
  Star
} from 'lucide-react';
import { Season } from './types';

const MainContent: React.FC = () => {
  const {
    role,
    printables,
    filters,
    setFilters,
    resetFilters,
    favorites,
    selectedPrintable,
    coloringPrintable,
    setColoringPrintable,
    worksheetPrintable,
    setWorksheetPrintable,
    activeModal,
    setActiveModal,
    activeSeason,
    setActiveSeason,
    artworks,
    bundles
  } = useApp();

  // Filter Printables
  const filteredPrintables = useMemo(() => {
    return printables.filter(item => {
      // Search Query
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(query));
        const matchesSkills = item.skills.some(s => s.toLowerCase().includes(query));
        if (!matchesTitle && !matchesCategory && !matchesTags && !matchesSkills) return false;
      }

      // Category
      if (filters.category !== 'all' && item.category !== filters.category) {
        return false;
      }

      // Age
      if (filters.age !== 'all' && item.ageRange !== filters.age) {
        return false;
      }

      // Difficulty
      if (filters.difficulty !== 'all' && item.difficulty !== filters.difficulty) {
        return false;
      }

      // Type (Free / Premium / Favorites)
      if (filters.type === 'free' && item.isPremium) return false;
      if (filters.type === 'premium' && !item.isPremium) return false;
      if (filters.type === 'favorites' && !favorites.includes(item.id)) return false;

      // Season
      if (filters.season !== 'all' && item.season !== filters.season) {
        return false;
      }

      return true;
    });
  }, [printables, filters, favorites]);

  // Seasonal Items
  const seasonalPrintables = useMemo(() => {
    return printables.filter(p => p.season === activeSeason || (activeSeason === 'Halloween' && p.season === 'Halloween'));
  }, [printables, activeSeason]);

  // Popular this week
  const popularPrintables = useMemo(() => {
    return [...printables].sort((a, b) => b.printsCount - a.printsCount).slice(0, 8);
  }, [printables]);

  const seasonalPacks: { season: Season; title: string; icon: string; bg: string }[] = [
    { season: 'Halloween', title: 'Halloween Fun', icon: '🎃', bg: 'bg-[#FFF0F5]' },
    { season: 'Christmas', title: 'Christmas', icon: '🎄', bg: 'bg-[#F0FDF4]' },
    { season: 'Ramadan', title: 'Ramadan & Eid', icon: '🌙', bg: 'bg-[#ECFDF5]' },
    { season: 'Easter', title: 'Easter & Spring', icon: '🐰', bg: 'bg-[#FFFBEB]' },
    { season: 'Summer', title: 'Summer Splash', icon: '☀️', bg: 'bg-[#EFF6FF]' },
    { season: 'Back to School', title: 'Back to School', icon: '🎒', bg: 'bg-[#F5F3FF]' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF8]">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-10">
        
        {/* SECTION 1: Top Hero & "This Week's New Printables" Banner */}
        {filters.category === 'all' && !filters.searchQuery && filters.type === 'all' && (
          <section className="relative overflow-hidden rounded-3xl sm:rounded-[36px] bg-gradient-to-r from-[#FFF2EB] via-[#FFF9EB] to-[#EBF7FD] p-6 sm:p-10 border-2 border-[#FFD9CA]/80 shadow-xs">
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">✨</span>
                <span className="text-xs font-bold text-[#E06D53] uppercase tracking-wider">
                  This Week's New Printables Dropped
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-800 font-heading leading-tight tracking-tight">
                High-Resolution Coloring & Worksheets for Little Learners
              </h1>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                Color digitally with glitter and rainbow brushes, or print directly on 
                <strong> US Letter & A4</strong> paper with child-safe margins.
              </p>

              {/* Quick Action Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    sound.playPop();
                    setFilters(prev => ({ ...prev, category: 'Coloring Pages' }));
                  }}
                  className="py-3 px-5 bg-[#E06D53] hover:bg-[#cb583f] text-white font-bold text-xs sm:text-sm rounded-2xl shadow-md active:scale-95 transition-all flex items-center gap-2"
                >
                  <Palette className="w-4 h-4" />
                  Explore Coloring Pages
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sound.playPop();
                    setFilters(prev => ({ ...prev, category: 'Alphabet & Letters' }));
                  }}
                  className="py-3 px-5 bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 font-bold text-xs sm:text-sm rounded-2xl shadow-xs active:scale-95 transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-sky-600" />
                  Letter & Number Tracing
                </button>
              </div>
            </div>

            {/* Decorative Vector Clouds */}
            <div className="absolute right-4 -bottom-6 hidden md:flex items-center gap-4 opacity-90 pointer-events-none">
              <div className="w-36 h-48 bg-white rounded-2xl p-2 shadow-lg border border-slate-200 rotate-6 flex flex-col items-center justify-center">
                <span className="text-5xl mb-2">🦖</span>
                <span className="text-[11px] font-bold text-slate-700">T-Rex Jungle</span>
                <span className="text-[9px] text-emerald-600 font-semibold">Ready to Print</span>
              </div>
              <div className="w-36 h-48 bg-white rounded-2xl p-2 shadow-lg border border-slate-200 -rotate-3 flex flex-col items-center justify-center">
                <span className="text-5xl mb-2">🦄</span>
                <span className="text-[11px] font-bold text-slate-700">Starlight Unicorn</span>
                <span className="text-[9px] text-purple-600 font-semibold">Digital Color</span>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 2: Seasonal Automatic Section (Halloween featured) */}
        {filters.category === 'all' && !filters.searchQuery && filters.type === 'all' && (
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">🎃</span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-800 font-heading">
                    Featured Seasonal Pack: Halloween Spooky Cute
                  </h2>
                  <p className="text-xs text-slate-500">
                    Friendly pumpkins, baby ghosts, haunted mazes, and trick-or-treat candy counting
                  </p>
                </div>
              </div>

              {/* Season Switcher Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                {seasonalPacks.map(p => (
                  <button
                    key={p.season}
                    type="button"
                    onClick={() => {
                      sound.playPop();
                      setActiveSeason(p.season);
                    }}
                    className={`py-1.5 px-3 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1 ${
                      activeSeason === p.season
                        ? 'bg-[#E06D53] text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{p.icon}</span>
                    <span>{p.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Seasonal Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {seasonalPrintables.slice(0, 4).map(item => (
                <PrintableCard key={item.id} printable={item} />
              ))}
            </div>
          </section>
        )}

        {/* SECTION 3: Continue Coloring (Unfinished Digital Pages & Recent Art) */}
        {artworks.length > 0 && filters.category === 'all' && !filters.searchQuery && (
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-500" />
                <h3 className="font-heading font-bold text-lg text-slate-800">
                  Recent Artworks & Continue Coloring
                </h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  sound.playPop();
                  setActiveModal('gallery');
                }}
                className="text-xs font-bold text-[#E06D53] hover:underline flex items-center gap-1"
              >
                View Art Gallery ({artworks.length}) <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {artworks.slice(0, 4).map(art => (
                <div
                  key={art.id}
                  onClick={() => {
                    sound.playPop();
                    const p = printables.find(item => item.id === art.printableId);
                    if (p) setColoringPrintable(p);
                  }}
                  className="bg-white rounded-2xl border-2 border-[#FFD9CA] p-2 hover:shadow-md transition-all cursor-pointer flex items-center gap-3 group"
                >
                  <img
                    src={art.previewDataUrl}
                    alt={art.printableTitle}
                    className="w-14 h-16 rounded-xl object-contain bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform"
                  />
                  <div className="truncate">
                    <h4 className="text-xs font-bold text-slate-800 truncate group-hover:text-[#E06D53]">
                      {art.printableTitle}
                    </h4>
                    <span className="text-[10px] text-slate-400">By {art.childName}</span>
                    <span className="text-[10px] font-bold text-[#E06D53] block mt-0.5">
                      Touch to Edit 🎨
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 4: Category Grid with 10 Categories */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 font-heading">
                Browse by Category
              </h2>
              <p className="text-xs text-slate-500">
                10 specialized libraries for coloring, STEM tracing, crafts, and charts
              </p>
            </div>

            {filters.category !== 'all' && (
              <button
                type="button"
                onClick={() => {
                  sound.playPop();
                  setFilters(prev => ({ ...prev, category: 'all' }));
                }}
                className="text-xs font-bold text-[#E06D53] hover:underline flex items-center gap-1"
              >
                Show All Categories
              </button>
            )}
          </div>

          {/* 10 Category Chips / Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {CATEGORIES.map(cat => {
              const isSelected = filters.category === cat.name;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    sound.playPop();
                    setFilters(prev => ({
                      ...prev,
                      category: isSelected ? 'all' : cat.name
                    }));
                  }}
                  className={`p-3.5 rounded-3xl border-2 text-left transition-all active:scale-95 flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#E06D53] bg-[#FFF2EB] shadow-md ring-2 ring-[#FFD9CA]'
                      : 'border-slate-100 bg-white hover:border-slate-200 shadow-xs'
                  }`}
                >
                  <span className="text-3xl mb-2">{cat.icon}</span>
                  <div>
                    <h3 className={`font-heading font-bold text-sm ${isSelected ? 'text-[#E06D53]' : 'text-slate-800'}`}>
                      {cat.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: Filter Bar (Age, Difficulty, Free/Premium, Reset) */}
        <section className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            
            {/* Age Filter Tabs */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Age:
              </span>
              {(['all', '3-4', '5-6', '7-8', '9-10'] as const).map(age => (
                <button
                  key={age}
                  type="button"
                  onClick={() => {
                    sound.playPop();
                    setFilters(prev => ({ ...prev, age }));
                  }}
                  className={`py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
                    filters.age === age
                      ? 'bg-[#2D82B7] text-white shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  {age === 'all' ? 'All Ages' : `Ages ${age}`}
                </button>
              ))}
            </div>

            {/* Difficulty Filter Tabs */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-bold text-slate-500 mr-1">Difficulty:</span>
              {(['all', 'Easy', 'Medium', 'Hard'] as const).map(diff => (
                <button
                  key={diff}
                  type="button"
                  onClick={() => {
                    sound.playPop();
                    setFilters(prev => ({ ...prev, difficulty: diff }));
                  }}
                  className={`py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
                    filters.difficulty === diff
                      ? 'bg-slate-800 text-white shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  {diff === 'all' ? 'Any' : diff}
                </button>
              ))}
            </div>

            {/* Free vs Premium Toggle */}
            <div className="flex items-center gap-1.5">
              {(['all', 'free', 'premium'] as const).map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    sound.playPop();
                    setFilters(prev => ({ ...prev, type: t }));
                  }}
                  className={`py-1.5 px-3 rounded-xl text-xs font-bold transition-all capitalize ${
                    filters.type === t
                      ? 'bg-[#E06D53] text-white shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  {t === 'all' ? 'All Types' : t}
                </button>
              ))}

              {(filters.category !== 'all' || filters.age !== 'all' || filters.difficulty !== 'all' || filters.type !== 'all' || filters.searchQuery) && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="py-1.5 px-2.5 text-xs font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>
              )}
            </div>

          </div>
        </section>

        {/* SECTION 6: Popular This Week Horizontal Scroll (When not filtering) */}
        {filters.category === 'all' && !filters.searchQuery && filters.type === 'all' && (
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl font-bold text-slate-800 font-heading">
                Popular This Week
              </h2>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x">
              {popularPrintables.map(item => (
                <div key={item.id} className="min-w-[240px] max-w-[260px] snap-start shrink-0">
                  <PrintableCard printable={item} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 7: Main Filtered Library Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 font-heading flex items-center gap-2">
              <Layers className="w-6 h-6 text-[#E06D53]" />
              {filters.category !== 'all' ? filters.category : 'Printables Library'}
              <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                {filteredPrintables.length}
              </span>
            </h2>
          </div>

          {filteredPrintables.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white border border-slate-200">
              <span className="text-5xl mb-3 block">🔍</span>
              <h3 className="text-lg font-bold text-slate-700 font-heading mb-1">
                No matching printables found
              </h3>
              <p className="text-xs text-slate-400 mb-4 max-w-sm mx-auto">
                Try loosening your age or category filters, or search for another keyword like "dino", "tracing", or "coloring".
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="py-2.5 px-5 bg-[#E06D53] text-white font-bold text-xs rounded-xl shadow-xs"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredPrintables.map(item => (
                <PrintableCard key={item.id} printable={item} />
              ))}
            </div>
          )}
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 px-4 sm:px-6 mt-16 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎨</span>
            <span className="font-heading font-bold text-slate-800 text-sm">
              PrintPlay Kids
            </span>
            <span className="text-slate-400">· For Parents, Homeschoolers & Teachers</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <span>Edge-Safe 0.25" Margins</span>
            <span>·</span>
            <span>US Letter & A4</span>
            <span>·</span>
            <a
              href="https://etsy.com/shop/PrintPlayKids"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E06D53] transition-colors"
            >
              Etsy Shop Bundles ↗
            </a>
            <span>·</span>
            <span>COPPA & GDPR-K Compliant</span>
          </div>
        </div>
      </footer>

      {/* Active Modals */}
      {selectedPrintable && <PrintableDetailModal />}
      {coloringPrintable && (
        <DigitalColoringStudio
          printable={coloringPrintable}
          onClose={() => setColoringPrintable(null)}
        />
      )}
      {worksheetPrintable && (
        <WorksheetPlayStudio
          printable={worksheetPrintable}
          onClose={() => setWorksheetPrintable(null)}
        />
      )}
      {activeModal === 'profiles' && (
        <ChildProfilesModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === 'parent-zone' && (
        <ParentZoneModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === 'admin' && (
        <AdminDashboard onClose={() => setActiveModal(null)} />
      )}
      {activeModal === 'gallery' && (
        <ArtGalleryModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === 'history' && (
        <PrintHistoryModal onClose={() => setActiveModal(null)} />
      )}

      {/* Security & Onboarding Gates */}
      <ParentGateModal />
      <OnboardingModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
