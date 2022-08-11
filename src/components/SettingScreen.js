import { View, Text, StyleSheet } from "react-native";
import { React, useEffect } from "react";
import { PRIMARY_COLOR } from "./config/colors";
import Header from "./Header";

const SettingScreen = () => {
  return (
    <View>
      <Header styling={styles.header} title={"Settings"} />
      <Text>SettingScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    color: PRIMARY_COLOR,
    fontSize: 30,
  },
});
export default SettingScreen;
