import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Detalhes({ openModal, movie }) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btn} onPress={openModal}>
          <Text style={styles.textBtn}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{movie.nome}</Text>
        <Text style={styles.subtitle}>Sinopse:</Text>
        <Text style={styles.text}>{movie.sinopse}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  modalContainer: {
    width: "98%",
    height: "80%",
    backgroundColor: "#121212",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  btn: {
    backgroundColor: "#e52246",
    padding: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  textBtn: {
    fontSize: 16,
    color: "#fff",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    padding: 10,
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10,
  },
  text: {
    color: "#fff",
    marginLeft: 10,
    marginRight: 10,
  },
});
