import axios from "axios";

// Fetches AI-powered hiring recommendations based on location demand.

/**
 * Calls AI hiring model to get location-based recommendations.
 */
export const recommendHiringLocation = async (demandScore, talentAvailability, costLiving, infraScore) => {
  try {
    const response = await axios.post("http://localhost:5126/recommend", {
      demand_score: demandScore,
      talent_availability: talentAvailability,
      cost_living: costLiving,
      infra_score: infraScore,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching hiring recommendations:", error);
    throw new Error("Hiring recommendation failed.");
  }
};
