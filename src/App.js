import { useEffect, useState } from "react";
import "./App.css";
import ShoppingItem from "./components/ShoppingItem";
import styled from "styled-components";
import CartItem from "./components/CartItem";
import { Link, Route, Routes } from "react-router-dom";
import cart from "./assets/cart.png";

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
            <>
              <h2>Cart Items</h2>
              <UnorderedList>
                {shoppingCart.map((item) => (
                  <CartItem
                    key={item.name}
                    itemInCart={item}
                    onRemoveFromCart={removeFromCart}
                  />
                ))}
              </UnorderedList>
              <BackToShop to="/"> Back to the Shop</BackToShop>
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <StyledLink to="/shopping-cart">
                <CartImage src={cart} alt="" />
                <AmountOfItems>{shoppingCart.length}</AmountOfItems>
              </StyledLink>
              <h2>Shop Items</h2>
              <UnorderedList>
                {shopInventory.map((item) => (
                  <ShoppingItem
                    key={item.name}
                    shopItem={item}
                    onAddToCart={addToCart}
                  />
                ))}
              </UnorderedList>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

const UnorderedList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;
  gap: 20px;
  padding: 0;
  margin: 0 auto;
  justify-items: center;

  * {
    box-sizing: border-box;
  }
`;

const Header = styled.h1`
  text-align: center;
`;

const CartImage = styled.img`
   {
    display: block;
    width: 150px;
    max-width: 100%;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  margin-right: 0;
  margin-left: auto;
  width: 200px;
  text-decoration: none;
  position: relative;
`;

const BackToShop = styled(Link)`
  color: black;
  font-size: xx-large;
  text-align: center;
  width: 100%;
  display: inline-block;
  margin-top: 5rem;
`;

const AmountOfItems = styled.p`
  border: solid black 1px;
  background-color: red;
  border-radius: 50%;
  width: 20px;
  color: black;
  text-align: center;
  position: absolute;
  right: 10rem;
  bottom: -5px;
`;
