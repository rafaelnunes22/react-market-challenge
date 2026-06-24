// TODO: Implement a function to simulate fetching products from /api/products
// This should return a promise that resolves to an array of product objects
import mock_data from "../mock/mockdata.json";
import type { Product } from "../types/Product";

export function getProducts(souldSucceed: boolean): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (souldSucceed) {
        resolve(mock_data);
      }
      reject({ status: 400, message: "Error on fetch products" });
    }, 1000);
  });
}
