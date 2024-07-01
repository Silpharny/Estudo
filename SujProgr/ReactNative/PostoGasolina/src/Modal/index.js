import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ModalDetails({ isModal, resultado, alcool, gasolina }) {
  return (
    <View style={styles.container}>
      <View style={styles.viewArea}>
        <Image source={require("../../assets/gas.png")} style={styles.img} />
        <Text style={styles.title}>{resultado}</Text>
        <Text style={[styles.title, { color: "#fff" }]}>Com os preços:</Text>
        <Text style={styles.textResult}>Àlcool: R${alcool}</Text>
        <Text style={styles.textResult}>Gasolina: R${gasolina}</Text>
        <TouchableOpacity style={styles.btnArea} onPress={isModal}>
          <Text style={styles.btnText}>Calcular novamente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewArea: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 120,
    height: 120,
  },
  title: {
    color: "#00ff00",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 24,
  },
  textResult: {
    fontSize: 16,
  },
  btnArea: {
    width: "90%",
    borderColor: "#f15946",
    borderWidth: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 8,
    padding: 8,
  },
  btnText: {
    fontWeight: "400",
    fontSize: 16,
    color: "#f15946",
  },
});
