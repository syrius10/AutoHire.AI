import { useEffect, useState } from "react";
import { fetchGigPayments } from "../services/gigPaymentsService";

// Secure blockchain-powered freelancer payments.

export default function GigPaymentsDashboard() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    async function loadPayments() {
      const data = await fetchGigPayments();
      setPayments(data);
    }
    loadPayments();
  }, []);

  return (
    <div>
      <h1>💰 Blockchain-Powered Gig Payments</h1>
      <ul>
        {payments.length > 0 ? (
          payments.map((payment, index) => (
            <li key={index}>
              Payment ID: {payment.id} - Amount: {payment.amount} USD - Status: {payment.status}
            </li>
          ))
        ) : (
          <p>Loading gig payments...</p>
        )}
      </ul>
    </div>
  );
}
