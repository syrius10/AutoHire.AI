import axios from "axios";

export const getSuccessionPlan = async (req, res) => {
    try {
        const response = await axios.post("http://localhost:5027/succession_plan", req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving succession plan" });
    }
};