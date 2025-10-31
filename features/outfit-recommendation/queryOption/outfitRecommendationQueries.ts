// src/features/users/userQueries.ts
import { fetchOutfitRecommendations } from "@/services/outfit-recommendations/outfit-recommendationsApi";
import { queryOptions } from "@tanstack/react-query";

// Define a key factory for type safety and easy invalidation
export const outfitRecommendKeys = {
  all: ["outfit-recommendations"],
  lists: () => [...outfitRecommendKeys.all, "list"],
  detail: (userId: string) => [...outfitRecommendKeys.all, "detail", userId],
};

// 2. Export queryOptions for configuration reuse
export const outfitRecommendationsQueryOptions = queryOptions({
  queryKey: outfitRecommendKeys.lists(),
  queryFn: fetchOutfitRecommendations,
  staleTime: 1000 * 60 * 5, // 5 minutes
});

export const outfitRecommendationDetailQueryOptions = (userId: string) =>
  queryOptions({
    queryKey: outfitRecommendKeys.detail(userId),
    // queryFn: () => fetchUserById(userId),
    enabled: !!userId, // Only run if userId is truthy
  });
