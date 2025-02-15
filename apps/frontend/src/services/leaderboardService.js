import axios from "axios";

const API_URL = "http://localhost:5001/api/leaderboard";    // Adjust if backend runs on a different port

export const fetchLeaderboard = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching leaderboard: ", error);
        return [];
    }
};