import axios from "axios";

/**
 * Fetch workforce forecasting insights from AI service.
 */
export const fetchWorkforceInsights = async (req, res) => {
    try {
        const response = await axios.get("http://localhost:5021/diversity_insights")
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching workforce insights: ", error);
        res.status(500).json({ error: "Failed to fetch workforce insights." });
    }
};

/**
 * Fetch attrition risk from AI service.
 */
export const fetchAttritionRisk = async (req, res) => {
    try {
        const response = await axios.post("http://localhost:5022/predict_attrition", req.body);
        res.json(response.data);
    } catch (error) {
        console.error("Error predicting attrition risk: ", error);
        res.status(500).json({ error: "Failed to predict attrition risk." });
    }
};

/**
 * Fetch diversity insights from AI service.
 */
export const fetchDiversityInsights = async (req, res) => {
    try {
        const response = await axios.post("http://localhost:5021/diversity_insights", req.body);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching diversity insights: ", error);
        res.status(500).json({ error: "Failed to fetch diversity insights." });
    }
};