import { React, useState, useContext } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
  Alert,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./RootNavigator";
import axios from "axios";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { BACKGROUND_COLOR, PRIMARY_COLOR, INPUT_COLOR } from "./config/colors";
import { App_Logo } from "./config/images";
import { LIGHT_FONT } from "./config/fontfamily";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const submit = async () => {
    setIsLoading(!isLoading);
    try {
      const res = await axios.post(
        "http://202.51.74.168:120/api/users/authenticate",
        {
          userName: "userName",
          password: "password",
        }
      );
      await AsyncStorage.setItem("isLoggedIn", JSON.stringify(res.data.token));
      setIsLoggedIn(true);
    } catch (err) {
      console.log(err);
      Alert.alert("Please enter valid username and password");
    }
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Image style={styles.ImgStyle} source={App_Logo} />
        <Text style={styles.mainHeader}>Login </Text>
        <Text style={styles.labels}>Username:</Text>
        <Text
          style={{ position: "absolute", bottom: 340, left: 30, zIndex: 999 }}
        >
          <FontAwesome name="user" size={24} color={PRIMARY_COLOR} />
        </Text>

        <TextInput
          style={styles.inputStyle}
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={(e) => setUserName(e)}
        />
        <Text style={styles.labels}>Password:</Text>
        <Text
          style={{ position: "absolute", bottom: 250, left: 29, zIndex: 999 }}
        >
          <Ionicons name="md-lock-closed" size={24} color={PRIMARY_COLOR} />
        </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          secureTextEntry={isVisible}
          onChangeText={(e) => setPassword(e)}
        />
        {isVisible ? (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              {
                setIsVisible(false);
              }
            }}
          >
            <Ionicons name={"eye-off"} size={24} color={"black"} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              {
                setIsVisible(true);
              }
            }}
          >
            <Ionicons name={"eye"} size={24} color={"black"} />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[
            styles.buttonStyle,
            { backgroundColor: isLoading ? "#DDDDDD" : PRIMARY_COLOR },
          ]}
          onPress={submit}
        >
          <Text style={styles.buttonText}>
            {isLoading ? <ActivityIndicator /> : "Login"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: 830,
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: BACKGROUND_COLOR,
  },
  mainHeader: {
    fontSize: 30,
    color: "black",
    paddingBottom: 15,
    textTransform: "capitalize",
    color: PRIMARY_COLOR,
    fontFamily: LIGHT_FONT,
  },

  labels: {
    fontSize: 18,
    color: "black",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    color: PRIMARY_COLOR,
    fontFamily: LIGHT_FONT,
  },
  inputStyle: {
    marginBottom: 10,
    paddingHorizontal: 25,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: PRIMARY_COLOR,
    marginLeft: 5,
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 2,
    paddingHorizontal: 20,
    elevation: 3,
  },
  buttonText: {
    fontSize: 15,
    color: "white",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
    fontFamily: LIGHT_FONT,
  },
  ImgStyle: {
    height: "40%",
    width: "100%",
    resizeMode: "contain",
    paddingBottom: 50,
    paddingTop: 200,
  },
  icon: {
    position: "absolute",
    left: 320,
    bottom: 250,
    zIndex: 999,
  },
});
export default Form;
