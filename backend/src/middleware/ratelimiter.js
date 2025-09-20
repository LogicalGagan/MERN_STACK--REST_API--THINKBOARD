// Example middleware (for Express)


import ratelimit from "../config/upstash.js";
export async function rateLimiterMiddleware(req, res, next) {
  try {
    // Use IP or userId as unique identifier
    const identifier = "my-key";

    const { success, reset } = await ratelimit.limit(identifier);

    if (!success) {
      return res.status(429).json({ limited:true ,
        message: "Too many requests. Try again later.",
        retryAfter: reset, // time when they can retry
      });
    }
    
    next();


   
  } catch (error) {
    console.error("Rate limit error:", error);
    next(); // let request pass if something fails
  }
}