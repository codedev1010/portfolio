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
                                <a href="https://easy-eats-canteen.vercel.app/HomePage" target="_blank" rel="noopener noreferrer">
                                    Student Center Management System - Link 1
                                </a>
                                {" | "}
                                <a href="https://canteen-manager-frontend.vercel.app
                                                                                       " target="_blank" rel="noopener noreferrer">
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
                            <h3><a href="https://dhvanix.vercel.app/" target="_blank" rel="noopener noreferrer">Dhvanix - Music Streaming Platform</a></h3>
                            <p>
                                Built a frontend for users to stream added songs and albums with an intuitive and responsive UI
                                and developed an admin panel for adding and managing songs and albums, ensuring structured content management
                            </p>
                            <p><strong>Technologies:</strong>React, JavaScript, HTML, CSS, MongoDB, Node.js, Express.js, Firebase Authentication, Cloudify</p>
                        </div>
                        <div className={styles.project}>
                            <h3><a href="https://youtu.be/om4OJfnCGwE?si=sqpbmWr1acKlCfmm" target="_blank" rel="noopener noreferrer">Automated Water Irrigation System</a></h3>
                            <p>
                                Implemented a system that automatically irrigates the plants based on the soil moisture level and weather conditions.
                            </p>
                            <p><strong>Technologies:</strong> C/C++,NodeMcu,IOT,Embedded Systems</p>
                        </div>
                        <div className={styles.project}>
                            <h3><a href="https://youtu.be/lCp4tWhv6ao" target="_blank" rel="noopener noreferrer">Business Management DBMS</a></h3>
                            <p>
                                Developed a database system for tracking daily sales, top orders, peak sales time slots, and order categorization for better business insights.
                            </p>
                            <p><strong>Technologies:</strong> DAX , PowerBI, Data Visualization, Business Analytics</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}