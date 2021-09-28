import { Reducer } from "react";
import { flatten } from "ramda";

import * as Game from "lib/game";
import Grid, { Cell, Matrix } from "lib/Grid";
import { playSoundEffect } from "./sound";

export interface State {
  score: number;
  gameStatus: Game.GameStatus;
  gameMode: Game.Mode;
  gameLevel: Game.Level;
  activeCell?: Cell<Game.Tile>;
  grid: Matrix<Game.Tile>;
  soundEffects?: boolean;
}

export interface CellClickPayload {
  cell: Cell<Game.Tile>;
  mode?: Game.Mode;
}

export type Action<T extends string, P = undefined> = P extends undefined
  ? { type: T }
  : { type: T; payload: P };

export type Actions =
  | Action<"RESET">
  | Action<"TOGGLE_GAME_MODE">
  | Action<"TOGGLE_SOUND_EFFECTS">
  | Action<"TOGGLE_CELL", CellClickPayload>;

export const DEFAULT_GAME_LEVEL: Game.Level = "easy";

export const INITIAL_STATE: State = {
  gameStatus: "new",
  gameMode: "reveal",
  gameLevel: DEFAULT_GAME_LEVEL,
  activeCell: undefined,
  score: 0,
  grid: Game.makeNewGrid(
    { rows: 20, columns: 30 },
    Game.CHANCE_OF_MINES_PER_LEVEL[DEFAULT_GAME_LEVEL]
  ).snapshot,
  soundEffects: true,
};

export const reducer: Reducer<State, Actions> = (state, action) => {
  switch (action.type) {
    case "TOGGLE_GAME_MODE":
      return {
        ...state,
        gameMode: state.gameMode === "defuse" ? "reveal" : "defuse",
      };
    case "TOGGLE_SOUND_EFFECTS":
      return {
        ...state,
        soundEffects: !state.soundEffects,
      };
    case "RESET":
      return state.gameStatus !== "over"
        ? state
        : {
            ...INITIAL_STATE,
            grid: Game.makeNewGrid(
              { rows: 20, columns: 30 },
              Game.CHANCE_OF_MINES_PER_LEVEL[state.gameLevel]
            ).snapshot,
          };
    case "TOGGLE_CELL": {
      const { cell, mode } = action.payload;

      if (["won", "over"].includes(state.gameStatus)) {
        return state;
      }

      const { value: tile } = cell;
      const gameMode = mode ?? state.gameMode;
      const partialNextState = { ...state, activeCell: action.payload.cell };

      if (tile.revealed || tile.defused) {
        return partialNextState;
      }

      switch (gameMode) {
        case "defuse": {
          if (tile.kind !== "mine") {
            // reveal mines
            const nextGrid = Grid.from(state.grid).updateCell(cell, {
              ...tile,
              revealed: true,
            });

            if (state.soundEffects) {
              playSoundEffect("disabled");
            }

            return {
              ...partialNextState,
              grid: nextGrid.map(Game.revealMine).snapshot,
              gameStatus: "over",
            };
          }

          if (state.soundEffects) {
            playSoundEffect("defuse");
          }

          const nextGrid = Grid.from(state.grid).updateCell(cell, {
            ...tile,
            defused: !tile.defused,
          });

          const didWin = Game.didWin(nextGrid);

          if (didWin && state.soundEffects) {
            // playSoundEffect("won")
          }

          return {
            ...partialNextState,
            grid: nextGrid.snapshot,
            gameStatus: didWin ? "won" : state.gameStatus,
          };
        }
        case "reveal": {
          if (tile.kind === "mine") {
            if (state.soundEffects) {
              playSoundEffect("explosion");
            }

            // reveal mines
            return {
              ...partialNextState,
              grid: Grid.from(state.grid).map(Game.revealMine).snapshot,
              gameStatus: "over",
            };
          }

          const nextGrid = Game.getNextGrid(state.grid, cell);

          const nextScore = flatten(nextGrid.snapshot).filter(
            (c) => c.value.revealed
          ).length;

          if (state.soundEffects) {
            const scoreDelta = nextScore - state.score;
            playSoundEffect(scoreDelta > 1 ? "streak" : "reveal");
          }

          return {
            ...partialNextState,
            grid: nextGrid.snapshot,
            score: nextScore,
            gameStatus: Game.didWin(nextGrid) ? "won" : state.gameStatus,
          };
        }
      }
    }
  }
};
