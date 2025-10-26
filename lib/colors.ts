export type Color = {
  id: string;
  name: string;
  value: string;
};

export const COLORS: Color[] = [
  {
    id: "black",
    name: "Black",
    value: "#2C3E50",
  },
  {
    id: "white",
    name: "White",
    value: "#A8B8C8",
  },
  {
    id: "gray",
    name: "Gray",
    value: "#6B7C8C",
  },
  {
    id: "red",
    name: "Red",
    value: "#FF5A5F",
  },
  {
    id: "blue",
    name: "Blue",
    value: "#3B5998",
  },
  {
    id: "green",
    name: "Green",
    value: "#2E5C4F",
  },
  {
    id: "yellow",
    name: "Yellow",
    value: "#8B7E3F",
  },
  {
    id: "pink",
    name: "Pink",
    value: "#8B5A7E",
  },
  {
    id: "purple",
    name: "Purple",
    value: "#7B3FF2",
  },
  {
    id: "brown",
    name: "Brown",
    value: "#4A3428",
  },
  {
    id: "beige-nude",
    name: "Beige / Nude",
    value: "#8C7C6C",
  },
  {
    id: "orange",
    name: "Orange",
    value: "#B8754E",
  },
];

/**
 * Get all colors
 * @returns Array of all color options
 */
export const getAllColors = (): Color[] => {
  return COLORS;
};
