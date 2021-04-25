import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Header } from "@shared-components/header/Header";
import TextWrapper from "@shared-components/text-wrapper/TextWrapper";

import {
  computerSelections,
  getTheWinner,
  selectIcon,
} from "../../utils/game-logic/gameLogic";

import styles from "./GameEndScreen.style";

type TGameEndScreen = {
  navigation: {
    navigate: (arg0: string) => void;
  };
  route: {
    params: {
      playerSelected: string;
    };
  };
};

export function GameEndScreen({ navigation, route }: TGameEndScreen) {
  const { playerSelected } = route.params;
  const computerSelected = computerSelections();
  const playerIcon = selectIcon(playerSelected);
  const computerIcon = selectIcon(computerSelected);
  const winnerMessage = getTheWinner(playerSelected, computerSelected);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.iconContainer}>
        <TextWrapper style={styles.chooseText}>You have chosen:</TextWrapper>
        <Image source={playerIcon} style={styles.iconStyle} />
      </View>
      <View style={styles.iconContainer}>
        <TextWrapper style={styles.chooseText}>Doe has chosen:</TextWrapper>
        <Image source={computerIcon} style={styles.iconStyle} />
      </View>
      <View style={styles.messageContainer}>
        <TextWrapper style={styles.winnerText}>{winnerMessage}!</TextWrapper>
      </View>
      <View style={styles.playAgainContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Start")}>
          <TextWrapper style={styles.chooseText}>Play Again</TextWrapper>
        </TouchableOpacity>
      </View>
    </View>
  );
}
