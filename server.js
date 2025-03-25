import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // ✅ Import CORS
import { userRegister } from "./controllers/userController.js";


const PORT =  8000;
const app = express();

// ✅ Middleware
app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs"); // ✅ Set EJS as the default templating engine


// ✅ MongoDB Connection (Use .env for security)
mongoose.connect("mongodb+srv://rahulrajwwe2:NmSAs0z1azDDvRwm@cluster0.jcrzs.mongodb.net/", {
    dbname: "NodeJs_Mastery_course"
}).then(() => {
    console.log("✅ Connected to Database");
}).catch((err) => {
    console.error("❌ Database Connection Error:", err);
});

// ✅ Routes
app.post("/users", userRegister);



app.get("/", (req, res) => {
    res.render("index");
});

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on PORT ${PORT}`));
