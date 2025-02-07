import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());

// Base URL for the new API
const LEETCODE_API_ENDPOINT = "https://my-leetcode-api.vercel.app";

// Fetch solved questions, contest rating, and badges from the new API
async function fetchLeetCodeData(username) {
  try {
    // Fetch solved questions
    const solvedResponse = await fetch(`${LEETCODE_API_ENDPOINT}/${username}/solved`);
    if (!solvedResponse.ok) {
      throw new Error(`Failed to fetch solved questions: ${solvedResponse.status}`);
    }
    const solvedData = await solvedResponse.json();

    // Fetch contest rating
    const contestResponse = await fetch(`${LEETCODE_API_ENDPOINT}/${username}/contest`);
    if (!contestResponse.ok) {
      throw new Error(`Failed to fetch contest rating: ${contestResponse.status}`);
    }
    const contestData = await contestResponse.json();

    // Fetch badges earned
    const badgesResponse = await fetch(`${LEETCODE_API_ENDPOINT}/${username}/badges`);
    if (!badgesResponse.ok) {
      throw new Error(`Failed to fetch badges: ${badgesResponse.status}`);
    }
    const badgesData = await badgesResponse.json();

    // Combine the data into a single response
    return {
      solved: solvedData,
      contest: contestData,
      badges: badgesData,
    };
  } catch (error) {
    console.error("Error fetching data from LeetCode API:", error);
    throw error;
  }
}

// Route for profile data
app.get("/api/leetcode/:username", async (req, res) => {
  try {
    const { username } = req.params;
    console.log(`Fetching profile for username: ${username}`);

    // Fetch data from the new API
    const data = await fetchLeetCodeData(username);

    // Send the combined data as the response
    res.json(data);
  } catch (error) {
    console.error("Profile fetch error:", error);
    res.status(500).json({ error: "Failed to fetch LeetCode profile" });
  }
});

// Export the express app as a Vercel serverless function
export default (req, res) => {
  app(req, res); // Handle the incoming request using express
};