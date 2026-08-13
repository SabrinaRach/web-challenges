/*delete: import { products } from "../../../lib/products"; */
/* - Import `dbConnect` from the `db/connect.js` file.
- Import the `Product` model. */
import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

/* - Make the `handler` function `async` and `await` the connection to the database.
- If the `request.method` is `GET`,

  - use the `Product` model to find all products and
  - return them as a response. */

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const products = await Product.find().populate("reviews");
    response.status(200).json(products);
    return;
  }
  return response.status(405).end();
}
