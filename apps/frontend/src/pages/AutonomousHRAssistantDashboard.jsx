import { useState } from "react";
import { askHRAssistant } from "../services/autonomousHRAssistantService";

// AI-powered HR automation & employee assistance.

const AutonomousHRAssistantDashboard = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);

  const handleQuery = async () => {
    const result = await askHRAssistant(query);
    setResponse(result);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🤖 AI HR Assistant</h2>
      <input
        type="text"
        placeholder="Ask the HR Assistant..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 mt-4 w-full"
      />
      <button onClick={handleQuery} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
        Submit
      </button>
      {response && <pre className="mt-4 bg-gray-100 p-4 rounded">{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default AutonomousHRAssistantDashboard;
