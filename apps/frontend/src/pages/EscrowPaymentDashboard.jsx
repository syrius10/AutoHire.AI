import React, { useEffect, useState } from "react";
import { fetchEscrowStatus } from "../services/escrowPaymentService";

// Tracks AI-managed escrow payments & transaction security.

const EscrowPaymentDashboard = () => {
  const [escrowStatus, setEscrowStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEscrowStatus()
      .then((data) => {
        setEscrowStatus(data.status);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching escrow status:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Escrow Payment Dashboard</h2>
      {loading ? <p>Checking escrow status...</p> : <p>Status: {escrowStatus}</p>}
    </div>
  );
};

export default EscrowPaymentDashboard;
