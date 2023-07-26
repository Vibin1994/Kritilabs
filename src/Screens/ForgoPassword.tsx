import React from "react";
import { Button, TouchableOpacity } from "react-native";
import { Text, StyleSheet, View } from "react-native";

export default function ForgotPassword({ route }: any) {
  const navigation = route?.params?.navigation;

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.touchable}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={style.forgotPassword}>Back</Text>
      </TouchableOpacity>
      <Text style={style.forgotPassword}>ForgotPassword</Text>
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
  forgotPassword: {
    color: "#000",
  },
  touchable: {
    color: "#000",
    position: "absolute",
    top: 20,
    left: 20,
  },
});
