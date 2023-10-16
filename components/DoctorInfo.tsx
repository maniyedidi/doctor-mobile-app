import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Avatar, Card, Divider } from "react-native-paper";

export default function DoctorInfo({
  doctorDetails,
}: {
  doctorDetails: {
    title: string;
    experience: number;
    count: number;
    status: string;
    qualification: string;
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
        <View>
          <Text style={styles.title}>{doctorDetails.title}</Text>
        </View>
        <Divider />
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={styles.doctorInfo}>
            <Text style={styles.infoTitle}>Experience</Text>
            <Text style={styles.intoText}>
              {doctorDetails.experience} Years
            </Text>
            <Text style={styles.intoText}>{doctorDetails.count} Online</Text>
            <Text style={styles.intoText}>{doctorDetails.status}</Text>
          </View>
          <View style={styles.doctorInfo}>
            <Text style={styles.infoTitle}>Qualifications</Text>
            <Text style={styles.intoText}>{doctorDetails.qualification}</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                style={{ width: 32, height: 32 }}
                source={require("../assets/images/edit.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#DEDEDE",
    borderRadius: 20,
    padding: 10,
    gap: 10,
  },
  avatar: {
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    flexDirection: "column",
    gap: 5,
  },
  doctorInfo: {
    flexDirection: "column",
    gap: 5,
    width: 100,
  },
  intoText: {
    fontSize: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  infoTitle: {
    fontSize: 10,
    fontWeight: "bold",
  },
  consultationCard: {
    flexDirection: "column",
    gap: 5,
    backgroundColor: "#DEDEDE",
    padding: 10,
  },
  consultationSection: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
