import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Avatar, Card, Divider, ProgressBar } from "react-native-paper";

const windowDimensions = Dimensions.get("window");
const width = windowDimensions.width;

interface ConsultationsProps {
  details: {
    count: number;
    barPercentages1: number;
    barPercentages2: number;
    barPercentages3: number;
  };
}

const Consultations: React.FC<ConsultationsProps> = ({ details }) => {
  return (
    <Card contentStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Consultations</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.month}>Month </Text>
        <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={[]}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={true ? "Select item" : "..."}
            searchPlaceholder="Search..."
            value={""}
            // onFocus={() => setIsFocus(true)}
            // onBlur={() => setIsFocus(false)}
            onChange={(item) => {}}
          />
      </View>
      <View style={styles.appointmentRow}>
        <View style={styles.ageChart}>
          <Text style={styles.month}>Age Category</Text>
          <View style={styles.consultationSection}>
            <Text style={styles.intoText}>18-25</Text>
            <ProgressBar
              progress={details.barPercentages1}
              color="#358BCA"
              style={styles.barStyles}
            />
          </View>
          <View style={styles.consultationSection}>
            <Text style={styles.intoText}>25-30</Text>
            <ProgressBar
              progress={details.barPercentages2}
              color="#358BCA"
              style={styles.barStyles}
            />
          </View>
          <View style={styles.consultationSection}>
            <Text style={styles.intoText}>30-35</Text>
            <ProgressBar
              progress={details.barPercentages3}
              color="#358BCA"
              style={styles.barStyles}
            />
          </View>
        </View>
        <Card contentStyle={styles.consult}>
          <Text style={styles.consultCount}>Total Consult</Text>
          <Text style={styles.consultCount}>4324</Text>
        </Card>
      </View>
    </Card>
  );
};

export default Consultations;
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

  dropdown: {
    height: 20,
    borderColor: "gray",
    backgroundColor: "#fff",
    borderWidth: 0.5,    
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  dropdownlabel: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
