import { projects } from '../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>projects</h2>
      <div className={styles.grid}>
        {projects.map((p) => (
          <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <span className={styles.cardName}>{p.name}</span>
            <span className={styles.cardDesc}>{p.description}</span>
            <span className={styles.cardTech}>{p.tech.join(' · ')}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
