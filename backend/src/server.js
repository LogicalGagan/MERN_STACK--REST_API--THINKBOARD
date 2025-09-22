import express from "express";
import notesRoutes from "./Routes/NotesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import { rateLimiterMiddleware } from "./middleware/ratelimiter.js";
import cors from "cors"
import path from "path"
import userRoutes from "./Routes/userRoutes.js";
dotenv.config();

const __dirname = path.resolve();
const app = express();

if (!process.env.JWT_SECRET) {
    console.error("FATAL ERROR: JWT_SECRET is not defined.");
    process.exit(1);
}


connectDB();

app.use(express.json());

if (process.env.NODE_ENV !== "production") {

    app.use(cors({ origin: "http://localhost:5173" }))
}
app.use("/api/users", userRoutes);
app.use("/api/notes", rateLimiterMiddleware, notesRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));


    })
}



const PORT = process.env.PORT;


app.listen(PORT);