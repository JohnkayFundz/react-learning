import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    console.log("Adding to cart:", product);

    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div className="product-card">
      <div className="category">
        📦 {product.category}
      </div>

      <h3>{product.name}</h3>

      <div className="price">
        ${product.price.toLocaleString()}
      </div>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;