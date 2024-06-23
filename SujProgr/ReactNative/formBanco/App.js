import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  Switch,
  View,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [sexoSelecionado, setSexoSelecionado] = useState(0);
  const [limite, setLimite] = useState(1);
  const [estudante, setEstudante] = useState(false);

  const [sexo, setSexo] = useState([
    { id: 1, sex: "Masculino" },
    { id: 2, sex: "Feminino" },
  ]);

  let sexoItem = sexo.map((item, index) => {
    return <Picker.Item key={index} value={index} label={item.sex} />;
  });

  const sendForm = () => {
    alert(`
      Nome: ${nome}
      
      Idade: ${idade} Anos
      
      Sexo: ${sexo[sexoSelecionado].sex}
      
      Seu Limite: R$ ${limite.toFixed(2)} 
      
      Estudante: ${estudante ? "Sim" : "Não"}
      
    `);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.formContainer}>
        <View>
          <Text>Nome</Text>
          <TextInput
            style={styles.textInput}
            value={nome}
            onChangeText={(text) => setNome(text)}
            placeholder="Digite seu nome"
          />
        </View>
        <View>
          <Text>Idade</Text>
          <TextInput
            style={styles.textInput}
            value={idade}
            onChangeText={(text) => setIdade(text)}
            placeholder="Digite sua idade"
          />
        </View>
        <View>
          <Text>Sexo</Text>
          <Picker
            style={styles.picker}
            selectedValue={sexoSelecionado}
            onValueChange={(itemValue, itemIndex) =>
              setSexoSelecionado(itemValue)
            }
          >
            {sexoItem}
          </Picker>
        </View>
        <View>
          <Text>Seu Limite</Text>
          <Slider
            minimumValue={1}
            maximumValue={10000}
            value={limite}
            onValueChange={(value) => setLimite(value)}
          />
          <Text style={styles.textLimite}>R$ {limite.toFixed(0)}</Text>
        </View>
        <View style={styles.switchContainer}>
          <Switch
            value={estudante}
            onValueChange={(value) => setEstudante(value)}
          />
          <Text>{estudante ? "É um estudante" : "Não é um estudante"}</Text>
        </View>
        <Button title="Enviar" onPress={sendForm} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: "90%",
    gap: 20,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#f1f1f1",
  },
  picker: {
    borderWidth: 1,
    backgroundColor: "#f9f9f9",
  },
  textLimite: {
    textAlign: "center",
    fontSize: 20,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
