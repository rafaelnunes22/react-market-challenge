import React, {
  useEffect,
  type DetailedHTMLProps,
  type HTMLAttributes,
} from "react";
import { useCart } from "../../contexts/productsContext";

function formatTotalPrice(price: number, quantity: number): string {
  return (price * quantity).toFixed(2);
}

const style:
  | (DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> &
      React.CSSProperties)
  | undefined = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  gap: "30px",
};

export function CartComponent() {
  const cart = useCart();
  // TODO: Render cart items, their quantities, and total price
  // TODO: Call onRemove when removing an item from the cart

  useEffect(() => {
    console.log(cart);
  });

  return (
    <div>
      <center>Cart</center>
      <ul style={style}>
        {cart?.length
          ? cart.map(({ name, price, id, quantity }) => (
              <li
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
                key={id}
              >
                <div>{name}</div>
                <div>{quantity}</div>
                <div>{formatTotalPrice(price, quantity)}</div>
                <button>Remove from cart</button>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
