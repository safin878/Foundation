import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";
import focusRoutes from "./routes/focusRoutes";
import activityRoutes from "./routes/activityRoutes";
import donationRoutes from "./routes/donationRoutes";

dotenv.config({ path: ".env" }); // Explicit path
const app = express();
connectDB();

console.log("SSL Store ID:", process.env.SSLCOMMERZ_STORE_ID);
console.log("Mongo URI:", process.env.MONGO_URI);

// ===== (1) ADD CSP MIDDLEWARE HERE =====
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'none'; font-src 'self' http://localhost:5000; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'"
  );
  next();
});

// ===== (2) CORS & JSON MIDDLEWARE =====
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL || "http://localhost:3000",
//     credentials: true,
//   })
// );

const allowedOrigins = [
  "https://foundation-nine-eta.vercel.app",
  "https://foundation-53c2.onrender.com",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow non-browser requests like Postman
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);
app.use(express.json());

// ===== (3) ROUTES =====
app.use("/api/users", userRoutes);
app.use("/api/focus", focusRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api", donationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
