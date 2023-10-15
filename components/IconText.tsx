import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function IconText({
  source,
  label,
}: {
  source: any;
  label: string;
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={source} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 14,
  },
});
