import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import { db } from "./src/firebaseConfig";
import {
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useState("Carregando...");
  const [inputName, setInputName] = useState("");

  useEffect(() => {
    async function getData() {
      const usersRef = collection(db, "users");

      getDocs(usersRef).then((snapshot) => {
        let list = [];
        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            name: doc.data().name,
          });
        });
      });
    }

    getData();
  }, []);

  async function handleRegister() {
    await addDoc(collection(db, "users"), {
      name: inputName,
    });

    setInputName("");
  }

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <TextInput
        style={styles.input}
        value={inputName}
        onChangeText={(text) => setInputName(text)}
      />
      <Button title="adicionar" onPress={handleRegister} />
      <StatusBar style="auto" />
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
  input: {
    elevation: 1,
    width: 100,
    marginVertical: 10,
    padding: 10,
  },
});
