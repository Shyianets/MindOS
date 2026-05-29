import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import GameShell from './components/GameShell.jsx';
import { GAME_COLORS } from './game/constants.js';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: GAME_COLORS.accent,
    },
    background: {
      default: GAME_COLORS.shell,
      paper: GAME_COLORS.drawer,
    },
    text: {
      primary: GAME_COLORS.text,
      secondary: GAME_COLORS.textMuted,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
        contained: {
          boxShadow: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GameShell />
    </ThemeProvider>
  );
}

export default App;
