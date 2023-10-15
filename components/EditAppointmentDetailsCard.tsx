import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { DatePickerModal, TimePickerModal } from "react-native-paper-dates";
import { Text, View } from "./Themed";
import { Avatar, Button, Card } from "react-native-paper";
import IconText from "./IconText";

export default function EditAppointmentDetails({
  details,
}: {
  details: {
    id: string;
    date: string;
    name: string;
  };
}) {
  const [inputDate, setInputDate] = React.useState(new Date());
  const [visible, setVisible] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params: any) => {
      setOpen(false);
      const newDate = new Date(params.date);
      newDate.setHours(inputDate.getHours());
      newDate.setMinutes(inputDate.getMinutes());
      console.log(newDate);
      setInputDate(newDate);
    },
    [setOpen, setInputDate]
  );

  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    ({ hours, minutes }: { hours: number; minutes: number }) => {
      setVisible(false);
      inputDate.setHours(hours);
      inputDate.setMinutes(minutes);
      setInputDate(inputDate);
    },
    [setVisible]
  );

  return (
    <Card contentStyle={styles.card}>
      <View style={styles.row1}>
        <View>
          <Avatar.Text size={40} label={"PA"} />
        </View>
        <View style={styles.cardDetails}>
          <Text>{details.name + details.id}</Text>
          <View style={styles.dateInfo}>
            <View style={styles.iconInput}>
              <IconText
                label={new Date(inputDate).toLocaleDateString()}
                source={require("../assets/images/schedule.png")}
              />

              <Button mode="text" onPress={() => setOpen(true)}>
                Update
              </Button>
              <DatePickerModal
                locale="en"
                mode="single"
                visible={open}
                onDismiss={onDismissSingle}
                date={inputDate}
                onConfirm={onConfirmSingle}
              />
            </View>
            <View style={styles.iconInput}>
              <IconText
                label={new Date(inputDate).toLocaleTimeString()}
                source={require("../assets/images/clock.png")}
              />
              <Button mode="text" onPress={() => setVisible(true)}>
                Update
              </Button>

              <TimePickerModal
                visible={visible}
                onDismiss={onDismiss}
                onConfirm={(data: any) => onConfirm(data)}
                hours={inputDate.getHours()}
                minutes={inputDate.getMinutes()}
              />
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "white",
  },
  icon: {
    width: 40,
    height: 40,
  },
  row1: {
    flexDirection: "row",
    gap: 10,
  },
  cardDetails: {
    flexDirection: "column",
    gap: 10,
  },
  dateInfo: {
    flexDirection: "column",
    gap: 10,
  },
  iconInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
