import React from "react";
import { Text, Animated, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "#f0f0f0",
    position: "absolute",
    top: 40,
    right: 15,
    width: 180,
    padding: 5,
    borderRadius: 10,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-evenly",
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontWeight: "700",
  },
  logOutItem: {
    color: "red",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontWeight: "bold",
  },
});

const SideMenu = ({ sideMenuHeight, sideMenuOpacity }) => {
  return (
    <Animated.View
      style={{
        ...styles.menu,
        height: sideMenuHeight,
        opacity: sideMenuOpacity,
      }}
    >
      <Text style={styles.menuItem}>Perfil de Usuario</Text>
      <Text style={styles.menuItem}>Contactar Seguridad</Text>
      <Text style={styles.logOutItem}>Cerrar Sesión</Text>
    </Animated.View>
  );
};

export default SideMenu;
