/**
 * SSR-safe localStorage primitives.
 *
 * Guarantees:
 * - Safe to call during SSR (no `window`) — returns fallback / no-op.
 * - Safe in privacy mode or when storage is full — never throws to caller.
 * - Corrupt JSON is treated as missing and the bad entry is cleaned up.
 */

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function safeGet<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;

  let raw: string | null;
  try {
    raw = window.localStorage.getItem(key);
  } catch (err) {
    console.warn(`[storage] read failed for "${key}":`, err);
    return fallback;
  }

  if (raw === null) return fallback;

  try {
    return JSON.parse(raw) as T;
  } catch (err) {
    console.warn(`[storage] parse failed for "${key}", clearing:`, err);
    try {
      window.localStorage.removeItem(key);
    } catch {
      // best-effort cleanup; ignore
    }
    return fallback;
  }
}

export function safeSet<T>(key: string, value: T): void {
  if (!isBrowser()) return;

  try {
    const serialized = JSON.stringify(value);
    window.localStorage.setItem(key, serialized);
  } catch (err) {
    console.warn(`[storage] write failed for "${key}":`, err);
  }
}

export function safeRemove(key: string): void {
  if (!isBrowser()) return;

  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    console.warn(`[storage] remove failed for "${key}":`, err);
  }
}
