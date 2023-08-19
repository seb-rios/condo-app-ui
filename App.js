import { enableScreens } from "react-native-screens";
enableScreens();
import React from "react";
import { StyleSheet, View } from "react-native";
import AppStack from "./src/routes/index.routes";

import { UserProvider } from "./src/context/user.content";

export default function App() {
  return (
    <UserProvider>
      {/* <View style={styles.container}> */}
      <AppStack />
      {/* </View> */}
    </UserProvider>
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
