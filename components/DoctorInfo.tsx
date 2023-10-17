import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Avatar, Card, Divider } from "react-native-paper";

export default function DoctorInfo({
  doctorDetails,
}: {
  doctorDetails: {
    name: string;
    status: string;
  };
}) {
  return (
    <Card contentStyle={styles.container}>
      <View style={styles.avatar}>
        <Avatar.Image
          size={75}
          source={require("../assets/images/doctor_profile.png")}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.msg}>Good Morning</Text>
        <View style={styles.nameSection}>
          <Text style={styles.name}>{doctorDetails.name}</Text>
          <TouchableOpacity>
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/images/edit.png")}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.status}>{doctorDetails.status}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",    
    borderRadius: 20,
    padding: 10,    
    gap: 30,
  },
  avatar: {
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    flexDirection: "column",
    gap: 5,
  },
  nameSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  msg: {
    fontSize: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  status: {
    fontSize: 15,
  },
});
