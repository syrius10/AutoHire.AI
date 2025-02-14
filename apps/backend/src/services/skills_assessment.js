import axios from "axios";

export const assessSkills = async (skills) => {
    const response = await axios.post("http://localhost:5005/assess-skills", { skills });
    return response.data;
};