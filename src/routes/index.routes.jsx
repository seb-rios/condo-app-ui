import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pages imports
import RegistrationFlow from "../pages/registration/registration-flow.page";
import LoginPage from "../pages/authentication/login.page";
import HomePage from "../pages/home/home.page";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ title: "Condo App", headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationFlow}
          options={{ title: "Crea tu cuenta", headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
