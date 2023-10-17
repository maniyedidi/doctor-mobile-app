import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { Card } from "react-native-paper";

const windowDimensions = Dimensions.get("window");
const width = windowDimensions.width;

interface PatientsCountsProps {
  newCount: number;
  oldCount: number;
}

const PatientsCounts: React.FC<PatientsCountsProps> = ({
  newCount,
  oldCount,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.appointmentRow}>
        <Card contentStyle={styles.consult}>
          <Image source={require("../assets/images/patient.png")} />
          <View>
            <Text style={styles.consultCount}>Total Patients</Text>
            <Text style={styles.consultCount}>{newCount + oldCount}</Text>
            <Text style={styles.consultCount}>Till Today</Text>
          </View>
        </Card>
        <Card contentStyle={styles.patientsCounts}>
          <Text style={styles.consultCount}>Old Patients</Text>
          <Text style={styles.consultCount}>{newCount}</Text>
          <Text style={styles.consultCount}>New Patients</Text>
          <Text style={styles.consultCount}>{oldCount}</Text>
        </Card>
      </View>
    </View>
  );
};

export default PatientsCounts;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E94D4",
  },
  month: {
    fontSize: 12,
    color: "#2E94D4",
  },
  titleContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },

  appointmentRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: width - 60,
  },
  ageChart: {
    gap: 10,
  },
  consultationSection: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  intoText: { color: "#2E94D4" },
  label: {
    fontSize: 12,
  },
  consult: {
    width: 160,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 20,
    gap: 10,
  },
  patientsCounts: {
    width: 140,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  consultCount: {
    fontSize: 15,
  },
});
