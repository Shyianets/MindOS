import { Box } from '@mui/material';
import { GAME_COLORS } from '../game/constants.js';

function ScenarioDrawer({ children, open = true }) {
  if (!open) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        left: { xs: 8, md: 16 },
        right: { xs: 8, md: 16 },
        bottom: { xs: 8, md: 16 },
        zIndex: 3,
        maxHeight: '48%',
        overflowY: 'auto',
        borderRadius: 3,
        border: `1px solid ${GAME_COLORS.drawerBorder}`,
        bgcolor: GAME_COLORS.drawer,
        backdropFilter: 'blur(12px)',
        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.35)',
        p: { xs: 2, md: 2.5 },
        textAlign: 'left',
      }}
    >
      {children}
    </Box>
  );
}

export default ScenarioDrawer;
