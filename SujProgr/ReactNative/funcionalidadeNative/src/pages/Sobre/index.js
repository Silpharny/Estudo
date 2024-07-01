import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useRoute } from "@react-navigation/native"; // Importando useRoute

const Sobre = () => {
  const route = useRoute(); // Criando variável para rota de parâmetro

  return (
    <View style={styles.container}>
      <Text>Tela Sobre</Text>

      {/* Pegando parâmetros da página Home */}
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>
    </View>
  );
};

export default Sobre;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
