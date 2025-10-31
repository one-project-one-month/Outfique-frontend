export type FashionStyle = {
  id: string;
  name: string;
  description: string;
  gender: "male" | "female" | "both";
};

export const FEMALE_FASHION_STYLES: FashionStyle[] = [
  {
    id: "classic-f",
    name: "Classic",
    description: "Polo shirts, chinos, loafers, neat tailoring",
    gender: "female",
  },
  {
    id: "casual-f",
    name: "Casual",
    description: "Jeans, T-shirts, sneakers, hoodies",
    gender: "female",
  },
  {
    id: "trendy-fashion-forward-f",
    name: "Trendy / Fashion-forward",
    description: "Statement pieces, bold colors, current styles",
    gender: "female",
  },
  {
    id: "chic-minimalist-f",
    name: "Chic / Minimalist",
    description: "Neutral colors, clean lines, sleek fits",
    gender: "female",
  },
  {
    id: "streetwear-urban-f",
    name: "Streetwear / Urban",
    description: "Oversized hoodies, graphic tees, sneakers, caps",
    gender: "female",
  },
  {
    id: "sporty-athleisure-f",
    name: "Sporty / Athleisure",
    description: "Joggers, trainers, sporty jackets",
    gender: "female",
  },
  {
    id: "edgy-rocker-f",
    name: "Edgy / Rocker",
    description: "Leather jackets, ripped jeans, boots",
    gender: "female",
  },
  {
    id: "bohemian-boho-indie-f",
    name: "Bohemian (Boho / Indie)",
    description: "Flowy fabrics, earthy tones, layered looks",
    gender: "female",
  },
];

export const MALE_FASHION_STYLES: FashionStyle[] = [
  {
    id: "classic-preppy-m",
    name: "Classic / Preppy",
    description: "Polo shirts, chinos, loafers, neat tailoring",
    gender: "male",
  },
  {
    id: "casual-m",
    name: "Casual",
    description: "Jeans, T-shirts, sneakers, hoodies",
    gender: "male",
  },
  {
    id: "trendy-fashion-forward-m",
    name: "Trendy / Fashion-forward",
    description: "Statement pieces, bold colors, current styles",
    gender: "male",
  },
  {
    id: "chic-minimalist-m",
    name: "Chic / Minimalist",
    description: "Neutral colors, clean lines, sleek fits",
    gender: "male",
  },
  {
    id: "streetwear-urban-m",
    name: "Streetwear / Urban",
    description: "Oversized hoodies, graphic tees, sneakers, caps",
    gender: "male",
  },
  {
    id: "sporty-athleisure-m",
    name: "Sporty / Athleisure",
    description: "Joggers, trainers, sporty jackets",
    gender: "male",
  },
  {
    id: "edgy-rocker-m",
    name: "Edgy / Rocker",
    description: "Leather jackets, ripped jeans, boots",
    gender: "male",
  },
  {
    id: "bohemian-boho-indie-m",
    name: "Bohemian (Boho / Indie)",
    description: "Flowy fabrics, earthy tones, layered looks",
    gender: "male",
  },
];

/**
 * Get fashion styles based on gender
 * @param gender - "male" or "female"
 * @returns Array of fashion styles for the specified gender
 */
export const getFashionStylesByGender = (
  gender: "male" | "female" | null
): FashionStyle[] => {
  if (gender === "female") {
    return FEMALE_FASHION_STYLES;
  } else if (gender === "male") {
    return MALE_FASHION_STYLES;
  }
  // Default to female styles if gender is not set
  return FEMALE_FASHION_STYLES;
};

/**
 * Get all fashion styles (both male and female)
 * @returns Array of all fashion styles
 */
export const getAllFashionStyles = (): FashionStyle[] => {
  return [...FEMALE_FASHION_STYLES, ...MALE_FASHION_STYLES];
};
