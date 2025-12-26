import styles from "./Projects.module.css";

export function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <h2 className={styles.title}
                  style={{color: "#ffb347"}}
                >Projects</h2>

                <div className={styles.content}>
                    <div className={styles.projectList}>

                        {/* 1 - BLOG PLATFORM */}
                        <div className={styles.project}>
                            <h3>
                                <a href="https://blog-website-beta-navy.vercel.app" target="_blank">
                                    Your Space - Online Blogging Platform
                                </a>
                            </h3>
                            <p>
                                This project is an online blogging platform where users can create,
                                view, and manage blogs seamlessly. It includes a clean post editor,
                                subscription model, likes, user analytics & more.
                            </p>

                            <div className={styles.techContainer}>
                                <strong>Technologies:</strong>
                                <div className={styles.techList}>
                                    {["React","Node.js","Appwrite","Tailwind CSS","Razorpay"].map((tech) => (
                                        <span key={tech} className={styles.techItem}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 2 - ATTENDANCE TRACKER */}
                        <div className={styles.project}>
                            <h3>
                                <a href="https://nsut-attendance-pied.vercel.app" target="_blank">
                                    Proxy - NSUT Attendance Tracker
                                </a>
                            </h3>
                            <p>
                                A faster alternative to NSUT UMS built using browser automation +
                                web scraping. Students can view attendance instantly without
                                navigating multiple pages.
                            </p>

                            <div className={styles.techContainer}>
                                <strong>Technologies:</strong>
                                <div className={styles.techList}>
                                    {["React","Node.js","Tailwind CSS","Web Scraping","Puppeteer"].map((tech) => (
                                        <span key={tech} className={styles.techItem}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 3 - MUSIC PLATFORM */}
                        <div className={styles.project}>
                            <h3>
                                <a href="https://dhvanix.vercel.app" target="_blank">
                                    Dhvanix - Music Streaming Platform
                                </a>
                            </h3>
                            <p>
                                Full-stack streaming platform with admin panel for managing albums
                                and songs. Smooth UI & secure backend with DB integration.
                            </p>

                            <div className={styles.techContainer}>
                                <strong>Technologies:</strong>
                                <div className={styles.techList}>
                                    {["React","Node.js","Tailwind CSS","MongoDB","Cloudinary"].map((tech) => (
                                        <span key={tech} className={styles.techItem}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 4 - DBMS PROJECT */}
                        <div className={styles.project}>
                            <h3>
                                <a href="https://youtu.be/lCp4tWhv6ao" target="_blank">
                                    Business Management DBMS
                                </a>
                            </h3>
                            <p>
                                Dashboard for visualizing sales, trends, top orders and business stats.
                                Built for analytical decision making.
                            </p>

                            <div className={styles.techContainer}>
                                <strong>Technologies:</strong>
                                <div className={styles.techList}>
                                    {["DAX","Power BI","Data Visualization","Business Analytics"].map((tech) => (
                                        <span key={tech} className={styles.techItem}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
