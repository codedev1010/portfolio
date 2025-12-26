import { useState, useEffect } from "react";
import { SocialLinks } from "./SocialLinks";
import styles from "./Hero.module.css";

export function Hero() {
  const texts = [
    "DSA Enthusiast / Full Stack Web Developer",
    "Part-Time Jokester / Full-Time Mood Swinger"
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className={styles.hero}>
      <h2 className={styles.greeting}>Hi, I am</h2>
      <h1 className={styles.name}>ROUNAK GUPTA</h1>
      <p className={styles.role} style={{ marginTop: "0.5rem" }}>
        {texts[roleIndex]}
      </p>
      <SocialLinks />
    </div>
  );
}
