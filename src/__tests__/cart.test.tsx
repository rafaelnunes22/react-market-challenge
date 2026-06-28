import { beforeEach, describe, it, expect } from "vitest";
import { screen, fireEvent, render, within } from "@testing-library/react";
import App from "../App";

// function initializeRender(children: ReactElement) {
//   return <CartProvider>{children}</CartProvider>;
// }

describe("Cart Component", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should render cart", async () => {
    // TODO: it that cart items are rendered
    const cart = await screen.findByText("Cart");
    expect(cart).toBeTruthy();
  });

  it("should add items to cart", async () => {
    // TODO: it that cart items are rendered
    const productList = await screen.findByText("Products");
    expect(productList).toBeTruthy();

    const cart = await screen.findByText("Cart");
    expect(cart).toBeTruthy();

    const notebook = await screen.findByTestId("product-Notebook");
    expect(notebook).toBeTruthy();

    const addToCartButton = await within(notebook).findByText("Add to cart");

    if (addToCartButton) {
      fireEvent.click(addToCartButton);
    }

    let cartItem = await screen.findByTestId("cart-item-Notebook");
    expect(cartItem).toBeTruthy();

    const cartItemQuantity = await within(cartItem).findByText(1);
    expect(cartItemQuantity).toBeTruthy();

    if (addToCartButton) {
      fireEvent.click(addToCartButton);
    }

    const cartItemQuantity2 = await within(cartItem).findByText("2");
    expect(cartItemQuantity2).toBeTruthy();
  });

  it("calls onRemove when remove button is clicked", async () => {
    const productList = await screen.findByText("Products");
    expect(productList).toBeTruthy();

    const cart = await screen.findByText("Cart");
    expect(cart).toBeTruthy();

    const notebook = await screen.findByTestId("product-Notebook");
    expect(notebook).toBeTruthy();

    const addToCartButton = await within(notebook).findByText("Add to cart");

    for (let i = 0; i < 3; i++) {
      if (addToCartButton) {
        fireEvent.click(addToCartButton);
      }
    }

    let cartItem = await screen.findByTestId("cart-item-Notebook");
    expect(cartItem).toBeTruthy();

    let cartItemQuantity = await within(cartItem).findByText("3");
    expect(cartItemQuantity).toBeTruthy();

    const cartItemRemoveButton =
      await within(cartItem).findByText("Remove from cart");

    if (cartItemRemoveButton) {
      fireEvent.click(cartItemRemoveButton);
    }

    cartItem = await screen.findByTestId("cart-item-Notebook");
    cartItemQuantity = await within(cartItem).findByText("2");

    expect(cartItemQuantity).toBeTruthy();

    for (let i = 0; i < 2; i++) {
      if (cartItemRemoveButton) {
        fireEvent.click(cartItemRemoveButton);
      }
    }

    expect(screen.queryByTestId("cart-item-Notebook")).toBeNull();
  });

  it("displays correct total price", async () => {
    const totalPrice = 7501.77;
    const productList = await screen.findByText("Products");
    expect(productList).toBeTruthy();

    const cart = await screen.findByText("Cart");
    expect(cart).toBeTruthy();

    const notebook = await screen.findByTestId("product-Notebook");
    expect(notebook).toBeTruthy();

    const addToCartButton = await within(notebook).findByText("Add to cart");

    for (let i = 0; i < 3; i++) {
      if (addToCartButton) {
        fireEvent.click(addToCartButton);
      }
    }

    const cartItem = await screen.findByTestId("cart-item-Notebook");
    expect(cartItem).toBeTruthy();

    const displayedTotalPrice = await within(cartItem).findByText(totalPrice);
    expect(displayedTotalPrice).toBeTruthy();
  });
});
