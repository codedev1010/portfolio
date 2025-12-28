import { useState, useEffect } from "react";
import styles from "./LeetCode.module.css";
import CircularProgress from './CircularProgress';

const BASE_URL = "https://alfa-leetcode-api.onrender.com";

const fetchLeetCodeData = async (username) => {
  try {
    const [solvedRes, contestRes, badgesRes] = await Promise.all([
      fetch(`${BASE_URL}/${username}/solved`),
      fetch(`${BASE_URL}/${username}/contest`),
      fetch(`${BASE_URL}/${username}/badges`)
    ]);

    if (!solvedRes.ok || !contestRes.ok || !badgesRes.ok) {
      throw new Error("Failed to fetch data");
    }

    const solved = await solvedRes.json();
    const contest = await contestRes.json();
    const badges = await badgesRes.json();

    return { solved, contest, badges };

  } catch (err) {
    console.error("Error fetching Leetcode data:", err);
    throw err;
  }
};

// ⭐ Skeleton Loader Component
function Skeleton({ width, height, radius = "8px" }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: radius,
        background: "linear-gradient(90deg,#3b3b3b 25%,#525252 50%,#3b3b3b 75%)",
        backgroundSize: "200% 100%",
        animation: "skeleton 1.6s infinite",
        margin: "8px 0"
      }}
    ></div>
  );
}

export function LeetCode() {
  const [solvedData, setSolvedData] = useState(null);
  const [contestData, setContestData] = useState(null);
  const [badgesData, setBadgesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const username = "rounak_100";
        const data = await fetchLeetCodeData(username);

        setSolvedData({
          totalSolved: data.solved?.solvedProblem || 0,
          easySolved: data.solved?.easySolved || 0,
          mediumSolved: data.solved?.mediumSolved || 0,
          hardSolved: data.solved?.hardSolved || 0,
        });

        setContestData({
          contestRating: Math.ceil(data.contest?.contestRating) || "N/A",
          globalRanking: data.contest?.contestGlobalRanking || "N/A",
          contestAttend: data.contest?.contestAttend || 0,
          contestTopPercentage: data.contest?.contestTopPercentage || 0,
        });

        setBadgesData(data.badges?.badges || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  /* ------------------ 🔥 Skeleton Loader UI ------------------ */
  if (loading) {
    return (
      <section id="leetcode" className={styles.leetcode}>
        <div className={styles.container}>
          <h2 className={styles.title} style={{ color: "#ffb347" }}>LeetCode Profile</h2>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <Skeleton width="60%" height="25px" />
              <Skeleton width="120px" height="60px" />
              <Skeleton width="100%" height="150px" />
            </div>
            <div className={styles.statCard}>
              <Skeleton width="50%" height="25px" />
              <Skeleton width="120px" height="60px" />
              <Skeleton width="120px" height="60px" />
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <Skeleton width="50%" height="25px" />
              <Skeleton width="100%" height="150px" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ------------------ 🔥 Error UI ------------------ */
  if (error) {
    return (
      <section id="leetcode" className={styles.leetcode}>
        <div className={styles.container}>
          <h2 className={styles.title}>LeetCode Profile</h2>
          <p className={styles.error}>⚠ {error}</p>
        </div>
      </section>
    );
  }

  // Progress Values
  const totalSolved = solvedData?.totalSolved || 1;
  const easyPercentage = (solvedData?.easySolved / totalSolved) * 100;
  const mediumPercentage = (solvedData?.mediumSolved / totalSolved) * 100;
  const hardPercentage = (solvedData?.hardSolved / totalSolved) * 100;

  /* ------------------ 🔥 Main UI ------------------ */
  return (
    <section id="leetcode" className={styles.leetcode}>
      <div className={styles.container}>
        <h1 className={styles.title}>LeetCode Profile</h1>

        {/* Row 1 */}
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <a href="https://leetcode.com/u/rounak_100/" target="_blank">
              <h2>Problems Solved</h2>
            </a>
            <div className={styles.number}>{solvedData?.totalSolved}</div>

            <div className={styles.breakdown}>
              <div className={styles.progressContainer}>
                <h3>Easy</h3>
                <CircularProgress percentage={easyPercentage} />
                <h3 style={{ marginTop: "1rem" }}>{solvedData?.easySolved}</h3>
              </div>

              <div className={styles.progressContainer}>
                <h3>Medium</h3>
                <CircularProgress percentage={mediumPercentage} />
                <h3 style={{ marginTop: "1rem" }}>{solvedData?.mediumSolved}</h3>
              </div>

              <div className={styles.progressContainer}>
                <h3>Hard</h3>
                <CircularProgress percentage={hardPercentage} />
                <h3 style={{ marginTop: "1rem" }}>{solvedData?.hardSolved}</h3>
              </div>
            </div>
          </div>

          {/* Contest Card */}
          <div className={styles.statCard}>
            <a href="https://leetcode.com/u/rounak_100/" target="_blank">
              <h2>Contest Rating</h2>
            </a>

            <h2 style={{ marginTop: "50px" }}>RATING</h2>
            <div className={styles.number} style={{ marginTop: "30px", fontSize: "6rem" }}>
              {contestData?.contestRating}
            </div>

            <h2 style={{ marginTop: "20px" }}>GLOBAL RANK</h2>
            <div className={styles.number} style={{ marginTop: "10px", fontSize: "4rem" }}>
              {contestData?.globalRanking}
            </div>

            <div style={{display:'flex',gap:'3rem',justifyContent:'center',flexWrap:'wrap',marginTop:'20px'}}>
              <div style={{textAlign:'center'}}>
                <h3>Contests Attended</h3>
                <div className={`${styles.number} ${styles.badge}`} style={{fontSize:"2rem"}}>
                  {contestData?.contestAttend}
                </div>
              </div>

              <div style={{textAlign:'center'}}>
                <h3>Top Percentage</h3>
                <div className={`${styles.number} ${styles.badge}`} style={{fontSize:"2rem"}}>
                  {contestData?.contestTopPercentage}%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 - Badges */}
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <a href="https://leetcode.com/u/rounak_100/" target="_blank">
              <h2>Badges Earned</h2>
            </a>

            <div className={styles.badgesContainer}>
              {badgesData.length > 0 ? badgesData.map((badge, i) => {
                const badgeIcon = badge.displayName === "Oct LeetCoding Challenge" ? "/oct.png" : badge.icon;
                return (
                  <div key={i} className={styles.badge}>
                    <img src={badgeIcon} alt={badge.displayName}
                      className={styles.badgeIcon}
                      onError={(e) => (e.target.src = "/oct.png")}
                    />
                    <p>{badge.displayName}</p>
                  </div>
                );
              }) : <p>No badges earned yet.</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Keyframes for Skeleton Animation */
const style = document.createElement("style");
style.innerHTML = `
@keyframes skeleton {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}`;
document.head.appendChild(style);
