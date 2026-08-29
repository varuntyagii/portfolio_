const express = require("express");
const cors = require("cors");
const Redis = require("ioredis");
const escapeHtml = require("escape-html");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();

app.set("trust proxy", true);

app.use(cors());
app.use(express.json());
const contactQueue = require("./queue.js");
// const resend = new Resend(process.env.RESEND_API_KEY);

const redis = new Redis(
  process.env.REDIS_URL || {
    host: process.env.REDIS_HOST || "localhost",
    port: Number(process.env.REDIS_PORT) || 6379,
  }
);

redis.on("connect", () => {
  console.log("Redis Connected 🚀");
});

app.post("/api/contact", async (req, res) => {
  try {
    const ip = req.ip;

    // Rate Limiting
    const requests = await redis.incr(`rate_limit:${ip}`);

    if (requests === 1) {
      await redis.expire(`rate_limit:${ip}`, 300);
    }

    if (requests > 2) {
      return res.status(429).json({
        success: false,
        message: "Too many requests. Please try again later.",
      });
    }

    const { name, email, message, token } = req.body;
    console.log("Request Received");
    console.log(req.body);

    // console.log("Turnstile Result:", verify.data);

    if (!name || !email || !message || !token) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address.",
      });
    }

    // Turnstile Verification
    try {
      const verify = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: token,
          }),
        },
      );

      if (!verify.ok) {
        throw new Error(`HTTP Error: ${verify.status}`);
      }

      const data = await verify.json();

      if (!data.success) {
        return res.status(400).json({
          success: false,
          message: "Verification failed.",
        });
      }
    } catch (err) {
      console.error("Turnstile Error:", err);

      return res.status(500).json({
        success: false,
        message: "Server error.",
      });
    }

    // Sanitize User Input
    // Sanitize User Input
const safeName = escapeHtml(name);
const safeEmail = escapeHtml(email);
const safeMessage = escapeHtml(message);

// Admin email job
await contactQueue.add(
    "admin-email",
    {
        name: safeName,
        email: safeEmail,
        message: safeMessage,
    },
    {
        attempts: 3,
        backoff: {
            type: "exponential",
            delay: 2000,
        },
        removeOnComplete: true,
        removeOnFail: false,
    }
);

// User auto-reply job
await contactQueue.add(
    "user-email",
    {
        name: safeName,
        email: safeEmail,
        message: safeMessage,
    },
    {
        attempts: 3,
        backoff: {
            type: "exponential",
            delay: 2000,
        },
        removeOnComplete: true,
        removeOnFail: false,
    }
);

return res.status(202).json({
    success: true,
    message: "Your message has been received.",
});


} catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
