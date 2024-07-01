import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";

let timer = null;

let segundo = 0;
let minuto = 0;
let hora = 0;

export default function App() {
  const [numero, setNumero] = useState(0);
  const [botao, setBotao] = useState("Iniciar");
  const [ultimo, setUltimo] = useState(null);

  const iniciar = () => {
    if (timer !== null) {
      //Aqui vai parar o timer
      clearInterval(timer);
      timer = null;
      setBotao("Iniciar");
    } else {
      // Começar a girar o timer
      timer = setInterval(() => {
        segundo++;
        if (segundo == 60) {
          segundo = 0;
          minuto++;
        }
        if (minuto == 60) {
          minuto = 0;
          hora++;
        }

        let format =
          (hora < 10 ? "0" + hora : hora) +
          ":" +
          (minuto < 10 ? "0" + minuto : minuto) +
          ":" +
          (segundo < 10 ? "0" + segundo : segundo);

        setNumero(format);
      }, 1000);
      setBotao("Parar");
    }
  };

  const limpar = () => {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }

    setUltimo(numero);
    setNumero(0);
    segundo = 0;
    minuto = 0;
    hora = 0;

    setBotao("Iniciar");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.img} source={require("./src/crono.png")} />

      <Text style={styles.timer}>{numero}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnText}>{botao}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.result}>
        <Text style={styles.finalText}>
          {ultimo ? `Úiltimo tempo: ${ultimo}` : ""}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 250,
    height: 284,
  },
  timer: {
    marginTop: -100,
    fontSize: 45,
    fontWeight: "bold",
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 80,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  result: {
    marginTop: 60,
  },
  finalText: {
    fontSize: 30,
    fontStyle: "italic",
  },
});
