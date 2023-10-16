import { StyleSheet, View } from "react-native";
import { Card, ProgressBar, Text } from "react-native-paper";
import DoctorInfo from "../../components/DoctorInfo";

const DOCTOR_DETAILS = {
  status: "Consultations Completed",
  title: "Gynecologist",
  experience: 43,
  count: 4324,
  qualification: "MBBS,DGO,DNB-Gynecology,MNAMS-Gynaecolgy",
};

export default function Home() {
  return (
    <View style={styles.container}>
      <DoctorInfo doctorDetails={DOCTOR_DETAILS} />
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
                <ProgressBar progress={0.5} style={styles.barStyles} />
              </View>
              <View style={styles.consultationSection}>
                <Text style={styles.intoText}>25-30</Text>
                <ProgressBar
                  progress={0.3}
                  color="green"
                  style={styles.barStyles}
                />
              </View>
              <View style={styles.consultationSection}>
                <Text style={styles.intoText}>30-35</Text>
                <ProgressBar
                  progress={1}
                  color="orange"
                  style={styles.barStyles}
                />
              </View>
            </View>
          </View>
          <View>
            <View style={styles.amounts}>
              <Text style={styles.amountTitle}>Revenue</Text>
              <Text style={styles.amount}>$345.445</Text>
            </View>
            <View style={styles.amounts}>
              <Text style={styles.amountTitle}>Total conslt.</Text>
              <Text style={styles.amount}>4324</Text>
            </View>
          </View>
        </View>
      </Card>
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
