import axios from "axios";

// Provides AI-driven burnout prevention insights & stress management strategies.

export const predictBurnout = async (workHours, stressLevel, sleepQuality) => {
  try {
    const response = await axios.post("http://localhost:5130/predict_burnout", {
      work_hours: workHours,
      stress_level: stressLevel,
      sleep_quality: sleepQuality,
    });

    return response.data;
  } catch (error) {
    console.error("Error predicting burnout risk:", error);
    throw new Error("Failed to predict burnout risk.");
  }
};
