import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Keyboard,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import CustomTextInput from "../Components/CustomTextInput";
import Button from "../Components/LoginButton";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLinkPress = () => {
    Linking.openURL("https://www.example.com");
  };

  const login = () => {
    if (userName == "admin" && password == "12345678") {
      navigation.navigate("Home", { navigation: navigation });
      setUserName("");
      setPassword("");
    } else {
      Alert.alert(
        "",
        "Invalid UserName or Password",
        [
          { text: "Cancel", style: "cancel" },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <Pressable
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={style.container}
    >
      <Image
        source={require("../assets/logo.jpeg")}
        style={style.image}
        resizeMode="contain"
      />
      <CustomTextInput
        onchange={setUserName}
        placeholder={"UserName"}
        onChangeText={(val: string) => setUserName(val)}
        value={userName}
        autoCapitalize="none"
        placeholderTextColor={"grey"}
      />
      <CustomTextInput
        placeholder={"Password"}
        secureText={true}
        onChangeText={(val: string) => setPassword(val)}
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        placeholderTextColor={"grey"}
      />
      <View style={style.forgotPasswordView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ForgotPassword", { navigation: navigation });
          }}
          activeOpacity={0.7}
        >
          <Text style={style.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <Button onPressButton={login} />
      <View style={style.copyRights}>
        <Text style={style.text}>
          © 2023 Your Company. All rights reserved.
        </Text>
        <TouchableOpacity onPress={handleLinkPress}>
          <Text style={style.linkText}>Terms of Service</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    height: 100,
    width: 100,
    marginBottom: 30,
    position: "absolute",
    top: 30,
  },
  forgotPasswordView: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 10,
  },
  forgotPasswordText: {
    fontSize: 13,
    color: "grey",
  },
  copyRights: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginTop: 10,
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
    alignSelf: "center",
  },
});
