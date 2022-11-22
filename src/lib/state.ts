import { Reducer } from "react";
import { flatten } from "ramda";

import * as Game from "lib/game";
import Grid, { Cell, Matrix } from "lib/Grid";
import { playSoundEffect } from "./sound";

export const getMineCount = (grid: Matrix<Game.Tile>) =>
  grid.reduce(
    (total, row) =>
      row.reduce(
        (mines, cell) => (cell.value.kind === "mine" ? mines + 1 : mines),
        total
      ),
    0
  );

export interface State {
  score: number;
  gameStatus: Game.GameStatus;
  gameMode: Game.Mode;
  gameLevel: Game.Level;
  boardSize: Game.BoardSize;
  mineCount: number;
  activeCell?: Cell<Game.Tile>;
  grid: Matrix<Game.Tile>;
  enableSFX?: boolean;
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

export const DEFAULT_BOARD_SIZE: Game.BoardSize = "md";

const INITIAL_GRID = Game.makeNewGrid(
  { rows: 20, columns: 30 },
  Game.CHANCE_OF_MINES_PER_LEVEL[DEFAULT_GAME_LEVEL]
).snapshot;

export const INITIAL_STATE: State = {
  gameStatus: "new",
  gameMode: "reveal",
  gameLevel: DEFAULT_GAME_LEVEL,
  boardSize: DEFAULT_BOARD_SIZE,
  activeCell: undefined,
  score: 0,
  grid: INITIAL_GRID,
  enableSFX: true,
  mineCount: getMineCount(INITIAL_GRID),
};

const isGameStatus =
  (statuses: Game.GameStatus[]) => (status: Game.GameStatus) =>
    statuses.includes(status);

const isFinalStatus = isGameStatus(["won", "over"]);

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
        enableSFX: !state.enableSFX,
      };
    case "RESET": {
      if (!isFinalStatus(state.gameStatus)) {
        return state;
      }
      const nextGrid = Game.makeNewGrid(
        Game.BOARD_SIZES[state.boardSize ?? "md"],
        Game.CHANCE_OF_MINES_PER_LEVEL[state.gameLevel ?? "easy"]
      ).snapshot;

      return {
        ...INITIAL_STATE,
        grid: nextGrid,
        mineCount: getMineCount(nextGrid),
      };
    }
    case "TOGGLE_CELL": {
      const { cell, mode } = action.payload;

      if (isFinalStatus(state.gameStatus)) {
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

            if (state.enableSFX) {
              playSoundEffect("disabled");
            }

            return {
              ...partialNextState,
              grid: nextGrid.map(Game.revealMine).snapshot,
              gameStatus: "over",
            };
          }

          if (state.enableSFX) {
            playSoundEffect("defuse");
          }

          const nextGrid = Grid.from(state.grid).updateCell(cell, {
            ...tile,
            defused: !tile.defused,
          });

          const didWin = Game.didWin(nextGrid);

          if (didWin && state.enableSFX) {
            playSoundEffect("win");
          }

          return {
            ...partialNextState,
            grid: nextGrid.snapshot,
            gameStatus: didWin ? "won" : state.gameStatus,
            score: state.score + 1,
          };
        }
        case "reveal": {
          if (tile.kind === "mine") {
            if (state.enableSFX) {
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
            (x) => x.value.revealed
          ).length;

          const didWin = Game.didWin(nextGrid);

          if (state.enableSFX) {
            const scoreDelta = nextScore - state.score;
            playSoundEffect(
              didWin ? "win" : scoreDelta > 1 ? "streak" : "reveal"
            );
          }

          return {
            ...partialNextState,
            grid: nextGrid.snapshot,
            score: nextScore,
            gameStatus: didWin ? "won" : state.gameStatus,
          };
        }
      }
    }
  }
};
