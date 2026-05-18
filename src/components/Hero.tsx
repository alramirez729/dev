import { Box, Typography } from '@mui/material'

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{ maxWidth: 840, mx: 'auto', pt: { xs: 1, sm: 3 }, mb: 8, position: 'relative' }}
    >
      {/* Background glow */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: -80,
          left: -120,
          width: 480,
          height: 480,
          background: 'radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

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
            lineHeight: 0.92,
            letterSpacing: '-0.04em',
            mb: 3,
            background: 'linear-gradient(135deg, #fafafa 40%, #a78bfa 75%, #7c3aed 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          alejandro
        </Typography>

        <Typography
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '1rem', sm: '1.15rem' },
            fontWeight: 400,
            maxWidth: 440,
            lineHeight: 1.65,
          }}
        >
          software engineer — building things that work.
        </Typography>
      </Box>
    </Box>
  )
}
