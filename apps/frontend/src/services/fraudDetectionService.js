import axios from "axios";

export const fetchFraudAnalysis = async () => {
    return await axios.get("/api/fraud-detection/analyze");
  };
  