"use strict";
// import express, { Request, Response, RequestHandler } from "express";
// import { DonationController } from "../controller/donationController";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const router = express.Router();
// const donationController = new DonationController();
// router.post(
//   "/donations/create-session",
//   donationController.createDonationSession.bind(
//     donationController
//   ) as unknown as RequestHandler
// );
// // Add this new POST endpoint
// router.post(
//   "/donations/success/:transactionId",
//   donationController.handleSuccess.bind(
//     donationController
//   ) as unknown as RequestHandler
// );
// router.get(
//   "/donations/success/:transactionId",
//   donationController.handleSuccess.bind(
//     donationController
//   ) as unknown as RequestHandler
// );
// router.get(
//   "/donations/fail/:transactionId",
//   donationController.handleFailure.bind(
//     donationController
//   ) as unknown as RequestHandler
// );
// router.get(
//   "/donations/cancel/:transactionId",
//   donationController.handleCancel.bind(
//     donationController
//   ) as unknown as RequestHandler
// );
// router.post(
//   "/donations/ipn",
//   donationController.handleIPN.bind(
//     donationController
//   ) as unknown as RequestHandler
// );
// export default router;
const express_1 = __importDefault(require("express"));
const donationController_1 = require("../controller/donationController");
const router = express_1.default.Router();
const donationController = new donationController_1.DonationController();
router.post("/donations/create-session", donationController.createDonationSession.bind(donationController));
router.post("/donations/success", donationController.handleSuccess.bind(donationController));
router.get("/donations/success", donationController.handleSuccess.bind(donationController));
router.get("/donations/fail/:transactionId", donationController.handleFailure.bind(donationController));
router.get("/donations/cancel/:transactionId", donationController.handleCancel.bind(donationController));
router.post("/donations/ipn", donationController.handleIPN.bind(donationController));
// routes/donationRoutes.ts (or wherever your routes are)
router.post("/donations/fail/:transactionId", donationController.handleFailure.bind(donationController));
router.get("/donations/fail/:transactionId", donationController.handleFailure.bind(donationController));
// Cancel route for GET and POST both
router.get("/donations/cancel/:transactionId", donationController.handleCancel.bind(donationController));
router.post("/donations/cancel/:transactionId", donationController.handleCancel.bind(donationController));
exports.default = router;
