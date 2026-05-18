import { Box, Typography } from '@mui/material'

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{ pt: { xs: 1, sm: 2 }, position: 'relative' }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="overline"
          sx={{ color: 'text.secondary', display: 'block', mb: 1.5 }}
        >
          hi, i'm
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontSize: 'clamp(3.2rem, 10vw, 6rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            mb: 3,
            color: '#ede8dc',
          }}
        >
          Alejandro
          Ramirez
        </Typography>

        <Typography
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '1rem', sm: '1.15rem' },
            fontWeight: 400,
            maxWidth: 480,
            lineHeight: 1.65,
          }}
        >
          software engineer — building things that work... sometimes. Feel free to listen to music I made while you explore a personal collection of projects, blog posts, and more.
        </Typography>
        <Typography
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '0.85rem', sm: '0.9rem' },
            fontWeight: 400,
            mt: 1,
            opacity: 0.7,
          }}
        >
          currently @ Liberty Mutual
        </Typography>
      </Box>
    </Box>
  )
}
