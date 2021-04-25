import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";

interface Style {
  container: ViewStyle;
  chooseText: TextStyle;
  iconContainer: ViewStyle;
  iconStyle: ImageStyle;
  messageContainer: ViewStyle;
  winnerText: TextStyle;
  playAgainContainer: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  chooseText: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    textAlign: "center",
    color: "#262262",
    marginTop: 5,
    marginBottom: 5,
  },
  iconContainer: {
    alignItems: "center",
    marginTop: 28,
  },
  iconStyle: {},
  playAgainContainer: {
    backgroundColor: "lightblue",
    borderRadius: 5,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginTop: 20,
    padding: 16,
  },
  messageContainer: {
    marginTop: 14,
  },
  winnerText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "center",
    color: "#262262",
    marginTop: 10,
    marginBottom: 10,
  },
});
