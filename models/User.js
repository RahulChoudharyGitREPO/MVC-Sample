import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number },
    createdAt: { type: Date, default: Date.now },
})

export const User = mongoose.model("User", UserSchema);
