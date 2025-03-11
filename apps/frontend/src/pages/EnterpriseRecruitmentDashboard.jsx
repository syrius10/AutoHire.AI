import { useEffect, useState } from "react";
import { screenCandidates } from "../services/enterpriseRecruitmentService";

// Automates large-scale candidate screening.

const EnterpriseRecruitmentDashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [screenedResults, setScreenedResults] = useState(null);

  useEffect(() => {
    const fetchScreeningResults = async () => {
      try {
        const result = await screenCandidates(candidates);
        setScreenedResults(result);
      } catch (error) {
        console.error("Error in candidate screening:", error);
      }
    };
    if (candidates.length > 0) fetchScreeningResults();
  }, [candidates]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">
        🤖 Enterprise Recruitment Automation
      </h2>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() =>
          setCandidates([{ name: "John Doe", skills: ["AI", "ML"] }])
        }
      >
        Start Screening
      </button>
      {screenedResults && (
        <div className="mt-4">
          <h3 className="font-semibold">Screening Results:</h3>
          <pre className="p-4 bg-gray-100 rounded">
            {JSON.stringify(screenedResults, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default EnterpriseRecruitmentDashboard;
