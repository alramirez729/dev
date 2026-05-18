import { useState, useCallback } from 'react'
import styles from './MiniGame.module.css'

const WORDS = ['react', 'vite', 'typescript', 'css', 'html', 'node', 'git', 'linux']

export default function MiniGame() {
  const [active, setActive] = useState(false)
  const [word, setWord] = useState('')
  const [input, setInput] = useState('')
  const [score, setScore] = useState(0)
  const [best, setBest] = useState(0)

  const nextWord = useCallback(() => {
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)])
    setInput('')
  }, [])

  const start = () => {
    setScore(0)
    setActive(true)
    nextWord()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setInput(val)
    if (val === word) {
      const next = score + 1
      setScore(next)
      if (next > best) setBest(next)
      nextWord()
    }
  }

  return (
    <section id="game" className={styles.section}>
      <h2 className={styles.heading}>type fast</h2>
      {!active ? (
        <button className={styles.startBtn} onClick={start}>
          {best > 0 ? `play again — best: ${best}` : 'start'}
        </button>
      ) : (
        <div className={styles.game}>
          <span className={styles.wordDisplay}>{word}</span>
          <input
            autoFocus
            className={styles.input}
            value={input}
            onChange={handleChange}
            placeholder="type it..."
            spellCheck={false}
          />
          <span className={styles.score}>{score} words</span>
          <button className={styles.quitBtn} onClick={() => setActive(false)}>quit</button>
        </div>
      )}
    </section>
  )
}
