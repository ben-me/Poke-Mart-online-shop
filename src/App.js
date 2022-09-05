import { useEffect, useState } from 'react';
import './App.css';
import ShoppingItem from './components/ShoppingItem';
import styled from 'styled-components';
import CartItem from './components/CartItem';

function App() {
  const itemAPI = 'https://pokeapi.co/api/v2/item/';
  const [shopInventory, setShopInventory] = useState([]); 
  const [shoppingCart, setShopppingCart] = useState([]);

  useEffect(() => {
    fetch(itemAPI).then((response) => response.json())
    .then((data) => setShopInventory(data.results));
  }, [])

  function addToCart(newCartItem) {
    const isAlreadyThere = shoppingCart.find(item => item.name === newCartItem.name)
    if (isAlreadyThere) {
      return;
    } else {
      setShopppingCart([newCartItem, ...shoppingCart]);
    }
  }

  function removeFromCart(deleteItem) {
    const filteredCart = shoppingCart.filter(item => item.name !== deleteItem.name);
    setShopppingCart(filteredCart);
  }

  return (
    <div className="App">
      <Header>Poké Mart Online Shop</Header>
      <h2>Cart Items</h2>
      <UnorderedList>
        {shoppingCart.map((item) => <CartItem key={item.name} itemInCart={item} onRemoveFromCart={removeFromCart} />)}
      </UnorderedList>
      <h2>Shop Items</h2>
      <UnorderedList>
        {shopInventory.map((item) => <ShoppingItem key={item.name} shopItem={item} onAddToCart={addToCart}/>)}
      </UnorderedList>
    </div>
  );
}

export default App;

const UnorderedList = styled.ul`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style:none;
  gap: 20px;
  padding: 0;
  margin: 0 auto;
  justify-items: center;

* {
  box-sizing: border-box;
}

`

const Header = styled.h1`
  text-align: center;
`
