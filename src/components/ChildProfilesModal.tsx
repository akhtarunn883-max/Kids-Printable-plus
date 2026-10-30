import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { sound } from '../services/audio';
import { X, Plus, User, Sparkles, Check } from 'lucide-react';

const AVATARS = ['🦁', '🦄', '🦖', '🚀', '🐼', '🦊', '🎨', '🐬', '🐶', '🐱'];

export const ChildProfilesModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { childProfiles, activeChild, setActiveChild, addChildProfile } = useApp();
  const [isAdding, setIsAdding] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState(5);
  const [selectedAvatar, setSelectedAvatar] = useState('🦁');

  const handleSelectChild = (child: any) => {
    sound.playPop();
    setActiveChild(child);
    onClose();
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    addChildProfile(name.trim(), age, selectedAvatar);
    setName('');
    setIsAdding(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="relative w-full max-w-lg p-6 bg-white rounded-3xl shadow-2xl border-4 border-[#BCE3FA] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-2xl bg-[#EBF7FD] text-[#2D82B7]">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 font-heading">Child Profiles</h2>
              <p className="text-xs text-slate-400">Switch profiles to customize age and save artworks</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Existing Child Profiles List */}
        {!isAdding ? (
          <div className="py-6 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {childProfiles.map(child => {
                const isActive = activeChild?.id === child.id;
                return (
                  <div
                    key={child.id}
                    onClick={() => handleSelectChild(child)}
                    className={`relative p-4 rounded-3xl border-2 cursor-pointer transition-all active:scale-98 flex items-center gap-3 ${
                      isActive
                        ? 'border-[#2D82B7] bg-[#EBF7FD] shadow-sm ring-2 ring-[#BCE3FA]'
                        : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-4xl">{child.avatar}</span>
                    <div className="flex-1 truncate">
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading font-bold text-base text-slate-800 truncate">
                          {child.name}
                        </h3>
                        {isActive && (
                          <span className="text-[10px] font-bold text-sky-700 bg-sky-200 px-1.5 py-0.5 rounded-md">
                            Active
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-500 block">
                        Age {child.age} · {child.artworksCount} Masterpieces
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Add Child Profile Button (Up to 4 children) */}
            {childProfiles.length < 4 ? (
              <button
                type="button"
                onClick={() => {
                  sound.playPop();
                  setIsAdding(true);
                }}
                className="w-full py-3.5 px-4 rounded-2xl border-2 border-dashed border-slate-300 hover:border-[#2D82B7] hover:bg-[#EBF7FD]/50 text-slate-600 hover:text-[#2D82B7] font-bold text-sm transition-all flex items-center justify-center gap-2 mt-4"
              >
                <Plus className="w-5 h-5" />
                Add Child Profile ({childProfiles.length}/4)
              </button>
            ) : (
              <p className="text-xs text-center text-slate-400 pt-2">
                Maximum 4 child profiles reached
              </p>
            )}
          </div>
        ) : (
          /* Add Profile Form */
          <form onSubmit={handleCreate} className="py-5 space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">Child's Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Leo, Emma"
                className="w-full py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2D82B7]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-700">Age</label>
                <span className="text-sm font-bold text-[#2D82B7]">{age} years old</span>
              </div>
              <input
                type="range"
                min="3"
                max="10"
                value={age}
                onChange={e => setAge(parseInt(e.target.value, 10))}
                className="w-full accent-[#2D82B7]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>3 yrs</span>
                <span>5 yrs</span>
                <span>7 yrs</span>
                <span>10 yrs</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-2">Choose an Avatar</label>
              <div className="grid grid-cols-5 gap-2">
                {AVATARS.map(avatar => (
                  <button
                    key={avatar}
                    type="button"
                    onClick={() => setSelectedAvatar(avatar)}
                    className={`h-12 text-2xl rounded-2xl flex items-center justify-center border-2 transition-all ${
                      selectedAvatar === avatar
                        ? 'border-[#2D82B7] bg-[#EBF7FD] scale-110 shadow-xs'
                        : 'border-slate-100 hover:border-slate-200 bg-slate-50'
                    }`}
                  >
                    {avatar}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="flex-1 py-3 text-sm font-bold text-slate-500 hover:bg-slate-100 rounded-2xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-[#2D82B7] hover:bg-[#236894] text-white text-sm font-bold rounded-2xl shadow-md active:scale-95 transition-all"
              >
                Save Profile
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
