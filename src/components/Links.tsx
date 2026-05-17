import styles from './Links.module.css'

export default function Links() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>find me</h2>
      <div className={styles.row}>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.btn}>
          resume
        </a>
        <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" className={styles.btn}>
          linkedin
        </a>
        <a href="https://github.com/alramirez729" target="_blank" rel="noopener noreferrer" className={styles.btn}>
          github
        </a>
      </div>
    </section>
  )
}
