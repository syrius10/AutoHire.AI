import redis from "redis";
const client = redis.createClient({
    host: process.env.REDIS_HOST || "redis",  // 🔄 Change from "localhost" to "redis"
    port: process.env.REDIS_PORT || 6379,
    retryStrategy: times => Math.min(times * 50, 2000), // Optional: Retry logic
});

client.connect().catch(console.error);

export const cacheMiddleware = async (req, res, next) => {
    const key = req.originalUrl;
    const cachedData = await client.get(key);

    if (cachedData) {
        return res.json(JSON.parse(cachedData));
    } else {
        res.sendResponse = res.json;
        res.json = async (body) => {
            await client.setEx(key, 3600, JSON.stringify(body));    // Cache for 1 hour
            res.sendResponse(body);
        };
        next();
    }
};