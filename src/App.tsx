import React, { useState, useCallback, useEffect } from "react";
import flatten from "ramda/es/flatten";

import Grid, { Cell, Matrix } from "lib/Grid";
import * as Game from "lib/game";
import Storage from "lib/StorageAdapter";
import useUpdateChecker from "lib/useUpdateChecker";

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

import { ReactComponent as FlagIcon } from "assets/red.svg";
import { ReactComponent as EyeIcon } from "assets/london-eye.svg";
import styled from "ui/styled";

const assets = {
  skull: require("assets/skull.svg"),
  thinking: require("assets/thinking.svg"),
  cool: require("assets/cool.svg")
};

const statusAssets: Record<Game.GameStatus, string> = {
  new: assets.thinking,
  won: assets.cool,
  over: assets.skull
};

const Eye = styled(EyeIcon)`
  width: 1.4em;
  height: 1.4em;
`;

const Flag = styled(FlagIcon)`
  width: 1.4em;
  height: 1.4em;
`;

type Mode = "reveal" | "flag";

export default function App() {
  useUpdateChecker();

  const [score, setScore] = useState(Storage.read(0, "/score"));
  const [gameStatus, setGameStatus] = useState<Game.GameStatus>(
    Storage.read("new", "/gameStatus")
  );
  const [mode, setMode] = useState<Mode>(Storage.read("reveal", "/mode"));

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
      setScore(0);
    }
  }, [gameStatus]);

  return (
    <Root>
      <AppBar>
        <Clamp>
          <Brand>Mines</Brand>
          <StatusDisplay
            src={statusAssets[gameStatus]}
            onClick={handleStatusClick}
          />
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
              color="light"
              active={mode === "flag"}
              onClick={() => {
                setMode("flag");
              }}
            >
              <Flag />
            </Button>
            <Button
              side="right"
              color="muted"
              active={mode === "reveal"}
              onClick={() => {
                setMode("reveal");
              }}
            >
              <Eye />
            </Button>
          </ButtonGroup>
        </Clamp>
      </Footer>
    </Root>
  );
}
