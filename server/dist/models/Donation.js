"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationModel = void 0;
const mongoose_1 = require("mongoose");
const donationSchema = new mongoose_1.Schema({
    transactionId: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    status: {
        type: String,
        required: true,
        enum: ["pending", "completed", "failed"],
        default: "pending",
    },
    sslcommerzTranId: { type: String },
    sslcommerzValId: { type: String },
}, {
    timestamps: true,
});
exports.DonationModel = (0, mongoose_1.model)("Donation", donationSchema);
