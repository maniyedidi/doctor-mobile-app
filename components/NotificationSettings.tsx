import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Button, Card, Divider, Switch } from "react-native-paper";

interface ProfileCardProps {
  userDetails: {
    name: string;
    email: string;
    mobile: string;
    qualification: string;
    profilePic: string;
    profession: string;
  };
}

const NotificationSettings: React.FC<ProfileCardProps> = ({ userDetails }) => {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Text style={styles.title}>NOTIFICATION</Text>
      <Card contentStyle={styles.container} elevation={0}>
        <View style={styles.infoRow}>
          <Text style={styles.text}>NOTIFICATION</Text>
          <Switch />
        </View>
        <Divider />

        <View style={styles.section2}>
          <View style={styles.infoRow}>
            <Text style={styles.text}>Daily Alert</Text>
            <Switch />
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.text}>Appointments</Text>
            <Switch />
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.text}>Updates</Text>
            <Switch />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default NotificationSettings;

const styles = StyleSheet.create({
  title: {
    marginLeft: 20,
    fontSize: 20,
    color: "#6E6E6E",
  },
  container: {
    gap: 10,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 10,
    backgroundColor: "#0080A8",
  },
  section1: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    gap: 5,
  },
  section2: {
    flexDirection: "column",
    gap: 20,
  },
  profileIcon: {
    width: 60,
    height: 60,
  },
  icon: {
    width: 16,
    height: 12,
  },
  text: {
    fontSize: 12,
    color: "#fff",
  },
  name: {
    fontSize: 15,
    color: "#fff",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
