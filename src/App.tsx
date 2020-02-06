import React, { useState, useCallback } from "react";
import flatten from "ramda/es/flatten";

import Grid, { Cell, Matrix } from "lib/Grid";
import * as Game from "lib/game";
import styled, {
  getColor,
  getRadius,
  getFontFamily,
  getShadow
} from "ui/styled";

const assets = {
  mine: require("assets/mine.svg"),
  skull: require("assets/skull.svg"),
  thinking: require("assets/thinking.svg"),
  cool: require("assets/cool.svg")
};

const statusAssets: Record<Game.GameStatus, string> = {
  new: assets.thinking,
  won: assets.cool,
  over: assets.skull
};

const Root = styled.div`
  font-family: ${getFontFamily("default")};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  background: ${getColor("muted")};
`;

const AppBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  background: ${getColor("gray")};
  box-shadow: ${getShadow("default")};
`;

const Brand = styled.div`
  font-family: ${getFontFamily("display")};
  color: ${getColor("secondary")};
  font-weight: bold;
  font-size: 1.8em;
  margin-left: 0.3em;
`;

const StatusDisplay = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  box-shadow: ${getShadow("default")};
  width: 2.8em;
  height: 2.8em;
  margin-top: 0.8em;
`;

const ScoreDisplay = styled.div`
  font-family: ${getFontFamily("default")};
  font-weight: bold;
  font-size: 1.4em;
  margin-right: 0.3em;
`;

const Content = styled.div`
  display: flex;
  max-width: 98vw;
  max-height: 80vh;
  overflow: scroll;
  -ms-overflow-style: none;
  margin-top: 4vh;
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GridRow = styled.div`
  display: flex;
`;

const Mine = styled.img`
  width: 1.4em;
  height: 1.4em;
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
  box-shadow: ${getShadow(p => (p.revealed ? "none" : "default"))};
  border-radius: ${getRadius("lg")};
  margin: 0.2em;
  padding: 0.2em;
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

const GridTile: React.FC<GridTileProps> = props => {
  return (
    <GridTileContainer onClick={props.onClick} {...props} active={props.active}>
      {props.revealed ? props.children : null}
    </GridTileContainer>
  );
};

export default function App() {
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState<Game.GameStatus>("new");
  const [activeCell, setActiveCell] = useState<Cell<Game.Tile>>();
  const [grid, setGrid] = useState<Matrix<Game.Tile>>(
    Game.makeNewGrid({ rows: 20, columns: 30 }, 80).snapshot
  );

  const handleCellClick = useCallback(
    (cell: Cell<Game.Tile>) => () => {
      if (gameStatus === "over" || gameStatus === "won") {
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

      const nextGrid = Game.getNextGrid(grid, cell).snapshot;
      const nextScore = flatten(nextGrid).filter(c => c.value.revealed).length;

      setGrid(nextGrid);
      setScore(nextScore);
    },
    [grid, gameStatus]
  );

  const handleStatusClick = useCallback(() => {
    if (gameStatus === "over") {
      setGrid(Game.makeNewGrid({ rows: 20, columns: 30 }, 80).snapshot);
      setGameStatus("new");
    }
  }, [gameStatus]);

  return (
    <Root>
      <AppBar>
        <Brand>Mines</Brand>
        <StatusDisplay
          src={statusAssets[gameStatus]}
          onClick={handleStatusClick}
        />
        <ScoreDisplay>score: {score}</ScoreDisplay>
      </AppBar>
      <Content>
        <GridContainer>
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
                    <Mine alt="mine" src={assets.mine} />
                  ) : (
                    cell.value.surroundingMines
                  )}
                </GridTile>
              ))}
            </GridRow>
          ))}
        </GridContainer>
      </Content>
    </Root>
  );
}
