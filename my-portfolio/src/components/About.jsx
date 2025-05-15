import styles from "./About.module.css"

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.detail} style={{
            color: "	#333333",
            fontWeight: 600,
            fontSize: "1.1rem",
          }}>

            <p> Hi! I’m Rounak, a Computer Science undergrad at Netaji Subhas University of Technology (NSUT), Class of 2027.

              I’m well-versed in Data Structures & Algorithms and currently exploring the world of Web Development. Outside of tech, I enjoy doing stand-up comedy, playing cricket, and sharpening my game in chess.
              Whether it's debugging an error, delivering a punchline, or planning the next move on the board — I love the challenge and the thrill of learning something new every day.</p>
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
              <h5>CGPA: 8.30</h5>
            </div>
            <div className={`${styles.detail} ${styles.largeDetail}`}>
              <h3>Academic Achievements and Awards</h3>
              <p>Achieved 99.34 percentile in JEE MAINS 2023</p>
              <p>Secured AIR 12K in JEE ADVANCED 2023</p>
              <p>Successfully solved over 700 problems across various coding platforms</p>
              <p>Awarded 2nd position in Atal Tinkering Lab Hackathon at School Level</p>
              <p>Received 2 Silver Medals in Science Olympiad</p>
              <p>Awarded Gold Medal in G.K. Olympiad</p>
              <p>Earned Bronze Medal in TATA Essay Competition</p>
            </div>
            <div className={styles.detail}>
              <h3>Positions of Responsibility</h3>
              <p>Active Member of Google Developer Student Club (GDSC) - DSA Team</p>
              <p>Lead Mentor at Shakesjeer (Open Mic Society) - Stand-up Comedy Division</p>
            </div>
            <div className={styles.detail}>
              <h3>Extra-Curricular Activities and Achievements</h3>
              <p>Advanced to Semifinals in Winter Sports 2024 (Cricket)</p>
              <p>Regular performer at Shakesjeer Open Mic events</p>
              <p>Secured 3rd prize in NSUT GOT TALENT by Shakesjeer</p>
              <p>Successfully organized major events including Talent Hunt and NSUT GOT TALENT during MOKSHA</p>
              <p>Dedicated over 60 hours volunteering at Prayas, an initiative focused on educating underprivileged children</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}