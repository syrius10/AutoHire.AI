import axios from "axios";

const UNIVERSITY_API = "https://api.university.com/verify";

export const verifyUniversityCredential = async (candidateId, credentialId) => {
    try {
        const response = await axios.post(UNIVERSITY_API, { candidateId, credentialId });
        return response.data;
    } catch (error) {
        console.error("University Verification Error: ", error);
        return { verified: false };
    }
};