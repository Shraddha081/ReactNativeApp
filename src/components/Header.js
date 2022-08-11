import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { BACKGROUND_COLOR, HEADER_COLOR, PRIMARY_COLOR } from "./config/colors";
import { BOLD_FONT } from "./config/fontfamily";

const Header = (props) => {
  // console.log(props.title);
  return (
    <View style={styles.header}>
      <Text style={props.styling}>
        {props.leftIcon} {props.title}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: BACKGROUND_COLOR,
    padding: 20,
    marginTop: 30,
  },
});
export default Header;
