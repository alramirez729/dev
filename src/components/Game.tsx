import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Typography, Button, TextField } from '@mui/material'
import styles from './Game.module.css'

const WORD_POOL = [
  // Tech (keeping the classics)
  'react', 'vite', 'node', 'git', 'vim', 'bash', 'sudo', 'grep', 'curl',
  'html', 'css', 'api', 'sql', 'ssh', 'npm', 'yarn',
  'typescript', 'python', 'golang', 'rust', 'docker',
  'linux', 'nginx', 'redis', 'async', 'await', 'fetch',
  'proxy', 'token', 'hook', 'state', 'module', 'import',
  'export', 'function', 'const', 'array', 'object', 'string',
  'deploy', 'build', 'lint', 'test', 'debug', 'merge', 'branch',

  // Music
  'guitar', 'chord', 'riff', 'fret', 'capo', 'tempo', 'pitch', 'scale',
  'melody', 'harmony', 'rhythm', 'bridge', 'verse', 'chorus', 'solo',
  'vinyl', 'album', 'track', 'bass', 'treble', 'reverb', 'delay', 'gain',
  'amp', 'pedal', 'tuner', 'strap', 'pick', 'string', 'whammy',

  // Art & Design
  'sketch', 'canvas', 'layer', 'palette', 'hue', 'contrast', 'shadow',
  'texture', 'stroke', 'gradient', 'vector', 'pixel', 'frame', 'crop',
  'render', 'glyph', 'serif', 'font', 'grid', 'margin', 'opacity',

  // Gym & Lifting
  'squat', 'deadlift', 'bench', 'curl', 'press', 'rep', 'set', 'grip',
  'rack', 'barbell', 'dumbbell', 'plate', 'form', 'pump', 'gains',
  'macro', 'protein', 'creatine', 'cardio', 'shred', 'bulk',

  // General / Vibe words
  'focus', 'grind', 'craft', 'flow', 'vibe', 'mode', 'loop', 'spark',
  'signal', 'noise', 'static', 'wave', 'pulse', 'drive', 'core',
  'stack', 'depth', 'sharp', 'clean', 'raw', 'bold', 'edge',
]

type WordObj = { id: number; text: string; x: number; y: number; speed: number }
type BurstPixel = { id: number; x: number; y: number; dx: number; dy: number }

const TICK_MS = 50
const LIVES = 3

function getSpeed(score: number) {
  return 0.22 + Math.floor(score / 5) * 0.06
}

function getSpawnInterval(score: number) {
  return Math.max(14, 50 - Math.floor(score / 3) * 4)
}

export default function Game() {
  const [phase, setPhase] = useState<'idle' | 'playing' | 'dead'>('idle')
  const [words, setWords] = useState<WordObj[]>([])
  const [bursts, setBursts] = useState<BurstPixel[]>([])
  const [input, setInput] = useState('')
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(LIVES)
  const [best, setBest] = useState(() => Number(localStorage.getItem('typer-best') ?? 0))

  const tickRef = useRef(0)
  const wordIdRef = useRef(0)
  const burstIdRef = useRef(0)
  const scoreRef = useRef(0)
  const wordsRef = useRef<WordObj[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { scoreRef.current = score }, [score])
  useEffect(() => { wordsRef.current = words }, [words])

  const spawnBurst = useCallback((x: number, y: number) => {
    const pixels: BurstPixel[] = Array.from({ length: 14 }, () => ({
      id: burstIdRef.current++,
      x, y,
      dx: (Math.random() - 0.35) * 160,
      dy: (Math.random() - 0.5) * 100,
    }))
    setBursts(prev => [...prev, ...pixels])
    const ids = new Set(pixels.map(p => p.id))
    setTimeout(() => setBursts(prev => prev.filter(b => !ids.has(b.id))), 600)
  }, [])

  const destroyWord = useCallback((word: WordObj) => {
    setWords(prev => prev.filter(w => w.id !== word.id))
    spawnBurst(word.x, word.y)
    setScore(prev => {
      const next = prev + 1
      setBest(b => {
        if (next > b) { localStorage.setItem('typer-best', String(next)); return next }
        return b
      })
      return next
    })
    setInput('')
  }, [spawnBurst])

  const spawnWord = useCallback(() => {
    const onScreen = wordsRef.current.map(w => w.text)
    const available = WORD_POOL.filter(w => !onScreen.includes(w))
    if (!available.length) return
    const text = available[Math.floor(Math.random() * available.length)]
    setWords(prev => [...prev, {
      id: wordIdRef.current++,
      text, x: 103,
      y: 8 + Math.random() * 76,
      speed: getSpeed(scoreRef.current),
    }])
  }, [])

  useEffect(() => {
    if (phase !== 'playing') return
    tickRef.current = 0
    const interval = setInterval(() => {
      const tick = ++tickRef.current
      if (tick % getSpawnInterval(scoreRef.current) === 0) spawnWord()
      setWords(prev => {
        let lost = 0
        const next = prev.reduce<WordObj[]>((acc, w) => {
          const nx = w.x - w.speed
          if (nx <= -14) { lost++; return acc }
          acc.push({ ...w, x: nx })
          return acc
        }, [])
        if (lost > 0) {
          setLives(l => {
            const nl = l - lost
            if (nl <= 0) setPhase('dead')
            return Math.max(0, nl)
          })
        }
        return next
      })
    }, TICK_MS)
    return () => clearInterval(interval)
  }, [phase, spawnWord])

  useEffect(() => {
    if (phase === 'dead') {
      setBest(prev => {
        const nb = Math.max(prev, scoreRef.current)
        localStorage.setItem('typer-best', String(nb))
        return nb
      })
    }
  }, [phase])

  const start = () => {
    setWords([]); setBursts([]); setInput('')
    setScore(0); setLives(LIVES); tickRef.current = 0; scoreRef.current = 0
    setPhase('playing')
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase().replace(/\s/g, '')
    const match = words.find(w => w.text.startsWith(val))
    if (!match && val.length > 0) { setInput(''); return }
    setInput(val)
    if (match && val === match.text) destroyWord(match)
  }

  const target = words.find(w => w.text.startsWith(input))

  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 1 }}>
        <Typography variant="overline" sx={{ color: 'text.secondary' }}>
          Word Attack
        </Typography>
        <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
            {Array.from({ length: LIVES }, (_, i) => i < lives ? '♥' : '♡').join('')}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            score <strong style={{ color: '#fafafa' }}>{score}</strong>
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            best <strong style={{ color: '#a78bfa' }}>{best}</strong>
          </Typography>
        </Box>
      </Box>

      {/* Arena */}
      <div className={styles.arena}>
        {words.map(w => {
          const isTarget = w === target
          const typed = isTarget ? input : ''
          return (
            <span
              key={w.id}
              className={`${styles.word} ${isTarget ? styles.targeted : ''}`}
              style={{ left: `${w.x}%`, top: `${w.y}%` }}
            >
              <span className={styles.typed}>{typed}</span>
              {w.text.slice(typed.length)}
            </span>
          )
        })}

        {bursts.map(b => (
          <div
            key={b.id}
            className={styles.pixel}
            style={{ left: `${b.x}%`, top: `${b.y}%`, '--dx': `${b.dx}px`, '--dy': `${b.dy}px` } as React.CSSProperties}
          />
        ))}

        {phase === 'idle' && (
          <Box className={styles.overlay}>
            <Typography sx={{ fontWeight: 700, fontSize: '1.3rem', letterSpacing: '-0.02em' }}>
              Word Attack
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              type words before they reach you
            </Typography>
            <Button variant="contained" color="primary" onClick={start} sx={{ mt: 0.5 }}>
              start
            </Button>
            {best > 0 && (
              <Typography variant="caption" color="text.secondary" sx={{ mt: 0.75 }}>
                high score: <span style={{ color: '#a78bfa' }}>{best}</span>
              </Typography>
            )}
          </Box>
        )}

        {phase === 'dead' && (
          <Box className={styles.overlay}>
            <Typography sx={{ fontWeight: 700, fontSize: '1.3rem', letterSpacing: '-0.02em' }}>
              game over
            </Typography>
            <Typography variant="body2" color="text.secondary">
              score: <strong style={{ color: '#fafafa' }}>{score}</strong>
            </Typography>
            {score >= best && score > 0 && (
              <Typography variant="caption" sx={{ color: 'primary.main' }}>new best!</Typography>
            )}
            <Button variant="contained" color="primary" onClick={start} sx={{ mt: 0.5 }}>
              try again
            </Button>
          </Box>
        )}
      </div>

      {/* Input */}
      {phase === 'playing' && (
        <TextField
          inputRef={inputRef}
          variant="standard"
          value={input}
          onChange={handleInput}
          placeholder="type here..."
          autoComplete="off"
          autoCapitalize="none"
          spellCheck={false}
          fullWidth
          sx={{ mt: 1 }}
          slotProps={{ htmlInput: { style: { fontFamily: "'Courier New', Courier, monospace" } } }}
        />
      )}
    </Box>
  )
}
