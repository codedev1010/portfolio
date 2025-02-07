import { useState, useEffect } from "react";
import styles from "./LeetCode.module.css";
import CircularProgress from './CircularProgress';

const fetchLeetCodeData = async (username) => {
  const apiUrl = `https://rounakg.vercel.app/api/leetcode/${username}`;

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch profile: ${response.status}`);
  }

  const data = await response.json();
  console.log("API Response (JSON):", data); // Log the parsed JSON
  return data;
};

export function LeetCode() {
  const [solvedData, setSolvedData] = useState(null);
  const [contestData, setContestData] = useState(null);
  const [badgesData, setBadgesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const username = "rounak_100"; // Replace with dynamic username if needed
        const data = await fetchLeetCodeData(username);

        // Process solved data
        const processedSolvedData = {
          totalSolved: data.solved?.solvedProblem || 0,
          easySolved: data.solved?.easySolved || 0,
          mediumSolved: data.solved?.mediumSolved || 0,
          hardSolved: data.solved?.hardSolved || 0,
        };

        // Process contest data
        const processedContestData = {
          contestRating: Math.ceil(data.contest?.contestRating) || "N/A", // Round the rating
          globalRanking: data.contest?.contestGlobalRanking || "N/A",
        };

        // Process badges data
        const processedBadgesData = data.badges?.badges || [];

        setSolvedData(processedSolvedData);
        setContestData(processedContestData);
        setBadgesData(processedBadgesData);
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

  // Calculate percentages for solved problems
  const totalSolved = solvedData?.totalSolved || 1; // Fallback to 1 to avoid division by zero
  const easyPercentage = (solvedData?.easySolved / totalSolved) * 100;
  const mediumPercentage = (solvedData?.mediumSolved / totalSolved) * 100;
  const hardPercentage = (solvedData?.hardSolved / totalSolved) * 100;

  return (
    <section id="leetcode" className={styles.leetcode}>
      <div className={styles.container}>
        <h1 className={styles.title}>LeetCode Profile</h1>

        {/* First Row: Problems Solved and Contest Rating */}
        <div className={styles.stats}>
          {/* Problems Solved Stat Card */}
          <div className={styles.statCard}>
            <a href="https://leetcode.com/u/rounak_100/" target="_blank" rel="noopener noreferrer">
              <h2>Problems Solved</h2>
            </a>
            <div className={styles.number}>{solvedData?.totalSolved || 0}</div>
            <div className={styles.breakdown}>
              <div className={styles.progressContainer}>
                <h3 className={styles.progressLabel}>Easy</h3>
                <CircularProgress percentage={easyPercentage} />
                <h3 className={styles.progressLabel} style={{ marginTop: '1rem' }}>{solvedData?.easySolved}</h3>
              </div>
              <div className={styles.progressContainer}>
                <h3 className={styles.progressLabel}>Medium</h3>
                <CircularProgress percentage={mediumPercentage} />
                <h3 className={styles.progressLabel} style={{ marginTop: '1rem' }}>{solvedData?.mediumSolved}</h3>
              </div>
              <div className={styles.progressContainer}>
                <h3 className={styles.progressLabel}>Hard</h3>
                <CircularProgress percentage={hardPercentage} />
                <h3 className={styles.progressLabel} style={{ marginTop: '1rem' }}>{solvedData?.hardSolved}</h3>
              </div>
            </div>
          </div>

          {/* Contest Rating Stat Card */}
          <div className={styles.statCard}>
            <a href="https://leetcode.com/u/rounak_100/" target="_blank" rel="noopener noreferrer">
              <h2>Contest Rating</h2>
            </a>
            <h2 style={{ marginTop: "50px",color: 'var(--text-color, #333333)' }}>RATING</h2>
            <div className={styles.number} style={{ marginTop: "30px", fontSize: "6rem" }}>
              {contestData?.contestRating || "N/A"}
            </div>
            <h2 style={{ marginTop: "20px",color: 'var(--text-color, #333333)' }}>GLOBAL RANK</h2>
            <div className={styles.number} style={{ marginTop: "10px", fontSize: "4rem" }}>
              {contestData?.globalRanking || "N/A"}
            </div>
          </div>
        </div>

        {/* Second Row: Badges Earned */}
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <a href="https://leetcode.com/u/rounak_100/" target="_blank" rel="noopener noreferrer">
              <h2>Badges Earned</h2>
            </a>
            <div className={styles.badgesContainer}>
              {badgesData.length > 0 ? (
                badgesData.map((badge, index) => {
                  // Replace the icon URL for the specific badge
                  const badgeIcon = badge.displayName === "Oct LeetCoding Challenge"
                    ? "/oct.png" // Replace with a working URL
                    : badge.icon;

                  return (
                    <div key={index} className={styles.badge}>
                      <img
                        src={badgeIcon}
                        alt={badge.displayName}
                        className={styles.badgeIcon}
                        onError={(e) => {
                          e.target.src = "/oct.png"; // Fallback image
                        }}
                      />
                      <p>{badge.displayName}</p>
                    </div>
                  );
                })
              ) : (
                <p>No badges earned yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}