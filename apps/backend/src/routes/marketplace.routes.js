import express from "express";
import { getMarketplaceItems, addMarketplaceItems, purchaseMarketplaceItem } from "../services/marketplaceService";

const router = express.Router();

// ✅ Fetch all available marketplace items
router.get("/", async (req, res) => {
    try {
        const items = await getMarketplaceItems();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Add a new AI tool or premium feature to the marketplace
router.post("/add", async (req, res) => {
    const { name, description, price, availability } = req.body;
    if (!name || !description || !price) {
        return res.status(400).json({ error: "All fields are required."});
    }

    try {
        const response = await addMarketplaceItems(name, description, price, availability || "available");
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Handle a marketplace item purchase
router.post("/purchase", async (req, res) => {
    const { itemId, userId } = req.body;
    if (!itemId || !userId) {
        return res.status(400).json({ error: "Item ID and User ID are required." });
    }

    try {
        const response = await purchaseMarketplaceItem(itemId, userId);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;