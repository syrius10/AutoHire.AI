import { useState } from "react";
import {
  getChatbotResponse,
  sendSMS,
  sendEmail,
} from "../services/engagementService";

const CandidateEngagement = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [smsData, setSmsData] = useState({ phone: "", message: "" });
  const [emailData, setEmailData] = useState({ to: "", subject: "", text: "" });

  const handleChatbotQuery = async () => {
    const result = await getChatbotResponse(query);
    setResponse(result.response);
  };

  const handleSendSMS = async () => {
    await sendSMS(smsData.phone, smsData.message);
    alert("SMS Sent!");
  };

  const handleSendEmail = async () => {
    await sendEmail(emailData.to, emailData.subject, emailData.text);
    alert("Email Sent!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Automated Candidate Engagement</h2>

      <div className="mt-4 border p-4 rounded shadow">
        <h3 className="text-lg font-semibold">AI Chatbot</h3>
        <input
          className="border p-2 w-full"
          placeholder="Ask a question..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-600 text-white"
          onClick={handleChatbotQuery}
        >
          Ask AI
        </button>
        {response && <p className="mt-2">{response}</p>}
      </div>

      <div className="mt-4 border p-4  rounded shadow">
        <h3 className="text-lg font-semibold">Send SMS</h3>
        <input
          className="border p-2 w-full"
          placeholder="Phone Number"
          onChange={(e) => setSmsData({ ...smsData, phone: e.target.value })}
        />
        <input
          className="border p-2 w-full mt-2"
          placeholder="Message"
          onChange={(e) => setSmsData({ ...smsData, message: e.target.value })}
        />
        <button
          className="mt-2 px-4 py-2 bg-green-600 text-white"
          onClick={handleSendSMS}
        >
          Send SMS
        </button>
      </div>

      <div className="mt-4 border p-4 rounded shadow">
        <h3 className="text-lg font-semibold">Send Email</h3>
        <input
          className="border p-2 w-full"
          placeholder="Recipient Email"
          onChange={(e) => setEmailData({ ...emailData, to: e.target.value })}
        />
        <input
          className="border p-2 w-full mt-2"
          placeholder="Subject"
          onChange={(e) =>
            setEmailData({ ...emailData, subject: e.target.value })
          }
        />
        <textarea
          className="border p-2 w-full mt-2"
          placeholder="Message"
          onChange={(e) => setEmailData({ ...emailData, text: e.target.value })}
        />
        <button
          className="mt-2 px-4 py-2 bg-yellow-600 text-white"
          onClick={handleSendEmail}
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default CandidateEngagement;
