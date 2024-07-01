import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import { api } from "./src/services/api";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [cep, setCep] = useState("");
  const [informations, setInformations] = useState(null);

  const inputRef = useRef(null);

  async function buscar() {
    if (cep == "") {
      alert("Digite um CEP válido");
      return;
    }
    try {
      const response = await api.get(`${cep}/json`);
      setInformations(response.data);
      Keyboard.dismiss();
    } catch (error) {
      console.log(error);
    }
  }

  function limpar() {
    setCep("");
    inputRef.current.focus();
    setInformations(null);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Digite o CEP desejado:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 24121300"
          value={cep}
          onChangeText={(text) => setCep(text)}
          ref={inputRef}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#1d75cd" }]}
          onPress={buscar}
        >
          <Text style={styles.btnText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#cd3e1d" }]}
          onPress={limpar}
        >
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {informations && (
        <View style={styles.resultado}>
          <Text style={styles.itemText}>Cep: {informations.cep}</Text>
          <Text style={styles.itemText}>
            Logradouro:{informations.logradouro}
          </Text>
          <Text style={styles.itemText}>Bairro:{informations.bairro}</Text>
          <Text style={styles.itemText}>Cidade:{informations.localidade}</Text>
          <Text style={styles.itemText}>Estado:{informations.uf}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginBottom: 15,
    marginTop: 55,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    margin: 15,
    justifyContent: "space-around",
  },
  btn: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "500",
  },
  resultado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 22,
  },
});
