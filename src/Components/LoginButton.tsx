import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface buttonProps {
  onPressButton: () => void;
}
export default function Button({ onPressButton }: buttonProps) {
  return (
    <TouchableOpacity
      style={style.touchableContainer}
      activeOpacity={0.8}
      onPress={onPressButton}
    >
      <View style={style.container}>
        <Text style={style.textStyle}>Login</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "#F59123",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  touchableContainer: {
    width: "100%",
  },
  textStyle: {
    color: "#000",
    fontSize: 18,
  },
});
