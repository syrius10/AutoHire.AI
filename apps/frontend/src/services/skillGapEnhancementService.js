import axios from "axios";

// ✅ skillGapEnhancementService.js → Displays skill gap analysis & upskilling suggestions.

export const fetchSkillGapEnhancement = async () => {
  try {
    const response = await axios.get("/api/skill-gap-enhancement");
    return response.data;
  } catch (error) {
    console.error("Error fetching skill gap enhancements:", error);
    return [];
  }
};
