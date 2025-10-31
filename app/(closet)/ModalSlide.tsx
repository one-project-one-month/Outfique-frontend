import { BlurView } from 'expo-blur';
import React, { useState } from "react";
import { Platform, StyleSheet, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Modal from "react-native-modal";
import AddType from './factor/AddType';

interface DataType {
    categories: string[];
    styles: string[];
    weather: string[];
    colors: string[];
    sizes: string[];
    brand: string[];
    price: number;
}

interface ModalSlideProps {
    modalVisible: boolean;
    titleName: string;
    setModalVisible: (visible: boolean) => void;
    onAddNewItem: (title: keyof DataType, newItem: string[] | number) => void;
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
    const [selectedFashion, setSelectedFashion] = useState<string[]>(DATA.styles);
    const [selectedSizes, setSelectedSizes] = useState<string[]>(DATA.sizes);


    return (
        <Modal
            isVisible={modalVisible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            statusBarTranslucent
            style={styles.modal}
            avoidKeyboard={true}
            onBackdropPress={() => setModalVisible(false)}
            customBackdrop={
                <TouchableOpacity
                    style={styles.backdropContainer}
                    activeOpacity={1}
                    onPress={() => setModalVisible(false)}
                >
                    <View style={[styles.backdrop, { height: height * 0.5 }]} />
                </TouchableOpacity>
            }
        >
            <KeyboardAwareScrollView
                enableOnAndroid
                extraScrollHeight={Platform.OS === 'ios' ? height * 0.2 : height * 0.25}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={styles.scrollViewContent}
            >
                <View>
                    <BlurView intensity={80} tint="light" style={styles.blurView}>
                        <AddType
                            DATA={DATA}
                            onAddNewItem={onAddNewItem}
                            titleName={titleName}
                            setModalVisible={setModalVisible}
                            setSelectedCategories={setSelectedCategories}
                            selectedCategories={selectedCategories}
                            setSelectedColors={setSelectedColors}
                            selectedColors={selectedColors}
                            selectedFashion={selectedFashion}
                            setSelectedFashion={setSelectedFashion}
                            selectedSizes={selectedSizes}
                            setSelectedSizes={setSelectedSizes}
                        />
                    </BlurView>
                </View>
            </KeyboardAwareScrollView>
        </Modal>
    );
};

export default ModalSlide;


const styles = StyleSheet.create({
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    backdropContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    backdrop: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        opacity: 0.9,
        borderRadius: 10,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    blurView: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
    },
});
