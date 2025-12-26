import styles from "./About.module.css"

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>

        <div className={styles.content}>
          <div className={styles.detail}
            style={{ color: "white", fontWeight: 600, fontSize: "1.1rem" }}
          >
            <p>
              Hi! I’m Rounak, a Computer Science undergrad at Netaji Subhas University of Technology (NSUT), Class of 2027. I’m well-versed in Data Structures & Algorithms and now actively building full-stack web applications using modern technologies. I believe deeply in consistency, quality, and writing clean, maintainable code.
              Beyond tech, I enjoy stand-up comedy, cricket,
              and chess — whether it's debugging an issue,
              crafting a punchline, or planning the next move on
              the board, I love the thrill of learning and improving
              a little every single day.
            </p>
          </div>

          <div className={styles.details}>

            <div className={styles.detail}>
              <h3>Senior Secondary Education</h3>
              <h4>Sneh International School</h4>
              <h5>CBSE Board</h5>
              <h5>Class X: 97.4%</h5>
              <h5>Class XII: 95%</h5>
            </div>

            <div className={styles.detail}>
              <h3>Higher Education</h3>
              <h4>Netaji Subhash University of Technology</h4>
              <h5>B.Tech in Computer Science</h5>
              <h5>CGPA: 8.45</h5>
            </div>

            {/* 🔥 Converted into badges list like Skills */}
            <div className={`${styles.detail} ${styles.largeDetail}`}>
              <h3>Academic Achievements & Awards</h3>
              <div className={styles.listContainer}>
                {[
                  "99.34 percentile in JEE MAINS 2023",
                  "AIR 12K in JEE ADVANCED 2023",
                  "1200+ coding problems solved",
                  "2× Silver Medal - Science Olympiad",
                  "Gold Medal - GK Olympiad",
                  "Bronze - TATA Essay Competition"
                ].map(item => (
                  <span className={styles.listItem} key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className={styles.detail}>
              <h3>Positions of Responsibility</h3>
              <div className={styles.listContainer}>
                {[
                  "Head Of Performers - Shakesjeer Stand-up Division",
                  "Member - GDSC (DSA Team)"
                ].map(item => (
                  <span className={styles.listItem} key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className={styles.detail}>
              <h3>Extra Curricular Activities</h3>
              <div className={styles.listContainer}>
                {[
                  "Semifinalist - Winter Sports Cricket 2024",
                  "Regular Open-Mic Performer",
                  "3rd Prize - NSUT Got Talent",
                  "Organized Talent Hunt + Moksha GOT TALENT",
                  "60+ hrs volunteering at Prayas"
                ].map(item => (
                  <span className={styles.listItem} key={item}>{item}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
