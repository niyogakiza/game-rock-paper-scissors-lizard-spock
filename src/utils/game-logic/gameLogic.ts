import { ImageSourcePropType } from "react-native";

const choices: any = {
  Rock: {
    name: "Rock",
    defeats: ["Scissors", "Lizard"],
    phrases: ["crushes", "crushes"],
  },
  Paper: {
    name: "Paper",
    defeats: ["Rock", "Spock"],
    phrases: ["covers", "disproves"],
  },
  Scissors: {
    name: "Scissors",
    defeats: ["Paper", "Lizard"],
    phrases: ["cuts", "decapitates"],
  },
  Lizard: {
    name: "Lizard",
    defeats: ["Paper", "Spock"],
    phrases: ["eats", "poisons"],
  },
  Spock: {
    name: "Spock",
    defeats: ["Scissors", "Rock"],
    phrases: ["smashes", "vaporizes"],
  },
};

export const computerSelections = () => {
  return ["Rock", "Paper", "Scissors", "Lizard", "Spock"][
    Math.floor(Math.random() * 5)
  ];
};

export const selectIcon = (selected: any): ImageSourcePropType => {
  switch (selected) {
    case "Rock":
      return require("../../../assets/Rock.png");
    case "Paper":
      return require("../../../assets/Paper.png");
    case "Scissors":
      return require("../../../assets/Scissors.png");
    case "Lizard":
      return require("../../../assets/Lizard.png");
    case "Spock":
      return require("../../../assets/Spock.png");
    default:
      return require("../../../assets/error.png");
  }
};

export const getTheWinner = (playerChoice: any, computerChoice: any) => {
  computerChoice = choices[computerChoice];
  playerChoice = choices[playerChoice];

  if (playerChoice.name === computerChoice.name) {
    return "Tie";
  }

  const victory = playerChoice.defeats.indexOf(computerChoice.name) > -1;

  if (victory) {
    let victoryIndex = playerChoice.defeats.indexOf(computerChoice.name);
    return `Victory!  ${playerChoice.name} ${playerChoice.phrases[victoryIndex]} ${computerChoice.name}`;
  } else {
    let defeatIndex = computerChoice.defeats.indexOf(playerChoice.name);
    return `Defeat! ${computerChoice.name} ${computerChoice.phrases[defeatIndex]} ${playerChoice.name}`;
  }
};
