import { createContainer } from "unstated-next";
import { useGameState } from "./hooks";

export const Game = createContainer(useGameState);
