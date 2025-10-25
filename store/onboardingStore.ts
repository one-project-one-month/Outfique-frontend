import { create } from "zustand";

type Gender = "male" | "female" | null;

type DateOfBirth = {
  day: string;
  month: string;
  year: string;
} | null;

type Height = {
  unit: "cm" | "ft in";
  cm: string;
  feet: string;
  inches: string;
} | null;

type Weight = {
  unit: "lb" | "kg";
  lb: string;
  kg: string;
} | null;

interface OnboardingState {
  // ========== DATA FIELDS ==========
  username: string;
  gender: Gender;
  dob: DateOfBirth;
  height: Height;
  weight: Weight;
  bodyType: string | null;
  accessories: string[];
  favoriteColors: string[];
  fashionStyles: string[];

  // ========== SETTER FUNCTIONS ==========
  setUsername: (username: string) => void;

  setGender: (gender: Gender) => void;

  setDob: (dob: DateOfBirth) => void;

  setHeight: (height: Height) => void;

  setWeight: (weight: Weight) => void;

  setBodyType: (bodyType: string | null) => void;

  setAccessories: (accessories: string[]) => void;

  setFavoriteColors: (colors: string[]) => void;

  setFashionStyles: (styles: string[]) => void;

  reset: () => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  // ========== INITIAL STATE ==========
  username: "",
  gender: null,
  dob: null,
  height: null,
  weight: null,
  bodyType: null,
  accessories: [],
  favoriteColors: [],
  fashionStyles: [],

  // ========== SETTERS ==========
  setUsername: (username) => set({ username }),

  setGender: (gender) => set({ gender }),

  setDob: (dob) => set({ dob }),

  setHeight: (height) => set({ height }),

  setWeight: (weight) => set({ weight }),

  setBodyType: (bodyType) => set({ bodyType }),

  setAccessories: (accessories) => set({ accessories }),

  setFavoriteColors: (colors) => set({ favoriteColors: colors }),

  setFashionStyles: (styles) => set({ fashionStyles: styles }),

  reset: () =>
    set({
      username: "",
      gender: null,
      dob: null,
      height: null,
      weight: null,
      bodyType: null,
      accessories: [],
      favoriteColors: [],
      fashionStyles: [],
    }),
}));

