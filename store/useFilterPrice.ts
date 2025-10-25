import { create } from 'zustand';

const DEFAULT_MIN_PRICE = 10000;
const ABSOLUTE_PRICE_LIMIT = 150000; 
const DEFAULT_MAX_PRICE = 50000; 

interface FilterPriceState {
  minPrice: number;
  maxPrice: number;
  priceRangeLimit: number;
  
  setMinPrice: (price: number) => void;
  setMaxPrice: (price: number) => void; 
  setPrices: (min: number, max: number) => void; 
  resetPrices: () => void;
}

export const useFilterPrices = create<FilterPriceState>((set) => ({
  minPrice: DEFAULT_MIN_PRICE,
  maxPrice: DEFAULT_MAX_PRICE,
  priceRangeLimit: ABSOLUTE_PRICE_LIMIT, 

  setMinPrice: (price) => set({ 
      minPrice: price
  }),

  setMaxPrice: (price) => set({ 
      maxPrice: price
  }),
  
  setPrices: (min, max) => set({
      minPrice: min,
      maxPrice: max,
  }),

  resetPrices: () => set({
    minPrice: DEFAULT_MIN_PRICE,
    maxPrice: DEFAULT_MAX_PRICE,
  }),
}));