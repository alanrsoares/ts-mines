import { createContainer } from "unstated-next";
import { useGameState } from "./hooks";

export const {
  Provider: GameStateProvider,
  useContainer: useGameStateContainer,
} = createContainer(useGameState);
