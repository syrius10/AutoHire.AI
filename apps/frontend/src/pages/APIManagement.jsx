import { useEffect, useState } from "react";
import { requestAPIKey, revokeAPIKey, getAPIUsageStats } from "../services/apiManagementService";

const APIManagement = () => {
  const [apiKey, setApiKey] = useState("");
  const [usageStats, setUsageStats] = useState([]);
  const userId = "123"; // Replace with actual user ID from auth context

  useEffect(() => {
    getAPIUsageStats(userId).then(setUsageStats);
  }, [userId]);

  const handleGenerateAPIKey = async () => {
    const response = await requestAPIKey(userId);
    if (response.apiKey) setApiKey(response.apiKey);
  };

  const handleRevokeAPIKey = async () => {
    if (!apiKey) return alert("No API key to revoke.");
    const response = await revokeAPIKey(apiKey);
    alert(response.message || response.error);
    if (!response.error) setApiKey("");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🔑 API Management</h2>
      <p className="text-gray-600">Manage your API keys and monitor usage.</p>

      <div className="mt-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded mr-2"
          onClick={handleGenerateAPIKey}
        >
          Generate API Key
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={handleRevokeAPIKey}
          disabled={!apiKey}
        >
          Revoke API Key
        </button>
      </div>

      {apiKey && (
        <div className="mt-4 p-2 border rounded">
          <strong>Your API Key:</strong> <span className="text-blue-600">{apiKey}</span>
        </div>
      )}

      <h3 className="text-lg font-semibold mt-6">📊 API Usage Statistics</h3>
      <ul>
        {usageStats.length > 0 ? (
          usageStats.map((stat, index) => (
            <li key={index} className="border p-2 mt-2 rounded">
              {stat.endpoint} - {stat.usage_count} calls
            </li>
          ))
        ) : (
          <p className="text-gray-500">No usage data available.</p>
        )}
      </ul>
    </div>
  );
};

export default APIManagement;