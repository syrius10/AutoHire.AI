import { useState } from "react";
import { fetchPromotionReadiness } from "../services/successionPlanningService";

export default function SuccessionPlanningDashboard() {
  const [formData, setFormData] = useState({
    experience: "",
    courses: "",
    promotions: "",
    performance: "",
  });

  const [prediction, setPrediction] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { experience, courses, promotions, performance } = formData;

    const result = await fetchPromotionReadiness(
      Number(experience),
      Number(courses),
      Number(promotions),
      Number(performance),
    );

    setPrediction(result);
  };

  return (
    <div className="container">
      <h1>Succession Planning Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="experience">Years of Experience:</label>
        <input
          type="number"
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
        />

        <label htmlFor="courses">Leadership Courses Completed:</label>
        <input
          type="number"
          id="courses"
          name="courses"
          value={formData.courses}
          onChange={handleChange}
          required
        />

        <label htmlFor="promotions">Number of Promotions:</label>
        <input
          type="number"
          id="promotions"
          name="promotions"
          value={formData.promotions}
          onChange={handleChange}
          required
        />

        <label htmlFor="performance">Performance Score (0-100):</label>
        <input
          type="number"
          id="performance"
          name="performance"
          value={formData.performance}
          onChange={handleChange}
          required
        />

        <button type="submit">Check Promotion Readiness</button>
      </form>

      {prediction && (
        <div className="result">
          <h3>AI Prediction:</h3>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
}
