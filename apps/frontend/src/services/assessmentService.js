import axios from "axios";

const API_URL = "http://localhost:5001/api/assessment";

export const sendSkillAssessment = async (data) => {
    const response = await axios.post(`${API_URL}/start`, data);
    return response.data;
};