import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ListPage() {
  const navigation = useNavigation();

  const data = [
    {
      id: "1",
      name: "John Smith",
      age: "30",
      gender: "Male",
      email: "john.smith@gmail.com",
    },
    {
      id: "2",
      name: "Emily Johnson",
      age: "28",
      gender: "Female",
      email: "emily.johnson@gmail.com",
    },
    {
      id: "3",
      name: " Alex Chen",
      age: "25",
      gender: "Male",
      email: " alex.chen@gmail.com",
    },
    {
      id: "3",
      name: "Sara ",
      age: "23",
      gender: "Female",
      email: "sara@gmail.com",
    },
  ];

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Details", {
          navigation: navigation,
          details: item,
        });
      }}
      style={style.item}
    >
      <Image
        source={require("../assets/logo.jpeg")}
        style={style.image}
        resizeMode="contain"
      />
      <Text style={style.NameText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={style.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    margin: 8,
    height: 150,
    borderRadius: 10,
  },
  NameText: {
    color: "#fff",
    fontSize: 15,
    marginTop: 10,
  },
  image: {
    height: 50,
    width: 50,
  },
});
