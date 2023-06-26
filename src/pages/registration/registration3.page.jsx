import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

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
  optionContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const RegistrationPage3 = ({ loginData, onNext, onBack }) => {
  const [userData, setUserData] = useState({ ...loginData });
  const { password, confirmPassword, passwordError, confirmPasswordError } =
    userData;

  const handlePasswordChange = (text) => {
    let error = "";
    if (!/[A-Z]/.test(text)) {
      error = "La contraseña debe contener al menos una letra mayúscula.";
    }

    if (text.length < 8) {
      error = "La contraseña debe tener al menos 8 caracteres.";
    }
    setUserData({ ...userData, password: text, passwordError: error });
  };

  const handleConfirmPasswordChange = (text) => {
    let error = "";
    if (text !== password) {
      error = "Las contraseñas no coinciden.";
    }
    setUserData({
      ...userData,
      confirmPassword: text,
      confirmPasswordError: error,
    });
  };

  const isFormValid = () => {
    return !passwordError && !confirmPasswordError;
  };
  console.log(userData);
  return (
    <View style={styles.container}>
      <View id="title-container">
        <Text style={styles.title}>Protegé tu usuario</Text>
      </View>
      <View id="input-container" style={styles.inputContainer}>
        <TextInput
          style={[styles.input, passwordError && { borderColor: "red" }]}
          placeholder="Contraseña"
          value={password}
          onChangeText={handlePasswordChange}
        />
        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
        <TextInput
          style={[styles.input, confirmPasswordError && { borderColor: "red" }]}
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
        />
        {confirmPasswordError && (
          <Text style={styles.errorText}>{confirmPasswordError}</Text>
        )}
      </View>
      <View style={styles.optionContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, !isFormValid() && { opacity: 0.5 }]}
            onPress={isFormValid() ? onNext : undefined}
            disabled={!isFormValid()}
          >
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.loginLink}>Volver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistrationPage3;
