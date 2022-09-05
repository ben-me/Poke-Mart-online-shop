import { useEffect, useState } from "react"
import styled from "styled-components";

export default function ShoppingItem({shopItem, onAddToCart}){
    const [itemDetail, setItemDetail] = useState({})
    const detailURL = shopItem.url;

    useEffect(() => {
        fetch(detailURL).then((response) => response.json())
        .then((data) => {
            const newItem = {
                name: data.name,
                image: data.sprites.default,
                cost: data.cost
            }
            setItemDetail(newItem);
        });
    }, [detailURL])

    function handleClick() {
        onAddToCart(itemDetail);
    }


    return <Listelement><img src={itemDetail.image} alt=""/>{shopItem.name} <p>{itemDetail.cost}</p> <button type="button" onClick={handleClick} >Add Item</button></Listelement>
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
    grid-template-rows: 1fr 1fr 1fr;
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

const Button = styled.button`
    background:none;
    border:1px solid black;
    border-radius: 5px;
`