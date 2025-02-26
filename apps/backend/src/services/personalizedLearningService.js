import axios from "axios";

export const getLearningRecommendations = async (req, res) => {
    try {
        const response = await axios.post("http://localhost:5056/learning-recommendations", req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch learning recommendations." });
    }
};
