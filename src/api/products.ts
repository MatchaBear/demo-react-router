import { axiosInstance } from "../libs/axios";

export type ResourceProduct = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;

  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
};

export type ResourceProducts = ResourceProduct[];

export async function apiGetProducts() {
  const response = await axiosInstance.get("/products");
  const products: ResourceProducts = response.data;
  return products;
}

export async function apiGetProductsById(productId: ResourceProduct["id"]) {
  const response = await axiosInstance.get(`/products/${productId}`);
  return response.data as ResourceProduct;
}

export async function apiAddProduct(productData: ResourceProduct) {
  const response = await axiosInstance.post("/products/", productData);
  return response.data as ResourceProduct;
}
