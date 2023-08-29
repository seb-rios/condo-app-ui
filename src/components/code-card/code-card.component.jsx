import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#26A65B",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 350,
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    maxWidth: 250,
  },
  primaryInfoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    maxWidth: 250,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  secondaryContainer: {
    display: "flex",
  },
  primaryCardText: {
    color: "white",
    fontWeight: "bold",
  },
  cardNameText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    width: 175,
  },
  cardText: {
    color: "#D0D0D0",
    fontWeight: "bold",
    padding: 4,
    flexWrap: "wrap",
  },
});

const CodeCard = ({ name, id, phone, plate }) => {
  return (
    <View style={styles.card}>
      <View style={styles.mainContainer}>
        <Icon name="id-card" size={25} color="white" />
        <View style={styles.primaryInfoContainer}>
          <Text
            style={styles.cardNameText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {name}
          </Text>
          <Text style={styles.primaryCardText}>{id}</Text>
        </View>
      </View>
      <View style={styles.secondaryContainer}>
        <View style={styles.infoContainer}>
          <Icon name="phone" size={20} color="#D0D0D0" />
          <Text style={styles.cardText}>{phone}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon name="car" size={20} color="#D0D0D0" />
          <Text style={styles.cardText}>{plate}</Text>
        </View>
      </View>
    </View>
  );
};

export default CodeCard;
