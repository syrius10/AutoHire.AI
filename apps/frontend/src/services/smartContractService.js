import axios from "axios";

export const fetchSmartContracts = async () => {
  return await axios.get("/api/smart-contract/generate");
};
