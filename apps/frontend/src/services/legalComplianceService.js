import axios from "axios";

export const fetchComplianceReport = async (country, terms) => {
  try {
    const response = await axios.post("/api/legal-compliance", {
      country,
      terms,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching compliance report:", error);
    return { compliance_status: "Unknown" };
  }
};
