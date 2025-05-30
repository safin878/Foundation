import { Router } from "express";
import { getUsers, createUser } from "../controller/userController";

const router = Router();
router.get("/", getUsers);
router.get("/", createUser);
export default router;
