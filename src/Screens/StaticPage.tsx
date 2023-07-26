import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function StaticPage() {
  return (
    <View style={style.container}>
      <Text style={style.text}> Welcome</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    color: "#000",
    fontSize: 16,
  },
});
