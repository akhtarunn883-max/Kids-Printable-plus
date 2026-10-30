export interface CategoryInfo {
  id: string;
  name: string;
  slug: string;
  icon: string;
  badgeColor: string; // Tailwind background style
  textColor: string;
  borderColor: string;
  description: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'coloring-pages',
    name: 'Coloring Pages',
    slug: 'coloring-pages',
    icon: '🎨',
    badgeColor: 'bg-[#FFF2EB]',
    textColor: 'text-[#E06D53]',
    borderColor: 'border-[#FFD9CA]',
    description: 'Animals, dinosaurs, unicorns, vehicles, ocean, space, and mandalas'
  },
  {
    id: 'alphabet-tracing',
    name: 'Alphabet & Letters',
    slug: 'alphabet-tracing',
    icon: '🔤',
    badgeColor: 'bg-[#EBF7FD]',
    textColor: 'text-[#2D82B7]',
    borderColor: 'border-[#BCE3FA]',
    description: 'Uppercase, lowercase, cursive tracing & letter-sound phonics'
  },
  {
    id: 'number-math',
    name: 'Number & Math',
    slug: 'number-math',
    icon: '🔢',
    badgeColor: 'bg-[#F2FBF5]',
    textColor: 'text-[#2E8540]',
    borderColor: 'border-[#C8EED4]',
    description: 'Number tracing 1–20, counting, addition, shapes & patterns'
  },
  {
    id: 'activity-sheets',
    name: 'Activity Sheets',
    slug: 'activity-sheets',
    icon: '🧩',
    badgeColor: 'bg-[#F7F3FF]',
    textColor: 'text-[#7C5AC2]',
    borderColor: 'border-[#E0D4FC]',
    description: 'Mazes, dot-to-dot, word search, spot difference & cut-and-paste'
  },
  {
    id: 'fine-motor',
    name: 'Fine Motor Practice',
    slug: 'fine-motor',
    icon: '✂️',
    badgeColor: 'bg-[#FFF9EB]',
    textColor: 'text-[#B8871E]',
    borderColor: 'border-[#FDE7AA]',
    description: 'Wobbly line tracing, scissor cutting skills & pencil control'
  },
  {
    id: 'learning-charts',
    name: 'Learning Charts',
    slug: 'learning-charts',
    icon: '⭐',
    badgeColor: 'bg-[#EBFBF7]',
    textColor: 'text-[#1E8A7A]',
    borderColor: 'border-[#B2EFE2]',
    description: 'Chore charts, reward charts, morning routines & habit trackers'
  },
  {
    id: 'seasonal-holiday',
    name: 'Seasonal & Holiday',
    slug: 'seasonal-holiday',
    icon: '🎃',
    badgeColor: 'bg-[#FFF0F5]',
    textColor: 'text-[#C94A76]',
    borderColor: 'border-[#F9C5D5]',
    description: 'Halloween, Christmas, Ramadan, Easter, Summer & Thanksgiving'
  },
  {
    id: 'islamic-kids',
    name: 'Islamic Kids',
    slug: 'islamic-kids',
    icon: '🌙',
    badgeColor: 'bg-[#F0F9F8]',
    textColor: 'text-[#1F8A70]',
    borderColor: 'border-[#BFE8DF]',
    description: 'Arabic alphabet tracing, dua coloring pages & Ramadan activity sheets'
  },
  {
    id: 'puzzles-games',
    name: 'Puzzles & Games',
    slug: 'puzzles-games',
    icon: '🎲',
    badgeColor: 'bg-[#FFF5EB]',
    textColor: 'text-[#D96B27]',
    borderColor: 'border-[#FCD7B6]',
    description: 'Sudoku for kids, shadow matching, pattern quests & board sheets'
  },
  {
    id: 'flashcards-posters',
    name: 'Posters & Cards',
    slug: 'flashcards-posters',
    icon: '📇',
    badgeColor: 'bg-[#F6F7F9]',
    textColor: 'text-[#475569]',
    borderColor: 'border-[#E2E8F0]',
    description: 'Nursery wall art, emotion posters, sight words & flashcard sets'
  }
];
