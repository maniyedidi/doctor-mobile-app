import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Avatar, Card, Divider, ProgressBar } from "react-native-paper";

const windowDimensions = Dimensions.get("window");
const width = windowDimensions.width;

interface PatientsReviewProps {
  details: {
    count: number;
    barPercentages1: number;
    barPercentages2: number;
    barPercentages3: number;
  };
}

const PatientsReview: React.FC<PatientsReviewProps> = ({ details }) => {
  return (
    <Card contentStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Patients Review</Text>
      </View>
      <View style={styles.ageChart}>
        <View style={styles.consultationSection}>
          <Text style={styles.intoText}>Excellent</Text>
          <ProgressBar
            progress={0.3}
            color="#358BCA"
            style={styles.barStyles}
          />
        </View>
        <View style={styles.consultationSection}>
          <Text style={styles.intoText}>Good</Text>
          <ProgressBar
            progress={0.3}
            color="#358BCA"
            style={styles.barStyles}
          />
        </View>
        <View style={styles.consultationSection}>
          <Text style={styles.intoText}>Need Improvement</Text>
          <ProgressBar
            progress={0.3}
            color="#358BCA"
            style={styles.barStyles}
          />
        </View>
        <View style={styles.consultationSection}>
          <Text style={styles.intoText}>Poor</Text>
          <ProgressBar
            progress={0.3}
            color="#358BCA"
            style={styles.barStyles}
          />
        </View>
        <View style={styles.consultationSection}>
          <Text style={styles.intoText}>Unsatisfactory</Text>
          <ProgressBar
            progress={0.3}
            color="#358BCA"
            style={styles.barStyles}
          />
        </View>
      </View>
    </Card>
  );
};

export default PatientsReview;
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
  },
  ageChart: {
    gap: 10,
    width: width - 60,
  },
  consultationSection: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  intoText: { color: "#2E94D4", width:120 },
  barStyles: {
    width: 150,
    height: 10,
    borderRadius: 20,
  },
  label: {
    fontSize: 12,
  },
  consult: {
    width: 100,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  consultCount: {
    color: "#2E94D4",
    fontSize: 15,
  },
});
