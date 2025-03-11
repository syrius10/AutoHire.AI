import { useState } from "react";
import PropTypes from "prop-types";
import { verifyCredential } from "../services/blockchainService";

const CredentialVerification = ({ candidateId }) => {
  const [status, setStatus] = useState(null);

  const handleVerify = async () => {
    const result = await verifyCredential(candidateId);
    setStatus(result.message);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Blockchain Credential Verification</h2>
      <button
        className="mt-4 px-4 py-2 bg-green-600 text-white"
        onClick={handleVerify}
      >
        Verify Credential
      </button>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
};
CredentialVerification.propTypes = {
  candidateId: PropTypes.string.isRequired,
};

export default CredentialVerification;