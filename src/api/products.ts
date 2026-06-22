// TODO: Implement a function to simulate fetching products from /api/products
// This should return a promise that resolves to an array of product objects
import mock_data from "./mock/mockdata.json"


export function fetchProducts(shouldResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldResolve) {
      reject(new Error({status: 400, message: "Failed to fetch data!" })
      }

      resolve({status: 200, message: "Success fetching data!", data: mock_data })
    }, 1500)
  })
}