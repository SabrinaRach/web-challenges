/* delete import { products } from "../../../lib/products"; */

import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query; // id is initially undefined, when hard-reloading a sub-page

  /* - To find a single product by its id, you can use the `Product` model and the `.findById()` method: `Product.findById(id)`. 
 - use the `.populate` method to integrate the reviews for each product.*/
  const product = await Product.findById(id).populate("reviews");

  if (!product) {
    response.status(404).json({ status: "Not Found" });
    return;
  }

  response.status(200).json(product);
}
