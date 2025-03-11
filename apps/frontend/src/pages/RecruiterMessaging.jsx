import { useState } from "react";
import { generateRecruiterMessage } from "../services/messagingService";

const RecruiterMessaging = () => {
  const [candidateName, setCandidateName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleGenerateMessage = async () => {
    const recruiterName = "John Doe"; // Replace with logged-in recruiter's name
    const generatedMessage = await generateRecruiterMessage(
      recruiterName,
      candidateName,
      jobTitle,
    );
    setMessage(generatedMessage);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📩 Personalized Recruiter Messages</h2>
      <input
        type="text"
        placeholder="Candidate Name"
        onChange={(e) => setCandidateName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Job Title"
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <button onClick={handleGenerateMessage}>Generate Message</button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default RecruiterMessaging;
