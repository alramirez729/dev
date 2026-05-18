import { useState, useEffect, useRef } from 'react'
import styles from './Navbar.module.css'

const sections = [
  { id: 'about',    label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'links',    label: 'links' },
  { id: 'game',     label: 'game' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  function scrollTo(id: string) {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav} ref={ref}>
      <button
        className={styles.toggle}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-label="navigation menu"
      >
        ar.
      </button>

      {open && (
        <ul className={styles.menu} role="list">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button className={styles.item} onClick={() => scrollTo(id)}>
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
