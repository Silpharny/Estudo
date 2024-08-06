import { View, Text, StyleSheet } from "react-native"

export function Title({ title }: { title: string }) {
  return <Text style={styles.text}>{title}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginTop: 14,
    fontWeight: "bold",
    color: "red",
  },
})
