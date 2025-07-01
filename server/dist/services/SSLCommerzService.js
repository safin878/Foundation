"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSLCommerzService = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
class SSLCommerzService {
    // Update the constructor to verify the values
    constructor() {
        if (!process.env.SSLCOMMERZ_STORE_ID ||
            !process.env.SSLCOMMERZ_STORE_PASSWORD) {
            throw new Error("SSLCommerz credentials are missing in environment variables");
        }
        this.baseUrl = config_1.config.sslcommerz.sandbox
            ? "https://sandbox.sslcommerz.com"
            : "https://securepay.sslcommerz.com";
        this.storeId = process.env.SSLCOMMERZ_STORE_ID;
        this.storePassword = process.env.SSLCOMMERZ_STORE_PASSWORD;
    }
    // constructor() {
    //   // console.log("Process environment:", process.env);
    //   // Temporary hardcoded values for testing
    //   this.baseUrl = "https://sandbox.sslcommerz.com";
    //   this.storeId = "progr684e671b86314";
    //   this.storePassword = "progr684e671b86314@ssl";
    //   // console.log("SSLCommerz configured with:", {
    //   //   baseUrl: this.baseUrl,
    //   //   storeId: this.storeId,
    //   //   storePassword: "***",
    //   // });
    // }
    initTransaction(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Create the complete payload with required SSLCommerz fields
                const payload = Object.assign(Object.assign({}, data), { store_id: this.storeId, store_passwd: this.storePassword, total_amount: data.total_amount, currency: data.currency || "BDT", tran_id: data.tran_id, success_url: data.success_url, fail_url: data.fail_url, cancel_url: data.cancel_url, ipn_url: data.ipn_url, shipping_method: data.shipping_method || "NO", product_name: data.product_name, product_category: data.product_category, product_profile: data.product_profile || "general", cus_name: data.cus_name, cus_email: data.cus_email, cus_add1: data.cus_add1, cus_city: data.cus_city, cus_postcode: data.cus_postcode, cus_country: data.cus_country || "Bangladesh", cus_phone: data.cus_phone });
                console.log("Sending payload to SSLCommerz:", Object.assign(Object.assign({}, payload), { store_passwd: "***" }));
                // const response = await axios.post(
                //   `${this.baseUrl}/gwprocess/v4/api.php`,
                //   payload,
                //   {
                //     headers: {
                //       "Content-Type": "application/x-www-form-urlencoded",
                //     },
                //   }
                // );
                const formPayload = new URLSearchParams();
                for (const key in payload) {
                    formPayload.append(key, payload[key]);
                }
                const response = yield axios_1.default.post(`${this.baseUrl}/gwprocess/v4/api.php`, formPayload, {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                });
                console.log("SSLCommerz response:", response.data);
                if (response.data.status !== "SUCCESS") {
                    throw new Error(response.data.failedreason ||
                        "Failed to initialize SSLCommerz transaction");
                }
                return response.data;
            }
            catch (error) {
                console.error("SSLCommerz initialization error:", error);
                throw new Error("Failed to initialize payment");
            }
        });
    }
    // async validatePayment(valId: string): Promise<boolean> {
    //   try {
    //     const response = await axios.get(
    //       `${this.baseUrl}/validator/api/validationserverAPI.php`,
    //       {
    //         params: {
    //           val_id: valId,
    //           store_id: this.storeId,
    //           store_passwd: this.storePassword,
    //           format: "json",
    //           v: "1",
    //         },
    //       }
    //     );
    //     return (
    //       response.data.status === "VALID" || response.data.status === "VALIDATED"
    //     );
    //   } catch (error) {
    //     console.error("SSLCommerz validation error:", error);
    //     return false;
    //   }
    // }
    validatePayment(val_id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g;
            try {
                const response = yield axios_1.default.get(`${this.baseUrl}/validator/api/validationserverAPI.php`, {
                    params: {
                        val_id,
                        store_id: this.storeId,
                        store_passwd: this.storePassword,
                        format: "json",
                        v: "1",
                    },
                    timeout: 10000,
                });
                // Ensure the response has the expected shape
                const validationData = Object.assign({ status: ((_a = response.data) === null || _a === void 0 ? void 0 : _a.status) || "INVALID", tran_id: ((_b = response.data) === null || _b === void 0 ? void 0 : _b.tran_id) || "", val_id: ((_c = response.data) === null || _c === void 0 ? void 0 : _c.val_id) || val_id, amount: ((_d = response.data) === null || _d === void 0 ? void 0 : _d.amount) || "0", store_amount: ((_e = response.data) === null || _e === void 0 ? void 0 : _e.store_amount) || "0", currency: ((_f = response.data) === null || _f === void 0 ? void 0 : _f.currency) || "BDT", failedreason: (_g = response.data) === null || _g === void 0 ? void 0 : _g.failedreason }, response.data);
                if (validationData.status !== "VALID" &&
                    validationData.status !== "VALIDATED") {
                    throw new Error(validationData.failedreason || "Payment validation failed");
                }
                return validationData;
            }
            catch (error) {
                console.error("SSLCommerz Validation Error:", error);
                throw new Error("Failed to validate payment with SSLCommerz");
            }
        });
    }
}
exports.SSLCommerzService = SSLCommerzService;
