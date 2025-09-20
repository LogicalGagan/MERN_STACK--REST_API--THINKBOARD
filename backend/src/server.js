import express from "express";
import notesRoutes from "./Routes/NotesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import { rateLimiterMiddleware } from "./middleware/ratelimiter.js";
import cors from "cors"
import path from "path"
dotenv.config();

const __dirname = path.resolve();
const app = express();


connectDB();

app.use(express.json());

if (process.env.NODE_ENV !== "production") {

    app.use(cors({ origin: "http://localhost:5173" }))
}
app.use("/api/notes", rateLimiterMiddleware, notesRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));


    })
}



const PORT = process.env.PORT;


app.listen(PORT);