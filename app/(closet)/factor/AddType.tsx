import GlassButton from "@/components/GlassButton";
import { colors } from "@/constants/theme";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Lists from "./Lists";


const categories: string[] = [
    'Tops',
    'Bottoms',
    'Outerwear',
    'Dresses & Jumpsuits',
    'Suits & Formalwear',
    'Footwear',
    'Accessories'
];

const colorKinds: string[] = [
    'Black',
    'White',
    'Gray',
    'Green',
    'Yellow',
    'Pink',
    'Purple',
    'Brown',
    'Blue',
    'Orange',
    'Red'
];


interface DataType {
    categories: string[];
    styles: string[];
    weather: string[];
    colors: string[];
    sizes: string[];
    brand: string[];
    price: string[];
}

interface AddTypeProps {
    selectedCategories: string[];
    setSelectedCategories: (categories: string[]) => void;
    selectedColors: string[];
    setSelectedColors: (colors: string[]) => void;
    setModalVisible: (visible: boolean) => void;
    titleName: string,
    onAddNewItem: (title: keyof DataType, newItem: string[]) => void;
    DATA: DataType;
}

const AddType: React.FC<AddTypeProps> = ({
    selectedCategories,
    setSelectedCategories,
    selectedColors,
    setSelectedColors,
    setModalVisible,
    titleName,
    onAddNewItem,
    DATA
}) => {
    const toggleCategory = (category: string) => {
        if (selectedCategories.includes(category)) {
            // Remove if already selected
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            // Add if not selected
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const toggleColor = (color: string) => {
        setSelectedColors(
            selectedColors.includes(color)
                ? selectedColors.filter(c => c !== color)
                : [...selectedColors, color]
        );
    };

    const chooseType = () => {
        if (titleName === "Categories") {
            onAddNewItem("categories", selectedCategories);
        }
        if (titleName === "Colors") {
            onAddNewItem("colors", selectedColors);
        }
        setModalVisible(false);
    };

    const handleCancel = () => {
        setSelectedCategories(DATA.categories);
        setSelectedColors(DATA.colors);
        setModalVisible(false);
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ padding: 10 }}
        >
            {titleName === "Categories" && (
                <Lists
                    titleName={titleName}
                    title="Select Categories"
                    items={categories}
                    selectedItems={selectedCategories}
                    onToggleItem={toggleCategory}
                />
            )}

            {titleName === "Colors" && (
                <Lists
                    titleName={titleName}
                    title="Select Colors"
                    items={colorKinds}
                    selectedItems={selectedColors}
                    onToggleItem={toggleColor}
                />
            )}

            <View style={styles.buttonRow}>
                {/* Cancel Button */}
                <View
                    style={[styles.halfButtonContainer]}
                >
                    <GlassButton
                        size="small"
                        glassProps={{ glassEffectStyle: 'clear' }}
                        onPress={() => handleCancel()}
                        buttonStyle={styles.halfButton}
                    >
                        <Text style={styles.halfButtonText}>Cancel</Text>
                    </GlassButton>
                </View>

                {/* Done Button */}
                <TouchableOpacity
                    style={[styles.halfButtonContainer]}
                    activeOpacity={0.8}
                    onPress={() => chooseType()}
                >
                    <View style={[styles.halfButton, { backgroundColor: '#FAFAFA' }]}>
                        <Text style={[styles.halfButtonText, { color: colors.dark[1] }]}>Done</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView >

    );
};

export default AddType;

const styles = StyleSheet.create({
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
        marginTop: 15,
        marginBottom: 20
    },
    halfButtonContainer: {
        flex: 1,
    },
    halfButton: {
        height: 44,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    halfButtonText: {
        fontSize: 16,
        color: colors.white,
        textAlign: 'center',
    },
});

