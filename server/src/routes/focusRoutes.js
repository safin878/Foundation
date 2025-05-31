"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const focusController_1 = require("../controller/focusController");
const router = (0, express_1.Router)();
// For the root route
router.get("/", (req, res) => {
    (0, focusController_1.getAllFocus)(req, res).catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    });
});
// For the title parameter route
router.get("/:title", (req, res) => {
    (0, focusController_1.getFocusByTitle)(req, res).catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    });
});
exports.default = router;
