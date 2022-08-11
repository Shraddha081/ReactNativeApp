import { React, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./Header";
import BackButton from "./BackButton";
import { BACKGROUND_COLOR, PRIMARY_COLOR } from "./config/colors";
import { BOLD_FONT, LIGHT_FONT } from "./config/fontfamily";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const { navigate } = useNavigation();
  // return( <></>)
  return (
    <View>
      <Header
        title={"Edit Profile"}
        styling={styles.header}
        leftIcon={<BackButton />}
      />
      <View style={styles.mainContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text style={styles.labels}>Name:</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="name"
              autoCapitalize="none"
              autoCorrect={false}
              value={name}
              onChangeText={(e) => setName(e)}
            />
            {/* <Text style={styles.labels}>Bio:</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="Bio"
              autoCapitalize="none"
              autoCorrect={false}
              value={bio}
              onChangeText={(e) => setBio(e)}
            /> */}

            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={async () => {
                await AsyncStorage.setItem("name", name);
                await AsyncStorage.setItem("bio", bio);
                navigate("Profile", { name }, { bio });
              }}
            >
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: 570,
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "red",
    marginTop: 25,
    borderRadius: 20,
    width: 370,
    left: 10,
    backgroundColor: BACKGROUND_COLOR,
  },
  mainHeader: {
    fontSize: 30,
    color: "black",
    paddingBottom: 15,
    textTransform: "capitalize",
    fontWeight: "bold",
    color: PRIMARY_COLOR,
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
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: PRIMARY_COLOR,
    backgroundColor: BACKGROUND_COLOR,
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 3,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 17,
    color: "white",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
    fontFamily: LIGHT_FONT,
  },
  ImgStyle: {
    height: "20%",
    width: "100%",
    resizeMode: "contain",
    paddingBottom: 50,
    paddingTop: 200,
  },
  icon: {
    position: "relative",
    left: 300,
    bottom: 45,
    zIndex: 999,
  },
  header: {
    fontSize: 25,
    color: PRIMARY_COLOR,
    fontFamily: BOLD_FONT,
  },
});
export default EditProfile;
