import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b8865a',
      dark: '#8a5c38',
      light: '#d4a87a',
    },
    background: {
      default: '#12100e',
      paper: '#1c1814',
    },
    text: {
      primary: '#ede8dc',
      secondary: '#8a7a6a',
    },
    divider: '#2e2720',
  },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    h1: { fontWeight: 800, letterSpacing: '-0.04em' },
    h2: { fontWeight: 700, letterSpacing: '-0.02em' },
    overline: { letterSpacing: '0.2em', fontSize: '0.7rem' },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { minHeight: '100dvh' },
        a: { color: '#b8865a', textDecoration: 'none' },
        'a:hover': { textDecoration: 'underline' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #1c1814 0%, #141210 100%)',
          borderColor: '#2e2720',
          borderRadius: 12,
          transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            borderColor: '#b8865a',
            boxShadow: '0 12px 40px rgba(184, 134, 90, 0.14)',
          },
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          '&:hover .MuiCardActionArea-focusHighlight': { opacity: 0 },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Inter', system-ui, sans-serif",
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.9rem',
          borderRadius: 8,
          letterSpacing: 0,
        },
        contained: {
          background: 'linear-gradient(135deg, #b8865a 0%, #8a5c38 100%)',
          boxShadow: '0 2px 16px rgba(138, 92, 56, 0.25)',
          '&:hover': {
            background: 'linear-gradient(135deg, #d4a87a 0%, #b8865a 100%)',
            boxShadow: '0 4px 24px rgba(184, 134, 90, 0.35)',
          },
        },
        outlined: {
          borderColor: '#3a3028',
          '&:hover': {
            borderColor: '#b8865a',
            background: 'rgba(184, 134, 90, 0.06)',
          },
        },
        sizeLarge: { padding: '0.55rem 1.5rem', fontSize: '0.95rem' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
          borderRadius: 4,
          fontSize: '0.68rem',
          height: 22,
        },
        colorPrimary: {
          '&.MuiChip-outlined': {
            borderColor: 'rgba(184, 134, 90, 0.3)',
            color: '#b8865a',
            backgroundColor: 'rgba(184, 134, 90, 0.05)',
            '&:hover': { backgroundColor: 'rgba(184, 134, 90, 0.1)' },
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '6px 10px',
          position: 'relative',
          transition: 'background 0.15s',
          '&.Mui-selected': {
            backgroundColor: 'rgba(184, 134, 90, 0.08)',
            color: '#ede8dc',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: '18%',
              height: '64%',
              width: 2,
              backgroundColor: '#b8865a',
              borderRadius: '0 2px 2px 0',
            },
            '&:hover': { backgroundColor: 'rgba(184, 134, 90, 0.12)' },
          },
          '&:hover': { backgroundColor: 'rgba(184, 134, 90, 0.05)' },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: { backgroundColor: '#12100e', borderRightColor: '#1c1814' },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(18, 16, 14, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #1c1814',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& input': {
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
            fontSize: '1rem',
          },
          '& .MuiInput-underline:before': { borderBottomColor: '#2e2720' },
          '& .MuiInput-underline:hover:before': { borderBottomColor: '#b8865a' },
        },
      },
    },
  },
})
