import express from "express";
import notesRoutes from "./Routes/NotesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import { rateLimiterMiddleware } from "./middleware/ratelimiter.js";
import cors from "cors"
dotenv.config();
const app =express();

connectDB();

app.use(express.json());

app.use(cors({origin :"http://localhost:5173"}))
app.use("/api/notes", rateLimiterMiddleware, notesRoutes);

const PORT =process.env.PORT;


app.listen(PORT);