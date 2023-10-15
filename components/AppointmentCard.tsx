import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "./Themed";
import { Avatar, Button, Card } from "react-native-paper";
import IconText from "./IconText";
import ConfirmModal from "./ConfirmModal";

export default function AppointmentCard({
  details,
  hideButtons,
}: {
  details: {
    id: string;
    date: string;
    name: string;
  };
  hideButtons: boolean;
}) {
  return (
    <Card contentStyle={styles.card}>
      <View style={styles.row1}>
        <View>
          <Avatar.Text size={40} label={"PA"} />
        </View>
        <View style={styles.cardDetails}>
          <Text>{details.name + details.id}</Text>
          <View style={styles.dateInfo}>
            <IconText
              label={new Date(details.date).toLocaleDateString()}
              source={require("../assets/images/schedule.png")}
            />
            <IconText
              label={new Date(details.date).toLocaleTimeString()}
              source={require("../assets/images/clock.png")}
            />
          </View>
        </View>
      </View>
      {!hideButtons && (
        <View style={styles.row2}>
          <Button
            contentStyle={styles.button}
            labelStyle={styles.buttonLabelStyle}
            mode="outlined"
          >
            Reschedule
          </Button>
          <ConfirmModal
            primaryMessage="Are you sure want to cancel appointment?"
            label="Cancel Appointment"
            style={styles.cancelBtnStyle}
            textColor="red"
            onYes={() => {}}
          />
          <Button
            contentStyle={styles.button}
            labelStyle={styles.buttonLabelStyle}
            mode="outlined"
          >
            Enter Room
          </Button>
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "white",
  },
  row1: {
    flexDirection: "row",
    gap: 10,
  },
  row2: {
    flexDirection: "row",
    gap: 5,
    marginTop: 10,
  },
  cardDetails: {
    flexDirection: "column",
    gap: 10,
  },
  dateInfo: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    height: 20,
    paddingHorizontal: 0,
  },
  buttonLabelStyle: {
    fontSize: 10,
    height: 20,
  },
  cancelBtnStyle: {
    borderColor: "red",
    borderWidth: 1,
  },
});
