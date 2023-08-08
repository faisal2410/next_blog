import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
 {
 name: String,
 email: {
 type: String,
 required: true,
 index: true,
 lowercase: true,
 },
 password: String,
 role: {
 type: String,
 default: "user",
 },
 image: String,
 },
 { timestamps: true }
);
export default mongoose.models.User || mongoose.model("User", userSchema);
