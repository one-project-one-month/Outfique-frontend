import { create } from 'zustand';

export type CategoryName =
  | "All"
  | "Tops"
  | "Bottoms"
  | "Outerwear"
  | "Dresses & Jumpsuits"
  | "Suits & Formalwear"
  | "Footwear"
  | "Accessories";

const CATEGORIES: CategoryName[] = [
  "All",
  "Tops",
  "Bottoms",
  "Outerwear",
  "Dresses & Jumpsuits",
  "Suits & Formalwear",
  "Footwear",
  "Accessories",
];

interface FilterCategoryState {
  categories: CategoryName[];
  selectedCategories: CategoryName[];
  toggleCategory: (category: CategoryName) => void; 
  resetCategories: () => void;
}

export const useFilterCategories = create<FilterCategoryState>((set) => ({
  categories: CATEGORIES,
  selectedCategories: ["All"], 

  toggleCategory: (category) => 
    set((state) => { 
      const current = state.selectedCategories;

      if (category === "All") {
        return {
          selectedCategories: current.includes("All") ? [] : ["All"],
        };
      }

      const others = current.filter((c) => c !== "All");

      if (others.includes(category)) {
        const newSelection = others.filter((c) => c !== category);

        return {
          selectedCategories:
            newSelection.length === 0 ? ["All"] : newSelection,
        };
      } else {
        return {
          selectedCategories: [...others, category],
        };
      }
    }),

  resetCategories: () =>
    set({
      selectedCategories: ["All"],
    }),
}));
