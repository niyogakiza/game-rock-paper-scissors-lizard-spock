import { View, Text } from "react-native";
import React from "react";

import styles from "./Header.style";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.gameTitle}>
        Rock✊ Paper✋ Scissors✂️ Lizard️🦎 Spock🖖
      </Text>
    </View>
  );
}
