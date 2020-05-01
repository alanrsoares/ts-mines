import { Reducer } from "react";

import * as Game from "lib/game";
import Grid, { Cell, Matrix } from "lib/Grid";

export interface State {
  score: number;
  gameStatus: Game.GameStatus;
  gameMode: Game.Mode;
  activeCell?: Cell<Game.Tile>;
  grid: Matrix<Game.Tile>;
}

export interface CellClickPayload {
  cell: Cell<Game.Tile>;
  mode?: Game.Mode;
}

export type Action =
  | { type: "RESET" }
  | { type: "TOGGLE_GAME_MODE" }
  | {
      type: "TOGGLE_CELL";
      payload: CellClickPayload;
    };

export const INITIAL_STATE: State = {
  gameStatus: "new",
  gameMode: "reveal",
  activeCell: undefined,
  score: 0,
  grid: Game.makeNewGrid({ rows: 20, columns: 30 }, 80).snapshot,
};

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "TOGGLE_GAME_MODE":
      return {
        ...state,
        gameMode: state.gameMode === "defuse" ? "reveal" : "defuse",
      };
    case "RESET":
      return state.gameStatus !== "over"
        ? state
        : {
            ...INITIAL_STATE,
            grid: Game.makeNewGrid({ rows: 20, columns: 30 }, 80).snapshot,
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

            return {
              ...partialNextState,
              grid: nextGrid.map(Game.revealMine).snapshot,
              gameStatus: "over",
            };
          }

          const nextGrid = Grid.from(state.grid).updateCell(cell, {
            ...tile,
            defused: !tile.defused,
          });

          return {
            ...partialNextState,
            grid: nextGrid.snapshot,
            gameStatus: Game.didWin(nextGrid) ? "won" : state.gameStatus,
          };
        }
        case "reveal": {
          if (tile.kind === "mine") {
            // reveal mines
            return {
              ...partialNextState,
              grid: Grid.from(state.grid).map(Game.revealMine).snapshot,
              gameStatus: "over",
            };
          }

          const nextGrid = Game.getNextGrid(state.grid, cell);
          const nextScore = nextGrid.snapshot
            .flat()
            .filter((c) => c.value.revealed).length;

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
