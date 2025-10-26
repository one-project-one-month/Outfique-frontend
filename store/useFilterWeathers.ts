import { create } from 'zustand';

export type WeatherName =
  | 'All'
  | 'Hot & Sunny'
  | 'Humid & Rainy'
  | 'Cool & Dry'
  | 'Windy';

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
    
    if (condition === 'All') {
      return { selectedConditions: current.includes('All') ? [] : ['All'] };
    }

    let newSelection: WeatherName[] = current.filter(c => c !== 'All');

    if (newSelection.includes(condition)) {
      newSelection = newSelection.filter(c => c !== condition);
    } else {
      newSelection = [...newSelection, condition];
    }
    
    if (newSelection.length === 0) {
      newSelection = ['All'];
    }

    return { selectedConditions: newSelection };
  }),

  resetConditions: () => set({
    selectedConditions: ['All'],
  }),
}));
