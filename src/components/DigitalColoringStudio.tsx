import React, { useState, useRef, useEffect } from 'react';
import { Printable } from '../types';
import { useApp } from '../context/AppContext';
import { sound } from '../services/audio';
import { printDirectly } from '../services/pdfService';
import confetti from 'canvas-confetti';
import {
  X,
  RotateCcw,
  RotateCw,
  Trash2,
  Save,
  Printer,
  Music,
  PaintBucket,
  Brush,
  Eraser,
  Sparkles,
  Volume2,
  VolumeX,
  Check
} from 'lucide-react';

const PALETTE = [
  '#EF4444', '#F97316', '#F59E0B', '#EAB308', '#84CC16', '#22C55E',
  '#10B981', '#14B8A6', '#06B6D4', '#0EA5E9', '#3B82F6', '#6366F1',
  '#8B5CF6', '#A855F7', '#D946EF', '#EC4899', '#F43F5E', '#FB7185',
  '#78350F', '#B45309', '#1E293B', '#64748B', '#94A3B8', '#FFFFFF'
];

type ToolType = 'bucket' | 'brush' | 'rainbow' | 'glitter' | 'eraser';
type BrushSize = 'small' | 'medium' | 'large';

interface ActionStep {
  type: 'fill' | 'draw';
  targetId?: string;
  prevColor?: string;
  newColor?: string;
  canvasSnapshot?: string;
}

export const DigitalColoringStudio: React.FC<{ printable: Printable; onClose: () => void }> = ({
  printable,
  onClose
}) => {
  const {
    activeChild,
    saveArtwork,
    paperSize,
    musicEnabled,
    toggleMusic,
    soundEnabled,
    toggleSound
  } = useApp();

  const [activeTool, setActiveTool] = useState<ToolType>('bucket');
  const [selectedColor, setSelectedColor] = useState<string>('#EF4444');
  const [brushSize, setBrushSize] = useState<BrushSize>('medium');
  const [colorMap, setColorMap] = useState<Record<string, string>>({});
  const [history, setHistory] = useState<ActionStep[]>([]);
  const [redoStack, setRedoStack] = useState<ActionStep[]>([]);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  // Drawing Canvas Ref for freehand brush & glitter
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const strokeStepRef = useRef(0);

  const brushWidths = {
    small: 6,
    medium: 14,
    large: 26
  };

  // Initialize and clear canvas when printable changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setColorMap({});
    setHistory([]);
    setRedoStack([]);
    setIsSaved(false);
  }, [printable.id]);

  // Handle Bucket Fill on SVG colorable elements
  const handleSvgClick = (e: React.MouseEvent<HTMLElement>) => {
    if (activeTool !== 'bucket') return;

    const target = e.target as HTMLElement;
    // Look for colorable target or closest colorable path/shape
    const targetElement = target.closest('.colorable, path, circle, polygon, rect, ellipse') as HTMLElement | null;

    if (targetElement && targetElement.id) {
      sound.playPop();
      const id = targetElement.id;
      const prev = colorMap[id] || targetElement.getAttribute('fill') || '#FFFFFF';

      const newColor = selectedColor;
      setColorMap(prevMap => ({ ...prevMap, [id]: newColor }));

      const action: ActionStep = {
        type: 'fill',
        targetId: id,
        prevColor: prev,
        newColor: newColor
      };
      setHistory(prevStack => [...prevStack, action]);
      setRedoStack([]);
    }
  };

  // Canvas Drawing Handlers (Brush, Rainbow, Glitter, Eraser)
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

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (activeTool === 'bucket') return;
    isDrawingRef.current = true;
    const coords = getCanvasCoords(e);
    lastPointRef.current = coords;
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || activeTool === 'bucket') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const currentCoords = getCanvasCoords(e);
    const lastCoords = lastPointRef.current || currentCoords;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = brushWidths[brushSize];

    if (activeTool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.moveTo(lastCoords.x, lastCoords.y);
      ctx.lineTo(currentCoords.x, currentCoords.y);
      ctx.stroke();
      ctx.globalCompositeOperation = 'source-over';
    } else if (activeTool === 'rainbow') {
      strokeStepRef.current += 10;
      const hue = strokeStepRef.current % 360;
      ctx.strokeStyle = `hsl(${hue}, 90%, 55%)`;
      ctx.beginPath();
      ctx.moveTo(lastCoords.x, lastCoords.y);
      ctx.lineTo(currentCoords.x, currentCoords.y);
      ctx.stroke();
    } else if (activeTool === 'glitter') {
      // Glitter / Sparkle effect
      ctx.strokeStyle = selectedColor;
      ctx.beginPath();
      ctx.moveTo(lastCoords.x, lastCoords.y);
      ctx.lineTo(currentCoords.x, currentCoords.y);
      ctx.stroke();

      // Sprinkle sparkling stars
      if (Math.random() > 0.4) {
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(
          currentCoords.x + (Math.random() * 14 - 7),
          currentCoords.y + (Math.random() * 14 - 7),
          Math.random() * 3 + 1,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    } else {
      // Solid Brush
      ctx.strokeStyle = selectedColor;
      ctx.beginPath();
      ctx.moveTo(lastCoords.x, lastCoords.y);
      ctx.lineTo(currentCoords.x, currentCoords.y);
      ctx.stroke();
    }

    lastPointRef.current = currentCoords;
  };

  const stopDrawing = () => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    lastPointRef.current = null;

    const canvas = canvasRef.current;
    if (canvas) {
      const snapshot = canvas.toDataURL();
      setHistory(prev => [...prev, { type: 'draw', canvasSnapshot: snapshot }]);
      setRedoStack([]);
    }
  };

  // Undo Functionality
  const handleUndo = () => {
    if (history.length === 0) return;
    sound.playPop();

    const lastAction = history[history.length - 1];
    setRedoStack(prev => [...prev, lastAction]);
    setHistory(prev => prev.slice(0, -1));

    if (lastAction.type === 'fill' && lastAction.targetId) {
      setColorMap(prev => ({
        ...prev,
        [lastAction.targetId!]: lastAction.prevColor || '#FFFFFF'
      }));
    } else if (lastAction.type === 'draw') {
      // Revert canvas to previous draw step
      const previousDraw = [...history]
        .slice(0, -1)
        .reverse()
        .find(h => h.type === 'draw');

      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          if (previousDraw && previousDraw.canvasSnapshot) {
            const img = new Image();
            img.src = previousDraw.canvasSnapshot;
            img.onload = () => ctx.drawImage(img, 0, 0);
          }
        }
      }
    }
  };

  // Redo Functionality
  const handleRedo = () => {
    if (redoStack.length === 0) return;
    sound.playPop();

    const actionToRedo = redoStack[redoStack.length - 1];
    setRedoStack(prev => prev.slice(0, -1));
    setHistory(prev => [...prev, actionToRedo]);

    if (actionToRedo.type === 'fill' && actionToRedo.targetId) {
      setColorMap(prev => ({
        ...prev,
        [actionToRedo.targetId!]: actionToRedo.newColor || selectedColor
      }));
    } else if (actionToRedo.type === 'draw' && actionToRedo.canvasSnapshot) {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const img = new Image();
          img.src = actionToRedo.canvasSnapshot;
          img.onload = () => ctx.drawImage(img, 0, 0);
        }
      }
    }
  };

  // Clear Canvas & Fills
  const handleClearAll = () => {
    sound.playPop();
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
    setColorMap({});
    setHistory([]);
    setRedoStack([]);
  };

  // Save Artwork to Child Gallery
  const handleSaveArtwork = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    sound.playStarChime();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    const dataUrl = canvas.toDataURL('image/png');

    saveArtwork({
      printableId: printable.id,
      printableTitle: printable.title,
      childId: activeChild?.id || 'guest',
      childName: activeChild?.name || 'Artist',
      previewDataUrl: dataUrl
    });

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  // Print Colored Masterpiece
  const handlePrintColored = () => {
    sound.playPop();
    printDirectly(printable, paperSize, false);
  };

  // Build rendered SVG with current color fills applied
  let modifiedSvg = printable.svgContent;
  Object.entries(colorMap).forEach(([id, color]) => {
    const regex = new RegExp(`id="${id}"([^>]*)fill="[^"]*"`, 'g');
    if (regex.test(modifiedSvg)) {
      modifiedSvg = modifiedSvg.replace(regex, `id="${id}"$1fill="${color}"`);
    } else {
      modifiedSvg = modifiedSvg.replace(new RegExp(`id="${id}"`, 'g'), `id="${id}" fill="${color}"`);
    }
  });

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#F8F9FA] overflow-hidden select-none">
      
      {/* Top Header Bar */}
      <header className="flex items-center justify-between px-3 sm:px-6 py-2.5 bg-white border-b-2 border-slate-200 shadow-xs shrink-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[48px] min-w-[48px] p-2.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-2xl transition-transform active:scale-90"
            aria-label="Back to library"
          >
            <X className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-slate-800 font-heading truncate max-w-[180px] sm:max-w-md">
              {printable.title}
            </h1>
            <span className="text-xs text-slate-400">
              {activeChild ? `Coloring for ${activeChild.name} ${activeChild.avatar}` : 'Digital Coloring Studio'}
            </span>
          </div>
        </div>

        {/* Action Controls in Header */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Music Toggle */}
          <button
            type="button"
            onClick={toggleMusic}
            title={musicEnabled ? 'Calm Music On' : 'Calm Music Off'}
            className={`min-h-[44px] min-w-[44px] p-2.5 rounded-2xl border transition-all ${
              musicEnabled
                ? 'bg-purple-100 border-purple-300 text-purple-700 shadow-xs'
                : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
            }`}
          >
            <Music className={`w-5 h-5 ${musicEnabled ? 'animate-pulse' : ''}`} />
          </button>

          {/* Sound FX Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            title="Sound FX"
            className="min-h-[44px] min-w-[44px] p-2.5 rounded-2xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>

          {/* Undo */}
          <button
            type="button"
            onClick={handleUndo}
            disabled={history.length === 0}
            title="Undo"
            className="min-h-[44px] min-w-[44px] p-2.5 rounded-2xl border border-slate-200 bg-white text-slate-600 disabled:opacity-40 hover:bg-slate-50 transition-all active:scale-95"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          {/* Redo */}
          <button
            type="button"
            onClick={handleRedo}
            disabled={redoStack.length === 0}
            title="Redo"
            className="min-h-[44px] min-w-[44px] p-2.5 rounded-2xl border border-slate-200 bg-white text-slate-600 disabled:opacity-40 hover:bg-slate-50 transition-all active:scale-95"
          >
            <RotateCw className="w-5 h-5" />
          </button>

          {/* Clear All */}
          <button
            type="button"
            onClick={handleClearAll}
            title="Clear all colors"
            className="min-h-[44px] min-w-[44px] p-2.5 rounded-2xl border border-slate-200 bg-white text-slate-500 hover:text-rose-500 hover:bg-rose-50 transition-all active:scale-95"
          >
            <Trash2 className="w-5 h-5" />
          </button>

          {/* Save to Gallery */}
          <button
            type="button"
            onClick={handleSaveArtwork}
            className={`min-h-[48px] py-2.5 px-4 font-bold text-sm rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-1.5 ${
              isSaved
                ? 'bg-emerald-600 text-white'
                : 'bg-[#E06D53] hover:bg-[#cb583f] text-white'
            }`}
          >
            {isSaved ? <Check className="w-5 h-5 animate-bounce" /> : <Save className="w-5 h-5" />}
            <span className="hidden sm:inline">{isSaved ? 'Saved!' : 'Save Art'}</span>
          </button>

          {/* Print Masterpiece */}
          <button
            type="button"
            onClick={handlePrintColored}
            title="Print my colored masterpiece"
            className="min-h-[48px] py-2.5 px-3.5 bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-1.5"
          >
            <Printer className="w-5 h-5" />
            <span className="hidden sm:inline">Print</span>
          </button>
        </div>
      </header>

      {/* Main Studio Work Area */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        
        {/* Left Toolbar (Chunky friendly buttons >= 48px) */}
        <aside className="w-full md:w-24 bg-white border-b md:border-b-0 md:border-r border-slate-200 p-2 sm:p-3 flex md:flex-col items-center justify-around md:justify-start gap-2.5 shrink-0">
          {/* Bucket Fill */}
          <button
            type="button"
            onClick={() => {
              sound.playPop();
              setActiveTool('bucket');
            }}
            className={`min-h-[52px] min-w-[52px] w-full p-2 rounded-2xl flex flex-col items-center justify-center transition-all ${
              activeTool === 'bucket'
                ? 'bg-[#FFF2EB] text-[#E06D53] border-2 border-[#E06D53] shadow-xs'
                : 'text-slate-500 hover:bg-slate-100 border-2 border-transparent'
            }`}
          >
            <PaintBucket className="w-6 h-6" />
            <span className="text-[10px] font-bold mt-0.5">Bucket</span>
          </button>

          {/* Brush */}
          <button
            type="button"
            onClick={() => {
              sound.playPop();
              setActiveTool('brush');
            }}
            className={`min-h-[52px] min-w-[52px] w-full p-2 rounded-2xl flex flex-col items-center justify-center transition-all ${
              activeTool === 'brush'
                ? 'bg-[#EBF7FD] text-[#2D82B7] border-2 border-[#2D82B7] shadow-xs'
                : 'text-slate-500 hover:bg-slate-100 border-2 border-transparent'
            }`}
          >
            <Brush className="w-6 h-6" />
            <span className="text-[10px] font-bold mt-0.5">Brush</span>
          </button>

          {/* Rainbow Brush */}
          <button
            type="button"
            onClick={() => {
              sound.playPop();
              setActiveTool('rainbow');
            }}
            className={`min-h-[52px] min-w-[52px] w-full p-2 rounded-2xl flex flex-col items-center justify-center transition-all ${
              activeTool === 'rainbow'
                ? 'bg-gradient-to-r from-pink-100 via-amber-100 to-sky-100 border-2 border-rose-400 shadow-xs text-rose-600'
                : 'text-slate-500 hover:bg-slate-100 border-2 border-transparent'
            }`}
          >
            <Sparkles className="w-6 h-6 text-amber-500" />
            <span className="text-[10px] font-bold mt-0.5">Rainbow</span>
          </button>

          {/* Glitter Brush */}
          <button
            type="button"
            onClick={() => {
              sound.playPop();
              setActiveTool('glitter');
            }}
            className={`min-h-[52px] min-w-[52px] w-full p-2 rounded-2xl flex flex-col items-center justify-center transition-all ${
              activeTool === 'glitter'
                ? 'bg-amber-100 text-amber-700 border-2 border-amber-400 shadow-xs'
                : 'text-slate-500 hover:bg-slate-100 border-2 border-transparent'
            }`}
          >
            <span className="text-xl leading-none">✨</span>
            <span className="text-[10px] font-bold mt-0.5">Glitter</span>
          </button>

          {/* Eraser */}
          <button
            type="button"
            onClick={() => {
              sound.playPop();
              setActiveTool('eraser');
            }}
            className={`min-h-[52px] min-w-[52px] w-full p-2 rounded-2xl flex flex-col items-center justify-center transition-all ${
              activeTool === 'eraser'
                ? 'bg-slate-200 text-slate-800 border-2 border-slate-600 shadow-xs'
                : 'text-slate-500 hover:bg-slate-100 border-2 border-transparent'
            }`}
          >
            <Eraser className="w-6 h-6" />
            <span className="text-[10px] font-bold mt-0.5">Eraser</span>
          </button>

          {/* Brush Sizes Selector (only for brush/glitter/eraser) */}
          {activeTool !== 'bucket' && (
            <div className="hidden md:flex flex-col items-center gap-2 pt-3 border-t border-slate-200 w-full">
              <span className="text-[9px] font-bold text-slate-400 uppercase">Size</span>
              {(['small', 'medium', 'large'] as BrushSize[]).map(size => (
                <button
                  key={size}
                  type="button"
                  onClick={() => {
                    sound.playPop();
                    setBrushSize(size);
                  }}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${
                    brushSize === size
                      ? 'bg-slate-800 text-white border-slate-800'
                      : 'bg-slate-50 text-slate-400 border-slate-200'
                  }`}
                >
                  <div
                    className="rounded-full bg-current"
                    style={{
                      width: size === 'small' ? 6 : size === 'medium' ? 12 : 18,
                      height: size === 'small' ? 6 : size === 'medium' ? 12 : 18
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </aside>

        {/* Center Canvas & SVG Viewport */}
        <div
          ref={containerRef}
          className="flex-1 flex items-center justify-center p-3 sm:p-6 overflow-hidden bg-[#EDEDE9]"
        >
          <div className="relative w-full max-w-[550px] aspect-4/5 bg-white rounded-3xl shadow-xl border-4 border-slate-200 overflow-hidden flex items-center justify-center">
            
            {/* SVG Base Layer (Interactive bucket fill) */}
            <div
              onClick={handleSvgClick}
              className="absolute inset-0 w-full h-full p-4 flex items-center justify-center pointer-events-auto"
              dangerouslySetInnerHTML={{ __html: modifiedSvg }}
            />

            {/* Canvas Overlay for freehand brush & glitter */}
            <canvas
              ref={canvasRef}
              width={1000}
              height={1300}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className={`absolute inset-0 w-full h-full ${
                activeTool === 'bucket' ? 'pointer-events-none' : 'pointer-events-auto cursor-crosshair'
              }`}
            />
          </div>
        </div>

        {/* Right Palette Bar (24 Vibrant Colors) */}
        <aside className="w-full md:w-44 bg-white border-t md:border-t-0 md:border-l border-slate-200 p-3 sm:p-4 flex md:flex-col items-center justify-start gap-2.5 overflow-x-auto md:overflow-y-auto shrink-0">
          <span className="hidden md:block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 w-full text-center">
            Color Palette
          </span>

          <div className="grid grid-flow-col md:grid-flow-row grid-rows-2 md:grid-cols-3 gap-2.5 w-full">
            {PALETTE.map((color, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  sound.playPop();
                  setSelectedColor(color);
                }}
                className={`min-h-[46px] min-w-[46px] h-11 w-11 rounded-2xl shadow-xs border-2 transition-transform active:scale-80 flex items-center justify-center relative ${
                  selectedColor === color
                    ? 'border-slate-800 scale-110 shadow-md ring-2 ring-slate-400'
                    : 'border-white hover:scale-105'
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Select color ${color}`}
              >
                {selectedColor === color && (
                  <Check
                    className={`w-5 h-5 ${
                      color === '#FFFFFF' || color === '#EAB308' || color === '#84CC16'
                        ? 'text-slate-800'
                        : 'text-white'
                    }`}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Active color preview on desktop */}
          <div className="hidden md:flex items-center gap-2 mt-4 p-2 rounded-2xl bg-slate-50 border border-slate-200 w-full">
            <div
              className="w-8 h-8 rounded-xl border border-slate-300 shadow-inner"
              style={{ backgroundColor: selectedColor }}
            />
            <span className="text-xs font-bold text-slate-700">Active</span>
          </div>
        </aside>

      </div>
    </div>
  );
};
