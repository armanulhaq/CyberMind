import express from "express";
import connectDB from "./database/db.js";
import jobRouter from "./routes/job.route.js";

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.get("/", (req, res) => {
    res.send("API is working fine!");
});

app.get("/api", jobRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
