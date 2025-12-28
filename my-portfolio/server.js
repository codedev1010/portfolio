import fetch from "node-fetch";

const LEETCODE_API_ENDPOINT = "https://alfa-leetcode-api.onrender.com";

// fetch with a timeout limit (prevents Vercel timeout)
async function timedFetch(url, timeout = 8000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, { signal: controller.signal });
    return res;
  } finally {
    clearTimeout(timer);
  }
}

// Fetch LC details in parallel (not sequential like before)
async function fetchLeetCodeData(username) {
  try {
    const urls = [
      `${LEETCODE_API_ENDPOINT}/${username}/solved`,
      `${LEETCODE_API_ENDPOINT}/${username}/contest`,
      `${LEETCODE_API_ENDPOINT}/${username}/badges`
    ];

    const [solvedRes, contestRes, badgesRes] = await Promise.all(
      urls.map(url => timedFetch(url))
    );

    if (!solvedRes.ok || !contestRes.ok || !badgesRes.ok) {
      throw new Error("Failed to fetch one of the endpoints");
    }

    const [solved, contest, badges] = await Promise.all([
      solvedRes.json(),
      contestRes.json(),
      badgesRes.json()
    ]);

    return { solved, contest, badges };
  } catch (error) {
    console.error("LeetCode API error:", error);
    throw error;
  }
}

// Vercel API handler (replaces Express)
export default async function handler(req, res) {
  const username = req.query.username;

  if (!username)
    return res.status(400).json({ error: "Username required" });

  try {
    console.log(`Fetching data for: ${username}`);
    const data = await fetchLeetCodeData(username);

    return res.status(200).json(data);
  } catch {
    return res.status(500).json({ error: "Failed to fetch profile" });
  }
}
