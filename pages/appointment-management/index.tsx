import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { Card, Text } from "react-native-paper";
import AppointmentCard from "../../components/AppointmentCard";
import Tabs from "../../components/Tabs";
import { useState } from "react";

const TABS = ["Current Appointments", "Previous Appointments"];
export default function AppointmentManagement() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const windowDimensions = Dimensions.get("window");
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
        <View style={styles.section2}>
          <Tabs labels={TABS} active={activeTab} onPress={setActiveTab} />
        </View>
        <ScrollView>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
            return (
              <View
                style={{
                  marginBottom: 2,
                  width: windowDimensions.width,
                }}
              >
                <AppointmentCard
                  details={{
                    id: `${i}`,
                    date: "2023-10-13T14:32:53.764Z",
                    name: `Test User ${i}`,
                  }}
                  hideButtons={false}
                />
              </View>
            );
          })}
        </ScrollView>
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
