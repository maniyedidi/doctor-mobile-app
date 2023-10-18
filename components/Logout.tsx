import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Button, Card, Divider, Switch } from "react-native-paper";

interface LogoutProps {}

const Logout: React.FC<LogoutProps> = () => {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Card contentStyle={styles.container} elevation={0}>
        <View style={styles.infoRow}>
          <Text style={styles.text}>LOG OUT </Text>
          <Image
            style={styles.icon}
            source={require("../assets/images/doctor_profile.png")}
          />
        </View>
      </Card>
    </View>
  );
};

export default Logout;

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
  
  icon: {
    width: 16,
    height: 12,
  },
  text: {
    fontSize: 14,
    color: "#fff",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
