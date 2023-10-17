import { ScrollView, StyleSheet, View } from "react-native";
import DoctorInfo from "../../components/DoctorInfo";
import ConsultationsCharts from "../../components/ConsultationsCharts";
import DashboardHistoryCard from "../../components/DashboardHistoryCard";
import UpcomingAppointments from "../../components/UpcomingAppointments";
import Consultations from "../../components/Consultations";
import PatientsReview from "../../components/PatientsReview";
import PatientsCounts from "../../components/PatientsCounts";

const DOCTOR_DETAILS = {
  name: "Dr. Vijaya Manohar",
  status: "You have 5 appointments today!",
};

const CHART_DETAILS = {
  count: 4324,
  barPercentages1: 0.5,
  barPercentages2: 0.3,
  barPercentages3: 0.6,
};

const HISTORY = [
  { appointNo: 121, name: "Test user" },
  { appointNo: 122, name: "Test user 2" },
];

const APPOINTMENTS = [
  {
    appointNo: 121,
    name: "Mrs. Devila Patel",
    src: "",
    date: new Date().toISOString(),
    details: "PHR",
  },
  {
    appointNo: 122,
    name: "Mrs. Devila Patel",
    src: "",
    date: new Date().toISOString(),
    details: "PHR",
  },
];

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <DoctorInfo doctorDetails={DOCTOR_DETAILS} />
        <UpcomingAppointments appointments={APPOINTMENTS} />
        <Consultations details={CHART_DETAILS} />
        <PatientsCounts newCount={100} oldCount={200}/>
        <PatientsReview details={CHART_DETAILS} />        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flexDirection: "column",
    gap: 10,
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
