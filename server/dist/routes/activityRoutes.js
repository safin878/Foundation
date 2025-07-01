"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const activityController_1 = __importDefault(require("../controller/activityController"));
const router = express_1.default.Router();
// GET all activities
router.get("/", activityController_1.default.getAllActivities);
// GET single activity by slug
router.get("/slug/:slug", activityController_1.default.getActivityBySlug);
router.get("/:id", activityController_1.default.getActivityById);
exports.default = router;
