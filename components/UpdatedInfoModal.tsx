import * as React from "react";
import { Text, Button, TextInput } from "react-native-paper";
import { StyleSheet, View, Modal, Image } from "react-native";

export default function UpdateInfoModal({
  title,
  inputLabel,
  src,
  onYes,
  open,
  onRequestClose,
}: {
  title: string;
  inputLabel: string;
  src: any;
  onYes: Function;
  open: boolean;
  onRequestClose: Function;
}) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => onRequestClose()}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Image style={styles.icon} source={src} />
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.inputBox}>
              <Text>{inputLabel}</Text>
              <View style={styles.inputButton}>
                <TextInput mode="outlined" style={styles.inputStyles} />
                <Image
                  style={styles.sendIcon}
                  source={require("../assets/images/send.png")}
                />
              </View>
            </View>
            <View style={styles.pinBox}>
              <Text>PIN</Text>
              <View style={styles.inputButton}>
                <TextInput
                  mode="outlined"
                  style={styles.pinDigit}
                  secureTextEntry
                />
                <TextInput
                  mode="outlined"
                  style={styles.pinDigit}
                  secureTextEntry
                />
                <TextInput
                  mode="outlined"
                  style={styles.pinDigit}
                  secureTextEntry
                />
                <TextInput
                  mode="outlined"
                  style={styles.pinDigit}
                  secureTextEntry
                />
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                mode="outlined"
                contentStyle={styles.button}
                labelStyle={styles.buttonLabelStyle}
                buttonColor="#44D652"
                onPress={() => onYes()}
              >
                Save
              </Button>
              <Button
                mode="outlined"
                contentStyle={styles.button}
                labelStyle={styles.buttonLabelStyle}
                buttonColor="#FF0000"
                onPress={() => onRequestClose()}
              >
                Cancel
              </Button>
            </View>
          </View>
        </View>
      </Modal>
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
    padding: 10,
    width: 320,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 17,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    backgroundColor: "#fff",
  },
  icon: {
    width: 20,
    height: 20,
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
  inputStyles: {
    height: 40,
    width: 200,
    borderRadius: 20,
  },
  inputButton: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  inputBox: {
    gap: 10,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  sendIcon: {
    width: 20,
    height: 20,
    backgroundColor: "green",
    padding: 5,
  },
  pinBox: {
    gap: 10,
    paddingBottom: 10,
    paddingHorizontal: 40,
  },
  pinDigit: {
    width: 40,
    height: 30,
  },
});
