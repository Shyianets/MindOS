import { Box, Button, Card, CardContent, Typography } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#101418',
        color: 'white',
        p: 4,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Adventure Game
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        A browser game inspired by classic fantasy exploration.
      </Typography>

      <Card sx={{ maxWidth: 480 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Start your journey
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            Choose a hero, explore the map, fight enemies, collect rewards.
          </Typography>

          <Button variant="contained">
            Start Game
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;