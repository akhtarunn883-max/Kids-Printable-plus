import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { sound } from '../services/audio';
import { Sparkles, Printer, Palette, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export const OnboardingModal: React.FC = () => {
  const { isOnboardingOpen, setIsOnboardingOpen } = useApp();
  const [slide, setSlide] = useState(0);
  const [authStep, setAuthStep] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [authSuccess, setAuthSuccess] = useState(false);

  if (!isOnboardingOpen) return null;

  const slides = [
    {
      title: 'Thousands of printables in one place',
      subtitle: 'Coloring pages, math tracing, mazes, chore charts, and fine-motor activities designed for kids ages 3–10.',
      icon: <Printer className="w-16 h-16 text-[#E06D53]" />,
      badgeBg: 'bg-[#FFF2EB]',
      illustration: (
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-[#FFF2EB] rounded-3xl transform rotate-6 border-2 border-[#FFD9CA]" />
          <div className="relative z-10 w-44 h-44 bg-white rounded-3xl p-4 shadow-lg border-2 border-slate-100 flex flex-col items-center justify-center text-center">
            <span className="text-4xl mb-2">🎨</span>
            <span className="text-sm font-bold text-slate-700 font-heading">US Letter & A4 Ready</span>
            <span className="text-xs text-slate-500 mt-1">Edge-safe 0.25in margins</span>
          </div>
        </div>
      )
    },
    {
      title: 'Print or color right on screen',
      subtitle: 'One-tap printing for paper fun at the kitchen table, or digital bucket-fill and rainbow brushes inside the app.',
      icon: <Palette className="w-16 h-16 text-[#2D82B7]" />,
      badgeBg: 'bg-[#EBF7FD]',
      illustration: (
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-[#EBF7FD] rounded-3xl transform -rotate-4 border-2 border-[#BCE3FA]" />
          <div className="relative z-10 w-44 h-44 bg-white rounded-3xl p-4 shadow-lg border-2 border-slate-100 flex flex-col items-center justify-center text-center">
            <span className="text-4xl mb-2">✨</span>
            <span className="text-sm font-bold text-slate-700 font-heading">Digital Magic Studio</span>
            <span className="text-xs text-slate-500 mt-1">Glitter brush & instant star rewards</span>
          </div>
        </div>
      )
    },
    {
      title: 'New sheets added every week',
      subtitle: 'Seasonal collections for Halloween, Christmas, Ramadan, Easter, and homeschool learning bundles.',
      icon: <Calendar className="w-16 h-16 text-[#1F8A70]" />,
      badgeBg: 'bg-[#F0F9F8]',
      illustration: (
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-[#F0F9F8] rounded-3xl transform rotate-3 border-2 border-[#BFE8DF]" />
          <div className="relative z-10 w-44 h-44 bg-white rounded-3xl p-4 shadow-lg border-2 border-slate-100 flex flex-col items-center justify-center text-center">
            <span className="text-4xl mb-2">🎃</span>
            <span className="text-sm font-bold text-slate-700 font-heading">Seasonal Drops</span>
            <span className="text-xs text-slate-500 mt-1">Fresh educational packs</span>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    sound.playPop();
    if (slide < slides.length - 1) {
      setSlide(prev => prev + 1);
    } else {
      setAuthStep(true);
    }
  };

  const handleFinish = (method: string) => {
    sound.playStarChime();
    setAuthSuccess(true);
    localStorage.setItem('ppk_onboarding_completed', 'true');
    setTimeout(() => {
      setIsOnboardingOpen(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="relative w-full max-w-md p-6 bg-white rounded-3xl shadow-2xl border-4 border-[#E0D4FC] text-center overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {!authStep ? (
          <div>
            {/* Top Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mb-6">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === slide ? 'w-8 bg-[#E06D53]' : 'w-2.5 bg-slate-200'
                  }`}
                />
              ))}
            </div>

            {/* Illustration */}
            <div className="mb-6">{slides[slide].illustration}</div>

            {/* Title & Description */}
            <h2 className="text-2xl font-bold text-slate-800 font-heading mb-2 leading-tight">
              {slides[slide].title}
            </h2>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed max-w-xs mx-auto">
              {slides[slide].subtitle}
            </p>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setAuthStep(true)}
                className="flex-1 py-3 px-4 text-sm font-bold text-slate-500 hover:text-slate-700 rounded-2xl hover:bg-slate-100 transition-colors"
              >
                Skip
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex-2 py-3.5 px-6 text-base font-bold text-white bg-[#E06D53] hover:bg-[#c95941] rounded-2xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Next <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="w-16 h-16 mx-auto mb-4 rounded-3xl bg-[#FFF2EB] text-[#E06D53] flex items-center justify-center">
              <Sparkles className="w-8 h-8" />
            </div>

            <h2 className="text-2xl font-bold text-slate-800 font-heading mb-1">
              Welcome to PrintPlay Kids!
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Create an account to save favorites across devices, or explore immediately as a guest.
            </p>

            {authSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-50 text-emerald-700 flex flex-col items-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-2 animate-bounce" />
                <span className="font-bold text-lg">You're All Set!</span>
                <span className="text-xs mt-1">Opening your printables playground...</span>
              </div>
            ) : (
              <div className="space-y-3">
                {/* 1-Tap Google Sign In */}
                <button
                  type="button"
                  onClick={() => handleFinish('Google')}
                  className="w-full py-3.5 px-4 rounded-2xl border-2 border-slate-200 hover:border-slate-300 bg-white font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-3 shadow-xs active:scale-98 transition-all"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  Continue with Google
                </button>

                {/* Apple Sign In */}
                <button
                  type="button"
                  onClick={() => handleFinish('Apple')}
                  className="w-full py-3.5 px-4 rounded-2xl bg-black hover:bg-slate-900 text-white font-bold flex items-center justify-center gap-3 shadow-xs active:scale-98 transition-all"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 170 170">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-7.23-11.16-12.33-23.75-15.3-37.78-2.98-14.03-2.98-26.68 0-37.95 3.34-12.67 9.38-22.56 18.13-29.68 8.74-7.11 18.49-10.74 29.23-10.87 5.01 0 10.63 1.25 16.85 3.75 6.23 2.5 10.15 3.75 11.78 3.75 1.41 0 5.48-1.25 12.21-3.75 6.74-2.5 12.28-3.61 16.63-3.35 15.42 1.09 27.26 7.42 35.53 18.99-13.82 8.37-20.51 19.89-20.08 34.56.43 11.52 4.94 21.08 13.53 28.69 4.13 3.69 8.8 6.53 14.02 8.52-2.93 8.59-6.3 16.73-10.11 24.43zm-27.14-106.91c0 7.83-2.82 15.33-8.47 22.5-6.73 8.37-14.99 13.15-24.77 14.35-.43-1.09-.65-2.28-.65-3.59 0-7.83 3.04-15.54 9.13-23.15 6.08-7.61 14.34-12.18 24.76-13.7.11 1.2.11 2.39 0 3.59z" />
                  </svg>
                  Continue with Apple
                </button>

                {/* Email input toggle */}
                <div className="pt-2">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={emailInput}
                      onChange={e => setEmailInput(e.target.value)}
                      placeholder="name@example.com"
                      className="flex-1 py-3 px-4 text-sm bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E06D53]"
                    />
                    <button
                      type="button"
                      onClick={() => handleFinish(emailInput || 'Email')}
                      className="py-3 px-5 text-sm font-bold text-white bg-[#E06D53] hover:bg-[#cb593f] rounded-2xl active:scale-95 transition-all"
                    >
                      Join
                    </button>
                  </div>
                </div>

                {/* Guest option */}
                <div className="pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleFinish('Guest')}
                    className="text-xs font-bold text-slate-500 hover:text-slate-800 underline transition-colors"
                  >
                    Continue as Guest (No sign up required)
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
