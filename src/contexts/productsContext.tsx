import { createContext, useContext, useReducer, type JSX } from "react";
import type { Cart, CartItem } from "../types/Product";

const CartContext = createContext<Cart | null>(null);
const CartDispatchContext = createContext(null);

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

type Props = {
  children: JSX.Element;
};

export function CartProvider({ children }: Props) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  return (
    <CartContext value={cart}>
      <CartDispatchContext value={dispatch as any}>
        {children}
      </CartDispatchContext>
    </CartContext>
  );
}

function cartReducer(cart: any, action: any) {
  switch (action.type) {
    case "added": {
      let itemExists = false;

      const newCart = cart.map((item: CartItem) => {
        if (item.id === action.item.id) {
          itemExists = true;
          return { ...item, quantity: item.quantity++ };
        }
        return item;
      });

      if (!itemExists) {
        return [...cart, { ...action.item, quantity: 1 }];
      }

      return newCart;
    }
    case "remove": {
      const newCart = cart.map((item: CartItem, index: number): CartItem => {
        if (item.id === action.id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity-- };
          } else {
            delete cart[index];
          }
        }

        return item;
      });

      return newCart;
    }
  }
}

const initialCart: Cart = [];
