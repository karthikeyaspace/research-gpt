import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv'
dotenv.config()
const apiKey = process.env.GOOGLE_API_KEY;

if (!apiKey) throw new Error("GOOGLE_API_KEY is not set");


const genai = new GoogleGenerativeAI(apiKey || "");
const model = genai.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export default model;
