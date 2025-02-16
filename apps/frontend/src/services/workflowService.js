import axios from "axios";

const API_URL = "http://localhost:5001/api/workflow";

export const updateWorkflow = async (workflow) => {
    const response = await axios.post(`${API_URL}/update`, { workflow });
    return response.data;
};