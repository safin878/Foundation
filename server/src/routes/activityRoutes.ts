import express from "express";
import activityController from "../controller/activityController";

const router = express.Router();

// GET all activities
router.get("/", activityController.getAllActivities);

// GET single activity by slug
router.get("/slug/:slug", activityController.getActivityBySlug);
router.get("/:id", activityController.getActivityById);

export default router;
