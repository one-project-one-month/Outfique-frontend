/**
 * Accessories Data
 * Contains definitions for different fashion accessories
 * Used in onboarding flow for accessory preferences
 */

export type Accessory = {
  id: string;
  name: string;
  description: string;
  imageSource: any; // For require() images
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
    imageSource: require("@/assets/hat_blue.png"),
  },
  {
    id: "eyewear",
    name: "Eye wears",
    description: "Sunglasses, eyeglasses",
    imageSource: require("@/assets/eyewear_blue.png"),
  },
  {
    id: "jewelry",
    name: "Jewelry",
    description: "Studs, hoops, ear cuffs",
    imageSource: require("@/assets/earring_blue.png"),
  },
  {
    id: "necklace",
    name: "Necklaces",
    description: "Pendants, chains, chokers",
    imageSource: require("@/assets/necklace_blue.png"), 
  },
  {
    id: "handwear",
    name: "Handwears",
    description: "Gloves, mittens, arm covers",
    imageSource: require("@/assets/handwear_blue.png"),
  },
  {
    id: "bracelet",
    name: "Bracelets/ Rings",
    description: "Bangles, cuffs, watches",
    imageSource: require("@/assets/ring_blue.png"), 
  },
  {
    id: "bag",
    name: "Bags",
    description: "Handbags, backpacks, clutches",
    imageSource: require("@/assets/bag_blue.png"),
  },
  {
    id: "belt",
    name: "Belts",
    description: "Leather belts, fabric belts",
    imageSource: require("@/assets/belt_blue.png"),
  },
];

/**
 * Helper function to get all accessories
 */
export const getAllAccessories = (): Accessory[] => {
  return ACCESSORIES;
};
