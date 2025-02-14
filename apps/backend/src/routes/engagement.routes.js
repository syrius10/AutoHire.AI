import express from "express";
import axios from "axios";
import nodemailer from "nodemailer";
import twilio from "twilio";

const router = express.Router();
const CHATBOT_SERVICE_URL = "http://localhost:5005/chatbot";
const TWILIO_SID = process.env.TWILIO_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE = process.env.TWILIO_PHONE;
const client = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

// ✅ AI Chatbot Response
router.get("/chat", async (req, res) => {
    try {
        const { query } = req.query;
        const response = await axios.get(`${CHATBOT_SERVICE_URL}/?query=${query}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Send SMS Notification (Twilio)
router.post("/send-sms", async (req, res) => {
    try {
        const { phone, message } = req.body;
        await client.messages.create({
            body: message,
            from: TWILIO_PHONE,
            to: phone
        });
        res.json({ success: "SMS sent successfully!"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Send Email Notification
router.post("/send-email", async (req, res) => {
    try {
        const { to, subject, text } = req.body;
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({ from: process.env.EMAIL_USER, to, subject, text });
        res.json({ success: "Email sent successfully! "});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;