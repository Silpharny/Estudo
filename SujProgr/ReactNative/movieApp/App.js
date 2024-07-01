import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { useEffect, useState } from "react";
import api from "./src/services/api";

import MovieList from "./src/MovieList";

export default function App() {
  const [movies, setmovies] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadingMovie() {
      const response = await api.get("r-api/?api=filmes");
      setmovies(response.data);
      setLoading(false);
    }

    loadingMovie();
  }, []);

  if (loading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"default"} />
        <FlatList
          keyExtractor={(item) => String(item.id)}
          data={movies}
          renderItem={({ item }) => <MovieList movie={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
