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
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Image style={styles.icon} source={source} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 10,
  },
});
