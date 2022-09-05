import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ShoppingCart from "./Pages/ShoppingCart";

function App() {
  const itemAPI = "https://pokeapi.co/api/v2/item/";
  const [shopInventory, setShopInventory] = useState([]);
  const [shoppingCart, setShopppingCart] = useState([]);

  useEffect(() => {
    fetch(itemAPI)
      .then((response) => response.json())
      .then((data) => setShopInventory(data.results));
  }, []);

  function addToCart(newCartItem) {
    const isAlreadyThere = shoppingCart.find(
      (item) => item.name === newCartItem.name
    );
    if (isAlreadyThere) {
      return;
    } else {
      setShopppingCart([newCartItem, ...shoppingCart]);
    }
  }

  function removeFromCart(deleteItem) {
    const filteredCart = shoppingCart.filter(
      (item) => item.name !== deleteItem.name
    );
    setShopppingCart(filteredCart);
  }

  return (
    <div className="App">
      <Header>Poké Mart Online Shop</Header>

      <Routes>
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCart
              shoppingCart={shoppingCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/"
          element={
            <Home
              shoppingCart={shoppingCart}
              shopInventory={shopInventory}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

const Header = styled.h1`
  text-align: center;
`;
