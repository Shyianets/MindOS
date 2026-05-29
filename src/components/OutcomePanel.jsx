import { Box, Button, Typography } from '@mui/material';
import { GAME_COLORS } from '../game/constants.js';

function OutcomePanel({ response, deltas, onContinue }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" sx={{ color: GAME_COLORS.text, fontWeight: 700 }}>
        {response.title}
      </Typography>

      <Typography variant="body2" sx={{ color: GAME_COLORS.textMuted }}>
        {response.outcomeExplanation}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {deltas.map((item) => (
          <Typography
            key={item.key}
            variant="body2"
            sx={{ color: GAME_COLORS.accent, fontWeight: 600 }}
          >
            {item.label}
          </Typography>
        ))}
      </Box>

      <Box>
        <Button variant="contained" onClick={onContinue}>
          Continue
        </Button>
      </Box>
    </Box>
  );
}

export default OutcomePanel;
