import { create } from 'zustand';

const DEFAULT_MIN_PRICE = 10000;
// We'll use the final limit as the default max price for consistency
const ABSOLUTE_PRICE_LIMIT = 150000; 
const DEFAULT_MAX_PRICE = 50000; 

interface FilterPriceState {
  minPrice: number;
  maxPrice: number;
  priceRangeLimit: number;
  
  // Combine these two into a single action for the range slider
  setMinPrice: (price: number) => void;
  setMaxPrice: (price: number) => void; 
  setPrices: (min: number, max: number) => void; // <--- NEW ACTION
  resetPrices: () => void;
}

export const useFilterPrices = create<FilterPriceState>((set) => ({
  // --- STATE ---
  minPrice: DEFAULT_MIN_PRICE,
  maxPrice: DEFAULT_MAX_PRICE,
  priceRangeLimit: ABSOLUTE_PRICE_LIMIT, // Use a realistic upper limit

  // --- ACTIONS ---
  setMinPrice: (price) => set({ 
      minPrice: price
  }),

  setMaxPrice: (price) => set({ 
      maxPrice: price
  }),
  
  // <--- NEW: Combined action to handle range slider output
  setPrices: (min, max) => set({
      minPrice: min,
      maxPrice: max,
  }),

  resetPrices: () => set({
    minPrice: DEFAULT_MIN_PRICE,
    maxPrice: DEFAULT_MAX_PRICE,
  }),
}));