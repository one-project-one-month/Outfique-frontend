import GlassButton from "@/components/GlassButton";
import GlassInput from "@/components/GlassInput";
import { colors } from "@/constants/theme";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Lists from "./Lists";


// Predefined options
const categories = ['Tops', 'Bottoms', 'Outerwear', 'Dresses & Jumpsuits', 'Suits & Formalwear', 'Footwear', 'Accessories'];
const colorKinds = ['Black', 'White', 'Gray', 'Green', 'Yellow', 'Pink', 'Purple', 'Brown', 'Blue', 'Orange', 'Red'];
const fashionStyles = ['Casual', 'Classic', 'Sexy', 'Bohemian (Boho)', 'Romantic', 'Streetwear', 'Old Money', 'Chic', 'Sporty / Athleisure', 'Edgy / Rocker', 'Business / Formal'];
const sizes = ['small', 'medium', 'Large', 'XL', 'XXL', 'XXXL'];

// DataType interface
interface DataType {
    categories: string[];
    styles: string[];
    weather: string[];
    colors: string[];
    sizes: string[];
    brand: string[];
    price: number;
}

// Props interface
interface AddTypeProps {
    selectedCategories: string[];
    setSelectedCategories: (categories: string[]) => void;
    selectedColors: string[];
    setSelectedColors: (colors: string[]) => void;
    selectedFashion: string[];
    setSelectedFashion: (styles: string[]) => void;
    selectedSizes: string[];
    setSelectedSizes: (sizes: string[]) => void;
    setModalVisible: (visible: boolean) => void;
    titleName: string;
    onAddNewItem: (title: keyof DataType, newItem: string[] | number) => void;
    DATA: DataType;
}

const AddType: React.FC<AddTypeProps> = ({
    selectedCategories,
    setSelectedCategories,
    selectedColors,
    setSelectedColors,
    selectedFashion,
    setSelectedFashion,
    selectedSizes,
    setSelectedSizes,
    setModalVisible,
    titleName,
    onAddNewItem,
    DATA
}) => {

    console.log(titleName);
    // react-hook-form for Price
    const { control, handleSubmit, formState: { errors }, reset } = useForm<{ price: number }>({
        defaultValues: { price: DATA.price || 0 }
    });

    // Toggle functions for each type
    const toggleItem = (item: string, selected: string[], setSelected: (arr: string[]) => void) => {
        setSelected(selected.includes(item) ? selected.filter(c => c !== item) : [...selected, item]);
    };

    const chooseType = () => {
        if (titleName === "Price(MMK)") {
            handleSubmit((data) => {
                onAddNewItem("price", data.price);
                setModalVisible(false);
            })();
        } else {
            if (titleName === "Categories") onAddNewItem("categories", selectedCategories);
            if (titleName === "Colors") onAddNewItem("colors", selectedColors);
            if (titleName === "Fashion Styles") onAddNewItem("styles", selectedFashion);
            if (titleName === "Sizes") onAddNewItem("sizes", selectedSizes);
            setModalVisible(false);
        }
    };

    const handleCancel = () => {
        setSelectedCategories(DATA.categories);
        setSelectedColors(DATA.colors);
        setSelectedFashion(DATA.styles);
        setSelectedSizes(DATA.sizes);
        reset({ price: DATA.price });
        setModalVisible(false);
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 10 }}>

            {titleName === "Categories" && (
                <Lists
                    titleName={titleName}
                    title="Select Categories"
                    items={categories}
                    selectedItems={selectedCategories}
                    onToggleItem={(item) => toggleItem(item, selectedCategories, setSelectedCategories)}
                />
            )}

            {titleName === "Colors" && (
                <Lists
                    titleName={titleName}
                    title="Select Colors"
                    items={colorKinds}
                    selectedItems={selectedColors}
                    onToggleItem={(item) => toggleItem(item, selectedColors, setSelectedColors)}
                />
            )}

            {titleName === "Fashion Styles" && (
                <Lists
                    titleName={titleName}
                    title="Select Fashion Styles"
                    items={fashionStyles}
                    selectedItems={selectedFashion}
                    onToggleItem={(item) => toggleItem(item, selectedFashion, setSelectedFashion)}
                />
            )}

            {titleName === "Sizes" && (
                <Lists
                    titleName={titleName}
                    title="Select Your Size"
                    items={sizes}
                    selectedItems={selectedSizes}
                    onToggleItem={(item) => toggleItem(item, selectedSizes, setSelectedSizes)}
                />
            )}

            {titleName === "Price(MMK)" && (
                <>
                    <Text style={styles.title}>Type Price</Text>
                    <Controller
                        control={control}
                        name="price"
                        rules={{
                            required: "Price is required",
                            validate: value => value > 0 || "Price must be greater than 0",
                        }}
                        render={({ field: { onChange, value } }) => (
                            <GlassInput
                                placeholder="20000"
                                value={value ? String(value) : ""}
                                onChangeText={(text) => onChange(Number(text))}
                                keyboardType="numeric"
                                size="small"
                                glassProps={{ glassEffectStyle: "clear" }}
                                inputStyle={{ marginTop: 10 }}
                            />
                        )}
                    />
                    {errors.price && <Text style={styles.errorText}>{errors.price.message}</Text>}
                </>
            )}


            {/* Buttons */}
            <View style={styles.buttonRow}>
                <View style={styles.halfButtonContainer}>
                    <GlassButton
                        size="small"
                        glassProps={{ glassEffectStyle: 'clear' }}
                        onPress={handleCancel}
                        buttonStyle={styles.halfButton}
                    >
                        <Text style={styles.halfButtonText}>Cancel</Text>
                    </GlassButton>
                </View>

                <TouchableOpacity style={styles.halfButtonContainer} activeOpacity={0.8} onPress={chooseType}>
                    <View style={[styles.halfButton, { backgroundColor: '#FAFAFA' }]}>
                        <Text style={[styles.halfButtonText, { color: colors.dark[1] }]}>Done</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
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
        marginBottom: 35
    },
    halfButtonContainer: {
        flex: 1
    },
    halfButton: {
        height: 44,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    halfButtonText: {
        fontSize: 16,
        color: colors.white,
        textAlign: 'center'
    },
    errorText: {
        color: 'red',
        marginLeft: 10,
        marginTop: 5,
        fontSize: 12
    },
    title: {
        fontSize: 17,
        fontWeight: "bold",
        color: '#fff',
        textAlign: 'center',
        margin: 15
    },
});
