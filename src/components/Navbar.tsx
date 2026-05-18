import {
  AppBar, Toolbar, Drawer, List, ListItemButton,
  ListItemText, Typography, Box,
} from '@mui/material'
import { NavLink } from 'react-router-dom'
import { DRAWER_WIDTH } from '../App'

const nav = [
  { to: '/', label: 'about', end: true },
  { to: '/projects', label: 'projects' },
  { to: '/links', label: 'links' },
  { to: '/game', label: 'game' },
]

function Logo() {
  return (
    <Typography
      sx={{
        fontWeight: 800,
        fontSize: '1.1rem',
        letterSpacing: '-0.03em',
        background: 'linear-gradient(135deg, #fafafa 30%, #a78bfa 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        userSelect: 'none',
      }}
    >
      ar.
    </Typography>
  )
}

function NavItems({ dense = false }: { dense?: boolean }) {
  return (
    <>
      {nav.map(({ to, label, end }) => (
        <NavLink key={to} to={to} end={end} style={{ textDecoration: 'none', color: 'inherit' }}>
          {({ isActive }) => (
            <ListItemButton selected={isActive} dense={dense}>
              <ListItemText
                primary={label}
                slotProps={{
                  primary: {
                    sx: {
                      fontSize: dense ? '0.8rem' : '0.875rem',
                      fontWeight: isActive ? 500 : 400,
                      color: isActive ? 'text.primary' : 'text.secondary',
                    },
                  },
                }}
              />
            </ListItemButton>
          )}
        </NavLink>
      ))}
    </>
  )
}

export default function Navbar() {
  return (
    <>
      {/* Mobile: frosted top bar */}
      <AppBar position="fixed" elevation={0} sx={{ display: { sm: 'none' } }}>
        <Toolbar variant="dense" sx={{ gap: 0.5, minHeight: 52 }}>
          <Box sx={{ mr: 'auto' }}>
            <Logo />
          </Box>
          <List disablePadding sx={{ display: 'flex', flexDirection: 'row', gap: 0 }}>
            <NavItems dense />
          </List>
        </Toolbar>
      </AppBar>

      {/* Desktop: permanent left sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            pt: 4,
            px: 2,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ mb: 4, px: 1 }}>
          <Logo />
        </Box>
        <List disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
          <NavItems />
        </List>
      </Drawer>
    </>
  )
}
