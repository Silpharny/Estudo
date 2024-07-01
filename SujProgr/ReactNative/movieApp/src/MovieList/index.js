import { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";

import Detalhes from "../Detalhes";

export default function MovieList({ movie }) {
  const [isVisible, setIsVisible] = useState(false);

  function openModal() {
    setIsVisible(!isVisible);
  }

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>{movie.nome}</Text>
        <Image source={{ uri: movie.foto }} style={styles.image} />

        <View style={styles.areaBtn}>
          <TouchableOpacity style={styles.btn} onPress={openModal}>
            <Text style={styles.textBtn}>Ler mais</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal transparent={true} animationType="slide" visible={isVisible}>
        <Detalhes movie={movie} openModal={openModal} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", margin: 15, elevation: 2 },
  title: { padding: 15, fontSize: 18 },
  image: { height: 250, zIndex: 2 },
  areaBtn: { alignItems: "flex-end", marginTop: -45, zIndex: 9 },
  btn: {
    width: 100,
    backgroundColor: "#09a6ff",
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  textBtn: { color: "#fff", textAlign: "center", fontWeight: "700" },
  subTitle: {},
});
