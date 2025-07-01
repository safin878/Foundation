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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationController = void 0;
const Donation_1 = require("../models/Donation");
const SSLCommerzService_1 = require("../services/SSLCommerzService");
const config_1 = require("../config");
const uuid_1 = require("uuid");
const sslCommerzService = new SSLCommerzService_1.SSLCommerzService();
class DonationController {
    createDonationSession(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { amount, name, email, phone } = req.body;
                // Generate a unique transaction ID
                const transactionId = `DON-${(0, uuid_1.v4)()}`;
                // Create a donation record
                const donation = new Donation_1.DonationModel({
                    transactionId,
                    amount,
                    name,
                    email,
                    phone,
                    status: "pending",
                });
                yield donation.save();
                // Prepare SSLCommerz request
                const sslRequest = {
                    total_amount: amount,
                    currency: "BDT",
                    tran_id: transactionId,
                    // success_url: `${config.baseUrl}/api/donations/success/${transactionId}`,
                    success_url: `${config_1.config.baseUrl}/api/donations/success?transactionId=${transactionId}`,
                    fail_url: `${config_1.config.baseUrl}/api/donations/fail/${transactionId}`,
                    cancel_url: `${config_1.config.baseUrl}/api/donations/cancel/${transactionId}`,
                    ipn_url: `${config_1.config.baseUrl}/api/donations/ipn`,
                    cus_name: name,
                    cus_email: email,
                    cus_add1: "N/A",
                    cus_city: "N/A",
                    cus_postcode: "N/A",
                    cus_phone: phone,
                    cus_country: "Bangladesh",
                    shipping_method: "NO",
                    product_name: "Education Donation",
                    product_category: "Donation",
                    product_profile: "non-physical-goods",
                };
                // Initialize SSLCommerz transaction
                const sslResponse = yield sslCommerzService.initTransaction(sslRequest);
                res.json({
                    success: true,
                    message: "Payment session created",
                    GatewayPageURL: sslResponse.GatewayPageURL,
                    transactionId,
                });
            }
            catch (error) {
                console.error("Error creating donation session:", error);
                res.status(500).json({
                    success: false,
                    message: "Failed to create payment session",
                });
            }
        });
    }
    // async handleSuccess(req: Request, res: Response) {
    //   try {
    //     const { transactionId, val_id } = req.query;
    //     // Step 1: Check both query params
    //     if (!transactionId || !val_id) {
    //       return res.status(400).json({
    //         message: "Transaction ID এবং val_id প্রয়োজন",
    //       });
    //     }
    //     // Step 2: Verify payment from SSLCommerz Validation API
    //     const validateUrl = `https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php?val_id=${val_id}&store_id=progr684e671b86314&store_passwd=progr684e671b86314@ssl&v=1&format=json`;
    //     const response = await axios.get(validateUrl);
    //     const validation = response.data;
    //     // Step 3: Check if validation was successful
    //     if (
    //       validation.status !== "VALID" ||
    //       validation.transaction_id !== transactionId
    //     ) {
    //       return res.redirect(
    //         `${config.frontendUrl}/donation/failed?transactionId=${transactionId}`
    //       );
    //     }
    //     // Step 4: Update donation status to completed
    //     const donation = await DonationModel.findOne({ transactionId });
    //     if (!donation) {
    //       return res.status(404).json({ message: "ডোনেশন পাওয়া যায়নি" });
    //     }
    //     donation.status = "completed";
    //     await donation.save();
    //     // Step 5: Redirect to frontend success page
    //     return res.redirect(
    //       `${config.frontendUrl}/donation/success?transactionId=${transactionId}`
    //     );
    //   } catch (error) {
    //     console.error("handleSuccess error:", error);
    //     return res.status(500).json({ message: "ইন্টারনাল সার্ভার এরর" });
    //   } finally {
    //     console.log("Success URL called with:", req.query);
    //   }
    // }
    handleSuccess(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let transactionId; // transactionId কে try ব্লকের বাইরে ডিফাইন করা
            try {
                // req.query থেকে ডিস্ট্রাকচার করা
                ({ transactionId } = req.query);
                console.log("Success URL called with:", req.query); // লগ যোগ করো
                // Step 1: Check transactionId
                if (!transactionId) {
                    console.error("Missing transactionId:", req.query);
                    return res.redirect(`${config_1.config.frontendUrl}/donation/failed/error=missing_transaction_id`);
                }
                // Step 2: Find donation record
                const donation = yield Donation_1.DonationModel.findOne({ transactionId });
                if (!donation) {
                    console.error("Donation not found for transactionId:", transactionId);
                    return res.redirect(`${config_1.config.frontendUrl}/donation/failed/transactionId=${transactionId}&error=donation_not_found`);
                }
                // Step 3: Update donation status to completed (without val_id validation)
                donation.status = "completed";
                yield donation.save();
                console.log("Donation status updated to completed:", transactionId);
                // Step 4: Redirect to frontend success page
                return res.redirect(`${config_1.config.frontendUrl}/donation/success/transactionId=${transactionId}`);
            }
            catch (error) {
                console.error("handleSuccess error:", error);
                return res.redirect(`${config_1.config.frontendUrl}/donation/failed/transactionId=${transactionId || "unknown"}&error=server_error`);
            }
        });
    }
    // async handleFailure(req: Request, res: Response) {
    //   try {
    //     const { transactionId } = req.params;
    //     // Update donation status to failed
    //     await DonationModel.findOneAndUpdate(
    //       { transactionId },
    //       { status: "failed" }
    //     );
    //     return res.redirect(
    //       `${config.frontendUrl}/donation/failed?transactionId=${transactionId}`
    //     );
    //   } catch (error) {
    //     console.error("Error handling failure:", error);
    //     return res.redirect(`${config.frontendUrl}/donation/failed`);
    //   }
    // }
    handleFailure(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { transactionId } = req.params;
                if (!transactionId) {
                    console.error("Missing transactionId in failure handler");
                    return res.redirect(`${config_1.config.frontendUrl}/donation/failed/unknown`);
                }
                yield Donation_1.DonationModel.findOneAndUpdate({ transactionId }, { status: "failed" });
                return res.redirect(`${config_1.config.frontendUrl}/donation/failed/${transactionId}`);
            }
            catch (error) {
                console.error("Error handling failure:", error);
                return res.redirect(`${config_1.config.frontendUrl}/donation/failed/error`);
            }
        });
    }
    handleCancel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { transactionId } = req.params;
                // Update donation status to canceled
                yield Donation_1.DonationModel.findOneAndUpdate({ transactionId }, { status: "canceled" });
                // Optional: Logging
                console.log(`Donation canceled: ${transactionId}`);
                // Redirect to frontend with clean URL
                return res.redirect(`${config_1.config.frontendUrl}/donation/canceled/${transactionId}`);
            }
            catch (error) {
                console.error("Error handling cancel:", error);
                return res.redirect(`${config_1.config.frontendUrl}/donation/canceled/unknown`);
            }
        });
    }
    handleIPN(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { tran_id, val_id, amount, store_amount, status } = req.body;
                if (status !== "VALID" && status !== "VALIDATED") {
                    return res.status(400).json({ error: "Invalid payment status" });
                }
                // Find the donation record
                const donation = yield Donation_1.DonationModel.findOne({ transactionId: tran_id });
                if (!donation) {
                    return res.status(404).json({ error: "Donation not found" });
                }
                // Validate the payment with SSLCommerz
                const validation = yield sslCommerzService.validatePayment(val_id);
                if (validation.status === "VALID" || validation.status === "VALIDATED") {
                    // Update donation status
                    donation.status = "completed";
                    donation.sslcommerzValId = val_id;
                    yield donation.save();
                }
                return res.json({ success: true });
            }
            catch (error) {
                console.error("Error handling IPN:", error);
                return res.status(500).json({ error: "Internal server error" });
            }
        });
    }
}
exports.DonationController = DonationController;
