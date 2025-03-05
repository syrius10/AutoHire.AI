import { useState } from "react";
import { fetchTrustScore } from "../services/trustScoringService";

// Displays freelancer & employer trust scores.

const TrustScoringDashboard = () => {
  const [userId, setUserId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetchTrustScore(userId);
    setResult(response);
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🔍 AI-Based Trust Scoring</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input type="text" placeholder="User ID (Freelancer/Employer)" onChange={(e) => setUserId(e.target.value)} required className="border p-2 rounded w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-4" disabled={loading}>
          {loading ? "Calculating..." : "Check Trust Score"}
        </button>
      </form>

      {result && (
        <div className="mt-4 border p-4 rounded bg-gray-100">
          <h3 className="text-lg font-semibold">📈 Trust Score</h3>
          <p><strong>User ID:</strong> {result.userId}</p>
          <p><strong>Trust Score:</strong> {result.trustScore}</p>
        </div>
      )}
    </div>
  );
};

export default TrustScoringDashboard;
