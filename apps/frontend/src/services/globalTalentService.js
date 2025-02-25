import axios from "axios";

export const fetchGlobalTalent = async () => {
  try {
    const response = await axios.post("/api/global-talent", {
      experience: 5,
      education: 3,
      skill_match: 80,
      remote_pref: 1,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching global talent data:", error);
    return [];
  }
};
