import styles from "./SocialLinks.module.css"

export function SocialLinks() {
  return (
    <div className={styles.socialLinks}>
      <a href="mailto:rounakgupta829@email.com" className={styles.socialLink} target="_blank" rel="noreferrer">
        <span className={styles.icon}>
        <img src="/icons8-gmail-50.png" alt="Email" className={styles.iconImage} />
        </span>
      </a>
      <a href="https://github.com/codedev1010" className={styles.socialLink} target="_blank" rel="noreferrer">
        <span className={styles.icon}>
        <img src="/githubb.png" alt="github" className={styles.iconImage} />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/rounak-gupta-28079b283/" className={styles.socialLink} target="_blank" rel="noreferrer">
        <span className={styles.icon}>
        <img src="/lnn.png" alt="ln" className={styles.iconImage} />
        </span>
      </a>
    </div>
  )
}

