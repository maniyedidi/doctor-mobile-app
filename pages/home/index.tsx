import { StyleSheet, View } from "react-native";
import DoctorInfo from "../../components/DoctorInfo";
import ConsultationsCharts from "../../components/ConsultationsCharts";
import DashboardHistoryCard from "../../components/DashboardHistoryCard";

const DOCTOR_DETAILS = {
  status: "Consultations Completed",
  title: "Gynecologist",
  experience: 43,
  count: 4324,
  qualification: "MBBS,DGO,DNB-Gynecology,MNAMS-Gynaecolgy",
};

const CHART_DETAILS = {
  revenue: 345.445,
  count: 4324,
  barPercentages1: 0.5,
  barPercentages2: 0.3,
  barPercentages3: 0.6,
};

const HISTORY = [
  { appointNo: 121, name: "Test user" },
  { appointNo: 122, name: "Test user 2" },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <DoctorInfo doctorDetails={DOCTOR_DETAILS} />
      <ConsultationsCharts chartDetails={CHART_DETAILS} />
      <DashboardHistoryCard historyList={HISTORY} />
    </View>
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
