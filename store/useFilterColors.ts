import { create } from "zustand";

export type ColorName =
  | "All"
  | "Black"
  | "White"
  | "Gray"
  | "Beige / Nude"
  | "Green"
  | "Yellow"
  | "Pink"
  | "Purple"
  | "Brown"
  | "Blue"
  | "Orange"
  | "Red";

const COLORS: ColorName[] = [
  "All",
  "Black",
  "White",
  "Gray",
  "Beige / Nude",
  "Green",
  "Yellow",
  "Pink",
  "Purple",
  "Brown",
  "Blue",
  "Orange",
  "Red",
];

interface FilterColorState {
  colors: ColorName[];
  selectedColors: ColorName[];
  toggleColor: (color: ColorName) => void;
  resetColors: () => void;
}

export const useFilterColors = create<FilterColorState>((set) => ({
  colors: COLORS,
  selectedColors: ["All"],

  toggleColor: (color) =>
    set((state) => {
      const currentSpecific = state.selectedColors.filter((c) => c !== "All");
      let newSelection: ColorName[];

      if (color === "All") {
        return { selectedColors: ["All"] };
      }

      if (currentSpecific.includes(color)) {
        newSelection = currentSpecific.filter((c) => c !== color);
      } else {
        newSelection = [...currentSpecific, color];
      }

      if (newSelection.length === 0) {
        return { selectedColors: ["All"] };
      }

      return { selectedColors: newSelection };
    }),

  resetColors: () =>
    set({
      selectedColors: ["All"],
    }),
}));
