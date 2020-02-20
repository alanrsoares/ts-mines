import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction
} from "react";

import Storage from "lib/StorageAdapter";

export function useCachedState<T>(
  cacheKey: string,
  defaultState: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState(Storage.read(defaultState, cacheKey));

  useEffect(() => {
    Storage.persist<T>(state, cacheKey);
  }, [state, cacheKey]);

  return [state, setState];
}

export function useLongPress(callback = () => {}, ms = 300) {
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timerId = 0;

    if (running) {
      timerId = setTimeout(callback, ms);
    } else {
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [running, callback, ms]);

  return {
    onMouseDown: () => setRunning(true),
    onMouseUp: () => setRunning(false),
    onMouseLeave: () => setRunning(false),
    onTouchStart: () => setRunning(true),
    onTouchEnd: () => setRunning(false)
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
