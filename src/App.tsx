import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Links from './components/Links'
import Game from './components/Game'
import styles from './App.module.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/links" element={<Links />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
