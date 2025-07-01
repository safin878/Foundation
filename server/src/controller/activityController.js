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
const Activity_1 = __importDefault(require("../models/Activity"));
class ActivityController {
    // Get all activities
    getAllActivities(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const activities = yield Activity_1.default.find();
                res.status(200).json(activities);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    // Get single activity by slug
    getActivityBySlug(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const activity = yield Activity_1.default.findOne({ slug: req.params.slug });
                if (!activity) {
                    res.status(404).json({ message: "Activity not found" });
                    return;
                }
                res.status(200).json(activity);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    // ✅ Get single activity by ID
    getActivityById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const activity = yield Activity_1.default.findById(req.params.id);
                if (!activity) {
                    res.status(404).json({ message: "Activity not found" });
                    return;
                }
                res.status(200).json(activity);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.default = new ActivityController();
