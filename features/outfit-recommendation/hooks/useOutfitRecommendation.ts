// src/features/users/hooks/useUsers.ts
import { useQuery } from "@tanstack/react-query";
import {
  outfitRecommendationDetailQueryOptions,
  outfitRecommendationsQueryOptions,
} from "../queryOption/outfitRecommendationQueries";

export const useOutfitRecommendations = () => {
  // Use the pre-defined options
  return useQuery(outfitRecommendationsQueryOptions);
};

export const useOutfitRecommendationDetail = () => {
  return useQuery(outfitRecommendationDetailQueryOptions("1"));
};

// 3. Custom Mutation Hook
// export const useUpdateUser = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: updateUser,
//     onSuccess: (updatedUser) => {
//       // Logic for re-fetching and updating the cache
//       queryClient.invalidateQueries({ queryKey: userKeys.lists() });
//       queryClient.invalidateQueries({
//         queryKey: userKeys.detail(updatedUser.id),
//       });

//       // OPTIONAL: Manually update the detail cache for better UX
//       queryClient.setQueryData(userKeys.detail(updatedUser.id), updatedUser);
//     },
//     // Add logic for optimistic updates here
//   });
// };
