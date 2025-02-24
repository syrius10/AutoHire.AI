import { useEffect, useState } from "react";
import { fetchSkillTrends } from "../services/futureSkillTrendsService";

const FutureSkillTrendsDashboard = () => {
  const [trends, setTrends] = useState(null);

  useEffect(() => {
    fetchSkillTrends().then(setTrends);
  }, []);

  return (
    <div>
      <h2>📈 Future Skill Trends</h2>
      <pre>{JSON.stringify(trends, null, 2)}</pre>
    </div>
  );
};

export default FutureSkillTrendsDashboard;
