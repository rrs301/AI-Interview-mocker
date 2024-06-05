/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://accounts:ypvN2ke3PGFE@ep-weathered-heart-a58wmzem.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };