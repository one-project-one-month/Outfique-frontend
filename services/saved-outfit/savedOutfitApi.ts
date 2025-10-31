import { SavedOutfitFilters } from "@/features/saved-outfit/queryOption/savedOutfitQueries";

export const fetchSavedOutfits = async (filters: SavedOutfitFilters) => {
  const response = await fetch("/api/saved-outfits", {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch saved outfits");
  }
  return response.json();
};
