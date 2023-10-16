import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Card, Divider, ProgressBar } from "react-native-paper";

const windowDimensions = Dimensions.get("window");
const width = windowDimensions.width;

interface MyComponentProps {
  historyList: {
    appointNo: number;
    name: string;
  }[];
}

const DashboardHistoryCard: React.FC<MyComponentProps> = ({ historyList }) => {
  return (
    <Card contentStyle={styles.container}>
      <Text>History</Text>
      <View style={styles.consultationSection}>
        {historyList.map((history) => {
          return (
            <>
              <View style={styles.appointmentRow}>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.appointLabel}>Appoint No</Text>
                  <Text style={styles.appointNo}>{history.appointNo}</Text>
                </View>
                <Text style={styles.appointName}>{history.name} </Text>
              </View>
              <Divider />
            </>
          );
        })}
      </View>
    </Card>
  );
};

export default DashboardHistoryCard;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
    backgroundColor: "#DEDEDE",
    padding: 10,
    borderRadius: 20,
  },
  consultationSection: {},
  appointmentRow: {
    backgroundColor: "#0080A8",
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#DEDEDE",
    width: width - 60,
  },
  appointLabel: {
    color: "#fff",
    fontSize: 8,
  },
  appointNo: {
    color: "#fff",
    fontSize: 10,
  },
  appointName: {
    color: "#fff",
  },
});
