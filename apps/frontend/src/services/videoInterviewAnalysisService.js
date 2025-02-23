export const analyzeVideoInterview = async (videoFile) => {
    const formData = new FormData();
    formData.append("video", videoFile);

    try {
        const response = await fetch("/api/video-interview/analyze", {
            method: "POST",
            body: formData, 
        });

        return response.json();
    } catch (error) {
        console.error("❌ Error analyzing video: ", error);
        return { sentiment: "Error", confidenceLevel: 0, speechClarity: "Unknown" };
    }
};