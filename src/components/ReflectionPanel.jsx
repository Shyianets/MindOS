import { Box, Button, Typography } from '@mui/material';
import { STABLE_STREAK_MAX } from '../data/initialStats.js';
import { GAME_COLORS } from '../game/constants.js';

function ReflectionPanel({ reflection, stableStreak, onRestart }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" sx={{ color: GAME_COLORS.text, fontWeight: 700 }}>
        {reflection.title}
      </Typography>

      <Typography variant="body2" sx={{ color: GAME_COLORS.textMuted }}>
        {reflection.explanation}
      </Typography>

      <Typography variant="body2" sx={{ color: GAME_COLORS.text }}>
        Stable streak: {stableStreak}/{STABLE_STREAK_MAX}
      </Typography>

      <Box>
        <Button variant="contained" onClick={onRestart}>
          Restart scenario
        </Button>
      </Box>
    </Box>
  );
}

export default ReflectionPanel;
