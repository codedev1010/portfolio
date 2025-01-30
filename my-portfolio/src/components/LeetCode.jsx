import { useState, useEffect } from "react";
import styles from "./LeetCode.module.css";
import CircularProgress from './CircularProgress';

const fetchLeetCodeData = async (username) => {
  const apiUrl = `https://portfolio-x54w.vercel.app/api/leetcode/${username}`;

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch profile: ${response.status}`);
  }

  return { profile: await response.json() };
};

export function LeetCode() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const username = "rounak_100";
        const data = await fetchLeetCodeData(username);

        const processedProfile = {
          totalSolved: data.profile?.submitStats?.acSubmissionNum?.find(
            (item) => item.difficulty === "All"
          )?.count || 0,
          easySolved: data.profile?.submitStats?.acSubmissionNum?.find(
            (item) => item.difficulty === "Easy"
          )?.count || 0,
          mediumSolved: data.profile?.submitStats?.acSubmissionNum?.find(
            (item) => item.difficulty === "Medium"
          )?.count || 0,
          hardSolved: data.profile?.submitStats?.acSubmissionNum?.find(
            (item) => item.difficulty === "Hard"
          )?.count || 0,
          ranking: data.profile?.profile?.ranking || "N/A",
        };

        setProfile(processedProfile);
      } catch (err) {
        console.error("Error loading data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <section id="leetcode" className={styles.leetcode}>
        <div className={styles.container}>
          <h2 className={styles.title}>LeetCode Profile</h2>
          <div className={styles.loading}>Loading...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="leetcode" className={styles.leetcode}>
        <div className={styles.container}>
          <h2 className={styles.title}>LeetCode Profile</h2>
          <div className={styles.error}>{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="leetcode" className={styles.leetcode}>
      <div className={styles.container}>
        <h1 className={styles.title}>LeetCode Profile</h1>
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <a href="https://leetcode.com/u/rounak_100/" target="_blank" rel="noopener noreferrer">
              <h2>Problems Solved</h2>
            </a>
            <div className={styles.number}>{profile?.totalSolved || 0}</div>
            <div className={styles.breakdown}>
              <div className={styles.progressContainer}>
                <h3 className={styles.progressLabel}>Easy</h3>
                <CircularProgress percentage={(profile?.easySolved / profile?.totalSolved) * 100} />
                <h3 className={styles.progressLabel} style={{ marginTop: '1rem' }}>{profile?.easySolved}</h3>
              </div>
              <div className={styles.progressContainer}>
                <h3 className={styles.progressLabel}>Medium</h3>
                <CircularProgress percentage={(profile?.mediumSolved / profile?.totalSolved) * 100} />
                <h3 className={styles.progressLabel} style={{ marginTop: '1rem' }}>{profile?.mediumSolved}</h3>
              </div>
              <div className={styles.progressContainer}>
                <h3 className={styles.progressLabel}>Hard</h3>
                <CircularProgress percentage={(profile?.hardSolved / profile?.totalSolved) * 100} />
                <h3 className={styles.progressLabel} style={{ marginTop: '1rem' }}>{profile?.hardSolved}</h3>
              </div>
            </div>
          </div>
          <div className={styles.statCard}>
            <a href="https://leetcode.com/u/rounak_100/" target="_blank" rel="noopener noreferrer">
              <h2>Global Ranking</h2>
            </a>
            <h3 style={{ marginTop: "50px" }}>RANK</h3>
            <div className={styles.number} style={{ marginTop: "40px", fontSize: "5.5rem" }}>{profile?.ranking || "N/A"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
