import { useState } from "react";
import { fetchDisputeResolution } from "../services/disputeResolutionService";

export default function DisputeResolutionDashboard() {
  const [formData, setFormData] = useState({
    conversation: [],
    contractValue: 5000,
    delayedPayments: 0,
    unclearTerms: 0,
    pastDisputes: 0,
  });

  const [resolutionResult, setResolutionResult] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddMessage = () => {
    if (message.trim()) {
      setFormData({ ...formData, conversation: [...formData.conversation, message] });
      setMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetchDisputeResolution(formData);
    setResolutionResult(result);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">⚖️ AI-Powered Dispute Resolution</h2>
      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
        <input type="text" name="contractValue" placeholder="Contract Value" value={formData.contractValue} onChange={handleChange} className="border p-2 w-full"/>
        <input type="number" name="delayedPayments" placeholder="Delayed Payments" value={formData.delayedPayments} onChange={handleChange} className="border p-2 w-full"/>
        <input type="number" name="unclearTerms" placeholder="Unclear Terms" value={formData.unclearTerms} onChange={handleChange} className="border p-2 w-full"/>
        <input type="number" name="pastDisputes" placeholder="Past Disputes" value={formData.pastDisputes} onChange={handleChange} className="border p-2 w-full"/>

        <textarea name="message" placeholder="Enter conversation message" value={message} onChange={(e) => setMessage(e.target.value)} className="border p-2 w-full"/>
        <button type="button" onClick={handleAddMessage} className="bg-gray-500 text-white p-2 rounded">Add Message</button>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-3">Resolve Dispute</button>
      </form>

      {resolutionResult && (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Resolution:</strong> {resolutionResult.resolution}</p>
        </div>
      )}
    </div>
  );
}
