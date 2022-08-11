// import { React, useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { Alert, View, Text } from "react-native";
// import Form from "./Form";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AuthContext } from "./RootNavigator";

// const Validation = () => {
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const { setIsLoggedIn } = useContext(AuthContext);

//   const submit = async () => {
//     if (userName.length < 1) {
//       Alert.alert("Invalid Name", "Please enter a valid name", [
//         {
//           text: "Return",
//           style: "cancel",
//         },
//       ]);
//       return;
//     }

//     const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (reg.test(email) !== true) {
//       Alert.alert(
//         "Invalid Email Address",
//         "Please enter a valid email address",
//         [
//           {
//             text: "Return",
//             style: "cancel",
//           },
//         ]
//       );
//       return;
//     }

//     const passwordReg =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     if (passwordReg.test(password) !== true) {
//       Alert.alert(
//         "Specified password too short",
//         "Please enter a password that has at least 8 characters,at least one number,atleast one upper case letter, one lower case letter and at least one special character.",
//         [
//           {
//             text: "Return",
//             style: "cancel",
//           },
//         ]
//       );
//       return;
//     }
//     const res = await axios.post(
//       "http://202.51.74.168:120/api/users/authenticate",
//       {
//         userName: "admin",
//         password: "ImarkLivePOS@101020",
//       }
//     );
//     AsyncStorage.setItem("isLoggedIn", JSON.stringify(res.token));
//     setIsLoggedIn(true);
//   };

//   return (
//     <>
//       <Form
//         userName={userName}
//         setUserName={setUserName}
//         password={password}
//         setPassword={setPassword}
//         setConfirmPassword={setConfirmPassword}
//         confirmPassword={confirmPassword}
//         email={email}
//         setEmail={setEmail}
//         submit={submit}
//       />
//     </>
//   );
// };

// export default Validation;
