import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const styles = StyleSheet.create({
  generateCode: {
    position: "absolute",
    bottom: 20,
    width: 65,
    height: 65,
    marginBottom: 5,
  },
});

const GenerateCodeIcon = () => {
  return (
    <LottieView
      source={require("../../assets/lottie-ani/generateCodeAnim.json")}
      loop={true}
      autoPlay
      style={styles.generateCode}
    />
  );
};

export default GenerateCodeIcon;
