

export type BodyType = {
  id: string;
  name: string;
  description: string;
  icon: string; 
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
    icon: "⌛",
  },
  {
    id: "pear",
    name: "Pear",
    description: "Hips are wider than bust, waist is well-defined.",
    icon: "🍐",
  },
  {
    id: "apple",
    name: "Apple",
    description: "Bust is larger than hips, waist is less defined.",
    icon: "🍎",
  },
  {
    id: "rectangle",
    name: "Rectangle",
    description: "Bust, waist, and hips are about the same width.",
    icon: "▭",
  },
  {
    id: "inverted-triangle",
    name: "Inverted Triangle",
    description: "Shoulders and bust are wider than hips.",
    icon: "🔻",
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
    icon: "▭",
  },
  {
    id: "triangle",
    name: "Triangle",
    description: "Hips are wider than shoulders, narrow upper body.",
    icon: "🔺",
  },
  {
    id: "inverted-triangle",
    name: "Inverted Triangle",
    description: "Broad shoulders, narrow waist and hips. Athletic build.",
    icon: "🔻",
  },
  {
    id: "oval",
    name: "Oval",
    description: "Rounded midsection, weight distributed around torso.",
    icon: "⭕",
  },
  {
    id: "trapezoid",
    name: "Trapezoid",
    description: "Broad shoulders, defined waist, muscular build.",
    icon: "◈",
  },
];


export const getBodyTypesByGender = (
  gender: "male" | "female" | null
): BodyType[] => {
  if (gender === "female") return FEMALE_BODY_TYPES;
  if (gender === "male") return MALE_BODY_TYPES;
  return []; 
};
