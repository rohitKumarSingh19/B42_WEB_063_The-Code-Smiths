import { model, Schema } from "mongoose";

// userSchema
const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
    accountType: { type: String, enum: ["user", "admin"], default: "user" },
    joinedAt: { type: Date, default: new Date() },
    token: { type: String, default: "" },
  },
  { timestamps: true }
);

const user = new model("User", userSchema);
export { user };
