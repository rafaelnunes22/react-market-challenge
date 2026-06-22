# react-market-challenge

React Product List &amp; Cart Component Challenge

## Welcome to the Fetchly React challenge!

### Overview

You are tasked with building a React component that displays a list of products fetched from a mock API and allows users to add products to a cart. The UI should show the product list, enable adding/removing items from the cart, and display the cart's contents and total price.

### Requirements

- Fetch product data from a mock API endpoint (/api/products).
- Display a list of products with their name, price, and an 'Add to Cart' button.
- Implement a cart UI that shows added products, their quantities, and the total price.
- Allow users to remove products from the cart.
- Show loading and error states during data fetch.

### API Contract

Endpoint: /api/products

- Method: GET
- Response: JSON array of products
  - Each product: { id: string, name: string, price: number }

### Instructions

1. Implement the logic to fetch products and display them in a list.
2. Implement cart logic (add, remove, update quantity, calculate total).
3. Show loading and error states appropriately.
4. Organize your code for clarity and maintainability.

### What to Submit

- Complete the stubbed implementation files.
- Complete the stubbed test files with appropriate test logic.
- Do not include any actual API calls (simulate as needed).

Do NOT include any solution code or examples in your submission.

## React Cheatsheet

### Component Basics

- function ComponentName(props) { /_ ... _/ }
- useState(initialValue) for state
- useEffect(() => { /_ ... _/ }, [deps]) for side effects
  Fetching Data
- Use fetch(url) or axios.get(url)
- Handle loading and error states
  Rendering Lists
- Use .map() to render arrays
- Each child in a list should have a unique key prop
  Event Handling
- Use onClick, onChange, etc.
- Pass event handlers as props
  Conditional Rendering
- Use ternary expressions or && for conditional UI
  Common Patterns
- Lifting state up for shared data
- Passing props to child components
- Using context for global state (optional)
  Testing (Jest/React Testing Library)
- describe('Component', () => { ... })
- test('should do something', () => { ... })
- Use render(), fireEvent, screen from RTL

Refer to the official React documentation for more details on hooks, component lifecycle, and advanced patterns.
