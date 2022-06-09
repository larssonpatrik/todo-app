import { StyleSheet, Text, View } from "react-native";
import Item from "./Item";

export default function ItemList(props) {
  return props.data.map((item) => {
    return (
      <View style={styles.item}>
        <Item title={item.title} time={item.time} />
      </View>
    );
  });
}

const styles = StyleSheet.create({
  item: {
    display: "flex",
    marginBottom: 25,
  },
});
