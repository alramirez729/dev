import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.greeting}>hi, i'm</p>
      <h1 className={styles.name}>alejandro</h1>
      <p className={styles.tagline}>software engineer — building things that work.</p>
    </section>
  )
}
