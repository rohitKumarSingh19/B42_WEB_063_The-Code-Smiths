// Import mongoose schema and model
import { Schema, model } from "mongoose";

// Define the product schema
const productSchema = new Schema(
  {
    // Reference to the User model, representing the owner of the product
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },

    // Title of the product
    title: { type: String, required: true, trim: true },

    // URL of the product image
    image: { type: String, required: true, trim: true },

    // Category of the product, indexed for faster search and limited to specific values
    category: {
      type: String,
      required: true,
      trim: true,
      index: true,
      enum: [
        "Health",
        "Electronics",
        "Stationery",
        "Sports",
        "Fashion",
        "Gadgets",
      ],
    },

    // Description of the product
    description: { type: String, required: true, trim: true },

    // Price of the product, must be a non-negative number
    price: { type: Number, required: true, min: 0 },

    // Total number of times the product has been bought, default is 0
    totalBuy: { type: Number, default: 0, min: 0 },

    // Discounted price of the product, must be less than the original price
    discountedPrice: {
      type: Number,
      min: 0,
      validate: {
        validator: function (value) {
          return value < this.price;
        },
        message: "Discounted price must be less than the original price.",
      },
    },

    // Average rating of the product, default is 0 and must be between 0 and 5
    rating: { type: Number, default: 0, min: 0, max: 5 },

    // Each review contains a reference to the user, a rating, an optional comment, and a creation date
    // reviews: [
    //   {
    //     userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    //     rating: { type: Number, required: true, min: 1, max: 5 },
    //     comment: { type: String, trim: true },
    //     createdAt: { type: Date, default: Date.now },
    //   },
    // ],
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create and export the Product model
const Product = model("Product", productSchema);
export { Product };
