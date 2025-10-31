import GlassButton from "@/components/GlassButton";
import { colors } from "@/constants/theme";
import React from "react";
import { ScrollView, Text } from "react-native";

const categories: string[] = [
    "All",
    "Tops",
    "Bottoms",
    "Outerwear",
    "Dress & JumpSuit",
    "Suits & FormalWear",
    "Footwear",
    "Accessories"
];

interface CategoryProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

const Category: React.FC<CategoryProps> = ({ setActiveCategory, activeCategory }) => {

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
                <GlassButton
                    key={category}
                    size="small"
                    glassProps={{ glassEffectStyle: 'clear' }}
                    buttonStyle={{
                        height: 38,
                        borderRadius: 10,
                        marginLeft: 10,
                        ...(activeCategory === category ? { backgroundColor: colors.uranianBlue } : {}),
                    }}
                    onPress={() => setActiveCategory(category || '')}
                >
                    <Text
                        style={{
                            color: activeCategory === category ? colors.midnightNavy : colors.white,
                            fontWeight: activeCategory === category ? '600' : '400',
                        }}
                    >
                        {category}
                    </Text>
                </GlassButton>
            ))}
        </ScrollView>
    );
};

export default Category;

