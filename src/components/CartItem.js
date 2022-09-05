import styled from "styled-components"

export default function CartItem({itemInCart, onRemoveFromCart}){
    
    
    function handleClick(){
        onRemoveFromCart(itemInCart);
    }

    return <Listelement><img src={itemInCart.image}/>{itemInCart.name} <button type='button' onClick={handleClick}>Remove Item</button></Listelement>
}

const Listelement = styled.li`
{
    padding: 20px;
    border: 1px black solid;
    background-color:white;
    border-radius: 15px;
    width: 250px;
    height: 120px;
    padding: 5px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items:center;
    align-items:center;


    img {
        grid-row: 1 / 4;
        width: 60%;
        object-fit:contain;
    }
    p{
        margin:0;
    }
}
`