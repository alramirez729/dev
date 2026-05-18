import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const nav = [
  { to: '/', label: 'about', end: true },
  { to: '/projects', label: 'projects' },
  { to: '/links', label: 'links' },
  { to: '/game', label: 'game' },
]

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>ar</span>
      <ul className={styles.list}>
        {nav.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `${styles.link}${isActive ? ' ' + styles.active : ''}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
