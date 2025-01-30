import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

const query = `
  query userProfile($username: String!) {
    matchedUser(username: $username) {
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
      profile {
        ranking
      }
    }
  }
`;

async function fetchLeetCodeProfile(username) {
  const response = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { username },
    }),
  });

  if (!response.ok) {
    const errorResponse = await response.text();
    console.error(`HTTP error! Status: ${response.status}, Response: ${errorResponse}`);
    throw new Error(`Failed to fetch: ${response.status} - ${errorResponse}`);
  }

  const data = await response.json();
  return data.data.matchedUser;
}

// Route for profile data
app.get("/api/leetcode/:username", async (req, res) => {
  try {
    const { username } = req.params;
    console.log(`Fetching profile for username: ${username}`);
    const data = await fetchLeetCodeProfile(username);
    res.json(data);
  } catch (error) {
    console.error("Profile fetch error:", error);
    res.status(500).json({ error: "Failed to fetch LeetCode profile" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
