import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

export default function List({ data }) {
  function LoadingIcon(isLiked) {
    return isLiked ? require("../img/isLiked.png") : require("../img/like.png");
  }

  function showLikes(likes) {
    if (likes == 0) {
      return;
    }

    return (
      <Text style={styles.likes}>
        {likes} {likes > 1 ? "Curtidas" : "Curtida"}
      </Text>
    );
  }

  return (
    <View>
      <View style={styles.viewProfile}>
        <Image source={{ uri: data.profilePic }} style={styles.profilePic} />
        <Text style={styles.username}>{data.name}</Text>
      </View>
      <Image
        resizeMode="cover"
        style={styles.postImage}
        source={{ uri: data.postImage }}
      />

      <View style={styles.btnArea}>
        <TouchableOpacity>
          <Image source={LoadingIcon(data.isLiked)} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../img/comment.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../img/send.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {showLikes(data.numberLikes)}

      <View style={styles.principalText}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewProfile: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    paddingLeft: 10,
    fontSize: 22,
    color: "#000",
  },
  postImage: {
    height: 400,
    alignItems: "center",
  },
  btnArea: {
    flexDirection: "row",
    margin: 6,
    gap: 8,
  },
  icon: {
    width: 25,
    height: 25,
  },
  likes: {
    fontWeight: "bold",
    marginLeft: 6,
    fontSize: 15,
  },
  principalText: {
    margin: 6,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    paddingBottom: 10,
  },
});
