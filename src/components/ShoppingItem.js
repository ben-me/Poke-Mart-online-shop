import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ShoppingItem({ shopItem, onAddToCart }) {
  const [itemDetail, setItemDetail] = useState({});
  const detailURL = shopItem.url;

  useEffect(() => {
    try {
      fetch(detailURL)
        .then((response) => response.json())
        .then((data) => {
          const newItem = {
            name: data.name,
            image: data.sprites.default,
            cost: data.cost,
          };
          setItemDetail(newItem);
        });
    } catch (error) {
      console.log(error);
    }
  }, [detailURL]);

  function handleClick() {
    onAddToCart(itemDetail);
  }

  return <ProductCard itemDetail={itemDetail} handleClick={handleClick} />;
}
