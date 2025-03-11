import { useEffect, useState } from "react";
import { fetchSmartPayments } from "../services/gigSmartPaymentsService";

// AI-powered smart contract payments & earnings tracking.

const GigSmartPaymentsDashboard = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetchSmartPayments().then(setPayments);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">💰 Smart Contract Payments</h2>
      <ul className="mt-4">
        {payments.length ? (
          payments.map((payment, index) => (
            <li key={payment.id} className="border p-4 rounded mb-2">
              <p>
                <strong>Freelancer:</strong> {payment.freelancerId}
              </p>
              <p>
                <strong>Employer:</strong> {payment.employerId}
              </p>
              <p>
                <strong>Amount:</strong> ${payment.amount}
              </p>
              <p>
                <strong>Status:</strong> {payment.status}
              </p>
            </li>
          ))
        ) : (
          <p>No payments found.</p>
        )}
      </ul>
    </div>
  );
};

export default GigSmartPaymentsDashboard;
