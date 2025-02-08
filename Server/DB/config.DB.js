import mongoose from "mongoose";
import { dbName } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${dbName}`);
    console.log("database connected");
  } catch (error) {
    console.log("database not connected");
    console.error(error);
  }
};

export default connectDB;
