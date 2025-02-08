// Import mongoose model and schema
import { model, Schema } from "mongoose";

// Define the user schema
const userSchema = new Schema(
  {
    // Username field, required, unique, and trimmed
    username: { type: String, required: true, unique: true, trim: true },
    // Email field, required, unique, lowercase, and trimmed
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    // Password field, required
    password: { type: String, required: true },
    // Account type field, can be either 'user' or 'admin', default is 'user'
    accountType: { type: String, enum: ["user", "admin"], default: "user" },
    // Joined date field, default is the current date
    joinedAt: { type: Date, default: new Date() },
    // Token field, default is an empty string
    token: { type: String, default: "" },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create and export the User model
const user = new model("User", userSchema);
export { user };
