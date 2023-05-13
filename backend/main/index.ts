import dotenv from "dotenv";
dotenv.config();
import { generateComponents } from "./react-agent";
if (!process.env.OPENAI_SECRET_KEY) {
  console.error(
    "OPENAI_SECRET_KEY is not defined, please set it in .env file in backend/main folder (see .env.example)"
  );
  process.exit(1);
}

generateComponents();
