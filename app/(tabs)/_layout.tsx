import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#f4f4f4",
          height: 70,
          paddingTop: 5,
          shadowColor: "#55cfffdb",
          shadowOffset: {
            width: 0,
            height: -20,
          },
          shadowOpacity: 1,
          shadowRadius: 30,
          elevation: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Lista 1",
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={s.iconTab}
              source={require("@/assets/images/Distancia.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Lista 2",
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={s.iconTab}
              source={require("@/assets/images/Força.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: "Lista 3",
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={s.iconTab}
              source={require("@/assets/images/Umidades.png")}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const s = StyleSheet.create({
  iconTab: {
    width: 30,
    height: 30,
  },
});
