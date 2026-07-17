function ProductCard({ product }) {
  return (
    <div className="product-card">
      <span className="category">
        📦 {product.category}
      </span>

      <h3>{product.name}</h3>

      <div className="price">
        ${product.price.toLocaleString()}
      </div>

      <button>View Details</button>
    </div>
  );
}

export default ProductCard;