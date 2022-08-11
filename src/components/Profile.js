import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { React, useContext, useEffect, useState } from "react";
import { AuthContext } from "./RootNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { PROFILE_PICTURE } from "./config/images";
import Header from "./Header";
import { BACKGROUND_COLOR, PRIMARY_COLOR } from "./config/colors";
import { MaterialIcons, Feather, Ionicons } from "@expo/vector-icons";
import { BOLD_FONT, LIGHT_FONT } from "./config/fontfamily";

const Profile = () => {
  const { push } = useNavigation();
  const [name, setName] = useState();
  const [bio, setBio] = useState();
  const [isSelected, setIsSelected] = useState("true");
  setIsSelected(false);
  const fetchName = async () => {
    const res = await AsyncStorage.getItem("name");
    const resa = await AsyncStorage.getItem("bio");
    setBio(resa);
    setName(res);
  };

  useEffect(() => {
    fetchName();
  }, [fetchName]);

  const { setIsLoggedIn } = useContext(AuthContext);
  const LogOut = async () => {
    await AsyncStorage.setItem("isLoggedIn", "");
    setIsLoggedIn(false);
  };
  return (
    <>
      <Header title={"Profile"} styling={styles.header} />
      <ScrollView>
        <View style={styles.mainContainer}>
          <View
            style={{ flex: 1, flexDirection: "column", alignItems: "center" }}
          >
            <Image source={PROFILE_PICTURE} style={styles.ImgStyle} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.bio}>{bio}</Text>

            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={{ color: "white" }}>Message</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: BACKGROUND_COLOR,
            borderRadius: 10,
            width: 370,
            left: 10,
          }}
        >
          <TouchableOpacity
            style={styles.content}
            onPress={() => {
              push("Profileedit");
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
                <Feather name="edit" size={24} color={PRIMARY_COLOR} />
                <Text style={styles.contentText}>Edit Profile</Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={24}
                color={PRIMARY_COLOR}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.content}
            onPress={() => {
              push("Favorites");
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
                <MaterialIcons
                  name="favorite"
                  size={24}
                  color={PRIMARY_COLOR}
                />

                <Text style={styles.contentText}> Favorites</Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={24}
                color={PRIMARY_COLOR}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.content,
              { backgroundColor: isSelected ? "red" : "white" },
            ]}
          >
            <View
              style={{
                flex: 2,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flex: 2,
                  flexDirection: "row",
                  alignContent: "center",
                }}
              >
                <Feather name="download" size={24} color={PRIMARY_COLOR} />
                <Text style={styles.contentText}>Downloads</Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={24}
                color={PRIMARY_COLOR}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content} onPress={LogOut}>
            <Feather name="log-out" size={24} color={PRIMARY_COLOR} />
            <Text style={styles.contentText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingVertical: 12,
    width: 100,
    borderRadius: 5,
    backgroundColor: PRIMARY_COLOR,
    top: 270,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    fontFamily: LIGHT_FONT,
  },
  ImgStyle: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    borderRadius: 200,
    position: "absolute",
    top: 50,
  },
  textStyle: {
    position: "absolute",
    top: 250,
    left: -30,
    fontFamily: LIGHT_FONT,
  },
  mainContainer: {
    backgroundColor: BACKGROUND_COLOR,
    height: 350,
    borderRadius: 10,
    width: 370,
    left: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  name: {
    fontSize: 25,
    color: "black",
    marginTop: 50,
    marginBottom: 5,
    lineHeight: 25,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    top: 170,
    fontFamily: LIGHT_FONT,
    color: PRIMARY_COLOR,
  },
  header: {
    color: PRIMARY_COLOR,
    fontSize: 30,
    fontFamily: BOLD_FONT,
  },
  content: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    opacity: 0.8,
    marginTop: 7,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingVertical: 15,
    alignContent: "center",
    zIndex: 999,
  },
  contentText: {
    fontFamily: LIGHT_FONT,
    color: "black",
    marginLeft: 15,
  },
  bio: {
    color: PRIMARY_COLOR,
    marginTop: 50,
    marginBottom: 5,
    lineHeight: 25,
    textAlign: "center",
    position: "absolute",
    top: 200,
    fontFamily: LIGHT_FONT,
  },
});

export default Profile;
