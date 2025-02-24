import { useEffect, useState } from "react";
import { fetchReskillingRecommendations } from "../services/reskillingPathwaysService";

const ReskillingPathwaysDashboard = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    fetchReskillingRecommendations().then(setCourses);
  }, []);

  return (
    <div>
      <h2>📚 Reskilling Pathways</h2>
      <pre>{JSON.stringify(courses, null, 2)}</pre>
    </div>
  );
};

export default ReskillingPathwaysDashboard;
