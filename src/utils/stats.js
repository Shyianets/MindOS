import { STAT_CONFIG } from '../data/statsConfig.js';
import { STABLE_STREAK_MAX } from '../data/initialStats.js';

export function applyEffects(stats, effects) {
  const next = { ...stats };

  for (const [key, delta] of Object.entries(effects)) {
    if (key in next) {
      next[key] = next[key] + delta;
    }
  }

  return next;
}

export function formatStatDelta(key, delta) {
  const label = STAT_CONFIG[key]?.label ?? key;
  const sign = delta > 0 ? '+' : '';
  return `${label} ${sign}${delta}`;
}

export function getEffectDeltas(effects) {
  return Object.entries(effects).map(([key, delta]) => ({
    key,
    delta,
    label: formatStatDelta(key, delta),
  }));
}

export function applyStableStreak(stats, isStable) {
  if (!isStable) {
    return stats;
  }

  return {
    ...stats,
    stableStreak: Math.min(stats.stableStreak + 1, STABLE_STREAK_MAX),
  };
}
