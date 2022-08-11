import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import SettingScreen from "./SettingScreen";
import Profile from "./Profile";
import HomePage from "./HomePage";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name={"settings"} color={color} size={size} />
          ),
          headerShown: false,
        }}
        component={SettingScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name={"home"} color={color} size={size} />
          ),
          headerShown: false,
        }}
        name="Home"
        component={HomePage}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name={"user"} color={color} size={size} />
          ),
          headerShown: false,
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
