require("dotenv").config();
const { Worker } = require("bullmq");

const sendAdminMail = require("./sendAdminMail");
const sendUserMail = require("./mailSend");

const connection = {
  host: process.env.REDIS_HOST || "localhost",
  port: Number(process.env.REDIS_PORT) || 6379,
};

const worker = new Worker(
  "contact-email",

  async (job) => {
    const { name, email, message } = job.data;

    console.log(`📥 Processing ${job.name} - Job ${job.id}`);

    if (job.name === "admin-email") {
      await sendAdminMail({
        name,
        email,
        message,
        jobId: job.id,
      });
    }

    else if (job.name === "user-email") {
      await sendUserMail({
        name,
        email,
        message,
        jobId: job.id,
      });
    }

    else {
      throw new Error(`Unknown job type: ${job.name}`);
    }

    console.log(`✅ Job ${job.id} completed`);
  },

  {
    connection,

    limiter: {
      max: 10,
      duration: 1000,
    },
  }
);

console.log("🚀 Worker created and waiting for jobs...");

worker.on("completed", (job) => {
  console.log(`✅ Job ${job.id} completed`);
});

worker.on("failed", (job, error) => {
  console.error(
    `❌ Job ${job?.id} failed:`,
    error.message
  );
});

worker.on("error", (error) => {
  console.error("❌ Worker error:", error);
});