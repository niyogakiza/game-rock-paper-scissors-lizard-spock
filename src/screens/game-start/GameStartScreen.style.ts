import {
  Dimensions,
  ViewStyle,
  TextStyle,
  StyleSheet,
  ImageStyle,
} from "react-native";

interface Style {
  container: ViewStyle;
  bgImage: ImageStyle;
  rockWrapper: ViewStyle;
  rock: ViewStyle;
  spockPaperWrapper: ViewStyle;
  spock: ViewStyle;
  paper: ViewStyle;
  fillerView: ViewStyle;
  lizardScissorsWrapper: ViewStyle;
  lizard: ViewStyle;
  scissors: ViewStyle;
  chooseText: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    maxWidth: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.7,
    flexDirection: "row",
    alignContent: "stretch",
  },
  rock: {
    height: 130,
    width: 120,
    justifyContent: "center",
    marginBottom: -10,
  },
  spock: {
    height: 140,
    width: 120,
  },
  paper: {
    height: 140,
    width: 120,
  },
  lizard: {
    height: 120,
    width: 140,
  },
  scissors: {
    height: 120,
    width: 140,
  },
  rockWrapper: {
    alignItems: "center",
    marginTop: Dimensions.get("window").height * 0.07,
  },
  spockPaperWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lizardScissorsWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  fillerView: {
    height: Dimensions.get("window").height * 0.05,
  },
  chooseText: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 5,
  },
});
