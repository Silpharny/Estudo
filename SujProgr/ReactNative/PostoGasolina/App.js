import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Modal,
} from "react-native";
import ModalDetails from "./src/Modal";

export default function App() {
  const [alcool, setAlcool] = useState(null);
  const [gasolina, setGasolina] = useState(null);

  const [resultado, setResultado] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  function isModal() {
    if (!isOpen) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(!isOpen);
      setAlcool("");
      setGasolina("");
    }
  }

  function calcular() {
    let calc = alcool / gasolina;

    if (alcool === "" || gasolina === "") {
      return;
    } else {
      if (calc < 0.7) {
        setResultado("A recomendação é abastecer com àlcool");
      }
      if (calc > 0.7) {
        setResultado("A recomendação é abastecer com gasolina");
      }

      Keyboard.dismiss();
      isModal();
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerArea}>
        <Image source={require("./assets/logo.png")} style={styles.img} />
        <Text style={styles.title}>Qual a melhor opção?</Text>
        <View style={styles.inputArea}>
          <Text style={styles.subtitle}>Álcool (preço por litro):</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 4.90"
            keyboardType="numeric"
            value={alcool}
            onChangeText={(text) => setAlcool(text)}
          />
          <Text style={styles.subtitle}>Gasolina (preço por litro):</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 9.10"
            keyboardType="numeric"
            value={gasolina}
            onChangeText={(text) => setGasolina(text)}
          />

          <TouchableOpacity style={styles.btnArea} onPress={calcular}>
            <Text style={styles.btnText}>Calcular</Text>
          </TouchableOpacity>
        </View>

        <Modal animationType="slide" visible={isOpen}>
          <ModalDetails
            isModal={isModal}
            resultado={resultado}
            alcool={alcool}
            gasolina={gasolina}
          />
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000410",
    alignItems: "center",
    justifyContent: "center",
  },
  containerArea: {
    width: "90%",
    gap: 20,
  },
  img: {
    width: 120,
    height: 120,
    alignSelf: "center",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 24,
  },
  inputArea: {
    gap: 5,
  },
  subtitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 5,
  },
  btnArea: {
    backgroundColor: "#f15946",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 8,
  },
  btnText: {
    fontWeight: "800",
    fontSize: 21,
    color: "#fff",
  },
});
