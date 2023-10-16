import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, ProgressBar } from "react-native-paper";

interface ConsultationsChartsProps {
  chartDetails: {
    revenue: number;
    count: number;
    barPercentages1: number;
    barPercentages2: number;
    barPercentages3: number;
  };
}

const ConsultationsCharts: React.FC<ConsultationsChartsProps> = ({
  chartDetails,
}) => {
  return (
    <Card contentStyle={styles.consultationCard}>
      <Text>Consultations</Text>
      <View style={styles.consultationSection}>
        <View>
          <Text>Circle</Text>
        </View>
        <View>
          <Text>Month: June</Text>
          <View style={styles.ageChart}>
            <Text>Age</Text>
            <View style={styles.consultationSection}>
              <Text style={styles.intoText}>18-25</Text>
              <ProgressBar
                progress={chartDetails.barPercentages1}
                style={styles.barStyles}
              />
            </View>
            <View style={styles.consultationSection}>
              <Text style={styles.intoText}>25-30</Text>
              <ProgressBar
                progress={chartDetails.barPercentages2}
                color="green"
                style={styles.barStyles}
              />
            </View>
            <View style={styles.consultationSection}>
              <Text style={styles.intoText}>30-35</Text>
              <ProgressBar
                progress={chartDetails.barPercentages3}
                color="orange"
                style={styles.barStyles}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.amounts}>
            <Text style={styles.amountTitle}>Revenue</Text>
            <Text style={styles.amount}>${chartDetails.revenue}</Text>
          </View>
          <View style={styles.amounts}>
            <Text style={styles.amountTitle}>Total conslt.</Text>
            <Text style={styles.amount}>{chartDetails.count}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default ConsultationsCharts;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  barStyles: {
    width: 180,
    height: 10,
    borderRadius: 20,
  },
  ageChart: {
    flexDirection: "column",
    gap: 5,
  },
  amounts: {
    flexDirection: "column",
    gap: 5,
    marginBottom: 10,
  },
  amount: {
    fontSize: 8,
  },
  amountTitle: {
    fontSize: 10,
    fontWeight: "bold",
  },
  doctorInfo: {
    flexDirection: "column",
    gap: 5,
    width: 120,
  },
  intoText: {
    fontSize: 5,
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
    borderRadius: 20,
  },
  consultationSection: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
