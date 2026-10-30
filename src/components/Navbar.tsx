import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { sound } from '../services/audio';
import {
  Search,
  Heart,
  History,
  Palette,
  ShieldCheck,
  User,
  Volume2,
  VolumeX,
  Music,
  Lock,
  Sparkles,
  SlidersHorizontal,
  X
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    role,
    setRole,
    activeChild,
    favorites,
    paperSize,
    setPaperSize,
    filters,
    setFilters,
    soundEnabled,
    toggleSound,
    musicEnabled,
    toggleMusic,
    setActiveModal,
    openParentGate,
    printables
  } = useApp();

  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  // Search suggestions logic
  const searchSuggestions = [
    'dinosaur coloring',
    'letter tracing',
    'counting 1-20',
    'halloween maze',
    'scissor skills',
    'daily chore chart',
    'arabic alphabet',
    'unicorn magic'
  ].filter(s => s.toLowerCase().includes(filters.searchQuery.toLowerCase().trim()) && s !== filters.searchQuery);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setShowSearchSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleParentZoneClick = () => {
    sound.playPop();
    openParentGate(() => {
      setActiveModal('parent-zone');
    });
  };

  const handleAdminClick = () => {
    sound.playPop();
    openParentGate(() => {
      setActiveModal('admin');
    });
  };

  const handleExitChildMode = () => {
    sound.playPop();
    openParentGate(() => {
      setRole('parent');
    });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-slate-100 shadow-xs">
      {/* Top Banner for Child Mode */}
      {role === 'child' && (
        <div className="bg-[#FFF2EB] border-b border-[#FFD9CA] px-4 py-1.5 flex items-center justify-between text-xs font-bold text-[#E06D53]">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎈</span>
            <span>Kid Mode Active · Showing age-friendly printables for {activeChild?.name} ({activeChild?.age} yrs)</span>
          </div>
          <button
            type="button"
            onClick={handleExitChildMode}
            className="flex items-center gap-1 text-[11px] font-bold text-slate-600 bg-white/90 hover:bg-white px-2.5 py-1 rounded-full border border-[#FFD9CA] active:scale-95 transition-all shadow-xs"
          >
            <Lock className="w-3 h-3 text-[#E06D53]" />
            Exit to Grown-up Mode
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Slogan */}
        <div
          onClick={() => {
            sound.playPop();
            setFilters(prev => ({ ...prev, category: 'all', searchQuery: '', age: 'all', season: 'all' }));
          }}
          className="flex items-center gap-2.5 cursor-pointer select-none group shrink-0"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#FFB7A1] to-[#FFD9CA] flex items-center justify-center text-2xl shadow-xs group-hover:rotate-6 transition-transform">
            🎨
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-bold font-heading text-slate-800 tracking-tight flex items-center gap-1">
              PrintPlay <span className="text-[#E06D53]">Kids</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 block -mt-1 tracking-wide">
              Printable Learning & Coloring Library
            </span>
          </div>
        </div>

        {/* Search Bar with Autocomplete Suggestions */}
        {role !== 'child' && (
          <div ref={searchContainerRef} className="relative flex-1 max-w-md hidden md:block">
            <div className="relative flex items-center">
              <Search className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={filters.searchQuery}
                onFocus={() => setShowSearchSuggestions(true)}
                onChange={e => {
                  setFilters(prev => ({ ...prev, searchQuery: e.target.value }));
                  setShowSearchSuggestions(true);
                }}
                placeholder="Search coloring, tracing, math, mazes..."
                className="w-full h-11 pl-10 pr-9 bg-[#F5F5F0] hover:bg-[#EFEFEA] focus:bg-white border border-transparent focus:border-[#FFD9CA] rounded-2xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FFD9CA] transition-all"
              />
              {filters.searchQuery && (
                <button
                  type="button"
                  onClick={() => setFilters(prev => ({ ...prev, searchQuery: '' }))}
                  className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Suggestions Dropdown */}
            {showSearchSuggestions && searchSuggestions.length > 0 && (
              <div className="absolute top-12 left-0 right-0 bg-white rounded-2xl border border-slate-200 shadow-xl p-2 z-50">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 block">
                  Popular Searches
                </span>
                {searchSuggestions.slice(0, 4).map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      sound.playPop();
                      setFilters(prev => ({ ...prev, searchQuery: item }));
                      setShowSearchSuggestions(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-[#FFF2EB] hover:text-[#E06D53] rounded-xl transition-colors flex items-center gap-2"
                  >
                    <Search className="w-3.5 h-3.5 text-slate-400" />
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Right Nav Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          
          {/* Child Mode: Super Simple Chunky Buttons */}
          {role === 'child' ? (
            <>
              {/* My Art Gallery */}
              <button
                type="button"
                onClick={() => {
                  sound.playPop();
                  setActiveModal('gallery');
                }}
                className="min-h-[48px] py-2.5 px-4 bg-[#FFF2EB] hover:bg-[#FFE5D8] text-[#E06D53] border-2 border-[#FFD9CA] rounded-2xl font-bold text-sm shadow-xs active:scale-95 transition-all flex items-center gap-2"
              >
                <Palette className="w-5 h-5" />
                <span className="hidden sm:inline">My Art Gallery</span>
              </button>

              {/* Profile Badge */}
              <button
                type="button"
                onClick={() => {
                  sound.playPop();
                  setActiveModal('profiles');
                }}
                className="min-h-[48px] py-2 px-3.5 bg-white border-2 border-slate-200 hover:border-[#2D82B7] rounded-2xl font-bold text-sm shadow-xs active:scale-95 transition-all flex items-center gap-2"
              >
                <span className="text-2xl">{activeChild?.avatar || '🦁'}</span>
                <span className="text-slate-800 hidden sm:inline">{activeChild?.name || 'Kid Profile'}</span>
              </button>
            </>
          ) : (
            /* Parent / Educator Controls */
            <>
              {/* Audio Controls */}
              <div className="hidden sm:flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
                <button
                  type="button"
                  onClick={toggleSound}
                  title="Toggle Sound Effects"
                  className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-white transition-colors"
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={toggleMusic}
                  title="Toggle Soft Background Music"
                  className={`p-1.5 rounded-lg transition-colors ${
                    musicEnabled ? 'text-purple-600 bg-purple-50' : 'text-slate-500 hover:text-slate-800 hover:bg-white'
                  }`}
                >
                  <Music className="w-4 h-4" />
                </button>
              </div>

              {/* Paper Format (US Letter vs A4) */}
              <div className="hidden lg:flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
                {(['US Letter', 'A4'] as const).map(size => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => {
                      sound.playPop();
                      setPaperSize(size);
                    }}
                    className={`py-1 px-2.5 text-xs font-bold rounded-lg transition-all ${
                      paperSize === size
                        ? 'bg-white text-slate-800 shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Favorites */}
              <button
                type="button"
                onClick={() => {
                  sound.playPop();
                  setFilters(prev => ({
                    ...prev,
                    type: prev.type === 'favorites' ? 'all' : 'favorites'
                  }));
                }}
                title="Saved Favorites"
                className={`min-h-[44px] min-w-[44px] p-2.5 rounded-2xl border transition-all flex items-center justify-center relative ${
                  filters.type === 'favorites'
                    ? 'bg-rose-50 border-rose-300 text-rose-600'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Heart className={`w-5 h-5 ${filters.type === 'favorites' ? 'fill-current' : ''}`} />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </button>

              {/* Print History */}
              <button
                type="button"
                onClick={() => {
                  sound.playPop();
                  setActiveModal('history');
                }}
                title="Print History"
                className="min-h-[44px] min-w-[44px] p-2.5 rounded-2xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                <History className="w-5 h-5" />
              </button>

              {/* Profiles Switcher */}
              <button
                type="button"
                onClick={() => {
                  sound.playPop();
                  setActiveModal('profiles');
                }}
                title="Child Profiles"
                className="min-h-[44px] py-2 px-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <span>{activeChild?.avatar || '🦁'}</span>
                <span className="hidden sm:inline">{activeChild?.name || 'Profiles'}</span>
              </button>

              {/* Child Mode Switcher */}
              <button
                type="button"
                onClick={() => setRole('child')}
                className="min-h-[44px] py-2 px-3.5 bg-[#EBF7FD] hover:bg-[#d9effa] text-[#2D82B7] border border-[#BCE3FA] rounded-2xl font-bold text-xs shadow-xs active:scale-95 transition-all flex items-center gap-1.5"
              >
                <Palette className="w-4 h-4" />
                <span className="hidden sm:inline">Child Mode</span>
              </button>

              {/* Parent Zone Button (Guarded) */}
              <button
                type="button"
                onClick={handleParentZoneClick}
                className="min-h-[44px] py-2 px-3.5 bg-[#E06D53] hover:bg-[#cb583f] text-white rounded-2xl font-bold text-xs shadow-md active:scale-95 transition-all flex items-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4" />
                <span className="hidden sm:inline">Parent Zone</span>
              </button>

              {/* Admin Button (Guarded) */}
              <button
                type="button"
                onClick={handleAdminClick}
                title="Admin Dashboard"
                className="min-h-[44px] min-w-[44px] p-2.5 rounded-2xl border border-slate-200 bg-slate-900 text-amber-400 hover:bg-slate-800 transition-all flex items-center justify-center"
              >
                <Lock className="w-4 h-4" />
              </button>
            </>
          )}

        </div>
      </div>
    </header>
  );
};
