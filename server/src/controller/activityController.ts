import { Request, Response } from "express";
import Activity from "../models/Activity";
import { IActivity } from "../types/activity";

class ActivityController {
  // Get all activities
  async getAllActivities(req: Request, res: Response): Promise<void> {
    try {
      const activities = await Activity.find();
      res.status(200).json(activities);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get single activity by slug
  async getActivityBySlug(req: Request, res: Response): Promise<void> {
    try {
      const activity = await Activity.findOne({ slug: req.params.slug });
      if (!activity) {
        res.status(404).json({ message: "Activity not found" });
        return;
      }
      res.status(200).json(activity);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new ActivityController();
