import React, { useState, useCallback } from "react";

import Grid, { Cell, Matrix } from "lib/Grid";
import * as Game from "lib/game";
import styled, { getColor, getRadius, getFontFamily } from "ui/styled";
import { AppHeader } from "ui/components";

import mine from "assets/mine.svg";

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
  background: ${getColor("light")};
  padding: 0.5em 0.4em;
  border-radius: ${getRadius("lg")};
  max-width: 100vw;
  max-height: calc(100vh - 1em);
  overflow: scroll;
`;

const GridRow = styled.div`
  display: flex;
`;

interface GridTileProps {
  kind?: Game.TileKind;
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

const seed = Game.makeNewGrid({ rows: 20, columns: 30 }, 80);

export default function App() {
  const [gameStatus, setGameStatus] = useState<Game.GameStatus>("new");
  const [activeCell, setActiveCell] = useState<Cell<Game.Tile>>();
  const [grid, setGrid] = useState<Matrix<Game.Tile>>(seed.snapshot);

  const handleCellClick = useCallback(
    (cell: Cell<Game.Tile>) => () => {
      if (gameStatus === "over") {
        return;
      }

      setActiveCell(cell);

      const tile = cell.value;

      if (tile.kind === "mine") {
        // reveal mines
        const nextGrid = Grid.from(grid).map(Game.revealMine);
        setGrid(nextGrid.snapshot);
        setGameStatus("over");
        return;
      }

      const nextGrid = Game.getNextGrid(grid, cell);

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
