import assoc from "ramda/es/assoc";

import Grid, { Matrix, Cell, Dimensions, FillFn } from "./Grid";

export type TileKind = "safe" | "empty" | "mine";

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

export const getNextGrid = (matrix: Matrix<Tile>, cellClicked: Cell<Tile>) => {
  const nextGrid = Grid.from(matrix);

  const { value: tile } = cellClicked;

  // reveal clicked tile
  nextGrid.updateCell(cellClicked, revealTile(tile));

  if (tile.kind !== "safe") {
    return nextGrid;
  }

  nextGrid.getCellNeighbors(cellClicked).forEach((neighbourCell) => {
    const { value: neighbour } = neighbourCell;

    // skip revealed tiles
    if (neighbour.revealed) {
      return;
    }

    switch (neighbour.kind) {
      case "empty":
        nextGrid.updateCell(neighbourCell, revealTile(neighbour));
        break;
      case "safe":
        return getNextGrid(nextGrid.snapshot, neighbourCell);
    }
  });

  return nextGrid;
};

export const isMine = (cell: Cell<Tile>) => cell.value.kind === "mine";

export const makeNewGrid = (dimensions: Dimensions, chanceOfMines: number) => {
  const fill: FillFn<Tile> = () => ({
    kind: Math.random() >= chanceOfMines / 100 ? "mine" : "empty",
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

export const didWin = (grid: Grid<Tile>) => {
  const cells = grid.snapshot.flat();

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
};
