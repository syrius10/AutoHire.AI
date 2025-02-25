import axios from "axios";

export const fetchVisaEligibility = async (country, workPermit) => {
  try {
    const response = await axios.post("/api/visa-screening", {
      country,
      work_permit: workPermit,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching visa eligibility:", error);
    return { visa_eligibility: "Unknown" };
  }
};
