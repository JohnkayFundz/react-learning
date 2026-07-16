function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-category">
        📦 {product.category}
      </div>

      <h3>{product.name}</h3>

      <h2>${product.price}</h2>
    </div>
  );
}

export default ProductCard;