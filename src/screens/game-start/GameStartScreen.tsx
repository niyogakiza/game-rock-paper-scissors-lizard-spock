import React from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import { Header } from "@shared-components/header/Header";
import TextWrapper from "@shared-components/text-wrapper/TextWrapper";

import styles from "./GameStartScreen.style";

type TGameStartProperties = {
  navigation: {
    navigate: (
      arg0: string,
      arg1: {
        playerSelected: string;
      },
    ) => void;
  };
};

export function GameStartScreen({ navigation }: TGameStartProperties) {
  return (
    <View style={styles.container}>
      <Header />
      <ImageBackground
        source={require("../../../assets/backgroundstart.png")}
        style={styles.bgImage}
      >
        <View style={styles.rockWrapper}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("End", {
                playerSelected: "Rock",
              })
            }
          >
            <View style={styles.rock} />
          </TouchableOpacity>
        </View>
        <View style={styles.spockPaperWrapper}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("End", {
                playerSelected: "Spock",
              })
            }
          >
            <View style={styles.spock} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("End", {
                playerSelected: "Paper",
              })
            }
          >
            <View style={styles.paper} />
          </TouchableOpacity>
        </View>
        <View style={styles.fillerView} />
        <View style={styles.lizardScissorsWrapper}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("End", {
                playerSelected: "Lizard",
              })
            }
          >
            <View style={styles.lizard} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("End", {
                playerSelected: "Scissors",
              })
            }
          >
            <View style={styles.scissors} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <TextWrapper style={styles.chooseText}>Choose One to Start!</TextWrapper>
    </View>
  );
}
