import express, { Application } from "express";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import cors from "cors";

const PORT: number = Number(process.env.PORT) || 80;
const app: Application = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use(express.json());
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
