import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000";


export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
});

export const fetchJobs = async () => {
  try {
    const response = await apiClient.get("/jobs");
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};

export const fetchCandidates = async () => {
  try {
    const response = await apiClient.get("/candidates");
    return response.data;
  } catch (error) {
    console.error("Error fetching candidates:", error);
    return [];
  }
};



