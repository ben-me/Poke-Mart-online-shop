import styled from "styled-components";

export default function ProductCard({
  itemDetail,
  handleClick,
  isInCart = false,
}) {
  return (
    <Listelement>
      <img src={itemDetail.image} alt="" />
      {itemDetail.name} <p>{itemDetail.cost}</p>
      <Button type="button" onClick={handleClick}>
        {isInCart ? "Remove Item" : "Add Item"}
      </Button>
    </Listelement>
  );
}

const Listelement = styled.li`
   {
    padding: 20px;
    border: 1px black solid;
    background-color: white;
    border-radius: 15px;
    width: 250px;
    height: 120px;
    padding: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;

    img {
      grid-row: 1 / 4;
      width: 60%;
      object-fit: contain;
    }
    p {
      margin: 0;
    }
  }
`;
const Button = styled.button`
  border: 1px solid black;
  border-radius: 5px;
`;
