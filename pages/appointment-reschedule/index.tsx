import { ImageBackground, StyleSheet, View, Dimensions } from "react-native";
import { Card, Text } from "react-native-paper";
import EditAppointmentDetails from "../../components/EditAppointmentDetailsCard";

const APPOINTMENT_DETAILS = {
  id: `1`,
  date: "2023-10-13T14:32:53.764Z",
  name: `Test User `,
};
export default function AppointmentReschedule() {
  const onDateChange = () => {};

  const onTimeChange = () => {};

  return (
    <ImageBackground
      source={require("../../assets/images/bg.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.section1}>
          <Card style={styles.card}>
            <Text style={styles.title}> Appointment</Text>
            <Text style={styles.title}> Management</Text>
          </Card>
        </View>
        <EditAppointmentDetails details={APPOINTMENT_DETAILS} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  section1: {
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  section2: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  card: {
    width: 290,
    height: 107,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  bodyImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
