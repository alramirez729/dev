import { Box, Typography, Card, CardActionArea, CardContent, Chip, Stack } from '@mui/material'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <Box>
      <Typography
        variant="overline"
        sx={{ color: 'text.secondary', display: 'block', mb: 3 }}
      >
        selected work
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: 1.5,
        }}
      >
        {projects.map(p => (
          <Card key={p.name} variant="outlined">
            <CardActionArea
              component="a"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ height: '100%' }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  p: 2.5,
                  '&:last-child': { pb: 2.5 },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
                    {p.name}
                  </Typography>
                  <Typography sx={{ color: 'primary.main', fontSize: '1rem', lineHeight: 1, mt: 0.1 }}>
                    ↗
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.65, mb: 2, flex: 1 }}
                >
                  {p.description}
                </Typography>

                <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.5 }}>
                  {p.tech.map(t => (
                    <Chip key={t} label={t} size="small" variant="outlined" color="primary" />
                  ))}
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  )
}
