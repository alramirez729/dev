import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import { theme } from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Links from './components/Links'
import Game from './components/Game'

export const DRAWER_WIDTH = 200

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Box
          component="main"
          sx={{
            ml: { xs: 0, sm: `${DRAWER_WIDTH}px` },
            px: { xs: '1.25rem', sm: '3rem' },
            pt: { xs: 'calc(52px + 1.5rem)', sm: '3rem' },
            pb: '4rem',
          }}
        >
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/links" element={<Links />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  )
}
