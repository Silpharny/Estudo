import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { PickerItem } from "./src/Picker";

import { api } from "./src/services/api";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const [coinBValue, setCoinBValue] = useState(0);
  const [coinValue, setCoinValue] = useState(null);
  const [convertValue, setConvertValue] = useState(0);

  useEffect(() => {
    async function loadingMoney() {
      const response = await api.get("all");
      let arrayMoney = [];
      Object.keys(response.data).map((key) => {
        arrayMoney.push({
          key: key,
          label: key,
          value: key,
        });
      });
      setCoin(arrayMoney);
      setSelectedCoin(arrayMoney[0].key);
      setLoading(false);
    }
    loadingMoney();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#101215",
        }}
      >
        <ActivityIndicator color="#fff" size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"} />
      <View style={styles.areaMoeda}>
        <Text style={styles.title}>Selecione sua moeda</Text>
        <PickerItem
          coins={coin}
          selectedCoin={selectedCoin}
          onChange={(coin) => setSelectedCoin(coin)}
        />
      </View>

      <View style={styles.areaValor}>
        <Text style={styles.title}>Digite um valor para converter</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Ex: 1.50"
          style={styles.input}
          value={coinValue}
          onChangeText={(value) => setCoinBValue(value)}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Converter</Text>
      </TouchableOpacity>

      {convertValue !== 0 && (
        <View style={styles.areaAnswer}>
          <Text style={styles.convertValue}>3 BTC</Text>
          <Text style={{ fontSize: 18, margin: 8, color: "#000" }}>
            Corresponde à:
          </Text>
          <Text style={styles.convertValue}>R$ 100,00</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101215",
    padding: 40,
    alignItems: "center",
  },
  areaMoeda: {
    backgroundColor: "#f9f9f9",
    width: "90%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 8,
    marginBottom: 2,
  },
  title: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
    paddingLeft: 5,
    paddingTop: 5,
  },
  areaValor: {
    width: "90%",
    backgroundColor: "#f9f9f9",
    paddingTop: 8,
    paddingBottom: 8,
  },
  input: {
    width: "100%",
    padding: 8,
    fontSize: 18,
    color: "#000",
  },
  button: {
    width: "90%",
    backgroundColor: "#fb4b57",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginTop: 2,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  areaAnswer: {
    width: "90%",
    backgroundColor: "#fff",
    marginTop: 34,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  convertValue: {
    fontSize: 28,
    color: "#000",
    fontWeight: "bold",
  },
});
