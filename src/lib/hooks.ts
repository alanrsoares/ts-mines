import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
  useRef,
  useMemo,
} from "react";

import StorageAdapter from "lib/StorageAdapter";

import * as Game from "lib/game";
import Grid, { Cell, Matrix } from "lib/Grid";

const STORAGE_NAMESPACE = "@TS-MINES";

const storage = new StorageAdapter(STORAGE_NAMESPACE);

export function useCachedState<T>(
  cacheKey: string,
  defaultState: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState(storage.read(defaultState, cacheKey));

  useEffect(() => {
    storage.persist<T>(state, cacheKey);
  }, [state, cacheKey]);

  return [state, setState];
}

export function useLongPress(callback = () => {}, ms = 300) {
  const [running, setRunning] = useState(false);
  const timeoutIdRef = useRef(0);

  const cancelTimeout = useCallback(() => {
    clearTimeout(timeoutIdRef.current);
  }, [timeoutIdRef]);

  const start = useCallback(() => {
    setRunning(true);
  }, []);

  const stop = useCallback(() => {
    setRunning(false);
  }, []);

  useEffect(
    () => {
      if (running) {
        timeoutIdRef.current = setTimeout(callback, ms);
      } else {
        cancelTimeout();
      }

      // cleanup
      return cancelTimeout;
    },

    /* 
      Explicitly disable rules of hooks on the next line 
      to prevent the callback from being called multiple times
    */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [running]
  );

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop,
    onMouseMove: cancelTimeout,
  };
}

export function useRightClick<T extends () => void>(callback: T) {
  const onContextMenu = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      callback();
    },
    [callback]
  );

  useEffect(() => {
    window.addEventListener("contextmenu", onContextMenu);

    return () => {
      window.removeEventListener("contextmenu", onContextMenu);
    };
  }, [onContextMenu]);
}

export function useGame() {
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

  const onCellClick = useCallback(
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
              flagged: !tile.flagged,
            });
            setGrid(nextGrid.snapshot);

            if (Game.didWin(nextGrid)) {
              setGameStatus("won");
            }
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
                revealed: true,
              });

              setGrid(nextGrid.snapshot);

              setGrid(nextGrid.map(Game.revealMine).snapshot);
              setGameStatus("over");
              return;
            }

            const nextGrid = Game.getNextGrid(grid, cell);
            const nextScore = nextGrid.snapshot
              .flat()
              .filter((c) => c.value.revealed).length;

            setGrid(nextGrid.snapshot);
            setScore(nextScore);

            if (Game.didWin(nextGrid)) {
              setGameStatus("won");
            }
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
      setGameStatus,
    ]
  );

  const onCellLongPress = useCallback(
    (cell: Cell<Game.Tile>) => {
      onCellClick(cell, "flag");
    },
    [onCellClick]
  );

  const onStatusClick = useCallback(() => {
    if (gameStatus === "over") {
      setGrid(Game.makeNewGrid({ rows: 20, columns: 30 }, 80).snapshot);
      setGameStatus("new");
      setScore(0);
    }
  }, [gameStatus, setGameStatus, setScore, setGrid]);

  const onToggleGameMode = useCallback(() => {
    setGameMode((mode) => (mode === "flag" ? "reveal" : "flag"));
  }, [setGameMode]);

  const progress = useMemo(
    () => (score / (grid.length * grid[0].length)) * 100,
    [score, grid]
  );

  return {
    state: {
      gameStatus,
      gameMode,
      activeCell,
      progress,
      score,
      grid,
    },
    handlers: {
      onCellClick,
      onStatusClick,
      onToggleGameMode,
      onCellLongPress,
    },
  };
}
