import React, { useState } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";

export default function app() {
  const [carroSelecionado, setCarroSelecionado] = useState(0);

  const [carros, setCarros] = useState([
    { key: 1, name: "Golf" },
    { key: 2, name: "Sandeiro" },
    { key: 3, name: "Uno" },
    { key: 4, name: "Civic" },
    { key: 5, name: "Corola" },
  ]);

  let carrosItem = carros.map((value, key) => {
    return <Picker.Item key={key} value={key} label={value.name} />;
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"} />

      <Picker
        selectedValue={carroSelecionado}
        onValueChange={(itemValue, itemIndex) => setCarroSelecionado(itemValue)}
      >
        {carrosItem}
      </Picker>

      <Text>Carro: {carros[carroSelecionado].name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
