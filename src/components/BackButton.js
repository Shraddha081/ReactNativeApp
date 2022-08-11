import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { PRIMARY_COLOR } from "./config/colors";
const BackButton = () => {
  const { goBack } = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          goBack();
        }}
      >
        <Ionicons name="arrow-back" size={30} color={PRIMARY_COLOR} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
