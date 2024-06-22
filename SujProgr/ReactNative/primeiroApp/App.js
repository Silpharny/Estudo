import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

function app() {
  const [img, setImg] = useState(require("./src/biscoito.png"));
  const [frase, setFrase] = useState("");

  let frases = [
    '"Todos estamos matriculados na escola da vida, onde o mestre é o tempo"',
    '"Foi a possibilidade de escuridão que fez o dia parecer tão brilhante"',
    '"Liberdade é pouco. O que eu desejo ainda não tem nome"',
    '"A maior riqueza da vida é ser feliz com pouco"',
    '"Cada um é tão feliz quanto acredita ser"',
    '"Sempre parece impossível até que seja feito"',
    '"O que fazemos agora ecoa na eternidade"',
    '"Não tenhamos pressa, mas não percamos tempo"',
    '"A persistência é o caminho do êxito"',
  ];

  const quebraBiscoito = () => {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);

    setFrase(frases[numeroAleatorio]);
    setImg(require("./src/biscoitoAberto.png"));
  };

  const reiniciarBiscoito = () => {
    setFrase("");
    setImg(require("./src/biscoito.png"));
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />
      <Text style={styles.text}>{frase}</Text>
      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.botao, { marginTop: 15, borderColor: "#121212" }]}
        onPress={reiniciarBiscoito}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, { color: "#121212" }]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: "#dd7b22",
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});

export default app;
