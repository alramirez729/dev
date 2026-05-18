import { Box, Typography, Button, Stack } from '@mui/material'

export default function Links() {
  return (
    <Box component="section" sx={{ maxWidth: 720, mx: 'auto', mb: 6 }}>
      <Typography
        variant="overline"
        sx={{ color: 'text.secondary', display: 'block', mb: 1.5, letterSpacing: '0.15em', fontSize: '0.8rem' }}
      >
        find me
      </Typography>
      <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap' }}>
        <Button
          variant="outlined"
          color="primary"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          component="a"
        >
          resume
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="https://linkedin.com/in/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          component="a"
        >
          linkedin
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="https://github.com/alramirez729"
          target="_blank"
          rel="noopener noreferrer"
          component="a"
        >
          github
        </Button>
      </Stack>
    </Box>
  )
}
