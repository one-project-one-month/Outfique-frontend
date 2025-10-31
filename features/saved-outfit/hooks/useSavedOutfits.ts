// src/features/users/hooks/useUsers.ts
import { useQuery } from "@tanstack/react-query";
import {
  savedOutfitDetailQueryOptions,
  SavedOutfitFilters,
  savedOutfitsQueryOptions,
} from "../queryOption/savedOutfitQueries";

// Hook that accepts filters
export const useSavedOutfits = (filters?: SavedOutfitFilters) => {
  return useQuery(savedOutfitsQueryOptions(filters));
};

export const useOutfitRecommendationDetail = (outfitId: string) => {
  return useQuery(savedOutfitDetailQueryOptions(outfitId));
};
