import React, { useCallback, useMemo } from "react";
import flatten from "ramda/es/flatten";

import Grid, { Cell, Matrix } from "lib/Grid";
import * as Game from "lib/game";
import useUpdateChecker from "lib/useUpdateChecker";
import { useCachedState, useRightClick } from "lib/hooks";

import { ReactComponent as SkullIcon } from "assets/skull.svg";
import { ReactComponent as ThinkingIcon } from "assets/thinking.svg";
import { ReactComponent as CoolIcon } from "assets/cool.svg";

import {
  Root,
  AppBar,
  Brand,
  StatusDisplay,
  Content,
  Clamp,
  Controls
} from "ui/components/core";

import GridComponent from "ui/components/Grid";
import Footer from "ui/components/Footer";
import Score from "ui/components/Score";

const statusAssets: Record<Game.GameStatus, JSX.Element> = {
  new: <ThinkingIcon />,
  won: <CoolIcon />,
  over: <SkullIcon />
};

const NO_OP = () => {};

export default function App() {
  useUpdateChecker();

  const [score, setScore] = useCachedState<number>("/score", 0);

  const [gameStatus, setGameStatus] = useCachedState<Game.GameStatus>(
    "/gameStatus",
    "new"
  );
  const [gameMode, setGameMode] = useCachedState<Game.Mode>("/mode", "reveal");

  const [activeCell, setActiveCell] = useCachedState<
    Cell<Game.Tile> | undefined
  >("/activeCell", undefined);

  const [grid, setGrid] = useCachedState<Matrix<Game.Tile>>(
    "/grid",
    Game.makeNewGrid({ rows: 20, columns: 30 }, 80).snapshot
  );

  const handleCellClick = useCallback(
    (cell: Cell<Game.Tile>, mode?: Game.Mode) => {
      if (gameStatus === "over" || gameStatus === "won") {
        return;
      }

      setActiveCell(cell);

      const tile = cell.value;

      const $mode = mode ?? gameMode;

      switch ($mode) {
        case "flag":
          {
            // ignore clicking on a "revealed" tile while on "flag" mode
            if (tile.revealed) {
              return;
            }
            const nextGrid = Grid.from(grid).updateCell(cell, {
              ...tile,
              flagged: !tile.flagged
            });
            setGrid(nextGrid.snapshot);
          }
          break;
        case "reveal":
          {
            // ignore clicking on a "flagged" tile while on "reveal" mode
            if (tile.flagged) {
              return;
            }

            if (tile.kind === "mine") {
              // reveal mines
              const nextGrid = Grid.from(grid).updateCell(cell, {
                ...tile,
                revealed: true
              });

              setGrid(nextGrid.snapshot);

              setGrid(nextGrid.map(Game.revealMine).snapshot);
              setGameStatus("over");
              return;
            }

            const nextGrid = Game.getNextGrid(grid, cell).snapshot;
            const nextScore = flatten(nextGrid).filter(c => c.value.revealed)
              .length;

            setGrid(nextGrid);
            setScore(nextScore);
          }
          break;
      }
    },
    [
      grid,
      gameStatus,
      gameMode,
      setGrid,
      setScore,
      setActiveCell,
      setGameStatus
    ]
  );

  const handleCellLongPress = useCallback(
    (cell: Cell<Game.Tile>) => {
      handleCellClick(cell, "flag");
    },
    [handleCellClick]
  );

  const handleStatusClick = useCallback(() => {
    if (gameStatus === "over") {
      setGrid(Game.makeNewGrid({ rows: 20, columns: 30 }, 80).snapshot);
      setGameStatus("new");
      setScore(0);
    }
  }, [gameStatus, setGameStatus, setScore, setGrid]);

  const handleToggleGameMode = useCallback(() => {
    setGameMode(mode => (mode === "flag" ? "reveal" : "flag"));
  }, [setGameMode]);

  useRightClick(NO_OP);

  const progress = useMemo(
    () => (score / (grid.length * grid[0].length)) * 100,
    [score, grid]
  );

  return (
    <Root>
      <AppBar>
        <Clamp>
          <Brand>[MINES]</Brand>
          <StatusDisplay
            isGameOver={gameStatus === "over"}
            onClick={handleStatusClick}
          >
            {statusAssets[gameStatus]}
          </StatusDisplay>
          <Controls>
            <Score score={score} progress={progress} />
          </Controls>
        </Clamp>
      </AppBar>
      <Content>
        <GridComponent
          grid={grid}
          activeCell={activeCell}
          onTileClick={handleCellClick}
          onTileLongPress={handleCellLongPress}
        />
      </Content>
      <Footer onToggleGameMode={handleToggleGameMode} gameMode={gameMode} />
    </Root>
  );
}
