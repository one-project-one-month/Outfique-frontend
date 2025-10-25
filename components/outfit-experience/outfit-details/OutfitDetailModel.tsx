import GlassButton from "@/components/GlassButton";
import { X } from "phosphor-react-native";
import React from "react";
import { Alert, Modal, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const OutfitDetailModel = ({
  visible,
  onClose,
  children,
}: {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            onClose();
          }}
        >
          <View style={styles.centeredView}>
            {/* <BlurView
              intensity={50}
              tint="light"
              style={[styles.blurContainer, styles.modalView]}
            > */}
            <View style={styles.modalView}>
              <View style={{ alignSelf: "flex-end" }}>
                <GlassButton size="icon" onPress={() => onClose()}>
                  <X size={24} color={"black"} />
                </GlassButton>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 40,
                  flexDirection: "column",
                  gap: 12,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {children}
              </View>
            </View>
            {/* </BlurView> */}
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // This creates the dark, semi-transparent backdrop
  },
  blurContainer: {
    overflow: "hidden",
    borderRadius: 20,
  },
  modalView: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    margin: 20,
    width: "90%",
    borderRadius: 20,
    padding: 10,
    paddingBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default OutfitDetailModel;
