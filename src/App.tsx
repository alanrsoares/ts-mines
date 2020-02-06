import React, { useState, useCallback } from "react";
import { assoc } from "ramda";

import Grid, { Cell, FillFn, Matrix } from "lib/Grid";
import styled, { getColor, getRadius, getFontFamily } from "ui/styled";
import { AppHeader } from "ui/components";

import mine from "assets/mine.svg";

export type TileKind = "safe" | "empty" | "mine";

export type Tile = {
  kind: TileKind;
  revealed: boolean;
  surroundingMines: number;
};

const rand = Math.random;

const Root = styled.div`
  font-family: ${getFontFamily("default")};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GridRow = styled.div`
  display: flex;
`;

interface GridTileProps {
  kind?: TileKind;
  active?: boolean;
  revealed?: boolean;
  onClick?: () => void;
}

const GridTileContainer = styled.div<GridTileProps>`
  width: 1.6em;
  height: 1.6em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px ${getColor(p => (!p.revealed ? "black" : "gray"))};
  border-radius: ${getRadius("lg")};
  margin: 0.1em;
  padding: 0.1em;
  background: ${getColor(p =>
    p.revealed ? (p.kind === "mine" && p.active ? "negative" : "white") : "gray"
  )};
  color: ${getColor(p =>
    p.children === 0 ? "white" : p.revealed ? "black" : "gray"
  )};
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  user-select: none;
`;

const Mine = styled.img`
  width: 1.4em;
  height: 1.4em;
`;

const GridTile: React.FC<GridTileProps> = props => {
  return (
    <GridTileContainer onClick={props.onClick} {...props} active={props.active}>
      {props.revealed ? props.children : null}
    </GridTileContainer>
  );
};

const fill: FillFn<Tile> = () => ({
  kind: rand() >= 0.8 ? "mine" : "empty",
  surroundingMines: 0,
  revealed: false
});

const dimensions = { rows: 20, columns: 30 };

const isMine = (cell: Cell<Tile>) => cell.value.kind === "mine";

const seed = Grid.make<Tile>(dimensions, fill).map<Tile>((tile, cell, self) => {
  if (tile.kind !== "mine") {
    const surroundingMines = self.getCellNeighbours(cell).filter(isMine).length;

    return {
      ...tile,
      surroundingMines,
      kind: surroundingMines ? "empty" : "safe"
    };
  }

  return tile;
});

type GameStatus = "new" | "over" | "won";

const getNextGrid = (matrix: Matrix<Tile>, cellClicked: Cell<Tile>) => {
  const nextGrid = Grid.from(matrix);

  const { value: tile } = cellClicked;

  // reveal clicked tile
  nextGrid.updateCell(cellClicked, assoc("revealed", true, tile));

  if (tile.kind !== "safe") {
    return nextGrid;
  }

  nextGrid.getCellNeighbours(cellClicked).forEach(neighbourCell => {
    const { value: neighbourTile } = neighbourCell;

    // skip revealed tiles
    if (neighbourTile.revealed) {
      return;
    }

    switch (neighbourTile.kind) {
      case "empty":
        nextGrid.updateCell(
          neighbourCell,
          assoc("revealed", true, neighbourTile)
        );
        break;
      case "safe":
        return getNextGrid(nextGrid.snapshot, neighbourCell);
    }
  });

  return nextGrid;
};

export default function App() {
  const [gameStatus, setGameStatus] = useState<GameStatus>("new");
  const [activeCell, setActiveCell] = useState<Cell<Tile>>();
  const [grid, setGrid] = useState<Matrix<Tile>>(seed.snapshot);

  const handleCellClick = useCallback(
    (cell: Cell<Tile>) => () => {
      if (gameStatus === "over") {
        return;
      }

      setActiveCell(cell);

      const tile = cell.value;

      if (tile.kind === "mine") {
        // reveal mines
        setGrid(
          Grid.from(grid).map(t =>
            t.kind === "mine" ? assoc("revealed", true, t) : t
          ).snapshot
        );
        setGameStatus("over");
        return;
      }

      const nextGrid = getNextGrid(grid, cell);

      setGrid(nextGrid.snapshot);
    },
    [grid, gameStatus]
  );

  return (
    <Root>
      <AppHeader>Mines</AppHeader>
      <Content>
        {grid.map((row, y) => (
          <GridRow key={y}>
            {row.map((cell, x) => (
              <GridTile
                key={x}
                kind={cell.value.kind}
                onClick={handleCellClick(cell)}
                active={
                  cell.row === activeCell?.row &&
                  cell.column === activeCell?.column
                }
                revealed={cell.value.revealed}
              >
                {cell.value.kind === "mine" ? (
                  <Mine alt="mine" src={mine} />
                ) : (
                  cell.value.surroundingMines
                )}
              </GridTile>
            ))}
          </GridRow>
        ))}
      </Content>
    </Root>
  );
}
