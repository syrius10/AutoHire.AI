import { useEffect, useState } from "react";
import { fetchNFTJobCredentials } from "../services/nftJobCredentialsService";

// AI-driven NFT job credentialing & reputation tracking

export default function NFTJobCredentialsDashboard() {
  const [credentials, setCredentials] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchNFTJobCredentials();
      setCredentials(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🎓 NFT Job Credentials</h2>
      {credentials ? (
        <pre className="mt-4 p-4 border rounded bg-gray-100">{JSON.stringify(credentials, null, 2)}</pre>
      ) : (
        <p>Loading NFT job credentials...</p>
      )}
    </div>
  );
}
