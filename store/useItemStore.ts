import { create } from "zustand";
import { BrandNameForFemale } from "./useFilterBrands";
import { CategoryName } from "./useFilterCategories";
import { ColorName } from "./useFilterColors";
import { StyleNameForFemale } from "./useFilterFashinStyles";
import { WeatherName } from "./useFilterWeathers";

export interface Item {
  id: string;
  name: string;
  category: Exclude<CategoryName, "All">;
  price: number;
  color: Exclude<ColorName, "All">;
  style: Exclude<StyleNameForFemale, "All">;
  weather: Exclude<WeatherName, "All">;
  brand: Exclude<BrandNameForFemale, "All">;
  imageUrl: string | number;
}

const MOCK_ITEM_DATA: Item[] = [
  {
    id: "1",
    name: "High heel",
    category: "Footwear",
    price: 150000,
    color: "Red",
    style: "Classic",
    weather: "Cool & Dry",
    brand: "Dior",
    imageUrl: require("@/assets/image14.png"),
  },
  {
    id: "2",
    name: "Mini skirt",
    category: "Bottoms",
    price: 45000,
    color: "Blue",
    style: "Casual",
    weather: "Hot & Sunny",
    brand: "Zara",
    imageUrl: require("@/assets/image22.png"),
  },
  {
    id: "3",
    name: "Lather jacket",
    category: "Outerwear",
    price: 120000,
    color: "Black",
    style: "Streetwear",
    weather: "Windy",
    brand: "Adidas",
    imageUrl: require("@/assets/image15.png"),
  },
  {
    id: "4",
    name: "Shoulder bag",
    category: "Accessories",
    price: 80000,
    color: "White",
    style: "Sporty / Athleisure",
    weather: "Cool & Dry",
    brand: "Puma",
    imageUrl: require("@/assets/image18.png"),
  },
  {
    id: "5",
    name: "Lather Jacket",
    category: "Outerwear",
    price: 60000,
    color: "Yellow",
    style: "Chic",
    weather: "Cool & Dry",
    brand: "Uniqlo",
    imageUrl: require("@/assets/image20.png"),
  },
  {
    id: "6",
    name: "High-waist dress",
    category: "Dresses & Jumpsuits",
    price: 95000,
    color: "Pink",
    style: "Sexy",
    weather: "Humid & Rainy",
    brand: "Gucci",
    imageUrl: require("@/assets/image21.png"),
  },
  {
    id: "7",
    name: "Sneaker",
    category: "Footwear",
    price: 110000,
    color: "Brown",
    style: "Edgy / Rocker",
    weather: "Cool & Dry",
    brand: "H&M",
    imageUrl: require("@/assets/image23.png"),
  },
  {
    id: "8",
    name: "Bracelets",
    category: "Accessories",
    price: 25000,
    color: "Green",
    style: "Streetwear",
    weather: "Hot & Sunny",
    brand: "Zara",
    imageUrl: require("@/assets/image17.png"),
  },
  {
    id: "9",
    name: "Ankle boot",
    category: "Footwear",
    price: 25000,
    color: "Green",
    style: "Streetwear",
    weather: "Hot & Sunny",
    brand: "Zara",
    imageUrl: require("@/assets/image19.png"),
  },
  {
    id: "10",
    name: "Necklets",
    category: "Accessories",
    price: 25000,
    color: "Green",
    style: "Streetwear",
    weather: "Hot & Sunny",
    brand: "Zara",
    imageUrl: require("@/assets/image16.png"),
  },
  {
    id: "11",
    name: "Necklets",
    category: "Accessories",
    price: 25000,
    color: "Green",
    style: "Streetwear",
    weather: "Hot & Sunny",
    brand: "Zara",
    imageUrl: require("@/assets/image16.png"),
  },
  {
    id: "12",
    name: "Necklets",
    category: "Accessories",
    price: 25000,
    color: "Green",
    style: "Streetwear",
    weather: "Hot & Sunny",
    brand: "Zara",
    imageUrl: require("@/assets/image16.png"),
  },
  {
    id: "13",
    name: "Necklets",
    category: "Accessories",
    price: 25000,
    color: "Green",
    style: "Streetwear",
    weather: "Hot & Sunny",
    brand: "Zara",
    imageUrl: require("@/assets/image16.png"),
  },
  {
    id: "14",
    name: "Necklets",
    category: "Accessories",
    price: 25000,
    color: "Green",
    style: "Streetwear",
    weather: "Hot & Sunny",
    brand: "Zara",
    imageUrl: require("@/assets/image16.png"),
  },
  {
    id: "15",
    name: "Necklets",
    category: "Accessories",
    price: 25000,
    color: "Green",
    style: "Streetwear",
    weather: "Hot & Sunny",
    brand: "Zara",
    imageUrl: require("@/assets/image16.png"),
  },
];

interface FilterStateForFunction {
  selectedCategories: CategoryName[];
  minPrice: number;
  maxPrice: number;
  selectedColors: ColorName[];
  selectedStyles: StyleNameForFemale[];
  selectedConditions: WeatherName[];
  selectedBrands: BrandNameForFemale[];
}

interface ItemState {
  allItems: Item[];
  filterItems: (filterState: FilterStateForFunction) => Item[];
}

export const useItemStore = create<ItemState>((set, get) => ({
  allItems: MOCK_ITEM_DATA,

  filterItems: (filterState) => {
    const {
      selectedCategories,
      minPrice,
      maxPrice,
      selectedColors,
      selectedStyles,
      selectedConditions,
      selectedBrands,
    } = filterState;

    let items = get().allItems;

    // Helper to check if a filter category is set to 'All' or is empty
    const isFilterAllOrEmpty = (selectedArray: (string | number)[]) =>
      selectedArray.length === 0 || selectedArray.includes("All");

    // Category Filter
    if (!isFilterAllOrEmpty(selectedCategories)) {
      items = items.filter((item) =>
        selectedCategories.includes(item.category as CategoryName)
      );
    }

    // Price Filter (Always active based on slider position)
    items = items.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    // Color Filter
    if (!isFilterAllOrEmpty(selectedColors)) {
      items = items.filter((item) =>
        selectedColors.includes(item.color as ColorName)
      );
    }

    // Style Filter
    if (!isFilterAllOrEmpty(selectedStyles)) {
      items = items.filter((item) =>
        selectedStyles.includes(item.style as StyleNameForFemale)
      );
    }

    // Weather Filter
    if (!isFilterAllOrEmpty(selectedConditions)) {
      items = items.filter((item) =>
        selectedConditions.includes(item.weather as WeatherName)
      );
    }

    // Brand Filter
    if (!isFilterAllOrEmpty(selectedBrands)) {
      items = items.filter((item) =>
        selectedBrands.includes(item.brand as BrandNameForFemale)
      );
    }

    return items;
  },
}));
