import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Links from './components/Links'
import Game from './components/Game'
import styles from './App.module.css'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main className={styles.main}>
        <section id="about"    className={styles.section}><Hero /></section>
        <section id="projects" className={styles.section}><Projects /></section>
        <section id="links"    className={styles.section}><Links /></section>
        <section id="game"     className={styles.section}><Game /></section>
      </main>
    </ThemeProvider>
  )
}
