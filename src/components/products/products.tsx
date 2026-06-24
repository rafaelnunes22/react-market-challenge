import {
  useEffect,
  useState,
  type DetailedHTMLProps,
  type HTMLAttributes,
} from "react";
import { type Product } from "../../types/Product";
import { getProducts } from "../../api/products";
import { useCartDispatch } from "../../contexts/productsContext";

const styleLi:
  | (DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> &
      React.CSSProperties)
  | undefined = {
  display: "flex",
  flexDirection: "column",
  gap: 14,
};

function ListItem({ item }: { item: Product }) {
  const cartDispatch: any = useCartDispatch();

  return (
    <li key={item.id} style={styleLi}>
      <div>{item.name}</div>
      <div>{item.price}</div>
      <button
        onClick={() => {
          if (cartDispatch) {
            cartDispatch({
              type: "added",
              item: item,
            });
          }
        }}
      >
        Add to cart
      </button>
    </li>
  );
}

const styleUl:
  | (DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> &
      React.CSSProperties)
  | undefined = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  gap: "30px",
};

export function ProductList() {
  // TODO: Initialize state for products, loading, error, and cart
  // TODO: Implement addToCart and removeFromCart handlers
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
  /* TODO: Render loading, error, and product list UI */
  /* TODO: Render cart UI with items and total price */
  return (
    <div>
      <center>Products</center>
      <ul style={styleUl}>
        {products.length
          ? products.map((product) => <ListItem item={product} />)
          : null}
      </ul>
    </div>
  );
}
