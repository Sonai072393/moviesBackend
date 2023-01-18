import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();
///routers
import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = 5000;

app.use("/get", postRoutes);
app.use("/post", postRoutes);


app.listen(PORT, () => console.log(`Server Running on port:${PORT}`));
