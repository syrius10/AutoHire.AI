import axios from "axios";
import cheerio from "cheerio";

export const optimizeForSEO = async (jobPost) => {
    const keywords = extractKeywords(jobPost);
    const metadata = generateMetadata(jobPost);

    return {
        optimizedText: `${metadata.title} - ${jobPost}`,
        keywords,
        metadata
    };
};

const extractKeywords = (text) => {
    return text.match(/\b[A-Za-z]{4,}\b/g).slice(0, 10);
};

const generateMetadata = (jobPost) => {
    return {
        title: jobPost.split(".")[0],
        description: jobPost.substring(0, 150) + "...",
        structuredData: {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": jobPost.split(".")[0],
            "description": jobPost.substring(0, 500),
        }
    };
};