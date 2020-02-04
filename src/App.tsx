import React, { useState, useCallback } from "react";
import { assocPath, not } from "ramda";

import Grid, { Cell, FillFn } from "lib/Grid";
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
  background: ${getColor(p => (p.active ? "white" : "gray"))};
  color: ${getColor(p => (p.active ? "black" : "gray"))};
  transition: all 0.2s ease-in-out;
`;

const Mine = styled.img`
  width: 1.8em;
  height: 1.8em;
`;

const GridTile: React.FC<GridTileProps> = props => {
  const [active, setActive] = useState(false);

  const handleClick = useCallback(() => {
    if (!active) setActive(not);
  }, [active]);

  return (
    <GridTileContainer onClick={handleClick} {...props} active={active}>
      {active ? props.children : null}
    </GridTileContainer>
  );
};

const fill: FillFn<Tile> = () =>
  rand() >= 0.75
    ? { kind: "mine", revealed: false }
    : { kind: "empty", surroundingMines: 0, revealed: false };

const setCellNumber = assocPath(["value", "empty"]);

const seed = Grid.make<Tile>(20, fill).map<Tile>(
  (cell, self): Cell<Tile> => {
    const next =
      cell.value?.kind !== "mine"
        ? setCellNumber(
            self
              .getCellNeighbours(cell.row, cell.column)
              .filter(p => p.value?.kind === "mine").length,
            cell
          )
        : cell;

    return next as Cell<Tile>;
  }
);

const grid = seed.snapshot;

export default function App() {
  return (
    <Root>
      <AppHeader>Mines</AppHeader>
      <Content>
        {grid.map((row, y) => (
          <GridRow key={y}>
            {row.map((cell, x) => (
              <GridTile key={x} kind={cell.value?.kind}>
                {cell.value?.kind === "empty" ? (
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
