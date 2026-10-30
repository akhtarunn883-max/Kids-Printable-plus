import React from 'react';
import { Printable } from '../types';
import { useApp } from '../context/AppContext';
import { printDirectly } from '../services/pdfService';
import { sound } from '../services/audio';
import { Heart, Printer, Palette, Sparkles, Star } from 'lucide-react';

export const PrintableCard: React.FC<{ printable: Printable }> = ({ printable }) => {
  const {
    role,
    isFavorite,
    toggleFavorite,
    recordPrint,
    paperSize,
    setSelectedPrintable,
    setColoringPrintable,
    setWorksheetPrintable
  } = useApp();

  const favorite = isFavorite(printable.id);

  const handlePrintClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playPop();
    printDirectly(printable, paperSize, false);
    recordPrint(printable.id, paperSize, false);
  };

  const handleCardClick = () => {
    sound.playPop();
    setSelectedPrintable(printable);
  };

  const handleInteractiveLaunch = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playPop();
    if (printable.type === 'coloring') {
      setColoringPrintable(printable);
    } else {
      setWorksheetPrintable(printable);
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(printable.id);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative flex flex-col bg-white rounded-3xl p-3.5 border-2 border-slate-100 hover:border-[#FFD9CA] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1"
    >
      {/* Top Banner/Status (unboxed quiet metadata) */}
      <div className="flex items-center justify-between gap-2 px-1 mb-2 text-xs font-semibold text-slate-500">
        <div className="flex items-center gap-1.5 truncate">
          <span className="text-slate-800">{printable.category}</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Ages {printable.ageRange}</span>
        </div>

        {printable.isPremium ? (
          <span className="flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
            Premium
          </span>
        ) : (
          <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
            Free
          </span>
        )}
      </div>

      {/* SVG Line-art Thumbnail Container */}
      <div className="relative aspect-4/5 w-full bg-[#FAFAF8] rounded-2xl border border-slate-200/80 flex items-center justify-center p-3 overflow-hidden group-hover:bg-white transition-colors">
        <div
          className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 pointer-events-none"
          dangerouslySetInnerHTML={{ __html: printable.svgContent }}
        />

        {/* Favorite Heart Button */}
        <button
          type="button"
          onClick={handleFavoriteClick}
          aria-label={favorite ? 'Remove favorite' : 'Add favorite'}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full transition-transform active:scale-80 shadow-xs ${
            favorite
              ? 'bg-rose-50 text-rose-500'
              : 'bg-white/90 text-slate-400 hover:text-rose-400 hover:bg-white'
          }`}
        >
          <Heart className={`w-4 h-4 ${favorite ? 'fill-current' : ''}`} />
        </button>

        {/* Floating Quick Action Overlay */}
        <div className="absolute inset-x-2 bottom-2 flex items-center gap-2 opacity-95 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
          <button
            type="button"
            onClick={handleInteractiveLaunch}
            className="flex-1 min-h-[44px] py-2 px-3 text-xs font-bold text-white bg-[#E06D53] hover:bg-[#c95a43] rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5"
          >
            <Palette className="w-4 h-4" />
            {role === 'child' ? 'Color Now!' : 'Color in App'}
          </button>

          {role !== 'child' && (
            <button
              type="button"
              onClick={handlePrintClick}
              title="One-Tap Print"
              aria-label="One tap print this worksheet"
              className="min-h-[44px] min-w-[44px] p-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#E06D53] border border-slate-200 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center"
            >
              <Printer className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="pt-3 px-1 flex flex-col flex-1 justify-between">
        <h3 className="font-heading font-bold text-base text-slate-800 line-clamp-1 group-hover:text-[#E06D53] transition-colors">
          {printable.title}
        </h3>

        {/* Skills subtle listing */}
        <p className="mt-1 text-xs text-slate-400 line-clamp-1">
          {printable.skills.join(' · ')}
        </p>

        {/* Bundle link tag if part of bundle (Parent/Teacher view only) */}
        {role !== 'child' && printable.bundleTitle && (
          <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-amber-700 font-medium">
            <span className="truncate">Part of Etsy Bundle</span>
            <span className="font-bold">Etsy ↗</span>
          </div>
        )}
      </div>
    </div>
  );
};
