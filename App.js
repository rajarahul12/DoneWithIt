import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import Screen from "./app/components/Screen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
