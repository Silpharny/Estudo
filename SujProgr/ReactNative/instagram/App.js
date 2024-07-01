import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";

import { useState } from "react";
import Header from "./src/Header";
import List from "./src/List";

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: 1,
      name: "Tony Stark",
      description: "Mais um dia resolvendo bugs",
      profilePic: "https://pbs.twimg.com/media/EHYxffsUcAAtb4-.jpg",
      postImage:
        "https://disneyplusbrasil.com.br/wp-content/uploads/2021/03/Tony-Stark-Cancelado.jpg",
      isLiked: true,
      numberLikes: 1,
    },
    {
      id: 2,
      name: "Batman",
      description: "Terminando mais um dia de trabalho",
      profilePic:
        "https://conteudo.imguol.com.br/c/colunas/fa/2022/02/28/batsy-abre-1-1646038184536_v2_4x3.jpg",
      postImage:
        "https://midias.correiobraziliense.com.br/_midias/jpg/2023/08/21/1200x801/1_o_batman_easy_resize_com_-29069579.jpg?20230821092600?20230821092600",
      isLiked: false,
      numberLikes: 0,
    },
    {
      id: 3,
      name: "Hulk",
      description: "Hulk Smash!!!!",
      profilePic:
        "https://i2.wp.com/multiversitystatic.s3.amazonaws.com/uploads/2023/06/Hulk-Marvel-Studios-10-Years-poster-featured.jpg?fit=1000%2C1000",
      postImage:
        "https://www.mundodeportivo.com/alfabeta/hero/2022/08/Definitivamente-Hulk-enojado-es-mucho-mas-poderoso-que-su-prima.jpg?width=768&aspect_ratio=16:9&format=nowebp",
      isLiked: true,
      numberLikes: 31,
    },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"} />
      <Header />

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={feed}
        renderItem={({ item }) => <List data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
