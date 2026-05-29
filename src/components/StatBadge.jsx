import { Box, Typography } from '@mui/material';
import { GAME_COLORS } from '../game/constants.js';
import { STAT_CONFIG } from '../data/statsConfig.js';

function StatBadge({ statKey, value, compact = false }) {
  const config = STAT_CONFIG[statKey];
  if (!config) {
    return null;
  }

  const Icon = config.icon;

  return (
    <Box
      component="button"
      type="button"
      aria-label={`${config.label}: ${value}`}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.75,
        border: `1px solid ${GAME_COLORS.drawerBorder}`,
        borderRadius: 999,
        px: compact ? 1.25 : 1.5,
        py: 0.5,
        bgcolor: 'rgba(15, 23, 42, 0.72)',
        color: GAME_COLORS.text,
        cursor: 'default',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Icon sx={{ fontSize: compact ? 16 : 18, color: GAME_COLORS.accent }} />
      {!compact && (
        <Typography variant="caption" sx={{ color: GAME_COLORS.textMuted }}>
          {config.label}
        </Typography>
      )}
      <Typography variant="caption" sx={{ fontWeight: 700, color: GAME_COLORS.text }}>
        {value}
      </Typography>
    </Box>
  );
}

export default StatBadge;
