import { pool } from "../db";

/**
 * Fetch all marketplace items (e.g., premium AI tools, API access, etc.)
 */
export const getMarketplaceItems = async () => {
  try {
    const result = await pool.query("SELECT * FROM marketplace_items");
    return result.rows;
  } catch (error) {
    console.error("Error fetching marketplace items: ", error);
    throw new Error("Failed to fetch marketplace items.");
  }
};

/**
 * Add a new premium feature or AI tool to the marketplace.
 */
export const addMarketplaceItems = async (
  name,
  description,
  price,
  availability,
) => {
  try {
    await pool.query(
      "INSERT INTO marketplace_items (name, description, price, availability) VALUES ($1, $2, $3, $4)",
      [name, description, price, availability],
    );
    return { message: "Item added successfuly" };
  } catch (error) {
    console.error("Error adding marketplace item: ", error);
    throw new Error("Failed to add item.");
  }
};

/**
 * Purchase an item from the marketplace.
 */
export const purchaseMarketplaceItem = async (itemId, userId) => {
  try {
    await pool.query(
      "INSERT INTO purchases (user_id, item_id) VALUES ($1, $2)",
      [userId, itemId],
    );
    return { message: "Purchase successful" };
  } catch (error) {
    console.error("Error purchasing item: ", error);
    throw new Error("Failed to complete purchase.");
  }
};
