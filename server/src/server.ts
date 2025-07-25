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
  res.send(`
    <h2>🚀 Welcome to the Foundation API</h2>
    <p>Available GET Routes:</p>
    <ul>
       <li><a href="/api/focus">Focus API</a></li>
       <li><a href="/api/activities">Activity API</a></li>
    </ul>
  `);
});

// ===== (2) CORS & JSON MIDDLEWARE =====
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL || "http://localhost:3000",
//     credentials: true,
//   })
// );

// const allowedOrigins = [process.env.FRONTEND_URL, "http://localhost:3000"];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );

// only Development
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// const allowedOrigins = (
//   process.env.NODE_ENV === "production"
//     ? [process.env.FRONTEND_URL]
//     : ["http://localhost:3000"]
// ).filter((origin): origin is string => typeof origin === "string");

// app.use(
//   cors({
//     origin: allowedOrigins,
//     credentials: true,
//   })
// );

// console.log("Running in NODE_ENV:", process.env.NODE_ENV);
// console.log("Allowed Origins:", allowedOrigins);

app.use(express.json());

// ===== (3) ROUTES =====

app.use("/api/focus", focusRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api", donationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
