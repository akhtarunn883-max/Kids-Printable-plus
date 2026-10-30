import { Printable } from '../types';

// Helper to generate clean, high-contrast SVG line-art with colorable regions
export const PRINTABLES_DATA: Printable[] = [
  // --- 1. COLORING PAGES ---
  {
    id: 'color-trex-01',
    title: 'Friendly T-Rex in the Jungle',
    category: 'Coloring Pages',
    subcategory: 'Dinosaurs',
    ageRange: '5-6',
    difficulty: 'Easy',
    tags: ['dinosaurs', 'jurassic', 't-rex', 'animals'],
    skills: ['Color recognition', 'Creativity', 'Pencil grip'],
    isPremium: false,
    season: 'General',
    bundleId: 'bundle-dino-25',
    bundleTitle: 'Dinosaur Adventure Mega Pack (25 Pages)',
    etsyUrl: 'https://etsy.com/shop/PrintPlayKids?section_id=dinosaurs',
    downloadsCount: 1420,
    printsCount: 2310,
    favoritesCount: 890,
    addedDate: '2026-10-15',
    description: 'A smiling, friendly Tyrannosaurus Rex stomping happily past prehistoric palm trees and volcanoes.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- Background clouds & sun -->
      <circle id="sun" cx="420" cy="80" r="40" fill="#FFFFFF" class="colorable" />
      <path id="sunrays" d="M420,25 L420,10 M465,45 L478,35 M475,80 L490,80 M465,115 L478,125 M375,45 L362,35 M365,80 L350,80" stroke-width="3" />
      <path id="cloud1" d="M60,90 Q80,60 110,80 Q140,55 170,80 Q190,105 160,115 L80,115 Q50,115 60,90 Z" fill="#FFFFFF" class="colorable" />
      <!-- Volcano -->
      <path id="volcano" d="M300,360 L380,210 L410,210 L480,360 Z" fill="#FFFFFF" class="colorable" />
      <path id="smoke" d="M395,200 Q380,160 410,130 Q430,100 400,70" stroke-width="3" stroke-dasharray="6,6" />
      <!-- Palm tree -->
      <path id="tree-trunk" d="M70,440 Q85,320 60,220 Q75,225 85,330 Q90,390 95,440 Z" fill="#FFFFFF" class="colorable" />
      <path id="leaf1" d="M65,220 Q20,190 10,230 Q40,225 65,220 Z" fill="#FFFFFF" class="colorable" />
      <path id="leaf2" d="M65,220 Q60,160 100,170 Q85,200 65,220 Z" fill="#FFFFFF" class="colorable" />
      <path id="leaf3" d="M65,220 Q120,190 135,230 Q100,225 65,220 Z" fill="#FFFFFF" class="colorable" />
      <!-- Ground line -->
      <path id="ground" d="M10,480 Q150,470 260,490 T500,480 L500,640 L0,640 Z" fill="#FFFFFF" class="colorable" />
      <!-- Little plants -->
      <path d="M40,470 Q45,450 50,470 M45,470 Q55,440 65,470 M430,480 Q435,460 445,480" stroke-width="3" />
      <!-- T-Rex Body -->
      <g id="dino-body">
        <!-- Tail -->
        <path id="tail" d="M160,380 C110,390 40,430 20,400 C60,370 120,330 160,330" fill="#FFFFFF" class="colorable" />
        <!-- Feet & Legs -->
        <path id="left-leg" d="M160,360 C140,410 150,460 140,490 L180,490 C185,460 190,420 180,360 Z" fill="#FFFFFF" class="colorable" />
        <path id="right-leg" d="M240,360 C230,410 240,460 230,500 L280,500 C285,460 290,410 270,360 Z" fill="#FFFFFF" class="colorable" />
        <!-- Claws -->
        <path d="M140,490 L135,500 L145,500 L155,500 L160,490" stroke-width="3" />
        <path d="M230,500 L225,510 L235,510 L245,510 L250,500" stroke-width="3" />
        <!-- Torso -->
        <path id="torso" d="M160,330 C170,250 200,220 250,220 C290,220 310,260 290,360 C260,410 180,410 160,330 Z" fill="#FFFFFF" class="colorable" />
        <!-- Head -->
        <path id="head" d="M240,240 C240,160 300,140 370,150 C410,160 410,210 370,230 C330,230 310,270 270,270 Z" fill="#FFFFFF" class="colorable" />
        <!-- Eye -->
        <circle id="eye-outer" cx="330" cy="180" r="14" fill="#FFFFFF" class="colorable" />
        <circle id="eye-pupil" cx="333" cy="180" r="6" fill="#1E293B" />
        <!-- Big Smile & Teeth -->
        <path d="M320,220 Q360,230 380,200" stroke-width="4" />
        <polygon points="340,220 345,212 350,221" fill="#FFFFFF" />
        <polygon points="355,221 360,213 365,222" fill="#FFFFFF" />
        <!-- Tiny T-Rex Arms -->
        <path id="arm" d="M270,280 C290,290 310,295 305,305 C295,310 270,295 260,290 Z" fill="#FFFFFF" class="colorable" />
        <!-- Dino Back Plates -->
        <polygon points="210,220 220,200 230,225" fill="#FFFFFF" class="colorable" />
        <polygon points="180,245 190,225 200,250" fill="#FFFFFF" class="colorable" />
        <polygon points="160,280 170,260 175,290" fill="#FFFFFF" class="colorable" />
      </g>
    </svg>`
  },
  {
    id: 'color-magical-unicorn',
    title: 'Magical Starlight Unicorn',
    category: 'Coloring Pages',
    subcategory: 'Unicorns & Fantasy',
    ageRange: '5-6',
    difficulty: 'Easy',
    tags: ['unicorn', 'stars', 'magic', 'rainbow', 'cute'],
    skills: ['Color harmony', 'Imagination', 'Fine motor'],
    isPremium: false,
    season: 'General',
    downloadsCount: 1980,
    printsCount: 3120,
    favoritesCount: 1450,
    addedDate: '2026-10-18',
    description: 'A sweet baby unicorn resting peacefully on a puffy cloud surrounded by twinkling night stars and a glowing rainbow.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- Rainbow Arc in background -->
      <path id="rainbow-1" d="M60,400 A220,220 0 0,1 440,400" stroke-width="14" stroke="#CBD5E1" class="colorable" />
      <path id="rainbow-2" d="M75,400 A205,205 0 0,1 425,400" stroke-width="14" stroke="#E2E8F0" class="colorable" />
      <path id="rainbow-3" d="M90,400 A190,190 0 0,1 410,400" stroke-width="14" stroke="#CBD5E1" class="colorable" />
      <!-- Stars -->
      <polygon id="star1" points="90,120 96,138 115,138 100,150 105,168 90,156 75,168 80,150 65,138 84,138" fill="#FFFFFF" class="colorable" />
      <polygon id="star2" points="400,100 405,115 420,115 408,124 412,139 400,129 388,139 392,124 380,115 395,115" fill="#FFFFFF" class="colorable" />
      <polygon id="star3" points="390,260 395,275 410,275 398,284 402,299 390,289 378,299 382,284 370,275 385,275" fill="#FFFFFF" class="colorable" />
      <!-- Big Fluffy Cloud Bed -->
      <path id="cloud-bed" d="M80,480 C50,480 30,450 50,420 C30,390 70,350 110,370 C140,330 210,330 240,370 C280,340 350,340 380,380 C420,360 470,400 450,440 C480,470 450,510 410,500 C390,530 330,530 300,510 C270,540 190,540 160,510 C130,530 90,520 80,480 Z" fill="#FFFFFF" class="colorable" />
      <!-- Unicorn Body -->
      <path id="unicorn-torso" d="M190,400 C180,340 220,310 270,320 C320,330 340,380 330,420 C300,440 210,435 190,400 Z" fill="#FFFFFF" class="colorable" />
      <!-- Unicorn Head & Neck -->
      <path id="unicorn-head" d="M210,350 L190,250 C180,240 160,230 150,250 C140,270 170,290 180,300 L190,370 Z" fill="#FFFFFF" class="colorable" />
      <!-- Snout & Heart Nostril -->
      <circle cx="160" cy="255" r="3" fill="#1E293B" />
      <!-- Sleeping Happy Eye with Eyelashes -->
      <path d="M195,245 Q205,255 215,245" stroke-width="3" />
      <path d="M200,253 L197,258 M206,254 L206,260 M212,253 L215,258" stroke-width="2" />
      <!-- Magical Horn -->
      <polygon id="unicorn-horn" points="195,210 210,140 220,205" fill="#FFFFFF" class="colorable" />
      <line x1="200" y1="185" x2="215" y2="190" stroke-width="2" />
      <line x1="205" y1="165" x2="213" y2="168" stroke-width="2" />
      <!-- Cute Mane Tufts -->
      <path id="mane-1" d="M215,210 Q240,200 245,230 Q225,235 215,225 Z" fill="#FFFFFF" class="colorable" />
      <path id="mane-2" d="M225,230 Q260,225 255,260 Q235,260 220,245 Z" fill="#FFFFFF" class="colorable" />
      <path id="mane-3" d="M225,260 Q265,270 250,300 Q230,290 220,275 Z" fill="#FFFFFF" class="colorable" />
      <!-- Cute Hooves -->
      <path id="hoof-front" d="M190,420 L190,440 L215,440 L215,420 Z" fill="#FFFFFF" class="colorable" />
      <path id="hoof-back" d="M290,420 L290,440 L315,440 L315,420 Z" fill="#FFFFFF" class="colorable" />
    </svg>`
  },
  {
    id: 'color-rocket-space-explorer',
    title: 'Zooming Rocket & Astronaut Cat',
    category: 'Coloring Pages',
    subcategory: 'Space & Astronomy',
    ageRange: '5-6',
    difficulty: 'Medium',
    tags: ['space', 'rocket', 'cat', 'planets', 'stars'],
    skills: ['Space discovery', 'Hand-eye coordination'],
    isPremium: true,
    season: 'General',
    downloadsCount: 1120,
    printsCount: 1840,
    favoritesCount: 760,
    addedDate: '2026-10-10',
    description: 'Blast off! An astronaut cat flying through the solar system with Saturn rings and shooting stars.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- Ringed Planet (Saturn) -->
      <circle id="saturn" cx="100" cy="120" r="45" fill="#FFFFFF" class="colorable" />
      <ellipse cx="100" cy="120" rx="75" ry="18" stroke-width="4" transform="rotate(-20 100 120)" />
      <!-- Small Crater Moon -->
      <circle id="moon" cx="410" cy="480" r="35" fill="#FFFFFF" class="colorable" />
      <circle cx="400" cy="470" r="8" stroke-width="2" />
      <circle cx="425" cy="490" r="5" stroke-width="2" />
      <!-- Main Rocket Ship -->
      <g id="rocket" transform="translate(140, 160) rotate(25 100 150)">
        <!-- Rocket Body -->
        <path id="rocket-body" d="M70,30 Q100,0 130,30 L150,180 L50,180 Z" fill="#FFFFFF" class="colorable" />
        <path id="rocket-nose" d="M70,30 Q100,0 130,30 L125,70 L75,70 Z" fill="#FFFFFF" class="colorable" />
        <!-- Porthole Window -->
        <circle id="window-frame" cx="100" cy="110" r="28" fill="#FFFFFF" stroke-width="4" class="colorable" />
        <!-- Astronaut Kitty inside -->
        <circle cx="100" cy="115" r="16" fill="#FFFFFF" stroke-width="3" class="colorable" />
        <!-- Kitty ears -->
        <polygon points="88,103 93,92 98,103" stroke-width="2" fill="#FFFFFF" />
        <polygon points="102,103 107,92 112,103" stroke-width="2" fill="#FFFFFF" />
        <!-- Kitty face -->
        <circle cx="95" cy="113" r="2" fill="#1E293B" />
        <circle cx="105" cy="113" r="2" fill="#1E293B" />
        <path d="M98,118 Q100,121 102,118" stroke-width="2" />
        <!-- Fins -->
        <path id="left-fin" d="M50,150 L10,195 L50,180 Z" fill="#FFFFFF" class="colorable" />
        <path id="right-fin" d="M150,150 L190,195 L150,180 Z" fill="#FFFFFF" class="colorable" />
        <!-- Exhaust Flames -->
        <path id="fire-outer" d="M65,185 Q100,270 135,185 Q115,225 100,200 Q85,225 65,185 Z" fill="#FFFFFF" class="colorable" />
        <path id="fire-inner" d="M78,185 Q100,240 122,185 Z" fill="#FFFFFF" class="colorable" />
      </g>
      <!-- Twinkling stars -->
      <path d="M420,160 L425,175 L440,175 L428,185 L432,200 L420,190 L408,200 L412,185 L400,175 L415,175 Z" fill="#FFFFFF" class="colorable" />
      <path d="M60,320 L64,330 L75,330 L66,337 L69,348 L60,340 L51,348 L54,337 L45,330 L56,330 Z" fill="#FFFFFF" class="colorable" />
    </svg>`
  },
  {
    id: 'color-underwater-coral-reef',
    title: 'Happy Clownfish & Coral Kingdom',
    category: 'Coloring Pages',
    subcategory: 'Ocean Life',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['ocean', 'fish', 'coral', 'sea', 'underwater'],
    skills: ['Fine motor control', 'Color matching'],
    isPremium: false,
    season: 'General',
    downloadsCount: 1650,
    printsCount: 2890,
    favoritesCount: 920,
    addedDate: '2026-10-12',
    description: 'A cheerful clownfish swimming near sea anemones, bubbles, and sea stars at the ocean floor.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- Sea bubbles -->
      <circle id="bubble1" cx="120" cy="140" r="14" fill="#FFFFFF" class="colorable" />
      <circle id="bubble2" cx="140" cy="90" r="8" fill="#FFFFFF" class="colorable" />
      <circle id="bubble3" cx="360" cy="160" r="18" fill="#FFFFFF" class="colorable" />
      <circle id="bubble4" cx="380" cy="110" r="10" fill="#FFFFFF" class="colorable" />
      <!-- Sea floor -->
      <path id="sand" d="M0,520 Q120,490 250,530 T500,510 L500,650 L0,650 Z" fill="#FFFFFF" class="colorable" />
      <!-- Starfish on sand -->
      <polygon id="starfish" points="390,560 400,575 418,572 408,586 415,602 398,594 382,604 386,587 374,575 390,575" fill="#FFFFFF" class="colorable" />
      <!-- Sea Anemone & Seaweed -->
      <path id="seaweed1" d="M60,530 Q30,420 70,320 Q40,430 75,530" fill="#FFFFFF" class="colorable" />
      <path id="seaweed2" d="M90,530 Q120,410 85,280 Q130,420 105,530" fill="#FFFFFF" class="colorable" />
      <!-- Clownfish -->
      <g id="fish" transform="translate(140, 220)">
        <!-- Tail -->
        <path id="fish-tail" d="M40,90 L-10,50 Q10,90 -10,130 Z" fill="#FFFFFF" class="colorable" />
        <!-- Body -->
        <ellipse id="fish-body" cx="120" cy="90" rx="90" ry="60" fill="#FFFFFF" class="colorable" />
        <!-- Stripes -->
        <path id="stripe1" d="M100,32 C120,60 120,120 100,148 C115,148 135,60 115,32 Z" fill="#FFFFFF" class="colorable" />
        <path id="stripe2" d="M160,42 C175,65 175,115 160,138 C172,138 185,65 172,42 Z" fill="#FFFFFF" class="colorable" />
        <!-- Big Eye -->
        <circle id="fish-eye" cx="170" cy="75" r="12" fill="#FFFFFF" class="colorable" />
        <circle cx="173" cy="75" r="5" fill="#1E293B" />
        <!-- Smile -->
        <path d="M195,95 Q185,110 170,105" stroke-width="3" />
        <!-- Fins -->
        <path id="fin-top" d="M90,32 Q130,10 170,35 Z" fill="#FFFFFF" class="colorable" />
        <path id="fin-side" d="M110,95 Q135,115 110,125 Z" fill="#FFFFFF" class="colorable" />
      </g>
    </svg>`
  },

  // --- 2. ALPHABET & LETTER TRACING ---
  {
    id: 'trace-letter-a',
    title: 'Letter A Tracing: Alligator & Apple',
    category: 'Alphabet & Letters',
    subcategory: 'Uppercase & Lowercase',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['alphabet', 'tracing', 'letter a', 'phonics', 'preschool'],
    skills: ['Pencil grip', 'Letter recognition', 'Phonics /a/ sound'],
    isPremium: false,
    season: 'General',
    downloadsCount: 3200,
    printsCount: 4890,
    favoritesCount: 1670,
    addedDate: '2026-10-01',
    description: 'Learn letter A! Trace big A and little a with numbered stroke arrows, then color the cute apple.',
    type: 'worksheet',
    answerKeySvg: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="650" fill="#F8FAFC" />
      <text x="250" y="80" font-size="24" text-anchor="middle" font-weight="bold" fill="#0F172A">Letter A Solution Guide</text>
      <text x="250" y="130" font-size="16" text-anchor="middle" fill="#475569">Stroke 1: Top down-left / Stroke 2: Top down-right / Stroke 3: Bar across</text>
      <path d="M140,280 L200,160 L260,280" stroke="#22C55E" stroke-width="12" fill="none" stroke-linecap="round" />
      <path d="M165,240 L235,240" stroke="#22C55E" stroke-width="12" stroke-linecap="round" />
      <text x="250" y="360" font-size="20" text-anchor="middle" font-weight="bold" fill="#166534">Correct Tracing Verified</text>
    </svg>`,
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- Title Box -->
      <rect x="30" y="20" width="440" height="90" rx="16" fill="#F1F5F9" stroke-width="2" />
      <text x="50" y="65" font-family="'Fredoka', sans-serif" font-size="34" font-weight="bold" fill="#0F172A" stroke="none">A is for Apple</text>
      <text x="50" y="92" font-size="14" fill="#64748B" stroke="none">Say: /a/ - /a/ - Apple!</text>
      <!-- Apple Illustration to color -->
      <g transform="translate(360, 25)" stroke-width="2">
        <path d="M25,18 C25,8 35,4 40,4 C42,12 36,18 28,18 Z" fill="#FFFFFF" class="colorable" />
        <path d="M25,18 C15,10 0,25 0,45 C0,65 20,70 25,65 C30,70 50,65 50,45 C50,25 35,10 25,18 Z" fill="#FFFFFF" class="colorable" />
      </g>
      <!-- Big Giant Guide Letter A -->
      <g transform="translate(60, 140)">
        <!-- Dotted Guidelines -->
        <line x1="0" y1="20" x2="380" y2="20" stroke="#94A3B8" stroke-dasharray="4,4" />
        <line x1="0" y1="90" x2="380" y2="90" stroke="#CBD5E1" stroke-dasharray="6,6" />
        <line x1="0" y1="160" x2="380" y2="160" stroke="#94A3B8" stroke-dasharray="4,4" />
        <!-- Big A with Stroke arrows -->
        <text x="60" y="145" font-family="'Fredoka', sans-serif" font-size="150" font-weight="bold" fill="none" stroke="#CBD5E1" stroke-width="6" stroke-dasharray="8,6">A</text>
        <!-- Arrow 1 -->
        <circle cx="85" cy="40" r="10" fill="#3B82F6" stroke="none" />
        <text x="85" y="44" font-size="11" fill="white" font-weight="bold" text-anchor="middle" stroke="none">1</text>
        <!-- Arrow 2 -->
        <circle cx="140" cy="40" r="10" fill="#3B82F6" stroke="none" />
        <text x="140" y="44" font-size="11" fill="white" font-weight="bold" text-anchor="middle" stroke="none">2</text>
        <!-- Arrow 3 -->
        <circle cx="95" cy="115" r="10" fill="#3B82F6" stroke="none" />
        <text x="95" y="119" font-size="11" fill="white" font-weight="bold" text-anchor="middle" stroke="none">3</text>
        <!-- Lowercase a with stroke arrows -->
        <text x="230" y="145" font-family="'Fredoka', sans-serif" font-size="140" font-weight="bold" fill="none" stroke="#CBD5E1" stroke-width="6" stroke-dasharray="8,6">a</text>
      </g>
      <!-- Tracing Practice Lines -->
      <g transform="translate(30, 340)">
        <text x="10" y="0" font-size="16" font-weight="bold" fill="#334155" stroke="none">Trace the uppercase letters:</text>
        <!-- Row 1 -->
        <rect x="0" y="15" width="440" height="70" rx="8" fill="#F8FAFC" stroke-width="1.5" stroke="#E2E8F0" />
        <line x1="0" y1="50" x2="440" y2="50" stroke="#94A3B8" stroke-dasharray="4,4" />
        <text x="40" y="68" font-family="'Fredoka', sans-serif" font-size="52" fill="none" stroke="#64748B" stroke-width="2">A</text>
        <text x="120" y="68" font-family="'Fredoka', sans-serif" font-size="52" fill="none" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4">A</text>
        <text x="200" y="68" font-family="'Fredoka', sans-serif" font-size="52" fill="none" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4">A</text>
        <text x="280" y="68" font-family="'Fredoka', sans-serif" font-size="52" fill="none" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4">A</text>
        <text x="360" y="68" font-family="'Fredoka', sans-serif" font-size="52" fill="none" stroke="#E2E8F0" stroke-width="2" stroke-dasharray="4,4">A</text>
        <!-- Row 2 -->
        <text x="10" y="115" font-size="16" font-weight="bold" fill="#334155" stroke="none">Trace the lowercase letters:</text>
        <rect x="0" y="130" width="440" height="70" rx="8" fill="#F8FAFC" stroke-width="1.5" stroke="#E2E8F0" />
        <line x1="0" y1="165" x2="440" y2="165" stroke="#94A3B8" stroke-dasharray="4,4" />
        <text x="40" y="180" font-family="'Fredoka', sans-serif" font-size="50" fill="none" stroke="#64748B" stroke-width="2">a</text>
        <text x="120" y="180" font-family="'Fredoka', sans-serif" font-size="50" fill="none" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4">a</text>
        <text x="200" y="180" font-family="'Fredoka', sans-serif" font-size="50" fill="none" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4">a</text>
        <text x="280" y="180" font-family="'Fredoka', sans-serif" font-size="50" fill="none" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4">a</text>
        <text x="360" y="180" font-family="'Fredoka', sans-serif" font-size="50" fill="none" stroke="#E2E8F0" stroke-width="2" stroke-dasharray="4,4">a</text>
        <!-- Row 3: Word tracing -->
        <text x="10" y="230" font-size="16" font-weight="bold" fill="#334155" stroke="none">Trace the word:</text>
        <rect x="0" y="245" width="440" height="60" rx="8" fill="#F8FAFC" stroke-width="1.5" stroke="#E2E8F0" />
        <text x="40" y="290" font-family="'Fredoka', sans-serif" font-size="38" fill="none" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4">ant</text>
        <text x="160" y="290" font-family="'Fredoka', sans-serif" font-size="38" fill="none" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4">acorn</text>
        <text x="300" y="290" font-family="'Fredoka', sans-serif" font-size="38" fill="none" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4">apple</text>
      </g>
    </svg>`
  },
  {
    id: 'trace-letter-b',
    title: 'Letter B Tracing: Bear & Butterfly',
    category: 'Alphabet & Letters',
    subcategory: 'Uppercase & Lowercase',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['alphabet', 'tracing', 'letter b', 'phonics', 'bear'],
    skills: ['Pencil grip', 'Hand coordination'],
    isPremium: false,
    season: 'General',
    downloadsCount: 2840,
    printsCount: 4120,
    favoritesCount: 1290,
    addedDate: '2026-10-02',
    description: 'Learn letter B! Practice straight down lines and double rounded loops with guided arrows.',
    type: 'worksheet',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect x="30" y="20" width="440" height="90" rx="16" fill="#F0FDF4" stroke-width="2" stroke="#BBF7D0" />
      <text x="50" y="65" font-family="'Fredoka', sans-serif" font-size="34" font-weight="bold" fill="#14532D" stroke="none">B is for Bear</text>
      <text x="50" y="92" font-size="14" fill="#15803D" stroke="none">Say: /b/ - /b/ - Bear!</text>
      <!-- Bear icon to color -->
      <g transform="translate(370, 28)" stroke-width="2">
        <circle cx="30" cy="35" r="22" fill="#FFFFFF" class="colorable" />
        <circle cx="14" cy="18" r="8" fill="#FFFFFF" class="colorable" />
        <circle cx="46" cy="18" r="8" fill="#FFFFFF" class="colorable" />
        <circle cx="23" cy="30" r="3" fill="#1E293B" />
        <circle cx="37" cy="30" r="3" fill="#1E293B" />
        <ellipse cx="30" cy="40" rx="8" ry="6" fill="#F1F5F9" />
        <circle cx="30" cy="38" r="2" fill="#1E293B" />
      </g>
      <!-- Big B Guide -->
      <g transform="translate(60, 140)">
        <text x="60" y="145" font-family="'Fredoka', sans-serif" font-size="150" font-weight="bold" fill="none" stroke="#CBD5E1" stroke-width="6" stroke-dasharray="8,6">B</text>
        <text x="230" y="145" font-family="'Fredoka', sans-serif" font-size="140" font-weight="bold" fill="none" stroke="#CBD5E1" stroke-width="6" stroke-dasharray="8,6">b</text>
        <circle cx="80" cy="35" r="10" fill="#22C55E" stroke="none" />
        <text x="80" y="39" font-size="11" fill="white" font-weight="bold" text-anchor="middle" stroke="none">1</text>
      </g>
      <!-- Tracing Rows -->
      <g transform="translate(30, 340)">
        <text x="10" y="0" font-size="16" font-weight="bold" fill="#334155" stroke="none">Trace uppercase B:</text>
        <rect x="0" y="15" width="440" height="70" rx="8" fill="#F8FAFC" stroke-width="1.5" stroke="#E2E8F0" />
        <line x1="0" y1="50" x2="440" y2="50" stroke="#94A3B8" stroke-dasharray="4,4" />
        <text x="40" y="68" font-family="'Fredoka', sans-serif" font-size="52" fill="none" stroke="#64748B" stroke-width="2">B</text>
        <text x="130" y="68" font-family="'Fredoka', sans-serif" font-size="52" fill="none" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4">B</text>
        <text x="220" y="68" font-family="'Fredoka', sans-serif" font-size="52" fill="none" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4">B</text>
        <text x="310" y="68" font-family="'Fredoka', sans-serif" font-size="52" fill="none" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4">B</text>
        <!-- Lowercase Row -->
        <text x="10" y="115" font-size="16" font-weight="bold" fill="#334155" stroke="none">Trace lowercase b:</text>
        <rect x="0" y="130" width="440" height="70" rx="8" fill="#F8FAFC" stroke-width="1.5" stroke="#E2E8F0" />
        <line x1="0" y1="165" x2="440" y2="165" stroke="#94A3B8" stroke-dasharray="4,4" />
        <text x="40" y="180" font-family="'Fredoka', sans-serif" font-size="50" fill="none" stroke="#64748B" stroke-width="2">b</text>
        <text x="130" y="180" font-family="'Fredoka', sans-serif" font-size="50" fill="none" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4">b</text>
        <text x="220" y="180" font-family="'Fredoka', sans-serif" font-size="50" fill="none" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4">b</text>
        <text x="310" y="180" font-family="'Fredoka', sans-serif" font-size="50" fill="none" stroke="#E2E8F0" stroke-width="2" stroke-dasharray="4,4">b</text>
      </g>
    </svg>`
  },

  // --- 3. NUMBER & MATH ---
  {
    id: 'math-counting-garden-1-5',
    title: 'Garden Counting & Numbers 1–5',
    category: 'Number & Math',
    subcategory: 'Counting & Tracing',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['numbers', 'counting', 'math', 'garden', 'preschool'],
    skills: ['Counting 1-5', 'Number recognition', 'Quantity matching'],
    isPremium: false,
    season: 'General',
    downloadsCount: 2410,
    printsCount: 3650,
    favoritesCount: 1180,
    addedDate: '2026-10-05',
    description: 'Count the friendly garden bugs and flowers, trace the numbers, and color the matching quantity boxes!',
    type: 'worksheet',
    answerKeySvg: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="650" fill="#F0FDF4" />
      <text x="250" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#14532D">Answer Key: Garden Counting</text>
      <text x="80" y="160" font-size="18" font-weight="bold" fill="#15803D">Row 1: 1 Snail</text>
      <text x="80" y="240" font-size="18" font-weight="bold" fill="#15803D">Row 2: 2 Ladybugs</text>
      <text x="80" y="320" font-size="18" font-weight="bold" fill="#15803D">Row 3: 3 Sunflowers</text>
      <text x="80" y="400" font-size="18" font-weight="bold" fill="#15803D">Row 4: 4 Busy Bees</text>
      <text x="80" y="480" font-size="18" font-weight="bold" fill="#15803D">Row 5: 5 Little Worms</text>
    </svg>`,
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- Header -->
      <rect x="25" y="15" width="450" height="70" rx="14" fill="#F0FDF4" stroke="#86EFAC" stroke-width="2" />
      <text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#166534" stroke="none">Garden Counting Fun!</text>
      <text x="45" y="72" font-size="13" fill="#15803D" stroke="none">Count each group, then trace the number on the right.</text>
      <!-- Row 1: 1 Snail -->
      <g transform="translate(30, 105)">
        <rect x="0" y="0" width="440" height="85" rx="12" fill="#F8FAFC" stroke-width="1.5" stroke="#E2E8F0" />
        <!-- Snail -->
        <g transform="translate(60, 20)">
          <circle cx="25" cy="25" r="18" fill="#FFFFFF" class="colorable" />
          <path d="M10,40 Q25,45 50,40 Q60,35 65,40 L0,40 Z" fill="#FFFFFF" class="colorable" />
        </g>
        <line x1="280" y1="10" x2="280" y2="75" stroke="#CBD5E1" stroke-dasharray="4,4" />
        <text x="350" y="62" font-family="'Fredoka', sans-serif" font-size="64" font-weight="bold" fill="none" stroke="#64748B" stroke-width="3" stroke-dasharray="6,4">1</text>
      </g>
      <!-- Row 2: 2 Ladybugs -->
      <g transform="translate(30, 205)">
        <rect x="0" y="0" width="440" height="85" rx="12" fill="#F8FAFC" stroke-width="1.5" stroke="#E2E8F0" />
        <g transform="translate(30, 22)">
          <circle cx="20" cy="22" r="16" fill="#FFFFFF" class="colorable" />
          <line x1="20" y1="6" x2="20" y2="38" stroke-width="2" />
          <circle cx="14" cy="18" r="2.5" fill="#1E293B" />
          <circle cx="26" cy="26" r="2.5" fill="#1E293B" />
        </g>
        <g transform="translate(85, 22)">
          <circle cx="20" cy="22" r="16" fill="#FFFFFF" class="colorable" />
          <line x1="20" y1="6" x2="20" y2="38" stroke-width="2" />
          <circle cx="14" cy="18" r="2.5" fill="#1E293B" />
          <circle cx="26" cy="26" r="2.5" fill="#1E293B" />
        </g>
        <line x1="280" y1="10" x2="280" y2="75" stroke="#CBD5E1" stroke-dasharray="4,4" />
        <text x="345" y="62" font-family="'Fredoka', sans-serif" font-size="64" font-weight="bold" fill="none" stroke="#64748B" stroke-width="3" stroke-dasharray="6,4">2</text>
      </g>
      <!-- Row 3: 3 Sunflowers -->
      <g transform="translate(30, 305)">
        <rect x="0" y="0" width="440" height="85" rx="12" fill="#F8FAFC" stroke-width="1.5" stroke="#E2E8F0" />
        <g transform="translate(30, 20)">
          <circle cx="18" cy="22" r="9" fill="#FFFFFF" class="colorable" />
          <circle cx="18" cy="22" r="16" stroke-dasharray="4,3" />
        </g>
        <g transform="translate(80, 20)">
          <circle cx="18" cy="22" r="9" fill="#FFFFFF" class="colorable" />
          <circle cx="18" cy="22" r="16" stroke-dasharray="4,3" />
        </g>
        <g transform="translate(130, 20)">
          <circle cx="18" cy="22" r="9" fill="#FFFFFF" class="colorable" />
          <circle cx="18" cy="22" r="16" stroke-dasharray="4,3" />
        </g>
        <line x1="280" y1="10" x2="280" y2="75" stroke="#CBD5E1" stroke-dasharray="4,4" />
        <text x="345" y="62" font-family="'Fredoka', sans-serif" font-size="64" font-weight="bold" fill="none" stroke="#64748B" stroke-width="3" stroke-dasharray="6,4">3</text>
      </g>
      <!-- Row 4: 4 Bees -->
      <g transform="translate(30, 405)">
        <rect x="0" y="0" width="440" height="85" rx="12" fill="#F8FAFC" stroke-width="1.5" stroke="#E2E8F0" />
        <g transform="translate(20, 20)"><ellipse cx="18" cy="22" rx="14" ry="10" fill="#FFFFFF" class="colorable" /></g>
        <g transform="translate(60, 20)"><ellipse cx="18" cy="22" rx="14" ry="10" fill="#FFFFFF" class="colorable" /></g>
        <g transform="translate(100, 20)"><ellipse cx="18" cy="22" rx="14" ry="10" fill="#FFFFFF" class="colorable" /></g>
        <g transform="translate(140, 20)"><ellipse cx="18" cy="22" rx="14" ry="10" fill="#FFFFFF" class="colorable" /></g>
        <line x1="280" y1="10" x2="280" y2="75" stroke="#CBD5E1" stroke-dasharray="4,4" />
        <text x="345" y="62" font-family="'Fredoka', sans-serif" font-size="64" font-weight="bold" fill="none" stroke="#64748B" stroke-width="3" stroke-dasharray="6,4">4</text>
      </g>
      <!-- Row 5: 5 -->
      <g transform="translate(30, 505)">
        <rect x="0" y="0" width="440" height="85" rx="12" fill="#F8FAFC" stroke-width="1.5" stroke="#E2E8F0" />
        <g transform="translate(20, 25)"><circle cx="12" cy="18" r="8" fill="#FFFFFF" class="colorable" /></g>
        <g transform="translate(55, 25)"><circle cx="12" cy="18" r="8" fill="#FFFFFF" class="colorable" /></g>
        <g transform="translate(90, 25)"><circle cx="12" cy="18" r="8" fill="#FFFFFF" class="colorable" /></g>
        <g transform="translate(125, 25)"><circle cx="12" cy="18" r="8" fill="#FFFFFF" class="colorable" /></g>
        <g transform="translate(160, 25)"><circle cx="12" cy="18" r="8" fill="#FFFFFF" class="colorable" /></g>
        <line x1="280" y1="10" x2="280" y2="75" stroke="#CBD5E1" stroke-dasharray="4,4" />
        <text x="345" y="62" font-family="'Fredoka', sans-serif" font-size="64" font-weight="bold" fill="none" stroke="#64748B" stroke-width="3" stroke-dasharray="6,4">5</text>
      </g>
    </svg>`
  },
  {
    id: 'math-addition-dino-bones',
    title: 'Dino Fossil Dig: Beginner Addition',
    category: 'Number & Math',
    subcategory: 'Addition & Subtraction',
    ageRange: '5-6',
    difficulty: 'Medium',
    tags: ['addition', 'math', 'dinosaurs', 'kindergarten', 'worksheet'],
    skills: ['Addition within 10', 'Number bonds'],
    isPremium: true,
    season: 'General',
    bundleId: 'bundle-dino-25',
    bundleTitle: 'Dinosaur Adventure Mega Pack (25 Pages)',
    etsyUrl: 'https://etsy.com/shop/PrintPlayKids?section_id=dinosaurs',
    downloadsCount: 1890,
    printsCount: 2750,
    favoritesCount: 940,
    addedDate: '2026-10-14',
    description: 'Add the dinosaur footprint fossils together! 2 + 3 = ?, 4 + 2 = ? with visual counters.',
    type: 'worksheet',
    answerKeySvg: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="650" fill="#FFFBEB" />
      <text x="250" y="80" font-size="24" font-weight="bold" text-anchor="middle" fill="#92400E">Addition Answer Key</text>
      <text x="120" y="170" font-size="22" font-weight="bold" fill="#78350F">2 + 3 = 5</text>
      <text x="120" y="270" font-size="22" font-weight="bold" fill="#78350F">4 + 2 = 6</text>
      <text x="120" y="370" font-size="22" font-weight="bold" fill="#78350F">3 + 4 = 7</text>
      <text x="120" y="470" font-size="22" font-weight="bold" fill="#78350F">5 + 5 = 10</text>
    </svg>`,
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect x="25" y="15" width="450" height="70" rx="14" fill="#FEF3C7" stroke="#FCD34D" stroke-width="2" />
      <text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#78350F" stroke="none">Dino Addition Dig</text>
      <text x="45" y="72" font-size="13" fill="#92400E" stroke="none">Count the dino footprints and write the total sum in the box.</text>
      <!-- Problem 1: 2 + 3 -->
      <g transform="translate(30, 110)">
        <rect x="0" y="0" width="440" height="95" rx="12" fill="#F8FAFC" stroke-width="1.5" stroke="#CBD5E1" />
        <text x="40" y="60" font-family="'Fredoka', sans-serif" font-size="44" font-weight="bold" fill="#1E293B" stroke="none">2</text>
        <text x="110" y="60" font-family="'Fredoka', sans-serif" font-size="40" font-weight="bold" fill="#F59E0B" stroke="none">+</text>
        <text x="170" y="60" font-family="'Fredoka', sans-serif" font-size="44" font-weight="bold" fill="#1E293B" stroke="none">3</text>
        <text x="240" y="60" font-family="'Fredoka', sans-serif" font-size="40" font-weight="bold" fill="#64748B" stroke="none">=</text>
        <rect x="300" y="15" width="100" height="65" rx="8" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4" />
      </g>
      <!-- Problem 2: 4 + 2 -->
      <g transform="translate(30, 225)">
        <rect x="0" y="0" width="440" height="95" rx="12" fill="#F8FAFC" stroke-width="1.5" stroke="#CBD5E1" />
        <text x="40" y="60" font-family="'Fredoka', sans-serif" font-size="44" font-weight="bold" fill="#1E293B" stroke="none">4</text>
        <text x="110" y="60" font-family="'Fredoka', sans-serif" font-size="40" font-weight="bold" fill="#F59E0B" stroke="none">+</text>
        <text x="170" y="60" font-family="'Fredoka', sans-serif" font-size="44" font-weight="bold" fill="#1E293B" stroke="none">2</text>
        <text x="240" y="60" font-family="'Fredoka', sans-serif" font-size="40" font-weight="bold" fill="#64748B" stroke="none">=</text>
        <rect x="300" y="15" width="100" height="65" rx="8" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4" />
      </g>
      <!-- Problem 3: 3 + 4 -->
      <g transform="translate(30, 340)">
        <rect x="0" y="0" width="440" height="95" rx="12" fill="#F8FAFC" stroke-width="1.5" stroke="#CBD5E1" />
        <text x="40" y="60" font-family="'Fredoka', sans-serif" font-size="44" font-weight="bold" fill="#1E293B" stroke="none">3</text>
        <text x="110" y="60" font-family="'Fredoka', sans-serif" font-size="40" font-weight="bold" fill="#F59E0B" stroke="none">+</text>
        <text x="170" y="60" font-family="'Fredoka', sans-serif" font-size="44" font-weight="bold" fill="#1E293B" stroke="none">4</text>
        <text x="240" y="60" font-family="'Fredoka', sans-serif" font-size="40" font-weight="bold" fill="#64748B" stroke="none">=</text>
        <rect x="300" y="15" width="100" height="65" rx="8" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4" />
      </g>
      <!-- Problem 4: 5 + 5 -->
      <g transform="translate(30, 455)">
        <rect x="0" y="0" width="440" height="95" rx="12" fill="#F8FAFC" stroke-width="1.5" stroke="#CBD5E1" />
        <text x="40" y="60" font-family="'Fredoka', sans-serif" font-size="44" font-weight="bold" fill="#1E293B" stroke="none">5</text>
        <text x="110" y="60" font-family="'Fredoka', sans-serif" font-size="40" font-weight="bold" fill="#F59E0B" stroke="none">+</text>
        <text x="170" y="60" font-family="'Fredoka', sans-serif" font-size="44" font-weight="bold" fill="#1E293B" stroke="none">5</text>
        <text x="240" y="60" font-family="'Fredoka', sans-serif" font-size="40" font-weight="bold" fill="#64748B" stroke="none">=</text>
        <rect x="300" y="15" width="100" height="65" rx="8" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4" />
      </g>
    </svg>`
  },

  // --- 4. ACTIVITY SHEETS: MAZES & DOT-TO-DOT ---
  {
    id: 'activity-space-maze-alien',
    title: 'Help the Little Alien Reach the Rocket',
    category: 'Activity Sheets',
    subcategory: 'Mazes',
    ageRange: '5-6',
    difficulty: 'Medium',
    tags: ['maze', 'puzzle', 'space', 'alien', 'activities'],
    skills: ['Problem solving', 'Spatial reasoning', 'Pencil control'],
    isPremium: false,
    season: 'General',
    downloadsCount: 3100,
    printsCount: 4500,
    favoritesCount: 1340,
    addedDate: '2026-10-09',
    description: 'Guide Pippo the friendly one-eyed alien through the cosmic asteroid maze to reach his rocket ship!',
    type: 'activity',
    answerKeySvg: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="650" fill="#FAF5FF" />
      <text x="250" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#581C87">Space Maze Solution</text>
      <path d="M100,160 L100,240 L200,240 L200,320 L120,320 L120,440 L280,440 L280,360 L380,360 L380,500" stroke="#8B5CF6" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="100" cy="160" r="12" fill="#22C55E" />
      <circle cx="380" cy="500" r="12" fill="#E11D48" />
    </svg>`,
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- Title banner -->
      <rect x="25" y="15" width="450" height="70" rx="14" fill="#F5F3FF" stroke="#C4B5FD" stroke-width="2" />
      <text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="26" font-weight="bold" fill="#5B21B6" stroke="none">Cosmic Asteroid Maze</text>
      <text x="45" y="72" font-size="13" fill="#6D28D9" stroke="none">START at Alien Pippo and find the clear path to the Rocket!</text>
      <!-- Little Alien at Start -->
      <g transform="translate(40, 110)">
        <text x="0" y="0" font-size="14" font-weight="bold" fill="#22C55E" stroke="none">START ➔</text>
        <circle cx="30" cy="40" r="22" fill="#FFFFFF" class="colorable" />
        <circle cx="30" cy="35" r="9" fill="#1E293B" />
        <circle cx="32" cy="33" r="3" fill="#FFFFFF" />
        <path d="M22,50 Q30,55 38,50" stroke-width="2" />
        <line x1="30" y1="18" x2="30" y2="8" stroke-width="3" />
        <circle cx="30" cy="6" r="4" fill="#22C55E" />
      </g>
      <!-- Maze Grid Walls -->
      <g transform="translate(110, 110)" stroke="#1E293B" stroke-width="4">
        <!-- Outer boundary with start (top left) and end (bottom right) -->
        <path d="M0,40 L0,420 L280,420 L280,360" />
        <path d="M40,0 L320,0 L320,380" />
        <!-- Internal Maze corridors -->
        <path d="M60,0 L60,120 L140,120" />
        <path d="M120,60 L240,60 L240,120" />
        <path d="M180,120 L180,240 L100,240" />
        <path d="M60,180 L60,300 L140,300" />
        <path d="M0,240 L60,240" />
        <path d="M180,300 L260,300 L260,180" />
        <path d="M220,180 L320,180" />
        <path d="M140,360 L220,360 L220,420" />
        <path d="M60,360 L100,360 L100,420" />
        <path d="M260,240 L260,320" />
        <path d="M140,180 L140,240" />
      </g>
      <!-- Rocket at Finish -->
      <g transform="translate(390, 480)">
        <text x="-15" y="-10" font-size="14" font-weight="bold" fill="#EF4444" stroke="none">GOAL 🏁</text>
        <path d="M15,0 Q30,15 25,45 L5,45 Q0,15 15,0 Z" fill="#FFFFFF" class="colorable" />
        <circle cx="15" cy="22" r="5" fill="#1E293B" />
        <polygon points="5,35 -5,48 5,45" fill="#FFFFFF" class="colorable" />
        <polygon points="25,35 35,48 25,45" fill="#FFFFFF" class="colorable" />
      </g>
    </svg>`
  },
  {
    id: 'activity-dot-to-dot-dolphin',
    title: 'Dot-to-Dot 1–25: Ocean Dolphin',
    category: 'Activity Sheets',
    subcategory: 'Dot-to-Dot',
    ageRange: '5-6',
    difficulty: 'Medium',
    tags: ['dot to dot', 'numbers', 'ocean', 'dolphin', 'puzzle'],
    skills: ['Number sequence 1-25', 'Fine motor precision'],
    isPremium: false,
    season: 'General',
    downloadsCount: 2950,
    printsCount: 4200,
    favoritesCount: 1100,
    addedDate: '2026-10-11',
    description: 'Connect numbers 1 to 25 in order to reveal the leaping ocean dolphin, then color the water splash!',
    type: 'activity',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect x="25" y="15" width="450" height="70" rx="14" fill="#E0F2FE" stroke="#7DD3FC" stroke-width="2" />
      <text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#0369A1" stroke="none">Connect the Dots: Dolphin</text>
      <text x="45" y="72" font-size="13" fill="#0284C7" stroke="none">Connect dots 1 to 25 in order. Who is leaping from the waves?</text>
      <!-- Water Waves at bottom -->
      <path id="waves1" d="M30,550 Q80,520 130,550 T230,550 T330,550 T430,550 T500,550" stroke-width="4" stroke="#0284C7" />
      <path id="waves2" d="M0,580 Q60,560 120,580 T240,580 T360,580 T480,580" stroke-width="4" stroke="#38BDF8" />
      <!-- Dots 1-25 for the Dolphin -->
      <g id="dot-sequence">
        <!-- 1: Snout tip -->
        <circle cx="80" cy="280" r="4" fill="#0284C7" /><text x="68" y="275" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">1</text>
        <circle cx="110" cy="270" r="4" fill="#0284C7" /><text x="105" y="260" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">2</text>
        <circle cx="150" cy="240" r="4" fill="#0284C7" /><text x="145" y="230" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">3</text>
        <circle cx="190" cy="210" r="4" fill="#0284C7" /><text x="185" y="200" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">4</text>
        <circle cx="240" cy="195" r="4" fill="#0284C7" /><text x="235" y="185" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">5</text>
        <!-- Dorsal fin -->
        <circle cx="280" cy="160" r="4" fill="#0284C7" /><text x="275" y="150" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">6</text>
        <circle cx="295" cy="195" r="4" fill="#0284C7" /><text x="300" y="190" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">7</text>
        <!-- Back curvature -->
        <circle cx="340" cy="230" r="4" fill="#0284C7" /><text x="345" y="225" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">8</text>
        <circle cx="380" cy="280" r="4" fill="#0284C7" /><text x="390" y="280" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">9</text>
        <circle cx="410" cy="330" r="4" fill="#0284C7" /><text x="420" y="330" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">10</text>
        <!-- Tail flukes -->
        <circle cx="440" cy="360" r="4" fill="#0284C7" /><text x="450" y="360" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">11</text>
        <circle cx="460" cy="340" r="4" fill="#0284C7" /><text x="470" y="340" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">12</text>
        <circle cx="445" cy="375" r="4" fill="#0284C7" /><text x="455" y="380" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">13</text>
        <circle cx="460" cy="405" r="4" fill="#0284C7" /><text x="470" y="415" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">14</text>
        <circle cx="430" cy="390" r="4" fill="#0284C7" /><text x="430" y="405" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">15</text>
        <!-- Belly curvature back -->
        <circle cx="380" cy="360" r="4" fill="#0284C7" /><text x="375" y="375" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">16</text>
        <circle cx="320" cy="340" r="4" fill="#0284C7" /><text x="315" y="355" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">17</text>
        <!-- Flipper -->
        <circle cx="260" cy="360" r="4" fill="#0284C7" /><text x="260" y="378" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">18</text>
        <circle cx="230" cy="410" r="4" fill="#0284C7" /><text x="215" y="420" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">19</text>
        <circle cx="240" cy="350" r="4" fill="#0284C7" /><text x="235" y="340" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">20</text>
        <circle cx="180" cy="320" r="4" fill="#0284C7" /><text x="175" y="335" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">21</text>
        <circle cx="130" cy="300" r="4" fill="#0284C7" /><text x="125" y="315" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">22</text>
        <circle cx="100" cy="295" r="4" fill="#0284C7" /><text x="95" y="310" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">23</text>
        <circle cx="85" cy="290" r="4" fill="#0284C7" /><text x="80" y="305" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">24</text>
        <circle cx="80" cy="285" r="4" fill="#0284C7" /><text x="70" y="295" font-size="12" font-weight="bold" fill="#0369A1" stroke="none">25</text>
      </g>
      <!-- Eye already placed -->
      <circle cx="150" cy="265" r="6" fill="#1E293B" />
      <circle cx="152" cy="263" r="2" fill="#FFFFFF" />
    </svg>`
  },

  // --- 5. FINE MOTOR & SCISSOR PRACTICE ---
  {
    id: 'motor-scissor-cutting-pathways',
    title: 'Scissor Cutting Skills: Wavy & Zigzag Tracks',
    category: 'Fine Motor Practice',
    subcategory: 'Scissor Practice',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['scissor skills', 'fine motor', 'cutting', 'preschool', 'hand coordination'],
    skills: ['Bilateral coordination', 'Scissor safety', 'Grip strength'],
    isPremium: false,
    season: 'General',
    bundleId: 'bundle-preschool-30',
    bundleTitle: 'Preschool Tracing & Fine Motor Mastery (30 Pages)',
    etsyUrl: 'https://etsy.com/shop/PrintPlayKids?section_id=preschool',
    downloadsCount: 3800,
    printsCount: 5600,
    favoritesCount: 1920,
    addedDate: '2026-10-04',
    description: 'Cut along the dotted paths from left to right to help the hungry animals reach their snacks!',
    type: 'activity',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect x="25" y="15" width="450" height="70" rx="14" fill="#FEFCE8" stroke="#FDE047" stroke-width="2" />
      <text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#854D0E" stroke="none">Scissor Practice Pathways</text>
      <text x="45" y="72" font-size="13" fill="#A16207" stroke="none">Use child-safe scissors to cut carefully along the dotted lines.</text>
      <!-- Track 1: Straight Line (Bunny to Carrot) -->
      <g transform="translate(30, 115)">
        <text x="10" y="25" font-size="28" stroke="none">🐰</text>
        <line x1="60" y1="20" x2="380" y2="20" stroke="#CA8A04" stroke-width="3" stroke-dasharray="8,6" />
        <text x="390" y="25" font-size="28" stroke="none">🥕</text>
        <text x="200" y="42" font-size="11" fill="#713F12" font-weight="bold" stroke="none">✂️ Straight Cut</text>
      </g>
      <!-- Track 2: Wavy Ocean Line (Penguin to Fish) -->
      <g transform="translate(30, 205)">
        <text x="10" y="35" font-size="28" stroke="none">🐧</text>
        <path d="M60,30 Q100,5 140,30 T220,30 T300,30 T380,30" stroke="#0284C7" stroke-width="3" stroke-dasharray="8,6" />
        <text x="390" y="35" font-size="28" stroke="none">🐟</text>
        <text x="200" y="55" font-size="11" fill="#0369A1" font-weight="bold" stroke="none">✂️ Wavy Waves</text>
      </g>
      <!-- Track 3: Sharp Zigzag (Monkey to Banana) -->
      <g transform="translate(30, 310)">
        <text x="10" y="35" font-size="28" stroke="none">🐵</text>
        <path d="M60,30 L95,5 L130,50 L165,5 L200,50 L235,5 L270,50 L305,5 L340,50 L380,30" stroke="#16A34A" stroke-width="3" stroke-dasharray="8,6" />
        <text x="390" y="35" font-size="28" stroke="none">🍌</text>
        <text x="200" y="70" font-size="11" fill="#15803D" font-weight="bold" stroke="none">✂️ Zigzag Mountains</text>
      </g>
      <!-- Track 4: Castle Battlements Line (Puppy to Bone) -->
      <g transform="translate(30, 430)">
        <text x="10" y="35" font-size="28" stroke="none">🐶</text>
        <path d="M60,40 L100,40 L100,10 L140,10 L140,40 L180,40 L180,10 L220,10 L220,40 L260,40 L260,10 L300,10 L300,40 L340,40 L340,10 L380,10" stroke="#DC2626" stroke-width="3" stroke-dasharray="8,6" />
        <text x="390" y="35" font-size="28" stroke="none">🦴</text>
        <text x="200" y="65" font-size="11" fill="#991B1B" font-weight="bold" stroke="none">✂️ Step Castle</text>
      </g>
    </svg>`
  },

  // --- 6. LEARNING CHARTS ---
  {
    id: 'chart-daily-super-chores',
    title: 'My Daily Super Star Chore & Routine Chart',
    category: 'Learning Charts',
    subcategory: 'Chore Charts',
    ageRange: '5-6',
    difficulty: 'Easy',
    tags: ['chore chart', 'habits', 'routine', 'stars', 'morning routine', 'parenting'],
    skills: ['Responsibility', 'Daily routine', 'Independence'],
    isPremium: false,
    season: 'General',
    downloadsCount: 4200,
    printsCount: 6800,
    favoritesCount: 2300,
    addedDate: '2026-10-03',
    description: 'A printable weekly chore & routine chart for Mon–Sun with checkable stars for brushing teeth, bed making, tidying toys, and reading books.',
    type: 'chart',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect x="25" y="15" width="450" height="70" rx="14" fill="#F0FDFA" stroke="#5EEAD4" stroke-width="2" />
      <text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#134E4A" stroke="none">My Weekly Star Chart ⭐</text>
      <text x="45" y="72" font-size="13" fill="#0F766E" stroke="none">Color a star each day you complete your super missions!</text>
      <!-- Days of Week Header -->
      <g transform="translate(30, 105)">
        <rect x="0" y="0" width="440" height="40" rx="8" fill="#14B8A6" stroke="none" />
        <text x="100" y="25" font-size="13" font-weight="bold" fill="white" stroke="none">Mission</text>
        <text x="180" y="25" font-size="11" font-weight="bold" fill="white" stroke="none">M</text>
        <text x="218" y="25" font-size="11" font-weight="bold" fill="white" stroke="none">T</text>
        <text x="255" y="25" font-size="11" font-weight="bold" fill="white" stroke="none">W</text>
        <text x="292" y="25" font-size="11" font-weight="bold" fill="white" stroke="none">T</text>
        <text x="330" y="25" font-size="11" font-weight="bold" fill="white" stroke="none">F</text>
        <text x="368" y="25" font-size="11" font-weight="bold" fill="white" stroke="none">S</text>
        <text x="405" y="25" font-size="11" font-weight="bold" fill="white" stroke="none">S</text>
      </g>
      <!-- Routine Row 1: Brush Teeth -->
      <g transform="translate(30, 155)">
        <rect x="0" y="0" width="440" height="50" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="15" y="32" font-size="14" font-weight="bold" fill="#334155" stroke="none">🪥 Brush Teeth AM/PM</text>
        <!-- Stars M-S -->
        <polygon points="185,25 188,32 195,32 190,37 192,44 185,39 178,44 180,37 175,32 182,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="222,25 225,32 232,32 227,37 229,44 222,39 215,44 217,37 212,32 219,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="260,25 263,32 270,32 265,37 267,44 260,39 253,44 255,37 250,32 257,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="297,25 300,32 307,32 302,37 304,44 297,39 290,44 292,37 287,32 294,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="335,25 338,32 345,32 340,37 342,44 335,39 328,44 330,37 325,32 332,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="372,25 375,32 382,32 377,37 379,44 372,39 365,44 367,37 362,32 369,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="410,25 413,32 420,32 415,37 417,44 410,39 403,44 405,37 400,32 407,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
      </g>
      <!-- Routine Row 2: Make Bed -->
      <g transform="translate(30, 215)">
        <rect x="0" y="0" width="440" height="50" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="15" y="32" font-size="14" font-weight="bold" fill="#334155" stroke="none">🛏️ Make My Bed</text>
        <polygon points="185,25 188,32 195,32 190,37 192,44 185,39 178,44 180,37 175,32 182,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="222,25 225,32 232,32 227,37 229,44 222,39 215,44 217,37 212,32 219,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="260,25 263,32 270,32 265,37 267,44 260,39 253,44 255,37 250,32 257,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="297,25 300,32 307,32 302,37 304,44 297,39 290,44 292,37 287,32 294,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="335,25 338,32 345,32 340,37 342,44 335,39 328,44 330,37 325,32 332,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="372,25 375,32 382,32 377,37 379,44 372,39 365,44 367,37 362,32 369,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="410,25 413,32 420,32 415,37 417,44 410,39 403,44 405,37 400,32 407,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
      </g>
      <!-- Routine Row 3: Tidy Toys -->
      <g transform="translate(30, 275)">
        <rect x="0" y="0" width="440" height="50" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="15" y="32" font-size="14" font-weight="bold" fill="#334155" stroke="none">🧸 Put Away Toys</text>
        <polygon points="185,25 188,32 195,32 190,37 192,44 185,39 178,44 180,37 175,32 182,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="222,25 225,32 232,32 227,37 229,44 222,39 215,44 217,37 212,32 219,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="260,25 263,32 270,32 265,37 267,44 260,39 253,44 255,37 250,32 257,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="297,25 300,32 307,32 302,37 304,44 297,39 290,44 292,37 287,32 294,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="335,25 338,32 345,32 340,37 342,44 335,39 328,44 330,37 325,32 332,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="372,25 375,32 382,32 377,37 379,44 372,39 365,44 367,37 362,32 369,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="410,25 413,32 420,32 415,37 417,44 410,39 403,44 405,37 400,32 407,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
      </g>
      <!-- Routine Row 4: Read 20 mins -->
      <g transform="translate(30, 335)">
        <rect x="0" y="0" width="440" height="50" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="15" y="32" font-size="14" font-weight="bold" fill="#334155" stroke="none">📚 Read 20 Minutes</text>
        <polygon points="185,25 188,32 195,32 190,37 192,44 185,39 178,44 180,37 175,32 182,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="222,25 225,32 232,32 227,37 229,44 222,39 215,44 217,37 212,32 219,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="260,25 263,32 270,32 265,37 267,44 260,39 253,44 255,37 250,32 257,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="297,25 300,32 307,32 302,37 304,44 297,39 290,44 292,37 287,32 294,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="335,25 338,32 345,32 340,37 342,44 335,39 328,44 330,37 325,32 332,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="372,25 375,32 382,32 377,37 379,44 372,39 365,44 367,37 362,32 369,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
        <polygon points="410,25 413,32 420,32 415,37 417,44 410,39 403,44 405,37 400,32 407,32" stroke="#CBD5E1" fill="#FFFFFF" class="colorable" />
      </g>
      <!-- Reward Goal Box at bottom -->
      <g transform="translate(30, 420)">
        <rect x="0" y="0" width="440" height="90" rx="12" fill="#FEF3C7" stroke="#FDE68A" stroke-width="2" />
        <text x="20" y="35" font-family="'Fredoka', sans-serif" font-size="18" font-weight="bold" fill="#78350F" stroke="none">🏆 Super Reward Goal of the Week:</text>
        <line x1="20" y1="65" x2="420" y2="65" stroke="#D97706" stroke-dasharray="6,4" />
      </g>
    </svg>`
  },

  // --- 7. SEASONAL & HOLIDAY (HALLOWEEN FEATURED) ---
  {
    id: 'seasonal-halloween-pumpkin-patch',
    title: 'Smiling Jack-O\'-Lantern & Friendly Ghost',
    category: 'Seasonal & Holiday',
    subcategory: 'Halloween Special',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['halloween', 'pumpkin', 'ghost', 'spooky cute', 'seasonal'],
    skills: ['Holiday coloring', 'Creativity'],
    isPremium: false,
    season: 'Halloween',
    bundleId: 'bundle-halloween-20',
    bundleTitle: 'Spooky Cute Halloween Activity Bundle (20 Pages)',
    etsyUrl: 'https://etsy.com/shop/PrintPlayKids?section_id=seasonal',
    downloadsCount: 5120,
    printsCount: 7900,
    favoritesCount: 3100,
    addedDate: '2026-10-20',
    description: 'Happy Halloween! A cute carved pumpkin with a friendly trick-or-treating ghost floating among bat silhouettes and autumn leaves.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- Full Moon & Little Bats -->
      <circle id="moon" cx="110" cy="130" r="50" fill="#FFFFFF" class="colorable" />
      <!-- Bats -->
      <path id="bat1" d="M340,90 Q360,70 380,90 Q390,80 400,90 Q370,110 340,90 Z" fill="#FFFFFF" class="colorable" />
      <path id="bat2" d="M260,130 Q275,115 290,130 Q298,122 305,130 Q285,145 260,130 Z" fill="#FFFFFF" class="colorable" />
      <!-- Friendly Little Ghost floating -->
      <g id="ghost" transform="translate(280, 160)">
        <path id="ghost-body" d="M60,0 C20,0 0,40 0,90 C0,130 15,150 30,135 C45,150 60,135 75,150 C90,135 105,150 120,90 C120,40 100,0 60,0 Z" fill="#FFFFFF" class="colorable" />
        <ellipse cx="45" cy="50" rx="7" ry="10" fill="#1E293B" />
        <ellipse cx="75" cy="50" rx="7" ry="10" fill="#1E293B" />
        <ellipse cx="60" cy="75" rx="6" ry="8" fill="#1E293B" />
        <!-- Cute Little Ghost Candy Bucket -->
        <path d="M100,80 Q110,60 120,80 L120,105 Q110,115 100,105 Z" fill="#FFFFFF" class="colorable" stroke-width="3" />
      </g>
      <!-- Big Smiling Jack-O-Lantern Pumpkin -->
      <g id="pumpkin" transform="translate(60, 270)">
        <!-- Stem -->
        <path id="stem" d="M180,60 C185,25 210,15 220,10 C215,30 200,60 195,65 Z" fill="#FFFFFF" class="colorable" />
        <!-- Pumpkin Ribs / Lobes -->
        <path id="rib-back-left" d="M80,180 C40,150 40,90 90,70 C140,50 170,120 160,200 Z" fill="#FFFFFF" class="colorable" />
        <path id="rib-back-right" d="M300,180 C340,150 340,90 290,70 C240,50 210,120 220,200 Z" fill="#FFFFFF" class="colorable" />
        <path id="rib-mid-left" d="M120,200 C80,160 90,80 140,70 C190,60 190,160 170,220 Z" fill="#FFFFFF" class="colorable" />
        <path id="rib-mid-right" d="M260,200 C300,160 290,80 240,70 C190,60 190,160 210,220 Z" fill="#FFFFFF" class="colorable" />
        <path id="rib-center" d="M190,65 C150,65 140,170 160,225 C190,235 220,225 230,170 C240,70 210,65 190,65 Z" fill="#FFFFFF" class="colorable" />
        <!-- Carved Face: Triangular Eyes -->
        <polygon points="140,120 160,120 150,100" fill="#1E293B" />
        <polygon points="220,120 240,120 230,100" fill="#1E293B" />
        <!-- Triangle Nose -->
        <polygon points="185,138 195,138 190,128" fill="#1E293B" />
        <!-- Huge Happy Tooth Smile -->
        <path d="M130,160 Q190,210 250,160 Q235,185 190,185 Q145,185 130,160 Z" fill="#1E293B" />
      </g>
      <!-- Autumn Leaves on ground -->
      <g transform="translate(40, 520)">
        <path d="M30,30 Q50,0 70,30 Q50,60 30,30 Z" fill="#FFFFFF" class="colorable" />
        <path d="M380,40 Q400,10 420,40 Q400,70 380,40 Z" fill="#FFFFFF" class="colorable" />
      </g>
    </svg>`
  },
  {
    id: 'seasonal-halloween-candy-count',
    title: 'Halloween Trick-or-Treat Candy Counting',
    category: 'Seasonal & Holiday',
    subcategory: 'Halloween Special',
    ageRange: '5-6',
    difficulty: 'Medium',
    tags: ['halloween', 'candy', 'counting', 'math', 'seasonal'],
    skills: ['Counting objects', 'Number matching'],
    isPremium: true,
    season: 'Halloween',
    bundleId: 'bundle-halloween-20',
    bundleTitle: 'Spooky Cute Halloween Activity Bundle (20 Pages)',
    etsyUrl: 'https://etsy.com/shop/PrintPlayKids?section_id=seasonal',
    downloadsCount: 3400,
    printsCount: 4600,
    favoritesCount: 1650,
    addedDate: '2026-10-22',
    description: 'Count how many candy corn, lollipops, and chocolate bars were collected in the witch hat bag!',
    type: 'worksheet',
    answerKeySvg: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="650" fill="#FFF7ED" />
      <text x="250" y="80" font-size="22" font-weight="bold" text-anchor="middle" fill="#9A3412">Candy Count Solutions</text>
      <text x="120" y="180" font-size="20" font-weight="bold" fill="#C2410C">🍭 Lollipops = 6</text>
      <text x="120" y="270" font-size="20" font-weight="bold" fill="#C2410C">🍬 Candy Corn = 8</text>
      <text x="120" y="360" font-size="20" font-weight="bold" fill="#C2410C">🍫 Chocolate Bars = 4</text>
      <text x="120" y="450" font-size="20" font-weight="bold" fill="#C2410C">🧁 Spooky Cupcakes = 3</text>
    </svg>`,
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect x="25" y="15" width="450" height="70" rx="14" fill="#FFEDD5" stroke="#FB923C" stroke-width="2" />
      <text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#9A3412" stroke="none">Trick-or-Treat Candy Count</text>
      <text x="45" y="72" font-size="13" fill="#C2410C" stroke="none">Count each kind of candy, then write the answer in the circle.</text>
      <!-- Row 1: Lollipops -->
      <g transform="translate(30, 110)">
        <rect x="0" y="0" width="440" height="90" rx="12" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="20" y="30" font-size="15" font-weight="bold" fill="#334155" stroke="none">Lollipops:</text>
        <g transform="translate(110, 15)">
          <circle cx="15" cy="18" r="12" fill="#FFFFFF" class="colorable" /><line x1="15" y1="30" x2="15" y2="55" stroke-width="3" />
        </g>
        <g transform="translate(150, 15)">
          <circle cx="15" cy="18" r="12" fill="#FFFFFF" class="colorable" /><line x1="15" y1="30" x2="15" y2="55" stroke-width="3" />
        </g>
        <g transform="translate(190, 15)">
          <circle cx="15" cy="18" r="12" fill="#FFFFFF" class="colorable" /><line x1="15" y1="30" x2="15" y2="55" stroke-width="3" />
        </g>
        <g transform="translate(230, 15)">
          <circle cx="15" cy="18" r="12" fill="#FFFFFF" class="colorable" /><line x1="15" y1="30" x2="15" y2="55" stroke-width="3" />
        </g>
        <g transform="translate(270, 15)">
          <circle cx="15" cy="18" r="12" fill="#FFFFFF" class="colorable" /><line x1="15" y1="30" x2="15" y2="55" stroke-width="3" />
        </g>
        <g transform="translate(310, 15)">
          <circle cx="15" cy="18" r="12" fill="#FFFFFF" class="colorable" /><line x1="15" y1="30" x2="15" y2="55" stroke-width="3" />
        </g>
        <!-- Answer Circle -->
        <circle cx="395" cy="45" r="28" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4" />
      </g>
      <!-- Row 2: Candy Corns -->
      <g transform="translate(30, 220)">
        <rect x="0" y="0" width="440" height="90" rx="12" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="20" y="30" font-size="15" font-weight="bold" fill="#334155" stroke="none">Candy Corn:</text>
        <polygon points="125,20 115,55 135,55" fill="#FFFFFF" class="colorable" />
        <polygon points="155,20 145,55 165,55" fill="#FFFFFF" class="colorable" />
        <polygon points="185,20 175,55 195,55" fill="#FFFFFF" class="colorable" />
        <polygon points="215,20 205,55 225,55" fill="#FFFFFF" class="colorable" />
        <polygon points="245,20 235,55 255,55" fill="#FFFFFF" class="colorable" />
        <polygon points="275,20 265,55 285,55" fill="#FFFFFF" class="colorable" />
        <polygon points="305,20 295,55 315,55" fill="#FFFFFF" class="colorable" />
        <polygon points="335,20 325,55 345,55" fill="#FFFFFF" class="colorable" />
        <circle cx="395" cy="45" r="28" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4" />
      </g>
      <!-- Row 3: Chocolate Bars -->
      <g transform="translate(30, 330)">
        <rect x="0" y="0" width="440" height="90" rx="12" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="20" y="30" font-size="15" font-weight="bold" fill="#334155" stroke="none">Chocolates:</text>
        <rect x="130" y="25" width="35" height="45" rx="4" fill="#FFFFFF" class="colorable" />
        <rect x="180" y="25" width="35" height="45" rx="4" fill="#FFFFFF" class="colorable" />
        <rect x="230" y="25" width="35" height="45" rx="4" fill="#FFFFFF" class="colorable" />
        <rect x="280" y="25" width="35" height="45" rx="4" fill="#FFFFFF" class="colorable" />
        <circle cx="395" cy="45" r="28" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4" />
      </g>
    </svg>`
  },

  // --- 8. ISLAMIC KIDS ---
  {
    id: 'islamic-arabic-alif-baa-tracing',
    title: 'Arabic Alphabet Tracing: Alif, Baa, Taa (ا ب ت)',
    category: 'Islamic Kids',
    subcategory: 'Arabic Letters',
    ageRange: '5-6',
    difficulty: 'Easy',
    tags: ['arabic', 'islamic', 'alphabet', 'tracing', 'alif baa'],
    skills: ['Arabic handwriting', 'Right-to-left orientation'],
    isPremium: false,
    season: 'General',
    bundleId: 'bundle-arabic-alphabets-28',
    bundleTitle: 'Noor Arabic Alphabet Tracing & Coloring (28 Pages)',
    etsyUrl: 'https://etsy.com/shop/PrintPlayKids?section_id=islamic',
    downloadsCount: 3600,
    printsCount: 5200,
    favoritesCount: 1980,
    addedDate: '2026-10-06',
    description: 'Learn the first three letters of the Arabic alphabet with guided arrows and cute vocabulary pictures (Arnab / Bat-tah / Tuffaha).',
    type: 'worksheet',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect x="25" y="15" width="450" height="70" rx="14" fill="#ECFDF5" stroke="#A7F3D0" stroke-width="2" />
      <text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#065F46" stroke="none">Arabic Letters: ا ب ت</text>
      <text x="45" y="72" font-size="13" fill="#047857" stroke="none">Trace from right to left with guided arrows!</text>
      <!-- Alif Section -->
      <g transform="translate(30, 105)">
        <rect x="0" y="0" width="440" height="100" rx="12" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="380" y="70" font-size="70" font-family="sans-serif" font-weight="bold" fill="#065F46" stroke="none">ا</text>
        <text x="330" y="45" font-size="18" font-weight="bold" fill="#334155" stroke="none">Alif (ا)</text>
        <text x="330" y="70" font-size="13" fill="#64748B" stroke="none">As in Arnab 🐰 (Rabbit)</text>
        <!-- Tracing Alif lines -->
        <line x1="200" y1="20" x2="200" y2="80" stroke="#94A3B8" stroke-width="4" stroke-dasharray="6,4" />
        <line x1="140" y1="20" x2="140" y2="80" stroke="#CBD5E1" stroke-width="4" stroke-dasharray="6,4" />
        <line x1="80" y1="20" x2="80" y2="80" stroke="#CBD5E1" stroke-width="4" stroke-dasharray="6,4" />
      </g>
      <!-- Baa Section -->
      <g transform="translate(30, 225)">
        <rect x="0" y="0" width="440" height="100" rx="12" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="370" y="65" font-size="60" font-family="sans-serif" font-weight="bold" fill="#065F46" stroke="none">ب</text>
        <text x="300" y="45" font-size="18" font-weight="bold" fill="#334155" stroke="none">Baa (ب)</text>
        <text x="300" y="70" font-size="13" fill="#64748B" stroke="none">As in Battah 🦆 (Duck)</text>
        <!-- Tracing Baa shapes -->
        <path d="M220,40 L220,60 Q170,75 140,60 L140,40" stroke="#94A3B8" stroke-width="4" stroke-dasharray="6,4" />
        <circle cx="180" cy="80" r="3" fill="#94A3B8" />
      </g>
      <!-- Taa Section -->
      <g transform="translate(30, 345)">
        <rect x="0" y="0" width="440" height="100" rx="12" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="370" y="65" font-size="60" font-family="sans-serif" font-weight="bold" fill="#065F46" stroke="none">ت</text>
        <text x="300" y="45" font-size="18" font-weight="bold" fill="#334155" stroke="none">Taa (ت)</text>
        <text x="300" y="70" font-size="13" fill="#64748B" stroke="none">As in Tuffaha 🍎 (Apple)</text>
        <path d="M220,40 L220,60 Q170,75 140,60 L140,40" stroke="#94A3B8" stroke-width="4" stroke-dasharray="6,4" />
        <circle cx="174" cy="48" r="3" fill="#94A3B8" />
        <circle cx="186" cy="48" r="3" fill="#94A3B8" />
      </g>
    </svg>`
  },
  {
    id: 'islamic-ramadan-crescent-lantern',
    title: 'Ramadan Kareem Crescent & Fanous Lantern',
    category: 'Islamic Kids',
    subcategory: 'Ramadan & Eid',
    ageRange: '5-6',
    difficulty: 'Easy',
    tags: ['ramadan', 'islamic', 'fanous', 'lantern', 'crescent', 'eid'],
    skills: ['Cultural awareness', 'Pattern coloring'],
    isPremium: true,
    season: 'Ramadan',
    bundleId: 'bundle-arabic-alphabets-28',
    bundleTitle: 'Noor Arabic Alphabet Tracing & Coloring (28 Pages)',
    etsyUrl: 'https://etsy.com/shop/PrintPlayKids?section_id=islamic',
    downloadsCount: 2980,
    printsCount: 4410,
    favoritesCount: 1540,
    addedDate: '2026-10-07',
    description: 'Celebrate the holy month with a beautiful glowing crescent moon and an ornate traditional Fanous lantern to color.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- Title text -->
      <text x="250" y="55" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#0D9488" stroke="none">Ramadan Mubarak!</text>
      <!-- Giant Crescent Moon -->
      <path id="crescent" d="M380,100 C300,100 230,170 230,270 C230,370 300,440 380,440 C340,390 320,330 320,270 C320,210 340,150 380,100 Z" fill="#FFFFFF" class="colorable" />
      <!-- Hanging Fanous Lantern from the moon -->
      <line x1="230" y1="270" x2="160" y2="330" stroke-width="3" stroke-dasharray="4,4" />
      <g id="fanous" transform="translate(100, 330)">
        <!-- Top ring & cap -->
        <circle cx="60" cy="10" r="10" fill="#FFFFFF" class="colorable" />
        <polygon id="lantern-cap" points="60,20 20,55 100,55" fill="#FFFFFF" class="colorable" />
        <!-- Glass body with geometric panels -->
        <rect id="lantern-body" x="20" y="55" width="80" height="90" fill="#FFFFFF" class="colorable" />
        <line x1="47" y1="55" x2="47" y2="145" stroke-width="3" />
        <line x1="73" y1="55" x2="73" y2="145" stroke-width="3" />
        <!-- Candle flame inside -->
        <path id="flame" d="M60,95 Q52,115 60,125 Q68,115 60,95 Z" fill="#FFFFFF" class="colorable" />
        <!-- Lantern base -->
        <polygon id="lantern-base" points="20,145 10,185 110,185 100,145" fill="#FFFFFF" class="colorable" />
      </g>
      <!-- Twinkling Stars in sky -->
      <polygon points="120,120 125,135 140,135 128,145 132,160 120,150 108,160 112,145 100,135 115,135" fill="#FFFFFF" class="colorable" />
      <polygon points="320,80 324,92 338,92 327,100 331,112 320,104 309,112 313,100 302,92 316,92" fill="#FFFFFF" class="colorable" />
    </svg>`
  },

  // --- 9. PUZZLES & GAMES ---
  {
    id: 'puzzle-animal-shadow-match',
    title: 'Forest Friends Shadow Match Quest',
    category: 'Puzzles & Games',
    subcategory: 'Matching Games',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['shadow match', 'animals', 'puzzle', 'preschool', 'visual matching'],
    skills: ['Visual discrimination', 'Line drawing'],
    isPremium: false,
    season: 'General',
    downloadsCount: 2200,
    printsCount: 3400,
    favoritesCount: 970,
    addedDate: '2026-10-08',
    description: 'Draw a line from each colorful forest animal on the left to its matching dark shadow silhouette on the right!',
    type: 'activity',
    answerKeySvg: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="650" fill="#FDF2F8" />
      <text x="250" y="80" font-size="22" font-weight="bold" text-anchor="middle" fill="#9D174D">Shadow Match Answer Key</text>
      <text x="100" y="180" font-size="18" fill="#BE185D">🦊 Fox matches Shadow 3</text>
      <text x="100" y="270" font-size="18" fill="#BE185D">🦉 Owl matches Shadow 1</text>
      <text x="100" y="360" font-size="18" fill="#BE185D">🐿️ Squirrel matches Shadow 4</text>
      <text x="100" y="450" font-size="18" fill="#BE185D">🦔 Hedgehog matches Shadow 2</text>
    </svg>`,
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect x="25" y="15" width="450" height="70" rx="14" fill="#FDF2F8" stroke="#F472B6" stroke-width="2" />
      <text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#9D174D" stroke="none">Animal Shadow Match</text>
      <text x="45" y="72" font-size="13" fill="#BE185D" stroke="none">Draw a line between each animal and its matching shadow.</text>
      <!-- Item 1: Fox -->
      <g transform="translate(40, 110)">
        <rect x="0" y="0" width="160" height="80" rx="10" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="50" y="52" font-size="38" stroke="none">🦊</text>
        <circle cx="160" cy="40" r="8" fill="#3B82F6" stroke="none" />
      </g>
      <!-- Shadow 1: Owl Shadow -->
      <g transform="translate(300, 110)">
        <rect x="0" y="0" width="160" height="80" rx="10" fill="#334155" stroke="#1E293B" />
        <text x="50" y="52" font-size="38" opacity="0.1" stroke="none">🦉</text>
        <circle cx="0" cy="40" r="8" fill="#3B82F6" stroke="none" />
      </g>
      <!-- Item 2: Owl -->
      <g transform="translate(40, 220)">
        <rect x="0" y="0" width="160" height="80" rx="10" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="50" y="52" font-size="38" stroke="none">🦉</text>
        <circle cx="160" cy="40" r="8" fill="#3B82F6" stroke="none" />
      </g>
      <!-- Shadow 2: Hedgehog Shadow -->
      <g transform="translate(300, 220)">
        <rect x="0" y="0" width="160" height="80" rx="10" fill="#334155" stroke="#1E293B" />
        <text x="50" y="52" font-size="38" opacity="0.1" stroke="none">🦔</text>
        <circle cx="0" cy="40" r="8" fill="#3B82F6" stroke="none" />
      </g>
      <!-- Item 3: Squirrel -->
      <g transform="translate(40, 330)">
        <rect x="0" y="0" width="160" height="80" rx="10" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="50" y="52" font-size="38" stroke="none">🐿️</text>
        <circle cx="160" cy="40" r="8" fill="#3B82F6" stroke="none" />
      </g>
      <!-- Shadow 3: Fox Shadow -->
      <g transform="translate(300, 330)">
        <rect x="0" y="0" width="160" height="80" rx="10" fill="#334155" stroke="#1E293B" />
        <text x="50" y="52" font-size="38" opacity="0.1" stroke="none">🦊</text>
        <circle cx="0" cy="40" r="8" fill="#3B82F6" stroke="none" />
      </g>
      <!-- Item 4: Hedgehog -->
      <g transform="translate(40, 440)">
        <rect x="0" y="0" width="160" height="80" rx="10" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="50" y="52" font-size="38" stroke="none">🦔</text>
        <circle cx="160" cy="40" r="8" fill="#3B82F6" stroke="none" />
      </g>
      <!-- Shadow 4: Squirrel Shadow -->
      <g transform="translate(300, 440)">
        <rect x="0" y="0" width="160" height="80" rx="10" fill="#334155" stroke="#1E293B" />
        <text x="50" y="52" font-size="38" opacity="0.1" stroke="none">🐿️</text>
        <circle cx="0" cy="40" r="8" fill="#3B82F6" stroke="none" />
      </g>
    </svg>`
  },

  // --- 10. POSTERS & FLASHCARDS ---
  {
    id: 'poster-feelings-emotions-checkin',
    title: 'How Am I Feeling Today? Emotions Poster',
    category: 'Posters & Cards',
    subcategory: 'Social Emotional Learning',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['emotions', 'feelings', 'poster', 'preschool', 'sel', 'classroom'],
    skills: ['Emotional literacy', 'Self-expression'],
    isPremium: false,
    season: 'General',
    downloadsCount: 3900,
    printsCount: 6100,
    favoritesCount: 2150,
    addedDate: '2026-10-13',
    description: 'A comforting visual check-in poster featuring 6 friendly face expressions: Happy, Sad, Calm, Excited, Silly, and Tired.',
    type: 'chart',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect x="25" y="15" width="450" height="70" rx="14" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="2" />
      <text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#0F172A" stroke="none">How Am I Feeling Today? 💛</text>
      <text x="45" y="72" font-size="13" fill="#475569" stroke="none">Point to the face that shows how your heart feels right now.</text>
      <!-- Grid of 6 emotions (2 columns x 3 rows) -->
      <!-- 1. Happy -->
      <g transform="translate(45, 110)">
        <rect x="0" y="0" width="190" height="150" rx="14" fill="#FEF9C3" stroke="#FDE047" stroke-width="2" />
        <circle id="face-happy" cx="95" cy="65" r="40" fill="#FFFFFF" class="colorable" />
        <circle cx="80" cy="55" r="5" fill="#1E293B" />
        <circle cx="110" cy="55" r="5" fill="#1E293B" />
        <path d="M78,75 Q95,95 112,75" stroke-width="4" />
        <text x="95" y="132" font-family="'Fredoka', sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#854D0E" stroke="none">HAPPY 😊</text>
      </g>
      <!-- 2. Calm -->
      <g transform="translate(265, 110)">
        <rect x="0" y="0" width="190" height="150" rx="14" fill="#ECFDF5" stroke="#A7F3D0" stroke-width="2" />
        <circle id="face-calm" cx="95" cy="65" r="40" fill="#FFFFFF" class="colorable" />
        <path d="M75,55 Q80,50 85,55" stroke-width="3" />
        <path d="M105,55 Q110,50 115,55" stroke-width="3" />
        <path d="M85,75 Q95,80 105,75" stroke-width="3" />
        <text x="95" y="132" font-family="'Fredoka', sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#065F46" stroke="none">CALM 😌</text>
      </g>
      <!-- 3. Excited -->
      <g transform="translate(45, 280)">
        <rect x="0" y="0" width="190" height="150" rx="14" fill="#FFEDD5" stroke="#FDBA74" stroke-width="2" />
        <circle id="face-excited" cx="95" cy="65" r="40" fill="#FFFFFF" class="colorable" />
        <circle cx="80" cy="55" r="6" fill="#1E293B" />
        <circle cx="110" cy="55" r="6" fill="#1E293B" />
        <ellipse cx="95" cy="78" rx="14" ry="10" fill="#FFFFFF" stroke-width="3" class="colorable" />
        <text x="95" y="132" font-family="'Fredoka', sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#9A3412" stroke="none">EXCITED 🤩</text>
      </g>
      <!-- 4. Sad -->
      <g transform="translate(265, 280)">
        <rect x="0" y="0" width="190" height="150" rx="14" fill="#E0F2FE" stroke="#7DD3FC" stroke-width="2" />
        <circle id="face-sad" cx="95" cy="65" r="40" fill="#FFFFFF" class="colorable" />
        <circle cx="80" cy="55" r="5" fill="#1E293B" />
        <circle cx="110" cy="55" r="5" fill="#1E293B" />
        <path d="M78,82 Q95,68 112,82" stroke-width="4" />
        <!-- Teardrop -->
        <path d="M120,60 Q125,75 120,78 Q115,75 120,60 Z" fill="#38BDF8" stroke-width="1" />
        <text x="95" y="132" font-family="'Fredoka', sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#0369A1" stroke="none">SAD 😢</text>
      </g>
      <!-- 5. Silly -->
      <g transform="translate(45, 450)">
        <rect x="0" y="0" width="190" height="150" rx="14" fill="#F3E8FF" stroke="#D8B4FE" stroke-width="2" />
        <circle id="face-silly" cx="95" cy="65" r="40" fill="#FFFFFF" class="colorable" />
        <circle cx="80" cy="55" r="4" fill="#1E293B" />
        <path d="M105,55 L115,55" stroke-width="4" />
        <path d="M85,75 Q95,85 105,75" stroke-width="3" />
        <path d="M92,80 Q95,95 98,80" fill="#F43F5E" stroke-width="2" />
        <text x="95" y="132" font-family="'Fredoka', sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#6B21A8" stroke="none">SILLY 😜</text>
      </g>
      <!-- 6. Tired -->
      <g transform="translate(265, 450)">
        <rect x="0" y="0" width="190" height="150" rx="14" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="2" />
        <circle id="face-tired" cx="95" cy="65" r="40" fill="#FFFFFF" class="colorable" />
        <line x1="75" y1="55" x2="85" y2="55" stroke-width="3" />
        <line x1="105" y1="55" x2="115" y2="55" stroke-width="3" />
        <ellipse cx="95" cy="75" rx="8" ry="12" fill="#FFFFFF" stroke-width="3" class="colorable" />
        <text x="95" y="132" font-family="'Fredoka', sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#334155" stroke="none">TIRED 🥱</text>
      </g>
    </svg>`
  },

  // Additional Coloring & Activity sheets to fulfill 40 rich printables:
  // Animals, Dinosaurs, Unicorns, Vehicles, Princesses, Ocean, Space, Food, Mandalas,
  // Tracing, Math 1-20, Spot Difference, Word Search, etc.
  {
    id: 'color-cute-baby-dino-egg',
    title: 'Hatching Baby Triceratops',
    category: 'Coloring Pages',
    subcategory: 'Dinosaurs',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['dinosaur', 'baby dino', 'egg', 'cute', 'preschool'],
    skills: ['Coloring inside lines', 'Shape recognition'],
    isPremium: false,
    season: 'General',
    bundleId: 'bundle-dino-25',
    bundleTitle: 'Dinosaur Adventure Mega Pack (25 Pages)',
    etsyUrl: 'https://etsy.com/shop/PrintPlayKids?section_id=dinosaurs',
    downloadsCount: 1780,
    printsCount: 2650,
    favoritesCount: 880,
    addedDate: '2026-10-16',
    description: 'Peep peep! A baby Triceratops popping out of a speckled prehistoric egg shell.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <ellipse cx="250" cy="560" rx="180" ry="40" fill="#FFFFFF" class="colorable" />
      <!-- Egg bottom shell -->
      <path id="egg-bottom" d="M120,440 C110,540 390,540 380,440 L350,400 L320,430 L280,390 L240,430 L200,390 L160,430 Z" fill="#FFFFFF" class="colorable" />
      <!-- Spots on egg -->
      <circle cx="180" cy="480" r="14" stroke-dasharray="3,3" />
      <circle cx="280" cy="490" r="18" stroke-dasharray="3,3" />
      <circle cx="230" cy="460" r="10" stroke-dasharray="3,3" />
      <!-- Baby Triceratops peeking -->
      <g transform="translate(160, 210)">
        <!-- Frill Shield -->
        <path id="frill" d="M10,120 C-10,50 60,0 90,0 C120,0 190,50 170,120 Z" fill="#FFFFFF" class="colorable" />
        <!-- Head -->
        <circle id="head" cx="90" cy="110" r="60" fill="#FFFFFF" class="colorable" />
        <!-- Horns -->
        <polygon points="50,70 40,40 60,65" fill="#FFFFFF" class="colorable" />
        <polygon points="130,70 140,40 120,65" fill="#FFFFFF" class="colorable" />
        <polygon points="85,120 90,105 95,120" fill="#FFFFFF" class="colorable" />
        <!-- Eyes -->
        <circle cx="65" cy="100" r="12" fill="#FFFFFF" class="colorable" />
        <circle cx="67" cy="100" r="5" fill="#1E293B" />
        <circle cx="115" cy="100" r="12" fill="#FFFFFF" class="colorable" />
        <circle cx="113" cy="100" r="5" fill="#1E293B" />
        <!-- Smile -->
        <path d="M75,130 Q90,145 105,130" stroke-width="3" />
      </g>
      <!-- Broken top shell on head -->
      <polygon id="egg-hat" points="200,190 230,160 250,190 270,160 300,190 290,150 250,130 210,150" fill="#FFFFFF" class="colorable" />
    </svg>`
  },
  {
    id: 'color-super-fire-truck',
    title: 'Brave Fire Truck with Ladder & Siren',
    category: 'Coloring Pages',
    subcategory: 'Vehicles',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['vehicles', 'fire truck', 'rescue', 'wheels', 'transportation'],
    skills: ['Coloring recognition', 'Motor skills'],
    isPremium: false,
    season: 'General',
    downloadsCount: 2600,
    printsCount: 3800,
    favoritesCount: 1150,
    addedDate: '2026-10-17',
    description: 'Wee-woo wee-woo! A friendly rescue fire engine equipped with extendable ladder, siren, and fire hose.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- Ground line -->
      <line x1="20" y1="520" x2="480" y2="520" stroke-width="4" />
      <!-- Fire Truck Main Cabin & Body -->
      <g transform="translate(40, 220)">
        <!-- Cabin front -->
        <path id="cabin" d="M260,120 L380,120 L400,180 L400,260 L260,260 Z" fill="#FFFFFF" class="colorable" />
        <!-- Body back -->
        <rect id="truck-back" x="40" y="100" width="220" height="160" rx="10" fill="#FFFFFF" class="colorable" />
        <!-- Windshield -->
        <polygon id="windshield" points="290,135 370,135 385,180 290,180" fill="#FFFFFF" class="colorable" />
        <!-- Ladder on roof -->
        <line x1="30" y1="70" x2="260" y2="70" stroke-width="8" stroke="#94A3B8" />
        <line x1="30" y1="85" x2="260" y2="85" stroke-width="8" stroke="#94A3B8" />
        <line x1="70" y1="70" x2="70" y2="85" stroke-width="4" stroke="#94A3B8" />
        <line x1="120" y1="70" x2="120" y2="85" stroke-width="4" stroke="#94A3B8" />
        <line x1="170" y1="70" x2="170" y2="85" stroke-width="4" stroke="#94A3B8" />
        <line x1="220" y1="70" x2="220" y2="85" stroke-width="4" stroke="#94A3B8" />
        <!-- Siren flashing -->
        <rect id="siren" x="310" y="90" width="30" height="25" rx="5" fill="#FFFFFF" class="colorable" />
        <path d="M295,85 L285,75 M355,85 L365,75" stroke-width="3" />
        <!-- Rolled Hose -->
        <circle id="hose" cx="150" cy="180" r="30" fill="#FFFFFF" class="colorable" />
        <circle cx="150" cy="180" r="18" />
        <!-- Big Wheels -->
        <circle id="wheel1" cx="110" cy="270" r="42" fill="#FFFFFF" stroke-width="6" class="colorable" />
        <circle cx="110" cy="270" r="18" fill="#1E293B" />
        <circle id="wheel2" cx="330" cy="270" r="42" fill="#FFFFFF" stroke-width="6" class="colorable" />
        <circle cx="330" cy="270" r="18" fill="#1E293B" />
      </g>
    </svg>`
  },
  {
    id: 'color-mandala-nature-kids',
    title: 'Whimsical Butterfly & Floral Mandala',
    category: 'Coloring Pages',
    subcategory: 'Mandalas for Kids',
    ageRange: '7-8',
    difficulty: 'Hard',
    tags: ['mandala', 'mindfulness', 'calm', 'butterfly', 'flowers'],
    skills: ['Focus', 'Symmetry', 'Stress relief'],
    isPremium: true,
    season: 'General',
    downloadsCount: 1980,
    printsCount: 2980,
    favoritesCount: 1420,
    addedDate: '2026-10-19',
    description: 'A soothing radial symmetry mandala designed for kids to practice mindfulness and calm coloring.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <g transform="translate(250, 320)">
        <!-- Outer boundary circle -->
        <circle id="mandala-outer" cx="0" cy="0" r="220" stroke-width="4" fill="#FFFFFF" class="colorable" />
        <circle cx="0" cy="0" r="180" stroke-dasharray="6,4" />
        <circle id="mandala-mid" cx="0" cy="0" r="130" fill="#FFFFFF" class="colorable" />
        <!-- 8 Petals radiating -->
        <path id="petal-0" d="M0,0 Q-30,-70 0,-130 Q30,-70 0,0" fill="#FFFFFF" class="colorable" />
        <path id="petal-45" d="M0,0 Q-70,-70 -92,-92 Q-30,-90 0,0" fill="#FFFFFF" class="colorable" />
        <path id="petal-90" d="M0,0 Q-70,-30 -130,0 Q-70,30 0,0" fill="#FFFFFF" class="colorable" />
        <path id="petal-135" d="M0,0 Q-90,30 -92,92 Q-70,70 0,0" fill="#FFFFFF" class="colorable" />
        <path id="petal-180" d="M0,0 Q-30,70 0,130 Q30,70 0,0" fill="#FFFFFF" class="colorable" />
        <path id="petal-225" d="M0,0 Q30,90 92,92 Q70,70 0,0" fill="#FFFFFF" class="colorable" />
        <path id="petal-270" d="M0,0 Q70,30 130,0 Q70,-30 0,0" fill="#FFFFFF" class="colorable" />
        <path id="petal-315" d="M0,0 Q70,-70 92,-92 Q90,-30 0,0" fill="#FFFFFF" class="colorable" />
        <!-- Center Gem -->
        <circle id="mandala-center" cx="0" cy="0" r="40" fill="#FFFFFF" stroke-width="4" class="colorable" />
        <circle cx="0" cy="0" r="18" fill="#1E293B" />
      </g>
    </svg>`
  },
  {
    id: 'activity-spot-the-5-differences-farm',
    title: 'Spot the 5 Differences: Sunny Farm Yard',
    category: 'Activity Sheets',
    subcategory: 'Spot the Difference',
    ageRange: '7-8',
    difficulty: 'Medium',
    tags: ['spot difference', 'puzzle', 'observation', 'farm', 'animals'],
    skills: ['Visual attention', 'Critical thinking'],
    isPremium: false,
    season: 'General',
    downloadsCount: 3400,
    printsCount: 4900,
    favoritesCount: 1560,
    addedDate: '2026-10-09',
    description: 'Look closely at the two barnyard pictures! Can you spot the 5 sneaky differences between them?',
    type: 'activity',
    answerKeySvg: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="650" fill="#FEF2F2" />
      <text x="250" y="80" font-size="22" font-weight="bold" text-anchor="middle" fill="#991B1B">5 Differences Answer Key</text>
      <text x="80" y="180" font-size="18" fill="#B91C1C">1. Cloud missing in picture B</text>
      <text x="80" y="250" font-size="18" fill="#B91C1C">2. Barn weathercock direction reversed</text>
      <text x="80" y="320" font-size="18" fill="#B91C1C">3. Cow has extra black spot</text>
      <text x="80" y="390" font-size="18" fill="#B91C1C">4. Apple on fencepost missing in picture B</text>
      <text x="80" y="460" font-size="18" fill="#B91C1C">5. Piglet tail has double curl</text>
    </svg>`,
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect x="25" y="15" width="450" height="70" rx="14" fill="#FEF2F2" stroke="#FCA5A5" stroke-width="2" />
      <text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#991B1B" stroke="none">Spot 5 Differences! 🔍</text>
      <text x="45" y="72" font-size="13" fill="#B91C1C" stroke="none">Circle the 5 differences in Picture B below.</text>
      <!-- Picture A (Top) -->
      <g transform="translate(30, 105)">
        <rect x="0" y="0" width="440" height="230" rx="10" fill="#F8FAFC" stroke="#94A3B8" stroke-width="2" />
        <text x="15" y="25" font-size="14" font-weight="bold" fill="#334155" stroke="none">Picture A (Original)</text>
        <!-- Barn -->
        <polygon points="40,180 40,110 85,80 130,110 130,180" fill="#FFFFFF" class="colorable" />
        <!-- Cloud -->
        <path d="M260,40 Q280,20 300,40 Q320,40 310,60 L250,60 Z" fill="#FFFFFF" />
        <!-- Happy Cow -->
        <ellipse cx="280" cy="160" rx="45" ry="30" fill="#FFFFFF" class="colorable" />
        <circle cx="270" cy="150" r="8" fill="#1E293B" />
        <!-- Apple on fence -->
        <circle cx="400" cy="140" r="10" fill="#EF4444" stroke="none" />
      </g>
      <!-- Picture B (Bottom) -->
      <g transform="translate(30, 360)">
        <rect x="0" y="0" width="440" height="230" rx="10" fill="#F8FAFC" stroke="#94A3B8" stroke-width="2" />
        <text x="15" y="25" font-size="14" font-weight="bold" fill="#334155" stroke="none">Picture B (Find 5 Differences)</text>
        <polygon points="40,180 40,110 85,80 130,110 130,180" fill="#FFFFFF" class="colorable" />
        <!-- Cloud missing here! (Diff 1) -->
        <!-- Cow has extra spot! (Diff 3) -->
        <ellipse cx="280" cy="160" rx="45" ry="30" fill="#FFFFFF" class="colorable" />
        <circle cx="270" cy="150" r="8" fill="#1E293B" />
        <circle cx="295" cy="165" r="7" fill="#1E293B" />
        <!-- Apple missing on fence! (Diff 4) -->
      </g>
    </svg>`
  },
  {
    id: 'activity-word-search-zoo-animals',
    title: 'Word Search: Wild Safari Zoo Animals',
    category: 'Activity Sheets',
    subcategory: 'Word Search',
    ageRange: '7-8',
    difficulty: 'Hard',
    tags: ['word search', 'reading', 'spelling', 'safari', 'animals'],
    skills: ['Spelling', 'Pattern recognition', 'Vocabulary'],
    isPremium: true,
    season: 'General',
    downloadsCount: 2890,
    printsCount: 4100,
    favoritesCount: 1390,
    addedDate: '2026-10-10',
    description: 'Find 6 safari animals hidden in the word grid: LION, ZEBRA, GIRAFFE, MONKEY, TIGER, HIPPO.',
    type: 'activity',
    answerKeySvg: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="650" fill="#F0FDF4" />
      <text x="250" y="80" font-size="22" font-weight="bold" text-anchor="middle" fill="#166534">Word Search Solution</text>
      <text x="100" y="160" font-size="18" fill="#15803D">LION: Row 1, horizontal</text>
      <text x="100" y="220" font-size="18" fill="#15803D">ZEBRA: Row 3, horizontal</text>
      <text x="100" y="280" font-size="18" fill="#15803D">TIGER: Column 6, vertical</text>
      <text x="100" y="340" font-size="18" fill="#15803D">HIPPO: Row 5, horizontal</text>
      <text x="100" y="400" font-size="18" fill="#15803D">MONKEY: Diagonal down</text>
    </svg>`,
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect x="25" y="15" width="450" height="70" rx="14" fill="#F0FDF4" stroke="#86EFAC" stroke-width="2" />
      <text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#166534" stroke="none">Safari Zoo Word Search</text>
      <text x="45" y="72" font-size="13" fill="#15803D" stroke="none">Find words going across or down: LION, ZEBRA, TIGER, HIPPO.</text>
      <!-- Word Grid Box -->
      <g transform="translate(45, 110)">
        <rect x="0" y="0" width="410" height="340" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2" />
        <!-- Grid Letters (8 columns x 7 rows) -->
        <text x="40" y="50" font-family="monospace" font-size="28" font-weight="bold" fill="#1E293B" stroke="none">L I O N G T X P</text>
        <text x="40" y="100" font-family="monospace" font-size="28" font-weight="bold" fill="#1E293B" stroke="none">Q A M K I I Y R</text>
        <text x="40" y="150" font-family="monospace" font-size="28" font-weight="bold" fill="#1E293B" stroke="none">Z E B R A G W T</text>
        <text x="40" y="200" font-family="monospace" font-size="28" font-weight="bold" fill="#1E293B" stroke="none">W S F O D E S U</text>
        <text x="40" y="250" font-family="monospace" font-size="28" font-weight="bold" fill="#1E293B" stroke="none">H I P P O R Q V</text>
        <text x="40" y="300" font-family="monospace" font-size="28" font-weight="bold" fill="#1E293B" stroke="none">B L M N J K L M</text>
      </g>
      <!-- Word Bank Box -->
      <g transform="translate(45, 470)">
        <rect x="0" y="0" width="410" height="120" rx="12" fill="#FEF3C7" stroke="#FDE68A" stroke-width="2" />
        <text x="25" y="35" font-family="'Fredoka', sans-serif" font-size="18" font-weight="bold" fill="#78350F" stroke="none">Word Bank:</text>
        <text x="35" y="70" font-size="16" font-weight="bold" fill="#92400E" stroke="none">🦁 LION</text>
        <text x="135" y="70" font-size="16" font-weight="bold" fill="#92400E" stroke="none">🦓 ZEBRA</text>
        <text x="245" y="70" font-size="16" font-weight="bold" fill="#92400E" stroke="none">🐯 TIGER</text>
        <text x="335" y="70" font-size="16" font-weight="bold" fill="#92400E" stroke="none">🦛 HIPPO</text>
      </g>
    </svg>`
  },
  {
    id: 'math-geometry-shapes-tracing',
    title: 'Magic Shapes: Circle, Square, Triangle, Star',
    category: 'Number & Math',
    subcategory: 'Shapes & Geometry',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['shapes', 'geometry', 'circle', 'triangle', 'math', 'preschool'],
    skills: ['Shape identification', 'Tracing skills'],
    isPremium: false,
    season: 'General',
    downloadsCount: 3100,
    printsCount: 4700,
    favoritesCount: 1620,
    addedDate: '2026-10-04',
    description: 'Trace 4 magical geometric shapes with dashed lines, then color them in happy rainbow shades!',
    type: 'worksheet',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect x="25" y="15" width="450" height="70" rx="14" fill="#F5F3FF" stroke="#C4B5FD" stroke-width="2" />
      <text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#5B21B6" stroke="none">Trace the Magic Shapes!</text>
      <text x="45" y="72" font-size="13" fill="#6D28D9" stroke="none">Trace along the dashed outline, then color each shape.</text>
      <!-- Circle -->
      <g transform="translate(45, 110)">
        <rect x="0" y="0" width="190" height="210" rx="14" fill="#F8FAFC" stroke="#E2E8F0" />
        <circle id="trace-circle" cx="95" cy="85" r="55" stroke="#8B5CF6" stroke-width="4" stroke-dasharray="6,4" fill="#FFFFFF" class="colorable" />
        <text x="95" y="175" font-family="'Fredoka', sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="#4C1D95" stroke="none">CIRCLE</text>
      </g>
      <!-- Square -->
      <g transform="translate(265, 110)">
        <rect x="0" y="0" width="190" height="210" rx="14" fill="#F8FAFC" stroke="#E2E8F0" />
        <rect id="trace-square" x="45" y="35" width="100" height="100" rx="4" stroke="#8B5CF6" stroke-width="4" stroke-dasharray="6,4" fill="#FFFFFF" class="colorable" />
        <text x="95" y="175" font-family="'Fredoka', sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="#4C1D95" stroke="none">SQUARE</text>
      </g>
      <!-- Triangle -->
      <g transform="translate(45, 350)">
        <rect x="0" y="0" width="190" height="210" rx="14" fill="#F8FAFC" stroke="#E2E8F0" />
        <polygon id="trace-triangle" points="95,30 40,135 150,135" stroke="#8B5CF6" stroke-width="4" stroke-dasharray="6,4" fill="#FFFFFF" class="colorable" />
        <text x="95" y="175" font-family="'Fredoka', sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="#4C1D95" stroke="none">TRIANGLE</text>
      </g>
      <!-- Star -->
      <g transform="translate(265, 350)">
        <rect x="0" y="0" width="190" height="210" rx="14" fill="#F8FAFC" stroke="#E2E8F0" />
        <polygon id="trace-star" points="95,30 108,68 150,68 116,92 128,135 95,108 62,135 74,92 40,68 82,68" stroke="#8B5CF6" stroke-width="4" stroke-dasharray="6,4" fill="#FFFFFF" class="colorable" />
        <text x="95" y="175" font-family="'Fredoka', sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="#4C1D95" stroke="none">STAR</text>
      </g>
    </svg>`
  },
  {
    id: 'color-delicious-cupcake-party',
    title: 'Cherry Blossom Sweet Cupcake',
    category: 'Coloring Pages',
    subcategory: 'Food & Sweets',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['cupcake', 'sweets', 'dessert', 'cherry', 'sprinkles'],
    skills: ['Coloring practice', 'Fine control'],
    isPremium: false,
    season: 'General',
    downloadsCount: 2150,
    printsCount: 3100,
    favoritesCount: 940,
    addedDate: '2026-10-14',
    description: 'A frosted swirl cupcake topped with a glossy cherry, rainbow sprinkles, and striped wrapper.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- Ground plate -->
      <ellipse cx="250" cy="540" rx="170" ry="30" stroke-width="4" fill="#FFFFFF" class="colorable" />
      <!-- Cupcake wrapper -->
      <polygon id="wrapper" points="150,370 180,510 320,510 350,370" fill="#FFFFFF" class="colorable" />
      <line x1="190" y1="370" x2="210" y2="510" stroke-width="3" />
      <line x1="230" y1="370" x2="240" y2="510" stroke-width="3" />
      <line x1="270" y1="370" x2="260" y2="510" stroke-width="3" />
      <line x1="310" y1="370" x2="290" y2="510" stroke-width="3" />
      <!-- Frosting Swirls -->
      <path id="frost-tier1" d="M130,370 C110,340 150,310 180,330 C200,300 250,300 270,330 C300,300 350,310 370,340 C390,370 360,400 340,380 L160,380 Z" fill="#FFFFFF" class="colorable" />
      <path id="frost-tier2" d="M170,320 C160,260 210,240 240,260 C260,230 310,240 330,270 C340,310 300,330 280,320 Z" fill="#FFFFFF" class="colorable" />
      <path id="frost-tier3" d="M210,250 C200,200 260,180 280,210 C300,230 270,260 250,250 Z" fill="#FFFFFF" class="colorable" />
      <!-- Cherry on top -->
      <circle id="cherry" cx="250" cy="160" r="26" fill="#FFFFFF" class="colorable" />
      <path d="M250,135 Q270,80 300,90" stroke-width="3" />
      <!-- Sprinkles -->
      <line x1="200" y1="280" x2="215" y2="285" stroke-width="4" stroke="#F43F5E" />
      <line x1="280" y1="290" x2="295" y2="280" stroke-width="4" stroke="#3B82F6" />
      <line x1="240" y1="330" x2="255" y2="335" stroke-width="4" stroke="#10B981" />
    </svg>`
  },
  {
    id: 'color-princess-fairy-castle',
    title: 'Enchanted Princess Castle & Rainbow',
    category: 'Coloring Pages',
    subcategory: 'Princesses & Castles',
    ageRange: '5-6',
    difficulty: 'Medium',
    tags: ['princess', 'castle', 'fairytale', 'magic', 'fantasy'],
    skills: ['Creativity', 'Attention to detail'],
    isPremium: true,
    season: 'General',
    downloadsCount: 2750,
    printsCount: 4200,
    favoritesCount: 1780,
    addedDate: '2026-10-18',
    description: 'A magical fairytale castle with tall spires, fluttering flags, arched windows, and a friendly bridge.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path id="hill" d="M20,520 Q250,420 480,520 L480,640 L20,640 Z" fill="#FFFFFF" class="colorable" />
      <g transform="translate(100, 180)">
        <rect id="tower-left" x="30" y="120" width="60" height="180" fill="#FFFFFF" class="colorable" />
        <polygon id="roof-left" points="20,120 60,30 100,120" fill="#FFFFFF" class="colorable" />
        <line x1="60" y1="30" x2="60" y2="10" stroke-width="3" />
        <polygon points="60,10 80,18 60,25" fill="#EF4444" stroke="none" />
        <rect id="tower-right" x="210" y="120" width="60" height="180" fill="#FFFFFF" class="colorable" />
        <polygon id="roof-right" points="200,120 240,30 280,120" fill="#FFFFFF" class="colorable" />
        <line x1="240" y1="30" x2="240" y2="10" stroke-width="3" />
        <polygon points="240,10 260,18 240,25" fill="#EF4444" stroke="none" />
        <rect id="keep" x="90" y="160" width="120" height="140" fill="#FFFFFF" class="colorable" />
        <polygon id="roof-center" points="110,160 150,70 190,160" fill="#FFFFFF" class="colorable" />
        <path id="gate" d="M125,300 L125,230 Q150,200 175,230 L175,300 Z" fill="#FFFFFF" class="colorable" />
      </g>
    </svg>`
  },
  // Additional 26 printables:
  {
    id: 'color-savanna-baby-lion',
    title: 'Playful Baby Lion Cub',
    category: 'Coloring Pages',
    subcategory: 'Animals',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['animals', 'lion', 'safari', 'cute', 'cub'],
    skills: ['Coloring grip', 'Animal appreciation'],
    isPremium: false,
    season: 'General',
    downloadsCount: 2200,
    printsCount: 3300,
    favoritesCount: 920,
    addedDate: '2026-10-12',
    description: 'A cheerful baby lion cub sitting under an acacia tree with a friendly butterfly on its nose.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"><circle id="head" cx="250" cy="270" r="80" fill="#FFFFFF" class="colorable"/><circle id="mane" cx="250" cy="270" r="110" stroke-dasharray="10,6" fill="#FFFFFF" class="colorable"/><circle cx="215" cy="250" r="10" fill="#1E293B"/><circle cx="285" cy="250" r="10" fill="#1E293B"/><path d="M240,285 Q250,295 260,285" stroke-width="4"/><ellipse id="body" cx="250" cy="460" rx="90" ry="100" fill="#FFFFFF" class="colorable"/><path id="tail" d="M330,480 Q400,450 390,380" stroke-width="5"/></svg>`
  },
  {
    id: 'color-deep-ocean-submarine',
    title: 'Yellow Research Submarine',
    category: 'Coloring Pages',
    subcategory: 'Vehicles',
    ageRange: '5-6',
    difficulty: 'Medium',
    tags: ['submarine', 'ocean', 'vehicle', 'exploration'],
    skills: ['Focus', 'Imagination'],
    isPremium: true,
    season: 'General',
    downloadsCount: 1650,
    printsCount: 2400,
    favoritesCount: 810,
    addedDate: '2026-10-11',
    description: 'Dive into the deep blue with a cheerful yellow submarine with portholes and propeller.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"><ellipse id="hull" cx="250" cy="320" rx="160" ry="90" fill="#FFFFFF" class="colorable"/><rect id="conning-tower" x="210" y="170" width="80" height="70" rx="10" fill="#FFFFFF" class="colorable"/><circle id="port1" cx="170" cy="320" r="26" fill="#FFFFFF" class="colorable"/><circle id="port2" cx="250" cy="320" r="26" fill="#FFFFFF" class="colorable"/><circle id="port3" cx="330" cy="320" r="26" fill="#FFFFFF" class="colorable"/><polygon id="propeller" points="80,300 50,280 50,360" fill="#FFFFFF" class="colorable"/></svg>`
  },
  {
    id: 'color-solar-system-orbit',
    title: 'Solar System Planetary Orbit',
    category: 'Coloring Pages',
    subcategory: 'Space & Astronomy',
    ageRange: '7-8',
    difficulty: 'Medium',
    tags: ['space', 'planets', 'sun', 'science', 'astronomy'],
    skills: ['Science inquiry', 'Fine coloring'],
    isPremium: true,
    season: 'General',
    downloadsCount: 3100,
    printsCount: 4600,
    favoritesCount: 1530,
    addedDate: '2026-10-15',
    description: 'Learn the planets! Sun, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune in their orbits.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><circle id="sun" cx="60" cy="325" r="90" fill="#FFFFFF" class="colorable"/><path d="M60,100 A225,225 0 0,1 60,550" stroke-dasharray="6,6"/><circle id="earth" cx="240" cy="280" r="24" fill="#FFFFFF" class="colorable"/><circle id="saturn" cx="380" cy="360" r="34" fill="#FFFFFF" class="colorable"/><ellipse cx="380" cy="360" rx="55" ry="12" stroke-width="3" transform="rotate(-15 380 360)"/></svg>`
  },
  {
    id: 'color-delicious-pizza-slice',
    title: 'Cheesy Pepperoni Pizza Party',
    category: 'Coloring Pages',
    subcategory: 'Food & Sweets',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['pizza', 'food', 'party', 'fun'],
    skills: ['Coloring', 'Shape perception'],
    isPremium: false,
    season: 'General',
    downloadsCount: 2450,
    printsCount: 3500,
    favoritesCount: 990,
    addedDate: '2026-10-09',
    description: 'Yum! A giant smiling pizza slice loaded with pepperoni, mushrooms, olives, and melting cheese pulls.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"><polygon id="pizza" points="250,520 80,180 420,180" fill="#FFFFFF" class="colorable"/><path id="crust" d="M80,180 Q250,130 420,180" stroke-width="8"/><circle id="pep1" cx="220" cy="270" r="24" fill="#FFFFFF" class="colorable"/><circle id="pep2" cx="300" cy="330" r="24" fill="#FFFFFF" class="colorable"/><circle id="pep3" cx="240" cy="410" r="20" fill="#FFFFFF" class="colorable"/></svg>`
  },
  {
    id: 'trace-letter-c',
    title: 'Letter C Tracing: Cat & Cupcake',
    category: 'Alphabet & Letters',
    subcategory: 'Uppercase & Lowercase',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['alphabet', 'tracing', 'letter c', 'cat', 'preschool'],
    skills: ['Curve control', 'Phonics /k/ sound'],
    isPremium: false,
    season: 'General',
    downloadsCount: 2900,
    printsCount: 4100,
    favoritesCount: 1380,
    addedDate: '2026-10-02',
    description: 'Learn letter C! Practice curved strokes from top to bottom with friendly cat illustrations.',
    type: 'worksheet',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="30" y="20" width="440" height="90" rx="16" fill="#FEF3C7" stroke-width="2"/><text x="50" y="65" font-family="'Fredoka', sans-serif" font-size="34" font-weight="bold" fill="#78350F" stroke="none">C is for Cat 🐱</text><g transform="translate(60, 140)"><text x="60" y="145" font-family="'Fredoka', sans-serif" font-size="150" font-weight="bold" fill="none" stroke="#CBD5E1" stroke-width="6" stroke-dasharray="8,6">C</text><text x="230" y="145" font-family="'Fredoka', sans-serif" font-size="140" font-weight="bold" fill="none" stroke="#CBD5E1" stroke-width="6" stroke-dasharray="8,6">c</text></g><g transform="translate(30, 360)"><line x1="0" y1="50" x2="440" y2="50" stroke="#94A3B8" stroke-dasharray="4,4"/><text x="40" y="68" font-family="'Fredoka', sans-serif" font-size="52" fill="none" stroke="#64748B" stroke-width="2">C</text><text x="140" y="68" font-family="'Fredoka', sans-serif" font-size="52" fill="none" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4">C</text><text x="240" y="68" font-family="'Fredoka', sans-serif" font-size="52" fill="none" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4">C</text><text x="340" y="68" font-family="'Fredoka', sans-serif" font-size="52" fill="none" stroke="#E2E8F0" stroke-width="2" stroke-dasharray="4,4">C</text></g></svg>`
  },
  {
    id: 'trace-letter-d',
    title: 'Letter D Tracing: Dog & Drum',
    category: 'Alphabet & Letters',
    subcategory: 'Uppercase & Lowercase',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['alphabet', 'tracing', 'letter d', 'dog', 'preschool'],
    skills: ['Pencil grip', 'Phonics /d/ sound'],
    isPremium: false,
    season: 'General',
    downloadsCount: 2750,
    printsCount: 3950,
    favoritesCount: 1210,
    addedDate: '2026-10-03',
    description: 'Learn letter D! Straight line down, then big round tummy to the right.',
    type: 'worksheet',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="30" y="20" width="440" height="90" rx="16" fill="#FCE7F3" stroke-width="2"/><text x="50" y="65" font-family="'Fredoka', sans-serif" font-size="34" font-weight="bold" fill="#831843" stroke="none">D is for Dog 🐶</text><g transform="translate(60, 140)"><text x="60" y="145" font-family="'Fredoka', sans-serif" font-size="150" font-weight="bold" fill="none" stroke="#CBD5E1" stroke-width="6" stroke-dasharray="8,6">D</text><text x="230" y="145" font-family="'Fredoka', sans-serif" font-size="140" font-weight="bold" fill="none" stroke="#CBD5E1" stroke-width="6" stroke-dasharray="8,6">d</text></g><g transform="translate(30, 360)"><line x1="0" y1="50" x2="440" y2="50" stroke="#94A3B8" stroke-dasharray="4,4"/><text x="40" y="68" font-family="'Fredoka', sans-serif" font-size="52" fill="none" stroke="#64748B" stroke-width="2">D</text><text x="140" y="68" font-family="'Fredoka', sans-serif" font-size="52" fill="none" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4">D</text><text x="240" y="68" font-family="'Fredoka', sans-serif" font-size="52" fill="none" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4">D</text></g></svg>`
  },
  {
    id: 'worksheet-phonics-letter-match',
    title: 'Phonics Sound Quest: Match Letter to Picture',
    category: 'Alphabet & Letters',
    subcategory: 'Phonics & Letter Sound',
    ageRange: '5-6',
    difficulty: 'Medium',
    tags: ['phonics', 'reading', 'letters', 'matching', 'kindergarten'],
    skills: ['Initial sound recognition', 'Vocabulary'],
    isPremium: true,
    season: 'General',
    downloadsCount: 3100,
    printsCount: 4500,
    favoritesCount: 1620,
    addedDate: '2026-10-14',
    description: 'Draw a line from each letter (S, M, T, B) to the picture that begins with its sound.',
    type: 'worksheet',
    answerKeySvg: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="650" fill="#F8FAFC"/><text x="250" y="80" font-size="22" font-weight="bold" text-anchor="middle" fill="#0F172A">Phonics Match Solution</text><text x="100" y="180" font-size="18" fill="#334155">S ➔ Sun ☀️</text><text x="100" y="260" font-size="18" fill="#334155">M ➔ Moon 🌙</text><text x="100" y="340" font-size="18" fill="#334155">T ➔ Tree 🌳</text><text x="100" y="420" font-size="18" fill="#334155">B ➔ Ball ⚽</text></svg>`,
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="25" y="15" width="450" height="70" rx="14" fill="#EFF6FF" stroke="#93C5FD" stroke-width="2"/><text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#1E3A8A" stroke="none">Beginning Sound Match</text><g transform="translate(40, 110)"><rect x="0" y="0" width="120" height="70" rx="10" fill="#FFFFFF" stroke="#CBD5E1"/><text x="45" y="48" font-family="'Fredoka', sans-serif" font-size="44" font-weight="bold" fill="#2563EB" stroke="none">S</text><rect x="300" y="0" width="120" height="70" rx="10" fill="#FFFFFF" stroke="#CBD5E1"/><text x="345" y="48" font-size="34" stroke="none">🌙</text></g><g transform="translate(40, 200)"><rect x="0" y="0" width="120" height="70" rx="10" fill="#FFFFFF" stroke="#CBD5E1"/><text x="40" y="48" font-family="'Fredoka', sans-serif" font-size="44" font-weight="bold" fill="#2563EB" stroke="none">M</text><rect x="300" y="0" width="120" height="70" rx="10" fill="#FFFFFF" stroke="#CBD5E1"/><text x="345" y="48" font-size="34" stroke="none">☀️</text></g><g transform="translate(40, 290)"><rect x="0" y="0" width="120" height="70" rx="10" fill="#FFFFFF" stroke="#CBD5E1"/><text x="45" y="48" font-family="'Fredoka', sans-serif" font-size="44" font-weight="bold" fill="#2563EB" stroke="none">T</text><rect x="300" y="0" width="120" height="70" rx="10" fill="#FFFFFF" stroke="#CBD5E1"/><text x="345" y="48" font-size="34" stroke="none">⚽</text></g><g transform="translate(40, 380)"><rect x="0" y="0" width="120" height="70" rx="10" fill="#FFFFFF" stroke="#CBD5E1"/><text x="45" y="48" font-family="'Fredoka', sans-serif" font-size="44" font-weight="bold" fill="#2563EB" stroke="none">B</text><rect x="300" y="0" width="120" height="70" rx="10" fill="#FFFFFF" stroke="#CBD5E1"/><text x="345" y="48" font-size="34" stroke="none">🌳</text></g></svg>`
  },
  {
    id: 'math-subtraction-within-5',
    title: 'Take-Away Cookies: Subtraction within 5',
    category: 'Number & Math',
    subcategory: 'Addition & Subtraction',
    ageRange: '5-6',
    difficulty: 'Medium',
    tags: ['subtraction', 'math', 'cookies', 'take away', 'kindergarten'],
    skills: ['Subtraction concept', 'Cross-out counting'],
    isPremium: false,
    season: 'General',
    downloadsCount: 2600,
    printsCount: 3800,
    favoritesCount: 1100,
    addedDate: '2026-10-11',
    description: 'Cross out the cookies to solve the subtraction problems: 5 - 2 = ?, 4 - 1 = ?, 3 - 2 = ?.',
    type: 'worksheet',
    answerKeySvg: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="650" fill="#FEF2F2"/><text x="250" y="80" font-size="22" font-weight="bold" text-anchor="middle" fill="#991B1B">Subtraction Key</text><text x="120" y="180" font-size="20" fill="#B91C1C">5 - 2 = 3</text><text x="120" y="280" font-size="20" fill="#B91C1C">4 - 1 = 3</text><text x="120" y="380" font-size="20" fill="#B91C1C">3 - 2 = 1</text></svg>`,
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="25" y="15" width="450" height="70" rx="14" fill="#FEF2F2" stroke="#FCA5A5" stroke-width="2"/><text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#991B1B" stroke="none">Cookie Subtraction</text><g transform="translate(30, 110)"><rect x="0" y="0" width="440" height="85" rx="10" fill="#F8FAFC" stroke="#E2E8F0"/><text x="30" y="55" font-family="'Fredoka', sans-serif" font-size="38" font-weight="bold" fill="#1E293B" stroke="none">5 - 2 =</text><rect x="220" y="15" width="60" height="55" rx="8" fill="#FFFFFF" stroke="#94A3B8" stroke-dasharray="4,4"/><g transform="translate(320, 25)"><circle cx="15" cy="18" r="14" fill="#FDE68A"/><line x1="5" y1="8" x2="25" y2="28" stroke="#EF4444" stroke-width="3"/><circle cx="50" cy="18" r="14" fill="#FDE68A"/><line x1="40" y1="8" x2="60" y2="28" stroke="#EF4444" stroke-width="3"/><circle cx="85" cy="18" r="14" fill="#FDE68A"/></g></g><g transform="translate(30, 220)"><rect x="0" y="0" width="440" height="85" rx="10" fill="#F8FAFC" stroke="#E2E8F0"/><text x="30" y="55" font-family="'Fredoka', sans-serif" font-size="38" font-weight="bold" fill="#1E293B" stroke="none">4 - 1 =</text><rect x="220" y="15" width="60" height="55" rx="8" fill="#FFFFFF" stroke="#94A3B8" stroke-dasharray="4,4"/></g></svg>`
  },
  {
    id: 'math-ten-frames-counting',
    title: 'Ten Frames: Fill the Dots 1 to 10',
    category: 'Number & Math',
    subcategory: 'Counting & Tracing',
    ageRange: '5-6',
    difficulty: 'Easy',
    tags: ['ten frames', 'math', 'counting', 'dots', 'kindergarten'],
    skills: ['Subitizing', 'Base-10 understanding'],
    isPremium: true,
    season: 'General',
    downloadsCount: 3300,
    printsCount: 4900,
    favoritesCount: 1450,
    addedDate: '2026-10-13',
    description: 'Use the standard 10-frame visual grid to count and color dots representing numbers up to 10.',
    type: 'worksheet',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="25" y="15" width="450" height="70" rx="14" fill="#F0FDFA" stroke="#5EEAD4" stroke-width="2"/><text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#134E4A" stroke="none">Ten Frames Practice</text><g transform="translate(30, 110)"><text x="10" y="45" font-family="'Fredoka', sans-serif" font-size="40" font-weight="bold" fill="#0D9488" stroke="none">7</text><rect x="60" y="10" width="200" height="80" rx="6" fill="#F8FAFC" stroke="#CBD5E1"/><line x1="60" y1="50" x2="260" y2="50" stroke="#CBD5E1"/><line x1="100" y1="10" x2="100" y2="90" stroke="#CBD5E1"/><line x1="140" y1="10" x2="140" y2="90" stroke="#CBD5E1"/><line x1="180" y1="10" x2="180" y2="90" stroke="#CBD5E1"/><line x1="220" y1="10" x2="220" y2="90" stroke="#CBD5E1"/><circle cx="80" cy="30" r="10" fill="#0D9488" stroke="none"/><circle cx="120" cy="30" r="10" fill="#0D9488" stroke="none"/><circle cx="160" cy="30" r="10" fill="#0D9488" stroke="none"/><circle cx="200" cy="30" r="10" fill="#0D9488" stroke="none"/><circle cx="240" cy="30" r="10" fill="#0D9488" stroke="none"/><circle cx="80" cy="70" r="10" fill="#0D9488" stroke="none"/><circle cx="120" cy="70" r="10" fill="#0D9488" stroke="none"/></g></svg>`
  },
  {
    id: 'activity-cut-and-paste-robot',
    title: 'Cut & Build My Friendly Robot',
    category: 'Activity Sheets',
    subcategory: 'Cut and Paste',
    ageRange: '5-6',
    difficulty: 'Medium',
    tags: ['cut and paste', 'craft', 'robot', 'scissor skills', 'glue'],
    skills: ['Fine motor dexterity', 'Spatial assembly'],
    isPremium: true,
    season: 'General',
    bundleId: 'bundle-preschool-30',
    bundleTitle: 'Preschool Tracing & Fine Motor Mastery (30 Pages)',
    etsyUrl: 'https://etsy.com/shop/PrintPlayKids?section_id=preschool',
    downloadsCount: 3600,
    printsCount: 5200,
    favoritesCount: 1890,
    addedDate: '2026-10-16',
    description: 'Cut out the robot head, body, gears, antennae, and legs, then paste them onto the assembly blueprint!',
    type: 'activity',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="25" y="15" width="450" height="70" rx="14" fill="#F3E8FF" stroke="#D8B4FE" stroke-width="2"/><text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#6B21A8" stroke="none">Build a Robot Craft</text><g transform="translate(50, 110)"><rect id="robot-head" x="0" y="0" width="120" height="90" rx="8" stroke-dasharray="6,4" fill="#FFFFFF" class="colorable"/><circle cx="35" cy="40" r="12" fill="#FFFFFF" class="colorable"/><circle cx="85" cy="40" r="12" fill="#FFFFFF" class="colorable"/><rect x="35" y="65" width="50" height="12" rx="3" fill="#E2E8F0"/><text x="60" y="115" font-size="12" text-anchor="middle" stroke="none">✂️ Head</text></g><g transform="translate(260, 110)"><rect id="robot-torso" x="0" y="0" width="160" height="140" rx="10" stroke-dasharray="6,4" fill="#FFFFFF" class="colorable"/><circle cx="80" cy="70" r="30" stroke-dasharray="4,4"/><text x="80" y="165" font-size="12" text-anchor="middle" stroke="none">✂️ Torso</text></g></svg>`
  },
  {
    id: 'activity-dot-to-dot-teddy-bear',
    title: 'Dot-to-Dot 1–20: Cuddly Teddy Bear',
    category: 'Activity Sheets',
    subcategory: 'Dot-to-Dot',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['dot to dot', 'teddy bear', 'numbers', 'cute', 'preschool'],
    skills: ['Number order', 'Pencil coordination'],
    isPremium: false,
    season: 'General',
    downloadsCount: 3100,
    printsCount: 4400,
    favoritesCount: 1400,
    addedDate: '2026-10-17',
    description: 'Connect numbers 1 through 20 to complete the cuddly teddy bear holding a heart balloon.',
    type: 'activity',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="25" y="15" width="450" height="70" rx="14" fill="#FEF3C7" stroke="#FDE68A" stroke-width="2"/><text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#78350F" stroke="none">Dot-to-Dot Teddy Bear</text><circle cx="200" cy="280" r="80" fill="#FFFFFF" class="colorable"/><circle cx="170" cy="260" r="6" fill="#1E293B"/><circle cx="230" cy="260" r="6" fill="#1E293B"/><ellipse cx="200" cy="285" rx="14" ry="10" fill="#CBD5E1"/><circle cx="130" cy="210" r="24" fill="#FFFFFF" class="colorable"/><circle cx="270" cy="210" r="24" fill="#FFFFFF" class="colorable"/></svg>`
  },
  {
    id: 'motor-pencil-control-loops',
    title: 'Pencil Control: Rollercoaster Loop-the-Loops',
    category: 'Fine Motor Practice',
    subcategory: 'Line Tracing',
    ageRange: '5-6',
    difficulty: 'Medium',
    tags: ['line tracing', 'pencil control', 'fine motor', 'handwriting prep'],
    skills: ['Finger flex stability', 'Fluid handwriting'],
    isPremium: false,
    season: 'General',
    bundleId: 'bundle-preschool-30',
    bundleTitle: 'Preschool Tracing & Fine Motor Mastery (30 Pages)',
    etsyUrl: 'https://etsy.com/shop/PrintPlayKids?section_id=preschool',
    downloadsCount: 3700,
    printsCount: 5400,
    favoritesCount: 1750,
    addedDate: '2026-10-18',
    description: 'Help the toy racecar zoom through continuous looping curves without lifting your pencil!',
    type: 'worksheet',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="25" y="15" width="450" height="70" rx="14" fill="#FEFCE8" stroke="#FDE047" stroke-width="2"/><text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#854D0E" stroke="none">Pencil Loops Challenge</text><g transform="translate(30, 130)"><text x="10" y="30" font-size="28" stroke="none">🏎️</text><path d="M50,40 C80,-10 100,80 130,40 C160,-10 180,80 210,40 C240,-10 260,80 290,40 C320,-10 340,80 370,40" stroke="#EAB308" stroke-width="4" stroke-dasharray="6,4"/><text x="380" y="30" font-size="28" stroke="none">🏁</text></g><g transform="translate(30, 260)"><text x="10" y="30" font-size="28" stroke="none">🚀</text><path d="M50,40 Q90,90 130,40 T210,40 T290,40 T370,40" stroke="#3B82F6" stroke-width="4" stroke-dasharray="6,4"/><text x="380" y="30" font-size="28" stroke="none">🪐</text></g></svg>`
  },
  {
    id: 'chart-morning-routine-checklist',
    title: 'Good Morning Sunshine Routine Checklist',
    category: 'Learning Charts',
    subcategory: 'Routine Charts',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['morning routine', 'checklist', 'habits', 'preschool', 'independence'],
    skills: ['Morning independence', 'Sequence following'],
    isPremium: false,
    season: 'General',
    downloadsCount: 4100,
    printsCount: 6500,
    favoritesCount: 2200,
    addedDate: '2026-10-15',
    description: 'Bright and cheerful visual checklist with 5 morning steps: Wake up, Potty, Dress, Breakfast, and Backpack.',
    type: 'chart',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="25" y="15" width="450" height="70" rx="14" fill="#FFFBEB" stroke="#FDE68A" stroke-width="2"/><text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#92400E" stroke="none">Good Morning Routine ☀️</text><g transform="translate(30, 110)"><rect x="0" y="0" width="440" height="70" rx="10" fill="#F8FAFC" stroke="#CBD5E1"/><text x="25" y="44" font-size="22" stroke="none">1. ⏰ Wake Up with a Smile</text><circle cx="390" cy="35" r="18" stroke="#94A3B8" stroke-dasharray="4,4"/></g><g transform="translate(30, 195)"><rect x="0" y="0" width="440" height="70" rx="10" fill="#F8FAFC" stroke="#CBD5E1"/><text x="25" y="44" font-size="22" stroke="none">2. 🚽 Use the Bathroom & Wash Hands</text><circle cx="390" cy="35" r="18" stroke="#94A3B8" stroke-dasharray="4,4"/></g><g transform="translate(30, 280)"><rect x="0" y="0" width="440" height="70" rx="10" fill="#F8FAFC" stroke="#CBD5E1"/><text x="25" y="44" font-size="22" stroke="none">3. 👕 Get Dressed in Cool Clothes</text><circle cx="390" cy="35" r="18" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4"/></g><g transform="translate(30, 365)"><rect x="0" y="0" width="440" height="70" rx="10" fill="#F8FAFC" stroke="#CBD5E1"/><text x="25" y="44" font-size="22" stroke="none">4. 🥞 Eat a Yummy Breakfast</text><circle cx="390" cy="35" r="18" stroke="#94A3B8" stroke-dasharray="4,4"/></g><g transform="translate(30, 450)"><rect x="0" y="0" width="440" height="70" rx="10" fill="#F8FAFC" stroke="#CBD5E1"/><text x="25" y="44" font-size="22" stroke="none">5. 🎒 Pack Backpack & Shoes On</text><circle cx="390" cy="35" r="18" stroke="#94A3B8" stroke-dasharray="4,4"/></g></svg>`
  },
  {
    id: 'chart-reading-adventure-log',
    title: 'Bookworm 20-Book Reading Quest Log',
    category: 'Learning Charts',
    subcategory: 'Reward Charts',
    ageRange: '5-6',
    difficulty: 'Easy',
    tags: ['reading', 'books', 'tracker', 'reward', 'literacy'],
    skills: ['Reading habit', 'Goal tracking'],
    isPremium: true,
    season: 'General',
    downloadsCount: 3400,
    printsCount: 4800,
    favoritesCount: 1600,
    addedDate: '2026-10-19',
    description: 'Color in a book on the winding caterpillar trail every time you read a bedtime story or book!',
    type: 'chart',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="25" y="15" width="450" height="70" rx="14" fill="#ECFDF5" stroke="#A7F3D0" stroke-width="2"/><text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#065F46" stroke="none">My 20-Book Reading Log 📚</text><g transform="translate(40, 110)"><rect x="0" y="0" width="60" height="80" rx="6" fill="#FFFFFF" class="colorable"/><text x="30" y="45" font-size="20" font-weight="bold" text-anchor="middle" stroke="none">1</text></g><g transform="translate(120, 110)"><rect x="0" y="0" width="60" height="80" rx="6" fill="#FFFFFF" class="colorable"/><text x="30" y="45" font-size="20" font-weight="bold" text-anchor="middle" stroke="none">2</text></g><g transform="translate(200, 110)"><rect x="0" y="0" width="60" height="80" rx="6" fill="#FFFFFF" class="colorable"/><text x="30" y="45" font-size="20" font-weight="bold" text-anchor="middle" stroke="none">3</text></g><g transform="translate(280, 110)"><rect x="0" y="0" width="60" height="80" rx="6" fill="#FFFFFF" class="colorable"/><text x="30" y="45" font-size="20" font-weight="bold" text-anchor="middle" stroke="none">4</text></g><g transform="translate(360, 110)"><rect x="0" y="0" width="60" height="80" rx="6" fill="#FFFFFF" class="colorable"/><text x="30" y="45" font-size="20" font-weight="bold" text-anchor="middle" stroke="none">5</text></g></svg>`
  },
  {
    id: 'seasonal-halloween-haunted-maze',
    title: 'Haunted Castle Candy Corn Maze',
    category: 'Seasonal & Holiday',
    subcategory: 'Halloween Special',
    ageRange: '7-8',
    difficulty: 'Hard',
    tags: ['halloween', 'maze', 'castle', 'spooky', 'candy corn'],
    skills: ['Complex problem solving', 'Visual tracking'],
    isPremium: true,
    season: 'Halloween',
    bundleId: 'bundle-halloween-20',
    bundleTitle: 'Spooky Cute Halloween Activity Bundle (20 Pages)',
    etsyUrl: 'https://etsy.com/shop/PrintPlayKids?section_id=seasonal',
    downloadsCount: 3800,
    printsCount: 5200,
    favoritesCount: 1950,
    addedDate: '2026-10-21',
    description: 'Wind through the cobwebbed hallways of the haunted castle to rescue the golden candy corn!',
    type: 'activity',
    answerKeySvg: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="650" fill="#FAF5FF"/><text x="250" y="80" font-size="22" font-weight="bold" text-anchor="middle" fill="#6B21A8">Haunted Maze Solution</text><path d="M70,160 L140,160 L140,280 L280,280 L280,400 L420,400" stroke="#9333EA" stroke-width="8" fill="none"/></svg>`,
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="25" y="15" width="450" height="70" rx="14" fill="#F3E8FF" stroke="#D8B4FE" stroke-width="2"/><text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#6B21A8" stroke="none">Haunted Castle Maze 🏰</text><g transform="translate(50, 110)" stroke="#4C1D95" stroke-width="4"><path d="M0,0 L400,0 L400,420 L0,420 Z"/><path d="M60,0 L60,100 L120,100"/><path d="M120,60 L240,60 L240,180"/><path d="M0,180 L180,180 L180,300"/><path d="M300,100 L300,240 L360,240"/><path d="M240,300 L240,420"/></g></svg>`
  },
  {
    id: 'seasonal-christmas-tree-ornaments',
    title: 'Festive Christmas Tree & Sparkling Ornaments',
    category: 'Seasonal & Holiday',
    subcategory: 'Christmas',
    ageRange: '5-6',
    difficulty: 'Easy',
    tags: ['christmas', 'holiday', 'tree', 'santa', 'winter'],
    skills: ['Holiday coloring', 'Pattern design'],
    isPremium: false,
    season: 'Christmas',
    downloadsCount: 4500,
    printsCount: 7100,
    favoritesCount: 2600,
    addedDate: '2026-10-18',
    description: 'Trim the tree! A big evergreen loaded with round baubles, candy canes, gingerbread men, and a shining star.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"><polygon id="star" points="250,90 260,115 285,115 265,130 272,155 250,140 228,155 235,130 215,115 240,115" fill="#FFFFFF" class="colorable"/><polygon id="tier1" points="250,140 180,240 320,240" fill="#FFFFFF" class="colorable"/><polygon id="tier2" points="250,220 140,360 360,360" fill="#FFFFFF" class="colorable"/><polygon id="tier3" points="250,340 100,500 400,500" fill="#FFFFFF" class="colorable"/><rect id="trunk" x="220" y="500" width="60" height="70" fill="#FFFFFF" class="colorable"/><circle id="bauble1" cx="210" cy="270" r="14" fill="#FFFFFF" class="colorable"/><circle id="bauble2" cx="290" cy="300" r="14" fill="#FFFFFF" class="colorable"/><circle id="bauble3" cx="190" cy="420" r="14" fill="#FFFFFF" class="colorable"/><circle id="bauble4" cx="310" cy="440" r="14" fill="#FFFFFF" class="colorable"/></svg>`
  },
  {
    id: 'seasonal-easter-bunny-egg-hunt',
    title: 'Spring Bunny & Floral Easter Egg Hunt',
    category: 'Seasonal & Holiday',
    subcategory: 'Easter',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['easter', 'bunny', 'spring', 'eggs', 'flowers'],
    skills: ['Color harmony', 'Spring appreciation'],
    isPremium: false,
    season: 'Easter',
    downloadsCount: 2800,
    printsCount: 4200,
    favoritesCount: 1350,
    addedDate: '2026-10-15',
    description: 'A floppy-eared bunny peeking out from spring tulips with patterned Easter eggs to color.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"><circle id="bunny-head" cx="250" cy="300" r="70" fill="#FFFFFF" class="colorable"/><ellipse id="ear-left" cx="210" cy="170" rx="25" ry="70" fill="#FFFFFF" class="colorable"/><ellipse id="ear-right" cx="290" cy="170" rx="25" ry="70" fill="#FFFFFF" class="colorable"/><ellipse id="egg" cx="120" cy="460" rx="45" ry="60" fill="#FFFFFF" class="colorable"/><path d="M85,460 Q120,430 155,460" stroke-dasharray="4,4"/></svg>`
  },
  {
    id: 'islamic-bismillah-arabic-calligraphy',
    title: 'Bismillah Calligraphy & Geometric Star Tile',
    category: 'Islamic Kids',
    subcategory: 'Arabic Letters',
    ageRange: '7-8',
    difficulty: 'Hard',
    tags: ['islamic', 'bismillah', 'arabic', 'geometry', 'mindfulness'],
    skills: ['Cultural appreciation', 'Geometric coloring'],
    isPremium: true,
    season: 'General',
    bundleId: 'bundle-arabic-alphabets-28',
    bundleTitle: 'Noor Arabic Alphabet Tracing & Coloring (28 Pages)',
    etsyUrl: 'https://etsy.com/shop/PrintPlayKids?section_id=islamic',
    downloadsCount: 3800,
    printsCount: 5600,
    favoritesCount: 2100,
    addedDate: '2026-10-16',
    description: 'Learn the blessing of saying "Bismillah" (In the name of Allah) with simplified kid-friendly Islamic geometry.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="25" y="15" width="450" height="70" rx="14" fill="#ECFDF5" stroke="#A7F3D0" stroke-width="2"/><text x="250" y="60" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#065F46" stroke="none">In the Name of Allah</text><g transform="translate(100, 160)"><rect width="300" height="300" rx="20" fill="#FFFFFF" class="colorable"/><text x="150" y="160" font-size="70" text-anchor="middle" font-weight="bold" fill="#047857" stroke="none">بِسْمِ اللَّهِ</text><text x="150" y="220" font-family="'Fredoka', sans-serif" font-size="18" text-anchor="middle" fill="#065F46" stroke="none">"Bismillah ir-Rahman ir-Rahim"</text></g></svg>`
  },
  {
    id: 'islamic-dua-before-sleep-sheet',
    title: 'Bedtime Dua & Starlit Window Coloring',
    category: 'Islamic Kids',
    subcategory: 'Duas & Morals',
    ageRange: '5-6',
    difficulty: 'Easy',
    tags: ['dua', 'islamic', 'bedtime', 'stars', 'night'],
    skills: ['Daily prayer', 'Routine reflection'],
    isPremium: false,
    season: 'General',
    downloadsCount: 3400,
    printsCount: 4900,
    favoritesCount: 1820,
    addedDate: '2026-10-17',
    description: 'A cozy bedroom scene with glowing crescent moon and the gentle bedtime dua: "Bismika Rabbi wada\'tu janbi".',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="25" y="15" width="450" height="70" rx="14" fill="#F0FDFA" stroke="#5EEAD4" stroke-width="2"/><text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="26" font-weight="bold" fill="#134E4A" stroke="none">Bedtime Dua Before Sleep 🌙</text><g transform="translate(50, 110)"><rect x="0" y="0" width="400" height="130" rx="12" fill="#FFFFFF" stroke="#CBD5E1"/><text x="200" y="55" font-size="32" font-weight="bold" text-anchor="middle" fill="#0F766E" stroke="none">بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي</text><text x="200" y="95" font-size="14" text-anchor="middle" fill="#334155" stroke="none">"In Your name, my Lord, I lie down to rest"</text></g><circle id="window" cx="250" cy="380" r="120" fill="#FFFFFF" class="colorable"/><path d="M280,310 C250,310 220,340 220,380 C220,420 250,450 280,450 C260,420 250,380 280,310 Z" fill="#FFFFFF" class="colorable"/></svg>`
  },
  {
    id: 'puzzle-sudoku-4x4-farm-animals',
    title: 'Kids 4x4 Mini Sudoku: Barnyard Friends',
    category: 'Puzzles & Games',
    subcategory: 'Brain Teasers',
    ageRange: '7-8',
    difficulty: 'Medium',
    tags: ['sudoku', 'logic', 'puzzle', 'brain games', 'animals'],
    skills: ['Deductive reasoning', 'Logic'],
    isPremium: true,
    season: 'General',
    downloadsCount: 2900,
    printsCount: 4100,
    favoritesCount: 1320,
    addedDate: '2026-10-18',
    description: 'Solve the 4x4 picture Sudoku! Each row, column, and 2x2 box must contain: Pig (🐷), Sheep (🐑), Cow (🐮), Duck (🦆).',
    type: 'activity',
    answerKeySvg: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="650" fill="#FEF3C7"/><text x="250" y="80" font-size="22" font-weight="bold" text-anchor="middle" fill="#78350F">Sudoku 4x4 Solution</text><text x="150" y="180" font-size="28">🐷  🐮  🐑  🦆</text><text x="150" y="240" font-size="28">🐑  🦆  🐷  🐮</text><text x="150" y="300" font-size="28">🐮  🐷  🦆  🐑</text><text x="150" y="360" font-size="28">🦆  🐑  🐮  🐷</text></svg>`,
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="25" y="15" width="450" height="70" rx="14" fill="#FEF3C7" stroke="#FDE68A" stroke-width="2"/><text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#78350F" stroke="none">Animal 4x4 Sudoku</text><g transform="translate(60, 110)"><rect width="360" height="360" stroke-width="6" fill="#F8FAFC"/><line x1="90" y1="0" x2="90" y2="360"/><line x1="180" y1="0" x2="180" y2="360" stroke-width="6"/><line x1="270" y1="0" x2="270" y2="360"/><line x1="0" y1="90" x2="360" y2="90"/><line x1="0" y1="180" x2="360" y2="180" stroke-width="6"/><line x1="0" y1="270" x2="360" y2="270"/><text x="45" y="60" font-size="40" text-anchor="middle" stroke="none">🐷</text><text x="225" y="60" font-size="40" text-anchor="middle" stroke="none">🐑</text><text x="135" y="150" font-size="40" text-anchor="middle" stroke="none">🦆</text><text x="315" y="240" font-size="40" text-anchor="middle" stroke="none">🐮</text></g></svg>`
  },
  {
    id: 'poster-weather-calendar-daily',
    title: 'What\'s the Weather Like Today? Daily Wheel',
    category: 'Posters & Cards',
    subcategory: 'Classroom Posters',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['weather', 'science', 'poster', 'preschool', 'calendar'],
    skills: ['Weather observation', 'Vocabulary'],
    isPremium: false,
    season: 'General',
    downloadsCount: 3950,
    printsCount: 6200,
    favoritesCount: 2150,
    addedDate: '2026-10-19',
    description: 'A cheerful classroom weather wheel featuring Sunny, Rainy, Cloudy, Snowy, Windy, and Rainbow segments.',
    type: 'chart',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="25" y="15" width="450" height="70" rx="14" fill="#E0F2FE" stroke="#7DD3FC" stroke-width="2"/><text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#0369A1" stroke="none">Today's Weather Wheel 🌤️</text><g transform="translate(250, 340)"><circle id="wheel" cx="0" cy="0" r="190" stroke-width="5" fill="#FFFFFF" class="colorable"/><line x1="-190" y1="0" x2="190" y2="0"/><line x1="-95" y1="-164" x2="95" y2="164"/><line x1="-95" y1="164" x2="95" y2="-164"/><text x="0" y="-90" font-size="42" text-anchor="middle" stroke="none">☀️</text><text x="100" y="-40" font-size="42" text-anchor="middle" stroke="none">⛅</text><text x="100" y="80" font-size="42" text-anchor="middle" stroke="none">🌧️</text><text x="0" y="130" font-size="42" text-anchor="middle" stroke="none">⛈️</text><text x="-100" y="80" font-size="42" text-anchor="middle" stroke="none">❄️</text><text x="-100" y="-40" font-size="42" text-anchor="middle" stroke="none">🌈</text><circle cx="0" cy="0" r="18" fill="#1E293B"/></g></svg>`
  },
  {
    id: 'poster-days-of-week-rhyme',
    title: 'Days of the Week Nursery Train Poster',
    category: 'Posters & Cards',
    subcategory: 'Classroom Posters',
    ageRange: '5-6',
    difficulty: 'Easy',
    tags: ['days of week', 'calendar', 'train', 'poster', 'preschool'],
    skills: ['Time concepts', 'Sequential recall'],
    isPremium: false,
    season: 'General',
    downloadsCount: 3200,
    printsCount: 4800,
    favoritesCount: 1680,
    addedDate: '2026-10-14',
    description: 'Chugga chugga choo choo! A cute 7-car train with Sunday through Saturday clearly labeled for nursery walls.',
    type: 'chart',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="25" y="15" width="450" height="70" rx="14" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="2"/><text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#0F172A" stroke="none">Days of the Week Train 🚂</text><g transform="translate(40, 110)"><rect x="0" y="0" width="420" height="50" rx="8" fill="#FEE2E2"/><text x="30" y="32" font-family="'Fredoka', sans-serif" font-size="22" font-weight="bold" fill="#991B1B" stroke="none">MONDAY: Start the week strong!</text></g><g transform="translate(40, 175)"><rect x="0" y="0" width="420" height="50" rx="8" fill="#FFEDD5"/><text x="30" y="32" font-family="'Fredoka', sans-serif" font-size="22" font-weight="bold" fill="#9A3412" stroke="none">TUESDAY: Learning something new</text></g><g transform="translate(40, 240)"><rect x="0" y="0" width="420" height="50" rx="8" fill="#FEF9C3"/><text x="30" y="32" font-family="'Fredoka', sans-serif" font-size="22" font-weight="bold" fill="#854D0E" stroke="none">WEDNESDAY: Halfway there!</text></g><g transform="translate(40, 305)"><rect x="0" y="0" width="420" height="50" rx="8" fill="#ECFDF5"/><text x="30" y="32" font-family="'Fredoka', sans-serif" font-size="22" font-weight="bold" fill="#065F46" stroke="none">THURSDAY: Reading exciting books</text></g><g transform="translate(40, 370)"><rect x="0" y="0" width="420" height="50" rx="8" fill="#E0F2FE"/><text x="30" y="32" font-family="'Fredoka', sans-serif" font-size="22" font-weight="bold" fill="#0369A1" stroke="none">FRIDAY: Hooray for the weekend!</text></g><g transform="translate(40, 435)"><rect x="0" y="0" width="420" height="50" rx="8" fill="#F3E8FF"/><text x="30" y="32" font-family="'Fredoka', sans-serif" font-size="22" font-weight="bold" fill="#6B21A8" stroke="none">SATURDAY & SUNDAY: Family fun!</text></g></svg>`
  },
  {
    id: 'color-steamy-steam-train',
    title: 'Chugging Mountain Steam Train',
    category: 'Coloring Pages',
    subcategory: 'Vehicles',
    ageRange: '5-6',
    difficulty: 'Easy',
    tags: ['train', 'transportation', 'locomotive', 'tracks'],
    skills: ['Coloring precision', 'Storytelling'],
    isPremium: false,
    season: 'General',
    downloadsCount: 2300,
    printsCount: 3500,
    favoritesCount: 1120,
    addedDate: '2026-10-17',
    description: 'A classic steam locomotive puffing fluffy smoke clouds through pine tree mountains.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect id="train-cabin" x="300" y="240" width="110" height="150" fill="#FFFFFF" class="colorable"/><rect id="train-boiler" x="120" y="280" width="180" height="110" fill="#FFFFFF" class="colorable"/><rect id="smokestack" x="150" y="200" width="40" height="80" fill="#FFFFFF" class="colorable"/><circle id="wheel1" cx="170" cy="420" r="32" fill="#FFFFFF" class="colorable"/><circle id="wheel2" cx="250" cy="420" r="32" fill="#FFFFFF" class="colorable"/><circle id="wheel3" cx="350" cy="420" r="45" fill="#FFFFFF" class="colorable"/><line x1="50" y1="465" x2="450" y2="465" stroke-width="6"/></svg>`
  },
  {
    id: 'color-cute-koala-eucalyptus',
    title: 'Sleepy Koala in Eucalyptus Tree',
    category: 'Coloring Pages',
    subcategory: 'Animals',
    ageRange: '3-4',
    difficulty: 'Easy',
    tags: ['koala', 'animals', 'australia', 'cute', 'leaves'],
    skills: ['Color matching', 'Nature appreciation'],
    isPremium: true,
    season: 'General',
    downloadsCount: 2100,
    printsCount: 3100,
    favoritesCount: 960,
    addedDate: '2026-10-18',
    description: 'A fuzzy baby koala hugging a tree branch surrounded by aromatic eucalyptus leaves.',
    type: 'coloring',
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"><path id="trunk" d="M140,0 L180,650 L240,650 L200,0 Z" fill="#FFFFFF" class="colorable"/><circle id="koala-head" cx="290" cy="270" r="65" fill="#FFFFFF" class="colorable"/><circle id="ear-left" cx="235" cy="225" r="28" fill="#FFFFFF" class="colorable"/><circle id="ear-right" cx="345" cy="225" r="28" fill="#FFFFFF" class="colorable"/><ellipse id="nose" cx="290" cy="280" rx="18" ry="26" fill="#1E293B"/><circle cx="270" cy="255" r="6" fill="#1E293B"/><circle cx="310" cy="255" r="6" fill="#1E293B"/></svg>`
  },
  {
    id: 'activity-maze-dinosaur-nest',
    title: 'T-Rex Baby Rescue Maze',
    category: 'Activity Sheets',
    subcategory: 'Mazes',
    ageRange: '5-6',
    difficulty: 'Medium',
    tags: ['maze', 'dinosaurs', 't-rex', 'eggs', 'adventure'],
    skills: ['Path planning', 'Focus'],
    isPremium: true,
    season: 'General',
    bundleId: 'bundle-dino-25',
    bundleTitle: 'Dinosaur Adventure Mega Pack (25 Pages)',
    etsyUrl: 'https://etsy.com/shop/PrintPlayKids?section_id=dinosaurs',
    downloadsCount: 3200,
    printsCount: 4600,
    favoritesCount: 1510,
    addedDate: '2026-10-19',
    description: 'Help Mama Dinosaur find the safest path through the prehistoric canyon to reach her hatching nest!',
    type: 'activity',
    answerKeySvg: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="650" fill="#FEF3C7"/><text x="250" y="80" font-size="22" font-weight="bold" text-anchor="middle" fill="#78350F">Dino Maze Solution</text><path d="M70,160 L70,300 L210,300 L210,180 L350,180 L350,440" stroke="#D97706" stroke-width="8" fill="none"/></svg>`,
    svgContent: `<svg viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="25" y="15" width="450" height="70" rx="14" fill="#FEF3C7" stroke="#FDE68A" stroke-width="2"/><text x="45" y="52" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" fill="#78350F" stroke="none">Mama Dino Nest Maze 🦕</text><g transform="translate(50, 110)" stroke="#B45309" stroke-width="4"><path d="M0,0 L400,0 L400,420 L0,420 Z"/><path d="M0,80 L160,80 L160,200"/><path d="M80,140 L80,320 L240,320"/><path d="M240,0 L240,140 L340,140"/><path d="M160,240 L340,240 L340,360"/></g></svg>`
  }
];

