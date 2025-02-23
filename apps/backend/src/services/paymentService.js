import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * ✅ Create a Stripe checkout session
 */
export const createCheckoutSession = async () => {
    try {
        return await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }],
            mode: "subscription",
            success_url: `${process.env.CLIENT_URL}/payment-success`,
            cancel_url: `${process.env.CLIENT_URL}/payment-failed`,
        });
    } catch (error) {
        console.error("❌ Stripe session creation failed: ", error);
        throw new Error("Failed to create payment session.");
    }
};