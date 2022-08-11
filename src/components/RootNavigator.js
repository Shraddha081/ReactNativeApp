import { React, useEffect, useState, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import Form from "./Form";
import EditProfile from "./EditProfile";
import Profile from "./Profile";
import Favorites from "./Favorites";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext();

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      let value = await AsyncStorage.getItem("isLoggedIn");
      if (value === null || value === "false") {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {isLoggedIn ? (
            <>
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Tab"
                component={TabNavigator}
              />

              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="profile"
                component={Profile}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Profileedit"
                component={EditProfile}
                initialParams={{ name: "shdakdjf" }}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Favorites"
                component={Favorites}
              />
            </>
          ) : (
            <Stack.Screen
              name="Login"
              component={Form}
              options={{
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default RootNavigator;
