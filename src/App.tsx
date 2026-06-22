import { useEffect, useState } from "react";

import "./App.css";
import { getProducts } from "./api/products";
import type { Product } from "./types/Product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getProducts(true);
        setProducts(response);
      } catch (error: any) {
        throw new Error(error.message);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <ul>
        {products.length
          ? products.map((product) => <li key={product.id}>{product.name}</li>)
          : null}
      </ul>
    </>
  );
}

export default App;
