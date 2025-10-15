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
  // Removed `CategoryName` type here for simplicity in the original file, but it's optional
  toggleCategory: (category: CategoryName) => void; 
  resetCategories: () => void;
}

export const useFilterCategories = create<FilterCategoryState>((set) => ({
  categories: CATEGORIES,
  selectedCategories: ["All"], 

  toggleCategory: (category) => // Parameter 'category' is inferred from FilterCategoryState
    set((state) => { // Parameter 'state' is inferred from FilterCategoryState
      const current = state.selectedCategories;

      if (category === "All") {
        return {
          selectedCategories: current.includes("All") ? [] : ["All"],
        };
      }

      // 1. Remove 'All' from selection if a specific category is toggled
      const others = current.filter((c) => c !== "All");

      if (others.includes(category)) {
        // 2. Deselect the category
        const newSelection = others.filter((c) => c !== category);

        return {
          // 3. If everything is deselected, default back to 'All'
          selectedCategories:
            newSelection.length === 0 ? ["All"] : newSelection,
        };
      } else {
        // 4. Select the category
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
