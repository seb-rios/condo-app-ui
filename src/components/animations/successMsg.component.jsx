import React, { useEffect, useRef } from "react";
import { Text, View, StyleSheet, Animated, Dimensions } from "react-native";
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    position: "absolute",
    backgroundColor: "#26A65B",
    padding: 30,
    width: 300,
    height: 300,
    borderRadius: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  animationContainer: {
    position: "absolute",
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});

const SuccessMessage = () => {
  const scaleValue = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 10,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Animation Layer */}
      <View style={styles.animationContainer}>
        <LottieView
          source={require("../../assets/lottie-ani/greenCheckAnim.json")}
          autoPlay
          loop={false}
          style={{ width: 300, height: 300 }}
        />
      </View>

      {/* Card Layer */}
      <Animated.View
        style={[
          styles.card,
          {
            transform: [{ scale: scaleValue }],
          },
        ]}
      ></Animated.View>
    </View>
  );
};

export default SuccessMessage;
