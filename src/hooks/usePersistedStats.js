import { useCallback, useState } from 'react';
import { INITIAL_STATS } from '../data/initialStats.js';

const STORAGE_KEY = 'mindos-stats';

function loadStats() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { ...INITIAL_STATS };
    }

    return { ...INITIAL_STATS, ...JSON.parse(raw) };
  } catch {
    return { ...INITIAL_STATS };
  }
}

function saveStats(stats) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

export function usePersistedStats() {
  const [stats, setStats] = useState(loadStats);

  const updateStats = useCallback((updater) => {
    setStats((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      saveStats(next);
      return next;
    });
  }, []);

  return { stats, updateStats };
}
