import { flatten, assoc } from "ramda";

import Grid, { Matrix, Cell, Dimensions, FillFn } from "./Grid";

export const CHANCE_OF_MINES_PER_LEVEL = {
  easy: 15,
  medium: 20,
  hard: 25,
  ultra: 30,
  god: 35,
} as const;

export type Level = keyof typeof CHANCE_OF_MINES_PER_LEVEL;

export const NEXT_LEVEL: Record<Level, Level> = {
  easy: "medium",
  medium: "hard",
  hard: "ultra",
  ultra: "god",
  god: "easy",
};

export type TileKind = "safe" | "empty" | "mine";

const getDimensions = (rows: number) => ({
  rows,
  columns: Math.floor(rows * 1.5),
});

export const BOARD_SIZES = {
  // increment following the same proportion
  xs: getDimensions(10), // 10 x 15
  sm: getDimensions(15), // 15 x 22.5
  md: getDimensions(20), // 20 x 30
  lg: getDimensions(25), // 25 x 37.5
  xl: getDimensions(30), // 30 x 45
} as const;

export type BoardSize = keyof typeof BOARD_SIZES;

export const NEXT_BOARD_SIZE: Record<BoardSize, BoardSize> = {
  xs: "sm",
  sm: "md",
  md: "lg",
  lg: "xl",
  xl: "xs",
};

export type Tile = {
  kind: TileKind;
  revealed: boolean;
  surroundingMines: number;
  defused?: boolean;
};

export type GameStatus = "new" | "over" | "won";

export type Mode = "reveal" | "defuse";

export const revealTile = (tile: Tile): Tile => assoc("revealed", true, tile);

export const revealMine = (tile: Tile) =>
  tile.kind === "mine" ? revealTile(tile) : tile;

export function getNextGrid(matrix: Matrix<Tile>, cellClicked: Cell<Tile>) {
  const nextGrid = Grid.from(matrix);

  const { value: tile } = cellClicked;

  // reveal clicked tile
  nextGrid.updateCell(cellClicked, revealTile(tile));

  if (tile.kind !== "safe") {
    return nextGrid;
  }

  nextGrid.getCellNeighbors(cellClicked).forEach((neighborCell) => {
    const { value: neighbor } = neighborCell;

    // skip revealed tiles
    if (neighbor.revealed) {
      return;
    }

    switch (neighbor.kind) {
      case "empty": {
        nextGrid.updateCell(neighborCell, revealTile(neighbor));
        break;
      }
      case "safe":
        return getNextGrid(nextGrid.snapshot, neighborCell);
    }
  });

  return nextGrid;
}

export const isMine = (cell: Cell<Tile>) => cell.value.kind === "mine";

export const makeNewGrid = (dimensions: Dimensions, chanceOfMines: number) => {
  const fill: FillFn<Tile> = () => ({
    kind: Math.random() >= chanceOfMines / 100 ? "empty" : "mine",
    surroundingMines: 0,
    revealed: false,
  });

  return Grid.make<Tile>(dimensions, fill).map<Tile>((tile, cell, self) => {
    if (tile.kind !== "mine") {
      const neighbors = self.getCellNeighbors(cell);
      const mines = neighbors.filter(isMine);
      const surroundingMines = mines.length;

      return {
        ...tile,
        surroundingMines,
        kind: surroundingMines ? "empty" : "safe",
      };
    }

    return tile;
  });
};

export function didWin(grid: Grid<Tile>) {
  const cells = flatten(grid.snapshot);

  const summary = cells.reduce(
    (acc, cell) => ({
      flagged: cell.value.defused ? acc.flagged + 1 : acc.flagged,
      revealed: cell.value.revealed ? acc.revealed + 1 : acc.revealed,
      mines: cell.value.kind === "mine" ? acc.mines + 1 : acc.mines,
    }),
    { flagged: 0, revealed: 0, mines: 0 }
  );

  return (
    summary.mines === summary.flagged &&
    summary.revealed + summary.flagged === cells.length
  );
}
