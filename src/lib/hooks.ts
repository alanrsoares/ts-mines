import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  useRef,
  useMemo,
  useReducer,
  Reducer,
} from "react";

import storage from "lib/storage";
import * as Game from "lib/game";
import { State, Actions, INITIAL_STATE, reducer } from "lib/state";
import { Cell } from "./Grid";

export function useCachedReducer<S, A>(
  cacheKey: string,
  defaultState: S,
  reducer: Reducer<S, A>
): [S, Dispatch<A>] {
  const [state, setState] = useReducer(
    reducer,
    storage.read(defaultState, cacheKey)
  );

  useEffect(() => {
    storage.persist<S>(state, cacheKey);
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
        timeoutIdRef.current = window.setTimeout(callback, ms);
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

export function useGameState() {
  const [state, dispatch] = useCachedReducer<State, Actions>(
    "/state",
    INITIAL_STATE,
    reducer
  );

  const progress = useMemo(
    () => (state.score / (state.grid.length * state.grid[0].length)) * 100,
    [state.score, state.grid]
  );

  const onCellClick = useCallback(
    (cell: Cell<Game.Tile>, mode?: Game.Mode) => {
      dispatch({ type: "TOGGLE_CELL", payload: { cell, mode } });
    },
    [dispatch]
  );

  const onCellLongPress = useCallback(
    (cell: Cell<Game.Tile>) => {
      dispatch({ type: "TOGGLE_CELL", payload: { cell, mode: "defuse" } });
    },
    [dispatch]
  );

  const onStatusClick = useCallback(() => {
    dispatch({ type: "RESET" });
  }, [dispatch]);

  const onToggleGameMode = useCallback(() => {
    dispatch({ type: "TOGGLE_GAME_MODE" });
  }, [dispatch]);

  return {
    state: {
      ...state,
      progress,
    },
    handlers: {
      onCellClick,
      onStatusClick,
      onToggleGameMode,
      onCellLongPress,
    },
  };
}
