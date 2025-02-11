import { useState, useEffect } from 'react';
import styles from "./Header.module.css";

export function Header() {
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    if (window.annyang) {
      const commands = {
        'show about me': () => navigateToSection('about'),
        'show skills': () => navigateToSection('skills'),
        'show leet code': () => navigateToSection('leetcode'),
        'show lead code': () => navigateToSection('leetcode'),
        'show projects': () => navigateToSection('projects')
      };

      window.annyang.addCommands(commands);
      window.annyang.start();
    }
  }, []);

  const navigateToSection = (tab) => {
    setActiveTab(tab);
    const section = document.getElementById(tab);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a
              href="#about"
              onClick={() => navigateToSection('about')}
              className={activeTab === 'about' ? styles.active : ''}
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => navigateToSection('skills')}
              className={activeTab === 'skills' ? styles.active : ''}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#leetcode"
              onClick={() => navigateToSection('leetcode')}
              className={activeTab === 'leetcode' ? styles.active : ''}
            >
              LeetCode
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => navigateToSection('projects')}
              className={activeTab === 'projects' ? styles.active : ''}
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
