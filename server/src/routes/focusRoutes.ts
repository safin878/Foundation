import { Router } from "express";
import { getAllFocus, getFocusByTitle } from "../controller/focusController";

const router = Router();

// For the root route
router.get("/", (req, res) => {
  getAllFocus(req, res).catch((err) => {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  });
});

// For the title parameter route
router.get("/:title", (req, res) => {
  getFocusByTitle(req, res).catch((err) => {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  });
});

export default router;
