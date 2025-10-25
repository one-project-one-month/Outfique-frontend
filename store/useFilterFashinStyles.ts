import { create } from 'zustand';

//Fashion Styles For Female

export type StyleNameForFemale =
  | 'All'
  | 'Classic'
  | 'Casual'
  | 'Trendy / Fashion-forward'
  | 'Sexy'
  | 'Bohemian (Boho)'
  | 'Romantic'
  | 'Streetwear'
  | 'Old Money'
  | 'Chic'
  | 'Sporty / Athleisure'
  | 'Edgy / Rocker'
  | 'Business / Formal';

const STYLESFORFEMALE: StyleNameForFemale[] = [
  'All',
  'Classic',
  'Casual',
  'Trendy / Fashion-forward',
  'Sexy',
  'Bohemian (Boho)',
  'Romantic',
  'Streetwear',
  'Old Money',
  'Chic',
  'Sporty / Athleisure',
  'Edgy / Rocker',
  'Business / Formal',
];

interface FilterStyleStateForFemale {
  styles: StyleNameForFemale[];
  selectedStyles: StyleNameForFemale[];
  toggleStyle: (style: StyleNameForFemale) => void;
  resetStyles: () => void;
}

export const useFilterFashinStylesForFemale = create<FilterStyleStateForFemale>((set) => ({
  styles: STYLESFORFEMALE,
  selectedStyles: ['All'], 

  toggleStyle: (style) => set((state) => {
    const current = state.selectedStyles;
    
    if (style === 'All') {
      return { selectedStyles: current.includes('All') ? [] : ['All'] };
    }

    let newSelection: StyleNameForFemale[] = current.filter(c => c !== 'All');

    if (newSelection.includes(style)) {
      newSelection = newSelection.filter(c => c !== style);
    } else {
      newSelection = [...newSelection, style];
    }
    
    if (newSelection.length === 0) {
      newSelection = ['All'];
    }

    return { selectedStyles: newSelection };
  }),

  resetStyles: () => set({
    selectedStyles: ['All'],
  }),
}));

//Fashion Styles For Male

export type StyleNameForMale =
  | 'All'
  | 'Classic / Preppy'
  | 'Casual'
  | 'Trendy / Fashion-forward'
  | 'Chic / Minimalist'
  | 'Streetwear / Urban'
  | 'Sporty / Athleisure'
  | 'Old Money'
  | 'Edgy / Rocker'
  | 'Bohemian (Boho / Indie)'
  | 'Smart Casual'
  | 'Avant-grade / Experimental'
  | 'Business / Formal';

const STYLESFORMALE: StyleNameForMale[] = [
  'All',
  'Classic / Preppy',
  'Casual',
  'Trendy / Fashion-forward',
  'Chic / Minimalist',
  'Streetwear / Urban',
  'Sporty / Athleisure',
  'Old Money',
  'Edgy / Rocker',
  'Bohemian (Boho / Indie)',
  'Smart Casual',
  'Avant-grade / Experimental',
  'Business / Formal',
];

interface FilterStyleStateForMale {
  styles: StyleNameForMale[];
  selectedStyles: StyleNameForMale[];
  toggleStyle: (style: StyleNameForMale) => void;
  resetStyles: () => void;
}

export const useFilterFashinStylesForMale = create<FilterStyleStateForMale>((set) => ({
  styles: STYLESFORMALE,
  selectedStyles: ['All'], 

  toggleStyle: (style) => set((state) => {
    const current = state.selectedStyles;
    
    if (style === 'All') {
      return { selectedStyles: current.includes('All') ? [] : ['All'] };
    }

    let newSelection: StyleNameForMale[] = current.filter(c => c !== 'All');

    if (newSelection.includes(style)) {
      newSelection = newSelection.filter(c => c !== style);
    } else {
      newSelection = [...newSelection, style];
    }
    
    if (newSelection.length === 0) {
      newSelection = ['All'];
    }

    return { selectedStyles: newSelection };
  }),

  resetStyles: () => set({
    selectedStyles: ['All'],
  }),
}));
