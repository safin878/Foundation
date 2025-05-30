// import { Request, Response } from "express";
// import Focus from "../models/Focus";

// //GET all focus topics
// export const getAllFocus = async (_req: Request, res: Response) => {
//   try {
//     const topics = await Focus.find();
//     res.json(topics);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch topics", error });
//   }
// };

// // GET  topics by id

// export const getFocusByTitle = async (req: Request, res: Response) => {
//   const { title } = req.params;
//   try {
//     const topic = await Focus.findOne({ title });
//     if (!topic) {
//       return res.status(404).json({ message: "Topic not found" });
//     }
//     return res.json(topic);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch topic", error });
//   }
// };

import { Request, Response } from "express";
import Focus from "../models/Focus";

//GET all focus topics
export const getAllFocus = async (_req: Request, res: Response) => {
  try {
    const topics = await Focus.find();
    res.json(topics);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch topics", error });
  }
};

// GET  topics by id

export const getFocusByTitle = async (req: Request, res: Response) => {
  const { title } = req.params;
  try {
    const decodedTitle = decodeURIComponent(title);
    const topic = await Focus.findOne({
      title: { $regex: new RegExp(`^${decodedTitle}$`, "i") },
    });
    if (!topic) {
      return res.status(404).json({ message: "Topic not found" });
    }
    return res.json(topic);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch topic", error });
  }
};
