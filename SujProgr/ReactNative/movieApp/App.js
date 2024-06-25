import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";
import { useEffect, useState } from "react";
import api from "./src/services/api";

import MovieList from "./src/MovieList";

export default function App() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function loadingMovie() {
      const response = await api.get("r-api/?api=filmes");
      setmovies(response.data);
    }

    loadingMovie();
  }, []);

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
