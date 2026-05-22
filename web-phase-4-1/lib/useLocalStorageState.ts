'use client';

import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { safeGet, safeSet } from './storage';

/**
 * SSR-safe React state synced with localStorage.
 *
 * Strategy (React 19 compliant, avoids hydration mismatch):
 * 1. First render returns `initialValue` so SSR HTML matches the client's first paint.
 * 2. After mount, schedules state update via microtask (defers setState until after useEffect).
 * 3. Write to localStorage only after hydration completes (prevents overwriting existing data).
 * 4. Subsequent state changes trigger writes normally.
 *
 * This approach:
 * - Avoids calling setState directly in useEffect (React 19 lint rule)
 * - Prevents hydration mismatch (SSR/CSR first render both use initialValue)
 * - Ensures first mount reads from storage without overwriting it
 *
 * Storage failures (privacy mode, quota, corrupt JSON) are handled inside
 * `safeGet`/`safeSet` and degrade silently to in-memory state.
 */
export function useLocalStorageState<T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(initialValue);
  const isFirstMount = useRef(true);
  const isHydrated = useRef(false);

  // Mount effect: schedule async state update to avoid setState-in-effect violation
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;

      // Read from storage and update state via microtask
      // This defers setState until after useEffect completes
      queueMicrotask(() => {
        const stored = safeGet(key, initialValue);
        // Always restore from storage, no comparison needed
        setState(stored);
        isHydrated.current = true;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]); // initialValue intentionally omitted - captured in closure

  // Wrapped setState that syncs to localStorage
  const setStateAndStorage = useCallback<Dispatch<SetStateAction<T>>>(
    (action) => {
      setState((prev) => {
        const next = action instanceof Function ? action(prev) : action;

        // Only write to storage after hydration completes
        // This prevents overwriting existing data with initialValue
        if (isHydrated.current) {
          safeSet(key, next);
        }

        return next;
      });
    },
    [key],
  );

  return [state, setStateAndStorage];
}
