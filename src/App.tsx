import React, { useState, useCallback } from "react";
import { assoc } from "ramda";

import Grid, { Cell, FillFn, Matrix } from "lib/Grid";
import styled, { getColor, getRadius, getFontFamily } from "ui/styled";
import { AppHeader } from "ui/components";

import mine from "assets/mine.svg";

export type Tile =
  | {
      kind: "empty";
      revealed: boolean;
      surroundingMines: number;
    }
  | {
      kind: "mine";
      revealed: boolean;
    };

export type TileKind = "empty" | "mine";

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
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px ${getColor("gray")};
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
`;

const Mine = styled.img`
  width: 1.8em;
  height: 1.8em;
`;

const GridTile: React.FC<GridTileProps> = props => {
  return (
    <GridTileContainer onClick={props.onClick} {...props} active={props.active}>
      {props.revealed ? props.children : null}
    </GridTileContainer>
  );
};

const fill: FillFn<Tile> = () =>
  rand() >= 0.75
    ? { kind: "mine", revealed: false }
    : { kind: "empty", surroundingMines: 0, revealed: false };

const seed = Grid.make<Tile>(20, fill).map<Tile>((tile, cell, self) => {
  const next =
    tile.kind !== "mine"
      ? assoc(
          "surroundingMines",
          self.getCellNeighbours(cell).filter(p => p.value?.kind === "mine")
            .length,
          tile
        )
      : tile;

  return next;
});

type GameStatus = "new" | "over" | "won";

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

      const nextGrid = Grid.from(grid);

      const tile = cell.value;

      if (tile.kind === "mine") {
        // reveal mines
        setGrid(
          nextGrid.map(tile =>
            tile.kind === "mine" ? assoc("revealed", true, tile) : tile
          ).snapshot
        );
        setGameStatus("over");
        return;
      }

      if (tile.kind === "empty") {
        if (tile.surroundingMines === 0) {
          const neighbours = nextGrid.getCellNeighbours(cell);

          neighbours.forEach(neighbour => {
            const t = neighbour.value;

            // is not revealed?
            if (!t.revealed) {
              // is not a mine?
              if (t.kind !== "mine") {
                // is empty?
                if (t.surroundingMines === 0) {
                  // schedule a click on the empty cell
                  setTimeout(handleCellClick(neighbour), 100 / 6);
                } else {
                  nextGrid.updateCell(neighbour, assoc("revealed", true, t));
                }
              }
            }
          });
        }

        // reveal self
        nextGrid.updateCell(cell, assoc("revealed", true, tile));

        setGrid(nextGrid.snapshot);
      }
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
                {cell.value.kind === "empty" ? (
                  cell.value.surroundingMines
                ) : (
                  <Mine alt="mine" src={mine} />
                )}
              </GridTile>
            ))}
          </GridRow>
        ))}
      </Content>
    </Root>
  );
}
