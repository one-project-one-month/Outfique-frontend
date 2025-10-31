export const fetchOutfitRecommendations = async () => {
  const response = await fetch("/api/outfit-recommendations", {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch outfit recommendations");
  }
  return response.json();
};
