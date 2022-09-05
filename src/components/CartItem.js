import ProductCard from "./ProductCard";

export default function CartItem({ itemInCart, onRemoveFromCart }) {
  function handleClick() {
    onRemoveFromCart(itemInCart);
  }

  return (
    <ProductCard
      itemDetail={itemInCart}
      handleClick={handleClick}
      isInCart={true}
    />
  );
}
