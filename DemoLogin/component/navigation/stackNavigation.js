import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../screen/LoginScreen";
import FogotPassScreen from "../screen/ForgotPassScreen";

const AppNavigator = createStackNavigator({
    Login: {
      screen: LoginScreen
    },
    Forgot: {
        screen: FogotPassScreen,
    },
  },
  {
    initialRouteName: "Login"
  });
  
  export default Appcontainer = createAppContainer(AppNavigator);