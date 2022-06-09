import { StyleSheet, Text, View } from "react-native";
import dataORG from "./data";
import ItemList from "./components/ItemList";

const data = dataORG;

export default function App() {
  return (
    <View style={styles.main}>
      <ItemList data={data[0].todo} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
