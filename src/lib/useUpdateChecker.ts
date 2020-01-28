import { useEffect } from "react";

export function semverGreaterThan(
  latestVersion: string,
  currentVersion: string
) {
  const latestParts = latestVersion.split(/\./g);
  const currentParts = currentVersion.split(/\./g);

  while (latestParts.length || currentParts.length) {
    const a = Number(latestParts.shift());
    const b = Number(currentParts.shift());

    if (a === b) {
      continue;
    }

    return a > b || isNaN(b);
  }

  return false;
}

/**
 * Wraps fetch with a concurrent timeout-based callback
 *
 * @param {number} timeout  - timeout in milliseconds
 * @param {Function} [onTimeout] - timeout callback
 */
export const fetchWithTimeout = (
  timeout: number,
  onTimeout: () => void = () => {
    throw new Error("Timeout exceeded");
  }
) => async (url: string) => {
  // this forces a 5s timeout in case the request hangs
  const timeoutHandle = window.setTimeout(onTimeout, timeout);
  const response = await fetch(url);
  // cancels the timeout once the request is resolved
  window.clearTimeout(timeoutHandle);
  return response;
};

export async function purgeCache() {
  if (window.caches) {
    const keys = await window.caches.keys();
    const deleteKeys = keys.map(key => window.caches.delete(key));

    await Promise.all(deleteKeys);
  }
}

export async function checkForAppUpdates() {
  const onTimeout = () => {
    throw new Error("Timout reached while fetching meta.json");
  };

  const fetchWithTimeoutHandler = fetchWithTimeout(5000, onTimeout);

  const response = await fetchWithTimeoutHandler(`meta.json?t=${Date.now()}`);
  const meta = await response.json();
  const latestVersion = meta.version;
  const currentVersion = global.appVersion;

  return semverGreaterThan(latestVersion, currentVersion);
}

/**
 * Forces window to reload
 */
export function forceReload() {
  window.location.reload(true);
}

export async function tryInstallUpdate() {
  try {
    await purgeCache();
    window.setTimeout(forceReload, 300);
  } catch (error) {
    console.log("Failed to purge cache", error);
  }
}

export async function tryCheckForUpdates() {
  try {
    const hasUpdates = await checkForAppUpdates();
    if (
      hasUpdates &&
      window.confirm("A new version is available, would you like to update?")
    ) {
      await tryInstallUpdate();
    }
  } catch (error) {
    console.log(`Failed to check for updates:`, error);
  }
}

const UPDATE_CHECK_INTERVAL = 60000 * 30;

export default function useUpdateChecker(interval = UPDATE_CHECK_INTERVAL) {
  useEffect(() => {
    tryCheckForUpdates();
    const intervalId = window.setInterval(tryCheckForUpdates, interval);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [interval]);
}
