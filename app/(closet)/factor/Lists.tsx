import GlassButton from "@/components/GlassButton";
import { colors } from "@/constants/theme";
import type React from "react";
import { StyleSheet, Text, View } from "react-native";

interface SelectableListProps {
    title: string;
    titleName: string;
    items: string[];
    selectedItems: string[];
    onToggleItem: (item: string) => void;
}

const Lists: React.FC<SelectableListProps> = ({
    title, items, selectedItems, onToggleItem, titleName
}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5 }}>
                {items.map((item) => {
                    const isSelected = selectedItems.includes(item);
                    return (
                        <GlassButton
                            key={item}
                            size="small"
                            glassProps={{ glassEffectStyle: 'clear' }}
                            buttonStyle={{
                                height: 38,
                                borderRadius: 10,
                                paddingHorizontal: 12,
                                backgroundColor: isSelected ? colors.uranianBlue : undefined
                            }}
                            onPress={() => onToggleItem(item)}
                        >
                            {titleName === "Colors" ? (
                                <View style={{ flexDirection: 'row', gap: 3 }}>
                                    <View style={{
                                        backgroundColor: item.toLowerCase(),
                                        width: 20,
                                        height: 20,
                                        borderRadius: 10
                                    }}></View>
                                    <Text>{item}</Text>
                                </View>
                            ) : (
                                <Text>{item}</Text>
                            )}
                        </GlassButton>
                    )
                })}
            </View>
        </View>
    )
}

export default Lists;
const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        fontWeight: "bold",
        color: '#fff',
        textAlign: 'center',
        margin: 15
    },
})