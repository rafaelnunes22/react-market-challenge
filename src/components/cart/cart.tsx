import React from "react";

function Cart({ cartItems, onRemove }) {
  // TODO: Render cart items, their quantities, and total price
  // TODO: Call onRemove when removing an item from the cart
  return (
    <ul>
      {!!cartItems.length
        ? cartItems.map((item) => (
            <li key={item.id}>
              <p>Name: {item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>totalPrice: {item.totalPrice}</p>
              <button onClick={() => onRemove(item.id)}>Remove item</button>
            </li>
          ))
        : null}
      {!cartItems.length ? <span>There is no items in the cart</span> : null}
    </ul>
  );
}

export default Cart;
