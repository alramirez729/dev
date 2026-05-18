import { Box, Typography, Button, Stack, Divider } from '@mui/material'

const links = [
  { label: 'linkedin', href: 'https://linkedin.com/in/yourhandle', variant: 'outlined' as const },
  { label: 'github', href: 'https://github.com/alramirez729', variant: 'outlined' as const },
]

export default function Links() {
  return (
    <Box component="section" sx={{ maxWidth: 840, mx: 'auto', mb: 8 }}>
      <Typography variant="overline" sx={{ color: 'text.secondary', display: 'block', mb: 3 }}>
        let's connect
      </Typography>

      {/* Primary CTA */}
      <Box
        sx={{
          p: 3,
          mb: 3,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 3,
          background: 'linear-gradient(145deg, #18181b 0%, #111113 100%)',
          display: 'flex',
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: 600, mb: 0.5 }}>Resume</Typography>
          <Typography variant="body2" color="text.secondary">
            Full work history, skills, and education.
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="large"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          component="a"
          sx={{ flexShrink: 0 }}
        >
          view resume ↗
        </Button>
      </Box>

      <Divider sx={{ mb: 3, borderColor: 'divider' }} />

      {/* Secondary links */}
      <Stack direction="row" sx={{ gap: 1.5, flexWrap: 'wrap' }}>
        {links.map(({ label, href, variant }) => (
          <Button
            key={label}
            variant={variant}
            size="large"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            component="a"
          >
            {label} ↗
          </Button>
        ))}
      </Stack>
    </Box>
  )
}
