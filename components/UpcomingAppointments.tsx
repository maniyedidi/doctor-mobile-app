import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Avatar, Card, Divider, ProgressBar } from "react-native-paper";

const windowDimensions = Dimensions.get("window");
const width = windowDimensions.width;

interface UpcomingAppointmentsProps {
  appointments: {
    appointNo: number;
    name: string;
    src: string;
    date: string;
    details: string;
  }[];
}

const UpcomingAppointments: React.FC<UpcomingAppointmentsProps> = ({
  appointments,
}) => {
  function getTimeFromDate(date: Date) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");    
    return `${hours}:${minutes}`;
  }

  return (
    <Card contentStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Upcoming Appointments</Text>
      </View>
      <View style={styles.appointmentRow}>
        <Text style={{...styles.label,width:50}}>Patient</Text>
        <Text style={styles.label}>Name/Diagnosis </Text>
        <Text style={styles.label}>Time</Text>
        <Text style={styles.label}>Details</Text>
      </View>

      <View style={styles.consultationSection}>
        {appointments.map((appointment) => {
          return (
            <View style={styles.appointmentRow}>
              <Avatar.Image
                size={50}
                source={require("../assets/images/doctor_profile.png")}
              />

              <Text style={styles.label}>{appointment.name} </Text>
              <Text style={styles.label}>
                {getTimeFromDate(new Date(appointment.date))}
              </Text>
              <Text style={styles.label}>{appointment.details}</Text>
            </View>
          );
        })}
      </View>
    </Card>
  );
};

export default UpcomingAppointments;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
  },
  titleContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  consultationSection: {},
  appointmentRow: {
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: width - 60,
  },
  label: {
    fontSize: 12,
  },
});
