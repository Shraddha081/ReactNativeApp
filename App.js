import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./src/components/RootNavigator";
import useCachedResources from "./src/hooks/usecachedresources";

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) return <AppLoading />;
  return (
    <>
      <RootNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
