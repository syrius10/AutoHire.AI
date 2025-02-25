import axios from "axios";

export const fetchDisputeStatus = async () => {
    return await axios.get("/api/dispute-resolution/resolve");
  };
  