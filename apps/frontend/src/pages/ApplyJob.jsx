import { useEffect, useState } from "react";
import { getApplicationType } from "../../../backend/src/services/ab_testing";

const ApplyJob = () => {
    const [appType, setAppType] = useState(null);

    useEffect(() => {
        getApplicationType("user123").then(setAppType);
    }, []);

    return (
        <div className="p-6">
            {appType === "gamified" ? <GamifiedApplication /> : <TraditionalApplication />}
        </div>
    );
};

export default ApplyJob;