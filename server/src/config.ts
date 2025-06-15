import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const config = {
  sslcommerz: {
    storeId: process.env.SSLCOMMERZ_STORE_ID as string,
    storePassword: process.env.SSLCOMMERZ_STORE_PASSWORD as string,
    sandbox: process.env.NODE_ENV !== "production",
  },
  baseUrl: process.env.BASE_URL || "http://localhost:5000",
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",
};

// লগ যোগ করুন
console.log("Config loaded:", {
  sslcommerz: {
    storeId: config.sslcommerz.storeId,
    storePassword: "***", // পাসওয়ার্ড লগ করবেন না
    sandbox: config.sslcommerz.sandbox,
  },
  baseUrl: config.baseUrl,
  frontendUrl: config.frontendUrl,
});
