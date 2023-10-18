import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Button, Card } from "react-native-paper";

interface NotificationCardProps {
  notificationDetails: {
    date: string;
    message: string;
    type: string;
    time: string;
  };
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  notificationDetails,
}) => {
  return (
    <Card contentStyle={styles.container} elevation={0}>
      <Image
        style={styles.icon}
        source={require("../assets/images/bell.png")}
      />
      <View style={{ gap: 5 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.date}>{notificationDetails.date}</Text>
          {notificationDetails.type === "button" ? (
            <Button mode="contained">{notificationDetails.time}</Button>
          ) : (
            <Text style={styles.time}>{notificationDetails.time}</Text>
          )}
        </View>

        <Text style={styles.text}>{notificationDetails.message}</Text>
      </View>
    </Card>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#D9D9D9",
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 12,
  },
  time: {
    fontSize: 15,
  },
  date: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
