import { useState, useEffect, useRef } from 'react'
import {
  Card, CardMedia, Typography, IconButton, Box, Collapse, Slider,
} from '@mui/material'
import PlayArrowRounded    from '@mui/icons-material/PlayArrowRounded'
import PauseRounded        from '@mui/icons-material/PauseRounded'
import SkipNextRounded     from '@mui/icons-material/SkipNextRounded'
import SkipPreviousRounded from '@mui/icons-material/SkipPreviousRounded'
import QueueMusicRounded   from '@mui/icons-material/QueueMusicRounded'
import CloseRounded        from '@mui/icons-material/CloseRounded'
import VolumeUpRounded     from '@mui/icons-material/VolumeUpRounded'
import VolumeOffRounded    from '@mui/icons-material/VolumeOffRounded'
import styles from './MusicPlayer.module.css'

// ─── drop your files in public/music/ ───────────────────────────────────────
const playlist = [

  {
    title:  'Beautiful to Me',
    artist: 'Alejandro',
    src:    '/music/real-eyes-realize.mp3',
    cover:  '/music/real-eyes-realize.png',
  },
  {
    title:  'Follow',
    artist: 'Alejandro',
    src:    '/music/follow.mp3',
    cover:  '/music/follow.png',
  },
  {
    title:  'Thoughts of you',
    artist: 'Alejandro',
    src:    '/music/thoughts-of-you.mp3',
    cover:  '/music/thoughts-of-you.png',
  },
]
// ────────────────────────────────────────────────────────────────────────────

function fmt(s: number) {
  if (!isFinite(s) || s < 0) return '0:00'
  const m = Math.floor(s / 60)
  return `${m}:${Math.floor(s % 60).toString().padStart(2, '0')}`
}

const SLIDER_SX = {
  color: 'var(--accent)',
  height: 3,
  padding: '10px 0',
  '& .MuiSlider-rail': { opacity: 0.2 },
}

export default function MusicPlayer() {
  const [visible,           setVisible]           = useState(false)
  const [minimized,         setMinimized]         = useState(false)
  const [playing,           setPlaying]           = useState(false)
  const [showQueue,         setShowQueue]         = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [currentTime,       setCurrentTime]       = useState(0)
  const [duration,          setDuration]          = useState(0)
  const [volume,            setVolume]            = useState(75)
  const [muted,             setMuted]             = useState(false)
  const audioRef    = useRef<HTMLAudioElement>(null)
  const seekingRef  = useRef(false)
  const didMountRef = useRef(false)

  // fade in
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2800)
    return () => clearTimeout(t)
  }, [])

  // attempt autoplay on first reveal
  useEffect(() => {
    if (!visible) return
    audioRef.current?.play()
      .then(() => setPlaying(true))
      .catch(() => {})
  }, [visible])

  // attach audio event listeners; re-attach when track changes so onEnded
  // always has the current index in scope
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onTime  = () => { if (!seekingRef.current) setCurrentTime(audio.currentTime) }
    const onMeta  = () => setDuration(audio.duration)
    const onEnded = () => {
      setCurrentTrackIndex(i => (i + 1) % playlist.length)
    }
    audio.addEventListener('timeupdate',     onTime)
    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('ended',          onEnded)
    return () => {
      audio.removeEventListener('timeupdate',     onTime)
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('ended',          onEnded)
    }
  }, [currentTrackIndex])

  // load + play whenever the track index changes (skip initial mount)
  useEffect(() => {
    if (!didMountRef.current) { didMountRef.current = true; return }
    const audio = audioRef.current
    if (!audio) return
    setCurrentTime(0)
    setDuration(0)
    audio.load()
    audio.play()
      .then(() => setPlaying(true))
      .catch(() => {})
  }, [currentTrackIndex])

  // sync volume/mute to audio element
  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.volume = muted ? 0 : volume / 100
  }, [volume, muted])

  function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) { audio.pause(); setPlaying(false) }
    else         { audio.play().then(() => setPlaying(true)) }
  }

  function skipNext() {
    setCurrentTrackIndex(i => (i + 1) % playlist.length)
  }

  function skipPrev() {
    // restart track if more than 3s in, otherwise go to previous
    if (currentTime > 3) {
      if (audioRef.current) audioRef.current.currentTime = 0
      setCurrentTime(0)
    } else {
      setCurrentTrackIndex(i => (i - 1 + playlist.length) % playlist.length)
    }
  }

  function handleSeek(_: Event, value: number | number[]) {
    const v = value as number
    seekingRef.current = true
    setCurrentTime(v)
    if (audioRef.current) audioRef.current.currentTime = v
  }

  function handleVolume(_: Event, value: number | number[]) {
    const v = value as number
    setVolume(v)
    if (muted && v > 0) setMuted(false)
  }

  const track = playlist[currentTrackIndex]

  return (
    <div className={`${styles.wrapper} ${visible ? styles.visible : ''}`}>
      {/* audio always mounted so playback continues while minimized */}
      <audio ref={audioRef} src={track.src} loop={playlist.length === 1} />

      {minimized ? (
        <button
          className={styles.mini}
          onClick={() => setMinimized(false)}
          aria-label="Open music player"
        >
          <img
            src={track.cover}
            alt={track.title}
            className={styles.miniImg}
            onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
          {playing && <span className={styles.miniDot} />}
        </button>
      ) : (
        <>
          {/* Queue panel */}
          <Collapse in={showQueue} unmountOnExit>
            <Card variant="outlined" sx={{ mb: 0.75, p: 1.5, background: 'var(--card-bg)', borderColor: 'var(--border)' }}>
              <Typography sx={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'text.secondary', mb: 1 }}>
                queue
              </Typography>
              {playlist.map((t, i) => (
                <Box
                  key={i}
                  onClick={() => setCurrentTrackIndex(i)}
                  sx={{
                    display: 'flex', alignItems: 'center', gap: 1,
                    py: 0.5, px: 0.5, borderRadius: '4px', cursor: 'pointer',
                    background: i === currentTrackIndex ? 'rgba(184,134,90,0.08)' : 'transparent',
                    transition: 'background 0.12s',
                    '&:hover': { background: 'rgba(237,232,220,0.05)' },
                  }}
                >
                  <Box sx={{ width: 32, height: 32, borderRadius: '3px', overflow: 'hidden', flexShrink: 0, background: 'var(--border)' }}>
                    <img src={t.cover} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                  </Box>
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography sx={{ fontSize: '0.78rem', fontWeight: i === currentTrackIndex ? 600 : 400, lineHeight: 1.25, color: i === currentTrackIndex ? 'primary.main' : 'text.primary' }} noWrap>
                      {t.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }} noWrap>{t.artist}</Typography>
                  </Box>
                </Box>
              ))}
            </Card>
          </Collapse>

          {/* Player card */}
          <Card variant="outlined" sx={{ p: 1.75, background: 'var(--card-bg)', borderColor: 'var(--border)', backdropFilter: 'blur(10px)', width: 300 }}>

            {/* Top row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <CardMedia
                component="img"
                src={track.cover}
                alt={track.title}
                sx={{ width: 52, height: 52, borderRadius: '5px', flexShrink: 0, background: 'var(--border)' }}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.style.display = 'none' }}
              />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.3, color: 'text.primary' }} noWrap>
                  {track.title}
                </Typography>
                <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary' }} noWrap>
                  {track.artist}
                </Typography>
              </Box>
              <IconButton size="small" onClick={() => setShowQueue(q => !q)} aria-label="Queue"
                sx={{ color: showQueue ? 'primary.main' : 'text.secondary', p: 0.4 }}>
                <QueueMusicRounded sx={{ fontSize: '1.1rem' }} />
              </IconButton>
              <IconButton size="small" onClick={() => setMinimized(true)} aria-label="Minimize"
                sx={{ color: 'text.secondary', p: 0.4 }}>
                <CloseRounded sx={{ fontSize: '1rem' }} />
              </IconButton>
            </Box>

            {/* Progress */}
            <Slider
              size="small"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              onChangeCommitted={() => { seekingRef.current = false }}
              sx={{
                ...SLIDER_SX,
                '& .MuiSlider-thumb': {
                  width: 11, height: 11,
                  '&:hover, &.Mui-focusVisible': { boxShadow: '0 0 0 6px rgba(184,134,90,0.18)' },
                },
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: -0.75, mb: 0.75 }}>
              <Typography sx={{ fontSize: '0.64rem', color: 'text.secondary' }}>{fmt(currentTime)}</Typography>
              <Typography sx={{ fontSize: '0.64rem', color: 'text.secondary' }}>{fmt(duration)}</Typography>
            </Box>

            {/* Controls */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
              <IconButton size="small" onClick={skipPrev} aria-label="Previous"
                sx={{ color: 'text.secondary', p: 0.5 }}>
                <SkipPreviousRounded />
              </IconButton>
              <IconButton onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}
                sx={{ color: 'primary.main', p: 0.5 }}>
                {playing ? <PauseRounded /> : <PlayArrowRounded />}
              </IconButton>
              <IconButton size="small" onClick={skipNext} aria-label="Next"
                sx={{ color: 'text.secondary', p: 0.5 }}>
                <SkipNextRounded />
              </IconButton>

              <Box sx={{ flex: 1 }} />

              <IconButton size="small" onClick={() => setMuted(m => !m)} aria-label={muted ? 'Unmute' : 'Mute'}
                sx={{ color: 'text.secondary', p: 0.4 }}>
                {muted || volume === 0
                  ? <VolumeOffRounded sx={{ fontSize: '1.1rem' }} />
                  : <VolumeUpRounded  sx={{ fontSize: '1.1rem' }} />}
              </IconButton>
              <Slider
                size="small"
                min={0}
                max={100}
                value={muted ? 0 : volume}
                onChange={handleVolume}
                aria-label="Volume"
                sx={{
                  ...SLIDER_SX,
                  width: 68,
                  '& .MuiSlider-thumb': { width: 9, height: 9 },
                }}
              />
            </Box>
          </Card>
        </>
      )}
    </div>
  )
}
