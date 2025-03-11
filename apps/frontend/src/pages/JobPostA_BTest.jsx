import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { assignJobPostType } from "../services/abTestingJobPosts";

const JobPostA_BTest = ({ userId }) => {
  const [postType, setPostType] = useState(null);

  useEffect(() => {
    setPostType(assignJobPostType(userId));
  }, [userId]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">A/B Testing for Job Posts</h2>
      <p>
        You are assigned to: <strong>{postType}</strong> job descriptions.
      </p>
    </div>
  );
};
JobPostA_BTest.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default JobPostA_BTest;
