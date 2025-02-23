import { useEffect, useState } from "react";
import { fetchMarketplaceItems, purchaseMarketplaceItem } from "../services/marketplaceService";

const Marketplace = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchMarketplaceItems().then(setItems);
  }, []);

  const handlePurchase = async (itemId) => {
    const userId = "123"; // Replace with actual user ID from auth context
    const result = await purchaseMarketplaceItem(itemId, userId);
    alert(result.message || result.error);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🛍️ AutoHire.AI Marketplace</h2>
      <p className="text-gray-600">Browse AI-powered hiring tools and premium features.</p>
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.length > 0 ? (
          items.map((item) => (
            <li key={item.id} className="border p-4 rounded shadow-md">
              <h4 className="font-bold">{item.name}</h4>
              <p className="text-gray-500">{item.description}</p>
              <p className="text-green-600 font-semibold">${item.price}</p>
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={() => handlePurchase(item.id)}
              >
                Purchase
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No marketplace items available.</p>
        )}
      </ul>
    </div>
  );
};

export default Marketplace;