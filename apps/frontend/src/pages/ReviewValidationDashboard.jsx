import React, { useEffect, useState } from "react";
import { fetchReviewValidation } from "../services/reviewValidationService";

// Flags fake reviews & reputation manipulation.

const ReviewValidationDashboard = () => {
    const [reviewData, setReviewData] = useState(null);

    useEffect(() => {
        fetchReviewValidation().then(data => setReviewData(data));
    }, []);

    return (
        <div>
            <h2>Review Validation Dashboard</h2>
            {reviewData ? (
                <pre>{JSON.stringify(reviewData, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ReviewValidationDashboard;
