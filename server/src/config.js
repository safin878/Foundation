"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env" });
exports.config = {
    sslcommerz: {
        storeId: process.env.SSLCOMMERZ_STORE_ID,
        storePassword: process.env.SSLCOMMERZ_STORE_PASSWORD,
        sandbox: process.env.NODE_ENV !== "production",
    },
    baseUrl: process.env.BASE_URL || "http://localhost:5000",
    frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",
};
// লগ যোগ করুন
console.log("Config loaded:", {
    sslcommerz: {
        storeId: exports.config.sslcommerz.storeId,
        storePassword: "***", // পাসওয়ার্ড লগ করবেন না
        sandbox: exports.config.sslcommerz.sandbox,
    },
    baseUrl: exports.config.baseUrl,
    frontendUrl: exports.config.frontendUrl,
});
