import { Box, Typography } from '@mui/material';
import StatBadge from './StatBadge.jsx';
import { GAME_COLORS } from '../game/constants.js';
import { HUD_STAT_KEYS } from '../data/statsConfig.js';

function TopBar({ progressLabel, stats }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 2,
        p: { xs: 1.5, md: 2 },
        pointerEvents: 'none',
        '& > *': { pointerEvents: 'auto' },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75, textAlign: 'left' }}>
        <Typography
          variant="h6"
          sx={{
            color: GAME_COLORS.text,
            fontWeight: 700,
            letterSpacing: '0.04em',
            lineHeight: 1.1,
          }}
        >
          MindOS
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: GAME_COLORS.textMuted,
            bgcolor: 'rgba(15, 23, 42, 0.72)',
            border: `1px solid ${GAME_COLORS.drawerBorder}`,
            borderRadius: 999,
            px: 1.25,
            py: 0.25,
            width: 'fit-content',
          }}
        >
          {progressLabel}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
          gap: 0.75,
          maxWidth: { xs: '62%', md: '55%' },
        }}
      >
        {HUD_STAT_KEYS.map((key) => (
          <StatBadge key={key} statKey={key} value={stats[key]} compact />
        ))}
      </Box>
    </Box>
  );
}

export default TopBar;
