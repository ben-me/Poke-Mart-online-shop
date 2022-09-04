import { useEffect, useState } from 'react';
import './App.css';
import ShoppingItem from './components/ShoppingItem';

function App() {
  const itemAPI = 'https://pokeapi.co/api/v2/item/';
  const [shopInventory, setShopInventory] = useState([]); 

  useEffect(() => {
    fetch(itemAPI).then((response) => response.json())
    .then((data) => setShopInventory(data.results));
  }, [])

  return (
    <div className="App">
      <h1>Poké Mart Online Shop</h1>
      <ul>
        {shopInventory.map((item) => <ShoppingItem key={item.name} shopItem={item} />)}
      
      </ul>
    </div>
  );
}

export default App;
