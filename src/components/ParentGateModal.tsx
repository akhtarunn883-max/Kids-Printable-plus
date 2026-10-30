import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Lock, Sparkles } from 'lucide-react';

export const ParentGateModal: React.FC = () => {
  const { isParentGateOpen, closeParentGate, verifyParentGate, parentGateQuestion } = useApp();
  const [userAnswer, setUserAnswer] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);

  if (!isParentGateOpen) return null;

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const ans = parseInt(userAnswer, 10);
    const success = verifyParentGate(ans);
    if (!success) {
      setErrorMsg(true);
      setUserAnswer('');
      setTimeout(() => setErrorMsg(false), 2000);
    } else {
      setUserAnswer('');
      setErrorMsg(false);
    }
  };

  const handleNumClick = (digit: string) => {
    if (userAnswer.length < 4) {
      setUserAnswer(prev => prev + digit);
    }
  };

  const handleBackspace = () => {
    setUserAnswer(prev => prev.slice(0, -1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="relative w-full max-w-sm p-6 bg-white rounded-3xl shadow-2xl border-4 border-[#FFD9CA] text-center animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={closeParentGate}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close parent gate"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center justify-center w-14 h-14 mb-3 rounded-2xl bg-[#FFF2EB] text-[#E06D53]">
          <Lock className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-bold text-slate-800 font-heading">Parent & Teacher Gate</h3>
        <p className="mt-1 text-sm text-slate-500">
          Grown-ups only! Please solve this quick math problem to continue:
        </p>

        {/* Math Question Display */}
        <div className="my-5 p-4 rounded-2xl bg-[#F8FAFC] border-2 border-slate-200 flex items-center justify-center gap-3">
          <span className="text-3xl font-extrabold text-slate-800 font-heading">
            {parentGateQuestion.num1} × {parentGateQuestion.num2} =
          </span>
          <div className="min-w-16 h-12 flex items-center justify-center px-3 text-2xl font-bold text-[#E06D53] bg-white rounded-xl border-2 border-dashed border-[#FFD9CA]">
            {userAnswer || '?'}
          </div>
        </div>

        {errorMsg && (
          <p className="mb-3 text-sm font-semibold text-rose-500 animate-pulse">
            Oops, that is not quite right. Try again!
          </p>
        )}

        {/* Friendly Numpad */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(d => (
            <button
              key={d}
              type="button"
              onClick={() => handleNumClick(d)}
              className="h-12 text-xl font-bold text-slate-700 bg-slate-50 hover:bg-[#FFF2EB] hover:text-[#E06D53] border border-slate-200 rounded-xl active:scale-95 transition-all"
            >
              {d}
            </button>
          ))}
          <button
            type="button"
            onClick={handleBackspace}
            className="h-12 text-sm font-bold text-slate-500 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl active:scale-95 transition-all"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={() => handleNumClick('0')}
            className="h-12 text-xl font-bold text-slate-700 bg-slate-50 hover:bg-[#FFF2EB] hover:text-[#E06D53] border border-slate-200 rounded-xl active:scale-95 transition-all"
          >
            0
          </button>
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="h-12 text-base font-bold text-white bg-[#E06D53] hover:bg-[#cb593f] rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-1"
          >
            <Sparkles className="w-4 h-4" /> Go
          </button>
        </div>
      </div>
    </div>
  );
};
