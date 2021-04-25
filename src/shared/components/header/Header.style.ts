import { ViewStyle, StyleSheet, TextStyle } from "react-native";

interface THeaderStyle {
  container: ViewStyle;
  gameTitle: TextStyle;
}

export default StyleSheet.create<THeaderStyle>({
  container: {
    backgroundColor: "transparent",
  },
  gameTitle: {
    fontSize: 15,
    textAlign: "center",
    color: "blue",
    paddingTop: 5,
    marginBottom: 20,
  },
});
