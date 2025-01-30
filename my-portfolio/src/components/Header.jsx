import { useState } from 'react';
import styles from "./Header.module.css";

export function Header() {
  const [activeTab, setActiveTab] = useState('about');

  const handleNavClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a 
              href="#about" 
              onClick={() => handleNavClick('about')} 
              className={activeTab === 'about' ? styles.active : ''}
            >
              About me
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              onClick={() => handleNavClick('skills')} 
              className={activeTab === 'skills' ? styles.active : ''}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#leetcode" 
              onClick={() => handleNavClick('leetcode')} 
              className={activeTab === 'leetcode' ? styles.active : ''}
            >
              LeetCode
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={() => handleNavClick('projects')} 
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