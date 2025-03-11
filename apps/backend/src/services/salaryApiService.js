import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const GLASSDOOR_API_URL = "https://api.glassdoor.com/salary";
const PAYSCALE_API_URL = "https://api.payscale.com/v1/salaries";

export const fetchGlassdoorSalary = async (role, location) => {
  try {
    const response = await axios.get(GLASSDOOR_API_URL, {
      params: { role, location, apiKey: process.env.GLASSDOOR_API_URL },
    });
    return response.data;
  } catch (error) {
    console.error("Glassdoor API Error: ", error);
    return null;
  }
};

export const fetchPayscaleSalary = async (role, location) => {
  try {
    const response = await axios.get(PAYSCALE_API_URL, {
      params: { role, location, apiKey: process.env.PAYSCALE_API_URL },
    });
    return response.data;
  } catch (error) {
    console.error("PayScale API error: ", error);
  }
};
