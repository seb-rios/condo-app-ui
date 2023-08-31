import React, { useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import HamburgerIcon from "../../components/animations/hamburger-icon.component";
import GenerateCodeIcon from "../../components/animations/generateCode.component";
import CodeCard from "../../components/code-card/code-card.component";
import SideMenu from "../../components/side-menu/side-menu.component";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 5,
    borderBottomWidth: 3,
    borderBottomColor: "#f0f0f0",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  usernameText: {
    color: "#000000",
    fontWeight: "normal",
  },
  userIcon: {
    width: 24,
    height: 24,
  },
  middleContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
    padding: 25,
  },
  middleText: {
    fontSize: 18,
  },
  codeTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  codeContainer: {
    display: "flex",
    gap: 10,
    width: "100%",
  },
  subnavbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 3,
    borderTopColor: "#f0f0f0",
    padding: 3,
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    marginTop: 2,
    color: "#47915A",
    fontWeight: "300",
    fontSize: 13,
    textAlign: "center",
  },
});

const HomePage = () => {
  /*TODO: 
  1. Connect with server
    Bring Code and Visit Data
    Create Visits and Generate Codes
  2. UI
    Add animations when new visit are added
    Logout Option
  3. Server todos
    Email Implementaion
      Forgot Password
      User Created
    SMS Implementation
      Send Code to Visits
  */
  const navigation = useNavigation();
  const username = "Usuario"; // Get this from your context or user state
  const sideMenuHeight = new Animated.Value(0); // initial height
  const sideMenuOpacity = new Animated.Value(0);
  const hamburgerIconRef = useRef(null);

  const toggleMenu = () => {
    const toValue = sideMenuHeight._value === 150 ? 0 : 150;

    if (toValue === 150) {
      hamburgerIconRef.current.play();
      setTimeout(() => {
        hamburgerIconRef.current.pause();
      }, 1000);
    } else {
      hamburgerIconRef.current.reset();
      hamburgerIconRef.current.play(30, 0); // play animation backwards
    }

    Animated.parallel([
      Animated.timing(sideMenuHeight, {
        toValue,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(sideMenuOpacity, {
        toValue: sideMenuHeight._value === 150 ? 0 : 1,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>
            Buenos días, <Text style={styles.usernameText}>{username}</Text>
          </Text>
          <TouchableOpacity onPress={toggleMenu}>
            <HamburgerIcon ref={hamburgerIconRef} />
          </TouchableOpacity>
        </View>

        <SideMenu
          sideMenuHeight={sideMenuHeight}
          sideMenuOpacity={sideMenuOpacity}
        />

        {/* Middle Container */}
        <View style={styles.middleContainer}>
          {/* <Text style={styles.middleText}>No hay códigos activos</Text> */}
          <Text style={styles.codeTitle}>Códigos Activos</Text>
          <ScrollView
            style={styles.codeContainer}
            contentContainerStyle={styles.codeContainer}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            directionalLockEnabled={true}
          >
            <CodeCard
              id={"117480896"}
              name={"Sebastian Rios"}
              phone={"70154930"}
              plate={"SRL234"}
            />
            <CodeCard
              id={"12345678"}
              name={"Sofia Segura"}
              phone={"88309292"}
              plate={"SMS222"}
            />
            <CodeCard
              id={"12345678"}
              name={"Sofia Segura"}
              phone={"88309292"}
              plate={"SMS222"}
            />
            <CodeCard
              id={"12345678"}
              name={"Sofia Segura"}
              phone={"88309292"}
              plate={"SMS222"}
            />
            <CodeCard
              id={"12345678"}
              name={"Sofia Segura"}
              phone={"88309292"}
              plate={"SMS222"}
            />
            <CodeCard
              id={"12345678"}
              name={"Sofia Segura"}
              phone={"88309292"}
              plate={"SMS222"}
            />
            <CodeCard
              id={"87654321"}
              name={"Maria Fernanda Luna"}
              phone={"70124525"}
              plate={"MFL345"}
            />
          </ScrollView>
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
            <GenerateCodeIcon />
            <Text
              style={{
                ...styles.navText,
                fontWeight: "bold",
                paddingTop: 30,
              }}
            >
              Crear{"\n"}Código
            </Text>
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
    </SafeAreaView>
  );
};

export default HomePage;
