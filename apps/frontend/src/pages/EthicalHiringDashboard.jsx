import { useState } from "react";
import { evaluateHiring } from "../services/ethicalHiringService";

export default function EthicalHiringDashboard() {
  const [formData, setFormData] = useState({
    genderBias: 0,
    ageBias: 0,
    ethnicBias: 0,
    disabilityInclusionScore: 5,
    experience: 5,
    skillMatch: 75,
    educationLevel: 3,
    biasHistory: 0,
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await evaluateHiring(formData);
      setResult(response.hiringEvaluation);
    } catch (error) {
      console.error("Error evaluating hiring fairness:", error);
      setResult("Error in evaluation.");
    }

    setLoading(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🧑‍⚖️ Ethical Hiring Evaluation</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div>
          <label htmlFor="genderBias">Gender Bias (0-3):</label>
          <input
            type="number"
            id="genderBias"
            name="genderBias"
            value={formData.genderBias}
            onChange={handleChange}
            min="0"
            max="3"
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="ageBias">Age Bias (0-3):</label>
          <input
            type="number"
            name="ageBias"
            value={formData.ageBias}
            onChange={handleChange}
            min="0"
            max="3"
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="ethnicBias">Ethnic Bias (0-3):</label>
          <input
            type="number"
            name="ethnicBias"
            value={formData.ethnicBias}
            onChange={handleChange}
            min="0"
            max="3"
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="disabilityInclusionScore">Disability Inclusion Score (1-10):</label>
          <input
            type="number"
            name="disabilityInclusionScore"
            value={formData.disabilityInclusionScore}
            onChange={handleChange}
            min="1"
            max="10"
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="experience">Experience (Years):</label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            min="1"
            max="50"
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="skillMatch">Skill Match (0-100%):</label>
          <input
            type="number"
            name="skillMatch"
            value={formData.skillMatch}
            onChange={handleChange}
            min="0"
            max="100"
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="educationLevel">Education Level (1-5):</label>
          <input
            type="number"
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            min="1"
            max="5"
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="biasHistory">Past Bias Reports (0-1):</label>
          <input
            type="number"
            id="biasHistory"
            name="biasHistory"
            value={formData.biasHistory}
            onChange={handleChange}
            min="0"
            max="1"
            className="border p-2 rounded w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
          disabled={loading}
        >
          {loading ? "Evaluating..." : "Evaluate Hiring Fairness"}
        </button>
      </form>

      {result && (
        <div className="mt-4 border p-4 rounded bg-gray-100">
          <p>
            <strong>AI Decision:</strong> {result}
          </p>
        </div>
      )}
    </div>
  );
}
