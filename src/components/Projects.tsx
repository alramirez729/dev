import { Box, Typography, Card, CardActionArea, CardContent, Chip, Stack } from '@mui/material'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <Box component="section" sx={{ maxWidth: 720, mx: 'auto', mb: 6 }}>
      <Typography
        variant="overline"
        sx={{ color: 'text.secondary', display: 'block', mb: 1.5, letterSpacing: '0.15em', fontSize: '0.8rem' }}
      >
        projects
      </Typography>
      <Stack spacing={1.5}>
        {projects.map(p => (
          <Card key={p.name} variant="outlined">
            <CardActionArea
              component="a"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, py: 1.5, '&:last-child': { pb: 1.5 } }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {p.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.description}
                </Typography>
                <Stack direction="row" spacing={0.5} sx={{ mt: 0.5, flexWrap: 'wrap' }}>
                  {p.tech.map(t => (
                    <Chip key={t} label={t} size="small" variant="outlined" color="primary" />
                  ))}
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}
