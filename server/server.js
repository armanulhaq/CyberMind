import express from "express";
import connectDB from "./database/db.js";
import jobRouter from "./routes/job.route.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("API is working fine!");
});

app.use("/api", jobRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
