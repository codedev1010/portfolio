import styles from "./Header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#leetcode">LeetCode</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <button className={styles.contactButton}>CONTACT ME</button>
      </nav>
    </header>
  )
}

