// import express, { Request, Response, RequestHandler } from "express";
// import { DonationController } from "../controller/donationController";

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

import express, { RequestHandler } from "express";
import { DonationController } from "../controller/donationController";

const router = express.Router();
const donationController = new DonationController();

router.post(
  "/donations/create-session",
  donationController.createDonationSession.bind(
    donationController
  ) as unknown as RequestHandler
);

router.post(
  "/donations/success",
  donationController.handleSuccess.bind(
    donationController
  ) as unknown as RequestHandler
);

router.get(
  "/donations/success",
  donationController.handleSuccess.bind(donationController) as RequestHandler
);

router.get(
  "/donations/fail/:transactionId",
  donationController.handleFailure.bind(
    donationController
  ) as unknown as RequestHandler
);

router.get(
  "/donations/cancel/:transactionId",
  donationController.handleCancel.bind(
    donationController
  ) as unknown as RequestHandler
);

router.post(
  "/donations/ipn",
  donationController.handleIPN.bind(
    donationController
  ) as unknown as RequestHandler
);

// routes/donationRoutes.ts (or wherever your routes are)
router.post(
  "/donations/fail/:transactionId",
  donationController.handleFailure.bind(donationController)
);
router.get(
  "/donations/fail/:transactionId",
  donationController.handleFailure.bind(donationController)
);

// Cancel route for GET and POST both
router.get(
  "/donations/cancel/:transactionId",
  donationController.handleCancel.bind(donationController)
);
router.post(
  "/donations/cancel/:transactionId",
  donationController.handleCancel.bind(donationController)
);

export default router;
