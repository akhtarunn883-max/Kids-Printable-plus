import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { sound } from '../services/audio';
import {
  X,
  ShieldCheck,
  CreditCard,
  Settings,
  TrendingUp,
  ExternalLink,
  Check,
  Star,
  Sparkles,
  Volume2,
  VolumeX,
  Music,
  Printer
} from 'lucide-react';

export const ParentZoneModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const {
    subscription,
    upgradeSubscription,
    cancelSubscription,
    paperSize,
    setPaperSize,
    soundEnabled,
    toggleSound,
    musicEnabled,
    toggleMusic,
    artworks,
    printHistory,
    bundles
  } = useApp();

  const [activeTab, setActiveTab] = useState<'progress' | 'subscription' | 'settings'>('progress');
  const [trialActivated, setTrialActivated] = useState(false);

  const handleStartTrial = () => {
    sound.playStarChime();
    upgradeSubscription('yearly');
    setTrialActivated(true);
    setTimeout(() => setTrialActivated(false), 3000);
  };

  const skillsPracticed = [
    { name: 'Fine Motor Control & Pencil Grip', count: 12 },
    { name: 'Letter Tracing & Phonics Sound', count: 8 },
    { name: 'Early Counting & Math Bonds', count: 6 },
    { name: 'Creativity & Color Harmonization', count: 14 }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl sm:rounded-[36px] shadow-2xl border-4 border-[#FFD9CA] overflow-hidden my-auto flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100 bg-[#FAFAF8] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#FFF2EB] text-[#E06D53]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 font-heading">
                Parent & Educator Zone
              </h2>
              <p className="text-xs text-slate-400">
                Child-safe control center · Verified Grown-up Access
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Segmented Tab Bar */}
        <div className="px-6 pt-4 border-b border-slate-100 shrink-0 flex gap-2">
          <button
            type="button"
            onClick={() => {
              sound.playPop();
              setActiveTab('progress');
            }}
            className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'progress'
                ? 'bg-[#E06D53] text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            Weekly Progress
          </button>

          <button
            type="button"
            onClick={() => {
              sound.playPop();
              setActiveTab('subscription');
            }}
            className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'subscription'
                ? 'bg-[#E06D53] text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            Subscription & Packs
          </button>

          <button
            type="button"
            onClick={() => {
              sound.playPop();
              setActiveTab('settings');
            }}
            className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'settings'
                ? 'bg-[#E06D53] text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Settings className="w-4 h-4" />
            Preferences
          </button>
        </div>

        {/* Tab 1: Weekly Progress */}
        {activeTab === 'progress' && (
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
            {/* Stat Summary Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#FFF2EB] border border-[#FFD9CA] text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#E06D53] font-heading block">
                  {printHistory.length + artworks.length}
                </span>
                <span className="text-xs font-bold text-slate-700">Sheets Completed</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#EBF7FD] border border-[#BCE3FA] text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#2D82B7] font-heading block">
                  {printHistory.length}
                </span>
                <span className="text-xs font-bold text-slate-700">Pages Printed</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F2FBF5] border border-[#C8EED4] text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#2E8540] font-heading block">
                  {artworks.length}
                </span>
                <span className="text-xs font-bold text-slate-700">Digital Artworks</span>
              </div>
            </div>

            {/* Skills Breakdown */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-heading font-bold text-sm text-slate-800 mb-3">
                Learning Skills Practiced This Week
              </h3>
              <div className="space-y-3">
                {skillsPracticed.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>{skill.name}</span>
                      <span className="text-slate-500">{skill.count} activities</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#E06D53] rounded-full"
                        style={{ width: `${Math.min(100, skill.count * 7)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Etsy Shop Cross-Sell Highlights */}
            <div className="p-5 rounded-3xl bg-[#FFF9EB] border-2 border-[#FDE7AA]">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wide block">
                    From Our Etsy Shop
                  </span>
                  <h4 className="text-sm font-bold text-slate-800 font-heading">
                    Discounted Home & Classroom Printable Bundles
                  </h4>
                </div>
                <span className="text-2xl">🛍️</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {bundles.map(b => (
                  <a
                    key={b.id}
                    href={b.etsyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-2xl border border-[#FDE7AA] hover:border-amber-400 hover:shadow-md transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className="text-2xl shrink-0">{b.thumbnail}</span>
                      <div className="truncate">
                        <span className="text-xs font-bold text-slate-800 block truncate group-hover:text-amber-800 transition-colors">
                          {b.title}
                        </span>
                        <span className="text-[11px] text-amber-700 font-semibold">{b.price} on Etsy</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-700 shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Subscription & Plans */}
        {activeTab === 'subscription' && (
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
            {/* Current Plan Banner */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Current Status</span>
                <span className="text-sm font-bold text-slate-800">
                  {subscription.plan === 'yearly'
                    ? '⭐ PrintPlay Premium (Yearly Member)'
                    : subscription.plan === 'monthly'
                    ? '⭐ PrintPlay Premium (Monthly Member)'
                    : 'Free Starter Plan'}
                </span>
                {subscription.plan === 'free' && (
                  <span className="text-xs text-slate-500 block mt-0.5">
                    {subscription.printsUsedThisWeek} of {subscription.maxFreePrintsPerWeek} free weekly prints used
                  </span>
                )}
              </div>

              {subscription.plan !== 'free' && (
                <button
                  type="button"
                  onClick={cancelSubscription}
                  className="text-xs font-bold text-rose-600 hover:underline"
                >
                  Cancel Plan
                </button>
              )}
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Monthly Plan */}
              <div className="p-5 rounded-3xl border-2 border-slate-200 hover:border-[#E06D53] bg-white flex flex-col justify-between">
                <div>
                  <h4 className="font-heading font-bold text-base text-slate-800">Monthly Pass</h4>
                  <div className="mt-2 mb-3">
                    <span className="text-3xl font-extrabold text-slate-900">$4.99</span>
                    <span className="text-xs text-slate-500"> / month</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600 mb-6">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Unlimited printing & PDF downloads</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Full library access across all ages</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> New activity packs released weekly</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> 100% ad-free & COPPA safe</li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => upgradeSubscription('monthly')}
                  className="w-full py-3 rounded-2xl border-2 border-[#E06D53] text-[#E06D53] hover:bg-[#FFF2EB] font-bold text-sm transition-all"
                >
                  Choose Monthly ($4.99)
                </button>
              </div>

              {/* Yearly Plan (Best Value) */}
              <div className="relative p-5 rounded-3xl border-2 border-[#E06D53] bg-[#FFF2EB]/40 flex flex-col justify-between shadow-md">
                <span className="absolute -top-3 right-6 bg-[#E06D53] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs">
                  Save 50%
                </span>
                <div>
                  <h4 className="font-heading font-bold text-base text-slate-800">Yearly Best Value</h4>
                  <div className="mt-2 mb-3">
                    <span className="text-3xl font-extrabold text-slate-900">$29.99</span>
                    <span className="text-xs text-slate-500"> / year ($2.50/mo)</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600 mb-6">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> 7-day free trial included</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Unlimited instant printing & vector PDFs</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Early holiday packs (Halloween, Eid, Xmas)</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> High-res 300 DPI classroom formats</li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={handleStartTrial}
                  className="w-full py-3 bg-[#E06D53] hover:bg-[#cb583f] text-white font-bold text-sm rounded-2xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  {trialActivated ? 'Trial Active!' : 'Start 7-Day Free Trial'}
                </button>
              </div>
            </div>

            {/* COPPA Safe Assurance */}
            <p className="text-[11px] text-center text-slate-400">
              🔒 COPPA and GDPR-K compliant. No third-party ads or child tracking ever. Cancel anytime.
            </p>
          </div>
        )}

        {/* Tab 3: Settings & Preferences */}
        {activeTab === 'settings' && (
          <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
            {/* Paper Size Setting */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-800 block">Default Paper Format</span>
                <span className="text-xs text-slate-500">Applied automatically to 1-tap print and downloads</span>
              </div>
              <div className="flex gap-1 p-1 bg-white rounded-xl border border-slate-200">
                {(['US Letter', 'A4'] as const).map(s => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      sound.playPop();
                      setPaperSize(s);
                    }}
                    className={`py-1.5 px-3 text-xs font-bold rounded-lg transition-all ${
                      paperSize === s
                        ? 'bg-[#E06D53] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Sound FX Setting */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-800 block">Button Sound Effects</span>
                <span className="text-xs text-slate-500">Playful pops and celebratory star fanfares</span>
              </div>
              <button
                type="button"
                onClick={toggleSound}
                className={`py-1.5 px-4 text-xs font-bold rounded-xl border transition-all ${
                  soundEnabled
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                    : 'bg-white border-slate-200 text-slate-400'
                }`}
              >
                {soundEnabled ? 'Enabled' : 'Muted'}
              </button>
            </div>

            {/* Background Music Setting */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-800 block">Calm Studio Music</span>
                <span className="text-xs text-slate-500">Gentle synthesized nursery melody during coloring</span>
              </div>
              <button
                type="button"
                onClick={toggleMusic}
                className={`py-1.5 px-4 text-xs font-bold rounded-xl border transition-all ${
                  musicEnabled
                    ? 'bg-purple-50 border-purple-300 text-purple-700'
                    : 'bg-white border-slate-200 text-slate-400'
                }`}
              >
                {musicEnabled ? 'Playing' : 'Off'}
              </button>
            </div>

            {/* Direct Support & App Feedback */}
            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-3 text-center">
              <a
                href="mailto:support@printplaykids.com"
                className="py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Contact Educator Support
              </a>
              <button
                type="button"
                onClick={() => alert('Thank you for rating PrintPlay Kids 5 stars! ⭐⭐⭐⭐⭐')}
                className="py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Rate App on App Store
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
