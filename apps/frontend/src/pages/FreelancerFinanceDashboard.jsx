import { useState } from "react";
import { fetchFreelancerIncomeForecast } from "../services/freelancerFinanceService";

const FreelancerFinanceDashboard = () => {
  const [formData, setFormData] = useState({
    monthlyGigs: "",
    avgEarnings: "",
    experience: "",
    pastEarnings: "",
    jobsCompleted: "",
    avgRating: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await fetchFreelancerIncomeForecast(
        parseFloat(formData.monthlyGigs),
        parseFloat(formData.avgEarnings),
        parseFloat(formData.experience),
        parseFloat(formData.pastEarnings),
        parseFloat(formData.jobsCompleted),
        parseFloat(formData.avgRating),
      );
      setPrediction(data.estimatedIncome);
    } catch (error) {
      console.error(error);
      setPrediction("Error fetching prediction.");
    }
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">💰 Freelancer Income Forecast</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="number"
          name="monthlyGigs"
          placeholder="Monthly Gigs"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="avgEarnings"
          placeholder="Avg Earnings Per Gig"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="experience"
          placeholder="Years of Experience"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="pastEarnings"
          placeholder="Past Earnings"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="jobsCompleted"
          placeholder="Jobs Completed"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="avgRating"
          placeholder="Average Rating (1-5)"
          step="0.1"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Predict Income
        </button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        prediction !== null && (
          <p className="mt-4">
            📊 Estimated Future Income: <strong>${prediction}</strong>
          </p>
        )
      )}
    </div>
  );
};

export default FreelancerFinanceDashboard;
