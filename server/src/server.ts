import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import focusRoutes from "./routes/focusRoutes";
import activityRoutes from "./routes/activityRoutes";
import donationRoutes from "./routes/donationRoutes";

dotenv.config({ path: ".env" }); // Explicit path
const app = express();
connectDB();

console.log("SSL Store ID:", process.env.SSLCOMMERZ_STORE_ID);
console.log("Mongo URI:", process.env.MONGO_URI);

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'none'; font-src 'self' http://localhost:5000; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the Foundation Api!");
});

// ===== (2) CORS & JSON MIDDLEWARE =====
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL || "http://localhost:3000",
//     credentials: true,
//   })
// );

//only Development
app.use(
  cors({
    origin: true, // সব অরিজিন থেকে রিকোয়েস্ট অ্যালাউ করবে
    credentials: true,
  })
);

app.use(express.json());

// ===== (3) ROUTES =====

app.use("/api/focus", focusRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api", donationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
