import styles from "./Skills.module.css"

export function Skills() {
  const skills = {
    Languages: ["C++", "JavaScript", "Python", "SQL"],
    Frontend: ["CSS", "HTML", "React", "Tailwind CSS"],
    Backend: ["Express", "Node.js", "REST APIs", "JWT Authentication", "Web Scraping" , "Middlewares"],
    Databases: ["Appwrite", "Firebase", "MongoDB", "RDBMS"],
    Tools: ["Git", "Power BI", "VM Virtual Box", "VS Code" , "Postman"],
    CourseWork: [
      "Computer Networks","Database Management System",
      "Data Structures and Algorithms",
      "Machine Learning",
      "OOPS",
      "Operating Systems"
    ],
    Others: [
      "Adaptive",
      "Consistency",
      "Curious",
      "Detail-Oriented",
      "Problem-Solving",
      "Quick Learner"
    ]
  }

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}
        style={{ color: "#ffb347"}}>Skills</h2>
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
