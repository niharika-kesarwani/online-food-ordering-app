import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { MenuProvider, useMenu } from "./contexts/menu-context.jsx";
import { CartProvider, useCart } from "./contexts/cart-context.jsx";

export { useMenu, useCart };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MenuProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </MenuProvider>
    </Router>
  </React.StrictMode>
);
