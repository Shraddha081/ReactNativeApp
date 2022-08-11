import { View, Text, StyleSheet } from "react-native";
import { React, useEffect } from "react";
import BackButton from "./BackButton";
import Header from "./Header";
import { PRIMARY_COLOR } from "./config/colors";

const Favorites = () => {
  return (
    <View>
      <Header
        styling={styles.header}
        title={"Favorites"}
        leftIcon={<BackButton />}
      />
      <Text>Favorites</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    color: PRIMARY_COLOR,
    fontSize: 30,
  },
});
export default Favorites;
