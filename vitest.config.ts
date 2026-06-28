import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Emulates a browser environment using jsdom
    environment: "jsdom",
    // Optional: Enables global test APIs like describe, it, expect (similar to Jest)
    globals: true,
  },
});
