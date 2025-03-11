import { useState } from "react";
import { negotiateWorkTerms } from "../services/gigNegotiationService";

// Displays AI-powered freelancer negotiation insights.

const GigNegotiationDashboard = () => {
  const [negotiationData, setNegotiationData] = useState({
    freelancerId: "",
    employerId: "",
    jobDetails: "",
    initialOffer: "",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setNegotiationData({ ...negotiationData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await negotiateWorkTerms(negotiationData);
    setResult(response);
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🤖 AI-Powered Gig Negotiation</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          name="freelancerId"
          placeholder="Freelancer ID"
          onChange={handleChange}
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="employerId"
          placeholder="Employer ID"
          onChange={handleChange}
          required
          className="border p-2 rounded w-full mt-2"
        />
        <textarea
          name="jobDetails"
          placeholder="Job Details"
          onChange={handleChange}
          required
          className="border p-2 rounded w-full mt-2"
        ></textarea>
        <input
          type="number"
          name="initialOffer"
          placeholder="Initial Offer ($)"
          onChange={handleChange}
          required
          className="border p-2 rounded w-full mt-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
          disabled={loading}
        >
          {loading ? "Negotiating..." : "Start Negotiation"}
        </button>
      </form>

      {result && (
        <div className="mt-4 border p-4 rounded bg-gray-100">
          <h3 className="text-lg font-semibold">📜 Negotiation Outcome</h3>
          <p>
            <strong>Final Offer:</strong> ${result.finalOffer}
          </p>
          <p>
            <strong>Agreement Terms:</strong> {result.terms}
          </p>
        </div>
      )}
    </div>
  );
};

export default GigNegotiationDashboard;
