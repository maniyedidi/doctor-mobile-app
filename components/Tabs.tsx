import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

export default function Tabs({
  labels,
  active,
  onPress,
}: {
  labels: any;
  active: string;
  onPress: Function;
}) {
  return (
    <Card contentStyle={styles.container}>
      <View style={styles.tabs}>
        {labels.map((label: string) => {
          return (
            <TouchableOpacity
              style={
                active === label
                  ? { ...styles.labelContainer, ...styles.activeLabelContainer }
                  : styles.labelContainer
              }
              key={label}
              onPress={() => onPress(label)}
            >
              <Text style={styles.centerText}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderRadius: 20,
  },
  labelContainer: {
    width: 140,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    borderRadius: 30,
    paddingVertical:5,     
  },
  activeLabelContainer: {
    backgroundColor: "#acddec",
  },
  tabs: {
    flexDirection: "row",
    gap: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 10,
  },
  centerText:{
    textAlign: 'center',
    flexWrap: 'wrap'
  }
});
