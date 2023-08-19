import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  usernameText: {
    color: "#5db075",
  },
  userIcon: {
    width: 24,
    height: 24,
  },
  middleTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  middleText: {
    fontSize: 18,
  },
  subnavbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    padding: 10,
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    marginTop: 5,
    color: "#47915A",
    fontWeight: "400",
    fontSize: 13,
  },
});

const HomePage = () => {
  const navigation = useNavigation();
  const username = "Usuario"; // Get this from your context or user state

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>
          Bienvenido, <Text style={styles.usernameText}>{username}</Text>
        </Text>
        <Icon name="user" size={30} color="#47915A" />
      </View>

      {/* Middle Container */}
      <View style={styles.middleTextContainer}>
        <Text style={styles.middleText}>No hay códigos activos</Text>
      </View>

      {/* Subnavbar */}
      <View style={styles.subnavbar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Codes")}
        >
          <Icon name="undo" size={30} color="#47915A" />
          <Text style={styles.navText}>Historial</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Visits")}
        >
          <Icon name="heart" size={30} color="#47915A" />
          <Text style={styles.navText}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("CreateCode")}
        >
          <Icon name="plus-circle" size={30} color="#47915A" />
          <Text style={styles.navText}>Crear Código</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Icon name="home" size={30} color="#47915A" />
          <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Settings")}
        >
          <Icon name="cog" size={30} color="#47915A" />
          <Text style={styles.navText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;
