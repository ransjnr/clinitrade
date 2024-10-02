/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://clinitrade_owner:qpS2AUaKh1RD@ep-bitter-flower-a53ko1v8.us-east-2.aws.neon.tech/clinitrade?sslmode=require",
  },
};
