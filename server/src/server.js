"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
const focusRoutes_1 = __importDefault(require("./routes/focusRoutes"));
const activityRoutes_1 = __importDefault(require("./routes/activityRoutes"));
const donationRoutes_1 = __importDefault(require("./routes/donationRoutes"));
dotenv_1.default.config({ path: ".env" }); // Explicit path
const app = (0, express_1.default)();
(0, db_1.default)();
console.log("SSL Store ID:", process.env.SSLCOMMERZ_STORE_ID);
console.log("Mongo URI:", process.env.MONGO_URI);
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'none'; font-src 'self' http://localhost:5000; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'");
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
// only Development
// app.use(
//   cors({
//     origin: true,
//     credentials: true,
//   })
// );
const allowedOrigins = (process.env.NODE_ENV === "production"
    ? [process.env.FRONTEND_URL]
    : ["http://localhost:3000"]).filter((origin) => typeof origin === "string");
app.use((0, cors_1.default)({
    origin: allowedOrigins,
    credentials: true,
}));
console.log("Running in NODE_ENV:", process.env.NODE_ENV);
app.use(express_1.default.json());
// ===== (3) ROUTES =====
app.use("/api/focus", focusRoutes_1.default);
app.use("/api/activities", activityRoutes_1.default);
app.use("/api", donationRoutes_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
