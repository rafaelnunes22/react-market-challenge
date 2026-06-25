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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);

        const response = await getProducts(true);
        setProducts(response);
      } catch (error: any) {
        setError(error.message);
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);
  /* TODO: Render loading, error, and product list UI */
  /* TODO: Render cart UI with items and total price */
  return (
    <div>
      <center>Products</center>
      {!isLoading && !error ? (
        <ul style={styleUl}>
          {products.length
            ? products.map((product) => (
                <ListItem key={product.id} item={product} />
              ))
            : null}
        </ul>
      ) : null}
      {isLoading ? (
        <center>
          <strong>Loading...</strong>
        </center>
      ) : null}
      {error ? (
        <center>
          <strong>{error}</strong>
        </center>
      ) : null}
    </div>
  );
}
