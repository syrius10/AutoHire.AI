import { useState } from "react";
import { enrichProfile } from "../services/profileService";

const ProfileEnrichment = () => {
  const [file, setFile] = useState(null);
  const [profileData, setProfileData] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please upload a resume.");
    const result = await enrichProfile(file);
    setProfileData(result);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">AI-Powered Profile Enrichment</h2>

      <input
        type="file"
        className="border p-2 mt-4"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white"
        onClick={handleUpload}
      >
        Enrich Profile
      </button>

      {profileData && (
        <div className="mt-6 border p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Enriched Profile Data</h3>
          <p>
            <strong>Extracted Skills:</strong>{" "}
            {profileData.extracted_skills.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileEnrichment;
