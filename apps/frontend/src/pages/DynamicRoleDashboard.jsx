import { useEffect, useState } from "react";
import { fetchOptimizedRole } from "../services/dynamicRoleService";

// AI-powered real-time job role optimizations

export default function DynamicRoleDashboard() {
  const [optimizedRole, setOptimizedRole] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchOptimizedRole({
        performance: 85,
        experience: 5,
        skillLevel: 4,
        adaptability: 3,
      });
      setOptimizedRole(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🔄 AI-Powered Job Role Optimization</h2>
      {optimizedRole ? (
        <div className="mt-4 border p-4 rounded bg-gray-100">
          <p><strong>Suggested Role:</strong> {optimizedRole.optimizedRole}</p>
        </div>
      ) : (
        <p>Loading AI-driven role optimization...</p>
      )}
    </div>
  );
}
