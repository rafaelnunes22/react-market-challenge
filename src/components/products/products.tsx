import React, { useState, useEffect } from 'react';
import { fetchProducts } from "../api/products";

function ProductList() {
  // TODO: Initialize state for products, loading, error, and cart
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState();
  const [error, setError] = useState("");
  

  useEffect(async () => {
    // TODO: Fetch product data from /api/products
    // TODO: Handle loading and error states
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [error, setError] = useState(null);

  function clearData() {
    setProducts([])
    setCart([])
    setError(null)
  }

    getData() {
      try {
        clearData();
        setisLoading(true);
        const data = await fetchProducts(true);
        setProducts(data);
      } catch (error) {
        throw new Error(error.message)
          setError(error.message)
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [fetchProducts]);

  // TODO: Implement addToCart and removeFromCart handlers

  function addToCart(product) {
    const alreadyAdded = cart.find((item) => item.id === product.id);
    
    if (!!alreadyAdded) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          item.quantity = item.quantity++;
        }
      })
      setCart(updatedCart);
    }
  }

  return (
    <div>
      { isLoading ? <span>Loading...</span> : null }
      { error ? <span>Error: {error}</span> : null }
      { !!products.length ? 
        <ul>
          { products.map((product) => (
            <li key={product.id}>
              <p>Name: {product.name}</p>
              <p>Price: {String(product.price)}</p> 
            <button onClick={() => addToCart(product)}>
              Add to cart
            </button>
            </li>
          ))}
        </ul> : <span>There is no available product</span>
      {/* TODO: Render loading, error, and product list UI */}
      {/* TODO: Render cart UI with items and total price */}
    </div>
  );
}

export default ProductList;