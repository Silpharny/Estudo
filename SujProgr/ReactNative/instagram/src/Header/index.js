import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Header() {
  const logo = require("../img/logo.png");
  const send = require("../img/send.png");

  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={send} style={styles.send} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    shadowColor: "#000",
    elevation: 2,
  },
  send: {
    width: 23,
    height: 23,
  },
});
