import React from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Header from "./Header";
import { BACKGROUND_COLOR, PRIMARY_COLOR } from "./config/colors";
import { LIGHT_FONT, BOLD_FONT } from "./config/fontfamily";

const baseURL = "https://jsonplaceholder.typicode.com/comments";
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").label("Name"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required")
    .label("Email"),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required")
    .label("Password"),
});
const SignUpForm = () => {
  const updatePost = async (val) => {
    try {
      await axios.post(`${baseURL}`, {
        name: val.name,
        email: val.email,
        body: val.password,
      });
      ToastAndroid.show("Account created successfully!", ToastAndroid.LONG);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Header title={"Home"} styling={styles.header} />
      <ScrollView>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Formik
              initialValues={{ name: "", email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(val) => {
                updatePost(val);
              }}
            >
              {({
                handleChange,
                handleSubmit,
                handleBlur,
                values,
                errors,
                touched,
              }) => (
                <View style={styles.mainContainer}>
                  <Text style={styles.labels}>Name:</Text>

                  <TextInput
                    style={styles.inputStyle}
                    placeholder="Name"
                    onChangeText={handleChange("name")}
                    onBlurText={handleBlur("name")}
                    value={values.name}
                    autoCorrect={false}
                  />
                  {errors.name && touched.name && (
                    <Text style={{ color: "red" }}>{errors.name}</Text>
                  )}
                  <Text style={styles.labels}>Email:</Text>

                  <TextInput
                    style={styles.inputStyle}
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    onBlurText={handleBlur("email")}
                    autoCapitalize="none"
                    textContentType="email"
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <Text style={{ color: "red" }}>{errors.email}</Text>
                  )}
                  <Text style={styles.labels}>Password:</Text>

                  <TextInput
                    style={styles.inputStyle}
                    placeholder="Password"
                    onChangeText={handleChange("password")}
                    onBlurText={handleBlur("password")}
                    autoCapitalize="none"
                    secureTextEntry
                    textContentType="password"
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <Text style={{ color: "red" }}>{errors.password}</Text>
                  )}
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.buttonText}>Submit </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 570,
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "red",
    marginTop: 25,
    borderRadius: 20,
    width: 350,
    left: 15,
    backgroundColor: BACKGROUND_COLOR,
  },

  labels: {
    fontSize: 18,
    color: "black",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: LIGHT_FONT,
  },
  inputStyle: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    backgroundColor: BACKGROUND_COLOR,
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 2,
    paddingHorizontal: 1,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: PRIMARY_COLOR,
  },
  buttonText: {
    fontSize: 15,
    color: "white",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
  },
  ImgStyle: {
    height: "20%",
    width: "100%",
    resizeMode: "contain",
    paddingBottom: 50,
    paddingTop: 200,
  },
  header: {
    color: "black",
    fontSize: 30,
    fontFamily: BOLD_FONT,
  },
});
export default SignUpForm;
