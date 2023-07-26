import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListPage from "./ListPage";
import StaticPage from "./StaticPage";

const BottomTab = createBottomTabNavigator();

export default function HomeScreen({ route }: any) {
  return (
    <>
      <BottomTab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: style.bottomTabBarStyle,
        }}
      >
        <BottomTab.Screen
          name="ListPage"
          component={ListPage}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <Image
                source={
                  focused
                    ? require("../assets/menu_home_Active.png")
                    : require("../assets/menu_home.png")
                }
                style={{ width: 25, height: 25 }}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="StaticPage"
          component={StaticPage}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <Image
                source={
                  focused
                    ? require("../assets/menu_athletes_Active.png")
                    : require("../assets/menu_athlete.png")
                }
                style={{ width: 25, height: 25 }}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 20,
  },
  homeText: {
    position: "absolute",
    top: 20,
    color: "#000",
  },
  bottomTabBarStyle: {
    height: 60,
  },
});
