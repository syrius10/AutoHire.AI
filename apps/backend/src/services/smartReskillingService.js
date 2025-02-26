import axios from "axios";

// Suggests targeted reskilling & upskilling programs.

export const getReskillingSuggestions = async (req, res) => {
    try {
        const response = await axios.post("http://localhost:5057/reskilling-suggestions", req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch reskilling suggestions." });
    }
};
