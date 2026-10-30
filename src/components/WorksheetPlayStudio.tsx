import React, { useState, useRef, useEffect } from 'react';
import { Printable } from '../types';
import { useApp } from '../context/AppContext';
import { sound } from '../services/audio';
import { printDirectly } from '../services/pdfService';
import confetti from 'canvas-confetti';
import {
  X,
  RotateCcw,
  Star,
  Printer,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Undo
} from 'lucide-react';

export const WorksheetPlayStudio: React.FC<{ printable: Printable; onClose: () => void }> = ({
  printable,
  onClose
}) => {
  const { paperSize, recordPrint, activeChild } = useApp();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isTracingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const [strokeCount, setStrokeCount] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setStrokeCount(0);
    setHasCompleted(false);
  }, [printable.id]);

  const getCanvasCoords = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  const handleStartTrace = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    isTracingRef.current = true;
    lastPointRef.current = getCanvasCoords(e);
    sound.playPop();
  };

  const handleTraceMove = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isTracingRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const currentCoords = getCanvasCoords(e);
    const lastCoords = lastPointRef.current || currentCoords;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#2563EB'; // Vibrant tracing ink

    ctx.beginPath();
    ctx.moveTo(lastCoords.x, lastCoords.y);
    ctx.lineTo(currentCoords.x, currentCoords.y);
    ctx.stroke();

    lastPointRef.current = currentCoords;
  };

  const handleEndTrace = () => {
    if (!isTracingRef.current) return;
    isTracingRef.current = false;
    lastPointRef.current = null;
    const nextCount = strokeCount + 1;
    setStrokeCount(nextCount);

    // Trigger gentle star completion after 4 or more confident strokes
    if (nextCount >= 3 && !hasCompleted) {
      setHasCompleted(true);
      sound.playStarChime();
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.5 }
      });
    }
  };

  const handleClear = () => {
    sound.playPop();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    setStrokeCount(0);
    setHasCompleted(false);
  };

  const handlePrint = () => {
    sound.playPop();
    printDirectly(printable, paperSize, false);
    recordPrint(printable.id, paperSize, false);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#F4F4F0] overflow-hidden select-none">
      
      {/* Top Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white border-b-2 border-slate-200 shadow-xs shrink-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[48px] min-w-[48px] p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-2xl transition-transform active:scale-90"
            aria-label="Back to library"
          >
            <X className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-slate-800 font-heading truncate max-w-[180px] sm:max-w-md">
              {printable.title}
            </h1>
            <span className="text-xs text-slate-400">
              Interactive Digital Worksheet Mode
            </span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-2">
          {printable.answerKeySvg && (
            <button
              type="button"
              onClick={() => {
                sound.playPop();
                setShowAnswerKey(!showAnswerKey);
              }}
              className={`min-h-[44px] py-2 px-3 rounded-2xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                showAnswerKey
                  ? 'bg-purple-100 text-purple-700 border-purple-300'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Answer Key</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleClear}
            title="Erase my lines"
            className="min-h-[44px] min-w-[44px] p-2.5 rounded-2xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center gap-1"
          >
            <RotateCcw className="w-5 h-5" />
            <span className="text-xs font-bold hidden sm:inline">Clear</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="min-h-[44px] py-2 px-3.5 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>Print Sheet</span>
          </button>
        </div>
      </header>

      {/* Main Play Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-3 sm:p-6 overflow-hidden relative">
        
        {/* Star Achievement Pop-up */}
        {hasCompleted && (
          <div className="absolute top-6 z-20 px-6 py-3 bg-white/95 backdrop-blur-xs rounded-full shadow-xl border-2 border-amber-300 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
            <span className="text-2xl animate-spin">⭐</span>
            <div>
              <h4 className="text-sm font-bold text-amber-900 font-heading">
                Fantastic Job, {activeChild?.name || 'Superstar'}!
              </h4>
              <p className="text-xs text-amber-700">You traced it beautifully!</p>
            </div>
            <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
          </div>
        )}

        {/* Central Worksheet Canvas & SVG Layer */}
        <div className="relative w-full max-w-[580px] aspect-4/5 bg-white rounded-3xl shadow-xl border-4 border-slate-200 overflow-hidden flex items-center justify-center">
          
          {/* Base SVG Layer (Shows Answer Key or Regular Sheet) */}
          <div
            className="absolute inset-0 w-full h-full p-4 flex items-center justify-center pointer-events-none"
            dangerouslySetInnerHTML={{
              __html: showAnswerKey && printable.answerKeySvg ? printable.answerKeySvg : printable.svgContent
            }}
          />

          {/* Interactive Tracing Canvas */}
          <canvas
            ref={canvasRef}
            width={1000}
            height={1300}
            onMouseDown={handleStartTrace}
            onMouseMove={handleTraceMove}
            onMouseUp={handleEndTrace}
            onMouseLeave={handleEndTrace}
            onTouchStart={handleStartTrace}
            onTouchMove={handleTraceMove}
            onTouchEnd={handleEndTrace}
            className="absolute inset-0 w-full h-full pointer-events-auto cursor-crosshair opacity-85"
          />
        </div>

        {/* Guided instructions tip */}
        <div className="mt-3 px-4 py-2 rounded-2xl bg-white/80 border border-slate-200/80 text-xs text-slate-600 flex items-center gap-2">
          <span>👆 Use your finger or mouse to trace the lines and numbers!</span>
        </div>
      </div>
    </div>
  );
};
