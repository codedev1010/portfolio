import styles from "./Skills.module.css"

export function Skills() {
  const skills = {
    Languages : ["C++", "Python", "JavaScript"],
    Frontend: ["React", "JavaScript", "HTML", "CSS"],
    Backend: ["Node.js", "Express", "MongoDB", "SQL"],
    Tools: ["Git", "VS Code", "VM Virtual Box", "Power BI"],
    Other: ["Data Structures", "Algorithms", "OOPS", "Competitive Programming","Operating Systems","DataBase Management System"],
  }

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skillsGrid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.skillsList}>
                {items.map((skill) => (
                  <div key={skill} className={styles.skillItem}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

