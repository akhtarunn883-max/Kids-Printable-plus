import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Printable,
  ChildProfile,
  SavedArtwork,
  PrintRecord,
  UserSubscription,
  UserRole,
  PaperSize,
  FilterState,
  Season,
  PrintableBundle
} from '../types';
import { PRINTABLES_DATA } from '../data/printables';
import { BUNDLES } from '../data/bundles';
import { sound } from '../services/audio';

interface AppContextType {
  role: UserRole;
  setRole: (r: UserRole) => void;
  activeChild: ChildProfile | null;
  childProfiles: ChildProfile[];
  setActiveChild: (c: ChildProfile | null) => void;
  addChildProfile: (name: string, age: number, avatar: string) => void;
  updateChildProfile: (profile: ChildProfile) => void;
  
  printables: Printable[];
  bundles: PrintableBundle[];
  addPrintable: (p: Printable) => void;
  deletePrintable: (id: string) => void;

  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;

  printHistory: PrintRecord[];
  recordPrint: (id: string, paperSize: PaperSize, includedAnswerKey: boolean) => void;

  artworks: SavedArtwork[];
  saveArtwork: (artwork: Omit<SavedArtwork, 'id' | 'completedDate'>) => void;
  deleteArtwork: (id: string) => void;

  subscription: UserSubscription;
  upgradeSubscription: (plan: 'monthly' | 'yearly') => void;
  cancelSubscription: () => void;

  paperSize: PaperSize;
  setPaperSize: (s: PaperSize) => void;

  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;

  soundEnabled: boolean;
  toggleSound: () => void;
  musicEnabled: boolean;
  toggleMusic: () => void;

  // Modals & Navigation
  selectedPrintable: Printable | null;
  setSelectedPrintable: (p: Printable | null) => void;
  coloringPrintable: Printable | null;
  setColoringPrintable: (p: Printable | null) => void;
  worksheetPrintable: Printable | null;
  setWorksheetPrintable: (p: Printable | null) => void;

  isParentGateOpen: boolean;
  openParentGate: (onSuccess: () => void) => void;
  closeParentGate: () => void;
  verifyParentGate: (answer: number) => boolean;
  parentGateQuestion: { num1: number; num2: number; answer: number };

  isOnboardingOpen: boolean;
  setIsOnboardingOpen: (open: boolean) => void;
  activeModal: 'profiles' | 'parent-zone' | 'admin' | 'gallery' | 'history' | null;
  setActiveModal: (modal: 'profiles' | 'parent-zone' | 'admin' | 'gallery' | 'history' | null) => void;

  activeSeason: Season;
  setActiveSeason: (s: Season) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const SEED_CHILDREN: ChildProfile[] = [
  { id: 'child-1', name: 'Liam', age: 4, avatar: '🦁', artworksCount: 3, favoriteCategory: 'Coloring Pages' },
  { id: 'child-2', name: 'Maya', age: 7, avatar: '🦄', artworksCount: 5, favoriteCategory: 'Activity Sheets' }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load persisted states if available
  const [role, setRoleState] = useState<UserRole>('parent');
  const [childProfiles, setChildProfiles] = useState<ChildProfile[]>(() => {
    const saved = localStorage.getItem('ppk_children');
    return saved ? JSON.parse(saved) : SEED_CHILDREN;
  });
  const [activeChild, setActiveChildState] = useState<ChildProfile | null>(() => {
    return childProfiles[0] || null;
  });

  const [printables, setPrintables] = useState<Printable[]>(() => {
    const saved = localStorage.getItem('ppk_printables');
    return saved ? JSON.parse(saved) : PRINTABLES_DATA;
  });

  const [bundles] = useState<PrintableBundle[]>(BUNDLES);

  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('ppk_favs');
    return saved ? JSON.parse(saved) : ['color-trex-01', 'color-magical-unicorn', 'seasonal-halloween-pumpkin-patch'];
  });

  const [printHistory, setPrintHistory] = useState<PrintRecord[]>(() => {
    const saved = localStorage.getItem('ppk_history');
    return saved ? JSON.parse(saved) : [
      { id: 'pr-1', printableId: 'color-trex-01', printableTitle: 'Friendly T-Rex in the Jungle', timestamp: 'Yesterday', paperSize: 'US Letter', includedAnswerKey: false },
      { id: 'pr-2', printableId: 'trace-letter-a', printableTitle: 'Letter A Tracing: Alligator & Apple', timestamp: '3 days ago', paperSize: 'US Letter', includedAnswerKey: true }
    ];
  });

  const [artworks, setArtworks] = useState<SavedArtwork[]>(() => {
    const saved = localStorage.getItem('ppk_artworks');
    return saved ? JSON.parse(saved) : [];
  });

  const [subscription, setSubscription] = useState<UserSubscription>(() => {
    const saved = localStorage.getItem('ppk_sub');
    return saved ? JSON.parse(saved) : {
      plan: 'free',
      status: 'none',
      printsUsedThisWeek: 1,
      maxFreePrintsPerWeek: 3
    };
  });

  const [paperSize, setPaperSize] = useState<PaperSize>('US Letter');

  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    category: 'all',
    age: 'all',
    difficulty: 'all',
    type: 'all',
    season: 'all'
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [musicEnabled, setMusicEnabled] = useState<boolean>(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState<boolean>(() => {
    return !localStorage.getItem('ppk_onboarding_completed');
  });

  const [selectedPrintable, setSelectedPrintable] = useState<Printable | null>(null);
  const [coloringPrintable, setColoringPrintable] = useState<Printable | null>(null);
  const [worksheetPrintable, setWorksheetPrintable] = useState<Printable | null>(null);
  const [activeModal, setActiveModal] = useState<'profiles' | 'parent-zone' | 'admin' | 'gallery' | 'history' | null>(null);

  const [activeSeason, setActiveSeason] = useState<Season>('Halloween');

  // Parent Gate state
  const [isParentGateOpen, setIsParentGateOpen] = useState(false);
  const [parentGateQuestion, setParentGateQuestion] = useState({ num1: 7, num2: 4, answer: 28 });
  const [pendingGateSuccess, setPendingGateSuccess] = useState<(() => void) | null>(null);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem('ppk_children', JSON.stringify(childProfiles));
  }, [childProfiles]);

  useEffect(() => {
    localStorage.setItem('ppk_printables', JSON.stringify(printables));
  }, [printables]);

  useEffect(() => {
    localStorage.setItem('ppk_favs', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('ppk_history', JSON.stringify(printHistory));
  }, [printHistory]);

  useEffect(() => {
    localStorage.setItem('ppk_artworks', JSON.stringify(artworks));
  }, [artworks]);

  useEffect(() => {
    localStorage.setItem('ppk_sub', JSON.stringify(subscription));
  }, [subscription]);

  const setRole = (newRole: UserRole) => {
    sound.playPop();
    setRoleState(newRole);
    if (newRole === 'child') {
      // In child mode, close admin and parent modals
      if (activeModal === 'admin' || activeModal === 'parent-zone') {
        setActiveModal(null);
      }
    }
  };

  const setActiveChild = (child: ChildProfile | null) => {
    sound.playPop();
    setActiveChildState(child);
    if (child) {
      // Auto-filter by child age when switching in child mode
      setFilters(prev => ({
        ...prev,
        age: child.age <= 4 ? '3-4' : child.age <= 6 ? '5-6' : child.age <= 8 ? '7-8' : '9-10'
      }));
    }
  };

  const addChildProfile = (name: string, age: number, avatar: string) => {
    if (childProfiles.length >= 4) return;
    const newChild: ChildProfile = {
      id: `child-${Date.now()}`,
      name,
      age,
      avatar,
      artworksCount: 0
    };
    const updated = [...childProfiles, newChild];
    setChildProfiles(updated);
    setActiveChildState(newChild);
    sound.playStarChime();
  };

  const updateChildProfile = (profile: ChildProfile) => {
    setChildProfiles(prev => prev.map(p => (p.id === profile.id ? profile : p)));
    if (activeChild?.id === profile.id) {
      setActiveChildState(profile);
    }
  };

  const addPrintable = (p: Printable) => {
    setPrintables(prev => [p, ...prev]);
    sound.playStarChime();
  };

  const deletePrintable = (id: string) => {
    setPrintables(prev => prev.filter(p => p.id !== id));
  };

  const toggleFavorite = (id: string) => {
    sound.playPop();
    setFavorites(prev => {
      const exists = prev.includes(id);
      if (exists) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const recordPrint = (id: string, paperSize: PaperSize, includedAnswerKey: boolean) => {
    const item = printables.find(p => p.id === id);
    if (!item) return;

    sound.playPop();
    const newRecord: PrintRecord = {
      id: `print-${Date.now()}`,
      printableId: id,
      printableTitle: item.title,
      timestamp: 'Just now',
      paperSize,
      includedAnswerKey
    };

    setPrintHistory(prev => [newRecord, ...prev]);

    // Update printable printsCount
    setPrintables(prev => prev.map(p => p.id === id ? { ...p, printsCount: p.printsCount + 1 } : p));

    // Update free tier counter if on free plan
    if (subscription.plan === 'free') {
      setSubscription(prev => ({
        ...prev,
        printsUsedThisWeek: prev.printsUsedThisWeek + 1
      }));
    }
  };

  const saveArtwork = (artwork: Omit<SavedArtwork, 'id' | 'completedDate'>) => {
    sound.playStarChime();
    const newArtwork: SavedArtwork = {
      ...artwork,
      id: `art-${Date.now()}`,
      completedDate: 'Today'
    };
    setArtworks(prev => [newArtwork, ...prev]);

    // Increment child artworks count
    if (activeChild) {
      setChildProfiles(prev => prev.map(c => c.id === activeChild.id ? { ...c, artworksCount: c.artworksCount + 1 } : c));
    }
  };

  const deleteArtwork = (id: string) => {
    setArtworks(prev => prev.filter(a => a.id !== id));
  };

  const upgradeSubscription = (plan: 'monthly' | 'yearly') => {
    sound.playStarChime();
    setSubscription({
      plan,
      status: 'active',
      printsUsedThisWeek: 0,
      maxFreePrintsPerWeek: 9999
    });
  };

  const cancelSubscription = () => {
    setSubscription({
      plan: 'free',
      status: 'none',
      printsUsedThisWeek: 0,
      maxFreePrintsPerWeek: 3
    });
  };

  const resetFilters = () => {
    sound.playPop();
    setFilters({
      searchQuery: '',
      category: 'all',
      age: 'all',
      difficulty: 'all',
      type: 'all',
      season: 'all'
    });
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.setSoundEnabled(next);
  };

  const toggleMusic = () => {
    const next = !musicEnabled;
    setMusicEnabled(next);
    sound.toggleMusic(next);
  };

  const openParentGate = (onSuccess: () => void) => {
    const n1 = Math.floor(Math.random() * 8) + 2;
    const n2 = Math.floor(Math.random() * 8) + 2;
    setParentGateQuestion({ num1: n1, num2: n2, answer: n1 * n2 });
    setPendingGateSuccess(() => onSuccess);
    setIsParentGateOpen(true);
  };

  const closeParentGate = () => {
    setIsParentGateOpen(false);
    setPendingGateSuccess(null);
  };

  const verifyParentGate = (ans: number): boolean => {
    if (ans === parentGateQuestion.answer) {
      sound.playStarChime();
      setIsParentGateOpen(false);
      if (pendingGateSuccess) {
        pendingGateSuccess();
        setPendingGateSuccess(null);
      }
      return true;
    }
    return false;
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        activeChild,
        childProfiles,
        setActiveChild,
        addChildProfile,
        updateChildProfile,

        printables,
        bundles,
        addPrintable,
        deletePrintable,

        favorites,
        toggleFavorite,
        isFavorite,

        printHistory,
        recordPrint,

        artworks,
        saveArtwork,
        deleteArtwork,

        subscription,
        upgradeSubscription,
        cancelSubscription,

        paperSize,
        setPaperSize,

        filters,
        setFilters,
        resetFilters,

        soundEnabled,
        toggleSound,
        musicEnabled,
        toggleMusic,

        selectedPrintable,
        setSelectedPrintable,
        coloringPrintable,
        setColoringPrintable,
        worksheetPrintable,
        setWorksheetPrintable,

        isParentGateOpen,
        openParentGate,
        closeParentGate,
        verifyParentGate,
        parentGateQuestion,

        isOnboardingOpen,
        setIsOnboardingOpen,
        activeModal,
        setActiveModal,

        activeSeason,
        setActiveSeason
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
