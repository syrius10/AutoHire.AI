import { runPythonAIModel } from "../utils/pythonExecutor.js";

export const validateReviews = async (data) => {
    return await runPythonAIModel("review_validation_ai.pkl", data);
};
