import axios from "axios";

/**
 * Fetch available marketplace items from the backend.
 */
export const fetchMarketplaceItems = async () => {
  try {
    const response = await axios.get("/api/marketplace");
    return response.data;
  } catch (error) {
    console.error("Error fetching marketplace items:", error);
    return [];
  }
};

/**
 * Add a new premium feature or AI tool to the marketplace.
 */
export const addMarketplaceItem = async (name, description, price, availability) => {
  try {
    const response = await axios.post("/api/marketplace/add", {
      name,
      description,
      price,
      availability,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding marketplace item:", error);
    return { error: "Failed to add item." };
  }
};

/**
 * Purchase an item from the marketplace.
 */
export const purchaseMarketplaceItem = async (itemId, userId) => {
  try {
    const response = await axios.post("/api/marketplace/purchase", {
      itemId,
      userId,
    });
    return response.data;
  } catch (error) {
    console.error("Error purchasing item:", error);
    return { error: "Failed to complete purchase." };
  }
};