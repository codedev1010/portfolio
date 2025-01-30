import { useState, useEffect } from "react";
import { SocialLinks } from "./SocialLinks";
import styles from "./Hero.module.css";

export function Hero() {
  const [roleText, setRoleText] = useState("Full Stack Developer / Competitive Coder");

  useEffect(() => {
    const texts = [
      "DSA Enthusiast / Web Dev in the Making",
      "Part-Time Jokester / Full-Time Mood Swinger"
    ];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setRoleText(texts[index]);
    }, 2000); // Change text every 4 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.hero}>
      <h2 className={styles.greeting}>Hi, I am</h2>
      <h1 className={styles.name}>ROUNAK GUPTA</h1>
      <p className={styles.role} style={{ marginTop: "1rem" }}>{roleText}</p>
      <SocialLinks />
    </div>
  );
}
