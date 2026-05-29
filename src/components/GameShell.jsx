import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { SCENARIOS } from '../data/scenarios.js';
import { workStartScenario } from '../data/workStartScenario.js';
import { GAME_COLORS } from '../game/constants.js';
import { usePersistedStats } from '../hooks/usePersistedStats.js';
import '../styles/game.css';
import {
  applyEffects,
  applyStableStreak,
  getEffectDeltas,
} from '../utils/stats.js';
import ApartmentScene from './ApartmentScene.jsx';
import OutcomePanel from './OutcomePanel.jsx';
import ReflectionPanel from './ReflectionPanel.jsx';
import ResponseCard from './ResponseCard.jsx';
import ScenarioDrawer from './ScenarioDrawer.jsx';
import TopBar from './TopBar.jsx';

function GameShell({ scenario = workStartScenario }) {
  const background = SCENARIOS[scenario.backgroundKey];
  const { stats, updateStats } = usePersistedStats();

  const [phase, setPhase] = useState('idle');
  const [selectedResponseId, setSelectedResponseId] = useState(null);
  const [outcomeDeltas, setOutcomeDeltas] = useState([]);
  const [resolvedResponse, setResolvedResponse] = useState(null);

  const selectedResponse = useMemo(
    () => scenario.responses.find((item) => item.id === selectedResponseId) ?? null,
    [scenario.responses, selectedResponseId],
  );

  const reflectionCopy = useMemo(() => {
    if (!resolvedResponse) {
      return scenario.reflection.unstable;
    }

    return resolvedResponse.stable
      ? scenario.reflection.stable
      : scenario.reflection.unstable;
  }, [resolvedResponse, scenario.reflection]);

  const handleStartWork = () => setPhase('pattern');

  const handlePause = () => setPhase('paused');

  const handleContinueToChoices = () => setPhase('choices');

  const handleConfirmChoice = () => {
    if (!selectedResponse) {
      return;
    }

    const deltas = getEffectDeltas(selectedResponse.effects);
    setOutcomeDeltas(deltas);
    setResolvedResponse(selectedResponse);

    updateStats((prev) => {
      const withEffects = applyEffects(prev, selectedResponse.effects);
      return applyStableStreak(withEffects, selectedResponse.stable);
    });

    setPhase('outcome');
  };

  const handleRestart = () => {
    setPhase('idle');
    setSelectedResponseId(null);
    setOutcomeDeltas([]);
    setResolvedResponse(null);
  };

  const drawerContent = (() => {
    switch (phase) {
      case 'idle':
        return (
          <Stack spacing={2}>
            <Typography variant="body1" sx={{ color: GAME_COLORS.textMuted }}>
              A quiet apartment morning. Time to begin work.
            </Typography>
            <Box>
              <Button variant="contained" onClick={handleStartWork}>
                Start Work
              </Button>
            </Box>
          </Stack>
        );

      case 'pattern':
        return (
          <Stack spacing={2}>
            <Typography variant="h6" sx={{ color: GAME_COLORS.text, fontWeight: 700 }}>
              {scenario.pattern.name} appears
            </Typography>
            <Typography variant="body1" sx={{ color: GAME_COLORS.text }}>
              {scenario.pattern.visibleText}
            </Typography>
            <Stack direction="row" spacing={1.5}>
              <Button variant="outlined" onClick={handlePause}>
                Pause
              </Button>
              <Button variant="contained" onClick={handleContinueToChoices}>
                Continue
              </Button>
            </Stack>
          </Stack>
        );

      case 'paused':
        return (
          <Stack spacing={2}>
            <Typography variant="overline" sx={{ color: GAME_COLORS.accent }}>
              Thought revealed
            </Typography>
            <Typography variant="body1" sx={{ color: GAME_COLORS.text, fontStyle: 'italic' }}>
              {scenario.pattern.hiddenThought}
            </Typography>
            <Box>
              <Button variant="contained" onClick={handleContinueToChoices}>
                Choose response
              </Button>
            </Box>
          </Stack>
        );

      case 'choices':
        return (
          <Stack spacing={2}>
            <Typography variant="h6" sx={{ color: GAME_COLORS.text, fontWeight: 700 }}>
              Choose a response
            </Typography>
            <Typography variant="body2" sx={{ color: GAME_COLORS.textMuted }}>
              {scenario.question}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1.5,
              }}
            >
              {scenario.responses.map((response) => (
                <ResponseCard
                  key={response.id}
                  response={response}
                  selected={selectedResponseId === response.id}
                  onSelect={setSelectedResponseId}
                />
              ))}
            </Box>
            <Box>
              <Button
                variant="contained"
                disabled={!selectedResponse}
                onClick={handleConfirmChoice}
              >
                Confirm choice
              </Button>
            </Box>
          </Stack>
        );

      case 'outcome':
        return (
          <OutcomePanel
            response={resolvedResponse}
            deltas={outcomeDeltas}
            onContinue={() => setPhase('reflection')}
          />
        );

      case 'reflection':
        return (
          <ReflectionPanel
            reflection={reflectionCopy}
            stableStreak={stats.stableStreak}
            onRestart={handleRestart}
          />
        );

      default:
        return null;
    }
  })();

  return (
    <Box className="game-shell">
      <Box className="game-scene-frame">
        <ApartmentScene imageUrl={background.image} label={background.label} />
        <TopBar progressLabel={scenario.progressLabel} stats={stats} />

        <ScenarioDrawer open>{drawerContent}</ScenarioDrawer>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          right: { xs: 12, md: 24 },
          bottom: { xs: 12, md: 24 },
          display: 'flex',
          gap: 1,
        }}
      >
        <Button
          variant="outlined"
          size="small"
          aria-label="Help"
          sx={{
            minWidth: 40,
            width: 40,
            height: 40,
            borderRadius: 2,
            borderColor: GAME_COLORS.drawerBorder,
            color: GAME_COLORS.text,
            bgcolor: 'rgba(15, 23, 42, 0.85)',
          }}
        >
          <HelpOutlinedIcon fontSize="small" />
        </Button>
        <Button
          variant="outlined"
          size="small"
          aria-label="Settings"
          sx={{
            minWidth: 40,
            width: 40,
            height: 40,
            borderRadius: 2,
            borderColor: GAME_COLORS.drawerBorder,
            color: GAME_COLORS.text,
            bgcolor: 'rgba(15, 23, 42, 0.85)',
          }}
        >
          <SettingsIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
}

export default GameShell;
