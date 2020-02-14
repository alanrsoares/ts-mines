import React, { useState, useCallback, useEffect } from "react";
import flatten from "ramda/es/flatten";

import Grid, { Cell, Matrix } from "lib/Grid";
import * as Game from "lib/game";
import Storage from "lib/StorageAdapter";
import useUpdateChecker from "lib/useUpdateChecker";

import { ReactComponent as SkullIcon } from "assets/skull.svg";
import { ReactComponent as ThinkingIcon } from "assets/thinking.svg";
import { ReactComponent as CoolIcon } from "assets/cool.svg";

import {
  Root,
  AppBar,
  Brand,
  StatusDisplay,
  Score,
  ScoreLabel,
  Content,
  Clamp,
  Footer,
  GithubIcon,
  GithubBadge,
  ButtonGroup,
  Button
} from "ui/components/core";

import GridComponent from "ui/components/Grid";

import { ReactComponent as FlagIcon } from "assets/flag.svg";
import { ReactComponent as EyeIcon } from "assets/eye.svg";
import styled, { getRadius, getColor } from "ui/styled";

const statusAssets: Record<Game.GameStatus, JSX.Element> = {
  new: <ThinkingIcon />,
  won: <CoolIcon />,
  over: <SkullIcon />
};

const Eye = styled(EyeIcon)`
  width: 1em;
  height: 1em;
`;

const Flag = styled(FlagIcon)`
  width: 1em;
  height: 1em;
`;

const Circle = styled.div`
  border-radius: ${getRadius("round")};
  background-color: ${getColor("gray")};
  width: 1.4em;
  height: 1.4em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1em;
`;

export default function App() {
  useUpdateChecker();

  const [score, setScore] = useState(Storage.read(0, "/score"));
  const [gameStatus, setGameStatus] = useState<Game.GameStatus>(
    Storage.read("new", "/gameStatus")
  );
  const [gameMode, setGameMode] = useState<Game.Mode>(
    Storage.read("reveal", "/mode")
  );

  const [activeCell, setActiveCell] = useState<Cell<Game.Tile> | undefined>(
    Storage.read(undefined, "/activeCell")
  );
  const [grid, setGrid] = useState<Matrix<Game.Tile>>(
    Storage.read(
      Game.makeNewGrid({ rows: 20, columns: 30 }, 80).snapshot,
      "/grid"
    )
  );

  useEffect(() => {
    Storage.persist(score, "/score");
  }, [score]);

  useEffect(() => {
    Storage.persist(gameStatus, "/gameStatus");
  }, [gameStatus]);

  useEffect(() => {
    Storage.persist(grid, "/grid");
  }, [grid]);

  useEffect(() => {
    Storage.persist(gameMode, "/mode");
  }, [gameMode]);

  useEffect(() => {
    if (activeCell) {
      Storage.persist(activeCell, "/activeCell");
    }
  }, [activeCell]);

  const handleCellClick = useCallback(
    (cell: Cell<Game.Tile>) => {
      if (gameStatus === "over" || gameStatus === "won") {
        return;
      }

      setActiveCell(cell);

      const tile = cell.value;

      switch (gameMode) {
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
              const nextGrid = Grid.from(grid).map(Game.revealMine);
              setGrid(nextGrid.snapshot);
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
    [grid, gameStatus, gameMode]
  );

  const handleStatusClick = useCallback(() => {
    if (gameStatus === "over") {
      setGrid(Game.makeNewGrid({ rows: 20, columns: 30 }, 80).snapshot);
      setGameStatus("new");
      setScore(0);
    }
  }, [gameStatus]);

  return (
    <Root>
      <AppBar>
        <Clamp>
          <Brand>Mines</Brand>
          <StatusDisplay onClick={handleStatusClick}>
            {statusAssets[gameStatus]}
          </StatusDisplay>
          <Score>
            <ScoreLabel>score</ScoreLabel> {score}
          </Score>
        </Clamp>
      </AppBar>
      <Content>
        <GridComponent
          grid={grid}
          activeCell={activeCell}
          onTileClick={handleCellClick}
        />
      </Content>
      <Footer>
        <Clamp>
          <GithubBadge
            target="_blank"
            href="https://github.com/alanrsoares/ts-mines"
          >
            <GithubIcon />
            @alanrsoares/ts-mines
          </GithubBadge>
          <ButtonGroup>
            <Button
              side="left"
              color="white"
              active={gameMode === "flag"}
              onClick={() => {
                setGameMode("flag");
              }}
            >
              <Circle>
                <Flag />
              </Circle>
            </Button>
            <Button
              side="right"
              color="white"
              active={gameMode === "reveal"}
              onClick={() => {
                setGameMode("reveal");
              }}
            >
              <Circle>
                <Eye />
              </Circle>
            </Button>
          </ButtonGroup>
        </Clamp>
      </Footer>
    </Root>
  );
}
