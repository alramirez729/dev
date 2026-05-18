import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a78bfa',
      dark: '#7c3aed',
      light: '#c4b5fd',
    },
    background: {
      default: '#09090b',
      paper: '#18181b',
    },
    text: {
      primary: '#fafafa',
      secondary: '#a1a1aa',
    },
    divider: '#27272a',
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
        a: { color: '#a78bfa', textDecoration: 'none' },
        'a:hover': { textDecoration: 'underline' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #18181b 0%, #111113 100%)',
          borderColor: '#27272a',
          borderRadius: 12,
          transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            borderColor: '#a78bfa',
            boxShadow: '0 12px 40px rgba(167, 139, 250, 0.14)',
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
          background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
          boxShadow: '0 2px 16px rgba(124, 58, 237, 0.25)',
          '&:hover': {
            background: 'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%)',
            boxShadow: '0 4px 24px rgba(167, 139, 250, 0.35)',
          },
        },
        outlined: {
          borderColor: '#3f3f46',
          '&:hover': {
            borderColor: '#a78bfa',
            background: 'rgba(167, 139, 250, 0.06)',
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
            borderColor: 'rgba(167, 139, 250, 0.3)',
            color: '#a78bfa',
            backgroundColor: 'rgba(167, 139, 250, 0.05)',
            '&:hover': { backgroundColor: 'rgba(167, 139, 250, 0.1)' },
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
            backgroundColor: 'rgba(167, 139, 250, 0.08)',
            color: '#fafafa',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: '18%',
              height: '64%',
              width: 2,
              backgroundColor: '#a78bfa',
              borderRadius: '0 2px 2px 0',
            },
            '&:hover': { backgroundColor: 'rgba(167, 139, 250, 0.12)' },
          },
          '&:hover': { backgroundColor: 'rgba(167, 139, 250, 0.05)' },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: { backgroundColor: '#09090b', borderRightColor: '#18181b' },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(9, 9, 11, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #18181b',
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
          '& .MuiInput-underline:before': { borderBottomColor: '#27272a' },
          '& .MuiInput-underline:hover:before': { borderBottomColor: '#a78bfa' },
        },
      },
    },
  },
})
