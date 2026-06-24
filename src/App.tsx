import "./App.css";
import { ProductList } from "./components/products/products";
import { CartComponent } from "./components/cart/cartComponent";

function App() {
  return (
    <div>
      <ProductList />
      <CartComponent />
    </div>
  );
}

export default App;
