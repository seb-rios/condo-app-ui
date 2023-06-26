import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RegistrationFlow from "./src/pages/registration/registration-flow.page";

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationFlow />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
