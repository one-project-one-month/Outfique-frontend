/**
 * Accessories Data
 * Contains definitions for different fashion accessories
 * Used in onboarding flow for accessory preferences
 */

export type Accessory = {
  id: string;
  name: string;
  description: string;
  icon: string; // Emoji or icon identifier
};

/**
 * Common Accessories
 * These are gender-neutral accessories
 */
export const ACCESSORIES: Accessory[] = [
  {
    id: "headwear",
    name: "Head wears",
    description: "Hats, caps, beanies, crowns",
    icon: "🧢",
  },
  {
    id: "eyewear",
    name: "Eye wears",
    description: "Sunglasses, eyeglasses",
    icon: "🕶️",
  },
  {
    id: "jewelry",
    name: "Jewelry",
    description: "Necklaces, rings, bracelets",
    icon: "💍",
  },
  {
    id: "watches",
    name: "Watches",
    description: "Wristwatches, smartwatches",
    icon: "⌚",
  },
  {
    id: "bags",
    name: "Bags",
    description: "Handbags, backpacks, clutches",
    icon: "👜",
  },
  {
    id: "scarves",
    name: "Scarves",
    description: "Scarves, shawls, wraps",
    icon: "🧣",
  },
  {
    id: "belts",
    name: "Belts",
    description: "Leather belts, fabric belts",
    icon: "👔",
  },
  {
    id: "footwear",
    name: "Footwear",
    description: "Shoes, boots, sneakers",
    icon: "👟",
  },
];

/**
 * Helper function to get all accessories
 */
export const getAllAccessories = (): Accessory[] => {
  return ACCESSORIES;
};
