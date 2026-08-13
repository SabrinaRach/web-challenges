/* Create a schema for the `Product` model in the `db/models` folder.

The schema should have the following fields:

- `name` (String)
- `description` (String)
- `price` (Number)
- `currency` (String) */

import mongoose from "mongoose";
import Review from "./Review";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" }, /* you want to define that it is an array of Object-Ids and has a reference to the `Review` schema */
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;