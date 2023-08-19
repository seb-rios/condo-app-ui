import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { UserContext } from "../../context/user.content";
import SuccessMessage from "../../components/animations/successMsg.component";

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
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  visibilityToggle: {
    position: "absolute",
    right: 10,
    height: "100%",
    justifyContent: "center",
  },
  visibilityText: {
    color: "#5db075",
  },
});

const RegistrationPage3 = ({ onNext, onBack }) => {
  const { userData, setUserData } = useContext(UserContext);
  const [userError, setUserErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { password, confirmPassword } = userData;
  const { passwordError, confirmPasswordError } = userError;

  const handlePasswordChange = (text) => {
    let error = "";
    if (!/[A-Z]/.test(text)) {
      error = "La contraseña debe contener al menos una letra mayúscula.";
    }

    if (text.length < 8) {
      error = "La contraseña debe tener al menos 8 caracteres.";
    }
    setUserData({ ...userData, password: text });
    setUserErrors({ ...userError, passwordError: error });
  };

  const handleConfirmPasswordChange = (text) => {
    let error = "";
    if (text !== password) {
      error = "Las contraseñas no coinciden.";
    }
    setUserData({
      ...userData,
      confirmPassword: text,
    });
    setUserErrors({ ...userError, confirmPasswordError: error });
  };

  const handleUserCreation = () => {
    if (isFormValid()) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  const isFormValid = () => {
    return (
      password && confirmPassword && !passwordError && !confirmPasswordError
    );
  };

  return (
    <View style={styles.container}>
      {showSuccess ? (
        <SuccessMessage type="fade" />
      ) : (
        <>
          <View id="title-container">
            <Text style={styles.title}>Protegé tu usuario</Text>
          </View>
          <View id="input-container" style={styles.inputContainer}>
            <View style={{ position: "relative", width: "100%" }}>
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
            </View>
            {passwordError && (
              <Text style={styles.errorText}>{passwordError}</Text>
            )}
            <TextInput
              style={[
                styles.input,
                confirmPasswordError && { borderColor: "red" },
              ]}
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
              secureTextEntry={!passwordVisible}
            />
            {confirmPasswordError && (
              <Text style={styles.errorText}>{confirmPasswordError}</Text>
            )}
          </View>
          <View style={styles.optionContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, !isFormValid() && { opacity: 0.5 }]}
                onPress={handleUserCreation}
                disabled={!isFormValid()}
              >
                <Text style={styles.buttonText}>Crear Usuario</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={onBack}>
              <Text style={styles.loginLink}>Volver</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default RegistrationPage3;
