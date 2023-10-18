import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Button, Card, Divider, Switch } from "react-native-paper";

interface PrivacyAndSecurityProps {
  userDetails: {
    name: string;
    email: string;
    mobile: string;
    qualification: string;
    profilePic: string;
    profession: string;
  };
}

const PrivacyAndSecurity: React.FC<PrivacyAndSecurityProps> = ({
  userDetails,
}) => {
  const [activeDevices, setActiveDevices] = useState(1);
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Text style={styles.title}>PRIVACY AND SECURITY</Text>
      <Card contentStyle={styles.container} elevation={0}>
        <View style={styles.infoRow}>
          <Text style={styles.text}>Profile visibility </Text>
          <Switch />
        </View>
        <Divider />

        <View style={styles.section2}>
          <View style={styles.infoRow}>
            <Text style={styles.text}>Secure IP</Text>
            <Switch />
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.text}>Allow Devices</Text>
            <View style={styles.range}>
              {[1, 2, 3].map((id) => {
                return (
                  <TouchableOpacity
                    key={id}
                    onPress={() => setActiveDevices(id)}
                  >
                    <Text
                      style={
                        activeDevices === id
                          ? [styles.active, styles.nonActive]
                          : [styles.nonActive]
                      }
                    >
                      {id}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default PrivacyAndSecurity;

const styles = StyleSheet.create({
  title: {
    marginLeft: 20,
    fontSize: 20,
    color: "#6E6E6E",
  },
  range: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 10,
    gap: 5,
  },
  nonActive: {
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  active: {
    backgroundColor: "#000",
    padding: 2,
    paddingHorizontal: 5,
    color: "#fff",
    borderRadius: 10,
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
