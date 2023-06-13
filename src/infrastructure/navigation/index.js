import React, { useContext } from "react";
import { AppNavigator } from "./app.navigator";
import { AutheticationContext } from "../../services/authentication/authentication.context";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AutheticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
