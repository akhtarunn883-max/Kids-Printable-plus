import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Printable, AgeGroup, DifficultyLevel, Season } from '../types';
import { CATEGORIES } from '../data/categories';
import { sound } from '../services/audio';
import {
  X,
  Plus,
  BarChart3,
  Upload,
  Calendar,
  Layers,
  Sparkles,
  Search,
  CheckCircle2,
  Trash2,
  ExternalLink
} from 'lucide-react';

export const AdminDashboard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { printables, addPrintable, deletePrintable, bundles } = useApp();
  const [activeTab, setActiveTab] = useState<'upload' | 'analytics' | 'catalog'>('upload');

  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0].name);
  const [ageRange, setAgeRange] = useState<AgeGroup>('5-6');
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('Easy');
  const [type, setType] = useState<'coloring' | 'worksheet' | 'activity' | 'chart'>('coloring');
  const [tagsStr, setTagsStr] = useState('dino, fun, coloring');
  const [skillsStr, setSkillsStr] = useState('Fine motor, Creativity');
  const [isPremium, setIsPremium] = useState(false);
  const [season, setSeason] = useState<Season>('General');
  const [description, setDescription] = useState('');
  const [etsyUrl, setEtsyUrl] = useState('');
  const [releaseDate, setReleaseDate] = useState('2026-11-01');
  const [customSvg, setCustomSvg] = useState('');
  const [includeAnswerKey, setIncludeAnswerKey] = useState(false);
  const [answerKeySvg, setAnswerKeySvg] = useState('');
  const [uploadedSuccess, setUploadedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const defaultSvg = `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect x="25" y="25" width="450" height="600" rx="20" fill="#FFFFFF" class="colorable" />
      <circle id="art-center" cx="250" cy="300" r="100" fill="#FFFFFF" class="colorable" />
      <text x="250" y="310" font-size="28" font-family="'Fredoka', sans-serif" font-weight="bold" text-anchor="middle" stroke="none" fill="#1E293B">${title}</text>
    </svg>`;

    const newPrintable: Printable = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      category,
      ageRange,
      difficulty,
      type,
      tags: tagsStr.split(',').map(t => t.trim().toLowerCase()),
      skills: skillsStr.split(',').map(s => s.trim()),
      isPremium,
      season,
      description: description.trim() || 'A delightful activity page created in the admin studio.',
      etsyUrl: etsyUrl.trim() || undefined,
      bundleTitle: etsyUrl.trim() ? 'Etsy Special Activity Bundle' : undefined,
      addedDate: releaseDate,
      downloadsCount: 0,
      printsCount: 0,
      favoritesCount: 0,
      svgContent: customSvg.trim() || defaultSvg,
      answerKeySvg: includeAnswerKey ? (answerKeySvg.trim() || `<svg viewBox="0 0 500 650"><text x="250" y="300" font-size="24" text-anchor="middle">Answer Key for ${title}</text></svg>`) : undefined
    };

    addPrintable(newPrintable);
    setUploadedSuccess(true);
    setTimeout(() => {
      setUploadedSuccess(false);
      setTitle('');
      setDescription('');
      setCustomSvg('');
      setActiveTab('catalog');
    }, 1200);
  };

  // Analytics Aggregation
  const sortedByPrints = [...printables].sort((a, b) => b.printsCount - a.printsCount).slice(0, 5);
  const sortedByFavorites = [...printables].sort((a, b) => b.favoritesCount - a.favoritesCount).slice(0, 5);
  const zeroResultSearches = [
    { term: 'minecraft coloring', searches: 48 },
    { term: 'bluey activity', searches: 36 },
    { term: 'fractions grade 2', searches: 29 },
    { term: 'pokemon line art', searches: 22 }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl sm:rounded-[36px] shadow-2xl border-4 border-slate-700 overflow-hidden my-auto flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 bg-slate-900 text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-slate-800 text-amber-400">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-heading">
                Admin Content & Operations Manager
              </h2>
              <p className="text-xs text-slate-400">
                Manage printables, schedule releases, monitor downloads & analytics
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Bar */}
        <div className="px-6 pt-4 border-b border-slate-200 shrink-0 flex gap-2 bg-slate-50">
          <button
            type="button"
            onClick={() => setActiveTab('upload')}
            className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'upload'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Upload className="w-4 h-4" />
            Upload Printable
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('analytics')}
            className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'analytics'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Live Analytics
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('catalog')}
            className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'catalog'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            Manage Library ({printables.length})
          </button>
        </div>

        {/* Tab 1: Upload Form */}
        {activeTab === 'upload' && (
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 overflow-y-auto space-y-4">
            {uploadedSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center gap-2 border border-emerald-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 animate-bounce" />
                <span className="font-bold text-sm">Printable successfully published to library!</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Printable Title *</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="e.g. Stegosaurus Number Hunt 1–10"
                  className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-slate-800"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Category</label>
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-sm"
                >
                  {CATEGORIES.map(c => (
                    <option key={c.id} value={c.name}>{c.icon} {c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Target Age</label>
                <select
                  value={ageRange}
                  onChange={e => setAgeRange(e.target.value as AgeGroup)}
                  className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-sm"
                >
                  <option value="3-4">Ages 3–4 (Preschool)</option>
                  <option value="5-6">Ages 5–6 (Kindergarten)</option>
                  <option value="7-8">Ages 7–8 (Early Elem)</option>
                  <option value="9-10">Ages 9–10 (Elementary)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Difficulty</label>
                <select
                  value={difficulty}
                  onChange={e => setDifficulty(e.target.value as DifficultyLevel)}
                  className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-sm"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Format Type</label>
                <select
                  value={type}
                  onChange={e => setType(e.target.value as any)}
                  className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-sm"
                >
                  <option value="coloring">Coloring Page</option>
                  <option value="worksheet">Educational Worksheet</option>
                  <option value="activity">Game / Maze / Activity</option>
                  <option value="chart">Routine / Reward Chart</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Tags (comma separated)</label>
                <input
                  type="text"
                  value={tagsStr}
                  onChange={e => setTagsStr(e.target.value)}
                  className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Skills (comma separated)</label>
                <input
                  type="text"
                  value={skillsStr}
                  onChange={e => setSkillsStr(e.target.value)}
                  className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Season</label>
                <select
                  value={season}
                  onChange={e => setSeason(e.target.value as Season)}
                  className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-sm"
                >
                  <option value="General">General (Year-Round)</option>
                  <option value="Halloween">Halloween Special</option>
                  <option value="Christmas">Christmas & Winter</option>
                  <option value="Easter">Easter & Spring</option>
                  <option value="Ramadan">Ramadan & Eid</option>
                  <option value="Back to School">Back to School</option>
                  <option value="Summer">Summer Vacation</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Access Tier</label>
                <div className="flex gap-2 pt-1">
                  <label className="flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="tier"
                      checked={!isPremium}
                      onChange={() => setIsPremium(false)}
                    />
                    Free
                  </label>
                  <label className="flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="tier"
                      checked={isPremium}
                      onChange={() => setIsPremium(true)}
                    />
                    Premium Only
                  </label>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Release Date</label>
                <input
                  type="date"
                  value={releaseDate}
                  onChange={e => setReleaseDate(e.target.value)}
                  className="w-full py-1.5 px-3 bg-slate-50 border border-slate-300 rounded-xl text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Description</label>
              <textarea
                rows={2}
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Brief pedagogical description for parents and homeschool teachers..."
                className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Etsy Bundle Link (Optional)</label>
              <input
                type="url"
                value={etsyUrl}
                onChange={e => setEtsyUrl(e.target.value)}
                placeholder="https://etsy.com/shop/PrintPlayKids?..."
                className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Custom SVG Line-Art Code (Optional)</label>
              <textarea
                rows={3}
                value={customSvg}
                onChange={e => setCustomSvg(e.target.value)}
                placeholder="<svg viewBox='0 0 500 650'>...</svg> (Leave empty to use automatic vector template)"
                className="w-full font-mono text-xs py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-2xl shadow-md active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <Upload className="w-5 h-5 text-amber-400" />
              Publish Printable to Library
            </button>
          </form>
        )}

        {/* Tab 2: Live Analytics */}
        {activeTab === 'analytics' && (
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Most Printed */}
              <div className="p-4 rounded-2xl border border-slate-200 bg-white">
                <h3 className="font-heading font-bold text-sm text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-lg">🖨️</span> Top Printed Sheets
                </h3>
                <div className="space-y-2">
                  {sortedByPrints.map((p, idx) => (
                    <div key={p.id} className="flex items-center justify-between text-xs py-1 border-b border-slate-100 last:border-0">
                      <span className="truncate pr-2">{idx + 1}. {p.title}</span>
                      <span className="font-bold text-slate-700">{p.printsCount} prints</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Most Favorited */}
              <div className="p-4 rounded-2xl border border-slate-200 bg-white">
                <h3 className="font-heading font-bold text-sm text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-lg">❤️</span> Most Favorited by Parents
                </h3>
                <div className="space-y-2">
                  {sortedByFavorites.map((p, idx) => (
                    <div key={p.id} className="flex items-center justify-between text-xs py-1 border-b border-slate-100 last:border-0">
                      <span className="truncate pr-2">{idx + 1}. {p.title}</span>
                      <span className="font-bold text-rose-600">{p.favoritesCount} favs</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Zero-Result Search Queries */}
            <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/50">
              <h3 className="font-heading font-bold text-sm text-amber-900 mb-1 flex items-center gap-2">
                <Search className="w-4 h-4 text-amber-600" /> High-Demand Search Terms (No Results Found)
              </h3>
              <p className="text-xs text-amber-700 mb-3">
                Users searched for these keywords that currently have no matching printables. Create these next!
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {zeroResultSearches.map((item, idx) => (
                  <div key={idx} className="p-2.5 bg-white rounded-xl border border-amber-200 text-center">
                    <span className="text-xs font-bold text-slate-800 block truncate">"{item.term}"</span>
                    <span className="text-[11px] text-amber-700 font-semibold">{item.searches} queries</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Catalog List */}
        {activeTab === 'catalog' && (
          <div className="p-4 sm:p-6 overflow-y-auto space-y-2">
            {printables.map(item => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 transition-all text-xs"
              >
                <div className="flex items-center gap-3 truncate pr-2">
                  <div
                    className="w-10 h-12 bg-slate-100 rounded-lg p-1 shrink-0 overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: item.svgContent }}
                  />
                  <div className="truncate">
                    <h4 className="font-bold text-slate-800 truncate">{item.title}</h4>
                    <span className="text-slate-400">
                      {item.category} · Ages {item.ageRange} · {item.printsCount} prints · {item.isPremium ? 'Premium' : 'Free'}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => deletePrintable(item.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-rose-50"
                  title="Delete printable"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
