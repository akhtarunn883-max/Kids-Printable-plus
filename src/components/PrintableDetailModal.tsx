import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { printDirectly, downloadPdfFile } from '../services/pdfService';
import { sound } from '../services/audio';
import {
  X,
  Printer,
  Download,
  Palette,
  Heart,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  Layers,
  Sparkles,
  Check
} from 'lucide-react';

export const PrintableDetailModal: React.FC = () => {
  const {
    role,
    selectedPrintable,
    setSelectedPrintable,
    paperSize,
    setPaperSize,
    recordPrint,
    isFavorite,
    toggleFavorite,
    setColoringPrintable,
    setWorksheetPrintable,
    printables,
    openParentGate
  } = useApp();

  const [includeAnswerKey, setIncludeAnswerKey] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!selectedPrintable) return null;

  const favorite = isFavorite(selectedPrintable.id);

  const handleClose = () => {
    sound.playPop();
    setSelectedPrintable(null);
  };

  const handlePrint = () => {
    sound.playPop();
    printDirectly(selectedPrintable, paperSize, includeAnswerKey);
    recordPrint(selectedPrintable.id, paperSize, includeAnswerKey);
  };

  const handleDownload = async () => {
    sound.playPop();
    setIsDownloading(true);
    try {
      await downloadPdfFile(selectedPrintable, paperSize, includeAnswerKey);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 2500);
    } catch (err) {
      console.error(err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleStartDigital = () => {
    sound.playStarChime();
    const p = selectedPrintable;
    setSelectedPrintable(null);
    if (p.type === 'coloring') {
      setColoringPrintable(p);
    } else {
      setWorksheetPrintable(p);
    }
  };

  const handleEtsyLink = (url: string) => {
    // If not child, allow open in new tab
    if (role === 'child') return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Recommendations "More like this"
  const moreLikeThis = printables
    .filter(p => p.id !== selectedPrintable.id && (p.category === selectedPrintable.category || p.ageRange === selectedPrintable.ageRange))
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl sm:rounded-[36px] shadow-2xl border-4 border-[#FFD9CA] overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100 bg-[#FAFAF8]">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-2xl bg-[#FFF2EB] text-[#E06D53]">
              <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-2xl font-bold text-slate-800 font-heading">
                {selectedPrintable.title}
              </h2>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                <span>{selectedPrintable.category}</span>
                <span aria-hidden="true">·</span>
                <span>Ages {selectedPrintable.ageRange}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedPrintable.difficulty}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => toggleFavorite(selectedPrintable.id)}
              className={`p-2.5 rounded-full transition-transform active:scale-90 ${
                favorite ? 'text-rose-500 bg-rose-50' : 'text-slate-400 hover:text-rose-400 hover:bg-slate-100'
              }`}
              title="Add to Favorites"
            >
              <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="p-2.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body: Left Preview, Right Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-4 sm:p-8">
          
          {/* Left Column: Scalable Preview Image Container */}
          <div className="md:col-span-6 flex flex-col items-center">
            <div className="relative w-full aspect-4/5 bg-[#FAFAF8] rounded-3xl border-2 border-slate-200/80 p-4 sm:p-6 flex items-center justify-center overflow-hidden shadow-inner">
              <div
                className="w-full h-full flex items-center justify-center transition-transform duration-200"
                style={{ transform: `scale(${zoomLevel})` }}
                dangerouslySetInnerHTML={{ __html: selectedPrintable.svgContent }}
              />

              {/* Zoom Controls */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 p-1 bg-white/95 rounded-2xl shadow-md border border-slate-200">
                <button
                  type="button"
                  onClick={() => setZoomLevel(prev => Math.max(0.8, prev - 0.2))}
                  className="p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-bold text-slate-600 px-1">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setZoomLevel(prev => Math.min(1.8, prev + 0.2))}
                  className="p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Answer Key preview available note */}
            {selectedPrintable.answerKeySvg && (
              <p className="text-xs text-emerald-700 mt-2 font-medium flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Answer key included for teachers & parents
              </p>
            )}
          </div>

          {/* Right Column: Actions & Configuration */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedPrintable.description}
              </p>

              {/* Learning Skills list */}
              <div className="mt-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Skills Practiced
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPrintable.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Paper Format & Answer Key Settings (Parent/Teacher View) */}
              {role !== 'child' && (
                <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">Paper Standard:</span>
                    <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-slate-200">
                      {(['US Letter', 'A4'] as const).map(size => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setPaperSize(size)}
                          className={`py-1 px-3 text-xs font-bold rounded-lg transition-all ${
                            paperSize === size
                              ? 'bg-[#E06D53] text-white shadow-xs'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedPrintable.answerKeySvg && (
                    <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                      <span className="text-xs font-bold text-slate-700">Print with Answer Key:</span>
                      <button
                        type="button"
                        onClick={() => setIncludeAnswerKey(!includeAnswerKey)}
                        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                          includeAnswerKey ? 'bg-emerald-500' : 'bg-slate-300'
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                            includeAnswerKey ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Etsy Bundle Banner (Only visible in Parent Mode) */}
              {role !== 'child' && selectedPrintable.bundleTitle && (
                <div
                  onClick={() => selectedPrintable.etsyUrl && handleEtsyLink(selectedPrintable.etsyUrl)}
                  className="mt-4 p-4 rounded-2xl bg-[#FFF9EB] border-2 border-[#FDE7AA] flex items-center justify-between cursor-pointer hover:bg-[#FFF3D1] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎁</span>
                    <div>
                      <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wide block">
                        Get the Full Bundle on Etsy
                      </span>
                      <span className="text-xs font-bold text-slate-800">
                        {selectedPrintable.bundleTitle}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-amber-700 shrink-0" />
                </div>
              )}
            </div>

            {/* Action Buttons Grid */}
            <div className="space-y-2.5 pt-4">
              {/* Primary: Color in App */}
              <button
                type="button"
                onClick={handleStartDigital}
                className="w-full min-h-[52px] py-3.5 px-6 text-base font-bold text-white bg-[#E06D53] hover:bg-[#c95941] rounded-2xl shadow-lg active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <Palette className="w-5 h-5" />
                {role === 'child' ? 'Color or Play Now! 🎨' : 'Color or Play in App'}
              </button>

              {role !== 'child' && (
                <div className="grid grid-cols-2 gap-3">
                  {/* One-Tap Native Print */}
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="min-h-[48px] py-3 px-4 text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-2xl shadow-xs active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    <Printer className="w-4 h-4 text-[#E06D53]" />
                    Print This ({paperSize})
                  </button>

                  {/* Download PDF */}
                  <button
                    type="button"
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="min-h-[48px] py-3 px-4 text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-2xl shadow-xs active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    {downloadSuccess ? (
                      <Check className="w-4 h-4 text-emerald-600 animate-bounce" />
                    ) : (
                      <Download className="w-4 h-4 text-sky-600" />
                    )}
                    {downloadSuccess ? 'Downloaded!' : isDownloading ? 'Preparing...' : 'Download PDF'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom "More like this" Recommendations */}
        <div className="p-4 sm:p-6 bg-[#FAFAF8] border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
            More Printables Like This
          </span>
          <div className="grid grid-cols-3 gap-3">
            {moreLikeThis.map(item => (
              <div
                key={item.id}
                onClick={() => {
                  sound.playPop();
                  setSelectedPrintable(item);
                }}
                className="flex items-center gap-2 p-2 rounded-2xl bg-white border border-slate-200/80 hover:border-[#FFD9CA] cursor-pointer hover:shadow-md transition-all group"
              >
                <div
                  className="w-12 h-14 bg-slate-50 rounded-xl p-1 flex items-center justify-center shrink-0 overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: item.svgContent }}
                />
                <div className="truncate">
                  <h4 className="text-xs font-bold text-slate-800 truncate group-hover:text-[#E06D53] transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-slate-400">Ages {item.ageRange}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
