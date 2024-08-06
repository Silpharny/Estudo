import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Count</Text>

      <View style={styles.counterArea}>
        <TouchableOpacity onPress={() => setCount(count - 1)}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text testID="counter">{count}</Text>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginTop: 14,
    fontWeight: "bold",
  },
  counterArea: {
    flexDirection: "row",
    gap: 14,
    marginHorizontal: 14,
  },
})
