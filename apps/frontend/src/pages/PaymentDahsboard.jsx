import { useState } from "react";
import { createCheckout } from "../services/paymentService";

const PaymentDashboard = () => {
  const [loading, setLoading] = useState(false);

  const handleSubscription = async () => {
    setLoading(true);
    const checkoutUrl = await createCheckout();
    if (checkoutUrl) window.location.href = checkoutUrl;
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">💳 Subscription Management</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        onClick={handleSubscription}
        disabled={loading}
      >
        {loading ? "Processing..." : "Subscribe Now"}
      </button>
    </div>
  );
};

export default PaymentDashboard;
