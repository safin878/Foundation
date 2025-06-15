import axios from "axios";
import {
  SSLCommerzInitRequest,
  SSLCommerzInitResponse,
} from "../types/sslcommerz";
import { config } from "../config";
import { SSLCommerzValidationResponse } from "./../types/sslcommerz";

export class SSLCommerzService {
  private readonly baseUrl: string;
  private readonly storeId: string;
  private readonly storePassword: string;

  // Update the constructor to verify the values
  constructor() {
    if (
      !process.env.SSLCOMMERZ_STORE_ID ||
      !process.env.SSLCOMMERZ_STORE_PASSWORD
    ) {
      throw new Error(
        "SSLCommerz credentials are missing in environment variables"
      );
    }

    this.baseUrl = config.sslcommerz.sandbox
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

  async initTransaction(
    data: SSLCommerzInitRequest
  ): Promise<SSLCommerzInitResponse> {
    try {
      // Create the complete payload with required SSLCommerz fields
      const payload = {
        ...data,
        store_id: this.storeId,
        store_passwd: this.storePassword,
        total_amount: data.total_amount,
        currency: data.currency || "BDT",
        tran_id: data.tran_id,
        success_url: data.success_url,
        fail_url: data.fail_url,
        cancel_url: data.cancel_url,
        ipn_url: data.ipn_url,
        shipping_method: data.shipping_method || "NO",
        product_name: data.product_name,
        product_category: data.product_category,
        product_profile: data.product_profile || "general",
        cus_name: data.cus_name,
        cus_email: data.cus_email,
        cus_add1: data.cus_add1,
        cus_city: data.cus_city,
        cus_postcode: data.cus_postcode,
        cus_country: data.cus_country || "Bangladesh",
        cus_phone: data.cus_phone,
      };

      console.log("Sending payload to SSLCommerz:", {
        ...payload,
        store_passwd: "***", // Don't log actual password
      });

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
        formPayload.append(key, (payload as any)[key]);
      }

      const response = await axios.post(
        `${this.baseUrl}/gwprocess/v4/api.php`,
        formPayload,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log("SSLCommerz response:", response.data);

      if (response.data.status !== "SUCCESS") {
        throw new Error(
          response.data.failedreason ||
            "Failed to initialize SSLCommerz transaction"
        );
      }

      return response.data;
    } catch (error) {
      console.error("SSLCommerz initialization error:", error);
      throw new Error("Failed to initialize payment");
    }
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

  async validatePayment(val_id: string): Promise<SSLCommerzValidationResponse> {
    try {
      const response = await axios.get(
        `${this.baseUrl}/validator/api/validationserverAPI.php`,
        {
          params: {
            val_id,
            store_id: this.storeId,
            store_passwd: this.storePassword,
            format: "json",
            v: "1",
          },
          timeout: 10000,
        }
      );

      // Ensure the response has the expected shape
      const validationData: SSLCommerzValidationResponse = {
        status: response.data?.status || "INVALID",
        tran_id: response.data?.tran_id || "",
        val_id: response.data?.val_id || val_id,
        amount: response.data?.amount || "0",
        store_amount: response.data?.store_amount || "0",
        currency: response.data?.currency || "BDT",
        failedreason: response.data?.failedreason,
        ...response.data,
      };

      if (
        validationData.status !== "VALID" &&
        validationData.status !== "VALIDATED"
      ) {
        throw new Error(
          validationData.failedreason || "Payment validation failed"
        );
      }

      return validationData;
    } catch (error) {
      console.error("SSLCommerz Validation Error:", error);
      throw new Error("Failed to validate payment with SSLCommerz");
    }
  }
}
