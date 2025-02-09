// Import multer for handling file uploads
import multer from "multer";

// Configure storage settings for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../uploads/products/"); // Set the destination folder for uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Set the filename to be unique
  },
});

// Export the configured multer instance
export const upload = multer({ storage: storage });
