import { create } from 'zustand';

// Brands For Female
export type BrandNameForFemale =
  | 'All'
  | 'Zara'
  | 'Dior'
  | 'Adidas'
  | 'Puma'
  | 'Gucci'
  | 'Uniqlo'
  | 'H&M';

const BRANDSFORFEMALE: BrandNameForFemale[] = [
  'All',
  'Zara',
  'Dior',
  'Adidas',
  'Puma',
  'Gucci',
  'Uniqlo',
  'H&M',
];

interface FilterBrandStateForFemale {
  brands: BrandNameForFemale[];
  selectedBrands: BrandNameForFemale[];
  toggleBrand: (brand: BrandNameForFemale) => void;
  resetBrands: () => void;
}

export const useFilterBrandsForFemale = create<FilterBrandStateForFemale>((set) => ({
  brands: BRANDSFORFEMALE,
  selectedBrands: ['All'], 

  toggleBrand: (brand) => set((state) => {
    const current = state.selectedBrands;
    
    if (brand === 'All') {
      return { selectedBrands: current.includes('All') ? [] : ['All'] };
    }

    let newSelection: BrandNameForFemale[] = current.filter(b => b !== 'All');

    if (newSelection.includes(brand)) {
      newSelection = newSelection.filter(b => b !== brand);
    } else {
      newSelection = [...newSelection, brand];
    }
    
    if (newSelection.length === 0) {
      newSelection = ['All'];
    }

    return { selectedBrands: newSelection };
  }),

  resetBrands: () => set({
    selectedBrands: ['All'],
  }),
}));

// Brands For Male

export type BrandNameForMale =
  | 'All'
  | 'Zara'
  | 'Essentials'
  | 'Adidas'
  | 'Puma'
  | 'Stussy'
  | 'Uniqlo'
  | 'H&M';

const BRANDSFORMALE: BrandNameForMale[] = [
  'All',
  'Zara',
  'Essentials',
  'Adidas',
  'Puma',
  'Stussy',
  'Uniqlo',
  'H&M',
];

interface FilterBrandStateForMale {
  brands: BrandNameForMale[];
  selectedBrands: BrandNameForMale[];
  toggleBrand: (brand: BrandNameForMale) => void;
  resetBrands: () => void;
}

export const useFilterBrandsForMale = create<FilterBrandStateForMale>((set) => ({
  brands: BRANDSFORMALE,
  selectedBrands: ['All'], 

  toggleBrand: (brand) => set((state) => {
    const current = state.selectedBrands;
    
    if (brand === 'All') {
      return { selectedBrands: current.includes('All') ? [] : ['All'] };
    }

    let newSelection: BrandNameForMale[] = current.filter(b => b !== 'All');

    if (newSelection.includes(brand)) {
      newSelection = newSelection.filter(b => b !== brand);
    } else {
      newSelection = [...newSelection, brand];
    }
    
    if (newSelection.length === 0) {
      newSelection = ['All'];
    }

    return { selectedBrands: newSelection };
  }),

  resetBrands: () => set({
    selectedBrands: ['All'],
  }),
}));
