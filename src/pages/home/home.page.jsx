import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import CodeCard from "../../components/code-card/code-card.component";

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
    paddingBottom: 15,
    borderBottomWidth: 3,
    borderBottomColor: "#f0f0f0",
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
    borderTopWidth: 3,
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>
            Bienvenido, <Text style={styles.usernameText}>{username}</Text>
          </Text>
          <Icon name="user" size={30} color="#47915A" />
        </View>

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
    </SafeAreaView>
  );
};

export default HomePage;
