// src/store/useFilterColors.ts

import { create } from 'zustand';

// Define the colors available in the filter (13 total, including 'All')
export type ColorName = 
  'All' | 'Black' | 'White' | 'Gray' | 'Beige / Nude' | 
  'Green' | 'Yellow' | 'Pink' | 'Purple' | 'Brown' | 
  'Blue' | 'Orange' | 'Red';

// The array of 13 color names, including 'All'
const COLORS: ColorName[] = [
  'All', 'Black', 'White', 'Gray', 'Beige / Nude', 
  'Green', 'Yellow', 'Pink', 'Purple', 'Brown', 
  'Blue', 'Orange', 'Red'
];

interface FilterColorState {
  colors: ColorName[];
  selectedColors: ColorName[]; // Holds an array of selected colors
  toggleColor: (color: ColorName) => void;
  resetColors: () => void;
}

export const useFilterColors = create<FilterColorState>((set) => ({
  // --- STATE ---
  colors: COLORS, 
  // FIX 1: Default state must be ['All'] for consistency
  selectedColors: ['All'], 

  // --- ACTIONS ---
  toggleColor: (color) => set((state) => {
    // 1. Start with the current selection, filtering out 'All'
    // This ensures we only work with specific color names.
    const currentSpecific = state.selectedColors.filter(c => c !== 'All');
    let newSelection: ColorName[];

    // --- Special handling for 'All' (safety check if the UI ever renders it) ---
    if (color === 'All') {
        return { selectedColors: ['All'] };
    }
    
    // --- Handling specific color toggling ---
    if (currentSpecific.includes(color)) {
      // Deselect the color
      newSelection = currentSpecific.filter(c => c !== color);
    } else {
      // Select the color
      newSelection = [...currentSpecific, color];
    }
    
    // 2. Revert to 'All' state if the resulting selection is empty
    if (newSelection.length === 0) {
        // When no specific colors are selected, the filter should be 'All'
        return { selectedColors: ['All'] }; 
    }
    
    // 3. Otherwise, return the specific colors selected.
    return { selectedColors: newSelection };
  }),

  // FIX 2: The reset action must set the state back to ['All']
  resetColors: () => set({
    selectedColors: ['All'], 
  }),
}));