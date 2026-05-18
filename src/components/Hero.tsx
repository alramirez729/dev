import { Box, Typography } from '@mui/material'

export default function Hero() {
  return (
    <Box component="section" sx={{ maxWidth: 720, mx: 'auto', pt: { xs: 0, sm: 2 }, mb: 6 }}>
      <Typography
        variant="caption"
        sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}
      >
        hi, i'm
      </Typography>
      <Typography
        component="h1"
        sx={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 700, lineHeight: 1, mb: 1 }}
      >
        alejandro
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        software engineer — building things that work.
      </Typography>
    </Box>
  )
}
