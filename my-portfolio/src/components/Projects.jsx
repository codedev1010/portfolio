import styles from "./Projects.module.css";

export function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.content}>
                    <div className={styles.projectList}>
                        <div className={styles.project}>
                            <h3>
                                <a href="https://nsut-canteen-management.vercel.app/HomePage" target="_blank" rel="noopener noreferrer">
                                    Student Center Management System - Link 1
                                </a>
                                {" | "}
                                <a href="https://nsut-canteen-manager.vercel.app/HomePage" target="_blank" rel="noopener noreferrer">
                                    Student Center Management System - Link 2
                                </a>
                            </h3>
                            <p>
                                Contributed in the frontend of the student center management system
                                which allows them to order their meals online from the website instead of waiting
                                in long queues.</p>
                               <p> It also provides the admin with the functionality to manage the orders and the menu.
                            </p>
                            <p><strong>Technologies:</strong> React.js, JavaScript, HTML, CSS, Tailwind</p>
                        </div>

                        <div className={styles.project}>
                            <h3><a href="https://youtu.be/om4OJfnCGwE?si=sqpbmWr1acKlCfmm" target="_blank" rel="noopener noreferrer">Automated Water Irrigation System</a></h3>
                            <p>
                                Implemented a system that automatically irrigates the plants based on the soil moisture level and weather conditions.
                            </p>
                            <p><strong>Technologies:</strong> C/C++,Arduino,NodeMcu,IOT</p>
                        </div>
                        <div className={styles.project}>
                            <h3><a href="https://youtu.be/AiZcETprKBc?si=ZyfZZlyWdSxafCR9" target="_blank" rel="noopener noreferrer">Automated Pulse Alert System</a></h3>
                            <p>
                                Implemented a system that automatically sends an alert message to the nearby hospital in case of a low pulse rate.
                            </p>
                            <p><strong>Technologies:</strong>C/C++,Arduino,NodeMcu,IOT</p>
                        </div>
                        <div className={styles.project}>
                            <h3>Business Management DBMS</h3>
                            <p>
                                Developed a database system for tracking daily sales, top orders, peak sales time slots, and order categorization for better business insights.
                            </p>
                            <p><strong>Technologies:</strong> DAX , PowerBI</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}