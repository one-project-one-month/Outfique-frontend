export type BodyType = {
  id: string;
  name: string;
  description: string;
  imageSource: any; // For require() images
};

/**
 * Female Body Types
 */
export const FEMALE_BODY_TYPES: BodyType[] = [
  {
    id: "hourglass",
    name: "Hourglass",
    description:
      "Bust and hips are about the same width, waist clearly smaller.",
    imageSource: require("@/assets/hourglass-bodytype.png"),
  },
  {
    id: "pear",
    name: "Triangle (Pear)",
    description: "Hips are wider than shoulders/bust.",
    imageSource: require("@/assets/female-tri-bodytype.png"),
  },
  {
    id: "apple",
    name: "Round/Oval (Apple)",
    description: "Fuller midsection, less defined waist.",
    imageSource: require("@/assets/female-oval-bodytype.png"),
  },
  {
    id: "rectangle",
    name: "Rectangle (Athletic/Banana)",
    description: "Bust, waist, and hips nearly same size,little waist definition.",
    imageSource: require("@/assets/female-rectangle-bodytype.png"),
  },
  {
    id: "inverted-triangle",
    name: "Inverted Triangle",
    description: "Shoulders/bust broader than hips.",
    imageSource: require("@/assets/female-inverted-tri.png"),
  },
];

/**
 * Male Body Types
 */
export const MALE_BODY_TYPES: BodyType[] = [
  {
    id: "rectangle",
    name: "Rectangle",
    description: "Shoulders, waist, and hips are similar in width.",
    imageSource: require("@/assets/inverted-tri-bodytype.png"),
  },
  {
    id: "triangle",
    name: "Triangle (Pear)",
    description: "Narrower shoulders/chest, wider hips.",
    imageSource: require("@/assets/triangle-bodytype.png"),
  },
  {
    id: "oval",
    name: "Oval",
    description: "Fuller midsection, rounder stomach, slim legs.",
    imageSource: require("@/assets/apple-bodytype.png"),
  },
  {
    id: "inverted-triangle",
    name: "Inverted Triangle",
    description: "Broad shoulders, narrow waist/hips. (athletic 'V' shape).",
    imageSource: require("@/assets/inverted-tri-bodytype.png"),
  },

  {
    id: "trapezoid",
    name: "Trapezoid",
    description: "Broad shoulders, narrower waist (ideal for tailoring, common in athletes).",
    imageSource: require("@/assets/trapezoid-bodytype.png"),
  },
];

export const getBodyTypesByGender = (
  gender: "male" | "female" | null
): BodyType[] => {
  if (gender === "female") return FEMALE_BODY_TYPES;
  if (gender === "male") return MALE_BODY_TYPES;
  return [];
};
