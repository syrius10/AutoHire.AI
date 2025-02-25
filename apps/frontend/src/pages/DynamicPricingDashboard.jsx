import { useEffect, useState } from "react";
import { fetchDynamicPricing } from "../services/dynamicPricingService";

// AI-powered real-time freelance pricing.

const DynamicPricingDashboard = () => {
  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    async function loadPricing() {
      const data = await fetchDynamicPricing();
      setPricingData(data);
    }
    loadPricing();
  }, []);

  return (
    <div>
      <h2>📊 AI-Driven Dynamic Pricing</h2>
      <ul>
        {pricingData.map((item, index) => (
          <li key={index}>
            {item.jobTitle}: ${item.price} (Updated: {item.lastUpdated})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicPricingDashboard;
