import { Schema, model } from "mongoose";

// Product Schema
const productSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true, index: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    totalBuy: { type: Number, default: 0, min: 0 },
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
    rating: { type: Number, default: 0, min: 0, max: 5 },
    // reviews: [
    //   {
    //     userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    //     rating: { type: Number, required: true, min: 1, max: 5 },
    //     comment: { type: String, trim: true },
    //     createdAt: { type: Date, default: Date.now },
    //   },
    // ],
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);
export { Product };
