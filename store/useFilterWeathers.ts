import { create } from 'zustand';

export type WeatherName =
  | 'All'
  | 'Hot & Sunny'
  | 'Humid & Rainy'
  | 'Cool & Dry'
  | 'Windy';

// Note: The order here matches the appearance in the image (Windy often appears separate, but we list it here)
const WEATHER_CONDITIONS: WeatherName[] = [
  'All',
  'Hot & Sunny',
  'Humid & Rainy',
  'Cool & Dry',
  'Windy',
];

interface FilterWeatherState {
  conditions: WeatherName[];
  selectedConditions: WeatherName[];
  toggleCondition: (condition: WeatherName) => void;
  resetConditions: () => void;
}

export const useFilterWeathers = create<FilterWeatherState>((set) => ({
  conditions: WEATHER_CONDITIONS,
  selectedConditions: ['All'], // Default state

  toggleCondition: (condition) => set((state) => {
    const current = state.selectedConditions;
    
    // --- Special 'All' Logic ---
    if (condition === 'All') {
      return { selectedConditions: current.includes('All') ? [] : ['All'] };
    }

    let newSelection: WeatherName[] = current.filter(c => c !== 'All');

    if (newSelection.includes(condition)) {
      newSelection = newSelection.filter(c => c !== condition);
    } else {
      newSelection = [...newSelection, condition];
    }
    
    // If all other conditions are deselected, revert to selecting 'All'
    if (newSelection.length === 0) {
      newSelection = ['All'];
    }

    return { selectedConditions: newSelection };
  }),

  resetConditions: () => set({
    selectedConditions: ['All'],
  }),
}));
