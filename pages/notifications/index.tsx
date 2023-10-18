import { ScrollView, StyleSheet, View } from "react-native";
import NotificationCard from "../../components/NotificationCard";

const notificationDetails = {
  date: "April 2023",
  message: "Corem ipsum dolor sit amet,adipiscing elit.",
  type: "",
  time: "15 min",
};
const notificationDetails2 = {
  date: "June 2023",
  message: "Corem ipsum dolor sit amet,adipiscing elit.",
  type: "button",
  time: "Cancel",
};


export default function Notifications() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <NotificationCard notificationDetails={notificationDetails} />
        <NotificationCard notificationDetails={notificationDetails2} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
