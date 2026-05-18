import {
  AppBar, Toolbar, Drawer, List, ListItemButton,
  ListItemText, Typography,
} from '@mui/material'
import { NavLink } from 'react-router-dom'

const DRAWER_WIDTH = 160

const nav = [
  { to: '/', label: 'about', end: true },
  { to: '/projects', label: 'projects' },
  { to: '/links', label: 'links' },
  { to: '/game', label: 'game' },
]

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
                      fontSize: dense ? '0.75rem' : '0.85rem',
                      color: isActive ? 'text.primary' : 'text.secondary',
                      fontFamily: "'Courier New', Courier, monospace",
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
      {/* Mobile: fixed top bar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ display: { sm: 'none' } }}
      >
        <Toolbar variant="dense" sx={{ gap: 1 }}>
          <Typography
            variant="caption"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.1em', mr: 'auto' }}
          >
            ar
          </Typography>
          <List disablePadding sx={{ display: 'flex', flexDirection: 'row' }}>
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
          '& .MuiDrawer-paper': { width: DRAWER_WIDTH, pt: 3, px: 1.5, boxSizing: 'border-box' },
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'primary.main', fontWeight: 700, letterSpacing: '0.1em',
            display: 'block', mb: 3, px: 1,
          }}
        >
          ar
        </Typography>
        <List disablePadding>
          <NavItems />
        </List>
      </Drawer>
    </>
  )
}
