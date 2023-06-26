import { useState } from "react";
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
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#666666",
  },
  inputContainer: {
    width: "100%",
    gap: 10,
  },
  input: {
    height: 150,
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

const RegistrationPage2 = ({ loginData, onNext, onBack }) => {
  const [userData, setUserData] = useState({ ...loginData });
  const { houseInfo, houseInfoError } = userData;

  const handleHouseInfo = (text) => {
    let error = "";
    if (text.length > 40) {
      error = "No más de 40 letras";
    }
    setUserData({ ...userData, houseInfo: text, houseInfoError: error });
  };

  const isFormValid = () => {
    return !houseInfoError;
  };
  console.log(userData);
  return (
    <View style={styles.container}>
      <View id="title-container">
        <Text style={styles.title}>Dirección de Hogar</Text>
      </View>
      <View id="input-container" style={styles.inputContainer}>
        <Text style={styles.subTitle}>
          Cual es tu casa dentro del condominio
        </Text>
        <TextInput
          style={[styles.input, houseInfoError && { borderColor: "red" }]}
          placeholder="Ejemplo: Casa 12 Etapa 2"
          value={houseInfo}
          onChangeText={handleHouseInfo}
          multiline
          numberOfLines={4}
          textAlignVertical="center"
        />
      </View>
      <View style={styles.optionContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, !isFormValid() && { opacity: 0.5 }]}
            onPress={isFormValid() ? onNext : onBack}
            disabled={!isFormValid()}
          >
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.loginLink}>Volver?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistrationPage2;
