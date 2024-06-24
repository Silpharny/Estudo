import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { useNavigation } from "@react-navigation/native"; // Importando o arquivo responsável pela navegação

const Home = () => {
  const navigation = useNavigation(); // Criando a variável de navegação

  function irPara() {
    navigation.navigate("Sobre", { nome: "Sil", email: "sil@miranda.com" }); // Passando parâmetro para outra página
  }

  return (
    <View style={styles.container}>
      <Text>Tela Home</Text>
      <Button title="Ir para sobre" onPress={irPara} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
