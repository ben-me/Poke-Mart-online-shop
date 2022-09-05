import cart from "../assets/cart.png";
import ShoppingItem from "../components/ShoppingItem";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home({ shoppingCart, shopInventory, addToCart }) {
  return (
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

const StyledLink = styled(Link)`
  display: block;
  margin-right: 0;
  margin-left: auto;
  width: 200px;
  text-decoration: none;
  position: relative;
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

const CartImage = styled.img`
   {
    display: block;
    width: 150px;
    max-width: 100%;
  }
`;
