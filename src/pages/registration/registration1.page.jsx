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

const RegistrationPage1 = ({ onNext }) => {
  const [userData, setUserData] = useState({});
  const { name, email, phone, nameError, emailError, phoneError } = userData;

  const handleNameChange = (text) => {
    let error = "";
    if (text.length > 20) {
      error = "Nombre: No más de 20 letras";
    }
    setUserData({ ...userData, name: text, nameError: error });
  };

  const handleEmailChange = (text) => {
    let error = "";
    if (!isValidEmail(text)) {
      error = "Dirección de correo electrónico inválida";
    }
    setUserData({ ...userData, email: text, emailError: error });
  };

  const handlePhoneChange = (text) => {
    let error = "";
    if (!isValidPhone(text)) {
      error = "Número de teléfono inválido";
    }
    setUserData({ ...userData, phone: text, phoneError: error });
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    // Numeric phone number validation
    const phoneRegex = /^\d{0,8}$/;
    return phoneRegex.test(phone);
  };

  const isFormValid = () => {
    return !nameError && !emailError && !phoneError;
  };

  console.log(userData);

  return (
    <View style={styles.container}>
      <View id="title-container">
        <Text style={styles.title}>Regístrate</Text>
      </View>
      <View id="input-container" style={styles.inputContainer}>
        <TextInput
          style={[styles.input, nameError && { borderColor: "red" }]}
          placeholder="Nombre Completo"
          value={name}
          onChangeText={handleNameChange}
        />
        {nameError && <Text style={styles.errorText}>{nameError}</Text>}
        <TextInput
          style={[styles.input, emailError && { borderColor: "red" }]}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={handleEmailChange}
        />
        {emailError && <Text style={styles.errorText}>{emailError}</Text>}
        <TextInput
          style={[styles.input, phoneError && { borderColor: "red" }]}
          placeholder="Teléfono"
          value={phone}
          onChangeText={handlePhoneChange}
          keyboardType="numeric"
        />
        {phoneError && <Text style={styles.errorText}>{phoneError}</Text>}
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
        <Text style={styles.loginLink}>¿Ya tienes cuenta?</Text>
      </View>
    </View>
  );
};

export default RegistrationPage1;