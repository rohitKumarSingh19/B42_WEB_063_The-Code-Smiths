// Import mongoose for database connection
import mongoose from "mongoose";
// Import database name from constants
import { dbName } from "../constants.js";

// Function to connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${dbName}`);
    console.log("database connected");
  } catch (error) {
    console.log("database not connected");
    console.error(error);
  }
};

// Export the connectDB function
export default connectDB;
