import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { GameStartScreen } from "@screens/game-start/GameStartScreen";

import App from "../../App";

describe.skip("Game", () => {
  it("should render correctly", () => {
    const navigate = jest.fn();
    render(<GameStartScreen navigation={{ navigate }} />);
  });

  it("renders the correct screen", async () => {
    render(
      <NavigationContainer>
        <App />
      </NavigationContainer>,
    );
  });
});
