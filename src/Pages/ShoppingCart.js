import styled from "styled-components";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

export default function ShoppingCart({ shoppingCart, removeFromCart }) {
  return (
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
  );
}

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

const BackToShop = styled(Link)`
  color: black;
  font-size: xx-large;
  text-align: center;
  width: 100%;
  display: inline-block;
  margin-top: 5rem;
`;
