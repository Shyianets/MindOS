import BoltIcon from '@mui/icons-material/Bolt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomeIcon from '@mui/icons-material/Home';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkIcon from '@mui/icons-material/Work';

export const STAT_CONFIG = {
  energy: { label: 'Energy', icon: BoltIcon, hud: true },
  hunger: { label: 'Hunger', icon: RestaurantIcon, hud: true },
  fun: { label: 'Fun', icon: SportsEsportsIcon, hud: true },
  environment: { label: 'Environment', icon: HomeIcon, hud: false },
  awareness: { label: 'Awareness', icon: PsychologyIcon, hud: true },
  selfTrust: { label: 'Self-trust', icon: VerifiedIcon, hud: true },
  workProgress: { label: 'Work progress', icon: WorkIcon, hud: true },
  stableStreak: { label: 'Stable streak', icon: EmojiEventsIcon, hud: false },
};

export const HUD_STAT_KEYS = Object.entries(STAT_CONFIG)
  .filter(([, config]) => config.hud)
  .map(([key]) => key);
