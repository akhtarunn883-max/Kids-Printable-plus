export type UserRole = 'parent' | 'child' | 'admin';

export type PaperSize = 'US Letter' | 'A4';

export type AgeGroup = '3-4' | '5-6' | '7-8' | '9-10';

export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export type Season = 'Halloween' | 'Christmas' | 'Easter' | 'Back to School' | 'Ramadan' | 'Summer' | 'Valentine' | 'Thanksgiving' | 'General';

export interface ChildProfile {
  id: string;
  name: string;
  age: number;
  avatar: string; // emoji or avatar id
  favoriteCategory?: string;
  artworksCount: number;
}

export interface Printable {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  ageRange: AgeGroup;
  difficulty: DifficultyLevel;
  tags: string[];
  skills: string[];
  isPremium: boolean;
  season?: Season;
  svgContent: string; // Scalable vector artwork line art
  answerKeySvg?: string; // Optional answer key
  bundleId?: string;
  bundleTitle?: string;
  etsyUrl?: string;
  downloadsCount: number;
  printsCount: number;
  favoritesCount: number;
  addedDate: string;
  description: string;
  type: 'coloring' | 'worksheet' | 'activity' | 'chart';
}

export interface PrintableBundle {
  id: string;
  title: string;
  description: string;
  pageCount: number;
  price: string;
  etsyUrl: string;
  thumbnail: string;
  printablesCount: number;
  category: string;
  badge?: string;
}

export interface SavedArtwork {
  id: string;
  printableId: string;
  printableTitle: string;
  childId: string;
  childName: string;
  previewDataUrl: string; // Canvas image data or colored SVG
  completedDate: string;
}

export interface PrintRecord {
  id: string;
  printableId: string;
  printableTitle: string;
  timestamp: string;
  paperSize: PaperSize;
  includedAnswerKey: boolean;
}

export interface UserSubscription {
  plan: 'free' | 'monthly' | 'yearly';
  status: 'active' | 'trial' | 'none';
  printsUsedThisWeek: number;
  maxFreePrintsPerWeek: number;
  trialExpiresDate?: string;
}

export interface FilterState {
  searchQuery: string;
  category: string;
  age: string; // 'all' | '3-4' | '5-6' | '7-8' | '9-10'
  difficulty: string; // 'all' | 'Easy' | 'Medium' | 'Hard'
  type: string; // 'all' | 'free' | 'premium'
  season: string; // 'all' | Season
}
