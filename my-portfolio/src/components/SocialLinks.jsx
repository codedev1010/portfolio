import { useEffect } from "react";
import styles from "./SocialLinks.module.css";

export function SocialLinks() {
  useEffect(() => {
    if (annyang) {
      const commands = {
        "open email": () => openLink(".email"),
        "show github": () => openLink(".github"),
        // Exact match for "open LinkedIn"
        "show linkedin": () => openLink(".linkedin"),
      };

      annyang.addCommands(commands);

      // Enable exact-match mode (ensures better accuracy)
      annyang.start({ autoRestart: true, continuous: false });
    }
  }, []);

  const openLink = (selector) => {
    const link = document.querySelector(selector);
    if (link) {
      link.classList.add(styles.active);
      setTimeout(() => {
        link.classList.remove(styles.active);
        link.click(); // Simulate click to open link
      }, 500);
    }
  };

  return (
    <div className={styles.socialLinks}>
      <a href="mailto:rounakgupta829@email.com" className={`${styles.socialLink} email`} target="_blank" rel="noreferrer">
        <span className={styles.icon}>
          <img src="/icons8-gmail-50.png" alt="Email" className={styles.iconImage} />
        </span>
      </a>
      <a href="https://github.com/codedev1010" className={`${styles.socialLink} github`} target="_blank" rel="noreferrer">
        <span className={styles.icon}>
          <img src="/githubb.png" alt="GitHub" className={styles.iconImage} />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/rounak-gupta-28079b283/" className={`${styles.socialLink} linkedin`} target="_blank" rel="noreferrer">
        <span className={styles.icon}>
          <img src="/lnn.png" alt="LinkedIn" className={styles.iconImage} />
        </span>
      </a>
    </div>
  );
}
