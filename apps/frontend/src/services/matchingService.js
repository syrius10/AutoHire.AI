import axios from "axios";

const API_URL = "http://localhost:5001/api/match";

export const fetchMatchingJobs = async (skills) => {
    const response = await axios.post(API_URL, { skills });
    return response.data.matches;
};