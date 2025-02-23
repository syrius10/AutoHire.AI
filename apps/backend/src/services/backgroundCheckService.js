import axios from "axios";

const CHECKR_API_KEY = process.env.CHECKR_API_KEY;
const CHECKR_API_URL = "https://api.checkr.com/v1/reports";

/**
 * Perform background check for a candidate
 */
export const runBackgroundCheck = async (candidateId, ssn) => {
    try {
        const response = await axios.post(CHECKR_API_URL, {
            candidate_id: candidateId,
            ssn,
        }, {
            headers: { Authorization: `Bearer ${CHECKR_API_KEY}` },
        });

        return response.data;
    } catch (error) {
        console.error("Error running background check: ", error);
        return { error: "Failed to complete background check" };
    }
};