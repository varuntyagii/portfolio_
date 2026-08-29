const { Queue } = require("bullmq");

const connection = process.env.REDIS_URL
  ? { url: process.env.REDIS_URL }
  : {
      host: process.env.REDIS_HOST || "localhost",
      port: Number(process.env.REDIS_PORT) || 6379,
    };

const contactQueue = new Queue("contact-email", {
  connection,
});

module.exports = contactQueue;