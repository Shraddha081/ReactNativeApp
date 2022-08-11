import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { React, useContext } from "react";
import { AuthContext } from "./RootNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { App_Logo, PROFILE_PICTURE } from "./config/images";
import Header from "./Header";
import { BACKGROUND_COLOR, PRIMARY_COLOR } from "./config/colors";
import { MaterialIcons, Feather, Ionicons } from "@expo/vector-icons";
import { BOLD_FONT, LIGHT_FONT } from "./config/fontfamily";
import { useRoute } from "@react-navigation/native";

const Abc = () => {
  const { push } = useNavigation();
  const route = useRoute();

  const { setIsLoggedIn } = useContext(AuthContext);
  const LogOut = async () => {
    await AsyncStorage.setItem("isLoggedIn", "");
    setIsLoggedIn(false);
  };
  return (
    <ScrollView>
      <Header title={"Profile"} styling={styles.header} />
      <View style={styles.container}>
        <Image style={styles.cover} source={App_Logo} />

        <View
          style={{ flex: 1, flexDirection: "column", alignItems: "center" }}
        >
          <Image
            style={styles.avatar}
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
            }}
          />
          <Text style={styles.name}>Shraddha Aryal</Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              push("edit");
            }}
          >
            <Text style={styles.contentText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.content}
          onPress={() => {
            push("favorites");
          }}
        >
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 2, flexDirection: "row" }}>
              <MaterialIcons name="favorite" size={24} color={PRIMARY_COLOR} />
              <Text style={styles.contentText}> Favorites</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={PRIMARY_COLOR} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.content}>
          <Text style={styles.contentText}>
            <Feather name="download" size={24} color={PRIMARY_COLOR} />
            Downloads
            <Ionicons name="chevron-forward" size={24} color={PRIMARY_COLOR} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.content} onPress={LogOut}>
          <Text style={styles.contentText}>
            <Feather name="log-out" size={24} color={PRIMARY_COLOR} />
            Logout
            <Ionicons name="chevron-forward" size={24} color={PRIMARY_COLOR} />
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cover: {
    height: 200,
  },
  header: {
    color: PRIMARY_COLOR,
    fontSize: 30,
    fontFamily: BOLD_FONT,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    fontFamily: LIGHT_FONT,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    top: -30,
  },
  name: {
    fontSize: 22,
    color: PRIMARY_COLOR,
    fontWeight: "600",
    top: 20,
  },

  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
    top: 100,
  },

  buttonContainer: {
    top: 450,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: PRIMARY_COLOR,
    position: "absolute",
  },
  content: {
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 10,
    width: 350,
    left: 15,
    marginTop: 2,
    marginBottom: 2,
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    paddingVertical: 15,
    alignContent: "center",
  },
  contentText: {
    fontFamily: LIGHT_FONT,
    color: PRIMARY_COLOR,
  },
  container: {
    height: 350,
    borderRadius: 30,
    width: 350,
    left: 15,
    marginBottom: 5,
    marginTop: 5,
  },
});
export default Abc;
