import React from 'react';
import { useApp } from '../context/AppContext';
import { sound } from '../services/audio';
import { X, Printer, Trash2, Palette, Sparkles } from 'lucide-react';

export const ArtGalleryModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { artworks, deleteArtwork, activeChild, setColoringPrintable, printables } = useApp();

  const childArtworks = activeChild
    ? artworks.filter(a => a.childId === activeChild.id)
    : artworks;

  const handlePrint = (artwork: any) => {
    sound.playPop();
    const printFrame = document.createElement('iframe');
    printFrame.style.position = 'fixed';
    printFrame.style.right = '0';
    printFrame.style.bottom = '0';
    printFrame.style.width = '0';
    printFrame.style.height = '0';
    printFrame.style.border = '0';
    document.body.appendChild(printFrame);

    const frameDoc = printFrame.contentWindow?.document;
    if (!frameDoc) return;

    frameDoc.open();
    frameDoc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${artwork.printableTitle} by ${artwork.childName}</title>
          <style>
            @page { size: letter portrait; margin: 0.25in; }
            body { font-family: sans-serif; text-align: center; margin: 0; padding: 0.2in; }
            h1 { margin: 0 0 10px 0; font-size: 24px; color: #1E293B; }
            p { margin: 0 0 20px 0; color: #64748B; font-size: 14px; }
            img { max-width: 100%; max-height: 80vh; object-fit: contain; border: 2px dashed #CBD5E1; border-radius: 12px; }
          </style>
        </head>
        <body>
          <h1>${artwork.printableTitle}</h1>
          <p>Masterpiece colored by ${artwork.childName} · PrintPlay Kids</p>
          <img src="${artwork.previewDataUrl}" alt="Colored artwork" />
        </body>
      </html>
    `);
    frameDoc.close();

    setTimeout(() => {
      printFrame.contentWindow?.focus();
      printFrame.contentWindow?.print();
      setTimeout(() => document.body.removeChild(printFrame), 2000);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border-4 border-[#FFD9CA] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100 bg-[#FAFAF8] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#FFF2EB] text-[#E06D53]">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 font-heading">
                {activeChild?.name ? `${activeChild.name}'s Art Gallery` : 'My Art Gallery'} {activeChild?.avatar}
              </h2>
              <p className="text-xs text-slate-400">
                {childArtworks.length} saved colored masterpieces
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Gallery Content */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
          {childArtworks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <span className="text-6xl mb-4">🎨</span>
              <h3 className="text-lg font-bold text-slate-700 font-heading mb-1">
                No artworks saved yet!
              </h3>
              <p className="text-xs text-slate-400 max-w-xs mb-6">
                Pick any coloring page from the library, color it with brushes or the bucket tool, and tap "Save Art" to see it here!
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  const firstColoring = printables.find(p => p.type === 'coloring');
                  if (firstColoring) setColoringPrintable(firstColoring);
                }}
                className="py-3 px-6 bg-[#E06D53] hover:bg-[#cb583f] text-white font-bold text-sm rounded-2xl shadow-md active:scale-95 transition-all"
              >
                Start Coloring Now
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {childArtworks.map(art => (
                <div
                  key={art.id}
                  className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group"
                >
                  <div className="aspect-4/5 bg-slate-50 flex items-center justify-center p-3 overflow-hidden border-b border-slate-100">
                    <img
                      src={art.previewDataUrl}
                      alt={art.printableTitle}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <div className="truncate pr-2">
                      <h4 className="text-xs font-bold text-slate-800 truncate">
                        {art.printableTitle}
                      </h4>
                      <span className="text-[10px] text-slate-400">{art.completedDate}</span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => handlePrint(art)}
                        className="p-1.5 text-slate-600 hover:text-sky-600 rounded-lg hover:bg-slate-100"
                        title="Print this artwork"
                      >
                        <Printer className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          sound.playPop();
                          deleteArtwork(art.id);
                        }}
                        className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-slate-100"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
