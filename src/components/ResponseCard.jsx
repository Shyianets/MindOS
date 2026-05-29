import { Box, Chip, Typography } from '@mui/material';
import { GAME_COLORS } from '../game/constants.js';

function ResponseCard({ response, selected, onSelect }) {
  return (
    <Box
      component="button"
      type="button"
      className={`response-card${selected ? ' response-card--selected' : ''}`}
      onClick={() => onSelect(response.id)}
      sx={{
        position: 'relative',
        flex: '1 1 180px',
        minWidth: 160,
        maxWidth: 240,
        textAlign: 'left',
        border: `1px solid ${GAME_COLORS.drawerBorder}`,
        borderRadius: 2,
        bgcolor: GAME_COLORS.card,
        color: GAME_COLORS.text,
        p: 2,
        cursor: 'pointer',
      }}
    >
      {response.recommended && (
        <Chip
          label="Recommended"
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            height: 22,
            bgcolor: 'rgba(167, 139, 250, 0.2)',
            color: GAME_COLORS.recommended,
            border: `1px solid ${GAME_COLORS.recommended}`,
          }}
        />
      )}

      <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.75, pr: 4 }}>
        {response.title}
      </Typography>
      <Typography variant="body2" sx={{ color: GAME_COLORS.textMuted, lineHeight: 1.45 }}>
        {response.description}
      </Typography>
    </Box>
  );
}

export default ResponseCard;
