/* - Switch to `/api/products/index.js`; import the `getAllProducts` function from `/services/productServices.js`.
- Write a handler function which responds
  - with a `200` status code and
  - with the return value of `getAllProducts`, parsed with the `.json()` method. */


import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
    response.status(200).json(getAllProducts());
}