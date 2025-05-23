// src/navigation/index.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
// Plus tard : import MainNavigator pour les écrans après login

export default function RootNavigator() {
  return <AuthNavigator />;
}
