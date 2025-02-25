import React, { useEffect, useState } from "react";
import { fetchRetentionRisk } from "../services/postAcquisitionRetentionService";

// Tracks employee retention risks post-acquisition.

const PostAcquisitionRetentionDashboard = () => {
  const [retentionData, setRetentionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRetentionRisk()
      .then((data) => {
        setRetentionData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching retention risk data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard">
      <h2>Post-Acquisition Retention Risk Analysis</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(retentionData, null, 2)}</pre>
      )}
    </div>
  );
};

export default PostAcquisitionRetentionDashboard;
