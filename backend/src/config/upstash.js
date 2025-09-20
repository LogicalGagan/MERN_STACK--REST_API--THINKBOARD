import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

// Connect to Upstash Redis with your env variables
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Create a rate limiter
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(50, "1 s"), 
  // 👆 allow 1 request every 10 seconds per identifier
  prefix: "myapp:ratelimit",
});

export default ratelimit;