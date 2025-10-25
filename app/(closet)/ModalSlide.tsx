import { BlurView } from 'expo-blur';
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, useWindowDimensions, View } from "react-native";
import Modal from "react-native-modal";
import AddType from './factor/AddType';

interface DataType {
    categories: string[];
    styles: string[];
    weather: string[];
    colors: string[];
    sizes: string[];
    brand: string[];
    price: string[];
}

interface ModalSlideProps {
    modalVisible: boolean;
    titleName: string;
    setModalVisible: (visible: boolean) => void;
    onAddNewItem: (title: keyof DataType, newItem: string[]) => void;
    DATA: DataType;
}

const ModalSlide: React.FC<ModalSlideProps> = ({
    titleName,
    modalVisible,
    onAddNewItem,
    setModalVisible,
    DATA
}) => {

    const { height } = useWindowDimensions();
    const [selectedCategories, setSelectedCategories] = useState<string[]>(DATA.categories);
    const [selectedColors, setSelectedColors] = useState<string[]>(DATA.colors);

    return (
        <Modal
            isVisible={modalVisible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            statusBarTranslucent
            style={styles.modal}
            customBackdrop={
                <TouchableOpacity
                    style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
                    activeOpacity={1}
                    onPress={() => setModalVisible(false)}
                >
                    {/* Black backdrop behind modal content only */}
                    <View
                        style={{
                            width: '100%',
                            height: height * 0.5,
                            backgroundColor: 'rgb(0,0,0,0.8)',
                            opacity: 0.9,
                            borderRadius: 10,
                        }}
                    />
                </TouchableOpacity>
            }
        >
            {/* Modal content over the black rectangle */}
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: height * 0.42 }}>
                <BlurView
                    intensity={80}
                    tint="light"
                    style={{ flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20, overflow: 'hidden' }}
                >
                    <AddType
                        DATA={DATA}
                        onAddNewItem={onAddNewItem}
                        titleName={titleName}
                        setModalVisible={setModalVisible}
                        setSelectedCategories={setSelectedCategories}
                        selectedCategories={selectedCategories}
                        setSelectedColors={setSelectedColors}
                        selectedColors={selectedColors} />
                </BlurView>
            </View>
        </Modal>

    );
};

export default ModalSlide;

const styles = StyleSheet.create({
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#fff',
        textAlign: 'center',
        padding: 15
    },
});
