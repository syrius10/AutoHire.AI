import { useEffect, useState } from "react";
import { fetchMetaverseWorkspaces } from "../services/metaverseWorkspacesService";

// AI-driven virtual workspace & collaboration.

export default function MetaverseWorkspacesDashboard() {
  const [workspaces, setWorkspaces] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchMetaverseWorkspaces();
      setWorkspaces(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🌐 Virtual Workspaces</h2>
      {workspaces ? (
        <div className="mt-4 border p-4 rounded">
          <pre>{JSON.stringify(workspaces, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading virtual workspaces...</p>
      )}
    </div>
  );
}
