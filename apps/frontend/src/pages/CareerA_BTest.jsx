import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { assignCareerPathVersion } from "../../../backend/src/services/abTestingCareer";

const CareerA_BTest = ({ userId }) => {
  const [version, setVersion] = useState(null);

  useEffect(() => {
    setVersion(assignCareerPathVersion(userId));
  }, [userId]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">
        A/B Testing for Career Recommendations
      </h2>
      <p>
        You are assigned to: <strong>{version}</strong> career insights.
      </p>
    </div>
  );
};
CareerA_BTest.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default CareerA_BTest;
