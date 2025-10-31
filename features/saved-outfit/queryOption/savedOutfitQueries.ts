import { fetchSavedOutfits } from "@/services/saved-outfit/savedOutfitApi";
import { queryOptions } from "@tanstack/react-query";

// Define types for your filters
export interface SavedOutfitFilters {
  search?: string;
  category?: string;
  season?: string;
  page?: number;
  limit?: number;
}
// Define a key factory for type safety and easy invalidation
export const savedOutfitKeys = {
  all: ["saved-outfits"] as const,
  lists: () => [...savedOutfitKeys.all, "list"] as const,
  list: (filters: SavedOutfitFilters) =>
    [...savedOutfitKeys.lists(), filters] as const,
  detail: (outfitId: string) =>
    [...savedOutfitKeys.all, "detail", outfitId] as const,
};

// Query options for list with filters
export const savedOutfitsQueryOptions = (filters: SavedOutfitFilters = {}) =>
  queryOptions({
    queryKey: savedOutfitKeys.list(filters),
    queryFn: () => fetchSavedOutfits(filters),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

// Query options for detail
export const savedOutfitDetailQueryOptions = (outfitId: string) =>
  queryOptions({
    queryKey: savedOutfitKeys.detail(outfitId),
    // queryFn: () => fetchOutfitById(outfitId),
    enabled: !!outfitId,
  });
