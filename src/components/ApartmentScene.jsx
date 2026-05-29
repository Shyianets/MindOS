import { Box } from '@mui/material';

function ApartmentScene({ imageUrl, label }) {
  return (
    <Box
      role="img"
      aria-label={label}
      sx={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#101418',
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    />
  );
}

export default ApartmentScene;
