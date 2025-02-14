import axios from "axios";

const API_URL = "http://localhost:5001/api/engagement";

export const getChatbotResponse = async (query) => {
    const response = await axios.get(`${API_URL}/chat`, { params: { query } });
    return response.data;
};

export const sendSMS = async (phone, message) => {
    return axios.post(`${API_URL}/send-sms`, { phone, message });
};

export const sendEmail = async (to, subject, text) => {
    return axios.post(`${API_URL}/send-email`, { to, subject, text });
};