import { View, Text } from "react-native";
import React from "react";
import * as Font from "expo-font";

const usecachedresources = () => {
  const [isLoadingComplete, setIsloadingComplete] = React.useState(false);

  React.useEffect(() => {
    async function loadResources() {
      try {
        await Font.loadAsync({
          "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
          "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
        });
      } catch (e) {
        console.error(e);
      } finally {
        setIsloadingComplete(true);
      }
    }
    loadResources();
  }, []);
  return isLoadingComplete;
};

export default usecachedresources;
