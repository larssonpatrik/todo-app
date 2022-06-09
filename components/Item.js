import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

export default function Item(props) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.clickables}>
          <TouchableHighlight onPress={() => alert("pressed X")}>
            <Image
              source={require("../assets/images/Cross.png")}
              style={styles.cross}
            ></Image>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => alert("pressed CHECK")}>
            <Image
              source={require("../assets/images/Check.png")}
              style={styles.check}
            ></Image>
          </TouchableHighlight>
        </View>
      </View>
      <Text>{props.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 250,
  },
  clickables: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cross: {
    height: 17,
    width: 17,
    marginRight: 10,
  },
  check: {
    height: 17,
    width: 24.3,
  },
});
