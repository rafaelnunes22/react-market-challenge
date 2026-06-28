import "./App.css";
import { ProductList } from "./components/products/products";
import { CartComponent } from "./components/cart/cartComponent";
import { CartProvider } from "./contexts/productsContext";

function App() {
  return (
    <CartProvider>
      <div>
        <ProductList />
        <CartComponent />
      </div>
    </CartProvider>
  );
}

export default App;
