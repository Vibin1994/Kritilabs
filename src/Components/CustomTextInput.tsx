import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

interface inputProps {
  values: string;
  onchange: (val: string) => void;
  placeHolder: string;
  secureText?: boolean;
}

export default function CustomTextInput({ ...props }) {
  const [borderColor, setBorderColor] = useState("#000");
  return (
    <TextInput
      style={[style.textInput, { borderColor: borderColor }]}
      onFocus={(val) => {
        setBorderColor("green");
        console.log(" focus ", val);
      }}
      onBlur={() => {
        setBorderColor("#000");
      }}
      {...props}
    />
  );
}

const style = StyleSheet.create({
  textInput: {
    width: "100%",
    height: 50,
    includeFontPadding: false,
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 15,
    padding: 15,
    borderRadius: 5,
  },
});
