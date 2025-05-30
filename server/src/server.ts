import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";
import focusRoutes from "./routes/focusRoutes";

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/focus", focusRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
