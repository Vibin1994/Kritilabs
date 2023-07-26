import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Details({ route }: any) {
  console.log(" details ", route.params.detail);
  const details = route.params.details;
  const navigation = route.params.navigation;
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={style.touchable}
      >
        <Text style={style.back}>Back</Text>
      </TouchableOpacity>
      <Text style={style.detailsText}> Selected Users Details</Text>
      <View style={style.detailsView}>
        <Text style={style.text}>{"Name"}</Text>
        <Text style={style.text1}>: {details.name}</Text>
      </View>

      <View style={style.detailsView}>
        <Text style={style.text}>{"Age"}</Text>
        <Text style={style.text1}>: {details.age}</Text>
      </View>
      <View style={style.detailsView}>
        <Text style={style.text}>{"Gender"}</Text>
        <Text style={style.text1}>: {details.gender}</Text>
      </View>
      <View style={style.detailsView}>
        <Text style={style.text}>{"Email"}</Text>
        <Text style={style.text1}>: {details.email}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
    paddingLeft: 80,
  },
  text: {
    color: "#FFF",
    fontSize: 14,
    width: 80,
  },
  text1: {
    color: "#FFF",
    fontSize: 16,
  },
  touchable: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  back: {
    color: "#fff",
  },
  detailsView: {
    flexDirection: "row",
  },
  detailsText: {
    color: "#FFF",
    fontSize: 19,
    width: "100%",
    paddingBottom: 30,
  },
});
