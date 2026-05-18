import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#7fba00' },
    background: { default: '#0f0f0f', paper: '#1a1a1a' },
    text: { primary: '#e8e8e8', secondary: '#666666' },
    divider: '#1e1e1e',
  },
  typography: {
    fontFamily: "'Courier New', Courier, monospace",
  },
  shape: { borderRadius: 2 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { minHeight: '100dvh' },
        a: { color: '#7fba00', textDecoration: 'none' },
        'a:hover': { textDecoration: 'underline' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a',
          borderColor: '#2a2a2a',
          transition: 'border-color 0.15s',
          '&:hover': { borderColor: '#7fba00' },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Courier New', Courier, monospace",
          textTransform: 'lowercase',
          letterSpacing: 0,
          fontSize: '0.9rem',
          borderRadius: 2,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'Courier New', Courier, monospace",
          borderRadius: 2,
          fontSize: '0.7rem',
          height: 22,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: '4px 8px',
          '&.Mui-selected': { backgroundColor: 'transparent', color: '#e8e8e8' },
          '&.Mui-selected:hover': { backgroundColor: 'rgba(127,186,0,0.06)' },
          '&:hover': { backgroundColor: 'rgba(127,186,0,0.06)' },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: { backgroundColor: '#0f0f0f', borderRightColor: '#1e1e1e' },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundColor: '#0f0f0f', borderBottom: '1px solid #1e1e1e' },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& input': { fontFamily: "'Courier New', Courier, monospace", fontSize: '1rem' },
        },
      },
    },
  },
})
