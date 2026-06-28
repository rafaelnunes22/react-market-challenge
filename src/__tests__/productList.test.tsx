import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import mock_products from "../mock/mockdata.json";
import type { Product } from "../types/Product";
import { getProducts } from "../api/products";

vi.mock("../api/products", () => ({
  getProducts: vi.fn(),
}));

describe("ProductList Component", () => {
  it("should render ProductList items", async () => {
    render(<App />);

    mock_products.forEach(async (item: Product) => {
      const productName = await screen.findByText(item.name);
      const productPrice = await screen.findByText(item.price);

      expect(productName).toBeTruthy();
      expect(productPrice).toBeTruthy();
    });
  });

  it("should render loading message", async () => {
    render(<App />);
    const loading = await screen.findByText("Loading...");
    expect(loading).toBeTruthy();
  });

  it("should render error message", async () => {
    vi.mocked(getProducts).mockRejectedValueOnce(
      new Error("Failed to fetch products"),
    );

    render(<App />);

    const error = await screen.findByText("Failed to fetch products");
    expect(error).toBeTruthy();
  });
});
