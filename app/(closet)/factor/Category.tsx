import GlassButton from "@/components/GlassButton";
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

const Category = () => {
    const [activeCategory, setActiveCategory] = React.useState<string>("All");

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}

        >
            {categories.map((category) => (
                <GlassButton
                    key={category}
                    size="small"
                    glassProps={{ glassEffectStyle: 'clear' }}
                    buttonStyle={{
                        height:38,
                        borderRadius: 10,
                        marginLeft: 10,
                        ...(activeCategory === category ? { backgroundColor: '#a0ddff' } : {}),
                    }}
                    onPress={() => setActiveCategory(category)}
                >
                    <Text
                        style={{
                            color: activeCategory === category ? '#0a122a' : '#fff',
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

