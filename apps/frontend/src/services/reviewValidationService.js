import axios from "axios";

// Calls AI to detect review manipulation.

export const fetchReviewValidation = async () => {
    try {
        const response = await axios.get("/api/review-validation");
        return response.data;
    } catch (error) {
        console.error("Error fetching review validation:", error);
        return null;
    }
};
