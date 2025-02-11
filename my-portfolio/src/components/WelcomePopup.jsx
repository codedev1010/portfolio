import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WelcomePopup.module.css";

export function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const commands = [
    "🗣️ Say 'show about me' to know about me",
    "🗣️ Say 'show skills' to see my Skills",
    "🗣️ Say 'show leet code' to check my LeetCode",
    "🗣️ Say 'show projects' to view my Projects",
    "🗣️ Say 'show Linkedin' to view my Linkedin",
    "🗣️ Say 'show github' to view my Github",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % commands.length);
    }, 3000); // Change command every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    isVisible && (
      <div className={styles.popupOverlay}>
        <div className={styles.popup}>
          <h2>👋 Hello! Welcome to my portfolio.</h2>
          <p>I’m excited to have you here! Feel free to know about me and explore my skills , coding profile and projects.</p>

          {/* Voice Command Slider */}
          <div className={styles.sliderContainer}>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className={styles.sliderText}
              >
                {commands[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <button className={styles.closeButton} onClick={() => setIsVisible(false)}>
             Close
          </button>
        </div>
      </div>
    )
  );
}
