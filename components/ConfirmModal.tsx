import * as React from "react";
import { Text, Button } from "react-native-paper";
import { StyleSheet, View, Modal } from "react-native";

export default function ConfirmModal({
  primaryMessage,
  label,
  onYes,
  style,
  textColor,
}: {
  primaryMessage: string;
  label: string;
  onYes: Function;
  style: any;
  textColor: string;
}) {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{primaryMessage}</Text>
            <View style={styles.buttonsContainer}>
              <Button
                mode="outlined"
                contentStyle={styles.button}
                labelStyle={styles.buttonLabelStyle}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  onYes();
                }}
              >
                Yes
              </Button>
              <Button
                mode="outlined"
                contentStyle={styles.button}
                labelStyle={styles.buttonLabelStyle}
                onPress={() => setModalVisible(!modalVisible)}
              >
                No
              </Button>
            </View>
          </View>
        </View>
      </Modal>
      <Button
        mode="outlined"
        contentStyle={styles.button}
        textColor={textColor}
        labelStyle={styles.buttonLabelStyle}
        style={style}
        onPress={() => setModalVisible(!modalVisible)}
      >
        {label}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
  button: {
    height: 20,
    paddingHorizontal: 0,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonLabelStyle: {
    fontSize: 10,
    height: 20,
  },
});
