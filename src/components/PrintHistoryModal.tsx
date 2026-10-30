import React from 'react';
import { useApp } from '../context/AppContext';
import { sound } from '../services/audio';
import { printDirectly } from '../services/pdfService';
import { X, Printer, History, RotateCcw } from 'lucide-react';

export const PrintHistoryModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { printHistory, printables, paperSize, recordPrint } = useApp();

  const handleReprint = (record: any) => {
    sound.playPop();
    const item = printables.find(p => p.id === record.printableId);
    if (!item) return;

    printDirectly(item, record.paperSize || paperSize, record.includedAnswerKey);
    recordPrint(item.id, record.paperSize || paperSize, record.includedAnswerKey);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="relative w-full max-w-xl max-h-[80vh] bg-white rounded-3xl shadow-2xl border-4 border-[#C8EED4] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100 bg-[#FAFAF8] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#F2FBF5] text-[#2E8540]">
              <History className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 font-heading">
                Print History
              </h2>
              <p className="text-xs text-slate-400">
                Quickly re-print sheets you’ve used before
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

        {/* List */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-3">
          {printHistory.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-xs">
              No print history recorded yet. Tap "Print This" on any sheet to print!
            </div>
          ) : (
            printHistory.map(rec => {
              const matchedPrintable = printables.find(p => p.id === rec.printableId);
              return (
                <div
                  key={rec.id}
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 hover:border-[#2E8540] bg-white hover:bg-slate-50 transition-all shadow-xs"
                >
                  <div className="flex items-center gap-3 truncate pr-2">
                    {matchedPrintable && (
                      <div
                        className="w-10 h-12 rounded-lg bg-slate-100 p-1 flex items-center justify-center shrink-0 overflow-hidden"
                        dangerouslySetInnerHTML={{ __html: matchedPrintable.svgContent }}
                      />
                    )}
                    <div className="truncate">
                      <h4 className="text-xs font-bold text-slate-800 truncate">
                        {rec.printableTitle}
                      </h4>
                      <span className="text-[11px] text-slate-400 block">
                        Printed {rec.timestamp} · {rec.paperSize} {rec.includedAnswerKey ? '· with answer key' : ''}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleReprint(rec)}
                    className="py-2 px-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs active:scale-95 transition-all flex items-center gap-1.5 shrink-0"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Re-print
                  </button>
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};
