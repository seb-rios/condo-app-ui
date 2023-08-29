import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { UserContext } from "../../context/user.content";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    width: "100%",
  },
  inputContainer: {
    width: "100%",
    gap: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: "100%",
    backgroundColor: "#f6f6f6",
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: "gray",
    borderWidth: 1,
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
  buttonContainer: {
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
  },
  button: {
    backgroundColor: "#26A65B",
    paddingVertical: 10,
    paddingHorizontal: 100,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginLink: {
    marginTop: 10,
    color: "#5db075",
  },
  loginForgotPasswordLink: {
    color: "#5db075",
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginTop: 5,
    textAlign: "right",
    width: "100%",
  },
  optionContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  visibilityToggle: {
    position: "absolute",
    right: 10,
    height: "115%",
    justifyContent: "center",
  },
  visibilityText: {
    color: "#5db075",
  },
});

const LoginPage = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [userError, setUserErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { username, password } = userData;
  const { userNameError, passwordError } = userError;

  const navigation = useNavigation();

  const handleUserNameChange = (text) => {
    setUserData({ ...userData, username: text });
  };

  const handlePasswordChange = (text) => {
    setUserData({ ...userData, password: text });
  };

  const onPressHandle = () => {
    setUserData({ username: "", password: "" });
    navigation.navigate("Register");
  };

  const isFormValid = () => {
    return username && password && !userNameError && !passwordError;
  };

  return (
    <View style={styles.container}>
      <View id="title-container">
        <Text style={styles.title}>Iniciar Sesión</Text>
      </View>
      <View id="input-container" style={styles.inputContainer}>
        <TextInput
          style={[styles.input, userNameError && { borderColor: "red" }]}
          placeholder="Usuario o Correo Electrónico"
          value={username}
          onChangeText={handleUserNameChange}
        />
        {userNameError && <Text style={styles.errorText}>{userNameError}</Text>}
        <TextInput
          style={[styles.input, passwordError && { borderColor: "red" }]}
          placeholder="Contraseña"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          style={styles.visibilityToggle}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Text style={styles.visibilityText}>
            {passwordVisible ? "Ocultar" : "Mostrar"}
          </Text>
        </TouchableOpacity>
        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginForgotPasswordLink}>
            ¿Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, !isFormValid() && { opacity: 0.5 }]}
            onPress={
              isFormValid() ? () => navigation.navigate("Home") : undefined
            }
            disabled={!isFormValid()}
          >
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onPressHandle}>
          <Text style={styles.loginLink}>¿No tienes cuenta? Crea una</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
