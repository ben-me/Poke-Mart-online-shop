import { useEffect, useState } from 'react';
import './App.css';
import ShoppingItem from './components/ShoppingItem';
import styled from 'styled-components';

function App() {
  const itemAPI = 'https://pokeapi.co/api/v2/item/';
  const [shopInventory, setShopInventory] = useState([]); 

  useEffect(() => {
    fetch(itemAPI).then((response) => response.json())
    .then((data) => setShopInventory(data.results));
  }, [])

  return (
    <div className="App">
      <Header>Poké Mart Online Shop</Header>
      <UnorderedList>
        {shopInventory.map((item) => <ShoppingItem key={item.name} shopItem={item} />)}
      
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
