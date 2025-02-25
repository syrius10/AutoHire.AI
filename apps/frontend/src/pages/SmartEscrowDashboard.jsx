import React, { useEffect, useState } from "react";
import { fetchEscrowStatus } from "../services/smartEscrowService";

export default function SmartEscrowDashboard() {
    const [escrowStatus, setEscrowStatus] = useState([]);

    useEffect(() => {
        async function loadEscrowStatus() {
            try {
                const data = await fetchEscrowStatus();
                setEscrowStatus(data);
            } catch (error) {
                console.error("Error fetching escrow status:", error);
            }
        }
        loadEscrowStatus();
    }, []);

    return (
        <div>
            <h2>Escrow Payments</h2>
            <ul>
                {escrowStatus.map((escrow, index) => (
                    <li key={index}>Transaction: {escrow.transactionId} - Status: {escrow.status}</li>
                ))}
            </ul>
        </div>
    );
}
