import React, { forwardRef } from "react";
import LottieView from "lottie-react-native";

const HamburgerIcon = forwardRef((props, ref) => {
  return (
    <LottieView
      ref={ref}
      source={require("../../assets/lottie-ani/hamburgerIconAnim.json")}
      loop={false}
      style={{ width: 30, height: 50 }}
    />
  );
});

export default HamburgerIcon;
