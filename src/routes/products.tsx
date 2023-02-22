import { Link, useLoaderData } from "react-router-dom";

import { apiGetProducts } from "../api/products";

export async function loader() {
  const products = await apiGetProducts();
  return { products };
}
