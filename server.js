import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // ✅ Import CORS
import dotenv from "dotenv";
import { userRegister } from "./controllers/userController.js";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

// ✅ Middleware
app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ MongoDB Connection (Use .env for security)
mongoose.connect(process.env.MONGO_URI, {
    dbname: "NodeJs_Mastery_course"
}).then(() => {
    console.log("✅ Connected to Database");
}).catch((err) => {
    console.error("❌ Database Connection Error:", err);
});

// ✅ Routes
app.post("/users", userRegister);

// ✅ If you are using EJS for rendering views
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on PORT ${PORT}`));
