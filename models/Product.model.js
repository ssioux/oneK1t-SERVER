const { model, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      unique: true,
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Image is required."],
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
      trim: true,
    },
    onSale: Boolean,
    salePrice: {
      type: Number,
      trim: true,
    },
    stock: Boolean,
    units: {
      type: Number,
      trim: true,
      required: [true, "Units is required."],
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);
module.exports = Product;
