import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
  useRef
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
    onMouseMove: cancelTimeout
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
